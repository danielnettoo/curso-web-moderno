let dobro = function (a) {
     return 2 * a
}
console.log(dobro(Math.PI))

dobro = (a) => {
     return 2 * a
}
console.log(dobro(Math.PI))

dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))



let ola = function () {
     return 'Olá'
}
console.log(ola())


ola = () => 'Olá'
console.log(ola())