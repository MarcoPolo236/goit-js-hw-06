const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.getElementById('ingredients')
const fragment =  document.createDocumentFragment();

ingredients.forEach(liItem => {
  const li = document.createElement('li');
  li.textContent = liItem;
  li.classList.add('item');
  fragment.appendChild(li);
});

listOfIngredients.appendChild(fragment);


