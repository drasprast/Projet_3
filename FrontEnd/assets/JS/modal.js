let tokenModal = localStorage.getItem('token');
const urlModal = 'http://localhost:5678/api/works';
const urlPostWork = "http://localhost:5678/api/works";


createModal1();

createModal2();


const openModal1 = document.querySelector('.lien_modifier');
const closeModal1 = document.querySelector('.close_modal');
const closeModal2 = document.querySelector('.close_modal2');
const modal1 = document.querySelector('.dialog');
const modal2 = document.querySelector('.dialog2');

const divGalleryModal = document.querySelector('.gallery_modal');

const modalAjoutPhoto = document.querySelector('.js_modal_ajout_photo');

openModal1.addEventListener("click", () => {
  modal1.showModal();
  modal1.style.display = null;
  modal1.style.display = 'flex';
})
closeModal1.addEventListener("click", () => {
  modal1.close();
  modal1.style.display = 'none';
})

closeModal2.addEventListener("click", () => {
  modal2.close();
  modal2.style.display = 'none';
})

modalAjoutPhoto.addEventListener("click", () =>{
  modal1.close();
  modal1.style.display = 'none';
  modal2.showModal();
  modal2.style.display = null;
  modal2.style.display = 'flex';

  const fileInput = document.getElementById("imageInput");
  const button = document.querySelector('.bouton_ajouter_photo');

if (button) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
   fileInput.click();
  })}
});

const arrowBackModal = document.querySelector('.arrow');
  arrowBackModal.addEventListener('click', function(){
  modal2.close();
  modal2.style.display = 'none';
  modal1.showModal();
  modal1.style.display = 'flex';
});

const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('file-preview');
const displayImgMModal = document.querySelector('.image_preview');

imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    displayImgMModal.style.display = "block";
    imagePreviewDisplay();
    imagePreview.src = e.target.result;
  };

  reader.readAsDataURL(file);
});


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

  const logoButtonEdition = document.createElement("i");
  const buttonEdition = document.createElement("button");
  logoButtonEdition.classList.add("fa-solid", "fa-pen-to-square");
  buttonEdition.classList.add("button_inherit", "button_edition");
  buttonEdition.innerText = ("édition");

  const buttonPublier = document.createElement("button");
  buttonPublier.classList.add('buton_publier');
  buttonPublier.innerText = "Publier les changements";

  logout.appendChild(aElementLogout);
  lienModifier.appendChild(iElement);
  lienModifier.appendChild(aElement);
  blackEdition.insertBefore(blackDivElement, blackEdition.firstChild);
  const divBlackEdition = document.querySelector('.background_black_edition');
  buttonEdition.appendChild(logoButtonEdition);
  divBlackEdition.appendChild(buttonEdition);
  divBlackEdition.appendChild(buttonPublier);

 

};


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


function createModal1 (){
  const dialogElement = document.createElement("dialog");
  dialogElement.classList.add("dialog", "modal_wrapper");
  
  const modalFlexDiv = document.createElement("div");
  modalFlexDiv.classList.add("modal_flex");
  
  const titleH3Element = document.createElement("h3");
  titleH3Element.setAttribute("id", "titlemodal");
  titleH3Element.innerText = "Galerie photo";
  
  const closeSpanElement = document.createElement("span");
  closeSpanElement.classList.add("close_modal");
 
  const closeIconElement = document.createElement("i");
  closeIconElement.classList.add("fa-solid", "fa-xmark");
  
  closeSpanElement.appendChild(closeIconElement);
 
  modalFlexDiv.appendChild(titleH3Element);
  modalFlexDiv.appendChild(closeSpanElement);
  
  const galleryModalDiv = document.createElement("div");
  galleryModalDiv.classList.add("gallery_modal");
  
  const ligneSeparativeSpanElement = document.createElement("span");
  ligneSeparativeSpanElement.classList.add("ligne_separative");
  
  const ajouterPhotoButtonElement = document.createElement("button");
  ajouterPhotoButtonElement.classList.add("js_modal_ajout_photo");
  ajouterPhotoButtonElement.innerText = "Ajouter une photo";
 
  const supprimerGalerieAElement = document.createElement("a");
  supprimerGalerieAElement.setAttribute("href", "#");
  supprimerGalerieAElement.innerText = "Supprimer la galerie";
  
  dialogElement.appendChild(modalFlexDiv);
  dialogElement.appendChild(galleryModalDiv);
  dialogElement.appendChild(ligneSeparativeSpanElement);
  dialogElement.appendChild(ajouterPhotoButtonElement);
  dialogElement.appendChild(supprimerGalerieAElement);
  
  const sectionElement = document.querySelector(".modal-container");
  
  sectionElement.appendChild(dialogElement);

}

