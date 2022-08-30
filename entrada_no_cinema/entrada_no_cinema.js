function  lugaresDisponiveis(arrayLugares, assentoEscolhido){
  for(let i = 0; i<arrayLugares.length;i++){
    if(arrayLugares[i] == assentoEscolhido){
      return "Parabéns, o assento número "+assentoEscolhido+" está disponível.";
    }
  }
  return "Desculpe, o assento número "+assentoEscolhido+" está ocupado, mas ainda há "+arrayLugares.length+" assentos disponíveis."
}