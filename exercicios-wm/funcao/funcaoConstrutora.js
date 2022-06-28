function Carro(velocidadeMaxima = 200, delta = 5) {
     //atributo privado - atributo que pertence apenas a função, nesse caso a function Carro()
     let velocidadAtual = 0

     //método publico
     this.acelerar = function () {
          if (velocidadAtual + delta <= velocidadeMaxima) {
               velocidadAtual += delta
          } else {
               velocidadAtual = velocidadeMaxima
          }
     }

     //metodo publico
     this.getVelocidadeAtual = function () {
          return velocidadAtual
     }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())