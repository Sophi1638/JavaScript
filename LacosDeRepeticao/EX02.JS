//Um mercado quer listar as frutas disponíveis no estoque. Imprima a lista deste mercado, com dados fixos.


//Como imprimir a lista de forma mais organizada, como exemplo:
        // Frutas do mercado:
        // Maça
        
//Somar números até que o usuário digite 0(Use o While)


var prompt = require('prompt-sync')();


let soma =0;
let num = Number(prompt("Digite um número"));


while(num !== 0){
   //soma!!!!!!!!!!!!
   soma += num;
   num = Number(prompt("Digite um número(Caso queira sair, digite 0)"));
}


console.log(soma);


