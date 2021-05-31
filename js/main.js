
function getRandomNumber(min, max, decimal) {
  if (min >= max || min < 0 || max < 0) {
    return 'неверные параметры';
  }

  const number = (Math.random() * (max - min) + min).toFixed(decimal);

  return number;
}

console.log(getRandomNumber(20, 400.223, 10));

