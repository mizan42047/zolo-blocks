/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/countdown/counter.js":
/*!*****************************************!*\
  !*** ./src/blocks/countdown/counter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const CountdownTimer = ({
  targetDate = new Date(),
  showLabels = true,
  labels = {
    years: 'Years',
    months: 'Months',
    weeks: 'Weeks',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds'
  },
  itemsVisibility = {
    years: false,
    months: false,
    weeks: false,
    days: true,
    hours: true,
    minutes: true,
    seconds: true
  },
  onEnd = null
}) => {
  // Helper function to pad the string with zeros
  const padString = value => value.toString().padStart(2, '0');
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    if (difference > 0) {
      timeLeft = {
        years: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
        months: Math.floor(difference % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30)),
        weeks: Math.floor(difference % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24 * 7)),
        days: Math.floor(difference % (1000 * 60 * 60 * 24 * 7) / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minutes: Math.floor(difference % (1000 * 60 * 60) / (1000 * 60)),
        seconds: Math.floor(difference % (1000 * 60) / 1000)
      };

      // Convert higher times to lower times if the corresponding show prop is false
      if (!itemsVisibility?.years && timeLeft.years) {
        timeLeft.months += timeLeft.years * 12;
        timeLeft.years = 0;
      }
      if (!itemsVisibility?.months && timeLeft.months) {
        timeLeft.weeks += timeLeft.months * 4; // 4 weeks in a month
        timeLeft.months = 0;
      }
      if (!itemsVisibility?.weeks && timeLeft.weeks) {
        timeLeft.days += timeLeft.weeks * 7;
        timeLeft.weeks = 0;
      }
      if (!itemsVisibility?.days && timeLeft.days) {
        timeLeft.hours += timeLeft.days * 24;
        timeLeft.days = 0;
      }
      if (!itemsVisibility?.hours && timeLeft.hours) {
        timeLeft.minutes += timeLeft.hours * 60;
        timeLeft.hours = 0;
      }
      if (!itemsVisibility?.minutes && timeLeft.minutes) {
        timeLeft.seconds += timeLeft.minutes * 60;
        timeLeft.minutes = 0;
      }
    } else {}

    // Format the time values using padString
    timeLeft.years = padString(timeLeft.years);
    timeLeft.months = padString(timeLeft.months);
    timeLeft.weeks = padString(timeLeft.weeks);
    timeLeft.days = padString(timeLeft.days);
    timeLeft.hours = padString(timeLeft.hours);
    timeLeft.minutes = padString(timeLeft.minutes);
    timeLeft.seconds = padString(timeLeft.seconds);
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(calculateTimeLeft());
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  const renderLabel = (label, value) => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "zolo-countdown-item",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "zolo-countdown-face",
        children: value
      }), showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "zolo-countdown-label",
        children: label
      })]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [itemsVisibility?.years && renderLabel(labels?.years, timeLeft.years), itemsVisibility?.months && renderLabel(labels?.months, timeLeft.months), itemsVisibility?.weeks && renderLabel(labels?.weeks, timeLeft.weeks), itemsVisibility?.days && renderLabel(labels?.days, timeLeft.days), itemsVisibility?.hours && renderLabel(labels?.hours, timeLeft.hours), itemsVisibility?.minutes && renderLabel(labels?.minutes, timeLeft.minutes), itemsVisibility?.seconds && renderLabel(labels?.seconds, timeLeft.seconds)]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountdownTimer);

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/blocks/countdown/frontend.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ "./src/blocks/countdown/counter.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



document.addEventListener('DOMContentLoaded', () => {
  const zoloCounters = document.querySelectorAll('.wp-block-zolo-countdown');
  if (zoloCounters.length > 0) {
    zoloCounters.forEach(counter => {
      const zoloCounter = counter.querySelector('.zolo-countdown-wrap');
      let CountDate = zoloCounter.dataset.countdate;
      const itemsVisibility = JSON.parse(zoloCounter.dataset.itemsvisibility);
      const itemsLabels = JSON.parse(zoloCounter.dataset.itemslabels);
      const toggleLabels = zoloCounter.dataset.togglelabels;
      const targetDate = new Date(CountDate);
      const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(zoloCounter);
      root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_counter__WEBPACK_IMPORTED_MODULE_0__["default"], {
        targetDate: targetDate,
        itemsVisibility: itemsVisibility,
        showLabels: toggleLabels,
        labels: itemsLabels
      }));
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map