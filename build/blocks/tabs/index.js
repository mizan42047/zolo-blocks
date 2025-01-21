/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/tabs/attributes.js":
/*!***************************************!*\
  !*** ./src/blocks/tabs/attributes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/tabs/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/tabs/constants/typoPrefixConstant.js");
/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateTypographyAttributes,
  generateResAlignmentAttributies,
  generateDimensionAttributes,
  generateNormalBGAttributes,
  generateBorderAttributies,
  generateBoxShadowAttributies
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
  // tabs
  tabTitles: {
    type: 'array',
    default: [{
      id: '1',
      hasTitle: true,
      title: 'Tab One',
      hasDescription: false,
      description: 'Tab 1 Content: This tab provides general information about our company',
      hasMedia: false,
      hasNumber: false,
      isDefault: true,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>'
    }, {
      id: '2',
      hasTitle: true,
      title: 'Tab Two',
      hasDescription: false,
      description: 'Tab 2 Content: This tab provides general information about our company',
      hasMedia: false,
      hasNumber: false,
      isDefault: true,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>'
    }, {
      id: '3',
      hasTitle: true,
      title: 'Tab Three',
      hasDescription: false,
      description: 'Tab 3 Content: This tab provides general information about our company',
      hasMedia: false,
      hasNumber: false,
      isDefault: true,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>'
    }]
  },
  addNewTabStatus: {
    type: 'boolean',
    default: true
  },
  tabsLayout: {
    type: 'string',
    default: 'horizontal'
  },
  verticalPreset: {
    type: 'string',
    default: 'vpreset-1'
  },
  verticalLayoutDirection: {
    type: 'string',
    default: 'vertical-left'
  },
  tabIndicatorStyle: {
    type: 'string',
    default: 'animation-style-1'
  },
  tabContentStyle: {
    type: 'string',
    default: 'content-style-1'
  },
  contentDirection: {
    type: 'string',
    default: 'content-style-1'
  },
  showTitle: {
    type: 'boolean',
    default: true
  },
  showDesc: {
    type: 'boolean',
    default: false
  },
  showIcon: {
    type: 'boolean',
    default: false
  },
  showIndicator: {
    type: 'boolean',
    default: false
  },
  tabChildCount: {
    type: 'number',
    default: 3
  },
  tabActiveItemNo: {
    type: 'string'
    // default: '1',
  },
  // tab item width
  tabItemWidth: {
    type: 'string',
    default: 'tiw_auto'
  },
  //tabs style title color
  tabTitleColors: {
    type: 'object',
    default: {
      normal: '',
      hover: '',
      active: ''
    }
  },
  activeHintTabColor: {
    type: 'string',
    default: ''
  },
  //tabs style description color
  descColors: {
    type: 'object',
    default: {
      normal: '',
      hover: '',
      active: ''
    }
  },
  descButtomSpacing: {
    type: 'number',
    default: 10
  },
  //tabs style icon color
  iconColors: {
    type: 'object',
    default: {
      normal: '',
      hover: '',
      active: ''
    }
  },
  // item borders
  itemBorderColors: {
    type: 'object',
    default: {
      hover: '',
      active: ''
    }
  },
  horizontalTabItemWidth: {
    type: 'string',
    default: ''
  },
  // tabs container
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.TABS_CWIDTH, {
    defaultUnit: '%'
  }),
  // Generators
  ...generateResAlignmentAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.NAV_ITEMS_ALIGN),
  ...generateResAlignmentAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.NAV_CONTENT_ALIGN),
  ...generateResAlignmentAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.NAV_ICON_ALIGN),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.NAV_SPACING),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_SPACING),
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__)),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_NORMAL_BGCOLOR),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_HOVER_BGCOLOR),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_ACTIVE_BGCOLOR),
  // item
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_ITEM_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_ITEM_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_ITEM_RADIUS),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_ITEM_BORDER),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_ITEM_BSHADOW),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_ITEM_HBSHADOW),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_ITEM_ABSHADOW),
  //tabs wrap
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_WRAP_BGCOLOR),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_WRAP_BORDER),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_WRAP_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_WRAP_PADDING),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.TAB_WRAP_BSHADOW),
  //tabs wrap

  // title
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TITLE_MARGIN),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_HINT_HEIGHT),
  // desc
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.DESC_MARGIN),
  // ICON
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_SIZE),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_HBG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_ABG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_MARGIN)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/tabs/constants/index.js":
/*!********************************************!*\
  !*** ./src/blocks/tabs/constants/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTIVE_HINT_HEIGHT: () => (/* binding */ ACTIVE_HINT_HEIGHT),
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   CONTENT_DIRECTIONS: () => (/* binding */ CONTENT_DIRECTIONS),
/* harmony export */   CONTENT_SPACING: () => (/* binding */ CONTENT_SPACING),
/* harmony export */   CONTENT_STYLES: () => (/* binding */ CONTENT_STYLES),
/* harmony export */   DESC_MARGIN: () => (/* binding */ DESC_MARGIN),
/* harmony export */   ICON_ABG: () => (/* binding */ ICON_ABG),
/* harmony export */   ICON_BG: () => (/* binding */ ICON_BG),
/* harmony export */   ICON_BORDER: () => (/* binding */ ICON_BORDER),
/* harmony export */   ICON_BORDER_RADIUS: () => (/* binding */ ICON_BORDER_RADIUS),
/* harmony export */   ICON_HBG: () => (/* binding */ ICON_HBG),
/* harmony export */   ICON_MARGIN: () => (/* binding */ ICON_MARGIN),
/* harmony export */   ICON_PADDING: () => (/* binding */ ICON_PADDING),
/* harmony export */   ICON_SIZE: () => (/* binding */ ICON_SIZE),
/* harmony export */   INDICATOR_STYLES: () => (/* binding */ INDICATOR_STYLES),
/* harmony export */   LAYOUTS: () => (/* binding */ LAYOUTS),
/* harmony export */   NAV_CONTENT_ALIGN: () => (/* binding */ NAV_CONTENT_ALIGN),
/* harmony export */   NAV_ICON_ALIGN: () => (/* binding */ NAV_ICON_ALIGN),
/* harmony export */   NAV_ITEMS_ALIGN: () => (/* binding */ NAV_ITEMS_ALIGN),
/* harmony export */   NAV_SPACING: () => (/* binding */ NAV_SPACING),
/* harmony export */   TABS_CWIDTH: () => (/* binding */ TABS_CWIDTH),
/* harmony export */   TAB_ACTIVE_BGCOLOR: () => (/* binding */ TAB_ACTIVE_BGCOLOR),
/* harmony export */   TAB_HOVER_BGCOLOR: () => (/* binding */ TAB_HOVER_BGCOLOR),
/* harmony export */   TAB_ITEM_ABSHADOW: () => (/* binding */ TAB_ITEM_ABSHADOW),
/* harmony export */   TAB_ITEM_BORDER: () => (/* binding */ TAB_ITEM_BORDER),
/* harmony export */   TAB_ITEM_BSHADOW: () => (/* binding */ TAB_ITEM_BSHADOW),
/* harmony export */   TAB_ITEM_HBSHADOW: () => (/* binding */ TAB_ITEM_HBSHADOW),
/* harmony export */   TAB_ITEM_MARGIN: () => (/* binding */ TAB_ITEM_MARGIN),
/* harmony export */   TAB_ITEM_PADDING: () => (/* binding */ TAB_ITEM_PADDING),
/* harmony export */   TAB_ITEM_RADIUS: () => (/* binding */ TAB_ITEM_RADIUS),
/* harmony export */   TAB_ITEM_WIDTHS: () => (/* binding */ TAB_ITEM_WIDTHS),
/* harmony export */   TAB_NORMAL_BGCOLOR: () => (/* binding */ TAB_NORMAL_BGCOLOR),
/* harmony export */   TAB_STATES: () => (/* binding */ TAB_STATES),
/* harmony export */   TAB_WRAP_BGCOLOR: () => (/* binding */ TAB_WRAP_BGCOLOR),
/* harmony export */   TAB_WRAP_BORDER: () => (/* binding */ TAB_WRAP_BORDER),
/* harmony export */   TAB_WRAP_BSHADOW: () => (/* binding */ TAB_WRAP_BSHADOW),
/* harmony export */   TAB_WRAP_PADDING: () => (/* binding */ TAB_WRAP_PADDING),
/* harmony export */   TAB_WRAP_RADIUS: () => (/* binding */ TAB_WRAP_RADIUS),
/* harmony export */   TITLE_MARGIN: () => (/* binding */ TITLE_MARGIN),
/* harmony export */   VERTICAL_DIRECTIONS: () => (/* binding */ VERTICAL_DIRECTIONS),
/* harmony export */   VERTICAL_PRESETS: () => (/* binding */ VERTICAL_PRESETS)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


