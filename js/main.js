import { photos } from './data.js';
import { picturesBlock } from './pictures.js';
import { bigPicture, show } from './full-image.js';
import { controlLoad } from './load-image.js';
import { imageUploadPreview } from './reditor-image.js';
import { buttonSubmitPhoto } from './photo-effects.js';
import { hashtagsInput } from './validation.js';

fetch('https://23.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    console.log(photos)
  })

