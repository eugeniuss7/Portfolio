import { useState } from "react";
import { projects, tagColors } from "../data";
import { ChevronLeft, ChevronRight, Photo, TagIcon } from "./Icons";

const FILTERS = ["All", "Hardware", "Software", "Data Science"];

const LINK_LABELS = { source: "Source code", writeup: "Write-up", demo: "Demo" };

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(projects[0].id);

  const shown = projects.filter((p) => filter === "All" || p.tag === filter);
  let idx = shown.findIndex((p) => p.id === selected);
  if (idx < 0) idx = 0;
  const cur = shown[idx];
  const step = (d) => setSelected(shown[(idx + d + shown.length) % shown.length].id);
  const links = Object.entries(cur.links).filter(([, url]) => url);

  return (
    <section className="page">
      <div className="section-head">
        <div className="section-title">
          <div className="eyebrow">// selected work · pick a photo to see the details</div>
          <h2>Projects</h2>
        </div>
        <div role="group" aria-label="Filter projects" className="filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={f === filter ? "pill active" : "pill"}
              aria-pressed={f === filter}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div role="tablist" aria-label="Project gallery" className="gallery">
        {shown.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={i === idx}
            className={i === idx ? "thumb card selected" : "thumb card"}
            onClick={() => setSelected(p.id)}
          >
            {p.img ? (
              <img src={p.img} alt="" />
            ) : (
              <div className="ph" style={{ color: tagColors[p.tag] }}>
                <TagIcon tag={p.tag} size={36} width={1.4} />
              </div>
            )}
            <div className="thumb-title">{p.title}</div>
          </button>
        ))}
      </div>

      <div role="tabpanel" aria-label="Project details" className="detail">
        <div className="detail-media">
          {cur.img ? (
            <img src={cur.img} alt={cur.title} />
          ) : (
            <div className="ph ph-col" style={{ color: tagColors[cur.tag] }}>
              <Photo />
              <div className="mono muted-sm">Photo coming soon</div>
            </div>
          )}
          <div className="counter mono">{idx + 1} / {shown.length}</div>
        </div>

        <div className="detail-info">
          <div className="detail-top">
            <div className="detail-tags">
              <span className="tag mono" style={{ color: tagColors[cur.tag], borderColor: tagColors[cur.tag] }}>
                {cur.tag}
              </span>
              {cur.year && <span className="mono dim-sm">{cur.year}</span>}
            </div>
            <div className="steppers">
              <button type="button" className="icon-btn" aria-label="Previous project" onClick={() => step(-1)}>
                <ChevronLeft />
              </button>
              <button type="button" className="icon-btn" aria-label="Next project" onClick={() => step(1)}>
                <ChevronRight />
              </button>
            </div>
          </div>
          <h3>{cur.title}</h3>
          <p className="body-sm">{cur.desc}</p>
          <div className="facts">
            <div>
              <div className="label mono">STATUS</div>
              <div className="fact">{cur.status}</div>
            </div>
            <div>
              <div className="label mono">AREA</div>
              <div className="fact">{cur.tag}</div>
            </div>
          </div>
          <div className="chips">
            {cur.stack.map((s) => (
              <span key={s} className="chip mono">{s}</span>
            ))}
          </div>
          {links.length > 0 && (
            <div className="detail-links">
              {links.map(([k, url]) => (
                <a key={k} href={url} target="_blank" rel="noreferrer">{LINK_LABELS[k]} →</a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
