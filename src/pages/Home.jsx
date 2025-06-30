import "./style/Home.css";
import profileImg from "../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


function Home() {
  return(
    <section className="home fade-in">
      <div className="intro">
        <img src={profileImg} alt="Portrait" className="profile-img" />
        <div>
          <h1>Bienvenue !</h1>
          <p><strong>Développeur fullstack</strong>, je conçois des applications performantes et intuitives, du backend à l’interface utilisateur.</p>
          <Link to="/projects" className="btn">Voir mes projets</Link>
          <a href="/cv.pdf" download>
            <button className="cv-button">Telecharger mon CV</button>
          </a>
        </div>
      </div>

      <div className="tech-logos fade-in">
        <h2>Technologies</h2>
        <div className="icons">
          <FontAwesomeIcon icon={faReact} size="2x" className="icon react" />
          <FontAwesomeIcon icon={faJs} size="2x" className="icon js" />
          <FontAwesomeIcon icon={faHtml5} size="2x" className="icon html" />
          <FontAwesomeIcon icon={faCss3Alt} size="2x" className="icon css" />
          <FontAwesomeIcon icon={faGithub} size="2x" className="icon github" />
        </div>
      </div>
    </section>
  );
}

export default Home;
