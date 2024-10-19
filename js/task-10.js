function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesContainer: document.getElementById('boxes')
};

function createBoxes(amount) {
  const boxes = [];
  let size = 30; 
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    boxes.push(box);
    size += 10; 
  }
  controls.boxesContainer.append(...boxes);
}

function destroyBoxes() {
  controls.boxesContainer.innerHTML = '';
}

controls.createBtn.addEventListener('click', () => {
  const amount = parseInt(controls.input.value, 10);
  createBoxes(amount);
});

controls.destroyBtn.addEventListener('click', destroyBoxes);
