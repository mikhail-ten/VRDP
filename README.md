# VRDP

Site VRDP (Voirie, réseaux divers et paysage) construit avec le template officiel Astro Starlight.

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```sh
npm create astro@latest -- --template starlight
```

## Structure

```text
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight cherche les fichiers `.md` ou `.mdx` dans `src/content/docs/`.

## Commandes

| Commande | Action |
| :-- | :-- |
| `npm install` | Installe les dépendances |
| `npm run dev` | Lance le serveur local |
| `npm run build` | Génère le site statique dans `dist/` |
| `npm run preview` | Prévisualise le build localement |
| `npm run astro -- --help` | Affiche l'aide de l'Astro CLI |

## Déploiement

Chaque push sur `main` lance le workflow GitHub Actions dans `.github/workflows/deploy.yml`.

URL prévue : https://mikhail-ten.github.io/vrdp/
