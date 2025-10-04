import "./style/About.css";

function About() {
  return (
    <section className="about fade-in">
      <h1>À propos de moi</h1>

      <p>
        Je suis <strong>Alexandre Dubois</strong>, développeur fullstack passionné par le
        développement logiciel et les nouvelles technologies. Diplômé d’un master en ingénierie logicielle
        (Cloud Computing & Mobility – UPJV), j’ai acquis une solide expérience en développement frontend et backend
        à travers mes stages, alternances et missions professionnelles.
      </p>

      <p>
        J’ai un fort attrait pour la programmation orientée objet (Java, C#, .NET), les technologies web modernes
        (React/Redux, API REST, SQL, Docker), ainsi que l’intelligence artificielle et le cloud (GCP).
        Mon profil est orienté solution, qualité du code, et travail en équipe.
      </p>

      <p>
        Parallèlement à mes compétences techniques, je suis animé par une curiosité créative nourrie par mes autres passions : la musique (guitariste depuis 20 ans), 
        le développement de jeux vidéo, le cinéma et la littérature. 
        Ces centres d’intérêt renforcent mon sens de l’analyse, de l’esthétique et de la rigueur dans les projets que je mène.
      </p>

      <div className="skills">
        <h2>Compétences techniques</h2>
        <ul>
          <li>🖥️ Langages : Java, C#, JavaScript, HTML/CSS, SQL</li>
          <li>🧩 Frameworks : React, Redux, .NET Core, PHP</li>
          <li>🔧 Outils : Docker, Git, SharePoint, PowerShell</li>
          <li>☁️ Cloud : Google Cloud Platform (GCP)</li>
          <li>🧠 Autres : IA, DevBooster, développement mobile (Java/Kotlin)</li>
        </ul>
      </div>

      <div className="education">
        <h2>Parcours académique</h2>
        <ul>
          <li>🎓 Master CCM (Conception et Création Multimédia) – UPJV Saint-Quentin (2022–2024)</li>
          <li>🎓 Licence Pro RGI – UPJV Amiens (2021–2022)</li>
          <li>🎓 Licence MIAGE – UPJV Amiens (2020–2021)</li>
          <li>🎓 DUT Informatique – IUT Amiens (2017–2020)</li>
        </ul>
      </div>

      <div className="experience">
        <h2>Expériences professionnelles</h2>
        <ul>
          <li>💼 Ingénieur Études & Dév. – HN-Services / Euro Information (fin 2024)</li>
          <li>💼 Développeur Fullstack – Promize (Isagri) (2022–2024, alternance)</li>
          <li>💼 Stage C# .NET – Eiffage Énergie Systèmes (2022)</li>
          <li>💼 Stage C++ – Adjustem (2021)</li>
        </ul>
      </div>

      <div className="interests">
        <h2>Centres d’intérêt</h2>
        <ul>
          <li>🎸 Guitare depuis 20 ans — participation à des groupes et scènes</li>
          <li>🎮 Développement de jeux vidéo (.Net)</li>
          <li>🎬 Cinéma</li>
          <li>📚 Littérature</li>
        </ul>
      </div>

      <a href="/cv.pdf" download>
        <button className="cv-button-about">Telecharger mon CV</button>
      </a>
    </section>
  );
}

export default About;
