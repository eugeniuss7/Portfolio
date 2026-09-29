import { useEffect, useState } from "react";
import { certs, education, skills } from "../data";
import { ArrowUpRight, Close, Medal } from "./Icons";

function CertModal({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={cert.name} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="icon-btn modal-close" aria-label="Close" onClick={onClose} autoFocus>
          <Close />
        </button>
        <img src={cert.image} alt={cert.name} />
        <div className="modal-info">
          <div className="modal-title">{cert.name}</div>
          <div className="muted-sm">{cert.issuer} · {cert.year}</div>
        </div>
      </div>
    </div>
  );
}

function Credentials() {
  const [open, setOpen] = useState(null);

  return (
    <section className="page">
      <div className="section-title">
        <div className="eyebrow">// education, certifications &amp; skills</div>
        <h2>Credentials</h2>
      </div>

      <div className="creds">
        <div className="panel creds-col">
          <div className="label mono">EDUCATION</div>
          {education.map((e, i) => (
            <div key={e.title} className="edu">
              <div className="edu-rail">
                <div className={`edu-dot ${e.dot}`} />
                {i < education.length - 1 && <div className="edu-line" />}
              </div>
              <div className="edu-body">
                <div className="edu-title">{e.title}</div>
                <div className="body-sm">{e.sub}</div>
                {e.meta && <div className="mono dim-sm">{e.meta}</div>}
              </div>
            </div>
          ))}
        </div>

        <div className="panel creds-col tight">
          <div className="label mono">CERTIFICATIONS</div>
          {certs.map((c) => (
            <div key={c.name} className="cert">
              <div className="cert-icon"><Medal stroke={c.color} /></div>
              <div className="cert-text">
                <div className="cert-name">{c.name}</div>
                <div className="muted-sm">{c.issuer} · {c.year}</div>
              </div>
              {c.file ? (
                <a className="icon-link" href={c.file} target="_blank" rel="noreferrer" aria-label={`View ${c.name} certificate`}>
                  <ArrowUpRight />
                </a>
              ) : (
                <button type="button" className="icon-link" aria-label={`View ${c.name} certificate`} onClick={() => setOpen(c)}>
                  <ArrowUpRight />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="panel creds-col">
          <div className="label mono">SKILLS</div>
          {skills.map((g) => (
            <div key={g.group} className="skill-group">
              <div className="skill-title">{g.group}</div>
              <div className="chips">
                {g.items.map((s) => (
                  <span key={s} className="skill mono">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {open && <CertModal cert={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

export default Credentials;
