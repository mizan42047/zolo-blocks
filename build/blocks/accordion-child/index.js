/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/accordion-child/attributes.js":
/*!**************************************************!*\
  !*** ./src/blocks/accordion-child/attributes.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/accordion-child/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/accordion-child/constants/typoPrefixConstant.js");
/**
 * Internal dependencies
 */
const {
  generateBoxShadowAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateNormalBGAttributes,
  generateResRangeAttributies,
  generateTypographyAttributes
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
      responsiveControls: false
    }
  },
  // block attributes
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_CONTAINER_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_CONTAINER_BORDER_RADIUS),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_CONTAINER_BG),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_CONTAINER_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_CONTAINER_MARGIN),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_CONTAINER_BOX_SHADOW),
  // accordion header
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_HEADER_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_HEADER_BORDER_RADIUS),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_HEADER_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_HEADER_HBG),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_HEADER_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_HEADER_MARGIN),
  // accordion body
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_BODY_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_BODY_BORDER_RADIUS),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_BODY_BG),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_BODY_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AC_BODY_MARGIN),
  // icon container
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONTAINER_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONTAINER_HBG),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONTAINER_PADDING),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONTAINER_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONTAINER_BRADIUS),
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__)),
  // icon
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_SIZE),
  // animated border
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ANIMATED_BORDER_SIZE),
  preset: {
    type: 'string',
    default: ''
  },
  // Tab Icons
  collapseIcon: {
    type: 'string',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg>'
  },
  expandIcon: {
    type: 'string',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"></path></svg>'
  },
  iconColor: {
    type: 'string'
  },
  iconHoverColor: {
    type: 'string'
  },
  // accordion attributes
  title: {
    type: 'string'
  },
  titleColor: {
    type: 'string'
  },
  titleHoverColor: {
    type: 'string'
  },
  titleTag: {
    type: 'string',
    default: 'h4'
  },
  animatedBorderColor: {
    type: 'string'
  },
  animatedBorderActiveColor: {
    type: 'string'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/accordion-child/constants/index.js":
/*!*******************************************************!*\
  !*** ./src/blocks/accordion-child/constants/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AC_BODY_BG: () => (/* binding */ AC_BODY_BG),
/* harmony export */   AC_BODY_BORDER: () => (/* binding */ AC_BODY_BORDER),
/* harmony export */   AC_BODY_BORDER_RADIUS: () => (/* binding */ AC_BODY_BORDER_RADIUS),
/* harmony export */   AC_BODY_MARGIN: () => (/* binding */ AC_BODY_MARGIN),
/* harmony export */   AC_BODY_PADDING: () => (/* binding */ AC_BODY_PADDING),
/* harmony export */   AC_CONTAINER_BG: () => (/* binding */ AC_CONTAINER_BG),
/* harmony export */   AC_CONTAINER_BORDER: () => (/* binding */ AC_CONTAINER_BORDER),
/* harmony export */   AC_CONTAINER_BORDER_RADIUS: () => (/* binding */ AC_CONTAINER_BORDER_RADIUS),
/* harmony export */   AC_CONTAINER_BOX_SHADOW: () => (/* binding */ AC_CONTAINER_BOX_SHADOW),
/* harmony export */   AC_CONTAINER_MARGIN: () => (/* binding */ AC_CONTAINER_MARGIN),
/* harmony export */   AC_CONTAINER_PADDING: () => (/* binding */ AC_CONTAINER_PADDING),
/* harmony export */   AC_HEADER_BG: () => (/* binding */ AC_HEADER_BG),
/* harmony export */   AC_HEADER_BORDER: () => (/* binding */ AC_HEADER_BORDER),
/* harmony export */   AC_HEADER_BORDER_RADIUS: () => (/* binding */ AC_HEADER_BORDER_RADIUS),
/* harmony export */   AC_HEADER_HBG: () => (/* binding */ AC_HEADER_HBG),
/* harmony export */   AC_HEADER_MARGIN: () => (/* binding */ AC_HEADER_MARGIN),
/* harmony export */   AC_HEADER_PADDING: () => (/* binding */ AC_HEADER_PADDING),
/* harmony export */   ANIMATED_BORDER_SIZE: () => (/* binding */ ANIMATED_BORDER_SIZE),
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   ICONTAINER_BG: () => (/* binding */ ICONTAINER_BG),
/* harmony export */   ICONTAINER_BORDER: () => (/* binding */ ICONTAINER_BORDER),
/* harmony export */   ICONTAINER_BRADIUS: () => (/* binding */ ICONTAINER_BRADIUS),
/* harmony export */   ICONTAINER_HBG: () => (/* binding */ ICONTAINER_HBG),
/* harmony export */   ICONTAINER_PADDING: () => (/* binding */ ICONTAINER_PADDING),
/* harmony export */   ICON_SIZE: () => (/* binding */ ICON_SIZE)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Block Prefix
const BLOCK_PREFIX = 'slide';

