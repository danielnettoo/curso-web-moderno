// não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Botafogo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('botafogo'))
console.log(times.has('Botafogo'))
times.delete('São Paulo')
console.log(times.has('São Paulo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)