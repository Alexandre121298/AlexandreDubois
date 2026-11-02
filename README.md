# Portfolio — Alexandre Dubois

Portfolio React présentant mon profil de développeur Fullstack Java, .NET et React, mes expériences professionnelles et mon projet personnel DataPulse.

- **Portfolio :** https://Alexandre121298.github.io/AlexandreDubois/
- **DataPulse :** https://datapulse-api-722245064686.europe-west1.run.app/
- **Code de DataPulse :** https://github.com/Alexandre121298/datapulse

## Développement local

```sh
npm ci
npm start
```

`npm run dev` lance également le serveur de développement.

## Vérification

```sh
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

## Publication sur GitHub Pages

```sh
npm run deploy
```

Cette commande construit l’application puis publie le dossier `build` sur la branche `gh-pages`. GitHub Pages doit utiliser cette branche. Le routage utilise `HashRouter` pour permettre l’accès direct aux pages sans configuration serveur.

## Mise à jour du contenu

- `src/content.js` : email, GitHub, lien du CV et liens de DataPulse.
- `src/pages/` : accueil, parcours, projets et contact.
- `src/pages/projects/` : fiches détaillées des projets.
- `public/cv.pdf` : document proposé au téléchargement.

Le formulaire de contact utilise la configuration EmailJS existante. Ses tests simulent le service et n’envoient aucun email.
