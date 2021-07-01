import {createOffer, HOUSING_TYPES} from './data.js';

const DEFAULT_OFFER_FOR_POPUP = 0;
const SIMILAR_OFFER_COUNT = 10;

const createOffers = (count) => {
  const offers = new Array(count).fill(null).map(() => createOffer());

  return offers;
};

const mapCanvas = document.querySelector('#map-canvas');
const popupTemplate = document.querySelector('#card').content;
const similarOffers = createOffers(SIMILAR_OFFER_COUNT);
const offerForPopup = similarOffers[DEFAULT_OFFER_FOR_POPUP];

const renderPopup = ({author: {avatar}, offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}}) => {
  const popupElement = popupTemplate.cloneNode(true);
  popupElement.querySelector('.popup__title').textContent = title;
  popupElement.querySelector('.popup__text--address').textContent = address;
  popupElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  popupElement.querySelector('.popup__type').textContent = HOUSING_TYPES[type];
  popupElement.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  const featuresPopupList = popupElement.querySelector('.popup__features');
  const modifiers = features.map((feature) => `popup__feature--${feature}`);
  featuresPopupList.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];

    if(!modifiers.includes(modifier)) {
      item.remove();
    }
  });

  popupElement.querySelector('.popup__description').textContent = description;
  const photosList = popupElement.querySelector('.popup__photos');
  const photoElement = photosList.querySelector('.popup__photo');
  photos.map((src) => {
    const photo = photoElement.cloneNode(true);
    photo.src = src;
    photosList.appendChild(photo);
  });
  photoElement.parentNode.removeChild(photoElement);
  popupElement.querySelector('.popup__avatar').src = avatar;
  mapCanvas.appendChild(popupElement);
};

export {renderPopup};
export {offerForPopup};
