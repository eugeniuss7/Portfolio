import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, tagColors } from "../data";
import { ChevronLeft, ChevronRight, Expand, Photo, TagIcon, Trophy } from "./Icons";
import Lightbox from "./Lightbox";

const FILTERS = ["All", "AI", "Hardware", "Software", "Data Science"];

const LINK_LABELS = { source: "Source code", writeup: "Write-up", demo: "Live demo" };

const MotionDiv = motion.div;

const countFor = (f) => (f === "All" ? projects.length : projects.filter((p) => p.tag === f).length);

function Projects({ focus }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(focus || projects[0].id);
  const [zoomed, setZoomed] = useState(false);

  const shown = projects.filter((p) => filter === "All" || p.tag === filter);
  let idx = shown.findIndex((p) => p.id === selected);
  if (idx < 0) idx = 0;
  const cur = shown[idx];
  const links = Object.entries(cur.links).filter(([, url]) => url);

  // ← and → step through the visible projects.
  useEffect(() => {
    const onKey = (e) => {
      if (zoomed || e.target.closest("input, textarea")) return;
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (d) setSelected(shown[(idx + d + shown.length) % shown.length].id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const step = (d) => setSelected(shown[(idx + d + shown.length) % shown.length].id);

  return (
    <section className="page">
      <div className="section-head">
        <div className="section-title">
          <div className="eyebrow">Selected work</div>
          <h1 className="page-title">Projects</h1>
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
              <span className="pill-count mono">{countFor(f)}</span>
            </button>
          ))}
        </div>
      </div>

      <div role="tabpanel" aria-label="Project details" className="detail">
        <AnimatePresence mode="wait">
          <MotionDiv
            key={cur.id}
            className="detail-inner"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="detail-media">
              {cur.img ? (
                <button type="button" className="media-zoom" aria-label={`Enlarge ${cur.title} image`} onClick={() => setZoomed(true)}>
                  <img src={cur.img} alt={cur.title} style={{ objectFit: cur.fit || "cover" }} />
                  <span className="zoom-hint"><Expand /></span>
                </button>
              ) : (
                <div className="ph ph-col" style={{ color: tagColors[cur.tag] }}>
                  <Photo />
                  <div className="mono muted-sm">Photo coming soon</div>
                </div>
              )}
              <div className="counter mono">{String(idx + 1).padStart(2, "0")} / {String(shown.length).padStart(2, "0")}</div>
            </div>

            <div className="detail-info">
              <div className="detail-tags">
                <span className="tag mono" style={{ color: tagColors[cur.tag], borderColor: tagColors[cur.tag] }}>
                  {cur.tag}
                </span>
                {cur.year && <span className="mono dim-sm">{cur.year}</span>}
                {cur.award && (
                  <span className="award-pill">
                    <Trophy size={14} /> {cur.award}
                  </span>
                )}
              </div>
              <h2 className="detail-title">{cur.title}</h2>
              <p className="detail-desc">{cur.desc}</p>
              <div className="facts">
                <div>
                  <div className="label mono">Status</div>
                  <div className="fact">{cur.status}</div>
                </div>
                <div>
                  <div className="label mono">Area</div>
                  <div className="fact">{cur.tag}</div>
                </div>
              </div>
              <div>
                <div className="label mono">Stack</div>
                <div className="chips">
                  {cur.stack.map((s) => (
                    <span key={s} className="chip mono">{s}</span>
                  ))}
                </div>
              </div>
              <div className="detail-foot">
                <div className="detail-links">
                  {links.map(([k, url]) => (
                    <a key={k} className="btn-ghost sm" href={url} target="_blank" rel="noreferrer">{LINK_LABELS[k]} ↗</a>
                  ))}
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
            </div>
          </MotionDiv>
        </AnimatePresence>
      </div>

      <div role="tablist" aria-label="Project gallery" className="gallery">
        {shown.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={i === idx}
            className={i === idx ? "thumb selected" : "thumb"}
            onClick={() => setSelected(p.id)}
          >
            {p.img ? (
              <img src={p.img} alt="" loading="lazy" />
            ) : (
              <div className="ph" style={{ color: tagColors[p.tag] }}>
                <TagIcon tag={p.tag} size={32} width={1.4} />
              </div>
            )}
            <div className="thumb-title">
              <span className="thumb-dot" style={{ background: tagColors[p.tag] }} />
              {p.title}
            </div>
          </button>
        ))}
      </div>

      {zoomed && cur.img && (
        <Lightbox src={cur.img} title={cur.title} sub={`${cur.tag}${cur.year ? ` · ${cur.year}` : ""}`} onClose={() => setZoomed(false)} />
      )}
    </section>
  );
}

export default Projects;
