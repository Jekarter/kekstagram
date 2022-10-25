let bigPicture = document.querySelector('.big-picture');
let bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
let commentsLoader = bigPicture.querySelector('.comments-loader')
let commentsCount = bigPicture.querySelector('.social__comment-count')
let body = document.querySelector('body');

const onBigPictureCloseClick = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
  commentList.innerHTML = '';
};

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPicture.classList.add('hidden')
    body.classList.remove('modal-open')
    commentList.innerHTML = '';
  }
})

/* if (bigPicture.classList.contains('hidden')) {
  bigPictureClose.addEventListener('click', () => {
    bigPicture.classList.add('hidden')
    body.classList.remove('modal-open')
  })
*/



const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentList = document.querySelector('.social__comments')

const renderComment = (comment) => {
  const commentSimilar = commentTemplate.cloneNode(true)

  commentSimilar.querySelector('.social__picture').src = comment.avatar;
  commentSimilar.querySelector('.social__picture').alt = comment.name;
  commentSimilar.querySelector('.social__text').textContent = comment.message;

  return commentSimilar;
}

const renderComments = (comments) => {
  let commentsListFragment = document.createDocumentFragment();

  comments.forEach(comment => {
    commentsListFragment.appendChild(renderComment(comment));
  });

  commentList.appendChild(commentsListFragment);
}

let show = (picture) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img > img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  commentsCount.classList.add('hidden')
  commentsLoader.classList.add('hidden')
  body.classList.add('modal-open')

  bigPictureClose.addEventListener('click', onBigPictureCloseClick)

  renderComments(picture.comments)
}

export { bigPicture, show, body };
