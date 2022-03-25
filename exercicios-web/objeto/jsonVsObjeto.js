const obj = {a: 1, b: 2, c: 3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))  ERRADO
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))  ERRADO
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))			// Correto é '' fora e "" dentro
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))  // Posso colocar no JSON String, Booleano, Objeto {} e Array []