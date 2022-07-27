// let tem escopo de bloco além do escopo de função e global independente de estar associado a um laço
// const

{
	var a = 2
	let b = 3
	console.log(b)
}
console.log(a)

// Template String  -- posso quebrar em mais de uma linha

const produto = "iPhone"
console.log(`${produto} é muito caro !! `)

const quebra = "Template String"
console.log(`${quebra} pode
ser
quebrada assim`)


// Destructuring

const [l, e, ...tras] = "Daniel"
console.log(l,e, tras)

const {idade: i, nome} = {nome: "Daniel" , idade: 37}
console.log(i, nome)