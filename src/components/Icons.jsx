const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const Chip = ({ size = 28, stroke, width = 1.6 }) => (
  <svg {...base} width={size} height={size} stroke={stroke || "currentColor"} strokeWidth={width}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
  </svg>
);

export const Code = ({ size = 28, stroke, width = 1.6 }) => (
  <svg {...base} width={size} height={size} stroke={stroke || "currentColor"} strokeWidth={width}>
    <path d="m8 7-5 5 5 5" />
    <path d="m16 7 5 5-5 5" />
    <path d="m14 4-4 16" />
  </svg>
);

export const Graph = ({ size = 28, stroke, width = 1.6 }) => (
  <svg {...base} width={size} height={size} stroke={stroke || "currentColor"} strokeWidth={width}>
    <circle cx="5" cy="18" r="2" />
    <circle cx="12" cy="9" r="2" />
    <circle cx="19" cy="14" r="2" />
    <circle cx="19" cy="4" r="2" />
    <path d="m6.4 16.6 4.2-6.2M13.7 10.2l3.6 2.6M13.4 7.6l4.2-2.2" />
  </svg>
);

export const TagIcon = ({ tag, ...props }) =>
  tag === "Hardware" ? <Chip {...props} /> : tag === "Software" ? <Code {...props} /> : <Graph {...props} />;

export const Download = () => (
  <svg {...base} width="16" height="16" strokeWidth="2">
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

export const ArrowRight = ({ size = 18, stroke }) => (
  <svg {...base} width={size} height={size} stroke={stroke || "currentColor"} strokeWidth="2">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const ArrowUpRight = () => (
  <svg {...base} width="18" height="18" strokeWidth="2">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const ChevronLeft = () => (
  <svg {...base} width="18" height="18" strokeWidth="2">
    <path d="m15 6-6 6 6 6" />
  </svg>
);

export const ChevronRight = () => (
  <svg {...base} width="18" height="18" strokeWidth="2">
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const Photo = () => (
  <svg {...base} width="44" height="44" strokeWidth="1.4">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="9" cy="10" r="1.6" />
    <path d="m21 16-5-5-9 8" />
  </svg>
);

export const Medal = ({ stroke }) => (
  <svg {...base} width="20" height="20" stroke={stroke} strokeWidth="1.8">
    <circle cx="12" cy="9" r="6" />
    <path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" />
  </svg>
);

export const Send = () => (
  <svg {...base} width="20" height="20" strokeWidth="2">
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4 20-7z" />
  </svg>
);

export const Close = () => (
  <svg {...base} width="22" height="22" strokeWidth="2">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
