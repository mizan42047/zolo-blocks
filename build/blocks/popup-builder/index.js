/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/popup-builder/attributes.js":
/*!************************************************!*\
  !*** ./src/blocks/popup-builder/attributes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/popup-builder/constants/index.js");
/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateNormalBGAttributes,
  generateBorderAttributies,
  generateDimensionAttributes
} = window.zoloModule;

const attributes = {
  // global config
  globalConfig: {
    type: 'object',
    default: {
      responsiveControls: true
    }
  },
  popupType: {
    type: 'string',
    default: 'popup_box'
  },
  pushContent: {
    type: 'boolean',
    default: true
  },
  infoBoxPosition: {
    type: 'string',
    default: 'inp_top'
  },
  infiniteRepeat: {
    type: 'boolean',
    default: true
  },
  repetitionNumber: {
    type: 'number',
    default: 1
  },
  popupBoxPosition: {
    type: 'string',
    default: 'pbp_center_center'
  },
  enableOverlay: {
    type: 'boolean',
    default: true
  },
  fixedBackground: {
    type: 'boolean',
    default: true
  },
  isDismissable: {
    type: 'boolean',
    default: true
  },
  closeBtnPosition: {
    type: 'string',
    default: 'cbp_top_right'
  },
  closeBtnSize: {
    type: 'number'
  },
  closeBtnColors: {
    type: 'object',
    default: {
      normal: '',
      hover: ''
    }
  },
  closeBtnId: {
    type: 'string'
  },
  hideOnDesktop: {
    type: 'boolean',
    default: false
  },
  hideOnTablet: {
    type: 'boolean',
    default: false
  },
  hideOnMobile: {
    type: 'boolean',
    default: false
  },
  // New Generators
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.PB_WIDTH),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PB_OVERLAY_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PB_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.PB_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PB_BRADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PB_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PB_MARGIN),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.CLOSE_ICON_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CLOSE_ICON_BRADIUS),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CLOSE_ICON_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CLOSE_ICON_HOVER_BG),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CLOSE_ICON_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CLOSE_ICON_MARGIN)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/popup-builder/constants/index.js":
/*!*****************************************************!*\
  !*** ./src/blocks/popup-builder/constants/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   CB_LEFT_OFFSET: () => (/* binding */ CB_LEFT_OFFSET),
/* harmony export */   CB_RIGHT_OFFSET: () => (/* binding */ CB_RIGHT_OFFSET),
/* harmony export */   CB_TOP_OFFSET: () => (/* binding */ CB_TOP_OFFSET),
/* harmony export */   CLOSE_ICON_BG: () => (/* binding */ CLOSE_ICON_BG),
/* harmony export */   CLOSE_ICON_BORDER: () => (/* binding */ CLOSE_ICON_BORDER),
/* harmony export */   CLOSE_ICON_BRADIUS: () => (/* binding */ CLOSE_ICON_BRADIUS),
/* harmony export */   CLOSE_ICON_HOVER_BG: () => (/* binding */ CLOSE_ICON_HOVER_BG),
/* harmony export */   CLOSE_ICON_MARGIN: () => (/* binding */ CLOSE_ICON_MARGIN),
/* harmony export */   CLOSE_ICON_PADDING: () => (/* binding */ CLOSE_ICON_PADDING),
/* harmony export */   CONTENT_POS: () => (/* binding */ CONTENT_POS),
/* harmony export */   PB_BG: () => (/* binding */ PB_BG),
/* harmony export */   PB_BORDER: () => (/* binding */ PB_BORDER),
/* harmony export */   PB_BRADIUS: () => (/* binding */ PB_BRADIUS),
/* harmony export */   PB_MARGIN: () => (/* binding */ PB_MARGIN),
/* harmony export */   PB_OVERLAY_BG: () => (/* binding */ PB_OVERLAY_BG),
/* harmony export */   PB_PADDING: () => (/* binding */ PB_PADDING),
/* harmony export */   PB_POSITIONS: () => (/* binding */ PB_POSITIONS),
/* harmony export */   PB_WIDTH: () => (/* binding */ PB_WIDTH),
/* harmony export */   POPUP_TYPES: () => (/* binding */ POPUP_TYPES)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


// Block Prefix

