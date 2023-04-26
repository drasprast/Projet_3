let modal = null;
// const urlModal = 'http://localhost:5678/api/works';
// let projectsDataModal;
// const divGalleryModal = document.querySelector('.gallery_modal');

if (localStorage.token) {
  const filtres = document.querySelector('.filtres');
  filtres.style.display = "none";

  const lienModifier = document.querySelector('.lien_modifier');
  const aElement = document.createElement("a");
  const iElement = document.createElement("i");
  aElement.innerText = "modifier";
  aElement.setAttribute("href", "#modal1");
  aElement.classList.add("js_modal", "filtres");
  iElement.classList.add("fa-solid", "fa-pen-to-square")

  const logout = document.querySelector('.js_logout');
  logout.innerText = "";
  const aElementLogout = document.createElement("button");
  aElementLogout.innerText = "logout";
  aElementLogout.classList.add("js_button_logout");
  logout.appendChild(aElementLogout);

  lienModifier.appendChild(iElement);
  lienModifier.appendChild(aElement);

  // fetch(urlModal)
  // .then((response) => response.json())
  // .then((dataModal) => {
  //   projectsDataModal = dataModal;
  // })
  // .catch((error) => console.log('Une erreur est survenue:', error));

  // function projectDisplay(dataModal) {
  //   divGalleryModal.innerHTML = "";
  //   dataModal.forEach((projet) => {
  //     const dataElement = document.createElement("figure");
  //     dataElement.dataset.id = projet.id;
  //     dataElement.dataset.categoryId = projet.categoryId;
  
  //     const imgElement = document.createElement("img");
  //     imgElement.src = projet.imageUrl;

  //     const titleElement = document.createElement("figcaption");
  //     titleElement.innerText = "éditer";
  
  //     dataElement.appendChild(imgElement);
  //     divGalleryModal.appendChild(dataElement);
  //   });
  // }
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


