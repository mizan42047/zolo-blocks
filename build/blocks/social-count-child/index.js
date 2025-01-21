/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/social-count-child/attributes.js":
/*!*****************************************************!*\
  !*** ./src/blocks/social-count-child/attributes.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/social-count-child/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/social-count-child/constants/typoPrefixConstant.js");
const {
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateTypographyAttributes,
  generateNormalBGAttributes
} = window.zoloModule;


const attributes = {
  //Global Attributes
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
  socialName: {
    type: 'string',
    default: ''
  },
  socialIcon: {
    type: 'string',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>'
  },
  socialLink: {
    type: 'object',
    default: {
      url: '#',
      openInNewTab: false
    }
  },
  socialCounter: {
    type: 'string',
    default: '450'
  },
  socialMeta: {
    type: 'string',
    default: 'Likes'
  },
  // item
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_PADDING),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_SHADOW),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_HOVER_SHADOW),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_HOVER_BG),
  //icon
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_PADDING),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_HOVER_BG),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_SIZE),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_SPACING),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_H_SPACING),
  //counter
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.COUNTER_SPACING),
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__)),
  //Block specific Attributes
  preset: {
    type: 'string',
    default: 'style-1'
  },
  itemHoverBorderColor: {
    type: 'string'
  },
  iconColor: {
    type: 'string'
  },
  iconHoverColor: {
    type: 'string'
  },
  iconHoverBorderColor: {
    type: 'string'
  },
  counterColor: {
    type: 'string'
  },
  counterHoverColor: {
    type: 'string'
  },
  metaColor: {
    type: 'string'
  },
  metaHoverColor: {
    type: 'string'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/social-count-child/constants/index.js":
/*!**********************************************************!*\
  !*** ./src/blocks/social-count-child/constants/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   COUNTER_SPACING: () => (/* binding */ COUNTER_SPACING),
/* harmony export */   ICON_BG: () => (/* binding */ ICON_BG),
/* harmony export */   ICON_BORDER: () => (/* binding */ ICON_BORDER),
/* harmony export */   ICON_BORDER_RADIUS: () => (/* binding */ ICON_BORDER_RADIUS),
/* harmony export */   ICON_HOVER_BG: () => (/* binding */ ICON_HOVER_BG),
/* harmony export */   ICON_H_SPACING: () => (/* binding */ ICON_H_SPACING),
/* harmony export */   ICON_PADDING: () => (/* binding */ ICON_PADDING),
/* harmony export */   ICON_SIZE: () => (/* binding */ ICON_SIZE),
/* harmony export */   ICON_SPACING: () => (/* binding */ ICON_SPACING),
/* harmony export */   ITEM_BG: () => (/* binding */ ITEM_BG),
/* harmony export */   ITEM_BORDER: () => (/* binding */ ITEM_BORDER),
/* harmony export */   ITEM_BORDER_RADIUS: () => (/* binding */ ITEM_BORDER_RADIUS),
/* harmony export */   ITEM_HOVER_BG: () => (/* binding */ ITEM_HOVER_BG),
/* harmony export */   ITEM_HOVER_SHADOW: () => (/* binding */ ITEM_HOVER_SHADOW),
/* harmony export */   ITEM_PADDING: () => (/* binding */ ITEM_PADDING),
/* harmony export */   ITEM_SHADOW: () => (/* binding */ ITEM_SHADOW)
/* harmony export */ });
// Block Prefix
const BLOCK_PREFIX = 'social-count-child';
const ITEM_BG = 'itemBg';
const ITEM_BORDER = 'itemBorder';
const ITEM_BORDER_RADIUS = 'itemBRadius';
const ITEM_PADDING = 'itemPadding';
const ITEM_SHADOW = 'itemShadow';
const ITEM_HOVER_BG = 'itemHoverBg';
const ITEM_HOVER_SHADOW = 'itemHoverBoxShadow';
const ICON_BG = 'iconBg';
const ICON_BORDER = 'iconBorder';
const ICON_BORDER_RADIUS = 'iconBRadius';
const ICON_PADDING = 'iconPadding';
const ICON_SIZE = 'iconSize';
const ICON_SPACING = 'iconSpacing';
const ICON_H_SPACING = 'iconHSpacing';
const ICON_HOVER_BG = 'iconHoverBg';
//counter
const COUNTER_SPACING = 'counterSpacing';

