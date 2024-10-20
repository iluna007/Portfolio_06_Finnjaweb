import { useState } from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  // Add state for the artist
  const [artist, setArtist] = useState("Visual Artist");

  return (
    <>
      <BrowserRouter>
        {/* Pass the artist state to Navbar */}
        <Navbar artist={artist} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            // Pass setArtist function to Projects so it can update the artist name
            element={<Projects setArtist={setArtist} />}
          />
          <Route path="/projects/:id" element={<ProjectDetail />} />{" "}
          {/* Route for project details */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
