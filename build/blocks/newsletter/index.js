/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/newsletter/attributes.js":
/*!*********************************************!*\
  !*** ./src/blocks/newsletter/attributes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/newsletter/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/newsletter/constants/typoPrefixConstant.js");
/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateNormalBGAttributes,
  generateBoxShadowAttributies,
  generateTypographyAttributes,
  generateResAlignmentAttributies
} = window.zoloModule;


const attributes = {
  globalConfig: {
    type: 'object',
    default: {
      margin: {
        prefix: 'advBtnMargin'
      },
      padding: {
        prefix: 'advBtnPadding'
      },
      background: {
        prefix: 'advBtnBg'
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
  // Button Generators
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_BORDER),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.MSG_BORDER),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.LABEL_BORDER),
  // typography
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__)),
  // title
  // description

  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.LABEL_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.MSG_BORDER_RADIUS),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUCCESS_MSG_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MSG_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUBSCRIBED_MSG_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.LABEL_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.LABEL_HOVER_BG_COLOR),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.INPUT_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_HOVER_BG_COLOR),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_BOX_SHADOW),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_HOVER_BOX_SHADOW),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FIELD_BOX_SHADOW),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FIELD_FOCUS_BOX_SHADOW),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.MSG_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.MSG_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.LABEL_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.INPUT_PADDING),
  // button icon generator
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_SIZE),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_SIZE),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_SPACING),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.LABEL_SPACING),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.LABEL_BOTTOM_SPACING),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FOCUS_BORDER_WIDTH),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FOCUS_STYLE_5_BORDER_WIDTH),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FIELD_ICON_SIZE),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FIELD_ICON_SPACING),
  // presets

  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.INPUT_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.INPUT_BORDER_RADIUS),
  //Button Alignment
  ...generateResAlignmentAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_ALIGNMENT),
  //Block specific Attributes
  provider: {
    type: 'string',
    default: 'mailchimp'
  },
  selectedWebhook: {
    type: 'string',
    default: ''
  },
  preset: {
    type: 'string',
    default: 'zolo-newsletter-1'
  },
  focusStyle: {
    type: 'string',
    default: 'zolo-focus-style-1'
  },
  namePlaceholder: {
    type: 'string',
    default: 'type name here'
  },
  placeholder: {
    type: 'string',
    default: 'type email here'
  },
  buttonType: {
    type: 'string',
    default: 'text'
  },
  buttonIcon: {
    type: 'string',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>'
  },
  showButtonText: {
    type: 'boolean',
    default: true
  },
  showIcon: {
    type: 'boolean',
    default: true
  },
  showFieldIcon: {
    type: 'boolean',
    default: true
  },
  showLabels: {
    type: 'boolean',
    default: true
  },
  buttonText: {
    type: 'string',
    default: 'SUBSCRIBE'
  },
  showNameField: {
    type: 'boolean',
    default: false
  },
  labelName: {
    type: 'string',
    default: 'Name'
  },
  showLabel: {
    type: 'boolean',
    default: false
  },
  labelText: {
    type: 'string',
    default: 'Email'
  },
  labelColor: {
    type: 'string',
    default: ''
  },
  labelTextHoverColor: {
    type: 'string',
    default: ''
  },
  btnTextColor: {
    type: 'string',
    default: ''
  },
  successTextColor: {
    type: 'string',
    default: ''
  },
  errorTextColor: {
    type: 'string',
    default: ''
  },
  subscribedTextColor: {
    type: 'string',
    default: ''
  },
  btnTextHoverColor: {
    type: 'string',
    default: ''
  },
  inputColor: {
    type: 'string',
    default: ''
  },
  focusColor: {
    type: 'string',
    default: ''
  },
  focusStyle5Color: {
    type: 'string',
    default: ''
  },
  iconColor: {
    type: 'string',
    default: ''
  },
  iconHoverColor: {
    type: 'string',
    default: ''
  },
  placeholderColor: {
    type: 'string',
    default: ''
  },
  btnLayoutType: {
    type: 'string',
    default: 'zolo-newsletter-button-style-1'
  },
  labelBorderHoverColor: {
    type: 'string',
    default: ''
  },
  btnBorderHoverColor: {
    type: 'string',
    default: ''
  },
  showMessage: {
    type: 'boolean',
    default: false
  },
  textSuccess: {
    type: 'string',
    default: 'Thank you for subscribing!'
  },
  textSubscribed: {
    type: 'string',
    default: "You're already subscribed with us!"
  },
  textError: {
    type: 'string',
    default: "OOps, someting wrong, Can't process your request"
  },
  btnWType: {
    type: 'string',
    default: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/newsletter/constants/index.js":
/*!**************************************************!*\
  !*** ./src/blocks/newsletter/constants/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   BUTTON_ALIGNMENT: () => (/* binding */ BUTTON_ALIGNMENT),
/* harmony export */   BUTTON_BG: () => (/* binding */ BUTTON_BG),
/* harmony export */   BUTTON_BORDER: () => (/* binding */ BUTTON_BORDER),
/* harmony export */   BUTTON_BORDER_RADIUS: () => (/* binding */ BUTTON_BORDER_RADIUS),
/* harmony export */   BUTTON_BOX_SHADOW: () => (/* binding */ BUTTON_BOX_SHADOW),
/* harmony export */   BUTTON_FLEX_ALIGN: () => (/* binding */ BUTTON_FLEX_ALIGN),
/* harmony export */   BUTTON_HOVER_BG_COLOR: () => (/* binding */ BUTTON_HOVER_BG_COLOR),
/* harmony export */   BUTTON_HOVER_BOX_SHADOW: () => (/* binding */ BUTTON_HOVER_BOX_SHADOW),
/* harmony export */   BUTTON_LAYOUT_TYPES: () => (/* binding */ BUTTON_LAYOUT_TYPES),
/* harmony export */   BUTTON_PADDING: () => (/* binding */ BUTTON_PADDING),
/* harmony export */   BUTTON_SIZE: () => (/* binding */ BUTTON_SIZE),
/* harmony export */   BUTTON_SPACING: () => (/* binding */ BUTTON_SPACING),
/* harmony export */   BUTTON_TYPES: () => (/* binding */ BUTTON_TYPES),
/* harmony export */   ERROR_MSG_BG: () => (/* binding */ ERROR_MSG_BG),
/* harmony export */   FIELD_BOX_SHADOW: () => (/* binding */ FIELD_BOX_SHADOW),
/* harmony export */   FIELD_FOCUS_BOX_SHADOW: () => (/* binding */ FIELD_FOCUS_BOX_SHADOW),
/* harmony export */   FIELD_ICON_SIZE: () => (/* binding */ FIELD_ICON_SIZE),
/* harmony export */   FIELD_ICON_SPACING: () => (/* binding */ FIELD_ICON_SPACING),
/* harmony export */   FOCUS_BORDER_WIDTH: () => (/* binding */ FOCUS_BORDER_WIDTH),
/* harmony export */   FOCUS_STYLE: () => (/* binding */ FOCUS_STYLE),
/* harmony export */   FOCUS_STYLE_5_BORDER_WIDTH: () => (/* binding */ FOCUS_STYLE_5_BORDER_WIDTH),
/* harmony export */   ICON_SIZE: () => (/* binding */ ICON_SIZE),
/* harmony export */   INPUT_BG: () => (/* binding */ INPUT_BG),
/* harmony export */   INPUT_BORDER: () => (/* binding */ INPUT_BORDER),
/* harmony export */   INPUT_BORDER_RADIUS: () => (/* binding */ INPUT_BORDER_RADIUS),
/* harmony export */   INPUT_PADDING: () => (/* binding */ INPUT_PADDING),
/* harmony export */   LABEL_BG: () => (/* binding */ LABEL_BG),
/* harmony export */   LABEL_BORDER: () => (/* binding */ LABEL_BORDER),
/* harmony export */   LABEL_BORDER_RADIUS: () => (/* binding */ LABEL_BORDER_RADIUS),
/* harmony export */   LABEL_BOTTOM_SPACING: () => (/* binding */ LABEL_BOTTOM_SPACING),
/* harmony export */   LABEL_HOVER_BG_COLOR: () => (/* binding */ LABEL_HOVER_BG_COLOR),
/* harmony export */   LABEL_PADDING: () => (/* binding */ LABEL_PADDING),
/* harmony export */   LABEL_SPACING: () => (/* binding */ LABEL_SPACING),
/* harmony export */   MSG_BORDER: () => (/* binding */ MSG_BORDER),
/* harmony export */   MSG_BORDER_RADIUS: () => (/* binding */ MSG_BORDER_RADIUS),
/* harmony export */   MSG_MARGIN: () => (/* binding */ MSG_MARGIN),
/* harmony export */   MSG_PADDING: () => (/* binding */ MSG_PADDING),
/* harmony export */   PRESETS: () => (/* binding */ PRESETS),
/* harmony export */   SUBSCRIBED_MSG_BG: () => (/* binding */ SUBSCRIBED_MSG_BG),
/* harmony export */   SUCCESS_MSG_BG: () => (/* binding */ SUCCESS_MSG_BG)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


