// Array em JS é um objeto

let aprovados = new Array('Lany', 'Paulo', 'Giselle')
console.log(aprovados)

aprovados = ['Paulo', 'Giselle', 'Lany']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Daniel'
aprovados.push('Loki, Fox, Eros, Luna')
console.log(aprovados.length)
console.log(aprovados)

aprovados [9] = 'Fulano'
console.log(aprovados.length)
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados)

aprovados = ['Paulo', 'Giselle', 'Lany']
console.log(aprovados)
aprovados.splice(1, 1, 'Daniel')
console.log(aprovados)

provados = ['Paulo', 'Giselle', 'Lany']
console.log(aprovados)
aprovados.splice(1, 0, 'Daniel')
console.log(aprovados)


/*SPLICE é um método onde você consegue incluir elementos em um índice, excluir elemento sde um determinado índice,
consegue excluir e adicionar elementos num determinado índice ao mesmo tempo
Sua estrutura é: primeiro parametrô é o Índice, o segundo é a quantidade de elementos que você quer excluir
a partir daquele indice e depois quantos elementos você quiser adicionar*/