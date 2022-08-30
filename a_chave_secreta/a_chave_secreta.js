function aChaveSecreta(array){
  let novoArray = []
  for(let i = array.length;i>=0;i--){
     
    if(array[i] == "*"){
      array[i] = "";
    }
    
    novoArray.push(array[i]);
  }

  var newArray = novoArray.join("");

  return newArray;
}