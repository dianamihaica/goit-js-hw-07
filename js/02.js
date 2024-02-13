// Utilizați aceeași matrice de date ca în primul exercițiu
const galleryItems = [
  { preview: 'small-image1.jpg', original: 'large-image1.jpg', description: 'Image 1' },
  { preview: 'small-image2.jpg', original: 'large-image2.jpg', description: 'Image 2' },
  // ... adăugați mai multe elemente aici
];

const galleryContainer = document.querySelector('.gallery');

function createGallery() {
  galleryItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');
    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;
    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.alt = item.description;
    link.appendChild(image);
    listItem.appendChild(link);
    galleryContainer.appendChild(listItem);
  });
}

createGallery();

// Adăugați link-ul pentru biblioteca SimpleLightbox
const lightboxScript = document.createElement('script');
lightboxScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.7.0/simple-lightbox.min.js';
document.head.appendChild(lightboxScript);

lightboxScript.onload = () => {
  // Inițializarea SimpleLightbox după ce biblioteca este încărcată
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
};

// Modificarea aspectului cardului de galerie
const galleryImages = document.querySelectorAll('.gallery__image');

galleryImages.forEach((image) => {
  image.setAttribute('alt', 'Sugestive image description');
});
