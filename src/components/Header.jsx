import { PAGES, profile } from "../data";
import { Download } from "./Icons";

// Without a hosted résumé yet, the button opens an email asking for one.
const resumeHref = profile.resume || `mailto:${profile.email}?subject=R%C3%A9sum%C3%A9%20request`;

function Header({ page, onNavigate }) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="monogram">{profile.initials}</div>
        <div className="brand-text">
          <div className="brand-name">{profile.name}</div>
          <div className="mono muted-sm">{profile.tagline}</div>
        </div>
      </div>
      <nav aria-label="Primary" className="nav">
        {PAGES.map((p) => (
          <button
            key={p.id}
            type="button"
            className={p.id === page ? "nav-btn active" : "nav-btn"}
            aria-current={p.id === page ? "page" : undefined}
            onClick={() => onNavigate(p.id)}
          >
            {p.label}
          </button>
        ))}
      </nav>
      <a className="resume" href={resumeHref} target={profile.resume ? "_blank" : undefined} rel="noreferrer">
        <Download />
        Résumé
      </a>
    </header>
  );
}

export default Header;
