# Fitxa d'Excel avançat (Astro + Netlify)

Web accessible (WCAG 2.2 AA) amb el contingut de la fitxa en català, dividit en 11 passos curts.

## Requisits

Node.js **22.23.4 o superior** (Astro 7). En Windows/WSL: `node -v` per comprovar-ho.

## Ordres

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera la carpeta dist/
npm run preview   # prova la versió compilada
```

## Desplegament a Netlify

**Opció 1 (recomanada): amb Git.** Puja el projecte a GitHub/GitLab, a Netlify tria _Add new site → Import an existing project_ i selecciona el repositori. Netlify llegeix `netlify.toml` (ordre `npm run build`, carpeta `dist`, Node 22). No cal res més.

**Opció 2: arrossegant la carpeta.** Executa `npm run build` i arrossega `dist/` a https://app.netlify.com/drop.

## Contingut

Cada pas és un fitxer a `src/content/passos/` (`.mdx`). L'ordre el marca `ordre` a la capçalera del fitxer.
Dins del text pots usar:

- `<Exercici id="A1"> ... </Exercici>`: exercici amb casella «He acabat» (es recorda al navegador).
- `<TaulaDades nom="vendes" />`: taula de dades amb botó per copiar-la a Excel. Les dades són a `src/data/taules.ts`.
- `<Taula etiqueta="..."> ... </Taula>`: embolcall per a una taula en Markdown (desplaçable amb teclat).
- `<kbd>Ctrl</kbd>`: tecles. Les fórmules i funcions, amb accents greus: `` `XLOOKUP` ``.

## Ajustos de lectura i versió per imprimir

- **Ajustos de lectura** (capçalera): tema automàtic/clar/fosc i mida de la lletra (normal 100 %, gran 125 %, molt gran 150 %). Es desen al navegador i s'apliquen abans de pintar la pàgina (`public/ajustos-init.js`), així no hi ha parpelleig. Sense JavaScript el panell no es mostra i la web segueix el dispositiu.
- **Versió per imprimir** (`/imprimeix/`): tots els passos en una sola pàgina, amb les taules obertes. En imprimir (també des de qualsevol pas), s'amaguen els menús, el paper surt sempre en clar i amb lletra fixa de 11 pt, i les caselles «He acabat» surten marcades o buides segons el progrés. No inclou el solucionari.
- Els colors són a `src/styles/global.css` (variables amb `light-dark()`); per canviar-los, edita només aquell bloc i torna a comprovar els contrasts.

## Bloqueig de «Següent» i enviament per correu

- **Bloqueig:** a les pàgines amb exercicis, el botó «Següent» queda bloquejat fins que es marquin tots els exercicis. El botó segueix sent enfocable amb teclat, està marcat amb `aria-disabled` i un missatge visible (`role="status"`) explica què falta. L'avís «Abans de començar» surt a cada pàgina amb exercicis i hi ha un apartat «Com avançar» a la portada.
- **Exercicis opcionals** (`<Exercici ... opcional>`, per exemple l'Ampliació): també bloquegen el botó, però es poden descartar amb la casella «No faré els exercicis opcionals» (`<SaltaOpcionals />`), de manera que ningú queda encallat. Si no vols que bloquegin mai, treu `data-opcional` de la condició a `src/layouts/Base.astro`.
- **Menú «Tots els passos»:** permet anar a qualsevol pas; el bloqueig només afecta el botó «Següent». Ho indica una nota dins del menú.
- **Correu:** a l'última pàgina, el component `<EnllacCorreu />` crea un enllaç `mailto:` amb l'assumpte i el text preparats. El text inclou la llista d'exercicis que l'alumne ha marcat com a fets (es llegeix del navegador en fer clic; la llista d'exercicis s'obté dels fitxers `.mdx`, per tant no cal mantenir-la a mà). Un enllaç de correu **no pot adjuntar fitxers**: la pàgina avisa l'alumne que ha d'adjuntar l'Excel ell mateix.
- **Destinatari:** defineix la variable `PUBLIC_EMAIL_ENTREGA` (fitxer `.env` en local, o _Site configuration → Environment variables_ a Netlify). Si no la defineixes, el correu s'obre sense destinatari. L'adreça es veurà a la web.

## Solucionari (només docents)

`solucionari.mdx` **no es publica per defecte**. Per veure'l:

- En local: copia `.env.example` a `.env`.
- A Netlify: només si decideixes publicar-lo (qualsevol persona amb l'enllaç el podrà llegir), afegeix la variable `INCLUDE_SOLUCIONARI=true`.

La pàgina porta `noindex` i un avís. Si el publiques, l'enllaç apareix al menú «Tots els passos».

## Logotips

Posa els fitxers a `src/assets/logotips/` (vegeu `LLEGEIX-ME.txt`). Surten al peu amb text alternatiu.

## Accessibilitat: què s'ha fet i què cal provar

Fet i comprovat: `lang="ca"`, enllaç per saltar al contingut, un sol `h1` per pàgina, jerarquia d'encapçalaments, navegació amb teclat i focus visible, taules amb `caption` i `scope`, regions desplaçables accessibles amb teclat, `aria-live` en copiar, tipus de lletra Atkinson Hyperlegible Next (auto-allotjat), mode clar i fosc (automàtic o triat per l'usuari), mida de lletra ajustable, `zoom` i `reflow` fins a 320 px, mida mínima dels objectius de 44 px, `prefers-reduced-motion`, colors forçats. Auditoria automàtica amb axe-core: 0 violacions. Contrasts calculats: tots per sobre de 4,5:1 (text) i 3:1 (components).

Pendent de provar a mà abans de publicar: lector de pantalla (NVDA amb Firefox/Chrome i VoiceOver), zoom al 200 % i 400 %, navegació només amb teclat, mode d'alt contrast de Windows.
