// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const getEl = selector => document.querySelector(selector);

const galleryWrapper = getEl('.gallery');

const galleryArr = galleryItems.map(
  ({
    original,
    preview,
    description,
  }) => `<a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}">
     </a>`
);

galleryWrapper.insertAdjacentHTML('beforeend', galleryArr.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
