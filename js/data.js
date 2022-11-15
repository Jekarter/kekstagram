import { getRandom } from './util.js';

/* const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const descriptionPhoto = [
  'Без фильтров',
  'Новая камера',
  'Зацените фотку!',
  'Хороший ракурс',
  'Просто так',
  'Из архива',
]

const arrayComments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const likesRange = {
  MIN: 15,
  MAX: 200,
}

const commentsRange = {
  MIN: 1,
  MAX: 5,
}

let photos = [];

const similarPhotosCount = 25;
 */
const getRandomArrayElement = (elements) => {
  return elements[getRandom(0, elements.length - 1)];
};

/* const addComments = () => {
  const comments = [];

  for (let i = 0; i < getRandom(commentsRange.MIN, commentsRange.MAX); i++) {
    comments.push({
      id: getRandom(0, 999),
      avatar: 'img/avatar-' + getRandom(1, 6) + '.svg',
      message: getRandomArrayElement(arrayComments),
      name: getRandomArrayElement(NAMES),
    });
  }

  return comments;
};

const addPhotos = () => {
  for (let i = 0; i < similarPhotosCount; i++) {
    photos.push({
      id: i,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomArrayElement(descriptionPhoto),
      likes: getRandom(likesRange.MIN, likesRange.MAX),
      comments: addComments(),
    })
  }
};

addPhotos(); */

export { getRandomArrayElement };
