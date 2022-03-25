const produtos = [
	{nome: 'Notebook', preco: 2899, fragil: true},
	{nome: 'iPad Pro', preco: 4199, fragil: true},
	{nome: 'Taça de Vidro', preco: 29.90, fragil: true},
	{nome: 'Conjunto vasilha de plástico', preco: 19.90, fragil: false}
]

const produtoCaro = produtos => produtos.preco >= 500
const produtoFragil = produtos => produtos.fragil

resultado = produtos.filter(produtoCaro).filter(produtoFragil)
console.log(resultado)
