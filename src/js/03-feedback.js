import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(getFormData, 500));
formEl.addEventListener('submit', onSubmitForm);

const formData = {};

function getFormData(e) {
  formData[e.target.name] = e.target.value;
  if (e.target.value === "") {
    console.error ("Fields must not be empty");
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();