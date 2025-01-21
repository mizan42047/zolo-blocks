/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/image-gallery/attributes.js":
/*!************************************************!*\
  !*** ./src/blocks/image-gallery/attributes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/image-gallery/constants/typoPrefixConstant.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/blocks/image-gallery/constants/index.js");
const {
  generateTypographyAttributes,
  generateResRangeAttributies,
  generateNormalBGAttributes,
  generateDimensionAttributes,
  generateBorderAttributies,
  generateBoxShadowAttributies,
  generateResCounterAttributies,
  generateGapAttributes
} = window.zoloModule;


const attributes = {
  //Common Attributes
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
  headingColor: {
    type: 'string'
  },
  imageSize: {
    type: 'string',
    default: 'full'
  },
  // Container
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_BACKGROUND),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_HOVER_BACKGROUND),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_PADDING),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_BORDER),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_HOVER_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_BORDER_RADIUS),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_BOX_SHADOW),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_HOVER_BOX_SHADOW),
  // Image
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_BACKGROUND),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_HOVER_BACKGROUND),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_BORDER_RADIUS),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_BOX_SHADOW),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_HOVER_BOX_SHADOW),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_PADDING),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_HEIGHT),
  // Heading
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.HEADING_BORDER),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.HEADING_BACKGROUND),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.HEADING_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.HEADING_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.HEADING_BORDER_RADIUS),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.HEADING_BOX_SHADOW),
  // Sub Title
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.TITLE_MARGIN),
  // Content
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_BORDER),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_BACKGROUND),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_BORDER_RADIUS),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_BOX_SHADOW),
  // Zoom Icon
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_BORDER_RADIUS),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_BORDER),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_BOX_SHADOW),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_HOVER_BOX_SHADOW),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_BG_COLOR),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_BG_HOVER_COLOR),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_SIZE),
  // Column Count
  ...generateResCounterAttributies(_constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN_COUNT, {
    deskRange: 3,
    tabRange: 2,
    mobRange: 1
  }),
  //Columns Gaps
  ...generateGapAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN_GAP, {
    defaultUnit: 'px'
  }),
  //Typography
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_0__)),
  //Overlay BG
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_1__.OVERLAY_BG_COLOR),
  //Block specific Attributes
  advancedGallery: {
    type: 'array',
    default: [{
      id: '',
      url: zoloPlaceholders.placeholder,
      alt: ''
    }, {
      id: '',
      url: zoloPlaceholders.placeholderTwo,
      alt: ''
    }, {
      id: '',
      url: zoloPlaceholders.placeholderThree,
      alt: ''
    }, {
      id: '',
      url: zoloPlaceholders.placeholderFour,
      alt: ''
    }, {
      id: '',
      url: zoloPlaceholders.placeholderFive,
      alt: ''
    }, {
      id: '',
      url: zoloPlaceholders.placeholderSix,
      alt: ''
    }]
  },
  showCaption: {
    type: 'boolean',
    default: true
  },
  showTitle: {
    type: 'boolean',
    default: true
  },
  showLightbox: {
    type: 'boolean',
    default: true
  },
  lightboxIcon: {
    type: 'string',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg>'
  },
  entranceAnimation: {
    type: 'string',
    default: 'zolo-zoom-up'
  },
  showLightboxThumb: {
    type: 'boolean',
    default: true
  },
  showThumbCaption: {
    type: 'boolean',
    default: true
  },
  zoomIconColor: {
    type: 'string'
  },
  zoomIconHoverBorderColor: {
    type: 'string'
  },
  zoomIconHoverColor: {
    type: 'string'
  },
  presetOneStyles: {
    type: 'object',
    default: {
      iconPosition: 'left',
      buttonPosition: 'left',
      buttonIconPosition: 'row-reverse'
    }
  },
  presetTwoStyles: {
    type: 'object',
    default: {
      iconPosition: 'top',
      buttonPosition: 'left',
      buttonIconPosition: 'row-reverse'
    }
  },
  imageHoverBorderColor: {
    type: 'string'
  },
  backdropFilterBlur: {
    type: 'number'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/image-gallery/constants/index.js":
/*!*****************************************************!*\
  !*** ./src/blocks/image-gallery/constants/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   COLUMN_COUNT: () => (/* binding */ COLUMN_COUNT),
