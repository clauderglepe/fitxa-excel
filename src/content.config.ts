import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const passos = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/passos' }),
  schema: z.object({
    title: z.string(),
    // Posició dins la seqüència de passos (només per a les pàgines de l'alumnat).
    ordre: z.number(),
    // Durada orientativa, per exemple "20 minuts".
    durada: z.string().optional(),
    // Pàgines només per a la persona docent (no surten a la seqüència ni es publiquen per defecte).
    docent: z.boolean().default(false),
  }),
});

export const collections = { passos };
