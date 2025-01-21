/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/star-rating/attributes.js":
/*!**********************************************!*\
  !*** ./src/blocks/star-rating/attributes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/star-rating/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/star-rating/constants/typoPrefixConstant.js");
/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateDimensionAttributes,
  generateNormalBGAttributes,
  generateTypographyAttributes,
  generateResAlignmentAttributies,
  generateBorderAttributies
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
  ...generateResAlignmentAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ITEMS_ALIGN),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.STAR_SIZE),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.TITLE_GAP),
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__)),
  // Icon
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_SIZE),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_PADDING),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_BG),
  rating: {
    type: 'number'
  },
  showTitle: {
    type: 'boolean',
    default: true
  },
  showIcon: {
    type: 'boolean',
    default: false
  },
  iconType: {
    type: 'string',
    default: 'icon'
  },
  iconTypeImage: {
    type: 'object',
    default: {
      id: '',
      url: zoloPlaceholders.placeholder,
      alt: ''
    }
  },
  icon: {
    type: 'attribute',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>'
  },
  imageRes: {
    type: 'string',
    default: 'full'
  },
  objectFit: {
    type: 'string',
    default: 'cover'
  },
  title: {
    type: 'string'
  },
  titleTag: {
    type: 'string',
    default: 'p'
  },
  titleColor: {
    type: 'string'
  },
  titlePosition: {
    type: 'string',
    default: 'top'
  },
  activeStarColor: {
    type: 'string'
  },
  inactiveStarColor: {
    type: 'string'
  },
  iconColor: {
    type: 'string',
    default: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/star-rating/constants/index.js":
/*!***************************************************!*\
  !*** ./src/blocks/star-rating/constants/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   ICON_BG: () => (/* binding */ ICON_BG),
/* harmony export */   ICON_BORDER: () => (/* binding */ ICON_BORDER),
/* harmony export */   ICON_BORDER_RADIUS: () => (/* binding */ ICON_BORDER_RADIUS),
/* harmony export */   ICON_OPTIONS: () => (/* binding */ ICON_OPTIONS),
/* harmony export */   ICON_PADDING: () => (/* binding */ ICON_PADDING),
/* harmony export */   ICON_SIZE: () => (/* binding */ ICON_SIZE),
/* harmony export */   ITEMS_ALIGN: () => (/* binding */ ITEMS_ALIGN),
/* harmony export */   STAR_MARGIN: () => (/* binding */ STAR_MARGIN),
/* harmony export */   STAR_SIZE: () => (/* binding */ STAR_SIZE),
/* harmony export */   TITLE_GAP: () => (/* binding */ TITLE_GAP)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Block Prefix
const BLOCK_PREFIX = 'slide';

// Block Settings
const ITEMS_ALIGN = 'itemsAlign';
const STAR_SIZE = 'starSize';
const STAR_MARGIN = 'starMargin';

// title
const TITLE_GAP = 'titleGap';
//icon
const ICON_SIZE = 'iconSize';
const ICON_BORDER = 'iconBorder';
const ICON_BORDER_RADIUS = 'iconBorderRadius';
const ICON_PADDING = 'iconPadding';
const ICON_BG = 'iconBg';
const ICON_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'zoloblocks'),
  value: 'image'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'zoloblocks'),
  value: 'icon'
}];

/***/ }),

/***/ "./src/blocks/star-rating/constants/typoPrefixConstant.js":
/*!****************************************************************!*\
  !*** ./src/blocks/star-rating/constants/typoPrefixConstant.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TITLE_TYPO: () => (/* binding */ TITLE_TYPO)
/* harmony export */ });
// Button Typography
const TITLE_TYPO = 'titleTypo';

/***/ }),

