/*CODE - JS*/

function conversorMedidas(){
    let loop = true
    let flNewNum
    alert('Bem Vindo ao conversor de Medidas!')
    let flNumeroConvert = prompt ('Digite o valor que deseja converter: ')
    while(loop == true){
        esc = prompt(`Escolha para qual conversão você deseja converter:
        1 - milímetro (mm)
        2 - centímetro (cm)
        3 - decímetro (dm)
        4 - decâmetro (dam)
        5 - hectômetro (hm)
        6 - quilômetro (km)
        7 - Sair!`)

        esc = Number.parseInt(esc)
        switch(esc){
            case 1:
                flNewNum = flNumeroConvert * 1000
                alert(`O numero convertido é ${flNewNum} e o numero sem conversão é ${flNumeroConvert}!`)
                loop = false
                break
            break;

            case 2:
                flNewNum = flNumeroConvert * 100
                alert(`O numero convertido é ${flNewNum} e o numero sem conversão é ${flNumeroConvert}!`)
                loop = false
                break
            
            break;

            case 3:
                flNewNum = flNumeroConvert * 10
                alert(`O numero convertido é ${flNewNum} e o numero sem conversão é ${flNumeroConvert}!`)
                loop = false
                break
            
            break;

            case 4:
                flNewNum = flNumeroConvert / 10
                alert(`O numero convertido é ${flNewNum} e o numero sem conversão é ${flNumeroConvert}!`)
                loop = false
                break
            
            break;

            case 5:
                flNewNum = flNumeroConvert / 100
                alert(`O numero convertido é ${flNewNum} e o numero sem conversão é ${flNumeroConvert}!`)
                loop = false
                break
            
            break;

            case 6:
                flNewNum = flNumeroConvert / 1000
                alert(`O numero convertido é ${flNewNum} e o numero sem conversão é ${flNumeroConvert}!`)
                loop = false
                break
            
            break;

            case 7:
                alert('Obrigado por usar o conversor!')
                loop = false
            break;

            default:
                alert('Opção não encontrada , tente novamente!')
            break;
        }
    }
}

function turistando(){
    strNome = prompt(`Bem vindo ao sistema de Turista!
    Primeiramente , Digite seu nome: `)
    let loop = true
    esc = confirm("Você já visitou alguma cidade?")

    if(esc == true){
        for (let index = 0; ; index++) {
            let cidade
            do {
                console.log(cidade[index])
                cidade[index] = prompt('Digite o nome da cidade que você esteve: ')
                let pxt = confirm('Viajou para outra cidade? Confirme para sim e Cancelar para não!')
                if (pxt == false){
                    index = false
                    break;
                }
            } while (pxt == true);
            console.log('Pos While')
            for (let index = 0; index < cidade; index++) {
                alert("Cidade:" + cidade[index])
            }
            console.log('Dentro do For')
            break
        }
        console.log('Pulou o FOR')
          
    }
}