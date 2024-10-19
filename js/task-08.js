const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();     // metoda care previne reincarcarea paginii

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    alert('Toate câmpurile trebuie completate!');
    return;
  }
  const formData = {
    email,
    password
  };

    
    
  console.log(formData); 
  form.reset(); 
});

