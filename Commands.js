/*
# Aqui terá comandos , codigos que foram aprendidos no curos
# Será apenas um bloco de notas , então ignore esse arquivo!
#
# Summario
# Aula 01 - Uso de Windows Alert , Confirm , Prompt
# Aula 02 - Variaveis
*/


// AULA 01 
window.alert('__MENSAGEM__')  // Criação de BOX com WEB
window.confirm('__BOTAO CONFIRMA') // Box  de criação de confirmação
window.prompt('__PROMPT para deixar MSG') // BOX com caixa de texto


// Aula 02
    /* Numbem : Numeros
    --  Infinity :
    --  NaN : 
    String
    Boolean
    null
    undefinid
    Object
    --  Array
    function
    */

// Saber o tipo da variavel via Node.js
cmmd : typeof var >> retorna tipo da variavel



// Aula 03
/*
 Operador + para concatenação : se 2 VAR for String ele concatena
    EX : VAR_String + VAR_String == Concatenar
 Operador + para Adição :  se duas VAR foi number ele faz adição
    EX : VAR_NUM + VAR_NUM == SOMA_das_VAR
*/

/*
Converter Prompt de String para numero:
1. Number.parseInt(VAR) : numero Inteiro
2. Number.parseFloat(VAR) : Numero real
3. number(VAR) : Caso resumido para conversão
*/

/*
Converter String de Number para String:
1. VAR.toString()
2. String(VAR)
*/


// Formatação de String
Concatenação : 'eu Estou aprendendo' + VAR 
Template String : `Eu estou aprendendo ${VAR}`
VAR.length : Quantos caracteres tem a String
VAR.toUpperCase : Transforma tudo em letra maiuscula
VAR.toLowerCase : Transforma tudo em letra minuscula

document.writer() : Abre um codigo HTML para incluir na pagina

// Formatação de Numeros
Adição de casas decimais : VAR.tofixed(__CASA.DECIMAIS__)
Adição de casa Decimais e trocas o "." por ',' : VAR.tofixed(2).replace('.',',')
Transformar em moeda : VAR.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})


// Operadores
/*
+ = soma
- = Menos
* = Vezes
% =  Resto
/ =  Divisão

+= = Mais/Igual  : VAR = VAR + VALOR_PASSADO
    EX : let a = 3
    EX : a += 2  ==  A == 5
-= = Menos/Igual : VAR = VAR + VALOR_PASSADO
*= = vezes/Igual : VAR = VAR + VALOR_PASSADO
/= = Dividido/Igual : VAR = VAR + VALOR_PASSADO
%= = Resto/Igual : VAR = VAR + VALOR_PASSADO

*/


// Incremento | Decremento
/*
++ = Incremento de 1
-- = Descremendo de 1

EX : let a = 2 
EX : a++
EX : Saida : A == 3
*/


// Recursos Nativos dos navegadores
 console.log() // Passa texto ao console
 console.error() // Passa um sinal de erro para console
 console.warn() // Sinal de aviso para o navegador

 console.alert() // Caixa de aviso
 console.prompt() // Caixa de Prompt 
 window.confirm() // Check-box de confirmação e cancelar
 