/***/ "./src/blocks/star-rating/deprecated.js":
/*!**********************************************!*\
  !*** ./src/blocks/star-rating/deprecated.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/star-rating/attributes.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  classArrayToStr,
  DisplayZoloIcon
} = window.zoloModule;
const deprecated = {
  attributes: {
    ..._attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
    rating: {
      type: 'number',
      default: 5
    }
  },
  save: ({
    attributes
  }) => {
    const {
      uniqueId,
      parentClasses,
      showTitle,
      title,
      titleTag,
      rating,
      titlePosition,
      zoloId,
      showIcon,
      iconType,
      icon,
      iconTypeImage,
      imageRes
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(uniqueId, classArrayToStr(parentClasses))
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      ...blockProps,
      ...(zoloId && {
        id: zoloId
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('start-rating-wrapper', titlePosition),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('star-rating-inner', titlePosition),
          children: [showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            tagName: titleTag,
            className: "start-rating-title",
            value: title
          }), showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: `star-rating_inner-icon ${iconType !== 'icon' ? 'zolo-image' : 'zolo-icon'}`,
            children: iconType == 'icon' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
              children: icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DisplayZoloIcon, {
                icon: icon
              })
            }) : iconTypeImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              src: iconTypeImage.sizes && iconTypeImage.sizes[imageRes] ? iconTypeImage.sizes[imageRes].url : iconTypeImage.url,
              alt: iconTypeImage.alt || 'star rating icon',
              className: `wp-image-${iconTypeImage.id}`,
              loading: "lazy"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "zolo-star-rating",
            "data-rating": rating
          })]
        })
      })
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/blocks/star-rating/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/star-rating/edit.js ***!
  \****************************************/
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
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/blocks/star-rating/constants/index.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/blocks/star-rating/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./src/blocks/star-rating/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
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

function Edit(props) {
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
    showTitle,
    title,
    titleTag,
    titlePosition,
    rating,
    showIcon,
    iconType,
    icon,
    iconTypeImage,
    imageRes
  } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    handleUniqueId({
      BLOCK_PREFIX: _constants__WEBPACK_IMPORTED_MODULE_5__.BLOCK_PREFIX,
      uniqueId,
      setAttributes,
      clientId
    });
  }, []);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, `${uniqueId}`, classArrayToStr(parentClasses))
  });

  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.blocks.render.hook.after', [], props);

  // preview image
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: zoloParams.blocksPreview.starRating,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Star Rating Preview', 'zoloblocks')
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
      children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SidebarOpener, {
        clientId: clientId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('start-rating-wrapper', titlePosition),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('star-rating-inner', titlePosition),
          children: [showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
            tagName: titleTag,
            className: "start-rating-title",
            value: title,
            onChange: v => setAttributes({
              title: v
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter title', 'zoloblocks')
          }), showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: `star-rating_inner-icon ${iconType !== 'icon' ? 'zolo-image' : 'zolo-icon'}`,
            children: iconType == 'icon' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(DisplayZoloIcon, {
                icon: icon
              })
            }) : iconTypeImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                src: iconTypeImage.sizes && iconTypeImage.sizes[imageRes] ? iconTypeImage.sizes[imageRes].url : iconTypeImage.url,
                alt: iconTypeImage.alt || 'Star Rating Icon'
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(MediaPlaceholder, {
              icon: "format-image",
              labels: {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Photo', 'zoloblocks'),
                instructions: ''
              },
              onSelect: media => {
                setAttributes({
                  iconTypeImage: {
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(StarRating, {
            rating: rating || 5,
            total: 5
          })]
        })
      }), renderHookAfter && renderHookAfter]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/star-rating/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/star-rating/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/star-rating/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/star-rating/block.json");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/star-rating/deprecated.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/star-rating/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/star-rating/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/star-rating/style.scss");







const {
  BlockIcons
} = window.zoloIcons;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: BlockIcons['star-rating']
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"],
  deprecated: [_deprecated__WEBPACK_IMPORTED_MODULE_3__["default"]]
});

/***/ }),

/***/ "./src/blocks/star-rating/inspector.js":
/*!*********************************************!*\
  !*** ./src/blocks/star-rating/inspector.js ***!
  \*********************************************/
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
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/blocks/star-rating/attributes.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/star-rating/constants/typoPrefixConstant.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/blocks/star-rating/constants/index.js");
/* harmony import */ var _src_global_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/global/constants */ "./src/global/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
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
  TypographyDropdown,
  HeaderTabs,
  TabPanelControl,
  IconicBtnGroup,
  AdvancedOptions,
  ZoloPanelBody,
  ZoloIconPicker,
  ImageAvatar,
  ImageSizes,
  ObjectFitControl,
  ResDimensionsControl,
  BorderControl,
  NormalBGControl
} = window.zoloModule;





