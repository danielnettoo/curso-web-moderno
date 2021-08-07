//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manupular variaveis externas à função 

//Contexto léxico em ação

const x = 'Global'

function funcaoA() {
     const x = 'Local'

     function funcaoB() {
          return x
     }
     return funcaoB
}

const minhaFuncao = funcaoA()
console.log(minhaFuncao())