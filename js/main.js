function getRandomNumberWhole(min, max) {
  if (min >= max || min < 0 || max < 0) {
    return 'неверные параметры';
  }

  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  return randomNumber;
}


function getRandomNumber(min, max, decimal) {
  if (min >= max || min < 0 || max < 0) {
    return 'неверные параметры';
  }

  const randomNumber = Number(Math.random() * (max - min) + min).toFixed(decimal);

  return randomNumber;
}

const TITLE = [
  'Восхитительный дворец',
  'Караоке лаунж',
  'Гостевой домик',
  'Домик уточки',
  'Аквадискотека',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

function createLocation() {
  return {
    lat: getRandomNumber(35.65000, 35.70000, 5),
    lng: getRandomNumber(139.70000, 139.80000, 5),
  };
}

function getRandomArrayElement (randomNumber) {
  return randomNumber[getRandomNumberWhole(0, randomNumber.length - 1)];

}

const getShuffledItems = (items) => {
  const shuffleArray = items.slice().sort(() => Math.random() - 0.5);
  return shuffleArray;
  // логика перемешевания, что возращает масив
};

// Функция возвращает перемешенный массив с заданной длинной
const getRandomItems = (items, count) => {
  const shuffledItems = getShuffledItems(items);

  return shuffledItems.slice(0, count);
};

// eslint-disable-next-line no-unused-vars
const createOffer = () => {
  const cords = createLocation();
  return {
    avatar: `img/avatars/user/0${getRandomNumberWhole(1, 8)}.png`,
    offer: {
      title:  getRandomArrayElement(TITLE),
      address:`${cords.lat}, ${cords.lng}`,
      price:  getRandomNumberWhole(0, 1000000),
      type:  getRandomArrayElement(TYPE),
      rooms: getRandomNumberWhole(1, 10),
      guests:  getRandomNumberWhole(1, 30),
      checkin:  getRandomArrayElement(CHECKIN),
      checkout:  getRandomArrayElement(CHECKOUT),
      features:  getRandomItems(FEATURES, getRandomNumberWhole(0, FEATURES.length - 1)),
      description:  'описание помещения',
      photos:  getRandomItems(PHOTOS, getRandomNumberWhole(0, PHOTOS.length - 1)),
    },
    location: {
      lat: cords.lat,
      lng: cords.lng,
    },
  };
};
