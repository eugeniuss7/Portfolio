import { useState } from "react";
import { FILTERS, projects } from "../data";
import Reveal from "./Reveal";

function Projects({ onOpen }) {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.tag === filter);

  return (
    <section id="projects" className="wrap section">
      <div className="section-head">
        <Reveal className="heading">
          <div className="kicker wine rule">Selected work</div>
          <h2>Recent <em>projects.</em></h2>
        </Reveal>
        <div role="group" aria-label="Filter projects by area" className="filters">
          {FILTERS.map((f) => (
            <button key={f} type="button" className={f === filter ? "filter on" : "filter"} aria-pressed={f === filter} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="project-grid">
        {shown.map((p) => (
          <article key={p.id} className="card project">
            <button type="button" className="project-art" aria-label={`Open ${p.title}`} onClick={() => onOpen(p.id)}>
              <img src={p.img} alt={p.alt} loading="lazy" />
            </button>
            <div className="project-body">
              <div className="project-top">
                <span className="tag">{p.tag}</span>
                <span className="moss sm">{p.year}</span>
              </div>
              <h3>
                <button type="button" className="title-btn" onClick={() => onOpen(p.id)}>{p.title}</button>
              </h3>
              <p>{p.desc}</p>
              <div className="chips push">
                {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
