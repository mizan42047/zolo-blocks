/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/flipbox/attributes.js":
/*!******************************************!*\
  !*** ./src/blocks/flipbox/attributes.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/flipbox/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstants */ "./src/blocks/flipbox/constants/typoPrefixConstants.js");
/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateTypographyAttributes,
  generateNormalBGAttributes,
  generateBoxShadowAttributies,
  generateResAlignmentAttributies
} = window.zoloModule;


const attributes = {
  // global Attributes
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
  // Generators
  // FLIPBOX FRONT ITEMS
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FLIPBOX_HEIGHT),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FRONT_ITEMS_BG),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FRONT_ITEMS_SHADOW),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FRONT_ITEMS_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FLIPBOX_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FLIPBOX_ITEMS_PADDING),
  ...generateResAlignmentAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FRONT_ITEMS_ALIGNMENT),
  ...generateResAlignmentAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FRONT_ITEMS_VERTICAL_ALIGNMENT),
  // FLIPBOX FRONT ITEMS
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_ITEMS_BG),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_ITEMS_SHADOW),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_ITEMS_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_ITEMS_PADDING),
  ...generateResAlignmentAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_ITEMS_ALIGNMENT),
  ...generateResAlignmentAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_ITEMS_VERTICAL_ALIGNMENT),
  // flipbox front icon
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FRONT_ICON_SIZE),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FRONT_ICON_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FRONT_ICON_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FRONT_ICON_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FRONT_ICON_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FRONT_ICON_MARGIN),
  // FLIPBOX FRONT TITLE
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FRONT_TITLE_MARGIN),
  // FLIPBOX BACK ICON
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_ICON_SIZE),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_ICON_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_ICON_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_ICON_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_ICON_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_ICON_MARGIN),
  // FLIPBOX FRONT TITLE
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_TITLE_MARGIN),
  // FLIPBOX BACK LINK BUTTON
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_LINK_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_LINK_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_LINK_PADDING),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_LINK_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BACK_LINK_HBG),
  // typography
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_1__)),
  //Block Specific Attributes

  flipboxStyle: {
    type: 'string',
    default: 'default'
  },
  isHover: {
    type: 'boolean',
    default: false
  },
  flipType: {
    type: 'string',
    source: 'attribute',
    selector: '.zolo-flipbox-container'
  },
  frontIconType: {
    type: 'string',
    default: 'icon'
  },
  frontIconTypeImage: {
    type: 'object',
    default: {
      id: '',
      url: zoloPlaceholders.placeholder,
      alt: ''
    }
  },
  backIconTypeImage: {
    type: 'object',
    default: {
      id: '',
      url: zoloPlaceholders.placeholder,
      alt: ''
    }
  },
  backIconType: {
    type: 'string',
    default: 'icon'
  },
  frontIcon: {
    type: 'attribute',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M256 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h64V123.8L49.75 154.6C35.02 164.5 15.19 160.4 5.375 145.8C-4.422 131.1-.4531 111.2 14.25 101.4l96-64c9.828-6.547 22.45-7.187 32.84-1.594C153.5 41.37 160 52.22 160 64.01v352h64C241.7 416 256 430.3 256 448z"></path></svg>'
  },
  backIcon: {
    type: 'attribute',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 448c0 17.67-14.33 32-32 32H32c-13.08 0-24.83-7.953-29.7-20.09c-4.859-12.12-1.859-26 7.594-35.03l193.6-185.1c31.36-30.17 33.95-80 5.812-113.4c-14.91-17.69-35.86-28.12-58.97-29.38C127.4 95.83 105.3 103.9 88.53 119.9L53.52 151.7c-13.08 11.91-33.33 10.89-45.2-2.172C-3.563 136.5-2.594 116.2 10.48 104.3l34.45-31.3c28.67-27.34 68.39-42.11 108.9-39.88c40.33 2.188 78.39 21.16 104.4 52.03c49.8 59.05 45.2 147.3-10.45 200.8l-136 130H288C305.7 416 320 430.3 320 448z"></path></svg>'
  },
  showFrontIcon: {
    type: 'boolean',
    default: true
  },
  showFrontTitle: {
    type: 'boolean',
    default: true
  },
  frontTitle: {
    type: 'string',
    selector: 'zolo-flipbox-front-title',
    default: 'Front Title Here'
  },
  showFrontContent: {
    type: 'boolean',
    default: true
  },
  frontContent: {
    type: 'string',
    selector: 'zolo-flipbox-front-content',
    default: 'This is the content on the front side of the flip box.'
  },
  showBackIcon: {
    type: 'boolean',
    default: false
  },
  showBackTitle: {
    type: 'boolean',
    default: true
  },
  backTitle: {
    type: 'string',
    selector: 'zolo-flipbox-back-title',
    default: 'Back Title Here'
  },
  showBackContent: {
    type: 'boolean',
    default: true
  },
  backContent: {
    type: 'string',
    selector: 'zolo-flipbox-back-content',
    default: 'This is the content on the back side of the flip box.'
  },
  showBackLinkBtn: {
    type: 'boolean',
    default: true
  },
  showBackLinkBtnIcon: {
    type: 'boolean',
    default: false
  },
  buttonText: {
    type: 'string',
    default: 'Click Here'
  },
  buttonIcon: {
    type: 'attribute',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>'
  },
  link: {
    type: 'object',
    default: {
      url: '',
      openInNewTab: false
    }
  },
  backLinkColor: {
    type: 'string'
  },
  backLinkHoverColor: {
    type: 'string'
  },
  backLinkHoverBorderColor: {
    type: 'string'
  },
  frontTitleColor: {
    type: 'string'
  },
  backTitleColor: {
    type: 'string'
  },
  frontContentColor: {
    type: 'string'
  },
  backContentColor: {
    type: 'string'
  },
  frontIconColor: {
    type: 'string'
  },
  frontIconHoverColor: {
    type: 'string'
  },
  backIconColor: {
    type: 'string'
  },
  frontIconBackground: {
    type: 'string'
  },
  backIconBackground: {
    type: 'string'
  },
  flipDuration: {
    type: 'number',
    default: 600
  },
  linkOpenNewTab: {
    type: 'boolean',
    default: false
  },
  flipEffect: {
    type: 'string',
    default: '1'
  },
  flipEasingType: {
    type: 'string',
    default: 'ease-out'
  },
  flipCustomEasing: {
    'type': 'string',
    'default': ''
  },
  triggerType: {
    type: 'string',
    default: 'hover'
  },
  imageRes: {
    type: 'string',
    default: 'full'
  },
  objectFit: {
    type: 'string',
    default: 'cover'
  },
  backImageObjectFit: {
    type: 'string',
    default: 'cover'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/flipbox/constants/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/flipbox/constants/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BACK_ICON_BG: () => (/* binding */ BACK_ICON_BG),
/* harmony export */   BACK_ICON_BORDER: () => (/* binding */ BACK_ICON_BORDER),
/* harmony export */   BACK_ICON_BORDER_RADIUS: () => (/* binding */ BACK_ICON_BORDER_RADIUS),
/* harmony export */   BACK_ICON_HBG: () => (/* binding */ BACK_ICON_HBG),
/* harmony export */   BACK_ICON_MARGIN: () => (/* binding */ BACK_ICON_MARGIN),
/* harmony export */   BACK_ICON_PADDING: () => (/* binding */ BACK_ICON_PADDING),
/* harmony export */   BACK_ICON_SIZE: () => (/* binding */ BACK_ICON_SIZE),
/* harmony export */   BACK_ITEMS_ALIGNMENT: () => (/* binding */ BACK_ITEMS_ALIGNMENT),
/* harmony export */   BACK_ITEMS_BG: () => (/* binding */ BACK_ITEMS_BG),
/* harmony export */   BACK_ITEMS_BORDER: () => (/* binding */ BACK_ITEMS_BORDER),
/* harmony export */   BACK_ITEMS_PADDING: () => (/* binding */ BACK_ITEMS_PADDING),
/* harmony export */   BACK_ITEMS_SHADOW: () => (/* binding */ BACK_ITEMS_SHADOW),
/* harmony export */   BACK_ITEMS_VERTICAL_ALIGNMENT: () => (/* binding */ BACK_ITEMS_VERTICAL_ALIGNMENT),
/* harmony export */   BACK_LINK_BG: () => (/* binding */ BACK_LINK_BG),
/* harmony export */   BACK_LINK_BORDER: () => (/* binding */ BACK_LINK_BORDER),
/* harmony export */   BACK_LINK_BORDER_RADIUS: () => (/* binding */ BACK_LINK_BORDER_RADIUS),
/* harmony export */   BACK_LINK_HBG: () => (/* binding */ BACK_LINK_HBG),
/* harmony export */   BACK_LINK_PADDING: () => (/* binding */ BACK_LINK_PADDING),
/* harmony export */   BACK_TITLE_MARGIN: () => (/* binding */ BACK_TITLE_MARGIN),
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   FLIPBLOX_SIDE: () => (/* binding */ FLIPBLOX_SIDE),
/* harmony export */   FLIPBOX_BORDER_RADIUS: () => (/* binding */ FLIPBOX_BORDER_RADIUS),
/* harmony export */   FLIPBOX_HEIGHT: () => (/* binding */ FLIPBOX_HEIGHT),
/* harmony export */   FLIPBOX_ICON_OPTIONS: () => (/* binding */ FLIPBOX_ICON_OPTIONS),
/* harmony export */   FLIPBOX_ITEMS_PADDING: () => (/* binding */ FLIPBOX_ITEMS_PADDING),
/* harmony export */   FLIPBOX_VERTICAL_ALIGNMENT: () => (/* binding */ FLIPBOX_VERTICAL_ALIGNMENT),
/* harmony export */   FLIP_EASING_TYPE: () => (/* binding */ FLIP_EASING_TYPE),
/* harmony export */   FLIP_EFFECT: () => (/* binding */ FLIP_EFFECT),
/* harmony export */   FLIP_TRIGGER_TYPE: () => (/* binding */ FLIP_TRIGGER_TYPE),
/* harmony export */   FRONT_ICON_BG: () => (/* binding */ FRONT_ICON_BG),
/* harmony export */   FRONT_ICON_BORDER: () => (/* binding */ FRONT_ICON_BORDER),
/* harmony export */   FRONT_ICON_BORDER_RADIUS: () => (/* binding */ FRONT_ICON_BORDER_RADIUS),
/* harmony export */   FRONT_ICON_HBG: () => (/* binding */ FRONT_ICON_HBG),
/* harmony export */   FRONT_ICON_MARGIN: () => (/* binding */ FRONT_ICON_MARGIN),
/* harmony export */   FRONT_ICON_PADDING: () => (/* binding */ FRONT_ICON_PADDING),
/* harmony export */   FRONT_ICON_SIZE: () => (/* binding */ FRONT_ICON_SIZE),
/* harmony export */   FRONT_ITEMS_ALIGNMENT: () => (/* binding */ FRONT_ITEMS_ALIGNMENT),
/* harmony export */   FRONT_ITEMS_BG: () => (/* binding */ FRONT_ITEMS_BG),
/* harmony export */   FRONT_ITEMS_BORDER: () => (/* binding */ FRONT_ITEMS_BORDER),
/* harmony export */   FRONT_ITEMS_SHADOW: () => (/* binding */ FRONT_ITEMS_SHADOW),
/* harmony export */   FRONT_ITEMS_VERTICAL_ALIGNMENT: () => (/* binding */ FRONT_ITEMS_VERTICAL_ALIGNMENT),
/* harmony export */   FRONT_TITLE_MARGIN: () => (/* binding */ FRONT_TITLE_MARGIN),
/* harmony export */   LINK_TYPE: () => (/* binding */ LINK_TYPE)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


// Block Prefix

const BLOCK_PREFIX = 'flipbox';
const FLIPBLOX_SIDE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Front', 'zoloblocks'),
  value: 'front'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Back', 'zoloblocks'),
  value: 'back'
}];
const FLIPBOX_ICON_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'zoloblocks'),
  value: 'image'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'zoloblocks'),
  value: 'icon'
}];
const LINK_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Box', 'zoloblocks'),
  value: 'box'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'zoloblocks'),
  value: 'title'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button', 'zoloblocks'),
  value: 'button'
}];
const FLIP_EFFECT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flip Left', 'zoloblocks'),
  value: '3'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flip Right', 'zoloblocks'),
  value: '1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flip Top', 'zoloblocks'),
  value: '2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flip Bottom', 'zoloblocks'),
  value: '4'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slide Left', 'zoloblocks'),
  value: '7'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slide Right', 'zoloblocks'),
  value: '5'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slide Top', 'zoloblocks'),
  value: '8'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slide Bottom', 'zoloblocks'),
  value: '6'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Push Top', 'zoloblocks'),
  value: '9'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Push Bottom', 'zoloblocks'),
  value: '10'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Push Left', 'zoloblocks'),
  value: '11'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Push Right', 'zoloblocks'),
  value: '12'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top to Bottom Angle', 'zoloblocks'),
  value: '13'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom to Top Angle', 'zoloblocks'),
  value: '14'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Zoom', 'zoloblocks'),
  value: '15'
}];
const FLIP_EASING_TYPE = [{
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
const FLIP_TRIGGER_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'zoloblocks'),
  value: 'hover'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click', 'zoloblocks'),
  value: 'click'
}];

