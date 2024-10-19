let counterValue = 0;

const valueEl = document.getElementById('value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener('click', () => {
  counterValue += 1;    // mareste valoarea cu 1
  valueEl.textContent = counterValue; 
});


decrementBtn.addEventListener('click', () => {
  counterValue -= 1;     // scade valoarea cu 1
  valueEl.textContent = counterValue; 
});