const BLOCK_PREFIX = 'container';
const PB_WIDTH = 'pbWidth';
const PB_BORDER = 'pbBorder';
const PB_BRADIUS = 'pbBradius';
const PB_PADDING = 'pbPadding';
const PB_MARGIN = 'pbMargin';
const PB_BG = 'pbBg';
const PB_OVERLAY_BG = 'pbOverlayBg';
const CB_TOP_OFFSET = 'cbTopOffset';
const CB_RIGHT_OFFSET = 'cbRightOffset';
const CB_LEFT_OFFSET = 'cbBottomOffset';

// CLOSE ICON
const CLOSE_ICON_BORDER = 'closeIconBorder';
const CLOSE_ICON_BRADIUS = 'closeIconBradius';
const CLOSE_ICON_BG = 'closeIconBg';
const CLOSE_ICON_HOVER_BG = 'closeIconHoverBg';
const CLOSE_ICON_PADDING = 'closeIconPadding';
const CLOSE_ICON_MARGIN = 'closeIconMargin';
const CONTENT_POS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top', 'zoloblocks'),
  value: 'inp_top',
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
  value: 'inp_bottom',
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
const PB_POSITIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top Left', 'zoloblocks'),
  value: 'pbp_top_left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top Center', 'zoloblocks'),
  value: 'pbp_top_center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top Right', 'zoloblocks'),
  value: 'pbp_top_right'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center Left', 'zoloblocks'),
  value: 'pbp_center_left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center Center', 'zoloblocks'),
  value: 'pbp_center_center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center Right', 'zoloblocks'),
  value: 'pbp_center_right'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom Left', 'zoloblocks'),
  value: 'pbp_bottom_left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom Center', 'zoloblocks'),
  value: 'pbp_bottom_center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom Right', 'zoloblocks'),
  value: 'pbp_bottom_right'
}];
const POPUP_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Info Bar', 'zoloblocks'),
  value: 'info_bar'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Popup Box', 'zoloblocks'),
  value: 'popup_box'
}];

/***/ }),

/***/ "./src/blocks/popup-builder/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/popup-builder/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/blocks/popup-builder/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/blocks/popup-builder/style.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./variations */ "./src/blocks/popup-builder/variations.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * WordPress dependencies
 */





/**
 * Internal depencencies
 */



// register variations


function Edit(props) {
  const {
    attributes,
    setAttributes,
    className,
    isSelected
  } = props;
  const {
    uniqueId,
    popupType,
    popupBoxPosition,
    enableOverlay,
    isDismissable,
    closeBtnPosition,
    closeBtnId
  } = attributes;
  const blockPros = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, uniqueId, popupType, `${enableOverlay ? 'zolo-popup-overlay' : ''}`, `${popupType === 'popup_box' ? popupBoxPosition : ''}`)
  });

  // chech if the innerblocks has child or not
  const hasChildBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getBlockOrder
    } = select('core/block-editor');
    const blockOrder = getBlockOrder(props.clientId);
    return blockOrder.length > 0;
  }, [props.clientId]);

  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.applyFilters)('zolo.blocks.render.hook.after', [], props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      ...blockPros,
      children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('zolo-popup-inner', popupType),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
          templateLock: false,
          renderAppender: hasChildBlocks ? false : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.ButtonBlockAppender,
          template: [['zolo/advanced-image', {
            photo: {
              url: zoloPlaceholders?.popupBg
            }
          }], ['zolo/container', {
            FlexDirectionZRPAlign: 'column',
            TABFlexDirectionZRPAlign: 'column',
            MOBFlexDirectionZRPAlign: 'column',
            zolo_advBtnPaddingTop: '3',
            zolo_advBtnPaddingRight: '4',
            zolo_advBtnPaddingBottom: '3',
            zolo_advBtnPaddingLeft: '4',
            zolo_advBtnPaddingUnit: 'em',
            zolo_advBtnPaddingIsLinked: false
          }, [['zolo/advanced-heading', {
            titleText: 'Welcome to <strong>Our Website</strong>. Grab The <strong>Exclusive</strong> Offer',
            titleAlignZRPAlign: 'center',
            TABtitleAlignZRPAlign: 'center',
            MOBtitleAlignZRPAlign: 'center',
            titleColor: 'rgba(52,53,57,1)',
            zolo_titleFontFamily: 'Inter',
            zolo_titleFontSize: 30,
            zolo_titleFontWeight: '400',
            zolo_titleLineHeight: 1.5
          }], ['zolo/advanced-heading', {
            titleText: 'Sign up for our <em>no hassle</em> one click newsletter and get <strong>10% off</strong> your first purchase.',
            titleTagName: 'p',
            titleAlignZRPAlign: 'center',
            TABtitleAlignZRPAlign: 'center',
            MOBtitleAlignZRPAlign: 'center',
            titleColor: 'rgb(115, 115, 116)',
            zolo_titleFontSize: 16,
            zolo_titleFontFamily: 'Inter',
            zolo_titleFontWeight: '400',
            zolo_titleLineHeight: 1.7
          }], ['zolo/advanced-button', {
            // preset: 'button-1',
            label: 'Grab the Deal',
            iconType: 'iconText',
            iconPosition: 'right',
            buttonAlignmentZRPAlign: 'center',
            zolo_buttonTypographyFontFamily: 'Inter',
            zolo_buttonTypographyFontSize: 15,
            zolo_buttonBorderRadiusLeft: 4,
            zolo_buttonBorderRadiusRight: 4,
            zolo_buttonBorderRadiusTop: 4,
            zolo_buttonBorderRadiusBottom: 4,
            buttonBgbackgroundColor: 'rgba(0,0,0,0.96)',
            mainBoxShadowshadowColor: '#7c7c7c',
            zolo_advBtnMarginTop: 10,
            zolo_advBtnMarginUnit: 'px',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>'
          }]]]]
        }), isDismissable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('zolo-popup-close-btn', closeBtnPosition),
          id: closeBtnId,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("path", {
              d: "M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"
            })
          })
        })]
      }), renderHookAfter && renderHookAfter]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/popup-builder/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/popup-builder/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/popup-builder/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/popup-builder/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/popup-builder/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/popup-builder/editor.scss");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/popup-builder/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/popup-builder/style.scss");







