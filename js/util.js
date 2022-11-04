const onEscapeDown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    evt.stopPropagation();
  }
}

// Измеряем длинну строки

let checkLength = function (strokeText, maxLength) {
  console.log(strokeText.length <= maxLength)
  return strokeText.length <= maxLength;
}

// Получаем случайное целое число

let getRandom = function (min, max) {
  if (min > max) {
    [min, max] = [max, min]
  }
  if (min < 0) {
    alert('Число должно быть положительным!')
  }
  return Math.round(Math.random() * (max - min) + min);
}



// Получаем случайное уникальное число

const previousValues = [];
const makeUniqueRandomIntegerGenerator = (min, max) => {

  return () => {
    let currentValue = getRandom(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandom(min, max)
    }
    previousValues.push(currentValue)
    return currentValue
  }

}

export {previousValues, makeUniqueRandomIntegerGenerator, getRandom, checkLength, onEscapeDown};