// accordion container
const AC_CONTAINER_BORDER = 'accBorder';
const AC_CONTAINER_BORDER_RADIUS = 'accBorderRadius';
const AC_CONTAINER_BOX_SHADOW = 'accBoxShadow';
const AC_CONTAINER_PADDING = 'accPadding';
const AC_CONTAINER_MARGIN = 'accMargin';
const AC_CONTAINER_BG = 'accBg';

// accordion header
const AC_HEADER_BORDER = 'achBorder';
const AC_HEADER_BORDER_RADIUS = 'achBorderRadius';
const AC_HEADER_PADDING = 'achPadding';
const AC_HEADER_MARGIN = 'achMargin';
const AC_HEADER_BG = 'achBg';
const AC_HEADER_HBG = 'achHoverBg';

// accordion body
const AC_BODY_BORDER = 'acbBorder';
const AC_BODY_BORDER_RADIUS = 'acbBorderRadius';
const AC_BODY_PADDING = 'acbPadding';
const AC_BODY_MARGIN = 'acbMargin';
const AC_BODY_BG = 'acbBg';

// accordion icon
const ICONTAINER_BG = 'iContainerBg';
const ICONTAINER_PADDING = 'iContainerPadding';
const ICONTAINER_BORDER = 'iContainerBorder';
const ICONTAINER_BRADIUS = 'iContainerBorderRadius';
const ICONTAINER_HBG = 'iContainerHoverBg';
const ICON_SIZE = 'iconSize';

// animated border size
const ANIMATED_BORDER_SIZE = 'animatedBorderSize';

/***/ }),

/***/ "./src/blocks/accordion-child/constants/typoPrefixConstant.js":
/*!********************************************************************!*\
  !*** ./src/blocks/accordion-child/constants/typoPrefixConstant.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TITLE_TYPO: () => (/* binding */ TITLE_TYPO)
/* harmony export */ });
// Button Typography
const TITLE_TYPO = 'titleTypo';

/***/ }),

/***/ "./src/blocks/accordion-child/context.js":
/*!***********************************************!*\
  !*** ./src/blocks/accordion-child/context.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Context for the block.
 */
const Context = ['zolo/preset', 'zolo/collapseIcon', 'zolo/expandIcon', 'zolo/titleTag'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);

/***/ }),

/***/ "./src/blocks/accordion-child/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/accordion-child/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/accordion-child/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/blocks/accordion-child/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
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
  classArrayToStr,
  DisplayZoloIcon
} = window.zoloModule;


// import style


/**
 * Edit Function
 */

function Edit(props) {
  const {
    attributes,
    setAttributes,
    isSelected,
    context
  } = props;
  const {
    uniqueId,
    collapseIcon,
    expandIcon,
    title,
    titleTag,
    parentClasses
  } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(uniqueId, classArrayToStr(parentClasses), 'zolo-accordion-item')
  });

  /**
   * context
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      preset: context['zolo/preset'],
      collapseIcon: context['zolo/collapseIcon'],
      expandIcon: context['zolo/expandIcon'],
      titleTag: context['zolo/titleTag']
    });
  }, [context]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "ac zolo-accordion-item",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        ...blockProps,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
          type: "button",
          className: "ac-trigger zolo-accordion-head-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
            tagName: titleTag,
            className: "zolo-accordion-head-title",
            value: title,
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Accordion Title', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "zolo-accordion-toggle",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "zolo-accordion-collapsed-mode",
              children: collapseIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DisplayZoloIcon, {
                icon: collapseIcon
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "zolo-accordion-expanded-mode",
              children: expandIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DisplayZoloIcon, {
                icon: expandIcon
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "zolo-accordion-panel ac-panel",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-accordion-inner",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
              template: [['core/paragraph', {
                placeholder: 'Accordion Content'
              }]]
            })
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/accordion-child/example.js":
/*!***********************************************!*\
  !*** ./src/blocks/accordion-child/example.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Example = {
  attributes: {
    memberName: 'John Doe'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Example);

/***/ }),

