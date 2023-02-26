/* High-Order Function */


// Em High-Order , conseguimos chamar funções dentro de outra função como usado abaixo
// Criei uma função onde recebe 3 parametros e o 3 parametro e uma função
// Na execução passamos os parametros normais e o terceiro você chama a função criada , no caso somar
// Dentro da aplicação ele vai pegar o parametro que foi chamado e substituir pela função existente
// No caso ele troca a operacao pela função soma criada que recebe os 2 parametros e executa a função dentro da função

function soma(a ,b ,operacao) {
    let resultado = operacao(a , b)
    return resultado
}

function somar(a , b) {
   return a + b 
}

console.log(soma(2 ,2 ,somar))


// High-Order com Function Anonima
// Lembrando que as funções anonimas não são alocadas como principais no começo
// entã0 ela tem que ser lida e depois executada

let resultado2 = function(a , b ,operacao){
    let resultado3 = operacao(a ,b)
    console.log(resultado3)
    return resultado3
}

function diminuir(a ,b) {
    return a - b
}

resultado2(6 ,6, somar)

 // Fazendo essa high-ORder podemos reaproveitar os codigos e passar outras funções dentro da função
 // No caso to usando a function soma para diminuir 2 valores , apenas trocando a função interna.

 console.log(soma(4 ,3 , diminuir))

 // Posso criar um função anonima tb dentro da High-Ordem , assim
console.log(
 soma(4 , 9 , function(a , b){
    return a + b
 }))


 // Com isso não preciso ter uma função criada , posso apenas desenvolver uma função na declaração
