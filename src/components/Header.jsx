import { motion } from "framer-motion";
import { PAGES, profile } from "../data";
import { Download } from "./Icons";

// Without a hosted résumé yet, the button opens an email asking for one.
const resumeHref = profile.resume || `mailto:${profile.email}?subject=R%C3%A9sum%C3%A9%20request`;

const MotionSpan = motion.span;

function Header({ page, onNavigate }) {
  return (
    <header className="topbar">
      <button type="button" className="brand" onClick={() => onNavigate("home")} aria-label="Home">
        <span className="monogram">{profile.initials}</span>
        <span className="brand-text">
          <span className="brand-name">{profile.name}</span>
          <span className="brand-sub">{profile.tagline}</span>
        </span>
      </button>
      <nav aria-label="Primary" className="nav">
        {PAGES.map((p) => (
          <button
            key={p.id}
            type="button"
            className={p.id === page ? "nav-btn active" : "nav-btn"}
            aria-current={p.id === page ? "page" : undefined}
            onClick={() => onNavigate(p.id)}
          >
            {p.id === page && (
              <MotionSpan layoutId="nav-pill" className="nav-pill" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
            )}
            <span className="nav-label">{p.label}</span>
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
