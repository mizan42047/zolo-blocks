/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/pricing-table/attributes.js":
/*!************************************************!*\
  !*** ./src/blocks/pricing-table/attributes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/pricing-table/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/pricing-table/constants/typoPrefixConstant.js");
//internal dependencies controls
const {
  generateBackgroundAttributes,
  generateBorderAttributies,
  generateBoxShadowAttributies,
  generateDimensionAttributes,
  generateTypographyAttributes,
  generateResRangeAttributies,
  generateResAlignmentAttributies,
  generateTextShadowAttributies,
  generateNormalBGAttributes
} = window.zoloModule;

//block constants


const attributes = {
  // global attributes
  globalConfig: {
    type: 'object',
    default: {
      margin: {
        prefix: 'mainMargin'
      },
      padding: {
        prefix: 'mainPadding'
      },
      background: {
        prefix: 'mainBg'
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
  preset: {
    type: 'string',
    default: ''
  },
  //header
  titleText: {
    type: 'string',
    default: 'Service Name'
  },
  titleTagName: {
    type: 'string',
    default: 'h3'
  },
  showDesc: {
    type: 'boolean',
    default: true
  },
  descText: {
    type: 'string',
    default: 'Basic features for up to 10 user'
  },
  //price
  pricePrefix: {
    type: 'string',
    default: '$'
  },
  price: {
    type: 'string',
    default: '49'
  },
  priceSuffix: {
    type: 'string',
    default: ''
  },
  sale: {
    type: 'boolean',
    default: false
  },
  orginalPrice: {
    type: 'string',
    default: '79'
  },
  period: {
    type: 'string',
    default: 'per user,per month'
  },
  //features
  showFeatureHeading: {
    type: 'boolean',
    default: true
  },
  featureTitle: {
    type: 'string',
    default: 'FEATURES'
  },
  showFeatureDesc: {
    type: 'boolean',
    default: true
  },
  featureDesc: {
    type: 'string',
    default: 'Everything in our free plan'
  },
  showFeatures: {
    type: 'boolean',
    default: true
  },
  hideFeatureIcon: {
    type: 'boolean',
    default: false
  },
  features: {
    type: 'array',
    default: [{
      id: 1,
      text: 'List Item #1',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>'
    }, {
      id: 2,
      text: 'List Item #2',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>'
    }, {
      id: 3,
      text: 'List Item #3',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>'
    }]
  },
  separatorColor: {
    type: 'string'
  },
  //Buttons
  showBtn: {
    type: 'boolean',
    default: true
  },
  buttonText: {
    type: 'string',
    default: 'Get Started'
  },
  buttonLink: {
    type: 'object',
    default: {
      url: '#',
      openInNewTab: false
    }
  },
  showChatBtn: {
    type: 'boolean',
    default: false
  },
  chatBtnText: {
    type: 'string',
    default: 'Chat To Sales'
  },
  chatBtnLink: {
    type: 'object',
    default: {
      url: '#',
      openInNewTab: false
    }
  },
  //ribbon
  showRibbon: {
    type: 'boolean',
    default: true
  },
  ribbonTitle: {
    type: 'string',
    default: 'Popular'
  },
  ribbonXPosition: {
    type: 'number',
    default: 0
  },
  ribbonYPosition: {
    type: 'number',
    default: 0
  },
  ribbonRotate: {
    type: 'number',
    default: 0
  },
  //header style
  titleColor: {
    type: 'string',
    default: ''
  },
  titleBgColor: {
    type: 'string',
    default: ''
  },
  descColor: {
    type: 'string',
    default: ''
  },
  //price style
  prefixPosition: {
    type: 'number'
  },
  suffixPosition: {
    type: 'number'
  },
  prefixSize: {
    type: 'number'
  },
  suffixSize: {
    type: 'number'
  },
  priceColor: {
    type: 'string',
    default: ''
  },
  orginalPriceColor: {
    type: 'string',
    default: ''
  },
  periodColor: {
    type: 'string',
    default: ''
  },
  //features style
  featureTitleColor: {
    type: 'string',
    default: ''
  },
  featureDescColor: {
    type: 'string',
    default: ''
  },
  featureColor: {
    type: 'string',
    default: ''
  },
  featureIconColor: {
    type: 'string',
    default: ''
  },
  featureIconBgColor: {
    type: 'string',
    default: ''
  },
  //buttons style
  btnTextColor: {
    type: 'string',
    default: ''
  },
  btnHoverTextColor: {
    type: 'string',
    default: ''
  },
  btnHoverBorderColor: {
    type: 'string'
  },
  chatBtnColor: {
    type: 'string'
  },
  chatBtnHoverColor: {
    type: 'string'
  },
  chatBtnHoverBorderColor: {
    type: 'string'
  },
  //ribbon style
  ribbonColor: {
    type: 'string',
    default: ''
  },
  ribbonBgColor: {
    type: 'string',
    default: ''
  },
  ribbonPosition: {
    type: 'string',
    default: 'top__right'
  },
  // extra
  btnsPosition: {
    type: 'string',
    default: 'bottom'
  },
  btnsDirection: {
    type: 'string',
    default: 'column'
  },
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TITLE_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TITLE_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TITLE_TEXT_PADDING),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.TITLE_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TITLE_BORDER_RADIUS),
  ...generateTextShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.TITLE_TEXT_SHADOW),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.DESC_MARGIN),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TITLE_BG),
  //price
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PRICE_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ORGINAL_PRICE_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PERIOD_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PRICE_PADDING),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PRICE_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.PRICE_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PRICE_BRADIUS),
  //feature
  ...generateResAlignmentAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ALIGNENT),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FEATURE_DESC_MARGIN),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FEATURE_ITEM_GAP),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FEATURE_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FEATURE_PADDING),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FEATURE_ICON_GAP),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FEATURE_ICON_SIZE),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FEATURE_ICON_PADDING),
  //button
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BTNS_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BTN_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BTN_PADDING),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BTN_NORMAL_BG, {
    defaultBgGradient: 'linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)'
  }),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BTN_HOVER_BG, {
    defaultBgGradient: 'linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)'
  }),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BTN_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BTN_RADIUS),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BTN_SHADOW),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BTN_HOVER_SHADOW),
  //chat button
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CBTN_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CBTN_PADDING),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CBTN_NORMAL_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CBTN_HOVER_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.CBTN_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CBTN_RADIUS),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.CBTN_SHADOW),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.CBTN_HOVER_SHADOW),
  // ribbon
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.RIBBON_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.RIBBON_PADDING),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.RIBBON_BG),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.RIBBON_RADIUS),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.RIBBON_BORDER),
  //all typography
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__)),
  //style tab attributes
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_PADDING),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_BORDER_RADIUS),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_SHADOW),
  // separator
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.SEPARATOR_WIDTH)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/pricing-table/constants/index.js":
/*!*****************************************************!*\
  !*** ./src/blocks/pricing-table/constants/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALIGNENT: () => (/* binding */ ALIGNENT),
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   BTNS_DIRECTIONS: () => (/* binding */ BTNS_DIRECTIONS),
/* harmony export */   BTNS_MARGIN: () => (/* binding */ BTNS_MARGIN),
/* harmony export */   BTNS_POSITIONS: () => (/* binding */ BTNS_POSITIONS),
/* harmony export */   BTN_BORDER: () => (/* binding */ BTN_BORDER),
/* harmony export */   BTN_HOVER_BG: () => (/* binding */ BTN_HOVER_BG),
/* harmony export */   BTN_HOVER_SHADOW: () => (/* binding */ BTN_HOVER_SHADOW),
/* harmony export */   BTN_MARGIN: () => (/* binding */ BTN_MARGIN),
/* harmony export */   BTN_NORMAL_BG: () => (/* binding */ BTN_NORMAL_BG),
/* harmony export */   BTN_PADDING: () => (/* binding */ BTN_PADDING),
/* harmony export */   BTN_RADIUS: () => (/* binding */ BTN_RADIUS),
/* harmony export */   BTN_SHADOW: () => (/* binding */ BTN_SHADOW),
/* harmony export */   CBTN_BORDER: () => (/* binding */ CBTN_BORDER),
/* harmony export */   CBTN_HOVER_BG: () => (/* binding */ CBTN_HOVER_BG),
/* harmony export */   CBTN_HOVER_SHADOW: () => (/* binding */ CBTN_HOVER_SHADOW),
/* harmony export */   CBTN_MARGIN: () => (/* binding */ CBTN_MARGIN),
/* harmony export */   CBTN_NORMAL_BG: () => (/* binding */ CBTN_NORMAL_BG),
/* harmony export */   CBTN_PADDING: () => (/* binding */ CBTN_PADDING),
/* harmony export */   CBTN_RADIUS: () => (/* binding */ CBTN_RADIUS),
/* harmony export */   CBTN_SHADOW: () => (/* binding */ CBTN_SHADOW),
/* harmony export */   DESC_MARGIN: () => (/* binding */ DESC_MARGIN),
/* harmony export */   FEATURE_DESC_MARGIN: () => (/* binding */ FEATURE_DESC_MARGIN),
/* harmony export */   FEATURE_ICON_GAP: () => (/* binding */ FEATURE_ICON_GAP),
/* harmony export */   FEATURE_ICON_PADDING: () => (/* binding */ FEATURE_ICON_PADDING),
/* harmony export */   FEATURE_ICON_SIZE: () => (/* binding */ FEATURE_ICON_SIZE),
/* harmony export */   FEATURE_ITEM_GAP: () => (/* binding */ FEATURE_ITEM_GAP),
/* harmony export */   FEATURE_MARGIN: () => (/* binding */ FEATURE_MARGIN),
/* harmony export */   FEATURE_PADDING: () => (/* binding */ FEATURE_PADDING),
/* harmony export */   NORMAL_HOVER: () => (/* binding */ NORMAL_HOVER),
/* harmony export */   ORGINAL_PRICE_MARGIN: () => (/* binding */ ORGINAL_PRICE_MARGIN),
/* harmony export */   PERIOD_MARGIN: () => (/* binding */ PERIOD_MARGIN),
/* harmony export */   PRESETS: () => (/* binding */ PRESETS),
/* harmony export */   PRICE_BG: () => (/* binding */ PRICE_BG),
/* harmony export */   PRICE_BORDER: () => (/* binding */ PRICE_BORDER),
/* harmony export */   PRICE_BRADIUS: () => (/* binding */ PRICE_BRADIUS),
/* harmony export */   PRICE_MARGIN: () => (/* binding */ PRICE_MARGIN),
/* harmony export */   PRICE_PADDING: () => (/* binding */ PRICE_PADDING),
/* harmony export */   RIBBON_ALIGN: () => (/* binding */ RIBBON_ALIGN),
/* harmony export */   RIBBON_BG: () => (/* binding */ RIBBON_BG),
/* harmony export */   RIBBON_BORDER: () => (/* binding */ RIBBON_BORDER),
/* harmony export */   RIBBON_MARGIN: () => (/* binding */ RIBBON_MARGIN),
/* harmony export */   RIBBON_PADDING: () => (/* binding */ RIBBON_PADDING),
/* harmony export */   RIBBON_POSITIONS: () => (/* binding */ RIBBON_POSITIONS),
/* harmony export */   RIBBON_RADIUS: () => (/* binding */ RIBBON_RADIUS),
/* harmony export */   SEPARATOR_WIDTH: () => (/* binding */ SEPARATOR_WIDTH),
/* harmony export */   TITLE_BG: () => (/* binding */ TITLE_BG),
/* harmony export */   TITLE_BORDER: () => (/* binding */ TITLE_BORDER),
/* harmony export */   TITLE_BORDER_RADIUS: () => (/* binding */ TITLE_BORDER_RADIUS),
/* harmony export */   TITLE_MARGIN: () => (/* binding */ TITLE_MARGIN),
/* harmony export */   TITLE_PADDING: () => (/* binding */ TITLE_PADDING),
/* harmony export */   TITLE_TEXT_PADDING: () => (/* binding */ TITLE_TEXT_PADDING),
/* harmony export */   TITLE_TEXT_SHADOW: () => (/* binding */ TITLE_TEXT_SHADOW),
/* harmony export */   WRAPPER_BG: () => (/* binding */ WRAPPER_BG),
/* harmony export */   WRAPPER_BORDER: () => (/* binding */ WRAPPER_BORDER),
/* harmony export */   WRAPPER_BORDER_RADIUS: () => (/* binding */ WRAPPER_BORDER_RADIUS),
/* harmony export */   WRAPPER_MARGIN: () => (/* binding */ WRAPPER_MARGIN),
/* harmony export */   WRAPPER_PADDING: () => (/* binding */ WRAPPER_PADDING),
/* harmony export */   WRAPPER_SHADOW: () => (/* binding */ WRAPPER_SHADOW)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const BLOCK_PREFIX = 'pricing-table';
const PRESETS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Preset 1', 'zoloblocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Preset 2 (Pro)', 'zoloblocks'),
  value: 'style-2',
  disabled: true
}];
const NORMAL_HOVER = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'zoloblocks'),
  value: 'normal'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover', 'zoloblocks'),
  value: 'hover'
}];
const RIBBON_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dashicon, {
    icon: 'editor-alignleft'
  })),
  value: 'left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dashicon, {
    icon: 'editor-aligncenter'
  })),
  value: 'center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dashicon, {
    icon: 'editor-alignright'
  })),
  value: 'right'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dashicon, {
    icon: 'editor-justify'
  })),
  value: 'justify'
}];
const BTNS_POSITIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Middle', 'zoloblocks'),
  value: 'middle'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'zoloblocks'),
  value: 'bottom'
}];
const BTNS_DIRECTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Column', 'zoloblocks'),
  value: 'column'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Row', 'zoloblocks'),
  value: 'row'
}];
const ALIGNENT = 'alignment';

