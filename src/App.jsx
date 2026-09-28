import { useEffect, useState } from "react";
import NetworkCanvas from "./components/NetworkCanvas";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Credentials from "./components/Credentials";
import Chat from "./components/Chat";
import { PAGES, profile } from "./data";
import "./styles/app.css";

// The current page lives in the URL hash so links and the back button work
// on GitHub Pages without server-side routing.
const pageFromHash = () => {
  const id = window.location.hash.replace("#", "");
  return PAGES.some((p) => p.id === id) ? id : "home";
};

function App() {
  const [page, setPage] = useState(pageFromHash);

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

  return (
    <div className="app">
      <NetworkCanvas density={80} />
      <div className="shell">
        <Header page={page} onNavigate={navigate} />
        <main className="main">
          {page === "home" && <Home onNavigate={navigate} />}
          {page === "projects" && <Projects />}
          {page === "creds" && <Credentials />}
          {page === "chat" && <Chat />}
        </main>
        <footer className="footer mono">
          <div>© {new Date().getFullYear()} {profile.name}</div>
          <div className="footer-hint">move your cursor · click anywhere to send a pulse through the network</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
