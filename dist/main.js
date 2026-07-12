/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc.js */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms.js */ \"./src/modules/forms.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs.js */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_sendForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm.js */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 may 2026')\n;(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(100)\n;(0,_modules_forms_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n  formId: 'form1',\n  someElem: [\n    {\n      type: 'block',\n      id: 'total'\n    }\n  ]\n})\n;(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n  formId: 'form2',\n  someElem: [\n    {\n      type: 'block',\n      id: 'total'\n    }\n  ]\n})\n;(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n  formId: 'form3',\n  someElem: [\n    {\n      type: 'block',\n      id: 'total'\n    }\n  ]\n})\n\n//# sourceURL=webpack://3dglo/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/calc.js"
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\n  const calcBlock = document.querySelector('.calc-block')\n  const calcType = document.querySelector('.calc-type')\n  const squareInput = document.querySelector('.calc-square');\n  const countInput = document.querySelector('.calc-count');\n  const daysInput = document.querySelector('.calc-day');\n  const total = document.getElementById('total')\n\n  const onlyNumbers = function (input) {\n    input.value = input.value.replace(/\\D/g, '')\n  }\n\n  const countCalc = () => {\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value\n    const calcSquareValue = squareInput.value\n\n    let totalValue = 0\n    let countInputValue = 1\n    let daysInputValue = 1\n\n    if (countInput.value > 1) {\n      countInputValue += +countInput.value / 10\n    }\n\n    if (daysInput.value && daysInput.value < 5) {\n      daysInputValue = 2\n    } else if (daysInput.value && daysInput.value < 10) {\n      daysInputValue = 1.5\n    }\n\n    if (calcType.value && squareInput.value) {\n      totalValue = price * calcTypeValue * calcSquareValue * countInputValue * daysInputValue\n    } else {\n      totalValue = 0\n    }\n    total.textContent = totalValue\n  }\n\n  squareInput.addEventListener('input', function () {\n    onlyNumbers(this)\n  })\n\n  countInput.addEventListener('input', function () {\n    onlyNumbers(this);\n  });\n\n  daysInput.addEventListener('input', function () {\n    onlyNumbers(this);\n  });\n\n  calcBlock.addEventListener('input', (e) => {\n    if (e.target === calcType || e.target === squareInput ||\n      e.target === countInput || e.target === daysInput) {\n      countCalc()\n    }\n\n  })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calc.js?\n}");

/***/ },

/***/ "./src/modules/forms.js"
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forms = () => {\n  const onlyRusText = /[^а-яА-ЯёЁ\\s-]/g;\n  document.querySelectorAll('.form-name').forEach((input) => {\n\n    input.addEventListener('input', () => {\n      input.value = input.value.replace(onlyRusText, '');\n    });\n  });\n\n  const form2Name = document.getElementById('form2-name')\n\n  form2Name.addEventListener('input', () => {\n    form2Name.value = form2Name.value.replace(onlyRusText, '')\n  })\n\n  const message = document.getElementById('form2-message');\n  if (message) {\n    message.addEventListener('input', () => {\n      message.value = message.value.replace(onlyRusText, '');\n    });\n  }\n\n  document.querySelectorAll('input[type=\"email\"]').forEach((input) => {\n    input.addEventListener('input', () => {\n      input.value = input.value.replace(/[^A-Za-z0-9@\\-_\\.!~*']/g, '');\n    });\n  });\n\n  document.querySelectorAll('input[type=\"tel\"]').forEach((input) => {\n    input.addEventListener('input', () => {\n      input.value = input.value.replace(/[^0-9()\\-]/g, '');\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack://3dglo/./src/modules/forms.js?\n}");

/***/ },

/***/ "./src/modules/helpers.js"
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\n\n  let start = performance.now();\n\n  requestAnimationFrame(function animate(time) {\n    let timeFraction = (time - start) / duration;\n    if (timeFraction > 1) timeFraction = 1;\n\n    let progress = timing(timeFraction);\n    draw(progress);\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animate);\n    }\n  });\n}\n\n\n\n\n\n//# sourceURL=webpack://3dglo/./src/modules/helpers.js?\n}");

/***/ },

/***/ "./src/modules/menu.js"
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const menuBtn = document.querySelector('.menu')\n  const menu = document.querySelector('menu')\n  const closeBtn = menu.querySelector('.close-btn')\n  const menuItems = menu.querySelectorAll('ul>li>a')\n  const handleMenu = () => {\n    menu.classList.toggle('active-menu')\n  }\n\n  menuBtn.addEventListener('click', handleMenu)\n\n  menu.addEventListener('click', (e) => {\n    const target = e.target\n\n    if (target.classList.contains('close-btn')) {\n      menu.classList.remove('active-menu')\n      return\n    }\n\n    if (target.tagName === 'A' && target.closest('ul')) {\n      menu.classList.remove('active-menu')\n    }\n  })\n\n  return {\n    toggle: handleMenu\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3dglo/./src/modules/menu.js?\n}");

/***/ },

/***/ "./src/modules/modal.js"
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/modules/helpers.js\");\n\n\nconst modal = () => {\n  const modal = document.querySelector('.popup')\n  const buttons = document.querySelectorAll('.popup-btn')\n\n  function isMobile() {\n    return window.innerWidth < 768;\n  }\n\n  function toggleScroll(disable) {\n    if (disable) {\n      document.body.style.overflow = 'hidden';\n    } else {\n      document.body.style.overflow = '';\n    }\n  }\n\n  function openModal() {\n    modal.style.display = 'block';\n    toggleScroll(true);\n\n    if (isMobile()) {\n      modal.style.opacity = '1';\n      modal.style.transform = 'scale(1) translateY(0)';\n      return;\n    }\n\n    modal.style.opacity = '0';\n    modal.style.transform = 'scale(0.7) translateY(40px)';\n\n    function easing(t) {\n      const c1 = 1.70158;\n      const c3 = c1 + 1;\n      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);\n    }\n\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.animate)({\n      duration: 400,\n      timing: easing,\n      draw: function (progress) {\n        modal.style.opacity = Math.min(progress * 1.2, 1);\n        const scale = 0.7 + (1 - 0.7) * progress;\n        const translateY = 40 * (1 - progress);\n        modal.style.transform = `scale(${scale}) translateY(${translateY}px)`;\n\n        if (progress === 1) {\n          modal.style.opacity = '1';\n          modal.style.transform = 'scale(1) translateY(0)';\n        }\n      }\n    });\n  }\n  function closeModal() {\n    if (isMobile()) {\n      modal.style.display = 'none';\n      modal.style.opacity = '0';\n      modal.style.transform = 'scale(0.7) translateY(40px)';\n      toggleScroll(false);\n      return;\n    }\n\n    function easing(t) {\n      return t * t * t;\n    }\n\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.animate)({\n      duration: 300,\n      timing: easing,\n      draw: function (progress) {\n        modal.style.opacity = 1 - progress;\n        const scale = 1 - (1 - 0.8) * progress;\n        const translateY = 30 * progress;\n\n        modal.style.transform = `scale(${scale}) translateY(${translateY}px)`;\n\n        if (progress === 1) {\n          modal.style.display = 'none';\n          modal.style.opacity = '0';\n          modal.style.transform = 'scale(0.7) translateY(40px)';\n          toggleScroll(false);\n        }\n      }\n    });\n  }\n\n  buttons.forEach(btn => {\n    btn.addEventListener('click', openModal)\n  })\n\n  modal.addEventListener('click', (e) => {\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n      closeModal()\n    }\n  })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?\n}");

