const numeros = [1, 2, 3, 4, 5]

//map é um for com um propósito
let resultado = numeros.map(function(e) {
	return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.' , ',')}`

resultado2 = numeros.map(soma10).map(triplo).map(paraDinheiro)  //pode ser feita essa transformação sucessiva e no final o resultado são todas as transformações
console.log(resultado2)

resultado3 = numeros.map(triplo).map(soma10).map(paraDinheiro)
console.log(resultado3)