// Block Prefix

const BLOCK_PREFIX = 'newsletter';
// Presets
const PRESETS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preset 1', 'zoloblocks'),
  value: 'zolo-newsletter-1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preset 2', 'zoloblocks'),
  value: 'zolo-newsletter-2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preset 3', 'zoloblocks'),
  value: 'zolo-newsletter-3'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preset 4', 'zoloblocks'),
  value: 'zolo-newsletter-4'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preset 5 (Pro)', 'zoloblocks'),
  value: 'zolo-newsletter-5',
  disabled: true
}];
const FOCUS_STYLE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 1', 'zoloblocks'),
  value: 'zolo-focus-style-1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 2', 'zoloblocks'),
  value: 'zolo-focus-style-2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 3', 'zoloblocks'),
  value: 'zolo-focus-style-3'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 4', 'zoloblocks'),
  value: 'zolo-focus-style-4'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 5', 'zoloblocks'),
  value: 'zolo-focus-style-5'
}];
const BUTTON_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text', 'zoloblocks'),
  value: 'text'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'zoloblocks'),
  value: 'icon'
}];
const BUTTON_LAYOUT_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 1', 'zoloblocks'),
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M28.9079 10.6666H21.6279C21.0248 10.6666 20.5359 11.1322 20.5359 11.7066V21.2133C20.5359 21.7877 21.0248 22.2533 21.6279 22.2533H28.9079C29.511 22.2533 29.9999 21.7877 29.9999 21.2133V11.7066C29.9999 11.1322 29.511 10.6666 28.9079 10.6666Z",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15.608 10.6666H3.106C2.49517 10.6666 2 11.1382 2 11.72V21.2C2 21.7817 2.49517 22.2533 3.106 22.2533H15.608C16.2188 22.2533 16.714 21.7817 16.714 21.2V11.72C16.714 11.1382 16.2188 10.6666 15.608 10.6666Z",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M24.2041 16.4666H26.3321",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  }),
  value: 'zolo-newsletter-button-style-1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 2', 'zoloblocks'),
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M28.558 10H3.442C2.64561 10 2 10.6149 2 11.3733V20.2133C2 20.9718 2.64561 21.5867 3.442 21.5867H28.558C29.3544 21.5867 30 20.9718 30 20.2133V11.3733C30 10.6149 29.3544 10 28.558 10Z",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M19.262 20.9334V10.6667",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M23.9599 16.5867C24.8533 16.5867 25.5866 15.8667 25.5866 14.96C25.5866 14.0534 24.8666 13.3334 23.9599 13.3334C23.0533 13.3334 22.3333 14.0534 22.3333 14.96C22.3333 15.8667 23.0533 16.5867 23.9599 16.5867Z",
      stroke: "#4D4D4D",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M26.5735 17.5733L25.1201 16.12",
      stroke: "#4D4D4D",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  }),
  value: 'zolo-newsletter-button-style-2'
}];
const BUTTON_FLEX_ALIGN = [{
  label: 'Flex Start',
  value: 'flex-start',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M4 2V22",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: 8,
      y: 8,
      width: 12,
      height: 8,
      rx: 1,
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}, {
  label: 'Center',
  value: 'center',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12 2L12 8",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12 16L12 22",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: 4,
      y: 8,
      width: 16,
      height: 8,
      rx: 1,
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}, {
  label: 'Flex End',
  value: 'flex-end',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M20 2V22",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: 4,
      y: 8,
      width: 12,
      height: 8,
      rx: 1,
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}];
const BUTTON_BG = 'buttonBg';
const BUTTON_HOVER_BG_COLOR = 'buttonHover';
const BUTTON_PADDING = 'buttonPadding';
const MSG_PADDING = 'msgPadding';
const MSG_MARGIN = 'msgMargin';
const BUTTON_SPACING = 'buttonSpacing';
const BUTTON_ALIGNMENT = 'buttonAlignment';
const BUTTON_BORDER = 'buttonBorder';
const BUTTON_BORDER_RADIUS = 'buttonBorderRadius';
const MSG_BORDER = 'msgBorder';
const MSG_BORDER_RADIUS = 'msgBorderRadius';
const SUCCESS_MSG_BG = 'successMsgBg';
const ERROR_MSG_BG = 'errorMsgBg';
const SUBSCRIBED_MSG_BG = 'subscribedMsgBg';
const BUTTON_BOX_SHADOW = 'buttonBoxShadow';
const BUTTON_HOVER_BOX_SHADOW = 'buttonHoverBoxShadow';
const FIELD_BOX_SHADOW = 'fieldBoxShadow';
const FIELD_FOCUS_BOX_SHADOW = 'fieldHoverBoxShadow';

/**
 * Button Icon
 */

const ICON_SIZE = 'iconSize';
const BUTTON_SIZE = 'buttonSize';
const FOCUS_BORDER_WIDTH = 'focusBorderWidth';
const FOCUS_STYLE_5_BORDER_WIDTH = 'focusStyle5BorderWidth';
const FIELD_ICON_SIZE = 'fieldIconSize';
const FIELD_ICON_SPACING = 'fieldIconSpacing';

// newsletter label

const LABEL_BORDER = 'labelBorder';
const LABEL_BORDER_RADIUS = 'labelBorderRadius';
const LABEL_PADDING = 'labelPadding';
const LABEL_BG = 'labelBg';
const LABEL_SPACING = 'labelSpacing';
const LABEL_BOTTOM_SPACING = 'labelBottomSpacing';
const LABEL_HOVER_BG_COLOR = 'labelHoverBgColor';

/**
 * Presets Styles
 */

const INPUT_BORDER = 'inputBorder';
const INPUT_BORDER_RADIUS = 'inputBorderRadius';
const INPUT_PADDING = 'inputPadding';
const INPUT_BG = 'inputBg';

/***/ }),

/***/ "./src/blocks/newsletter/constants/typoPrefixConstant.js":
/*!***************************************************************!*\
  !*** ./src/blocks/newsletter/constants/typoPrefixConstant.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BUTTON_TYPOGRAPHY: () => (/* binding */ BUTTON_TYPOGRAPHY),
