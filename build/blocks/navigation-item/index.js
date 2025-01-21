/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@dnd-kit/utilities/dist/utilities.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSS: () => (/* binding */ CSS),
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   canUseDOM: () => (/* binding */ canUseDOM),
/* harmony export */   findFirstFocusableNode: () => (/* binding */ findFirstFocusableNode),
/* harmony export */   getEventCoordinates: () => (/* binding */ getEventCoordinates),
/* harmony export */   getOwnerDocument: () => (/* binding */ getOwnerDocument),
/* harmony export */   getWindow: () => (/* binding */ getWindow),
/* harmony export */   hasViewportRelativeCoordinates: () => (/* binding */ hasViewportRelativeCoordinates),
/* harmony export */   isDocument: () => (/* binding */ isDocument),
/* harmony export */   isHTMLElement: () => (/* binding */ isHTMLElement),
/* harmony export */   isKeyboardEvent: () => (/* binding */ isKeyboardEvent),
/* harmony export */   isNode: () => (/* binding */ isNode),
/* harmony export */   isSVGElement: () => (/* binding */ isSVGElement),
/* harmony export */   isTouchEvent: () => (/* binding */ isTouchEvent),
/* harmony export */   isWindow: () => (/* binding */ isWindow),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   useCombinedRefs: () => (/* binding */ useCombinedRefs),
/* harmony export */   useEvent: () => (/* binding */ useEvent),
/* harmony export */   useInterval: () => (/* binding */ useInterval),
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect),
/* harmony export */   useLatestValue: () => (/* binding */ useLatestValue),
/* harmony export */   useLazyMemo: () => (/* binding */ useLazyMemo),
/* harmony export */   useNodeRef: () => (/* binding */ useNodeRef),
/* harmony export */   usePrevious: () => (/* binding */ usePrevious),
/* harmony export */   useUniqueId: () => (/* binding */ useUniqueId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useCombinedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => node => {
    refs.forEach(ref => ref(node));
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  refs);
}

// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const canUseDOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';

function isWindow(element) {
  const elementString = Object.prototype.toString.call(element);
  return elementString === '[object Window]' || // In Electron context the Window object serializes to [object global]
  elementString === '[object global]';
}

function isNode(node) {
  return 'nodeType' in node;
}

function getWindow(target) {
  var _target$ownerDocument, _target$ownerDocument2;

  if (!target) {
    return window;
  }

  if (isWindow(target)) {
    return target;
  }

  if (!isNode(target)) {
    return window;
  }

  return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
}

function isDocument(node) {
  const {
    Document
  } = getWindow(node);
  return node instanceof Document;
}

function isHTMLElement(node) {
  if (isWindow(node)) {
    return false;
  }

  return node instanceof getWindow(node).HTMLElement;
}

function isSVGElement(node) {
  return node instanceof getWindow(node).SVGElement;
}

function getOwnerDocument(target) {
  if (!target) {
    return document;
  }

  if (isWindow(target)) {
    return target.document;
  }

  if (!isNode(target)) {
    return document;
  }

  if (isDocument(target)) {
    return target;
  }

  if (isHTMLElement(target) || isSVGElement(target)) {
    return target.ownerDocument;
  }

  return document;
}

/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 * @param callback {function} Callback function that is invoked when the dependencies of the hook change
 */

const useIsomorphicLayoutEffect = canUseDOM ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

function useEvent(handler) {
  const handlerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handler);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return handlerRef.current == null ? void 0 : handlerRef.current(...args);
  }, []);
}

function useInterval() {
  const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((listener, duration) => {
    intervalRef.current = setInterval(listener, duration);
  }, []);
  const clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  return [set, clear];
}

function useLatestValue(value, dependencies) {
  if (dependencies === void 0) {
    dependencies = [value];
  }

  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  useIsomorphicLayoutEffect(() => {
    if (valueRef.current !== value) {
      valueRef.current = value;
    }
  }, dependencies);
  return valueRef;
}

function useLazyMemo(callback, dependencies) {
  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const newValue = callback(valueRef.current);
    valueRef.current = newValue;
    return newValue;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [...dependencies]);
}

function useNodeRef(onChange) {
  const onChangeHandler = useEvent(onChange);
  const node = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const setNodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(element => {
    if (element !== node.current) {
      onChangeHandler == null ? void 0 : onChangeHandler(element, node.current);
    }

    node.current = element;
  }, //eslint-disable-next-line
  []);
  return [node, setNodeRef];
}

function usePrevious(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

let ids = {};
function useUniqueId(prefix, value) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (value) {
      return value;
    }

    const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
    ids[prefix] = id;
    return prefix + "-" + id;
  }, [prefix, value]);
}

function createAdjustmentFn(modifier) {
  return function (object) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }

    return adjustments.reduce((accumulator, adjustment) => {
      const entries = Object.entries(adjustment);

      for (const [key, valueAdjustment] of entries) {
        const value = accumulator[key];

        if (value != null) {
          accumulator[key] = value + modifier * valueAdjustment;
        }
      }

      return accumulator;
    }, { ...object
    });
  };
}

const add = /*#__PURE__*/createAdjustmentFn(1);
const subtract = /*#__PURE__*/createAdjustmentFn(-1);

function hasViewportRelativeCoordinates(event) {
  return 'clientX' in event && 'clientY' in event;
}

function isKeyboardEvent(event) {
  if (!event) {
    return false;
  }

  const {
    KeyboardEvent
  } = getWindow(event.target);
  return KeyboardEvent && event instanceof KeyboardEvent;
}

function isTouchEvent(event) {
  if (!event) {
    return false;
  }

  const {
    TouchEvent
  } = getWindow(event.target);
  return TouchEvent && event instanceof TouchEvent;
}

/**
 * Returns the normalized x and y coordinates for mouse and touch events.
 */

function getEventCoordinates(event) {
  if (isTouchEvent(event)) {
    if (event.touches && event.touches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.touches[0];
      return {
        x,
        y
      };
    } else if (event.changedTouches && event.changedTouches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.changedTouches[0];
      return {
        x,
        y
      };
    }
  }

  if (hasViewportRelativeCoordinates(event)) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }

  return null;
}

const CSS = /*#__PURE__*/Object.freeze({
  Translate: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        x,
        y
      } = transform;
      return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
    }

  },
  Scale: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        scaleX,
        scaleY
      } = transform;
      return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    }

  },
  Transform: {
    toString(transform) {
      if (!transform) {
        return;
      }

      return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(' ');
    }

  },
  Transition: {
    toString(_ref) {
      let {
        property,
        duration,
        easing
      } = _ref;
      return property + " " + duration + "ms " + easing;
    }

  }
});

