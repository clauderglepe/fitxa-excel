// Posa un espai dur entre una xifra i els símbols % o €, perquè mai quedin separats al final d'una línia.
// Segons la normativa catalana, entre la xifra i el símbol hi va un espai ("10 %", "500 €").
export default function remarkNbsp() {
  return (tree) => {
    const recorre = (node) => {
      if (node.type === 'text') {
        node.value = node.value.replace(/(\d) (%|€)/g, '$1\u00A0$2');
      }
      if (node.children && node.type !== 'code' && node.type !== 'inlineCode') {
        node.children.forEach(recorre);
      }
    };
    recorre(tree);
  };
}
