

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
    projectList(data)
});

 




