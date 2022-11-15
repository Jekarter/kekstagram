import { messageSuccessLoadPhoto, messageTemplateSuccess, messageTemplateError } from './message-load.js';


const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos)
    })
}

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        messageSuccessLoadPhoto(messageTemplateSuccess, '.success__inner', '.success__button')
        response.json()
      } else {
        messageSuccessLoadPhoto(messageTemplateError, '.error__inner', '.error__button')
      }
    })
    .catch(() => {
      messageSuccessLoadPhoto(messageTemplateError, '.error__inner', '.error__button')
    });
};

export { getData, sendData };
