export interface Columna {
  text: string;
  /** Alinea a la dreta (xifres). */
  num?: boolean;
}

export interface Taula {
  /** Nom del full d'Excel. */
  nom: string;
  titol: string;
  descripcio: string;
  columnes: Columna[];
  files: string[][];
}

export const taules: Record<'vendes' | 'productes', Taula> = {
  vendes: {
    nom: 'Vendes',
    titol: 'Taula Vendes',
    descripcio: 'Anomena el full Vendes i enganxa-hi aquesta taula a la cel·la A1.',
    columnes: [
      { text: 'ID', num: true },
      { text: 'Data' },
      { text: 'Comercial' },
      { text: 'Província' },
      { text: 'Codi producte' },
      { text: 'Unitats', num: true },
    ],
    files: [
      ['1', '05/01/2026', 'Núria Vidal', 'Barcelona', 'P01', '40'],
      ['2', '07/01/2026', 'Marc Soler', 'Girona', 'P03', '3'],
      ['3', '12/01/2026', 'Aina Puig', 'Lleida', 'P05', '15'],
      ['4', '14/01/2026', 'Pau Ferrer', 'Tarragona', 'P06', '4'],
      ['5', '19/01/2026', 'Núria Vidal', 'Barcelona', 'P04', '2'],
      ['6', '21/01/2026', 'Marc Soler', 'Girona', 'P02', '200'],
      ['7', '26/01/2026', 'Aina Puig', 'Lleida', 'P03', '1'],
      ['8', '28/01/2026', 'Pau Ferrer', 'Tarragona', 'P01', '25'],
      ['9', '02/02/2026', 'Núria Vidal', 'Barcelona', 'P06', '6'],
      ['10', '04/02/2026', 'Marc Soler', 'Girona', 'P05', '30'],
      ['11', '09/02/2026', 'Aina Puig', 'Lleida', 'P04', '1'],
      ['12', '11/02/2026', 'Pau Ferrer', 'Tarragona', 'P03', '5'],
      ['13', '16/02/2026', 'Núria Vidal', 'Barcelona', 'P02', '120'],
      ['14', '18/02/2026', 'Marc Soler', 'Girona', 'P06', '2'],
      ['15', '23/02/2026', 'Aina Puig', 'Lleida', 'P01', '60'],
      ['16', '25/02/2026', 'Pau Ferrer', 'Tarragona', 'P05', '8'],
      ['17', '02/03/2026', 'Núria Vidal', 'Barcelona', 'P03', '4'],
      ['18', '04/03/2026', 'Marc Soler', 'Girona', 'P04', '3'],
      ['19', '09/03/2026', 'Aina Puig', 'Lleida', 'P06', '5'],
      ['20', '11/03/2026', 'Pau Ferrer', 'Tarragona', 'P02', '80'],
    ],
  },
  productes: {
    nom: 'Productes',
    titol: 'Taula Productes',
    descripcio: 'Anomena el full Productes i enganxa-hi aquesta taula a la cel·la A1.',
    columnes: [
      { text: 'Codi' },
      { text: 'Producte' },
      { text: 'Categoria' },
      { text: 'Preu unitari (€)', num: true },
    ],
    files: [
      ['P01', 'Paper A4 (paquet de 500 fulls)', "Material d'oficina", '4,50'],
      ['P02', "Bolígraf d'escriptura suau", "Material d'oficina", '0,90'],
      ['P03', 'Cadira ergonòmica', 'Mobiliari', '129,00'],
      ['P04', 'Escriptori regulable', 'Mobiliari', '249,00'],
      ['P05', 'Ratolí sense fils', 'Informàtica', '19,90'],
      ['P06', 'Monitor de 24 polzades', 'Informàtica', '139,00'],
    ],
  },
};
