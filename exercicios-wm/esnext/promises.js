function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))        //.then pode ser chamado inúmeras vezes
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))     // Forma de tratar um erro em uma promise. Chamada apenas uma única vez