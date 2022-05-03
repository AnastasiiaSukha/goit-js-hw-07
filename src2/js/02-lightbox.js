import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector("ul.gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', itemsMarkup);


function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        
        
        return `
        <div class="gallery__item">
  <a class="gallery__item"
  href="${original}">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}"
  />
</a>
</div>
    `
    }).join('');
    
};

new SimpleLightbox('.gallery a', {captionsData:'alt', captionDelay:250});
