
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = [
      { small: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg", large: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg", alt: "Hokkaido Flower" },
      { small: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg", large: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg", alt: "Container Haulage Freight" },
      { small: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg", large: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg", alt: "Aerial Beach View" },
      { small: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg", large: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg", alt: "Flower Blooms" },
      { small: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg", large: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg", alt: "Alpine Mountains" },
      { small: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg", large: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg", alt: "Mountain Lake Sailing" },
      { small: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg", large: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg", alt: "Alpine Spring Meadows" },
      { small: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg", large: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg", alt: "Nature Landscape" },
      { small: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg", large: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg", alt: "Lighthouse Coast Sea" },
     
  
    ];

    const galleryContainer = document.querySelector(".gallery");

    galleryItems.forEach(item => {
        const galleryItem = document.createElement("li");
        galleryItem.className = "gallery__item";

        const galleryLink = document.createElement("a");
        galleryLink.className = "gallery__link";
        galleryLink.href = item.large;

        const galleryImage = document.createElement("img");
        galleryImage.className = "gallery__image";
        galleryImage.src = item.small;
        galleryImage.alt = item.alt;

        galleryLink.appendChild(galleryImage);
        galleryItem.appendChild(galleryLink);
        galleryContainer.appendChild(galleryItem);
    });

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/simplelightbox@2.1.0/dist/simple-lightbox.min.js";
    document.head.appendChild(script);

    script.onload = function () {
        const lightbox = new SimpleLightbox(".gallery a", {
            captionsData: "alt",
            captionDelay: 250,
        });
    };
});

