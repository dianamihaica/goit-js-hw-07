document.addEventListener('DOMContentLoaded', function () {
  const galleryContainer = document.getElementById('gallery');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  // Funcția pentru crearea și randarea unui element de galerie
  function renderGalleryItem(item) {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.large;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.small;
    image.alt = item.alt;

    link.appendChild(image);
    listItem.appendChild(link);

    return listItem;
  }

  // Funcția pentru inițializarea SimpleLightbox după ce galeria este randată
  function initializeLightbox() {
    const gallery = new SimpleLightbox('.gallery a', {
      captions: true,
      captionDelay: 250,
      nav: false // Dezactivează butoanele de navigare implicită
    });

    // Adaugă evenimente pentru butoanele personalizate
    prevButton.addEventListener('click', () => gallery.prev());
    nextButton.addEventListener('click', () => gallery.next());
  }

  // Funcția pentru randarea galeriei
  function renderGallery() {
    const galleryItems = [
      { small: 'small-image1.jpg', large: 'large-image1.jpg', alt: 'Image 1 description' },
      { small: 'small-image2.jpg', large: 'large-image2.jpg', alt: 'Image 2 description' },
      // ... adăugați mai multe elemente după această structură
    ];

    const galleryFragment = document.createDocumentFragment();
    galleryItems.forEach(item => galleryFragment.appendChild(renderGalleryItem(item)));
    galleryContainer.appendChild(galleryFragment);

    // Inițializarea SimpleLightbox după ce galeria este randată
    initializeLightbox();
  }

  // Rularea funcției pentru a genera galeria
  renderGallery();
});


const galleryItems = [
    {
        thumbnail: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        source: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower'
    },
    {
        thumbnail: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        source: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight'
    },
    {
      thumbnail: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      source: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View'
  },
  {
    thumbnail: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    source: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Flower Blooms'
  },
  {
    thumbnail: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    source: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains'
  },
  {
    thumbnail: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    source: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing'
  },
  {
    thumbnail: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    source: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows'
  },
  {
    thumbnail: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    source: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape'
  },
  {
    thumbnail: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    source: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea'
  },
  ];