const SELECTOR = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
function findFirstFocusableNode(element) {
  if (element.matches(SELECTOR)) {
    return element;
  }

  return element.querySelector(SELECTOR);
}


//# sourceMappingURL=utilities.esm.js.map


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/add-submenu.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/add-submenu.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const addSubmenu = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M2 12c0 3.6 2.4 5.5 6 5.5h.5V19l3-2.5-3-2.5v2H8c-2.5 0-4.5-1.5-4.5-4s2-4.5 4.5-4.5h3.5V6H8c-3.6 0-6 2.4-6 6zm19.5-1h-8v1.5h8V11zm0 5h-8v1.5h8V16zm0-10h-8v1.5h8V6z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addSubmenu);
//# sourceMappingURL=add-submenu.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/link.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const link = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (link);
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/menu.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/menu.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const menu = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plus-circle-filled.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus-circle-filled.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const plusCircleFilled = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M2 12C2 6.44444 6.44444 2 12 2C17.5556 2 22 6.44444 22 12C22 17.5556 17.5556 22 12 22C6.44444 22 2 17.5556 2 12ZM13 11V7H11V11H7V13H11V17H13V13H17V11H13Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plusCircleFilled);
//# sourceMappingURL=plus-circle-filled.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/remove-submenu.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/remove-submenu.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const removeSubmenu = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m13.955 20.748 8-17.5-.91-.416L19.597 6H13.5v1.5h5.411l-1.6 3.5H13.5v1.5h3.126l-1.6 3.5H13.5l.028 1.5h.812l-1.295 2.832.91.416ZM17.675 16l-.686 1.5h4.539L21.5 16h-3.825Zm2.286-5-.686 1.5H21.5V11h-1.54ZM2 12c0 3.58 2.42 5.5 6 5.5h.5V19l3-2.5-3-2.5v2H8c-2.48 0-4.5-1.52-4.5-4S5.52 7.5 8 7.5h3.5V6H8c-3.58 0-6 2.42-6 6Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSubmenu);
//# sourceMappingURL=remove-submenu.js.map

/***/ }),

/***/ "./src/blocks/navigation-item/attributes.js":
/*!**************************************************!*\
  !*** ./src/blocks/navigation-item/attributes.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/navigation-item/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/navigation-item/constants/typoPrefixConstant.js");
/**
 * Internal dependencies
 */
const {
  generateResAlignmentAttributies,
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateNormalBGAttributes,
  generateBoxShadowAttributies,
  generateTypographyAttributes
} = window.zoloModule;


const attributes = {
  //Common Attributes

  globalConfig: {
    type: 'object',
    default: {
      background: {
        prefix: 'mainBg'
      },
      margin: {
        prefix: 'mainMargin'
      },
      padding: {
        prefix: 'mainPadding'
      },
      border: {
        prefix: 'mainBorder'
      },
      borderRadius: {
        prefix: 'mainBorderRadius'
      },
      boxShadow: {
        prefix: 'mainBoxShadow'
      },
      responsiveControls: true
    }
  },
  // Generators

  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.DROPDOWN_WRAP_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.DROPDOWN_WRAP_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.DROPDOWN_WRAP_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.DROPDOWN_WRAP_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.DROPDOWN_WRAP_MARGIN),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.DROPDOWN_WRAP_BOX_SHADOW),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.DROPDOWN_WIDTH),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_MARGIN),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_BOX_SHADOW),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_HOVER_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_ACTIVE_BG),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_INDICATOR_SIZE),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_INDICATOR_BG),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_INDICATOR_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_INDICATOR_MARGIN),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_INDICATOR_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_INDICATOR_BORDER_RADIUS),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_INDICATOR_BOX_SHADOW),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_INDICATOR_HOVER_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUB_MENU_INDICATOR_ACTIVE_BG),
  // Typography
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__)),
  // block attributes
  navItemTextColor: {
    type: 'string'
  },
  navItemHoverTextColor: {
    type: 'string'
  },
  navItemActiveTextColor: {
    type: 'string'
  },
  navItemBorderHoverColor: {
    type: 'string'
  },
  navItemBorderActiveColor: {
    type: 'string'
  },
  subMenuTextColor: {
    type: 'string'
  },
  subMenuHoverTextColor: {
    type: 'string'
  },
  subMenuActiveTextColor: {
    type: 'string'
  },
  subMenuBorderHoverColor: {
    type: 'string'
  },
  subMenuBorderActiveColor: {
    type: 'string'
  },
  //submenu attributes
  addSubmenu: {
    type: 'boolean',
    default: false
  },
  submenuType: {
    type: 'string',
    default: 'dropdown'
  },
  label: {
    type: 'string'
  },
  type: {
    type: 'string'
  },
  description: {
    type: 'string'
  },
  rel: {
    type: 'string'
  },
  id: {
    type: 'number'
  },
  opensInNewTab: {
    type: 'boolean',
    default: false
  },
  url: {
    type: 'string'
  },
  title: {
    type: 'string'
  },
  kind: {
    type: 'string'
  },
  subMenuIndicator: {
    type: 'string',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" /></svg>'
  },
  subMenuIconColor: {
    type: 'string'
  },
  subMenuIconHoverColor: {
    type: 'string'
  },
  subMenuIconActiveColor: {
    type: 'string'
  },
  subMenuIconHoverBorderColor: {
    type: 'string'
  },
  subMenuIconActiveBorderColor: {
    type: 'string'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/navigation-item/components/appender-button.js":
/*!******************************************************************!*\
  !*** ./src/blocks/navigation-item/components/appender-button.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus-circle-filled.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const NavigationAppenderButton = ({
  rootClientId,
  isMegaMenu = false,
  onClick
}) => {
  const buttonLabel = isMegaMenu ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Mega Menu', 'zoloblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Submenu', 'zoloblocks');
  const {
    insertBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/block-editor');
  const submenu = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('zolo/navigation-submenu', {});
  const megamenu = isMegaMenu ? (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('zolo/megamenu', {}) : null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    className: "zolo-navigation-item-appender-button",
    onClick: () => {
      onClick();
      isMegaMenu ? insertBlock(megamenu, 0, rootClientId) : insertBlock(submenu, 0, rootClientId);
    },
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
    iconPosition: "right",
    showTooltip: true,
    "aria-label": buttonLabel,
    label: buttonLabel,
    variant: "secondary"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationAppenderButton);

/***/ }),

/***/ "./src/blocks/navigation-item/components/link-popover/get-suggestion-query.js":
/*!************************************************************************************!*\
  !*** ./src/blocks/navigation-item/components/link-popover/get-suggestion-query.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSuggestionsQuery: () => (/* binding */ getSuggestionsQuery)
