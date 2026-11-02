import "./style/Home.css";
import profileImg from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { profile, datapulse } from "../content";

function Home() {
  return (
    <div className="home page-width fade-in">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">Alexandre Dubois · Développeur Fullstack</p>
          <h1 id="home-title">
            Du backend
            <br />à l’interface<span>.</span>
          </h1>
          <p className="hero-stack">Java, .NET & React</p>
          <p className="lead">
            Je conçois et fais évoluer des applications web, avec environ deux
            ans et demi d’expérience professionnelle dans les secteurs agricole
            et bancaire.
          </p>
          <p className="availability">
            <span aria-hidden="true" />
            Disponible pour un poste Java, .NET ou Fullstack.
          </p>
          <div className="actions">
            <Link to="/projects" className="button">
              Découvrir mes projets <span aria-hidden="true">↗</span>
            </Link>
            <a href={profile.cv} download className="button secondary">
              Télécharger mon CV
            </a>
          </div>
        </div>
        <figure className="portrait">
          <img
            src={profileImg}
            alt="Alexandre Dubois"
            width="360"
            height="420"
          />
          <figcaption>Basé à Amiens · Mobile en Hauts-de-France</figcaption>
        </figure>
      </section>
      <section className="featured-project" aria-labelledby="featured-title">
        <div className="project-intro">
          <p className="eyebrow">Projet personnel à découvrir</p>
          <h2 id="featured-title">
            DataPulse<span>La météo dans votre espace.</span>
          </h2>
          <p>
            Une application Fullstack pour rechercher des villes, les
            enregistrer dans son espace utilisateur et consulter leurs
            conditions météorologiques.
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
              Explorer le projet →
            </Link>
          </div>
        </div>
        <div className="project-scope">
          <p className="eyebrow">Un projet de bout en bout</p>
          <dl>
            <div>
              <dt>01 / Backend</dt>
              <dd>API REST, authentification et données météo</dd>
            </div>
            <div>
              <dt>02 / Frontend</dt>
              <dd>Interface React et espace utilisateur</dd>
            </div>
            <div>
              <dt>03 / Livraison</dt>
              <dd>Tests, Docker, CI/CD et Google Cloud Run</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="home-expertise" aria-labelledby="expertise-title">
        <div className="section-heading">
          <h2 id="expertise-title">Des compétences mises en pratique.</h2>
          <Link to="/about" className="text-link">
            Voir mon parcours →
          </Link>
        </div>
        <div className="expertise-grid">
          <article>
            <span className="eyebrow">Backend</span>
            <h3>La logique métier</h3>
            <p>Java, Spring Boot, C#, .NET, API REST et bases SQL.</p>
          </article>
          <article>
            <span className="eyebrow">Frontend</span>
            <h3>L’expérience utilisateur</h3>
            <p>React, TypeScript, Redux et interfaces responsive.</p>
          </article>
          <article>
            <span className="eyebrow">Qualité & livraison</span>
            <h3>Du code à l’application</h3>
            <p>Tests, Git, Docker, GitHub Actions et GCP.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
export default Home;
