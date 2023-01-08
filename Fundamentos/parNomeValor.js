const saudacao = 'Opa' // contexto lexico

function exec() {
    const saudacao = 'Falaa' //contexto lexico
    return saudacao
}

// Objetos são grupos alinhados de pares nomes/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)