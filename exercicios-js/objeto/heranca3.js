const pai = {
	nome: 'Daniel',
	corCabelo: 'Castanho escuro'
}
console.log(pai)

const filha = Object.create(pai)
filha.nome = 'Maju',
console.log(filha.nome,filha .corCabelo)

const filho = Object.create(pai, {
	nome: {value: 'Miguel', writable: false, enumerable: true}
})
console.log(filho.nome)
filho.nome = 'Angelo'    //não vai ser alterado por conta das propriedades que foram definidas na linha 12
console.log(`${filho.nome} tem a cor do cabelo ${filho.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filho))

for(let key in filho) {
	filho.hasOwnProperty(key) ?
	console.log(key) : console.log(`Por herança: ${key}`)
}