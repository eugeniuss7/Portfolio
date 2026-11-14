import { useState } from "react";
import { certs, education, experience, skills } from "../data";
import { ArrowUpRight, Medal } from "./Icons";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

function Credentials() {
  const [open, setOpen] = useState(null);

  return (
    <section className="page">
      <div className="section-title">
        <div className="eyebrow">Experience, education &amp; skills</div>
        <h1 className="page-title">Credentials</h1>
      </div>

      <div className="creds">
        <Reveal className="panel creds-col wide">
          <div className="label mono">Experience</div>
          {experience.map((x) => (
            <div key={x.role + x.org} className="xp">
              <div className="xp-head">
                <div>
                  <div className="xp-role">{x.role}</div>
                  <div className="xp-org">{x.org}</div>
                </div>
                <div className="mono dim-sm">{x.period}</div>
              </div>
              <ul className="xp-points">
                {x.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <div className="chips">
                {x.stack.map((s) => <span key={s} className="chip mono">{s}</span>)}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="panel creds-col" delay={0.06}>
          <div className="label mono">Education</div>
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
        </Reveal>

        <Reveal className="panel creds-col tight" delay={0.1}>
          <div className="label mono">Certifications</div>
          {certs.map((c) => {
            const label = `View ${c.name} certificate`;
            const inner = (
              <>
                <span className="cert-icon"><Medal stroke={c.color} /></span>
                <span className="cert-text">
                  <span className="cert-name">{c.name}</span>
                  <span className="muted-sm">{c.issuer} · {c.year}</span>
                </span>
                <span className="cert-arrow"><ArrowUpRight /></span>
              </>
            );
            return c.file ? (
              <a key={c.name} className="cert" href={c.file} target="_blank" rel="noreferrer" aria-label={label}>{inner}</a>
            ) : (
              <button key={c.name} type="button" className="cert" aria-label={label} onClick={() => setOpen(c)}>{inner}</button>
            );
          })}
        </Reveal>

        <Reveal className="panel creds-col wide" delay={0.14}>
          <div className="label mono">Skills</div>
          <div className="skill-grid">
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
        </Reveal>
      </div>

      {open && <Lightbox src={open.image} title={open.name} sub={`${open.issuer} · ${open.year}`} onClose={() => setOpen(null)} />}
    </section>
  );
}

export default Credentials;
