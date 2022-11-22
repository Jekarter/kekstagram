const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentList = document.querySelector('.social__comments')
const commentsLoader = bigPicture.querySelector('.comments-loader')
const commentCount = bigPicture.querySelector('.social__comment-count')

const COMMENTS_LOAD_STEP = 5;

let commentsCount = COMMENTS_LOAD_STEP;

let commentsLoaded = [];

const onBigPictureCloseClick = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
  commentList.innerHTML = '';
  commentsCount = COMMENTS_LOAD_STEP;
  commentsLoaded = [];
};

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPicture.classList.add('hidden')
    body.classList.remove('modal-open')
    commentList.innerHTML = '';
  }
});

const renderComment = (comment) => {

  const commentSimilar = commentTemplate.cloneNode(true)

  commentSimilar.querySelector('.social__picture').src = comment.avatar;
  commentSimilar.querySelector('.social__picture').alt = comment.name;
  commentSimilar.querySelector('.social__text').textContent = comment.message;

  return commentSimilar;
};

const renderComments = (comments) => {

  const onCommentsLoaderClick = () => {
    renderComments(comments);
  }

  let commentsListFragment = document.createDocumentFragment();

  commentsCount = (comments.length < COMMENTS_LOAD_STEP) ? comments.length : commentsCount;
  commentsLoaded = comments.slice(0, commentsCount);

  commentList.innerHTML = '';

  commentCount.textContent =`${commentsLoaded.length} из ${comments.length} комментариев`;

  commentsLoaded.forEach(comment => {
    commentsListFragment.appendChild(renderComment(comment));
  });

  commentList.appendChild(commentsListFragment);

  if (comments.length > COMMENTS_LOAD_STEP && commentsLoaded.length < comments.length) {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', onCommentsLoaderClick, { once: true })
  } else {
    commentsLoader.classList.add('hidden');
  }

  commentsCount += COMMENTS_LOAD_STEP;
}

let show = (picture) => {
  commentsCount = COMMENTS_LOAD_STEP;
  commentsLoaded = [];
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img > img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  /*  bigPicture.querySelector('.comments-count').textContent = picture.comments.length; */
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  body.classList.add('modal-open')

  bigPictureClose.addEventListener('click', onBigPictureCloseClick)

  renderComments(picture.comments.slice())
  /*   allComments = document.querySelectorAll('.social__comment') */
}

export { bigPicture, show, body };
