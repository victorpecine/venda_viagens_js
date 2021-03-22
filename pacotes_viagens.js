console.log(`>>> Venda de pacotes de viagens <<<`)
const listaDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
)

listaDestinos.push('Curitiba') //  adicionando Curitiba aos destinos

const idadeComprador = 16
const compradorAcompanhado = true

console.log('Destinos disponíveis:')
console.log(listaDestinos)

if (idadeComprador >= 18) {
    console.log('Comprador com idade mínima de 18 anos: Ok')
    console.log('Pacote vendido com sucesso.')
    console.log('Destinos restantes:')
    listaDestinos.splice(2,1) // deleta apenas 1 elemento a partir do index 2
    console.log(listaDestinos)
} else if (compradorAcompanhado == true) {
    console.log('Comprador tem acompanhante com idade mínima de 18 anos: Ok')
    console.log('Pacote vendido com sucesso.')
    console.log('Destinos restantes:')
    listaDestinos.splice(2,1) // deleta apenas 1 elemento a partir do index 2
    console.log(listaDestinos)
} else {
    console.log('Comprador com idade abaixo de 18 anos.')
    console.log('Não é possível realizar a venda.')
}