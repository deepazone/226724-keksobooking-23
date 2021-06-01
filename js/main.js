function getRandomNumber(min, max, decimal) {
  if (min >= max || min < 0 || max < 0) {
    return 'неверные параметры';
  }

  const randomNumber = (Math.random() * (max - min) + min).toFixed(parseInt(decimal));

  return randomNumber;
}

getRandomNumber(100, 200, 5)
