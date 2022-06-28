const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) { // Nesse caso usamos o floor para que ele arredonde para baixo em caso de notas quebradas
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // Serve para que ele não passe por todas os casos. Ele irá parar e retornar assim que encontrar o caso correto
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)