//header style
const TITLE_MARGIN = 'titleMargin';
const TITLE_BORDER = 'titleBorder';
const TITLE_BORDER_RADIUS = 'titleBorderRadius';
const TITLE_PADDING = 'titlePadding';
const TITLE_TEXT_SHADOW = 'titleTextShadow';
const TITLE_TEXT_PADDING = 'titleTextPadding';
const TITLE_BG = 'titleBg';
const DESC_MARGIN = 'descMargin';

//price style
const PRICE_MARGIN = 'priceMargin';
const ORGINAL_PRICE_MARGIN = 'orginalPriceMargin';
const PERIOD_MARGIN = 'periodMargin';

// pro preset (2)
const PRICE_PADDING = 'pricePadding';
const PRICE_BG = 'priceBg';
const PRICE_BORDER = 'priceBorder';
const PRICE_BRADIUS = 'priceBradius';

//features style
const FEATURE_DESC_MARGIN = 'featureDescMargin';
const FEATURE_ICON_GAP = 'featureIconGap';
const FEATURE_ICON_SIZE = 'featureIconSize';
const FEATURE_MARGIN = 'featureMargin';
const FEATURE_PADDING = 'featurePadding';
const FEATURE_ITEM_GAP = 'featureItemGap';
const FEATURE_ICON_PADDING = 'featureIconPadding';

// primary button style
const BTN_MARGIN = 'btnMargin';
const BTN_PADDING = 'btnPadding';
const BTN_NORMAL_BG = 'btnBg';
const BTN_HOVER_BG = 'btnHoverBg';
const BTN_BORDER = 'btnBorder';
const BTN_RADIUS = 'btnRadius';
const BTN_SHADOW = 'btnShadow';
const BTN_HOVER_SHADOW = 'btnHoverShadow';

// chat button style
const CBTN_MARGIN = 'cbtnMargin';
const CBTN_PADDING = 'cbtnPadding';
const CBTN_NORMAL_BG = 'cbtnBg';
const CBTN_HOVER_BG = 'cbtnHoverBg';
const CBTN_BORDER = 'cbtnBorder';
const CBTN_RADIUS = 'cbtnRadius';
const CBTN_SHADOW = 'cbtnShadow';
const CBTN_HOVER_SHADOW = 'cbtnHoverShadow';

//advance tab
const WRAPPER_MARGIN = 'wrapMargin';
const WRAPPER_PADDING = 'wrapPadding';
const WRAPPER_BG = 'wrapBg';
const WRAPPER_BORDER = 'wrapBorder';
const WRAPPER_BORDER_RADIUS = 'wrapBorderRadius';
const WRAPPER_SHADOW = 'wrapShadow';

// ribbon style
const RIBBON_MARGIN = 'ribbonMargin';
const RIBBON_PADDING = 'ribbonPadding';
const RIBBON_BORDER = 'ribbonBorder';
const RIBBON_RADIUS = 'ribbonRadius';
const RIBBON_BG = 'ribbonBg';

// separator
const SEPARATOR_WIDTH = 'separatorWidth';

// ribbon position options
const RIBBON_POSITIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'zoloblocks'),
  value: 'top__left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'zoloblocks'),
  value: 'top__right'
}];

// buttons
const BTNS_MARGIN = 'btnsMargin';

/***/ }),

/***/ "./src/blocks/pricing-table/constants/typoPrefixConstant.js":
/*!******************************************************************!*\
  !*** ./src/blocks/pricing-table/constants/typoPrefixConstant.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BTN_TYPOGRAPHY: () => (/* binding */ BTN_TYPOGRAPHY),
/* harmony export */   CBTN_TYPOGRAPHY: () => (/* binding */ CBTN_TYPOGRAPHY),
/* harmony export */   DESC_TYPOGRAPHY: () => (/* binding */ DESC_TYPOGRAPHY),
/* harmony export */   FEATURE_DESC_TYPOGRAPHY: () => (/* binding */ FEATURE_DESC_TYPOGRAPHY),
/* harmony export */   FEATURE_TITLE_TYPOGRAPHY: () => (/* binding */ FEATURE_TITLE_TYPOGRAPHY),
/* harmony export */   FEATURE_TYPOGRAPHY: () => (/* binding */ FEATURE_TYPOGRAPHY),
/* harmony export */   ORGINAL_PRICE_TYPOGRAPHY: () => (/* binding */ ORGINAL_PRICE_TYPOGRAPHY),
/* harmony export */   PERIOD_TYPOGRAPHY: () => (/* binding */ PERIOD_TYPOGRAPHY),
/* harmony export */   PRICE_TYPOGRAPHY: () => (/* binding */ PRICE_TYPOGRAPHY),
/* harmony export */   RIBBON_TYPOGRAPHY: () => (/* binding */ RIBBON_TYPOGRAPHY),
/* harmony export */   TITLE_TYPOGRAPHY: () => (/* binding */ TITLE_TYPOGRAPHY)
/* harmony export */ });
// the consts defined here should be unique from one another
const TITLE_TYPOGRAPHY = 'title';
const DESC_TYPOGRAPHY = 'desc';
const RIBBON_TYPOGRAPHY = 'ribbon';
const BTN_TYPOGRAPHY = 'btn';
const CBTN_TYPOGRAPHY = 'cbtn';
const FEATURE_TYPOGRAPHY = 'feature';
const FEATURE_DESC_TYPOGRAPHY = 'featureDesc';
const FEATURE_TITLE_TYPOGRAPHY = 'featureTitle';
const PRICE_TYPOGRAPHY = 'price';
const PERIOD_TYPOGRAPHY = 'period';
const ORGINAL_PRICE_TYPOGRAPHY = 'orginalPrice';

/***/ }),

/***/ "./src/blocks/pricing-table/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/pricing-table/edit.js ***!
  \******************************************/
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
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/pricing-table/inspector.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/pricing-table/style.scss");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/blocks/pricing-table/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
//WordPress dependencies


//external dependencies


//internal dependencies


const {
  DisplayZoloIcon,
  classArrayToStr,
  SidebarOpener
} = window.zoloModule;

// import style


const Edit = props => {
  const {
    attributes,
    setAttributes,
    isSelected,
    clientId
  } = props;
  const {
    preset,
    preview,
    uniqueId,
    parentClasses,
    //layout
    styles,
    //header
    titleText,
    titleTagName,
    showDesc,
    descText,
    //price
    orginalPrice,
    pricePrefix,
    priceSuffix,
    price,
    sale,
    period,
    //features
    showFeatures,
    hideFeatureIcon,
    showFeatureHeading,
    showFeatureDesc,
    featureTitle,
    featureDesc,
    features,
    //buttons
    showBtn,
    showChatBtn,
    buttonText,
    chatBtnText,
    //ribbon
    showRibbon,
    ribbonTitle,
    ribbonPosition,
    // extra
    btnsPosition,
    btnsDirection
  } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number

  //block wrapper class
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(uniqueId, classArrayToStr(parentClasses), preset !== '' && preset)
  });

  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.blocks.render.hook.after', [], props);
  const pricingPeriod = period.length !== 0 && period.split(',');

  // preview image
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
      src: zoloParams.blocksPreview.pricingTable,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Table Preview', 'zoloblocks')
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      ...blockProps,
      children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(SidebarOpener, {
        clientId: clientId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "zolo-item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "zolo-head-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
            tagName: titleTagName,
            className: "zolo-package-title",
            value: titleText,
            onChange: titleText => setAttributes({
              titleText
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add service name', 'zoloblocks'),
            allowedFormats: ['bold', 'italic', 'strikethrough']
          }), showRibbon && ribbonTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: `zolo-ribbon-btn ${ribbonPosition}`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
              tagName: "span",
              value: ribbonTitle,
              onChange: v => setAttributes({
                ribbonTitle: v
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "zolo-price-info",
            children: [orginalPrice && sale && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
              className: "zolo-orginal-price",
              children: [pricePrefix && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "currency",
                children: pricePrefix
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "price",
                children: orginalPrice
              })]
            }), price && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
              className: "zolo-price",
              children: [pricePrefix && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "currency",
                children: pricePrefix
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "price",
                children: price
              }), priceSuffix && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "fractional",
                children: priceSuffix
              })]
            }), pricingPeriod && pricingPeriod.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "zolo-user-month",
              children: pricingPeriod.map((name, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: `zolo-period text-${index}`,
                children: name
              }, index))
            })]
          }), showDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
            tagName: "div",
            className: "zolo-package-desc",
            value: descText,
            onChange: descText => setAttributes({
              descText
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add description', 'zoloblocks'),
            allowedFormats: ['bold', 'italic', 'strikethrough']
          }), btnsPosition === 'middle' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: (showBtn || showChatBtn) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: `zolo-link-btn ${btnsDirection}`,
              children: [showBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                tagName: "a",
                className: "zolo-buy-btn",
                value: buttonText,
                onChange: text => setAttributes({
                  buttonText: text
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Text', 'zoloblocks'),
                allowedFormats: []
              }), showChatBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                tagName: "a",
                className: "zolo-chat-btn",
                value: chatBtnText,
                onChange: text => setAttributes({
                  chatBtnText: text
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Text', 'zoloblocks'),
                allowedFormats: []
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "zolo-features-info",
          children: [showFeatureHeading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
            tagName: "div",
            className: "zolo-features-title",
            value: featureTitle,
            onChange: featureTitle => setAttributes({
              featureTitle
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add feature title', 'zoloblocks'),
            allowedFormats: ['bold', 'italic', 'strikethrough']
          }), showFeatureDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
            tagName: "div",
            className: "zolo-features-desc",
            value: featureDesc,
            onChange: featureDesc => setAttributes({
              featureDesc
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add feature description', 'zoloblocks'),
            allowedFormats: ['bold', 'italic', 'strikethrough']
          }), features.length !== 0 && showFeatures && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
            className: "features",
            children: features.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
              children: [item.icon && hideFeatureIcon !== true && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "zolo-check-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DisplayZoloIcon, {
                  icon: item.icon
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "zolo-list-text",
                children: item.text
              })]
            }, index))
          }), btnsPosition === 'bottom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: (showBtn || showChatBtn) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: `zolo-link-btn ${btnsDirection}`,
              children: [showBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                tagName: "a",
                className: "zolo-buy-btn",
                value: buttonText,
                onChange: text => setAttributes({
                  buttonText: text
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Text', 'zoloblocks'),
                allowedFormats: [],
                title: buttonText
              }), showChatBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                tagName: "a",
                className: "zolo-chat-btn",
                value: chatBtnText,
                onChange: text => setAttributes({
                  chatBtnText: text
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Text', 'zoloblocks'),
                allowedFormats: [],
                title: chatBtnText
              })]
            })
          })]
        })]
      }), renderHookAfter && renderHookAfter]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/pricing-table/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/pricing-table/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/pricing-table/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/pricing-table/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/pricing-table/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/pricing-table/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/pricing-table/style.scss");






const {
  BlockIcons
} = window.zoloIcons;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: BlockIcons['pricing-table']
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/pricing-table/inspector.js":
/*!***********************************************!*\
  !*** ./src/blocks/pricing-table/inspector.js ***!
  \***********************************************/
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
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/blocks/pricing-table/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/blocks/pricing-table/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/pricing-table/constants/typoPrefixConstant.js");
/* harmony import */ var _src_global_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/global/constants */ "./src/global/constants.js");
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sortable */ "./src/blocks/pricing-table/sortable.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
//wrodpress dependencies



const {
  BorderControl,
  BoxShadowControl,
  ColorControl,
  ResDimensionsControl,
  TypographyDropdown,
  ResRangeControl,
  ResAlignmentControl,
  TextShadowControl,
  RangeResetControl,
  NormalBGControl,
  HeaderTabs,
  LinkControl,
  TabPanelControl,
  AdvancedOptions,
  IconicBtnGroup,
  ZoloPanelBody
} = window.zoloModule;

//block attributes


//block constants






