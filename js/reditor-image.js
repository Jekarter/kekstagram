let scaleUp = document.querySelector('.scale__control--bigger');
let scaleDown = document.querySelector('.scale__control--smaller');
let scaleValue = document.querySelector('.scale__control--value');
let imageUploadPreview = document.querySelector('.img-upload__preview > img');
scaleValue.value = '100%';

let scaleIndicators = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
}

scaleDown.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) - scaleIndicators.STEP;

  if (scale < scaleIndicators.MIN) {
    scale = scaleIndicators.MIN;
  }
  scaleValue.value = scale + '%';
  scale /= 100;
  imageUploadPreview.style.transform = 'scale(' + scale + ')';
});

scaleUp.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) + scaleIndicators.STEP;

  if (scale > scaleIndicators.MAX) {
    scale = scaleIndicators.MAX;
  }
  scaleValue.value = scale + '%';
  scale /= 100;
  imageUploadPreview.style.transform = 'scale(' + scale + ')';
})


export { imageUploadPreview };
