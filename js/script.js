elements = document.getElementsByTagName('td');

let z=0;
let sym=0;

const increment = () => {
    z++;
    console.log(z);
   // console.log(elements[0].textContet);
   if ( z>=2 ) {
      if (elements[0].textContent === elements[1].textContent && 
          elements[1].textContent === elements[2].textContent)
         //{elem = [elements[0],elements[1],elements[2]];
         {elem = elements[0].textContent;
          elements[0].textContent=''
          elements[1].textContent=''
          elements[2].textContent=''
    setTimeout(function(){
          elements[0].textContent=elem
          elements[1].textContent=elem
          elements[2].textContent=elem}, 600);
          console.log(elem);
         }
   }
}

function fill() {
  if (sym===0) {
    this.textContent = 'X';
    sym++;
  } else if (sym===1) {
    this.textContent = 'O';
    sym--;
  } 
}
//const fill = () => this.texContent= 'X';
const restart = () => {
  for (i = 0; i < elements.length; i++) {
    elements[i].textContent = '';
  }
};
//button = document.getElementsByClassName('btn');
//button[0].onclick = restart;

for (i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', fill, false);
  elements[i].addEventListener('click', increment, false);
}

//const test = event => console.log(event);
//elements[0].addEventListener('click', test, false);
//

