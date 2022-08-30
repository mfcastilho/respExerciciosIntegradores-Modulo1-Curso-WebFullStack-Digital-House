function buscarDivisivelPor(array, num){
  for(let i = 0;i<array.length;i++){
    if(array[i]%num==0 && array[i] != 0){
      return array[i];
    }
  }

  return "Nenhum número válido encontrado!";
}