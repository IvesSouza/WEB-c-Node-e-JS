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
 


 // Comparação de dados

 == : Igual sem considerar o modelo da VAR
 === : Comparação de Igualdade , levando em consideraçãoa tipagem da variavel
 != : Diferença de variaveis sem considerar a tipagem da variavel
 !== : Diferença de variaveis Considerando a tipagem da variavel
 OUtros : > | >= | < | <=   

 // Operadores Logicos

 e (and) : Apenas Verdadeiro com Verdadeiro que é igual a true
 ou (or) : Algum sendo True a resposta é true
 não (not) :


 // 

 // Laço de repetição onde ele se executa apenas 1 e depois verifica se tem que manter em loop
 do {
    
 } while (condition);


 // Estruturas de Dados > Armazenar , ORrdanizar os dados (geral)
 Lista Ligada = Coleção ordenada de valores onde cada elemnto aponta para o proximo
 Array = Coleção de elementos que podem ser identificados por um Indice
 File (queue) = Coleção de elementos onde o primeiro elemento a ser tirado deve ser o primeiro a entrar(primeiro a entrar , o primeiro a sair)
 Pilha (Stack) = Coleção de elementos onde o primeiro elemente a ser retirado deve ser o ultimo elemento (push / pop)
 Arvore (tree) = Conjunto do elemento chamada de nós organizados em estrutura hierarquica (não sequencial) , ou seja , podendo estar abaixo ou a cima de outros nós

 // Estruturas de Dados > Armazenar , ORrdanizar os dados (javascript)

 Listas (arrays) :
    Pode usar todos os modelos de dados dentro dela (num , int , floar , string ..)
    Utiliza o [] para criação do Array
    Funçẽões :
        Enfileirar / Desenfilerar
        Empilhar / desempilhar
        Achar o Indice
        Cortar / concatenar
 Dicionários : 
 Valor & Referencia :


 // Array Bi-direcionais

 cont arry = [] // Array comum de 1 posição


 // Array multiplos array
 cont arr = [ 
    [
        "Array 1"

    ],[
        "Array 2"

    ],[
        "Array3"
    ]

 ] 

 // Chamar array Simples
 console.log(arr[INDEX])

 // Chamar o Array ,dentro de outro Array

 console.log(arr[INDEX][INDEX_DO_Segundo_array_interno])

 // Vai colocando [] dentro da chamada do array até acessar a posição desejada
 // Acessando Array com 3 array dentros

 console.log(arr[INDEX][INDEX_1][INDEX_2][INDEX_N])

 // Usar o console.table(VAR) para gerar uma tabela no depurador

 console.table(VAR)

 // Operação com Array Bi-Direcionais
 // Para adicionar em uma array com sub niveis de array primeiro falamos para o debug qual a linha que desejamos incrementar , da seguinte forma:
 array[INDEX_LINHA].push("__ ITEM A SER ADICIONADO __")

 // interar Array com muitos arrays Internos
 for (let index = 0; index < array.length; index++) {
    for (let j = 0; j < array.length[i]; j++) {
        const elemento = arry[index][j]
        console.log("Posição" + i + ',' + j )
    }

 }

 // Objetos em JS
 


 // Function

 // Entrada padrão de Funções
 function VAR(params) {
    
 }

 // Funcção com passagem de parametroe definição de valor padrão
 function name(PARMENTRO = "VALOR PADRAO") {
    
 }

 //Criação de usuario com Function
 function novoUser(nome ,senha ,email ,telefone) {
    const usuario ={
        nome, // => é igual a isso nome: nome
        email, // => é igual a isso email: emial
        senha, // => é igual a isso senha: senha
        telefone // => é igual a isso telefone: telefone
    }
    
 }

 // Função com muitos parametros , transformamos em um objeto apenas e mostra apenas ele

 function funcaoMuitosParametros(valoresGrandes) {
    // Codigo ....
 }

 const valoresGrandes = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereço: "",
    aniversario: ""
 }

 // O Return da função pode ser qualuqer tipo de dado ...

 function name(params) {
    // codigo...
    return X //dados a ser retornado
 }

 // Uma return só pode retornar uma unica vez , mais de uma vez ele da erro

 

 // Funções anonimas de JS 