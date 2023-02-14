/* CODE - JS */

function cadastroRecruta(){
    let rsp = confirm('Voce Iniciou o cadastro de Recruta. Clique em OK para continuar ou Cancelar para sair')
    if(rsp == true){
        let nome = prompt('Digite o nome do recruta: ')
        let sobrenome = prompt(' Digite o Sobrenome do recruta:')
        let campoEstudo = prompt('Digite o ramo de estudo: ')
        let idade = prompt('coloque o ano de nascimento do recruta: ')

        idade = Number.parseInt(idade)
        
        confirm('você cadastrou um recruta com sucesso! , valide as informações abaixo')
        confirm(`nome: ${nome} ${sobrenome} <\br> Campo de estudo: ${campoEstudo} <\br> Ano: ${idade}`)
    } else {
        confirm('Sistema Cancelado por ação do Usuario!')
    }
}

function calculadoraBasica(){
    let rsp = confirm('Voce Iniciou a Calculadora. Clique em OK para continuar ou Cancelar para sair')
    if (rsp == true){
        flNumero1 = prompt('Digite o primeiro numero a ser calculado: ')
        flNumero1 = Number.parseFloat(flNumero1)
        flNumero2 = prompt('Digite o segundo numero para operação: ')
        flNumero2 = Number.parseFloat(flNumero2)
        esc = prompt(`Escolha a operação desejada:
                        para soma use numero : 1 
                        para dimunição use o numero : 2 
                        para divisão use o numero : 3 
                        para multiplicação use o numero: 4 
                  para fazer resto de operação de divisão use o numero : 5 
        `)
        switch(esc){
            case '1':
                resul = flNumero1 + flNumero2
                prompt(resul)
                break;
            case '2':
                resul = flNumero1 - flNumero2
                prompt(resul)
                break;
            case '3':
                resul = flNumero1 / flNumero2
                prompt(resul)
                break;
            case '4':
                resul = flNumero1 * flNumero2
                prompt(resul)
                break;
            case '5':
                resul = flNumero1 % flNumero2
                prompt(resul)
                break;
            default :
                alert(`A opção ${esc} não possui no escopo. Operação cancelada!`)
        }
        prompt('Obrigado por usar a calculadora!')
    }else{
        confirm('Sistema Cancelado por ação do usuario!')
    }
}