// Block Prefix

const BLOCK_PREFIX = 'tabs';

// layouts
const LAYOUTS = [{
  value: 'horizontal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Horizontal', 'zoloblocks')
}, {
  value: 'vertical',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical', 'zoloblocks')
}];

// vertical presets

const VERTICAL_PRESETS = [{
  value: 'vpreset-1',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preset 1', 'zoloblocks')
}, {
  value: 'vpreset-2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preset 2 (Pro)', 'zoloblocks'),
  disabled: true
}];

// Vertical direction
const VERTICAL_DIRECTIONS = [{
  value: 'vertical-left',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'zoloblocks'),
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
  value: 'vertical-right',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'zoloblocks'),
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

// Content styles
const CONTENT_STYLES = [{
  value: 'content-style-2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 1', 'zoloblocks')
}, {
  value: 'content-style-two',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 2', 'zoloblocks')
}];

// Content directions
const CONTENT_DIRECTIONS = [{
  value: 'content-style-1',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'zoloblocks'),
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
  value: 'content-style-3',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'zoloblocks'),
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

// Tab item widths
const TAB_ITEM_WIDTHS = [{
  value: 'tiw_auto',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Auto', 'zoloblocks')
}, {
  value: 'tiw_justify',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Justify', 'zoloblocks')
}];

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

// Indicator styles
const INDICATOR_STYLES = [{
  value: 'animation-style-1',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 1', 'zoloblocks')
}, {
  value: 'animation-style-2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 2', 'zoloblocks')
}, {
  value: 'animation-style-3',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 3', 'zoloblocks')
}];

// Block Settings
const NAV_ITEMS_ALIGN = 'navItemsAlign';
const NAV_CONTENT_ALIGN = 'navContentAlign';
const NAV_ICON_ALIGN = 'navIconAlign';
const NAV_SPACING = 'navSpacing';
const CONTENT_SPACING = 'contentSpacing';

// tabs container
const TABS_CWIDTH = 'tabsCWidth';

// tabs
const TAB_NORMAL_BGCOLOR = 'tabNormalBgColor';
const TAB_HOVER_BGCOLOR = 'tabHoverBgColor';
const TAB_ACTIVE_BGCOLOR = 'tabActiveBgColor';
const TAB_ITEM_PADDING = 'tabItemPadding';
const TAB_ITEM_MARGIN = 'tabItemMargin';
const TAB_ITEM_RADIUS = 'tabItemBorderRadius';
const TAB_ITEM_BORDER = 'tabItemBorder';
const TAB_ITEM_BSHADOW = 'tabItemBShadow';
const TAB_ITEM_HBSHADOW = 'tabItemHBShadow';
const TAB_ITEM_ABSHADOW = 'tabItemABShadow';

// tab Wrap
const TAB_WRAP_BGCOLOR = 'tabWrapBgColor';
const TAB_WRAP_BORDER = 'tabWrapBorder';
const TAB_WRAP_RADIUS = 'tabWrapBorderRadius';
const TAB_WRAP_PADDING = 'tabWrapPadding';
const TAB_WRAP_BSHADOW = 'tabWrapBShadow';

// title
const TITLE_MARGIN = 'tabTitleMargin';
const ACTIVE_HINT_HEIGHT = 'activeHintHeight';

// desc
const DESC_MARGIN = 'tabDescMargin';
// icon
const ICON_SIZE = 'iconSize';
const ICON_BORDER = 'iconBorder';
const ICON_BORDER_RADIUS = 'iconBorderRadius';
const ICON_PADDING = 'iconPadding';
const ICON_MARGIN = 'iconMargin';
const ICON_BG = 'iconBg';
const ICON_HBG = 'iconHoverBg';
const ICON_ABG = 'iconActiveBg';

/***/ }),

/***/ "./src/blocks/tabs/constants/typoPrefixConstant.js":
/*!*********************************************************!*\
  !*** ./src/blocks/tabs/constants/typoPrefixConstant.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DESC_TYPOGRAPHY: () => (/* binding */ DESC_TYPOGRAPHY),
/* harmony export */   TITLE_TYPO: () => (/* binding */ TITLE_TYPO)
/* harmony export */ });
// Button Typography
const TITLE_TYPO = 'titleTypo';
const DESC_TYPOGRAPHY = 'descTypo';

/***/ }),

