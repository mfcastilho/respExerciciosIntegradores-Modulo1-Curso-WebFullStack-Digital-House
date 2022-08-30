function calculaGostos(notas){
  
  let array = []
  
  let totNotas_NaoGostaram = 0;
  let totNotas_Mediano = 0;
  let totNotas_Gostaram = 0;

  for(let i = 0;i< notas.length;i++){
    if(notas[i] >= 0 && notas[i] <= 1){
      totNotas_NaoGostaram += 1;
    }else if(notas[i] >= 2 && notas[i] <= 3){
      totNotas_Mediano += 1;
    }else if(notas[i] >= 4 && notas[i] <= 5){
      totNotas_Gostaram += 1;
    }
  }

  array.push(totNotas_NaoGostaram);
  array.push(totNotas_Mediano);
  array.push(totNotas_Gostaram);

  return array;
}