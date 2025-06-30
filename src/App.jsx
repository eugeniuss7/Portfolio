import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Credentials from "./components/credentials";
import Timeline from "./components/timeline";

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/documents" element={<Timeline />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;