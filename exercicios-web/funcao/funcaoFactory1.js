// Funcao Factory é uma função que sempre  retorna objeto

//Factoy simples
function criarPessoa() {
     return {
          nome: 'Daniel',
          sobrenome: 'Netto'
     }
}

console.log(criarPessoa())