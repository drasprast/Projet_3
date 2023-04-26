const urlLogin = 'http://localhost:5678/api/users/login';
const form = document.querySelector('.form');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');

form.addEventListener('submit', async function(e) {
e.preventDefault();

const email = emailInput.value;
const password = passwordInput.value;

const data = { email, password };

try {

const response = await fetch(urlLogin, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(data)
});

if (!response.ok) {

if (response.status === 401 || response.status === 404) {
window.alert('Email ou mot de passe incorrect.');
}
throw new Error('Erreur de connexion');
}
const { token } = await response.json();

localStorage.setItem('token', token);
console.log(token);
window.location.href = 'index.html';

} catch (error) {
console.error(error);
}
});


