import './data.js';
import { useDataInfo } from './pictures.js';
import './full-image.js';
import { closeModal, setUserFormSubmit } from './load-image.js';
import './reditor-image.js';
import './photo-effects.js';
import './validation.js';
import { getData } from './api.js';
import './message-load.js';
import './filters.js';
import './comments-load.js';


getData((photos) => {
  useDataInfo(photos)
})

setUserFormSubmit(closeModal)


/* fetch('https://23.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    useDataInfo(photos)
  }) */
