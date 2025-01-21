/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/*!*************************************************************!*\
  !*** ./src/extensions/AI/popup/components/content/index.js ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const Content = () => {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  const {
    reset,
    setPrompt,
    setContext,
    setScreen,
    requestAI
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)('zoloai/popup');
  const {
    loading,
    response,
    content,
    screen,
    prompt
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      isOpen: checkIsOpen,
      isLoading,
      getPrompt,
      getResponse,
      getContent,
      getContext,
      getScreen
    } = select('zoloai/popup');
    return {
      isOpen: checkIsOpen(),
      prompt: getPrompt(),
      response: getResponse(),
      loading: isLoading(),
      content: getContent() ? getContent() : '',
      context: getContext(),
      screen: getScreen()
    };
  });
  function openModal(prompt) {
    setPrompt(prompt);
    setContext('selected-blocks');
    requestAI();
  }
  function onKeyDown(e) {
    if (e.key === 'Enter') {
      requestAI();
    }
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (response?.content) {
      setPrompt(response.content);
    }
    if (screen === 'request') {
      setPrompt(content);
    }
  }, [response, content, screen, prompt]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "zolo-popup-content",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "zolo-popup-response",
      children: screen === 'request' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "zolo-popup-response-button",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            variant: "primary",
            onClick: () => {
              openModal((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Simplify the language`, 'zoloblocks'));
            },
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Simplify Language', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.88463 2.40485C3.07376 2.40485 2.40485 3.07376 2.40485 3.88463V21.5109C2.40485 21.5437 2.41319 21.5579 2.4182 21.5651C2.42542 21.5754 2.43869 21.5874 2.45862 21.5956C2.47863 21.6039 2.49701 21.6048 2.50988 21.6026C2.51904 21.601 2.53371 21.5968 2.5544 21.5761L6.2913 17.8392C6.81489 17.3156 7.52679 17.0153 8.27714 17.0153H20.0966C20.9169 17.0153 21.5951 16.337 21.5951 15.5168V3.88463C21.5951 3.0718 20.9336 2.40485 20.1154 2.40485H3.88463ZM1 3.88463C1 2.29788 2.29788 1 3.88463 1H20.1154C21.7134 1 23 2.29985 23 3.88463V15.5168C23 17.1129 21.6927 18.4202 20.0966 18.4202H8.27714C7.90361 18.4202 7.54782 18.5694 7.28469 18.8326L3.54778 22.5695C2.61103 23.5062 1 22.8515 1 21.5109V3.88463Z",
                fill: "#4D4D4D"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            className: "longer",
            variant: "primary",
            onClick: () => {
              openModal((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Make it longer`, 'zoloblocks'));
            },
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Make it longer', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.26925 8.20565C5.54344 8.47985 5.54344 8.92441 5.26925 9.19861L3.39719 11.0707H10.0621C10.4498 11.0707 10.7642 11.385 10.7642 11.7728C10.7642 12.1606 10.4498 12.4749 10.0621 12.4749H3.40091L5.26849 14.3368C5.5431 14.6106 5.54378 15.0551 5.27 15.3298C4.99622 15.6044 4.55166 15.6051 4.27705 15.3313L1.20641 12.27C1.0744 12.1384 1.00014 11.9597 1 11.7733C0.999859 11.5869 1.07384 11.4081 1.20565 11.2763L4.27629 8.20565C4.55049 7.93145 4.99505 7.93145 5.26925 8.20565ZM19.7237 8.20565C19.4495 7.93145 19.0049 7.93145 18.7307 8.20565C18.4565 8.47985 18.4565 8.92441 18.7307 9.19861L20.6028 11.0707H13.9379C13.5502 11.0707 13.2358 11.385 13.2358 11.7728C13.2358 12.1606 13.5502 12.4749 13.9379 12.4749H20.5991L18.7315 14.3368C18.4569 14.6106 18.4562 15.0551 18.73 15.3298C19.0037 15.6044 19.4483 15.6051 19.7229 15.3313L22.7936 12.27C22.9256 12.1384 22.9998 11.9597 23 11.7733C23.0001 11.5869 22.9261 11.4081 22.7943 11.2763L19.7237 8.20565Z",
                fill: "#4D4D4D"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            className: "shorter",
            variant: "primary",
            onClick: () => {
              openModal((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Make it shorter`, 'zoloblocks'));
            },
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Make it shorter', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.50505 8.20489C6.77966 7.93111 7.22423 7.93179 7.49801 8.20641L10.5593 11.277C10.8328 11.5514 10.8324 11.9953 10.5585 12.2692L7.49725 15.3305C7.22305 15.6047 6.77849 15.6047 6.50429 15.3305C6.23009 15.0563 6.23009 14.6118 6.50429 14.3376L8.36693 12.4749H1.70213C1.31435 12.4749 1 12.1606 1 11.7728C1 11.385 1.31435 11.0707 1.70213 11.0707H8.37064L6.50353 9.19785C6.22975 8.92323 6.23043 8.47867 6.50505 8.20489ZM17.4965 9.19785C17.7702 8.92323 17.7696 8.47867 17.4949 8.20489C17.2203 7.93111 16.7758 7.93179 16.502 8.20641L13.4407 11.277C13.1672 11.5514 13.1676 11.9953 13.4415 12.2692L16.5027 15.3305C16.7769 15.6047 17.2215 15.6047 17.4957 15.3305C17.7699 15.0563 17.7699 14.6118 17.4957 14.3376L15.633 12.4749H22.2979C22.6856 12.4749 23 12.1606 23 11.7728C23 11.385 22.6856 11.0707 22.2979 11.0707H15.6293L17.4965 9.19785Z"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            variant: "primary",
            onClick: () => {
              openModal((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Fix spelling and grammar`, 'zoloblocks'));
            },
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fix spelling & grammar', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.1148 1C19.5026 1 19.817 1.31435 19.817 1.70213C19.817 3.07435 20.9256 4.18298 22.2978 4.18298C22.6856 4.18298 23 4.49733 23 4.88511V4.90383C23 5.2916 22.6856 5.60596 22.2978 5.60596C20.9256 5.60596 19.817 6.71458 19.817 8.08681C19.817 8.47458 19.5026 8.78894 19.1148 8.78894C18.7271 8.78894 18.4127 8.47458 18.4127 8.08681C18.4127 6.71458 17.3041 5.60596 15.9319 5.60596C15.5441 5.60596 15.2297 5.2916 15.2297 4.90383V4.88511C15.2297 4.49733 15.5441 4.18298 15.9319 4.18298C17.3041 4.18298 18.4127 3.07435 18.4127 1.70213C18.4127 1.31435 18.7271 1 19.1148 1ZM19.1148 3.93215C18.8519 4.30697 18.5245 4.6331 18.1485 4.89447C18.5245 5.15584 18.8519 5.48197 19.1148 5.85679C19.3778 5.48197 19.7052 5.15584 20.0812 4.89447C19.7052 4.6331 19.3778 4.30697 19.1148 3.93215ZM8.62043 4.18289C9.0082 4.18289 9.32255 4.49724 9.32255 4.88502C9.32255 8.31682 12.1069 11.1012 15.5387 11.1012C15.9265 11.1012 16.2408 11.4155 16.2408 11.8033V11.8501C16.2408 12.2379 15.9265 12.5522 15.5387 12.5522C12.1069 12.5522 9.32255 15.3366 9.32255 18.7684C9.32255 19.1562 9.0082 19.4705 8.62043 19.4705C8.23265 19.4705 7.9183 19.1562 7.9183 18.7684C7.9183 15.3366 5.13393 12.5522 1.70213 12.5522C1.31435 12.5522 1 12.2379 1 11.8501V11.8033C1 11.4155 1.31435 11.1012 1.70213 11.1012C5.13393 11.1012 7.9183 8.31681 7.9183 4.88502C7.9183 4.49724 8.23265 4.18289 8.62043 4.18289ZM8.62043 8.08337C7.85379 9.73816 6.51082 11.0719 4.84947 11.8267C6.51082 12.5815 7.85379 13.9153 8.62043 15.5701C9.38706 13.9153 10.73 12.5815 12.3914 11.8267C10.73 11.0719 9.38706 9.73816 8.62043 8.08337ZM19.817 16.2502C19.817 15.8625 19.5026 15.5481 19.1148 15.5481C18.7271 15.5481 18.4127 15.8625 18.4127 16.2502C18.4127 17.6225 17.3041 18.7311 15.9319 18.7311C15.5441 18.7311 15.2297 19.0455 15.2297 19.4332V19.452C15.2297 19.8397 15.5441 20.1541 15.9319 20.1541C17.3041 20.1541 18.4127 21.2627 18.4127 22.6349C18.4127 23.0227 18.7271 23.3371 19.1148 23.3371C19.5026 23.3371 19.817 23.0227 19.817 22.6349C19.817 21.2627 20.9256 20.1541 22.2978 20.1541C22.6856 20.1541 23 19.8397 23 19.452V19.4332C23 19.0455 22.6856 18.7311 22.2978 18.7311C20.9256 18.7311 19.817 17.6225 19.817 16.2502ZM18.1485 19.4426C18.5245 19.1812 18.8519 18.8551 19.1148 18.4803C19.3778 18.8551 19.7052 19.1812 20.0812 19.4426C19.7052 19.704 19.3778 20.0301 19.1148 20.4049C18.8519 20.0301 18.5245 19.704 18.1485 19.4426Z",
                fill: "#4D4D4D"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "zolo-popup-response-lang",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Change Language', 'zoloblocks'),
            value: '',
            options: [{
              label: 'Translate to',
              value: ''
            }, {
              label: 'Arabic',
              value: 'arabic'
            }, {
              label: 'Bengali',
              value: 'bengali'
            }, {
              label: 'Bulgarian',
              value: 'bulgarian'
            }, {
              label: 'Chinese',
              value: 'chinese'
            }, {
              label: 'Croatian',
              value: 'croatian'
            }, {
              label: 'Czech',
              value: 'czech'
            }, {
              label: 'Danish',
              value: 'danish'
            }, {
              label: 'Dutch',
              value: 'dutch'
            }, {
              label: 'English',
              value: 'english'
            }, {
              label: 'Estonian',
              value: 'estonian'
            }, {
              label: 'Finnish',
              value: 'finnish'
            }, {
              label: 'French',
              value: 'french'
            }, {
              label: 'German',
              value: 'german'
            }, {
              label: 'Greek',
              value: 'greek'
            }, {
              label: 'Gujarati',
              value: 'gujarati'
            }, {
              label: 'Hebrew',
              value: 'hebrew'
            }, {
              label: 'Hindi',
              value: 'hindi'
            }, {
              label: 'Hungarian',
              value: 'hungarian'
            }, {
              label: 'Indonesian',
              value: 'indonesian'
            }, {
              label: 'Italian',
              value: 'italian'
            }, {
              label: 'Japanese',
              value: 'japanese'
            }, {
              label: 'Korean',
              value: 'korean'
            }, {
              label: 'Latvian',
              value: 'latvian'
            }, {
              label: 'Lithuanian',
              value: 'lithuanian'
            }, {
              label: 'Maltese',
              value: 'maltese'
            }, {
              label: 'Norwegian',
              value: 'norwegian'
            }, {
              label: 'Persian',
              value: 'persian'
            }, {
              label: 'Polish',
              value: 'polish'
            }, {
              label: 'Portuguese',
              value: 'portuguese'
            }, {
              label: 'Romanian',
              value: 'romanian'
            }, {
              label: 'Russian',
              value: 'russian'
            }, {
              label: 'Slovak',
              value: 'slovak'
            }, {
              label: 'Slovenian',
              value: 'slovenian'
            }, {
              label: 'Spanish',
              value: 'spanish'
            }, {
              label: 'Swedish',
              value: 'swedish'
            }, {
              label: 'Tamil',
              value: 'tamil'
            }, {
              label: 'Telugu',
              value: 'telugu'
            }, {
              label: 'Thai',
              value: 'thai'
            }, {
              label: 'Turkish',
              value: 'turkish'
            }, {
              label: 'Urdu',
              value: 'urdu'
            }, {
              label: 'Vietnamese',
              value: 'vietnamese'
            }],
            onChange: value => {
              if (value !== '') {
                openModal((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(`Translate to %s`, value), 'zoloblocks'));
              }
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Change tone', 'zoloblocks'),
            value: '',
            options: [{
              label: 'Casual',
              value: 'casual'
            }, {
              label: 'Confidence',
              value: 'confidence'
            }, {
              label: 'Formal',
              value: 'formal'
            }, {
              label: 'Friendly',
              value: 'friendly'
            }, {
              label: 'Inspirational',
              value: 'inspirational'
            }, {
              label: 'Motivational',
              value: 'motivational'
            }, {
              label: 'Nostalgic',
              value: 'nostalgic'
            }, {
              label: 'Playful',
              value: 'playful'
            }, {
              label: 'Professional',
              value: 'professional'
            }, {
              label: 'Scientific',
              value: 'scientific'
            }, {
              label: 'Straightforward',
              value: 'straightforward'
            }, {
              label: 'Witty',
              value: 'witty'
            }],
            onChange: value => {
              openModal((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(`Change tone to %s`, value), 'zoloblocks'));
            }
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map