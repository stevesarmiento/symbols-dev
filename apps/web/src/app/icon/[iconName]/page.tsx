import React from "react";
import * as Icons from "symbols-react";
import Link from "next/link";
import { IconDisplay } from "@/components/IconDisplay";
import { IconDetailActions } from "@/components/IconDetailActions";

interface IconComponentProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number | string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
}

function toNumberLike(value: unknown) {
  if (typeof value === "number") return value;
  if (typeof value !== "string") return null;
  if (!/^\d+(\.\d+)?$/.test(value)) return null;
  return Number(value);
}

function serializeJsxAttributeValue(value: unknown) {
  if (value === true) return "";
  if (typeof value === "number") return `{${value}}`;
  if (typeof value === "string") {
    if (value.includes("\n") || value.includes("\r") || value.includes('"')) {
      return `{${JSON.stringify(value)}}`;
    }
    return `"${value}"`;
  }
  return null;
}

function serializeSvgElementToJsx(
  element: React.ReactElement,
  indentSize: number,
): string {
  if (typeof element.type !== "string") return "";

  const indent = " ".repeat(indentSize);
  const tagName = element.type;
  const props = element.props as Record<string, unknown>;

  const attributes: string[] = [];
  for (const [name, value] of Object.entries(props)) {
    if (
      name === "children" ||
      name === "ref" ||
      name === "key" ||
      name === "dangerouslySetInnerHTML"
    )
      continue;
    if (value === undefined || value === null || value === false) continue;

    const serialized = serializeJsxAttributeValue(value);
    if (serialized === null) continue;
    if (serialized === "") {
      attributes.push(name);
      continue;
    }
    attributes.push(`${name}=${serialized}`);
  }

  const attributesString = attributes.length ? ` ${attributes.join(" ")}` : "";

  const children = props.children as React.ReactNode;
  if (children === undefined || children === null || children === false)
    return `${indent}<${tagName}${attributesString} />`;

  const childString = serializeSvgNodeToJsx(children, indentSize + 2);
  if (!childString) return `${indent}<${tagName}${attributesString} />`;

  return `${indent}<${tagName}${attributesString}>\n${childString}\n${indent}</${tagName}>`;
}

function serializeSvgNodeToJsx(node: React.ReactNode, indentSize: number): string {
  if (node === undefined || node === null || node === false || node === true)
    return "";

  if (typeof node === "string" || typeof node === "number") {
    return `${" ".repeat(indentSize)}${node}`;
  }

  if (Array.isArray(node)) {
    return node
      .map((child) => serializeSvgNodeToJsx(child, indentSize))
      .filter(Boolean)
      .join("\n");
  }

  if (React.isValidElement(node)) {
    return serializeSvgElementToJsx(node, indentSize);
  }

  return "";
}

function renderIconToSvgElement(
  IconComponent: React.ComponentType<IconComponentProps>,
) {
  const maybeForwardRefRender = (IconComponent as unknown as { render?: Function })
    .render;

  const svgElement =
    typeof maybeForwardRefRender === "function"
      ? maybeForwardRefRender({ fill: "currentColor", stroke: "none" }, null)
      : null;

  if (!React.isValidElement(svgElement)) return null;
  if (typeof svgElement.type !== "string" || svgElement.type !== "svg")
    return null;

  return svgElement;
}

function buildReactComponentSnippet(iconName: string, svgElement: React.ReactElement) {
  const props = svgElement.props as Record<string, unknown>;
  const viewBox =
    typeof props.viewBox === "string" && props.viewBox ? props.viewBox : "0 0 24 24";

  const defaultWidth = toNumberLike(props.width) ?? 24;
  const defaultHeight = toNumberLike(props.height) ?? 24;
  const stroke = typeof props.stroke === "string" ? props.stroke : "none";
  const strokeWidth = props.strokeWidth ?? 2;
  const strokeLinecap =
    typeof props.strokeLinecap === "string" ? props.strokeLinecap : "round";
  const strokeLinejoin =
    typeof props.strokeLinejoin === "string" ? props.strokeLinejoin : "round";

  const childrenJsx =
    serializeSvgNodeToJsx(props.children as React.ReactNode, 6) || "";

  return `import * as React from "react";

export interface ${iconName}Props extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number | string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
}

export function ${iconName}({
  className,
  width = ${defaultWidth},
  height = ${defaultHeight},
  fill = "currentColor",
  stroke = "${stroke}",
  strokeWidth = ${typeof strokeWidth === "number" ? strokeWidth : JSON.stringify(strokeWidth)},
  strokeLinecap = "${strokeLinecap}",
  strokeLinejoin = "${strokeLinejoin}",
  ...props
}: ${iconName}Props) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="${viewBox}"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
${childrenJsx || "      "}
    </svg>
  );
}
`;
}

function toIconExportNameFromSlug(value: string) {
  const parts = value
    .trim()
    .split(/[-_ ]+/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1));

  if (parts.length === 0) return "";
  return `Icon${parts.join("")}`;
}

