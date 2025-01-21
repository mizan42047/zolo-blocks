/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/image-compare/attributes.js":
/*!************************************************!*\
  !*** ./src/blocks/image-compare/attributes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/image-compare/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/image-compare/constants/typoPrefixConstant.js");
const {
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
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
  //before label
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BEFORE_LABEL_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BEFORE_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BEFORE_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BEFORE_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BEFORE_PADDING),
  //before label
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AFTER_LABEL_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.AFTER_BORDER),
  //typography
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__)),
  //control line
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.LINE_THICKNESS),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.THICKNESS_BG),
  //arrow btn
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_BTN_WIDTH),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_BTN_HEIGHT),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_BTN_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_BTN_RADIUS),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_BTN_BG),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_SIZE),
  // comparison height
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.COMPARISON_HEIGHT),
  beforeImage: {
    type: 'object'
  },
  afterImage: {
    type: 'object'
  },
  comparisonOptions: {
    type: 'object',
    default: {
      showLabels: false,
      disableslide: false,
      handleDraggable: false,
      initialPosition: 50,
      slidePositon: 'horizontal_direction',
      slideOnHover: false,
      beforeLabel: 'before',
      afterLabel: 'after',
      labelPositons: 'v_center',
      HorizontalPosition: 'h_center'
    }
  },
  beforeColor: {
    type: 'string'
  },
  afterColor: {
    type: 'string'
  },
  arrowbtnColor: {
    type: 'string'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/image-compare/constants/index.js":
/*!*****************************************************!*\
  !*** ./src/blocks/image-compare/constants/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AFTER_BORDER: () => (/* binding */ AFTER_BORDER),
/* harmony export */   AFTER_LABEL_BG: () => (/* binding */ AFTER_LABEL_BG),
/* harmony export */   ARROW_BTN_BG: () => (/* binding */ ARROW_BTN_BG),
/* harmony export */   ARROW_BTN_BORDER: () => (/* binding */ ARROW_BTN_BORDER),
/* harmony export */   ARROW_BTN_HEIGHT: () => (/* binding */ ARROW_BTN_HEIGHT),
/* harmony export */   ARROW_BTN_RADIUS: () => (/* binding */ ARROW_BTN_RADIUS),
/* harmony export */   ARROW_BTN_WIDTH: () => (/* binding */ ARROW_BTN_WIDTH),
/* harmony export */   ARROW_SIZE: () => (/* binding */ ARROW_SIZE),
/* harmony export */   BEFORE_BORDER: () => (/* binding */ BEFORE_BORDER),
/* harmony export */   BEFORE_LABEL_BG: () => (/* binding */ BEFORE_LABEL_BG),
/* harmony export */   BEFORE_MARGIN: () => (/* binding */ BEFORE_MARGIN),
/* harmony export */   BEFORE_PADDING: () => (/* binding */ BEFORE_PADDING),
/* harmony export */   BEFORE_RADIUS: () => (/* binding */ BEFORE_RADIUS),
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   CAPTION_ITEM_ALIGNMENT: () => (/* binding */ CAPTION_ITEM_ALIGNMENT),
/* harmony export */   COMPARISON_HEIGHT: () => (/* binding */ COMPARISON_HEIGHT),
/* harmony export */   HOTIZONTAL_POSITIONS: () => (/* binding */ HOTIZONTAL_POSITIONS),
/* harmony export */   LINE_BOX_SHADOW: () => (/* binding */ LINE_BOX_SHADOW),
/* harmony export */   LINE_THICKNESS: () => (/* binding */ LINE_THICKNESS),
/* harmony export */   NORMAL_CONTROL_OPTION: () => (/* binding */ NORMAL_CONTROL_OPTION),
/* harmony export */   NORMAL_TAB_OPTION: () => (/* binding */ NORMAL_TAB_OPTION),
/* harmony export */   SLIDE_POSITION: () => (/* binding */ SLIDE_POSITION),
/* harmony export */   THICKNESS_BG: () => (/* binding */ THICKNESS_BG),
/* harmony export */   VERTICAL_POSITIONS: () => (/* binding */ VERTICAL_POSITIONS)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


// Block Prefix

const BLOCK_PREFIX = 'beaf-slider';
const CAPTION_ITEM_ALIGNMENT = 'captionItemAlignment';
const BEFORE_LABEL_BG = 'beforeLabelBg';
const BEFORE_BORDER = 'beforeBorder';
const BEFORE_RADIUS = 'beforeRadius';
const BEFORE_MARGIN = 'beforeMargin';
const BEFORE_PADDING = 'beforePadding';
//after label
const AFTER_LABEL_BG = 'afterLabelBg';
const AFTER_BORDER = 'afterBorder';
//control line
const LINE_THICKNESS = 'lineThickness';
const THICKNESS_BG = 'thicknessBg';
const LINE_BOX_SHADOW = 'lineBoxShadow';
//Arrow btn
const ARROW_BTN_WIDTH = 'arrowBtnWidth';
const ARROW_BTN_HEIGHT = 'arrowBtnHeight';
const ARROW_BTN_BORDER = 'arrowBtnBorder';
const ARROW_BTN_RADIUS = 'arrowBtnRadius';
const ARROW_BTN_BG = 'arrowBtnBg';
const ARROW_SIZE = 'arrowSize';

