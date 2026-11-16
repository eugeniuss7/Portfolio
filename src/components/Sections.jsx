import { useState } from "react";
import { about, contactLinks, faq, layers, profile, stats } from "../data";
import { ArrowRight, Copy, LayerIcon, Mail } from "./Icons";
import Reveal from "./Reveal";
import Showreel from "./Showreel";

export function Hero({ onOpen }) {
  return (
    <section id="top" className="wrap hero">
      <div className="hero-copy">
        {profile.availability && (
          <div className="status">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </div>
        )}
        <h1>I build systems where <em>hardware</em> meets <em>data.</em></h1>
        <p className="lead">{profile.summary}</p>
        <div className="actions">
          <a href="#projects" className="btn btn-ink">View projects <ArrowRight /></a>
          <a href="#contact" className="btn btn-outline">Start a conversation</a>
        </div>
      </div>
      <Showreel onOpen={onOpen} />
    </section>
  );
}

export function Highlights() {
  return (
    <section aria-label="Highlights" className="wrap">
      <dl className="stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <dd>{s.value}</dd>
            <dt>{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Layers() {
  return (
    <section id="layers" className="band green">
      <div className="wrap band-inner">
        <Reveal className="heading">
          <div className="kicker blush rule">What I do</div>
          <h2>Four layers, <em>one stack.</em></h2>
        </Reveal>
        <div className="layer-grid">
          {layers.map((l, i) => (
            <Reveal as="article" key={l.title} className="layer" delay={i * 0.06}>
              <div className="layer-icon"><LayerIcon name={l.icon} /></div>
              <h3>{l.title}</h3>
              <p>{l.text}</p>
              <div className="chips">
                {l.tools.map((t) => <span key={t} className="chip light">{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="band navy">
      <div className="wrap band-inner about">
        <Reveal className="about-copy">
          <div className="kicker blush rule">Beyond the code</div>
          <h2>Strings, minds <em>and machines.</em></h2>
          <p className="lead">{about.text}</p>
        </Reveal>
        <div className="about-figures">
          {about.figures.map((f, i) => (
            <Reveal as="figure" key={f.title} delay={i * 0.08}>
              <img src={f.img} alt={f.alt} loading="lazy" />
              <figcaption>
                <span className="figure-title">{f.title}</span>
                <span className="figure-sub">{f.sub}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Ask() {
  return (
    <section id="ask" className="wrap section ask">
      <Reveal className="heading ask-head">
        <div className="kicker wine rule">Quick answers</div>
        <h2>Ask me <em>anything.</em></h2>
        <p className="moss">The questions recruiters usually open with. For anything else, reach me directly.</p>
      </Reveal>
      <div className="faq">
        {faq.map((item, i) => (
          <details key={item.q} open={i === 0}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(profile.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="wrap contact-wrap">
      <Reveal className="contact">
        <div className="kicker blush">Get in touch</div>
        <h2>Let&rsquo;s build something <em>useful.</em></h2>
        <p className="contact-lead">Have a role, a project or a question? My inbox is open.</p>
        <div className="actions center">
          <a href={`mailto:${profile.email}`} className="btn btn-paper"><Mail /> {profile.email}</a>
          <button type="button" className="btn btn-outline-light" onClick={copy} aria-live="polite">
            <Copy /> {copied ? "Copied" : "Copy email"}
          </button>
        </div>
        <div className="contact-links">
          {contactLinks.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