/* harmony export */   INPUT_TYPOGRAPHY: () => (/* binding */ INPUT_TYPOGRAPHY),
/* harmony export */   LABEL_TYPOGRAPHY: () => (/* binding */ LABEL_TYPOGRAPHY),
/* harmony export */   MESSAGE_TYPOGRAPHY: () => (/* binding */ MESSAGE_TYPOGRAPHY)
/* harmony export */ });
// Button Typography
const LABEL_TYPOGRAPHY = "labelTypography";
const BUTTON_TYPOGRAPHY = "buttonTypography";
const INPUT_TYPOGRAPHY = "inputTypography";
const MESSAGE_TYPOGRAPHY = "messageTypography";

/***/ }),

/***/ "./src/blocks/newsletter/deprecated/index.js":
/*!***************************************************!*\
  !*** ./src/blocks/newsletter/deprecated/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _versions_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./versions/v1 */ "./src/blocks/newsletter/deprecated/versions/v1.js");

const deprecated = [_versions_v1__WEBPACK_IMPORTED_MODULE_0__["default"]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/blocks/newsletter/deprecated/versions/v1.js":
/*!*********************************************************!*\
  !*** ./src/blocks/newsletter/deprecated/versions/v1.js ***!
  \*********************************************************/
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
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../attributes */ "./src/blocks/newsletter/attributes.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);




/**
 * Internal Dependencies
 */
const {
  classArrayToStr,
  DisplayZoloIcon
} = window.zoloModule;


const v1 = {
  attributes: {
    ..._attributes__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  save(props) {
    const {
      attributes
    } = props;
    const {
      uniqueId,
      parentClasses,
      preset,
      focusStyle,
      zoloId,
      placeholder,
      buttonType,
      buttonText,
      buttonIcon,
      showLabel,
      labelText,
      btnLayoutType,
      showIcon,
      showFieldIcon,
      showButtonText,
      showNameField,
      namePlaceholder,
      labelName,
      textSuccess,
      textSubscribed,
      textError,
      showLabels
    } = attributes;
    const newsletterMsg = {
      textSuccess,
      textError,
      textSubscribed
    };

    // filter hooks for render
    const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('zolo.blocks.render.hook.after', [], props);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(uniqueId, `zolo-newsletter ${preset}`, classArrayToStr(parentClasses))
      }),
      ...(zoloId && {
        id: zoloId,
        settings: ``
      }),
      children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
        className: `zolo-newsletter-form ${preset} ${preset === 'zolo-newsletter-4' ? btnLayoutType : ''}${preset === 'zolo-newsletter-5' ? focusStyle : ''}`,
        "data-settings": JSON.stringify(newsletterMsg),
        children: [showNameField && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "zolo-form-control",
          role: "tablist",
          children: [preset !== 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
            id: "zolo-newsletter-name-field",
            type: "name",
            name: "name",
            placeholder: namePlaceholder,
            className: "zolo-form-input"
          }), preset === 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "zolo-nl-field-icon-wrap",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                id: "zolo-newsletter-name-field",
                type: "name",
                name: "name",
                placeholder: namePlaceholder,
                className: "zolo-form-input"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                class: "zolo-focus-border",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "zolo-focus-inner"
                })
              }), showFieldIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "zolo-nl-field-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 24,
                  height: 24,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "icon icon-tabler icons-tabler-outline icon-tabler-user",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                    d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                    d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                  })]
                })
              })]
            })
          }), showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
            htmlFor: uniqueId,
            className: "zolo-form-label",
            children: labelName
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "zolo-form-control",
          role: "tablist",
          children: [preset !== 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
            id: "zolo-newsletter-email-field",
            type: "email",
            name: "email",
            placeholder: placeholder,
            className: "zolo-form-input"
          }), preset === 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "zolo-nl-field-icon-wrap",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                id: "zolo-newsletter-email-field",
                type: "email",
                name: "email",
                placeholder: placeholder,
                className: "zolo-form-input"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                class: "zolo-focus-border",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "zolo-focus-inner"
                })
              }), showFieldIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "zolo-nl-field-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 24,
                  height: 24,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "icon icon-tabler icons-tabler-outline icon-tabler-mail",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                    d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                    d: "M3 7l9 6l9 -6"
                  })]
                })
              })]
            })
          }), showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
            htmlFor: uniqueId,
            className: "zolo-form-label",
            children: labelText
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "zolo-form-control zolo-form-submit-btn",
          children: showButtonText || showIcon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            className: "zolo-form-btn",
            type: "submit",
            children: [showButtonText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              tagName: "span",
              className: "zolo-form-btn-text",
              value: buttonText
            }), showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "zolo-newsletter-icon-wrap",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DisplayZoloIcon, {
                icon: buttonIcon
              })
            })]
          }) : null
        })]
      }), renderHookAfter && renderHookAfter]
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);

/***/ }),

/***/ "./src/blocks/newsletter/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/newsletter/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/newsletter/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/blocks/newsletter/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */
const {
  classArrayToStr,
  DisplayZoloIcon,
  SidebarOpener
} = window.zoloModule;



function Edit(props) {
  const {
    attributes,
    setAttributes,
    isSelected,
    clientId
  } = props;
  const {
    preview,
    uniqueId,
    parentClasses,
    preset,
    focusStyle,
    placeholder,
    buttonType,
    buttonIcon,
    buttonText,
    labelText,
    btnLayoutType,
    showButtonText,
    showIcon,
    showFieldIcon,
    showNameField,
    labelName,
    namePlaceholder,
    showMessage,
    textSuccess,
    textSubscribed,
    textError,
    showLabels,
    btnWType
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(uniqueId, `zolo-newsletter ${preset}`, classArrayToStr(parentClasses))
  });

  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.blocks.render.hook.after', [], props);
  // preview image
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
      src: zoloParams.blocksPreview.newsletter,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Newsletter Block Preview', 'zoloblocks')
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      ...blockProps,
      children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SidebarOpener, {
        clientId: clientId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
        className: `zolo-newsletter-form ${preset} ${preset === 'zolo-newsletter-4' ? btnLayoutType : ''}${preset === 'zolo-newsletter-5' ? focusStyle : ''} ${preset !== 'zolo-newsletter-4' ? btnWType : ''}`,
        children: [showNameField && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "zolo-form-control",
          role: "tablist",
          children: [preset !== 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
            id: "zolo-newsletter-name-field",
            type: "name",
            name: "name",
            placeholder: namePlaceholder,
            className: "zolo-form-input"
          }), preset === 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "zolo-nl-field-icon-wrap",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                id: "zolo-newsletter-name-field",
                type: "name",
                name: "name",
                placeholder: namePlaceholder,
                className: "zolo-form-input"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                class: "zolo-focus-border",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "zolo-focus-inner"
                })
              }), showFieldIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "zolo-nl-field-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 24,
                  height: 24,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "icon icon-tabler icons-tabler-outline icon-tabler-user",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                    d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                    d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                  })]
                })
              })]
            })
          }), showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            htmlFor: uniqueId,
            className: "zolo-form-label",
            children: labelName
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "zolo-form-control",
          role: "tablist",
          children: [preset !== 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
            id: "zolo-newsletter-email-field",
            type: "email",
            name: "email",
            placeholder: placeholder,
            className: "zolo-form-input"
          }), preset === 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "zolo-nl-field-icon-wrap",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                id: "zolo-newsletter-email-field",
                type: "email",
                name: "email",
                placeholder: placeholder,
                className: "zolo-form-input"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                class: "zolo-focus-border",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "zolo-focus-inner"
                })
              }), showFieldIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "zolo-nl-field-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 24,
                  height: 24,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "icon icon-tabler icons-tabler-outline icon-tabler-mail",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                    d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                    d: "M3 7l9 6l9 -6"
                  })]
                })
              })]
            })
          }), showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            htmlFor: uniqueId,
            className: "zolo-form-label",
            children: labelText
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "zolo-form-control zolo-form-submit-btn",
          children: showIcon || showButtonText ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            type: "submit",
            className: "zolo-form-btn",
            children: [showButtonText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
              tagName: "span",
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email', 'zolo-newsletter'),
              value: buttonText,
              onChange: value => setAttributes({
                buttonText: value
              }),
              className: "zolo-form-btn-text",
              multiline: false,
              allowedFormats: ['core/bold', 'core/italic', 'core/strikethrough']
            }), showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "zolo-newsletter-icon-wrap",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DisplayZoloIcon, {
                icon: buttonIcon
              })
            })]
          }) : null
        })]
      }), showMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "zolo-newsletter-message",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          class: "zolo-newsletter-info-text status-success",
          children: textSuccess
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          class: "zolo-newsletter-info-text status-warning",
          children: textSubscribed
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          class: "zolo-newsletter-info-text status-error",
          children: textError
        })]
      }), renderHookAfter && renderHookAfter]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/newsletter/index.js":