// comparison height
const COMPARISON_HEIGHT = 'comparisonHeight';

//slide position option
const SLIDE_POSITION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Horizontal', 'zoloblocks'),
  value: 'horizontal_direction'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical', 'zoloblocks'),
  value: 'vertical_direction'
}];
const NORMAL_TAB_OPTION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal'),
  value: 'normal'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('After'),
  value: 'hover'
}];
const NORMAL_CONTROL_OPTION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Line'),
  value: 'normal'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button'),
  value: 'hover'
}];
const HOTIZONTAL_POSITIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top'),
  value: 'h_top',
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
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center'),
  value: 'h_center',
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
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom'),
  value: 'h_bottom',
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
const VERTICAL_POSITIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left'),
  value: 'v_top',
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
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center'),
  value: 'v_center',
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
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right'),
  value: 'v_bottom',
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

/***/ }),

/***/ "./src/blocks/image-compare/constants/typoPrefixConstant.js":
/*!******************************************************************!*\
  !*** ./src/blocks/image-compare/constants/typoPrefixConstant.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BEFORE_TYPO: () => (/* binding */ BEFORE_TYPO)
/* harmony export */ });
const BEFORE_TYPO = 'beforeTypo';

/***/ }),

/***/ "./src/blocks/image-compare/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/image-compare/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/image-compare/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/blocks/image-compare/style.js");
/* harmony import */ var react_compare_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-compare-slider */ "./node_modules/react-compare-slider/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * WordPress dependencies
 */





/**
 * Internal depencencies
 */

const {
  classArrayToStr,
  SidebarOpener
} = window.zoloModule;


// import style

//


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
    parentClasses,
    beforeImage,
    afterImage,
    comparisonOptions
  } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, uniqueId, classArrayToStr(parentClasses), comparisonOptions?.slidePositon)
  });

  // preview image
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
      src: zoloParams.blocksPreview.imageComparison,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Comparison Preview', 'zoloblocks')
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
      children: [beforeImage && beforeImage.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
          onSelect: media => {
            setAttributes({
              beforeImage: media
            });
          },
          allowedTypes: ['image'],
          value: beforeImage && beforeImage.id,
          render: ({
            open
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
            text: "Before Image",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
              icon: "edit",
              onClick: open
            })
          })
        })
      }), afterImage && afterImage.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
          onSelect: media => {
            setAttributes({
              afterImage: media
            });
          },
          allowedTypes: ['image'],
          value: afterImage && afterImage.id,
          render: ({
            open
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
            text: "After Image",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
              icon: "edit",
              onClick: open
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SidebarOpener, {
        clientId: clientId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(`zolo-image-wrap ${!beforeImage || !afterImage ? 'placeholder' : ''}`),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "zolo-image-left",
          children: [!beforeImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaPlaceholder, {
            onSelect: el => {
              setAttributes({
                beforeImage: el
              });
            },
            onSelectURL: el => setAttributes({
              beforeImage: {
                url: el
              }
            }),
            allowedTypes: ['image'],
            multiple: false,
            labels: {
              title: 'Before Image'
            }
          }), beforeImage && !afterImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
            src: beforeImage?.url,
            alt: beforeImage?.alt,
            width: "400",
            height: "300"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "zolo-image-right",
          children: [!afterImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaPlaceholder, {
            onSelect: el => {
              setAttributes({
                afterImage: el
              });
            },
            onSelectURL: el => setAttributes({
              afterImage: {
                url: el
              }
            }),
            allowedTypes: ['image'],
            multiple: false,
            labels: {
              title: 'After Image'
            }
          }), afterImage && !beforeImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
            src: afterImage?.url,
            alt: afterImage?.alt,
            width: "400",
            height: "300"
          })]
        })]
      }), beforeImage && afterImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_compare_slider__WEBPACK_IMPORTED_MODULE_7__.ReactCompareSlider, {
        changePositionOnHover: comparisonOptions?.slideOnHover,
        portrait: comparisonOptions?.slidePositon === 'vertical_direction' ? true : false,
        disabled: comparisonOptions?.disableslide,
        position: comparisonOptions?.initialPosition,
        onlyHandleDraggable: comparisonOptions?.handleDraggable,
        itemOne: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "image-item-One",
          children: [comparisonOptions?.showLabels && comparisonOptions?.beforeLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: `compare-slider-label compare-slider-label-left ${comparisonOptions?.slidePositon === 'horizontal_direction' ? comparisonOptions?.HorizontalPosition : comparisonOptions?.labelPositons}`,
            children: comparisonOptions?.beforeLabel
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_compare_slider__WEBPACK_IMPORTED_MODULE_7__.ReactCompareSliderImage, {
            src: beforeImage?.url,
            alt: beforeImage?.alt
          })]
        }),
        itemTwo: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "image-item-two",
          children: [comparisonOptions?.showLabels && comparisonOptions?.afterLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: `compare-slider-label compare-slider-label-right ${comparisonOptions?.slidePositon === 'horizontal_direction' ? comparisonOptions?.HorizontalPosition : comparisonOptions?.labelPositons}`,
            children: comparisonOptions?.afterLabel
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_compare_slider__WEBPACK_IMPORTED_MODULE_7__.ReactCompareSliderImage, {
            src: afterImage?.url,
            alt: afterImage?.alt
          })]
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/image-compare/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/image-compare/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/image-compare/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/image-compare/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/image-compare/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/image-compare/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/image-compare/style.scss");






