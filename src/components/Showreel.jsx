import { useEffect, useRef, useState } from "react";
import { ROMAN, profile, projects } from "../data";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Volume, VolumeOff } from "./Icons";

// Drop a file named hero.mp4 (or hero.webm) into src/assets and it replaces the
// slideshow. An optional hero-poster.jpg is shown while the video loads.
const videoSrc = Object.values(
  import.meta.glob("../assets/hero.{mp4,webm}", { eager: true, query: "?url", import: "default" })
)[0];
const posterSrc = Object.values(
  import.meta.glob("../assets/hero-poster.{jpg,jpeg,png,webp}", { eager: true, query: "?url", import: "default" })
)[0];

const SLIDE_MS = 4500;

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function ReelVideo() {
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!prefersReducedMotion()) video.current.play().catch(() => {});
  }, []);

  const toggle = () => (video.current.paused ? video.current.play() : video.current.pause());

  return (
    <>
      <div className="reel-head">
        <div className="reel-label">Intro</div>
      </div>
      <video
        ref={video}
        className="reel-media"
        src={videoSrc}
        poster={posterSrc}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onClick={toggle}
      />
      <div className="reel-foot">
        <div className="reel-caption">
          <div className="reel-label">{profile.tagline}</div>
          <div className="reel-title">{profile.name}</div>
        </div>
        <div className="reel-steps">
          <button type="button" className="round-btn" aria-label={playing ? "Pause video" : "Play video"} onClick={toggle}>
            {playing ? <Pause /> : <Play />}
          </button>
          <button type="button" className="round-btn" aria-label={muted ? "Unmute video" : "Mute video"} onClick={() => setMuted((m) => !m)}>
            {muted ? <VolumeOff /> : <Volume />}
          </button>
        </div>
      </div>
    </>
  );
}

function ReelSlides({ onOpen }) {
  const [index, setIndex] = useState(0);
  const [stopped, setStopped] = useState(prefersReducedMotion);
  const cur = projects[index];

  // Autoplay until the visitor takes over with the arrows.
  useEffect(() => {
    if (stopped) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % projects.length), SLIDE_MS);
    return () => clearInterval(t);
  }, [stopped]);

  const step = (d) => {
    setStopped(true);
    setIndex((i) => (i + d + projects.length) % projects.length);
  };

  return (
    <>
      <div className="reel-head">
        <div className="reel-label">Showreel</div>
        <div className="reel-bars" aria-hidden="true">
          {projects.map((p, i) => (
            <span key={p.id} className={i === index ? "reel-bar on" : "reel-bar"} />
          ))}
        </div>
      </div>
      <div className="reel-stage">
        {projects.map((p, i) => (
          <img key={p.id} src={p.img} alt={i === index ? p.alt : ""} className={i === index ? "reel-media reel-slide on" : "reel-media reel-slide"} />
        ))}
      </div>
      <div className="reel-foot">
        <div className="reel-caption">
          <div className="reel-label">{cur.tag}</div>
          <div className="reel-title">{cur.title}</div>
        </div>
        <button type="button" className="btn btn-paper btn-sm" onClick={() => onOpen(cur.id)}>
          View <ArrowRight />
        </button>
      </div>
      <div className="reel-foot">
        <div className="reel-label">{ROMAN[index]} / {ROMAN[projects.length - 1]}</div>
        <div className="reel-steps">
          <button type="button" className="round-btn" aria-label="Previous project" onClick={() => step(-1)}>
            <ChevronLeft />
          </button>
          <button type="button" className="round-btn" aria-label="Next project" onClick={() => step(1)}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}

function Showreel({ onOpen }) {
  return <div className="reel">{videoSrc ? <ReelVideo /> : <ReelSlides onOpen={onOpen} />}</div>;
}

export default Showreel;
