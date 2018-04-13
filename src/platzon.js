export default function platzon(txt) {

  // palabras palindromas
  const reverse = (txt) => txt.split('').reverse().join('');

  function minMay(txt) {
    const length = txt.length;
    let trad = '';
    let capitalize = true;
    for (let i = 0; i < length; i++) {
      const char = txt.charAt(i)
      trad += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return trad
  }
  if (txt == reverse(txt)) {
    return minMay(txt)
  }
  // palabras terminadas en ar
  if (txt.toLowerCase().endsWith('ar')) {
    txt = txt.slice(0, -2);
  }
  // palabras que comienzan por z
  if (txt.toLowerCase().startsWith('z')) {
    txt += 'pe';
  }
  // palabras de más de 10 caracteres
  const length = txt.length
  if (length >= 10) {
    const firstHalf = txt.slice(0, Math.round(length / 2));
    const secondHalf = txt.slice(Math.round(length / 2));
    txt = `${firstHalf}-${secondHalf}`;
  }
  return txt
}