/***/ "./src/blocks/tabs/deprecated.js":
/*!***************************************!*\
  !*** ./src/blocks/tabs/deprecated.js ***!
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
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/tabs/attributes.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);



const {
  classArrayToStr,
  DisplayZoloIcon
} = window.zoloModule;


const deprecated = {
  attributes: {
    ..._attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
    tabActiveItemNo: {
      type: 'string',
      default: '1'
    }
  },
  save: ({
    attributes
  }) => {
    const {
      uniqueId,
      parentClasses,
      zoloId,
      tabTitles,
      tabsLayout,
      showIcon,
      showTitle,
      showDesc,
      tabIndicatorStyle,
      tabContentStyle,
      tabActiveItemNo,
      verticalLayoutDirection,
      contentDirection,
      tabItemWidth,
      verticalPreset
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(uniqueId, classArrayToStr(parentClasses))
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      ...blockProps,
      ...(zoloId && {
        id: zoloId
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('zolo-tabs zolo-indicator-position-bottom', `${tabsLayout === 'horizontal' ? `zolo-tab_${tabsLayout}` : `zolo-tab_${verticalLayoutDirection}`}`, `${tabContentStyle === 'content-style-2' ? `zolo-tab_${tabContentStyle}` : `zolo-tab_${contentDirection}`}`, `zolo-tab_${tabIndicatorStyle}`, `${verticalPreset === 'vpreset-2' ? verticalPreset : ''}`),
        role: "tablist",
        tabIndex: 0,
        "data-activeIndex": tabActiveItemNo - 1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: `tab__list zolo-tab_header-wrap ${tabItemWidth}`,
          children: tabTitles && tabTitles.map((tab, index) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: `tab__item zolo-tab_head-item ${tab.id === 1 ? 'active' : ''}`,
              tabIndex: tab.id,
              role: "tab",
              "aria-controls": `tab-content-${tab.id}`,
              "aria-selected": tab.id === 1 ? 'true' : 'false',
              children: [tab.hasMedia && showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "zolo-tab_icon-number-wrap",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "zolo-tab_icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DisplayZoloIcon, {
                    icon: tab.icon
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "zolo-tab_head-content",
                children: [showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                  tagName: "h2",
                  className: 'zolo-tab_title',
                  value: tab.title
                }), tab.hasDescription && showDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                  tagName: "p",
                  className: 'zolo-tab_desc',
                  value: tab.description
                })]
              })]
            }, index);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "tab__content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
        })]
      })
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/blocks/tabs/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/tabs/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/blocks/tabs/constants/index.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inspector */ "./src/blocks/tabs/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ "./src/blocks/tabs/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
/**
 * WordPress dependencies
 */







/**
 * External dependencies
 */


/**
 * Internal depencencies
 */
const {
  handleUniqueId,
  StarRating,
  classArrayToStr,
  DisplayZoloIcon,
  SidebarOpener
} = window.zoloModule;



// import style


/**
 * Edit Function
 */

const Edit = props => {
  const {
    attributes,
    setAttributes,
    className,
    clientId,
    isSelected
  } = props;
  const {
    preview,
    uniqueId,
    parentClasses,
    tabTitles,
    tabChildCount,
    tabsLayout,
    tabActiveItemNo,
    showTitle,
    showDesc,
    showIcon,
    tabIndicatorStyle,
    tabContentStyle,
    addNewTabStatus,
    verticalLayoutDirection,
    contentDirection,
    tabItemWidth,
    verticalPreset,
    horizontalTabItemWidth
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, `${uniqueId}`, classArrayToStr(parentClasses))
  });

  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.applyFilters)('zolo.blocks.render.hook.after', [], props);

  // preview image
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
      src: zoloParams.blocksPreview.tabs,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tabs Preview', 'zoloblocks')
    });
  }

  // handle tab click
  const tabWrapRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [activeTabId, setActiveTabId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const activeDefaultTabId = (tabTitles.find(item => item.isDefault) || {
    id: tabActiveItemNo
  }).id;

  // update tabTitles
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // update all tabTitles hasMedia based on showIcon
    const newTabTitles = tabTitles.map(tab => {
      return {
        ...tab,
        hasTitle: showTitle,
        hasMedia: showIcon,
        hasDescription: showDesc
      };
    });
    setAttributes({
      tabTitles: newTabTitles
    });
  }, [showIcon, showTitle, showDesc, addNewTabStatus]);
  const {
    innerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core/block-editor').getBlocksByClientId(clientId)[0]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const {
      updateBlockAttributes
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/block-editor');
    (0,lodash__WEBPACK_IMPORTED_MODULE_4__.times)(innerBlocks.length, n => {
      updateBlockAttributes(innerBlocks[n].clientId, {
        tabParentId: `${uniqueId}`
      });
    });
  }, [uniqueId, innerBlocks]);

  // Handle Tab Click
  const handleTabClick = id => {
    const tabsParentEl = (tabWrapRef || {
      current: false
    }).current;
    if (!tabsParentEl) return false;
    const allTabChildWraps = tabsParentEl.querySelectorAll(`.tab__content-item`);
    if (allTabChildWraps.length === 0) return false;
    for (const tabWrapDiv of allTabChildWraps) {
      const tabId = tabWrapDiv.dataset.tabId;
      if (tabId === id) {
        tabWrapDiv.style.display = 'block';
        tabWrapDiv.style.animation = 'fadeIn 0.3s';
      } else {
        tabWrapDiv.style.display = 'none';
      }
    }
    setActiveTabId(`${id}`);
  };
  const headerTabsContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
    className: `tab__list zolo-tab_header-wrap ${tabItemWidth}`,
    children: tabTitles && tabTitles.map((tab, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: `tab__item zolo-tab_head-item ${(activeTabId || activeDefaultTabId) === tab.id ? 'active' : ''}`,
      tabIndex: tab.id,
      role: "tab",
      "aria-controls": `tab-content-${tab.id}`,
      "aria-selected": (activeTabId || activeDefaultTabId) === tab.id ? 'true' : 'false',
      onClick: () => handleTabClick(tab.id),
      children: [tab.hasMedia && showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "zolo-tab_icon-number-wrap",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
          className: "zolo-tab_icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DisplayZoloIcon, {
            icon: tab.icon
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "zolo-tab_head-content",
        children: [showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
          tagName: "h2",
          className: 'zolo-tab_title',
          value: tab.title,
          onChange: v => {
            const newTabTitles = [...tabTitles];
            newTabTitles[index].title = v;
            setAttributes({
              tabTitles: newTabTitles
            });
          },
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab Title', 'zoloblocks')
        }), tab.hasDescription && showDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
          tagName: "p",
          className: 'zolo-tab_desc',
          value: tab.description,
          onChange: v => {
            const newTabTitles = [...tabTitles];
            newTabTitles[index].description = v;
            setAttributes({
              tabTitles: newTabTitles
            });
          },
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab Description', 'zoloblocks')
        })]
      })]
    }, index))
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_8__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      handleTabClick: handleTabClick,
      clientId: clientId,
      activeTabId: activeTabId,
      setActiveTabId: setActiveTabId
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("style", {
      children: `
                   .wp-block-zolo-tabs .block-list-appender.wp-block button {
                    border: 1px solid #ccc !important;
                    padding: 35px 0 !important;
                    border-radius: 6px;
                }
                `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      ...blockProps,
      children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(SidebarOpener, {
        clientId: clientId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('zolo-tabs zolo-indicator-position-bottom', tabsLayout === 'horizontal' ? `zolo-tab_${tabsLayout} ${horizontalTabItemWidth}` : `zolo-tab_${verticalLayoutDirection}`, tabContentStyle === 'content-style-2' ? `zolo-tab_${tabContentStyle}` : `zolo-tab_${contentDirection}`, `zolo-tab_${tabIndicatorStyle}`, verticalPreset === 'vpreset-2' ? verticalPreset : ''),
        role: "tablist",
        tabIndex: 0,
        ref: tabWrapRef,
        children: [horizontalTabItemWidth && tabsLayout !== 'vertical' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "zolo-horizontal-head-tabswrap",
          children: headerTabsContent
        }) : headerTabsContent, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "tab__content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
            templateLock: "all",
            template: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.times)(tabChildCount, n => ['zolo/tab', {
              tabId: `${n + 1}`,
              tabParentId: uniqueId
            }]),
            allowedBlocks: ['zolo/tab']
          })
        })]
      }), renderHookAfter && renderHookAfter]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/tabs/index.js":
