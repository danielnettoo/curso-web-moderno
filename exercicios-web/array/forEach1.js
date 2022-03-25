const aprovados = ['Agatha', 'Breno', 'Daniel', 'Raquel']

//do método utilizando a fuction tradicional dentro do parâmetro forEach
aprovados.forEach(function(nome, indice) {
	console.log(`${indice + 1}: ${nome}`)
})

//passar uma arrow function com apenas um unico parâmentro
aprovados.forEach(nome => console.log(nome))

//armazenar uma função em uma variável e passar essa fução por parâmetro no forEach 
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)
