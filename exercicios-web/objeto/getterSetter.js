const sequencia = {
	_valor: 1,  //convenção para variável ser acessada apenas internamente
	get valor() {return this._valor++},
	set valor(valor) {
		if(valor > this._valor) {
			this._valor = valor
		}
	}
}