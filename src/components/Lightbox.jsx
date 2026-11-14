import { useEffect } from "react";
import { Close } from "./Icons";

// Full-screen image viewer. Closes on Escape, the close button, or a click outside.
function Lightbox({ src, title, sub, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="icon-btn modal-close" aria-label="Close" onClick={onClose} autoFocus>
          <Close />
        </button>
        <img src={src} alt={title} />
        <div className="modal-info">
          <div className="modal-title">{title}</div>
          {sub && <div className="muted-sm">{sub}</div>}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
