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

/***/ "./src/blocks/navigation-submenu/attributes.js":
/*!*****************************************************!*\
  !*** ./src/blocks/navigation-submenu/attributes.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/navigation-submenu/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/navigation-submenu/constants/typoPrefixConstant.js");
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
  // Typography
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__)),
  subMenuTextColor: {
    type: 'string'
  },
  subMenuTextHoverColor: {
    type: 'string'
  },
  subMenuTextActiveColor: {
    type: 'string'
  },
  subMenuBorderHoverColor: {
    type: 'string'
  },
  subMenuBorderActiveColor: {
    type: 'string'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/navigation-submenu/constants/index.js":
/*!**********************************************************!*\
  !*** ./src/blocks/navigation-submenu/constants/index.js ***!
  \**********************************************************/
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
const BLOCK_PREFIX = 'navigation-submenu';
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

/***/ "./src/blocks/navigation-submenu/constants/typoPrefixConstant.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/navigation-submenu/constants/typoPrefixConstant.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D_SUB_MENU_TYPOGRAPHY: () => (/* binding */ D_SUB_MENU_TYPOGRAPHY)
/* harmony export */ });
// Main meunu Typography
// export const MENU_TYPOGRAPHY = 'menuTypography';
const D_SUB_MENU_TYPOGRAPHY = 'subMenuTypography';

/***/ }),

/***/ "./src/blocks/navigation-submenu/edit.js":
/*!***********************************************!*\
  !*** ./src/blocks/navigation-submenu/edit.js ***!
  \***********************************************/
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
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/navigation-submenu/style.scss");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/blocks/navigation-submenu/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./src/blocks/navigation-submenu/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