/*!**********************************!*\
  !*** ./src/blocks/tabs/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/tabs/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/tabs/block.json");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/tabs/deprecated.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/tabs/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/tabs/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/tabs/style.scss");







const {
  BlockIcons
} = window.zoloIcons;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: BlockIcons['tabs']
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"],
  deprecated: [_deprecated__WEBPACK_IMPORTED_MODULE_3__["default"]]
});

/***/ }),

/***/ "./src/blocks/tabs/inspector.js":
/*!**************************************!*\
  !*** ./src/blocks/tabs/inspector.js ***!
  \**************************************/
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
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./src/blocks/tabs/attributes.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/tabs/constants/typoPrefixConstant.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/blocks/tabs/constants/index.js");
/* harmony import */ var _src_global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/global/constants */ "./src/global/constants.js");
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sortable */ "./src/blocks/tabs/sortable.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/**
 * WordPress dependencies
 */





/**
 * Internal depencencies
 */
const {
  ResAlignmentControl,
  ResRangeControl,
  ColorControl,
  NormalBGControl,
  TypographyDropdown,
  HeaderTabs,
  TabPanelControl,
  IconicBtnGroup,
  AdvancedOptions,
  ZoloPanelBody,
  ResDimensionsControl,
  BorderControl,
  BoxShadowControl
} = window.zoloModule;






function Inspector(props) {
  const {
    attributes,
    setAttributes,
    handleTabClick,
    clientId,
    activeTabId,
    setActiveTabId
  } = props;
  const {
    resMode,
    tabTitleColors,
    activeHintTabColor,
    descColors,
    iconColors,
    tabTitles,
    tabChildCount,
    uniqueId,
    tabsLayout,
    verticalPreset,
    tabItemWidth,
    tabIndicatorStyle,
    tabActiveItemNo,
    showTitle,
    showDesc,
    showIcon,
    showIndicator,
    tabContentStyle,
    addNewTabStatus,
    verticalLayoutDirection,
    contentDirection,
    itemBorderColors,
    horizontalTabItemWidth
  } = attributes;
  const requiredProps = {
    attributes,
    setAttributes,
    resMode,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"]
  };
  const onChangeVerticalPreset = v => {
    setAttributes({
      verticalPreset: v
    });
    switch (v) {
      case 'vpreset-2':
        setAttributes({
          showDesc: true
        });
        break;
      default:
        setAttributes({
          showDesc: false
        });
        break;
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HeaderTabs, {
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'zoloblocks'),
          firstOpen: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Initial open item', 'zoloblocks'),
            value: tabActiveItemNo,
            onChange: nextValue => setAttributes({
              tabActiveItemNo: nextValue
            }),
            type: "number",
            min: 1,
            max: tabChildCount || 99,
            labelPosition: "edge",
            __unstableInputWidth: "64px",
            placeholder: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "zolo-flex-row-control-tab",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(IconicBtnGroup, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout', 'zoloblocks'),
              value: tabsLayout,
              onChange: newTabsLayout => setAttributes({
                tabsLayout: newTabsLayout
              }),
              options: _constants__WEBPACK_IMPORTED_MODULE_6__.LAYOUTS
            })
          }), tabsLayout === 'vertical' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Verticle Style', 'zoloblocks'),
            value: verticalPreset,
            options: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zoloblocks.tabs.verticalPreset', _constants__WEBPACK_IMPORTED_MODULE_6__.VERTICAL_PRESETS) || [],
            onChange: v => onChangeVerticalPreset(v)
          }), showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Style', 'zoloblocks'),
            value: tabContentStyle,
            options: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_STYLES,
            onChange: newTabContentStyle => setAttributes({
              tabContentStyle: newTabContentStyle
            })
          }), tabContentStyle === 'content-style-two' && showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "zolo-flex-row-control-tab",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(IconicBtnGroup, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Direction', 'zoloblocks'),
              value: contentDirection,
              options: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_DIRECTIONS,
              onChange: v => setAttributes({
                contentDirection: v
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show/hide elements')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks'),
            checked: showIcon,
            onChange: newShowIcon => setAttributes({
              showIcon: newShowIcon
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks'),
            checked: showTitle,
            onChange: newShowTitle => setAttributes({
              showTitle: newShowTitle
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'zoloblocks'),
            checked: showDesc,
            onChange: newShowDesc => setAttributes({
              showDesc: newShowDesc
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Active Indicator', 'zoloblocks'),
            checked: showIndicator,
            onChange: newIndicator => setAttributes({
              showIndicator: newIndicator
            })
          }), showIndicator && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indicator Style', 'zoloblocks'),
            value: tabIndicatorStyle,
            options: _constants__WEBPACK_IMPORTED_MODULE_6__.INDICATOR_STYLES,
            onChange: newIndicatorStyle => setAttributes({
              tabIndicatorStyle: newIndicatorStyle
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alignment', 'zoloblocks'),
          panelProps: props,
          children: [tabsLayout === 'horizontal' && tabItemWidth !== 'tiw_justify' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResAlignmentControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab Alignment', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.NAV_ITEMS_ALIGN,
            requiredProps: requiredProps,
            alignOptions: _src_global_constants__WEBPACK_IMPORTED_MODULE_7__.FLEX_HORIZONTAL_OPTIONS
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResAlignmentControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab Content Alignment', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.NAV_CONTENT_ALIGN,
            requiredProps: requiredProps,
            alignOptions: _src_global_constants__WEBPACK_IMPORTED_MODULE_7__.TEXT_ALIGN_OPTIONS
          }), showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResAlignmentControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Alignment', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.NAV_ICON_ALIGN,
            requiredProps: requiredProps,
            alignOptions: _src_global_constants__WEBPACK_IMPORTED_MODULE_7__.FLEX_ALIGN_OPTIONS
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spacing', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Nav Spacing', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.NAV_SPACING,
            requiredProps: requiredProps,
            min: 0,
            max: 100,
            step: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab-Content Spacing', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_SPACING,
            requiredProps: requiredProps,
            min: 0,
            max: 100,
            step: 1
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tabs', 'zoloblocks'),
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_sortable__WEBPACK_IMPORTED_MODULE_8__["default"], {
            tabTitles: tabTitles,
            setAttributes: setAttributes,
            clientId: clientId,
            uniqueId: uniqueId,
            tabChildCount: tabChildCount,
            handleTabClick: handleTabClick,
            activeTabId: activeTabId,
            setActiveTabId: setActiveTabId,
            addNewTabStatus: addNewTabStatus
          })
        })]
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [tabsLayout === 'vertical' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tabs Container', 'zoloblocks'),
          firstOpen: true,
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Width', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TABS_CWIDTH,
            requiredProps: requiredProps,
            min: 1,
            max: 500,
            step: 1
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tabs Wrap', 'zoloblocks'),
          firstOpen: tabsLayout === 'vertical' ? false : true,
          stylePanel: true,
          panelProps: props,
          children: [tabsLayout === 'horizontal' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "zolo-flex-row-control-tab",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(IconicBtnGroup, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Width', 'zoloblocks'),
                value: horizontalTabItemWidth,
                onChange: value => setAttributes({
                  horizontalTabItemWidth: value
                }),
                options: [{
                  label: 'Full',
                  value: ''
                }, {
                  label: 'Auto',
                  value: 'zolo-h-tab-auto'
                }]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {})]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_WRAP_BGCOLOR,
            noMainBGImg: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_WRAP_PADDING,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_WRAP_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BoxShadowControl, {
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_WRAP_BSHADOW,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_WRAP_RADIUS,
            requiredProps: requiredProps
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab Item', 'zoloblocks'),
          firstOpen: false,
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TabPanelControl, {
              options: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_STATES,
              normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [tabsLayout !== 'vertical' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                    className: "zolo-flex-row-control-tab",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(IconicBtnGroup, {
                      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Width', 'zoloblocks'),
                      value: tabItemWidth,
                      options: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_ITEM_WIDTHS,
                      onChange: newTabItemWidth => setAttributes({
                        tabItemWidth: newTabItemWidth
                      })
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                  requiredProps: requiredProps,
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_NORMAL_BGCOLOR,
                  noMainBGImg: false
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_ITEM_PADDING,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BorderControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_ITEM_BORDER,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BoxShadowControl, {
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_ITEM_BSHADOW,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_ITEM_RADIUS,
                  requiredProps: requiredProps
                })]
              }),
              hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                  requiredProps: requiredProps,
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_HOVER_BGCOLOR,
                  noMainBGImg: false
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'zoloblocks'),
                  color: itemBorderColors?.hover,
                  onChange: color => {
                    setAttributes({
                      itemBorderColors: {
                        ...itemBorderColors,
                        hover: color
                      }
                    });
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BoxShadowControl, {
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_ITEM_HBSHADOW,
                  requiredProps: requiredProps
                })]
              }),
              activeComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                  requiredProps: requiredProps,
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_ACTIVE_BGCOLOR,
                  noMainBGImg: false
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'zoloblocks'),
                  color: itemBorderColors?.active,
                  onChange: color => {
                    setAttributes({
                      itemBorderColors: {
                        ...itemBorderColors,
                        active: color
                      }
                    });
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BoxShadowControl, {
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_ITEM_ABSHADOW,
                  requiredProps: requiredProps
                })]
              })
            })
          })
        }), showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zolo-block'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TabPanelControl, {
              options: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_STATES,
              normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: iconColors?.normal,
                  onChange: color => setAttributes({
                    iconColors: {
                      ...iconColors,
                      normal: color
                    }
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICON_SIZE,
                  requiredProps: requiredProps,
                  min: 1,
                  max: 100,
                  step: 1
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                  requiredProps: requiredProps,
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICON_BG,
                  noMainBGImg: true
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICON_PADDING,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICON_MARGIN,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BorderControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICON_BORDER,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICON_BORDER_RADIUS,
                  requiredProps: requiredProps
                })]
              }),
              hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: iconColors?.hover,
                  onChange: color => setAttributes({
                    iconColors: {
                      ...iconColors,
                      hover: color
                    }
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                  requiredProps: requiredProps,
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICON_HBG,
                  noMainBGImg: true
                })]
              }),
              activeComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: iconColors?.active,
                  onChange: color => setAttributes({
                    iconColors: {
                      ...iconColors,
                      active: color
                    }
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NormalBGControl, {
                  requiredProps: requiredProps,
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICON_ABG,
                  noMainBGImg: true
                })]
              })
            })
          })
        }), showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TabPanelControl, {
            options: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_STATES,
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: tabTitleColors?.normal,
                onChange: v => {
                  setAttributes({
                    tabTitleColors: {
                      ...tabTitleColors,
                      normal: v
                    }
                  });
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.TITLE_TYPO,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TITLE_MARGIN,
                requiredProps: requiredProps
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: tabTitleColors?.hover,
                onChange: v => setAttributes({
                  tabTitleColors: {
                    ...tabTitleColors,
                    hover: v
                  }
                })
              })
            }),
            activeComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: tabTitleColors?.active,
                onChange: v => setAttributes({
                  tabTitleColors: {
                    ...tabTitleColors,
                    active: v
                  }
                })
              })
            })
          })
        }), showDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TabPanelControl, {
            options: _constants__WEBPACK_IMPORTED_MODULE_6__.TAB_STATES,
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: descColors?.normal,
                onChange: color => setAttributes({
                  descColors: {
                    ...descColors,
                    normal: color
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.DESC_TYPOGRAPHY,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.DESC_MARGIN,
                requiredProps: requiredProps
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: descColors?.hover,
                onChange: color => setAttributes({
                  descColors: {
                    ...descColors,
                    hover: color
                  }
                })
              })
            }),
            activeComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: descColors?.active,
                onChange: color => setAttributes({
                  descColors: {
                    ...descColors,
                    active: color
                  }
                })
              })
            })
          })
        }), showIndicator && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Active Indicator', 'zolo-block'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ColorControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
              color: activeHintTabColor,
              onChange: newHintTabColor => {
                setAttributes({
                  activeHintTabColor: newHintTabColor
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ResRangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Active height', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE_HINT_HEIGHT,
              requiredProps: requiredProps,
              min: 1,
              max: 100,
              step: 1
            })]
          })
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps
        })
      })
    })
  }, "controls");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/tabs/save.js":
