// Измеряем длинну строки

let checkLength = function (strokeText, maxLength = 50) {
  if (strokeText.length <= maxLength) {
    console.log('true')
  } else {
    console.log('false')
  }
}

checkLength(strokeText)

// Получаем случайное целое число

let getRandom = function (min, max) {
  if (max < min || min < 0) {
    return console.log('ошибка')
  }
  return Math.round(Math.random() * (max - min) + min);
}

getRandom(-1, 5)
