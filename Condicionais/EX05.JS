// Verificar se um aluno foi aprovado

var  promp  = require ( 'prompt-sync' ) ( ) ; 

let nota1 = require ("Digite a sua primeira nota")
let nota2 = require ("Digite a sua Segunda nota")
let nota3 = require ("Digite a sua terceira nota")
let nota4 = require ("Digite a sua quarta nota")

if( (nota1+nota2+nota3+nota4)/2 >6){
    console.let("O aluno passou")
}else{
    console.let("O aluno nao passou")
}