/*!****************************************!*\
  !*** ./src/blocks/newsletter/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/newsletter/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/newsletter/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/newsletter/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/newsletter/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/newsletter/style.scss");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/newsletter/deprecated/index.js");







const {
  BlockIcons
} = window.zoloIcons;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: BlockIcons['newsletter']
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_6__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/newsletter/inspector.js":
/*!********************************************!*\
  !*** ./src/blocks/newsletter/inspector.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/blocks/newsletter/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/blocks/newsletter/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/newsletter/constants/typoPrefixConstant.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/**
 * WordPress dependencies
 */







/**
 * Internal depencencies
 */
const {
  HeaderTabs,
  ResRangeControl,
  ColorControl,
  BorderControl,
  ResDimensionsControl,
  TypographyDropdown,
  TabPanelControl,
  NormalBGControl,
  BoxShadowControl,
  ZoloIconPicker,
  IconicBtnGroup,
  AdvancedOptions,
  ZoloPanelBody,
  ResAlignmentControl
} = window.zoloModule;




function Inspector(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    preset,
    focusStyle,
    resMode,
    labelText,
    labelName,
    labelColor,
    iconColor,
    fieldIconColor,
    iconHoverColor,
    btnTextColor,
    btnTextHoverColor,
    labelBorderHoverColor,
    btnBorderHoverColor,
    buttonIcon,
    buttonText,
    inputColor,
    focusColor,
    focusStyle5Color,
    placeholderColor,
    placeholder,
    namePlaceholder,
    btnLayoutType,
    showButtonText,
    showIcon,
    showFieldIcon,
    showNameField,
    showLabels,
    textSuccess,
    textSubscribed,
    textError,
    showMessage,
    successTextColor,
    errorTextColor,
    subscribedTextColor,
    labelTextHoverColor,
    provider,
    selectedWebhook,
    btnWType
  } = attributes;

  // const [webhooks, setWebhooks] = useState([]);
  const [labels, setLabels] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  const requiredProps = {
    attributes,
    setAttributes,
    resMode,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"]
  };
  const fetchWebhooks = async () => {
    try {
      const settings = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        path: '/wp/v2/settings'
      });
      const zoloWebhooks = settings.zolo_webhooks || [];
      // Extract labels from the webhooks
      const extractedLabels = zoloWebhooks.map(webhook => webhook.label);
      setLabels(extractedLabels);
      setAttributes({
        selectedWebhook: extractedLabels[0]
      });
    } catch (error) {
      console.error('Error fetching webhooks:', error);
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    fetchWebhooks();
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(delay);
  }, []);
  const validLabels = labels.filter(label => label.trim() !== '');

  // zolo.newsletter.providers;
  const providers = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mailchimp', 'zoloblocks'),
    value: 'newsletter'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Webhook (Pro)', 'zoloblocks'),
    value: 'webhook',
    disabled: true
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HeaderTabs, {
      block: "zolo/newsletter",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'zoloblocks'),
          panelProps: props,
          firstOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Provider', 'zoloblocks'),
            value: provider,
            options: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.newsletter.providers', providers),
            onChange: value => {
              setAttributes({
                provider: value
              });
            }
          }), provider === 'webhook' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: !isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: validLabels.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Webhook', 'zoloblocks'),
                value: selectedWebhook,
                options: validLabels.map(label => ({
                  label,
                  value: label
                })),
                onChange: value => {
                  setAttributes({
                    selectedWebhook: value
                  });
                }
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                className: "zolo-notice-error",
                children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No Webhook URL Found. Please configure the webhook in the', 'zoloblocks'), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
                  href: `${zoloSettings.home_url}/wp-admin/admin.php?page=zoloblocks#webhookSettings`,
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ZoloBlocks settings', 'zoloblocks')
                })]
              })
            }) : null
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Presets', 'zoloblocks'),
            value: preset,
            options: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.advancedNewsletter.presets', _constants__WEBPACK_IMPORTED_MODULE_7__.PRESETS),
            onChange: value => {
              setAttributes({
                preset: value
              });
              if (value === 'zolo-newsletter-5') {
                setAttributes({
                  showLabels: false
                });
              } else if (value === 'zolo-newsletter-1') {
                setAttributes({
                  showLabels: true
                });
              } else {
                setAttributes({
                  showLabels: true
                });
              }
            }
          }), preset === 'zolo-newsletter-4' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "zolo-flex-row-control-tab",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(IconicBtnGroup, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Style', 'zoloblocks'),
              value: btnLayoutType,
              onChange: value => setAttributes({
                btnLayoutType: value
              }),
              options: _constants__WEBPACK_IMPORTED_MODULE_7__.BUTTON_LAYOUT_TYPES
            })
          }), preset !== 'zolo-newsletter-4' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "zolo-flex-row-control-tab",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(IconicBtnGroup, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Width', 'zoloblocks'),
                value: btnWType,
                onChange: value => setAttributes({
                  btnWType: value
                }),
                options: [{
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Full', 'zoloblocks'),
                  value: ''
                }, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto', 'zoloblocks'),
                  value: 'button-auto'
                }]
              })
            }), btnWType === 'button-auto' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResAlignmentControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alignment', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.BUTTON_ALIGNMENT,
              requiredProps: requiredProps,
              alignOptions: _constants__WEBPACK_IMPORTED_MODULE_7__.BUTTON_FLEX_ALIGN
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('show/hide elements', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name Field', 'zoloblocks'),
            checked: showNameField,
            onChange: value => setAttributes({
              showNameField: value
            })
          }), preset === 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Field Icon', 'zoloblocks'),
              checked: showFieldIcon,
              onChange: value => setAttributes({
                showFieldIcon: value
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Text', 'zoloblocks'),
            checked: showButtonText,
            onChange: value => setAttributes({
              showButtonText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks'),
            checked: showIcon,
            onChange: value => setAttributes({
              showIcon: value
            })
          }), (preset === 'zolo-newsletter-1' || preset === 'zolo-newsletter-5') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Labels', 'zoloblocks'),
            checked: showLabels,
            onChange: () => setAttributes({
              showLabels: !showLabels
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'zoloblocks'),
          panelProps: props,
          firstOpen: false,
          children: [showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloIconPicker, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Icon', 'zoloblocks'),
              value: buttonIcon,
              onChange: value => {
                setAttributes({
                  buttonIcon: value
                });
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Labels', 'zoloblocks')
          }), showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [showNameField && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'zoloblocks'),
              value: labelName,
              onChange: value => setAttributes({
                labelName: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email', 'zoloblocks'),
              value: labelText,
              onChange: value => setAttributes({
                labelText: value
              })
            })]
          }), showButtonText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button', 'zoloblocks'),
            value: buttonText,
            onChange: value => setAttributes({
              buttonText: value
            })
          }), (preset === 'zolo-newsletter-1' || preset === 'zolo-newsletter-5') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "zolo-custom-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Placeholders', 'zoloblocks')
            }), showNameField && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'zoloblocks'),
              value: namePlaceholder,
              onChange: value => setAttributes({
                namePlaceholder: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email', 'zoloblocks'),
              value: placeholder,
              onChange: value => setAttributes({
                placeholder: value
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Message', 'zoloblocks'),
          panelProps: props,
          firstOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Message', 'zoloblocks'),
            checked: showMessage,
            onChange: value => setAttributes({
              showMessage: value
            })
          }), showMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Success', 'newsletter-block-gutena'),
              value: textSuccess,
              onChange: value => setAttributes({
                textSuccess: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Warning', 'newsletter-block-gutena'),
              value: textSubscribed,
              onChange: value => setAttributes({
                textSubscribed: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Error', 'newsletter-block-gutena'),
              value: textError,
              onChange: value => setAttributes({
                textError: value
              })
            })]
          })]
        })]
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'zoloblocks'),
            stylePanel: true,
            panelProps: props,
            firstOpen: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TabPanelControl, {
              options: [{
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'zoloblocks'),
                value: 'normal'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Focus', 'zoloblocks'),
                value: 'hover'
              }],
              normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: labelColor,
                  onChange: value => setAttributes({
                    labelColor: value
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                  typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_8__.LABEL_TYPOGRAPHY,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), preset !== 'zolo-newsletter-1' && preset !== 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                    requiredProps: requiredProps,
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.LABEL_BG,
                    noMainBGImg: false
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.LABEL_PADDING,
                    requiredProps: requiredProps,
                    forBorderRadius: false
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BorderControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.LABEL_BORDER,
                    requiredProps: requiredProps,
                    hoverControl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'zoloblocks'),
                      color: labelBorderHoverColor,
                      onChange: value => setAttributes({
                        labelBorderHoverColor: value
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.LABEL_BORDER_RADIUS,
                    requiredProps: requiredProps,
                    forBorderRadius: true
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spacing', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.LABEL_SPACING,
                    requiredProps: requiredProps
                  })]
                }), (preset === 'zolo-newsletter-1' || preset === 'zolo-newsletter-5') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Spacing', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.LABEL_BOTTOM_SPACING,
                  requiredProps: requiredProps
                })]
              }),
              hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: showButtonText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                    color: labelTextHoverColor,
                    onChange: value => setAttributes({
                      labelTextHoverColor: value
                    })
                  }), preset !== 'zolo-newsletter-1' && preset !== 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                    requiredProps: requiredProps,
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.LABEL_HOVER_BG_COLOR,
                    noMainBGImg: false
                  })]
                })
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Field', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          firstOpen: preset === 'zolo-newsletter-5' ? true : false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TabPanelControl, {
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'zoloblocks'),
              value: 'normal'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Focus', 'zoloblocks'),
              value: 'hover'
            }],
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: inputColor,
                onChange: color => setAttributes({
                  inputColor: color
                })
              }), (preset === 'zolo-newsletter-1' || preset === 'zolo-newsletter-5') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Placeholder Color', 'zoloblocks'),
                color: placeholderColor,
                onChange: color => setAttributes({
                  placeholderColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_8__.INPUT_TYPOGRAPHY,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.INPUT_BG,
                noMainBGImg: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.INPUT_PADDING,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.INPUT_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.FIELD_BOX_SHADOW,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.INPUT_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              }), preset === 'zolo-newsletter-5' && showFieldIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "zolo-custom-heading",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: fieldIconColor,
                  onChange: color => setAttributes({
                    fieldIconColor: color
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.FIELD_ICON_SIZE,
                  requiredProps: requiredProps,
                  min: 1,
                  max: 100,
                  step: 1
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spacing', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.FIELD_ICON_SPACING,
                  requiredProps: requiredProps
                })]
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [preset === 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Focus Style', 'zoloblocks'),
                value: focusStyle,
                options: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.advancedNewsletter.focusStyle', _constants__WEBPACK_IMPORTED_MODULE_7__.FOCUS_STYLE),
                onChange: value => setAttributes({
                  focusStyle: value
                })
              }), preset !== 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: focusColor,
                  onChange: color => setAttributes({
                    focusColor: color
                  })
                })
              }), preset === 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: focusStyle5Color,
                  onChange: color => setAttributes({
                    focusStyle5Color: color
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Width', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.FOCUS_STYLE_5_BORDER_WIDTH,
                  requiredProps: requiredProps,
                  min: 1,
                  max: 10,
                  step: 1
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.FIELD_FOCUS_BOX_SHADOW,
                requiredProps: requiredProps
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [showButtonText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: btnTextColor,
                  onChange: value => setAttributes({
                    btnTextColor: value
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                  typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_8__.BUTTON_TYPOGRAPHY,
                  requiredProps: requiredProps,
                  max: 36
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {})]
              }), showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "zolo-custom-heading",
                  style: {
                    border: 0,
                    paddingTop: 0
                  },
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: iconColor,
                  onChange: color => setAttributes({
                    iconColor: color
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.ICON_SIZE,
                  requiredProps: requiredProps,
                  min: 1,
                  max: 100,
                  step: 1
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.BUTTON_BG,
                noMainBGImg: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.BUTTON_PADDING,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.BUTTON_BORDER,
                requiredProps: requiredProps,
                hoverControl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'zoloblocks'),
                  color: btnBorderHoverColor,
                  onChange: value => setAttributes({
                    btnBorderHoverColor: value
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.BUTTON_BOX_SHADOW,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.BUTTON_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              }), btnLayoutType === 'zolo-newsletter-button-style-2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spacing', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.BUTTON_SPACING,
                  requiredProps: requiredProps
                })]
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [showButtonText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: btnTextHoverColor,
                onChange: value => setAttributes({
                  btnTextHoverColor: value
                })
              }), showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'zoloblocks'),
                color: iconHoverColor,
                onChange: color => setAttributes({
                  iconHoverColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.BUTTON_HOVER_BG_COLOR,
                noMainBGImg: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.BUTTON_HOVER_BOX_SHADOW,
                requiredProps: requiredProps,
                enableTransition: true
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Message', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "zolo-custom-heading",
              style: {
                border: 0,
                paddingTop: 0
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Common', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
              typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_8__.MESSAGE_TYPOGRAPHY,
              requiredProps: requiredProps,
              max: 36
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.MSG_PADDING,
              requiredProps: requiredProps,
              forBorderRadius: false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.MSG_MARGIN,
              requiredProps: requiredProps,
              forBorderRadius: false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BorderControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.MSG_BORDER,
              requiredProps: requiredProps,
              hoverControl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'zoloblocks'),
                color: btnBorderHoverColor,
                onChange: value => setAttributes({
                  btnBorderHoverColor: value
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.MSG_BORDER_RADIUS,
              requiredProps: requiredProps,
              forBorderRadius: true
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TabPanelControl, {
              options: [{
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Success', 'zoloblocks'),
                value: 'normal'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Warning', 'zoloblocks'),
                value: 'hover'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Error', 'zoloblocks'),
                value: 'active'
              }],
              normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: successTextColor,
                  onChange: value => setAttributes({
                    successTextColor: value
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                  requiredProps: requiredProps,
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.SUCCESS_MSG_BG,
                  noMainBGImg: false
                })]
              }),
              hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: subscribedTextColor,
                  onChange: value => setAttributes({
                    subscribedTextColor: value
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                  requiredProps: requiredProps,
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.SUBSCRIBED_MSG_BG,
                  noMainBGImg: false
                })]
              }),
              activeComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: errorTextColor,
                  onChange: value => setAttributes({
                    errorTextColor: value
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                  requiredProps: requiredProps,
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR_MSG_BG,
                  noMainBGImg: false
                })]
              })
            })]
          })
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps,
          block: "zolo/newsletter"
        })
      })
    })
  }, "controls");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/newsletter/save.js":