/***/ "./src/blocks/accordion-child/inspector.js":
/*!*************************************************!*\
  !*** ./src/blocks/accordion-child/inspector.js ***!
  \*************************************************/
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
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/blocks/accordion-child/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/blocks/accordion-child/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/accordion-child/constants/typoPrefixConstant.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
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
  NormalBGControl,
  HeaderTabs,
  TabPanelControl,
  BoxShadowControl,
  AdvancedOptions,
  TypographyDropdown,
  ZoloPanelBody
} = window.zoloModule;





function Inspector(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    preset,
    resMode,
    title,
    iconColor,
    iconHoverColor,
    titleColor,
    titleHoverColor,
    animatedBorderColor,
    animatedBorderActiveColor
  } = attributes;
  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(HeaderTabs, {
      block: "zolo/accordion-child",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'zoloblocks'),
          firstOpen: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks'),
            onChange: text => setAttributes({
              title: text
            }),
            value: title
          })
        })
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Item', 'zoloblocks'),
          firstOpen: true,
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_CONTAINER_BG,
            noMainBGImg: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_CONTAINER_PADDING,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_CONTAINER_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_CONTAINER_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BoxShadowControl, {
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_CONTAINER_BOX_SHADOW,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_CONTAINER_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: titleColor,
                onChange: value => setAttributes({
                  titleColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.TITLE_TYPO,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_HEADER_BG,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_HEADER_PADDING,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_HEADER_MARGIN,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_HEADER_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_HEADER_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              }), preset === 'style-3' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "zolo-custom-heading",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animated Border', 'zoloblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: animatedBorderColor,
                  onChange: value => setAttributes({
                    animatedBorderColor: value
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Active Color', 'zoloblocks'),
                  color: animatedBorderActiveColor,
                  onChange: value => setAttributes({
                    animatedBorderActiveColor: value
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thickness', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ANIMATED_BORDER_SIZE,
                  requiredProps: requiredProps
                })]
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: titleHoverColor,
                onChange: value => setAttributes({
                  titleHoverColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_HEADER_HBG,
                noMainBGImg: true
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
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ICON_SIZE,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ICONTAINER_BG,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ICONTAINER_PADDING,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ICONTAINER_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ICONTAINER_BRADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: iconHoverColor,
                onChange: value => setAttributes({
                  iconHoverColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ICONTAINER_HBG,
                noMainBGImg: true
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_BODY_BG,
            noMainBGImg: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_BODY_PADDING,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_BODY_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_BODY_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AC_BODY_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          })]
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps,
          block: "zolo/accordion-child"
        })
      })
    })
  }, "controls");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/accordion-child/save.js":
/*!********************************************!*\
  !*** ./src/blocks/accordion-child/save.js ***!
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
  classArrayToStr,
  DisplayZoloIcon
} = window.zoloModule;
const Save = ({
  attributes
}) => {
  const {
    uniqueId,
    title,
    titleTag,
    parentClasses,
    collapseIcon,
    expandIcon,
    zoloId
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(uniqueId, 'zolo-accordion-item ac', classArrayToStr(parentClasses))
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    ...blockProps,
    ...(zoloId && {
      id: zoloId
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
      type: "button",
      className: "ac-trigger zolo-accordion-head-item",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: titleTag,
        className: "zolo-accordion-head-title",
        value: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "zolo-accordion-toggle",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "zolo-accordion-collapsed-mode",
          children: collapseIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DisplayZoloIcon, {
            icon: collapseIcon
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "zolo-accordion-expanded-mode",
          children: expandIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DisplayZoloIcon, {
            icon: expandIcon
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "zolo-accordion-panel ac-panel",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "zolo-accordion-inner",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/accordion-child/style.js":
/*!*********************************************!*\
  !*** ./src/blocks/accordion-child/style.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/accordion-child/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/accordion-child/constants/typoPrefixConstant.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Internal depencencies
 */
