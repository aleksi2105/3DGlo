const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block')
  const calcType = document.querySelector('.calc-type')
  const squareInput = document.querySelector('.calc-square');
  const countInput = document.querySelector('.calc-count');
  const daysInput = document.querySelector('.calc-day');
  const total = document.getElementById('total')

  const onlyNumbers = function (input) {
    input.value = input.value.replace(/\D/g, '')
  }

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value
    const calcSquareValue = squareInput.value

    let totalValue = 0
    let countInputValue = 1
    let daysInputValue = 1

    if (countInput.value > 1) {
      countInputValue += +countInput.value / 10
    }

    if (daysInput.value && daysInput.value < 5) {
      daysInputValue = 2
    } else if (daysInput.value && daysInput.value < 10) {
      daysInputValue = 1.5
    }

    if (calcType.value && squareInput.value) {
      totalValue = price * calcTypeValue * calcSquareValue * countInputValue * daysInputValue
    } else {
      totalValue = 0
    }
    total.textContent = totalValue
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

  calcBlock.addEventListener('input', (e) => {
    if (e.target === calcType || e.target === squareInput ||
      e.target === countInput || e.target === daysInput) {
      countCalc()
    }

  })
}

export default calc