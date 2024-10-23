function forResult(value){
  document.getElementById('result').value += value;
}

function clearAns(){
  document.getElementById('result').value = ' ' ;
}
function calculateAns() {
 const resultField = document.getElementById('result');
 try{
   resultField.value = eval(resultField.value)
 }catch (error){
   resultField.value = 'Error';
 }
 
}