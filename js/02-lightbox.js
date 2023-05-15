import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

// Створюємо галерею картинок з масиву обєктів
function createGalleryItemsMarkup(elem) {
  return elem
    .map(({ preview, original, description }) => {
      return `<li>
   <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}" 
        />
   </a>
 </li>`;
    })
    .join("");
}

// Підключаємо бібліотеку Lightbox
// Ставимо підписи на картинки з затримкою показу
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});