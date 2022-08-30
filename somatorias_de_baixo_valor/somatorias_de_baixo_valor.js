function somatoriaBaixoValor(arrayValores){
  
  let somaValores = 0;
  for(let i = 0;i<arrayValores.length;i++){
    if(arrayValores[i] > 0 && arrayValores[i]<=1000){
      somaValores += arrayValores[i];
    }
  }
  return somaValores;
}