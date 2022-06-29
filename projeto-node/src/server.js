const porta = 3030

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')



app.get('/produtos', (req, res) => {
	res.send(bancoDeDados.getProdutos())  //Converte automaticamente para JSON
})

app.get('/produtos/:id', (req, res) => {
	res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
	const produto = bancoDeDados.salvarProduto({
		nome: req.body.name,
		preco: req.body.preco
	})
	res.send(produto) //Converte em JSON
})

app.listen(porta, () => {
	console.log(`Servidor executando na porta ${porta}`)
})