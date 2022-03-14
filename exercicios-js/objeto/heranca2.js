//Cadeia de protótipos (prototype chain)
Object.prototype.atributo0 = 0 				//evitar esse tipo de manipulação
const avo = {atributo1: 'A'}
const pai = {__proto__: avo, atributo2: 'B'}
const filho = {__proto__: pai, atributo3: 'C'}
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)

const carro = {
	velocAtual: 0,
	velocMaxima: 200,
	acelerarMais(delta) {
		if (this.velocAtual + delta <= this.velocMaxima) {
			this.velocAtual += delta
		} else {
			this.velocAtual = this.velocMaxima
		}
	},
	status() {
		return `${this.velocAtual}km/h de ${this.velocMaxima}km/h`
	}
}

const ferrari = {
	modelo: 'F40',
	velocMaxima: 324 
}

const volvo = {
	modelo: 'V40',
	status() {
		return `${this.modelo}: ${super.status()}`
	}
}

//função que estabelece relação ed protótipo entre 2 objetos
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(120)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())