/*!*********************************!*\
  !*** ./src/blocks/tabs/save.js ***!
  \*********************************/
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
    uniqueId,
    parentClasses,
    zoloId,
    tabTitles,
    tabsLayout,
    showIcon,
    showTitle,
    showDesc,
    tabIndicatorStyle,
    tabContentStyle,
    tabActiveItemNo,
    verticalLayoutDirection,
    contentDirection,
    tabItemWidth,
    verticalPreset,
    horizontalTabItemWidth
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(uniqueId, classArrayToStr(parentClasses))
  });

  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('zolo.blocks.render.hook.after', [], props);
  const headerTabsContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: `tab__list zolo-tab_header-wrap ${tabItemWidth}`,
    children: tabTitles && tabTitles.map((tab, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: `tab__item zolo-tab_head-item ${tab.id === 1 ? 'active' : ''}`,
        tabIndex: tab.id,
        role: "tab",
        "aria-controls": `tab-content-${tab.id}`,
        "aria-selected": tab.id === 1 ? 'true' : 'false',
        children: [tab.hasMedia && showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "zolo-tab_icon-number-wrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "zolo-tab_icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DisplayZoloIcon, {
              icon: tab.icon
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "zolo-tab_head-content",
          children: [showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
            tagName: "h2",
            className: 'zolo-tab_title',
            value: tab.title
          }), tab.hasDescription && showDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
            tagName: "p",
            className: 'zolo-tab_desc',
            value: tab.description
          })]
        })]
      }, index);
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    ...blockProps,
    ...(zoloId && {
      id: zoloId
    }),
    children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('zolo-tabs zolo-indicator-position-bottom', tabsLayout === 'horizontal' ? `zolo-tab_${tabsLayout} ${horizontalTabItemWidth}` : `zolo-tab_${verticalLayoutDirection}`, tabContentStyle === 'content-style-2' ? `zolo-tab_${tabContentStyle}` : `zolo-tab_${contentDirection}`, `zolo-tab_${tabIndicatorStyle}`, verticalPreset === 'vpreset-2' ? verticalPreset : ''),
      role: "tablist",
      tabIndex: 0,
      ...(tabActiveItemNo && {
        'data-activeIndex': tabActiveItemNo - 1
      }),
      children: [horizontalTabItemWidth && tabsLayout !== 'vertical' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "zolo-horizontal-head-tabswrap",
        children: headerTabsContent
      }) : headerTabsContent, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "tab__content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
      })]
    }), renderHookAfter && renderHookAfter]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/tabs/sortable.js":
