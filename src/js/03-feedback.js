import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(getFormData, 500));
formEl.addEventListener('submit', onSubmitForm);

const formData = {};

function getFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();

  if (!email.value || !message.value) {
    return alert('Please complete all fields!');
  }

  
   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));


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