/*!***************************************!*\
  !*** ./src/blocks/newsletter/save.js ***!
  \***************************************/
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
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




/**
 * Internal Dependencies
 */

const {
  classArrayToStr,
  DisplayZoloIcon
} = window.zoloModule;
const Save = props => {
  const {
    attributes
  } = props;
  const {
    uniqueId,
    parentClasses,
    preset,
    focusStyle,
    zoloId,
    placeholder,
    buttonType,
    buttonText,
    buttonIcon,
    showLabel,
    labelText,
    btnLayoutType,
    showIcon,
    showFieldIcon,
    showButtonText,
    showNameField,
    namePlaceholder,
    labelName,
    textSuccess,
    textSubscribed,
    textError,
    showLabels,
    provider,
    selectedWebhook,
    btnWType
  } = attributes;
  const newsletterMsg = {
    textSuccess,
    textError,
    textSubscribed,
    provider: provider ? provider : 'mailchimp',
    selectedWebhook
  };

  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('zolo.blocks.render.hook.after', [], props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(uniqueId, `zolo-newsletter ${preset}`, classArrayToStr(parentClasses))
    }),
    ...(zoloId && {
      id: zoloId,
      settings: ``
    }),
    children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
      className: `zolo-newsletter-form ${preset} ${preset === 'zolo-newsletter-4' ? btnLayoutType : ''}${preset === 'zolo-newsletter-5' ? focusStyle : ''} ${preset !== 'zolo-newsletter-4' ? btnWType : ''}`,
      "data-settings": JSON.stringify(newsletterMsg),
      children: [showNameField && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "zolo-form-control",
        role: "tablist",
        children: [preset !== 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          id: "zolo-newsletter-name-field",
          type: "name",
          name: "name",
          placeholder: namePlaceholder,
          className: "zolo-form-input"
        }), preset === 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "zolo-nl-field-icon-wrap",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              id: "zolo-newsletter-name-field",
              type: "name",
              name: "name",
              placeholder: namePlaceholder,
              className: "zolo-form-input"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              class: "zolo-focus-border",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "zolo-focus-inner"
              })
            }), showFieldIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "zolo-nl-field-icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "icon icon-tabler icons-tabler-outline icon-tabler-user",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                })]
              })
            })]
          })
        }), showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          htmlFor: uniqueId,
          className: "zolo-form-label",
          children: labelName
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "zolo-form-control",
        role: "tablist",
        children: [preset !== 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          id: "zolo-newsletter-email-field",
          type: "email",
          name: "email",
          placeholder: placeholder,
          className: "zolo-form-input"
        }), preset === 'zolo-newsletter-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "zolo-nl-field-icon-wrap",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              id: "zolo-newsletter-email-field",
              type: "email",
              name: "email",
              placeholder: placeholder,
              className: "zolo-form-input"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              class: "zolo-focus-border",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "zolo-focus-inner"
              })
            }), showFieldIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "zolo-nl-field-icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "icon icon-tabler icons-tabler-outline icon-tabler-mail",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  d: "M3 7l9 6l9 -6"
                })]
              })
            })]
          })
        }), showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          htmlFor: uniqueId,
          className: "zolo-form-label",
          children: labelText
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "zolo-form-control zolo-form-submit-btn",
        children: showButtonText || showIcon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          className: "zolo-form-btn",
          type: "submit",
          children: [showButtonText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
            tagName: "span",
            className: "zolo-form-btn-text",
            value: buttonText
          }), showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "zolo-newsletter-icon-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DisplayZoloIcon, {
              icon: buttonIcon
            })
          })]
        }) : null
      })]
    }), renderHookAfter && renderHookAfter]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/newsletter/style.js":