//FRONT ITEMS
const FLIPBOX_HEIGHT = 'FlipboxHeight';
const FLIPBOX_BORDER_RADIUS = 'FrontItemsBorderRadius';
const FLIPBOX_ITEMS_PADDING = 'FlipboxItemsPadding';
const FRONT_ITEMS_BORDER = 'FrontItemsBorder';
const FRONT_ITEMS_BG = 'FrontItemsBg';
const FRONT_ITEMS_SHADOW = 'FrontItemsShadow';
const FRONT_ITEMS_ALIGNMENT = 'FrontItemsAlignment';
const FRONT_ITEMS_VERTICAL_ALIGNMENT = 'FrontItemsVerticalAlignment';

//BACK ITEMS
const BACK_ITEMS_BORDER = 'BackItemsBorder';
const BACK_ITEMS_BG = 'BackItemsBg';
const BACK_ITEMS_SHADOW = 'BackItemsShadow';
const BACK_ITEMS_PADDING = 'BackItemsPadding';
const BACK_ITEMS_ALIGNMENT = 'BackItemsAlignment';
const BACK_ITEMS_VERTICAL_ALIGNMENT = 'BackItemsVerticalAlignment';

// FRONT ICON
const FRONT_ICON_SIZE = 'FrontIconSize';
const FRONT_ICON_BORDER = 'FrontIconBorder';
const FRONT_ICON_BORDER_RADIUS = 'FrontIconBorderRadius';
const FRONT_ICON_BG = 'FrontIconBg';
const FRONT_ICON_PADDING = 'FrontIconPadding';
const FRONT_ICON_HBG = 'FrontIconHoverBg';
const FRONT_ICON_MARGIN = 'FrontIconMargin';
const FRONT_TITLE_MARGIN = 'FrontTitleMargin';

// BACK ICON
const BACK_ICON_SIZE = 'BackIconSize';
const BACK_ICON_BORDER = 'BackIconBorder';
const BACK_ICON_BORDER_RADIUS = 'BackIconBorderRadius';
const BACK_ICON_BG = 'BackIconBg';
const BACK_ICON_PADDING = 'BackIconPadding';
const BACK_ICON_HBG = 'BackIconHoverBg';
const BACK_ICON_MARGIN = 'BackIconMargin';
const BACK_TITLE_MARGIN = 'BackTitleMargin';

// BACK LINK BUTTON
const BACK_LINK_BORDER = 'BackLinkBorder';
const BACK_LINK_BORDER_RADIUS = 'BackLinkBorderRadius';
const BACK_LINK_BG = 'BackLinkBg';
const BACK_LINK_HBG = 'BackLinkHBg';
const BACK_LINK_PADDING = 'BackLinkPadding';

// VERTICAL ALIGNMENT

const FLIPBOX_VERTICAL_ALIGNMENT = [{
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
}];

/***/ }),