const Inspector = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    preset,
    resMode,
    //header
    titleText,
    titleTagName,
    showDesc,
    descText,
    //price
    pricePrefix,
    price,
    priceSuffix,
    sale,
    orginalPrice,
    period,
    //features
    showFeatures,
    hideFeatureIcon,
    showFeatureHeading,
    showFeatureDesc,
    featureTitle,
    featureDesc,
    features,
    //button
    showBtn,
    buttonText,
    buttonLink,
    showChatBtn,
    chatBtnText,
    chatBtnLink,
    //ribbon
    showRibbon,
    ribbonTitle,
    ribbonPosition,
    //header style
    titleColor,
    titleBgColor,
    descColor,
    //price style
    priceColor,
    orginalPriceColor,
    periodColor,
    //feature style
    featureTitleColor,
    featureDescColor,
    featureColor,
    featureIconColor,
    featureIconBgColor,
    //button style
    btnTextColor,
    btnHoverTextColor,
    btnHoverBorderColor,
    chatBtnColor,
    chatBtnHoverColor,
    chatBtnHoverBorderColor,
    //ribbon style
    ribbonColor,
    separatorColor,
    // extra
    btnsPosition,
    btnsDirection
  } = attributes;
  const requiredProps = {
    attributes,
    setAttributes,
    resMode,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HeaderTabs, {
      block: "zolo/pricing-table",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'zoloblocks'),
          firstOpen: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Preset', 'zoloblocks'),
            value: preset,
            options: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__.applyFilters)('zolo.pricingTable.presets', _constants__WEBPACK_IMPORTED_MODULE_4__.PRESETS),
            onChange: preset => {
              setAttributes({
                preset
              });
              if (preset === 'style-2') {
                setAttributes({
                  sale: true
                });
              }
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show/hide Elements', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ribbon', 'zoloblocks'),
            checked: showRibbon,
            onChange: () => setAttributes({
              showRibbon: !showRibbon
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Primary Button', 'zoloblocks'),
            checked: showBtn,
            onChange: () => setAttributes({
              showBtn: !showBtn
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Secondary Button', 'zoloblocks'),
            checked: showChatBtn,
            onChange: () => setAttributes({
              showChatBtn: !showChatBtn
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResAlignmentControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alignment', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ALIGNENT,
            requiredProps: requiredProps,
            alignOptions: _src_global_constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_ALIGNS
          }), (showBtn || showChatBtn) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "zolo-custom-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Buttons', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "zolo-flex-row-control-tab",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(IconicBtnGroup, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Position', 'zoloblocks'),
                value: btnsPosition,
                onChange: value => setAttributes({
                  btnsPosition: value
                }),
                options: _constants__WEBPACK_IMPORTED_MODULE_4__.BTNS_POSITIONS
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "zolo-flex-row-control-tab",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(IconicBtnGroup, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Direction', 'zoloblocks'),
                value: btnsDirection,
                onChange: value => setAttributes({
                  btnsDirection: value
                }),
                options: _constants__WEBPACK_IMPORTED_MODULE_4__.BTNS_DIRECTIONS
              })
            })]
          })]
        }), showRibbon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ribbon', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
            value: ribbonTitle,
            onChange: ribbonTitle => setAttributes({
              ribbonTitle
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Positions', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "zolo-flex-row-control-tab",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(IconicBtnGroup, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Direction', 'zoloblocks'),
              value: ribbonPosition,
              onChange: value => setAttributes({
                ribbonPosition: value
              }),
              options: _constants__WEBPACK_IMPORTED_MODULE_4__.RIBBON_POSITIONS
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(RangeResetControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Horizontal', 'zoloblocks'),
            controlName: 'ribbonXPosition',
            requiredProps: requiredProps,
            min: -150,
            max: 150,
            step: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(RangeResetControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical', 'zoloblocks'),
            controlName: 'ribbonYPosition',
            requiredProps: requiredProps,
            min: -150,
            max: 150,
            step: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(RangeResetControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rotate', 'zoloblocks'),
            controlName: 'ribbonRotate',
            requiredProps: requiredProps,
            min: -180,
            max: 180,
            step: 1
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Header', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "zolo-custom-heading",
            style: {
              border: 0,
              paddingTop: 0
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
            value: titleText,
            onChange: titleText => setAttributes({
              titleText
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tag', 'zoloblocks'),
            value: titleTagName,
            options: _src_global_constants__WEBPACK_IMPORTED_MODULE_6__.HEADING,
            onChange: selected => setAttributes({
              titleTagName: selected
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'zoloblocks'),
            checked: showDesc,
            onChange: showDesc => setAttributes({
              showDesc
            })
          }), showDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
            className: "zolo-flex-col-control",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
            value: descText,
            onChange: descText => setAttributes({
              descText
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Price', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Prefix', 'zoloblocks'),
            value: pricePrefix,
            onChange: pricePrefix => setAttributes({
              pricePrefix
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('$', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Price', 'zoloblocks'),
            value: price,
            onChange: price => setAttributes({
              price
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Suffix', 'zoloblocks'),
            value: priceSuffix,
            onChange: priceSuffix => setAttributes({
              priceSuffix
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sale', 'zoloblocks'),
            checked: sale,
            onChange: sale => setAttributes({
              sale
            })
          }), sale && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Original Price', 'zoloblocks'),
            value: orginalPrice,
            onChange: orginalPrice => setAttributes({
              orginalPrice
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Period', 'zoloblocks'),
            value: period,
            onChange: period => setAttributes({
              period
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Using comma indicator for multiple lines', 'zoloblocks')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Features', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "zolo-custom-heading",
            style: {
              border: 0,
              paddingTop: 0
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show/hide Elements', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks'),
            checked: showFeatureHeading,
            onChange: () => setAttributes({
              showFeatureHeading: !showFeatureHeading
            })
          }), showFeatureHeading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
              value: featureTitle,
              onChange: featureTitle => setAttributes({
                featureTitle
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {})]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'zoloblocks'),
            checked: showFeatureDesc,
            onChange: () => setAttributes({
              showFeatureDesc: !showFeatureDesc
            })
          }), showFeatureDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
            className: "zolo-flex-col-control",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'zoloblocks'),
            value: featureDesc,
            onChange: featureDesc => setAttributes({
              featureDesc
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('List Items', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('List', 'zoloblocks'),
            checked: showFeatures,
            onChange: () => setAttributes({
              showFeatures: !showFeatures
            })
          }), showFeatures && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hide Icon', 'zoloblocks'),
              checked: hideFeatureIcon,
              onChange: () => setAttributes({
                hideFeatureIcon: !hideFeatureIcon
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_sortable__WEBPACK_IMPORTED_MODULE_7__["default"], {
              features: features,
              setAttributes: setAttributes
            })]
          })]
        }), showBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Primary Button', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
            value: buttonText,
            onChange: buttonText => setAttributes({
              buttonText
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(LinkControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('URL', 'zoloblocks'),
            value: buttonLink,
            onChange: value => setAttributes({
              buttonLink: value
            })
          })]
        }), showChatBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Secondary Button', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
            value: chatBtnText,
            onChange: chatBtnText => setAttributes({
              chatBtnText
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(LinkControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('URL', 'zoloblocks'),
            value: chatBtnLink,
            onChange: value => setAttributes({
              chatBtnLink: value
            })
          })]
        })]
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Item Container', 'zoloblocks'),
          firstOpen: true,
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.WRAPPER_BG,
            noMainBGImg: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
            label: "Margin",
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.WRAPPER_MARGIN,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
            label: "Padding",
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.WRAPPER_PADDING,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.WRAPPER_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BoxShadowControl, {
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.WRAPPER_SHADOW,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.WRAPPER_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: false
          })]
        }), showRibbon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ribbon', 'zoloblocks'),
            stylePanel: true,
            panelProps: props,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
              color: ribbonColor,
              onChange: val => setAttributes({
                ribbonColor: val
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
              label: "Typography",
              typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.RIBBON_TYPOGRAPHY,
              requiredProps: requiredProps,
              max: 72
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
              noMainBGImg: true,
              controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.RIBBON_BG,
              requiredProps: requiredProps
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.RIBBON_PADDING,
              requiredProps: requiredProps,
              forBorderRadius: false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.RIBBON_MARGIN,
              requiredProps: requiredProps,
              forBorderRadius: false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BorderControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.RIBBON_BORDER,
              requiredProps: requiredProps
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.RIBBON_RADIUS,
              requiredProps: requiredProps,
              forBorderRadius: true
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Header', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.TITLE_PADDING,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TabPanelControl, {
            options: [{
              value: 'normal',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks-pro')
            }, ...(showDesc ? [{
              value: 'hover',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'zoloblocks-pro')
            }] : [])],
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: titleColor,
                onChange: val => setAttributes({
                  titleColor: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.TITLE_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 72
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TextShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.TITLE_TEXT_SHADOW,
                requiredProps: requiredProps,
                enableTransition: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                noMainBGImg: true,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.TITLE_BG,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.TITLE_TEXT_PADDING,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.TITLE_MARGIN,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.TITLE_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.TITLE_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: descColor,
                onChange: val => setAttributes({
                  descColor: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                label: "Typography",
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.DESC_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 72
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.DESC_MARGIN,
                requiredProps: requiredProps
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pricing', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TabPanelControl, {
            options: [{
              value: 'normal',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Price', 'zoloblocks')
            }, ...(sale && orginalPrice ? [{
              value: 'hover',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Original/P', 'zoloblocks')
            }] : []), ...(period ? [{
              value: 'active',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Period', 'zoloblocks')
            }] : [])],
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: priceColor,
                onChange: val => setAttributes({
                  priceColor: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                label: "Typography",
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.PRICE_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 72
              }), preset === 'style-2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                  noMainBGImg: true,
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.PRICE_BG,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.PRICE_PADDING,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.PRICE_MARGIN,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BorderControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.PRICE_BORDER,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.PRICE_BRADIUS,
                  requiredProps: requiredProps,
                  forBorderRadius: true
                })]
              }), preset === 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.PRICE_MARGIN,
                  requiredProps: requiredProps
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TabPanelControl, {
                options: [...(pricePrefix ? [{
                  value: 'normal',
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Prefix', 'zoloblocks')
                }] : []), ...(priceSuffix ? [{
                  value: 'hover',
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Suffix', 'zoloblocks')
                }] : [])],
                normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(RangeResetControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                    controlName: 'prefixSize',
                    requiredProps: requiredProps,
                    min: 0,
                    max: 72,
                    step: 1
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(RangeResetControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Position', 'zoloblocks'),
                    controlName: 'prefixPosition',
                    requiredProps: requiredProps,
                    min: -100,
                    max: 100,
                    step: 1
                  })]
                }),
                hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(RangeResetControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                    controlName: 'suffixSize',
                    requiredProps: requiredProps,
                    min: 0,
                    max: 100,
                    step: 1
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(RangeResetControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Position', 'zoloblocks'),
                    controlName: 'suffixPosition',
                    requiredProps: requiredProps,
                    min: -100,
                    max: 100,
                    step: 1
                  })]
                })
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: orginalPriceColor,
                  onChange: val => setAttributes({
                    orginalPriceColor: val
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                  label: "Typography",
                  typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.ORGINAL_PRICE_TYPOGRAPHY,
                  requiredProps: requiredProps,
                  max: 72
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ORGINAL_PRICE_MARGIN,
                  requiredProps: requiredProps
                })]
              })
            }),
            activeComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: periodColor,
                onChange: val => setAttributes({
                  periodColor: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                label: "Typography",
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.PERIOD_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 72
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.PERIOD_MARGIN,
                requiredProps: requiredProps
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: separatorColor,
            onChange: val => setAttributes({
              separatorColor: val
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Width', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.SEPARATOR_WIDTH,
            requiredProps: requiredProps,
            min: 0,
            max: 10,
            step: 1
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Features ', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.FEATURE_PADDING,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TabPanelControl, {
            options: [...(showFeatureHeading ? [{
              value: 'normal',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks')
            }] : []), ...(showFeatureDesc ? [{
              value: 'hover',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'zoloblocks')
            }] : []), ...(showFeatures ? [{
              value: 'active',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lists', 'zoloblocks')
            }] : [])],
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: featureTitleColor,
                onChange: val => setAttributes({
                  featureTitleColor: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                label: "Typography",
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.FEATURE_TITLE_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 72
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: featureDescColor,
                onChange: val => setAttributes({
                  featureDescColor: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                label: "Typography",
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.FEATURE_DESC_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 72
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.FEATURE_DESC_MARGIN,
                requiredProps: requiredProps,
                forBorderRadius: false
              })]
            }),
            activeComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: featureColor,
                onChange: val => setAttributes({
                  featureColor: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                label: "Typography",
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.FEATURE_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 72
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.FEATURE_MARGIN,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Item Gap', 'zoloblocks'),
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.FEATURE_ITEM_GAP,
                min: 0,
                max: 100,
                step: 1
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "zolo-custom-heading",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: featureIconColor,
                onChange: val => setAttributes({
                  featureIconColor: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.FEATURE_ICON_SIZE,
                min: 0,
                max: 100,
                step: 1
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: featureIconBgColor,
                onChange: val => setAttributes({
                  featureIconBgColor: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.FEATURE_ICON_PADDING,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gap', 'zoloblocks'),
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.FEATURE_ICON_GAP,
                min: 0,
                max: 100,
                step: 1
              })]
            })
          })]
        }), (showBtn || showChatBtn) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Buttons', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.BTNS_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          })
        }), showBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Primary Button', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: btnTextColor,
                onChange: val => setAttributes({
                  btnTextColor: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.BTN_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 72
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                noMainBGImg: true,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.BTN_NORMAL_BG,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.BTN_PADDING,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), btnsDirection === 'column' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.BTN_MARGIN,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.BTN_BORDER,
                requiredProps: requiredProps,
                hoverControl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'zoloblocks'),
                  color: btnHoverBorderColor,
                  onChange: val => setAttributes({
                    btnHoverBorderColor: val
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.BTN_SHADOW,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.BTN_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: btnHoverTextColor,
                onChange: val => setAttributes({
                  btnHoverTextColor: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                noMainBGImg: true,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.BTN_HOVER_BG,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.BTN_HOVER_SHADOW,
                requiredProps: requiredProps
              })]
            })
          })
        }), showChatBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Secondary Button', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: chatBtnColor,
                onChange: val => setAttributes({
                  chatBtnColor: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.CBTN_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 72
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                noMainBGImg: true,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CBTN_NORMAL_BG,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CBTN_PADDING,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), btnsDirection === 'column' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CBTN_MARGIN,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CBTN_BORDER,
                requiredProps: requiredProps,
                hoverControl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'zoloblocks'),
                  color: chatBtnHoverBorderColor,
                  onChange: val => setAttributes({
                    chatBtnHoverBorderColor: val
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CBTN_SHADOW,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CBTN_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: chatBtnHoverColor,
                onChange: val => setAttributes({
                  chatBtnHoverColor: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                noMainBGImg: true,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CBTN_HOVER_BG,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CBTN_HOVER_SHADOW,
                requiredProps: requiredProps
              })]
            })
          })
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps,
          block: "zolo/pricing-table"
        })
      })
    })
  }, "controls");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/pricing-table/save.js":
