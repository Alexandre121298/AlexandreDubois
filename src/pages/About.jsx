import "./style/About.css";

function About() {
  return(
    <section className="about fade-in">
      <h1>À propos de moi</h1>
      <p>
        Je suis un développeur web passionné par la création d’expériences
        utilisateur modernes et performantes. J’aime le code propre, les
        interfaces claires et l’apprentissage continu.
      </p>

      <div className="skills">
        <h2>Compétences</h2>
        <ul>
          <li>✔️ React, JavaScript (ES6+)</li>
          <li>✔️ HTML5, CSS3, Flexbox, Grid</li>
          <li>✔️ Git, GitHub, GitFlow</li>
          <li>✔️ Responsive Design & Accessibilité</li>
        </ul>
      </div>
    </section>
  )
}

export default About;
