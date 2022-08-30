function calcularNumeroDeEntradas(placa){
  let totEntradasPlaca = 0;
  for(let i = 0; i < placas.length; i++){
    if(placas[i] == placa){
      totEntradasPlaca += 1;
    }
  }

  console.log("Total de entradas da placa:"+totEntradasPlaca)
  return totEntradasPlaca;
}

function calcularValorDevido(placa){
  let totEntradasPlaca = calcularNumeroDeEntradas(placa);
  let valor_aPagar = 0;
  for(let i = 0; i < calcularNumeroDeEntradas(placa); i++){
    if(i<21){
      valor_aPagar += 10;
    }
    if(i>21){
      valor_aPagar += 5;
    }
  }

  return valor_aPagar;
}

/* Esse array é utilizado dentro das funções. Cada placa neste array representa uma entrada do respectivo veículo no estacionamento. Não é necessário alterar esse array. */
var placas = [
   'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525',
   'AKX-3333', 'ORO-7142', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
   'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
   'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
   'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
   'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
   'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
   'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333',
   'ORO-7142', 'ORO-7142', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
   'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
   'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
   'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
   'AKX-3333', 'RXB-2525'
]