/***/ "./src/blocks/flipbox/constants/typoPrefixConstants.js":
/*!*************************************************************!*\
  !*** ./src/blocks/flipbox/constants/typoPrefixConstants.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BACK_CONTENT_TYPOGRAPHY: () => (/* binding */ BACK_CONTENT_TYPOGRAPHY),
/* harmony export */   BACK_LINK_TYPOGRAPHY: () => (/* binding */ BACK_LINK_TYPOGRAPHY),
/* harmony export */   BACK_TITLE_TYPOGRAPHY: () => (/* binding */ BACK_TITLE_TYPOGRAPHY),
/* harmony export */   FRONT_CONTENT_TYPOGRAPHY: () => (/* binding */ FRONT_CONTENT_TYPOGRAPHY),
/* harmony export */   FRONT_TITLE_TYPOGRAPHY: () => (/* binding */ FRONT_TITLE_TYPOGRAPHY)
/* harmony export */ });
// FLIPBOX TYPOGRAPHY PREFIX CONSTANTS
const FRONT_TITLE_TYPOGRAPHY = 'FrontTitleTypography';
const FRONT_CONTENT_TYPOGRAPHY = 'FrontContentTypography';
const BACK_TITLE_TYPOGRAPHY = 'BackTitleTypography';
const BACK_CONTENT_TYPOGRAPHY = 'BackContentTypography';
const BACK_LINK_TYPOGRAPHY = 'BackLinkTypography';

/***/ }),

/***/ "./src/blocks/flipbox/context.js":
/*!***************************************!*\
  !*** ./src/blocks/flipbox/context.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Context for the block.
 */
const Context = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);

/***/ }),

/***/ "./src/blocks/flipbox/edit.js":
/*!************************************!*\
  !*** ./src/blocks/flipbox/edit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/blocks/flipbox/inspector.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.js */ "./src/blocks/flipbox/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/**
 * WordPress dependencies
 */






/**
 * Internal depencencies
 */
const {
  DisplayZoloIcon,
  classArrayToStr,
  SidebarOpener
} = window.zoloModule;


// import style


