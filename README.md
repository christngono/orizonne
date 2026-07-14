# ORIZONNE — Site web

Site vitrine d'ORIZONNE SARL, startup d'ingénierie économique et financière.
React + Vite, bilingue FR/EN, prêt pour un déploiement Vercel.

## Démarrer

```bash
npm install
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualise le build
```

## Déployer sur Vercel

1. Pousser ce dossier sur un dépôt GitHub / GitLab.
2. Sur [vercel.com](https://vercel.com) : **Add New… → Project**, puis importer le dépôt.
3. Vercel détecte Vite automatiquement. Réglages attendus :
   - Framework preset : **Vite**
   - Build command : `npm run build`
   - Output directory : `dist`
4. Déployer, puis brancher le domaine `www.orizonne.com` dans **Settings → Domains**.

Le fichier [vercel.json](vercel.json) réécrit toutes les routes vers `index.html`,
indispensable pour que `/nous-connaitre`, `/contact`, etc. fonctionnent en accès direct.

En ligne de commande :

```bash
npx vercel        # déploiement de préversion
npx vercel --prod # déploiement en production
```

## Structure

```
src/
  i18n/content.js         ← TOUT le texte du site (FR + EN)
  i18n/LanguageContext.jsx
  components/             ← Header, Footer, Hero, Icon, Reveal, Counter…
  pages/                  ← Home, About, Services, News, Gallery, Contact
  styles/global.css       ← design system (couleurs, boutons, cartes)
  assets/                 ← logo, photos équipe, ouvrages
```

## Modifier le contenu

Presque tout le texte vit dans **`src/i18n/content.js`**. Chaque entrée existe en
`fr` et en `en` : modifier les deux pour garder le site cohérent dans les deux langues.

Les coordonnées de l'entreprise (téléphone, e-mails, adresse, réseaux sociaux, carte)
sont regroupées dans l'objet `COMPANY` en haut de ce même fichier.

## Points à compléter

Ces valeurs sont des espaces réservés à remplacer dans `src/i18n/content.js` :

- `COMPANY.phone` — numéro de téléphone réel
- `COMPANY.email` / `COMPANY.emailRh` — adresses e-mail réelles
- `COMPANY.address` et `COMPANY.mapsQuery` — adresse exacte du siège (la carte Google pointe sur Yaoundé)
- `COMPANY.socials` — URLs Facebook / LinkedIn / YouTube

Autres éléments à brancher plus tard :

- **Formulaire de contact** — il ouvre actuellement le client mail de l'utilisateur
  (`mailto:`). Pour un envoi serveur, brancher une route `/api/contact` (Vercel
  Functions) ou un service type Formspree / Resend dans `src/pages/Contact.jsx`.
- **Newsletter** (`src/pages/News.jsx`) — à connecter à Mailchimp / Brevo.
- **Catalogue de formation** — déposer le PDF dans `public/` et pointer le lien
  de téléchargement dessus dans `src/pages/Services.jsx`.
- **Articles d'actualité** — la page Actualités affiche les rubriques de veille.
  Les articles pourront y être ajoutés (fichiers Markdown ou CMS type Sanity).
- **Vidéos** — l'onglet Vidéos de la galerie est prêt à recevoir les intégrations.
