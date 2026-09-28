// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mikhail-ten.github.io',
	base: '/VRDP',
	integrations: [
		starlight({
			title: 'VRDP',
			description: 'Voirie, réseaux divers et paysage.',
			pagefind: false,
			customCss: ['./src/styles/starlight.css'],
			components: {
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
				{
					label: 'Chapitre 1',
					collapsed: true,
					items: [{ autogenerate: { directory: 'chapitre-1' } }],
				},
				{
					label: 'Chapitre 2',
					collapsed: true,
					items: [{ autogenerate: { directory: 'chapitre-2' } }],
				},
				{
					label: 'Chapitre 3',
					collapsed: true,
					items: [{ autogenerate: { directory: 'chapitre-3' } }],
				},
				{
					label: 'Chapitre 4',
					collapsed: true,
					items: [{ autogenerate: { directory: 'chapitre-4' } }],
				},
				{
					label: 'Chapitre 5',
					collapsed: true,
					items: [{ autogenerate: { directory: 'chapitre-5' } }],
				},
				{
					label: 'Chapitre 6',
					collapsed: true,
					items: [{ autogenerate: { directory: 'chapitre-6' } }],
				},
			],
		}),
	],
});
