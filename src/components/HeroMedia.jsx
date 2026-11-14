import { useEffect, useRef, useState } from "react";
import { profile, projects, tagColors } from "../data";
import { ArrowRight, ArrowUpRight, Pause, Play, Trophy, Volume, VolumeOff } from "./Icons";

// Drop a file named hero.mp4 (or hero.webm) into src/assets and it plays here.
// An optional hero-poster.jpg is shown while the video loads.
const videoSrc = Object.values(
  import.meta.glob("../assets/hero.{mp4,webm}", { eager: true, query: "?url", import: "default" })
)[0];
const posterSrc = Object.values(
  import.meta.glob("../assets/hero-poster.{jpg,jpeg,png,webp}", { eager: true, query: "?url", import: "default" })
)[0];

const SLIDE_MS = 4500;
// Posters marked fit: "contain" carry their own text, which clashes with the captions.
const slides = projects.filter((p) => p.img && !p.fit);

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function HeroVideo() {
  const video = useRef(null);
  const bar = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!prefersReducedMotion()) video.current.play().catch(() => {});
  }, []);

  const toggle = () => (video.current.paused ? video.current.play() : video.current.pause());
  const onTime = () => {
    const v = video.current;
    if (bar.current && v.duration) bar.current.style.transform = `scaleX(${v.currentTime / v.duration})`;
  };

  return (
    <>
      <video
        ref={video}
        className="media-fill"
        src={videoSrc}
        poster={posterSrc}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={onTime}
        onClick={toggle}
      />
      <div className="media-shade" />
      <div className="media-chip mono"><span className="live-dot" /> Intro</div>
      <div className="media-bottom">
        <div className="media-caption">
          <div className="media-title">{profile.name}</div>
          <div className="media-sub">{profile.role} · {profile.location}</div>
        </div>
        <div className="media-controls">
          <button type="button" className="media-btn" aria-label={playing ? "Pause video" : "Play video"} onClick={toggle}>
            {playing ? <Pause /> : <Play />}
          </button>
          <button type="button" className="media-btn" aria-label={muted ? "Unmute video" : "Mute video"} onClick={() => setMuted((m) => !m)}>
            {muted ? <VolumeOff /> : <Volume />}
          </button>
        </div>
      </div>
      <div className="media-progress"><div ref={bar} className="media-progress-fill" /></div>
    </>
  );
}

// Stand-in until a hero video is added: project shots cycling like a reel.
function HeroReel({ onOpenProject }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(prefersReducedMotion);
  const cur = slides[index];

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [index, paused]);

  return (
    <div className="reel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(prefersReducedMotion())}>
      {slides.map((p, i) => (
        <img key={p.id} src={p.img} alt="" className={i === index ? "media-fill reel-img on" : "media-fill reel-img"} />
      ))}
      <div className="media-shade" />
      <div className="reel-bars">
        {slides.map((p, i) => (
          <button key={p.id} type="button" className="reel-bar" aria-label={`Show ${p.title}`} onClick={() => setIndex(i)}>
            <span
              key={index}
              className={i < index ? "reel-fill done" : i === index ? "reel-fill run" : "reel-fill"}
              style={{ animationDuration: `${SLIDE_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
            />
          </button>
        ))}
      </div>
      <div className="media-chip mono reel-chip">Showreel</div>
      <div className="media-bottom">
        <div className="media-caption">
          <div className="media-tag mono" style={{ color: tagColors[cur.tag] }}>{cur.tag}</div>
          <div className="media-title">{cur.title}</div>
        </div>
        <button type="button" className="media-btn wide" onClick={() => onOpenProject(cur.id)}>
          View <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

function HeroMedia({ onOpenProject }) {
  return (
    <div className="hero-media">
      <div className="media-glow" aria-hidden="true" />
      <div className="media-frame">
        {videoSrc ? <HeroVideo /> : <HeroReel onOpenProject={onOpenProject} />}
      </div>
      <button type="button" className="award-badge" onClick={() => onOpenProject("asinc")}>
        <span className="award-icon"><Trophy /></span>
        <span className="award-text">
          <span className="award-title">Best Project</span>
          <span className="award-sub">ASINC · TIP CpE Symposium 2026</span>
        </span>
        <span className="award-arrow"><ArrowUpRight /></span>
      </button>
    </div>
  );
}

export default HeroMedia;
