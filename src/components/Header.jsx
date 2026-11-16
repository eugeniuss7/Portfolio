import { useEffect, useState } from "react";
import { NAV, profile } from "../data";
import { ArrowRight } from "./Icons";

// Highlights the nav link for whichever section is currently under the header.
function useActiveSection() {
  const [active, setActive] = useState(NAV[0].id);

  useEffect(() => {
    const onScroll = () => {
      const line = window.scrollY + 140;
      let current = NAV[0].id;
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}

function Header() {
  const active = useActiveSection();

  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <a href="#top" className="brand">
          <span className="monogram" aria-hidden="true">{profile.initials}</span>
          <span className="brand-text">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-sub">{profile.tagline}</span>
          </span>
        </a>
        <nav aria-label="Sections" className="nav">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={n.id === active ? "nav-link active" : "nav-link"} aria-current={n.id === active ? "true" : undefined}>
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-outline btn-sm">
          Hire me <ArrowRight />
        </a>
      </div>
    </header>
  );
}

export default Header;
