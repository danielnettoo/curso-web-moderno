const pessoa = {
     saudacao: 'Seja bem vindo',
     falar() {
          console.log(this.saudacao)
     }
}

pessoa.falar()

const falar = pessoa.falar
falar() // aqui temos um conflito entre paradigmas: o Funcional e o Orientado a Objeton

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()