/* harmony export */   COLUMN_GAP: () => (/* binding */ COLUMN_GAP),
/* harmony export */   CONTAINER_BACKGROUND: () => (/* binding */ CONTAINER_BACKGROUND),
/* harmony export */   CONTAINER_BORDER: () => (/* binding */ CONTAINER_BORDER),
/* harmony export */   CONTAINER_BORDER_RADIUS: () => (/* binding */ CONTAINER_BORDER_RADIUS),
/* harmony export */   CONTAINER_BOX_SHADOW: () => (/* binding */ CONTAINER_BOX_SHADOW),
/* harmony export */   CONTAINER_HOVER_BACKGROUND: () => (/* binding */ CONTAINER_HOVER_BACKGROUND),
/* harmony export */   CONTAINER_HOVER_BORDER: () => (/* binding */ CONTAINER_HOVER_BORDER),
/* harmony export */   CONTAINER_HOVER_BOX_SHADOW: () => (/* binding */ CONTAINER_HOVER_BOX_SHADOW),
/* harmony export */   CONTAINER_MARGIN: () => (/* binding */ CONTAINER_MARGIN),
/* harmony export */   CONTAINER_PADDING: () => (/* binding */ CONTAINER_PADDING),
/* harmony export */   CONTENT_BACKGROUND: () => (/* binding */ CONTENT_BACKGROUND),
/* harmony export */   CONTENT_BORDER: () => (/* binding */ CONTENT_BORDER),
/* harmony export */   CONTENT_BORDER_RADIUS: () => (/* binding */ CONTENT_BORDER_RADIUS),
/* harmony export */   CONTENT_BOX_SHADOW: () => (/* binding */ CONTENT_BOX_SHADOW),
/* harmony export */   CONTENT_MARGIN: () => (/* binding */ CONTENT_MARGIN),
/* harmony export */   CONTENT_PADDING: () => (/* binding */ CONTENT_PADDING),
/* harmony export */   HEADING_BACKGROUND: () => (/* binding */ HEADING_BACKGROUND),
/* harmony export */   HEADING_BORDER: () => (/* binding */ HEADING_BORDER),
/* harmony export */   HEADING_BORDER_RADIUS: () => (/* binding */ HEADING_BORDER_RADIUS),
/* harmony export */   HEADING_BOX_SHADOW: () => (/* binding */ HEADING_BOX_SHADOW),
/* harmony export */   HEADING_MARGIN: () => (/* binding */ HEADING_MARGIN),
/* harmony export */   HEADING_PADDING: () => (/* binding */ HEADING_PADDING),
/* harmony export */   IMAGE_BACKGROUND: () => (/* binding */ IMAGE_BACKGROUND),
/* harmony export */   IMAGE_BORDER: () => (/* binding */ IMAGE_BORDER),
/* harmony export */   IMAGE_BORDER_RADIUS: () => (/* binding */ IMAGE_BORDER_RADIUS),
/* harmony export */   IMAGE_BOX_SHADOW: () => (/* binding */ IMAGE_BOX_SHADOW),
/* harmony export */   IMAGE_HEIGHT: () => (/* binding */ IMAGE_HEIGHT),
/* harmony export */   IMAGE_HOVER_BACKGROUND: () => (/* binding */ IMAGE_HOVER_BACKGROUND),
/* harmony export */   IMAGE_HOVER_BOX_SHADOW: () => (/* binding */ IMAGE_HOVER_BOX_SHADOW),
/* harmony export */   IMAGE_PADDING: () => (/* binding */ IMAGE_PADDING),
/* harmony export */   MPA_ANIMATIONS: () => (/* binding */ MPA_ANIMATIONS),
/* harmony export */   OVERLAY_BG_COLOR: () => (/* binding */ OVERLAY_BG_COLOR),
/* harmony export */   PRESETS: () => (/* binding */ PRESETS),
/* harmony export */   TITLE_MARGIN: () => (/* binding */ TITLE_MARGIN),
/* harmony export */   ZOOM_ICON_BG_COLOR: () => (/* binding */ ZOOM_ICON_BG_COLOR),
/* harmony export */   ZOOM_ICON_BG_HOVER_COLOR: () => (/* binding */ ZOOM_ICON_BG_HOVER_COLOR),
/* harmony export */   ZOOM_ICON_BORDER: () => (/* binding */ ZOOM_ICON_BORDER),
/* harmony export */   ZOOM_ICON_BORDER_RADIUS: () => (/* binding */ ZOOM_ICON_BORDER_RADIUS),
/* harmony export */   ZOOM_ICON_BOX_SHADOW: () => (/* binding */ ZOOM_ICON_BOX_SHADOW),
/* harmony export */   ZOOM_ICON_HOVER_BOX_SHADOW: () => (/* binding */ ZOOM_ICON_HOVER_BOX_SHADOW),
/* harmony export */   ZOOM_ICON_PADDING: () => (/* binding */ ZOOM_ICON_PADDING),
/* harmony export */   ZOOM_ICON_SIZE: () => (/* binding */ ZOOM_ICON_SIZE)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Block Prefix
const BLOCK_PREFIX = 'advanced-image-gallery';

// Presets
const PRESETS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 1', 'zoloblocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 2 (Pro)', 'zoloblocks'),
  value: 'style-2',
  disabled: true
}];

// Grid
const COLUMN_COUNT = 'columnCount';
const COLUMN_GAP = 'columnGap';

// Container
const CONTAINER_BORDER = 'containerBorder';
const CONTAINER_HOVER_BORDER = 'containerHoverBorder';
const CONTAINER_BACKGROUND = 'containerBackground';
const CONTAINER_MARGIN = 'containerMargin';
const CONTAINER_PADDING = 'containerPadding';
const CONTAINER_BORDER_RADIUS = 'containerBorderRadius';
const CONTAINER_BOX_SHADOW = 'containerBoxShadow';
const CONTAINER_HOVER_BOX_SHADOW = 'containerHoverBoxShadow';
const CONTAINER_HOVER_BACKGROUND = 'container_hover_background';

// Image
const IMAGE_BORDER = 'imageBorder';
const IMAGE_BORDER_RADIUS = 'imageBorderRadius';
const IMAGE_BOX_SHADOW = 'imageBoxShadow';
const IMAGE_BACKGROUND = 'imageBackground';
const IMAGE_HOVER_BOX_SHADOW = 'imageHoverBoxShadow';
const IMAGE_HOVER_BACKGROUND = 'imageHoverBackground';
const IMAGE_PADDING = 'imagePadding';
const IMAGE_HEIGHT = 'imageHeight';

// Heading
const HEADING_BORDER = 'headingBorder';
const HEADING_BACKGROUND = 'headingBackground';
const HEADING_MARGIN = 'headingMargin';
const HEADING_PADDING = 'headingPadding';
const HEADING_BORDER_RADIUS = 'headingBorderRadius';
const HEADING_BOX_SHADOW = 'headingBoxShadow';

// Title
const TITLE_MARGIN = 'TitleMargin';

// Content
const CONTENT_BORDER = 'contentBorder';
const CONTENT_BACKGROUND = 'contentBackground';
const CONTENT_MARGIN = 'contentMargin';
const CONTENT_PADDING = 'contentPadding';
const CONTENT_BORDER_RADIUS = 'contentBorderRadius';
const CONTENT_BOX_SHADOW = 'contentBoxShadow';

