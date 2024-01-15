document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const navigateButton = document.getElementById('navigateButton');
    let currentIndex = 0;

    function renderGallery() {
        galleryItems.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('gallery__item');

            const link = document.createElement('a');
            link.classList.add('gallery__link');
            link.href = item.source;

            const image = document.createElement('img');
            image.classList.add('gallery__image');
            image.src = item.thumbnail;
            image.alt = item.description;
            image.setAttribute('data-source', item.source);

            link.addEventListener('click', (event) => openModal(event, index));

            link.appendChild(image);
            listItem.appendChild(link);
            gallery.appendChild(listItem);
        });

        // Adăugați event listener pentru butonul de navigare
        navigateButton.addEventListener('click', showNextImage);
    }

    function openModal(event, index) {
        event.preventDefault();
        currentIndex = index;
        const sourceUrl = event.currentTarget.querySelector('.gallery__image').getAttribute('data-source');
        showImage(sourceUrl);
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        const sourceUrl = galleryItems[currentIndex].source;
        showImage(sourceUrl);
    }

    function showImage(sourceUrl) {
        const instance = basicLightbox.create(`<img src="${sourceUrl}" alt="Image description">`);
        instance.show();

        document.addEventListener('keydown', handleKeyPress);
    }

    function handleKeyPress(e) {
        if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'Escape') {
            basicLightbox.close();
            document.removeEventListener('keydown', handleKeyPress);
        }
    }

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