const {
  BlockIcons
} = window.zoloIcons;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: BlockIcons['image-compare']
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/image-compare/inspector.js":
/*!***********************************************!*\
  !*** ./src/blocks/image-compare/inspector.js ***!
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
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/blocks/image-compare/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/blocks/image-compare/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/image-compare/constants/typoPrefixConstant.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Internal depencencies
 */
const {
  ResRangeControl,
  ColorControl,
  HeaderTabs,
  ResDimensionsControl,
  NormalBGControl,
  BorderControl,
  BoxShadowControl,
  TypographyDropdown,
  AdvancedOptions,
  ZoloPanelBody,
  IconicBtnGroup,
  ImageAvatar,
  TabPanelControl
} = window.zoloModule;

/**
 * WordPress depencencies
 */







function Inspector(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    resMode,
    beforeImage,
    afterImage,
    comparisonOptions,
    beforeColor,
    afterColor,
    arrowbtnColor
  } = attributes;
  const requiredProps = {
    attributes,
    setAttributes,
    resMode,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(HeaderTabs, {
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'zoloblocks'),
          firstOpen: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-custom-heading",
            style: {
              border: 0,
              paddingTop: 0
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Images', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before', 'zoloblocks'),
            className: "zolo-flex-col-control",
            children: beforeImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ImageAvatar, {
              imageUrl: beforeImage?.url,
              onDeleteImage: () => setAttributes({
                beforeImage: null
              }),
              imageId: beforeImage && beforeImage.id,
              onEditImage: media => setAttributes({
                beforeImage: media
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
              onSelect: media => {
                setAttributes({
                  beforeImage: media
                });
              },
              allowedTypes: ['image'],
              value: beforeImage && beforeImage.id,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                className: "zolo-image-upload-btn",
                onClick: open,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                  width: "24",
                  height: "24",
                  xmlns: "http://www.w3.org/2000/svg",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                    d: "M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"
                  })
                }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(' Upload Photo', 'zoloblocks')]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After', 'zoloblocks'),
            className: "zolo-flex-col-control",
            children: afterImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ImageAvatar, {
              imageUrl: afterImage?.url,
              onDeleteImage: () => setAttributes({
                afterImage: null
              }),
              imageId: afterImage && afterImage.id,
              onEditImage: media => setAttributes({
                afterImage: media
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
              onSelect: media => {
                setAttributes({
                  afterImage: media
                });
              },
              allowedTypes: ['image'],
              value: afterImage && afterImage.id,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                className: "zolo-image-upload-btn",
                onClick: open,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                  width: "24",
                  height: "24",
                  xmlns: "http://www.w3.org/2000/svg",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                    d: "M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"
                  })
                }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(' Upload Photo', 'zoloblocks')]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show/Hide Elements', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Labels', 'zoloblocks'),
            checked: comparisonOptions?.showLabels,
            onChange: () => setAttributes({
              comparisonOptions: {
                ...comparisonOptions,
                showLabels: !comparisonOptions?.showLabels
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Disable Slide Behavior', 'zoloblocks'),
            checked: comparisonOptions?.disableslide,
            onChange: () => setAttributes({
              comparisonOptions: {
                ...comparisonOptions,
                disableslide: !comparisonOptions?.disableslide
              }
            })
          }), !comparisonOptions?.disableslide && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Only Handle Draggable', 'zoloblocks'),
            checked: comparisonOptions?.handleDraggable,
            onChange: () => setAttributes({
              comparisonOptions: {
                ...comparisonOptions,
                handleDraggable: !comparisonOptions?.handleDraggable
              }
            })
          }), !comparisonOptions?.disableslide && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slide on Hover', 'zoloblocks'),
            checked: comparisonOptions?.slideOnHover,
            onChange: () => setAttributes({
              comparisonOptions: {
                ...comparisonOptions,
                slideOnHover: !comparisonOptions?.slideOnHover
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-flex-col-control",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Initial Position', 'zoloblocks'),
              value: comparisonOptions?.initialPosition,
              onChange: v => {
                setAttributes({
                  comparisonOptions: {
                    ...comparisonOptions,
                    initialPosition: v
                  }
                });
              },
              min: 0,
              max: 100
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-flex-row-control-tab",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(IconicBtnGroup, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Direction', 'zoloblocks'),
              value: comparisonOptions?.slidePositon,
              onChange: value => setAttributes({
                comparisonOptions: {
                  ...comparisonOptions,
                  slidePositon: value
                }
              }),
              options: _constants__WEBPACK_IMPORTED_MODULE_4__.SLIDE_POSITION
            })
          })]
        }), comparisonOptions?.showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Labels', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before Label'),
            value: comparisonOptions?.beforeLabel,
            onChange: v => setAttributes({
              comparisonOptions: {
                ...comparisonOptions,
                beforeLabel: v
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After Label'),
            value: comparisonOptions?.afterLabel,
            onChange: v => setAttributes({
              comparisonOptions: {
                ...comparisonOptions,
                afterLabel: v
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), comparisonOptions?.slidePositon === 'horizontal_direction' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-flex-row-control-tab",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(IconicBtnGroup, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Position', 'zoloblocks'),
              value: comparisonOptions?.HorizontalPosition,
              onChange: value => setAttributes({
                comparisonOptions: {
                  ...comparisonOptions,
                  HorizontalPosition: value
                }
              }),
              options: _constants__WEBPACK_IMPORTED_MODULE_4__.HOTIZONTAL_POSITIONS
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-flex-row-control-tab",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(IconicBtnGroup, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Position', 'zoloblocks'),
              value: comparisonOptions?.labelPositons,
              onChange: value => setAttributes({
                comparisonOptions: {
                  ...comparisonOptions,
                  labelPositons: value
                }
              }),
              options: _constants__WEBPACK_IMPORTED_MODULE_4__.VERTICAL_POSITIONS
            })
          })]
        })]
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Item', 'zoloblocks'),
          firstOpen: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Height', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.COMPARISON_HEIGHT,
            requiredProps: requiredProps,
            min: 50,
            max: 1000,
            step: 1
          })
        }), comparisonOptions?.showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Labels', 'zoloblocks'),
          firstOpen: false,
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanelControl, {
            options: _constants__WEBPACK_IMPORTED_MODULE_4__.NORMAL_TAB_OPTION,
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: beforeColor,
                onChange: value => setAttributes({
                  beforeColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.BEFORE_TYPO,
                requiredProps: requiredProps,
                max: 36
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.BEFORE_LABEL_BG,
                noOverlay: true,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.BEFORE_PADDING,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.BEFORE_MARGIN,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.BEFORE_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.BEFORE_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: afterColor,
                onChange: value => setAttributes({
                  afterColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AFTER_LABEL_BG,
                noOverlay: true,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AFTER_BORDER,
                requiredProps: requiredProps
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Control', 'zoloblocks'),
          firstOpen: false,
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thickness', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.LINE_THICKNESS,
                requiredProps: requiredProps,
                min: 0,
                max: 100,
                step: 1
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.THICKNESS_BG,
                noOverlay: true,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BoxShadowControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Box Shadow', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.LINE_BOX_SHADOW,
                requiredProps: requiredProps
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "zolo-custom-heading",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow', 'zoloblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ARROW_SIZE,
                requiredProps: requiredProps,
                min: 0,
                max: 100,
                step: 1
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: arrowbtnColor,
                onChange: value => setAttributes({
                  arrowbtnColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ARROW_BTN_BG,
                noOverlay: true,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Width', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ARROW_BTN_WIDTH,
                requiredProps: requiredProps,
                min: 0,
                max: 100,
                step: 1
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Height', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ARROW_BTN_HEIGHT,
                requiredProps: requiredProps,
                min: 0,
                max: 100,
                step: 1
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ARROW_BTN_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.ARROW_BTN_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }),
            options: _constants__WEBPACK_IMPORTED_MODULE_4__.NORMAL_CONTROL_OPTION
          })
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(AdvancedOptions, {
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

/***/ "./src/blocks/image-compare/save.js":
/*!******************************************!*\
  !*** ./src/blocks/image-compare/save.js ***!
  \******************************************/
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
/**
 * Internal depencencies
 */
const {
  classArrayToStr
} = window.zoloModule;



const Save = ({
  attributes
}) => {
  const {
    uniqueId,
    parentClasses,
    preset,
    zoloId,
    beforeImage,
    afterImage,
    comparisonOptions
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(preset, uniqueId, classArrayToStr(parentClasses), comparisonOptions?.slidePositon)
    }),
    ...(zoloId && {
      id: zoloId
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "beaf-slider",
      "data-comparisonoptions": JSON.stringify(comparisonOptions),
      "data-beforeimage": JSON.stringify(beforeImage),
      "data-afterimage": JSON.stringify(afterImage)
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/image-compare/style.js":
/*!*******************************************!*\
  !*** ./src/blocks/image-compare/style.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/blocks/image-compare/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/image-compare/constants/typoPrefixConstant.js");
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
  generateResCounterStyle,
  generateDimensionStyle,
  generateBoxShadowStyles,
  generateTypographyStyles,
  generateGapStyle,
  GlobalStyleHanlder,
  generateNormalBGControlStyles,
  generateResAlignmentStyle,
  generateTextStrokeStyles
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
    arrowbtnColor,
    labelOpacity,
    beforeColor,
    afterColor,
    comparisonOptions
  } = attributes;

  // comparison height
  const {
    desktopRangeStyle: desktopComparisonHeight,
    tabRangeStyle: tabComparisonHeight,
    mobRangeStyle: mobComparisonHeight
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.COMPARISON_HEIGHT,
    property: 'height',
    attributes
  });

  //before Label
  const {
    backgroundStylesDesktop: DeskbeforeBg,
    backgroundStylesTab: TabbeforeLBg,
    backgroundStylesMobile: MobeforeLtBg
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BEFORE_LABEL_BG,
    attributes
  });
  const {
    typoStylesDesktop: DesktopbeforeTypo,
    typoStylesTab: TabbeforeTypo,
    typoStylesMobile: MobbeforeTypo
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.BEFORE_TYPO,
    attributes
  });
  const {
    desktopBorderStyle: desktopbeforeBorder,
    tabBorderStyle: tabbeforeBorder,
    mobBorderStyle: mobbeforeBorder
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BEFORE_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: DesktopbeforeRadius,
    dimensionStylesTab: TabbeforeRadius,
    dimensionStylesMobile: MobbeforeRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BEFORE_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: DesktopbeforeMargin,
    dimensionStylesTab: TabbeforeMargin,
    dimensionStylesMobile: MobbeforeMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BEFORE_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: Desktopbeforepadding,
    dimensionStylesTab: Tabbeforepadding,
    dimensionStylesMobile: Mobbeforepadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.BEFORE_PADDING,
    styleFor: 'padding',
    attributes
  });

  //after Label
  const {
    backgroundStylesDesktop: DeskafterBg,
    backgroundStylesTab: TabafterBg,
    backgroundStylesMobile: MobaftertBg
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.AFTER_LABEL_BG,
    attributes
  });
  const {
    desktopBorderStyle: desktopafterBorder,
    tabBorderStyle: tabafterBorder,
    mobBorderStyle: mobafterBorder
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.AFTER_BORDER,
    attributes
  });

  //line control
  const {
    desktopRangeStyle: desktopLineThick,
    tabRangeStyle: tabLineThick,
    mobRangeStyle: mobLineThick
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.LINE_THICKNESS,
    property: `${comparisonOptions?.slidePositon === 'horizontal_direction' ? 'width' : 'height'}`,
    attributes
  });
  const {
    backgroundStylesDesktop: DesLineConkBg,
    backgroundStylesTab: TabLineConBg,
    backgroundStylesMobile: MobLineConBg
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.THICKNESS_BG,
    attributes
  });
  const {
    boxShadowStyle: boxshadowLineShadow
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.LINE_BOX_SHADOW,
    attributes
  });

  //arrow Button
  const {
    desktopRangeStyle: desktopArrowWidth,
    tabRangeStyle: tabArrowWidth,
    mobRangeStyle: mobArrowWidth
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_BTN_WIDTH,
    property: 'width',
    attributes
  });
  const {
    desktopRangeStyle: desktopArrowHeight,
    tabRangeStyle: tabArrowHeight,
    mobRangeStyle: mobArrowHeight
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_BTN_HEIGHT,
    property: 'height',
    attributes
  });
  const {
    desktopRangeStyle: desktopArrowSizetop,
    tabRangeStyle: tabArrowSizetop,
    mobRangeStyle: mobArrowSizetop
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_SIZE,
    property: 'border-top-width',
    attributes
  });
  const {
    desktopRangeStyle: desktopArrowSizeRight,
    tabRangeStyle: tabArrowSizeRight,
    mobRangeStyle: mobArrowSizeRight
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_SIZE,
    property: 'border-right-width',
    attributes
  });
  const {
    desktopRangeStyle: desktopArrowSizeBottom,
    tabRangeStyle: tabArrowSizeBottom,
    mobRangeStyle: mobArrowSizeBottom
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_SIZE,
    property: 'border-bottom-width',
    attributes
  });
  const {
    desktopBorderStyle: desktopArrowBorder,
    tabBorderStyle: tabArrowBorder,
    mobBorderStyle: mobArrowBorder
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_BTN_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: DesktopArrowRadius,
    dimensionStylesTab: TabArrowRadius,
    dimensionStylesMobile: MobArrowRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_BTN_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    backgroundStylesDesktop: DeskbArrowBg,
    backgroundStylesTab: TabbArrowBg,
    backgroundStylesMobile: MobArrowtBg
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_BTN_BG,
    attributes
  });

  /**
   * All Style Combination
   */
  const desktopAllStyle = `
    .wp-block-zolo-image-compare.${uniqueId} .image-item-One,.wp-block-zolo-image-compare.${uniqueId} .image-item-Two {
        ${desktopComparisonHeight}
    }
    .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label {
        opacity: ${labelOpacity}
    }
    .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-left,.wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-right{
         ${beforeColor && `color:${beforeColor}`};
         ${DeskbeforeBg}
         ${desktopbeforeBorder}
         ${DesktopbeforeTypo}
         ${DesktopbeforeRadius}
         ${DesktopbeforeMargin}
         ${Desktopbeforepadding}
    }
   .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-right {
         ${afterColor && `color:${afterColor}`};
         ${DeskafterBg}
         ${desktopafterBorder}
   }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-line{
        ${desktopLineThick.replace(';', '!important')};
        ${boxshadowLineShadow.replace(';', '!important')};
        ${DesLineConkBg.replace(';', '!important')}
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-arrow {
        ${arrowbtnColor && `color:${arrowbtnColor}`};
        ${desktopArrowSizetop.replace(';', '!important')};
        ${desktopArrowSizeRight.replace(';', '!important')};
        ${desktopArrowSizeBottom.replace(';', '!important')};
          
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-button {
        ${desktopArrowWidth.replace(';', '!important')};
        ${desktopArrowHeight.replace(';', '!important')};
        ${desktopArrowBorder.replace(/;(?=\s|$)/g, ' !important;')};
        ${DesktopArrowRadius.replace(';', '!important')};
        ${DeskbArrowBg.replace(';', '!important')};
    }
   
  	`;
  const tabletAllStyle = `
    .wp-block-zolo-image-compare.${uniqueId} .image-item-One,.wp-block-zolo-image-compare.${uniqueId} .image-item-Two {
        ${tabComparisonHeight}
    }
    .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-left,.wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-right{
         ${TabbeforeLBg}
         ${TabbeforeTypo}
         ${tabbeforeBorder}
         ${TabbeforeRadius}
         ${TabbeforeMargin}
         ${Tabbeforepadding}
    }
    .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-right {
         ${TabafterBg}
         ${tabafterBorder}  
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-line{
        ${tabLineThick.replace(';', '!important')};
        ${TabLineConBg.replace(';', '!important')}
       
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-arrow {
        ${tabArrowSizetop.replace(';', '!important')};
        ${tabArrowSizeRight.replace(';', '!important')};
        ${tabArrowSizeBottom.replace(';', '!important')};      
    }
     .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-button {
         ${tabArrowWidth.replace(';', '!important')};
         ${tabArrowHeight.replace(';', '!important')};
         ${tabArrowBorder.replace(/;(?=\s|$)/g, ' !important;')}
         ${TabArrowRadius.replace(';', '!important')};
         ${TabbArrowBg.replace(';', '!important')};  
     }
	`;
  const mobileAllStyle = `
    .wp-block-zolo-image-compare.${uniqueId} .image-item-One,.wp-block-zolo-image-compare.${uniqueId} .image-item-Two {
        ${mobComparisonHeight}
    }
    .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-left,.wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-right{
         ${MobeforeLtBg}
         ${MobbeforeTypo}
         ${mobbeforeBorder}
         ${MobbeforeRadius}
         ${MobbeforeMargin}
         ${Mobbeforepadding}
    }
    .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-right {
         ${MobaftertBg}
         ${mobafterBorder}
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-line{
        ${mobLineThick.replace(';', '!important')};
        ${MobLineConBg.replace(';', '!important')}
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-arrow {
        ${mobArrowSizetop.replace(';', '!important')};
        ${mobArrowSizeRight.replace(';', '!important')};
        ${mobArrowSizeBottom.replace(';', '!important')};    
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-button {
         ${mobArrowWidth.replace(';', '!important')};
         ${mobArrowHeight.replace(';', '!important')};
         ${mobArrowBorder.replace(/;(?=\s|$)/g, ' !important;')}
         ${MobArrowRadius.replace(';', '!important')};
         ${MobArrowtBg.replace(';', '!important')};
     }
  	`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.imageCompare.desktopAllStyle', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.imageCompare.tabletAllStyle', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.imageCompare.mobileAllStyle', mobileAllStyle, props)
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/image-compare/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/image-compare/style.scss ***!
  \*********************************************/
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

/***/ "./node_modules/react-compare-slider/dist/index.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/react-compare-slider/dist/index.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactCompareSlider: () => (/* binding */ se),
/* harmony export */   ReactCompareSliderHandle: () => (/* binding */ F),
/* harmony export */   ReactCompareSliderImage: () => (/* binding */ ae),
/* harmony export */   styleFitContainer: () => (/* binding */ G),
/* harmony export */   useReactCompareSliderRef: () => (/* binding */ _e)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client"
;var B=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({transition:e,...t},r)=>{let o={position:"absolute",top:0,left:0,width:"100%",height:"100%",transition:e?`clip-path ${e}`:void 0,userSelect:"none",willChange:"clip-path, transition",KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"};return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...t,style:o,"data-rcs":"clip-item",ref:r})});B.displayName="ContainerClip";var W=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({children:e,disabled:t,portrait:r,position:o,transition:i},m)=>{let u={position:"absolute",top:0,width:r?"100%":void 0,height:r?void 0:"100%",background:"none",border:0,padding:0,pointerEvents:"all",appearance:"none",WebkitAppearance:"none",MozAppearance:"none",outline:0,transform:r?"translate3d(0, -50% ,0)":"translate3d(-50%, 0, 0)",transition:i?`${r?"top":"left"} ${i}`:void 0};return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{ref:m,"aria-label":"Drag to move or focus and use arrow keys","aria-orientation":r?"vertical":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":o,"data-rcs":"handle-container",disabled:t,role:"slider",style:u,children:e})});W.displayName="ThisHandleContainer";var re=({flip:e})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"__rcs-handle-arrow",style:{width:0,height:0,borderTop:"8px solid transparent",borderRight:"10px solid",borderBottom:"8px solid transparent",transform:e?"rotate(180deg)":void 0}}),F=({className:e="__rcs-handle-root",disabled:t,buttonStyle:r,linesStyle:o,portrait:i,style:m,...C})=>{let u={display:"flex",flexDirection:i?"row":"column",placeItems:"center",height:"100%",cursor:t?"not-allowed":i?"ns-resize":"ew-resize",pointerEvents:"none",color:"#fff",...m},E={flexGrow:1,height:i?2:"100%",width:i?"100%":2,backgroundColor:"currentColor",pointerEvents:"auto",boxShadow:"0 0 4px rgba(0,0,0,.5)",...o},y={display:"grid",gridAutoFlow:"column",gap:8,placeContent:"center",flexShrink:0,width:56,height:56,borderRadius:"50%",borderStyle:"solid",borderWidth:2,pointerEvents:"auto",backdropFilter:"blur(7px)",WebkitBackdropFilter:"blur(7px)",backgroundColor:"rgba(0, 0, 0, 0.125)",boxShadow:"0 0 4px rgba(0,0,0,.35)",transform:i?"rotate(90deg)":void 0,...r};return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{...C,className:e,style:u,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"__rcs-handle-line",style:E}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"__rcs-handle-button",style:y,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(re,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(re,{flip:!0})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"__rcs-handle-line",style:E})]})};var $=(i=>(i.ARROW_LEFT="ArrowLeft",i.ARROW_RIGHT="ArrowRight",i.ARROW_UP="ArrowUp",i.ARROW_DOWN="ArrowDown",i))($||{}),G=({boxSizing:e="border-box",objectFit:t="cover",objectPosition:r="center center",...o}={})=>({display:"block",width:"100%",height:"100%",maxWidth:"100%",boxSizing:e,objectFit:t,objectPosition:r,...o}),oe=e=>{let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{t.current=e}),t.current},U=(e,t,r,o)=>{let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{i.current=t},[t]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!(r&&r.addEventListener))return;let m=C=>i.current&&i.current(C);return r.addEventListener(e,m,o),()=>{r.removeEventListener(e,m,o)}},[e,r,o])},Te=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect,ie=(e,t)=>{let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{e.current&&r.current&&r.current.observe(e.current)},[e]);Te(()=>(r.current=new ResizeObserver(([i])=>t(i.contentRect)),o(),()=>{r.current&&r.current.disconnect()}),[t,o])};var I={capture:!1,passive:!0},X={capture:!0,passive:!1},Me=e=>{e.preventDefault(),e.currentTarget.focus()},se=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({boundsPadding:e=0,browsingContext:t=globalThis,changePositionOnHover:r=!1,disabled:o=!1,handle:i,itemOne:m,itemTwo:C,keyboardIncrement:u="5%",onlyHandleDraggable:E=!1,onPositionChange:y,portrait:a=!1,position:g=50,style:le,transition:ce,...pe},de)=>{let p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),j=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(g),[L,q]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[me,x]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),w=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),[ue,fe]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),J=oe(g),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function({x:s,y:c,isOffset:R}){let b=p.current,A=f.current,D=j.current,{width:h,height:S,left:Pe,top:Ee}=b.getBoundingClientRect();if(h===0||S===0)return;let ye=a?R?c-Ee-t.scrollY:c:R?s-Pe-t.scrollX:s,Q=Math.min(Math.max(ye/(a?S:h)*100,0),100),z=a?S/(b.offsetHeight||1):h/(b.offsetWidth||1),Z=e*z/(a?S:h)*100,_=Math.min(Math.max(Q,Z*z),100-Z*z);d.current=Q,A.setAttribute("aria-valuenow",`${Math.round(d.current)}`),A.style.top=a?`${_}%`:"0",A.style.left=a?"0":`${_}%`,D.style.clipPath=a?`inset(${_}% 0 0 0)`:`inset(0 0 0 ${_}%)`,y&&y(d.current)},[e,y,a,t]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let{width:n,height:s}=p.current.getBoundingClientRect(),c=g===J?d.current:g;l({x:n/100*c,y:s/100*c})},[e,g,a,J,l]);let Re=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(n=>{n.preventDefault(),!(o||n.button!==0)&&(l({isOffset:!0,x:n.pageX,y:n.pageY}),q(!0),x(!0))},[o,l]),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(s){l({isOffset:!0,x:s.pageX,y:s.pageY}),x(!1)},[l]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{q(!1),x(!0)},[]),Se=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({width:n,height:s})=>{let{width:c,height:R}=p.current.getBoundingClientRect();l({x:n/100*d.current*c/n,y:s/100*d.current*R/s})},[l]),Ce=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(n=>{if(!Object.values($).includes(n.key))return;n.preventDefault(),x(!0);let{top:s,left:c}=f.current.getBoundingClientRect(),{width:R,height:b}=p.current.getBoundingClientRect(),D=typeof u=="string"?parseFloat(u):u/R*100,h=a?n.key==="ArrowLeft"||n.key==="ArrowDown":n.key==="ArrowRight"||n.key==="ArrowUp",S=Math.min(Math.max(h?d.current+D:d.current-D,0),100);l({x:a?c:R*S/100,y:a?b*S/100:s})},[u,a,l]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{fe(E?f.current:p.current)},[E]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let n=p.current,s=()=>{L||T()};return r&&(n.addEventListener("pointermove",v,I),n.addEventListener("pointerleave",s,I)),()=>{n.removeEventListener("pointermove",v),n.removeEventListener("pointerleave",s)}},[r,v,T,L]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(L&&!w.current&&(t.addEventListener("pointermove",v,I),t.addEventListener("pointerup",T,I),w.current=!0),()=>{w.current&&(t.removeEventListener("pointermove",v),t.removeEventListener("pointerup",T),w.current=!1)}),[v,T,L,t]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(de,()=>({rootContainer:p.current,handleContainer:f.current,setPosition(n){let{width:s,height:c}=p.current.getBoundingClientRect();l({x:s/100*n,y:c/100*n})}}),[l]),ie(p,Se),U("keydown",Ce,f.current,X),U("click",Me,f.current,X),U("pointerdown",Re,ue,X);let ve=i||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(F,{disabled:o,portrait:a}),K=me?ce:void 0,he={position:"relative",display:"flex",overflow:"hidden",cursor:L?a?"ns-resize":"ew-resize":void 0,touchAction:"none",userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",...le};return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{...pe,ref:p,style:he,"data-rcs":"root",children:[m,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(B,{ref:j,transition:K,children:C}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(W,{disabled:o,portrait:a,position:Math.round(d.current),ref:f,transition:K,children:ve})]})});se.displayName="ReactCompareSlider";var ae=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({style:e,...t},r)=>{let o=G(e);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{ref:r,...t,style:o,"data-rcs":"image"})});ae.displayName="ReactCompareSliderImage";var _e=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({rootContainer:null,handleContainer:null,setPosition:()=>console.warn("[react-compare-slider] `setPosition` cannot be used until the component has mounted.")});
//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./src/blocks/image-compare/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/image-compare/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Image Compare","name":"zolo/image-compare","category":"zoloblocks","keywords":["beaf","after","compare","image","slider","before","comparison","reveal","overlay"],"description":"Compare images side-by-side with a responsive slider.","apiVersion":3,"textdomain":"zoloblocks","example":{"attributes":{"preview":true},"viewportWidth":410},"supports":{"anchor":false,"customClassName":false,"align":["wide","full"]},"editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./frontend.js"}');

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
/******/ 			"blocks/image-compare/index": 0,
/******/ 			"blocks/image-compare/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/image-compare/style-index"], () => (__webpack_require__("./src/blocks/image-compare/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map