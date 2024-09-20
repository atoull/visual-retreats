const photoGallery = document.getElementById('photo-gallery');

// Replace with your photo data source
const photos = [
  {
    url: 'photo1.jpg',
    caption: 'Photo 1 Caption'
  },
  // ... more photos
];

photos.forEach(photo => {
  const photoCard = document.createElement('div');
  photoCard.classList.add('photo-card');
  photoCard.innerHTML   
 = `
    <img src="${photo.url}">
    <p>${photo.caption}</p>
  `;
  photoGallery.appendChild(photoCard);
});