function Edit(props) {
  const {
    attributes,
    setAttributes,
    className,
    isSelected,
    clientId
  } = props;
  const {
    preview,
    uniqueId,
    flipEffect,
    parentClasses,
    frontIcon,
    backIcon,
    showFrontIcon,
    showFrontTitle,
    frontTitle,
    showFrontContent,
    frontContent,
    showBackIcon,
    showBackTitle,
    backTitle,
    showBackContent,
    backContent,
    showBackLinkBtn,
    buttonText,
    buttonIcon,
    showBackLinkBtnIcon,
    link,
    triggerType,
    frontIconType,
    backIconType,
    frontIconTypeImage,
    backIconTypeImage,
    imageRes
  } = attributes;

  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.blocks.render.hook.after', [], props);

  // preview image
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
      src: zoloParams.blocksPreview.flipbox,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Box Preview', 'zoloblocks')
    });
  }

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, `${uniqueId}`, classArrayToStr(parentClasses))
  });

  // click event for flip box
  const flipboxRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      flipboxRef: flipboxRef
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      ...blockProps,
      children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(SidebarOpener, {
        clientId: clientId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: `zolo-flip-box_wrap zolo-flip-box_animation_style-${flipEffect}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          ref: flipboxRef,
          className: `zolo-flip-box_item zolo-flip-box_hover`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "zolo-flip-box_inner-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "zolo-flip-box_face zolo-flip-box_front",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "zolo-flip-box-content zolo-flip-box_front-content",
                children: [showFrontIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "zolo-flip-box_icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    className: `zolo-flip-box_inner-icon ${frontIconType !== 'icon' ? 'zolo-image' : 'zolo-icon'}`,
                    children: frontIconType == 'icon' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                      children: frontIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DisplayZoloIcon, {
                        icon: frontIcon
                      })
                    }) : frontIconTypeImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                        src: frontIconTypeImage.sizes && frontIconTypeImage.sizes[imageRes] ? frontIconTypeImage.sizes[imageRes].url : frontIconTypeImage.url,
                        alt: frontIconTypeImage.alt || 'Flipbox Icon'
                      })
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaPlaceholder, {
                      icon: "format-image",
                      labels: {
                        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Photo', 'zoloblocks'),
                        instructions: ''
                      },
                      onSelect: media => {
                        setAttributes({
                          frontIconTypeImage: {
                            id: media.id,
                            url: media.url,
                            alt: media.alt,
                            sizes: media.sizes,
                            caption: media.caption
                          }
                        });
                      },
                      accept: "image/*",
                      allowedTypes: ['image']
                    })
                  })
                }), (showFrontTitle || showFrontContent) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    children: [showFrontTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
                      className: "zolo-flip-box_title",
                      children: frontTitle
                    }), showFrontContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                      className: "zolo-flip-box_desc",
                      children: frontContent
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "zolo-flip-box_face zolo-flip-box_back",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "zolo-flip-box-content zolo-flip-box_back-content",
                children: [showBackIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "zolo-flip-box_icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    className: `zolo-flip-box_inner-icon ${backIconType !== 'icon' ? 'zolo-image' : 'zolo-icon'}`,
                    children: backIconType == 'icon' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                      children: backIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DisplayZoloIcon, {
                        icon: backIcon
                      })
                    }) : backIconTypeImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                        src: backIconTypeImage.sizes && backIconTypeImage.sizes[imageRes] ? backIconTypeImage.sizes[imageRes].url : backIconTypeImage.url,
                        alt: backIconTypeImage.alt || 'Flipbox Icon'
                      })
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaPlaceholder, {
                      icon: "format-image",
                      labels: {
                        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Photo', 'zoloblocks'),
                        instructions: ''
                      },
                      onSelect: media => {
                        setAttributes({
                          backIconTypeImage: {
                            id: media.id,
                            url: media.url,
                            alt: media.alt,
                            sizes: media.sizes,
                            caption: media.caption
                          }
                        });
                      },
                      accept: "image/*",
                      allowedTypes: ['image']
                    })
                  })
                }), (showBackTitle || showBackContent) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    children: [showBackTitle && (link ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                      href: link && link?.url,
                      target: link && link?.openInNewTab && '_blank',
                      rel: link && link?.openInNewTab && 'noopener noreferrer',
                      className: "title-link",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
                        className: "zolo-flip-box_title",
                        children: backTitle
                      })
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
                      className: "zolo-flip-box_title",
                      children: backTitle
                    })), showBackContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                      className: "zolo-flip-box_desc",
                      children: backContent
                    })]
                  })
                }), showBackLinkBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "zolo-flip-box_link-button-wrap",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
                    href: link && link?.url,
                    target: link && link?.openInNewTab && '_blank',
                    rel: link && link?.openInNewTab && 'noopener noreferrer',
                    className: "zolo-flip-box_link-btn",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      children: buttonText
                    }), buttonIcon && showBackLinkBtnIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DisplayZoloIcon, {
                      icon: buttonIcon
                    })]
                  })
                })]
              })
            })]
          })
        })
      }), renderHookAfter && renderHookAfter]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/flipbox/index.js":
/*!*************************************!*\
  !*** ./src/blocks/flipbox/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/flipbox/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/flipbox/block.json");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./src/blocks/flipbox/context.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/flipbox/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/flipbox/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/flipbox/style.scss");







const {
  BlockIcons
} = window.zoloIcons;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: BlockIcons['flipbox']
  },
  usesContext: _context__WEBPACK_IMPORTED_MODULE_3__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/blocks/flipbox/inspector.js":
/*!*****************************************!*\
  !*** ./src/blocks/flipbox/inspector.js ***!
  \*****************************************/
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./src/blocks/flipbox/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/blocks/flipbox/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/typoPrefixConstants */ "./src/blocks/flipbox/constants/typoPrefixConstants.js");
/* harmony import */ var _src_global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/global/constants */ "./src/global/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * WordPress dependencies
 */





/**
 * Internal depencencies
 */
const {
  ResRangeControl,
  ColorControl,
  BorderControl,
  ResDimensionsControl,
  RangeResetControl,
  TypographyDropdown,
  NormalBGControl,
  BoxShadowControl,
  TabPanelControl,
  HeaderTabs,
  AdvancedOptions,
  ZoloIconPicker,
  ZoloPanelBody,
  ResAlignmentControl,
  LinkControl,
  IconicBtnGroup,
  ImageSizes,
  ImageAvatar,
  ObjectFitControl
} = window.zoloModule;






function Inspector(props) {
  const {
    attributes,
    setAttributes,
    flipboxRef
  } = props;
  const {
    resMode,
    frontIcon,
    backIcon,
    showFrontIcon,
    showFrontTitle,
    frontTitle,
    showFrontContent,
    frontContent,
    showBackIcon,
    showBackTitle,
    backTitle,
    showBackContent,
    showBackLinkBtn,
    showBackLinkBtnIcon,
    backLinkColor,
    backLinkHoverColor,
    backLinkHoverBorderColor,
    backContent,
    buttonText,
    buttonIcon,
    link,
    frontTitleColor,
    backTitleColor,
    frontContentColor,
    backContentColor,
    frontIconColor,
    backIconColor,
    flipEffect,
    flipEasingType,
    flipCustomEasing,
    triggerType,
    frontIconType,
    backIconType,
    frontIconTypeImage,
    backIconTypeImage,
    imageRes,
    objectFit,
    backImageObjectFit
  } = attributes;
  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"]
  };
  const [side, setSide] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('front');
  const onBackSideClick = () => {
    if (flipboxRef.current) {
      flipboxRef.current.classList.add('zolo-flip-box_active');
    }
  };
  const removeActiveClass = () => {
    if (flipboxRef.current) {
      flipboxRef.current.classList.remove('zolo-flip-box_active');
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(HeaderTabs, {
      block: "zolo/flipbox",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'zoloblocks'),
          firstOpen: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selected Side', 'zoloblocks'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
              className: "zolo-button-group",
              children: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIPBLOX_SIDE.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                isLarge: true,
                variant: side === item.value ? 'primary' : 'secondary',
                "aria-pressed": side === item.value,
                showBackLinkBtn: true,
                onClick: () => {
                  setSide(item.value);
                  if (item.value === 'back') {
                    onBackSideClick();
                  } else {
                    removeActiveClass();
                  }
                },
                children: item.label
              }))
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('show/hide elements', 'zoloblocks')
          }), side === 'front' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks'),
              checked: showFrontIcon,
              onChange: () => {
                setAttributes({
                  showFrontIcon: !showFrontIcon
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks'),
              checked: showFrontTitle,
              onChange: () => {
                setAttributes({
                  showFrontTitle: !showFrontTitle
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'zoloblocks'),
              checked: showFrontContent,
              onChange: () => {
                setAttributes({
                  showFrontContent: !showFrontContent
                });
              }
            })]
          }), side === 'back' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks'),
              checked: showBackIcon,
              onChange: () => {
                setAttributes({
                  showBackIcon: !showBackIcon
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks'),
              checked: showBackTitle,
              onChange: () => {
                setAttributes({
                  showBackTitle: !showBackTitle
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'zoloblocks'),
              checked: showBackContent,
              onChange: () => {
                setAttributes({
                  showBackContent: !showBackContent
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button', 'zoloblocks'),
              checked: showBackLinkBtn,
              onChange: () => {
                setAttributes({
                  showBackLinkBtn: !showBackLinkBtn
                });
              }
            }), showBackLinkBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Icon', 'zoloblocks'),
              checked: showBackLinkBtnIcon,
              onChange: () => {
                setAttributes({
                  showBackLinkBtnIcon: !showBackLinkBtnIcon
                });
              }
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'zolo-block'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selected Side', 'zoloblocks'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
              className: "zolo-button-group",
              children: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIPBLOX_SIDE.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                isLarge: true,
                variant: side === item.value ? 'primary' : 'secondary',
                "aria-pressed": side === item.value,
                showBackLinkBtn: true,
                onClick: () => {
                  setSide(item.value);
                  if (item.value === 'back') {
                    onBackSideClick();
                  } else {
                    removeActiveClass();
                  }
                },
                children: item.label
              }))
            })
          }), side === 'front' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [showFrontIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "zolo-custom-heading",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon/Image', 'zoloblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "zolo-flex-row-control-tab",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(IconicBtnGroup, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type', 'zoloblocks'),
                  value: frontIconType,
                  onChange: value => setAttributes({
                    frontIconType: value
                  }),
                  options: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIPBOX_ICON_OPTIONS
                })
              }), frontIconType === 'icon' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloIconPicker, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Icon', 'zolo-block'),
                value: frontIcon,
                onChange: v => setAttributes({
                  frontIcon: v
                })
              }), frontIconType === 'image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'zoloblocks'),
                  className: "zolo-flex-col-control",
                  children: frontIconTypeImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ImageAvatar, {
                    imageUrl: frontIconTypeImage && frontIconTypeImage.url,
                    onDeleteImage: () => setAttributes({
                      frontIconTypeImage: null
                    }),
                    imageId: frontIconTypeImage && frontIconTypeImage.id,
                    onEditImage: media => {
                      setAttributes({
                        frontIconTypeImage: {
                          id: media.id,
                          url: media.url,
                          alt: media.alt,
                          sizes: media.sizes,
                          caption: media.caption
                        }
                      });
                    }
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
                    onSelect: media => {
                      setAttributes({
                        frontIconTypeImage: {
                          id: media.id,
                          url: media.url,
                          alt: media.alt,
                          sizes: media.sizes,
                          caption: media.caption
                        }
                      });
                    },
                    allowedTypes: ['image'],
                    value: frontIconTypeImage && frontIconTypeImage.id,
                    render: ({
                      open
                    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      className: "zolo-image-upload-btn",
                      onClick: open,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("svg", {
                        width: "24",
                        height: "24",
                        xmlns: "http://www.w3.org/2000/svg",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("path", {
                          d: "M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"
                        })
                      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(' Upload Photo', 'zoloblocks')]
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ImageSizes, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Resolution', 'zoloblocks'),
                  value: imageRes,
                  onChange: value => setAttributes({
                    imageRes: value
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ObjectFitControl, {
                  value: objectFit,
                  onChange: objectFit => setAttributes({
                    objectFit: objectFit
                  })
                })]
              })]
            }), showFrontTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "zolo-custom-heading",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
                value: frontTitle,
                onChange: newText => setAttributes({
                  frontTitle: newText
                })
              })]
            }), showFrontContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "zolo-custom-heading",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'zoloblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "zolo-flex-col-control",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
                  value: frontContent,
                  onChange: newText => setAttributes({
                    frontContent: newText
                  })
                })
              })]
            })]
          }), side === 'back' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [showBackIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "zolo-custom-heading",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon/Image', 'zoloblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "zolo-flex-row-control-tab",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(IconicBtnGroup, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type', 'zoloblocks'),
                  value: backIconType,
                  onChange: value => setAttributes({
                    backIconType: value
                  }),
                  options: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIPBOX_ICON_OPTIONS
                })
              }), backIconType === 'icon' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloIconPicker, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Icon', 'zolo-block'),
                value: backIcon,
                onChange: v => setAttributes({
                  backIcon: v
                })
              }), backIconType === 'image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'zoloblocks'),
                  className: "zolo-flex-col-control",
                  children: backIconTypeImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ImageAvatar, {
                    imageUrl: backIconTypeImage && backIconTypeImage.url,
                    onDeleteImage: () => setAttributes({
                      backIconTypeImage: null
                    }),
                    imageId: backIconTypeImage && backIconTypeImage.id,
                    onEditImage: media => {
                      setAttributes({
                        backIconTypeImage: {
                          id: media.id,
                          url: media.url,
                          alt: media.alt,
                          sizes: media.sizes,
                          caption: media.caption
                        }
                      });
                    }
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
                    onSelect: media => {
                      setAttributes({
                        backIconTypeImage: {
                          id: media.id,
                          url: media.url,
                          alt: media.alt,
                          sizes: media.sizes,
                          caption: media.caption
                        }
                      });
                    },
                    allowedTypes: ['image'],
                    value: backIconTypeImage && backIconTypeImage.id,
                    render: ({
                      open
                    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      className: "zolo-image-upload-btn",
                      onClick: open,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("svg", {
                        width: "24",
                        height: "24",
                        xmlns: "http://www.w3.org/2000/svg",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("path", {
                          d: "M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"
                        })
                      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(' Upload Photo', 'zoloblocks')]
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ImageSizes, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Resolution', 'zoloblocks'),
                  value: imageRes,
                  onChange: value => setAttributes({
                    imageRes: value
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ObjectFitControl, {
                  value: backImageObjectFit,
                  onChange: backImageObjectFit => setAttributes({
                    backImageObjectFit: backImageObjectFit
                  })
                })]
              })]
            }), showBackTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "zolo-custom-heading",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
                value: backTitle,
                onChange: newText => setAttributes({
                  backTitle: newText
                })
              })]
            }), showBackContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "zolo-custom-heading",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'zoloblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "zolo-flex-col-control",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
                  value: backContent,
                  onChange: newText => setAttributes({
                    backContent: newText
                  })
                })
              })]
            }), showBackLinkBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "zolo-custom-heading",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button', 'zoloblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
                value: buttonText,
                onChange: newText => setAttributes({
                  buttonText: newText
                })
              }), showBackLinkBtnIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloIconPicker, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zolo-block'),
                value: buttonIcon,
                onChange: v => setAttributes({
                  buttonIcon: v
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(LinkControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('URL', 'zoloblocks'),
                value: link,
                onChange: value => setAttributes({
                  link: value
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Settings', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "zolo-flex-row-control-tab",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(IconicBtnGroup, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Trigger Type', 'zoloblocks'),
              value: triggerType,
              onChange: value => setAttributes({
                triggerType: value
              }),
              options: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIP_TRIGGER_TYPE
            })
          }), triggerType === 'click' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The feature works on the frontend only.', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Effect', 'zoloblocks'),
            value: flipEffect,
            options: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIP_EFFECT,
            onChange: flipEffect => {
              setAttributes({
                flipEffect
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Easing Type', 'zoloblocks'),
            value: flipEasingType,
            options: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIP_EASING_TYPE,
            onChange: flipEasingType => {
              setAttributes({
                flipEasingType
              });
            }
          }), flipEasingType === 'custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom Easing', 'zoloblocks'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Example: cubic-bezier(0.42, 0, 0.58, 1)', 'zoloblocks'),
            value: flipCustomEasing,
            onChange: customEasing => setAttributes({
              flipCustomEasing: customEasing
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RangeResetControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Duration (ms)', 'zoloblocks'),
            controlName: 'flipDuration',
            requiredProps: requiredProps,
            min: 0,
            max: 5000,
            defaultVal: 600,
            step: 1
          })]
        })]
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Items', 'zolo-block'),
          firstOpen: true,
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "zolo-custom-heading",
            style: {
              border: 0,
              paddingTop: 0
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('common', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Height', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIPBOX_HEIGHT,
            requiredProps: requiredProps,
            min: 200,
            max: 1000,
            defaultVal: 300
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIPBOX_ITEMS_PADDING,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIPBOX_BORDER_RADIUS,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selected Side', 'zoloblocks'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
              className: "zolo-button-group",
              children: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIPBLOX_SIDE.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                isLarge: true,
                variant: side === item.value ? 'primary' : 'secondary',
                "aria-pressed": side === item.value,
                showBackLinkBtn: true,
                onClick: () => {
                  setSide(item.value);
                  if (item.value === 'back') {
                    onBackSideClick();
                  } else {
                    removeActiveClass();
                  }
                },
                children: item.label
              }))
            })
          }), side === 'front' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
              requiredProps: requiredProps,
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FRONT_ITEMS_BG,
              noMainBGImg: false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FRONT_ITEMS_BORDER,
              requiredProps: requiredProps
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BoxShadowControl, {
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FRONT_ITEMS_SHADOW,
              requiredProps: requiredProps,
              enableTransition: false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResAlignmentControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alignment', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FRONT_ITEMS_ALIGNMENT,
              requiredProps: requiredProps,
              alignOptions: _src_global_constants__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_ALIGNS
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResAlignmentControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical Alignment', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FRONT_ITEMS_VERTICAL_ALIGNMENT,
              requiredProps: requiredProps,
              alignOptions: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIPBOX_VERTICAL_ALIGNMENT
            })]
          }), side === 'back' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
              requiredProps: requiredProps,
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_ITEMS_BG,
              noMainBGImg: false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_ITEMS_BORDER,
              requiredProps: requiredProps
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BoxShadowControl, {
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_ITEMS_SHADOW,
              requiredProps: requiredProps,
              enableTransition: false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResAlignmentControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alignment', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_ITEMS_ALIGNMENT,
              requiredProps: requiredProps,
              alignOptions: _src_global_constants__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_ALIGNS
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResAlignmentControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical Alignment', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_ITEMS_VERTICAL_ALIGNMENT,
              requiredProps: requiredProps,
              alignOptions: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIPBOX_VERTICAL_ALIGNMENT
            })]
          })]
        }), (showFrontIcon || showBackIcon) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon/Image', 'zolo-block'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selected Side', 'zoloblocks'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
              className: "zolo-button-group",
              children: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIPBLOX_SIDE.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                isLarge: true,
                variant: side === item.value ? 'primary' : 'secondary',
                "aria-pressed": side === item.value,
                showBackLinkBtn: true,
                onClick: () => {
                  setSide(item.value);
                  if (item.value === 'back') {
                    onBackSideClick();
                  } else {
                    removeActiveClass();
                  }
                },
                children: item.label
              }))
            })
          }), side === 'front' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: showFrontIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: frontIconColor,
                onChange: color => setAttributes({
                  frontIconColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FRONT_ICON_SIZE,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FRONT_ICON_BG,
                noMainBGImg: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FRONT_ICON_PADDING,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FRONT_ICON_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FRONT_ICON_BORDER_RADIUS,
                requiredProps: requiredProps
              })]
            })
          }), side === 'back' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: showBackIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: backIconColor,
                onChange: color => setAttributes({
                  backIconColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_ICON_SIZE,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_ICON_BG,
                noMainBGImg: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_ICON_PADDING,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_ICON_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_ICON_BORDER_RADIUS,
                requiredProps: requiredProps
              })]
            })
          })]
        }), (showFrontTitle || showBackTitle) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selected Side', 'zoloblocks'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
              className: "zolo-button-group",
              children: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIPBLOX_SIDE.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                isLarge: true,
                variant: side === item.value ? 'primary' : 'secondary',
                "aria-pressed": side === item.value,
                showBackLinkBtn: true,
                onClick: () => {
                  setSide(item.value);
                  if (item.value === 'back') {
                    onBackSideClick();
                  } else {
                    removeActiveClass();
                  }
                },
                children: item.label
              }))
            })
          }), side === 'front' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: showFrontTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: frontTitleColor,
                onChange: color => setAttributes({
                  frontTitleColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.FRONT_TITLE_TYPOGRAPHY,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FRONT_TITLE_MARGIN,
                requiredProps: requiredProps
              })]
            })
          }), side === 'back' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
              color: backTitleColor,
              onChange: color => setAttributes({
                backTitleColor: color
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
              typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.BACK_TITLE_TYPOGRAPHY,
              requiredProps: requiredProps
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_TITLE_MARGIN,
              requiredProps: requiredProps
            })]
          })]
        }), (showFrontContent || showBackContent) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selected Side', 'zoloblocks'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
              className: "zolo-button-group",
              children: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIPBLOX_SIDE.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                isLarge: true,
                variant: side === item.value ? 'primary' : 'secondary',
                "aria-pressed": side === item.value,
                showBackLinkBtn: true,
                onClick: () => {
                  setSide(item.value);
                  if (item.value === 'back') {
                    onBackSideClick();
                  } else {
                    removeActiveClass();
                  }
                },
                children: item.label
              }))
            })
          }), side === 'front' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
              typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.FRONT_CONTENT_TYPOGRAPHY,
              requiredProps: requiredProps
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
              color: frontContentColor,
              onChange: color => setAttributes({
                frontContentColor: color
              })
            })]
          }), side === 'back' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
              typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.BACK_CONTENT_TYPOGRAPHY,
              requiredProps: requiredProps
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
              color: backContentColor,
              onChange: color => setAttributes({
                backContentColor: color
              })
            })]
          })]
        }), showBackLinkBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selected Side', 'zoloblocks'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
              className: "zolo-button-group",
              children: _constants__WEBPACK_IMPORTED_MODULE_5__.FLIPBLOX_SIDE.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                isLarge: true,
                variant: side === item.value ? 'primary' : 'secondary',
                "aria-pressed": side === item.value,
                showBackLinkBtn: true,
                onClick: () => {
                  setSide(item.value);
                  if (item.value === 'back') {
                    onBackSideClick();
                  } else {
                    removeActiveClass();
                  }
                },
                children: item.label
              }))
            })
          }), side === 'back' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TabPanelControl, {
              normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: backLinkColor,
                  onChange: color => setAttributes({
                    backLinkColor: color
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                  typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.BACK_LINK_TYPOGRAPHY,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
                  requiredProps: requiredProps,
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_LINK_BG,
                  noMainBGImg: false
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_LINK_PADDING,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_LINK_BORDER,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_LINK_BORDER_RADIUS,
                  requiredProps: requiredProps
                })]
              }),
              hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: backLinkHoverColor,
                  onChange: color => setAttributes({
                    backLinkHoverColor: color
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
                  requiredProps: requiredProps,
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BACK_LINK_HBG,
                  noMainBGImg: false
                })]
              })
            })
          })]
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps,
          block: "zolo/flipbox"
        })
      })
    })
  }, "controls");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/flipbox/save.js":
/*!************************************!*\
  !*** ./src/blocks/flipbox/save.js ***!
  \************************************/
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
  DisplayZoloIcon,
  classArrayToStr
} = window.zoloModule;



const Save = props => {
  const {
    attributes
  } = props;
  const {
    uniqueId,
    zoloId,
    flipEffect,
    parentClasses,
    frontIcon,
    backIcon,
    showFrontIcon,
    showFrontTitle,
    frontTitle,
    showFrontContent,
    frontContent,
    showBackIcon,
    showBackTitle,
    backTitle,
    showBackContent,
    backContent,
    showBackLinkBtn,
    buttonText,
    buttonIcon,
    showBackLinkBtnIcon,
    link,
    triggerType,
    frontIconType,
    backIconType,
    frontIconTypeImage,
    backIconTypeImage,
    imageRes
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(uniqueId, classArrayToStr(parentClasses))
  });

  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('zolo.blocks.render.hook.after', [], props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    ...blockProps,
    ...(zoloId && {
      id: zoloId
    }),
    children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: `zolo-flip-box_wrap zolo-flip-box_animation_style-${flipEffect}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: `zolo-flip-box_item ${triggerType === 'hover' ? 'zolo-flip-box_hover' : ''}`,
        "data-triggerType": triggerType,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "zolo-flip-box_inner-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "zolo-flip-box_face zolo-flip-box_front",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "zolo-flip-box-content zolo-flip-box_front-content",
              children: [showFrontIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "zolo-flip-box_icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: `zolo-flip-box_inner-icon ${frontIconType !== 'icon' ? 'zolo-image' : 'zolo-icon'}`,
                  children: frontIconType == 'icon' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                    children: frontIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DisplayZoloIcon, {
                      icon: frontIcon
                    })
                  }) : frontIconTypeImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                    src: frontIconTypeImage.sizes && frontIconTypeImage.sizes[imageRes] ? frontIconTypeImage.sizes[imageRes].url : frontIconTypeImage.url,
                    alt: frontIconTypeImage.alt || 'front icon',
                    className: `wp-image-${frontIconTypeImage.id}`,
                    loading: "lazy"
                  })
                })
              }), (showFrontTitle || showFrontContent) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  children: [showFrontTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                    className: "zolo-flip-box_title",
                    children: frontTitle
                  }), showFrontContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    className: "zolo-flip-box_desc",
                    children: frontContent
                  })]
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "zolo-flip-box_face zolo-flip-box_back",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "zolo-flip-box-content zolo-flip-box_back-content",
              children: [showBackIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "zolo-flip-box_icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: `zolo-flip-box_inner-icon ${backIconType !== 'icon' ? 'zolo-image' : 'zolo-icon'}`,
                  children: backIconType == 'icon' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                    children: [" ", backIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DisplayZoloIcon, {
                      icon: backIcon
                    })]
                  }) : backIconTypeImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                    src: backIconTypeImage.sizes && backIconTypeImage.sizes[imageRes] ? backIconTypeImage.sizes[imageRes].url : backIconTypeImage.url,
                    alt: backIconTypeImage.alt || '',
                    className: `wp-image-${backIconTypeImage.id}`,
                    loading: "lazy"
                  })
                })
              }), (showBackTitle || showBackContent) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  children: [showBackTitle && (link ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                    href: link && link?.url,
                    target: link && link?.openInNewTab && '_blank',
                    rel: link && link?.openInNewTab && 'noopener noreferrer',
                    className: "title-link",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                      className: "zolo-flip-box_title",
                      children: backTitle
                    })
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                    className: "zolo-flip-box_title",
                    children: backTitle
                  })), showBackContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    className: "zolo-flip-box_desc",
                    children: backContent
                  })]
                })
              }), showBackLinkBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "zolo-flip-box_link-button-wrap",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                  href: link && link?.url,
                  target: link && link?.openInNewTab && '_blank',
                  rel: link && link?.openInNewTab && 'noopener noreferrer',
                  className: "zolo-flip-box_link-btn",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    children: buttonText
                  }), buttonIcon && showBackLinkBtnIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DisplayZoloIcon, {
                    icon: buttonIcon
                  })]
                })
              })]
            })
          })]
        })
      })
    }), renderHookAfter && renderHookAfter]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/flipbox/style.js":
