const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notasBaixas1 = []
for (let i in notas) {
     if (notas[i] < 7) {
          notasBaixas1.push(notas[i])
     }
}

console.log(notasBaixas1)

//com callBack
const notasBaixas2 = notas.filter(function (nota) {
     return nota < 7
})

console.log(notasBaixas2)

//com callBack usando arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)


//outra maneira de arrow fuction com function que pode ser reusar para usar em outros locais
const notaMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notaMenorQue7)

console.log(notasBaixas4)