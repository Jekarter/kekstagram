import { body } from './full-image.js';
import { imageUploadPreview, scaleValue } from './reditor-image.js';
import { showAlert } from './util.js';
import { sendData } from './api.js';
import { hashtagsInput, photoTextDescription } from './validation.js';
import { messageSuccessLoadPhoto, messageTemplateError } from './message-load.js';

let controlLoad = document.querySelector('#upload-file');
let redactorFormImage = document.querySelector('.img-upload__overlay');
let controlLoadCancel = document.querySelector('#upload-cancel');
let imageUploadForm = document.querySelector('.img-upload__form');

const clearImageLoadInfo = () => {
  hashtagsInput.value = '';
  controlLoad.value = '';
  photoTextDescription.value = '';
}

controlLoad.addEventListener('change', (evt) => {
  evt.preventDefault();
  redactorFormImage.classList.remove('hidden')
  body.classList.add('modal-open');
  scaleValue.value = '100%';
  imageUploadPreview.style.transform = 'scale(' + 1 + ')';
});

let closeModal = () => {
  redactorFormImage.classList.add('hidden');
  body.classList.remove('modal-open');
}

controlLoadCancel.addEventListener('click', () => {
  closeModal();
  clearImageLoadInfo();
})

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    closeModal();
    clearImageLoadInfo()
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
