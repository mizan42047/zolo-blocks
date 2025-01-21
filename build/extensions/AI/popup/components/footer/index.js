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
/*!************************************************************!*\
  !*** ./src/extensions/AI/popup/components/footer/index.js ***!
  \************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




const Footer = props => {
  const {
    onInsert
  } = props;
  const {
    open,
    close,
    reset,
    setPrompt,
    requestAI,
    setScreen,
    setBlockContent
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('zoloai/popup');
  const {
    prompt,
    loading,
    response,
    screen
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getPrompt,
      getContext,
      isLoading,
      getResponse,
      getScreen
    } = select('zoloai/popup');
    return {
      prompt: getPrompt(),
      context: getContext(),
      screen: getScreen(),
      loading: isLoading(),
      response: getResponse()
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "zolo-popup-footer",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "zolo-popup-footer-actions",
      children: [screen !== 'prompt' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        className: "insert-btn",
        onClick: () => {
          setScreen('prompt');
          setPrompt('');
          setBlockContent('');
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('New Prompt', 'zoloblocks')
      }), response && screen !== 'prompt' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "zolo-ai-footer-btn",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: () => {
              const textToCopy = response?.content;
              if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                  console.log('Text copied to clipboard successfully!');
                }).catch(err => {
                  console.error('Failed to copy text: ', err);
                });
              } else {
                // Fallback for older browsers or if clipboard API is restricted
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                textArea.style.position = 'fixed'; // Avoid scrolling to the bottom
                textArea.style.top = '0';
                textArea.style.left = '0';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                  const successful = document.execCommand('copy');
                  if (successful) {
                    console.log('Fallback: Text copied to clipboard!');
                  } else {
                    console.error('Fallback: Unable to copy text.');
                  }
                } catch (err) {
                  console.error('Fallback: Error copying text: ', err);
                }
                document.body.removeChild(textArea);
              }
              reset();
              close();
            },
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Copy', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.46667 3.76319C3.46667 3.09073 4.06406 2.46667 4.88934 2.46667H14.6427C15.468 2.46667 16.0654 3.09074 16.0654 3.76319V4.89404H8.9667C7.41324 4.89404 6.07736 6.09014 6.07736 7.65723V17.6393H4.88934C4.06406 17.6393 3.46667 17.0152 3.46667 16.3428V3.76319ZM6.07736 19.1059H4.88934C3.33861 19.1059 2 17.9073 2 16.3428V3.76319C2 2.19866 3.33861 1 4.88934 1H14.6427C16.1934 1 17.532 2.19866 17.532 3.76319V4.89404H18.7054C20.2588 4.89404 21.5947 6.09014 21.5947 7.65723V20.2368C21.5947 21.8039 20.2588 23 18.7054 23H8.9667C7.41324 23 6.07736 21.8039 6.07736 20.2368V19.1059ZM7.54403 7.65723C7.54403 6.98221 8.1387 6.36071 8.9667 6.36071H18.7054C19.5334 6.36071 20.1281 6.98221 20.1281 7.65723V20.2368C20.1281 20.9118 19.5334 21.5333 18.7054 21.5333H8.9667C8.1387 21.5333 7.54403 20.9118 7.54403 20.2368V7.65723Z"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            className: "insert-btn",
            onClick: onInsert,
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Insert', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23 7.59066C23 7.20289 22.6856 6.88854 22.2979 6.88854L17.3923 6.88854C17.0046 6.88854 16.6902 7.20289 16.6902 7.59066C16.6902 7.97844 17.0046 8.29279 17.3923 8.29279L21.5957 8.29279L21.5957 21.5957L2.40429 21.5957L2.40429 8.29279L6.38301 8.29279C6.77078 8.29279 7.08513 7.97844 7.08513 7.59066C7.08513 7.20289 6.77078 6.88854 6.38301 6.88854L1.70216 6.88854C1.31439 6.88854 1.00004 7.20289 1.00004 7.59066L1.00004 22.2979C1.00004 22.6856 1.31439 23 1.70216 23L22.2979 23C22.6856 23 23 22.6856 23 22.2979L23 7.59066ZM15.614 12.6737C15.8882 12.9479 15.8882 13.3925 15.614 13.6667L12.3749 16.9058C12.1007 17.18 11.6561 17.18 11.3819 16.9058L8.14277 13.6667C7.86857 13.3925 7.86857 12.9479 8.14277 12.6737C8.41696 12.3995 8.86153 12.3995 9.13572 12.6737L11.1763 14.7143L11.1763 1.70213C11.1763 1.31435 11.4907 0.999999 11.8784 1C12.2662 1 12.5806 1.31435 12.5806 1.70213L12.5806 14.7142L14.6211 12.6737C14.8953 12.3995 15.3398 12.3995 15.614 12.6737Z"
              })
            })]
          })]
        })
      }), prompt && !loading && !response && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          className: "insert-btn generate-btn",
          onClick: () => {
            requestAI();
          },
          children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Generate', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("g", {
              clipPath: "url(#clip0_1313_270)",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.4493 2.04772C12.2553 2.04772 11.394 3.02283 11.394 4.09545C11.394 3.01308 10.4153 2.04772 9.33866 2.04772C10.5327 2.04772 11.394 1.07262 11.394 0C11.394 1.08237 12.3727 2.04772 13.4493 2.04772ZM5.2475 10.2095C5.2475 8.07399 6.96027 6.36756 9.10367 6.36756C6.96027 6.36756 5.2475 4.66112 5.2475 2.52563C5.2475 4.66112 3.53474 6.36756 1.39134 6.36756C3.53474 6.36756 5.2475 8.07399 5.2475 10.2095ZM24.0001 11.1358C19.4294 11.1358 15.818 14.7339 15.818 19.2877C15.818 14.8509 12.2065 11.1358 7.63584 11.1358C12.2065 11.1358 15.818 7.53764 15.818 2.98389C15.818 7.42062 19.4294 11.1358 24.0001 11.1358ZM4.34723 13.3296H1V16.6645L4.34723 13.3296ZM10.0042 16.5085L8.65361 17.8541H8.7319C8.97659 18.1662 9.21148 18.488 9.21148 19.0438C9.21148 19.5996 8.97659 20.0774 8.57531 20.5552C8.17403 20.955 7.69446 21.189 7.05829 21.189H2.51702L10.4838 13.3296H7.53786L1.0783 19.7653V23.5H6.9702C8.25233 23.5 9.20169 23.1782 10.0825 22.3884C10.797 21.6668 11.2766 20.2431 11.2766 19.2095C11.2766 18.1759 10.797 17.2203 10.0042 16.5085Z"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("defs", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("clipPath", {
                id: "clip0_1313_270",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
                  width: 24,
                  height: 24,
                  fill: "white"
                })
              })
            })]
          })]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map