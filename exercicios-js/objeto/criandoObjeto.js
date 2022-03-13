//usando a notação literal
const obj1 = {}
console.log(obj1)

//Objet em JS  ----- Nesse caso observamos que Object é uma function e new Object é um objeto
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Função construtora
function Produto(nome, preco, desconto){
	this.nome = nome  //Nesse caso estou colocando nome visível para fora do objeto, e quem quiser alterar o valor, externamente a função produto
	this.getPrecoDoDesconto = () => {
		return preco * (1- desconto)
	}
}

const produto1 = new Produto('Caneta', 4.99, 0.15)
const produto2 = new Produto('Laptop', 3099.00, 0.12)

console.log(produto1.nome, produto1.getPrecoDoDesconto())
console.log(produto2.nome, produto2.getPrecoDoDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
	return {
		nome,
		salarioBase,
		faltas,
		getSalario(){
			return (salarioBase/ 30) * (30 - faltas)
		}
	}
}

const funcionario1 = criarFuncionario('Daniel', 6537.00, 3)
console.log(funcionario1.nome, funcionario1.getSalario())

//Função famosa que retorna objeto com JSON ... transformando JSON em objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)