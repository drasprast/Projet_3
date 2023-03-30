const urlPostWork = "http://localhost:5678/api/works";
const form = document.getElementById('myForm');
const myKey = "token";
const token = localStorage.getItem(myKey);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const title = document.getElementById('title').value;
  const category = document.getElementById('category').value;
  const image = document.getElementById('image').files[0];
  formData.append('title', title);
  formData.append('category', category);
  formData.append('image', image);

  fetch('http://localhost:5678/api/works', {
    method: 'POST',
    body: formData,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(response => {
    if (response.ok) {
      alert("succesful");
      form.reset(); 
    } else {
      throw new Error('');
    }
  })
  .catch(error => {
    console.error('', error);
  });
});