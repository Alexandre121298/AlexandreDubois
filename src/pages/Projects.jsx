import "./style/Project.css";
import { Link } from "react-router-dom";
import spotifarmLogo from "../assets/logos/spotifarm.png";
import orbitaalLogo from "../assets/logos/Orbitaal.png";
import { datapulse } from "../content";

function Projects() {
  return (
    <section className="projects-section page-width page-section fade-in">
      <p className="eyebrow">Projets & réalisations</p>
      <h1>
        Du concret, du code
        <br />
        et de la pratique.
      </h1>
      <p className="lead">
        Un projet personnel accessible en ligne, des contributions en entreprise
        et une expérience entrepreneuriale.
      </p>
      <article className="datapulse-card">
        <div>
          <p className="eyebrow">01 / Projet personnel · En ligne</p>
          <h2>DataPulse</h2>
          <p>
            Une application de suivi météo qui réunit API REST,
            authentification, base de données et interface React. Mon projet
            personnel principal pour mettre en pratique Java et Spring Boot.
          </p>
          <ul className="tags">
            {datapulse.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="actions">
            <a
              className="button"
              href={datapulse.app}
              target="_blank"
              rel="noreferrer"
            >
              Essayer l’application ↗
            </a>
            <Link className="text-link" to="/projects/datapulse">
              Voir le projet →
            </Link>
            <a
              className="text-link"
              href={datapulse.source}
              target="_blank"
              rel="noreferrer"
            >
              Code source ↗
            </a>
          </div>
        </div>
        <div className="datapulse-summary">
          <span aria-hidden="true">
            DP<span>.</span>
          </span>
          <p>
            Rechercher une ville.
            <br />
            L’ajouter à son espace.
            <br />
            Consulter sa météo.
          </p>
        </div>
      </article>
      <div className="project-grid">
        <article className="project-card">
          <div className="project-logo">
            <img src={spotifarmLogo} alt="Spotifarm" loading="lazy" />
          </div>
          <div className="project-content">
            <p className="eyebrow">02 / Expérience professionnelle</p>
            <h2>Spotifarm · Promize</h2>
            <p>
              Deux années d’alternance : maintenance du backend .NET et
              développement React de la fonctionnalité d’estimation de date de
              récolte du maïs.
            </p>
            <ul className="tags">
              <li>.NET</li>
              <li>React</li>
              <li>Tests</li>
            </ul>
            <Link className="text-link" to="/projects/promize">
              Découvrir ma contribution →
            </Link>
          </div>
        </article>
        <article className="project-card">
          <div className="project-logo">
            <img src={orbitaalLogo} alt="Orbi-Taal" loading="lazy" />
          </div>
          <div className="project-content">
            <p className="eyebrow">03 / Expérience entrepreneuriale passée</p>
            <h2>Orbi-Taal</h2>
            <p>
              Création d’une activité de services numériques avec trois associés
              : besoins clients, sites web, référencement et organisation d’une
              activité.
            </p>
            <ul className="tags">
              <li>Web</li>
              <li>Relation client</li>
              <li>Gestion de projet</li>
            </ul>
            <Link className="text-link" to="/projects/orbitaal">
              Retour sur l’expérience →
            </Link>
          </div>
        </article>
      </div>
      <section className="music-section" aria-labelledby="music-title">
        <div>
          <p className="eyebrow">L’autre terrain de création</p>
          <h2 id="music-title">Musique & guitare</h2>
          <p>
            La guitare m’accompagne depuis environ vingt ans. Entre reprises,
            jeu en groupe et compositions rock, je consacre aussi du temps à la
            création musicale.
          </p>
        </div>
        <div className="youtube-preview">
          <iframe
            src="https://www.youtube-nocookie.com/embed/l7ADA7h0rDc"
            title="Reprise à la guitare par Alexandre Dubois"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </section>
  );
}
export default Projects;
