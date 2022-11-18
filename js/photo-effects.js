/* global noUiSlider:readonly */
import { imageUploadPreview } from './reditor-image.js';
import { controlLoad } from './load-image.js';

let buttonSubmitPhoto = document.querySelector('.img-upload__submit')
let effects = document.querySelector('.img-upload__effect-level')
let effectNone = document.querySelector('#effect-none');
let effectChrome = document.querySelector('#effect-chrome');
let effectSepia = document.querySelector('#effect-sepia');
let effectMarvin = document.querySelector('#effect-marvin');
let effectPhobos = document.querySelector('#effect-phobos');
let effectHeat = document.querySelector('#effect-heat');
let sliderElement = document.querySelector('.effect-level__slider');
let valueElement = document.querySelector('[name="effect-level"]');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
})

let getUpdateOptions = (min, max, step, start) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    step: step,
    start: start,
  });
}


effectNone.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    imageUploadPreview.style.filter = 'none';
    effects.classList.add('hidden')
  }
})

controlLoad.addEventListener('change', () => {
  imageUploadPreview.style.filter = 'none';
  effects.classList.add('hidden')
});

effectChrome.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    if (effects.classList.contains('hidden')) {
      effects.classList.remove('hidden')
    }
    getUpdateOptions(0, 1, 0.1, 1)
  }
})

effectSepia.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    if (effects.classList.contains('hidden')) {
      effects.classList.remove('hidden')
    }
    getUpdateOptions(0, 1, 0.1, 1)
  }
})

effectMarvin.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    if (effects.classList.contains('hidden')) {
      effects.classList.remove('hidden')
    }
    getUpdateOptions(1, 100, 1, 100)
  }
})

effectPhobos.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    if (effects.classList.contains('hidden')) {
      effects.classList.remove('hidden')
    }
    getUpdateOptions(0, 3, 0.1, 3)
  }
})

effectHeat.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    if (effects.classList.contains('hidden')) {
      effects.classList.remove('hidden')
    }
    getUpdateOptions(1, 3, 0.1, 3)
  }
})

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
  if (effectChrome.checked) {
    imageUploadPreview.style.filter = 'grayscale('+ valueElement.value + ')';
  }

  if (effectSepia.checked) {
    imageUploadPreview.style.filter = 'sepia('+ valueElement.value + ')';
  }

  if (effectMarvin.checked) {
    imageUploadPreview.style.filter = 'invert('+ valueElement.value + '%' + ')';
  }

  if (effectPhobos.checked) {
    imageUploadPreview.style.filter = 'blur('+ valueElement.value + 'px' + ')';
  }

  if (effectHeat.checked) {
    imageUploadPreview.style.filter = 'brightness('+ valueElement.value + ')';
  }
  return valueElement.value = unencoded[handle]
})

export { buttonSubmitPhoto };
