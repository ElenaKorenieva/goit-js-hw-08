import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');

formEl.addEventListener('input', throttle(onInputChange, 500));
formEl.addEventListener('submit', onSubmitChange);

const formData = {
  email: '',
  message: '',
};

function onInputChange(event) {
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

  if (localStorageData && Object.keys(localStorageData).length !== 0) {
    console.log(2);
    emailEl.value = localStorageData.email;
    formData.email = localStorageData.email;
    messageEl.value = localStorageData.message;
    formData.message = localStorageData.message;
  }
}

onLoadSite();
