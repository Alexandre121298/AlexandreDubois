import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Promize from "./pages/projects/Promize";
import Orbitaal from "./pages/projects/Orbitaal";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/promize" element={<Promize />} />
          <Route path="/projects/orbitaal" element={<Orbitaal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
