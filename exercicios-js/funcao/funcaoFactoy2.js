function criarProduto(nome, preco) {
     return {
          nome: nome,
          preco: preco,
          desconto: 0.1
     }
}

console.log(criarProduto('Caneca', 20.00))
console.log(criarProduto('Camisa', 59.00))