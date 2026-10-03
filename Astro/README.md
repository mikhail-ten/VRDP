# VRDP

Site VRDP (Voirie, réseaux divers et paysage) construit avec Astro Starlight.

## Structure

Le site est dans `Astro/`, les documents de référence dans `Structure/`.
L’arborescence reprend la feuille **V2** de `../Structure/Arborescence.xlsx` :
21 chapitres et 87 sous-chapitres, dans l’ordre du classeur. La feuille `old1`
est une ancienne version et n’est pas utilisée.

```text
.
├── public/
├── src/
│   ├── components/
│   ├── data/arborescence.json
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight cherche les fichiers `.md` ou `.mdx` dans `src/content/docs/`.

Les chapitres regroupent les pages dans le menu, sans page de sommaire.
Les cartes de l’accueil ouvrent le premier sous-chapitre de chaque chapitre.
Chaque sous-chapitre possède son propre fichier `<chapitre>/<sous-chapitre>.mdx`.
Remplacer « Contenu à venir. » par le texte souhaité. Les intitulés du classeur
ont été conservés ; les adresses utilisent des noms sans accents.

`src/data/arborescence.json` définit les titres, les adresses et l’ordre des
chapitres et sous-chapitres. Il alimente le menu et les cartes de l’accueil.
Lors d’une modification de structure, mettre à jour ce fichier
et les pages MDX correspondantes. Il n’est pas synchronisé automatiquement
avec le classeur.

## Commandes

Exécuter ces commandes depuis le dossier `Astro/`.

| Commande | Action |
| :-- | :-- |
| `npm install` | Installe les dépendances |
| `npm run dev` | Lance le serveur local |
| `npm run build` | Génère le site statique dans `dist/` |
| `npm run preview` | Prévisualise le build localement |
| `npm run astro -- --help` | Affiche l'aide de l'Astro CLI |

## Déploiement

Chaque push sur `main` lance le workflow GitHub Actions à la racine du dépôt,
dans `../.github/workflows/deploy.yml`. Il construit le dossier `Astro/`.

Le site utilise le préfixe `/VRDP/`, y compris en prévisualisation locale.

URL prévue : https://mikhail-ten.github.io/VRDP/