// Zoom Icon
const ZOOM_ICON_PADDING = 'zoomIconPadding';
const ZOOM_ICON_BORDER_RADIUS = 'zoomIconBorderRadius';
const ZOOM_ICON_BORDER = 'zoomIconBorder';
const ZOOM_ICON_BOX_SHADOW = 'zoomIconBoxShadow';
const ZOOM_ICON_BG_COLOR = 'zoomIconBgColor';
const ZOOM_ICON_HOVER_BOX_SHADOW = 'zoomIconHoverBoxShadow';
const ZOOM_ICON_BG_HOVER_COLOR = 'zoomIconBgHoverColor';
const ZOOM_ICON_SIZE = 'zoomIconSize';

// Overlay BG
const OVERLAY_BG_COLOR = 'overlayBgColor';

// MPA Animations
const MPA_ANIMATIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Zoom', 'zoloblocks'),
  value: 'zolo-zoom-in'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Newspaper', 'zoloblocks'),
  value: 'zolo-newspaper'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move Horizontal', 'zoloblocks'),
  value: 'zolo-move-horizontal'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move Top', 'zoloblocks'),
  value: 'zolo-move-form-top'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3d Unfold', 'zoloblocks'),
  value: 'zolo-3d-unfold'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Zoom Out', 'zoloblocks'),
  value: 'zolo-zoom-out'
}];

/***/ }),

/***/ "./src/blocks/image-gallery/constants/typoPrefixConstant.js":
/*!******************************************************************!*\
  !*** ./src/blocks/image-gallery/constants/typoPrefixConstant.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HEADING_TYPOGRAPHY: () => (/* binding */ HEADING_TYPOGRAPHY),
/* harmony export */   TITLE_TYPOGRAPHY: () => (/* binding */ TITLE_TYPOGRAPHY)
/* harmony export */ });
// the consts defined here should be unique from one another
const HEADING_TYPOGRAPHY = 'headingTypography';
const TITLE_TYPOGRAPHY = 'TitleTypography';

/***/ }),

/***/ "./src/blocks/image-gallery/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/image-gallery/edit.js ***!
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
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/blocks/image-gallery/style.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/blocks/image-gallery/inspector.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * WordPress dependencies
 */






/**
 * Internal depencencies
 */
const {
  classArrayToStr,
  DisplayZoloIcon,
  SidebarOpener
} = window.zoloModule;

// import style




function Edit(props) {
  const {
    attributes,
    setAttributes,
    isSelected,
    clientId
  } = props;
  const {
    preview,
    preset,
    uniqueId,
    parentClasses,
    showCaption,
    showTitle,
    showLightbox,
    advancedGallery,
    lightboxIcon,
    imageSize
  } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(uniqueId, classArrayToStr(parentClasses), `${preset && preset !== '' ? preset : ''}`)
  });

  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.blocks.render.hook.after', [], props);

  // preview image
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: zoloParams.blocksPreview.imageGallery,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gallery Preview', 'zoloblocks')
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
      children: advancedGallery && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
            onSelect: media => {
              setAttributes({
                advancedGallery: media
              });
            },
            allowedTypes: ['image'],
            multiple: true,
            gallery: true,
            value: advancedGallery && advancedGallery.map(image => image.id),
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
              className: "components-toolbar__control",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace Photo', 'zoloblocks'),
              icon: "edit",
              onClick: open
            })
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      ...blockProps,
      children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SidebarOpener, {
        clientId: clientId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: `${advancedGallery ? 'zolo-image-gallery' : 'zolo-single-image'} ${uniqueId}`,
        children: advancedGallery ? advancedGallery && advancedGallery.map((image, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "zolo-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "zolo-image-wrap",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                src: image.sizes && image.sizes[imageSize] ? image.sizes[imageSize].url : image.url,
                alt: image.alt
              })
            }), showLightbox && preset !== 'style-2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: "#",
              className: "zolo-icon-wrap",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "zolo-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(DisplayZoloIcon, {
                  icon: lightboxIcon
                })
              })
            }), showCaption && preset !== 'style-2' && image.caption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "zolo-title",
              children: image.caption
            }), preset === 'style-2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "zolo-inner-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "zolo-content-wrap",
                children: [showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
                  className: "zolo-subTitle",
                  children: image?.alt || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No Alt Text', 'zoloblocks')
                }), showCaption && image.caption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "zolo-title",
                  children: image.caption
                })]
              }), showLightbox && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                href: "#",
                className: "zolo-icon-wrap",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: "zolo-icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(DisplayZoloIcon, {
                    icon: lightboxIcon
                  })
                })
              })]
            })]
          }, index);
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaPlaceholder, {
            onSelect: media => {
              setAttributes({
                advancedGallery: media
              });
            },
            gallery: true,
            multiple: true,
            allowedTypes: ['image'],
            value: advancedGallery && advancedGallery.map(image => image.id),
            labels: {
              title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Upload Gallery Photos', 'zoloblocks'),
              instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Drag images, upload new ones or select files from your library.', 'zoloblocks')
            }
          })
        })
      }), renderHookAfter && renderHookAfter]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/image-gallery/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/image-gallery/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/image-gallery/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/image-gallery/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/image-gallery/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/image-gallery/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/image-gallery/style.scss");






const {
  BlockIcons
} = window.zoloIcons;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: BlockIcons['image-gallery']
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/image-gallery/inspector.js":
/*!***********************************************!*\
  !*** ./src/blocks/image-gallery/inspector.js ***!
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
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./src/blocks/image-gallery/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/blocks/image-gallery/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/image-gallery/constants/typoPrefixConstant.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/**
 * WordPress dependencies
 */





/**
 * Internal depencencies
 */
const {
  HeaderTabs,
  BorderControl,
  BoxShadowControl,
  NormalBGControl,
  ResDimensionsControl,
  TabPanelControl,
  ResRangeControl,
  ResCounterControl,
  ColorControl,
  TypographyDropdown,
  ZoloIconPicker,
  AdvancedOptions,
  ZoloPanelBody,
  ResGapControl,
  ImageSizes,
  SimpleRangeControl
} = window.zoloModule;





