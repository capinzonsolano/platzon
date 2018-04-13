'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzon;
function platzon(txt) {

  // palabras palindromas
  var reverse = function reverse(txt) {
    return txt.split('').reverse().join('');
  };

  function minMay(txt) {
    var length = txt.length;
    var trad = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = txt.charAt(i);
      trad += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return trad;
  }
  if (txt == reverse(txt)) {
    return minMay(txt);
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
  var length = txt.length;
  if (length >= 10) {
    var firstHalf = txt.slice(0, Math.round(length / 2));
    var secondHalf = txt.slice(Math.round(length / 2));
    txt = firstHalf + '-' + secondHalf;
  }
  return txt;
}