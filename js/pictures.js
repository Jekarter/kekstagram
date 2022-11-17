/* import { photos } from './data.js'; */
import { show } from './full-image.js'
import { showFilterBlock } from './filters.js';


let pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
let picturesBlock = document.querySelector('.pictures');
let listOtherUsers = document.createDocumentFragment();


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  array.slice(0,10)
}


let useDataInfo = (photos) => {
  photos.slice();
  for (let i = 0; i < photos.length; i++) {

    let randomUser = pictureTemplate.cloneNode(true);
    randomUser.querySelector('.picture__img').src = photos[i].url;
    randomUser.querySelector('.picture__comments').textContent = photos[i].comments.length;
    randomUser.querySelector('.picture__likes').textContent = photos[i].likes;

    listOtherUsers.appendChild(randomUser)

    randomUser.addEventListener('click', (evt) => {
      evt.preventDefault();
      show(photos[i])
    })
  }

  picturesBlock.appendChild(listOtherUsers)
  showFilterBlock()
}

export { picturesBlock, useDataInfo, shuffle };


/* import { photos } from './data.js';
import { bigPicture, bigPictureImg } from './full-image.js'

let pictureTemplate = document.querySelector('#picture').content;
let pictureRandomUser = pictureTemplate.querySelector('.picture');
let picturesBlock = document.querySelector('.pictures');
let listOtherUsers = document.createDocumentFragment();
let likesCount = bigPicture.querySelector('.likes-count');
let commentsCount = bigPicture.querySelector('.social__comment-count');
let commentsLoader = bigPicture.querySelector('.comments-loader')
let socialDescription = bigPicture.querySelector('.social__caption');
let commentsPhoto = document.querySelectorAll('.social__comments');
let body = document.querySelector('body');


for (let i = 0; i < photos.length; i++) {
  let randomUser = pictureRandomUser.cloneNode(true);
  randomUser.querySelector('.picture__img').src = photos[i].url;

  randomUser.querySelector('.picture__comments').textContent = photos[i].comments.length;

  randomUser.querySelector('.picture__likes').textContent = photos[i].likes;

  randomUser.addEventListener('click', function () {
    bigPicture.classList.remove('hidden');
    bigPictureImg.src = photos[i].url;
    likesCount.textContent = photos[i].likes;
    commentsCount.textContent = photos[i].comments.length;
    socialDescription.textContent = photos[i].description;

    if (!bigPicture.classList.contains('hidden')) {
      commentsCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
      body.classList.add('modal-open');
    }
  });

  listOtherUsers.appendChild(randomUser)
}
if (bigPicture.classList.contains('hidden')) {
  body.classList.remove('modal-open');
}


picturesBlock.appendChild(listOtherUsers)

export { picturesBlock };
*/
