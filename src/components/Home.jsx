import { ACCENT, BLUE, WARM, profile } from "../data";
import { ArrowRight, Chip, Code, Graph } from "./Icons";

const areas = [
  {
    icon: <Chip stroke={WARM} />,
    title: "Hardware & embedded",
    text: "Microcontrollers, sensors and control loops — the layer where software touches the physical world.",
  },
  {
    icon: <Code stroke={BLUE} />,
    title: "Software engineering",
    text: "Full-stack web apps with Django and React — from the database to the interface people actually use.",
  },
  {
    icon: <Graph stroke={ACCENT} />,
    title: "Data science",
    note: "· elective",
    text: "Cleaning, modeling and visualizing data — from analytics to neural networks — to turn raw signals into decisions.",
  },
];

function Home({ onNavigate }) {
  return (
    <section className="page home">
      <div className="hero">
        <div className="hero-copy">
          <div className="eyebrow">// computer engineering × data science</div>
          <h1>I build systems where hardware meets data.</h1>
          <p className="lead">{profile.summary}</p>
          <div className="actions">
            <button type="button" className="btn-primary" onClick={() => onNavigate("projects")}>
              View projects
              <ArrowRight />
            </button>
            <button type="button" className="btn-ghost" onClick={() => onNavigate("chat")}>
              Start a chat
            </button>
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-bar">
            <span className="light" />
            <span className="light" />
            <span className="light" />
            <span className="mono terminal-title">~/portfolio</span>
          </div>
          <div className="terminal-body mono">
            <div><span className="prompt">$</span> whoami</div>
            <div className="out">{profile.name} — {profile.degree}</div>
            <div><span className="prompt">$</span> cat focus.txt</div>
            <div className="out">embedded systems · software · data science</div>
            <div><span className="prompt">$</span> ls ./stack</div>
            <div className="out warm">{profile.stack.join("  ")}</div>
            <div><span className="prompt">$</span> <span className="cur" /></div>
          </div>
        </div>
      </div>

      <div className="areas">
        {areas.map(({ icon, title, note, text }) => (
          <div key={title} className="panel area">
            {icon}
            <div className="area-title">
              {title} {note && <span className="mono muted-sm">{note}</span>}
            </div>
            <div className="body-sm">{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
