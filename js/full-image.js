const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentList = document.querySelector('.social__comments')
const commentsLoader = bigPicture.querySelector('.comments-loader')
/* const commentsCount = bigPicture.querySelector('.social__comment-count')
 */
const SHOW_COMMENTS_COUNT = 5;
let allComments;
let maxShowComment = SHOW_COMMENTS_COUNT;


let getCommentsCount = () => {
  for (let i = SHOW_COMMENTS_COUNT; i < allComments.length; i++) {
    allComments[i].classList.add('hidden');
  }
};

let showCommentsOnclick = () => {
  maxShowComment += 5
  for (let j = SHOW_COMMENTS_COUNT; j <= maxShowComment; j++) {
    if (allComments[j].classList.contains('hidden')) {
      allComments[j].classList.remove('hidden');
    } else {
      commentsLoader.classList.add('hidden')
    }
  }
/*   if (allComments.length < 30) {
    allComments.forEach(element => {
      element.classList.remove('hidden')
    })
  } */
};

commentsLoader.addEventListener('click', () => {
  showCommentsOnclick()
})

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
});

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
  body.classList.add('modal-open')

  bigPictureClose.addEventListener('click', onBigPictureCloseClick)

  renderComments(picture.comments)
  allComments = document.querySelectorAll('.social__comment')
  getCommentsCount()

  if (commentsLoader.classList.contains('hidden')) {
    commentsLoader.classList.remove('hidden')
  }
  maxShowComment = SHOW_COMMENTS_COUNT;
}

export { bigPicture, show, body };
