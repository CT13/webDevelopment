function hello () {
  var val1 = document.querySelector('#email').value.length ;
  var val2 = document.querySelector('#pwd').value.length ;
  var sum = document.querySelector('#submit');

  if (val2 > 0 && val1 > 0)  {
    sum.disabled =false;
    } else {
      sum.disabled=true;
    }
}
  
  
  