/*!******************************************!*\
  !*** ./src/blocks/pricing-table/save.js ***!
  \******************************************/
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  classArrayToStr,
  DisplayZoloIcon
} = window.zoloModule;
const Save = props => {
  const {
    attributes
  } = props;
  const {
    preset,
    uniqueId,
    parentClasses,
    styles,
    titleText,
    titleTagName,
    showDesc,
    descText,
    orginalPrice,
    pricePrefix,
    priceSuffix,
    price,
    sale,
    period,
    showFeatureHeading,
    showFeatures,
    hideFeatureIcon,
    featureTitle,
    showFeatureDesc,
    featureDesc,
    features,
    showBtn,
    buttonText,
    buttonLink,
    showChatBtn,
    chatBtnLink,
    chatBtnText,
    showRibbon,
    ribbonTitle,
    ribbonPosition,
    btnsPosition,
    btnsDirection,
    zoloId
  } = attributes;
  const blockprops = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(uniqueId, classArrayToStr(parentClasses), preset !== '' && preset)
  });

  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('zolo.blocks.render.hook.after', [], props);
  const pricingPeriod = period.length !== 0 && period.split(',');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    ...blockprops,
    ...(zoloId && {
      id: zoloId
    }),
    children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "zolo-item",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "zolo-head-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          tagName: titleTagName,
          value: titleText,
          className: "zolo-package-title"
        }), showRibbon && ribbonTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: `zolo-ribbon-btn ${ribbonPosition}`,
          children: ribbonTitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "zolo-price-info",
          children: [orginalPrice && sale && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "zolo-orginal-price",
            children: [pricePrefix && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "currency",
              children: pricePrefix
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "price",
              children: orginalPrice
            })]
          }), price && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "zolo-price",
            children: [pricePrefix && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "currency",
              children: pricePrefix
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "price",
              children: price
            }), priceSuffix && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "fractional",
              children: priceSuffix
            })]
          }), pricingPeriod && pricingPeriod.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "zolo-user-month",
            children: pricingPeriod.map((name, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: `zolo-period text-${index}`,
              children: name
            }, index))
          })]
        }), showDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          tagName: "div",
          className: "zolo-package-desc",
          value: descText
        }), btnsPosition === 'middle' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: (showBtn || showChatBtn) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: `zolo-link-btn ${btnsDirection}`,
            children: [showBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              tagName: "a",
              className: "zolo-buy-btn",
              value: buttonText,
              href: buttonLink && buttonLink.url ? buttonLink.url : '# ',
              target: buttonLink && buttonLink.openInNewTab && '_blank',
              rel: buttonLink && buttonLink.openInNewTab && 'noopener noreferrer'
            }), showChatBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              tagName: "a",
              className: "zolo-chat-btn",
              value: chatBtnText,
              href: chatBtnLink && chatBtnLink.url ? chatBtnLink.url : '# ',
              target: chatBtnLink && chatBtnLink.openInNewTab && '_blank',
              rel: chatBtnLink && chatBtnLink.openInNewTab && 'noopener noreferrer'
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "zolo-features-info",
        children: [showFeatureHeading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          tagName: "div",
          value: featureTitle,
          className: "zolo-features-title"
        }), showFeatureDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          tagName: "div",
          value: featureDesc,
          className: "zolo-features-desc"
        }), features.length !== 0 && showFeatures && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
          className: "features",
          children: features.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
            children: [item.icon && hideFeatureIcon !== true && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "zolo-check-icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DisplayZoloIcon, {
                icon: item.icon
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "zolo-list-text",
              children: item.text
            })]
          }, index))
        }), btnsPosition === 'bottom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: (showBtn || showChatBtn) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: `zolo-link-btn ${btnsDirection}`,
            children: [showBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              tagName: "a",
              className: "zolo-buy-btn",
              value: buttonText,
              href: buttonLink && buttonLink.url ? buttonLink.url : '# ',
              target: buttonLink && buttonLink.openInNewTab && '_blank',
              rel: buttonLink && buttonLink.openInNewTab && 'noopener noreferrer',
              title: buttonText
            }), showChatBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              tagName: "a",
              className: "zolo-chat-btn",
              value: chatBtnText,
              href: chatBtnLink && chatBtnLink.url ? chatBtnLink.url : '# ',
              target: chatBtnLink && chatBtnLink.openInNewTab && '_blank',
              rel: chatBtnLink && chatBtnLink.openInNewTab && 'noopener noreferrer',
              title: chatBtnText
            })]
          })
        })]
      })]
    }), renderHookAfter && renderHookAfter]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/pricing-table/sortable.js":
/*!**********************************************!*\
  !*** ./src/blocks/pricing-table/sortable.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




/**
 * Internal depencencies
 */

const {
  ZoloIconPicker,
  SortableItem,
  SortableControl
} = window.zoloModule;
const Sortable = ({
  features,
  setAttributes
}) => {
  const deepCloneFeatures = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(features);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "sortable",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "zb-repeater-flex",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "repeater-label",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a List', 'zoloblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: () => {
          setAttributes({
            features: [...features, {
              id: features.length + 1,
              text: `List Item #${features.length + 1}`,
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>'
            }]
          });
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            d: "M12 8V16",
            stroke: "#4D4D4D",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            d: "M16 12H8",
            stroke: "#4D4D4D",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SortableControl, {
      defaultItems: features,
      attributeName: "features",
      setAttributes: setAttributes,
      children: deepCloneFeatures && deepCloneFeatures.map((feature, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "dnd-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            className: "dnd-trash",
            icon: "trash",
            onClick: () => {
              const newItems = [...deepCloneFeatures];
              newItems.splice(index, 1);
              setAttributes({
                features: newItems
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SortableItem, {
            id: feature.id,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
              title: feature.text || 'Title',
              initialOpen: false,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text', 'zoloblocks'),
                value: feature.text,
                onChange: value => {
                  const newItems = [...deepCloneFeatures];
                  newItems[index].text = value;
                  setAttributes({
                    features: newItems
                  });
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ZoloIconPicker, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'zoloblocks'),
                value: feature.icon,
                onChange: value => {
                  const newItems = [...deepCloneFeatures];
                  newItems[index].icon = value;
                  setAttributes({
                    features: newItems
                  });
                }
              })]
            })
          }, feature.id)]
        }, index);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);

/***/ }),