function resolveIconComponent(
  iconParam: unknown,
  icons: Record<string, React.ComponentType<IconComponentProps> | undefined>,
) {
  if (typeof iconParam !== "string") return null;

  const trimmed = iconParam.trim();
  if (!trimmed) return null;

  const candidates = new Set<string>();
  candidates.add(trimmed);

  // Handle lowercase "icon..." prefix.
  if (trimmed.toLowerCase().startsWith("icon") && !trimmed.startsWith("Icon")) {
    const rest = trimmed.slice("icon".length);
    if (rest) {
      candidates.add(`Icon${rest.charAt(0).toUpperCase()}${rest.slice(1)}`);
      const restSlugCandidate = toIconExportNameFromSlug(rest);
      if (restSlugCandidate) candidates.add(restSlugCandidate);
    }
  }

  // Handle URLs that omit the "Icon" prefix or use slugs.
  if (!trimmed.startsWith("Icon")) {
    candidates.add(`Icon${trimmed.charAt(0).toUpperCase()}${trimmed.slice(1)}`);
    const slugCandidate = toIconExportNameFromSlug(trimmed);
    if (slugCandidate) candidates.add(slugCandidate);
  }

  for (const candidateName of candidates) {
    const IconComponent = icons[candidateName];
    if (IconComponent) return { iconName: candidateName, IconComponent };
  }

  // Case-insensitive exact match.
  const lower = trimmed.toLowerCase();
  const exactKey = Object.keys(icons).find((key) => key.toLowerCase() === lower);
  if (exactKey) {
    const IconComponent = icons[exactKey];
    if (IconComponent) return { iconName: exactKey, IconComponent };
  }

  // Match against export name without "Icon" prefix.
  const noPrefixKey = Object.keys(icons).find((key) => {
    if (!key.startsWith("Icon")) return false;
    return key.slice("Icon".length).toLowerCase() === lower;
  });
  if (noPrefixKey) {
    const IconComponent = icons[noPrefixKey];
    if (IconComponent) return { iconName: noPrefixKey, IconComponent };
  }

  return null;
}

interface IconDetailPageProps {
  params:
    | {
        iconName?: string;
      }
    | Promise<{
        iconName?: string;
      }>;
}

export default async function IconDetailPage({ params }: IconDetailPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const iconParam = resolvedParams?.iconName;
  const iconsRecord = Icons as Record<
    string,
    React.ComponentType<IconComponentProps> | undefined
  >;
  const resolved = resolveIconComponent(iconParam, iconsRecord);
  const IconComponent = resolved?.IconComponent;

  if (!IconComponent) {
    const searchValue = typeof iconParam === "string" ? iconParam.trim() : "";
    const suggestions = searchValue
      ? Object.keys(iconsRecord)
          .filter(
            (key) =>
              key.startsWith("Icon") &&
              key.toLowerCase().includes(searchValue.toLowerCase()),
          )
          .slice(0, 12)
      : [];

    return (
      <div className="flex flex-col items-center justify-center min-h-dvh bg-zinc-900/50 text-foreground p-8">
        <h1 className="text-2xl font-semibold mb-4">Icon Not Found</h1>
        <p className="text-white/60 text-sm text-center max-w-md">
          We couldn&apos;t find a symbol for{" "}
          <span className="font-mono text-white/90">
            &quot;{typeof iconParam === "string" ? iconParam : ""}&quot;
          </span>
          . Use an export name like{" "}
          <span className="font-mono text-white/90">IconPaperclip</span> or a slug
          like{" "}
          <span className="font-mono text-white/90">paperclip-fill</span>.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <Link
            href="/"
            className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15 transition-colors"
          >
            Back to search
          </Link>
          {searchValue ? (
            <Link
              href={`/dashboard?search=${encodeURIComponent(searchValue)}`}
              className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15 transition-colors"
            >
              Search &quot;{searchValue}&quot;
            </Link>
          ) : null}
        </div>

        {suggestions.length ? (
          <div className="mt-8 w-full max-w-lg">
            <p className="text-xs text-white/40 font-mono mb-3">
              Suggestions
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((name) => (
                <Link
                  key={name}
                  href={`/icon/${name}`}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {name.replace("Icon", "")}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  const iconName =
    resolved?.iconName ?? (typeof iconParam === "string" ? iconParam : "");
  const svgElement = renderIconToSvgElement(IconComponent);
  const componentCode = svgElement
    ? buildReactComponentSnippet(iconName, svgElement)
    : `import { ${iconName} } from \"symbols-react\";\n\nexport function Example() {\n  return <${iconName} width={24} height={24} fill=\"currentColor\" />;\n}\n`;

  return (
    <div className="flex min-h-[calc(100dvh-10rem)] flex-col items-center justify-start bg-zinc-950 pt-12 motion-preset-blur-up-md motion-preset-fade-md motion-scale-in-90 motion-ease-spring-snappy motion-duration-150">
      <div className="w-full max-w-lg">
        <IconDetailActions iconName={iconName} componentCode={componentCode}>
          <IconDisplay IconComponent={IconComponent} size={228} fillColor="#FFFFFF" />
        </IconDetailActions>
      </div>
    </div>
  );
}