/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/lightbox/attributes.js":
/*!*******************************************!*\
  !*** ./src/blocks/lightbox/attributes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/lightbox/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/lightbox/constants/typoPrefixConstant.js");
/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateResAlignmentAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateNormalBGAttributes,
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
      responsiveControls: true
    }
  },
  lightboxType: {
    type: 'string',
    default: 'poster'
  },
  imagePoster: {
    type: 'object',
    default: {
      url: zoloPlaceholders.placeholder,
      id: ''
    }
  },
  posterIcon: {
    type: 'string',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>'
  },
  showPosterIcon: {
    type: 'boolean',
    default: true
  },
  imageRes: {
    type: 'string',
    default: 'full'
  },
  buttonText: {
    type: 'string',
    default: 'See how it works'
  },
  enableHeading: {
    type: 'boolean',
    default: true
  },
  enableSubHeading: {
    type: 'boolean',
    default: true
  },
  buttonHeadingText: {
    type: 'string',
    default: 'Watch Video'
  },
  buttonIcon: {
    type: 'string',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>'
  },
  iconText: {
    type: 'string',
    default: ''
  },
  iconIcon: {
    type: 'string',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>'
  },
  lightBoxContent: {
    type: 'string',
    default: 'image'
  },
  contentCaption: {
    type: 'string',
    default: 'zoloblocks lightbox'
  },
  contentType: {
    type: 'string',
    default: 'image'
  },
  contentImage: {
    type: 'object',
    default: {
      url: zoloPlaceholders.placeholder,
      id: ''
    }
  },
  youtubeUrl: {
    type: 'string',
    default: 'https://www.youtube.com/watch?v=jX4sIXG-9fo'
  },
  vimeoUrl: {
    type: 'string',
    default: 'https://vimeo.com/76979871'
  },
  googleMapUrl: {
    type: 'string',
    default: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4740.819266853735!2d9.99008871708242!3d53.550454675412404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f9d24afe84a0263!2sRathaus!5e0!3m2!1sde!2sde!4v1499675200938'
  },
  titleColor: {
    type: 'string',
    default: '#2667ff'
  },
  hoverTitleColor: {
    type: 'string',
    default: '#2667ff'
  },
  titleSubColor: {
    type: 'string',
    default: ''
  },
  hoverTitleSubColor: {
    type: 'string',
    default: ''
  },
  iconColor: {
    type: 'string',
    default: ''
  },
  iconHColor: {
    type: 'string',
    default: ''
  },
  playBtnBorderHColor: {
    type: 'string'
  },
  imageSize: {
    type: 'string',
    default: 'thumbnail'
  },
  // style attributes

  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.POSTER_HEIGHT, {
    default: 300
  }),
  ...generateResAlignmentAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_ALIGN, {
    default: 'center'
  }),
  ...generateResAlignmentAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_ALIGN),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.POSTER_BG_COLOR),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_BG_COLOR),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_H_BG_COLOR),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.POSTER_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.POSTER_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.POSTER_PADDING),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.POSTER_BOX_SHADOW),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_WIDTH),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_HEIGHT),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.HOVER_POSTER_BG_COLOR),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.HOVER_POSTER_BORDER_RADIUS),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.HOVER_POSTER_BOX_SHADOW),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_BG_COLOR),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_PADDING),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.BUTTON_BOX_SHADOW),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.HOVER_BUTTON_BG_COLOR),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.HOVER_BUTTON_BORDER_RADIUS),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.HOVER_BUTTON_BOX_SHADOW),
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__)),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.PLAY_BTN_ICON_SIZE),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PLAY_BTN_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PLAY_BTN_MARGIN),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.PLAY_BTN_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PLAY_BTN_BORDER_RADIUS),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.PLAY_BTN_BOX_SHADOW),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.PLAY_BTN_H_BOX_SHADOW)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/lightbox/constants/index.js":
/*!************************************************!*\
  !*** ./src/blocks/lightbox/constants/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   BUTTON_ALIGN: () => (/* binding */ BUTTON_ALIGN),
/* harmony export */   BUTTON_BG_COLOR: () => (/* binding */ BUTTON_BG_COLOR),
/* harmony export */   BUTTON_BORDER: () => (/* binding */ BUTTON_BORDER),
/* harmony export */   BUTTON_BORDER_RADIUS: () => (/* binding */ BUTTON_BORDER_RADIUS),
/* harmony export */   BUTTON_BOX_SHADOW: () => (/* binding */ BUTTON_BOX_SHADOW),
/* harmony export */   BUTTON_PADDING: () => (/* binding */ BUTTON_PADDING),
/* harmony export */   CONTENT_HEIGHT: () => (/* binding */ CONTENT_HEIGHT),
/* harmony export */   CONTENT_WIDTH: () => (/* binding */ CONTENT_WIDTH),
/* harmony export */   HOVER_BUTTON_BG_COLOR: () => (/* binding */ HOVER_BUTTON_BG_COLOR),
/* harmony export */   HOVER_BUTTON_BORDER_RADIUS: () => (/* binding */ HOVER_BUTTON_BORDER_RADIUS),
/* harmony export */   HOVER_BUTTON_BOX_SHADOW: () => (/* binding */ HOVER_BUTTON_BOX_SHADOW),
/* harmony export */   HOVER_POSTER_BG_COLOR: () => (/* binding */ HOVER_POSTER_BG_COLOR),
/* harmony export */   HOVER_POSTER_BORDER_RADIUS: () => (/* binding */ HOVER_POSTER_BORDER_RADIUS),
/* harmony export */   HOVER_POSTER_BOX_SHADOW: () => (/* binding */ HOVER_POSTER_BOX_SHADOW),
/* harmony export */   ICON_ALIGN: () => (/* binding */ ICON_ALIGN),
/* harmony export */   ICON_BG_COLOR: () => (/* binding */ ICON_BG_COLOR),
/* harmony export */   ICON_H_BG_COLOR: () => (/* binding */ ICON_H_BG_COLOR),
/* harmony export */   LIGHT_BOX_CONTENT: () => (/* binding */ LIGHT_BOX_CONTENT),
/* harmony export */   LIGHT_BOX_SELECT: () => (/* binding */ LIGHT_BOX_SELECT),
/* harmony export */   PLAY_BTN_BORDER: () => (/* binding */ PLAY_BTN_BORDER),
/* harmony export */   PLAY_BTN_BORDER_RADIUS: () => (/* binding */ PLAY_BTN_BORDER_RADIUS),
/* harmony export */   PLAY_BTN_BOX_SHADOW: () => (/* binding */ PLAY_BTN_BOX_SHADOW),
/* harmony export */   PLAY_BTN_H_BOX_SHADOW: () => (/* binding */ PLAY_BTN_H_BOX_SHADOW),
/* harmony export */   PLAY_BTN_ICON_SIZE: () => (/* binding */ PLAY_BTN_ICON_SIZE),
/* harmony export */   PLAY_BTN_MARGIN: () => (/* binding */ PLAY_BTN_MARGIN),
/* harmony export */   PLAY_BTN_PADDING: () => (/* binding */ PLAY_BTN_PADDING),
/* harmony export */   POSTER_BG_COLOR: () => (/* binding */ POSTER_BG_COLOR),
/* harmony export */   POSTER_BORDER: () => (/* binding */ POSTER_BORDER),
/* harmony export */   POSTER_BORDER_RADIUS: () => (/* binding */ POSTER_BORDER_RADIUS),
/* harmony export */   POSTER_BOX_SHADOW: () => (/* binding */ POSTER_BOX_SHADOW),
/* harmony export */   POSTER_HEIGHT: () => (/* binding */ POSTER_HEIGHT),
/* harmony export */   POSTER_PADDING: () => (/* binding */ POSTER_PADDING)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Block Prefix
const BLOCK_PREFIX = 'lightbox';
const LIGHT_BOX_SELECT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Poster', 'zoloblocks'),
  value: 'poster'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button', 'zoloblocks'),
  value: 'button'
}];
const LIGHT_BOX_CONTENT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'zoloblocks'),
  value: 'image'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Youtube (pro)', 'zoloblocks'),
  value: 'youtube',
  disabled: true
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vimeo (pro)', 'zoloblocks'),
  value: 'vimeo',
  disabled: true
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Google Map (pro)', 'zoloblocks'),
  value: 'googleMap',
  disabled: true
}];
const POSTER_HEIGHT = 'posterHeight';
const BUTTON_ALIGN = 'buttonAlign';
const ICON_ALIGN = 'iconAlign';
const POSTER_BG_COLOR = 'posterBgColor';
const POSTER_BORDER = 'posterBorder';
const POSTER_BORDER_RADIUS = 'posterBorderRadius';
const POSTER_PADDING = 'posterPadding';
const POSTER_BOX_SHADOW = 'posterBoxShadow';
const HOVER_POSTER_BG_COLOR = 'hoverPosterBgColor';
const HOVER_POSTER_BORDER_RADIUS = 'hoverPosterBorderRadius';
const HOVER_POSTER_BOX_SHADOW = 'hoverPosterBoxShadow';
const BUTTON_BG_COLOR = 'buttonBgColor';
const BUTTON_BORDER = 'buttonBorder';
const BUTTON_BORDER_RADIUS = 'buttonBorderRadius';
const BUTTON_PADDING = 'buttonPadding';
const BUTTON_BOX_SHADOW = 'buttonBoxShadow';
const HOVER_BUTTON_BG_COLOR = 'hoverButtonBgColor';
const HOVER_BUTTON_BORDER_RADIUS = 'hoverButtonBorderRadius';
const HOVER_BUTTON_BOX_SHADOW = 'hoverButtonBoxShadow';
const CONTENT_HEIGHT = 'contentHeight';
const CONTENT_WIDTH = 'contentWidth';
const ICON_BG_COLOR = 'iconBgColor';
const ICON_H_BG_COLOR = 'iconHoverBgColor';
const PLAY_BTN_ICON_SIZE = 'playBtnIconSize';
const PLAY_BTN_PADDING = 'playBtnPadding';
const PLAY_BTN_MARGIN = 'playBtnMargin';
const PLAY_BTN_BORDER = 'playBtnBorder';
const PLAY_BTN_BORDER_RADIUS = 'playBtnBorderRadius';
const PLAY_BTN_BOX_SHADOW = 'playBtnBoxShadow';
const PLAY_BTN_H_BOX_SHADOW = 'playBtnHoverBoxShadow';

