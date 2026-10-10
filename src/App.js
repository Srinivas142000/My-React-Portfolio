import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SearchPage } from "./components/SearchPage";
import { AboutMe } from "./components/AboutMe";

function Home() {
  return (
    <main>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

// Start each page at the top unless the link targets a section (#id).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more" element={<SearchPage />} />
        <Route path="/projects" element={<SearchPage />} />
        <Route path="/me" element={<AboutMe />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
