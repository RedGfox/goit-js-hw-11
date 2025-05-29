import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Увага',
      message: 'Будь ласка, введіть пошуковий запит.',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.info({
        title: 'Інформація',
        message: 'За вашим запитом нічого не знайдено.',
      });
    } else {
      createGallery(data.hits);
    }
    form.reset();
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: 'Сталася помилка при завантаженні зображень.',
    });
  } finally {
    hideLoader();
  }
});