/*!*************************************!*\
  !*** ./src/blocks/flipbox/style.js ***!
  \*************************************/
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/blocks/flipbox/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/typoPrefixConstants */ "./src/blocks/flipbox/constants/typoPrefixConstants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */



/**
 * Internal depencencies
 */
const {
  generateBorderStyle,
  generateDimensionStyle,
  generateTypographyStyles,
  generateResRangeStyle,
  generateNormalBGControlStyles,
  GlobalStyleHanlder,
  generateBoxShadowStyles,
  generateResAlignmentStyle
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
    flipDuration,
    frontIconColor,
    frontTitleColor,
    frontContentColor,
    backIconColor,
    backTitleColor,
    backContentColor,
    backLinkColor,
    backLinkHoverColor,
    backLinkHoverBorderColor,
    objectFit,
    backImageObjectFit,
    flipEasingType,
    flipCustomEasing
  } = attributes;
  const {
    desktopRangeStyle: flipboxDeskHeight,
    tabRangeStyle: flipboxTabHeight,
    mobRangeStyle: flipboxMobHeight
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FLIPBOX_HEIGHT,
    property: 'height',
    attributes
  });
  const {
    desktopBorderStyle: frontItemsBorderDeskStyle,
    tabBorderStyle: frontItemsBorderTabStyle,
    mobBorderStyle: frontItemsBorderMobStyle
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FRONT_ITEMS_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: flipboxDeskBorderRadius,
    dimensionStylesTab: flipboxTabBorderRadius,
    dimensionStylesMobile: flipboxMobBorderRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FLIPBOX_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: flipboxItemsDeskPadding,
    dimensionStylesTab: flipboxItemsTabPadding,
    dimensionStylesMobile: flipboxItemsMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FLIPBOX_ITEMS_PADDING,
    styleFor: 'padding',
    attributes
  });

  // alignment
  const {
    desktopAlignStyle: frontItemsAlignmentDesktop,
    tabAlignStyle: frontItemsAlignmentTab,
    mobAlignStyle: frontItemsAlignmentMob
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FRONT_ITEMS_ALIGNMENT,
    property: 'text-align',
    attributes
  });
  const {
    desktopAlignStyle: frontItemsVerticalAlignmentDesktop,
    tabAlignStyle: frontItemsVerticalAlignmentTab,
    mobAlignStyle: frontItemsVerticalAlignmentMob
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FRONT_ITEMS_VERTICAL_ALIGNMENT,
    property: 'justify-content',
    attributes
  });
  const {
    desktopAlignStyle: backItemsAlignmentDesktop,
    tabAlignStyle: backItemsAlignmentTab,
    mobAlignStyle: backItemsAlignmentMob
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_ITEMS_ALIGNMENT,
    property: 'text-align',
    attributes
  });
  const {
    desktopAlignStyle: backItemsVerticalAlignmentDesktop,
    tabAlignStyle: backItemsVerticalAlignmentTab,
    mobAlignStyle: backItemsVerticalAlignmentMob
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_ITEMS_VERTICAL_ALIGNMENT,
    property: 'justify-content',
    attributes
  });
  const {
    backgroundStylesDesktop: frontItemsDeskBg,
    backgroundStylesTab: frontItemsTabBg,
    backgroundStylesMobile: frontItemsMobBg
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FRONT_ITEMS_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    boxShadowStyle: frontItemsShadow
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FRONT_ITEMS_SHADOW,
    attributes
  });
  const {
    boxShadowStyle: backItemsShadow
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_ITEMS_SHADOW,
    attributes
  });
  //FLIPBOX BACK CONTENT
  const {
    desktopBorderStyle: backItemsBorderDeskStyle,
    tabBorderStyle: backItemsBorderTabStyle,
    mobBorderStyle: backItemsBorderMobStyle
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_ITEMS_BORDER,
    attributes
  });
  const {
    backgroundStylesDesktop: backItemsDeskBg,
    backgroundStylesTab: backItemsTabBg,
    backgroundStylesMobile: backItemsMobBg
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_ITEMS_BG,
    attributes,
    noMainBGImg: false
  });
  // flipbox icon front

  const {
    dimensionStylesDesktop: frontIconDeskSizeHeight,
    dimensionStylesTab: frontIconTabSizeHeight,
    dimensionStylesMobile: frontIconMobSizeHeight
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FRONT_ICON_SIZE,
    styleFor: 'height',
    attributes
  });
  const {
    dimensionStylesDesktop: frontIconDeskSizeWidth,
    dimensionStylesTab: frontIconTabSizeWidth,
    dimensionStylesMobile: frontIconMobSizeWidth
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FRONT_ICON_SIZE,
    styleFor: 'width',
    attributes
  });
  const {
    desktopBorderStyle: frontIconBorderDeskStyle,
    tabBorderStyle: frontIconBorderTabStyle,
    mobBorderStyle: frontIconBorderMobStyle
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FRONT_ICON_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: frontIconDeskBorderRadius,
    dimensionStylesTab: frontIconTabBorderRadius,
    dimensionStylesMobile: frontIconMobBorderRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FRONT_ICON_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: frontIconDeskPadding,
    dimensionStylesTab: frontIconTabPadding,
    dimensionStylesMobile: frontIconMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FRONT_ICON_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: frontIconDeskMargin,
    dimensionStylesTab: frontIconTabMargin,
    dimensionStylesMobile: frontIconMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FRONT_ICON_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    backgroundStylesDesktop: frontIconDeskBg,
    backgroundStylesTab: frontIconTabBg,
    backgroundStylesMobile: frontIconMobBg
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FRONT_ICON_BG,
    attributes,
    noMainBGImg: false
  });

  // flipbox icon back

  const {
    dimensionStylesDesktop: backIconDeskSizeHeight,
    dimensionStylesTab: backIconTabSizeHeight,
    dimensionStylesMobile: backIconMobSizeHeight
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_ICON_SIZE,
    styleFor: 'height',
    attributes
  });
  const {
    dimensionStylesDesktop: backIconDeskSizeWidth,
    dimensionStylesTab: backIconTabSizeWidth,
    dimensionStylesMobile: backIconMobSizeWidth
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_ICON_SIZE,
    styleFor: 'width',
    attributes
  });
  const {
    desktopBorderStyle: backIconBorderDeskStyle,
    tabBorderStyle: backIconBorderTabStyle,
    mobBorderStyle: backIconBorderMobStyle
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_ICON_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: backIconDeskBorderRadius,
    dimensionStylesTab: backIconTabBorderRadius,
    dimensionStylesMobile: backIconMobBorderRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_ICON_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: backIconDeskPadding,
    dimensionStylesTab: backIconTabPadding,
    dimensionStylesMobile: backIconMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_ICON_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: backIconDeskMargin,
    dimensionStylesTab: backIconTabMargin,
    dimensionStylesMobile: backIconMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_ICON_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    backgroundStylesDesktop: backIconDeskBg,
    backgroundStylesTab: backIconTabBg,
    backgroundStylesMobile: backIconMobBg
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_ICON_BG,
    attributes,
    noMainBGImg: false
  });

  // flipbox front title
  const {
    typoStylesDesktop: frontTitleTypoDesk,
    typoStylesTab: frontTitleTypoTab,
    typoStylesMobile: frontTitleTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.FRONT_TITLE_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: frontTitleDeskMargin,
    dimensionStylesTab: frontTitleTabMargin,
    dimensionStylesMobile: frontTitleMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FRONT_TITLE_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // flipbox front title
  const {
    typoStylesDesktop: backTitleTypoDesk,
    typoStylesTab: backTitleTypoTab,
    typoStylesMobile: backTitleTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.BACK_TITLE_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: backTitleDeskMargin,
    dimensionStylesTab: backTitleTabMargin,
    dimensionStylesMobile: backTitleMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_TITLE_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // FLIPBOX FRONT CONTENT
  const {
    typoStylesDesktop: frontContentTypoDesk,
    typoStylesTab: frontContentTypoTab,
    typoStylesMobile: frontContentTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.FRONT_CONTENT_TYPOGRAPHY,
    attributes
  });
  // FLIPBOX FRONT CONTENT
  const {
    typoStylesDesktop: backContentTypoDesk,
    typoStylesTab: backContentTypoTab,
    typoStylesMobile: backContentTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.BACK_CONTENT_TYPOGRAPHY,
    attributes
  });

  // FLIPBOX BACK LINK BUTTON
  const {
    desktopBorderStyle: backLinkBorderDeskStyle,
    tabBorderStyle: backLinkBorderTabStyle,
    mobBorderStyle: backLinkBorderMobStyle
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_LINK_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: backLinkDeskBorderRadius,
    dimensionStylesTab: backLinkTabBorderRadius,
    dimensionStylesMobile: backLinkMobBorderRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_LINK_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: backLinkDeskPadding,
    dimensionStylesTab: backLinkTabPadding,
    dimensionStylesMobile: backLinkMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_LINK_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    typoStylesDesktop: backLinkTypoDesk,
    typoStylesTab: backLinkTypoTab,
    typoStylesMobile: backLinkTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.BACK_LINK_TYPOGRAPHY,
    attributes
  });
  const {
    backgroundStylesDesktop: backLinkDeskBg,
    backgroundStylesTab: backLinkTabBg,
    backgroundStylesMobile: backLinkMobBg
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_LINK_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    backgroundStylesDesktop: backLinkDeskHBg,
    backgroundStylesTab: backLinkTabHBg,
    backgroundStylesMobile: backLinkMobHBg
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BACK_LINK_HBG,
    attributes,
    noMainBGImg: false
  });
  /**
   * All Style Combination
   */

  const desktopAllStyle = `

    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_face{
        ${flipboxDeskBorderRadius}
        }


    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box-content{
        ${flipboxItemsDeskPadding}
        }



    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_front-content{
        ${frontItemsAlignmentDesktop}
        ${frontItemsVerticalAlignmentDesktop}
        }
    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_back-content{
        ${backItemsAlignmentDesktop}
        ${backItemsVerticalAlignmentDesktop}
        }

    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_inner-item {
        ${flipboxDeskHeight}
        ${flipDuration ? `transition-duration: ${flipDuration}ms;` : ''}
        ${flipEasingType === 'custom' ? `transition-timing-function: ${flipCustomEasing};` : `transition-timing-function: ${flipEasingType};`}

        }
    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_inner-item .zolo-flip-box_face {
        ${flipDuration ? `transition-duration: ${flipDuration}ms;` : ''}
                ${flipEasingType === 'custom' ? `transition-timing-function: ${flipCustomEasing};` : `transition-timing-function: ${flipEasingType};`}

        }


    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front {
        ${frontItemsBorderDeskStyle}
        ${frontItemsDeskBg}
        ${frontItemsShadow}
        }

    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back {
        ${backItemsBorderDeskStyle}
        ${backItemsDeskBg}
        ${backItemsShadow}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon {
            ${frontIconDeskBg}
            ${frontIconBorderDeskStyle}
            ${frontIconDeskBorderRadius}
            ${frontIconDeskPadding}
            ${frontIconDeskMargin}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon img {
            ${objectFit ? `object-fit: ${objectFit};` : ''}
            ${frontIconDeskSizeHeight}
            ${frontIconDeskSizeWidth}
            ${frontIconDeskBorderRadius}

        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon img {
            ${backImageObjectFit ? `object-fit: ${backImageObjectFit};` : ''}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon svg {
            ${frontIconDeskSizeHeight}
            ${frontIconDeskSizeWidth}
            ${frontIconColor ? `fill: ${frontIconColor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon svg path{
            ${frontIconColor ? `fill: ${frontIconColor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_title {
            ${frontTitleColor ? `color: ${frontTitleColor};` : ''}
            ${frontTitleTypoDesk}
            ${frontTitleDeskMargin}
		}
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_desc {
            ${frontContentColor ? `color: ${frontContentColor};` : ''}
            ${frontContentTypoDesk}
		}

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon {
            ${backIconDeskBg}
            ${backIconBorderDeskStyle}
            ${backIconDeskBorderRadius}
            ${backIconDeskPadding}
            ${backIconDeskMargin}
            ${backIconDeskSizeHeight}
            ${backIconDeskSizeWidth}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon svg {
            ${backIconDeskSizeHeight}
            ${backIconDeskSizeWidth}
            ${backIconColor ? `fill: ${backIconColor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon svg path{
            ${backIconColor ? `fill: ${backIconColor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_title {
            ${backTitleColor ? `color: ${backTitleColor};` : ''}
            ${backTitleTypoDesk}
            ${backTitleDeskMargin}
		}
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_desc {
            ${backContentColor ? `color: ${backContentColor};` : ''}
            ${backContentTypoDesk}
		}
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_link-btn {
            ${backLinkColor ? `color: ${backLinkColor};` : ''}
            ${backLinkDeskBg}
            ${backLinkBorderDeskStyle}
            ${backLinkDeskBorderRadius}
            ${backLinkDeskPadding}
            ${backLinkTypoDesk}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_link-btn:hover {
            ${backLinkHoverColor ? `color: ${backLinkHoverColor};` : ''}
            ${backLinkHoverBorderColor ? `border-color: ${backLinkHoverBorderColor};` : ''}
            ${backLinkDeskHBg}
		}

	`;
  const tabletAllStyle = `



    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_face{
        ${flipboxTabBorderRadius}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box-content{
        ${flipboxItemsTabPadding}
        }
    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_front-content{
        ${frontItemsAlignmentTab}
        ${frontItemsVerticalAlignmentTab}
        }
    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_back-content{
        ${backItemsAlignmentTab}
        ${backItemsVerticalAlignmentTab}
        }


    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_inner-item {
        ${flipboxTabHeight}
        }


    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front {
        ${frontItemsBorderTabStyle}
        ${frontItemsTabBg}
        }

    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back {
        ${backItemsBorderTabStyle}
        ${backItemsTabBg}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon {
            ${frontIconTabBg}
            ${frontIconBorderTabStyle}
            ${frontIconTabBorderRadius}
            ${frontIconTabPadding}
            ${frontIconTabMargin}
            ${frontIconTabSizeHeight}
            ${frontIconTabSizeWidth}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon svg {
            ${frontIconTabSizeHeight}
            ${frontIconTabSizeWidth}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_title {
            ${frontTitleTypoTab}
            ${frontTitleTabMargin}
		}
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_desc {
            ${frontContentTypoTab}
		}

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon {
            ${backIconTabBg}
            ${backIconBorderTabStyle}
            ${backIconTabBorderRadius}
            ${backIconTabPadding}
            ${backIconTabMargin}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon svg {
            ${backIconTabSizeHeight}
            ${backIconTabSizeWidth}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_title {
            ${backTitleTypoTab}
            ${backTitleTabMargin}
		}
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_desc {
            ${backContentTypoTab}
		}
         .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_link-btn {
            ${backLinkColor ? `color: ${backLinkColor};` : ''}
            ${backLinkTabBg}
            ${backLinkBorderTabStyle}
            ${backLinkTabBorderRadius}
            ${backLinkTabPadding}
            ${backLinkTypoTab}
        }
	`;
  const mobileAllStyle = `

.${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_face{
        ${flipboxMobBorderRadius}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box-content{
        ${flipboxItemsMobPadding}
        }
    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_front-content{
        ${frontItemsAlignmentMob}
        ${frontItemsVerticalAlignmentMob}
        }
    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_item .zolo-flip-box_back-content{
        ${backItemsAlignmentMob}
        ${backItemsVerticalAlignmentMob}
        }
    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_inner-item {
        ${flipboxMobHeight}
        ${flipboxMobBorderRadius}
        }


    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front {
        ${frontItemsBorderMobStyle}
        ${frontItemsMobBg}
        }

    .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back {
        ${backItemsBorderMobStyle}
        ${backItemsMobBg}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon {
            ${frontIconMobBg}
            ${frontIconBorderMobStyle}
            ${frontIconMobBorderRadius}
            ${frontIconMobPadding}
            ${frontIconMobMargin}
            ${frontIconMobSizeHeight}
            ${frontIconMobSizeWidth}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_inner-icon svg {
            ${frontIconMobSizeHeight}
            ${frontIconMobSizeWidth}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_title {
            ${frontTitleTypoMob}
            ${frontTitleMobMargin}
		}
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_front .zolo-flip-box_desc {
            ${frontContentTypoMob}
		}

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon {
            ${backIconMobBg}
            ${backIconBorderMobStyle}
            ${backIconMobBorderRadius}
            ${backIconMobPadding}
            ${backIconMobMargin}
            ${backIconMobSizeHeight}
            ${backIconMobSizeWidth}
        }

        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_inner-icon svg {
            ${backIconMobSizeHeight}
            ${backIconMobSizeWidth}
        }
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_title {
            ${backTitleTypoMob}
            ${backTitleMobMargin}
		}
        .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_desc {
            ${backContentTypoMob}
		}

         .${uniqueId}.wp-block-zolo-flipbox .zolo-flip-box_back .zolo-flip-box_link-btn {
            ${backLinkMobBg}
            ${backLinkBorderMobStyle}
            ${backLinkMobBorderRadius}
            ${backLinkMobPadding}
            ${backLinkTypoMob}
        }
	`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.flipbox.desktopAllStyle', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.flipbox.tabletAllStyle', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.flipbox.mobileAllStyle', mobileAllStyle, props)
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

/***/ "./src/blocks/flipbox/style.scss":
/*!***************************************!*\
  !*** ./src/blocks/flipbox/style.scss ***!
  \***************************************/
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

/***/ "./src/blocks/flipbox/block.json":
/*!***************************************!*\
  !*** ./src/blocks/flipbox/block.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Flipbox","name":"zolo/flipbox","category":"zoloblocks","keywords":["flip","box","card","feature","service","list"],"description":"Design engaging flipbox layouts with interactive displays.","apiVersion":3,"textdomain":"zoloblocks","supports":{"anchor":false,"customClassName":false,"align":["wide","full"]},"example":{"attributes":{"preview":true},"viewportWidth":410},"editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./frontend.js"}');

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
/******/ 			"blocks/flipbox/index": 0,
/******/ 			"blocks/flipbox/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/flipbox/style-index"], () => (__webpack_require__("./src/blocks/flipbox/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map