const {
  generateBoxShadowStyles,
  generateBorderStyle,
  generateDimensionStyle,
  generateResRangeStyle,
  generateNormalBGControlStyles,
  generateTypographyStyles,
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
    preset,
    iconColor,
    iconHoverColor,
    titleColor,
    titleHoverColor,
    animatedBorderColor,
    animatedBorderActiveColor
  } = attributes;

  // accordion container
  const {
    desktopBorderStyle: containerBorderStyles,
    tabBorderStyle: containerBorderStylesTab,
    mobBorderStyle: containerBorderStylesMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_CONTAINER_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: containerBorderRadiusDesktop,
    dimensionStylesTab: containerBorderRadiusTab,
    dimensionStylesMobile: containerBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_CONTAINER_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    backgroundStylesDesktop: containerNormalBgDesktop,
    backgroundStylesTab: containerNormalBgTab,
    backgroundStylesMobile: containerNormalBgMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_CONTAINER_BG,
    attributes
  });
  const {
    boxShadowStyle: containerBoxShadow
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_CONTAINER_BOX_SHADOW,
    attributes
  });
  const {
    dimensionStylesDesktop: containerPaddingDesk,
    dimensionStylesTab: containerPaddingTab,
    dimensionStylesMobile: containerPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_CONTAINER_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: containerMarginDesk,
    dimensionStylesTab: containerMarginTab,
    dimensionStylesMobile: containerMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_CONTAINER_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // accordion head
  const {
    typoStylesDesktop: titleDeskTypo,
    typoStylesTab: titleTabTypo,
    typoStylesMobile: titleMobTypo
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__.TITLE_TYPO,
    attributes
  });
  const {
    desktopBorderStyle: achBorderDesk,
    tabBorderStyle: achBorderTab,
    mobBorderStyle: achBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_HEADER_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: achBorderRadiusDesk,
    dimensionStylesTab: achBorderRadiusTab,
    dimensionStylesMobile: achBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_HEADER_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    backgroundStylesDesktop: achNormalBgDesktop,
    backgroundStylesTab: achNormalBgTab,
    backgroundStylesMobile: achNormalBgMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_HEADER_BG,
    attributes
  });
  const {
    backgroundStylesDesktop: achNormalHBgDesktop,
    backgroundStylesTab: achNormalHBgTab,
    backgroundStylesMobile: achNormalHBgMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_HEADER_HBG,
    attributes
  });
  const {
    dimensionStylesDesktop: achPaddingDesk,
    dimensionStylesTab: achPaddingTab,
    dimensionStylesMobile: achPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_HEADER_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: achMarginDesk,
    dimensionStylesTab: achMarginTab,
    dimensionStylesMobile: achMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_HEADER_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // accordion body
  const {
    desktopBorderStyle: acbBorderDesk,
    tabBorderStyle: acbBorderTab,
    mobBorderStyle: acbBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_BODY_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: acbBorderRadiusDesk,
    dimensionStylesTab: acbBorderRadiusTab,
    dimensionStylesMobile: acbBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_BODY_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    backgroundStylesDesktop: acbNormalBgDesktop,
    backgroundStylesTab: acbNormalBgTab,
    backgroundStylesMobile: acbNormalBgMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_BODY_BG,
    attributes
  });
  const {
    dimensionStylesDesktop: acbPaddingDesk,
    dimensionStylesTab: acbPaddingTab,
    dimensionStylesMobile: acbPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_BODY_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: acbMarginDesk,
    dimensionStylesTab: acbMarginTab,
    dimensionStylesMobile: acbMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.AC_BODY_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // icon container
  const {
    backgroundStylesDesktop: icNormalDesk,
    backgroundStylesTab: icNormalTab,
    backgroundStylesMobile: icNormalMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.ICONTAINER_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    backgroundStylesDesktop: icHoverDesk,
    backgroundStylesTab: icHoverTab,
    backgroundStylesMobile: icHoverMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.ICONTAINER_HBG,
    attributes,
    noMainBGImg: false
  });
  const {
    desktopBorderStyle: borderStyles,
    tabBorderStyle: borderStylesTab,
    mobBorderStyle: borderStylesMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.ICONTAINER_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: borderRadiusDesktop,
    dimensionStylesTab: borderRadiusTab,
    dimensionStylesMobile: borderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.ICONTAINER_BRADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: icPaddingDesk,
    dimensionStylesTab: icPaddingTab,
    dimensionStylesMobile: icPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.ICONTAINER_PADDING,
    styleFor: 'padding',
    attributes
  });

  // accordion icon
  const {
    desktopRangeStyle: iconSizeDesk,
    tabRangeStyle: iconSizeTab,
    mobRangeStyle: iconSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.ICON_SIZE,
    property: 'width',
    attributes
  });
  const {
    desktopRangeStyle: iconHSizeDesk,
    tabRangeStyle: iconHSizeTab,
    mobRangeStyle: iconHSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.ICON_SIZE,
    property: 'height',
    attributes
  });
  const {
    desktopRangeStyle: animatedBorderSizeDesk,
    tabRangeStyle: animatedBorderSizeTab,
    mobRangeStyle: animatedBorderSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_0__.ANIMATED_BORDER_SIZE,
    property: 'height',
    attributes
  });

  /**
   * All Style Combination
   */
  const desktopAllStyle = `
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child {
            ${containerNormalBgDesktop}
            ${containerBorderStyles}
            ${containerBorderRadiusDesktop}
            ${containerPaddingDesk}
            ${containerMarginDesk}
            ${containerBoxShadow}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item {
            ${achBorderDesk}
            ${achBorderRadiusDesk}
            ${achPaddingDesk}
            ${achMarginDesk}
            ${achNormalBgDesktop}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover {
            ${achNormalHBgDesktop}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item .zolo-accordion-head-title {
            ${titleDeskTypo}
            ${titleColor ? `color: ${titleColor};` : ''}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover .zolo-accordion-head-title {
            ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
        }

        ${preset === 'style-3' ? `
                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:before,
                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:after{
                        ${animatedBorderSizeDesk}
                    }

                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:after{
                        ${animatedBorderColor ? `background: ${animatedBorderColor};` : ''}
                    }

                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:before{
                        ${animatedBorderActiveColor ? `background: ${animatedBorderActiveColor};` : ''}
                    }
            ` : ''}

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item .zolo-accordion-toggle {
            ${icNormalDesk}
            ${borderStyles}
            ${borderRadiusDesktop}
            ${icPaddingDesk}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover .zolo-accordion-toggle {
            ${icHoverDesk}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-toggle svg {
            ${iconSizeDesk}
            ${iconHSizeDesk}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover .zolo-accordion-toggle svg {
            ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-inner {
            ${acbBorderDesk}
            ${acbBorderRadiusDesk}
            ${acbPaddingDesk}
            ${acbMarginDesk}
            ${acbNormalBgDesktop}
        }
    `;
  const tabletAllStyle = `
        .${uniqueId} .zolo-block.wp-block-zolo-accordion-child{
            ${containerNormalBgTab}
            ${containerBorderStylesTab}
            ${containerBorderRadiusTab}
            ${containerPaddingTab}
            ${containerMarginTab}
            ${containerBoxShadow}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item {
            ${achBorderTab}
            ${achBorderRadiusTab}
            ${achPaddingTab}
            ${achMarginTab}
            ${achNormalBgTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover {
            ${achNormalHBgTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-title {
            ${titleTabTypo}
        }

        ${preset === 'style-3' ? `
                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:before,
                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:after{
                        ${animatedBorderSizeTab}
                    }
            ` : ''}

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-toggle {
            ${icNormalTab}
            ${borderStylesTab}
            ${borderRadiusTab}
            ${icPaddingTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover .zolo-accordion-toggle {
            ${icHoverTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-toggle svg {
            ${iconSizeTab}
            ${iconHSizeTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-inner {
            ${acbBorderTab}
            ${acbBorderRadiusTab}
            ${acbPaddingTab}
            ${acbMarginTab}
            ${acbNormalBgTab}
        }
    `;
  const mobileAllStyle = `
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-block.wp-block-zolo-accordion-child{
            ${containerNormalBgMob}
            ${containerBorderStylesMob}
            ${containerBorderRadiusMob}
            ${containerPaddingMob}
            ${containerMarginMob}
            ${containerBoxShadow}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item {
            ${achBorderMob}
            ${achBorderRadiusMob}
            ${achPaddingMob}
            ${achMarginMob}
            ${achNormalBgMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover {
            ${achNormalHBgMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-title {
            ${titleMobTypo}
        }

        ${preset === 'style-3' ? `
                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:before,
                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:after{
                        ${animatedBorderSizeMob}
                    }
            ` : ''}

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-toggle {
            ${icNormalMob}
            ${borderStylesMob}
            ${borderRadiusMob}
            ${icPaddingMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover .zolo-accordion-toggle {
            ${icHoverMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-toggle svg{
            ${iconSizeMob}
            ${iconHSizeMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-inner {
            ${acbBorderMob}
            ${acbBorderRadiusMob}
            ${acbPaddingMob}
            ${acbMarginMob}
            ${acbNormalBgMob}
        }
    `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: desktopAllStyle,
      tabAllStyle: tabletAllStyle,
      mobileAllStyle: mobileAllStyle
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

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

