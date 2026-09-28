import { useEffect, useRef, useState } from "react";
import { answer, profile, suggestions } from "../data";
import { ArrowRight, Send } from "./Icons";

const GREETING = {
  from: "bot",
  text: `Hi! I'm ${profile.name.split(" ")[0]}'s portfolio assistant. Ask me about projects, skills, education, or how to get in touch.`,
};

function Chat() {
  const [messages, setMessages] = useState([GREETING]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const scroller = useRef(null);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [messages, typing]);

  const ask = (text) => {
    const q = String(text || "").trim();
    if (!q || typing) return;
    setMessages((m) => [...m, { from: "me", text: q }]);
    setDraft("");
    setTyping(true);
    timer.current = setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: answer(q) }]);
    }, 700);
  };

  return (
    <section className="page chat-page">
      <div className="chat-side">
        <div className="eyebrow">// let's talk</div>
        <h2>Ask me anything.</h2>
        <p className="lead sm">A quick assistant that knows my projects, skills and background. For anything else, reach me directly.</p>
        <div className="suggestions">
          <div className="label mono">TRY ASKING</div>
          {suggestions.map((s) => (
            <button key={s} type="button" className="pill suggestion" onClick={() => ask(s)}>
              {s}
              <ArrowRight size={16} stroke="#93A1B8" />
            </button>
          ))}
        </div>
        <div className="contact">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="contact-links">
            {profile.github && <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>}
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          </div>
        </div>
      </div>

      <div className="chat-window">
        <div className="chat-head">
          <span className="online-dot" />
          <div className="chat-name">Portfolio assistant</div>
          <div className="mono dim-sm">online</div>
        </div>
        <div ref={scroller} role="log" aria-live="polite" className="chat-log">
          {messages.map((m, i) =>
            m.from === "bot" ? (
              <div key={i} className="msg-bot">
                <div className="avatar mono">{profile.initials}</div>
                <div className="bubble-bot">{m.text}</div>
              </div>
            ) : (
              <div key={i} className="bubble-me">{m.text}</div>
            )
          )}
          {typing && (
            <div className="typing">
              <span className="dot" />
              <span className="dot" style={{ animationDelay: ".15s" }} />
              <span className="dot" style={{ animationDelay: ".3s" }} />
            </div>
          )}
        </div>
        <div className="composer">
          <label htmlFor="chat-input" className="sr-only">Message</label>
          <input
            id="chat-input"
            type="text"
            placeholder="Ask about projects, skills, education…"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ask(draft)}
          />
          <button type="button" className="send" aria-label="Send message" onClick={() => ask(draft)}>
            <Send />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Chat;