/* harmony export */ });
function getSuggestionsQuery(type, kind) {
  switch (type) {
    case 'post':
    case 'page':
      return {
        type: 'post',
        subtype: type
      };
    case 'category':
      return {
        type: 'term',
        subtype: 'category'
      };
    case 'tag':
      return {
        type: 'term',
        subtype: 'post_tag'
      };
    case 'post_format':
      return {
        type: 'post-format'
      };
    default:
      if (kind === 'taxonomy') {
        return {
          type: 'term',
          subtype: type
        };
      }
      if (kind === 'post-type') {
        return {
          type: 'post',
          subtype: type
        };
      }
      return {
        // for custom link which has no type
        // always show pages as initial suggestions
        initialSuggestionsSearchOptions: {
          type: 'post',
          subtype: 'page',
          perPage: 20
        }
      };
  }
}

/***/ }),

/***/ "./src/blocks/navigation-item/components/link-popover/index.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/navigation-item/components/link-popover/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_suggestion_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-suggestion-query */ "./src/blocks/navigation-item/components/link-popover/get-suggestion-query.js");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/dom */ "@wordpress/dom");
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









const LinkPopover = (props, ref) => {
  const {
    label,
    url,
    opensInNewTab,
    type,
    kind
  } = props?.link;
  const postType = type || 'page';
  const permissions = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.useResourcePermissions)({
    kind: 'postType',
    name: postType
  });
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
  async function handleCreate(pageTitle) {
    const page = await saveEntityRecord('postType', postType, {
      title: pageTitle,
      status: 'draft'
    });
    return {
      id: page.id,
      type: postType,
      title: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(page.title.rendered),
      url: page.link,
      kind: 'post-type'
    };
  }
  const link = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => ({
    url,
    opensInNewTab,
    title: label && (0,_wordpress_dom__WEBPACK_IMPORTED_MODULE_7__.__unstableStripHTML)(label)
  }), [label, opensInNewTab, url]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Popover, {
    ref: ref,
    placement: "bottom",
    onClose: props?.onClose,
    anchor: props?.anchor,
    shift: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLinkControl, {
      hasTextControl: true,
      hasRichPreviews: true,
      value: link,
      showSuggestions: true,
      showInitialSuggestions: true,
      withCreateSuggestion: permissions.canCreate,
      createSuggestion: handleCreate,
      createSuggestionButtonText: searchTerm => {
        let format;
        if (type === 'post') {
          /* translators: %s: search term. */
          format = __('Create draft post: <mark>%s</mark>');
        } else {
          /* translators: %s: search term. */
          format = __('Create draft page: <mark>%s</mark>');
        }
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.createInterpolateElement)(sprintf(format, searchTerm), {
          mark: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("mark", {})
        });
      },
      noDirectEntry: !!type,
      noURLSuggestion: !!type,
      suggestionsQuery: (0,_get_suggestion_query__WEBPACK_IMPORTED_MODULE_2__.getSuggestionsQuery)(type, kind),
      onChange: props.onChange
    }, link?.url)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(LinkPopover));

/***/ }),

/***/ "./src/blocks/navigation-item/constants/index.js":
/*!*******************************************************!*\
  !*** ./src/blocks/navigation-item/constants/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   DROPDOWN_WIDTH: () => (/* binding */ DROPDOWN_WIDTH),
/* harmony export */   DROPDOWN_WRAP_BG: () => (/* binding */ DROPDOWN_WRAP_BG),
/* harmony export */   DROPDOWN_WRAP_BORDER: () => (/* binding */ DROPDOWN_WRAP_BORDER),
/* harmony export */   DROPDOWN_WRAP_BORDER_RADIUS: () => (/* binding */ DROPDOWN_WRAP_BORDER_RADIUS),
/* harmony export */   DROPDOWN_WRAP_BOX_SHADOW: () => (/* binding */ DROPDOWN_WRAP_BOX_SHADOW),
/* harmony export */   DROPDOWN_WRAP_MARGIN: () => (/* binding */ DROPDOWN_WRAP_MARGIN),
/* harmony export */   DROPDOWN_WRAP_PADDING: () => (/* binding */ DROPDOWN_WRAP_PADDING),
/* harmony export */   SUB_MENU_ACTIVE_BG: () => (/* binding */ SUB_MENU_ACTIVE_BG),
/* harmony export */   SUB_MENU_BG: () => (/* binding */ SUB_MENU_BG),
/* harmony export */   SUB_MENU_BORDER: () => (/* binding */ SUB_MENU_BORDER),
/* harmony export */   SUB_MENU_BORDER_RADIUS: () => (/* binding */ SUB_MENU_BORDER_RADIUS),
/* harmony export */   SUB_MENU_BOX_SHADOW: () => (/* binding */ SUB_MENU_BOX_SHADOW),
/* harmony export */   SUB_MENU_HOVER_BG: () => (/* binding */ SUB_MENU_HOVER_BG),
/* harmony export */   SUB_MENU_INDICATOR_ACTIVE_BG: () => (/* binding */ SUB_MENU_INDICATOR_ACTIVE_BG),
/* harmony export */   SUB_MENU_INDICATOR_BG: () => (/* binding */ SUB_MENU_INDICATOR_BG),
/* harmony export */   SUB_MENU_INDICATOR_BORDER: () => (/* binding */ SUB_MENU_INDICATOR_BORDER),
/* harmony export */   SUB_MENU_INDICATOR_BORDER_RADIUS: () => (/* binding */ SUB_MENU_INDICATOR_BORDER_RADIUS),
/* harmony export */   SUB_MENU_INDICATOR_BOX_SHADOW: () => (/* binding */ SUB_MENU_INDICATOR_BOX_SHADOW),
/* harmony export */   SUB_MENU_INDICATOR_HOVER_BG: () => (/* binding */ SUB_MENU_INDICATOR_HOVER_BG),
/* harmony export */   SUB_MENU_INDICATOR_MARGIN: () => (/* binding */ SUB_MENU_INDICATOR_MARGIN),
/* harmony export */   SUB_MENU_INDICATOR_PADDING: () => (/* binding */ SUB_MENU_INDICATOR_PADDING),
/* harmony export */   SUB_MENU_INDICATOR_SIZE: () => (/* binding */ SUB_MENU_INDICATOR_SIZE),
/* harmony export */   SUB_MENU_MARGIN: () => (/* binding */ SUB_MENU_MARGIN),
/* harmony export */   SUB_MENU_PADDING: () => (/* binding */ SUB_MENU_PADDING),
/* harmony export */   TAB_STATES: () => (/* binding */ TAB_STATES)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Block Prefix
const BLOCK_PREFIX = 'navigation';
const DROPDOWN_WRAP_BOX_SHADOW = 'dropdownWrapBoxShadow';
const DROPDOWN_WRAP_BG = 'dropdownWrapBg';
const DROPDOWN_WRAP_BORDER = 'dropdownWrapBorder';
const DROPDOWN_WRAP_BORDER_RADIUS = 'dropdownWrapBorderRadius';
const DROPDOWN_WRAP_PADDING = 'dropdownWrapPadding';
const DROPDOWN_WRAP_MARGIN = 'dropdownWrapMargin';
const DROPDOWN_WIDTH = 'dropdownWidth';
const SUB_MENU_BG = 'subMenuBg';
const SUB_MENU_BORDER = 'subMenuBorder';
const SUB_MENU_BORDER_RADIUS = 'subMenuBorderRadius';
const SUB_MENU_PADDING = 'subMenuPadding';
const SUB_MENU_MARGIN = 'subMenuMargin';
const SUB_MENU_BOX_SHADOW = 'subMenuBoxShadow';
const SUB_MENU_HOVER_BG = 'subMenuHoverBg';
const SUB_MENU_ACTIVE_BG = 'subMenuActiveBg';
const SUB_MENU_INDICATOR_SIZE = 'subMenuIndicatorSize';
const SUB_MENU_INDICATOR_BG = 'subMenuIndicatorBg';
const SUB_MENU_INDICATOR_PADDING = 'subMenuIndicatorPadding';
const SUB_MENU_INDICATOR_MARGIN = 'subMenuIndicatorMargin';
const SUB_MENU_INDICATOR_BORDER = 'subMenuIndicatorBorder';
const SUB_MENU_INDICATOR_BORDER_RADIUS = 'subMenuIndicatorBorderRadius';
const SUB_MENU_INDICATOR_BOX_SHADOW = 'subMenuIndicatorBoxShadow';
const SUB_MENU_INDICATOR_HOVER_BG = 'subMenuIndicatorHoverBg';
const SUB_MENU_INDICATOR_ACTIVE_BG = 'subMenuIndicatorActiveBg';