/***/ "./src/blocks/accordion-child/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/accordion-child/block.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Single Accordion","name":"zolo/accordion-child","category":"zoloblocks","keywords":["Accordion","Collapse","Expand","faq","toggle"],"description":"Add accordion items for collapsible content sections.","apiVersion":3,"textdomain":"zoloblocks","parent":["zolo/accordion"],"supports":{"anchor":false,"customClassName":false},"editorScript":"file:./index.js"}');

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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************************************!*\
  !*** ./src/blocks/accordion-child/index.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/accordion-child/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/accordion-child/block.json");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./src/blocks/accordion-child/context.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/accordion-child/edit.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example */ "./src/blocks/accordion-child/example.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/blocks/accordion-child/save.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4 6.25C2.48122 6.25 1.25 7.48122 1.25 9V15C1.25 16.5188 2.48122 17.75 4 17.75H21C22.5188 17.75 23.75 16.5188 23.75 15V9C23.75 7.48122 22.5188 6.25 21 6.25H4ZM2.75 9C2.75 8.30964 3.30964 7.75 4 7.75H21C21.6904 7.75 22.25 8.30964 22.25 9V15C22.25 15.6904 21.6904 16.25 21 16.25H4C3.30964 16.25 2.75 15.6904 2.75 15V9ZM18.492 11C18.492 10.5858 18.1562 10.25 17.742 10.25C17.3277 10.25 16.992 10.5858 16.992 11V11.4316H16.5473C16.1331 11.4316 15.7973 11.7674 15.7973 12.1816C15.7973 12.5958 16.1331 12.9316 16.5473 12.9316H16.992V13.3632C16.992 13.7774 17.3277 14.1132 17.742 14.1132C18.1562 14.1132 18.492 13.7774 18.492 13.3632V12.9316H18.9409C19.3551 12.9316 19.6909 12.5958 19.6909 12.1816C19.6909 11.7674 19.3551 11.4316 18.9409 11.4316H18.492V11ZM6 11.449C5.58579 11.449 5.25 11.7847 5.25 12.199C5.25 12.6132 5.58579 12.949 6 12.949H12.1599C12.5741 12.949 12.9099 12.6132 12.9099 12.199C12.9099 11.7847 12.5741 11.449 12.1599 11.449H6Z",
        fill: "#2667FF"
      })
    })
  },
  usesContext: _context__WEBPACK_IMPORTED_MODULE_3__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_5__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_6__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map