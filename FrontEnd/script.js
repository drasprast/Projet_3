

const url = 'http://localhost:5678/api/works';

fetch(url)
.then((response) => response.json())
.then((data) => {

    function projectList(data){
        for (let i = 0; i < data.length; i++){
   
            const projet = data[i]; 
            
            const divGallery = document.querySelector('.gallery');
            const dataElement = document.createElement("figure");
            dataElement.dataset.id = data[i].id
            const imgElement = document.createElement("img");
            imgElement.src = projet.imageUrl;
            const titleElement = document.createElement("figcaption");
            titleElement.innerText = projet.title;
   
            divGallery.appendChild(dataElement);
            dataElement.appendChild(imgElement);
            dataElement.appendChild(titleElement);
           
        }
    }
    console.log(data);
    projectList(data);

    const boutonFilterBase = document.querySelector(".btn_filter_base");
    boutonFilterBase.addEventListener("click", function(){
        document.querySelector('.gallery').innerHTML = "";
        projectList(data);
    })



    const boutonFilterObjets = document.querySelector(".btn_filter_objets");

    boutonFilterObjets.addEventListener("click", function () {
        const objetsFilter = data.filter(function (data){
            return data.categoryId === 1;
        })
        document.querySelector('.gallery').innerHTML = "";
        projectList(objetsFilter);
    });



   const boutonFilterAppartements = document.querySelector(".btn_filter_appartements");
   boutonFilterAppartements.addEventListener("click", function(){
    const appartementsFilter = data.filter(function(data){
        return data.categoryId === 2;
    })
    document.querySelector('.gallery').innerHTML = "";
    projectList(appartementsFilter);
   })



   const boutonFilterRestaurants = document.querySelector(".btn_filter_restaurants");
   boutonFilterRestaurants.addEventListener("click", function(){
    const restaurantsFilter = data.filter(function(data){
        return data.categoryId === 3;
    })
    document.querySelector('.gallery').innerHTML = "";
    projectList(restaurantsFilter);
   })






});

 




