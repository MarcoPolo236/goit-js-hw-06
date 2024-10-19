const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const dataLength = Number(validationInput.dataset.length);
  const inputLength = validationInput.value.length;

  if (inputLength === dataLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});

