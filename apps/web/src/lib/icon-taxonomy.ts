export const ICON_CATEGORY_IDS = [
  "brands",
  "communication",
  "devices",
  "files",
  "media",
  "security",
  "people",
  "commerce",
  "maps",
  "weather",
  "time",
  "health",
  "nature",
  "text",
  "arrows",
  "shapes_layout",
  "other",
] as const;

export type IconCategoryId = (typeof ICON_CATEGORY_IDS)[number];

export interface IconCategoryDefinition {
  id: IconCategoryId;
  label: string;

  /** Matches if any token equals one of these values. */
  anyTokens?: readonly string[];

  /** Matches if any token starts with one of these prefixes. */
  anyTokenPrefixes?: readonly string[];

  /** Matches if any token ends with one of these suffixes. */
  anyTokenSuffixes?: readonly string[];

  /** Matches if the first token equals one of these values. */
  anyFirstTokens?: readonly string[];

  /**
   * Matches if the lowercased icon name (without the `Icon` prefix) contains any of these substrings.
   * Useful for edge cases where tokenization may be lossy.
   */
  anySubstrings?: readonly string[];

  /** Matches if any regex matches the lowercased icon name (without the `Icon` prefix). */
  anyRegexes?: readonly RegExp[];
}

export const ICON_CATEGORIES: readonly IconCategoryDefinition[] = [
  {
    id: "brands",
    label: "Brands",
    anyTokens: ["logo"],
  },
  {
    id: "communication",
    label: "Communication",
    anyTokens: [
      "message",
      "messages",
      "bubble",
      "bubbles",
      "chat",
      "text",
      "sms",
      "phone",
      "iphone",
      "telephone",
      "envelope",
      "mail",
      "paperplane",
      "paperclip",
      "at",
      "bell",
      "megaphone",
    ],
  },
  {
    id: "devices",
    label: "Devices",
    anyTokens: [
      "iphone",
      "ipad",
      "mac",
      "macbook",
      "imac",
      "watch",
      "airpods",
      "airpod",
      "homepod",
      "homepodmini",
      "applevision",
      "vision",
      "tv",
      "display",
      "laptop",
      "desktop",
      "keyboard",
      "computermouse",
      "mouse",
      "trackpad",
      "printer",
      "scanner",
      "gamecontroller",
    ],
    anyTokenPrefixes: ["externaldrive", "internaldrive", "harddrive", "opticaldisc"],
  },
  {
    id: "files",
    label: "Files",
    anyTokens: [
      "folder",
      "document",
      "doc",
      "page",
      "paper",
      "book",
      "bookmark",
      "note",
      "notes",
      "clipboard",
      "tray",
      "archive",
      "archivebox",
      "inbox",
      "outbox",
      "bin",
      "trash",
      "zipper",
      "tag",
      "label",
    ],
    anyTokenPrefixes: ["list", "textdocument", "richtext"],
  },
  {
    id: "media",
    label: "Media",
    anyTokens: [
      "play",
      "pause",
      "stop",
      "record",
      "music",
      "speaker",
      "headphones",
      "mic",
      "microphone",
      "waveform",
      "camera",
      "video",
      "film",
      "tv",
      "photo",
      "photos",
    ],
    anyTokenPrefixes: ["airplay", "dotradiowaves"],
  },
  {
    id: "security",
    label: "Security",
    anyTokens: [
      "lock",
      "unlock",
      "key",
      "keyhole",
      "shield",
      "fingerprint",
      "faceid",
      "touchid",
      "passkey",
      "password",
    ],
  },
  {
    id: "people",
    label: "People",
    anyTokens: [
      "person",
      "people",
      "figure",
      "hand",
      "hands",
      "face",
      "eye",
      "eyes",
      "ear",
      "mouth",
      "nose",
    ],
    anyTokenPrefixes: ["person", "figure", "hand"],
  },
  {
    id: "commerce",
    label: "Commerce",
    anyTokens: [
      "cart",
      "bag",
      "basket",
      "gift",
      "credit",
      "card",
      "banknote",
      "barcode",
      "qrcode",
      "ticket",
      "tag",
    ],
    anyTokenSuffixes: ["sign"],
  },
  {
    id: "maps",
    label: "Maps",
    anyTokens: [
      "map",
      "location",
      "pin",
      "mappin",
      "globe",
      "compass",
      "building",
      "car",
      "bus",
      "tram",
      "train",
      "airplane",
    ],
  },
  {
    id: "weather",
    label: "Weather",
    anyTokens: [
      "sun",
      "moon",
      "cloud",
      "rain",
      "snow",
      "wind",
      "bolt",
      "tornado",
      "hurricane",
      "thermometer",
      "umbrella",
      "drop",
      "drops",
    ],
  },
  {
    id: "time",
    label: "Time",
    anyTokens: [
      "clock",
      "timer",
      "stopwatch",
      "hourglass",
      "alarm",
      "calendar",
      "date",
      "time",
    ],
  },
  {
    id: "health",
    label: "Health",
    anyTokens: [
      "heart",
      "cross",
      "bandage",
      "pills",
      "pill",
      "stethoscope",
      "medical",
      "ecg",
      "lungs",
      "brain",
    ],
  },
  {
    id: "nature",
    label: "Nature",
    anyTokens: [
      "leaf",
      "tree",
      "flower",
      "flame",
      "pawprint",
      "hare",
      "tortoise",
      "ant",
      "fish",
      "bird",
    ],
  },
  {
    id: "text",
    label: "Text",
    anyTokens: [
      "text",
      "textformat",
      "paragraph",
      "quote",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "list",
      "number",
      "abc",
      "123",
      "character",
      "keyboard",
    ],
    anyTokenPrefixes: ["textformat", "list"],
  },
  {
    id: "arrows",
    label: "Arrows",
    anyTokens: [
      "arrow",
      "chevron",
      "caret",
      "return",
      "gobackward",
      "goforward",
      "rotate",
      "repeat",
      "shuffle",
    ],
    anyTokenPrefixes: ["arrow", "chevron", "caret"],
  },
  {
    id: "shapes_layout",
    label: "Shapes & Layout",
    anyFirstTokens: [
      "square",
      "rectangle",
      "circle",
      "triangle",
      "hexagon",
      "octagon",
      "diamond",
      "star",
      "seal",
      "grid",
    ],
    anyTokens: ["grid", "layout", "sidebar", "menubar", "table", "columns"],
  },
  {
    id: "other",
    label: "Other",
  },
];

export const ICON_CATEGORY_BY_ID: Readonly<Record<IconCategoryId, IconCategoryDefinition>> =
  ICON_CATEGORIES.reduce(
    (acc, category) => {
      acc[category.id] = category;
      return acc;
    },
    {} as Record<IconCategoryId, IconCategoryDefinition>,
  );

export const ICON_CATEGORY_ID_SET: ReadonlySet<IconCategoryId> = new Set(ICON_CATEGORY_IDS);