function createModal2(){
  
const dialogElement = document.createElement("dialog");
dialogElement.classList.add("dialog2", "modal_wrapper");

const closeSpanElement = document.createElement("span");
closeSpanElement.classList.add("close_modal2");
closeSpanElement.innerText = "x";


const arrowIconElement = document.createElement("i");
arrowIconElement.classList.add("fa-solid", "fa-arrow-left", "arrow");


const titleH3Element = document.createElement("h3");
titleH3Element.classList.add("titre_modal");
titleH3Element.innerText = "Ajout photo";


const formElement = document.createElement("form");
formElement.setAttribute("id", "myForm");
formElement.classList.add("formpost");


const inputFileImageDiv = document.createElement("div");
inputFileImageDiv.classList.add("input_file_image");


const pictureIconElement = document.createElement("i");
pictureIconElement.classList.add("fa-sharp", "fa-regular", "fa-image", "picture");

const filePreview = document.createElement("img");
filePreview.src = "#";
filePreview.alt = "Preview Uploaded Image";
filePreview.id = "file-preview";
filePreview.classList.add("image_preview");
filePreview.style.display = "none";

const inputPhotoButtonElement = document.createElement("input");
inputPhotoButtonElement.type = 'file';
inputPhotoButtonElement.id = 'imageInput';
inputPhotoButtonElement.setAttribute('accept', 'image/jpeg,image/png');
inputPhotoButtonElement.setAttribute('hidden', '');

const ajouterPhotoButtonElement = document.createElement("button");
ajouterPhotoButtonElement.classList.add("bouton_ajouter_photo");
ajouterPhotoButtonElement.innerText = "+ Ajouter photo";


const textCaptionSpanElement = document.createElement("span");
textCaptionSpanElement.classList.add("text_caption");
textCaptionSpanElement.innerText = "jpg,png: 4mo max";

inputFileImageDiv.appendChild(filePreview);
inputFileImageDiv.appendChild(pictureIconElement);
inputFileImageDiv.appendChild(inputPhotoButtonElement);
inputFileImageDiv.appendChild(ajouterPhotoButtonElement);
inputFileImageDiv.appendChild(textCaptionSpanElement);

const titleLabelElement = document.createElement("label");
titleLabelElement.setAttribute("for", "title");
titleLabelElement.classList.add("label_title");
titleLabelElement.innerText = "Titre";


const titleInputElement = document.createElement("input");
titleInputElement.setAttribute("type", "text");
titleInputElement.setAttribute("id", "title");
titleInputElement.setAttribute("name", "title");


const categoryLabelElement = document.createElement("label");
categoryLabelElement.setAttribute("for", "category");
categoryLabelElement.innerText = "Catégorie";


const categorySelectElement = document.createElement("select");
categorySelectElement.setAttribute("id", "category");
categorySelectElement.setAttribute("name", "category");


const option1Element = document.createElement("option");
option1Element.setAttribute("value", "Objets");
option1Element.innerText = "Objets";

const option2Element = document.createElement("option");
option2Element.setAttribute("value", "Appartements");
option2Element.innerText = "Appartements";

const option3Element = document.createElement("option");
option3Element.setAttribute("value", "Hotels & restaurants");
option3Element.innerText = "Hotels & restaurants";

categorySelectElement.appendChild(option1Element);
categorySelectElement.appendChild(option2Element);
categorySelectElement.appendChild(option3Element);


const validerButtonElement = document.createElement("button");
validerButtonElement.classList.add("button_valider_travaille");
validerButtonElement.innerText = "Valider";


formElement.appendChild(inputFileImageDiv);
formElement.appendChild(titleLabelElement);
formElement.appendChild(titleInputElement);
formElement.appendChild(categoryLabelElement);
formElement.appendChild(categorySelectElement);
formElement.appendChild(validerButtonElement);


dialogElement.appendChild(closeSpanElement);
dialogElement.appendChild(arrowIconElement);
dialogElement.appendChild(titleH3Element);
dialogElement.appendChild(formElement);


const modalContainer = document.querySelector(".modal-container");


modalContainer.appendChild(dialogElement);
}

function imagePreviewDisplay () {
  const iDisplay = document.querySelector('.picture');
  const buttonDisplay = document.querySelector('.bouton_ajouter_photo');
  const textCaption = document.querySelector('.text_caption');

  iDisplay.style.display = 'none';
  buttonDisplay.style.display= 'none';
  textCaption.style.display = 'none';
}


function handleFormSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('myForm');
  const formData = new FormData(form);
  const title = document.getElementById('title').value;
  const categoryId = document.getElementById('category').value;
  const imageUrl = document.getElementById('imageInput').files[0];
  
  formData.append('title', title);
  formData.append('category', categoryId);
  formData.append('image', imageUrl);
  console.log(title);
  console.log(categoryId);
  console.log(imageUrl);
  console.log(formData);
  fetch(urlPostWork, {
    method: 'POST',
    body: formData,
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${tokenModal}`
    }
  })
  .then(response => {
    if (response.ok) {
      console.log(response);
      
    } else {
      throw new Error('');
    }
    
  })
  .catch(error => {
    
    console.error('Error:', error);
  });
}



const buttonEnvoyer = document.querySelector('.button_valider_travaille');
if (buttonEnvoyer) {
  buttonEnvoyer.addEventListener('click', handleFormSubmit);
  };
