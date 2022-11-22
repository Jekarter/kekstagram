import { onEscapeDown } from './util.js';

const hashtagsInput = document.querySelector('.text__hashtags');
const photoTextDescription = document.querySelector('.text__description');
const commentInput = document.querySelector('.social__footer-text');

const HASHTAG_VALID_REGEX = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MAX_HASHTAG_NUMBERS = 5;

const onHashtagInputValid = () => {
  const hashtagArray = hashtagsInput.value.toLowerCase().trim().split(' ');
  const uniqueHashtagArray = new Set(hashtagArray);

  if (hashtagArray.length > MAX_HASHTAG_NUMBERS) {
    hashtagsInput.setCustomValidity('Хэш-тегов не должно быть больше чем ' + MAX_HASHTAG_NUMBERS);
  } else {
    hashtagsInput.setCustomValidity('');
  }

  hashtagArray.forEach((hashtag) => {
    if (!HASHTAG_VALID_REGEX.test(hashtag)) {
      hashtagsInput.setCustomValidity(`Хэш-тег начинается с символа # (решётка)
      строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;`)
    } else if (hashtagArray.length !== uniqueHashtagArray.size) {
      hashtagsInput.setCustomValidity('Хэш-теги не должны повторяться')
    } else if (hashtagArray.length === '') {
      hashtagsInput.setCustomValidity('');
    }
  })

  if (hashtagsInput.value === '') {
    hashtagsInput.setCustomValidity('');
    return;
  }
  hashtagsInput.reportValidity();
}

hashtagsInput.addEventListener('input', onHashtagInputValid);
hashtagsInput.addEventListener('keydown', onEscapeDown)
photoTextDescription.addEventListener('keydown', onEscapeDown);
commentInput.addEventListener('keydown', onEscapeDown);

export { hashtagsInput, photoTextDescription }

//(#(?<tag>[A-Za-zА-Яа-я]{1,19})\s*)+
