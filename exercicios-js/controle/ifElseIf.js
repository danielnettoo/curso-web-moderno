//Essa function foi criada como uma regra default para "array" de notas que pode ser usado em qualquer uma das condições
//this esta associado ao Number que é um numero qualquer que vai ser utilizado na function Main


Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}


//Sem a function entre() acima, teriamos que:
//if(nota >= 9 && nota <= 10)  e fazer isso para todos os casos

const imprimirResultado = function(nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)