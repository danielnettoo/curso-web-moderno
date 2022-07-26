const tecnologias = new Map()	//Map é instânciado a partir no new
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)		//Objeto é retornado a partir do get

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))  //has é para saber se o elemento esta ou não contido no Map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)	//atributo .size para saber quantos elementos estão contidos dentro do Map

chavesVariadas.set(123, 'a')
chavesVariadas.set(789, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)