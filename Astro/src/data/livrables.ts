import { z } from 'astro/zod';

export const typesLivrables = {
	reglementaire: { label: 'Textes réglementaires' },
	guide: { label: 'Guides' },
	rex: { label: 'Retours d’expérience (REX)' },
	divers: { label: 'Divers' },
} as const;

function isDocumentLink(value: string): boolean {
	if (value.startsWith('/') && !value.startsWith('//') && !value.includes('\\')) {
		return !/[\u0000-\u001f]/.test(value);
	}
	try {
		const url = new URL(value);
		return ['https:', 'http:', 'file:'].includes(url.protocol)
			&& (url.protocol === 'file:' || Boolean(url.hostname));
	} catch {
		return false;
	}
}

export const livrableSchema = z.object({
	titre: z.string().trim().min(1),
	type: z.enum(['reglementaire', 'guide', 'rex', 'divers']),
	lien: z.string().trim().refine(isDocumentLink, {
		message: 'Utilisez une URL HTTP(S), /documents/fichier.pdf ou une URL file://. Pour un partage réseau, convertissez le chemin en URL file://serveur/partage/fichier.pdf.',
	}),
	commentaire: z.string().trim().optional(),
});

export type Livrable = z.infer<typeof livrableSchema>;

/** Resolve files in public/ against the deployed site's base path. */
export function resolveDocumentLink(link: string, basePath: string): string {
	const base = basePath.replace(/\/?$/, '/');
	if (!link.startsWith('/') || base === '/' || link.startsWith(base)) return link;
	return `${base}${link.slice(1)}`;
}
