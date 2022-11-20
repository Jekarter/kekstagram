import { body } from './full-image.js';
import { imageUploadPreview, scaleValue } from './reditor-image.js';
import './util.js';
import { sendData } from './api.js';
import { hashtagsInput, photoTextDescription } from './validation.js';
import { messageSuccessLoadPhoto, messageTemplateError } from './message-load.js';
import { setDefaultLevel, effectLevel } from './photo-effects.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const Picture = {
  WIDTH: 600,
  HEIGHT: 600,
};

let controlLoad = document.querySelector('#upload-file');
let redactorFormImage = document.querySelector('.img-upload__overlay');
let controlLoadCancel = document.querySelector('#upload-cancel');
let imageUploadForm = document.querySelector('.img-upload__form');
let previews = document.querySelectorAll('.effects__preview')


const clearImageLoadInfo = () => {
  hashtagsInput.value = '';
  controlLoad.value = '';
  photoTextDescription.value = '';
  setDefaultLevel();
}

controlLoad.addEventListener('change', (evt) => {
  evt.preventDefault();
  const file = controlLoad.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      imageUploadPreview.src = reader.result;
      imageUploadPreview.width = Picture.WIDTH;
      imageUploadPreview.height = Picture.HEIGHT;
      previews.forEach((filters) => {
        filters.style.backgroundImage = `url(${reader.result})`
      })
    })

    reader.readAsDataURL(file);
  }


  redactorFormImage.classList.remove('hidden')
  body.classList.add('modal-open');
  scaleValue.value = '100%';
  imageUploadPreview.style.transform = 'scale(' + 1 + ')';
});

let closeModal = () => {
  redactorFormImage.classList.add('hidden');
  body.classList.remove('modal-open');
  effectLevel.classList.add('visually-hidden');
  controlLoad.value = '';
  imageUploadForm.reset();
  setDefaultLevel();
}

controlLoadCancel.addEventListener('click', () => {
  closeModal();
  clearImageLoadInfo();
})

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    closeModal();
    clearImageLoadInfo();
  }
})


const setUserFormSubmit = (onSuccess) => {
  imageUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => onSuccess(),
      () => messageSuccessLoadPhoto(messageTemplateError, '.error__inner', '.error__button'),
      new FormData(evt.target),
    );
    clearImageLoadInfo();
    closeModal();
  });
};

export { controlLoad, setUserFormSubmit, closeModal }

/*     fetch(
      'https://23.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess()
        } else {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз')
        }
      })
      .catch(() => {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз')
      }) */
