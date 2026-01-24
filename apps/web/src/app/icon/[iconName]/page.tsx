'use client' 

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams } from 'next/navigation';
import * as Icons from 'symbols-react'; 
import { IconProps } from '@/components/IconsList';  
import { toast } from "sonner";
import { motion } from 'framer-motion';
import { createRoot } from 'react-dom/client';
import { IconHeader } from '@/components/IconHeader';
import { IconDisplay } from '@/components/IconDisplay';
import { ComponentViewer } from '@/components/ComponentView';

interface IconDetailClientProps {
  iconName: string;
}

function IconDetailClient({ iconName }: IconDetailClientProps) {
  const [size] = useState<number>(228); 
  const [fillColor] = useState<string>("#FFFFFF"); 
  const [copied, setCopied] = useState(false);
  const [copiedComponent, setCopiedComponent] = useState(false);
  const [svgContent, setSvgContent] = useState<string>('<!-- Loading SVG content... -->');

  const IconComponent = useMemo(() => {
    if (typeof iconName === 'string' && iconName.startsWith('Icon')) {
      return Icons[iconName as keyof typeof Icons] as React.ComponentType<IconProps>;
    }
    return null;
  }, [iconName]);

  // Extract SVG content using DOM manipulation
  const extractSVGContent = useCallback(async (): Promise<string> => {
    if (!IconComponent) return '<!-- Icon not found -->';
    
    try {
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '-9999px';
      document.body.appendChild(tempContainer);

      const root = createRoot(tempContainer);
      
      return new Promise((resolve) => {
        root.render(
          React.createElement(IconComponent, { 
            width: 24, 
            height: 24, 
            fill: 'currentColor'
          })
        );

        setTimeout(() => {
          const svgElement = tempContainer.querySelector('svg');
          if (svgElement) {
            const content = svgElement.innerHTML;
            root.unmount();
            document.body.removeChild(tempContainer);
            resolve(content || '<!-- No SVG content found -->');
          } else {
            root.unmount();
            document.body.removeChild(tempContainer);
            resolve('<!-- SVG element not found -->');
          }
        }, 100);
      });
    } catch (error) {
      console.error('Error extracting SVG:', error);
      return '<!-- Error extracting SVG content -->';
    }
  }, [IconComponent]);

  useEffect(() => {
    if (IconComponent) {
      extractSVGContent().then(setSvgContent);
    }
  }, [IconComponent, extractSVGContent]);

  const transformSVGAttributes = (svgContent: string): string => {
    const attributeMap: Record<string, string> = {
      'fill-opacity': 'fillOpacity',
      'stroke-opacity': 'strokeOpacity',
      'stroke-width': 'strokeWidth',
      'stroke-linecap': 'strokeLinecap',
      'stroke-linejoin': 'strokeLinejoin',
      'stroke-dasharray': 'strokeDasharray',
      'stroke-dashoffset': 'strokeDashoffset',
      'stroke-miterlimit': 'strokeMiterlimit',
      'fill-rule': 'fillRule',
      'clip-rule': 'clipRule',
      'clip-path': 'clipPath',
      'color-interpolation': 'colorInterpolation',
      'color-interpolation-filters': 'colorInterpolationFilters',
      'color-profile': 'colorProfile',
      'color-rendering': 'colorRendering',
      'dominant-baseline': 'dominantBaseline',
      'enable-background': 'enableBackground',
      'font-family': 'fontFamily',
      'font-size': 'fontSize',
      'font-size-adjust': 'fontSizeAdjust',
      'font-stretch': 'fontStretch',
      'font-style': 'fontStyle',
      'font-variant': 'fontVariant',
      'font-weight': 'fontWeight',
      'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
      'glyph-orientation-vertical': 'glyphOrientationVertical',
      'horiz-adv-x': 'horizAdvX',
      'horiz-origin-x': 'horizOriginX',
      'image-rendering': 'imageRendering',
      'letter-spacing': 'letterSpacing',
      'lighting-color': 'lightingColor',
      'marker-end': 'markerEnd',
      'marker-mid': 'markerMid',
      'marker-start': 'markerStart',
      'overline-position': 'overlinePosition',
      'overline-thickness': 'overlineThickness',
      'paint-order': 'paintOrder',
      'panose-1': 'panose1',
      'pointer-events': 'pointerEvents',
      'rendering-intent': 'renderingIntent',
      'shape-rendering': 'shapeRendering',
      'stop-color': 'stopColor',
      'stop-opacity': 'stopOpacity',
      'strikethrough-position': 'strikethroughPosition',
      'strikethrough-thickness': 'strikethroughThickness',
      'text-anchor': 'textAnchor',
      'text-decoration': 'textDecoration',
      'text-rendering': 'textRendering',
      'underline-position': 'underlinePosition',
      'underline-thickness': 'underlineThickness',
      'unicode-bidi': 'unicodeBidi',
      'unicode-range': 'unicodeRange',
      'units-per-em': 'unitsPerEm',
      'v-alphabetic': 'vAlphabetic',
      'v-hanging': 'vHanging',
      'v-ideographic': 'vIdeographic',
      'v-mathematical': 'vMathematical',
      'vector-effect': 'vectorEffect',
      'vert-adv-y': 'vertAdvY',
      'vert-origin-x': 'vertOriginX',
      'vert-origin-y': 'vertOriginY',
      'word-spacing': 'wordSpacing',
      'writing-mode': 'writingMode',
      'x-height': 'xHeight'
    };

    let transformedContent = svgContent;
    Object.entries(attributeMap).forEach(([kebabCase, camelCase]) => {
      const regex = new RegExp(`\\b${kebabCase}=`, 'g');
      transformedContent = transformedContent.replace(regex, `${camelCase}=`);
    });

    return transformedContent;
  };

  const componentCode = useMemo(() => {
    if (!IconComponent) return '';
    
    const transformedSvgContent = transformSVGAttributes(svgContent);
    
    return `import React from 'react';

interface ${iconName}Props {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

export function ${iconName}({ 
  className, 
  width = 24, 
  height = 24, 
  fill = "currentColor" 
}: ${iconName}Props) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      ${transformedSvgContent}
    </svg>
  );
}`;
  }, [iconName, IconComponent, svgContent]);

  const handleCopy = () => {
    navigator.clipboard.writeText(iconName);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
    toast(
      <div className="inline-flex items-center gap-2">
        <Icons.IconCheckmarkCircleFill className="fill-green-500 w-[16px] h-[16px]" />
        <p><span className="opacity-50">You copied</span> {iconName.replace('Icon', '')} <span className="opacity-50">to clipboard</span></p>
      </div>
    );
  };

  const handleCopyComponent = () => {
    navigator.clipboard.writeText(componentCode);
    setCopiedComponent(true);
    setTimeout(() => setCopiedComponent(false), 2000);
    toast(
      <div className="inline-flex items-center gap-2">
        <Icons.IconCheckmarkCircleFill className="fill-green-500 w-[16px] h-[16px]" />
        <p><span className="opacity-50">Copied</span> React component <span className="opacity-50">to clipboard</span></p>
      </div>
    );
  };

  if (!IconComponent) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900/50 text-foreground p-8">
        <h1 className="text-2xl font-semibold mb-4">Icon Not Found</h1>
        <p>The icon &quot;{iconName}&quot; could not be loaded from the library.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-start bg-zinc-950 pt-12 motion-preset-blur-up-md motion-preset-fade-md motion-scale-in-90 motion-ease-spring-snappy motion-duration-150">
      <div className="w-full max-w-lg">
        <IconHeader 
          iconName={iconName}
          copied={copied}
          onCopy={handleCopy}
        />

        <IconDisplay 
          IconComponent={IconComponent}
          size={size}
          fillColor={fillColor}
        />

        <ComponentViewer 
          iconName={iconName}
          componentCode={componentCode}
          copiedComponent={copiedComponent}
          onCopyComponent={handleCopyComponent}
        />
      </div>
    </div>
  );
}

export default function IconDetailPage() {
  const params = useParams();
  const [clientIconName, setClientIconName] = useState<string | null>(null);

  useEffect(() => {
    if (params && typeof params.iconName === 'string') {
      setClientIconName(params.iconName);
    } else if (params && Array.isArray(params.iconName) && params.iconName.length > 0) {
      setClientIconName(params.iconName[0]);
    } else if (clientIconName === null && params) { 
        setClientIconName(""); 
    }
  }, [params, clientIconName]); 

  if (clientIconName === null) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-foreground p-8">
            <motion.svg
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-8 w-8 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </motion.svg>
        </div>
    );
  }
  
  return <IconDetailClient iconName={clientIconName} />;
} 