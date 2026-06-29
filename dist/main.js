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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_calculate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculate.js */ \"./src/modules/calculate.js\");\n\n\n\n\n\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 may 2026')\n;(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_calculate_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n//# sourceURL=webpack://3dglo/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/calculate.js"
/*!**********************************!*\
  !*** ./src/modules/calculate.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n  const squareInput = document.querySelector('.calc-square');\r\n  const countInput = document.querySelector('.calc-count');\r\n  const daysInput = document.querySelector('.calc-day');\r\n\r\n  const onlyNumbers = function (input) {\r\n    input.value = input.value.replace(/\\D/g, '')\r\n  }\r\n\r\n  squareInput.addEventListener('input', function () {\r\n    onlyNumbers(this)\r\n  })\r\n\r\n  countInput.addEventListener('input', function () {\r\n    onlyNumbers(this);\r\n  });\r\n\r\n  daysInput.addEventListener('input', function () {\r\n    onlyNumbers(this);\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calculate.js?\n}");

/***/ },

/***/ "./src/modules/menu.js"
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const menuBtn = document.querySelector('.menu')\n  const menu = document.querySelector('menu')\n  const closeBtn = menu.querySelector('.close-btn')\n  const menuItems = menu.querySelectorAll('ul>li>a')\n  const handleMenu = () => {\n    menu.classList.toggle('active-menu')\n  }\n\n  menuBtn.addEventListener('click', handleMenu)\n  closeBtn.addEventListener('click', handleMenu)\n\n  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3dglo/./src/modules/menu.js?\n}");

/***/ },

/***/ "./src/modules/modal.js"
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n  const modal = document.querySelector('.popup')\n  const buttons = document.querySelectorAll('.popup-btn')\n  const closeBtn = modal.querySelector('.popup-close')\n\n  function isMobile() {\n    return window.innerWidth < 768;\n  }\n\n  function toggleScroll(disable) {\n    if (disable) {\n      document.body.style.overflow = 'hidden';\n    } else {\n      document.body.style.overflow = '';\n    }\n  }\n\n  function openModal() {\n    modal.style.display = 'block';\n    toggleScroll(true);\n\n    if (isMobile()) {\n      modal.style.opacity = '1';\n      modal.style.transform = 'scale(1) translateY(0)';\n      return;\n    }\n\n    modal.style.opacity = '0';\n    modal.style.transform = 'scale(0.7) translateY(40px)';\n\n    requestAnimationFrame(() => {\n      let start = null;\n      const duration = 400;\n\n      function animate(time) {\n        if (!start) start = time;\n        const progress = Math.min((time - start) / duration, 1);\n\n        const c1 = 1.70158;\n        const c3 = c1 + 1;\n        const eased = 1 + c3 * Math.pow(progress - 1, 3) + c1 * Math.pow(progress - 1, 2);\n\n        modal.style.opacity = Math.min(progress * 1.2, 1);\n\n        const scale = 0.7 + (1 - 0.7) * eased;\n        const translateY = 40 * (1 - eased);\n        modal.style.transform = `scale(${scale}) translateY(${translateY}px)`;\n\n        if (progress < 1) {\n          requestAnimationFrame(animate);\n        } else {\n          modal.style.opacity = '1';\n          modal.style.transform = 'scale(1) translateY(0)';\n        }\n      }\n      requestAnimationFrame(animate);\n    });\n  }\n\n  function closeModal() {\n\n    if (isMobile()) {\n      modal.style.display = 'none';\n      modal.style.opacity = '0';\n      modal.style.transform = 'scale(0.7) translateY(40px)';\n      toggleScroll(false);\n      return;\n    }\n\n    let start = null;\n    const duration = 300;\n\n    function animate(time) {\n      if (!start) start = time;\n      const progress = Math.min((time - start) / duration, 1);\n\n      const eased = progress * progress * progress;\n\n      modal.style.opacity = 1 - eased;\n      const scale = 1 - (1 - 0.8) * eased;\n      const translateY = 30 * eased;\n      modal.style.transform = `scale(${scale}) translateY(${translateY}px)`;\n\n      if (progress < 1) {\n        requestAnimationFrame(animate);\n      } else {\n        modal.style.display = 'none';\n        modal.style.opacity = '0';\n        modal.style.transform = 'scale(0.7) translateY(40px)';\n        toggleScroll(false);\n      }\n    }\n    requestAnimationFrame(animate);\n  }\n\n  buttons.forEach(btn => {\n    btn.addEventListener('click', openModal)\n  })\n\n  closeBtn.addEventListener('click', closeModal)\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?\n}");

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