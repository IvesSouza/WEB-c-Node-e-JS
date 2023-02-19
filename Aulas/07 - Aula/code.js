/* CODE - JS  - Array */
let arry = [] // Criação do Array


// Adicionar elementos no Array
arry.push("__ ITEM A ADC __")


// Unshift : Adiciona elementos no começo do Array
arry.unshift("__ ITEM A ADC __")


// pop : Remover um elemento do final do array
arry.pop()

// shift : Remover um elemento do começo do array
arry.shift()


//includes : Pesquisar por um elemento
arry.includes("__ Texto Exato ___")

// indexOf : Busca o index de um item e volta a posição dele
arry.indexOf("__ITEM___")

//slice : Copiar uma parte do array e salvar em outro array.
const array_novo = arry.slice(0, 4) // posições do array
const array_novo1 = arry.slice(-4,0) // Pega as posições da traz para frente no array para a copia


// Concat : Concatenar 2 arrays
const sociedade =  array_novo.concat(array_novo1,"", arry) // da para concatenar varios arrays ou adicionar elementos entre...

//substituição de elementos , ele pega um item no caso de posição 1 no arry e substitui pelo item que coloquei no final
const arry.subisti = sociedade.splice(arry,1,"__item para substituir__")

// Iterar os elementos no array (percorrer os elementos)
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}