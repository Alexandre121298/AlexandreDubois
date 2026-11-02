import { Link, NavLink } from "react-router-dom";
import "./style/Navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar page-width" aria-label="Navigation principale">
        <Link to="/" className="brand" aria-label="Alexandre Dubois — Accueil">
          AD<span>.</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" end>
            Accueil
          </NavLink>
          <NavLink to="/about">Parcours</NavLink>
          <NavLink to="/projects">Projets</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
