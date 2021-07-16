const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) { // Utilizando o FOR IN você acessa os atributos do array, ou seja, seu indice 
    console.log(i, notas[i])
}

const pessoa = { //Você também pode percorrer os atributos de um objeto
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    altura: 163
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}