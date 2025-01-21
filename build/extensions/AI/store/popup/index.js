/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/extensions/AI/store/popup/actions.js":
/*!**************************************************!*\
  !*** ./src/extensions/AI/store/popup/actions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   close: () => (/* binding */ close),
/* harmony export */   open: () => (/* binding */ open),
/* harmony export */   requestAI: () => (/* binding */ requestAI),
/* harmony export */   reset: () => (/* binding */ reset),
/* harmony export */   setBlockContent: () => (/* binding */ setBlockContent),
/* harmony export */   setContext: () => (/* binding */ setContext),
/* harmony export */   setLanguage: () => (/* binding */ setLanguage),
/* harmony export */   setPrompt: () => (/* binding */ setPrompt),
/* harmony export */   setScreen: () => (/* binding */ setScreen),
/* harmony export */   toggle: () => (/* binding */ toggle)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


function open() {
  return {
    type: 'OPEN'
  };
}
function close() {
  return {
    type: 'CLOSE'
  };
}
function toggle(content = '') {
  return {
    type: 'TOGGLE',
    payload: {
      content
    }
  };
}
function reset() {
  return {
    type: 'RESET'
  };
}
function setPrompt(prompt) {
  return {
    type: 'SET_PROMPT',
    prompt
  };
}
function setContext(context) {
  return {
    type: 'SET_CONTEXT',
    context
  };
}
function setLanguage(language) {
  return {
    type: 'SET_LANGUAGE',
    language
  };
}
function setBlockContent(blockContent) {
  return {
    type: 'SET_BLOCK_CONTENT',
    blockContent
  };
}
function setScreen(screen) {
  return {
    type: 'SET_SCREEN',
    screen
  };
}
function requestAI() {
  return ({
    dispatch,
    select
  }) => {
    dispatch({
      type: 'REQUEST_AI_PENDING'
    });
    const context = select.getContext();
    const data = {
      request: select.getPrompt()
    };
    if (context !== '') {
      // data.context = getContextFromSelectedBlocks();
      data.context = select.getBlockContent().trim();
    }
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: '/zolo/v1/openai',
      method: 'POST',
      data
    }).then(res => {
      dispatch({
        type: 'REQUEST_AI_SUCCESS',
        payload: res.response
      });
      return res.response;
    }).catch(err => {
      dispatch({
        type: 'REQUEST_AI_ERROR',
        payload: err?.response || err?.error_code || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Something went wrong, please, try again…', 'zoloblocks')
      });
    });
  };
}

/***/ }),

/***/ "./src/extensions/AI/store/popup/reducer.js":
/*!**************************************************!*\
  !*** ./src/extensions/AI/store/popup/reducer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialState = {
  isOpen: false,
  prompt: '',
  response: '',
  screen: 'request',
  loading: false,
  content: '',
  blockContent: '',
  onConfirm: () => {},
  onCancel: () => {}
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN':
      return {
        ...state,
        isOpen: true
      };
    case 'CLOSE':
      return {
        ...state,
        isOpen: false
      };
    case 'TOGGLE':
      return {
        ...state,
        isOpen: !state.isOpen,
        content: action.payload.content
      };
    case 'SET_PROMPT':
      return {
        ...state,
        prompt: action.prompt
      };
    case 'SET_BLOCK_CONTENT':
      return {
        ...state,
        blockContent: action.blockContent
      };
    case 'SET_RESPONSE':
      return {
        ...state,
        response: action.response
      };
    case 'SET_CONTEXT':
      return {
        ...state,
        context: action.context
      };
    case 'SET_SCREEN':
      return {
        ...state,
        screen: action.screen
      };
    case 'REQUEST_AI_PENDING':
      return {
        ...state,
        loading: true
      };
    case 'REQUEST_AI_SUCCESS':
      {
        return {
          ...state,
          loading: false,
          screen: 'request',
          response: action.payload || ''
        };
      }
    case 'REQUEST_AI_ERROR':
      return {
        ...state,
        loading: false,
        response: action.payload || ''
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

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
/*!************************************************!*\
  !*** ./src/extensions/AI/store/popup/index.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/extensions/AI/store/popup/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/extensions/AI/store/popup/actions.js");



const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)('zoloai/popup', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: {
    isOpen(state) {
      return state.isOpen || false;
    },
    getPrompt(state) {
      return state.prompt || '';
    },
    getContext(state) {
      return state.context || '';
    },
    getResponse(state) {
      return state.response || '';
    },
    getLanguage(state) {
      return state.language || '';
    },
    isLoading(state) {
      return state.loading || false;
    },
    getContent(state) {
      return state.content || '';
    },
    getBlockContent(state) {
      return state.blockContent || '';
    },
    getScreen(state) {
      return state.screen || '';
    }
  }
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map