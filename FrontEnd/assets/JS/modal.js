let modal = null;

if (localStorage.token) {
  const filtres = document.querySelector('.filtres');
  filtres.style.display = "none";

  const lienModifier = document.querySelector('.lien_modifier');
  const aElement = document.createElement("a");
  aElement.innerHTML = "modifier";
  aElement.setAttribute("href", "#modal1");
  aElement.classList.add("js_modal", "filtres");

  const logout = document.querySelector('.js_logout');
  logout.innerHTML = "";
  const aElementLogout = document.createElement("button");
  aElementLogout.innerHTML = "logout";
  aElementLogout.classList.add("js_button_logout");
  logout.appendChild(aElementLogout);

  lienModifier.appendChild(aElement);
}

const openModal = (e) => {
  e.preventDefault();
  const target = document.querySelector(e.target.getAttribute('href'));
  target.style.display = null;
  target.removeAttribute('aria-hidden');
  target.setAttribute('aria-modal', true);
  modal = target;

  modal.addEventListener('click', closeModal);
  modal.querySelector('.js_close_modal').addEventListener('click', closeModal);
  modal.querySelector('.js_stop_modal').addEventListener('click', stopPropagation);
};

const closeModal = (e) => {
  if (modal === null) return;
  e.preventDefault();
  modal.style.display = "none";
  modal.setAttribute('aria-hidden', true);
  modal.removeAttribute('aria-modal');

  modal.removeEventListener('click', closeModal);
  modal.querySelector('.js_close_modal').removeEventListener('click', closeModal);
  modal.querySelector('.js_stop_modal').removeEventListener('click', stopPropagation);

  modal = null;
};

const stopPropagation = (e) => {
  e.stopPropagation();
};

document.querySelectorAll('.js_modal').forEach(a => {
  a.addEventListener('click', openModal);
});

window.addEventListener('keydown', function (e) {
  if (e.key === "Escape" || e.key === "Esc") {
    closeModal(e);
  }
});

