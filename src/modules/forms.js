const forms = () => {
  document.querySelectorAll('input[type="text"]').forEach((input) => {

    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^а-яА-ЯёЁ\s-]/, '');
    });
  });

  const message = document.getElementById('form2-message');
  if (message) {
    message.addEventListener('input', () => {
      message.value = message.value.replace(/[^а-яА-ЯёЁ\s-]/g, '');
    });
  }

  document.querySelectorAll('input[type="email"]').forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^A-Za-z0-9@\-_\.!~*']/g, '');
    });
  });

  document.querySelectorAll('input[type="tel"]').forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^0-9()\-]/g, '');
    });
  });
}

export default forms