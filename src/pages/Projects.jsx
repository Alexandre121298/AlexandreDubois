import "./style/Project.css";
import { Link } from "react-router-dom";
import spotifarmLogo from '../assets/logos/spotifarm.png';
import orbitaalLogo from '../assets/logos/Orbitaal.png';

function Project() {
  return (
    <section className="projects-section fade-in">
      <h2>Mes Projets</h2>
      <div className="project-grid">


        <div className="project-card">
          <img src={orbitaalLogo} alt="Orbitaal" className="img-logo" />
          <div className="project-content">
            <h3>Orbitaal – Agence de services numériques</h3>
              <p>
                Création d’une entreprise visant à accompagner commerçants, artisans et jeunes entreprises dans la conception de leur site web et leur référencement.
              </p>
            <div className="project-links">
              <a href="https://www.orbi-taal.fr" target="_blank" rel="noreferrer" className="btn-lien">
                Voir le site
              </a>
              <Link to="/projects/orbitaal" className="btn-code">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={spotifarmLogo} alt="Spotifarm" className="img-logo" />
          <div className="project-content">
            <h3>Promize - Spotifarm</h3>
            <p>
              Fonctionnalité innovante développée en React et .NET au sein de Promize (Isagri).
            </p>
            <div className="project-links">
              <Link to="/projects/promize" className="btn-code">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>

      </div>

      <div className="music-section fade-in">
        <h2>🎸 Musique & Guitare</h2>
        <p>
          En parallèle du développement web, je suis passionné de musique. Je pratique la guitare depuis plus de 20 ans,
          et je partage désormais des <strong>covers</strong> de morceaux sur les réseaux sociaux.
        </p>
        <div className="youtube-preview">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/l7ADA7h0rDc?si=ZLEGppLuOn5sw2-h"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </section>
  );
}

export default Project;
