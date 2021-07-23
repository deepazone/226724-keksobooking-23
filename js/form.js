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

//const roomNumber = document.querySelector('#room_number');
//const numberOfSeats = document.querySelector('#capacity');
const adFormNode = document.querySelector('.ad-form');
const priceNode = adFormNode.querySelector('#price');
const typeNode = adFormNode.querySelector('#type');
const timeInNode = document.querySelector('#timein');
const timeOutNode = document.querySelector('#timeout');
const roomNumberNode = document.querySelector('#room_number');
const capacityNode = adFormNode.querySelector('#capacity');

const roomsToCapacities = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

adFormNode.addEventListener('change', (evt) => {
  const { name, value } = evt.target;
  switch (name) {
    case typeNode.name: {
      const price = offerTypeToPrice[value];
      priceNode.min = price;
      priceNode.placeholder = price;
      break;
    }
    case timeInNode.name:
    case timeOutNode.name: {
      timeOutNode.value = value;
      timeInNode.value = value;
      break;
    }
    case roomNumberNode.name:
    case capacityNode.name: {
      const roomNumber = roomNumberNode.value;
      const capacityNumber = parseInt(capacityNode.value, 10);
      capacityNode.setCustomValidity(roomsToCapacities[roomNumber].includes(capacityNumber) ? '' : 'Количество гостей больше чем комнат');
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
