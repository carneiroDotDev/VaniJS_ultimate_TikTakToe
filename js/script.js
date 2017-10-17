elements = document.getElementsByTagName('td');
function fill() {
  if (this.textContent === '') {
    this.textContent = 'X';
  } else if (this.textContent === 'X') {
    this.textContent = 'O';
  } else if (this.textContent === 'O') {
    this.textContent = '';
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
}

//const test = event => console.log(event);
//elements[0].addEventListener('click', test, false);