/***/ "./src/blocks/pricing-table/style.js":
/*!*******************************************!*\
  !*** ./src/blocks/pricing-table/style.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/pricing-table/style.scss");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/blocks/pricing-table/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/pricing-table/constants/typoPrefixConstant.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
//WordPress dependencies




//block constants



const {
  generateBackgroundControlStyles,
  generateBorderStyle,
  generateBoxShadowStyles,
  generateDimensionStyle,
  generateTypographyStyles,
  generateResRangeStyle,
  generateResAlignmentStyle,
  generateTextShadowStyles,
  generateNormalBGControlStyles,
  GlobalStyleHanlder
} = window.zoloModule;
const Style = ({
  props
}) => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    uniqueId,
    btnTextColor,
    btnHoverTextColor,
    btnHoverBorderColor,
    chatBtnColor,
    chatBtnHoverColor,
    chatBtnHoverBorderColor,
    //ribbon
    ribbonXPosition,
    ribbonYPosition,
    ribbonRotate,
    //style
    titleColor,
    titleBgColor,
    descColor,
    priceColor,
    prefixSize,
    suffixSize,
    prefixPosition,
    suffixPosition,
    orginalPriceColor,
    periodColor,
    featureTitleColor,
    featureDescColor,
    featureColor,
    featureIconColor,
    featureIconBgColor,
    ribbonColor,
    separatorColor
  } = attributes;
  //header style
  const {
    typoStylesDesktop: titleTypoDesktop,
    typoStylesTab: titleTypoTab,
    typoStylesMobile: titleTypoMobile
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.TITLE_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: titleMarginDesktop,
    dimensionStylesTab: titleMarginTab,
    dimensionStylesMobile: titleMarginMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.TITLE_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: titlePaddingDesktop,
    dimensionStylesTab: titlePaddingTab,
    dimensionStylesMobile: titlePaddingMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.TITLE_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: titleTextPaddingDesk,
    dimensionStylesTab: titleTextPaddingTab,
    dimensionStylesMobile: titleTextPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.TITLE_TEXT_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    desktopBorderStyle: titleBorderDesktop,
    tabBorderStyle: titleBorderTab,
    mobBorderStyle: titleBorderMob
  } = generateBorderStyle({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.TITLE_BORDER
  });
  const {
    dimensionStylesDesktop: titleBorderRadiusDesktop,
    dimensionStylesTab: titleBorderRadiusTab,
    dimensionStylesMobile: titleBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.TITLE_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    textShadowStyle: titleTextShadowStyle
  } = generateTextShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.TITLE_TEXT_SHADOW
  });
  const {
    backgroundStylesDesktop: titleTextBgDesktop,
    backgroundStylesTab: titleTextBgTab,
    backgroundStylesMobile: titleTextBgMob
  } = generateNormalBGControlStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.TITLE_BG
  });
  const {
    typoStylesDesktop: descTypoDesktop,
    typoStylesTab: descTypoTab,
    typoStylesMobile: descTypoMobile
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.DESC_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: descMarginDesktop,
    dimensionStylesTab: descMarginTab,
    dimensionStylesMobile: descMarginMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.DESC_MARGIN,
    styleFor: 'margin',
    attributes
  });

  //price style
  const {
    typoStylesDesktop: priceTypoDesktop,
    typoStylesTab: priceTypoTab,
    typoStylesMobile: priceTypoMobile
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.PRICE_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: priceMarginDesktop,
    dimensionStylesTab: priceMarginTab,
    dimensionStylesMobile: priceMarginMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.PRICE_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    desktopBorderStyle: priceBorderDesktop,
    tabBorderStyle: priceBorderTab,
    mobBorderStyle: priceBorderMob
  } = generateBorderStyle({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.PRICE_BORDER
  });
  const {
    dimensionStylesDesktop: priceBRadiusDesktop,
    dimensionStylesTab: priceBRadiusTab,
    dimensionStylesMobile: priceBRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.PRICE_BRADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: pricePaddingDesktop,
    dimensionStylesTab: pricePaddingTab,
    dimensionStylesMobile: pricePaddingMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.PRICE_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    backgroundStylesDesktop: priceBgDesktop,
    backgroundStylesTab: priceBgTab,
    backgroundStylesMobile: priceBgMob
  } = generateNormalBGControlStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.PRICE_BG
  });
  const {
    typoStylesDesktop: orginalPriceTypoDesktop,
    typoStylesTab: orginalPriceTypoTab,
    typoStylesMobile: orginalPriceTypoMobile
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.ORGINAL_PRICE_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: orginalPriceMarginDesktop,
    dimensionStylesTab: orginalPriceMarginTab,
    dimensionStylesMobile: orginalPriceMarginMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.ORGINAL_PRICE_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    typoStylesDesktop: periodTypoDesktop,
    typoStylesTab: periodTypoTab,
    typoStylesMobile: periodTypoMobile
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.PERIOD_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: periodMarginDesktop,
    dimensionStylesTab: periodMarginTab,
    dimensionStylesMobile: periodMarginMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.PERIOD_MARGIN,
    styleFor: 'margin',
    attributes
  });

  //feature style
  const {
    typoStylesDesktop: featureTitleTypoDesktop,
    typoStylesTab: featureTitleTypoTab,
    typoStylesMobile: featureTitleTypoMobile
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.FEATURE_TITLE_TYPOGRAPHY,
    attributes
  });
  const {
    typoStylesDesktop: featureDescTypoDesktop,
    typoStylesTab: featureDescTypoTab,
    typoStylesMobile: featureDescTypoMobile
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.FEATURE_DESC_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: featureDescMarginDesktop,
    dimensionStylesTab: featureDescMarginTab,
    dimensionStylesMobile: featureDescMarginMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.FEATURE_DESC_MARGIN,
    styleFor: 'margin',
    attributes
  });
  //list
  const {
    typoStylesDesktop: featureTypoDesktop,
    typoStylesTab: featureTypoTab,
    typoStylesMobile: featureTypoMobile
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.FEATURE_TYPOGRAPHY,
    attributes
  });
  const {
    desktopRangeStyle: featureItemGapDesktop,
    tabRangeStyle: featureItemGapTab,
    mobRangeStyle: featureItemGapMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.FEATURE_ITEM_GAP,
    property: 'gap',
    attributes
  });
  const {
    dimensionStylesDesktop: featureMarginDesktop,
    dimensionStylesTab: featureMarginTab,
    dimensionStylesMobile: featureMarginMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.FEATURE_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: featurePaddingDesktop,
    dimensionStylesTab: featurePaddingTab,
    dimensionStylesMobile: featurePaddingMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.FEATURE_PADDING,
    styleFor: 'padding',
    attributes
  });

  //icon
  const {
    dimensionStylesDesktop: featureIconDeskPadding,
    dimensionStylesTab: featureIconTabPadding,
    dimensionStylesMobile: featureIconMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.FEATURE_ICON_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    desktopRangeStyle: featureIconSizeDesktop,
    tabRangeStyle: featureIconSizeTab,
    mobRangeStyle: featureIconSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.FEATURE_ICON_SIZE,
    property: 'width',
    attributes
  });
  const {
    desktopRangeStyle: featureIconHSizeDesktop,
    tabRangeStyle: featureIconHSizeTab,
    mobRangeStyle: featureIconHSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.FEATURE_ICON_SIZE,
    property: 'height',
    attributes
  });
  const {
    desktopRangeStyle: featureIconGapDesktop,
    tabRangeStyle: featureIconGapTab,
    mobRangeStyle: featureIconGapMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.FEATURE_ICON_GAP,
    property: 'gap',
    attributes
  });

  // content alignment
  const {
    desktopAlignStyle: alignDesktop,
    tabAlignStyle: alignTab,
    mobAlignStyle: alignMob
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.ALIGNENT,
    property: 'justify-content',
    attributes
  });
  const {
    desktopAlignStyle: featureInfoAlignDesktop,
    tabAlignStyle: featureInfoAlignTab,
    mobAlignStyle: featureInfoAlignMob
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.ALIGNENT,
    property: 'text-align',
    attributes
  });

  // buttons
  const {
    dimensionStylesDesktop: btnsMarginDesktop,
    dimensionStylesTab: btnsMarginTab,
    dimensionStylesMobile: btnsMarginMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.BTNS_MARGIN,
    styleFor: 'margin',
    attributes
  });

  //button style
  const {
    dimensionStylesDesktop: btnMarginDesktop,
    dimensionStylesTab: btnMarginTab,
    dimensionStylesMobile: btnMarginMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.BTN_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: btnPaddingDesktop,
    dimensionStylesTab: btnPaddingTab,
    dimensionStylesMobile: btnPaddingMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.BTN_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: btnDeskRadius,
    dimensionStylesTab: btnTabRadius,
    dimensionStylesMobile: btnMobRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.BTN_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    typoStylesDesktop: btnTypoDesktop,
    typoStylesTab: btnTypoTab,
    typoStylesMobile: btnTypoMobile
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.BTN_TYPOGRAPHY,
    attributes
  });
  const {
    backgroundStylesDesktop: btnBgDesktop,
    backgroundStylesTab: btnBgTab,
    backgroundStylesMobile: btnBgMob
  } = generateNormalBGControlStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.BTN_NORMAL_BG
  });
  const {
    backgroundStylesDesktop: btnHoverBgDesktop,
    backgroundStylesTab: btnHoverBgTab,
    backgroundStylesMobile: btnHoverBgMob
  } = generateNormalBGControlStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.BTN_HOVER_BG
  });
  const {
    desktopBorderStyle: btnBorderDesktop,
    tabBorderStyle: btnBorderTab,
    mobBorderStyle: btnBorderMob
  } = generateBorderStyle({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.BTN_BORDER
  });
  const {
    boxShadowStyle: btnShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.BTN_SHADOW
  });
  const {
    boxShadowStyle: btnHoverShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.BTN_HOVER_SHADOW
  });

  // chat button
  const {
    dimensionStylesDesktop: chatBtnMarginDesktop,
    dimensionStylesTab: chatBtnMarginTab,
    dimensionStylesMobile: chatBtnMarginMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.CBTN_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: chatBtnPaddingDesktop,
    dimensionStylesTab: chatBtnPaddingTab,
    dimensionStylesMobile: chatBtnPaddingMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.CBTN_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: chatBtnDeskRadius,
    dimensionStylesTab: chatBtnTabRadius,
    dimensionStylesMobile: chatBtnMobRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.CBTN_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    typoStylesDesktop: chatBtnTypoDesktop,
    typoStylesTab: chatBtnTypoTab,
    typoStylesMobile: chatBtnTypoMobile
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.CBTN_TYPOGRAPHY,
    attributes
  });
  const {
    backgroundStylesDesktop: chatBtnBgDesktop,
    backgroundStylesTab: chatBtnBgTab,
    backgroundStylesMobile: chatBtnBgMob
  } = generateNormalBGControlStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.CBTN_NORMAL_BG
  });
  const {
    backgroundStylesDesktop: chatBtnHoverBgDesktop,
    backgroundStylesTab: chatBtnHoverBgTab,
    backgroundStylesMobile: chatBtnHoverBgMob
  } = generateNormalBGControlStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.CBTN_HOVER_BG
  });
  const {
    desktopBorderStyle: chatBtnBorderDesktop,
    tabBorderStyle: chatBtnBorderTab,
    mobBorderStyle: chatBtnBorderMob
  } = generateBorderStyle({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.CBTN_BORDER
  });
  const {
    boxShadowStyle: chatBtnShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.CBTN_SHADOW
  });
  const {
    boxShadowStyle: chatBtnHoverShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.CBTN_HOVER_SHADOW
  });

  //ribbon style
  const {
    typoStylesDesktop: ribbonTypoDesktop,
    typoStylesTab: ribbonTypoTab,
    typoStylesMobile: ribbonTypoMobile
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.RIBBON_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: ribbonMarginDesktop,
    dimensionStylesTab: ribbonMarginTab,
    dimensionStylesMobile: ribbonMarginMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.RIBBON_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: ribbonPaddingDesktop,
    dimensionStylesTab: ribbonPaddingTab,
    dimensionStylesMobile: ribbonPaddingMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.RIBBON_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    desktopBorderStyle: ribbonBorderDesktop,
    tabBorderStyle: ribbonBorderTab,
    mobBorderStyle: ribbonBorderMob
  } = generateBorderStyle({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.RIBBON_BORDER
  });
  const {
    dimensionStylesDesktop: ribbonDeskRadius,
    dimensionStylesTab: ribbonTabRadius,
    dimensionStylesMobile: ribbonMobRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.RIBBON_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    backgroundStylesDesktop: ribbonBgDesktop,
    backgroundStylesTab: ribbonBgTab,
    backgroundStylesMobile: ribbonBgMob
  } = generateNormalBGControlStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.RIBBON_BG
  });

  //wrapper style
  const {
    dimensionStylesDesktop: wrapperMarginDesktop,
    dimensionStylesTab: wrapperMarginTab,
    dimensionStylesMobile: wrapperMarginMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.WRAPPER_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: wrapperPaddingDesktop,
    dimensionStylesTab: wrapperPaddingTab,
    dimensionStylesMobile: wrapperPaddingMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.WRAPPER_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    backgroundStylesDesktop: wrapperBgDesktop,
    backgroundStylesTab: wrapperBgTab,
    backgroundStylesMobile: wrapperBgMob
  } = generateNormalBGControlStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.WRAPPER_BG
  });
  const {
    boxShadowStyle: wrapperShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.WRAPPER_SHADOW
  });
  const {
    desktopBorderStyle: wrapperBorderDesktop,
    tabBorderStyle: wrapperBorderTab,
    mobBorderStyle: wrapperBorderMob
  } = generateBorderStyle({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.WRAPPER_BORDER
  });
  const {
    dimensionStylesDesktop: wrapperDeskRadius,
    dimensionStylesTab: wrapperTabRadius,
    dimensionStylesMobile: wrapperMobRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.WRAPPER_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });

  // separator
  const {
    desktopRangeStyle: separatorWidthDesktop,
    tabRangeStyle: separatorWidthTab,
    mobRangeStyle: separatorWidthMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_3__.SEPARATOR_WIDTH,
    property: 'border-top-width',
    attributes
  });

  //css style
  const wrapperStylesDesktop = `
		.zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-item{
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${wrapperBgDesktop}
			${wrapperBorderDesktop}
			${wrapperShadow}
      ${wrapperDeskRadius}
      --zolo-ribbon-xposition: ${ribbonXPosition}px;
      --zolo-ribbon-yposition: ${ribbonYPosition}px;
      ${ribbonRotate != '' && typeof ribbonRotate == 'number' ? `--zolo-ribbon-rotate: ${ribbonRotate}deg;` : ''}
		}
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info {
      ${separatorWidthDesktop}
      border-top-style: solid;
      border-top-color: ${separatorColor};
    }
	`;
  const wrapperStylesTab = `
		.zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-item{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBgTab}
			${wrapperBorderTab}
            ${wrapperTabRadius}
		}
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info {
      ${separatorWidthTab}
    }
	`;
  const wrapperStylesMobile = `
		.zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-item{
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${wrapperBgMob}
			${wrapperBorderMob}
            ${wrapperMobRadius}
		}
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info {
      ${separatorWidthMob}
    }
	`;
  const headerStylesDesktop = `
    .${uniqueId} .zolo-head-content{
      ${titlePaddingDesktop}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-package-title{
      ${titleTypoDesktop}
      ${titleMarginDesktop}
      ${titleBorderDesktop}
      ${titleBorderRadiusDesktop}
      ${titleTextShadowStyle}
      ${titleColor ? `color: ${titleColor};` : ''}
      ${titleTextBgDesktop}
      ${titleTextPaddingDesk}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-package-desc{
      ${descTypoDesktop}
      ${descMarginDesktop}
      ${descColor ? `color: ${descColor};` : ''}
    }
  `;
  const headerStylesTab = `
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-head-content{
      ${titlePaddingTab}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-package-title{
      ${titleTypoTab}
      ${titleMarginTab}
      ${titleBorderTab}
      ${titleBorderRadiusTab}
      ${titleTextBgTab}
      ${titleTextPaddingTab}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-package-desc{
      ${descTypoTab}
      ${descMarginTab}
    }
  `;
  const headerStylesMob = `
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-head-content{
      ${titlePaddingMobile}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-package-title{
      ${titleTypoMobile}
      ${titleBorderMob}
      ${titleMarginMobile}
      ${titleBorderRadiusMob}
      ${titleTextBgMob}
      ${titleTextPaddingMob}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-package-desc{
      ${descTypoMobile}
      ${descMarginMobile}
    }
  `;
  const priceStylesDesktop = `
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-price-info{
      ${priceMarginDesktop}
      ${alignDesktop}
    }
    .wp-block-zolo-pricing-table.zolo-block.${uniqueId} .zolo-price{
      ${priceTypoDesktop}
      ${priceColor ? `color: ${priceColor};` : ''}
    }
    .wp-block-zolo-pricing-table.zolo-block.style-2.${uniqueId} .zolo-price{
      ${priceBorderDesktop}
      ${priceBRadiusDesktop}
      ${pricePaddingDesktop}
      ${priceBgDesktop}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-price .currency{
      ${prefixSize ? ` font-size: ${prefixSize}px;` : ''}
      ${prefixPosition ? ` top: ${prefixPosition}px;` : ''}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-price .fractional{
      ${suffixSize ? ` font-size: ${suffixSize}px;` : ''}
      ${suffixPosition ? ` top: ${suffixPosition}px;` : ''}
    }

    .wp-block-zolo-pricing-table.zolo-block.${uniqueId} .zolo-orginal-price{
      ${orginalPriceTypoDesktop}
      ${orginalPriceColor ? `color: ${orginalPriceColor};` : ''}
      ${orginalPriceMarginDesktop}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-user-month{
      ${periodTypoDesktop}
      ${periodColor ? `color: ${periodColor};` : ''}
      ${periodMarginDesktop}
    }
  `;
  const priceStylesTab = `
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-price-info{
      ${priceMarginTab}
      ${alignTab}
    }
    .wp-block-zolo-pricing-table.zolo-block.${uniqueId} .zolo-price{
      ${priceTypoTab}
    }
    .wp-block-zolo-pricing-table.zolo-block.style-2 .${uniqueId} .zolo-price{
      ${priceBorderTab}
      ${priceBRadiusTab}
      ${pricePaddingTab}
      ${priceBgTab}
    }
    .wp-block-zolo-pricing-table.zolo-block.${uniqueId} .zolo-orginal-price{
      ${orginalPriceTypoTab}
      ${orginalPriceMarginTab}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-user-month{
      ${periodTypoTab}
      ${periodMarginTab}
    }
  `;
  const priceStylesMob = `
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-price-info{
      ${priceMarginMobile}
      ${alignMob}
    }
    .wp-block-zolo-pricing-table.zolo-block.${uniqueId} .zolo-price{
      ${priceTypoMobile}
    }
    .wp-block-zolo-pricing-table.zolo-block.style-2.${uniqueId} .zolo-price{
      ${priceBorderMob}
      ${priceBRadiusMob}
      ${pricePaddingMobile}
      ${priceBgMob}
    }
    .wp-block-zolo-pricing-table.zolo-block.${uniqueId} .zolo-orginal-price{
      ${orginalPriceTypoMobile}
      ${orginalPriceMarginMobile}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-user-month{
      ${periodTypoMobile}
      ${periodMarginMobile}
    }
  `;
  const featuresStylesDesktop = `
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-title{
      ${featureTitleTypoDesktop}
      ${featureTitleColor ? `color: ${featureTitleColor};` : ''}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-desc{
      ${featureDescTypoDesktop}
      ${featureDescMarginDesktop}
      ${featureDescColor ? `color: ${featureDescColor};` : ''}
    }

    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info, .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-head-content{
      ${featureInfoAlignDesktop}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info{
      ${featurePaddingDesktop}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info .features{
      ${featureItemGapDesktop}
      ${featureMarginDesktop}
    }

    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info .zolo-check-icon{
      ${featureIconBgColor ? `background-color: ${featureIconBgColor};` : ''}
      ${featureIconDeskPadding}
    }

    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info .zolo-check-icon svg{
      ${featureIconColor ? `fill: ${featureIconColor};` : ''}
      ${featureIconSizeDesktop}
      ${featureIconHSizeDesktop}
    }

    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info .features li{
      ${featureTypoDesktop}
      ${alignDesktop}
      ${featureIconGapDesktop}
      ${featureColor ? `color: ${featureColor};` : ''}
    }
  `;
  const featuresStylesTab = `
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-title{
      ${featureTitleTypoTab}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-desc{
      ${featureDescTypoTab}
      ${featureDescMarginTab}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info, .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-head-content{
      ${featureInfoAlignTab}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info {
      ${featurePaddingTab}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info .features{
      ${featureItemGapTab}
      ${featureMarginTab}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info .zolo-check-icon{

      ${featureIconTabPadding}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info .zolo-check-icon svg{
      ${featureIconSizeTab}
      ${featureIconHSizeTab}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info .features li{
      ${featureTypoTab}
      ${alignTab}
      ${featureIconGapTab}
    }
  `;
  const featuresStylesMobile = `
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-title{
        ${featureTitleTypoMobile}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-desc{
      ${featureDescTypoMobile}
      ${featureDescMarginMobile}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info, .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-head-content{
      ${featureInfoAlignMob}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info {
      ${featurePaddingMobile}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info .features{
      ${featureItemGapMob}
      ${featureMarginMobile}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info .zolo-check-icon{
      ${featureIconMobPadding}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info .zolo-check-icon svg{
      ${featureIconSizeMob}
      ${featureIconHSizeMob}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-features-info .features li{
      ${featureTypoMobile}
      ${alignMob}
      ${featureIconGapMob}
    }
  `;
  const buttonStylesDesktop = `
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn{
      ${btnsMarginDesktop}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn a.zolo-buy-btn{
      ${btnTextColor ? `color: ${btnTextColor};` : ''}
      ${btnMarginDesktop}
      ${btnPaddingDesktop}
      ${btnTypoDesktop}
      ${btnBgDesktop}
      ${btnBorderDesktop}
      ${btnShadow}
      ${btnDeskRadius}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn a.zolo-buy-btn:hover{
      ${btnHoverTextColor ? `color: ${btnHoverTextColor};` : ''}
      ${btnHoverBorderColor ? `border-color: ${btnHoverBorderColor};` : ''}
      ${btnHoverBgDesktop}
      ${btnHoverShadow}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn a.zolo-chat-btn{
      ${chatBtnColor ? `color: ${chatBtnColor};` : ''}
      ${chatBtnMarginDesktop}
      ${chatBtnPaddingDesktop}
      ${chatBtnTypoDesktop}
      ${chatBtnBgDesktop}
      ${chatBtnBorderDesktop}
      ${chatBtnShadow}
      ${chatBtnDeskRadius}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn a.zolo-chat-btn:hover{
      ${chatBtnHoverColor ? `color: ${chatBtnHoverColor};` : ''}
      ${chatBtnHoverBorderColor ? `border-color: ${chatBtnHoverBorderColor};` : ''}
      ${chatBtnHoverBgDesktop}
      ${chatBtnHoverShadow}
    }
  `;
  const buttonStylesTab = `
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn{
      ${btnsMarginTab}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn a.zolo-buy-btn{
      ${btnMarginTab}
      ${btnPaddingTab}
      ${btnTypoTab}
      ${btnBgTab}
      ${btnBorderTab}
      ${btnTabRadius}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn a.zolo-buy-btn:hover{
      ${btnHoverBgTab}
    }

    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn a.zolo-chat-btn{
      ${chatBtnMarginTab}
      ${chatBtnPaddingTab}
      ${chatBtnTypoTab}
      ${chatBtnBgTab}
      ${chatBtnBorderTab}
      ${chatBtnTabRadius}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn a.zolo-chat-btn:hover{
      ${chatBtnHoverBgTab}
    }
  `;
  const buttonStylesMob = `
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn{
      ${btnsMarginMobile}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn a.zolo-buy-btn{
      ${btnMarginMobile}
      ${btnPaddingMobile}
      ${btnTypoMobile}
      ${btnBgMob}
      ${btnBorderMob}
      ${btnMobRadius}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn a.zolo-buy-btn:hover{
      ${btnHoverBgMob}
    }

    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn a.zolo-chat-btn{
      ${chatBtnMarginMobile}
      ${chatBtnPaddingMobile}
      ${chatBtnTypoMobile}
      ${chatBtnBgMob}
      ${chatBtnBorderMob}
      ${chatBtnMobRadius}
    }
    .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-link-btn a.zolo-chat-btn:hover{
      ${chatBtnHoverBgMob}
    }
  `;
  const ribbonStylesDesktop = `
      .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-ribbon-btn{
        ${ribbonColor ? `color: ${ribbonColor};` : ''}
        ${ribbonBgDesktop}
        ${ribbonPaddingDesktop}
        ${ribbonMarginDesktop}
        ${ribbonBorderDesktop}
        ${ribbonDeskRadius}
        ${ribbonTypoDesktop}
        -webkit-transform: translate(var(--zolo-ribbon-xposition, 0), var(--zolo-ribbon-yposition, 0)) rotate(var(--zolo-ribbon-rotate, 0));
        transform: translate(var(--zolo-ribbon-xposition, 0), var(--zolo-ribbon-yposition, 0)) rotate(var(--zolo-ribbon-rotate, 0));
      }
    `;
  const ribbonStylesTab = `
      .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-ribbon-btn{
        ${ribbonTypoTab}
        ${ribbonBgTab}
        ${ribbonPaddingTab}
        ${ribbonMarginTab}
        ${ribbonBorderTab}
        ${ribbonTabRadius}
      }
    `;
  const ribbonStylesMobile = `
      .zolo-block.wp-block-zolo-pricing-table.${uniqueId} .zolo-ribbon-btn{
        ${ribbonTypoMobile}
        ${ribbonBgMob}
        ${ribbonPaddingMobile}
        ${ribbonMarginMobile}
        ${ribbonBorderMob}
        ${ribbonMobRadius}
      }
    `;
  const desktopAllStyle = `
		${wrapperStylesDesktop}
    ${headerStylesDesktop}
    ${priceStylesDesktop}
    ${featuresStylesDesktop}
    ${ribbonStylesDesktop}
    ${buttonStylesDesktop}

	`;
  const tabletAllStyle = `
		${wrapperStylesTab}
    ${headerStylesTab}
    ${priceStylesTab}
    ${featuresStylesTab}
    ${ribbonStylesTab}
    ${buttonStylesTab}
	`;
  const mobileAllStyle = `
		${wrapperStylesMobile}
        ${headerStylesMob}
        ${priceStylesMob}
        ${featuresStylesMobile}
        ${ribbonStylesMobile}
        ${buttonStylesMob}
	`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.pricing.table.desktop.all.style', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.pricing.table.tab.all.style', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.pricing.table.mobile.all.style', mobileAllStyle, props)
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/global/constants.js":
/*!*********************************!*\
  !*** ./src/global/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANIMATION_TYPES: () => (/* binding */ ANIMATION_TYPES),
