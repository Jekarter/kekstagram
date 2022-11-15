import { body } from './full-image.js';

const messageTemplateSuccess = document.querySelector('#success').content.querySelector('.success');
const messageTemplateError = document.querySelector('#error').content.querySelector('.error');

const messageSuccessLoadPhoto = (template, classBlock, classButton) => {
  const message = template.cloneNode(true);
  /*   const messageSuccessSection = messageSuccess.querySelector('.success') */
  const innerBlock = message.querySelector(classBlock)
  const button = message.querySelector(classButton);

  window.addEventListener('click', (evt) => {
    const closeMessageSuccess = evt.composedPath().includes(innerBlock)

    if (!closeMessageSuccess) {
      message.style.display = 'none'
    }
  })


  button.addEventListener('click', () => {
    message.classList.add('hidden');
  })

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      message.classList.add('hidden');
    }
  })

  body.appendChild(message);
}


export { messageTemplateSuccess, messageTemplateError, messageSuccessLoadPhoto };



/* const messageSuccessLoadPhoto = () => {
  const messageSuccess = messageTemplate.cloneNode(true);
     const messageSuccessSection = messageSuccess.querySelector('.success')
  const successInner = messageSuccess.querySelector('.success__inner')
  const successButton = messageSuccess.querySelector('.success__button');

  window.addEventListener('click', (evt) => {
    const closeMessageSuccess = evt.composedPath().includes(successInner)

    if (!closeMessageSuccess) {
      messageSuccess.style.display = 'none'
    }
  })


  successButton.addEventListener('click', () => {
    messageSuccess.classList.add('hidden');
  })

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      messageSuccess.classList.add('hidden');
    }
  })

  body.appendChild(messageSuccess);
} */
