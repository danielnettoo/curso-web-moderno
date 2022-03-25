const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remeve o último elemento do Array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)  //adiciona novo elemento no array na última posição

pilotos.shift() // remove o primeiro elemento do Array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona novo elemento no array na primeira posição
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')   // escolhi indice 2, não vou remover ninguém, elementos adicionados são: Bottas e Massa
console.log(pilotos)

//remover
pilotos.splice(3, 1)		//escolhi o indice, identifiquei a quantidade de elementos que eu quero remover
console.log(pilotos)

const algunsPìlotos1 = pilotos.slice(2)		//novo array gerado apartir desse método - você pega um pedaço do array
console.log(algunsPìlotos1)

const algunsPìlotos2 = pilotos.slice(1, 4) 		//novo array que vai pegar do indice 1 ao 4 sem pegar o último elemento
console.log(algunsPìlotos2)