/***/ }),

/***/ "./src/blocks/lightbox/constants/typoPrefixConstant.js":
/*!*************************************************************!*\
  !*** ./src/blocks/lightbox/constants/typoPrefixConstant.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BUTTON_SUB_TYPOGRAPHY: () => (/* binding */ BUTTON_SUB_TYPOGRAPHY),
/* harmony export */   BUTTON_TYPOGRAPHY: () => (/* binding */ BUTTON_TYPOGRAPHY)
/* harmony export */ });
// the consts defined here should be unique from one another
const BUTTON_TYPOGRAPHY = 'buttonTypography';
const BUTTON_SUB_TYPOGRAPHY = 'buttonSubTypography';

/***/ }),

/***/ "./src/blocks/lightbox/content.js":
/*!****************************************!*\
  !*** ./src/blocks/lightbox/content.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _iframeUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iframeUrl */ "./src/blocks/lightbox/iframeUrl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const LightboxContent = props => {
  const {
    attributes
  } = props;
  const {
    contentType,
    contentImage,
    imageSize,
    uniqueId
  } = attributes;
  const VideoURL = (0,_iframeUrl__WEBPACK_IMPORTED_MODULE_0__["default"])(props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [contentType === 'image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      src: contentImage.sizes && contentImage.sizes[imageSize] ? contentImage.sizes[imageSize].url : contentImage.url,
      alt: contentImage.alt
    }), contentType !== 'image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe", {
      className: `${uniqueId} zolo-content-iframe`,
      src: VideoURL,
      allowFullScreen: true,
      allow: "autoplay; fullscreen"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightboxContent);

/***/ }),

/***/ "./src/blocks/lightbox/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/lightbox/edit.js ***!
  \*************************************/
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
/* harmony import */ var fslightbox_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fslightbox-react */ "./node_modules/fslightbox-react/index.js");
/* harmony import */ var fslightbox_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fslightbox_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/blocks/lightbox/inspector.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content */ "./src/blocks/lightbox/content.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./src/blocks/lightbox/style.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/lightbox/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/**
 * WordPress dependencies
 */






/**
 * Internal depencencies
 */





const {
  classArrayToStr,
  DynamicTag,
  DisplayZoloIcon
} = window.zoloModule;
function Edit(props) {
  const {
    attributes,
    setAttributes,
    isSelected
  } = props;
  const {
    uniqueId,
    parentClasses,
    lightboxType,
    imagePoster,
    imageSize,
    buttonText,
    enableHeading,
    enableSubHeading,
    buttonHeadingText,
    posterIcon,
    showPosterIcon,
    contentCaption
  } = attributes;
  const [toggler, setToggler] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const blocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(uniqueId, classArrayToStr(parentClasses), `zolo-lightbox-${lightboxType}`)
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      ...blocksProps,
      children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
        props: props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "zolo-lightbox-btn",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
          className: "zolo-play-btn zolo-lightbox-btn-1",
          onClick: () => {
            setToggler(!toggler);
          },
          children: [lightboxType !== 'poster' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
            className: "zolo-btn-text",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("small", {
              children: enableSubHeading && buttonHeadingText
            }), enableHeading && buttonText]
          }), showPosterIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            className: "zolo-btn-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(DisplayZoloIcon, {
              icon: posterIcon
            })
          })]
        })
      }), lightboxType === 'poster' && imagePoster && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "zolo-poster-img",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
          src: imagePoster.sizes && imagePoster.sizes[imageSize] ? imagePoster.sizes[imageSize].url : imagePoster.url,
          alt: imagePoster.alt
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((fslightbox_react__WEBPACK_IMPORTED_MODULE_3___default()), {
        toggler: toggler,
        sources: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          id: `${uniqueId}`,
          className: "zolo-lightbox-content-editor",
          children: (0,_content__WEBPACK_IMPORTED_MODULE_6__["default"])(props)
        })],
        captions: [contentCaption]
      })]
    })
  });
}

/***/ }),

/***/ "./src/blocks/lightbox/iframeUrl.js":
/*!******************************************!*\
  !*** ./src/blocks/lightbox/iframeUrl.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const iframeUrl = props => {
  const {
    attributes
  } = props;
  const {
    contentType,
    youtubeUrl,
    vimeoUrl,
    googleMapUrl
  } = attributes;
  let videoUrl;

  // // let videoUrl;
  function get_youtube_viedo_Id(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }
  function get_vimeo_video_id(url) {
    const regExp = /https:\/\/vimeo.com\/(\d+)/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : null;
  }
  function get_google_map_id(url) {
    const regExp = /https:\/\/www.google.com\/maps\/embed\?pb=(.*)/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : null;
  }

  // youtube video embed url
  const youtubeVideoId = get_youtube_viedo_Id('http://www.youtube.com/watch?v=' + youtubeUrl + '');
  if (contentType === 'youtube' && youtubeVideoId !== null) {
    videoUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;
  }
  const vimeoVideoId = get_vimeo_video_id(vimeoUrl);
  if (contentType === 'vimeo') {
    videoUrl = `https://player.vimeo.com/video/${vimeoVideoId}`;
  }

  //    // google map embed url
  const googleMapId = get_google_map_id(googleMapUrl);
  if (contentType === 'googleMap' && googleMapId !== null) {
    videoUrl = `https://www.google.com/maps/embed?pb=${googleMapId}`;
  }
  return videoUrl;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iframeUrl);

/***/ }),

