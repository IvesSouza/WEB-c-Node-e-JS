/* CODE - JS */
let lista=[]
let listaView = []

function novoPaciente(){
    let nome =  prompt("Digite o nome do Paciente para incluir na Lista")
    lista.push(nome)
    alert("Paciente Incluido na fila de Espera!")
}

function fila_espera(){
    for (let index = 0; index < lista.length; index++) {
        const elemento = lista[index]
        let junta = (`${elemento} se encontra na posição ${index} \n`)
        listaView.push(junta)
        
    }
    alert(listaView)
    listaView = []
}

function consultar(){
    if(lista.length === 0){
        alert('Nenhum Paciente para atender!')
    } else {
        for (let index = 0; index < lista.length; index++) {
            const elementos = lista[index];
            alert(`Chamar o Paciente ${elementos} para a consulta`)
            let esc = confirm(`O Paciente ${elementos} foi para a consulta?`)
            if (esc == true){
                lista.splice(index, 1)
                break
            }
        }
    }
}


/* Sistema de Cartas */

function pilhaCartas() {
    let cartas =["A" , "J" , "Q" , "K" ,1 ,2 ,3 ,4, 5, 6, 7, 8, 9]
    let mont = []
    let loop = true
    let cartaEscol = []
    
    do {
        let numCarta = inRandomNum()
        let esc = prompt(`Escolha uma das opção abaixo: \n
        1 - Adicionar uma carta
        2 - Remover uma carta
        3 - Mostrar o baralho
        4 - Montar um baralho de 32 Cartas
        5 - Zerar cartas Baralho
        6 - Sair do Programa!`)
        
        switch(esc){
            case "1":
                cartaEscol = cartas[numCarta]
                alert(`Você pegou a carta ${cartaEscol} , vamos adicionar ao monte!`)
                mont.push(cartaEscol)
                break;
            case "2":
                mont.pop()
                break
            case "3":
                if(mont.length == 0){
                    alert('O baralho está vazio')
                } else {
                    alert(`Essas são as cartas de seu baralho:\n ${mont}`)
                }
                break
            case "4":
                for (let index = 0; index < 32; index++) {
                    numCarta = inRandomNum()
                    cartaEscol = cartas[numCarta]
                    mont.push(cartaEscol)
                }
                alert(`O seu baralho tem essas cartas:\n ${mont}`)
                break
            case "5":
                mont = []
                alert("Baralho zerado!")
                break
            case "6":
                loop = false
                alert('Você escolheu sair!')
                break
        }   
    } while (loop == true)
}

function inRandomNum() {
    min = Math.ceil(0);
    max = Math.floor(13);
    return Math.floor(Math.random() * (max - min) + min);
  }
  