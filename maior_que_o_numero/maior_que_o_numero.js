function maiorQueNum(array, num){
  let novoArray = [];
  for(let i = 0; i < array.length;i++){
    if(array[i] > num){
      novoArray.push(array[i]);
    }
  }
  return novoArray;
}