/***/ "./src/blocks/lightbox/index.js":
/*!**************************************!*\
  !*** ./src/blocks/lightbox/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/lightbox/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/lightbox/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/lightbox/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/lightbox/save.js");





const {
  BlockIcons
} = window.zoloIcons;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  icon: {
    src: BlockIcons['lightbox']
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/lightbox/inspector.js":
/*!******************************************!*\
  !*** ./src/blocks/lightbox/inspector.js ***!
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
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/blocks/lightbox/attributes.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/blocks/lightbox/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/lightbox/constants/typoPrefixConstant.js");
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
  ColorControl,
  BorderControl,
  ResDimensionsControl,
  TypographyDropdown,
  TabPanelControl,
  ZoloIconPicker,
  BoxShadowControl,
  HeaderTabs,
  LinkControl,
  NormalBGControl,
  ImageAvatar,
  ResAlignmentControl,
  AdvancedOptions,
  ZoloPanelBody,
  ImageSizes
} = window.zoloModule;





function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    resMode,
    // settings
    lightboxType,
    imagePoster,
    posterIcon,
    showPosterIcon,
    imageSize,
    buttonText,
    enableHeading,
    enableSubHeading,
    buttonHeadingText,
    contentType,
    contentCaption,
    contentImage,
    youtubeUrl,
    vimeoUrl,
    googleMapUrl,
    titleColor,
    hoverTitleColor,
    titleSubColor,
    hoverTitleSubColor,
    iconColor,
    iconHColor,
    playBtnBorderHColor
  } = attributes;
  const requiredProps = {
    resMode,
    attributes,
    setAttributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HeaderTabs, {
        block: "zolo/lightbox",
        attributes: attributes,
        setAttributes: setAttributes,
        generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggler', 'zoloblocks'),
            panelProps: props,
            firstOpen: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type', 'zoloblocks'),
              value: lightboxType,
              onChange: value => setAttributes({
                lightboxType: value
              }),
              options: _constants__WEBPACK_IMPORTED_MODULE_5__.LIGHT_BOX_SELECT
            }), lightboxType === 'poster' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Poster Image', 'zoloblocks'),
                className: "zolo-flex-col-control",
                children: imagePoster ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ImageAvatar, {
                  imageUrl: imagePoster && imagePoster.url,
                  onDeleteImage: () => setAttributes({
                    imagePoster: null
                  }),
                  imageId: imagePoster && imagePoster.id,
                  onEditImage: media => {
                    setAttributes({
                      imagePoster: media
                    });
                  }
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
                  onSelect: media => {
                    setAttributes({
                      imagePoster: {
                        id: media.id,
                        url: media.url,
                        sizes: media.sizes,
                        alt: media.alt,
                        caption: media.caption
                      }
                    });
                  },
                  allowedTypes: ['image'],
                  value: imagePoster && imagePoster.id,
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
                    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(' Upload Logo', 'zoloblocks')]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ImageSizes, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Resolution', 'zoloblocks'),
                value: imageSize,
                onChange: value => setAttributes({
                  imageSize: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Poster Height', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.POSTER_HEIGHT,
                requiredProps: requiredProps,
                min: 0,
                max: 1200
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Play Button', 'zoloblocks'),
                checked: showPosterIcon,
                onChange: () => setAttributes({
                  showPosterIcon: !showPosterIcon
                })
              }), showPosterIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloIconPicker, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks'),
                  value: posterIcon,
                  onChange: value => setAttributes({
                    posterIcon: value
                  })
                }, "posterIcon")
              })]
            }), lightboxType === 'button' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "zolo-custom-heading",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show/hide elements', 'zoloblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks'),
                checked: enableHeading,
                onChange: () => setAttributes({
                  enableHeading: !enableHeading
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sub Title', 'zoloblocks'),
                checked: enableSubHeading,
                onChange: () => setAttributes({
                  enableSubHeading: !enableSubHeading
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Play Button', 'zoloblocks'),
                checked: showPosterIcon,
                onChange: () => setAttributes({
                  showPosterIcon: !showPosterIcon
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), enableHeading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks'),
                  value: buttonText,
                  onChange: value => setAttributes({
                    buttonText: value
                  })
                })
              }), enableSubHeading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sub Title', 'zoloblocks'),
                value: buttonHeadingText,
                onChange: value => setAttributes({
                  buttonHeadingText: value
                })
              }), showPosterIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloIconPicker, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Play Button Icon', 'zoloblocks'),
                  value: posterIcon,
                  onChange: value => setAttributes({
                    posterIcon: value
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResAlignmentControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alignment', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BUTTON_ALIGN,
                requiredProps: requiredProps
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lightbox Content', 'zoloblocks'),
            panelProps: props,
            firstOpen: false,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type', 'zoloblocks'),
              value: contentType,
              onChange: value => setAttributes({
                contentType: value
              }),
              options: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.applyFilters)('zolo.presets.lightbox', _constants__WEBPACK_IMPORTED_MODULE_5__.LIGHT_BOX_CONTENT)
            }), contentType === 'image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Source', 'zoloblocks'),
                className: "zolo-flex-col-control",
                children: contentImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ImageAvatar, {
                  imageUrl: contentImage && contentImage.url,
                  onDeleteImage: () => setAttributes({
                    contentImage: {
                      id: null,
                      url: null,
                      sizes: null,
                      alt: null,
                      caption: null
                    }
                  }),
                  imageId: contentImage && contentImage.id,
                  onEditImage: media => {
                    setAttributes({
                      contentImage: media
                    });
                  }
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
                  onSelect: media => {
                    setAttributes({
                      contentImage: {
                        id: media.id,
                        url: media.url,
                        sizes: media.sizes,
                        alt: media.alt,
                        caption: media.caption
                      }
                    });
                  },
                  allowedTypes: ['image'],
                  value: contentImage && contentImage.id,
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
                    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose Image', 'zoloblocks')]
                  })
                })
              })
            }), contentType === 'youtube' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Youtube Video Url', 'zoloblocks'),
                value: youtubeUrl,
                onChange: value => setAttributes({
                  youtubeUrl: value
                })
              })
            }), contentType === 'vimeo' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vimeo Video Url', 'zoloblocks'),
                value: vimeoUrl,
                onChange: value => setAttributes({
                  vimeoUrl: value
                })
              })
            }), contentType === 'googleMap' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Google Map Embed Url', 'zoloblocks'),
              value: googleMapUrl,
              onChange: value => setAttributes({
                googleMapUrl: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Caption', 'zoloblocks'),
              value: contentCaption,
              onChange: value => setAttributes({
                contentCaption: value
              })
            })]
          })]
        }),
        styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: [lightboxType === 'poster' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloPanelBody, {
              title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Poster Wrapper', 'zoloblocks'),
              panelProps: props,
              stylePanel: true,
              firstOpen: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabPanelControl, {
                normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BorderControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.POSTER_BORDER,
                    requiredProps: requiredProps
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.POSTER_BORDER_RADIUS,
                    requiredProps: requiredProps,
                    forBorderRadius: true
                  })]
                }),
                hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.HOVER_POSTER_BG_COLOR,
                    requiredProps: requiredProps,
                    noMainBGIMG: false
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.HOVER_POSTER_BORDER_RADIUS,
                    requiredProps: requiredProps,
                    forBorderRadius: true
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BoxShadowControl, {
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.HOVER_POSTER_BOX_SHADOW,
                    requiredProps: requiredProps,
                    enableTransition: false
                  })]
                })
              })
            })
          }), lightboxType === 'button' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloPanelBody, {
              title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Wrapper', 'zoloblocks'),
              panelProps: props,
              firstOpen: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabPanelControl, {
                normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BUTTON_BG_COLOR,
                    requiredProps: requiredProps,
                    noMainBGIMG: false
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BUTTON_PADDING,
                    requiredProps: requiredProps
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BorderControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BUTTON_BORDER,
                    requiredProps: requiredProps
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BoxShadowControl, {
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BUTTON_BOX_SHADOW,
                    requiredProps: requiredProps,
                    enableTransition: false
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.BUTTON_BORDER_RADIUS,
                    requiredProps: requiredProps,
                    forBorderRadius: true
                  })]
                }),
                hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.HOVER_BUTTON_BG_COLOR,
                    requiredProps: requiredProps,
                    noMainBGIMG: false
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BoxShadowControl, {
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.HOVER_BUTTON_BOX_SHADOW,
                    requiredProps: requiredProps,
                    enableTransition: false
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.HOVER_BUTTON_BORDER_RADIUS,
                    requiredProps: requiredProps,
                    forBorderRadius: true
                  })]
                })
              })
            }), enableHeading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloPanelBody, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Content', 'zoloblocks'),
                panelProps: props,
                firstOpen: false,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabPanelControl, {
                  options: [{
                    value: 'normal',
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks')
                  }, {
                    value: 'hover',
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sub Title', 'zoloblocks')
                  }],
                  normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                      color: titleColor,
                      onChange: value => setAttributes({
                        titleColor: value
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TypographyDropdown, {
                      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                      typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_6__.BUTTON_TYPOGRAPHY,
                      requiredProps: requiredProps
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      className: "zolo-custom-heading",
                      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'zoloblocks')
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                      color: hoverTitleColor,
                      onChange: value => setAttributes({
                        hoverTitleColor: value
                      })
                    })]
                  }),
                  hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                    children: enableSubHeading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                        color: titleSubColor,
                        onChange: value => setAttributes({
                          titleSubColor: value
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TypographyDropdown, {
                        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                        typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_6__.BUTTON_SUB_TYPOGRAPHY,
                        requiredProps: requiredProps
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                        className: "zolo-custom-heading",
                        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'zoloblocks')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                        color: hoverTitleSubColor,
                        onChange: value => setAttributes({
                          hoverTitleSubColor: value
                        })
                      })]
                    })
                  })
                })
              })
            })]
          }), showPosterIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoloPanelBody, {
              title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Play Button', 'zoloblocks'),
              panelProps: props,
              firstOpen: false,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabPanelControl, {
                normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                    color: iconColor,
                    onChange: value => setAttributes({
                      iconColor: value
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResRangeControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Size', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAY_BTN_ICON_SIZE,
                    requiredProps: requiredProps,
                    min: 0,
                    max: 100
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ICON_BG_COLOR,
                    requiredProps: requiredProps,
                    noMainBGIMG: false
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAY_BTN_PADDING,
                    requiredProps: requiredProps
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAY_BTN_MARGIN,
                    requiredProps: requiredProps
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BorderControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAY_BTN_BORDER,
                    requiredProps: requiredProps
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BoxShadowControl, {
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAY_BTN_BOX_SHADOW,
                    requiredProps: requiredProps,
                    enableTransition: false
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResDimensionsControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAY_BTN_BORDER_RADIUS,
                    requiredProps: requiredProps,
                    forBorderRadius: true
                  })]
                }),
                hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                    color: iconHColor,
                    onChange: value => setAttributes({
                      iconHColor: value
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(NormalBGControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'zoloblocks'),
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ICON_H_BG_COLOR,
                    requiredProps: requiredProps,
                    noMainBGIMG: false
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ColorControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'zoloblocks'),
                    color: playBtnBorderHColor,
                    onChange: value => setAttributes({
                      playBtnBorderHColor: value
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BoxShadowControl, {
                    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAY_BTN_H_BOX_SHADOW,
                    requiredProps: requiredProps,
                    enableTransition: false
                  })]
                })
              })
            })
          }), contentType !== 'image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ZoloPanelBody, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'zoloblocks'),
            stylePanel: true,
            panelProps: props,
            firstOpen: false,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResRangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Width', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.CONTENT_WIDTH,
              requiredProps: requiredProps,
              max: 1500
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ResRangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Height', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.CONTENT_HEIGHT,
              requiredProps: requiredProps,
              max: 1500
            })]
          })]
        }),
        advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(AdvancedOptions, {
            attributes: attributes,
            setAttributes: setAttributes,
            requiredProps: requiredProps,
            block: "zolo/lightbox"
          })
        })
      })
    })
  });
}

/***/ }),

