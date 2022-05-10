import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[name=email]');
const textAreaEl = document.querySelector('textarea[name=message]');

formEl.addEventListener('input', throttle(dataInLocalStoradge, 500));
formEl.addEventListener('submit', onSubmitClick);

const savedData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(savedData);

if (parsedData) {
  inputEl.value = parsedData.email;
  textAreaEl.value = parsedData.message;
}

function dataInLocalStoradge(e) {
  const email = inputEl.value;
  const message = textAreaEl.value;
  localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
}

function onSubmitClick(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;

  if (!email || !message) {
    return alert('Всі поля повинні бути заповнені');
  }

  const objectData = {
    email,
    message,
  };
  console.log(objectData);

  localStorage.removeItem('feedback-form-state');
  formEl.reset();
}