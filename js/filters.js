import { controlLoad } from './load-image.js';


let filterBlock = document.querySelector('.img-filters');

/* filterBlock.classList.remove('img-filters--inactive');
 */
controlLoad.addEventListener('load', () => {
  filterBlock.classList.remove('img-filters--inactive');
})
