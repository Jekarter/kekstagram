import { getData } from './api.js';
import { useDataInfo, shuffle } from './pictures.js';

/* const RANDOM_PREVIEW_LOAD = 25;
const RERENDER_DELAY = 500;
 */
const filterBlock = document.querySelector('.img-filters');
const filterRandom = document.querySelector('#filter-random');
const filterDefault = document.querySelector('#filter-default');
const filterDiscussed = document.querySelector('#filter-discussed');

const removePhotos = () => {
  const images = document.querySelectorAll('.picture')
  if (images) {
    images.forEach(element => {
      element.remove();
    });
  }
};


const showFilterBlock = () => {
  filterBlock.classList.remove('img-filters--inactive');
};


filterDefault.addEventListener('click', () => {
  if (filterRandom.classList.contains('img-filters__button--active') || filterDiscussed.classList.contains('img-filters__button--active')) {
    filterRandom.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
  }
  filterDefault.classList.add('img-filters__button--active');
  removePhotos();
  getData((photos) => {
    useDataInfo(photos)
  });
});


/* const debounce = (cb, timeout) => {
  let delay;
  return () => {
    clearTimeout(delay)

    delay = setTimeout(cb, timeout)

    // Задержка реализуется с помощью setTimeout
    // Если вызов произошёл до окончания задержки, таймер начинает отсчёт заново
  };
}; */


filterRandom.addEventListener('click', () => {
  if (filterDefault.classList.contains('img-filters__button--active') || filterDiscussed.classList.contains('img-filters__button--active')) {
    filterDefault.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
  }
  filterRandom.classList.add('img-filters__button--active');

  removePhotos();
  getData((photos) => {
    shuffle(photos)
    useDataInfo(photos)
  });
});


filterDiscussed.addEventListener('click', () => {
  if (filterDefault.classList.contains('img-filters__button--active') || filterRandom.classList.contains('img-filters__button--active')) {
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
  }
  filterDiscussed.classList.add('img-filters__button--active')
  removePhotos();
  getData((photos) => {
    useDataInfo(photos.sort((a, b) => {
      return b.comments.length - a.comments.length;
    }));
  });
});



export { showFilterBlock };
