/// Verifique se o usuario pode tirar carteira de moto (=>18 anos)
/// qual sua idaide
///SE for maior de idade aparecera ("Parabens voce tem a idade minia nessessaria para tirar sua carteira de motoriata")
///SE for menos de idade aparecera("Voce ainda nao tem idade para tirar a carteira")
var  promp  = require ( 'prompt-sync' ) ( ) ; 

let idade = promp("Ola, digite sua idade: ") ;

// if(idade ===18){
//     console.log("a variavel [e um numero")
// }

if(idade >=18){
    console.log("Parabens voce tem a idade minia nessessaria para tirar sua carteira de motoriata");
}else if(idade<18){

    console.log("Voce ainda nao tem idade para tirar a carteira");
}else{
    console.log("Essa informacao nao eh valida");
}