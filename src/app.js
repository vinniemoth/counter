const increaseBtn = document.getElementsByClassName('increase')[0];
const decreaseBtn = document.getElementsByClassName('decrease')[0];
const clearBtn = document.getElementsByClassName('clear')[0];
const number = document.getElementById('counter');

function ColorNumbers() {
  if (number.innerHTML == '0') {
    number.style.color = '#000';
  } else if (number.innerHTML < '0') {
    number.style.color = '#bb0000';
  } else {
    number.style.color = '#00bb00';
  }
}

increaseBtn.addEventListener('click', () => {
  parseInt(number.innerHTML++);
  ColorNumbers();
});

decreaseBtn.addEventListener('click', () => {
  parseInt(number.innerHTML--);
  ColorNumbers();
});

clearBtn.addEventListener('click', () => {
  number.innerHTML = 0;
  ColorNumbers();
});