function Inspector(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    resMode,
    rating,
    showTitle,
    title,
    titleTag,
    titleColor,
    titlePosition,
    activeStarColor,
    inactiveStarColor,
    showIcon,
    iconType,
    icon,
    iconTypeImage,
    imageRes,
    objectFit,
    iconColor
  } = attributes;
  const requiredProps = {
    attributes,
    setAttributes,
    resMode,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HeaderTabs, {
      block: "zolo/star-rating",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'zoloblocks'),
          firstOpen: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show/hide elements', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Star Title', 'zoloblocks'),
            checked: showTitle,
            onChange: () => setAttributes({
              showTitle: !showTitle
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks'),
            checked: showIcon,
            onChange: () => setAttributes({
              showIcon: !showIcon
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResAlignmentControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alignment', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ITEMS_ALIGN,
            requiredProps: requiredProps,
            alignOptions: _src_global_constants__WEBPACK_IMPORTED_MODULE_6__.FLEX_HORIZONTAL_OPTIONS
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(IconicBtnGroup, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Position', 'zoloblocks'),
            value: titlePosition,
            onChange: value => setAttributes({
              titlePosition: value
            }),
            options: _src_global_constants__WEBPACK_IMPORTED_MODULE_6__.ICON_POSITIONS
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Spacing', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.TITLE_GAP,
            requiredProps: requiredProps,
            min: 0,
            max: 100,
            step: 1
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rating', 'zoloblocks'),
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
            className: "zolo-flex-col-control",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rating', 'zoloblocks'),
            value: rating,
            onChange: v => setAttributes({
              rating: v
            }),
            min: 1,
            max: 5,
            step: 0.1,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default rating value: 5', 'zoloblocks')
          })
        }), showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
            value: title,
            onChange: v => setAttributes({
              title: v
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter title', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tag', 'zoloblocks'),
            value: titleTag,
            options: _src_global_constants__WEBPACK_IMPORTED_MODULE_6__.HEADING,
            onChange: v => {
              setAttributes({
                titleTag: v
              });
            }
          })]
        }), showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "zolo-flex-row-control-tab",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(IconicBtnGroup, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type', 'zoloblocks'),
              value: iconType,
              onChange: value => setAttributes({
                iconType: value
              }),
              options: _constants__WEBPACK_IMPORTED_MODULE_5__.ICON_OPTIONS
            })
          }), iconType === 'icon' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloIconPicker, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zolo-block'),
            value: icon,
            onChange: v => setAttributes({
              icon: v
            })
          }), iconType === 'image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'zoloblocks'),
              className: "zolo-flex-col-control",
              children: iconTypeImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ImageAvatar, {
                imageUrl: iconTypeImage && iconTypeImage.url,
                onDeleteImage: () => setAttributes({
                  iconTypeImage: null
                }),
                imageId: iconTypeImage && iconTypeImage.id,
                onEditImage: media => {
                  setAttributes({
                    iconTypeImage: {
                      id: media.id,
                      url: media.url,
                      alt: media.alt,
                      sizes: media.sizes,
                      caption: media.caption
                    }
                  });
                }
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
                onSelect: media => {
                  setAttributes({
                    iconTypeImage: {
                      id: media.id,
                      url: media.url,
                      alt: media.alt,
                      sizes: media.sizes,
                      caption: media.caption
                    }
                  });
                },
                allowedTypes: ['image'],
                value: iconTypeImage && iconTypeImage.id,
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                  className: "zolo-image-upload-btn",
                  onClick: open,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
                    width: "24",
                    height: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
                      d: "M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"
                    })
                  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(' Upload Photo', 'zoloblocks')]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ImageSizes, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Resolution', 'zoloblocks'),
              value: imageRes,
              onChange: value => setAttributes({
                imageRes: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ObjectFitControl, {
              value: objectFit,
              onChange: objectFit => setAttributes({
                objectFit: objectFit
              })
            })]
          })]
        })]
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Star', 'zoloblocks'),
          firstOpen: true,
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.STAR_SIZE,
            requiredProps: requiredProps,
            min: 1,
            max: 100,
            step: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabPanelControl, {
            options: [{
              value: 'normal',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Active', 'zoloblocks')
            }, {
              value: 'hover',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inactive', 'zoloblocks')
            }],
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stars', 'zoloblocks'),
              color: activeStarColor,
              onChange: color => setAttributes({
                activeStarColor: color
              })
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stars', 'zoloblocks'),
              color: inactiveStarColor,
              onChange: color => setAttributes({
                inactiveStarColor: color
              })
            })
          })]
        }), showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          firstOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: titleColor,
            onChange: color => setAttributes({
              titleColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.TITLE_TYPO,
            requiredProps: requiredProps
          })]
        }), showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: iconType === 'image' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'zoloblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks'),
          panelProps: props,
          stylePanel: true,
          firstOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: iconColor,
            onChange: color => setAttributes({
              iconColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ICON_SIZE,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ICON_BG,
            noMainBGImg: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ICON_PADDING,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ICON_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ICON_BORDER_RADIUS,
            requiredProps: requiredProps
          })]
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps,
          block: "zolo/star-rating"
        })
      })
    })
  }, "controls");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/star-rating/save.js":
