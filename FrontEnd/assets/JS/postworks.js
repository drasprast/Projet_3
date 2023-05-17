// const urlPostWork = "http://localhost:5678/api/works";
// const form = document.getElementById('myForm');
// const token = localStorage.getItem('token');

// function handleFormSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const title = document.getElementById('title').value;
//   const category = document.getElementById('category').value;
//   const image = document.getElementById('imageInput').files[0];
//   console.log(title);
//   console.log(category);
//   console.log(image);
//   formData.append('title', title);
//   formData.append('category', category);
//   formData.append('imageInput', image);

//   fetch(urlPostWork, {
//     method: 'POST',
//     body: formData,
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//     }
//   })
//     .then(response => {
//       if (response.ok) {
//         alert('Successful');
//         form.reset(); 
//       } else {
//         throw new Error('');
//       }
//     })
//     .catch(error => {
//       console.error('', error);
//     });
// }

// const button = document.getElementById('button_valider_travaille');
// button.addEventListener('click', handleFormSubmit);

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const title = document.getElementById('title').value;
//   const category = document.getElementById('category').value;
//   const image = document.getElementById('imageInput').files[0];
//   console.log(title);
//   console.log(category);
//   console.log(image);
//   formData.append('title', title);
//   formData.append('category', category);
//   formData.append('imageInput', image);

//   fetch(urlPostWork, {
//     method: 'POST',
//     body: formData,
//     headers: {
//       'content type': "application/json",
//       'Authorization': `Bearer ${token}`
//     }
//   })
//   .then(response => {
//     if (response.ok) {
//       alert("succesful");
//       form.reset(); 
//     } else {
//       throw new Error('');
//     }
//   })
//   .catch(error => {
//     console.error('', error);
//   });
// });


