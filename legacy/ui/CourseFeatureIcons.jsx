// [AI-FILE-PURPOSE]: Ícones vetoriais outline limpos e semânticos para as características dos cards de cursos.

export function CourseFeatureIcon({ name, className = "w-4 h-4" }) {
  const strokeProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true"
  };

  switch (name) {
    case "grad-cap":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "user":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "certificate":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <rect x="3" y="3" width="18" height="13" rx="2" />
          <path d="m9 16 3 5 3-5" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );
    case "headset":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
    case "laptop":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case "eye":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case "wave":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M2 14c4-6 8-6 12 0s8 6 12 0" />
          <path d="M2 9c4-4 8-4 12 0s8 4 12 0" />
        </svg>
      );
    default:
      return null;
  }
}
