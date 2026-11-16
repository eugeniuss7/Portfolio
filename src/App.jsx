import { useState } from "react";
import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Credentials from "./components/Credentials";
import Plate from "./components/Plate";
import { About, Ask, Contact, Hero, Highlights, Layers } from "./components/Sections";
import { profile } from "./data";
import "./styles/app.css";

function App() {
  // Id of the project shown in the full-screen plate viewer, if any.
  const [plate, setPlate] = useState(null);

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero onOpen={setPlate} />
        <Highlights />
        <Layers />
        <Projects onOpen={setPlate} />
        <Credentials />
        <About />
        <Ask />
        <Contact />
      </main>
      <footer className="wrap footer">
        <div>{profile.name} · {profile.location}</div>
        <div className="colophon">MMXXVI · Set in Cormorant Garamond and EB Garamond</div>
      </footer>
      {plate && <Plate id={plate} onChange={setPlate} onClose={() => setPlate(null)} />}
    </MotionConfig>
  );
}

export default App;
