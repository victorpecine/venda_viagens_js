console.log(`>>> Venda de pacotes de viagens <<<`)
const listaDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
)

listaDestinos.push('Curitiba') //  adicionando Curitiba aos destinos

console.log('\nDestinos disponíveis:')
console.log(listaDestinos) // mostrando todos os destinos disponíveis

const idadeComprador = 17
const compradorAcompanhado = true
let temPassagemComprada = false
const destinoDesejado = 'São Paulo'

const podeComprar = idadeComprador >= 18 || compradorAcompanhado == true

if (podeComprar) {
    console.log(`\nDestino desejado: ${destinoDesejado}`)
}

let contador = 0
let destinoExiste = false

// verificando se o destino escolhido está disponível
while (contador < listaDestinos.length) {
    if (listaDestinos[contador] == destinoDesejado) {
        destinoExiste = true
        {break}
    }
    contador += 1
}

if (destinoExiste == true) {
    console.log('\n>>> Destino disponível <<<')
} else {
    console.log('\n>>> Destino indisponível <<<')
}