/***/ },

/***/ "./src/modules/sendForm.js"
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\n  const form = document.getElementById(formId)\n  const statusBlock = document.createElement('div')\n  const loadText = 'Загрузка...'\n  const errorText = 'Ошибка!!!'\n  const successText = 'Спасибо! Наш менеджер с Вами свяжется.'\n\n  const validate = (form) => {\n    const phone = form.querySelector('[name=\"user_phone\"]')\n    const name = form.querySelector('[name=\"user_name\"]')\n    const message = form.querySelector('[name=\"user_message\"]')\n\n    const phoneReg = /^[+()\\d-]+$/\n    const nameReg = /^[А-Яа-яЁё\\s]+$/\n    const messageReg = /^[А-Яа-яЁё0-9\\s.,!?:;\"'«»()\\-\\n]+$/\n\n    let success = true\n\n    if (phone && phone.value && !phoneReg.test(phone.value)) success = false\n    if (name && name.value && !nameReg.test(name.value)) success = false\n    if (message && message.value && !messageReg.test(message.value)) success = false\n\n    return success\n  }\n\n  const sendData = (data) => {\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\n      method: 'POST',\n      body: JSON.stringify(data),\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(res => res.json())\n  }\n\n  const submitForm = () => {\n    const formElements = form.querySelectorAll('input, textarea')\n    const formData = new FormData(form)\n    const formBody = {}\n\n    statusBlock.textContent = loadText\n    form.append(statusBlock)\n\n    formData.forEach((val, key) => {\n      formBody[key] = val\n    })\n\n    someElem.forEach(elem => {\n      const element = document.getElementById(elem.id)\n      if (elem.type === 'block') {\n        formBody[elem.id] = element.textContent\n      } else if (elem.type === 'input') {\n        formBody[elem.id] = element.value\n      }\n    })\n\n    if (validate(form)) {\n      sendData(formBody)\n        .then(data => {\n          statusBlock.textContent = successText\n          formElements.forEach(input => {\n            input.value = ''\n          })\n        })\n        .catch(error => {\n          statusBlock.textContent = errorText\n        })\n    } else {\n      alert('Данные не валидны!')\n    }\n  }\n\n  try {\n    if (!form) {\n      throw new Error('Верните форму на место!')\n    }\n\n    form.addEventListener('submit', (event) => {\n      event.preventDefault()\n\n      submitForm()\n    })\n  } catch (error) {\n    console.log(error.message);\n\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?\n}");

/***/ },