function Inspector(props) {
  const {
    attributes,
    setAttributes,
    block
  } = props;
  const {
    resMode,
    preset,
    advancedGallery,
    showCaption,
    showTitle,
    showLightbox,
    headingColor,
    TitleColor,
    zoomIconColor,
    zoomIconHoverBorderColor,
    zoomIconHoverColor,
    imageHoverBorderColor,
    lightboxIcon,
    imageSize,
    entranceAnimation,
    showLightboxThumb,
    showThumbCaption,
    backdropFilterBlur
  } = attributes;
  const requiredProps = {
    attributes,
    setAttributes,
    resMode,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"]
  };

  // css filter
  const cssFilters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.extensions.controls.cssFilters', [], block, props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HeaderTabs, {
      block: "zolo/image-gallery",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'zoloblocks'),
          panelProps: props,
          firstOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Preset', 'zoloblocks'),
            value: preset,
            options: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.imageGallery.presets', _constants__WEBPACK_IMPORTED_MODULE_5__.PRESETS),
            onChange: v => {
              setAttributes({
                preset: v
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show/hide elements', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Photo caption', 'zoloblocks'),
            checked: showCaption,
            onChange: () => setAttributes({
              showCaption: !showCaption
            })
          }), preset === 'style-2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sub Title', 'zoloblocks'),
            checked: showTitle,
            onChange: () => setAttributes({
              showTitle: !showTitle
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alt text will be used as subtitle', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable photo lightbox', 'zoloblocks'),
            checked: showLightbox,
            onChange: () => setAttributes({
              showLightbox: !showLightbox
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This option will only work at the frontend', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "zolo-gallery-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
              className: "zolo-control-label",
              htmlFor: "zolo-control-label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gallery Photos', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "zolo-gallery-items",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "replace-btn-wrapper",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
                  onSelect: media => {
                    setAttributes({
                      advancedGallery: media
                    });
                  },
                  allowedTypes: ['image'],
                  multiple: true,
                  gallery: true,
                  value: advancedGallery && advancedGallery.map(image => image.id),
                  render: ({
                    open
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                    className: "zolo-replace-btn",
                    onClick: open,
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace Photos', 'zoloblocks')
                  })
                })
              }), advancedGallery && advancedGallery.length > 0 && advancedGallery && advancedGallery.map((image, index) => {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "zolo-gallery-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                    src: image.url,
                    alt: image.alt || image.caption
                  })
                }, index);
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ImageSizes, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Resolution', 'zoloblocks'),
            value: imageSize,
            onChange: value => setAttributes({
              imageSize: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grid', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResCounterControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Columns', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.COLUMN_COUNT,
            requiredProps: requiredProps,
            min: 1,
            max: 6,
            defaults: {
              deskRange: 3,
              tabRange: 2,
              mobRange: 1
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResGapControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gap', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.COLUMN_GAP,
            requiredProps: requiredProps,
            max: 200
          })]
        }), showLightbox && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lightbox Settings', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thumbnails', 'zoloblocks'),
            checked: showLightboxThumb,
            onChange: () => setAttributes({
              showLightboxThumb: !showLightboxThumb
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Caption', 'zoloblocks'),
            checked: showThumbCaption,
            onChange: () => setAttributes({
              showThumbCaption: !showThumbCaption
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloIconPicker, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Opener Icon', 'zoloblocks'),
            value: lightboxIcon,
            onChange: value => {
              setAttributes({
                lightboxIcon: value
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animation', 'zoloblocks'),
            value: entranceAnimation,
            options: _constants__WEBPACK_IMPORTED_MODULE_5__.MPA_ANIMATIONS,
            onChange: v => {
              setAttributes({
                entranceAnimation: v
              });
            }
          })]
        })]
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'zoloblocks'),
          firstOpen: true,
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Height', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.IMAGE_HEIGHT,
                requiredProps: requiredProps,
                min: 1,
                max: 500,
                step: 1
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.IMAGE_BACKGROUND,
                noMainBGImg: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.IMAGE_PADDING,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.IMAGE_BORDER,
                requiredProps: requiredProps,
                hoverControl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Hover Color', 'zoloblocks'),
                  color: imageHoverBorderColor,
                  onChange: value => setAttributes({
                    imageHoverBorderColor: value
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.IMAGE_BOX_SHADOW,
                requiredProps: requiredProps,
                enableTransition: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.IMAGE_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), cssFilters && cssFilters.length > 0 && cssFilters]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.IMAGE_HOVER_BACKGROUND,
                noMainBGImg: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.IMAGE_HOVER_BOX_SHADOW,
                requiredProps: requiredProps,
                enableTransition: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {})]
            })
          })
        }), preset === 'style-2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
              requiredProps: requiredProps,
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.CONTENT_BACKGROUND,
              noMainBGImg: false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.CONTENT_PADDING,
              requiredProps: requiredProps,
              forBorderRadius: false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.CONTENT_MARGIN,
              requiredProps: requiredProps,
              forBorderRadius: false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BorderControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.CONTENT_BORDER,
              requiredProps: requiredProps
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BoxShadowControl, {
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.CONTENT_BOX_SHADOW,
              requiredProps: requiredProps,
              enableTransition: false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.CONTENT_BORDER_RADIUS,
              requiredProps: requiredProps,
              forBorderRadius: true
            })]
          })
        }), showCaption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Caption', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
              color: headingColor,
              onChange: value => setAttributes({
                headingColor: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TypographyDropdown, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
              typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_6__.HEADING_TYPOGRAPHY,
              requiredProps: requiredProps,
              max: 36
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), preset !== 'style-2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.HEADING_BACKGROUND,
                noMainBGImg: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.HEADING_PADDING,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.HEADING_MARGIN,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.HEADING_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.HEADING_BOX_SHADOW,
                requiredProps: requiredProps,
                enableTransition: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.HEADING_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }), preset === 'style-2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.HEADING_MARGIN,
              requiredProps: requiredProps,
              forBorderRadius: false
            })]
          })
        }), showTitle && preset === 'style-2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sub Title', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
              color: TitleColor,
              onChange: value => setAttributes({
                TitleColor: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TypographyDropdown, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
              typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_6__.TITLE_TYPOGRAPHY,
              requiredProps: requiredProps,
              max: 36
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.TITLE_MARGIN,
              requiredProps: requiredProps,
              forBorderRadius: false
            })]
          })
        }), showLightbox && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lightbox Icon', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: zoomIconColor,
                onChange: value => setAttributes({
                  zoomIconColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ZOOM_ICON_SIZE,
                requiredProps: requiredProps,
                min: 1,
                max: 36,
                step: 1
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ZOOM_ICON_BG_COLOR,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ZOOM_ICON_PADDING,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ZOOM_ICON_BORDER,
                requiredProps: requiredProps,
                hoverControl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Hover Color', 'zoloblocks'),
                  color: zoomIconHoverBorderColor,
                  onChange: value => setAttributes({
                    zoomIconHoverBorderColor: value
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ZOOM_ICON_BOX_SHADOW,
                requiredProps: requiredProps,
                enableTransition: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ZOOM_ICON_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: zoomIconHoverColor,
                onChange: value => setAttributes({
                  zoomIconHoverColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ZOOM_ICON_BG_HOVER_COLOR,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ZOOM_ICON_HOVER_BOX_SHADOW,
                requiredProps: requiredProps,
                enableTransition: false
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Background', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.OVERLAY_BG_COLOR,
            noMainBGImg: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "zolo-flex-col-control",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(SimpleRangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Blur', 'zoloblocks'),
              value: backdropFilterBlur,
              onChange: filterBlur => setAttributes({
                backdropFilterBlur: filterBlur
              }),
              max: 50,
              onReset: () => setAttributes({
                backdropFilterBlur: 0
              })
            })
          })]
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps,
          block: "zolo/image-gallery"
        })
      })
    })
  }, "controls");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/image-gallery/save.js":
