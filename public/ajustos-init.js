// S'executa abans de pintar la pàgina, perquè el tema i la mida de lletra triats no "parpellegin".
(function () {
  try {
    var a = JSON.parse(localStorage.getItem('fitxa-excel:ajustos') || '{}');
    var d = document.documentElement;
    if (a.tema === 'clar' || a.tema === 'fosc') d.dataset.tema = a.tema;
    if (a.mida === 'gran' || a.mida === 'molt-gran') d.dataset.mida = a.mida;
  } catch (e) {}
})();
