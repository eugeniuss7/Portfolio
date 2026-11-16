import { useEffect, useState } from "react";
import { ROMAN, profile, projects } from "../data";
import { ArrowUpRight, ChevronLeft, ChevronRight, Close } from "./Icons";

// Full-screen project "plate", laid out like the slideshow slides: illustration on
// the left, the project's details on the right. ← → step through, Esc closes.
function Plate({ id, onChange, onClose }) {
  const index = Math.max(0, projects.findIndex((p) => p.id === id));
  const p = projects[index];
  // Remember which project's photo is showing, so stepping to another resets to the etching.
  const [photoFor, setPhotoFor] = useState(null);
  const showPhoto = photoFor === p.id;
  const links = Object.entries(p.links);

  const step = (d) => onChange(projects[(index + d + projects.length) % projects.length].id);

  useEffect(() => {
    const go = (d) => onChange(projects[(index + d + projects.length) % projects.length].id);
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, onChange, onClose]);

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label={p.title} onClick={onClose}>
      <div className="plate" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="round-btn ink plate-close" aria-label="Close" onClick={onClose} autoFocus>
          <Close />
        </button>
        <div className="plate-art">
          <img src={showPhoto ? p.photo : p.img} alt={showPhoto ? `${p.title} photo` : p.alt} className={showPhoto ? "photo" : undefined} />
          {p.photo && (
            <button type="button" className="btn btn-outline btn-sm plate-toggle" onClick={() => setPhotoFor(showPhoto ? null : p.id)}>
              {showPhoto ? "Show etching" : "Show photo"}
            </button>
          )}
        </div>
        <div className="plate-text">
          <div className="kicker wine">Plate {ROMAN[index]} · {p.tag}{p.year && ` · ${p.year}`}</div>
          <h2 className="plate-title">{p.title}</h2>
          <p className="plate-brief">{p.brief}</p>
          <div className="plate-note">{p.note}</div>
          {links.length > 0 && (
            <div className="plate-links">
              {links.map(([label, href]) => (
                <a key={label} className="btn btn-ink btn-sm" href={href} target="_blank" rel="noreferrer">
                  {label} <ArrowUpRight />
                </a>
              ))}
            </div>
          )}
          <div className="plate-made">
            <div className="kicker moss">Made with</div>
            <div>{p.made}</div>
          </div>
          <div className="plate-foot">
            <div className="kicker moss">{profile.name}</div>
            <div className="plate-steps">
              <button type="button" className="round-btn ink" aria-label="Previous project" onClick={() => step(-1)}>
                <ChevronLeft />
              </button>
              <div className="kicker moss">{ROMAN[index]} / {ROMAN[projects.length - 1]}</div>
              <button type="button" className="round-btn ink" aria-label="Next project" onClick={() => step(1)}>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plate;
