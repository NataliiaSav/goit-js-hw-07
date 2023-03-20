import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
function createImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}
const imagesMarkup = createImgMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);
console.log(galleryItems);
galleryContainer.addEventListener("click", onGalleryContainerClick);
function onGalleryContainerClick(event) {
  const isImageEl = event.target.classList.contains("gallery__image");

  if (!isImageEl) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  instance.show();

  event.preventDefault();

  window.addEventListener("keydown", onEscapeClose);
  function onEscapeClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
