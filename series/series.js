function series(prefixo, array){
  var novoArray = [];
  for(let i = 0;i<array.length;i++){
    novoArray.push(prefixo+" "+array[i]);
  }
  return novoArray;    
}