const {
  BlockIcons
} = window.zoloIcons;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: BlockIcons['popup-builder']
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

// Function to hide the block in other post types
const hideBlockInOtherPostTypes = () => {
  const currentPostType = wp.data.select('core/editor')?.getCurrentPostType();

  // Only unregister the block if the current post type is not 'zolo-popup'
  if (currentPostType !== 'zolo-popup') {
    const block = wp.blocks.getBlockType('zolo/popup-builder');
    if (block) {
      wp.blocks.unregisterBlockType('zolo/popup-builder');
    }
  }
};

// Hook into the block editor's ready event with a more efficient subscription
wp.data.subscribe(() => {
  const currentPostType = wp.data.select('core/editor')?.getCurrentPostType();
  if (currentPostType) {
    hideBlockInOtherPostTypes();
  }
});

/***/ }),

/***/ "./src/blocks/popup-builder/inspector.js":
/*!***********************************************!*\
  !*** ./src/blocks/popup-builder/inspector.js ***!
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
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/blocks/popup-builder/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/blocks/popup-builder/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/**
 * WordPress dependencies
 */





/**
 * Internal depencencies
 */
const {
  ResRangeControl,
  HeaderTabs,
  IconicBtnGroup,
  RangeResetControl,
  ZoloPanelBody,
  TabPanelControl,
  ColorControl,
  NormalBGControl,
  BorderControl,
  ResDimensionsControl
} = window.zoloModule;



