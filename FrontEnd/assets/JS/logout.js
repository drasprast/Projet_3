const logoutButton = document.querySelector('.js_button_logout');


if (localStorage.token) {
    logoutButton.addEventListener('click', function() {
      try {
        localStorage.clear();
        location.reload();
      } catch (error) {
        console.error(error);
      }
    });
  }


