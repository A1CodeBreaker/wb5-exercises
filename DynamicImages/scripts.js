'use script';

const imageFiles = [
    { path: './images/bird.jpg', description: 'Bird' },
    { path: './images/bunny.jpg', description: 'Bunny' },
    { path: './images/cat.jpg', description: 'Cat' },
    { path: './images/dog.jpg', description: 'Dog' },
    { path: './images/goat.jpg', description: 'Goat' }
  ];
  
  const insertedImagePaths = [];

const selectEl = document.getElementById('imageSelector');
const addImageBtn = document.getElementById('addImage');
const imagesDiv = document.getElementById('images');
const clearBtn = document.getElementById('clearImages');

for (let i = 0; i < imageFiles.length; i++) {
  const optionEl = document.createElement('option');
  optionEl.textContent = imageFiles[i].description;
  optionEl.value = imageFiles[i].path;
  selectEl.appendChild(optionEl);
}

addImageBtn.addEventListener('click', () => {
  const selectedImageValue = selectEl.value;
  if (selectedImageValue === '') {
    return;
  }

  if (insertedImagePaths.includes(selectedImageValue)) {
    console.log('image is already on the page');
    return;
  }

  insertedImagePaths.push(selectedImageValue);
 
  const selectedImageObj = imageFiles.find((img) => img.path === selectedImageValue);
  const imgEl = document.createElement('img');
  imgEl.src = selectedImageObj.path;
  imgEl.alt = selectedImageObj.description;
  imagesDiv.appendChild(imgEl);
});

clearBtn.addEventListener('click', () => {
  const images = imagesDiv.querySelectorAll('img');
  insertedImagePaths.length = 0;
  Array.from(images).forEach((img) => {
    imagesDiv.removeChild(img);
  });
});