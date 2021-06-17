import {createOffer} from './data.js';

const SIMILAR_OFFER_COUNT = 10;

const createOffers = (count) => {
  const offers = new Array(count).fill(null).map(() => createOffer());

  return offers;
};

createOffers(SIMILAR_OFFER_COUNT);
