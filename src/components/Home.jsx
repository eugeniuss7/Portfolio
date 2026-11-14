import { useState } from "react";
import { ACCENT, BLUE, VIOLET, WARM, featured, profile, projects, stats, tagColors } from "../data";
import { ArrowRight, ArrowUpRight, Check, Chip, Code, Copy, Graph, Mail, Sparkle } from "./Icons";
import HeroMedia from "./HeroMedia";
import Reveal from "./Reveal";

const areas = [
  {
    icon: <Sparkle stroke={VIOLET} />,
    title: "AI engineering",
    text: "RAG pipelines, multi-agent systems and tools over MCP — LLM apps that reason over real data.",
  },
  {
    icon: <Code stroke={BLUE} />,
    title: "Software engineering",
    text: "Full-stack web apps with Django and React — from the database to the interface people actually use.",
  },
  {
    icon: <Chip stroke={WARM} />,
    title: "Hardware & embedded",
    text: "Microcontrollers, sensors and control loops — the layer where software touches the physical world.",
  },
  {
    icon: <Graph stroke={ACCENT} />,
    title: "Data science",
    text: "Cleaning, modeling and visualizing data — from analytics to neural networks — to turn signals into decisions.",
  },
];

const featuredProjects = featured.map((id) => projects.find((p) => p.id === id)).filter(Boolean);

function Home({ onNavigate, onOpenProject }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-copy">
          {profile.availability && (
            <Reveal className="status-chip">
              <span className="live-dot" />
              {profile.availability}
            </Reveal>
          )}
          <Reveal as="h1" delay={0.05}>
            I build systems where <em>hardware</em> meets <em>data.</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={0.12}>{profile.summary}</Reveal>
          <Reveal className="actions" delay={0.18}>
            <button type="button" className="btn-primary" onClick={() => onNavigate("projects")}>
              View projects
              <ArrowRight />
            </button>
            <button type="button" className="btn-ghost" onClick={() => onNavigate("chat")}>
              Start a chat
            </button>
          </Reveal>
          <Reveal className="hero-meta mono" delay={0.24}>
            <span>{profile.degree}</span>
            <span className="sep" />
            <span>TIP Manila ’26</span>
            <span className="sep" />
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <HeroMedia onOpenProject={onOpenProject} />
        </Reveal>
      </section>

      <Reveal as="section" className="stats" aria-label="Highlights">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </Reveal>

      <section className="block">
        <Reveal className="block-head">
          <div className="eyebrow">What I do</div>
          <h2>Four layers, <em>one stack.</em></h2>
        </Reveal>
        <div className="areas">
          {areas.map(({ icon, title, text }, i) => (
            <Reveal key={title} className="panel area" delay={i * 0.06}>
              <div className="area-icon">{icon}</div>
              <div className="area-title">{title}</div>
              <div className="body-sm">{text}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="block">
        <Reveal className="block-head row">
          <div>
            <div className="eyebrow">Selected work</div>
            <h2>Recent <em>projects.</em></h2>
          </div>
          <button type="button" className="link-btn" onClick={() => onNavigate("projects")}>
            All projects <ArrowRight size={16} />
          </button>
        </Reveal>
        <div className="featured">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <button type="button" className="work-card" onClick={() => onOpenProject(p.id)}>
                <div className="work-media">
                  <img src={p.img} alt="" loading="lazy" />
                  {p.award && <span className="work-award mono">★ {p.award}</span>}
                </div>
                <div className="work-body">
                  <div className="work-top">
                    <span className="tag mono" style={{ color: tagColors[p.tag], borderColor: tagColors[p.tag] }}>{p.tag}</span>
                    <span className="mono dim-sm">{p.year}</span>
                  </div>
                  <div className="work-title">
                    {p.title}
                    <span className="work-arrow"><ArrowUpRight /></span>
                  </div>
                  <p className="body-sm clamp-2">{p.desc}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="cta">
        <div className="eyebrow">Get in touch</div>
        <h2>Let’s build something <em>useful.</em></h2>
        <p className="lead">Have a role, a project or a question? My inbox is open.</p>
        <div className="actions center">
          <a className="btn-primary" href={`mailto:${profile.email}`}>
            <Mail />
            {profile.email}
          </a>
          <button type="button" className="btn-ghost" onClick={copyEmail} aria-live="polite">
            {copied ? <Check /> : <Copy />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>
      </Reveal>
    </div>
  );
}

export default Home;