const Edit = props => {
  const {
    attributes,
    clientId,
    context,
    isSelected,
    setAttributes
  } = props;
  const {
    uniqueId,
    preview,
    resMode
  } = attributes;
  const {
    menuBreakpoint = null
  } = context;
  const {
    replaceInnerBlocks,
    selectBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)('core/block-editor');
  const {
    getBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)('core/block-editor');

  //block wrapper class
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(uniqueId)
  });
  const innerBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('zolo-navigation-submenu-items')
  }, {
    allowedBlocks: ['zolo/navigation-item'],
    renderAppender: false
  });

  // preview image
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: zoloParams.blocksPreview.heading,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Submenu Preview', 'zoloblocks')
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("ul", {
        ...innerBlockProps
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
        className: "zolo-navigation-submenu-add-btn",
        onClick: () => {
          const navigationItem = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('zolo/navigation-item', {});
          const innerBlocks = getBlock(clientId)?.innerBlocks;
          (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlocksFromInnerBlocksTemplate)([navigationItem]);
          replaceInnerBlocks(clientId, [...innerBlocks, navigationItem]);
          selectBlock(navigationItem?.clientId);
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Menu Item', 'zoloblocks')
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/navigation-submenu/index.js":
/*!************************************************!*\
  !*** ./src/blocks/navigation-submenu/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/navigation-submenu/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/navigation-submenu/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/navigation-submenu/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/navigation-submenu/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/navigation-submenu/style.scss");





const {
  BlockIcons
} = window.zoloIcons;

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  icon: {
    src: BlockIcons['navigation-submenu']
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  usesContext: ['menuBreakpoint']
});

/***/ }),

/***/ "./src/blocks/navigation-submenu/inspector.js":
/*!****************************************************!*\
  !*** ./src/blocks/navigation-submenu/inspector.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/navigation-submenu/attributes.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/blocks/navigation-submenu/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/navigation-submenu/constants/typoPrefixConstant.js");
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
    subMenuBorderActiveColor
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HeaderTabs, {
      block: "zolo/navigation-submenu",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General', 'zoloblocks'),
          panelProps: props,
          firstOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "zolo-custom-heading",
            style: {
              border: 0,
              paddingTop: 0
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Width', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.DROPDOWN_WIDTH,
            requiredProps: requiredProps,
            min: 0,
            max: 500,
            step: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardDivider, {})]
        })
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Wrapper', 'zoloblocks'),
          panelProps: props,
          firstOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.DROPDOWN_WRAP_BG,
            noMainBGImg: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.DROPDOWN_WRAP_PADDING,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.DROPDOWN_WRAP_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.DROPDOWN_WRAP_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BoxShadowControl, {
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.DROPDOWN_WRAP_BOX_SHADOW,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.DROPDOWN_WRAP_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Menu', 'zoloblocks'),
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabPanelControl, {
            options: _constants__WEBPACK_IMPORTED_MODULE_4__.TAB_STATES,
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'zoloblocks'),
                color: subMenuTextColor,
                onChange: value => setAttributes({
                  subMenuTextColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.D_SUB_MENU_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 36
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.SUB_MENU_BG,
                noMainBGImg: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.SUB_MENU_PADDING,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.SUB_MENU_MARGIN,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.SUB_MENU_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.SUB_MENU_BOX_SHADOW,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.SUB_MENU_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'zoloblocks'),
                color: subMenuTextHoverColor,
                onChange: value => setAttributes({
                  subMenuTextHoverColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.SUB_MENU_HOVER_BG,
                noMainBGImg: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Color', 'zoloblocks'),
                color: subMenuBorderHoverColor,
                onChange: value => setAttributes({
                  subMenuBorderHoverColor: value
                })
              })]
            }),
            activeComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'zoloblocks'),
                color: subMenuTextActiveColor,
                onChange: value => setAttributes({
                  subMenuTextActiveColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.SUB_MENU_ACTIVE_BG,
                noMainBGImg: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Color', 'zoloblocks'),
                color: subMenuBorderActiveColor,
                onChange: value => setAttributes({
                  subMenuBorderActiveColor: value
                })
              })]
            })
          })
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps,
          block: "zolo/navigation-submenu"
        })
      })
    })
  }, "controls");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/navigation-submenu/save.js":
/*!***********************************************!*\
  !*** ./src/blocks/navigation-submenu/save.js ***!
  \***********************************************/
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



const Save = props => {
  const {
    attributes
  } = props;
  const {
    uniqueId
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(uniqueId)
  });
  const innerBlockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('zolo-navigation-submenu-items')
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
      ...innerBlockProps
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/navigation-submenu/style.js":
/*!************************************************!*\
  !*** ./src/blocks/navigation-submenu/style.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/blocks/navigation-submenu/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/navigation-submenu/constants/typoPrefixConstant.js");
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
    uniqueId,
    subMenuTextColor,
    subMenuTextHoverColor,
    subMenuTextActiveColor,
    subMenuBorderHoverColor,
    subMenuBorderActiveColor
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

  // Generate Typography
  const {
    typoStylesDesktop: subMenuTypoDesktop,
    typoStylesTab: subMenuTypoTab,
    typoStylesMobile: subMenuTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.D_SUB_MENU_TYPOGRAPHY,
    defaultFontSize: '',
    attributes
  });

  /**
   * All Style Combination
   */
  const desktopAllStyle = `

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu {
            ${dropdownWrapBGDesk}
            ${dropdownWrapBorderDesk}
            ${dropdownWrapBorderRadiusDesk}
            ${dropdownWrapPaddingDesk}
            ${dropdownWrapMarginDesk}
            ${dropdownWrapBoxShadowStyle}
            ${dropdownSizeDesk}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-item {
            ${subMenuMarginDesk}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-link {
            color: ${subMenuTextColor ? subMenuTextColor : ''};
            ${subMenuTypoDesktop}
            ${subMenuBGDesk}
            ${subMenuBorderDesk}
            ${subMenuBorderRadiusDesk}
            ${subMenuPaddingDesk}
            ${subMenuBoxShadowStyle}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-link:hover {
             color: ${subMenuTextHoverColor ? subMenuTextHoverColor : ''};
            ${subMenuHoverBGDesk}
            border-color: ${subMenuBorderHoverColor ? subMenuBorderHoverColor : ''};
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-item.current-item .zolo-navigation-link {
            color: ${subMenuTextActiveColor ? subMenuTextActiveColor : ''};
            ${subMenuActiveBGDesk}
            border-color: ${subMenuBorderActiveColor ? subMenuBorderActiveColor : ''};
        }

	`;
  const tabletAllStyle = `

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu  {
            ${dropdownWrapBGTab}
            ${dropdownWrapBorderTab}
            ${dropdownWrapBorderRadiusTab}
            ${dropdownWrapPaddingTab}
            ${dropdownWrapMarginTab}
            ${dropdownSizeTab}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-item {
            ${subMenuMarginTab}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-link {
            ${subMenuTypoTab}
            ${subMenuBGTab}
            ${subMenuBorderTab}
            ${subMenuBorderRadiusTab}
            ${subMenuPaddingTab}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-link:hover {
            ${subMenuHoverBGTab}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-item.current-item .zolo-navigation-link  {
            ${subMenuActiveBGTab}
        }

  	`;
  const mobileAllStyle = `

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu  {
            ${dropdownWrapBGMob}
            ${dropdownWrapBorderMob}
            ${dropdownWrapBorderRadiusMob}
            ${dropdownWrapPaddingMob}
            ${dropdownWrapMarginMob}
            ${dropdownSizeMob}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-item {
            ${subMenuMarginMob}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-link {
            ${subMenuTypoMob}
            ${subMenuBGMob}
            ${subMenuBorderMob}
            ${subMenuBorderRadiusMob}
            ${subMenuPaddingMob}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-link:hover {
            ${subMenuHoverBGMob}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-item.current-item .zolo-navigation-link {
            ${subMenuActiveBGMob}
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

/***/ "./src/blocks/navigation-submenu/style.scss":
/*!**************************************************!*\
  !*** ./src/blocks/navigation-submenu/style.scss ***!
  \**************************************************/
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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

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

/***/ "./src/blocks/navigation-submenu/block.json":
/*!**************************************************!*\
  !*** ./src/blocks/navigation-submenu/block.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Submenu","name":"zolo/navigation-submenu","category":"zoloblocks","keywords":["menu","navigation","navigation","dropdown","submenu","subnav","megamenu","mega"],"description":"Build your own navigation menu.","apiVersion":2,"textdomain":"zoloblocks","parent":["zolo/navigation-item"],"example":{"attributes":{"preview":true},"viewportWidth":400},"supports":{"anchor":false,"align":["wide","full"],"customClassName":false},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 			"blocks/navigation-submenu/index": 0,
/******/ 			"blocks/navigation-submenu/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/navigation-submenu/style-index"], () => (__webpack_require__("./src/blocks/navigation-submenu/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map