/* harmony export */   BACKGROUND_TYPES: () => (/* binding */ BACKGROUND_TYPES),
/* harmony export */   BORDER_TYPES: () => (/* binding */ BORDER_TYPES),
/* harmony export */   BOX_SHADOW_TYPES: () => (/* binding */ BOX_SHADOW_TYPES),
/* harmony export */   CONTENT_POSITIONS: () => (/* binding */ CONTENT_POSITIONS),
/* harmony export */   CONTENT_WIDTH: () => (/* binding */ CONTENT_WIDTH),
/* harmony export */   CONTENT_WIDTH_TYPES: () => (/* binding */ CONTENT_WIDTH_TYPES),
/* harmony export */   DEFAULT_ALIGNS: () => (/* binding */ DEFAULT_ALIGNS),
/* harmony export */   DEFAULT_ALIGNS_VERTICAL: () => (/* binding */ DEFAULT_ALIGNS_VERTICAL),
/* harmony export */   EASING_TYPES: () => (/* binding */ EASING_TYPES),
/* harmony export */   EXCLUDE_BY: () => (/* binding */ EXCLUDE_BY),
/* harmony export */   FLEX_ALIGNS: () => (/* binding */ FLEX_ALIGNS),
/* harmony export */   FLEX_ALIGNS_ROW: () => (/* binding */ FLEX_ALIGNS_ROW),
/* harmony export */   FLEX_ALIGN_OPTIONS: () => (/* binding */ FLEX_ALIGN_OPTIONS),
/* harmony export */   FLEX_DIRECTIONS: () => (/* binding */ FLEX_DIRECTIONS),
/* harmony export */   FLEX_HORIZONTAL_OPTIONS: () => (/* binding */ FLEX_HORIZONTAL_OPTIONS),
/* harmony export */   FLEX_JUSTIFIES: () => (/* binding */ FLEX_JUSTIFIES),
/* harmony export */   FLEX_JUSTIFIES_ROW: () => (/* binding */ FLEX_JUSTIFIES_ROW),
/* harmony export */   FLEX_WRAPS: () => (/* binding */ FLEX_WRAPS),
/* harmony export */   FLIP_ICON: () => (/* binding */ FLIP_ICON),
/* harmony export */   HEADING: () => (/* binding */ HEADING),
/* harmony export */   ICON_BOX_OPTIONS: () => (/* binding */ ICON_BOX_OPTIONS),
/* harmony export */   ICON_HPOSITIONS: () => (/* binding */ ICON_HPOSITIONS),
/* harmony export */   ICON_POSITIONS: () => (/* binding */ ICON_POSITIONS),
/* harmony export */   ICON_STATUS: () => (/* binding */ ICON_STATUS),
/* harmony export */   INCLUDE_BY: () => (/* binding */ INCLUDE_BY),
/* harmony export */   MASK_POSITIONS: () => (/* binding */ MASK_POSITIONS),
/* harmony export */   MASK_REPEATS: () => (/* binding */ MASK_REPEATS),
/* harmony export */   MASK_SHAPES: () => (/* binding */ MASK_SHAPES),
/* harmony export */   MASK_SIZES: () => (/* binding */ MASK_SIZES),
/* harmony export */   NORMAL_HOVER: () => (/* binding */ NORMAL_HOVER),
/* harmony export */   NORMAL_HTML_TAG: () => (/* binding */ NORMAL_HTML_TAG),
/* harmony export */   OBJECT_FITS: () => (/* binding */ OBJECT_FITS),
/* harmony export */   OPACITY_ICON: () => (/* binding */ OPACITY_ICON),
/* harmony export */   ORDER_BY: () => (/* binding */ ORDER_BY),
/* harmony export */   OVERFLOWS: () => (/* binding */ OVERFLOWS),
/* harmony export */   PAGINARION_TYPE: () => (/* binding */ PAGINARION_TYPE),
/* harmony export */   POSITIONS: () => (/* binding */ POSITIONS),
/* harmony export */   PRINT_TAXONOMY: () => (/* binding */ PRINT_TAXONOMY),
/* harmony export */   ROTATE_ICON: () => (/* binding */ ROTATE_ICON),
/* harmony export */   SCALE_ICON: () => (/* binding */ SCALE_ICON),
/* harmony export */   SEPERATOR_STYLES: () => (/* binding */ SEPERATOR_STYLES),
/* harmony export */   SKEW_ICON: () => (/* binding */ SKEW_ICON),
/* harmony export */   SORT_ORDER: () => (/* binding */ SORT_ORDER),
/* harmony export */   TEXT_ALIGN_OPTIONS: () => (/* binding */ TEXT_ALIGN_OPTIONS),
/* harmony export */   TEXT_GRADIENT_TYPES: () => (/* binding */ TEXT_GRADIENT_TYPES),
/* harmony export */   THUMBNAIL_SIZE: () => (/* binding */ THUMBNAIL_SIZE),
/* harmony export */   TRANSFORM_ORIGINS: () => (/* binding */ TRANSFORM_ORIGINS),
/* harmony export */   TRANSLATE_ICON: () => (/* binding */ TRANSLATE_ICON),
/* harmony export */   UNIT_TYPES: () => (/* binding */ UNIT_TYPES),
/* harmony export */   VPOSITIONS: () => (/* binding */ VPOSITIONS),
/* harmony export */   WIDTH_TYPES: () => (/* binding */ WIDTH_TYPES),
/* harmony export */   prefix: () => (/* binding */ prefix)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


