/* CODE - JS */

function menuInterativo(){
    alert("Bem-vindo, ao menu Interativo!")
    let loop = true
    
    do {
    esc = prompt(`Escolha uma das opções abaixo: </br>
    1 - Ganhar um doce
    2 - Ganhar um Chocolate
    3 - Ganhar uma Fruta
    4 - Ganhar dinheiro
    5 - Sair!`)

    switch(esc){
        case 1:
            alert(`Você escolheu a opção ${esc}`)
            break
        case 2:
            alert(`Você escolheu a opção ${esc}`)
            break
        case 3:
            alert(`Você escolheu a opção ${esc}`)
            break
       case 4:
            alert(`Você escolheu a opção ${esc}`)
            break
        case 5:
            alert(`Você escolheu a opção ${esc}`)
            loop = true
            break

        } 
    } while (loop == true);
}

function banquinho(){
    let loop = true
    let mvMoney = 0
    let money = 0
    let esc = null
    alert(`Olá , bem-vindo ao nosso sistema bancario! Siga as intruções abaixo:`)
    money = prompt("Informe quanto dinheiro você possui no banco:")
    money = Number.parseInt(money)

    while(loop ==  true){
        // Menu de Operações
        esc = prompt(`Escolha uma das opções abaixo:
        1 - Adicionar fundos
        2 - Remover Fundos
        3 - Verificar Saldo
        4 - Sair!`)

        switch(esc){
            case '1':
                mvMoney = prompt('Informe quanto deseja adicionar:')
                mvMoney = Number.parseInt(mvMoney)

                money = mvMoney += money
                alert('Voltando ao menu ....')
                break;
            case '2':
                mvMoney = prompt('Informe quanto deseja remover de fundos:')
                money = money - mvMoney  
                alert('Voltando ao menu ....')
                break;
            case '3':
                confirm(`Seu saldo na conta é : ${money}`)
                break;
            case '4':
                loop = false
                alert('Obrigado por utilizar nossos servicos!')
                break;
            default :
                alert(`A Opção ${esc} não foi encontrada em nosso sistema!`)
        }
        money.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
        alert(`Seu saldo atual é : ${money}`)
    }




}