/***/ "./src/modules/slider.js"
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n  const sliderBlock = document.querySelector('.portfolio-content')\n  const slides = document.querySelectorAll('.portfolio-item')\n\n\n  const timeInterval = 2000\n\n  let currentSlide = 0\n  let interval\n\n  const dotsList = document.createElement('ul')\n  dotsList.className = 'portfolio-dots'\n\n  slides.forEach((slide, index) => {\n    const dot = document.createElement('li')\n    dot.className = 'dot'\n    if (index === 0) dot.classList.add('dot-active')\n    dotsList.appendChild(dot)\n\n  })\n\n  sliderBlock.appendChild(dotsList)\n\n  const dots = document.querySelectorAll('.dot')\n\n  const prevSlide = (elems, index, strClass) => {\n    elems[index].classList.remove(strClass)\n  }\n\n  const nextSlide = (elems, index, strClass) => {\n    elems[index].classList.add(strClass)\n  }\n\n  const autoSlide = () => {\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\n    prevSlide(dots, currentSlide, 'dot-active')\n    currentSlide++\n    if (currentSlide >= slides.length) {\n      currentSlide = 0\n    }\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\n    nextSlide(dots, currentSlide, 'dot-active')\n  }\n\n  const startSlide = (timer = 1500) => {\n    interval = setInterval(autoSlide, timer)\n  }\n\n  const stopSlide = () => {\n    clearInterval(interval)\n  }\n\n  sliderBlock.addEventListener('click', (e) => {\n    e.preventDefault()\n\n    if (!e.target.matches('.dot, .portfolio-btn')) {\n      return\n    }\n\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\n    prevSlide(dots, currentSlide, 'dot-active')\n\n    if (e.target.matches('#arrow-right')) {\n      currentSlide++\n    } else if (e.target.matches('#arrow-left')) {\n      currentSlide--\n    } else if (e.target.classList.contains('dot')) {\n      dots.forEach((dot, index) => {\n        if (e.target === dot) {\n          currentSlide = index\n        }\n      })\n    }\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slides.length - 1\n    }\n\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\n    nextSlide(dots, currentSlide, 'dot-active')\n\n  })\n\n  sliderBlock.addEventListener('mouseenter', (e) => {\n    if (e.target.matches('.dot, .portfolio-btn')) {\n      stopSlide()\n    }\n  }, true)\n\n  sliderBlock.addEventListener('mouseleave', (e) => {\n    if (e.target.matches('.dot, .portfolio-btn')) {\n      startSlide(timeInterval)\n    }\n  }, true)\n\n  startSlide(timeInterval)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?\n}");

/***/ },

/***/ "./src/modules/tabs.js"
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n  const tabPanel = document.querySelector('.service-header')\n  const tabs = document.querySelectorAll('.service-header-tab')\n  const tabContent = document.querySelectorAll('.service-tab')\n\n  tabPanel.addEventListener('click', (e) => {\n\n    if (e.target.closest('.service-header-tab')) {\n      const tabBtn = e.target.closest('.service-header-tab')\n\n      tabs.forEach((tab, index) => {\n        if (tab === tabBtn) {\n          tab.classList.add('active')\n          tabContent[index].classList.remove('d-none')\n        } else {\n          tab.classList.remove('active')\n          tabContent[index].classList.add('d-none')\n        }\n      })\n    }\n\n  })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?\n}");

/***/ },

/***/ "./src/modules/timer.js"
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = function (deadline) {\n  const timerHours = document.getElementById('timer-hours')\n  const timerMinutes = document.getElementById('timer-minutes')\n  const timerSeconds = document.getElementById('timer-seconds')\n\n  let intervalId\n\n  const numZero = (num) => {\n    return String(num).padStart(2, '0')\n  }\n\n  const getTimeRemaining = () => {\n\n    let dateStop = new Date(deadline).getTime()\n    let dateNow = new Date().getTime()\n    let timeRemaining = (dateStop - dateNow) / 1000\n    if (timeRemaining <= 0) {\n      return { timeRemaining: 0, hours: 0, minutes: 0, seconds: 0 }\n    }\n\n    let hours = Math.floor(timeRemaining / 60 / 60)\n    let minutes = Math.floor((timeRemaining / 60) % 60)\n    let seconds = Math.floor(timeRemaining % 60)\n\n    return { timeRemaining, hours, minutes, seconds }\n  }\n\n  const updateClock = () => {\n    let getTime = getTimeRemaining()\n\n    timerHours.textContent = numZero(getTime.hours)\n    timerMinutes.textContent = numZero(getTime.minutes)\n    timerSeconds.textContent = numZero(getTime.seconds)\n\n    if (getTime.timeRemaining === 0) {\n      clearInterval(intervalId)\n      // timerHours.textContent = '00'\n      // timerMinutes.textContent = '00'\n      // timerSeconds.textContent = '00'\n    }\n    console.log('Проверка');\n  }\n  updateClock()\n  intervalId = setInterval(updateClock, 1000)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://3dglo/./src/modules/timer.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;