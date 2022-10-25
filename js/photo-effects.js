import { imageUploadPreview } from './reditor-image.js';

let buttonSubmitPhoto = document.querySelector('.img-upload__submit')
let effects = document.querySelectorAll('input[name="effect"]')
let effectNone = document.querySelector('#effect-none');
let effectChrome = document.querySelector('#effect-chrome');
let effectSepia = document.querySelector('#effect-sepia');
let effectMarvin = document.querySelector('#effect-marvin');
let effectPhobos = document.querySelector('#effect-phobos');
let effectHeat = document.querySelector('#effect-heat');
let sliderElement = document.querySelector('.effect-level__slider');
let valueElement = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0.8,
  step: 0.1,
  connect: 'lower',
})

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
  valueElement.value = unencoded[handle]
  console.log(valueElement.value)

  if (effectChrome.checked) {
    imageUploadPreview.style.filter = 'grayscale('+ valueElement.value + ')';
  }
  if (effectHeat.checked) {
    imageUploadPreview.style.filter = 'brightness('+ valueElement.value + ')';
  }
})

effectHeat.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
    });
  }
})

/* sliderElement.addEventListener('update', (evt) => {

})
 */

export { buttonSubmitPhoto };
