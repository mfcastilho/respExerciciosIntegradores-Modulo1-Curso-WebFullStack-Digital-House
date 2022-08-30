function filme(personagens, filmes, lancamentos, id){
  for(let i = 0;i< filmes.length;i++){
    if(id == i+1){
      return personagens[i]+" é um personagem do filme "+ filmes[i] +" que estreou no cinema em "+lancamentos[i]+".";
    }
      
  }
  return "Essa não é uma opção válida.";
}
