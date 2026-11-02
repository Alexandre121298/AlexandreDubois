import { Link } from "react-router-dom";
import { profile } from "../content";
import "./style/About.css";

function About() {
  return (
    <section className="about page-width page-section fade-in">
      <p className="eyebrow">À propos</p>
      <h1>
        Un parcours Fullstack,
        <br />
        une curiosité qui continue.
      </h1>
      <p className="lead">
        Je suis Alexandre Dubois, développeur Fullstack diplômé d’un master CCM
        à l’UPJV. Mon parcours m’a conduit du backend .NET aux interfaces React,
        puis à la réalisation d’un projet personnel avec Java et Spring Boot.
      </p>
      <div className="about-layout">
        <div>
          <h2>Expériences professionnelles</h2>
          <article className="experience-entry">
            <p className="eyebrow">HN-Services · Euro Information · Fin 2024</p>
            <h3>Ingénieur études et développement</h3>
            <p>
              Participation à l’évolution d’applications dans le secteur
              bancaire : correction d’anomalies, développement de
              fonctionnalités et tests, avec .NET, XAML et SQL. Travail au sein
              d’une équipe avec une chaîne d’intégration GitLab CI.
            </p>
          </article>
          <article className="experience-entry">
            <p className="eyebrow">Promize · Groupe Isagri · 2022–2024</p>
            <h3>Développeur Fullstack en alternance</h3>
            <p>
              Deux années sur Spotifarm, une application agricole : une première
              année consacrée au backend .NET, puis une seconde centrée sur
              React et la fonctionnalité d’estimation de la date de récolte du
              maïs.
            </p>
            <Link to="/projects/promize" className="text-link">
              Découvrir ma contribution à Spotifarm →
            </Link>
          </article>
          <article className="experience-entry">
            <p className="eyebrow">
              Orbi-Taal · Expérience entrepreneuriale passée
            </p>
            <h3>Co-fondateur</h3>
            <p>
              Participation à la création d’une activité de services numériques
              : échanges clients, définition des besoins, réalisation de sites
              web et prospection. Une expérience qui m’a confronté aux
              dimensions commerciales et organisationnelles d’un projet.
            </p>
            <Link to="/projects/orbitaal" className="text-link">
              En savoir plus →
            </Link>
          </article>
          <article className="experience-entry">
            <p className="eyebrow">Premières expériences</p>
            <h3>Stages en développement</h3>
            <p>
              Développement C# / .NET chez Eiffage Énergie Systèmes en 2022 et
              C++ chez Adjustem en 2021.
            </p>
          </article>
          <h2>Formation</h2>
          <ul className="education-list">
            <li>
              <strong>2022–2024 · Master CCM</strong>
              <span>UPJV · Saint-Quentin</span>
            </li>
            <li>
              <strong>2021–2022 · Licence professionnelle RGI</strong>
              <span>UPJV · Amiens</span>
            </li>
            <li>
              <strong>2020–2021 · Licence MIAGE</strong>
              <span>UPJV · Amiens</span>
            </li>
            <li>
              <strong>2017–2020 · DUT Informatique</strong>
              <span>IUT · Amiens</span>
            </li>
          </ul>
        </div>
        <aside className="about-aside">
          <h2>Mes outils au quotidien</h2>
          <h3>Backend & données</h3>
          <p>Java · Spring Boot · C# · .NET · API REST · SQL · PostgreSQL</p>
          <h3>Frontend</h3>
          <p>React · TypeScript · JavaScript · Redux · HTML / CSS</p>
          <h3>Qualité & infrastructure</h3>
          <p>Git · Tests · Docker · GitHub Actions · SonarCloud · GCP</p>
          <h3>En dehors du code</h3>
          <p>
            Guitariste depuis environ vingt ans, je joue en groupe et travaille
            sur mes propres compositions rock. La création musicale occupe une
            place importante dans ma vie.
          </p>
          <a className="button secondary" href={profile.cv} download>
            Télécharger mon CV
          </a>
        </aside>
      </div>
      <div className="about-next">
        <h2>Et aujourd’hui ?</h2>
        <p>
          Basé à Amiens et mobile en Hauts-de-France, je recherche un poste
          Java, .NET ou Fullstack. Je poursuis également le développement de
          DataPulse pour approfondir Spring Boot et la livraison d’une
          application complète.
        </p>
        <Link className="text-link" to="/contact">
          Échanger sur une opportunité →
        </Link>
      </div>
    </section>
  );
}
export default About;
