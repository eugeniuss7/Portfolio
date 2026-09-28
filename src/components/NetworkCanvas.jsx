import { useEffect, useRef } from "react";
import { ACCENT, WARM } from "../data";

const LINK = 150;

function rgba(hex, a) {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

// Drifting node network behind the page. Nodes are drawn to the cursor and
// light up when a click pulse passes through them.
function NetworkCanvas({ density = 80, accent = ACCENT }) {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, raf = 0;
    let nodes = [];
    let pulses = [];
    let mouse = null;

    const seed = () => {
      // Keep roughly the same density per area as the 1440×960 design.
      const count = Math.round(density * Math.min(1.6, (W * H) / (1440 * 960)));
      nodes = Array.from({ length: Math.max(24, count) }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.4 + Math.random() * 1.8,
        warm: Math.random() < 0.12,
        glow: 0,
      }));
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      W = window.innerWidth;
      H = window.innerHeight;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx; n.y += n.vy;
          if (n.x < 0 || n.x > W) n.vx *= -1;
          if (n.y < 0 || n.y > H) n.vy *= -1;
          if (mouse) {
            const dx = mouse.x - n.x, dy = mouse.y - n.y;
            const d = Math.hypot(dx, dy);
            if (d < 200 && d > 1) { n.x += (dx / d) * 0.25; n.y += (dy / d) * 0.25; }
          }
        }
        n.glow *= 0.94;
        for (const p of pulses) {
          if (Math.abs(Math.hypot(n.x - p.x, n.y - p.y) - p.r) < 22) n.glow = 1;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            const g = Math.max(a.glow, b.glow);
            ctx.strokeStyle = rgba(accent, (1 - d / LINK) * (0.22 + g * 0.6));
            ctx.lineWidth = 1 + g;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      if (mouse) {
        for (const n of nodes) {
          const d = Math.hypot(mouse.x - n.x, mouse.y - n.y);
          if (d < 190) {
            ctx.strokeStyle = rgba(WARM, (1 - d / 190) * 0.55);
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(n.x, n.y); ctx.stroke();
          }
        }
        ctx.fillStyle = rgba(WARM, 0.9);
        ctx.beginPath(); ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2); ctx.fill();
      }

      for (const n of nodes) {
        const col = n.warm ? WARM : accent;
        if (n.glow > 0.05) {
          ctx.fillStyle = rgba(col, 0.18 * n.glow);
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 8 * n.glow, 0, Math.PI * 2); ctx.fill();
        }
        ctx.fillStyle = rgba(col, 0.55 + 0.45 * n.glow);
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r + n.glow * 1.5, 0, Math.PI * 2); ctx.fill();
      }

      const maxR = Math.hypot(W, H);
      for (const p of pulses) {
        ctx.strokeStyle = rgba(accent, Math.max(0, 0.35 * (1 - p.r / maxR)));
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.stroke();
        p.r += 7;
      }
      pulses = pulses.filter((p) => p.r < maxR);

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => { mouse = { x: e.clientX, y: e.clientY }; };
    const onLeave = () => { mouse = null; };
    const onClick = (e) => { pulses.push({ x: e.clientX, y: e.clientY, r: 0 }); };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("click", onClick);
    };
  }, [density, accent]);

  return <canvas ref={ref} className="network" aria-hidden="true" />;
}

export default NetworkCanvas;