// tab states
const TAB_STATES = [{
  value: 'normal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'zoloblocks')
}, {
  value: 'hover',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'zoloblocks')
}, {
  value: 'active',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Active', 'zoloblocks')
}];

/***/ }),

/***/ "./src/blocks/navigation-item/constants/typoPrefixConstant.js":
/*!********************************************************************!*\
  !*** ./src/blocks/navigation-item/constants/typoPrefixConstant.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MENU_TYPOGRAPHY: () => (/* binding */ MENU_TYPOGRAPHY),
/* harmony export */   SUB_MENU_TYPOGRAPHY: () => (/* binding */ SUB_MENU_TYPOGRAPHY)
/* harmony export */ });
// Main meunu Typography
const MENU_TYPOGRAPHY = 'menuTypography';
const SUB_MENU_TYPOGRAPHY = 'subMenuTypography';

/***/ }),

/***/ "./src/blocks/navigation-item/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/navigation-item/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/navigation-item/inspector.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/navigation-item/style.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/add-submenu.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/menu.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/remove-submenu.js");
/* harmony import */ var _components_link_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/link-popover */ "./src/blocks/navigation-item/components/link-popover/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_remove_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/remove-link */ "./src/blocks/navigation-item/utils/remove-link.js");
/* harmony import */ var _utils_update_attributes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/update-attributes */ "./src/blocks/navigation-item/utils/update-attributes.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_use_invalid_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/use-invalid-link */ "./src/blocks/navigation-item/utils/use-invalid-link.js");
/* harmony import */ var _components_appender_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/appender-button */ "./src/blocks/navigation-item/components/appender-button.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./style */ "./src/blocks/navigation-item/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
//WordPress dependencies


//external dependencies


//internal dependencies












const {
  DisplayZoloIcon
} = window.zoloModule;
// import style


