const url = 'http://localhost:5678/api/works';
let projectsData;

const divGallery = document.querySelector('.gallery');
const boutonFilterBase = document.querySelector(".btn_filter_base");
const boutonFilterObjets = document.querySelector(".btn_filter_objets");
const boutonFilterAppartements = document.querySelector(".btn_filter_appartements");
const boutonFilterRestaurants = document.querySelector(".btn_filter_restaurants");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    projectsData = data;
    projectDisplay(projectsData);

    boutonFilterBase.addEventListener("click", () => projectDisplay(projectsData));
    boutonFilterObjets.addEventListener("click", () => filterProjects(1));
    boutonFilterAppartements.addEventListener("click", () => filterProjects(2));
    boutonFilterRestaurants.addEventListener("click", () => filterProjects(3));
  })
  .catch((error) => console.log('Une erreur est survenue:', error));

  function projectDisplay(data) {
    divGallery.innerHTML = "";
    data.forEach((projet) => {
      const dataElement = document.createElement("figure");
      dataElement.dataset.id = projet.id;
      dataElement.dataset.categoryId = projet.categoryId;
  
      const imgElement = document.createElement("img");
      imgElement.src = projet.imageUrl;
  
      const titleElement = document.createElement("figcaption");
      titleElement.innerText = projet.title;
  
      dataElement.appendChild(imgElement);
      dataElement.appendChild(titleElement);
      divGallery.appendChild(dataElement);
    });
  }

  function filterProjects(categoryId) {
    const filteredProjects = projectsData.filter((projet) => projet.categoryId === categoryId);
    projectDisplay(filteredProjects);
  }




