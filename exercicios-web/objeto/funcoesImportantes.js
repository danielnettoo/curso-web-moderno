const pessoa = {
	nome: 'Daniel',
	idade: 37,
	peso: 60
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) //um array com as keys e os values (tem um array externo com arrays internos com as keys e values)

Object.entries(pessoa).forEach(e => {
	console.log(`${e[0]}: ${e[1]}`)
})

//outra forma é 
Object.entries(pessoa).forEach(([chave, valor]) => {
	console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
	enumerable: true,
	writable: false,
	value: '05/10/1984'
})

pessoa.dataNascimento = '05/10/1994'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const destino = {a: 1}
const objeto1 = {b: 2}
const objeto2 = {c: 3, a: 4}
const objeto = Object.assign(destino, objeto1,objeto2)

Object.freeze(objeto)
objeto.c = 1234
console.log(objeto)



