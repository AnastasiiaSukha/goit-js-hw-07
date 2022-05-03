import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector("div.gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', itemsMarkup);

gallery.addEventListener('click',onGalleryClick);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        
        
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
    }).join('');
    
};

function onGalleryClick(event) {
    event.preventDefault();
   
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    const bigImageLink = event.target.dataset.source;

    onOpenBigImage(bigImageLink);
};

function onOpenBigImage(link) {
    
    const instance = basicLightbox.create(`
    <img src="${link}">
    `, {
        onShow: (instance) => {
            window.addEventListener('keydown', onEscKeyPress);
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', onEscKeyPress)
        },
    });

    instance.show()
    
    function onEscKeyPress(event) {
        if (event.code === 'Escape') {
            instance.close();
        };
    };

}