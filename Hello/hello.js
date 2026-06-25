function getTimeOfDay() {
  const hour = new Date().getHours()

  if (hour >= 6 && hour < 12) {
    return 'Доброе утро'
  } else if (hour >= 12 && hour < 18) {
    return 'Добрый день'
  } else if (hour >= 18 && hour < 22) {
    return 'Добрый вечер'
  } else {
    return 'Доброй ночи'
  }
}

function getDayName() {
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ]
  return days[new Date().getDay()]

}

function formatTime() {
  const now = new Date()
  let hours = now.getHours()
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  // const ampm = hours >= 12 ? 'PM' : 'AM'

  // hours = hours % 12 || 12 // 12-hour format

  // return `${hours}:${minutes}:${seconds} ${ampm}`
  return `${hours}:${minutes}:${seconds}`
}

function getDaysUntilNewYear() {
  const now = new Date()
  const currentYear = now.getFullYear()
  const nextYear = currentYear + 1
  const newYear = new Date(nextYear, 0, 1)
  const diff = newYear - now

  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))

  return days
}

function updateClock() {
  const greeting = document.getElementById('greeting')
  const dayInfo = document.getElementById('dayInfo')
  const timeDisplay = document.getElementById('timeDisplay')
  const newYearInfo = document.getElementById('newYearInfo')

  greeting.textContent = getTimeOfDay()
  dayInfo.textContent = `Сегодня: ${getDayName()}`
  timeDisplay.textContent = `Текущее время: ${formatTime()}`

  const daysLeft = getDaysUntilNewYear()
  newYearInfo.textContent = `До нового года осталось ${daysLeft} ${declension(daysLeft)}`
}

function declension(number) {
  const lastDigit = number % 10
  const lastTwoDigits = number % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'дней'
  }

  if (lastDigit === 1) {
    return 'день'
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return 'дня'
  } else {
    return 'дней'
  }
}

updateClock()

setInterval(updateClock, 1000)