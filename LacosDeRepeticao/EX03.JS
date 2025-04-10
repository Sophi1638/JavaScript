// Verificar senha com tentativa até acertar(Use o While)

var  promp  = require ( 'prompt-sync' ) ( ) ; 

let senha ="abc123"
let resposta = promp ("Qual a senha?")
let pergunta = promp ("Qual a senha?")

while(resposta !==senha ){
    console.log("A sua resposta foi diferente do que o esperado tente denovo")
    resposta = promp ("tente de novo")
}