function Inspector(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    resMode,
    popupType,
    pushContent,
    infoBoxPosition,
    infiniteRepeat,
    popupBoxPosition,
    enableOverlay,
    fixedBackground,
    isDismissable,
    closeBtnPosition,
    closeBtnColors,
    closeBtnId,
    hideOnDesktop,
    hideOnTablet,
    hideOnMobile,
    repetitionNumber,
    closeBtnSize,
    borderHoverColor
  } = attributes;
  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"]
  };
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.useEntityProp)('postType', 'zolo-popup', 'meta');

  // get current post id
  const postId = wp.data.select('core/editor').getCurrentPostId();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setAttributes({
      closeBtnId: `zolo-popup-${postId}`
    });
  }, [postId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setMeta({
      ...meta,
      zolo_popup_repeat_num: repetitionNumber
    });
  }, [repetitionNumber]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HeaderTabs, {
      block: "zolo/container",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('General', 'zoloblocks'),
          panelProps: props,
          firstOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Popup Type', 'zoloblocks'),
            options: _constants__WEBPACK_IMPORTED_MODULE_6__.POPUP_TYPES,
            onChange: v => {
              setAttributes({
                popupType: v
              });
            },
            value: popupType
          }), popupType === 'info_bar' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Push Content', 'zoloblocks'),
            checked: pushContent,
            onChange: () => setAttributes({
              pushContent: !pushContent
            })
          }), popupType === 'info_bar' && !pushContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(IconicBtnGroup, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content Position', 'zoloblocks'),
            value: infoBoxPosition,
            onChange: value => setAttributes({
              infoBoxPosition: value
            }),
            options: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_POS
          })]
        }), popupType === 'popup_box' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Popup Box', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Position', 'zoloblocks'),
            options: _constants__WEBPACK_IMPORTED_MODULE_6__.PB_POSITIONS,
            onChange: v => {
              setAttributes({
                popupBoxPosition: v
              });
            },
            value: popupBoxPosition
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Width', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PB_WIDTH,
            requiredProps: requiredProps,
            min: 0,
            max: 1600,
            step: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Overlay', 'zoloblocks'),
            checked: enableOverlay,
            onChange: () => setAttributes({
              enableOverlay: !enableOverlay
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fixed Background', 'zoloblocks'),
            checked: fixedBackground,
            onChange: () => setAttributes({
              fixedBackground: !fixedBackground
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Repetition', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Infinite Repeat', 'zoloblocks'),
            checked: infiniteRepeat,
            onChange: () => {
              setMeta({
                ...meta,
                zolo_popup_infinite_repeat: !infiniteRepeat
              });
              setAttributes({
                infiniteRepeat: !infiniteRepeat
              });
            }
          }), !infiniteRepeat && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(RangeResetControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Repetition Number', 'zoloblocks'),
            controlName: "repetitionNumber",
            min: 1,
            max: 10,
            step: 1,
            requiredProps: requiredProps
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Close Button', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dismissable', 'zoloblocks'),
            checked: isDismissable,
            onChange: () => setAttributes({
              isDismissable: !isDismissable
            })
          }), isDismissable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Position', 'zoloblocks'),
              options: [{
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top Right', 'zoloblocks'),
                value: 'cbp_top_right'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top Left', 'zoloblocks'),
                value: 'cbp_top_left'
              }],
              onChange: v => {
                setAttributes({
                  closeBtnPosition: v
                });
              },
              value: closeBtnPosition
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "zolo-popup-note",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("b", {
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ID:', 'zoloblocks')
              }), closeBtnId]
            })
          })]
        })]
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: popupType === 'popup_box' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Popup Box', 'zoloblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Info Box', 'zoloblocks'),
          stylePanel: true,
          firstOpen: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PB_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PB_BRADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PB_PADDING,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PB_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PB_BG,
            noMainBGImg: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Popup Overlay', 'zoloblocks')
          }), popupType === 'popup_box' && enableOverlay && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PB_OVERLAY_BG,
            noMainBGImg: true,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background', 'zoloblocks')
          })]
        }), isDismissable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Close Button', 'zoloblocks'),
          stylePanel: true,
          firstOpen: false,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(RangeResetControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Size', 'zoloblocks'),
            controlName: "closeBtnSize",
            min: 1,
            max: 100,
            step: 1,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CLOSE_ICON_BORDER,
            requiredProps: requiredProps,
            hoverControl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'zoloblocks'),
              color: borderHoverColor,
              onChange: value => setAttributes({
                borderHoverColor: value
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CLOSE_ICON_BRADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CLOSE_ICON_PADDING,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CLOSE_ICON_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'zoloblocks'),
                color: closeBtnColors?.normal,
                onChange: value => setAttributes({
                  closeBtnColors: {
                    ...closeBtnColors,
                    normal: value
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CLOSE_ICON_BG,
                noMainBGImg: true
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'zoloblocks'),
                color: closeBtnColors?.hover,
                onChange: value => setAttributes({
                  closeBtnColors: {
                    ...closeBtnColors,
                    hover: value
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CLOSE_ICON_HOVER_BG,
                noMainBGImg: true
              })]
            })
          })]
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive Visibility', 'zoloblocks'),
        panelProps: props,
        firstOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Desktop', 'zoloblocks'),
          checked: hideOnDesktop,
          onChange: () => setAttributes({
            hideOnDesktop: !hideOnDesktop
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Tablet', 'zoloblocks'),
          checked: hideOnTablet,
          onChange: () => setAttributes({
            hideOnTablet: !hideOnTablet
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Mobile', 'zoloblocks'),
          checked: hideOnMobile,
          onChange: () => setAttributes({
            hideOnMobile: !hideOnMobile
          })
        })]
      })
    })
  }, "controls");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/popup-builder/save.js":
