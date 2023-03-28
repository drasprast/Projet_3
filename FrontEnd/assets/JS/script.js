

const url = 'http://localhost:5678/api/works';

let projectsData; 

fetch(url)
.then((response) => response.json())
.then((data) => {
    projectsData = data; 
    console.log(projectsData);

    function projectDisplay(data){
        for (let i = 0; i < data.length; i++){
   
            const projet = data[i]; 
            
            const divGallery = document.querySelector('.gallery');
            const dataElement = document.createElement("figure");
            dataElement.dataset.id = data[i].id;
            dataElement.dataset.categoryId = data[i].categoryId;
            const imgElement = document.createElement("img");
            imgElement.src = projet.imageUrl;
            const titleElement = document.createElement("figcaption");
            titleElement.innerText = projet.title;
   
            divGallery.appendChild(dataElement);
            dataElement.appendChild(imgElement);
            dataElement.appendChild(titleElement);
           
        }
    }
    
    projectDisplay(data);

    
    const boutonFilterBase = document.querySelector(".btn_filter_base");
    boutonFilterBase.addEventListener("click", function(){
        document.querySelector('.gallery').innerHTML = "";
        projectDisplay(projectsData);
    })



    const boutonFilterObjets = document.querySelector(".btn_filter_objets");
    boutonFilterObjets.addEventListener("click", function(){
        const objetsFilter = projectsData.filter(function (projectsData){
            return projectsData.categoryId === 1;
        })
        document.querySelector('.gallery').innerHTML = "";
        projectDisplay(objetsFilter);
    });




   const boutonFilterAppartements = document.querySelector(".btn_filter_appartements");
   boutonFilterAppartements.addEventListener("click", function(){
        const appartementsFilter = projectsData.filter(function (projectsData){
            return projectsData.categoryId === 2;
        })
        document.querySelector('.gallery').innerHTML = "";
        projectDisplay(appartementsFilter);
   })



   const boutonFilterRestaurants = document.querySelector(".btn_filter_restaurants");
   boutonFilterRestaurants.addEventListener("click", function(){
        const restaurantsFilter = projectsData.filter(function(projectsData){
            return projectsData.categoryId === 3;
        })
        document.querySelector('.gallery').innerHTML = "";
        projectDisplay(restaurantsFilter);
   })
})
.catch((error) => {
    console.log('Une erreur est survenue:', error);
});

if (localStorage.token) {  
  
       const filtres = document.querySelector('.filtres');
       filtres.style.display = "none";

       const lienModifier = document.querySelector('.lien_modifier');
       const aElement = document.createElement("a");
       aElement.innerHTML = "modifier";
       aElement.setAttribute("href", "#modal1");
       aElement.classList.add("js_modal");
       lienModifier.appendChild(aElement);
       
}
 




