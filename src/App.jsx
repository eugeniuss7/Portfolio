import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Portfolio from "./pages/portfolio"
import Profile from "./components/profile"
import Projects from "./components/projects"
import Credentials from "./components/credentials"
import Timeline from "./components/timeline"

// Importing styles
import "./styles/styles.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
                <Portfolio />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile />
          }
        />
        <Route
          path="/projects"
          element={
                <Projects />
          }
        />
        <Route
          path="/credentials"
          element={
                <Credentials />
          }
        />
        <Route
          path="/documents"
          element={
                <Timeline />
          }
        />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