/***/ "./src/blocks/lightbox/save.js":
/*!*************************************!*\
  !*** ./src/blocks/lightbox/save.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content */ "./src/blocks/lightbox/content.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Internal Dependencies
 */

const {
  classArrayToStr,
  DisplayZoloIcon
} = window.zoloModule;
function Save(props) {
  const {
    attributes
  } = props;
  const {
    uniqueId,
    parentClasses,
    lightboxType,
    imagePoster,
    imageSize,
    buttonText,
    enableHeading,
    enableSubHeading,
    buttonHeadingText,
    posterIcon,
    showPosterIcon,
    contentCaption
  } = attributes;
  const blocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(uniqueId, classArrayToStr(parentClasses), `zolo-lightbox-${lightboxType}`)
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ...blocksProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
      href: `#${uniqueId}`,
      className: "zolo-play-btn zolo-lightbox-btn-1",
      "data-fslightbox": uniqueId,
      "data-caption": contentCaption,
      children: [lightboxType !== 'poster' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        className: "zolo-btn-text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("small", {
          children: enableSubHeading && buttonHeadingText
        }), enableHeading && buttonText]
      }), showPosterIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "zolo-btn-icon",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DisplayZoloIcon, {
          icon: posterIcon
        })
      })]
    }), lightboxType === 'poster' && imagePoster && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "zolo-poster-img",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: imagePoster.sizes && imagePoster.sizes[imageSize] ? imagePoster.sizes[imageSize].url : imagePoster.url,
        alt: imagePoster.alt
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      id: `${uniqueId}`,
      className: "zolo-lightbox-content",
      children: (0,_content__WEBPACK_IMPORTED_MODULE_3__["default"])(props)
    })]
  });
}

/***/ }),

