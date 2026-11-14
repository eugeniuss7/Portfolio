import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import NetworkCanvas from "./components/NetworkCanvas";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Credentials from "./components/Credentials";
import Chat from "./components/Chat";
import { PAGES, profile } from "./data";
import "./styles/app.css";

const MotionMain = motion.main;

// The current page lives in the URL hash so links and the back button work
// on GitHub Pages without server-side routing.
const pageFromHash = () => {
  const id = window.location.hash.replace("#", "");
  return PAGES.some((p) => p.id === id) ? id : "home";
};

function App() {
  const [page, setPage] = useState(pageFromHash);
  const [focusProject, setFocusProject] = useState(null);

  useEffect(() => {
    const onHash = () => setPage(pageFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (id) => {
    window.location.hash = id === "home" ? "" : id;
    setPage(id);
    window.scrollTo(0, 0);
  };

  const openProject = (id) => {
    setFocusProject(id);
    navigate("projects");
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        <div className="aurora" aria-hidden="true" />
        <NetworkCanvas density={56} />
        <div className="shell">
          <Header page={page} onNavigate={navigate} />
          <AnimatePresence mode="wait">
            <MotionMain
              key={page}
              className="main"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {page === "home" && <Home onNavigate={navigate} onOpenProject={openProject} />}
              {page === "projects" && <Projects focus={focusProject} />}
              {page === "creds" && <Credentials />}
              {page === "chat" && <Chat />}
            </MotionMain>
          </AnimatePresence>
          <footer className="footer">
            <div>© {new Date().getFullYear()} {profile.name}</div>
            <div className="footer-links">
              <a href={`mailto:${profile.email}`}>Email</a>
              {profile.github && <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>}
              {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
            </div>
          </footer>
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
