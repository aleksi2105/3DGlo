const forms = () => {
  const onlyRusText = /[^а-яА-ЯёЁ\s-]/g;
  document.querySelectorAll('form-name').forEach((input) => {

    input.addEventListener('input', () => {
      input.value = input.value.replace(onlyRusText, '');
    });
  });

  const message = document.getElementById('form2-message');
  if (message) {
    message.addEventListener('input', () => {
      message.value = message.value.replace(onlyRusText, '');
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