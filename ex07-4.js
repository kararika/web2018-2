function add2(){
  var x = Number(document.getElementById('input3').value);
  var y = Number(document.getElementById('input4').value);
  var z =(x/(y*y));
  document.getElementById('input5').value = z;
  alert(x/(y*y));
  
  
  if (document.getElementById('input5').value <18.5){
    alert('低体重');
  }
 
  else if(document.getElementById('input5').value <=25>=18.5){
    alert('普通');
  }
  
  else (document.getElementById('input5').value >25){
    alert('肥満');
  }
  
}