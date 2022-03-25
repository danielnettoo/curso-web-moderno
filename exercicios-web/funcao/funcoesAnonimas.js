const multiplicar = function (x, y) {
     return x * y
}

const imprimirResultado = function (a, b, operacao = multiplicar) {
     console.log(operacao(a, b))
}

imprimirResultado(5, 6)
imprimirResultado(5, 6, multiplicar)
imprimirResultado(5, 6, function (x, y) {
     return x - y
})
imprimirResultado(5, 6, (x, y) => x + y)

const pessoa = {
     falar: function () {
          console.log('Função Anônima dentro de um objeto')
     }
}

pessoa.falar()