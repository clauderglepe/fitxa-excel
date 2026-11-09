import { getCollection } from 'astro:content';

// El solucionari només es publica si es defineix INCLUDE_SOLUCIONARI=true
// (fitxer .env en local o variable d'entorn a Netlify).
const valor =
  import.meta.env.INCLUDE_SOLUCIONARI ?? (globalThis as any).process?.env?.INCLUDE_SOLUCIONARI;
export const mostraDocent = valor === 'true';

/** Passos per a l'alumnat, en ordre. */
export async function getSequencia() {
  const tots = await getCollection('passos');
  return tots.filter((e) => !e.data.docent).sort((a, b) => a.data.ordre - b.data.ordre);
}

/** Pàgines per a la persona docent (buit si no s'han activat). */
export async function getDocents() {
  if (!mostraDocent) return [];
  const tots = await getCollection('passos');
  return tots.filter((e) => e.data.docent).sort((a, b) => a.data.ordre - b.data.ordre);
}
