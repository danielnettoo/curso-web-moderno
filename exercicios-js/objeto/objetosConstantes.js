// pessoa aponta para um endereço de memória, e esse endereço de memória aponta para um objeto
const pessoa = {nome: 'Daniel'}
pessoa.nome = 'Não é o Daniel'
console.log(pessoa)

Object.freeze(pessoa) //congela o objeto e não permite que altere, adicione ou delete qualquer atributo do objeto em questão

pessoa.nome = 'Cebolinha'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome:'Danilo'})
pessoaConstante.nome = 'Beatriz'
console.log(pessoaConstante)
