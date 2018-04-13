const expect = require('chai').expect
const platzon = require('..').default

describe('#platzon', function() {
  it('Palabras palindromas hacemos MAY - MIN.', function() {
    const translation = platzon("somos")
    expect(translation).to.equal("SoMoS")
  })
  it('Palabra términadas en ar se les quita el ar', function() {
    const translation = platzon("Programar")
    expect(translation).to.equal("Program")
  })
  it('Palabras que comienzan por z ponemos terminación PE.', function() {
    const translation = platzon("Zorro")
    const translation2 = platzon("Zarpar")
    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })
  it('Palabras de más de 10 caracteres las separamos por la mitad', function() {
    const translation = platzon("Hahahahaha")
    expect(translation).to.equal("Hahah-ahaha")
  })
})
