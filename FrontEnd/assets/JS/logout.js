const logoutButton = document.querySelector('.js_button_logout');

if (localStorage.token) {
  logoutButton.addEventListener('click', () => {
    try {
      localStorage.removeItem('token');
      window.location.reload();
    } catch (error) {
      console.error('An error occurred:', error);
    }
  });
}