/***/ "./src/blocks/lightbox/style.js":
/*!**************************************!*\
  !*** ./src/blocks/lightbox/style.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/blocks/lightbox/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/lightbox/constants/typoPrefixConstant.js");
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
  generateNormalBGControlStyles,
  generateResRangeStyle,
  generateBorderStyle,
  generateBoxShadowStyles,
  generateDimensionStyle,
  generateTypographyStyles,
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
    uniqueId,
    // setting
    titleColor,
    hoverTitleColor,
    titleSubColor,
    hoverTitleSubColor,
    iconColor,
    iconHColor,
    playBtnBorderHColor
  } = attributes;
  const {
    desktopRangeStyle: posterHeightDesk,
    tabRangeStyle: posterHeightTab,
    mobRangeStyle: posterHeightMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.POSTER_HEIGHT,
    property: 'height',
    attributes
  });
  const {
    desktopRangeStyle: contentHeightDesk,
    tabRangeStyle: contentHeightTab,
    mobRangeStyle: contentHeightMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_HEIGHT,
    property: 'height',
    attributes
  });
  const {
    desktopRangeStyle: contentWidthDesk,
    tabRangeStyle: contentWidthTab,
    mobRangeStyle: contentWidthMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_WIDTH,
    property: 'width',
    attributes
  });
  const {
    desktopAlignStyle: buttonAlignDesk,
    tabAlignStyle: buttonAlignTab,
    mobAlignStyle: buttonAlignMob
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BUTTON_ALIGN,
    property: 'text-align',
    attributes
  });
  const {
    desktopAlignStyle: buttonAlignFDesk,
    tabAlignStyle: buttonAlignFTab,
    mobAlignStyle: buttonAlignFMob
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BUTTON_ALIGN,
    property: 'justify-content',
    attributes
  });
  const {
    backgroundStylesDesktop: posterBgColorDesk,
    backgroundStylesTab: posterBgColorTab,
    backgroundStylesMob: posterBgColorMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.POSTER_BG_COLOR,
    noMainBGIMG: false,
    attributes
  });
  const {
    backgroundStylesDesktop: iconBgColorDesk,
    backgroundStylesTab: iconBgColorTab,
    backgroundStylesMob: iconBgColorMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICON_BG_COLOR,
    noMainBGIMG: false,
    attributes
  });
  const {
    backgroundStylesDesktop: iconHBgColorDesk,
    backgroundStylesTab: iconHBgColorTab,
    backgroundStylesMob: iconHBgColorMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICON_H_BG_COLOR,
    noMainBGIMG: false,
    attributes
  });
  const {
    desktopBorderStyle: posterBorderDesk,
    tabBorderStyle: posterBorderTab,
    mobBorderStyle: posterBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.POSTER_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: posterBorderRadiusDesk,
    dimensionStylesTab: posterBorderRadiusTab,
    dimensionStylesMobile: posterBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.POSTER_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: posterPaddingDesk,
    dimensionStylesTab: posterPaddingTab,
    dimensionStylesMobile: posterPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.POSTER_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    boxShadowStyle: posterBoxShadow
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.POSTER_BOX_SHADOW,
    attributes
  });
  const {
    backgroundStylesDesktop: hoverPosterBgColorDesk,
    backgroundStylesTab: hoverPosterBgColorTab,
    backgroundStylesMobile: hoverPosterBgColorMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.HOVER_POSTER_BG_COLOR,
    noMainBGIMG: false,
    attributes
  });
  const {
    dimensionStylesDesktop: hoverPosterBorderRadiusDesk,
    dimensionStylesTab: hoverPosterBorderRadiusTab,
    dimensionStylesMob: hoverPosterBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.HOVER_POSTER_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: hoverPosterBoxShadow
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.HOVER_POSTER_BOX_SHADOW,
    attributes
  });
  const {
    backgroundStylesDesktop: buttonBgColorDesk,
    backgroundStylesTab: buttonBgColorTab,
    backgroundStylesMob: buttonBgColorMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BUTTON_BG_COLOR,
    noMainBGIMG: false,
    attributes
  });
  const {
    desktopBorderStyle: buttonBorderDesk,
    tabBorderStyle: buttonBorderTab,
    mobBorderStyle: buttonBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BUTTON_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: buttonBorderRadiusDesk,
    dimensionStylesTab: buttonBorderRadiusTab,
    dimensionStylesMob: buttonBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BUTTON_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: buttonPaddingDesk,
    dimensionStylesTab: buttonPaddingTab,
    dimensionStylesMob: buttonPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BUTTON_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    boxShadowStyle: buttonBoxShadow
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BUTTON_BOX_SHADOW,
    attributes
  });
  const {
    backgroundStylesDesktop: hoverButtonBgColorDesk,
    backgroundStylesTab: hoverButtonBgColorTab,
    backgroundStylesMob: hoverButtonBgColorMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.HOVER_BUTTON_BG_COLOR,
    noMainBGIMG: false,
    attributes
  });
  const {
    dimensionStylesDesktop: hoverButtonBorderRadiusDesk,
    dimensionStylesTab: hoverButtonBorderRadiusTab,
    dimensionStylesMob: hoverButtonBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.HOVER_BUTTON_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: hoverButtonBoxShadow
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.HOVER_BUTTON_BOX_SHADOW,
    attributes
  });
  const {
    typoStylesDesktop: buttonTypoDesk,
    typoStylesTab: buttonTypoTab,
    typoStylesMobile: buttonTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_3__.BUTTON_TYPOGRAPHY,
    attributes
  });
  const {
    typoStylesDesktop: buttonSubTypoDesk,
    typoStylesTab: buttonSubTypoTab,
    typoStylesMobile: buttonSubTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_3__.BUTTON_SUB_TYPOGRAPHY,
    attributes
  });
  const {
    desktopRangeStyle: playBtnIconSizeDesk,
    tabRangeStyle: playBtnIconSizeTab,
    mobRangeStyle: playBtnIconSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAY_BTN_ICON_SIZE,
    property: 'width',
    attributes
  });
  const {
    desktopRangeStyle: playBtnIconHDesk,
    tabRangeStyle: playBtnIconHTab,
    mobRangeStyle: playBtnIconHMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAY_BTN_ICON_SIZE,
    property: 'height',
    attributes
  });
  const {
    dimensionStylesDesktop: playBtnPaddingDesk,
    dimensionStylesTab: playBtnPaddingTab,
    dimensionStylesMob: playBtnPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAY_BTN_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: playBtnMarginDesk,
    dimensionStylesTab: playBtnMarginTab,
    dimensionStylesMob: playBtnMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAY_BTN_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    desktopBorderStyle: playBtnBorderDesk,
    tabBorderStyle: playBtnBorderTab,
    mobBorderStyle: playBtnBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAY_BTN_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: playBtnBorderRadiusDesk,
    dimensionStylesTab: playBtnBorderRadiusTab,
    dimensionStylesMob: playBtnBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAY_BTN_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: playBtnBoxShadow
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAY_BTN_BOX_SHADOW,
    attributes
  });
  const {
    boxShadowStyle: playBtnHBoxShadow
  } = generateBoxShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAY_BTN_H_BOX_SHADOW,
    attributes
  });

  // style

  const desktopAllStyle = `
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn{
            ${posterBgColorDesk}
            ${buttonBgColorDesk}
            ${buttonBorderDesk}
            ${buttonBorderRadiusDesk}
            ${buttonPaddingDesk}
            ${buttonBoxShadow}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn:hover{
            ${hoverPosterBgColorDesk}
             ${hoverButtonBgColorDesk}
            ${hoverButtonBorderRadiusDesk}
            ${hoverButtonBoxShadow}
        }
         .${uniqueId} .zolo-play-btn .zolo-btn-icon{
            ${iconBgColorDesk}
            ${iconColor ? `border-color: ${iconColor};` : ''}
            ${playBtnPaddingDesk}
            ${playBtnMarginDesk}
            ${playBtnBorderDesk}
            ${playBtnBorderRadiusDesk}
            ${playBtnBoxShadow}
        }
        .${uniqueId} .zolo-play-btn .zolo-btn-icon svg{
             ${iconColor ? `fill: ${iconColor} !important;` : ''}
             ${playBtnIconSizeDesk}
             ${playBtnIconHDesk}
        }
        .${uniqueId} .zolo-play-btn .zolo-btn-icon:before{
            ${iconHBgColorDesk}
        }

      .${uniqueId} .zolo-play-btn:hover .zolo-btn-icon {
            ${playBtnBorderHColor ? `border-color: ${playBtnBorderHColor};` : ''}
            ${playBtnHBoxShadow}
        }

       .${uniqueId} .zolo-play-btn .zolo-btn-icon:hover svg{
            ${iconHColor ? `fill: ${iconHColor} !important;` : ''}
        }

        .${uniqueId}.zolo-lightbox-button .zolo-play-btn .zolo-btn-text {
            ${titleColor ? `color: ${titleColor};` : ''}
            ${buttonTypoDesk}
        }

        .${uniqueId}.zolo-lightbox-button .zolo-play-btn:hover .zolo-btn-text {
            ${hoverTitleColor ? `color: ${hoverTitleColor};` : ''}
        }

        .${uniqueId}.zolo-lightbox-button .zolo-play-btn small {
            ${buttonSubTypoDesk}
            ${titleSubColor ? `color: ${titleSubColor};` : ''}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn:hover small {
            ${hoverTitleSubColor ? `color: ${hoverTitleSubColor};` : ''}
        }

       .${uniqueId}.zolo-lightbox-button .zolo-lightbox-btn{
           ${buttonAlignFDesk}
      }
       .${uniqueId}.zolo-lightbox-button{
           ${buttonAlignDesk}
      }
      .${uniqueId}.zolo-lightbox-poster .zolo-poster-img {
          ${posterHeightDesk}
          ${posterBorderDesk}
        ${posterBorderRadiusDesk}
      }
    .${uniqueId}.zolo-content-iframe {
            ${contentHeightDesk}
            ${contentWidthDesk}
        }
    `;
  const tabletAllStyle = `
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn{
            ${posterBgColorTab}
            ${buttonBgColorTab}
            ${buttonBorderTab}
            ${buttonBorderRadiusTab}
            ${buttonPaddingTab}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn:hover{
            ${hoverPosterBgColorTab}
             ${hoverButtonBgColorTab}
            ${hoverButtonBorderRadiusTab}
        }
         .${uniqueId} .zolo-play-btn .zolo-btn-icon{
            ${iconBgColorTab}
            ${playBtnPaddingTab}
            ${playBtnMarginTab}
            ${playBtnBorderTab}
            ${playBtnBorderRadiusTab}
        }
        .${uniqueId} .zolo-play-btn .zolo-btn-icon svg{
             ${playBtnIconSizeTab}
             ${playBtnIconHTab}
        }
        .${uniqueId} .zolo-play-btn .zolo-btn-icon:before{
            ${iconHBgColorTab}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn .zolo-btn-text {
            ${buttonTypoTab}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn small {
            ${buttonSubTypoTab}
        }

       .${uniqueId}.zolo-lightbox-button .zolo-lightbox-btn{
           ${buttonAlignFTab}
      }
       .${uniqueId}.zolo-lightbox-button{
           ${buttonAlignTab}
      }
      .${uniqueId}.zolo-lightbox-poster .zolo-poster-img {
          ${posterHeightTab}
          ${posterBorderTab}
        ${posterBorderRadiusTab}
      }
    .${uniqueId}.zolo-content-iframe {
            ${contentHeightTab}
            ${contentWidthTab}
        }

    `;
  const mobileAllStyle = `
.${uniqueId}.zolo-lightbox-button .zolo-play-btn{
            ${posterBgColorMob}
            ${buttonBgColorMob}
            ${buttonBorderMob}
            ${buttonBorderRadiusMob}
            ${buttonPaddingMob}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn:hover{
            ${hoverPosterBgColorMob}
             ${hoverButtonBgColorMob}
            ${hoverButtonBorderRadiusMob}
        }
         .${uniqueId} .zolo-play-btn .zolo-btn-icon{
            ${iconBgColorMob}
            ${playBtnPaddingMob}
            ${playBtnMarginMob}
            ${playBtnBorderMob}
            ${playBtnBorderRadiusMob}
        }
        .${uniqueId} .zolo-play-btn .zolo-btn-icon svg{
             ${playBtnIconSizeMob}
             ${playBtnIconHMob}
        }
        .${uniqueId} .zolo-play-btn .zolo-btn-icon:before{
            ${iconHBgColorMob}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn .zolo-btn-text {
            ${buttonTypoMob}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn small {
            ${buttonSubTypoMob}
        }

       .${uniqueId}.zolo-lightbox-button .zolo-lightbox-btn{
           ${buttonAlignFMob}
      }
       .${uniqueId}.zolo-lightbox-button{
           ${buttonAlignMob}
      }
      .${uniqueId}.zolo-lightbox-poster .zolo-poster-img {
          ${posterHeightMob}
          ${posterBorderMob}
        ${posterBorderRadiusMob}
      }
    .${uniqueId}.zolo-content-iframe {
            ${contentHeightMob}
            ${contentWidthMob}
        }
    `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.lightBox.desktopAllStyle', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.lightBox.tabletAllStyle', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.lightBox.mobileAllStyle', mobileAllStyle, props)
    })
  });
}

/***/ }),

