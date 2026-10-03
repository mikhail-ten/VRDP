// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import chapters from './src/data/arborescence.json' with { type: 'json' };

// https://astro.build/config
export default defineConfig({
	site: 'https://mikhail-ten.github.io',
	base: '/VRDP',
	integrations: [
		starlight({
			title: 'VRDP',
			description: 'Voirie, réseaux divers et paysage.',
			pagefind: false,
			pagination: false,
			customCss: ['./src/styles/starlight.css'],
			components: {
				MarkdownContent: './src/components/MarkdownContent.astro',
				Header: './src/components/Header.astro',
				Sidebar: './src/components/Sidebar.astro',
				ThemeProvider: './src/components/LightThemeProvider.astro',
				ThemeSelect: './src/components/EmptyThemeSelect.astro',
			},
			locales: {
				root: {
					label: 'Français',
					lang: 'fr-FR',
				},
			},
			sidebar: [
				{ label: 'Accueil', slug: '' },
				...chapters.map((chapter) => ({
					label: chapter.title,
					collapsed: true,
					items: chapter.pages.map((page) => ({
						label: page.title,
						slug: `${chapter.slug}/${page.slug}`,
					})),
				})),
			],
		}),
	],
});
