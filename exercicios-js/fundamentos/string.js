const escola = "Cod3r"

console.log(escola.charAt(4)) //charAt me da a letra que esta dentro daquela posição no array
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //código relacionado a tabela Unicode
console.log(escola.indexOf('3')) //indice associado ao digito escolhido

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) //concat -> Concatenar
console.log('Escola ' + escola + "!") //Outro exemplo de concatenação
console.log(escola.replace(3, 'e')) //faz uma subistituição pelo que vc escolher
console.log(escola.replace(/\d/, 'e')) // /\d/ -> Expressão regular  que ordena subistituir todos os digitos dentro do texto pela letra 'e' 
console.log(escola.replace(/\w/g, 'e')) // /\w/g -> Subistituir todas as letras e digitos (tudo) pela letra 'e'

console.log('Ana,Maria,Pedro'.split(',')) // split você usa para utilizar um separador