/*!*************************************!*\
  !*** ./src/blocks/tabs/sortable.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Internal depencencies
 */
const {
  ZoloIconPicker,
  SortableControl,
  SortableItem,
  LinkControl
} = window.zoloModule;

/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
const {
  Button,
  PanelBody,
  TextControl,
  ToggleControl,
  TextareaControl
} = wp.components;
const {
  select,
  dispatch
} = wp.data;
const {
  createBlock
} = wp.blocks;


const Sortable = ({
  tabTitles,
  setAttributes,
  clientId,
  uniqueId,
  tabChildCount,
  handleTabClick,
  activeTabId,
  setActiveTabId,
  addNewTabStatus
}) => {
  const deepCloneTitles = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(tabTitles);

  // add new tab
  const addNewTab = () => {
    const innerBlocks = [...select('core/block-editor').getBlocks(clientId)];
    const maxId = tabTitles.reduce((acc, curr) => Math.max(parseInt(acc), parseInt(curr.id)), 0);
    const tabId = `${maxId + 1}`;
    const newBlock = createBlock('zolo/tab', {
      tabId,
      tabParentId: `${uniqueId}`
    });
    innerBlocks.splice(innerBlocks.length, 0, newBlock);
    dispatch('core/block-editor').replaceInnerBlocks(clientId, innerBlocks).then(() => {
      setAttributes({
        tabTitles: [...tabTitles, {
          id: tabId,
          title: `Tab ${parseInt(innerBlocks.length)}`,
          hasDescription: false,
          description: `Description ${parseInt(innerBlocks.length)}`,
          hasMedia: false,
          hasNumber: false,
          isDefault: false,
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>'
        }],
        tabChildCount: tabChildCount + 1
      });
      handleTabClick(tabId);
      setAttributes({
        addNewTabStatus: !addNewTabStatus
      });
    });

    //
  };

  // Remove Tab Item
  const removeTabItem = index => {
    const innerBlocks = select('core/block-editor').getBlocks(clientId);
    if (innerBlocks.length > 1) {
      innerBlocks.splice(index, 1);
      const newTabTitles = [...tabTitles];
      newTabTitles.splice(index, 1);
      dispatch('core/block-editor').replaceInnerBlocks(clientId, innerBlocks).then(() => {
        setAttributes({
          tabTitles: newTabTitles,
          tabChildCount: tabChildCount - 1
        });
        setAttributes({
          addNewTabStatus: !addNewTabStatus
        });
      });
    }
    if (activeTabId === tabTitles[index].id) {
      setActiveTabId(tabTitles[index - 1].id);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "sortable",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "zb-repeater-flex",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "repeater-label",
        children: __('Add a Tab', 'zoloblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button, {
        onClick: addNewTab,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M12 8V16",
            stroke: "#4D4D4D",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M16 12H8",
            stroke: "#4D4D4D",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SortableControl, {
      defaultItems: tabTitles,
      attributeName: "socialProfiles",
      setAttributes: setAttributes,
      children: deepCloneTitles && deepCloneTitles.map((tab, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dnd-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button, {
            className: "dnd-trash",
            icon: "trash",
            onClick: () => {
              removeTabItem(index);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SortableItem, {
            id: tab.id,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(PanelBody, {
              title: tab.title || 'Title',
              initialOpen: false,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextControl, {
                label: __('Title', 'zoloblocks'),
                value: tab.title,
                onChange: v => {
                  const newItems = [...deepCloneTitles];
                  newItems[index].title = v;
                  setAttributes({
                    tabTitles: newItems
                  });
                },
                help: __('title is also used as panel title, so use it but you can hide it from content.', 'zoloblocks')
              }), tab.hasDescription && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextareaControl, {
                className: "zolo-flex-col-control",
                label: __('Description', 'zoloblocks'),
                value: tab.description,
                onChange: v => {
                  const newItems = [...deepCloneTitles];
                  newItems[index].description = v;
                  setAttributes({
                    tabTitles: newItems
                  });
                }
              }), tab.hasMedia && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ZoloIconPicker, {
                label: __('Select Icon', 'zoloblocks'),
                value: tab.icon,
                onChange: value => {
                  const newItems = [...deepCloneTitles];
                  newItems[index].icon = value;
                  setAttributes({
                    tabTitles: newItems
                  });
                }
              })]
            })
          }, tab.id)]
        }, index);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);

/***/ }),

