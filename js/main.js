function getRandomNumberWhole(min, max) {
  if (min >= max || min < 0 || max < 0) {
    return 'неверные параметры';
  }

  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  return randomNumber;
}

getRandomNumberWhole(100, 200);

function getRandomNumber(min, max, decimal) {
  if (min >= max || min < 0 || max < 0) {
    return 'неверные параметры';
  }

  const randomNumber = Number(Math.random() * (max - min) + min).toFixed(decimal);

  return randomNumber;
}

getRandomNumber(100, 200, 5);
