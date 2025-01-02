import { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
	const location = useLocation();

	useEffect(() => {
		// Reset artist name to "Visual Artist" when not on the "Projects" page
		if (location.pathname !== "/projects") {
			setArtist("Visual Artist");
		}
	}, [location.pathname]);

	return (
		<>
			<Navbar artist={artist} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects setArtist={setArtist} />} />
				<Route path='/projects/:id' element={<ProjectDetail />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
			<ScrollToTopButton /> {/* Add ScrollToTopButton here */}
		</>
	);
}

// Wrap App with BrowserRouter to use useLocation
export default function WrappedApp() {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
}
