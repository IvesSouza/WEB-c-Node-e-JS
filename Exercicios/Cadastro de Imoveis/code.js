/* CODE - JS */

function defaulte(){
    var loop = true
    var imoveis = []
    let cont = 0
    
    do{
        esc = prompt("Você deseja Cadastrar um imovel? \n 1 - Cadastrar \n 2 -  Visulizar \n 3 -  Sair")
        switch(esc){
            case "1":
                const imovel = {}
                imovel.id = cont
                imovel.prop = prompt("Digite o nome do Proprietário: ")
                imovel.quarto = prompt("Digite a quantidade de quartos: ")
                imovel.banheiros = prompt("Digite o numero de banheiros do imovel: ")
                imovel.garage = confirm("Este imovel possui garagem? ")
                alert(`Imovel de ID ${imovel.id} Cadastrado com sucesso!!`)
                imoveis.push(imovel)
                cont++
                break

                
            case "2":
            case "3":
                alert("Encerreando ...")
                loop = false
                break
            default:
                alert('Opção invalida!')
        }
    } while (loop == true)   
    
    console.log(Object.values(imoveis))

}