function result(){
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var result = firstNumber % secondNumber;// %=modulo : permet d'afficher le reste d'une division
  if(isNan(firstNumber)==false && isNan(secondNumber)==false){
    alert(result);
  }else{
    alert('veuillez ne saisir que des chiffres');
  }
}
