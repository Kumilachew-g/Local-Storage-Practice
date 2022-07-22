const sendBtn = document.getElementById('send');
const resetBtn = document.getElementById('reset');
const form = document.getElementById('form');

// form refresh state

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
// Now Working for reset Btn

resetBtn.addEventListener('click', () => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // Set values

  name.value = '';
  email.value = '';
  message.value = '';
});

// Now Start SendBtn
sendBtn.addEventListener('click', () => {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');

  //  Get Value and local Storage

  name = name.value;
  localStorage.setItem('name', name);

  email = email.value;
  localStorage.setItem('email', email);

  message = message.value;
  localStorage.setItem('message', message);
});
