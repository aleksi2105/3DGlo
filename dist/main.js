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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_calculate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculate.js */ \"./src/modules/calculate.js\");\n/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms.js */ \"./src/modules/forms.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs.js */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/modules/slider.js\");\n\n\n\n\n\n\n\n\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 may 2026')\n;(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_calculate_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_forms_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n\n//# sourceURL=webpack://3dglo/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/calculate.js"
/*!**********************************!*\
  !*** ./src/modules/calculate.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\n  const squareInput = document.querySelector('.calc-square');\n  const countInput = document.querySelector('.calc-count');\n  const daysInput = document.querySelector('.calc-day');\n\n  const onlyNumbers = function (input) {\n    input.value = input.value.replace(/\\D/g, '')\n  }\n\n  squareInput.addEventListener('input', function () {\n    onlyNumbers(this)\n  })\n\n  countInput.addEventListener('input', function () {\n    onlyNumbers(this);\n  });\n\n  daysInput.addEventListener('input', function () {\n    onlyNumbers(this);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calculate.js?\n}");

/***/ },

/***/ "./src/modules/forms.js"
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forms = () => {\n  const onlyRusText = /[^а-яА-ЯёЁ\\s-]/g;\n  document.querySelectorAll('input[type=\"text\"]').forEach((input) => {\n\n    input.addEventListener('input', () => {\n      input.value = input.value.replace(onlyRusText, '');\n    });\n  });\n\n  const message = document.getElementById('form2-message');\n  if (message) {\n    message.addEventListener('input', () => {\n      message.value = message.value.replace(onlyRusText, '');\n    });\n  }\n\n  document.querySelectorAll('input[type=\"email\"]').forEach((input) => {\n    input.addEventListener('input', () => {\n      input.value = input.value.replace(/[^A-Za-z0-9@\\-_\\.!~*']/g, '');\n    });\n  });\n\n  document.querySelectorAll('input[type=\"tel\"]').forEach((input) => {\n    input.addEventListener('input', () => {\n      input.value = input.value.replace(/[^0-9()\\-]/g, '');\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack://3dglo/./src/modules/forms.js?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n  const modal = document.querySelector('.popup')\n  const buttons = document.querySelectorAll('.popup-btn')\n\n  function isMobile() {\n    return window.innerWidth < 768;\n  }\n\n  function toggleScroll(disable) {\n    if (disable) {\n      document.body.style.overflow = 'hidden';\n    } else {\n      document.body.style.overflow = '';\n    }\n  }\n\n  function openModal() {\n    modal.style.display = 'block';\n    toggleScroll(true);\n\n    if (isMobile()) {\n      modal.style.opacity = '1';\n      modal.style.transform = 'scale(1) translateY(0)';\n      return;\n    }\n\n    modal.style.opacity = '0';\n    modal.style.transform = 'scale(0.7) translateY(40px)';\n\n    requestAnimationFrame(() => {\n      let start = null;\n      const duration = 400;\n\n      function animate(time) {\n        if (!start) start = time;\n        const progress = Math.min((time - start) / duration, 1);\n\n        const c1 = 1.70158;\n        const c3 = c1 + 1;\n        const eased = 1 + c3 * Math.pow(progress - 1, 3) + c1 * Math.pow(progress - 1, 2);\n\n        modal.style.opacity = Math.min(progress * 1.2, 1);\n\n        const scale = 0.7 + (1 - 0.7) * eased;\n        const translateY = 40 * (1 - eased);\n        modal.style.transform = `scale(${scale}) translateY(${translateY}px)`;\n\n        if (progress < 1) {\n          requestAnimationFrame(animate);\n        } else {\n          modal.style.opacity = '1';\n          modal.style.transform = 'scale(1) translateY(0)';\n        }\n      }\n      requestAnimationFrame(animate);\n    });\n  }\n\n  function closeModal() {\n\n    if (isMobile()) {\n      modal.style.display = 'none';\n      modal.style.opacity = '0';\n      modal.style.transform = 'scale(0.7) translateY(40px)';\n      toggleScroll(false);\n      return;\n    }\n\n    let start = null;\n    const duration = 300;\n\n    function animate(time) {\n      if (!start) start = time;\n      const progress = Math.min((time - start) / duration, 1);\n\n      const eased = progress * progress * progress;\n\n      modal.style.opacity = 1 - eased;\n      const scale = 1 - (1 - 0.8) * eased;\n      const translateY = 30 * eased;\n      modal.style.transform = `scale(${scale}) translateY(${translateY}px)`;\n\n      if (progress < 1) {\n        requestAnimationFrame(animate);\n      } else {\n        modal.style.display = 'none';\n        modal.style.opacity = '0';\n        modal.style.transform = 'scale(0.7) translateY(40px)';\n        toggleScroll(false);\n      }\n    }\n    requestAnimationFrame(animate);\n  }\n\n  buttons.forEach(btn => {\n    btn.addEventListener('click', openModal)\n  })\n\n  modal.addEventListener('click', (e) => {\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n      closeModal()\n    }\n  })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?\n}");

/***/ },

/***/ "./src/modules/slider.js"
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const sliderBlock = document.querySelector('.portfolio-content')\r\n  const slides = document.querySelectorAll('.portfolio-item')\r\n  const dots = document.querySelectorAll('.dot')\r\n\r\n  const timeInterval = 2000\r\n\r\n  let currentSlide = 0\r\n  let interval\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass)\r\n  }\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass)\r\n  }\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n    prevSlide(dots, currentSlide, 'dot-active')\r\n    currentSlide++\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0\r\n    }\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n    nextSlide(dots, currentSlide, 'dot-active')\r\n  }\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer)\r\n  }\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval)\r\n  }\r\n\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n\r\n    if (!e.target.matches('.dot, .portfolio-btn')) {\r\n      return\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n    prevSlide(dots, currentSlide, 'dot-active')\r\n\r\n    if (e.target.matches('#arrow-right')) {\r\n      currentSlide++\r\n    } else if (e.target.matches('#arrow-left')) {\r\n      currentSlide--\r\n    } else if (e.target.classList.contains('dot')) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index\r\n        }\r\n      })\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n    nextSlide(dots, currentSlide, 'dot-active')\r\n\r\n  })\r\n\r\n  sliderBlock.addEventListener('mouseenter', (e) => {\r\n    if (e.target.matches('.dot, .portfolio-btn')) {\r\n      stopSlide()\r\n    }\r\n  }, true)\r\n\r\n  sliderBlock.addEventListener('mouseleave', (e) => {\r\n    if (e.target.matches('.dot, .portfolio-btn')) {\r\n      startSlide(timeInterval)\r\n    }\r\n  }, true)\r\n\r\n  startSlide(timeInterval)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?\n}");

/***/ },

/***/ "./src/modules/tabs.js"
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector('.service-header')\r\n  const tabs = document.querySelectorAll('.service-header-tab')\r\n  const tabContent = document.querySelectorAll('.service-tab')\r\n\r\n  tabPanel.addEventListener('click', (e) => {\r\n\r\n    if (e.target.closest('.service-header-tab')) {\r\n      const tabBtn = e.target.closest('.service-header-tab')\r\n\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add('active')\r\n          tabContent[index].classList.remove('d-none')\r\n        } else {\r\n          tab.classList.remove('active')\r\n          tabContent[index].classList.add('d-none')\r\n        }\r\n      })\r\n    }\r\n\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?\n}");

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