/*!******************************************!*\
  !*** ./src/blocks/image-gallery/save.js ***!
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


const {
  classArrayToStr,
  DisplayZoloIcon,
  DynamicTag
} = window.zoloModule;



const Save = props => {
  const {
    attributes
  } = props;
  const {
    preset,
    uniqueId,
    parentClasses,
    advancedGallery,
    showCaption,
    showTitle,
    showLightbox,
    lightboxIcon,
    entranceAnimation,
    zoloId,
    imageSize,
    showLightboxThumb,
    showThumbCaption
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(uniqueId, classArrayToStr(parentClasses), `${preset && preset !== '' ? preset : ''}`)
  });

  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.blocks.render.hook.after', [], props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ...blockProps,
    ...(zoloId && {
      id: zoloId
    }),
    "data-uniqueId": uniqueId,
    "data-entranceanimation": entranceAnimation,
    "data-showThumb": showLightboxThumb,
    children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(`zolo-image-gallery ${uniqueId} ${showLightbox ? 'zolo-gallery-lightbox' : ''}`),
      children: advancedGallery && advancedGallery.map((image, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(DynamicTag, {
          tagName: showLightbox ? 'a' : 'div',
          className: "zolo-item",
          ...(showLightbox && {
            href: image.url,
            'data-fslightbox': `gallery-${uniqueId}`
          }),
          ...(showLightbox && showThumbCaption && image.caption && {
            'data-caption': `<div class="zolo-lightbox-content"><h3 class="zolo-lightbox-caption">${image.caption}</h3></div>`
          }),
          ...(showLightbox && showLightboxThumb && {
            'data-thumb': image.sizes && image.sizes.thumbnail ? image.sizes.thumbnail.url : image.url
          }),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "zolo-image-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              src: image.sizes && image.sizes[imageSize] ? image.sizes[imageSize].url : image.url,
              alt: image.alt || image.caption || 'Gallery',
              className: `wp-image-${image.id}`,
              loading: "lazy"
            })
          }), showLightbox && preset !== 'style-2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "zolo-icon-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "zolo-icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DisplayZoloIcon, {
                icon: lightboxIcon
              })
            })
          }), showCaption && preset !== 'style-2' && image.caption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "zolo-title",
            children: image.caption
          }), preset === 'style-2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "zolo-inner-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "zolo-content-wrap",
              children: [showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                className: "zolo-subTitle",
                children: image?.alt || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No Alt Text', 'zoloblocks')
              }), showCaption && image.caption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "zolo-title",
                children: image.caption
              })]
            }), showLightbox && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "zolo-icon-wrap",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "zolo-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DisplayZoloIcon, {
                  icon: lightboxIcon
                })
              })
            })]
          })]
        }, index);
      })
    }), renderHookAfter && renderHookAfter]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/image-gallery/style.js":
/*!*******************************************!*\
  !*** ./src/blocks/image-gallery/style.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/blocks/image-gallery/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/image-gallery/constants/typoPrefixConstant.js");
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
  generateNormalBGControlStyles,
  generateBorderStyle,
  generateResCounterStyle,
  generateResRangeStyle,
  generateDimensionStyle,
  generateBoxShadowStyles,
  generateTypographyStyles,
  generateGapStyle,
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
    active = false,
    blur = 0,
    brightness = 100,
    contrast = 100,
    saturate = 100,
    hueRotate = 0
  } = attributes?.cssFilters || {};
  const {
    uniqueId,
    headingColor,
    TitleColor,
    zoomIconColor,
    zoomIconHoverColor,
    zoomIconHoverBorderColor,
    imageHoverBorderColor,
    backdropFilterBlur
  } = attributes;

  // column count
  const {
    desktopRangeStyle: columnCountDeskstyle,
    tabRangeStyle: columnCountTabStyle,
    mobRangeStyle: columnCountMobStyle
  } = generateResCounterStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN_COUNT,
    attributes,
    noProperty: true,
    defaults: {
      deskRange: 3,
      tabRange: 2,
      mobRange: 1
    }
  });

  // column gap
  const {
    gapStylesDesktop: deskGridGap,
    gapStylesTab: tabGridGap,
    gapStylesMobile: mobGridGap
  } = generateGapStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN_GAP,
    attributes
  });

  // Container Styles
  const {
    backgroundStylesDesktop: containerDeskBGStyle,
    backgroundStylesTab: containerTabBGStyle,
    backgroundStylesMobile: containerMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_BACKGROUND,
    attributes,
    noMainBGImg: false
  });
  const {
    backgroundStylesDesktop: containerHoverDeskBGStyle,
    backgroundStylesTab: containerHoverTabBGStyle,
    backgroundStylesMobile: containerHoverMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_HOVER_BACKGROUND,
    attributes,
    noMainBGImg: false
  });
  const {
    dimensionStylesDesktop: containerMarginDesk,
    dimensionStylesTab: containerMarginTab,
    dimensionStylesMobile: containerMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: containerPaddingDesk,
    dimensionStylesTab: containerPaddingTab,
    dimensionStylesMobile: containerPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    desktopBorderStyle: containerBorderDesk,
    tabBorderStyle: containerBorderTab,
    mobBorderStyle: containerBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_BORDER,
    attributes
  });
  const {
    desktopBorderStyle: containerHoverBorderDesk,
    tabBorderStyle: containerHoverBorderTab,
    mobBorderStyle: containerHoverBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_HOVER_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: containerBorderRadiusDesk,
    dimensionStylesTab: containerBorderRadiusTab,
    dimensionStylesMobile: containerBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: containerBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_BOX_SHADOW
  });
  const {
    boxShadowStyle: containerBoxShadowHover
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_HOVER_BOX_SHADOW
  });

  // Image
  const {
    desktopRangeStyle: imageHeightDesk,
    tabRangeStyle: imageHeightTab,
    mobRangeStyle: imageHeightMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_HEIGHT,
    property: 'height',
    attributes
  });
  const {
    desktopBorderStyle: imageBorderDesk,
    tabBorderStyle: imageBorderTab,
    mobBorderStyle: imageBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_BORDER,
    attributes
  });
  const {
    backgroundStylesDesktop: imageDeskBGStyle,
    backgroundStylesTab: imageTabBGStyle,
    backgroundStylesMobile: imageMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_BACKGROUND,
    attributes,
    noMainBGImg: false
  });
  const {
    backgroundStylesDesktop: imageHoverDeskBGStyle,
    backgroundStylesTab: imageHoverTabBGStyle,
    backgroundStylesMobile: imageHoverMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_HOVER_BACKGROUND,
    attributes,
    noMainBGImg: false
  });
  const {
    dimensionStylesDesktop: imageBorderRadiusDesk,
    dimensionStylesTab: imageBorderRadiusTab,
    dimensionStylesMobile: imageBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: imagePaddingDesk,
    dimensionStylesTab: imagePaddingTab,
    dimensionStylesMobile: imagePaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    boxShadowStyle: imageBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_BOX_SHADOW
  });
  const {
    boxShadowStyle: imageHoverBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_HOVER_BOX_SHADOW
  });

  // Heading
  const {
    desktopBorderStyle: headingBorderDesk,
    tabBorderStyle: headingBorderTab,
    mobBorderStyle: headingBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.HEADING_BORDER,
    attributes
  });
  const {
    backgroundStylesDesktop: headingDeskBGStyle,
    backgroundStylesTab: headingTabBGStyle,
    backgroundStylesMobile: headingMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.HEADING_BACKGROUND,
    attributes,
    noMainBGImg: false
  });
  const {
    dimensionStylesDesktop: headingMarginDesk,
    dimensionStylesTab: headingMarginTab,
    dimensionStylesMobile: headingMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.HEADING_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: headingPaddingDesk,
    dimensionStylesTab: headingPaddingTab,
    dimensionStylesMobile: headingPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.HEADING_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: headingBorderRadiusDesk,
    dimensionStylesTab: headingBorderRadiusTab,
    dimensionStylesMobile: headingBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.HEADING_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    typoStylesDesktop: headingTypoDesk,
    typoStylesTab: headingTypoTab,
    typoStylesMobile: headingTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.HEADING_TYPOGRAPHY,
    attributes
  });
  const {
    boxShadowStyle: headingBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.HEADING_BOX_SHADOW
  });

  // Title Heading

  const {
    dimensionStylesDesktop: TitleMarginDesk,
    dimensionStylesTab: TitleMarginTab,
    dimensionStylesMobile: TitleMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.TITLE_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    typoStylesDesktop: TitleTypoDesk,
    typoStylesTab: TitleTypoTab,
    typoStylesMobile: TitleTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.TITLE_TYPOGRAPHY,
    attributes
  });

  // content styles
  const {
    desktopBorderStyle: contentBorderDesk,
    tabBorderStyle: contentBorderTab,
    mobBorderStyle: contentBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_BORDER,
    attributes
  });
  const {
    backgroundStylesDesktop: contentDeskBGStyle,
    backgroundStylesTab: contentTabBGStyle,
    backgroundStylesMobile: contentMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_BACKGROUND,
    attributes,
    noMainBGImg: false
  });
  const {
    dimensionStylesDesktop: contentMarginDesk,
    dimensionStylesTab: contentMarginTab,
    dimensionStylesMobile: contentMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: contentPaddingDesk,
    dimensionStylesTab: contentPaddingTab,
    dimensionStylesMobile: contentPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: contentBorderRadiusDesk,
    dimensionStylesTab: contentBorderRadiusTab,
    dimensionStylesMobile: contentBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: contentBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_BOX_SHADOW
  });
  const {
    backgroundStylesDesktop: zoomIconDeskBGStyle,
    backgroundStylesTab: zoomIconTabBGStyle,
    backgroundStylesMobile: zoomIconMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_BG_COLOR,
    attributes,
    noMainBGImg: false
  });

  // zoom icon
  const {
    dimensionStylesDesktop: zoomIconPaddingDesk,
    dimensionStylesTab: zoomIconPaddingTab,
    dimensionStylesMobile: zoomIconPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: zoomIconBorderRadiusDesk,
    dimensionStylesTab: zoomIconBorderRadiusTab,
    dimensionStylesMobile: zoomIconBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    desktopBorderStyle: zoomIconBorderDesk,
    tabBorderStyle: zoomIconBorderTab,
    mobBorderStyle: zoomIconBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_BORDER,
    attributes
  });
  const {
    boxShadowStyle: zoomIconBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_BOX_SHADOW
  });
  const {
    boxShadowStyle: zoomIconHoverBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_HOVER_BOX_SHADOW
  });
  const {
    backgroundStylesDesktop: zoomIconBgHoverDesk,
    backgroundStylesTab: zoomIconBgHoverTab,
    backgroundStylesMobile: zoomIconBgHoverMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_BG_HOVER_COLOR,
    attributes,
    noMainBGImg: false
  });
  const {
    desktopRangeStyle: zoomIconSizeDesk,
    tabRangeStyle: zoomIconSizeTab,
    mobRangeStyle: zoomIconSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_SIZE,
    property: 'width',
    attributes
  });
  const {
    desktopRangeStyle: zoomIconHSizeDesk,
    tabRangeStyle: zoomIconHSizeTab,
    mobRangeStyle: zoomIconHSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ZOOM_ICON_SIZE,
    property: 'height',
    attributes
  });

  // overlay BG
  const {
    backgroundStylesDesktop: overlayDeskBGStyle,
    backgroundStylesTab: overlayTabBGStyle,
    backgroundStylesMobile: overlayMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.OVERLAY_BG_COLOR,
    attributes,
    noMainBGImg: true
  });

  /**
   * All Style Combination
   */

  const desktopAllStyle = `
		.${uniqueId} {
			${containerDeskBGStyle}
			${containerMarginDesk}
			${containerPaddingDesk}
			${containerBorderDesk}
			${containerBorderRadiusDesk}
			${containerBoxShadow}
		}
		.${uniqueId}:hover {
			${containerHoverDeskBGStyle}
			${containerHoverBorderDesk}
			${containerBoxShadowHover}
		}
		.${uniqueId}.zolo-image-gallery {
			grid-template-columns:repeat(${columnCountDeskstyle}, 1fr);
			${deskGridGap}
		}
		.wp-block-zolo-image-gallery .${uniqueId} .zolo-image-wrap {
			${imageDeskBGStyle}
			${imageBorderDesk}
			${imageBorderRadiusDesk}
			${imageBoxShadow}
			${imagePaddingDesk}
            ${imageHeightDesk}
		}
		.wp-block-zolo-image-gallery .${uniqueId} .zolo-image-wrap:hover {
			${imageHoverDeskBGStyle}
			${imageHoverBoxShadow}
            ${imageHoverBorderColor ? `border-color: ${imageHoverBorderColor};` : ''}
		}

        .wp-block-zolo-image-gallery .${uniqueId}.zolo-image-gallery .zolo-image-wrap::before{
            ${overlayDeskBGStyle}
            ${backdropFilterBlur ? `backdrop-filter: blur(${backdropFilterBlur}px);` : ''}
        }

		.wp-block-zolo-image-gallery .${uniqueId} .zolo-title {
			color: ${headingColor ? headingColor : ''};
			${headingDeskBGStyle}
			${headingMarginDesk}
			${headingPaddingDesk}
			${headingBorderDesk}
			${headingBorderRadiusDesk}
			${headingBoxShadow}
			${headingTypoDesk}
		}

        .wp-block-zolo-image-gallery .${uniqueId} .zolo-subTitle {
			color: ${TitleColor ? TitleColor : ''};
			${TitleMarginDesk}
			${TitleTypoDesk}
		}

        .wp-block-zolo-image-gallery .${uniqueId} .zolo-inner-item {
			${contentDeskBGStyle}
			${contentMarginDesk}
			${contentPaddingDesk}
			${contentBorderDesk}
			${contentBorderRadiusDesk}
			${contentBoxShadow}
		}

       .wp-block-zolo-image-gallery .${uniqueId} .zolo-item .zolo-icon {
            ${zoomIconPaddingDesk}
            ${zoomIconBorderDesk}
            ${zoomIconBorderRadiusDesk}
            ${zoomIconBoxShadow}
            ${zoomIconDeskBGStyle}
        }

       .wp-block-zolo-image-gallery .${uniqueId} .zolo-item .zolo-icon svg {
            ${zoomIconSizeDesk}
            ${zoomIconHSizeDesk}
            fill: ${zoomIconColor ? zoomIconColor : ''};
        }

       .wp-block-zolo-image-gallery .${uniqueId} .zolo-item .zolo-icon:hover svg {
            fill: ${zoomIconHoverColor ? zoomIconHoverColor : ''};
        }

       .wp-block-zolo-image-gallery .${uniqueId}  .zolo-item .zolo-icon:hover {
            border-color: ${zoomIconHoverBorderColor ? zoomIconHoverBorderColor : ''};
            ${zoomIconHoverBoxShadow}
            ${zoomIconBgHoverDesk}
        }

    ${active ? `
                .wp-block-zolo-image-gallery .${uniqueId} .zolo-image-wrap img {
                    filter:
                        blur(${blur}px)
                        brightness(${brightness}%)
                        contrast(${contrast}%)
                        saturate(${saturate}%)
                        hue-rotate(${hueRotate}deg)
                }
             ` : ''}
  	`;
  const tabletAllStyle = `
	.${uniqueId} {
		${containerTabBGStyle}
		${containerMarginTab}
		${containerPaddingTab}
		${containerBorderTab}
		${containerBorderRadiusTab}
	}
	.${uniqueId}:hover {
		${containerHoverTabBGStyle}
		${containerHoverBorderTab}
	}
	.${uniqueId}.zolo-image-gallery {
		grid-template-columns:repeat(${columnCountTabStyle}, 1fr);
		${tabGridGap}
	}
	.wp-block-zolo-image-gallery .${uniqueId} .zolo-image-wrap {
		${imageTabBGStyle}
		${imageBorderTab}
		${imageBorderRadiusTab}
		${imagePaddingTab}
        ${imageHeightTab}
	}
	.wp-block-zolo-image-gallery .${uniqueId} .zolo-image-wrap:hover {
		${imageHoverTabBGStyle}
	}
    .wp-block-zolo-image-gallery .${uniqueId}.zolo-image-gallery .zolo-image-wrap::before{
        ${overlayTabBGStyle}
    }
	.wp-block-zolo-image-gallery .${uniqueId} .zolo-title {
		${headingTabBGStyle}
		${headingMarginTab}
		${headingPaddingTab}
		${headingBorderTab}
		${headingBorderRadiusTab}
		${headingTypoTab}
	}

    .wp-block-zolo-image-gallery .${uniqueId} .zolo-subTitle {
        ${TitleMarginTab}
        ${TitleTypoTab}
    }

    .wp-block-zolo-image-gallery .${uniqueId} .zolo-inner-item {
		${contentTabBGStyle}
		${contentMarginTab}
		${contentPaddingTab}
		${contentBorderTab}
		${contentBorderRadiusTab}
	}

    .wp-block-zolo-image-gallery .${uniqueId} .zolo-item .zolo-icon {
        ${zoomIconPaddingTab}
        ${zoomIconBorderTab}
        ${zoomIconBorderRadiusTab}
        ${zoomIconTabBGStyle}
    }
    .wp-block-zolo-image-gallery .${uniqueId} .zolo-item .zolo-icon svg{
        ${zoomIconSizeTab}
        ${zoomIconHSizeTab}
    }
    .wp-block-zolo-image-gallery .${uniqueId} .zolo-item .zolo-icon:hover svg{
        ${zoomIconBgHoverTab}
    }
	`;
  const mobileAllStyle = `
	.${uniqueId} {
		${containerMobBGStyle}
		${containerMarginMob}
		${containerPaddingMob}
		${containerBorderMob}
		${containerBorderRadiusMob}
	}
	.${uniqueId}:hover {
		${containerHoverMobBGStyle}
		${containerHoverBorderMob}
	}
	.${uniqueId}.zolo-image-gallery {
		grid-template-columns:repeat(${columnCountMobStyle}, 1fr);
		${mobGridGap}
	}
	.wp-block-zolo-image-gallery .${uniqueId} .zolo-image-wrap {
		${imageMobBGStyle}
		${imageBorderMob}
		${imageBorderRadiusMob}
		${imagePaddingMob}
        ${imageHeightMob}
	}
	.wp-block-zolo-image-gallery .${uniqueId} .zolo-image-wrap:hover {
		${imageHoverMobBGStyle}
	}
    .wp-block-zolo-image-gallery .${uniqueId}.zolo-image-gallery .zolo-image-wrap::before{
        ${overlayMobBGStyle}
    }
	.wp-block-zolo-image-gallery .${uniqueId} .zolo-title {
		${headingMobBGStyle}
		${headingMarginMob}
		${headingPaddingMob}
		${headingBorderMob}
		${headingBorderRadiusMob}
		${headingTypoMob}
	}

    .wp-block-zolo-image-gallery .${uniqueId} .zolo-subTitle {
        ${TitleMarginMob}
        ${TitleTypoMob}
    }

    .wp-block-zolo-image-gallery .${uniqueId} .zolo-inner-item {
		${contentMobBGStyle}
		${contentMarginMob}
		${contentPaddingMob}
		${contentBorderMob}
		${contentBorderRadiusMob}
	}

    .wp-block-zolo-image-gallery .${uniqueId} .zolo-item .zolo-icon {
        ${zoomIconPaddingMob}
        ${zoomIconBorderMob}
        ${zoomIconBorderRadiusMob}
        ${zoomIconMobBGStyle}
    }
    .wp-block-zolo-image-gallery .${uniqueId} .zolo-item .zolo-icon svg{
        ${zoomIconSizeMob}
        ${zoomIconHSizeMob}
    }
    .wp-block-zolo-image-gallery .${uniqueId} .zolo-item .zolo-icon:hover svg{
        ${zoomIconBgHoverMob}
    }
  	`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GlobalStyleHanlder, {
    attributes: attributes,
    setAttributes: setAttributes,
    desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.imageGallery.desktopAllStyle', desktopAllStyle, props),
    tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.imageGallery.tabletAllStyle', tabletAllStyle, props),
    mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.imageGallery.mobileAllStyle', mobileAllStyle, props)
  });
}

/***/ }),

/***/ "./src/blocks/image-gallery/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/image-gallery/style.scss ***!
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

/***/ "./src/blocks/image-gallery/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/image-gallery/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Image Gallery","name":"zolo/image-gallery","category":"zoloblocks","keywords":["gallery","image","photo","media","responsive","grid","masonry","lightbox"],"description":"Design responsive image galleries with consistent site design.","apiVersion":3,"textdomain":"zoloblocks","example":{"attributes":{"preview":true},"viewportWidth":410},"supports":{"anchor":false,"align":["wide","full"],"customClassName":false},"editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./frontend.js"}');

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
/******/ 			"blocks/image-gallery/index": 0,
/******/ 			"blocks/image-gallery/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/image-gallery/style-index"], () => (__webpack_require__("./src/blocks/image-gallery/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map