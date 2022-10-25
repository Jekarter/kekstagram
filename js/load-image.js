import { body } from './full-image.js';

let controlLoad = document.querySelector('#upload-file');
let redactorFormImage = document.querySelector('.img-upload__overlay');
let controlLoadCancel = document.querySelector('#upload-cancel');

// Временный клик место change
controlLoad.addEventListener('click', (evt) => {
  evt.preventDefault();
  redactorFormImage.classList.remove('hidden')
  body.classList.add('modal-open');
});

let closeModal = () => {
  redactorFormImage.classList.add('hidden');
  body.classList.remove('modal-open');
}

controlLoadCancel.addEventListener('click', () => {
  closeModal();
})

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    closeModal();
    controlLoad.value = '';
  }
})

export { controlLoad }