const Edit = props => {
  const {
    attributes,
    setAttributes,
    isSelected,
    clientId,
    onReplace
  } = props;
  const {
    uniqueId,
    preview,
    addSubmenu,
    url,
    label,
    id,
    kind,
    type,
    subMenuIndicator
  } = attributes;
  const {
    selectPreviousBlock,
    replaceInnerBlocks,
    selectBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store);

  // Have the link editing ui open on mount when lacking a url and selected.
  const [isLinkOpen, setIsLinkOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(isSelected && !url);
  // Store what element opened the popover, so we know where to return focus to (toolbar button vs navigation link text)
  const [openedBy, setOpenedBy] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const linkUIref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const listItemRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const [isInvalid, isDraft] = (0,_utils_use_invalid_link__WEBPACK_IMPORTED_MODULE_12__["default"])(kind, type, id);
  const {
    hasInnerBlocks,
    isNested,
    hasChildBlocks,
    currentPostType,
    currentPostId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useSelect)(select => {
    const {
      getBlockOrder,
      getBlockParents,
      getBlockName,
      getBlock
    } = select('core/block-editor');
    const {
      getCurrentPostId,
      getCurrentPostType
    } = select('core/editor');
    return {
      hasInnerBlocks: getBlockOrder(clientId).length > 0,
      isNested: getBlockName(getBlockParents(clientId).at(-1)) === 'zolo/navigation-submenu',
      hasChildBlocks: getBlock(clientId)?.innerBlocks?.length > 0,
      currentPostType: getCurrentPostType(),
      currentPostId: getCurrentPostId()
    };
  }, [clientId]);
  const CustomAppender = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_appender_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: () => setIsLinkOpen(true),
    rootClientId: clientId,
    isMegaMenu: attributes?.addSubmenu && attributes?.submenuType === 'megamenu'
  });

  //block wrapper class
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(uniqueId, 'zolo-navigation-item', {
      'has-megamenu': attributes?.addSubmenu && attributes?.submenuType === 'megamenu',
      'has-submenu': attributes?.addSubmenu && attributes?.submenuType === 'dropdown',
      'current-item': id === currentPostId && currentPostType === type
    }),
    ref: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__.useMergeRefs)([listItemRef, setPopoverAnchor]),
    'data-id': id,
    'data-type': type,
    'data-kind': kind
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('zolo-navigation-submenu-wrapper', {
      [`submenu-type-${attributes.submenuType}`]: attributes?.addSubmenu && attributes?.submenuType
    })
  }, {
    allowedBlocks: ['zolo/navigation-submenu', 'zolo/megamenu'],
    renderAppender: !hasChildBlocks && isSelected ? CustomAppender : false
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (url && !isSelected) {
      setIsLinkOpen(false);
    }

    //close popover if user focus outside of the popover
    const handleClickOutside = event => {
      if (linkUIref.current && !linkUIref.current.contains(event.target)) {
        setIsLinkOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [url, isSelected, isLinkOpen]);
  if (!url || isInvalid || isDraft) {
    blockProps.onClick = () => {
      setIsLinkOpen(true);
      setOpenedBy(ref.current);
    };
  }

  // preview image
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("img", {
      src: zoloParams.blocksPreview.heading,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Preview', 'zoloblocks')
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      hasInnerBlocks: hasInnerBlocks,
      isNested: isNested
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_style__WEBPACK_IMPORTED_MODULE_15__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
          name: "link",
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_17__["default"],
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link', 'zoloblocks'),
          onClick: event => {
            if (isLinkOpen) {
              setOpenedBy(null);
              setIsLinkOpen(false);
            } else {
              setOpenedBy(event.target);
              setIsLinkOpen(true);
            }
          }
        }), !hasInnerBlocks ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
            icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_18__["default"],
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Submenu', 'zoloblocks'),
            onClick: () => {
              setAttributes({
                addSubmenu: true
              });
              setAttributes({
                submenuType: 'dropdown'
              });
              const navigationItem = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_14__.createBlock)('zolo/navigation-item', {});
              const submenu = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_14__.createBlock)('zolo/navigation-submenu', {}, [navigationItem]);
              (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_14__.createBlocksFromInnerBlocksTemplate)([submenu]);
              replaceInnerBlocks(clientId, [submenu]);
              selectBlock(navigationItem?.clientId);
            }
          }), !isNested && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
            icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_19__["default"],
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Mega Menu', 'zoloblocks'),
            onClick: () => {
              setAttributes({
                addSubmenu: true
              });
              setAttributes({
                submenuType: 'megamenu'
              });
              const container = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_14__.createBlock)('zolo/container', {
                containerWidthType: 'alignfull',
                variationStatus: true
              });
              const megaMenu = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_14__.createBlock)('zolo/megamenu', {}, [container]);
              (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_14__.createBlocksFromInnerBlocksTemplate)([megaMenu]);
              replaceInnerBlocks(clientId, [megaMenu]);
              selectBlock(container?.clientId);
            }
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
            icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_20__["default"],
            name: "Remove Submenu",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`${attributes?.submenuType && attributes?.submenuType === 'megamenu' ? 'Remove Mega Menu' : 'Remove Submenu'}`, 'zoloblocks'),
            onClick: () => {
              setAttributes({
                addSubmenu: false
              });
              setAttributes({
                submenuType: ''
              });
              replaceInnerBlocks(clientId, []);
            }
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("li", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("a", {
        className: "zolo-navigation-link",
        children: [isLinkOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_link_popover__WEBPACK_IMPORTED_MODULE_7__["default"], {
          ref: linkUIref,
          clientId: clientId,
          link: attributes,
          onClose: () => {
            // If there is no link then remove the auto-inserted block.
            // This avoids empty blocks which can provided a poor UX.
            if (!url) {
              // Fixes https://github.com/WordPress/gutenberg/issues/61361
              // There's a chance we're closing due to the user selecting the browse all button.
              // Only move focus if the focus is still within the popover ui. If it's not within
              // the popover, it's because something has taken the focus from the popover, and
              // we don't want to steal it back.
              if (linkUIref.current.contains(window.document.activeElement)) {
                // Select the previous block to keep focus nearby
                selectPreviousBlock(clientId, true);
              }

              // Remove the link.
              onReplace([]);
              return;
            }
            setIsLinkOpen(false);
            if (openedBy) {
              openedBy.focus();
              setOpenedBy(null);
            } else if (ref.current) {
              // select the ref when adding a new link
              ref.current.focus();
            } else {
              // Fallback
              selectPreviousBlock(clientId, true);
            }
          },
          anchor: popoverAnchor,
          onRemove: () => (0,_utils_remove_link__WEBPACK_IMPORTED_MODULE_9__["default"])(setAttributes, setIsLinkOpen),
          onChange: updatedValue => {
            (0,_utils_update_attributes__WEBPACK_IMPORTED_MODULE_10__.updateAttributes)(updatedValue, setAttributes, attributes);
          }
        }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
          tagName: "span",
          className: "zolo-navigation-text",
          value: attributes?.label,
          onChange: value => setAttributes({
            label: value
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Link', 'zoloblocks')
        }), attributes?.addSubmenu ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("button", {
          className: "zolo-submenu-arrow",
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Submenu Arrow', 'zoloblocks'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(DisplayZoloIcon, {
            icon: subMenuIndicator
          })
        }) : null]
      }), addSubmenu ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        ...innerBlocksProps
      }) : null]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/navigation-item/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/navigation-item/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/navigation-item/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/navigation-item/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/navigation-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/navigation-item/save.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/navigation-item/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  icon: {
    src: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      width: 24,
      height: 24,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
        d: "M284.448 170.672v170.656H512V170.672H284.448zM496 325.344H300.448V186.672H496v138.672zM0 204.896h227.568v16H0zM0 290.24h227.568v16H0z"
      })
    })
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/navigation-item/inspector.js":
/*!*************************************************!*\
  !*** ./src/blocks/navigation-item/inspector.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/navigation-item/attributes.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/blocks/navigation-item/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/navigation-item/constants/typoPrefixConstant.js");
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);




const {
  HeaderTabs,
  ResAlignmentControl,
  ResRangeControl,
  ColorControl,
  BorderControl,
  ResDimensionsControl,
  TypographyDropdown,
  TabPanelControl,
  NormalBGControl,
  BoxShadowControl,
  LinkControl,
  IconicBtnGroup,
  AdvancedOptions,
  ZoloIconPicker,
  ZoloPanelBody,
  ToggleGroup,
  ResSelectControl
} = window.zoloModule;




const Inspector = props => {
  const {
    attributes,
    setAttributes,
    hasInnerBlocks,
    isNested
  } = props;
  const requiredProps = {
    attributes,
    setAttributes,
    resMode: attributes?.resMode,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
  const {
    resMode,
    subMenuTextColor,
    subMenuTextHoverColor,
    subMenuTextActiveColor,
    subMenuBorderHoverColor,
    subMenuBorderActiveColor,
    addSubmenu,
    subMenuIndicator,
    submenuType,
    subMenuIconColor,
    subMenuIconHoverColor,
    subMenuIconHoverBorderColor,
    subMenuIconActiveColor,
    subMenuIconActiveBorderColor
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HeaderTabs, {
      block: "zolo/navigation-item",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General', 'zoloblocks'),
          panelProps: props,
          firstOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Submenu', 'zoloblocks'),
            checked: attributes?.addSubmenu,
            onChange: value => setAttributes({
              addSubmenu: value
            })
          }), attributes?.addSubmenu && !hasInnerBlocks && !isNested && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(IconicBtnGroup, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Submenu Type', 'zoloblocks'),
            value: attributes?.submenuType,
            onChange: value => setAttributes({
              submenuType: value
            }),
            options: [{
              value: 'dropdown',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dropdown', 'zoloblocks')
            }, {
              value: 'megamenu',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Megamenu', 'zoloblocks')
            }],
            isDeselectable: true
          })]
        }), addSubmenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Indicator', 'zoloblocks'),
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloIconPicker, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select', 'zoloblocks'),
            value: subMenuIndicator,
            onChange: value => {
              setAttributes({
                subMenuIndicator: value
              });
            }
          })
        })]
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: addSubmenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {})
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps,
          block: "zolo/advanced-heading"
        })
      })
    })
  }, "controls");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/navigation-item/save.js":
/*!********************************************!*\
  !*** ./src/blocks/navigation-item/save.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const {
  DisplayZoloIcon
} = window.zoloModule;
const Save = props => {
  const {
    attributes
  } = props;
  const {
    uniqueId,
    addSubmenu,
    url,
    label,
    id,
    kind,
    type,
    title,
    subMenuIndicator
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(uniqueId, 'zolo-navigation-item', {
      'has-megamenu': attributes?.addSubmenu && attributes?.submenuType === 'megamenu',
      'has-submenu': attributes?.addSubmenu && attributes?.submenuType === 'dropdown'
    }),
    'data-id': id,
    'data-type': type,
    'data-kind': kind
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('zolo-navigation-submenu-wrapper')
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
      href: url,
      title: title,
      className: "zolo-navigation-link",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "span",
        value: title || label
      }), addSubmenu ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        className: "zolo-submenu-arrow",
        "aria-label": "Submenu Arrow",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DisplayZoloIcon, {
          icon: subMenuIndicator
        })
      }) : null]
    }), addSubmenu ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      ...innerBlocksProps
    }) : null]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/navigation-item/style.js":
/*!*********************************************!*\
  !*** ./src/blocks/navigation-item/style.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/blocks/navigation-item/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/navigation-item/constants/typoPrefixConstant.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */


