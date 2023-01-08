function teste1(num) {
    if(num > 7) 
    console.log(num) // tem relação direta, mesmo sem as {}

    console.log('Final') // não tem relação com o bloco if
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // o que encerra a sentença de códio é ; ou seja, não usar nas estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)