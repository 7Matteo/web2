const red = document.querySelector('#red');
const orange = document.querySelector('#orange');
const green = document.querySelector('#green');

red.style.backgroundColor = 'red';
var myIntervalId;

myIntervalId = setInterval(redlight, 1000);


function redlight(){

  if(red.style.backgroundColor == 'red'){
    red.style.backgroundColor = 'white';
    orange.style.backgroundColor = 'orange';
  }else if(orange.style.backgroundColor == 'orange'){
    orange.style.backgroundColor = 'white';
    green.style.backgroundColor = 'green';
  }else if(green.style.backgroundColor == 'green'){
    green.style.backgroundColor = 'white';
    red.style.backgroundColor = 'red';
  }
  
}




  