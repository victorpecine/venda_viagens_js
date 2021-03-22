console.log(`>>> Venda de pacotes de viagens <<<`);
const listaDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);

listaDestinos.push('Curitiba'); //  adicionando Curitiba aos destinos

console.log('\nDestinos disponíveis:');
console.log(listaDestinos) // mostrando todos os destinos disponíveis

const destinoDesejado = 'Curitiba';
const idadeComprador = 12;
const compradorAcompanhado = true;

const podeComprar = idadeComprador >= 18 || compradorAcompanhado == true;
// let contador = 0
let destinoExiste = false;

if (podeComprar) {
    console.log(`\nDestino desejado: ${destinoDesejado}`);
    // verificando se o destino escolhido está disponível
    // while (contador < listaDestinos.length) {
    for (let cont = 0; cont < listaDestinos.length; cont ++) {
        if (listaDestinos[cont] == destinoDesejado) {
            destinoExiste = true
            {break}
        }
        // contador += 1
    }

if (destinoExiste == true) {
    console.log('\n>>> Destino disponível <<<\nVenda realizada com sucesso!');
    indexDestinoComprado = listaDestinos.indexOf(destinoDesejado, [pontoInicial = 0]);
    listaDestinos.splice(indexDestinoComprado,1);
    console.log(`\n>>> Destinos disponíveis <<<\n${listaDestinos}`);
} else {
    console.log('\n>>> Destino indisponível <<<');
}
} else {
    console.log('\n>>> Não foi possível realizar a venda <<<\n',
    'Motivo: Comprador com menos de 18 anos e desacompanhado');
}