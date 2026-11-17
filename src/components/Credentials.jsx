import { useState } from "react";
import { certs, education, experience } from "../data";
import { ArrowUpRight } from "./Icons";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

function Credentials() {
  const [open, setOpen] = useState(null);

  return (
    <section id="credentials" className="band-top">
      <div className="wrap section">
        <Reveal className="heading">
          <div className="kicker wine rule">Experience, education and skills</div>
          <h2>Credentials</h2>
        </Reveal>
        <div className="creds">
          <div className="creds-main">
            {experience.map((x) => (
              <Reveal as="article" key={x.role} className="card xp">
                <div className="xp-head">
                  <h3>{x.role}</h3>
                  <div className="moss sm">{x.period}</div>
                </div>
                <div className="xp-org">{x.org}</div>
                {x.points && (
                  <ul className="xp-points">
                    {x.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                )}
                {x.text && <p>{x.text}</p>}
                {x.stack && (
                  <div className="chips">
                    {x.stack.map((s) => <span key={s} className="chip">{s}</span>)}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
          <div className="creds-side">
            <Reveal as="article" className="card edu">
              <div className="kicker wine">Education</div>
              <ul>
                {education.map((e) => (
                  <li key={e.title}>
                    <span className={e.lead ? "edu-dot lead" : "edu-dot"} aria-hidden="true" />
                    <div>
                      <div className="edu-title">{e.title}</div>
                      <div className="moss">{e.sub}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="kicker wine certs-label">Certifications</div>
            <ul className="certs">
              {certs.map((c) => {
                const inner = (
                  <>
                    <span className="cert-text">
                      <span className="cert-name">{c.name}</span>
                      <span className="moss cert-meta">{c.meta}</span>
                    </span>
                    <span className="cert-arrow"><ArrowUpRight /></span>
                  </>
                );
                return (
                  <li key={c.name}>
                    {c.file ? (
                      <a className="cert" href={c.file} target="_blank" rel="noreferrer" aria-label={`View ${c.name} certificate`}>{inner}</a>
                    ) : (
                      <button type="button" className="cert" aria-label={`View ${c.name} certificate`} onClick={() => setOpen(c)}>{inner}</button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {open && <Lightbox src={open.image} title={open.name} sub={open.meta} onClose={() => setOpen(null)} />}
    </section>
  );
}

export default Credentials;
