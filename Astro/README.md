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
Ajouter le contenu souhaité après l’en-tête YAML. Les intitulés du classeur
ont été conservés ; les adresses utilisent des noms sans accents.
La navigation se fait par le menu latéral : les pages n’affichent ni fil
d’Ariane, ni cartes « Précédent / Suivant ».

`src/data/arborescence.json` définit les titres, les adresses et l’ordre des
chapitres et sous-chapitres. Il alimente le menu et les cartes de l’accueil.
Lors d’une modification de structure, mettre à jour ce fichier
et les pages MDX correspondantes. Il n’est pas synchronisé automatiquement
avec le classeur.

## Livrables

Chaque sous-chapitre affiche automatiquement une section **Livrables** en
premier dans le contenu, sous le titre de la page, sans séparation supplémentaire.
Renseigner les documents dans l’en-tête YAML de sa page `.mdx` :

```yaml
---
title: "Général"
tableOfContents: false
sidebar:
  order: 1
livrables:
  - titre: "Titre du texte réglementaire"
    type: reglementaire
    lien: "https://www.legifrance.gouv.fr/REMPLACER-PAR-LE-LIEN-DU-TEXTE"
    commentaire: "Préciser ici les dispositions utiles au projet."
  - titre: "Guide de conception"
    type: guide
    lien: "/documents/guide-conception.pdf"
  - titre: "Retour d’expérience du chantier"
    type: rex
    lien: "https://serveur.example/partage/rex-chantier.pdf"
    commentaire: |
      Points à retenir du chantier.
      Une deuxième ligne peut compléter la note.
  - titre: "Document complémentaire"
    type: divers
    lien: "file://serveur/partage/document.pdf"
---
```

Les titres et liens ci-dessus sont des **exemples à remplacer**, pas des
documents déjà ajoutés au site. `titre`, `type` et `lien` sont obligatoires.
`commentaire` est facultatif : omettre la ligne pour ne pas afficher de note.
Il s’agit d’une note éditoriale en texte simple, modifiée dans le fichier MDX ;
les visiteurs ne déposent pas de commentaires.

| Type à saisir | Catégorie | Couleur |
| :-- | :-- | :-- |
| `reglementaire` | Textes réglementaires | Rouge |
| `guide` | Guides | Bleu |
| `rex` | Retours d’expérience | Ocre |
| `divers` | Divers | Violet |

Les documents sont regroupés dans cet ordre. Seules les catégories renseignées
affichent une liste. Sans document, seul le titre « Livrables » apparaît,
sans légende ni message d’attente. Les libellés permettent de comprendre les catégories
sans se baser uniquement sur les couleurs.

Pour un fichier inclus dans le site, le placer dans `public/documents/` et
utiliser `/documents/nom.pdf` : le préfixe de déploiement `/VRDP/` est ajouté
automatiquement. Ces fichiers seront publiés avec le site.

Pour un fichier sur un serveur, privilégier une **URL HTTPS** fournie par le
serveur ou l’intranet. Les droits d’accès et la connexion réseau restent ceux
du serveur. Un chemin Windows `\\serveur\partage\document.pdf` doit être
converti en URL `file://serveur/partage/document.pdf` (encoder les espaces en
`%20`). Les navigateurs peuvent bloquer l’ouverture d’une URL `file://` depuis
un site HTTPS ; son utilisation demande une configuration adaptée de
l’environnement intranet. L’hébergement actuel sur GitHub Pages ne rend pas
un partage réseau accessible aux lecteurs : utiliser une URL HTTPS accessible
pour un fonctionnement fiable.

La configuration des champs et des liens est vérifiée lors de la construction.
La disponibilité des documents et les droits d’accès ne sont pas vérifiés.

## Commandes

Exécuter ces commandes depuis le dossier `Astro/`.

| Commande | Action |
| :-- | :-- |
| `npm install` | Installe les dépendances |
| `npm run dev` | Lance le serveur local |
| `npm run build` | Génère le site statique dans `dist/` |
| `npm run preview` | Prévisualise le build localement |
| `npm run astro -- --help` | Affiche l'aide de l'Astro CLI |

Pour rédiger les pages et ajouter des livrables, utiliser `npm run dev` puis
ouvrir l’adresse indiquée dans le terminal : les fichiers enregistrés sont
pris en compte automatiquement. Si un autre serveur utilise déjà le port
4321, le serveur de développement peut utiliser un autre port.

`npm run preview` affiche uniquement le dernier contenu construit dans
`dist/`. Après une modification des pages, exécuter `npm run build` puis
actualiser le navigateur pour la voir dans cette prévisualisation.

## Déploiement

Chaque push sur `main` lance le workflow GitHub Actions à la racine du dépôt,
dans `../.github/workflows/deploy.yml`. Il construit le dossier `Astro/`.

Le site utilise le préfixe `/VRDP/`, y compris en prévisualisation locale.

URL prévue : https://mikhail-ten.github.io/VRDP/
