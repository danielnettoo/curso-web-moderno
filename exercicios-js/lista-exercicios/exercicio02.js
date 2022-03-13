function triangulo(ladoA, ladoB, ladoC) {
	if (ladoA == ladoB && ladoB == ladoC){
		return 'Triangulo Equilátero'
	} else if (ladoA == ladoC || ladoA == ladoB || ladoB == ladoC) {
		return('Triangulo Isósceles')
	} else {
		return ('Triangulo Escaleno')
	}
}

console.log(triangulo(3,3,3))
console.log(triangulo(3,6,7))
console.log(triangulo(3,7,9))