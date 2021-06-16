const getRandomNumberWhole = (min, max) => {
  if (min >= max || min < 0 || max < 0) {
    return 'неверные параметры';
  }

  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  return randomNumber;
};


const getRandomNumber = (min, max, decimal) => {
  if (min >= max || min < 0 || max < 0) {
    return 'неверные параметры';
  }

  const randomNumber = Number(Math.random() * (max - min) + min).toFixed(decimal);

  return randomNumber;
};

const TITLES = [
  'Восхитительный дворец',
  'Караоке лаунж',
  'Гостевой домик',
  'Домик уточки',
  'Аквадискотека',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
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

const createLocation = () => ({
  lat: getRandomNumber(35.65000, 35.70000, 5),
  lng: getRandomNumber(139.70000, 139.80000, 5),
});

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


const createOffer = () => {
  const cords = createLocation();
  return {
    author: {
      avatar: `img/avatars/user/0${getRandomNumberWhole(1, 8)}.png`,
    },
    offer: {
      title:  getRandomArrayElement(TITLES),
      address:`${cords.lat}, ${cords.lng}`,
      price:  getRandomNumberWhole(0, 1000000),
      type:  getRandomArrayElement(TYPES),
      rooms: getRandomNumberWhole(1, 10),
      guests:  getRandomNumberWhole(1, 30),
      checkin:  getRandomArrayElement(CHECKINS),
      checkout:  getRandomArrayElement(CHECKOUTS),
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

const createOffers = (SIMILAR_OFFER_COUNT) => {
  const offers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());

  return offers;
};

console.log(createOffers(10));
