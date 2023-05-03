let modal = null;
let tokenModal = localStorage.getItem('token');
const urlModal = 'http://localhost:5678/api/works';
let projectsDataModal;
const divGalleryModal = document.querySelector('.gallery_modal');

if (localStorage.token) {
  modeEdition();
  

  fetch(urlModal)
  .then((response) => response.json())
  .then((dataModal) => {
    projectDisplayModal(dataModal);
  })
  .catch((error) => console.log('Une erreur est survenue:', error));

  function projectDisplayModal(dataModal) {
    divGalleryModal.innerHTML = "";
    dataModal.forEach((projet) => {
      const trashIcon = document.createElement("i")
      trashIcon.classList.add('fa-solid', 'fa-trash-can', 'trash_can')
      trashIcon.dataset.id = projet.id;
      const dataElement = document.createElement("figure");
      dataElement.dataset.id = projet.id;
      dataElement.dataset.categoryId = projet.categoryId;
      
      const imgElement = document.createElement("img");
      imgElement.src = projet.imageUrl;

      const titleElement = document.createElement("figcaption");
      titleElement.innerText = "éditer";

      
      dataElement.appendChild(trashIcon);
      dataElement.appendChild(imgElement);
      dataElement.appendChild(titleElement);
      divGalleryModal.appendChild(dataElement);

      trashIcon.addEventListener('click', (e) =>{
        e.preventDefault();
        const projectId = e.currentTarget.dataset.id;
        console.log(projectId);
        deleteWork(projectId);
      })
    });
  }
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


function modeEdition () {
  const lienModifier = document.querySelector('.lien_modifier');
  const logout = document.querySelector('.js_logout');
  const blackEdition = document.querySelector('header');
  const filtres = document.querySelector('.filtres');
  
  filtres.style.display = "none";

  const aElement = document.createElement("a");
  aElement.innerText = "modifier";
  aElement.setAttribute("href", "#modal1");
  aElement.classList.add("js_modal", "filtres");

  const iElement = document.createElement("i");
  iElement.classList.add("fa-solid", "fa-pen-to-square");

  logout.innerText = "";
  const aElementLogout = document.createElement("button");
  aElementLogout.innerText = "logout";
  aElementLogout.classList.add("js_button_logout");

  const blackDivElement = document.createElement("div");
  blackDivElement.classList.add("background_black_edition");

  const buttonEdition = document.createElement("button");
  const logoButtonEdition = document.createElement("i");
  buttonEdition.classList.add("button_inherit", "button_edition");
  logoButtonEdition.classList.add("fa-solid", "fa-pen-to-square");
  buttonEdition.innerText = ("édition");

  const buttonPublier = document.createElement("button");
  buttonPublier.classList.add('buton_publier');
  buttonPublier.innerText = "Publier les changements";

  logout.appendChild(aElementLogout);
  lienModifier.appendChild(iElement);
  lienModifier.appendChild(aElement);
  blackEdition.insertBefore(blackDivElement, blackEdition.firstChild);
  const divBlackEdition = document.querySelector('.background_black_edition');
  divBlackEdition.appendChild(buttonEdition);
  buttonEdition.appendChild(logoButtonEdition);
  divBlackEdition.appendChild(buttonPublier);
}

function deleteWork(projectId) {
  fetch(`http://localhost:5678/api/works/${projectId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenModal}`
    }
  })
  .then(function (response) {
    console.log(response);
    if (response.ok) {
      preventDefault();
      
    } else {
      console.error('Erreur');
    }
  });
}