/***/ }),

/***/ "./src/blocks/social-count-child/constants/typoPrefixConstant.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/social-count-child/constants/typoPrefixConstant.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COUNTER_TYPOGRAPHY: () => (/* binding */ COUNTER_TYPOGRAPHY),
/* harmony export */   META_TYPOGRAPHY: () => (/* binding */ META_TYPOGRAPHY)
/* harmony export */ });
const COUNTER_TYPOGRAPHY = 'counterTypography';
const META_TYPOGRAPHY = 'metaTypography';

/***/ }),

/***/ "./src/blocks/social-count-child/context.js":
/*!**************************************************!*\
  !*** ./src/blocks/social-count-child/context.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Context = ['zolo/preset'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);

/***/ }),

/***/ "./src/blocks/social-count-child/counter.js":
/*!**************************************************!*\
  !*** ./src/blocks/social-count-child/counter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Counter = ({
  endValue,
  duration = 3000
}) => {
  const counterRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  //format number
  const formatNumber = value => {
    // Remove any non-numeric characters (except for the decimal point) and convert the value to a floating-point number
    const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ""));

    // If the value is less than or equal to 999, return the value rounded up to the nearest whole number
    if (numericValue <= 999) return Math.ceil(numericValue);

    // Define an array of units to represent large numbers with their corresponding suffixes
    const units = [{
      value: 1e3,
      suffix: "K"
    },
    // Thousands
    {
      value: 1e6,
      suffix: "M"
    },
    // Millions
    {
      value: 1e9,
      suffix: "B"
    },
    // Billions
    {
      value: 1e12,
      suffix: "T"
    },
    // Trillions
    {
      value: 1e15,
      suffix: "P"
    },
    // Quadrillions
    {
      value: 1e18,
      suffix: "E"
    } // Quintillions
    ];

    // Find the appropriate unit based on the value
    // The unit is selected if the value is greater than or equal to the unit's value,
    // and either it's the last unit or the value is less than the next unit's value
    const matchingUnit = units.find((unit, index) => numericValue >= unit.value && (index === units.length - 1 || numericValue < units[index + 1].value));

    // Divide the value by the matched unit's value and format it to 2 decimal places
    // Remove any unnecessary trailing zeros after the decimal point
    const formattedNumber = (numericValue / matchingUnit?.value).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1");

    // Return the formatted number with the appropriate suffix
    return formattedNumber + matchingUnit?.suffix;
  };

  //animation counter value
  const animateCounter = (element, startValue, endValue, duration) => {
    let startTime = null;

    // Function to update the counter at each animation frame
    const step = currentTime => {
      // Set the start time on the first call
      if (!startTime) startTime = currentTime;

      // Calculate the progress as a value between 0 and 1
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Calculate the current value based on the progress
      const currentValue = Math.ceil(progress * (endValue - startValue) + startValue);

      // Update the element's text content with the formatted current value
      element.textContent = formatNumber(currentValue);

      // Continue the animation if progress is not yet complete
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    // Start the animation
    window.requestAnimationFrame(step);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (counterRef.current) {
      animateCounter(counterRef.current, 0, endValue, duration);
    }
  }, [endValue, duration]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "zolo-count",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      ref: counterRef,
      className: "counter-value",
      children: endValue
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ }),

/***/ "./src/blocks/social-count-child/edit.js":
/*!***********************************************!*\
  !*** ./src/blocks/social-count-child/edit.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/blocks/social-count-child/inspector.js");
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter */ "./src/blocks/social-count-child/counter.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/blocks/social-count-child/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);


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
    clientId,
    context
  } = props;
  const {
    uniqueId,
    preset,
    parentClasses,
    socialIcon,
    socialLink,
    socialCounter,
    socialMeta
  } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, `${uniqueId} zolo-${preset}`, classArrayToStr(parentClasses))
  });

  /**
   * context
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setAttributes({
      preset: context['zolo/preset']
    });
  }, [context]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SidebarOpener, {
        clientId: clientId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
        href: socialLink && socialLink?.url,
        target: socialLink && socialLink?.openInNewTab && '_blank',
        rel: socialLink && socialLink?.openInNewTab && 'noopener noreferrer',
        className: `zolo-item zolo-social-icon`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "zolo-icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DisplayZoloIcon, {
            icon: socialIcon
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "zolo-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_counter__WEBPACK_IMPORTED_MODULE_4__["default"], {
            endValue: socialCounter
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-meta",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: socialMeta
            })
          })]
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/social-count-child/index.js":
/*!************************************************!*\
  !*** ./src/blocks/social-count-child/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/social-count-child/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/social-count-child/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/social-count-child/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/social-count-child/save.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./src/blocks/social-count-child/context.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/social-count-child/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  icon: {
    src: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
        d: "M14.7208 6.30414C13.8422 6.27746 13.0354 6.5976 12.4079 7.18453L10.857 8.66074C9.6199 9.83459 9.53026 11.7554 10.6508 13.0449C10.7853 13.1961 10.9736 13.2761 11.1618 13.2761C11.3142 13.2761 11.4756 13.2228 11.6011 13.1161C11.879 12.8759 11.9148 12.458 11.6728 12.1734C11.0184 11.4264 11.0722 10.3059 11.7983 9.62117L13.3492 8.14495C13.7078 7.79813 14.1649 7.62028 14.6939 7.62917C15.1959 7.64695 15.662 7.85149 16.0027 8.2161C16.6661 8.91863 16.675 9.98577 16.0385 10.7061L14.9987 11.8711C14.7566 12.1467 14.7835 12.5647 15.0614 12.8137C15.3393 13.0538 15.7696 13.0271 16.0117 12.7514L17.0515 11.5865C18.1542 10.3504 18.1273 8.50956 16.9888 7.30013C16.3971 6.66874 15.5993 6.31303 14.7297 6.28635L14.7208 6.30414ZM12.4975 10.9284C12.2196 11.1685 12.1838 11.5865 12.4258 11.8711C12.9906 12.5202 12.9458 13.4984 12.3182 14.0943L10.9198 15.4282C10.606 15.7305 10.1757 15.8728 9.74541 15.8728C9.30614 15.8639 8.90273 15.6772 8.59794 15.357C8.0242 14.7434 8.00628 13.8097 8.57104 13.1783L9.15374 12.5024C9.39579 12.2179 9.35993 11.7999 9.07306 11.5598C8.79516 11.3197 8.36486 11.3553 8.12281 11.6398L7.54908 12.3068C6.53608 13.454 6.55401 15.1525 7.61183 16.273C8.15867 16.851 8.90273 17.189 9.70058 17.2068C9.72748 17.2068 9.75437 17.2068 9.78126 17.2068C10.5522 17.2068 11.2784 16.9133 11.8342 16.3886L13.2326 15.0547C14.3801 13.9698 14.4608 12.1912 13.4299 10.9996C13.1878 10.7239 12.7575 10.6883 12.4796 10.9284H12.4975ZM21.0049 11.6487C20.8884 6.86438 16.944 3.00489 12.0941 3.00489C11.61 3.00489 11.1439 3.05825 10.6777 3.12939C10.2833 2.46243 9.56611 2 8.72344 2C7.47736 2 6.4554 3.00489 6.4554 4.24989C6.4554 4.49 6.50022 4.71232 6.57194 4.92574C4.90453 6.23299 3.7212 8.11828 3.32676 10.2881C2.57373 10.4215 2 11.0707 2 11.8622C2 12.6536 2.56477 13.2939 3.31779 13.4362C3.47916 14.3255 3.77499 15.197 4.19632 15.9973C5.7472 18.9053 8.77723 20.7194 12.0941 20.7194C12.3362 20.7194 12.5693 20.7016 12.8023 20.6839C13.1609 21.4575 13.9408 22 14.8552 22C16.1013 22 17.1233 20.9951 17.1233 19.7501C17.1233 19.5545 17.0874 19.3766 17.0426 19.1988C18.6472 18.1316 19.8754 16.5665 20.5119 14.7168C21.3456 14.6545 22 13.9698 22 13.1249C22 12.458 21.5876 11.8888 21.0049 11.6487ZM8.72344 2.89818C9.47647 2.89818 10.095 3.50289 10.095 4.25878C10.095 5.01467 9.48543 5.61939 8.72344 5.61939C7.96145 5.61939 7.35186 5.01467 7.35186 4.25878C7.35186 3.50289 7.96145 2.89818 8.72344 2.89818ZM3.61363 12.5736C3.21918 12.5736 2.89646 12.2534 2.89646 11.8622C2.89646 11.4709 3.21918 11.1507 3.61363 11.1507C4.00807 11.1507 4.33079 11.4709 4.33079 11.8622C4.33079 12.2534 4.00807 12.5736 3.61363 12.5736ZM14.8552 21.1107C14.1022 21.1107 13.4836 20.506 13.4836 19.7501C13.4836 18.9942 14.0932 18.3895 14.8552 18.3895C15.6172 18.3895 16.2268 18.9942 16.2268 19.7501C16.2268 20.506 15.6172 21.1107 14.8552 21.1107ZM16.6481 18.3984C16.2358 17.8648 15.5903 17.5091 14.8552 17.5091C13.6091 17.5091 12.5872 18.514 12.5872 19.759C12.5872 19.7768 12.5872 19.7857 12.5872 19.8035C12.4169 19.8124 12.2465 19.839 12.0762 19.839C9.09099 19.839 6.37472 18.2116 4.97624 15.5972C4.59973 14.8946 4.34872 14.1387 4.19632 13.3651C4.78799 13.1249 5.20932 12.5558 5.20932 11.8799C5.20932 11.2041 4.78799 10.6349 4.20529 10.3948C4.56387 8.52735 5.57687 6.89106 7.00224 5.73499C7.41461 6.21521 8.0242 6.51756 8.70551 6.51756C9.95159 6.51756 10.9736 5.51267 10.9736 4.26767C10.9736 4.17875 10.9556 4.08982 10.9467 4.00089C11.3142 3.94753 11.6907 3.91196 12.0762 3.91196C16.3971 3.91196 19.9292 7.32681 20.0905 11.5687C19.3375 11.7021 18.7638 12.3602 18.7638 13.1427C18.7638 13.7563 19.1134 14.281 19.6244 14.5478C19.0506 16.1218 18.0018 17.4647 16.6392 18.3984H16.6481ZM20.3864 13.8453C19.9919 13.8453 19.6692 13.5251 19.6692 13.1338C19.6692 12.7426 19.9919 12.4224 20.3864 12.4224C20.7808 12.4224 21.1035 12.7426 21.1035 13.1338C21.1035 13.5251 20.7808 13.8453 20.3864 13.8453Z",
        fill: "#2667FF"
      })
    })
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
  usesContext: _context__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/social-count-child/inspector.js":
/*!****************************************************!*\
  !*** ./src/blocks/social-count-child/inspector.js ***!
  \****************************************************/
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
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/blocks/social-count-child/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/blocks/social-count-child/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/social-count-child/constants/typoPrefixConstant.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);




