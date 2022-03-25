/*Object.preventExtensions  -> vai previnir, impedir que seu objeto seja estendido, ou seja, não consegue aumenta 
o numero de atributos, adicionar novos. Podem ser excluídos porém não adicionados*/

const produto = Object.preventExtensions({
	nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível: ',Object.isExtensible(produto))
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)

//Object.seal (selar) Não consegue adicionar novos atributos e nem excluir novos atributos, porém é possível alterar os valores dos atributos do objeto

const pessoa = {nome: 'Daniel', idade: 37}
Object.seal(pessoa)
console.log('Selado:' , Object.isSealed(pessoa))
pessoa.genero = 'Masculino'
pessoa.nome = 'Danilo'
delete pessoa.idade
console.log(pessoa)

//Pbject.freeze = Selado + valores constantes -> não consegue alterar nada, nem os atributos nem os valores

const carro = {marca: 'Renault', cor: 'Azul metalico'}
Object.freeze(carro)
console.log('Frozen let it go:' , Object.isFrozen(carro))
carro.tipo = '4 portas'
carro.marca = 'Citroen'
delete carro.cor
console.log(carro)