let modal = null;
let tokenModal = localStorage.getItem('token');
const urlModal = 'http://localhost:5678/api/works';
let projectsDataModal;
const divGalleryModal = document.querySelector('.gallery_modal');
const modalAjoutPhoto = document.querySelector('.js_modal_ajout_photo');


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
};

modalAjoutPhoto.addEventListener('click', function() {
  const modalwraptest = document.querySelector('.modal_wrapper');
  modalwraptest.innerHTML = "";

  const createAsideModal = document.createElement("aside");
  createAsideModal.classList.add("modal");

  const divModal = document.createElement("div");
  divModal.classList.add("modal_wrapper");

  const leftArrow = document.createElement("i");
  leftArrow.classList.add('fa-solid', 'fa-arrow-left', 'arrow');

  const spanClose = document.createElement("span");
  spanClose.classList.add('js_close_modal', 'close_modal')
  spanClose.innerText = "X";

  const titleModalAdd = document.createElement("h3");
  titleModalAdd.classList.add('titre_modal');
  titleModalAdd.innerText = "Ajout photo";

  const createFormModal = document.createElement("form");
  createFormModal.id = "myForm";
  createFormModal.classList.add('formpost', 'modal_wrapper');

  const divInputFile = document.createElement("div");
  divInputFile.classList.add('input_file_image');

  const pictureLogo = document.createElement("i");
  pictureLogo.classList.add('fa-sharp', 'fa-regular', 'fa-image', 'picture');

  const buttonAdd = document.createElement("button");
  buttonAdd.classList.add('bouton_ajouter_photo');
  buttonAdd.innerText = "+ Ajouter photo";

  const spanInpuFile = document.createElement("span");
  spanInpuFile.classList.add('text_caption');
  spanInpuFile.innerText = "jpg,png: 4mo max";

  const labelTitle = document.createElement("label");
  labelTitle.setAttribute("for", "title");
  labelTitle.innerText = "Titre";

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("id", "title");
  inputTitle.setAttribute("name", "title");

  const labelCategory = document.createElement("label");
  labelCategory.setAttribute("for", "category");
  labelCategory.innerText = "Catégorie";

  const selectCategory = document.createElement("select");
  selectCategory.setAttribute("id", "category");
  selectCategory.setAttribute("name", "category");

  const option1 = document.createElement("option");
  option1.setAttribute("value", "option1");
  option1.textContent = "Objets";
  selectCategory.appendChild(option1);

  const option2 = document.createElement("option");
  option2.setAttribute("value", "option2");
  option2.textContent = "Appartements";
  selectCategory.appendChild(option2);

  const option3 = document.createElement("option");
  option3.setAttribute("value", "option3");
  option3.textContent = "Hotels & restaurants";
  selectCategory.appendChild(option3);

  const spanLigne = document.createElement("span");
  spanLigne.classList.add("ligne_separative");

  const buttonValider = document.createElement("button");
  buttonValider.classList.add("button_valider_travaille");
  buttonValider.textContent = "Valider";

  modalwraptest.appendChild(createAsideModal);
  createAsideModal.appendChild(divModal);
  divModal.appendChild(leftArrow);
  divModal.appendChild(spanClose);
  divModal.appendChild(titleModalAdd);
  divModal.appendChild(createFormModal);
  createFormModal.appendChild(divInputFile);
  divInputFile.appendChild(pictureLogo);
  divInputFile.appendChild(buttonAdd);
  divInputFile.appendChild(spanInpuFile);
  createFormModal.appendChild(labelTitle);
  createFormModal.appendChild(inputTitle);
  createFormModal.appendChild(labelCategory);
  createFormModal.appendChild(selectCategory);
  createFormModal.appendChild(spanLigne);
  createFormModal.appendChild(buttonValider);

  const arrowBackModal = document.querySelector('.arrow');
  arrowBackModal.addEventListener('click', function(){
    console.log("good");
    openModal();
  })
  });


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
};
