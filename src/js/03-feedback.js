import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.email');
const messageEl = document.querySelector('.message');

formEl.addEventListener('input', throttle(onInputChange, 500));
formEl.addEventListener('submit', onSubmitChange);

const formData = {};

function onInputChange(event) {
  //   console.dir(event);
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitChange(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onLoadSite() {
  const localStorageData = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (
    Array.isArray(localStorageData) &&
    Object.keys(localStorageData).length !== 0
  ) {
    formData.email = emailEl.value;
    formData.message = messageEl.value;
  }
}

onLoadSite();
