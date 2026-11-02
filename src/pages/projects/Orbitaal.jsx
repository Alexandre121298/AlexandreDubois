import { Link } from "react-router-dom";

function Orbitaal() {
  return (
    <article className="project-detail fade-in">
      <Link className="text-link" to="/projects">
        ← Tous les projets
      </Link>
      <p className="eyebrow" style={{ marginTop: "2rem" }}>
        Expérience entrepreneuriale passée
      </p>
      <h1>Orbi-Taal — Services numériques</h1>
      <p className="lead">
        Une activité créée avec trois associés pour accompagner les petites
        entreprises dans leur présence sur le web.
      </p>
      <h2>Le projet</h2>
      <p>
        Nous souhaitions proposer des sites web et un accompagnement en
        référencement aux commerçants, artisans et jeunes entreprises.
        L’activité a notamment donné lieu à la réalisation d’un site client.
      </p>
      <h2>Mon rôle</h2>
      <ul>
        <li>Participation à la création et à l’organisation de l’activité.</li>
        <li>Échanges avec les prospects et clarification de leurs besoins.</li>
        <li>Contribution à la conception et à la réalisation de sites web.</li>
        <li>
          Participation à la prospection et à la présentation de notre offre.
        </li>
      </ul>
      <h2>Ce que j’en retiens</h2>
      <p>
        Cette expérience m’a permis de travailler au-delà du code : comprendre
        une demande, définir un périmètre et échanger avec un client. Elle m’a
        aussi confronté à la prospection et à l’organisation collective d’une
        activité.
      </p>
      <p className="note">
        L’activité a été arrêtée. Je présente aujourd’hui Orbi-Taal comme une
        expérience de mon parcours, et je me consacre à ma recherche d’un poste
        de développeur et à mes projets techniques.
      </p>
      <div className="actions">
        <Link to="/projects/datapulse" className="button secondary">
          Découvrir DataPulse →
        </Link>
      </div>
    </article>
  );
}
export default Orbitaal;
