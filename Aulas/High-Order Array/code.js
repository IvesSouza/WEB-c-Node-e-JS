/* High-Order com Array */

// Criando Array para Estudo

const personagem = [
    { nivel: 42 , nome: "Thrall" , raca: "orc" , classe: "Xamã"},
    { nivel: 28 , nome: "Garrosh" , raca: "orc" , classe: "Guerreiro"},
    { nivel: 35 , nome: "Varok" , raca: "orc" , classe: "Guerreiro"},
    { nivel: 35 , nome: "Uther" , raca: "Humano" , classe: "Paladino"},
    { nivel: 26 , nome: "Jaina" , raca: "Humano" , classe: "Manga"},
    { nivel: 39 , nome: "Tyrande" , raca: "Elfo Noturno" , classe: "Sacerdotisa"},
    { nivel: 29 , nome: "Muratin" , raca: "Anão" , classe: "Guerreiro"},
] 

console.log("Criando Tabela com o Array")
console.table(personagem) // Criar tabela
console.log("Buscando um item especifico no array")
console.log(personagem[1].nivel) // Buscar item especifico no array
console.log("Buscando linha intera no Array")
console.log(personagem[2]) // Buscando linha completa no array

console.log("--------------------------------")
console.log("Function com Array")

// MAP : Faz transformações em Array , criando um novo array
// Faz a transformação por elemento do array , percorrendo o array e entendendo o mesmo

// Exemplificação sem o uso do MAP
// Criando um novo array só com o nome do array
console.log("Sem Uso do MAP ----------")
const nomes = [] //array

for (let index = 0; index < personagem.length; index++) {
    nomes.push(personagem[index].nome)
}

console.log(nomes)

// De começo passamos a variavel que o array novo será criado , no caso "nomes1"
// Chamamos o Array (personagem) e atribuimos o .map()
// Com isso ele espera um FntCallBack , uma função mais especifico ..
// nessa function chamamos o Array(Personagem) e falamos que queremos no retorno dela os itens .nome de cada array
// ficando return personagem.nome. Esse retorno salva automaticamente no novo array
// Exemplificação

console.log("Uso do MAP ----------")

const nomes1 = personagem.map(function(personagem){
    return personagem.nome
})

console.log(nomes1)

console.log("\n")
console.log("Sem Uso do Filter ----------")

// Filter : Filtrar elementos do Array e criar um novo array
// Exemplificação sem o uso do Filter
// Criando um novo array só com o nome do array

const filtro1 = []

for (let index = 0; index < personagem.length; index++) {
    if (personagem[index].raca == "orc"){
        filtro1.push(personagem[index])
    }
}

console.table(filtro1)

console.log("\n")
console.log("Uso do Filter ----------")

const filtro2 = personagem.filter(function (personagem) {
    return personagem.raca == "orc"  // Condição que será utilizado na filtragem
})

console.table(filtro2)

// Reduce : Cria um novo Array , só que transforma o Array em um outro elemento , como uma Array , um objeto , um numero ... etc
// Exemplificação  :

const nivelTotal = personagem.reduce(function (valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)

// O reduce espera no minimo 2 parametros , 1 que irá acumular o dados e o 2 que é o objeto a ser selecionado(personagem)
// Depois de passado o return com a expressão desejada , temos que passar os padrões de inicialização da variavel ,no caso do valorAcumulado 
// passamos o valor 0 , pois nossa variavel vai ser uma int de start 0 para soma dos niveis.

console.log(nivelTotal)


// Criando 

const racas1 = personagem.reduce(function (valorAcumulado , personagem){
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
}, {})

console.log(racas1)

//Sort : Metodo Ordenar Array , mudando eles de posição dependendo de algum critério.
// O sort não cria um array , ele simplemente muda o array atual que está sendo usado.
// O sort faz comparação em pares 
// neste exemplo ele faz a comparação entre a e B e ve qual é maior ou menor e vai alocando nas posições , em questão de valores

personagem.sort(function (a ,b){
    return a.nivel - b.nivel  // o returno seja um negativo e um positivo
})


console.table(personagem)

