/* global noUiSlider:readonly */
import { imageUploadPreview } from './reditor-image.js';

const DEFAULT_EFFECT_LEVEL = 100;

const Slider = {
  MAX: 100,
  MIN: 0,
  STEP: 1,
}

const effectRadioGroup = document.querySelector('.img-upload__effects');
const effectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');

effectLevel.classList.add('visually-hidden');

let lastClass = '';

const effects = {
  none: () => {
    effectLevel.classList.add('visually-hidden')
    return 'none';
  },
  chrome: () => {
    effectLevel.classList.remove('visually-hidden')
    return `grayscale(${parseInt(effectLevelValue.value, 10) * 0.01})`;
  },
  sepia: () => {
    effectLevel.classList.remove('visually-hidden')
    return `sepia(${parseInt(effectLevelValue.value, 10) * 0.01})`;
  },
  marvin: () => {
    effectLevel.classList.remove('visually-hidden')
    return `invert(${Math.floor(effectLevelValue.value)}%)`;
  },
  phobos: () => {
    effectLevel.classList.remove('visually-hidden')
    return `blur(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01}px)`;
  },
  heat: () => {
    effectLevel.classList.remove('visually-hidden')
    return `brightness(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01})`;
  },
}

const onEffectRadioGroupClick = (evt) => {
  if (evt.target.classList.contains('effects__preview')) {
    if (lastClass !== '') {
      imageUploadPreview.classList.remove(lastClass);
    }
    effectLevelSlider.noUiSlider.set(DEFAULT_EFFECT_LEVEL);
    let currentClass = evt.target.classList[1];
    lastClass = currentClass;

    effectLevelValue.value = Math.round(effectLevelSlider.noUiSlider.get());
    imageUploadPreview.style.filter = effects[lastClass.replace('effects__preview--', '')]();

    imageUploadPreview.classList.add(currentClass);
    imageUploadPreview.getElementsByClassName.fllter = effects[currentClass.replace('effects__preview--', '')]();
  }
};

effectRadioGroup.addEventListener('click', onEffectRadioGroupClick)

noUiSlider.create(effectLevelSlider, {
  range: {
    min: Slider.MIN,
    max: Slider.MAX,
  },
  start: Slider.MAX,
  connect: 'lower',
});

effectLevelSlider.noUiSlider.on('change', () => {
  effectLevelValue.value = Math.round(effectLevelSlider.noUiSlider.get());

  imageUploadPreview.style.filter = effects[lastClass.replace('effects__preview--', '')]();
});

const setDefaultLevel = () => {
  effectLevelSlider.noUiSlider.set(DEFAULT_EFFECT_LEVEL);
  effectLevelValue.value = DEFAULT_EFFECT_LEVEL;
  effectLevel.classList.add('visually-hiden');
  imageUploadPreview.style.filter = null;
  if (lastClass) {
    imageUploadPreview.classList.remove(lastClass);
  }
}

export { setDefaultLevel, effectLevel }
/*
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
 */
