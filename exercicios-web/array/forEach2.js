//Como implementar o nosso prórpio forEach, ou seja, como funciona a função forEach

Array.prototype.forEach2 = function(callback){
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this)
	}
}

const aprovados = ['Agatha', 'Breno', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
	console.log(`${indice + 1}: ${nome}`)
})