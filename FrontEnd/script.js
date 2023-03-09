// fetch('http://localhost:5678/api/works')
//   .then(result => result.json())
//   .then(data => console.log(data));

const projetData = fetch('http://localhost:5678/api/works').then(projetData => projetData.json());
console.log(projetData)

  
 function projectList(projetData){
     for (let i = 0; i < projetData.length; i++){
         const projet = projetData[i]; 
         
         const divGallery = document.querySelector('.gallery');
         const dataElement = document.createElement("figure");
        
     }
 }
 projectList(projetData)