/*!****************************************!*\
  !*** ./src/blocks/newsletter/style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/blocks/newsletter/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/newsletter/constants/typoPrefixConstant.js");
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
  generateResRangeStyle,
  generateBorderStyle,
  generateDimensionStyle,
  generateNormalBGControlStyles,
  generateBoxShadowStyles,
  generateTypographyStyles,
  GlobalStyleHanlder,
  generateResAlignmentStyle
} = window.zoloModule;




function Style({
  props
}) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    preset,
    uniqueId,
    btnTextColor,
    btnTextHoverColor,
    labelTextHoverColor,
    labelBorderHoverColor,
    btnBorderHoverColor,
    labelColor,
    inputColor,
    focusColor,
    focusStyle5Color,
    iconColor,
    fieldIconColor,
    iconHoverColor,
    placeholderColor,
    btnLayoutType,
    successTextColor,
    errorTextColor,
    subscribedTextColor
  } = attributes;

  // title
  const {
    typoStylesDesktop: labelDeskTypo,
    typoStylesTab: labelTabTypo,
    typoStylesMobile: labelMobTypo
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.LABEL_TYPOGRAPHY,
    attributes
  });
  const {
    typoStylesDesktop: inputDeskTypo,
    typoStylesTab: inputTabTypo,
    typoStylesMobile: inputMobTypo
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.INPUT_TYPOGRAPHY,
    attributes
  });
  const {
    typoStylesDesktop: buttonDeskTypo,
    typoStylesTab: buttonTabTypo,
    typoStylesMobile: buttonMobTypo
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.BUTTON_TYPOGRAPHY,
    attributes
  });
  const {
    typoStylesDesktop: msgDeskTypo,
    typoStylesTab: msgTabTypo,
    typoStylesMobile: msgMobTypo
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_TYPOGRAPHY,
    attributes
  });

  // generate Background
  const {
    backgroundStylesDesktop: normalDeskBGStyle,
    backgroundStylesTab: normalTabBGStyle,
    backgroundStylesMobile: normalMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BUTTON_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    backgroundStylesDesktop: successMsgDeskBGStyle,
    backgroundStylesTab: successMsgTabBGStyle,
    backgroundStylesMobile: successMsgMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUCCESS_MSG_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    backgroundStylesDesktop: errorMsgDeskBGStyle,
    backgroundStylesTab: errorMsgTabBGStyle,
    backgroundStylesMobile: errorMsgMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MSG_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    backgroundStylesDesktop: warningMsgDeskBGStyle,
    backgroundStylesTab: warningMsgTabBGStyle,
    backgroundStylesMobile: warningMsgMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.SUBSCRIBED_MSG_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    backgroundStylesDesktop: labelDeskBGStyle,
    backgroundStylesTab: labelTabBGStyle,
    backgroundStylesMobile: labelMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.LABEL_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    backgroundStylesDesktop: inputDeskBGStyle,
    backgroundStylesTab: inputTabBGStyle,
    backgroundStylesMobile: inputMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.INPUT_BG,
    attributes,
    noMainBGImg: false
  });

  // hover background
  const {
    backgroundStylesDesktop: hoverDeskBGStyle,
    backgroundStylesTab: hoverTabBGStyle,
    backgroundStylesMobile: hoverMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BUTTON_HOVER_BG_COLOR,
    attributes,
    noMainBGImg: false
  });
  const {
    backgroundStylesDesktop: labelHoverDeskBGStyle,
    backgroundStylesTab: labelHoverTabBGStyle,
    backgroundStylesMobile: labelHoverMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.LABEL_HOVER_BG_COLOR,
    attributes,
    noMainBGImg: true
  });

  // generate border style
  const {
    desktopBorderStyle: borderStyles,
    tabBorderStyle: borderStylesTab,
    mobBorderStyle: borderStylesMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BUTTON_BORDER,
    attributes
  });
  const {
    desktopBorderStyle: msgBorderStylesDesk,
    tabBorderStyle: msgBorderStylesTab,
    mobBorderStyle: msgBorderStylesMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.MSG_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: msgBorderRadiusDesktop,
    dimensionStylesTab: msgBorderRadiusTab,
    dimensionStylesMobile: msgBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.MSG_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    desktopBorderStyle: labelBorderStyles,
    tabBorderStyle: labelBorderStylesTab,
    mobBorderStyle: labelBorderStylesMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.LABEL_BORDER,
    attributes
  });
  const {
    desktopBorderStyle: inputBorderStyles,
    tabBorderStyle: inputBorderStylesTab,
    mobBorderStyle: inputBorderStylesMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.INPUT_BORDER,
    attributes
  });

  // generate border radius
  const {
    dimensionStylesDesktop: borderRadiusDesktop,
    dimensionStylesTab: borderRadiusTab,
    dimensionStylesMobile: borderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BUTTON_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: labelBorderRadiusDesktop,
    dimensionStylesTab: labelBorderRadiusTab,
    dimensionStylesMobile: labelBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.LABEL_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: inputBorderRadiusDesktop,
    dimensionStylesTab: inputBorderRadiusTab,
    dimensionStylesMobile: inputBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.INPUT_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });

  // generate icon size
  const {
    desktopRangeStyle: iconSize,
    tabRangeStyle: iconSizeTab,
    mobRangeStyle: iconSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ICON_SIZE,
    property: 'width',
    attributes
  });
  const {
    desktopRangeStyle: buttonSpacing,
    tabRangeStyle: buttonSpacingTab,
    mobRangeStyle: buttonSpacingMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BUTTON_SPACING,
    property: 'margin-right',
    attributes
  });
  const {
    desktopRangeStyle: labelSpacing,
    tabRangeStyle: labelSpacingTab,
    mobRangeStyle: labelSpacingMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.LABEL_SPACING,
    property: 'margin-left',
    attributes
  });
  const {
    desktopRangeStyle: labelBottomSpacing,
    tabRangeStyle: labelBottomSpacingTab,
    mobRangeStyle: labelBottomSpacingMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.LABEL_BOTTOM_SPACING,
    property: 'margin-bottom',
    attributes
  });
  const {
    desktopRangeStyle: iconHSize,
    tabRangeStyle: iconHSizeTab,
    mobRangeStyle: iconHSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ICON_SIZE,
    property: 'height',
    attributes
  });
  const {
    desktopRangeStyle: buttonSize,
    tabRangeStyle: buttonSizeTab,
    mobRangeStyle: buttonSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BUTTON_SIZE,
    property: 'width',
    attributes
  });
  const {
    desktopRangeStyle: focusBorderWidthDesk,
    tabRangeStyle: focusBorderWidthTab,
    mobRangeStyle: focusBorderWidthMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.FOCUS_BORDER_WIDTH,
    property: 'border-width',
    attributes
  });
  const {
    desktopRangeStyle: focusStyle5BorderHeightDesk,
    tabRangeStyle: focusStyle5BorderHeightTab,
    mobRangeStyle: focusStyle5BorderHeightMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.FOCUS_STYLE_5_BORDER_WIDTH,
    property: 'height',
    attributes
  });
  const {
    desktopRangeStyle: focusStyle5BorderWidthDesk,
    tabRangeStyle: focusStyle5BorderWidthTab,
    mobRangeStyle: focusStyle5BorderWidthMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.FOCUS_STYLE_5_BORDER_WIDTH,
    property: 'width',
    attributes
  });

  // FIELD ICON SIZE
  const {
    desktopRangeStyle: fiColorHeightDesk,
    tabRangeStyle: fiColorHeightTab,
    mobRangeStyle: fiColorHeightMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.FIELD_ICON_SIZE,
    property: 'height',
    attributes
  });
  const {
    desktopRangeStyle: fiColorWidthDesk,
    tabRangeStyle: fiColorWidthTab,
    mobRangeStyle: fiColorWidthMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.FIELD_ICON_SIZE,
    property: 'width',
    attributes
  });

  // FIELD ICON MARGIN
  const {
    desktopRangeStyle: fiMarginDesktop,
    tabRangeStyle: fiMarginTab,
    mobRangeStyle: fiMarginMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.FIELD_ICON_SPACING,
    property: 'margin-right',
    attributes
  });
  const {
    boxShadowStyle: normalBoxShadowStyle
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BUTTON_BOX_SHADOW,
    attributes
  });
  const {
    boxShadowStyle: hoverBoxShadowStyle
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BUTTON_HOVER_BOX_SHADOW
  });
  const {
    boxShadowStyle: fieldBoxShadowStyle
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.FIELD_BOX_SHADOW,
    attributes
  });
  const {
    boxShadowStyle: fieldHoverBoxShadowStyle
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.FIELD_FOCUS_BOX_SHADOW
  });
  const {
    dimensionStylesDesktop: btnPaddingDesktop,
    dimensionStylesTab: btnPaddingTab,
    dimensionStylesMobile: btnPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BUTTON_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: msgPaddingDesktop,
    dimensionStylesTab: msgPaddingTab,
    dimensionStylesMobile: msgPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.MSG_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: msgMarginDesktop,
    dimensionStylesTab: msgMarginTab,
    dimensionStylesMobile: msgMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.MSG_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: labelPaddingDesktop,
    dimensionStylesTab: labelPaddingTab,
    dimensionStylesMobile: labelPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.LABEL_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: inputPaddingDesktop,
    dimensionStylesTab: inputPaddingTab,
    dimensionStylesMobile: inputPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.INPUT_PADDING,
    styleFor: 'padding',
    attributes
  });

  // generate alignment
  const {
    desktopAlignStyle: buttonAlignDesk,
    tabAlignStyle: buttonAlignTab,
    mobAlignStyle: buttonAlignMob
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BUTTON_ALIGNMENT,
    property: 'align-items',
    attributes
  });
  /**
   * All Style Combination
   */
  const desktopAllStyle = `
        .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-label{
        ${labelBottomSpacing}
        ${labelSpacing}
        ${labelDeskTypo}
        ${labelColor ? `color: ${labelColor};` : ''}

      }
        ${preset !== 'zolo-newsletter-1' ? `
       .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-label{
        ${labelDeskBGStyle}
        ${labelBorderStyles}
        ${labelBorderRadiusDesktop}
        ${labelPaddingDesktop}
      }` : ``}
        .${uniqueId}.zolo-block.wp-block-zolo-newsletter:hover .zolo-form-label{
        ${labelBorderHoverColor ? `border-color: ${labelBorderHoverColor};` : ''}

      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-input:focus ~ .zolo-form-label, 
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-input:not(:placeholder-shown).zolo-form-input:not(:focus) ~ .zolo-form-label
      {
        ${labelTextHoverColor ? `color: ${labelTextHoverColor};` : ''}
        ${labelHoverDeskBGStyle}

      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-input{
        ${inputColor ? `color: ${inputColor};` : ''}
        ${inputDeskTypo}
        ${inputBorderStyles}
        ${inputBorderRadiusDesktop}
        ${inputDeskBGStyle}
        ${inputPaddingDesktop}
        ${fieldBoxShadowStyle}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-input::placeholder{
        ${placeholderColor ? `color: ${placeholderColor};` : ''}

      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-input:focus{
        ${focusColor ? `border-color: ${focusColor};` : ''}
        ${focusBorderWidthDesk}
        ${fieldHoverBoxShadowStyle}
      }

      ${preset === 'zolo-newsletter-5' ? `
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5 .zolo-nl-field-icon-wrap{
                    ${inputBorderRadiusDesktop}
                }

                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-1 .zolo-form-input ~ .zolo-focus-border,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-2 .zolo-form-input ~ .zolo-focus-border,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-3 .zolo-form-input ~ .zolo-focus-border::before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-3 .zolo-form-input ~ .zolo-focus-border::after,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border:after,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:after, 
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border:after,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:after { 
                    ${focusStyle5Color ? `background-color: ${focusStyle5Color};` : ''}
                }
                
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-1 .zolo-form-input ~ .zolo-focus-border,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-2 .zolo-form-input ~ .zolo-focus-border,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-3 .zolo-form-input ~ .zolo-focus-border,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border:after,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border:after {
                    ${focusStyle5BorderHeightDesk}
                }

                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:after,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:after {
                    ${focusStyle5BorderWidthDesk}
                }

                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5 .zolo-nl-field-icon {
                   ${fiMarginDesktop}
                }

                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5 .zolo-nl-field-icon svg {
                    ${fiColorHeightDesk}
                    ${fiColorWidthDesk}
                    ${fieldIconColor ? `color: ${fieldIconColor};` : ''}
                }
            ` : ''}

      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn{
        ${borderStyles}
        ${borderRadiusDesktop}
        ${btnPaddingDesktop}
        ${normalDeskBGStyle}
        ${normalBoxShadowStyle}
        ${preset == 'zolo-newsletter-1' ? buttonSize : ''}
        ${buttonDeskTypo}
        ${btnLayoutType == 'zolo-newsletter-button-style-2' ? buttonSpacing : ''}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-info-text{
        ${msgDeskTypo}
        ${msgBorderStylesDesk}
        ${msgBorderRadiusDesktop}
        ${msgPaddingDesktop}
        ${msgMarginDesktop}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-info-text.status-success{
        ${successMsgDeskBGStyle}
        ${successTextColor ? `color: ${successTextColor};` : ''}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-info-text.status-warning{
        ${warningMsgDeskBGStyle}
        ${subscribedTextColor ? `color: ${subscribedTextColor};` : ''}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-info-text.status-error{
        ${errorMsgDeskBGStyle}
        ${errorTextColor ? `color: ${errorTextColor};` : ''}
      }


      .${uniqueId} .zolo-form-submit-btn:hover .zolo-form-btn{
        ${hoverDeskBGStyle}
        ${hoverBoxShadowStyle}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn{
        ${btnTextColor ? `color: ${btnTextColor};` : ''}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn svg{
        ${iconColor ? `fill: ${iconColor};` : ''}
        ${iconSize}
        ${iconHSize}
      }

      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn:hover svg{
       ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
      }

      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn:hover {
        ${btnTextHoverColor ? `color: ${btnTextHoverColor};` : ''}
        ${btnBorderHoverColor ? `border-color: ${btnBorderHoverColor};` : ''}
      }

      ${preset !== 'zolo-newsletter-4' ? `
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .button-auto .zolo-form-submit-btn {
                    ${buttonAlignDesk}
                }
            ` : ''}

  	`;
  const tabletAllStyle = `
        .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-label{
          ${labelTabTypo}
        ${labelBorderStylesTab}
        ${labelBorderRadiusTab}
        ${labelPaddingTab}
        ${labelSpacingTab}
        ${labelBottomSpacingTab}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-input{
        ${inputTabTypo}
        ${inputBorderStylesTab}
        ${inputBorderRadiusTab}
        ${inputPaddingTab}
      }

      ${preset === 'zolo-newsletter-5' ? `
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5 .zolo-nl-field-icon-wrap{
                    ${inputBorderRadiusTab}
                }

                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-1 .zolo-form-input ~ .zolo-focus-border,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-2 .zolo-form-input ~ .zolo-focus-border,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-3 .zolo-form-input ~ .zolo-focus-border,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border:after,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border:after {
                    ${focusStyle5BorderHeightTab}
                }

                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:after,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:after {
                    ${focusStyle5BorderWidthTab}
                }
            ` : ''}

      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn{
        ${borderStylesTab}
        ${borderRadiusTab}
        ${btnPaddingTab}
        ${buttonSizeTab}
        ${buttonTabTypo}
        ${btnLayoutType == 'zolo-newsletter-button-style-2' ? buttonSpacingTab : ''}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn svg{
        ${iconSizeTab}
        ${iconHSizeTab}
      }

      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-info-text{
        ${msgTabTypo}
        ${msgBorderStylesTab}
        ${msgBorderRadiusTab}
        ${msgPaddingTab}
        ${msgMarginTab}
      }

     ${preset !== 'zolo-newsletter-4' ? `
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .button-auto .zolo-form-submit-btn {
                    ${buttonAlignTab}
                }
            ` : ''}
    `;
  const mobileAllStyle = `
         .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-label{
          ${labelMobTypo}
        ${labelBorderStylesMob}
        ${labelBorderRadiusMob}
        ${labelPaddingMob}
        ${labelSpacingMob}
        ${labelBottomSpacingMob}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-input{
        ${inputMobTypo}
        ${inputBorderStylesMob}
        ${inputBorderRadiusMob}
        ${inputPaddingMob}
      }

     ${preset === 'zolo-newsletter-5' ? `
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5 .zolo-nl-field-icon-wrap{
                    ${inputBorderRadiusMob}
                }

                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-1 .zolo-form-input ~ .zolo-focus-border,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-2 .zolo-form-input ~ .zolo-focus-border,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-3 .zolo-form-input ~ .zolo-focus-border,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border:after,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border:after {
                    ${focusStyle5BorderHeightMob}
                }

                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-4 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:after,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:before,
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-5.zolo-focus-style-5 .zolo-form-input ~ .zolo-focus-border .zolo-focus-inner:after {
                    ${focusStyle5BorderWidthMob}
                }
            ` : ''}

      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn{
        ${borderStylesMob}
        ${borderRadiusMob}
        ${btnPaddingMob}
        ${buttonSizeMob}
        ${buttonMobTypo}
        ${btnLayoutType == 'zolo-newsletter-button-style-2' ? buttonSpacingMob : ''}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn svg{
        ${iconSizeMob}
        ${iconHSizeMob}
      }
        .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-info-text{
        ${msgMobTypo}
        ${msgBorderStylesMob}
        ${msgBorderRadiusMob}
        ${msgPaddingMob}
        ${msgMarginMob}
      }

    ${preset !== 'zolo-newsletter-4' ? `
                .${uniqueId}.zolo-block.wp-block-zolo-newsletter .button-auto .zolo-form-submit-btn {
                    ${buttonAlignMob}
                }
            ` : ''}
    `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.advancedNewsletter.desktopAllStyle', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.advancedNewsletter.tabletAllStyle', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.advancedNewsletter.mobileAllStyle', mobileAllStyle, props)
    })
  });
}

/***/ }),

/***/ "./src/blocks/newsletter/style.scss":
/*!******************************************!*\
  !*** ./src/blocks/newsletter/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

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

/***/ "./src/blocks/newsletter/block.json":
/*!******************************************!*\
  !*** ./src/blocks/newsletter/block.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Newsletter","name":"zolo/newsletter","category":"zoloblocks","keywords":["newsletter","mailchimp","subscribe","signup","form"],"description":"Build and manage newsletters to engage and grow subscribers.","apiVersion":3,"textdomain":"zoloblocks","example":{"attributes":{"preview":true},"viewportWidth":400},"providesContext":{"zoloNewsletterDisplayType":"displayType","zoloNewsletterStackOnMobile":"stackOnMobile"},"supports":{"anchor":false,"customClassName":false,"align":["wide","full"]},"editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./frontend.js"}');

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
/******/ 			"blocks/newsletter/index": 0,
/******/ 			"blocks/newsletter/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/newsletter/style-index"], () => (__webpack_require__("./src/blocks/newsletter/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map