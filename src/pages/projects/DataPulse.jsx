import { Link } from "react-router-dom";
import { datapulse } from "../../content";

function DataPulse() {
  return (
    <article className="project-detail fade-in">
      <Link to="/projects" className="text-link">
        ← Tous les projets
      </Link>
      <p className="eyebrow" style={{ marginTop: "2rem" }}>
        Projet personnel · Application en ligne
      </p>
      <h1>DataPulse — Suivi météo Fullstack</h1>
      <p className="lead">
        De la recherche d’une ville à son suivi dans un espace personnel : une
        application que je développe du backend à l’interface.
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
          Essayer DataPulse ↗
        </a>
        <a
          className="button secondary"
          href={datapulse.source}
          target="_blank"
          rel="noreferrer"
        >
          Voir le code sur GitHub ↗
        </a>
      </div>
      <h2>Ce que permet l’application</h2>
      <ul>
        <li>Créer un compte et se connecter à son espace utilisateur.</li>
        <li>Rechercher une ville grâce au géocodage Open-Meteo.</li>
        <li>Ajouter et retirer des villes de sa liste personnelle.</li>
        <li>Consulter leurs conditions météorologiques actuelles.</li>
      </ul>
      <h2>Ma contribution</h2>
      <p>
        Je prends en charge l’ensemble du projet : conception, API REST,
        interface React, modèle de données PostgreSQL, authentification et
        tests. L’objectif est de réunir ces compétences dans une application
        utilisable et consultable par les recruteurs.
      </p>
      <h2>Les choix techniques</h2>
      <ul>
        <li>
          <strong>Java 21 et Spring Boot</strong> pour l’API REST et
          l’intégration des données Open-Meteo.
        </li>
        <li>
          <strong>Spring Security</strong> pour l’authentification par session
          et la protection CSRF.
        </li>
        <li>
          <strong>React et TypeScript</strong> pour la recherche de villes et
          l’affichage des données météo.
        </li>
        <li>
          <strong>PostgreSQL</strong> pour conserver les données de
          l’application.
        </li>
      </ul>
      <h2>Qualité et déploiement</h2>
      <p>
        Le projet comprend des tests backend avec MockMvc, des tests
        d’interface, une intégration continue avec GitHub Actions et une analyse
        de code avec SonarCloud. L’application est conteneurisée avec Docker et
        déployée sur Google Cloud Run.
      </p>
      <p className="note">
        Le code source et l’application sont accessibles ci-dessus. Un compte
        est nécessaire pour enregistrer ses villes.
      </p>
    </article>
  );
}
export default DataPulse;