/*!****************************************!*\
  !*** ./src/blocks/star-rating/save.js ***!
  \****************************************/
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
    showTitle,
    title,
    titleTag,
    rating,
    titlePosition,
    zoloId,
    showIcon,
    iconType,
    icon,
    iconTypeImage,
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
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('start-rating-wrapper', titlePosition),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('star-rating-inner', titlePosition),
        children: [showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          tagName: titleTag,
          className: "start-rating-title",
          value: title
        }), showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: `star-rating_inner-icon ${iconType !== 'icon' ? 'zolo-image' : 'zolo-icon'}`,
          children: iconType == 'icon' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
            children: icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DisplayZoloIcon, {
              icon: icon
            })
          }) : iconTypeImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
            src: iconTypeImage.sizes && iconTypeImage.sizes[imageRes] ? iconTypeImage.sizes[imageRes].url : iconTypeImage.url,
            alt: iconTypeImage.alt || 'star rating icon',
            className: `wp-image-${iconTypeImage.id}`,
            loading: "lazy"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "zolo-star-rating",
          ...(rating && {
            'data-rating': rating
          })
        })]
      })
    }), renderHookAfter && renderHookAfter]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/star-rating/style.js":
/*!*****************************************!*\
  !*** ./src/blocks/star-rating/style.js ***!
  \*****************************************/
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/blocks/star-rating/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/star-rating/constants/typoPrefixConstant.js");
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
  generateBorderStyle
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
    titleColor,
    activeStarColor,
    inactiveStarColor,
    titlePosition,
    iconColor
  } = attributes;

  // styles
  const {
    desktopAlignStyle: itemsVDeskAlign,
    tabAlignStyle: itemsVTabAlign,
    mobAlignStyle: itemsVMobAlign
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ITEMS_ALIGN,
    property: 'justify-content',
    attributes
  });
  const {
    desktopAlignStyle: ratingVDeskAlign,
    tabAlignStyle: ratingVTabAlign,
    mobAlignStyle: ratingVMobAlign
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ITEMS_ALIGN,
    property: 'align-items',
    attributes
  });
  const {
    desktopAlignStyle: textDeskAlign,
    tabAlignStyle: textTabAlign,
    mobAlignStyle: textMobAlign
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ITEMS_ALIGN,
    property: '',
    attributes
  });
  const {
    desktopRangeStyle: deskGap,
    tabRangeStyle: tabGap,
    mobRangeStyle: mobGap
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TITLE_GAP,
    property: 'gap',
    attributes
  });
  const {
    typoStylesDesktop: titleDeskTypo,
    typoStylesTab: titleTabTypo,
    typoStylesMobile: titleMobTypo
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_3__.TITLE_TYPO,
    attributes
  });

  // Star Rating Style
  const {
    desktopRangeStyle: deskSize,
    tabRangeStyle: tabSize,
    mobRangeStyle: mobSize
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.STAR_SIZE,
    property: 'width',
    attributes
  });
  const {
    desktopRangeStyle: deskHeight,
    tabRangeStyle: tabHeight,
    mobRangeStyle: mobHeight
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.STAR_SIZE,
    property: 'height',
    attributes
  });
  // ICON / IMAGE
  const {
    desktopRangeStyle: deskIconWidth,
    tabRangeStyle: tabIconWidth,
    mobRangeStyle: mobIconWidth
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICON_SIZE,
    property: 'width',
    attributes
  });
  const {
    desktopRangeStyle: deskIconHeight,
    tabRangeStyle: tabIconHeight,
    mobRangeStyle: mobIconHeight
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICON_SIZE,
    property: 'height',
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
    dimensionStylesDesktop: iconPaddingDesktop,
    dimensionStylesTab: iconPaddingTab,
    dimensionStylesMobile: iconPaddingMobile
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICON_PADDING,
    styleFor: 'padding',
    attributes
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
  /**
   * All Style Combination
   */
  const desktopAllStyle = `
        .${uniqueId} .start-rating-wrapper {
            ${itemsVDeskAlign}
            ${textDeskAlign == ':flex-start;' ? 'text-align: left;' : textDeskAlign == ':flex-end;' ? 'text-align: right;' : textDeskAlign == ':center;' ? 'text-align: center;' : ''}
        }
        .${uniqueId} .star-rating-inner {
            ${deskGap}
            ${titlePosition === 'top' || titlePosition === 'bottom' ? ratingVDeskAlign : ''}
        }
        .${uniqueId} .start-rating-title {
            color: ${titleColor};
            ${titleDeskTypo}
        }
        .${uniqueId} .star-rating_inner-icon {
            ${iconBgDesktop}
            ${iconPaddingDesktop}
            ${iconrRadiusDesktop}
            ${iconBorderStylesDesk}
        }
        .${uniqueId} .star-rating_inner-icon .zolo__display-icon svg {
            ${deskIconWidth}
            ${deskIconHeight}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }
        .${uniqueId} .zolo-star-rating svg {
            ${deskSize}
            ${deskHeight}
            ${activeStarColor ? `fill: ${activeStarColor};` : ''}
        }
        .${uniqueId} .zolo-star-rating svg.empty-star {
            ${inactiveStarColor ? `fill: ${inactiveStarColor};` : ''}
        }
    `;
  const tabletAllStyle = `
        .${uniqueId} .start-rating-wrapper {
            ${itemsVTabAlign}
            ${textTabAlign == ':flex-start;' ? 'text-align: left;' : textTabAlign == ':flex-end;' ? 'text-align: right;' : textTabAlign == ':center;' ? 'text-align: center;' : ''}
        }
        .${uniqueId} .star-rating-inner {
            ${tabGap}
            ${titlePosition === 'top' || titlePosition === 'bottom' ? ratingVTabAlign : ''}

        }
        .${uniqueId} .start-rating-title {
            ${titleTabTypo}
        }
            .${uniqueId} .star-rating_inner-icon {
            ${iconBgTab}
            ${iconPaddingTab}
            ${iconrRadiusTab}
            ${iconBorderStylesTab}
        }
        .${uniqueId} .star-rating_inner-icon .zolo__display-icon svg {
            ${tabIconWidth}
            ${tabIconHeight}
        }
        .${uniqueId} .zolo-star-rating svg {
            ${tabSize}
            ${tabHeight}
        }
    `;
  const mobileAllStyle = `
        .${uniqueId} .start-rating-wrapper {
            ${itemsVMobAlign}
            ${textMobAlign == ':flex-start;' ? 'text-align: left;' : textMobAlign == ':flex-end;' ? 'text-align: right;' : textMobAlign == ':center;' ? 'text-align: center;' : ''}
        }
        .${uniqueId} .star-rating-inner {
            ${mobGap}
            ${titlePosition === 'top' || titlePosition === 'bottom' ? ratingVMobAlign : ''}

        }
        .${uniqueId} .start-rating-title {
            ${titleMobTypo}
        }
         .${uniqueId} .star-rating_inner-icon {
            ${iconBgMobile}
            ${iconPaddingMobile}
            ${iconrRadiusMobile}
            ${iconBorderStylesMob}
        }

          .${uniqueId} .star-rating_inner-icon .zolo__display-icon svg {
            ${mobIconWidth}
            ${mobIconHeight}
        }

        .${uniqueId} .zolo-star-rating svg {
            ${mobSize}
            ${mobHeight}
        }
    `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.starRating.desktopAllStyle', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.starRating.tabletAllStyle', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.starRating.mobileAllStyle', mobileAllStyle, props)
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

/***/ "./src/blocks/star-rating/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/star-rating/style.scss ***!
  \*******************************************/
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

/***/ "./src/blocks/star-rating/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/star-rating/block.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Star Rating","name":"zolo/star-rating","category":"zoloblocks","keywords":["rating","star","review","feedback","testimonial"],"description":"Add star ratings to build credibility with visual feedback.","apiVersion":3,"textdomain":"zoloblocks","example":{"attributes":{"preview":true},"viewportWidth":410},"supports":{"anchor":false,"customClassName":false,"align":["wide","full"]},"editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./frontend.js"}');

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
/******/ 			"blocks/star-rating/index": 0,
/******/ 			"blocks/star-rating/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/star-rating/style-index"], () => (__webpack_require__("./src/blocks/star-rating/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map