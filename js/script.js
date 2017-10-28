elements = document.getElementsByTagName('td');

let z = 0;
let sym = 0;

const winner = (element1, element2, element3) => {
  // setTimeout(function() {}, 300);
  mark = element1.textContent;
  element1.textContent = '';
  element2.textContent = '';
  element3.textContent = '';
  setTimeout(function() {
    element1.textContent = mark;
    element2.textContent = mark;
    element3.textContent = mark;
  }, 600);
  console.log(mark);
};

const restart = () => {
  for (i = 0; i < elements.length; i++) {
    elements[i].textContent = '';
  }
};

const game_over = () => {
  for (i = 0; i < elements.length; i++) {
    elements[i].removeEventListener('click', fill, false);
    elements[i].removeEventListener('click', increment, false);
  }
  // setTimeout(function() {},4000)
  // restart();
  document.getElementById('greeting').style.display = 'block';
};

const increment = () => {
  z++;
  if (z >= 2) {
    if (
      elements[0].textContent === elements[1].textContent &&
      elements[1].textContent === elements[2].textContent &&
      elements[0].textContent !== '' &&
      elements[1].textContent !== '' &&
      elements[2].textContent !== ''
    ) {
      winner(elements[0], elements[1], elements[2]);
      game_over();
    } else if (
      elements[3].textContent === elements[4].textContent &&
      elements[4].textContent === elements[5].textContent &&
      elements[3].textContent !== '' &&
      elements[4].textContent !== '' &&
      elements[5].textContent !== ''
    ) {
      winner(elements[3], elements[4], elements[5]);
      game_over();
    } else if (
      elements[6].textContent === elements[7].textContent &&
      elements[7].textContent === elements[8].textContent &&
      elements[6].textContent !== '' &&
      elements[7].textContent !== '' &&
      elements[8].textContent !== ''
    ) {
      winner(elements[6], elements[7], elements[8]);
      game_over();
    } else if (
      elements[0].textContent === elements[3].textContent &&
      elements[3].textContent === elements[6].textContent &&
      elements[0].textContent !== '' &&
      elements[3].textContent !== '' &&
      elements[6].textContent !== ''
    ) {
      winner(elements[0], elements[3], elements[6]);
      game_over();
    } else if (
      elements[1].textContent === elements[4].textContent &&
      elements[4].textContent === elements[7].textContent &&
      elements[1].textContent !== '' &&
      elements[4].textContent !== '' &&
      elements[7].textContent !== ''
    ) {
      winner(elements[1], elements[4], elements[7]);
      game_over();
    } else if (
      elements[2].textContent === elements[5].textContent &&
      elements[5].textContent === elements[8].textContent &&
      elements[2].textContent !== '' &&
      elements[5].textContent !== '' &&
      elements[8].textContent !== ''
    ) {
      winner(elements[2], elements[5], elements[8]);
      game_over();
    } else if (
      elements[0].textContent === elements[4].textContent &&
      elements[4].textContent === elements[8].textContent &&
      elements[0].textContent !== '' &&
      elements[4].textContent !== '' &&
      elements[8].textContent !== ''
    ) {
      winner(elements[0], elements[4], elements[8]);
      game_over();
    } else if (
      elements[2].textContent === elements[4].textContent &&
      elements[4].textContent === elements[6].textContent &&
      elements[2].textContent !== '' &&
      elements[4].textContent !== '' &&
      elements[6].textContent !== ''
    ) {
      winner(elements[2], elements[4], elements[6]);
      game_over();
    }
  }
};

function fill() {
  if (sym === 0) {
    this.textContent = 'X';
    sym++;
  } else if (sym === 1) {
    this.textContent = 'O';
    sym--;
  }
  this.removeEventListener('click', fill, false);
}
//const fill = () => this.texContent= 'X';
//button = document.getElementsByClassName('btn');
//button[0].onclick = restart;

for (i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', fill, false);
  elements[i].addEventListener('click', increment, false);
}

//const test = event => console.log(event);
//elements[0].addEventListener('click', test, false);
//