const {
  ResRangeControl,
  ColorControl,
  TabPanelControl,
  HeaderTabs,
  ResDimensionsControl,
  BorderControl,
  NormalBGControl,
  BoxShadowControl,
  TypographyDropdown,
  AdvancedOptions,
  ZoloPanelBody,
  ZoloIconPicker,
  LinkControl
} = window.zoloModule;



function Inspector(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    preset,
    resMode,
    socialIcon,
    socialLink,
    socialCounter,
    socialMeta,
    iconColor,
    iconHoverColor,
    iconHoverBorderColor,
    counterColor,
    counterHoverColor,
    metaColor,
    metaHoverColor,
    itemHoverBorderColor
  } = attributes;
  const requiredProps = {
    attributes,
    setAttributes,
    resMode,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(HeaderTabs, {
      block: "zolo/social-links",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'zoloblocks'),
          firstOpen: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ZoloIconPicker, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Social Icon', 'zoloblocks'),
            value: socialIcon,
            onChange: value => setAttributes({
              socialIcon: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(LinkControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link', 'zoloblocks'),
            value: socialLink,
            onChange: value => setAttributes({
              socialLink: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Social Counter', 'zoloblocks'),
            value: socialCounter,
            onChange: socialCounter => setAttributes({
              socialCounter
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Social Meta', 'zoloblocks'),
            value: socialMeta,
            onChange: socialMeta => setAttributes({
              socialMeta
            })
          })]
        })
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Items', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          firstOpen: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ITEM_BG,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ITEM_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ITEM_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ITEM_PADDING,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ITEM_SHADOW,
                requiredProps: requiredProps
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ITEM_HOVER_BG,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'zoloblocks'),
                color: itemHoverBorderColor,
                onChange: value => setAttributes({
                  itemHoverBorderColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ITEM_HOVER_SHADOW,
                requiredProps: requiredProps
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: iconColor,
                onChange: value => setAttributes({
                  iconColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ICON_BG,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ICON_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ICON_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ICON_PADDING,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ICON_SIZE,
                requiredProps: requiredProps,
                min: 0,
                max: 100,
                step: 1
              }), preset === 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spacing', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ICON_SPACING,
                requiredProps: requiredProps,
                min: 0,
                max: 100,
                step: 1
              }), preset === 'style-2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spacing', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ICON_H_SPACING,
                requiredProps: requiredProps,
                min: 0,
                max: 100,
                step: 1
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover Color', 'zoloblocks'),
                color: iconHoverColor,
                onChange: value => setAttributes({
                  iconHoverColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ICON_HOVER_BG,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover Border Color', 'zoloblocks'),
                color: iconHoverBorderColor,
                onChange: value => setAttributes({
                  iconHoverBorderColor: value
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Counter', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.COUNTER_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 36
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: counterColor,
                onChange: value => setAttributes({
                  counterColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Spacing', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.COUNTER_SPACING,
                requiredProps: requiredProps,
                min: 0,
                max: 100,
                step: 1
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: counterHoverColor,
                onChange: value => setAttributes({
                  counterHoverColor: value
                })
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.META_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 36
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: metaColor,
                onChange: value => setAttributes({
                  metaColor: value
                })
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: metaHoverColor,
                onChange: value => setAttributes({
                  metaHoverColor: value
                })
              })
            })
          })
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps,
          block: "zolo/social-links"
        })
      })
    })
  }, "controls");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/social-count-child/save.js":