/**
 * Internal depencencies
 */
const {
  generateResAlignmentStyle,
  generateResRangeStyle,
  generateBorderStyle,
  generateDimensionStyle,
  generateNormalBGControlStyles,
  generateBoxShadowStyles,
  generateTypographyStyles,
  GlobalStyleHanlder
} = window.zoloModule;




function Style({
  props
}) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    subMenuTextColor,
    subMenuTextHoverColor,
    subMenuTextActiveColor,
    subMenuBorderHoverColor,
    subMenuBorderActiveColor,
    uniqueId,
    subMenuIconColor,
    subMenuIconHoverColor,
    subMenuIconHoverBorderColor,
    subMenuIconActiveColor,
    subMenuIconActiveBorderColor
  } = attributes;

  // generate Background

  // DROPDOWN_WRAP_BG

  const {
    backgroundStylesDesktop: dropdownWrapBGDesk,
    backgroundStylesTab: dropdownWrapBGTab,
    backgroundStylesMobile: dropdownWrapBGMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.DROPDOWN_WRAP_BG,
    attributes,
    noMainBGImg: false
  });

  // DROPDOWN_WRAP_BORDER

  const {
    desktopBorderStyle: dropdownWrapBorderDesk,
    tabBorderStyle: dropdownWrapBorderTab,
    mobBorderStyle: dropdownWrapBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.DROPDOWN_WRAP_BORDER,
    attributes
  });

  // DROPDOWN_WRAP_BORDER_RADIUS
  const {
    dimensionStylesDesktop: dropdownWrapBorderRadiusDesk,
    dimensionStylesTab: dropdownWrapBorderRadiusTab,
    dimensionStylesMobile: dropdownWrapBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.DROPDOWN_WRAP_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });

  // DROPDOWN_WRAP_PADDING

  const {
    dimensionStylesDesktop: dropdownWrapPaddingDesk,
    dimensionStylesTab: dropdownWrapPaddingTab,
    dimensionStylesMobile: dropdownWrapPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.DROPDOWN_WRAP_PADDING,
    styleFor: 'padding',
    attributes
  });

  // DROPDOWN_WRAP_MARGIN

  const {
    dimensionStylesDesktop: dropdownWrapMarginDesk,
    dimensionStylesTab: dropdownWrapMarginTab,
    dimensionStylesMobile: dropdownWrapMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.DROPDOWN_WRAP_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // DROPDOWN_WRAP_BOX_SHADOW

  const {
    boxShadowStyle: dropdownWrapBoxShadowStyle
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.DROPDOWN_WRAP_BOX_SHADOW,
    attributes
  });

  // DROPDOWN_WIDTH

  const {
    desktopRangeStyle: dropdownSizeDesk,
    tabRangeStyle: dropdownSizeTab,
    mobRangeStyle: dropdownSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.DROPDOWN_WIDTH,
    property: 'min-width',
    attributes
  });

  // Generate Typography
  const {
    typoStylesDesktop: subMenuTypoDesktop,
    typoStylesTab: subMenuTypoTab,
    typoStylesMobile: subMenuTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.SUB_MENU_TYPOGRAPHY,
    defaultFontSize: '',
    attributes
  });

  // SUB_MENU_BG

  const {
    backgroundStylesDesktop: subMenuBGDesk,
    backgroundStylesTab: subMenuBGTab,
    backgroundStylesMobile: subMenuBGMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_BG,
    attributes,
    noMainBGImg: false
  });

  // SUB_MENU_BORDER

  const {
    desktopBorderStyle: subMenuBorderDesk,
    tabBorderStyle: subMenuBorderTab,
    mobBorderStyle: subMenuBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_BORDER,
    attributes
  });

  // SUB_MENU_BORDER_RADIUS
  const {
    dimensionStylesDesktop: subMenuBorderRadiusDesk,
    dimensionStylesTab: subMenuBorderRadiusTab,
    dimensionStylesMobile: subMenuBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });

  // SUB_MENU_PADDING

  const {
    dimensionStylesDesktop: subMenuPaddingDesk,
    dimensionStylesTab: subMenuPaddingTab,
    dimensionStylesMobile: subMenuPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_PADDING,
    styleFor: 'padding',
    attributes
  });

  // SUB_MENU_MARGIN

  const {
    dimensionStylesDesktop: subMenuMarginDesk,
    dimensionStylesTab: subMenuMarginTab,
    dimensionStylesMobile: subMenuMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // SUB_MENU_BOX_SHADOW

  const {
    boxShadowStyle: subMenuBoxShadowStyle
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_BOX_SHADOW,
    attributes
  });

  // SUB_MENU_HOVER_BG
  const {
    backgroundStylesDesktop: subMenuHoverBGDesk,
    backgroundStylesTab: subMenuHoverBGTab,
    backgroundStylesMobile: subMenuHoverBGMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_HOVER_BG,
    attributes,
    noMainBGImg: false
  });

  // SUB_MENU_ACTIVE_BG

  const {
    backgroundStylesDesktop: subMenuActiveBGDesk,
    backgroundStylesTab: subMenuActiveBGTab,
    backgroundStylesMobile: subMenuActiveBGMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_ACTIVE_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    desktopRangeStyle: subMenuIndicatorSizeDesk,
    tabRangeStyle: subMenuIndicatorSizeTab,
    mobRangeStyle: subMenuIndicatorSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_INDICATOR_SIZE,
    property: '--zolo-submenu-arrow-size',
    attributes
  });
  const {
    backgroundStylesDesktop: subMenuIndicatorBGDesk,
    backgroundStylesTab: subMenuIndicatorBGTab,
    backgroundStylesMobile: subMenuIndicatorBGMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_INDICATOR_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    dimensionStylesDesktop: subMenuIndicatorPaddingDesk,
    dimensionStylesTab: subMenuIndicatorPaddingTab,
    dimensionStylesMobile: subMenuIndicatorPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_INDICATOR_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: subMenuIndicatorMarginDesk,
    dimensionStylesTab: subMenuIndicatorMarginTab,
    dimensionStylesMobile: subMenuIndicatorMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_INDICATOR_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    desktopBorderStyle: subMenuIndicatorBorderDesk,
    tabBorderStyle: subMenuIndicatorBorderTab,
    mobBorderStyle: subMenuIndicatorBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_INDICATOR_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: subMenuIndicatorBorderRadiusDesk,
    dimensionStylesTab: subMenuIndicatorBorderRadiusTab,
    dimensionStylesMobile: subMenuIndicatorBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_INDICATOR_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: subMenuIndicatorBoxShadowStyle
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_INDICATOR_BOX_SHADOW,
    attributes
  });
  const {
    backgroundStylesDesktop: subMenuIndicatorHoverBGDesk,
    backgroundStylesTab: subMenuIndicatorHoverBGTab,
    backgroundStylesMobile: subMenuIndicatorHoverBGMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_INDICATOR_HOVER_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    backgroundStylesDesktop: subMenuIndicatorActiveBGDesk,
    backgroundStylesTab: subMenuIndicatorActiveBGTab,
    backgroundStylesMobile: subMenuIndicatorActiveBGMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUB_MENU_INDICATOR_ACTIVE_BG,
    attributes,
    noMainBGImg: false
  });

  /**
   * All Style Combination
   */
  const desktopAllStyle = `

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .wp-block-zolo-navigation-submenu,
        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .wp-block-zolo-megamenu {
            ${dropdownWrapBGDesk}
            ${dropdownWrapBorderDesk}
            ${dropdownWrapBorderRadiusDesk}
            ${dropdownWrapPaddingDesk}
            ${dropdownWrapMarginDesk}
            ${dropdownWrapBoxShadowStyle}
            ${dropdownSizeDesk}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item {
            ${subMenuMarginDesk}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item a{
            color: ${subMenuTextColor ? subMenuTextColor : ''};
            ${subMenuTypoDesktop}
            ${subMenuBGDesk}
            ${subMenuBorderDesk}
            ${subMenuBorderRadiusDesk}
            ${subMenuPaddingDesk}
            ${subMenuBoxShadowStyle}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item a:hover{
            color: ${subMenuTextHoverColor ? subMenuTextHoverColor : ''};
            ${subMenuHoverBGDesk}
            border-color: ${subMenuBorderHoverColor ? subMenuBorderHoverColor : ''};
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item.active a{
            color: ${subMenuTextActiveColor ? subMenuTextActiveColor : ''};
            ${subMenuActiveBGDesk}
            border-color: ${subMenuBorderActiveColor ? subMenuBorderActiveColor : ''};
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper .zolo-navigation-item .zolo-navigation-link .zolo-submenu-arrow {
            ${subMenuIndicatorBGDesk}
            ${subMenuIndicatorPaddingDesk}
            ${subMenuIndicatorMarginDesk}
            ${subMenuIndicatorBorderDesk}
            ${subMenuIndicatorBorderRadiusDesk}
            ${subMenuIndicatorBoxShadowStyle}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper .zolo-navigation-item .zolo-navigation-link:hover .zolo-submenu-arrow {
            ${subMenuIndicatorHoverBGDesk}
        }
        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper .zolo-navigation-item .zolo-navigation-link.active .zolo-submenu-arrow {
            ${subMenuIndicatorActiveBGDesk}
        }
        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper .zolo-navigation-item .zolo-navigation-link .zolo-submenu-arrow svg{
           ${subMenuIndicatorSizeDesk};
            fill: ${subMenuIconColor ? subMenuIconColor : ''};
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper .zolo-navigation-item .zolo-navigation-link:hover .zolo-submenu-arrow svg{
            fill: ${subMenuIconHoverColor ? subMenuIconHoverColor : ''};
            border-color: ${subMenuIconHoverBorderColor ? subMenuIconHoverBorderColor : ''};
            ${subMenuIndicatorHoverBGDesk}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper .zolo-navigation-item .zolo-navigation-link.active .zolo-submenu-arrow svg{
            fill: ${subMenuIconActiveColor ? subMenuIconActiveColor : ''};
            border-color: ${subMenuIconActiveBorderColor ? subMenuIconActiveBorderColor : ''};
            ${subMenuIndicatorActiveBGDesk}
        }

	`;
  const tabletAllStyle = `

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .wp-block-zolo-navigation-submenu,
        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .wp-block-zolo-megamenu {
            ${dropdownWrapBGTab}
            ${dropdownWrapBorderTab}
            ${dropdownWrapBorderRadiusTab}
            ${dropdownWrapPaddingTab}
            ${dropdownWrapMarginTab}
            ${dropdownSizeTab}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item{
            ${subMenuMarginTab}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item a{
            ${subMenuTypoTab}
            ${subMenuBGTab}
            ${subMenuBorderTab}
            ${subMenuBorderRadiusTab}
            ${subMenuPaddingTab}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item a:hover{
            ${subMenuHoverBGTab}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item  .zolo-navigation-submenu-wrapper .zolo-navigation-item.active a{
            ${subMenuActiveBGTab}
        }

         .zolo-block.wp-block-zolo-navigation .zolo-navigation-wrapper .${uniqueId}.zolo-navigation-item .zolo-navigation-link .zolo-submenu-arrow {
            ${subMenuIndicatorBGTab}
            ${subMenuIndicatorPaddingTab}
            ${subMenuIndicatorMarginTab}
            ${subMenuIndicatorBorderTab}
            ${subMenuIndicatorBorderRadiusTab}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-wrapper .${uniqueId}.zolo-navigation-item .zolo-navigation-link:hover .zolo-submenu-arrow {
            ${subMenuIndicatorHoverBGTab}
        }
        .zolo-block.wp-block-zolo-navigation .zolo-navigation-wrapper .${uniqueId}.zolo-navigation-item .zolo-navigation-link.active .zolo-submenu-arrow {
            ${subMenuIndicatorActiveBGTab}
        }

  	`;
  const mobileAllStyle = `

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .wp-block-zolo-navigation-submenu,
        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .wp-block-zolo-megamenu {
            ${dropdownWrapBGMob}
            ${dropdownWrapBorderMob}
            ${dropdownWrapBorderRadiusMob}
            ${dropdownWrapPaddingMob}
            ${dropdownWrapMarginMob}
            ${dropdownSizeMob}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item  .zolo-navigation-submenu-wrapper .zolo-navigation-item {
            ${subMenuMarginMob}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item a{
            ${subMenuTypoMob}
            ${subMenuBGMob}
            ${subMenuBorderMob}
            ${subMenuBorderRadiusMob}
            ${subMenuPaddingMob}
        }

        .wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item a:hover{
            ${subMenuHoverBGMob}
        }

        .wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item.active a{
            ${subMenuActiveBGMob}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-wrapper .${uniqueId}.zolo-navigation-item .zolo-navigation-link .zolo-submenu-arrow {
            ${subMenuIndicatorBGMob}
            ${subMenuIndicatorPaddingMob}
            ${subMenuIndicatorMarginMob}
            ${subMenuIndicatorBorderMob}
            ${subMenuIndicatorBorderRadiusMob}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-wrapper .${uniqueId}.zolo-navigation-item .zolo-navigation-link:hover .zolo-submenu-arrow {
            ${subMenuIndicatorHoverBGMob}
        }
        .zolo-block.wp-block-zolo-navigation .zolo-navigation-wrapper .${uniqueId}.zolo-navigation-item .zolo-navigation-link.active .zolo-submenu-arrow {
            ${subMenuIndicatorActiveBGMob}
        }
  	`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.navigation.desktopAllStyle', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.navigation.tabletAllStyle', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.navigation.mobileAllStyle', mobileAllStyle, props)
    })
  });
}

