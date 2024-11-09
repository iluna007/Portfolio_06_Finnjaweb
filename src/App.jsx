import { useState } from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import ProjectDetail from "./components/ProjectDetail";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import ScrollToTopButton

function App() {
  const [artist, setArtist] = useState("Visual Artist");

  return (
    <>
      <BrowserRouter>
        <Navbar artist={artist} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={<Projects setArtist={setArtist} />}
          />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTopButton /> {/* Add ScrollToTopButton here */}
      </BrowserRouter>
    </>
  );
}

export default App;
