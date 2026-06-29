const calc = () => {
  const squareInput = document.querySelector('.calc-square');
  const countInput = document.querySelector('.calc-count');
  const daysInput = document.querySelector('.calc-day');

  const onlyNumbers = function (input) {
    input.value = input.value.replace(/\D/g, '')
  }

  squareInput.addEventListener('input', function () {
    onlyNumbers(this)
  })

  countInput.addEventListener('input', function () {
    onlyNumbers(this);
  });

  daysInput.addEventListener('input', function () {
    onlyNumbers(this);
  });
}

export default calc