/*!******************************************!*\
  !*** ./src/blocks/popup-builder/save.js ***!
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




const Save = props => {
  const {
    attributes
  } = props;
  const {
    uniqueId,
    popupType,
    pushContent,
    infoBoxPosition,
    popupBoxPosition,
    enableOverlay,
    fixedBackground,
    isDismissable,
    closeBtnPosition,
    closeBtnId,
    hideOnDesktop,
    hideOnTablet,
    hideOnMobile
  } = attributes;

  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('zolo.blocks.render.hook.after', [], props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(uniqueId, popupType, 'frontend', `${popupType === 'info_bar' && pushContent ? '' : infoBoxPosition + ' not-push'}`, `${hideOnDesktop ? 'zolo-popup-hod' : ''}`, `${hideOnTablet ? 'zolo-popup-hot' : ''}`, `${hideOnMobile ? 'zolo-popup-hom' : ''}`, `${enableOverlay ? 'zolo-popup-overlay' : ''}`, `${popupType === 'popup_box' ? popupBoxPosition + ' frontend' : ''}`)
    }),
    "data-type": popupType,
    "data-bg-fixed": fixedBackground,
    children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('zolo-popup-inner', popupType),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {}), isDismissable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('zolo-popup-close-btn', closeBtnPosition),
        id: closeBtnId,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            d: "M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"
          })
        })
      })]
    }), renderHookAfter && renderHookAfter]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/popup-builder/style.js":
/*!*******************************************!*\
  !*** ./src/blocks/popup-builder/style.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/blocks/popup-builder/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Internal depencencies
 */
