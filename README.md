# JavaScript
## Estudo da linguagem 

### Tencologias utilizadas
* Visual Studio Code 1.54.3
* Node.js 14.16.0

## Aplicação
* Recebe o destino 
```
const destinoDesejado = 'Curitiba';
```
* Recebe a idade do comprador
```
const idadeComprador = 12;
```
* Recebe se haverá acompanhante na viagem
```
const compradorAcompanhado = true;
```
***
Se o comprador tiver 18 anos ou mais e o destino estiver entre os disponíveis a venda é realizada.
***
Se o destino não estiver entre os disponíveis a venda não é realizada.
***
Se o comprador tiver menos de 18 anos e não tiver acompanhante a venda não é realizada.
***
Se o comprador tiver menos de 18, mas tiver acompanhante (e o destino estiver disponível), a venda é realizada.
***
Após a venda ser realizada o destino comprado é removido das opções disponíveis.