/*!***********************************************!*\
  !*** ./src/blocks/social-count-child/save.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const {
  DisplayZoloIcon,
  classArrayToStr
} = window.zoloModule;



const Save = props => {
  const {
    attributes,
    className
  } = props;
  const {
    uniqueId,
    parentClasses,
    preset,
    zoloId,
    socialIcon,
    socialLink,
    socialCounter,
    socialMeta
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, `${uniqueId} zolo-${preset}`, classArrayToStr(parentClasses))
    }),
    ...(zoloId && {
      id: zoloId
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
      href: socialLink && socialLink.url,
      target: socialLink && socialLink.openInNewTab && '_blank',
      rel: socialLink && socialLink.openInNewTab && 'noopener noreferrer',
      className: `zolo-item zolo-social-icon`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "zolo-icon",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DisplayZoloIcon, {
          icon: socialIcon
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "zolo-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "zolo-count",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "counter-value",
            children: socialCounter
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "zolo-meta",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: socialMeta
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/social-count-child/style.js":
/*!************************************************!*\
  !*** ./src/blocks/social-count-child/style.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/blocks/social-count-child/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/social-count-child/constants/typoPrefixConstant.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);

const {
  generateResRangeStyle,
  generateBorderStyle,
  generateDimensionStyle,
  generateBoxShadowStyles,
  generateTypographyStyles,
  GlobalStyleHanlder,
  generateNormalBGControlStyles
} = window.zoloModule;



const Style = ({
  props
}) => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    preset,
    uniqueId,
    iconColor,
    iconHoverColor,
    iconHoverBorderColor,
    counterColor,
    counterHoverColor,
    metaColor,
    metaHoverColor,
    itemHoverBorderColor
  } = attributes;

  //item style
  const {
    dimensionStylesDesktop: itemPaddingDesk,
    dimensionStylesTab: itemPaddingTab,
    dimensionStylesMobile: itemPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ITEM_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    backgroundStylesDesktop: itemBGDesk,
    backgroundStylesTab: itemBGTab,
    backgroundStylesMobile: itemBGMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ITEM_BG,
    attributes,
    noMainBGImg: true
  });
  const {
    desktopBorderStyle: itemBorderDesk,
    tabBorderStyle: itemBorderTab,
    mobBorderStyle: itemBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ITEM_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: itemBorderRadiusDesk,
    dimensionStylesTab: itemBorderRadiusTab,
    dimensionStylesMobile: itemBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ITEM_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: itemBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ITEM_SHADOW
  });
  const {
    backgroundStylesDesktop: itemHoverBGDesk,
    backgroundStylesTab: itemHoverBGTab,
    backgroundStylesMobile: itemHoverBGMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ITEM_HOVER_BG,
    attributes,
    noMainBGImg: true
  });
  const {
    boxShadowStyle: itemHoverBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ITEM_HOVER_SHADOW
  });

  //icon
  const {
    dimensionStylesDesktop: iconPaddingDesk,
    dimensionStylesTab: iconPaddingTab,
    dimensionStylesMobile: iconPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ICON_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    backgroundStylesDesktop: iconBGDesk,
    backgroundStylesTab: iconBGTab,
    backgroundStylesMobile: iconBGMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ICON_BG,
    attributes,
    noMainBGImg: true
  });
  const {
    desktopBorderStyle: iconBorderDesk,
    tabBorderStyle: iconBorderTab,
    mobBorderStyle: iconBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ICON_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: iconBorderRadiusDesk,
    dimensionStylesTab: iconBorderRadiusTab,
    dimensionStylesMobile: iconBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ICON_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    desktopRangeStyle: iconSizeDesk,
    tabRangeStyle: iconSizeTab,
    mobRangeStyle: iconSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ICON_SIZE,
    property: 'width',
    attributes
  });
  const {
    desktopRangeStyle: iconSizeHeightDesk,
    tabRangeStyle: iconSizeHeightTab,
    mobRangeStyle: iconSizeHeightMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ICON_SIZE,
    property: 'height',
    attributes
  });
  const {
    desktopRangeStyle: iconSpacingDesk,
    tabRangeStyle: iconSpacingTab,
    mobRangeStyle: iconSpacingMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ICON_SPACING,
    property: 'margin-bottom',
    attributes
  });
  const {
    desktopRangeStyle: iconHSpacingDesk,
    tabRangeStyle: iconHSpacingTab,
    mobRangeStyle: iconHSpacingMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ICON_H_SPACING,
    property: 'grid-column-gap',
    attributes
  });
  const {
    backgroundStylesDesktop: iconHoverBGDesk,
    backgroundStylesTab: iconHoverBGTab,
    backgroundStylesMobile: iconHoverBGMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ICON_HOVER_BG,
    attributes,
    noMainBGImg: true
  });
  //counter
  const {
    typoStylesDesktop: counterTypoDesk,
    typoStylesTab: counterTypoTab,
    typoStylesMobile: counterTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.COUNTER_TYPOGRAPHY,
    attributes
  });
  const {
    desktopRangeStyle: counterSpacingDesk,
    tabRangeStyle: counterSpacingTab,
    mobRangeStyle: counterSpacingMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.COUNTER_SPACING,
    property: 'margin-bottom',
    attributes
  });
  //meta
  const {
    typoStylesDesktop: metaTypoDesk,
    typoStylesTab: metaTypoTab,
    typoStylesMobile: metaTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.META_TYPOGRAPHY,
    attributes
  });
  /**
   * All Style Combination
   */
  const desktopAllStyle = `

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item{
        ${itemBGDesk}
        ${itemPaddingDesk}
        ${itemBorderDesk}
        ${itemBorderRadiusDesk}
        ${itemBoxShadow}
      }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover{
      ${itemHoverBGDesk}
      ${itemHoverBoxShadow}
      ${itemHoverBorderColor ? `border-color:${itemHoverBorderColor};` : ''}
     }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon{
      ${iconBGDesk}
      ${iconBorderDesk}
      ${iconBorderRadiusDesk}
      ${iconPaddingDesk}
     }

    ${preset === 'style-1' ? `

          .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon{
            ${iconSpacingDesk}
          }

      ` : ''}

    ${preset === 'style-2' ? `

          .${uniqueId}.zolo-block.wp-block-zolo-social-count-child.zolo-style-2 .zolo-item{
            ${iconHSpacingDesk}
          }

      ` : ''}

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover .zolo-icon .zolo__display-icon svg{
      ${iconHoverColor ? `fill:${iconHoverColor};` : ''}
     }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover .zolo-icon{
      ${iconHoverBGDesk}
      ${iconHoverBorderColor ? `border-color:${iconHoverBorderColor};` : ''}
     }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon .zolo__display-icon svg{
       ${iconSizeDesk}
       ${iconSizeHeightDesk}
       ${iconColor ? `fill:${iconColor};` : ''}
     }
      .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-count{
        ${counterTypoDesk}
        ${counterSpacingDesk}
        ${counterColor ? `color:${counterColor};` : ''}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover .zolo-count{
        ${counterHoverColor ? `color:${counterHoverColor};` : ''}
      }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-meta{
      ${metaTypoDesk}
      ${metaColor ? `color:${metaColor};` : ''}
     }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover .zolo-meta{
      ${metaHoverColor ? `color:${metaHoverColor};` : ''}
     }
  	`;
  const tabletAllStyle = `

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item{
        ${itemBGTab}
        ${itemPaddingTab}
        ${itemBorderTab}
        ${itemBorderRadiusTab}
      }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover{
      ${itemHoverBGTab}
     }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon{
      ${iconBGTab}
      ${iconBorderTab}
      ${iconBorderRadiusTab}
      ${iconPaddingTab}
     }

    ${preset === 'style-1' ? `

            .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon{
                ${iconSpacingTab}
            }

    ` : ''}

    ${preset === 'style-2' ? `

        .${uniqueId}.zolo-block.wp-block-zolo-social-count-child.zolo-style-2 .zolo-item{
          ${iconHSpacingTab}
        }

  ` : ''}

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover .zolo-icon{
      ${iconHoverBGTab}
     }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon .zolo__display-icon svg{
       ${iconSizeTab}
       ${iconSizeHeightTab}
     }
      .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-count{
        ${counterTypoTab}
        ${counterSpacingTab}
      }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-meta{
      ${metaTypoTab}
     }
	`;
  const mobileAllStyle = `

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item{
        ${itemBGMob}
        ${itemPaddingMob}
        ${itemBorderMob}
        ${itemBorderRadiusMob}
      }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover{
      ${itemHoverBGMob}
     }

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon{
      ${iconBGMob}
      ${iconBorderMob}
      ${iconBorderRadiusMob}
      ${iconPaddingMob}
     }

      ${preset === 'style-1' ? `
                .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon{
                   ${iconSpacingMob}
                }
              ` : ''}

      ${preset === 'style-2' ? `

              .${uniqueId}.zolo-block.wp-block-zolo-social-count-child.zolo-style-2 .zolo-item{
                ${iconHSpacingMob}
              }

          ` : ''}

     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-item:hover .zolo-icon{
      ${iconHoverBGMob}
     }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-icon .zolo__display-icon svg{
       ${iconSizeMob}
       ${iconSizeHeightMob}
     }
      .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-count{
        ${counterTypoMob}
        ${counterSpacingMob}
      }
     .${uniqueId}.zolo-block.wp-block-zolo-social-count-child .zolo-meta{
      ${metaTypoMob}
     }
  	`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('zolo.socialCount.desktopAllStyle', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('zolo.socialCount.tabletAllStyle', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('zolo.socialCount.mobileAllStyle', mobileAllStyle, props)
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/social-count-child/style.scss":
/*!**************************************************!*\
  !*** ./src/blocks/social-count-child/style.scss ***!
  \**************************************************/
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

/***/ "./src/blocks/social-count-child/block.json":
/*!**************************************************!*\
  !*** ./src/blocks/social-count-child/block.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Social Count Child","name":"zolo/social-count-child","category":"zoloblocks","keywords":["icon","social","count","follower","like","share","subscribe","view","twitter","facebook","instagram","youtube"],"description":"Display individual social counts with flexible design.","apiVersion":3,"textdomain":"zoloblocks","parent":["zolo/social-count"],"supports":{"anchor":false,"customClassName":false},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 			"blocks/social-count-child/index": 0,
/******/ 			"blocks/social-count-child/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/social-count-child/style-index"], () => (__webpack_require__("./src/blocks/social-count-child/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map