/***/ "./src/blocks/tabs/style.js":
/*!**********************************!*\
  !*** ./src/blocks/tabs/style.js ***!
  \**********************************/
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/blocks/tabs/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/tabs/constants/typoPrefixConstant.js");
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
  generateTypographyStyles,
  generateResRangeStyle,
  GlobalStyleHanlder,
  generateNormalBGControlStyles,
  generateDimensionStyle,
  generateBorderStyle,
  generateBoxShadowStyles
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
    tabTitleColors,
    descColors,
    activeHintTabColor,
    iconColors,
    showIndicator,
    itemBorderColors
  } = attributes;

  // tabs container
  const {
    desktopRangeStyle: deskTabsWidth,
    tabRangeStyle: tabTabsWidth,
    mobRangeStyle: mobTabsWidth
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TABS_CWIDTH,
    property: '--tab-vertical-width',
    attributes
  });

  // item
  const {
    desktopBorderStyle: itemBorderStylesDesk,
    tabBorderStyle: itemBorderStylesTab,
    mobBorderStyle: itemBorderStylesMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TAB_ITEM_BORDER,
    attributes
  });
  const {
    boxShadowStyle: itemBoxShadow
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TAB_ITEM_BSHADOW,
    attributes
  });
  const {
    boxShadowStyle: itemHBoxShadow
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TAB_ITEM_HBSHADOW,
    attributes
  });
  const {
    boxShadowStyle: itemABoxShadow
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TAB_ITEM_ABSHADOW,
    attributes
  });

  // styles
  const {
    desktopAlignStyle: itemsVDeskAlign,
    tabAlignStyle: itemsVTabAlign,
    mobAlignStyle: itemsVMobAlign
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.NAV_ITEMS_ALIGN,
    property: 'justify-content',
    attributes
  });
  const {
    desktopAlignStyle: contentDeskAlign,
    tabAlignStyle: contentTabAlign,
    mobAlignStyle: contentMobAlign
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.NAV_CONTENT_ALIGN,
    property: 'text-align',
    attributes
  });
  const {
    desktopAlignStyle: iconDeskAlign,
    tabAlignStyle: iconTabAlign,
    mobAlignStyle: iconMobAlign
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.NAV_ICON_ALIGN,
    property: 'align-items',
    attributes
  });
  const {
    desktopRangeStyle: deskNavSpacing,
    tabRangeStyle: tabNavSpacing,
    mobRangeStyle: mobNavSpacing
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.NAV_SPACING,
    property: 'gap',
    attributes
  });
  const {
    desktopRangeStyle: deskContentSpacing,
    tabRangeStyle: tabContentSpacing,
    mobRangeStyle: mobContentSpacing
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_SPACING,
    property: 'margin-bottom',
    attributes
  });
  const {
    desktopRangeStyle: deskVarticalContentSpacing,
    tabRangeStyle: tabVarticalContentSpacing,
    mobRangeStyle: mobVarticalContentSpacing
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_SPACING,
    property: '--zolo-tab-wrap-gap',
    attributes
  });
  const {
    desktopRangeStyle: activeHintHeightDesktop,
    tabRangeStyle: activeHintHeightTab,
    mobRangeStyle: activeHintHeightMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ACTIVE_HINT_HEIGHT,
    property: '--zolo-tab-animation-height',
    attributes
  });

  /**
   * Background Color
   */
  const {
    backgroundStylesDesktop: tabNormalBgColorDesktop,
    backgroundStylesTab: tabNormalBgColorTab,
    backgroundStylesMobile: tabNormalBgColorMobile
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TAB_NORMAL_BGCOLOR,
    attributes,
    noMainBGImg: false
  });
  const {
    backgroundStylesDesktop: iconBgDesktop,
    backgroundStylesTab: iconBgTab,
    backgroundStylesMobile: iconBgMobile
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICON_BG,
    attributes,
    noMainBGImg: true
  });
  const {
    backgroundStylesDesktop: iconHBgDesktop,
    backgroundStylesTab: iconHBgTab,
    backgroundStylesMobile: iconHBgMobile
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICON_HBG,
    attributes,
    noMainBGImg: true
  });
  const {
    backgroundStylesDesktop: iconABgDesktop,
    backgroundStylesTab: iconABgTab,
    backgroundStylesMobile: iconABgMobile
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICON_ABG,
    attributes,
    noMainBGImg: true
  });
  const {
    backgroundStylesDesktop: tabHoverBgColorDesktop,
    backgroundStylesTab: tabHoverBgColorTab,
    backgroundStylesMobile: tabHoverBgColorMobile
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TAB_HOVER_BGCOLOR,
    attributes,
    noMainBGImg: false
  });
  const {
    backgroundStylesDesktop: tabActiveBgColorDesktop,
    backgroundStylesTab: tabActiveBgColorTab,
    backgroundStylesMobile: tabActiveBgColorMobile
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TAB_ACTIVE_BGCOLOR,
    attributes,
    noMainBGImg: false
  });
  const {
    dimensionStylesDesktop: tabItemPaddingDesktop,
    dimensionStylesTab: tabItemPaddingTab,
    dimensionStylesMobile: tabItemPaddingMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TAB_ITEM_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: tabItemBorderRadiusDesktop,
    dimensionStylesTab: tabItemBorderRadiusTab,
    dimensionStylesMobile: tabItemBorderRadiusMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TAB_ITEM_RADIUS,
    styleFor: 'border-radius',
    attributes
  });

  // tab wrap
  const {
    backgroundStylesDesktop: tabWrapBgColorDesktop,
    backgroundStylesTab: tabWrapBgColorTab,
    backgroundStylesMobile: tabWrapBgColorMobile
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TAB_WRAP_BGCOLOR,
    attributes,
    noMainBGImg: false
  });
  const {
    desktopBorderStyle: wrapBorderStylesDesk,
    tabBorderStyle: wrapBorderStylesTab,
    mobBorderStyle: wrapBorderStylesMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TAB_WRAP_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: tabWrapBorderRadiusDesktop,
    dimensionStylesTab: tabWrapBorderRadiusTab,
    dimensionStylesMobile: tabWrapBorderRadiusMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TAB_WRAP_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: tabWrapPaddingDesktop,
    dimensionStylesTab: tabWrapPaddingTab,
    dimensionStylesMobile: tabWrapPaddingMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TAB_WRAP_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    boxShadowStyle: tabsWrapBoxShadow
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TAB_WRAP_BSHADOW,
    attributes
  });

  // title
  const {
    dimensionStylesDesktop: titleBottomSpacingDesktop,
    dimensionStylesTab: titleBottomSpacingTab,
    dimensionStylesMobile: titleBottomSpacingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TITLE_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: descBottomSpacingDesktop,
    dimensionStylesTab: descBottomSpacingTab,
    dimensionStylesMobile: descBottomSpacingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.DESC_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    typoStylesDesktop: tabTitleTypoDesk,
    typoStylesTab: tabTitleTypoTab,
    typoStylesMobile: tabTitleTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_3__.TITLE_TYPO,
    attributes
  });
  // desc
  const {
    typoStylesDesktop: tabDescTypoDesk,
    typoStylesTab: tabDescTypoTab,
    typoStylesMobile: tabDescTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_3__.DESC_TYPOGRAPHY,
    attributes
  });

  // ICONS

  const {
    dimensionStylesDesktop: iconPaddingDesktop,
    dimensionStylesTab: iconPaddingTab,
    dimensionStylesMobile: iconPaddingMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICON_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: iconMarginDesktop,
    dimensionStylesTab: iconMarginTab,
    dimensionStylesMobile: iconMarginMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICON_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    desktopBorderStyle: iconBorderStylesDesk,
    tabBorderStyle: iconBorderStylesTab,
    mobBorderStyle: iconBorderStylesMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICON_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: iconrRadiusDesktop,
    dimensionStylesTab: iconrRadiusTab,
    dimensionStylesMobile: iconrRadiusMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICON_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    desktopRangeStyle: iconHeightWidthDesktop,
    tabRangeStyle: iconHeightWidthTab,
    mobRangeStyle: iconHeightWidthMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICON_SIZE,
    property: '--zolo-tab-icon-size',
    attributes
  });
  /**
   * All Style Combination
   */
  const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-tabs {
            ${deskVarticalContentSpacing}
        }

        .${uniqueId} .zolo-tabs.zolo-tab_horizontal .zolo-horizontal-head-tabswrap,
        .${uniqueId} .zolo-tabs.zolo-tab_horizontal .zolo-tab_header-wrap {
            ${itemsVDeskAlign}
        }

        .${uniqueId} .zolo-tabs .zolo-tab_header-wrap {
            ${deskNavSpacing}
            ${deskContentSpacing}
            ${wrapBorderStylesDesk}
            ${tabWrapBgColorDesktop}
            ${tabWrapBorderRadiusDesktop}
            ${tabWrapPaddingDesktop}
            ${tabsWrapBoxShadow}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item {
            ${tabNormalBgColorDesktop}
            ${tabItemPaddingDesktop}
            ${tabItemBorderRadiusDesktop}
            ${activeHintHeightDesktop}
            ${contentDeskAlign}
            ${itemBorderStylesDesk}
            ${itemBoxShadow}
            ${iconDeskAlign}
        }

        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_horizontal .zolo-tab_head-item {
            ${tabItemPaddingDesktop}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item:hover {
            ${tabHoverBgColorDesktop}
            ${itemBorderColors.hover ? `border-color: ${itemBorderColors.hover};` : ''}
            ${itemHBoxShadow}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item.active {
            ${tabActiveBgColorDesktop}
            ${itemBorderColors.active ? `border-color: ${itemBorderColors.active};` : ''}
            ${itemABoxShadow}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_title {
            ${titleBottomSpacingDesktop}
            ${tabTitleTypoDesk}
            --zolo-tab-title-color: ${tabTitleColors?.normal};
        }

        .${uniqueId} .tab__item.zolo-tab_head-item.active .zolo-tab_title {
            --zolo-tab-title-color: ${tabTitleColors?.active};
        }

        .${uniqueId} .tab__item.zolo-tab_head-item:hover .zolo-tab_title {
            --zolo-tab-title-color: ${tabTitleColors?.hover};
        }

        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_desc {
            --zolo-tab-desc-color: ${descColors?.normal};
            ${tabDescTypoDesk}
            ${descBottomSpacingDesktop}

        }

        .${uniqueId} .tab__item.zolo-tab_head-item:hover .zolo-tab_desc {
            --zolo-tab-desc-color: ${descColors?.hover};
        }

        .${uniqueId} .tab__item.zolo-tab_head-item.active .zolo-tab_desc {
            --zolo-tab-desc-color: ${descColors?.active};
        }

        .${uniqueId} .tab__item.zolo-tab_head-item:before {
            ${showIndicator ? `content: '';` : ''}
            background-color: ${activeHintTabColor};
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item .zolo-tab_icon {
            ${iconBgDesktop}
            ${iconPaddingDesktop}
            ${iconMarginDesktop}
            ${iconrRadiusDesktop}
            ${iconBorderStylesDesk}
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item:hover .zolo-tab_icon {
            ${iconHBgDesktop}
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item.active .zolo-tab_icon {
            ${iconABgDesktop}
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item .zolo-tab_icon svg {
            ${iconColors ? `fill: ${iconColors?.normal};` : ''}
            ${iconHeightWidthDesktop}
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item:hover .zolo-tab_icon svg {
            ${iconColors ? `fill: ${iconColors?.hover};` : ''}
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item.active .zolo-tab_icon svg {
            ${iconColors ? `fill: ${iconColors?.active};` : ''}
        }

        .${uniqueId}{
            ${deskTabsWidth}
        }
    `;
  const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-tabs{
            ${tabVarticalContentSpacing}
        }

        .${uniqueId} .zolo-tabs.zolo-tab_horizontal .zolo-horizontal-head-tabswrap,
        .${uniqueId} .zolo-tabs.zolo-tab_horizontal .zolo-tab_header-wrap {
            ${itemsVTabAlign}
        }

        .${uniqueId} .zolo-tabs .zolo-tab_header-wrap{
            ${tabNavSpacing}
            ${tabContentSpacing}
            ${wrapBorderStylesTab}
            ${tabWrapBgColorTab}
            ${tabWrapBorderRadiusTab}
            ${tabWrapPaddingTab}
            ${tabsWrapBoxShadow}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item {
            ${tabNormalBgColorTab}
            ${tabItemPaddingTab}
            ${tabItemBorderRadiusTab}
            ${activeHintHeightTab}
            ${contentTabAlign}
            ${itemBorderStylesTab}
            ${iconTabAlign}
        }
        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_horizontal .zolo-tab_head-item {
            ${tabItemPaddingTab}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item:hover {
            ${tabHoverBgColorTab}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item.active {
            ${tabActiveBgColorTab}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_title {
            ${titleBottomSpacingTab}
            ${tabTitleTypoTab}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_desc {
            ${descBottomSpacingTab}
            ${tabDescTypoTab}
        }

        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_icon {
            ${iconPaddingTab}
            ${iconMarginTab}
            ${iconrRadiusTab}
            ${iconBorderStylesTab}
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item .zolo-tab_icon svg  {
            ${iconHeightWidthTab}
        }

        .${uniqueId}{
            ${tabTabsWidth}
        }
    `;
  const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-tabs{
            ${tabVarticalContentSpacing}
        }

        .${uniqueId} .zolo-tabs.zolo-tab_horizontal .zolo-horizontal-head-tabswrap,
        .${uniqueId} .zolo-tabs.zolo-tab_horizontal .zolo-tab_header-wrap {
            ${itemsVMobAlign}
        }

        .${uniqueId} .zolo-tabs .zolo-tab_header-wrap{
            ${mobNavSpacing}
            ${mobContentSpacing}
            ${wrapBorderStylesMob}
            ${tabWrapBgColorMobile}
            ${tabWrapBorderRadiusMobile}
            ${tabWrapPaddingMobile}
            ${tabsWrapBoxShadow}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item {
            ${tabNormalBgColorMobile}
            ${tabItemPaddingMobile}
            ${tabItemBorderRadiusMobile}
            ${activeHintHeightMob}
            ${contentMobAlign}
            ${itemBorderStylesMob}
            ${iconMobAlign}
        }

        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_horizontal .zolo-tab_head-item {
            ${tabItemPaddingMobile}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item:hover {
            ${tabHoverBgColorMobile}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item.active {
            ${tabActiveBgColorMobile}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_title {
            ${titleBottomSpacingMob}
            ${tabTitleTypoMob}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_desc {
            ${descBottomSpacingMob}
            ${tabDescTypoMob}
        }

        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_icon {
            ${iconPaddingMobile}
            ${iconMarginMobile}
            ${iconrRadiusMobile}
            ${iconBorderStylesMob}
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item .zolo-tab_icon svg  {
            ${iconHeightWidthMob}
        }

        .${uniqueId} {
            ${mobTabsWidth}
        }
    `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.tabs.desktopAllStyle', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.tabs.tabletAllStyle', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.tabs.mobileAllStyle', mobileAllStyle, props)
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

/***/ "./src/blocks/tabs/style.scss":
/*!************************************!*\
  !*** ./src/blocks/tabs/style.scss ***!
  \************************************/
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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

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

/***/ "./src/blocks/tabs/block.json":
/*!************************************!*\
  !*** ./src/blocks/tabs/block.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Tabs","name":"zolo/tabs","category":"zoloblocks","keywords":["tab","tabs","section","content","accordion"],"description":"Add interactive tabs for organized content navigation.","apiVersion":3,"textdomain":"zoloblocks","example":{"attributes":{"preview":true},"viewportWidth":410},"supports":{"anchor":false,"customClassName":false,"align":["wide","full"]},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 			"blocks/tabs/index": 0,
/******/ 			"blocks/tabs/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/tabs/style-index"], () => (__webpack_require__("./src/blocks/tabs/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map