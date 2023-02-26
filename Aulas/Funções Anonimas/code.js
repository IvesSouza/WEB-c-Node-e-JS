/* Estrutura de codigo para entendimento de Funções Anonimas */

function defaulte(){
 
    // Estrutura Padrão de uma Função
    // Aqui tenho uma declaração padrão de função 2 variaveis a serem passadas , (A e B)

    function variavel(a ,b){
        return a + b
    }

    // Aqui temos uma equação basica usando uma função convencional
    // Passamos 2 numeros ao chamar a função ela irá retornar o valor da soma

    function soma(a ,b){
        return a + b
    }
    
    let resultado = soma(3 ,4) // Console devolve : 7

    // Agora podemos fazer essa função de forma anonima sem incrementar um nome para função
    // apenas atribuindo ela a uma variavel , assim :

    let somaAnonima = function (a ,b){
        return a + b
    }

    console.log(somaAnonima(4 ,4))

    // Com isso reduzimos o codigo , para que ele fique mais pratico e conseguimos com isso reutilizar
    // a função em qualquer variavel , apenas passando ela por atribuição

    let somaA = somaAnonima
    console.log(somaA(3 ,3))
    
    
}