import { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Promize from "./pages/projects/Promize";
import Orbitaal from "./pages/projects/Orbitaal";
import DataPulse from "./pages/projects/DataPulse";
import { profile } from "./content";
import "./App.css";

const titles = {
  "/": "Développeur Fullstack",
  "/about": "Parcours",
  "/projects": "Projets",
  "/contact": "Contact",
  "/projects/datapulse": "DataPulse",
  "/projects/promize": "Spotifarm",
  "/projects/orbitaal": "Orbi-Taal",
};
function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `${titles[pathname] || "Page introuvable"} — Alexandre Dubois`;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function App() {
  return (
    <Router>
      <RouteEffects />
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main-content").focus();
        }}
      >
        Aller au contenu
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/datapulse" element={<DataPulse />} />
          <Route path="/projects/promize" element={<Promize />} />
          <Route path="/projects/orbitaal" element={<Orbitaal />} />
          <Route
            path="*"
            element={
              <section className="page-width page-section">
                <h1>Page introuvable</h1>
                <Link to="/">Revenir à l’accueil</Link>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="site-footer page-width">
        <p>
          Alexandre Dubois <span>Développeur Fullstack · Amiens</span>
        </p>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <Link to="/contact">Échangeons →</Link>
        </div>
      </footer>
    </Router>
  );
}
export default App;
