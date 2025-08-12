import "../style/projects/Promize.css";

function Promize() {
  return (
    <section className="project-detail fade-in">
      <h1>Projet professionnel : Spotifarm (Promize – Groupe Isagri)</h1>

      <p>
        Dans le cadre de mon master CCM, j’ai réalisé mon alternance sur deux années (2022–2024) chez 
        <strong> Promize</strong>, une entreprise du <strong>Groupe Isagri</strong> spécialisée dans le développement de solutions
        agricoles numériques, notamment via son application phare : <strong>Spotifarm</strong>.
      </p>

      <h2>Rôle et missions</h2>
      <p>
        Lors de la première année de mon alternance, j’ai travaillé sur la <strong>partie backend de Spotifarm</strong> en .NET.
        J’ai participé à la correction de bugs, la gestion de tickets et l’ajout d’évolutions fonctionnelles, tout en montant en
        compétence sur ReactJS en parallèle.
      </p>
      <p>
        La seconde année, j’ai été pleinement intégré à l’équipe pour co-développer une nouvelle fonctionnalité clé de l’application :
        l’<strong>estimation intelligente de la date de récolte du maïs</strong>.
      </p>

      <h2>Fonctionnalité développée : estimation de date de récolte</h2>
      <p>
        L’objectif de cette fonctionnalité est d’aider les agriculteurs à déterminer une date optimale de récolte du maïs
        à partir de <strong>données GPS et météorologiques historiques</strong> collectées par Promize depuis 2018.
      </p>

      <p>
        L’agriculteur renseigne les informations suivantes :
      </p>
      <ul>
        <li>🌽 Le type de culture : maïs grain ou maïs ensilage</li>
        <li>🧬 La variété semée</li>
        <li>💧 Le taux d’humidité visé</li>
        <li>📅 La date de semis (obligatoire)</li>
        <li>🌸 La date de floraison (optionnelle, si observée)</li>
      </ul>

      <p>
        Sur la base de ces données, Spotifarm analyse les <strong>conditions climatiques actuelles</strong> et les compare à
        des <strong>années précédentes présentant une courbe météo similaire</strong>. Si une année passée “ressemble”
        à l’année en cours (en termes de températures, pluviométrie, etc.), le système en déduit un scénario de développement
        probable pour la culture, et en calcule une date estimée de récolte. Une <strong>marge d’erreur est intégrée </strong>
        pour prendre en compte les variations climatiques.
      </p>

      <h2>Développement technique</h2>
      <ul>
        <li>🔧 Création d’interfaces ReactJS dédiées (saisie, affichage, analyse)</li>
        <li>📡 Intégration avec l’API existante pour récupérer les historiques météo et données GPS</li>
        <li>📁 Mise en place du <strong>CRUD complet</strong> autour des données de simulation</li>
        <li>🧪 Développement de <strong>tests fonctionnels</strong> et <strong>tests unitaires</strong></li>
      </ul>

      <p className="note">
        ⚠️ Ce projet étant une application privée développée dans le cadre d’un contrat professionnel,
        le code source ne peut pas être publié publiquement.
      </p>
      <p>
        Pour plus d’informations :{" "}
        <a href="https://www.spotifarm.fr/date-recolte-mais" target="_blank" rel="noopener noreferrer">
          Site officiel de Spotifarm
        </a>
      </p>
    </section>
  );
}

export default Promize;
