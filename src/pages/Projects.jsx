import "./style/Project.css";

function Project() {
  return(
    <section className="projects-section fade-in">
      <h2>Mes Projets</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src="/images/project1.png" alt="Projet 1" />
          <h3>Projet 1</h3>
          <a href="https://lien-vers-projet.com" target="_blank" rel="noreferrer">Voir</a>
        </div>
        <div className="project-card">
          <img src="/images/project2.png" alt="Projet 2" />
          <h3>Projet 2</h3>
          <a href="https://lien-vers-projet.com" target="_blank" rel="noreferrer">Voir</a>
        </div>
        {/* Ajoute d'autres projets ici */}
      </div>
    </section>
  )
}

export default Project;
