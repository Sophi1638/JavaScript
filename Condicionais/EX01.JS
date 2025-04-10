// Verificar se um número é positivo, negativo ou zero.

var  promp  = require ( 'prompt-sync' ) ( ) ; 

let numero = promp("Ola, digite sue numero");

if(numero=>0){
    console.log("Esse numero eh positivo")
}else{
    console.log("Esse numero eh negativo")
}