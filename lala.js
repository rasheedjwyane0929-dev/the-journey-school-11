const element = document.querySelector('.fade-element');
const button = document.querySelector('#myButton');

button.onclick = function() {
  element.classList.toggle('active');
};