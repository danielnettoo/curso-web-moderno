const fabricantes = ["MERCEDES", "AUDI", "BMW"]

function imprimir(nome, indice) {
     console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))


// nesse caso a chamada da funcão ocorre quando o array percorre os elementos
// a cada novo indice percorrido, temos uma nova chamada