import {formDisabled, formActive} from './util.js';

// Создаем объекты для фильтрации зависимости типа от цены

const OfferType = {
  BUNGALOW: 'bungalow',
  FLAT: 'flat',
  HOTEL: 'hotel',
  HOUSE: 'house',
  PALACE: 'palace',
};

const offerTypeToPrice = {
  [OfferType.BUNGALOW]: 0,
  [OfferType.FLAT]: 1000,
  [OfferType.HOTEL]: 3000,
  [OfferType.HOUSE]: 5000,
  [OfferType.PALACE]: 10000,
};

// Находим все для валидации

const roomNumber = document.querySelector('#room_number');
const numberOfSeats = document.querySelector('#capacity');
const adFormNode = document.querySelector('.ad-form');
const priceNode = adFormNode.querySelector('#price');
const typeNode = adFormNode.querySelector('#type');

// Валидация по количеству мест относительно комнат

const countRoomsAndSeats = () => {
  const roomNumberOption = roomNumber.options[roomNumber.selectedIndex].value;
  const numberOfSeatsOption = numberOfSeats.options[numberOfSeats.selectedIndex].value;

  if (numberOfSeatsOption <= roomNumberOption) {
    numberOfSeats.setCustomValidity('');
  } else {
    numberOfSeats.setCustomValidity('Количество мест должно быть равно или меньше количества комнат!');
  }

  numberOfSeats.reportValidity();

  if ((numberOfSeatsOption !== '0' && roomNumberOption === '100') || (numberOfSeatsOption === '0' && roomNumberOption !== '100')) {
    roomNumber.setCustomValidity('100 комнат не для гостей!');
  } else {
    roomNumber.setCustomValidity('');
  }

  roomNumber.reportValidity();
};

roomNumber.addEventListener('change', () => countRoomsAndSeats());
numberOfSeats.addEventListener('change', () => countRoomsAndSeats());

// Валидация по типу жилья

adFormNode.addEventListener('change', (evt) => {
  const { name, value } = evt.target;
  switch (name) {
    case typeNode.name: {
      const price = offerTypeToPrice[value];
      priceNode.min = price;
      priceNode.placeholder = price;
      break;
    }
  }
});

//логика отключения формы

const loadPage = {
  load: true,
};

const mapFilters = document.querySelector('.map__filters');
const addForm = document.querySelector('.ad-form');

if(loadPage.load === false) {
  formDisabled(mapFilters, 'map__filters--disabled');
  formDisabled(addForm, 'ad-form--disabled');
} else {
  formActive(mapFilters, 'map__filters--disabled');
  formActive(addForm, 'ad-form--disabled');
}

//фильтрация по времени заезда-выезда
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const changeTime = (time, value) => time.value = value;

timeIn.addEventListener('change', () => changeTime(timeOut, timeIn.value));
timeOut.addEventListener('change', () => changeTime(timeIn, timeOut.value));
