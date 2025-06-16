import "./style/Home.css";
import profileImg from "../assets/profile.jpg";
import reactLogo from "../assets/logos/react.png";
import htmlLogo from "../assets/logos/html.png";
import jsLogo from "../assets/logos/js.png";
import cssLogo from "../assets/logos/css.png";
import githubLogo from "../assets/logos/github.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";


function Home() {
  return(
    <section className="home fade-in">
      <div className="intro">
        <img src={profileImg} alt="Portrait" className="profile-img" />
        <div>
          <h1>Bienvenue !</h1>
          <p>Je suis <strong>Développeur Web Frontend</strong> passionné par la création d'interfaces modernes et accessibles.</p>
          <button className="btn">Voir mes projets</button>
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
