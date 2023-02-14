/* CODE - JS */

function testeVelocidade(){
    strVeiculo1 = prompt('Digite o nome do veiculo de numero 1: ')
    strVeiVelocidade = prompt('Digite a velocidade que esse veiculo está viajando: ')
    strVeiVelocidade = Number.parseFloat(strVeiVelocidade)
    
    strVeiculo2 = prompt('Digite o nome do veiculo de numero 2: ')
    strVeiVelocidade2 = prompt('Digite a velocidade que esse veiculo está viajando: ')
    strVeiVelocidade2 = Number.parseFloat(strVeiVelocidade2)

    // Usando If Reduzido > Deste jeito não consiguimos fazer o socilitado , mas criei para treino!
    let agil = (strVeiculo1 > strVeiculo2) ? alert("Veiculo 01 é mais rapido que o veiculo 2") : alert("Veiculo 2 é mais rapido que o veiculo 1")
    
    // Fazer a mesma comparação só que com o IF/else
    if (strVeiVelocidade > strVeiVelocidade2){
        alert("Veiculo 01 é mais rapido que o veiculo 2")
    } else if ( strVeiVelocidade2 > strVeiVelocidade){
        alert("Veiculo 02 é mais rapido que o veiculo 1")
    } else {
        alert("A velocidade dos dois são iguais!")
    }

    alert('Obrigado por usar nosso Sistema de Comparação')

}

function war(){
    let ver_cadPerso1 = false
    let ver_cadPerso2 = false
    let strPersonagem1
    let strPersonagem2
    let flPowerPerso1
    let flDefesaPersonagem2
    let flEscudoPersonagem2
    let flLifePersonagem2
    let contEscudo = 0

    let loop = 0

    alert("Bem vindo ao Jogo de ataque!")

    while (loop == 0){
        // Menu
        let esc = prompt(`Escolha uma das opção abaixo:
        1 - Cadastro dos Personagens
        2 - Ataque!
        3 - Reset Sistema (ant-Bug)
        4 - Sair!
        5 - Mostrar Informações dos Personagens`)

        esc = Number.parseInt(esc)
        switch(esc){
            case 1:
                // Personagem 1 - Cadastro
                strPersonagem1 = prompt('Digite o Nome do personagem: ')
                flPowerPerso1 = prompt('Digite o dano do poder do personagem: ')
                flPowerPerso1 = Number.parseFloat(flPowerPerso1)
                ver_cadPerso1 = true

                // Personagem 2 - Cadastro
                 strPersonagem2 = prompt('Digite o Nome do personagem: ')
                 flLifePersonagem2 = prompt('Digite os pontos de vida do personagem: ')
                 flDefesaPersonagem2 = prompt('Digite o poder de defesa do Personagem: ')
                 flEscudoPersonagem2 = confirm('O personagem terá escudo? Confirme para sim e Cancele para não')
                if (flEscudoPersonagem2 == true){
                    contEscudo = 3
                    
                } else {
                    contEscudo = 0
                }
                flLifePersonagem2 = Number.parseFloat(flLifePersonagem2)
                flDefesaPersonagem2 = Number.parseFloat(flDefesaPersonagem2)
                ver_cadPerso2 = true
            break;

            case 2:
                
                if (ver_cadPerso1 == true && ver_cadPerso2 == true){
                    // // Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
                    if(flPowerPerso1 > flDefesaPersonagem2 && contEscudo == 0){
                        let danoCausado = flPowerPerso1 - flDefesaPersonagem2
                        flLifePersonagem2 = flLifePersonagem2 - danoCausado
                        if(flLifePersonagem2 == 0){
                            prompt('O Personagem Morreu!')
                        } else {
                            alert(`O Personagem ${strPersonagem2} está com ${flLifePersonagem2} de vida!`)
                        }
                    }
                    // Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
                    if(flPowerPerso1 > flDefesaPersonagem2 && contEscudo > 0){
                        let danoCausado = (flPowerPerso1 - flDefesaPersonagem2)/2
                        contEscudo =- 1
                        if(flLifePersonagem2 == 0){
                            prompt('O Personagem Morreu!')
                        } else {
                            alert(`O Personagem ${strPersonagem2} está com ${flLifePersonagem2} de vida! e está com ${contEscudo} escudos de defesa!`)
                        }
                    }

                    //Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
                    if(flPowerPerso1 < flDefesaPersonagem2){
                        alert('Dano Insulficiente para atacar o Personagem!')
                    }


                } else{
                    alert(`Personagens não cadastrados!`)
                }

            break;

            case 3:
                conf = confirm('Tem certeza que deseja resetar o sistema?')
                if (conf == true){
                    try{
                        strPersonagem1 = null
                        strPersonagem2 = null
                        flDefesaPersonagem2 = null
                        flLifePersonagem2 = null
                        flPowerPerso1 = null

                        alert('Sistema Reniciado! Recadastre os personagens!')
                    } catch {
                        alert('Erro no sistema!')
                    }
                } else {
                    alert('Sistema cancelado!')
                }
            break;

            case 4:
                alert('Obrigado por Jogar!')
                loop =+ 1
                // break; >> o break pode parar umsa situação no while tb
            break;

            case 5:
                alert(`Nome Personagem 1 : ${strPersonagem1}
                Poder Personage 1 : ${flPowerPerso1}
                Nome Personagem 2: ${strPersonagem2}
                Defesa Personagem 2: ${flDefesaPersonagem2}
                Escudos do Personagem 2: ${contEscudo}
                Vida do Personagem 2: ${flLifePersonagem2}
                `)
        }



    }
    
}