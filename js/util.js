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

const formDisabled = (form, disabledClass) => {
  for (let id = 0; id < form.length; id++) {
    form[id].setAttribute('disabled', 'disabled');
  }

  form.classList.add(disabledClass);
};

const formActive = (form, disabledClass) => {
  for (let id = 0; id < form.length; id++) {
    form[id].removeAttribute('disabled');
  }

  form.classList.remove(disabledClass);
};

export {getRandomNumberWhole, getRandomNumber, formDisabled, formActive};
