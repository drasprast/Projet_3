const urlLogin = 'http://localhost:5678/api/users/login';
const form = document.querySelector('.form');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');

form.addEventListener('submit', function(get) {
  get.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  const data = {
    email: email,
    password: password
  };

  fetch(urlLogin, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      if (response.status === 401 || response.status === 404) {
        window.alert('Email ou mot de passe incorrect.');
      }
      throw new Error('Erreur de connexion');
    }
    return response.json();
  })
  .then(data => {
    localStorage.setItem('token', data.token);
    console.log(data.token);
    console.log('Connexion réussie !');
    window.location.href = 'index.html'; 
  })
  .catch(error => {
    console.error(error);
  });
});