//Attribute Prefix

const prefix = 'zolo_';
const UNIT_TYPES = [{
  label: 'px',
  value: 'px'
}, {
  label: '%',
  value: '%'
}, {
  label: 'em',
  value: 'em'
}];
const NORMAL_HOVER = [{
  label: 'Normal',
  value: 'normal'
}, {
  label: 'Hover',
  value: 'hover'
}];
const TEXT_ALIGN_OPTIONS = [{
  label: 'Left',
  value: 'left',
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
  label: 'Right',
  value: 'right',
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
}, {
  label: 'Justify',
  value: 'justify',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M22 2V22",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M2 2V22",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: 6,
      y: 8,
      width: 12,
      height: 8,
      rx: 1,
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}];
const DEFAULT_ALIGNS = [{
  label: 'Left',
  value: 'left',
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
  label: 'Right',
  value: 'right',
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
const DEFAULT_ALIGNS_VERTICAL = [{
  label: 'Top',
  value: 'top',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M22 4L2 4",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15 8C15.5523 8 16 8.44772 16 9V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19L8 9C8 8.44771 8.44772 8 9 8L15 8Z",
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
  label: 'Bottom',
  value: 'bottom',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M22 20L2 20",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15 4C15.5523 4 16 4.44772 16 5V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15L8 5C8 4.44771 8.44772 4 9 4L15 4Z",
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}];
const FLEX_ALIGN_OPTIONS = [{
  label: 'Top',
  value: 'flex-start',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M22 4L2 4",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15 8C15.5523 8 16 8.44772 16 9V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19L8 9C8 8.44771 8.44772 8 9 8L15 8Z",
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
      d: "M22 12L16 12",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M8 12L2 12",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: 16,
      y: 4,
      width: 16,
      height: 8,
      rx: 1,
      transform: "rotate(90 16 4)",
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}, {
  label: 'Bottom',
  value: 'flex-end',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M22 20L2 20",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15 4C15.5523 4 16 4.44772 16 5V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15L8 5C8 4.44771 8.44772 4 9 4L15 4Z",
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}];
const FLEX_HORIZONTAL_OPTIONS = [{
  label: 'Left',
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
  label: 'Right',
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

// Flex Properties
const FLEX_DIRECTIONS = [{
  label: 'Row',
  value: 'row',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6.64246 7.53723H17.2781",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M17.2781 7.53729L15.3485 5.28601",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M17.2781 7.53723L15.3485 9.78851",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6.64246 16.4172H17.2781",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M17.2781 16.4173L15.3485 14.1774",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M17.2781 16.4172L15.3485 18.6685",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M2.85132 21.1473V2.85278",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21.1487 21.1473V2.85278",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Column',
  value: 'column',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.391 6.72949L16.391 17.1923",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.3909 17.1923L18.606 15.2941",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.391 17.1923L14.176 15.2941",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.65393 6.72949L7.65393 17.1923",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.65381 17.1923L9.85767 15.2941",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.65393 17.1923L5.43889 15.2941",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3L21 3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 21L21 21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Row Reverse',
  value: 'row-reverse',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M17.2705 16.391L6.80771 16.391",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6.80767 16.3909L8.70593 18.606",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6.80767 16.391L8.70593 14.176",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M17.2705 7.65393L6.80771 7.65393",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6.80767 7.65381L8.70593 9.85767",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6.80767 7.65393L8.70593 5.43889",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3L21 21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3L3 21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Column Reverse',
  value: 'column-reverse',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.60901 17.2705L7.60901 6.80771",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.60908 6.80767L5.39404 8.70593",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.60901 6.80767L9.82405 8.70593",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.3461 17.2705L16.3461 6.80771",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.3462 6.80767L14.1423 8.70593",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.3461 6.80767L18.5611 8.70593",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 21L3 21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3L3 3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}];
const FLEX_ALIGNS = [{
  label: 'Flex Start',
  value: 'flex-start',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12.142 16.6062V7.48108",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.15051 16.6062V7.48108",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Center',
  value: 'center',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M9.46875 7.44006V16.5707",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M14.4974 7.44006V16.5707",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Flex End',
  value: 'flex-end',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M11.858 7.39404V16.5191",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.8495 7.39404V16.5191",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 21V3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 21V3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Stretch',
  value: 'stretch',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M8.00001 15.27L16.39 15.27",
      stroke: "#4D4D4D",
      strokeWidth: 3,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M8.00001 9.27002L16.39 9.27002",
      stroke: "#4D4D4D",
      strokeWidth: 3,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M20.51 4.03003L3.97001 4.03003",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M20.51 20.51L3.97001 20.51",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}];
const FLEX_ALIGNS_ROW = [{
  label: 'Flex Start',
  value: 'flex-start',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.39385 12.142L16.5189 12.142",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.39385 7.15051L16.5189 7.15051",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3L3 3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 21L3 21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Center',
  value: 'center',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.5599 9.46875L7.42934 9.46875",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.5599 14.4974L7.42934 14.4974",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3L3 3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 21L3 21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Flex End',
  value: 'flex-end',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.606 11.858L7.48088 11.858",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.606 16.8495L7.48088 16.8495",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 21L21 21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3L21 3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Stretch',
  value: 'stretch',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15.72 16.64H8.91003",
      stroke: "#4D4D4D",
      strokeWidth: "7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M4 20.48H20.54",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M4 4H20.54",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15.72 7.83997H8.91003",
      stroke: "#4D4D4D",
      strokeWidth: "7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}];
const FLEX_JUSTIFIES = [{
  label: 'Flex Start',
  value: 'flex-start',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.39385 12.142L16.5189 12.142",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.39385 7.15051L16.5189 7.15051",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3L3 3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 21L3 21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Center',
  value: 'center',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.5599 9.46875L7.42934 9.46875",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.5599 14.4974L7.42934 14.4974",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3L3 3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 21L3 21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Flex End',
  value: 'flex-end',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.606 11.858L7.48088 11.858",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.606 16.8495L7.48088 16.8495",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 21L21 21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3L21 3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Space Between',
  value: 'space-between',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.606 7.1615L7.48088 7.1615",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.606 16.8386L7.48088 16.8386",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 21L21 21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3L21 3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Space Around',
  value: 'space-around',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.6713 8.21777L7.54619 8.21777",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.606 15.8041L7.48088 15.8041",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 21L21 21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3L21 3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Space Evenly',
  value: 'space-evenly',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.606 8.73425L7.48088 8.73425",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.606 15.2767L7.48088 15.2767",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 21L21 21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3L21 3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}];
const FLEX_JUSTIFIES_ROW = [{
  label: 'Flex Start',
  value: 'flex-start',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12.142 16.6062V7.48108",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.15051 16.6062V7.48108",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Center',
  value: 'center',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M9.46875 7.44006V16.5707",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M14.4974 7.44006V16.5707",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Flex End',
  value: 'flex-end',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M11.858 7.39404V16.5191",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.8495 7.39404V16.5191",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 21V3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 21V3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Space Between',
  value: 'space-between',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.1615 7.39404V16.5191",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.8386 7.39404V16.5191",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 21V3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 21V3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Space Around',
  value: 'space-around',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M8.21777 7.32874V16.4538",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15.8041 7.39404V16.5191",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 21V3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 21V3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Space Evenly',
  value: 'space-evenly',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M8.73425 7.39404V16.5191",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15.2767 7.39404V16.5191",
      stroke: "#4D4D4D",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 21V3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 21V3",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}];
const FLEX_WRAPS = [{
  label: 'Wrap',
  value: 'wrap',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.37 15.2757H15.27C16.35 15.2757 17.23 14.318 17.23 13.1427V7.451C17.23 6.27567 16.35 5.31799 15.27 5.31799H7.53",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M10.07 11.8368L6.77002 15.2757L10.07 18.7255",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'No Wrap',
  value: 'nowrap',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M17.51 12.0109H6.18005",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M14.8101 8.5719L18.1101 12.0108L14.8101 15.4607",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}, {
  label: 'Wrap Reverse',
  value: 'wrap-reverse',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.35999 8.76794H15.26C16.34 8.76794 17.22 9.72562 17.22 10.901V16.5926C17.22 17.7679 16.34 18.7256 15.26 18.7256H7.51999",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M10.0699 12.2068L6.7699 8.76783L10.0699 5.30713",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
}];
const HEADING = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('H1', 'zoloblocks'),
  value: 'h1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('H2', 'zoloblocks'),
  value: 'h2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('H3', 'zoloblocks'),
  value: 'h3'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('H4', 'zoloblocks'),
  value: 'h4'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('H5', 'zoloblocks'),
  value: 'h5'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('H6', 'zoloblocks'),
  value: 'h6'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('P', 'zoloblocks'),
  value: 'p'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Span', 'zoloblocks'),
  value: 'span'
}];
const NORMAL_HTML_TAG = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('P', 'zoloblocks'),
  value: 'p'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Span', 'zoloblocks'),
  value: 'span'
}];
const BORDER_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'zoloblocks'),
  value: 'none'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Solid', 'zoloblocks'),
  value: 'solid'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom', 'zoloblocks'),
  value: 'custom'
}];
const SEPERATOR_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dashed', 'zoloblocks'),
  value: 'dashed'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dotted', 'zoloblocks'),
  value: 'dotted'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Double', 'zoloblocks'),
  value: 'double'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Groove', 'zoloblocks'),
  value: 'groove'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Outset', 'zoloblocks'),
  value: 'outset'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ridge', 'zoloblocks'),
  value: 'ridge'
}];
const BACKGROUND_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Classic', 'zoloblocks'),
  value: 'classic',
  icon: 'color-picker'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gradient', 'zoloblocks'),
  value: 'gradient',
  icon: 'art'
}];
const TEXT_GRADIENT_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'zoloblocks'),
  value: 'classic',
  icon: 'Color'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gradient', 'zoloblocks'),
  value: 'gradient',
  icon: 'Gradient'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'zoloblocks'),
  value: 'image',
  icon: 'Image'
}];
const BOX_SHADOW_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Outer', 'zoloblocks'),
  value: 'outset'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inner', 'zoloblocks'),
  value: 'inset'
}];

// position
const POSITIONS = [{
  label: 'Left',
  value: 'row-reverse',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M2 2V22",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "7",
      y: "8",
      width: "12",
      height: "8",
      rx: "1",
      fill: "none",
      stroke: "#4D4D4D",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1"
    })]
  })
}, {
  label: 'Right',
  value: 'row',
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
}, {
  label: 'Top',
  value: 'column-reverse',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M22 4L2 4",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15 8C15.5523 8 16 8.44772 16 9V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19L8 9C8 8.44771 8.44772 8 9 8L15 8Z",
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}, {
  label: 'Bottom',
  value: 'column',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M22 20L2 20",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15 4C15.5523 4 16 4.44772 16 5V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15L8 5C8 4.44771 8.44772 4 9 4L15 4Z",
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}];