/***/ }),

/***/ "./src/blocks/navigation-item/utils/remove-link.js":
/*!*********************************************************!*\
  !*** ./src/blocks/navigation-item/utils/remove-link.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeLink)
/* harmony export */ });
function removeLink(setAttributes, setIsLinkOpen) {
  setAttributes({
    url: undefined,
    label: undefined,
    id: undefined,
    kind: undefined,
    type: undefined,
    opensInNewTab: false
  });

  // Close the link editing UI.
  setIsLinkOpen(false);
}

/***/ }),

/***/ "./src/blocks/navigation-item/utils/update-attributes.js":
/*!***************************************************************!*\
  !*** ./src/blocks/navigation-item/utils/update-attributes.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateAttributes: () => (/* binding */ updateAttributes)
/* harmony export */ });
/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/escape-html */ "@wordpress/escape-html");
/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);


const updateAttributes = (updatedValue = {}, setAttributes, blockAttributes = {}) => {
  const {
    label: originalLabel = '',
    kind: originalKind = '',
    type: originalType = ''
  } = blockAttributes;
  const {
    title: newLabel = '',
    // the title of any provided Post.
    url: newUrl = '',
    opensInNewTab,
    id,
    kind: newKind = originalKind,
    type: newType = originalType
  } = updatedValue;
  const newLabelWithoutHttp = newLabel.replace(/http(s?):\/\//gi, '');
  const newUrlWithoutHttp = newUrl.replace(/http(s?):\/\//gi, '');
  const useNewLabel = newLabel && newLabel !== originalLabel && newLabelWithoutHttp !== newUrlWithoutHttp;
  const label = useNewLabel ? (0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_0__.escapeHTML)(newLabel) : originalLabel || (0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_0__.escapeHTML)(newUrlWithoutHttp);
  const type = newType === 'post_tag' ? 'tag' : newType.replace('-', '_');
  const isBuiltInType = ['post', 'page', 'tag', 'category'].indexOf(type) > -1;
  const isCustomLink = !newKind && !isBuiltInType || newKind === 'custom';
  const kind = isCustomLink ? 'custom' : newKind;
  setAttributes({
    ...(newUrl && {
      url: encodeURI((0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.safeDecodeURI)(newUrl))
    }),
    ...(label && {
      label
    }),
    ...(undefined !== opensInNewTab && {
      opensInNewTab
    }),
    ...(id && Number.isInteger(id) && {
      id
    }),
    ...(kind && {
      kind
    }),
    ...(type && type !== 'URL' && {
      type
    })
  });
};

/***/ }),

