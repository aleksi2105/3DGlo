const timer = function (deadline) {
  const timerHours = document.getElementById('timer-hours')
  const timerMinutes = document.getElementById('timer-minutes')
  const timerSeconds = document.getElementById('timer-seconds')

  let intervalId

  const numZero = (num) => {
    return String(num).padStart(2, '0')
  }

  const getTimeRemaining = () => {

    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000
    if (timeRemaining <= 0) {
      return { timeRemaining: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    let hours = Math.floor(timeRemaining / 60 / 60)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60)

    return { timeRemaining, hours, minutes, seconds }
  }

  const updateClock = () => {
    let getTime = getTimeRemaining()

    timerHours.textContent = numZero(getTime.hours)
    timerMinutes.textContent = numZero(getTime.minutes)
    timerSeconds.textContent = numZero(getTime.seconds)

    if (getTime.timeRemaining === 0) {
      clearInterval(intervalId)
      // timerHours.textContent = '00'
      // timerMinutes.textContent = '00'
      // timerSeconds.textContent = '00'
    }
    console.log('Проверка');
  }
  updateClock()
  intervalId = setInterval(updateClock, 1000)
}

export default timer