const {
  generateBorderStyle,
  generateNormalBGControlStyles,
  generateResRangeStyle,
  generateDimensionStyle,
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
    closeBtnSize,
    closeBtnColors,
    borderHoverColor
  } = attributes;

  // popup box width
  const {
    desktopRangeStyle: pbWidthDesk,
    tabRangeStyle: pbWidthTab,
    mobRangeStyle: pbWidthMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.PB_WIDTH,
    property: 'width',
    attributes
  });
  const {
    backgroundStylesDesktop: overlayBGDesk,
    backgroundStylesTab: overlayBGTab,
    backgroundStylesMobile: overlayBGMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.PB_OVERLAY_BG,
    attributes,
    noMainBGImg: true
  });
  const {
    backgroundStylesDesktop: pbBgDesk,
    backgroundStylesTab: pbBgTab,
    backgroundStylesMobile: pbBgMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.PB_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    desktopBorderStyle: borderStyles,
    tabBorderStyle: borderStylesTab,
    mobBorderStyle: borderStylesMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.PB_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: borderRadiusDesktop,
    dimensionStylesTab: borderRadiusTab,
    dimensionStylesMobile: borderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.PB_BRADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: paddingDesktop,
    dimensionStylesTab: paddingTab,
    dimensionStylesMobile: paddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.PB_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: marginDesktop,
    dimensionStylesTab: marginTab,
    dimensionStylesMobile: marginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.PB_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // close icon styles
  const {
    desktopBorderStyle: closeIconBorderDesk,
    tabBorderStyle: closeIconBorderTab,
    mobBorderStyle: closeIconBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CLOSE_ICON_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: closeIconBradiusDesk,
    dimensionStylesTab: closeIconBradiusTab,
    dimensionStylesMobile: closeIconBradiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CLOSE_ICON_BRADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    backgroundStylesDesktop: closeIconBgDesk,
    backgroundStylesTab: closeIconBgTab,
    backgroundStylesMobile: closeIconBgMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CLOSE_ICON_BG,
    attributes
  });
  const {
    backgroundStylesDesktop: closeIconHoverBgDesk,
    backgroundStylesTab: closeIconHoverBgTab,
    backgroundStylesMobile: closeIconHoverBgMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CLOSE_ICON_HOVER_BG,
    attributes
  });
  const {
    dimensionStylesDesktop: closeIconPaddingDesk,
    dimensionStylesTab: closeIconPaddingTab,
    dimensionStylesMobile: closeIconPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CLOSE_ICON_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: closeIconMarginDesk,
    dimensionStylesTab: closeIconMarginTab,
    dimensionStylesMobile: closeIconMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CLOSE_ICON_MARGIN,
    styleFor: 'margin',
    attributes
  });

  /**
   * All Style Combination
   */
  const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-popup-builder.zolo-popup-overlay {
            ${overlayBGDesk}
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner.popup_box {
            ${pbWidthDesk}
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner {
            ${pbBgDesk}
            ${borderStyles}
            ${borderRadiusDesktop}
            ${paddingDesktop}
            ${marginDesktop}
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn svg{
            ${closeBtnSize ? `width: ${closeBtnSize}px;` : ''}
            ${closeBtnSize ? `height: ${closeBtnSize}px;` : ''}
            ${closeBtnColors && closeBtnColors?.normal ? `fill: ${closeBtnColors.normal};` : ''} 
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn:hover svg {
            ${closeBtnColors && closeBtnColors?.hover ? `fill: ${closeBtnColors.hover};` : ''} 
        }

        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn {
            ${closeIconBorderDesk}
            ${closeIconBradiusDesk}
            ${closeIconBgDesk}
            ${closeIconPaddingDesk}
            ${closeIconMarginDesk}
        }

        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn:hover {
            ${closeIconHoverBgDesk}
            border-color: ${borderHoverColor ? borderHoverColor : ''};
        }
    `;
  const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner.popup_box {
            ${pbWidthTab}
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner {
            ${pbBgTab}
            ${borderStylesTab}
            ${borderRadiusTab}
            ${paddingTab}
            ${marginTab}
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn {
            ${closeIconBorderTab}
            ${closeIconBradiusTab}
            ${closeIconBgTab}
            ${closeIconPaddingTab}
            ${closeIconMarginTab}
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn:hover {
            ${closeIconHoverBgTab}
        }
    `;
  const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner.popup_box {
            ${pbWidthMob}
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner {
            ${pbBgMob}
            ${borderStylesMob}
            ${borderRadiusMob}
            ${paddingMob}
            ${marginMob}
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn {
            ${closeIconBorderMob}
            ${closeIconBradiusMob}
            ${closeIconBgMob}
            ${closeIconPaddingMob}
            ${closeIconMarginMob}
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn:hover {
            ${closeIconHoverBgMob}
        }
    `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('zolo.container.desktopAllStyle', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('zolo.container.tabletAllStyle', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('zolo.container.mobileAllStyle', mobileAllStyle, props)
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/popup-builder/variations.js":
/*!************************************************!*\
  !*** ./src/blocks/popup-builder/variations.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerBlockVariation
} = wp.blocks;
const popupVariations = [{
  name: 'info_bar',
  title: 'Info Bar',
  description: 'A simple info bar that can be used to display important information to your visitors.',
  icon: 'admin-appearance',
  innerBlocks: [['core/paragraph', {
    placeholder: 'Add your message here...'
  }], ['core/button', {
    text: 'Dismiss',
    url: '#'
  }]]
}, {
  name: 'popup_box',
  title: 'Popup Box',
  description: 'A simple popup box that can be used to display important information to your visitors.',
  icon: 'admin-appearance',
  innerBlocks: [['core/cover']]
}];
registerBlockVariation('zolo/popup-builder', popupVariations);

/***/ }),

/***/ "./src/blocks/popup-builder/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/popup-builder/editor.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/popup-builder/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/popup-builder/style.scss ***!
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

/***/ "./src/blocks/popup-builder/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/popup-builder/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"$schema":"https://schemas.wp.org/trunk/block.json","title":"Popup Builder","name":"zolo/popup-builder","category":"zoloblocks","keywords":["Popup","Modal","Lightbox","Promotion","Lead","Form","builder","subscribe"],"description":"Build customized popups for leads or promotional announcements.","textdomain":"zoloblocks","example":{"attributes":{"preview":true},"viewportWidth":740},"supports":{"anchor":false,"customClassName":false,"align":["wide","full"],"zolo-popup":true},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"blocks/popup-builder/index": 0,
/******/ 			"blocks/popup-builder/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/popup-builder/style-index"], () => (__webpack_require__("./src/blocks/popup-builder/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map