import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SearchPage } from "./components/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutMe } from './components/AboutMe';

function Home() {
  return (
    <>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function Proj() {
  return (
    <>
      <SearchPage />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/more" element= {<Proj />}/>
          <Route path="/me" element= {<AboutMe />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