// position
const ICON_POSITIONS = [{
  label: 'Left',
  value: 'left',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: 11,
      y: 12,
      width: 11,
      height: "0.01",
      rx: "0.005",
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: 3,
      y: 10,
      width: 4,
      height: 4,
      rx: 2,
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}, {
  label: 'Right',
  value: 'right',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: 3,
      y: 12,
      width: 11,
      height: "0.01",
      rx: "0.005",
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: 18,
      y: 10,
      width: 4,
      height: 4,
      rx: 2,
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}, {
  label: 'Top',
  value: 'top',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: 6,
      y: 16,
      width: 12,
      height: "0.01",
      rx: "0.005",
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: 10,
      y: 8,
      width: 4,
      height: 4,
      rx: 2,
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}, {
  label: 'Bottom',
  value: 'bottom',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: 6,
      y: 8,
      width: 12,
      height: "0.01",
      rx: "0.005",
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: 10,
      y: 12,
      width: 4,
      height: 4,
      rx: 2,
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}];

// horizontal position
const ICON_HPOSITIONS = [{
  label: 'Left',
  value: 'left',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M2 2V22",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "7",
      y: "8",
      width: "12",
      height: "8",
      rx: "1",
      fill: "none",
      stroke: "#4D4D4D",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1"
    })]
  })
}, {
  label: 'Right',
  value: 'right',
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
// horizontal position
const VPOSITIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top', 'zoloblocks'),
  value: 'top',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M22 4L2 4",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15 8C15.5523 8 16 8.44772 16 9V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19L8 9C8 8.44771 8.44772 8 9 8L15 8Z",
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom', 'zoloblocks'),
  value: 'bottom',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M22 20L2 20",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15 4C15.5523 4 16 4.44772 16 5V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15L8 5C8 4.44771 8.44772 4 9 4L15 4Z",
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    })]
  })
}];

// social icon text
const ICON_STATUS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No Icon', 'zoloblocks'),
  value: 'none',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: 9,
      cy: 9,
      r: 8,
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3.13904 4.3877L14.3609 14.1124",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    })]
  })
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon & Text', 'zoloblocks'),
  value: 'iconText',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 35,
    height: 24,
    viewBox: "0 0 35 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12 12V16",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12 9.5V9",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M23 12H31M23 15H27.7059",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: 12,
      cy: 12,
      r: 8,
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M23 9H33.5",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    })]
  })
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Only Icon', 'zoloblocks'),
  value: 'iconOnly',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: 9,
      cy: 9,
      r: 8,
      stroke: "#4D4D4D",
      strokeWidth: "1.5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M9 9V13",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M9 6.5V6",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    })]
  })
}];
const ORDER_BY = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date', 'zoloblocks'),
  value: 'date'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author', 'zoloblocks'),
  value: 'author'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'zoloblocks'),
  value: 'title'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Last modified date', 'zoloblocks'),
  value: 'modified'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post parent ID', 'zoloblocks'),
  value: 'parent'
}];
const SORT_ORDER = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ASC', 'zoloblocks'),
  value: 'asc'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('DESC', 'zoloblocks'),
  value: 'desc'
}];
const PRINT_TAXONOMY = taxonomy => {
  let allTax = [];
  for (let tax in taxonomy) {
    allTax.push({
      value: tax,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(taxonomy[tax], 'zoloblocks')
    });
  }
  return allTax;
};
const THUMBNAIL_SIZE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'zoloblocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thumbnail', 'zoloblocks'),
  value: 'thumbnail'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Medium', 'zoloblocks'),
  value: 'medium'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Large', 'zoloblocks'),
  value: 'large'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full', 'zoloblocks'),
  value: 'full'
}];

// social icon text
const ICON_BOX_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'zoloblocks'),
  value: 'image'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'zoloblocks'),
  value: 'icon'
}];

// Width Types
const WIDTH_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full', 'zoloblocks'),
  value: 'alignfull'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Boxed', 'zoloblocks'),
  value: 'alignwide'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom', 'zoloblocks'),
  value: 'custom_width'
}];
const CONTENT_WIDTH_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Boxed', 'zoloblocks'),
  value: 'alignwide'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full Width', 'zoloblocks'),
  value: 'alignfull'
}];
const OVERFLOWS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'zoloblocks'),
  value: 'visible'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Auto', 'zoloblocks'),
  value: 'auto'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hidden', 'zoloblocks'),
  value: 'hidden'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scroll', 'zoloblocks'),
  value: 'scroll'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Clip', 'zoloblocks'),
  value: 'clip'
}];
const CONTENT_POSITIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'zoloblocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Relative', 'zoloblocks'),
  value: 'relative'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Absolute', 'zoloblocks'),
  value: 'absolute'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fixed', 'zoloblocks'),
  value: 'fixed'
}];
const CONTENT_WIDTH = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'zoloblocks'),
  value: 'default'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full Width', 'zoloblocks'),
  value: 'full'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline (auto)', 'zoloblocks'),
  value: 'inline'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom', 'azoloblocks'),
  value: 'custom'
}];
const OBJECT_FITS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'zoloblocks'),
  value: 'none'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fill', 'zoloblocks'),
  value: 'fill'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contain', 'zoloblocks'),
  value: 'contain'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cover', 'zoloblocks'),
  value: 'cover'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scale Down', 'zoloblocks'),
  value: 'scale-down'
}];

// mask shapes
const MASK_SHAPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'zoloblocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Abstract', 'zoloblocks'),
  value: 'abstract'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Abstract Brush 1', 'zoloblocks'),
  value: 'abstract-brush-1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Abstract Brush 2', 'zoloblocks'),
  value: 'abstract-brush-2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Aesthetic Blob', 'zoloblocks'),
  value: 'aesthetic-blob'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Amorphous Blob', 'zoloblocks'),
  value: 'amorphous-blob'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Brush', 'zoloblocks'),
  value: 'brush'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Comment', 'zoloblocks'),
  value: 'comment'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container', 'zoloblocks'),
  value: 'container'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hand Drawn Blob', 'zoloblocks'),
  value: 'hand-drawn-blob'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hexagon', 'zoloblocks'),
  value: 'hexagon'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hexagon Blob', 'zoloblocks'),
  value: 'hexagon-blob'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Irregular Blob', 'zoloblocks'),
  value: 'irregular-blob'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Minimal Round', 'zoloblocks'),
  value: 'minimal-round'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Octagon', 'zoloblocks'),
  value: 'octagon'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Organic Blob', 'zoloblocks'),
  value: 'organic-blob'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Oval Blob', 'zoloblocks'),
  value: 'oval-blob'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Pattern', 'zoloblocks'),
  value: 'pattern'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Popup 1', 'zoloblocks'),
  value: 'popup-1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Popup 2', 'zoloblocks'),
  value: 'popup-2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Popup 3', 'zoloblocks'),
  value: 'popup-3'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Round Brush', 'zoloblocks'),
  value: 'round-brush'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Round Design', 'zoloblocks'),
  value: 'round-design'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Square Pattern', 'zoloblocks'),
  value: 'squar-pattern'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Testimonial', 'zoloblocks'),
  value: 'testimonial'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Triangle Blob', 'zoloblocks'),
  value: 'triangle-blob'
}];

// mask position
const MASK_POSITIONS = [{
  value: 'center top',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center Top', 'zoloblocks')
}, {
  value: 'center center',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center Center', 'zoloblocks')
}, {
  value: 'center bottom',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center Bottom', 'zoloblocks')
}, {
  value: 'left top',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Top', 'zoloblocks')
}, {
  value: 'left center',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Center', 'zoloblocks')
}, {
  value: 'left bottom',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Bottom', 'zoloblocks')
}, {
  value: 'right top',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right Top', 'zoloblocks')
}, {
  value: 'right center',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right Center', 'zoloblocks')
}, {
  value: 'right bottom',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right Bottom', 'zoloblocks')
}];

// mask repeat
const MASK_REPEATS = [{
  value: 'no-repeat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No Repeat', 'zoloblocks')
}, {
  value: 'repeat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Repeat', 'zoloblocks')
}, {
  value: 'repeat-x',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Repeat X', 'zoloblocks')
}, {
  value: 'repeat-y',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Repeat Y', 'zoloblocks')
}];

// mask sizes
const MASK_SIZES = [{
  value: 'auto',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Auto', 'zoloblocks')
}, {
  value: 'cover',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cover', 'zoloblocks')
}, {
  value: 'contain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contain', 'zoloblocks')
}];
const ANIMATION_TYPES = [{
  label: 'Fade',
  value: 'fade'
},
// { label: 'Slide', value: 'slide' },
// { label: 'Scale', value: 'scale' },
// { label: 'Rotate', value: 'rotate' },
// { label: 'Flip', value: 'flip' },
// { label: 'Zoom', value: 'zoom' },
{
  label: 'Scale Up',
  value: 'scaleUp'
}, {
  label: 'Scale Down',
  value: 'scaleDown'
}, {
  label: 'Top',
  value: 'top'
}, {
  label: 'Right',
  value: 'right'
}, {
  label: 'Bottom',
  value: 'bottom'
}, {
  label: 'Left',
  value: 'left'
}, {
  label: 'Top Small',
  value: 'topSmall'
}, {
  label: 'Right Small',
  value: 'rightSmall'
}, {
  label: 'Bottom Small',
  value: 'bottomSmall'
}, {
  label: 'Left Small',
  value: 'leftSmall'
}, {
  label: 'Top Medium',
  value: 'topMedium'
}, {
  label: 'Right Medium',
  value: 'rightMedium'
}, {
  label: 'Bottom Medium',
  value: 'bottomMedium'
}, {
  label: 'Left Medium',
  value: 'leftMedium'
}, {
  label: 'Custom (Pro)',
  value: 'custom'
}];
const TRANSFORM_ORIGINS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top'),
  value: 'top'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right'),
  value: 'right'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom'),
  value: 'bottom'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left'),
  value: 'left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center'),
  value: 'center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Initial'),
  value: 'initial'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inherit'),
  value: 'inherit'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Revert'),
  value: 'revert'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Unset'),
  value: 'unset'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Revert Layer'),
  value: 'revert-layer'
}, {
  label: 'Custom',
  value: 'custom'
}];
const EASING_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ease Out', 'zoloblocks'),
  value: 'ease-out'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ease In Out', 'zoloblocks'),
  value: 'ease-in-out'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Linear', 'zoloblocks'),
  value: 'linear'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom', 'zoloblocks'),
  value: 'custom'
}];
const TRANSLATE_ICON = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M18.5818 15.3211L22 11.9184L18.5818 8.58813",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M5.41818 15.3211L2 11.9184L5.41818 8.58813",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M2.35461 11.9548H21.6455",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M15.3818 5.4027L11.9636 2L8.61816 5.4027",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M8.61816 18.5974L12.0363 22.0001L15.3818 18.5974",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M12 2.35278V21.2396",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});
const ROTATE_ICON = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M21.4401 8.67C19.7801 4.22 15.9301 2 12.0001 2C6.85006 2 2.61006 5.89 2.06006 10.89",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M21.9401 13.1201C21.3901 18.1201 17.1501 22.0001 12.0001 22.0001C8.08006 22.0001 4.22006 19.7801 2.56006 15.3301",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M22.0001 2.21997V8.66997H15.5601",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M2 21.7801V15.3301H8.44",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});
const SCALE_ICON = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M21.9999 8.16V2L15.8799 2.07",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M16.2598 13.8798H10.0798L10.1398 7.78979",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M10.4299 13.5898L21.7299 2.30981",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M20.62 13.88V19.97C20.62 21.09 19.71 22 18.58 22H4.04C2.91 22 2 21.09 2 19.97V5.47995C2 4.35995 2.91 3.44995 4.04 3.44995H9.64",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});
const SKEW_ICON = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 4H7.74545L2 20H16.2545L22 4Z",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
});
const OPACITY_ICON = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M22 2L2 22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M2 2L22 22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});
const FLIP_ICON = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M2 12H22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M12 2L22 12L12 22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});
const INCLUDE_BY = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Authors', 'zoloblocks'),
  value: 'authors'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Terms', 'zoloblocks'),
  value: 'terms'
}];
const EXCLUDE_BY = [{
  value: 'authors',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Authors', 'zoloblocks')
}, {
  value: 'current_post',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Current Post', 'zoloblocks')
}, {
  value: 'manual_selection',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Manual Selection', 'zoloblocks')
}, {
  value: 'terms',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Terms', 'zoloblocks')
}];
const PAGINARION_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default Pagination', 'zoloblocks'),
  value: 'normal'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ajax Pagination', 'zoloblocks'),
  value: 'number'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Load More-Click', 'zoloblocks'),
  value: 'button'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Load More-Scroll', 'zoloblocks'),
  value: 'scroll'
}];

/***/ }),

/***/ "./src/blocks/pricing-table/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/pricing-table/style.scss ***!
  \*********************************************/
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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

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

/***/ "./src/blocks/pricing-table/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/pricing-table/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Pricing Table","name":"zolo/pricing-table","category":"zoloblocks","keywords":["pricing","table","price","plan","package","feature","list"],"description":"Showcase offerings with visually appealing pricing tables.","apiVersion":3,"textdomain":"zoloblocks","example":{"attributes":{"preview":true},"viewportWidth":410},"supports":{"anchor":false,"customClassName":false,"align":["wide","full"]},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 			"blocks/pricing-table/index": 0,
/******/ 			"blocks/pricing-table/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/pricing-table/style-index"], () => (__webpack_require__("./src/blocks/pricing-table/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map