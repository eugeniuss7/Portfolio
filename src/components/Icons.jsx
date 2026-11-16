const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const ArrowRight = ({ size = 18 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const ChevronLeft = () => (
  <svg {...base} width="20" height="20">
    <path d="M15 6l-6 6 6 6" />
  </svg>
);

export const ChevronRight = () => (
  <svg {...base} width="20" height="20">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const Mail = () => (
  <svg {...base} width="20" height="20">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const Copy = () => (
  <svg {...base} width="20" height="20">
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 0 1 2-2h9" />
  </svg>
);

export const Close = () => (
  <svg {...base} width="20" height="20">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const ArrowUpRight = () => (
  <svg {...base} width="18" height="18">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const Play = () => (
  <svg {...base} width="18" height="18" fill="currentColor" stroke="none">
    <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z" />
  </svg>
);

export const Pause = () => (
  <svg {...base} width="18" height="18" fill="currentColor" stroke="none">
    <rect x="5.5" y="4" width="4.5" height="16" rx="1.2" />
    <rect x="14" y="4" width="4.5" height="16" rx="1.2" />
  </svg>
);

export const Volume = () => (
  <svg {...base} width="18" height="18">
    <path d="M11 5 6 9H3v6h3l5 4V5z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
  </svg>
);

export const VolumeOff = () => (
  <svg {...base} width="18" height="18">
    <path d="M11 5 6 9H3v6h3l5 4V5z" />
    <path d="m16 9 5 6M21 9l-5 6" />
  </svg>
);

const LAYER_PATHS = {
  ai: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M19 16v4" />
      <path d="M17 18h4" />
    </>
  ),
  code: (
    <>
      <path d="M8 7l-5 5 5 5" />
      <path d="M16 7l5 5-5 5" />
      <path d="M13.5 5l-3 14" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </>
  ),
  graph: (
    <>
      <circle cx="5" cy="18" r="2" />
      <circle cx="11" cy="10" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="18" cy="15" r="2" />
      <path d="M6.2 16.4l3.6-4.8M12.8 9l4.5-3M12.6 11.2l3.8 2.8" />
    </>
  ),
};

export const LayerIcon = ({ name }) => (
  <svg {...base} width="24" height="24">
    {LAYER_PATHS[name]}
  </svg>
);