/***/ "./node_modules/fslightbox-react/index.js":
/*!************************************************!*\
  !*** ./node_modules/fslightbox-react/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>Le});const n=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");var o=e.n(n);const r=__webpack_require__(/*! react */ "react");var i=e.n(r),s="fslightbox-",c="".concat(s,"styles"),a="".concat(s,"cursor-grabbing"),l="".concat(s,"full-dimension"),u="".concat(s,"flex-centered"),f="".concat(s,"transform-transition"),d="".concat(s,"absoluted"),p="".concat(s,"fade-in"),m="".concat(s,"fade-out"),h=p+"-strong",g=m+"-strong",v="".concat(s,"opacity-1");"".concat(s,"source");const b=function(e){var t=e.size,n=e.viewBox,o=e.d;return i().createElement("svg",{width:t,height:t,viewBox:n,xmlns:"http://www.w3.org/2000/svg"},i().createElement("path",{className:"".concat(s,"svg-path"),d:o}))},x=function(e){var t=e.onClick,n=e.viewBox,o=e.size,r=e.d,c=e.title;return i().createElement("div",{onClick:t,className:"".concat(s,"toolbar-button ").concat(u),title:c},i().createElement(b,{viewBox:n,size:o,d:r}))};function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function w(e){var t=e.o,n=t.fs,o=n.o,s=n.x,c=t.fss,a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,s,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(o=i.call(n)).done)&&(c.push(o.value),c.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{if(!a&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,r.useState)(!1),2),l=a[0],u=a[1];return c.g=function(){return l},c.s=u,i().createElement(x,{onClick:l?s:o,viewBox:l?"0 0 950 1024":"0 0 18 18",size:l?"24px":"20px",d:l?"M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z":"M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",title:l?"Exit fullscreen":"Enter fullscreen"})}const S=function(e){var t=e.fsLightbox.core.lightboxCloser.closeLightbox;return i().createElement(x,{onClick:t,viewBox:"0 0 24 24",size:"20px",d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",title:"Close"})},E=function(e){var t=e.fsLightbox;return i().createElement("div",{className:"".concat(s,"toolbar")},i().createElement(w,{o:t}),i().createElement(S,{fsLightbox:t}))};function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}const A=function(e){var t,n,o=e.fsLightbox,c=o.componentsServices,a=o.props.sources,l=o.stageIndexes,u=(t=(0,r.useState)(l.current+1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,s,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(o=i.call(n)).done)&&(c.push(o.value),c.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{if(!a&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw r}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=u[0],d=u[1];c.setSlideNumber=function(e){d(e)};var p=i().createRef(),m=i().createRef();return(0,r.useEffect)((function(){m.current.offsetWidth>55&&(p.current.style.justifyContent="flex-start")}),[]),i().createElement("div",{ref:p,className:"".concat(s,"slide-number-container")},i().createElement("div",{ref:m,className:"fslightbox-flex-centered"},i().createElement("span",null,f),i().createElement("span",{className:"".concat(s,"slash")}),i().createElement("span",null,a.length)))},O=function(e){var t=e.fsLightbox;return i().createElement("div",{className:"".concat(s,"nav")},i().createElement(E,{fsLightbox:t}),t.props.sources.length>1&&i().createElement(A,{fsLightbox:t}))};function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}const I=function(e){var t,n,o=e.fsLightbox.componentsServices,c=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,s,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(o=i.call(n)).done)&&(c.push(o.value),c.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{if(!a&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw r}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],u=c[1];return o.showSlideSwipingHovererIfNotYet=function(){a||u(!0)},o.hideSlideSwipingHovererIfShown=function(){a&&u(!1)},a&&i().createElement("div",{className:"".concat(s,"slide-swiping-hoverer ").concat(l," ").concat(d)})},j=function(e){var t=e.onClick,n=e.name,o=e.d,r=n.charAt(0).toUpperCase()+n.slice(1),c="".concat(s,"slide-btn");return i().createElement("div",{onClick:t,title:"".concat(r," slide"),className:"".concat(c,"-container ").concat(c,"-").concat(n,"-container")},i().createElement("div",{className:"".concat(c," ").concat(u)},i().createElement(b,{viewBox:"0 0 20 20",size:"20px",d:o})))};function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function F(e){var t=e.o,n=t.elements.sourcesComponents,o=t.isl,s=t.loc,c=t.saw,a=t.sawu,l=t.st,u=t.stageIndexes.current,f=e.i,d=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,s,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(o=i.call(n)).done)&&(c.push(o.value),c.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{if(!a&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,r.useState)(!1),2),p=d[0],m=d[1];return a[f]=function(){m(!p)},i().createElement("div",{ref:c[f]},!o[f]&&i().createElement("div",{className:"fslightboxl"},i().createElement("div",null),i().createElement("div",null),i().createElement("div",null),i().createElement("div",null)),(f===u||!s&&l.i(f))&&n[f])}function k(e){var t=e.o,n=e.i,o=t.props.slideDistance,r=t.smw,s=t.smwm,c=t.st,a=0;s[n]={};var p=s[n];function m(){return r[n].current}function h(e){m().style.transform="translateX(".concat(e+a,"px)"),a=0}function g(){return(1+o)*innerWidth}return p.s=function(){m().style.display="flex"},p.h=function(){m().style.display="none"},p.a=function(){m().classList.add(f)},p.d=function(){m().classList.remove(f)},p.n=function(){m().style.removeProperty("transform")},p.v=function(e){return a=e,p},p.ne=function(){h(-g())},p.z=function(){h(0)},p.p=function(){h(g())},i().createElement("div",{ref:r[n],className:"".concat(d," ").concat(l," ").concat(u),style:c.i(n)?{}:{display:"none"}},i().createElement(F,{o:t,i:n}))}function T(e){return e.touches?e.touches[0].screenX:e.screenX}const R=function(e){for(var t=e.o,n=[],o=0;o<t.sl;o++)n.push(i().createElement(k,{o:t,i:o,key:o}));return i().createElement("div",{className:"".concat(d," ").concat(l),onPointerDown:function(e){!function(e,t){var n=e.elements.sources,o=e.p,r=e.smwm,i=e.stageIndexes;"IMG"===t.target.tagName&&t.preventDefault(),o.isSwiping=!0,o.downScreenX=T(t),o.swipedX=0;var s=n[i.current].current;s&&s.contains(t.target)?o.isSourceDownEventTarget=!0:o.isSourceDownEventTarget=!1;for(var c=0;c<r.length;c++)r[c].d()}(t,e)}},n)};var H=".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px!important;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-previous-container{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-previous-container{padding-left:3px}}.fslightbox-slide-btn-next-container{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-next-container{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightboxin{font-size:22px;color:#eaebeb;margin:auto}.fslightboxv{object-fit:cover}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightboxs{position:relative;z-index:2;opacity:0;transform:translateZ(0);margin:auto;backface-visibility:hidden}";function N(){var e=document.createElement("style");e.className=c,e.appendChild(document.createTextNode(H)),document.head.appendChild(e)}function M(e){for(var t=e.props.sources,n=[],o=0;o<t.length;o++)n.push(i().createRef());return n}function U(e,t,n){for(var o=0;o<e.props.sources.length;o++)e.collections[t][o]=e.resolve(n,[o])}var P="fslightbox-types";function W(e){var t,n=e.props,o=!1,r={},i=0;if(this.getSourceTypeFromLocalStorageByUrl=function(e){return t[e]?t[e]:s(e)},this.handleReceivedSourceTypeForUrl=function(e,n){if(r[n]===o&&(i--,"invalid"!==e?r[n]=e:delete r[n],0===i)){!function(e,t){for(var n in t)e[n]=t[n]}(t,r);try{localStorage.setItem(P,JSON.stringify(t))}catch(e){}}},n.disableLocalStorage)this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){};else{try{t=JSON.parse(localStorage.getItem(P))}catch(e){}t||(t={},this.getSourceTypeFromLocalStorageByUrl=s)}function s(e){i++,r[e]=o}}var B="image",D="video",X="youtube",q="custom",V="invalid";function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_.apply(this,arguments)}function Y(e){var t=e.o,n=t.collections.sourceLoadHandlers,o=t.elements.sources,r=t.props,s=r.customAttributes,c=r.sources,a=e.i;return i().createElement("img",_({className:"fslightboxs",onLoad:n[a].handleImageLoad,ref:o[a],src:c[a]},s&&s[a]?s[a]:{}))}function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},$.apply(this,arguments)}function Q(e){var t=e.o,n=t.collections.sourceLoadHandlers,o=t.elements.sources,r=t.props,s=r.customAttributes,c=r.sources,a=t.timeout,l=e.i;return a(n[l].handleNotMetaDatedVideoLoad,3e3),i().createElement("video",$({ref:o[l],className:"fslightboxs fslightboxv",src:c[l],onLoadedMetadata:n[l].handleVideoLoad,controls:!0},s&&s[l]?s[l]:{}))}function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},G.apply(this,arguments)}function J(e){var t=e.o,n=t.elements.sources,o=t.collections.sourceLoadHandlers,s=t.props,c=s.customAttributes,a=s.sources,l=e.i;(0,r.useEffect)(o[l].handleYoutubeLoad);var u=a[l],f=u.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2],d=u.split("?")[1];return d=d||"",i().createElement("iframe",G({ref:n[l],className:"fslightboxs",src:"https://www.youtube.com/embed/".concat(f,"?").concat(d),frameBorder:"0",allowFullScreen:!0},c&&c[l]?c[l]:{}))}function Z(e){var t=e.o,n=t.isl,o=t.sawu,s=t.smw,c=e.i;return(0,r.useEffect)((function(){n[c]=!0,o[c](),s[c].current.classList.add(h)})),i().createElement("div",{className:"fslightboxin ".concat(u)},"Invalid source")}function K(e){var t=e.o,n=t.collections.sourceLoadHandlers,o=t.elements.sources,s=t.props.sources,c=e.i;(0,r.useEffect)(n[c].handleCustomLoad);var a=s[c].props.className;return i().cloneElement(s[c],{ref:o[c],className:a?"".concat(a," fslightboxs"):"fslightboxs"})}function ee(e){var t=e.componentsServices.isLightboxOpenManager,n=e.elements.sourcesComponents,o=e.sawu;this.runActionsForSourceTypeAndIndex=function(r,s){var c;switch(r){case B:c=Y;break;case D:c=Q;break;case X:c=J;break;case q:c=K;break;default:c=Z}n[s]=i().createElement(c,{o:e,i:s}),t.get()&&o[s]()}}function te(e,t,n){var o=e.props,r=o.types,i=o.type,s=o.sources;this.getTypeSetByClientForIndex=function(e){var t;return r&&r[e]?t=r[e]:i&&(t=i),t},this.retrieveTypeWithXhrForIndex=function(e){!function(e,t){var n=document.createElement("a");n.href=e;var o=n.hostname;if("www.youtube.com"===o||"youtu.be"===o)return t(X);var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4!==r.readyState){if(2===r.readyState){var e,n=r.getResponseHeader("content-type");switch(n.slice(0,n.indexOf("/"))){case"image":e=B;break;case"video":e=D;break;default:e=V}r.onreadystatechange=null,r.abort(),t(e)}}else t(V)},r.open("GET",e),r.send()}(s[e],(function(o){t.handleReceivedSourceTypeForUrl(o,s[e]),n.runActionsForSourceTypeAndIndex(o,e)}))}}function ne(e){var t=e.componentsServices.isLightboxOpenManager,n=e.core,o=n.lightboxCloser,r=n.slideIndexChanger,i=e.stageIndexes;this.runTogglerUpdateActions=function(){t.get()?o.closeLightbox():e.ii?e.o():e.i()},this.runCurrentStageIndexUpdateActionsFor=function(e){e!==i.current&&(t.get()?r.jumpTo(e):i.current=e)}}function oe(e){var t=e.core.lightboxUpdater,n=(0,e.resolve)(ne);t.handleUpdate=function(t){var o=e.props;void 0!==o.source?n.runCurrentStageIndexUpdateActionsFor(o.sources.indexOf(o.source)):void 0!==o.sourceIndex?n.runCurrentStageIndexUpdateActionsFor(o.sourceIndex):void 0!==o.slide&&n.runCurrentStageIndexUpdateActionsFor(o.slide-1),t.toggler!==o.toggler&&n.runTogglerUpdateActions()}}var re=250;function ie(e){var t=e.loc,n=e.stageIndexes,o=e.sawu;if(t)o[n.current]();else for(var r in n){var i=n[r];void 0!==i&&o[i]()}}function se(e,t){var n=e.current.classList;n.contains(t)&&n.remove(t)}function ce(e){var t,n=e.dss,o=e.p,r=e.sl,i=(t=!1,function(){return!t&&(t=!0,requestAnimationFrame((function(){t=!1})),!0)});this.a=1===r||n?function(){o.swipedX=1}:function(t){o.isSwiping&&i()&&function(e,t){var n=e.componentsServices,o=e.elements.container,r=e.p,i=e.smwm,s=e.stageIndexes;n.showSlideSwipingHovererIfNotYet(),o.current.classList.add(a),r.swipedX=T(t)-r.downScreenX;var c=s.previous,l=s.next;function u(e,t){i[e].v(r.swipedX)[t]()}u(s.current,"z"),void 0!==c&&r.swipedX>0?u(c,"ne"):void 0!==l&&r.swipedX<0&&u(l,"p")}(e,t)}}function ae(e){var t=e.core.slideIndexChanger,n=e.smwm,o=e.stageIndexes,r=e.sws;function i(e){var t=n[o.current];t.a(),t[e]()}function s(e,t){void 0!==e&&(n[e].s(),n[e][t]())}this.p=function(){var e=o.previous;if(void 0===e)i("z");else{i("p");var n=o.next;t.changeTo(e);var c=o.previous;r.d(c),r.b(n),i("z"),s(c,"ne")}},this.n=function(){var e=o.next;if(void 0===e)i("z");else{i("ne");var n=o.previous;t.changeTo(e);var c=o.next;r.d(c),r.b(n),i("z"),s(c,"p")}}}function le(e){var t=e.componentsServices,n=e.core.lightboxCloser,o=e.dss,r=e.elements.container,i=e.p,s=e.props.disableBackgroundClose,c=(0,e.r)(ae);this.n=function(){t.hideSlideSwipingHovererIfShown(),i.isSourceDownEventTarget||s||n.closeLightbox(),i.isSwiping=!1},this.s=function(){o||(i.swipedX>0?c.p():c.n()),t.hideSlideSwipingHovererIfShown(),r.current.classList.remove(a),i.isSwiping=!1}}function ue(e){var t,n,o;!function(e){var t=e.props.sources,n=e.st,o=e.stageIndexes,r=t.length-1;n.p=function(){return 0===o.current?r:o.current-1},n.n=function(){return o.current===r?0:o.current+1},n.u=0===r?function(){}:1===r?function(){0===o.current?(o.next=1,delete o.previous):(o.previous=0,delete o.next)}:function(){o.previous=n.p(),o.next=n.n()},n.i=r<=2?function(){return!0}:function(e){var t=o.current;if(0===t&&e===r||t===r&&0===e)return!0;var n=t-e;return-1===n||0===n||1===n}}(e),n=(t=e).core.classFacade,o=t.elements,n.removeFromEachElementClassIfContains=function(e,t){for(var n=0;n<o[e].length;n++)se(o[e][n],t)},function(e){var t=e.fs,n=e.fss,o=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"];function r(e){for(var t=0;t<o.length;t++)document[e](o[t],i)}function i(){n.s(document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)}t.o=function(){n.s(!0);var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},t.x=function(){n.s(!1),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},t.t=function(){n.g()?t.x():t.o()},t.l=function(){r("addEventListener")},t.q=function(){r("removeEventListener")}}(e),function(e){var t,n,o=e.core,r=o.globalEventsController,i=o.windowResizeActioner,s=e.fs,c=(0,e.r)(ce);r.attachListeners=function(){document.addEventListener("pointermove",c.a),n=function(t){var n,o,r;o=(n=e).p,r=(0,n.r)(le),o.isSwiping&&(o.swipedX?r.s():r.n())},document.addEventListener("pointerup",n),addEventListener("resize",i.runActions),t=function(t){!function(e,t){var n=e.core.lightboxCloser,o=e.fs;switch(t.key){case"Escape":n.closeLightbox();break;case"ArrowLeft":e.pr();break;case"ArrowRight":e.n();break;case"F11":t.preventDefault(),o.t()}}(e,t)},document.addEventListener("keydown",t),s.l()},r.removeListeners=function(){document.removeEventListener("pointermove",c.a),document.removeEventListener("pointerup",n),removeEventListener("resize",i.runActions),document.removeEventListener("keydown",t),s.q()}}(e),function(e){var t=e.core,n=t.lightboxCloser,o=t.lightboxCloseActioner;n.closeLightbox=function(){o.isLightboxFadingOut||o.runActions()}}(e),function(e){var t=e.componentsServices.isLightboxOpenManager,n=e.core,o=n.globalEventsController,r=n.lightboxCloseActioner,i=n.scrollbarRecompensor,s=e.e,c=e.elements.container,a=e.fs,l=e.fss,u=e.p,f=e.props,d=e.timeout;r.isLightboxFadingOut=!1,r.runActions=function(){r.isLightboxFadingOut=!0,c.current.classList.add(g),o.removeListeners(),f.exitFullscreenOnClose&&l.g()&&a.x(),d((function(){r.isLightboxFadingOut=!1,u.isSwiping=!1,c.current.classList.remove(g),document.documentElement.classList.remove("fslightbox-open"),i.removeRecompense(),t.set(!1),s("onClose")}),re-30)}}(e),oe(e),function(e){var t=e.data,n=e.core.scrollbarRecompensor;n.addRecompense=function(){"complete"===document.readyState?o():window.addEventListener("load",(function(){o(),n.addRecompense=o}))};var o=function(){document.body.offsetHeight>window.innerHeight&&(document.body.style.marginRight=t.scrollbarWidth+"px")};n.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(e),function(e){var t=e.core.slideIndexChanger,n=e.sl,o=e.st;n>1?(e.pr=function(){t.jumpTo(o.p())},e.n=function(){t.jumpTo(o.n())}):(e.pr=function(){},e.n=function(){})}(e),function(e){var t=e.componentsServices,n=e.core.slideIndexChanger,o=e.isl,r=e.saw,i=e.smwm,s=e.st,c=e.stageIndexes,a=e.sws;n.changeTo=function(n){c.current=n,s.u(),t.setSlideNumber(n+1),ie(e)},n.jumpTo=function(e){var t=c.previous,l=c.current,u=c.next,f=o[l],d=o[e];n.changeTo(e);for(var h=0;h<i.length;h++)i[h].d();a.d(l),a.c(),requestAnimationFrame((function(){requestAnimationFrame((function(){var e=c.previous,n=c.current,h=c.next;function g(){s.i(l)?l===c.previous?i[l].ne():l===c.next&&i[l].p():(i[l].h(),i[l].n())}f&&r[l].current.classList.add(m),d&&r[n].current.classList.add(p),a.a(),void 0!==e&&e!==l&&i[e].ne(),i[n].n(),void 0!==h&&h!==l&&i[h].p(),a.b(t),a.b(u),o[l]?setTimeout(g,re-40):g()}))}))}}(e),function(e){var t=e.isl,n=e.stageIndexes,o=e.saw,r=e.smwm,i=e.st,s=e.sws;s.a=function(){for(var e in n)r[n[e]].s()},s.b=function(e){void 0===e||i.i(e)||(r[e].h(),r[e].n())},s.c=function(){for(var e in n)s.d(n[e])},s.d=function(e){if(t[e]){var n=o[e];se(n,h),se(n,p),se(n,m)}}}(e),function(e){var t=e.collections.sourceSizers,n=e.core.windowResizeActioner,o=e.data,r=e.elements.sources,i=e.smwm,s=e.stageIndexes;n.runActions=function(){innerWidth<992?o.maxSourceWidth=innerWidth:o.maxSourceWidth=.9*innerWidth,o.maxSourceHeight=.9*innerHeight;for(var e=0;e<r.length;e++)i[e].d(),t[e]&&r[e].current&&t[e].adjustSize();var n=s.previous,c=s.next;void 0!==n&&i[n].ne(),void 0!==c&&i[c].p()}}(e)}function fe(e,t,n,o){var r=e.data,i=e.elements.sources,s=n/o,c=0;this.adjustSize=function(){if((c=r.maxSourceWidth/s)<r.maxSourceHeight)return n<r.maxSourceWidth&&(c=o),a();c=o>r.maxSourceHeight?r.maxSourceHeight:o,a()};var a=function(){var e=i[t].current.style;e.width=c*s+"px",e.height=c+"px"}}function de(e,t){var n=this,o=e.collections.sourceSizers,r=e.elements.sources,i=e.isl,s=e.resolve,c=e.saw,a=e.sawu;function l(e,n){o[t]=s(fe,[t,e,n]),o[t].adjustSize()}this.runActions=function(e,o){i[t]=!0,a[t](),r[t].current.classList.add(v),c[t].current.classList.add(h),l(e,o),n.runActions=l}}function pe(e,t){var n,o=this,r=e.elements.sources,i=e.props,s=(0,e.resolve)(de,[t]);this.handleImageLoad=function(e){var t=e.target,n=t.naturalWidth,o=t.naturalHeight;s.runActions(n,o)},this.handleVideoLoad=function(e){var t=e.target,o=t.videoWidth,r=t.videoHeight;n=!0,s.runActions(o,r)},this.handleNotMetaDatedVideoLoad=function(){n||o.handleYoutubeLoad()},this.handleYoutubeLoad=function(){var e=1920,t=1080;i.maxYoutubeVideoDimensions&&(e=i.maxYoutubeVideoDimensions.width,t=i.maxYoutubeVideoDimensions.height),s.runActions(e,t)},this.handleCustomLoad=function(){var e=r[t].current;if(e){var n=e.offsetWidth,i=e.offsetHeight;n&&i?s.runActions(n,i):setTimeout(o.handleCustomLoad)}}}function me(e){return me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},me(e)}function he(e){return he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},he(e)}function ge(e,t,n){return ge=we()?Reflect.construct.bind():function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&xe(r,n.prototype),r},ge.apply(null,arguments)}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function be(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==he(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==he(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===he(r)?r:String(r)),o)}var r}function xe(e,t){return xe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},xe(e,t)}function ye(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function we(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function Se(e){return Se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Se(e)}"object"===("undefined"==typeof document?"undefined":me(document))&&N();var Ee=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xe(e,t)}(u,e);var t,n,o,r,a=(o=u,r=we(),function(){var e,t=Se(o);if(r){var n=Se(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===he(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ye(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=a.call(this,e)).state={isOpen:!1},t.data={maxSourceWidth:0,maxSourceHeight:0,scrollbarWidth:0},t.isl=[],t.p={isSwiping:!1,downScreenX:null,isSourceDownEventTarget:!1,swipedX:0},t.stageIndexes={current:0},t.componentsServices={showSlideSwipingHovererIfNotYet:null,hideSlideSwipingHovererIfShown:null,setSlideNumber:null,isSlideSwipingHovererShown:{},isLightboxOpenManager:{get:function(){return t.state.isOpen},set:function(e,n){t.setState({isOpen:e},n)}}},t.fss={},t.sawu=[],t.elements={container:i().createRef(),sources:null,sourcesComponents:[]},t.collections={sourceLoadHandlers:[],sourceSizers:[],xhrs:[]},t.smwm=[],t.core={classFacade:{},globalEventsController:{},lightboxCloser:{},lightboxCloseActioner:{},lightboxUpdater:{},scrollbarRecompensor:{},slideIndexChanger:{},windowResizeActioner:{}},t.fs={},t.st={},t.sws={},t.timeout=t.timeout.bind(ye(t)),t.getQueuedAction=t.getQueuedAction.bind(ye(t)),t.r=t.resolve.bind(ye(t)),t.resolve=t.resolve.bind(ye(t)),t.e=t.e.bind(ye(t)),oe(ye(t)),function(e){var t=e.componentsServices.isLightboxOpenManager,n=e.core,o=n.globalEventsController,r=n.scrollbarRecompensor,i=n.windowResizeActioner,s=e.e,c=e.elements,a=e.st,l=e.stageIndexes,u=e.sws;function f(){ie(e),document.documentElement.classList.add("fslightbox-open"),r.addRecompense(),o.attachListeners(),i.runActions(),s("onOpen")}e.o=function(){U(e,"sourceLoadHandlers",pe),t.set(!0,(function(){u.b(l.previous),u.b(l.current),u.b(l.next),a.u(),u.c(),u.a(),f(),s("onShow")}))},e.i=function(){e.ii=!0,function(e){var t=e.props;e.s=t.sources,e.sl=e.s.length,e.dss=t.disableSlideSwiping,e.loc=t.loadOnlyCurrentSource}(e),e.smw=M(e),e.saw=M(e),c.sources=M(e),U(e,"sourceLoadHandlers",pe),ue(e),a.u(),t.set(!0,(function(){f(),function(e){for(var t=e.props.sources,n=e.resolve,o=n(W),r=n(ee),i=n(te,[o,r]),s=0;s<t.length;s++)if("string"==typeof t[s]){var c=i.getTypeSetByClientForIndex(s);if(c)r.runActionsForSourceTypeAndIndex(c,s);else{var a=o.getSourceTypeFromLocalStorageByUrl(t[s]);a?r.runActionsForSourceTypeAndIndex(a,s):i.retrieveTypeWithXhrForIndex(s)}}else r.runActionsForSourceTypeAndIndex(q,s)}(e),s("onInit")}))}}(ye(t)),t}return t=u,n=[{key:"timeout",value:function(e,t){var n=this;setTimeout((function(){n.elements.container.current&&e()}),t)}},{key:"getQueuedAction",value:function(e,t){var n=this,o=[];return function(){o.push(!0),n.timeout((function(){o.pop(),o.length||e()}),t)}}},{key:"resolve",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.unshift(this),ge(e,function(e){if(Array.isArray(e))return ve(e)}(t=n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return ve(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ve(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}},{key:"e",value:function(e){var t=this.props[e];t&&t(this)}},{key:"componentDidUpdate",value:function(e,t,n){this.core.lightboxUpdater.handleUpdate(e)}},{key:"componentDidMount",value:function(){var e,t,n,o;t=(e=this).data,n=e.i,o=e.props.openOnMount,document.getElementsByClassName(c).length||N(),t.scrollbarWidth=function(){var e=document.createElement("div"),t=e.style,n=document.createElement("div");t.visibility="hidden",t.width="100px",t.msOverflowStyle="scrollbar",t.overflow="scroll",n.style.width="100%",document.body.appendChild(e);var o=e.offsetWidth;e.appendChild(n);var r=n.offsetWidth;return document.body.removeChild(e),o-r}(),o&&n()}},{key:"componentWillUnmount",value:function(){!function(e){for(var t=e.collections.xhrs,n=e.componentsServices.isLightboxOpenManager,o=e.core.globalEventsController,r=0;r<t.length;r++)t[r].abort();n.get()&&o.removeListeners()}(this)}},{key:"render",value:function(){return this.state.isOpen?i().createElement("div",{ref:this.elements.container,className:"".concat(s,"container ").concat(l," ").concat(h)},i().createElement(I,{fsLightbox:this}),i().createElement(O,{fsLightbox:this}),this.props.sources.length>1?i().createElement(i().Fragment,null,i().createElement(j,{onClick:this.pr,name:"previous",d:"M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"}),i().createElement(j,{onClick:this.n,name:"next",d:"M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"})):null,i().createElement(R,{o:this})):null}}],n&&be(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.Component);Ee.propTypes={toggler:o().bool,sources:o().array,slide:o().number,source:o().string,sourceIndex:o().number,onOpen:o().func,onClose:o().func,onInit:o().func,onShow:o().func,disableLocalStorage:o().bool,types:o().array,type:o().string,customAttributes:o().array,maxYoutubeVideoDimensions:o().object,disableBackgroundClose:o().bool,disableSlideSwiping:o().bool,exitFullscreenOnClose:o().bool,loadOnlyCurrentSource:o().bool,openOnMount:o().bool,slideDistance:o().number},Ee.defaultProps={slideDistance:.3};const Le=Ee;module.exports=t})();

/***/ }),

/***/ "./src/blocks/lightbox/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/lightbox/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


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

/***/ "./src/blocks/lightbox/block.json":
/*!****************************************!*\
  !*** ./src/blocks/lightbox/block.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Lightbox","name":"zolo/lightbox","category":"zoloblocks","keywords":["lightbox","gallery","image","video","media","modal","popup"],"description":"Create customizable lightboxes for media content.","apiVersion":3,"textdomain":"zoloblocks","example":{"attributes":{"preview":true},"viewportWidth":400},"supports":{"anchor":false,"customClassName":false,"align":["wide","full"]},"editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./frontend.js"}');

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
/******/ 			"blocks/lightbox/index": 0,
/******/ 			"blocks/lightbox/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/lightbox/style-index"], () => (__webpack_require__("./src/blocks/lightbox/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map