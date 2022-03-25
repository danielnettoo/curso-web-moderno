class Lancamento {
	constructor(nome = 'Genérico', valor = 0) {
		this.nome = nome
		this.valor = valor
	}	
}

class CicloFinanceiro {
	constructor(mes, ano) {
		this.mes = mes
		this.ano = ano
		this.lancamentos = []
	}

	adicionarLancamentos(...lancamentos) {
		lancamentos.forEach(element => this.lancamentos.push(element));
	}

	resultado(){
		let valorConsolidado = 0
		this.lancamentos.forEach(element => {
			valorConsolidado += element.valor
		})
		return valorConsolidado
	}
}

const salario = new Lancamento('Salario', 6400)
const contaDeLuz = new Lancamento('Luz', -200)
const contaCelular = new Lancamento('Celular', -40)

const contas = new CicloFinanceiro(3, 2022)
contas.adicionarLancamentos(salario,contaDeLuz,contaCelular)
console.log(contas.resultado())
