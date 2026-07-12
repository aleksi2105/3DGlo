const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId)
  const statusBlock = document.createElement('div')
  const loadText = 'Загрузка...'
  const errorText = 'Ошибка!!!'
  const successText = 'Спасибо! Наш менеджер с Вами свяжется.'

  const validate = (form) => {
    const phone = form.querySelector('[name="user_phone"]')
    const name = form.querySelector('[name="user_name"]')
    const message = form.querySelector('[name="user_message"]')

    const phoneReg = /^[+()\d-]+$/
    const nameReg = /^[А-Яа-яЁё\s]+$/
    const messageReg = /^[А-Яа-яЁё0-9\s.,!?:;"'«»()\-\n]+$/

    let success = true

    if (phone && phone.value && !phoneReg.test(phone.value)) success = false
    if (name && name.value && !nameReg.test(name.value)) success = false
    if (message && message.value && !messageReg.test(message.value)) success = false

    return success
  }

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll('input, textarea')
    const formData = new FormData(form)
    const formBody = {}

    statusBlock.textContent = loadText
    form.append(statusBlock)

    formData.forEach((val, key) => {
      formBody[key] = val
    })

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id)
      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value
      }
    })

    if (validate(form)) {
      sendData(formBody)
        .then(data => {
          statusBlock.textContent = successText
          formElements.forEach(input => {
            input.value = ''
          })
        })
        .catch(error => {
          statusBlock.textContent = errorText
        })
    } else {
      alert('Данные не валидны!')
    }
  }

  try {
    if (!form) {
      throw new Error('Верните форму на место!')
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault()

      submitForm()
    })
  } catch (error) {
    console.log(error.message);

  }
}

export default sendForm