// Listar vagas disponíveis
//     - Criar um nova vaga
//     - Visualizar uma vaga
//     - Inscrever um candidato em uma vaga
//     - Excluir uma vaga
//     - Sair



var arryVagas = []
let identificador = -1

function novaVaga() {
    identificador = identificador + 1
    let vagas = {
        identificador: identificador,
        nomeVaga: prompt("Nome da vaga: "),
        Descricao: prompt("Descrição da vaga "),
        Data_Limite: prompt("Data de até quando vai a incrição: "),
        candidato: "",
    }
    console.table(vagas)
    esc = confirm("Deseja Confirmar a Inserção?")
    if (esc == true){
        return arryVagas.push(vagas)
    } else {
        alert("Operação Cancelada")
    }
}

function viewView(){
    esc =  confirm("Confirme para ver todas as vagas , ou cancele para ver 1 apenas")
    if (esc == true){
       console.table(arryVagas)
    } else {
        esc = Number.parseInt(prompt("Digite a vaga que deseja ver:"))
        console.table(arryVagas[esc])
        console.log(arryVagas[esc])
    }
}

function inscricao(){
    let nome_inscrito = prompt("Digite o nome do Candidado: ")
    let esc =  Number.parseInt(prompt("Qual o codigo da Vaga a ser Preenchido: ")) // 1
    arryVagas[esc].candidato = arryVagas[esc].candidato + " | " + nome_inscrito

}

function excVaga(){
    let esc =  Number.parseInt(prompt("Qual a vaga a ser deletada: ")) // 1
    arryVagas.splice(esc , 1)
}
