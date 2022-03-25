function divisorDividendo (divisor, dividendo) {
	console.log('Divisão = ' + Math.floor(divisor/dividendo));
	//ou
	console.log(`Divisão = ${divisor/dividendo}`)

	console.log(`Resto = ${divisor % dividendo}`)
	//ou
	console.log('Resto = ' + Math.floor(divisor%dividendo));
}

divisorDividendo(5,2)