/***/ "./src/blocks/navigation-item/utils/use-invalid-link.js":
/*!**************************************************************!*\
  !*** ./src/blocks/navigation-item/utils/use-invalid-link.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);


const useIsInvalidLink = (kind, type, id) => {
  const isPostType = kind === 'post-type' || type === 'post' || type === 'page';
  const hasId = Number.isInteger(id);
  const postStatus = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    if (!isPostType) {
      return null;
    }
    const {
      getEntityRecord
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
    return getEntityRecord('postType', type, id)?.status;
  }, [isPostType, type, id]);
  const isInvalid = isPostType && hasId && postStatus && 'trash' === postStatus;
  const isDraft = 'draft' === postStatus;
  return [isInvalid, isDraft];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsInvalidLink);

/***/ }),

/***/ "./src/blocks/navigation-item/style.scss":
/*!***********************************************!*\
  !*** ./src/blocks/navigation-item/style.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom":
/*!*****************************!*\
  !*** external ["wp","dom"] ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["dom"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/escape-html":
/*!************************************!*\
  !*** external ["wp","escapeHtml"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["escapeHtml"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/navigation-item/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/navigation-item/block.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Navigation Item","name":"zolo/navigation-item","category":"zoloblocks","keywords":["menu","navigation","navigation","dropdown","submenu","subnav","megamenu","mega"],"description":"Build your own navigation menu.","apiVersion":2,"textdomain":"zoloblocks","parent":["zolo/navigation"],"example":{"attributes":{"preview":true},"viewportWidth":400},"supports":{"anchor":false,"align":["wide","full"],"customClassName":false},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/navigation-item/index": 0,
/******/ 			"blocks/navigation-item/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkzoloblocks"] = globalThis["webpackChunkzoloblocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/navigation-item/style-index"], () => (__webpack_require__("./src/blocks/navigation-item/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map