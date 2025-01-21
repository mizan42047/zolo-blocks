/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/post-grid/attributes.js":
/*!********************************************!*\
  !*** ./src/blocks/post-grid/attributes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/post-grid/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/post-grid/constants/typoPrefixConstant.js");
/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateNormalBGAttributes,
  generateTypographyAttributes,
  generateResCounterAttributies,
  generateResAlignmentAttributies,
  generateGapAttributes
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
  // block attributes
  preset: {
    type: 'string',
    default: 'style-1'
  },
  postTitleAnimation: {
    type: 'string',
    default: ''
  },
  titleAnimationTypeBgColor: {
    type: 'string'
  },
  showExcerpt: {
    type: 'boolean',
    default: false
  },
  postTaxonomies: {
    type: 'object',
    default: {}
  },
  metaSeparator: {
    type: 'string',
    default: '//'
  },
  postQuery: {
    type: 'object'
  },
  showFilterTaxonomy: {
    type: 'boolean',
    default: false
  },
  postTerms: {
    type: 'array',
    default: []
  },
  postTaxonomy: {
    type: 'string',
    default: 'category'
  },
  taxonomyName: {
    type: 'string',
    default: 'Category'
  },
  pageTotal: {
    type: 'number',
    default: 1
  },
  paginationType: {
    type: 'string',
    default: 'normal'
  },
  previousText: {
    type: 'string',
    default: 'Prev'
  },
  nextText: {
    type: 'string',
    default: 'Next'
  },
  loadMoreText: {
    type: 'string',
    default: 'Load More'
  },
  authorPrefix: {
    type: 'string'
  },
  ...generateResCounterAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.GRID_COLUMNS, {
    deskRange: 3,
    tabRange: 2,
    mobRange: 1
  }),
  ...generateGapAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.COLUMNS_GAP, {
    defaultUnit: 'px'
  }),
  showThumbnail: {
    type: 'boolean',
    default: true
  },
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.THUMBNAIL_HEIGHT),
  showTitle: {
    type: 'boolean',
    default: true
  },
  titleColor: {
    type: 'string'
  },
  titleHoverColor: {
    type: 'string'
  },
  titleTag: {
    type: 'string',
    default: 'h2'
  },
  titleWords: {
    type: 'number'
  },
  excerptWords: {
    type: 'number',
    default: 15
  },
  excerptindicator: {
    type: 'string',
    default: '...'
  },
  excerptColor: {
    type: 'string'
  },
  catColor: {
    type: 'string'
  },
  catBgColor: {
    type: 'string'
  },
  catHoverColor: {
    type: 'string'
  },
  catBgHoverColor: {
    type: 'string'
  },
  showReadMore: {
    type: 'boolean',
    default: false
  },
  readMoreBtnText: {
    type: 'string',
    default: 'Read More'
  },
  showCategory: {
    type: 'boolean',
    default: true
  },
  showAuthor: {
    type: 'boolean',
    default: true
  },
  namePrefixColor: {
    type: 'string'
  },
  nameColor: {
    type: 'string'
  },
  nameHoverColor: {
    type: 'string'
  },
  namePrefixHoverColor: {
    type: 'string'
  },
  showMeta: {
    type: 'boolean',
    default: true
  },
  metaColor: {
    type: 'string'
  },
  metaHColor: {
    type: 'string'
  },
  metaArrowColor: {
    type: 'string'
  },
  showPagination: {
    type: 'boolean',
    default: false
  },
  // post meta
  showReadingTime: {
    type: 'boolean',
    default: false
  },
  // readmore button
  showReadmoreText: {
    type: 'boolean',
    default: true
  },
  showReadmoreIcon: {
    type: 'boolean',
    default: false
  },
  readMoreIcon: {
    type: 'string',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>'
  },
  readMoreColor: {
    type: 'string'
  },
  readMoreIconColor: {
    type: 'string'
  },
  readMoreBgColor: {
    type: 'string'
  },
  readMoreHoverColor: {
    type: 'string'
  },
  readMoreIconHoverColor: {
    type: 'string'
  },
  readMoreBgHoverColor: {
    type: 'string'
  },
  // pagination
  pagColor: {
    type: 'string'
  },
  pagBgColor: {
    type: 'string'
  },
  apagColor: {
    type: 'string'
  },
  apagBgColor: {
    type: 'string'
  },
  pagSeparatorColor: {
    type: 'string'
  },
  //filter taxonomy
  filterColor: {
    type: 'string'
  },
  filterBgColor: {
    type: 'string'
  },
  filterBorderColor: {
    type: 'string'
  },
  filterAColor: {
    type: 'string'
  },
  filterABgColor: {
    type: 'string'
  },
  filterABorderColor: {
    type: 'string'
  },
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.COLUMN_PADDING),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.COLUMN_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.COLUMN_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.COLUMN_BORDER_RADIUS),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.COLUMN_SHADOW),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.THUMBNAIL_MARGIN),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.THUMBNAIL_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.THUMBNAIL_BORDER_RADIUS),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.THUMBNAIL_BG),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.THUMBNAIL_BOX_SHADOW),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TITLE_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.EXCERPT_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.META_MARGIN),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.CAT_GAP),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.CAT_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CAT_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CAT_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CAT_PADDING),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.READMORE_GAP),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.READMORE_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.READMORE_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.READMORE_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.READMORE_PADDING),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.AVATAR_SIZE),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.AVATAR_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AVATAR_BORDER_RADIUS),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.AVATAR_GAP),
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__)),
  //filter taxonomy
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FILTER_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FILTER_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FILTER_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FILTER_PADDING),
  ...generateResAlignmentAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FILTER_ALIGN),
  ...generateGapAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FILTER_GAP, {
    defaultUnit: 'px'
  }),
  // pagination
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.PAG_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PAG_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PAG_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PAG_PADDING),
  ...generateResAlignmentAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.PAG_ALIGN),
  // post meta
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.META_SPACE),
  // content
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_PADDING),
  // post meta arrow space
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.META_ARROW_SPACE),
  // meta box wrap
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.META_BOX_WRAP_PADDING)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/post-grid/constants/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/post-grid/constants/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AVATAR_BORDER: () => (/* binding */ AVATAR_BORDER),
/* harmony export */   AVATAR_BORDER_RADIUS: () => (/* binding */ AVATAR_BORDER_RADIUS),
/* harmony export */   AVATAR_GAP: () => (/* binding */ AVATAR_GAP),
/* harmony export */   AVATAR_SIZE: () => (/* binding */ AVATAR_SIZE),
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   CAT_BORDER: () => (/* binding */ CAT_BORDER),
/* harmony export */   CAT_BORDER_RADIUS: () => (/* binding */ CAT_BORDER_RADIUS),
/* harmony export */   CAT_GAP: () => (/* binding */ CAT_GAP),
/* harmony export */   CAT_MARGIN: () => (/* binding */ CAT_MARGIN),
/* harmony export */   CAT_PADDING: () => (/* binding */ CAT_PADDING),
/* harmony export */   COLUMNS_GAP: () => (/* binding */ COLUMNS_GAP),
/* harmony export */   COLUMN_BG: () => (/* binding */ COLUMN_BG),
/* harmony export */   COLUMN_BORDER: () => (/* binding */ COLUMN_BORDER),
/* harmony export */   COLUMN_BORDER_RADIUS: () => (/* binding */ COLUMN_BORDER_RADIUS),
/* harmony export */   COLUMN_PADDING: () => (/* binding */ COLUMN_PADDING),
/* harmony export */   COLUMN_SHADOW: () => (/* binding */ COLUMN_SHADOW),
/* harmony export */   CONTENT_PADDING: () => (/* binding */ CONTENT_PADDING),
/* harmony export */   EXCERPT_MARGIN: () => (/* binding */ EXCERPT_MARGIN),
/* harmony export */   FILTER_ALIGN: () => (/* binding */ FILTER_ALIGN),
/* harmony export */   FILTER_BORDER: () => (/* binding */ FILTER_BORDER),
/* harmony export */   FILTER_BORDER_RADIUS: () => (/* binding */ FILTER_BORDER_RADIUS),
/* harmony export */   FILTER_GAP: () => (/* binding */ FILTER_GAP),
/* harmony export */   FILTER_MARGIN: () => (/* binding */ FILTER_MARGIN),
/* harmony export */   FILTER_PADDING: () => (/* binding */ FILTER_PADDING),
/* harmony export */   GRID_COLUMNS: () => (/* binding */ GRID_COLUMNS),
/* harmony export */   META_ARROW_SPACE: () => (/* binding */ META_ARROW_SPACE),
/* harmony export */   META_BOX_WRAP_PADDING: () => (/* binding */ META_BOX_WRAP_PADDING),
/* harmony export */   META_MARGIN: () => (/* binding */ META_MARGIN),
/* harmony export */   META_SPACE: () => (/* binding */ META_SPACE),
/* harmony export */   PAG_ALIGN: () => (/* binding */ PAG_ALIGN),
/* harmony export */   PAG_BORDER: () => (/* binding */ PAG_BORDER),
/* harmony export */   PAG_BORDER_RADIUS: () => (/* binding */ PAG_BORDER_RADIUS),
/* harmony export */   PAG_MARGIN: () => (/* binding */ PAG_MARGIN),
/* harmony export */   PAG_PADDING: () => (/* binding */ PAG_PADDING),
/* harmony export */   POST_TITLE_ANIMATION: () => (/* binding */ POST_TITLE_ANIMATION),
/* harmony export */   PRESETS: () => (/* binding */ PRESETS),
/* harmony export */   READMORE_BORDER: () => (/* binding */ READMORE_BORDER),
/* harmony export */   READMORE_BORDER_RADIUS: () => (/* binding */ READMORE_BORDER_RADIUS),
/* harmony export */   READMORE_GAP: () => (/* binding */ READMORE_GAP),
/* harmony export */   READMORE_MARGIN: () => (/* binding */ READMORE_MARGIN),
/* harmony export */   READMORE_PADDING: () => (/* binding */ READMORE_PADDING),
/* harmony export */   THUMBNAIL_BG: () => (/* binding */ THUMBNAIL_BG),
/* harmony export */   THUMBNAIL_BORDER: () => (/* binding */ THUMBNAIL_BORDER),
/* harmony export */   THUMBNAIL_BORDER_RADIUS: () => (/* binding */ THUMBNAIL_BORDER_RADIUS),
/* harmony export */   THUMBNAIL_BOX_SHADOW: () => (/* binding */ THUMBNAIL_BOX_SHADOW),
/* harmony export */   THUMBNAIL_HEIGHT: () => (/* binding */ THUMBNAIL_HEIGHT),
/* harmony export */   THUMBNAIL_MARGIN: () => (/* binding */ THUMBNAIL_MARGIN),
/* harmony export */   TITLE_MARGIN: () => (/* binding */ TITLE_MARGIN),
/* harmony export */   createPreloader: () => (/* binding */ createPreloader)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const BLOCK_PREFIX = 'zolo-post-grid';
const PRESETS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 1', 'zoloblocks'),
  value: 'style-1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 2', 'zoloblocks'),
  value: 'style-2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 3', 'zoloblocks'),
  value: 'style-3'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 4', 'zoloblocks'),
  value: 'style-4'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 5 (Pro)', 'zoloblocks'),
  value: 'style-5',
  disabled: true
}];
const POST_TITLE_ANIMATION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'zoloblocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background (Pro)', 'zoloblocks'),
  value: 'zolo-post-title-type-1',
  disabled: true
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Underline (Pro)', 'zoloblocks'),
  value: 'zolo-post-title-type-2',
  disabled: true
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Middle Underline (Pro)', 'zoloblocks'),
  value: 'zolo-post-title-type-3',
  disabled: true
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overline (Pro)', 'zoloblocks'),
  value: 'zolo-post-title-type-4',
  disabled: true
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Middle Overline (Pro)', 'zoloblocks'),
  value: 'zolo-post-title-type-5',
  disabled: true
}];
const GRID_COLUMNS = 'gridColumns';
const COLUMNS_GAP = 'columnsGap';
const THUMBNAIL_HEIGHT = 'thumbHeight';

//desing
const COLUMN_PADDING = 'columnPadding';
const COLUMN_BG = 'columnBg';
const COLUMN_BORDER = 'columnBorder';
const COLUMN_BORDER_RADIUS = 'columnBRadius';
const COLUMN_SHADOW = 'columnShadow';
const THUMBNAIL_BORDER = 'thumbBorder';
const THUMBNAIL_BORDER_RADIUS = 'thumbBRadius';
const THUMBNAIL_BG = 'thumbBg';
const THUMBNAIL_BOX_SHADOW = 'thumbShadow';
const THUMBNAIL_MARGIN = 'thumbMargin';
const TITLE_MARGIN = 'titleMargin';
const EXCERPT_MARGIN = 'excerptMargin';
const META_MARGIN = 'metaMargin';
const META_BOX_WRAP_PADDING = 'metaBoxWrapPadding';
const CAT_GAP = 'catGap';
const CAT_BORDER = 'catBorder';
const CAT_BORDER_RADIUS = 'catBRadius';
const CAT_MARGIN = 'catMargin';
const CAT_PADDING = 'catPading';
const READMORE_GAP = 'readMoreGap';
const READMORE_BORDER = 'readMoreBorder';
const READMORE_BORDER_RADIUS = 'readMoreBRadius';
const READMORE_MARGIN = 'readMoreMargin';
const READMORE_PADDING = 'readMorePadding';
const AVATAR_SIZE = 'avatarSize';
const AVATAR_BORDER = 'avatarBorder';
const AVATAR_BORDER_RADIUS = 'avatarBRadius';
const AVATAR_GAP = 'avatarGap';
//filter taxonomy
const FILTER_BORDER = 'filterBorder';
const FILTER_BORDER_RADIUS = 'filterBRadius';
const FILTER_MARGIN = 'filterMargin';
const FILTER_PADDING = 'filterPadding';
const FILTER_ALIGN = 'filterAlign';
const FILTER_GAP = 'filterGap';

// pagination
const PAG_BORDER = 'pagBorder';
const PAG_BORDER_RADIUS = 'pagBRadius';
const PAG_MARGIN = 'pagMargin';
const PAG_PADDING = 'pagPadding';
const PAG_ALIGN = 'pagAlign';

// post meta
const META_SPACE = 'metaSpace';

// post meta arrow space
const META_ARROW_SPACE = 'metaArrowSpace';

// content wrapper
const CONTENT_PADDING = 'contentPadding';
const createPreloader = () => {
  const preloader = document.createElement('div');
  preloader.classList.add('preloader');
  preloader.innerHTML = `
    <div class="container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>`;
  return preloader;
};

/***/ }),

/***/ "./src/blocks/post-grid/constants/typoPrefixConstant.js":
/*!**************************************************************!*\
  !*** ./src/blocks/post-grid/constants/typoPrefixConstant.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAT_TYPOGRAPHY: () => (/* binding */ CAT_TYPOGRAPHY),
/* harmony export */   EXCERPT_TYPOGRAPHY: () => (/* binding */ EXCERPT_TYPOGRAPHY),
/* harmony export */   FILTER_TYPOGRAPHY: () => (/* binding */ FILTER_TYPOGRAPHY),
/* harmony export */   META_TYPOGRAPHY: () => (/* binding */ META_TYPOGRAPHY),
/* harmony export */   NAME_TYPOGRAPHY: () => (/* binding */ NAME_TYPOGRAPHY),
/* harmony export */   PAG_TYPOGRAPHY: () => (/* binding */ PAG_TYPOGRAPHY),
/* harmony export */   READMORE_TYPOGRAPHY: () => (/* binding */ READMORE_TYPOGRAPHY),
/* harmony export */   TITLE_TYPOGRAPHY: () => (/* binding */ TITLE_TYPOGRAPHY)
/* harmony export */ });
const TITLE_TYPOGRAPHY = 'titleTypo';
const EXCERPT_TYPOGRAPHY = 'excerptTypo';
const META_TYPOGRAPHY = 'metaTypo';
const CAT_TYPOGRAPHY = 'catTypo';
const READMORE_TYPOGRAPHY = 'readMoreTypo';
const NAME_TYPOGRAPHY = 'nameTypo';
const FILTER_TYPOGRAPHY = 'filterTypo';
const PAG_TYPOGRAPHY = 'pagTypo';

/***/ }),

/***/ "./src/blocks/post-grid/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/post-grid/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/post-grid/inspector.js");
/* harmony import */ var _render_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render-view */ "./src/blocks/post-grid/render-view.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/post-grid/style.scss");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./src/blocks/post-grid/styles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);







const {
  Pagination,
  classArrayToStr,
  SidebarOpener
} = window.zoloModule;


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
    postQuery,
    preset,
    postTitleAnimation,
    page,
    paginationType,
    loadMoreText,
    previousText,
    nextText,
    pageTotal
  } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, `${uniqueId} zolo-post-grid-wrap zolo-post-${preset}`, classArrayToStr(parentClasses), postTitleAnimation)
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (typeof postQuery === 'undefined') {
      setAttributes({
        postQuery: {
          postType: 'post',
          postExclude: [],
          postPerPage: 6,
          postOffset: 0,
          postOrderby: 'date',
          postOrder: 'desc',
          postThumbnail: '',
          showPagination: false
        }
      });
    }
  }, []);

  // preview image
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: zoloParams.blocksPreview.postGrid,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Grid Preview', 'zoloblocks')
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_7__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SidebarOpener, {
        clientId: clientId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_render_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })]
    }), postQuery?.showPagination && pageTotal > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: `zolo-pagination-wrap ${uniqueId}`,
      children: [(paginationType === 'normal' || paginationType === 'number') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Pagination, {
        total: pageTotal,
        current: page || 1,
        prevText: previousText,
        nextText: nextText,
        onClickPage: page => setAttributes({
          page
        })
      }), paginationType === 'button' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
        className: "zolo-pagination-button",
        children: loadMoreText
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/post-grid/index.js":
/*!***************************************!*\
  !*** ./src/blocks/post-grid/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/post-grid/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/post-grid/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/post-grid/edit.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/post-grid/style.scss");





const {
  BlockIcons
} = window.zoloIcons;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: BlockIcons['post-grid']
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => null
});

/***/ }),

/***/ "./src/blocks/post-grid/inspector.js":
/*!*******************************************!*\
  !*** ./src/blocks/post-grid/inspector.js ***!
  \*******************************************/
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
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/blocks/post-grid/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/blocks/post-grid/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/post-grid/constants/typoPrefixConstant.js");
/* harmony import */ var _src_global_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/global/constants */ "./src/global/constants.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









const {
  ResDimensionsControl,
  QueryControl,
  ResRangeControl,
  RangeResetControl,
  NormalBGControl,
  BorderControl,
  BoxShadowControl,
  HeaderTabs,
  TabPanelControl,
  ColorControl,
  TypographyDropdown,
  ResCounterControl,
  AdvancedOptions,
  ZoloIconPicker,
  ResAlignmentControl,
  ZoloPanelBody,
  ResGapControl,
  getTaxonomies,
  Select2AjaxControl
} = window.zoloModule;
function Inspector(props) {
  const {
    attributes,
    setAttributes,
    block
  } = props;
  const {
    preset,
    postTitleAnimation,
    titleAnimationTypeBgColor,
    resMode,
    postQuery,
    showThumbnail,
    showTitle,
    titleTag,
    showExcerpt,
    excerptindicator,
    showReadMore,
    readMoreBtnText,
    showCategory,
    showAuthor,
    showMeta,
    titleColor,
    titleHoverColor,
    excerptColor,
    metaColor,
    metaHColor,
    metaArrowColor,
    catBgColor,
    catColor,
    catBgHoverColor,
    catHoverColor,
    showReadmoreText,
    showReadmoreIcon,
    readMoreIcon,
    readMoreBgColor,
    readMoreColor,
    readMoreIconColor,
    readMoreBgHoverColor,
    readMoreHoverColor,
    readMoreIconHoverColor,
    namePrefixColor,
    nameColor,
    nameHoverColor,
    namePrefixHoverColor,
    pagColor,
    pagBgColor,
    apagColor,
    apagBgColor,
    pagSeparatorColor,
    metaSeparator,
    authorPrefix,
    // post meta
    showReadingTime,
    paginationType,
    previousText,
    nextText,
    loadMoreText,
    //for filter
    showFilterTaxonomy,
    postTerms,
    postTaxonomy,
    taxonomyName,
    filterColor,
    filterBgColor,
    filterBorderColor,
    filterAColor,
    filterABgColor,
    filterABorderColor
  } = attributes;
  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"]
  };
  const changePremade = selected => {
    setAttributes({
      preset: selected
    });
    switch (selected) {
      case 'style-1':
        setAttributes({
          showExcerpt: false,
          showReadMore: false,
          showThumbnail: true,
          zolo_gridColumnsRange: 3
        });
        break;
      case 'style-2':
        setAttributes({
          showExcerpt: false,
          showReadMore: false,
          showThumbnail: true,
          zolo_gridColumnsRange: 3
        });
        break;
      case 'style-3':
        setAttributes({
          showExcerpt: false,
          showReadMore: false,
          showThumbnail: true,
          zolo_gridColumnsRange: 3
        });
        break;
      case 'style-4':
        setAttributes({
          showExcerpt: false,
          showReadMore: false,
          showThumbnail: true,
          zolo_gridColumnsRange: 2
        });
        break;
      case 'style-5':
        setAttributes({
          showExcerpt: true,
          showReadMore: false,
          showThumbnail: true,
          zolo_gridColumnsRange: 3
        });
        break;
      default:
        break;
    }
  };

  //for only taxonomy filter
  let postType = postQuery?.postType === 'related_posts' ? postQuery?.currentPostType : postQuery?.postType;
  const zoloTaxonomies = getTaxonomies(postType || 'post', zoloParams.get_taxonomies);
  let zoloTaxonomiesFilter = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Type', 'zoloblocks-pro')
  }, ...zoloTaxonomies];
  // css filter
  const cssFilters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__.applyFilters)('zolo.extensions.controls.cssFilters', [], block, props);
  const cssFiltersHover = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__.applyFilters)('zolo.extensions.controls.cssFiltersHover', [], block, props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(HeaderTabs, {
      block: "zolo/post-grid",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'zoloblocks'),
          panelProps: props,
          firstOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Styles', 'zoloblocks'),
            value: preset,
            options: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__.applyFilters)('zolo.postGrid.presets', _constants__WEBPACK_IMPORTED_MODULE_4__.PRESETS),
            onChange: selected => changePremade(selected)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show/hide elements', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks'),
            checked: showTitle,
            onChange: () => setAttributes({
              showTitle: !showTitle
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Excerpt', 'zoloblocks'),
            checked: showExcerpt,
            onChange: () => setAttributes({
              showExcerpt: !showExcerpt
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Read More Button', 'zoloblocks'),
            checked: showReadMore,
            onChange: () => setAttributes({
              showReadMore: !showReadMore
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Category', 'zoloblocks'),
            checked: showCategory,
            onChange: () => setAttributes({
              showCategory: !showCategory
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Author', 'zoloblocks'),
            checked: showAuthor,
            onChange: () => setAttributes({
              showAuthor: !showAuthor
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta', 'zoloblocks'),
            checked: showMeta,
            onChange: () => setAttributes({
              showMeta: !showMeta
            })
          }), showMeta && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reading Time', 'zoloblocks'),
            checked: showReadingTime,
            onChange: () => setAttributes({
              showReadingTime: !showReadingTime
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pagination', 'zoloblocks'),
            checked: postQuery?.showPagination,
            onChange: showPagination => setAttributes({
              postQuery: {
                ...postQuery,
                showPagination
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'zoloblocks'),
          panelProps: props,
          children: [showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "zolo-custom-heading",
              style: {
                border: 0,
                paddingTop: 0
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tag', 'zoloblocks'),
              value: titleTag,
              options: _src_global_constants__WEBPACK_IMPORTED_MODULE_6__.HEADING,
              onChange: titleTag => setAttributes({
                titleTag
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RangeResetControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Words', 'zoloblocks'),
              controlName: 'titleWords',
              requiredProps: requiredProps,
              min: 1,
              max: 100,
              step: 1
            })]
          }), showExcerpt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "zolo-custom-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Excerpt', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(RangeResetControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Words', 'zoloblocks'),
              controlName: 'excerptWords',
              requiredProps: requiredProps,
              min: 1,
              max: 100,
              step: 1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indicator', 'zoloblocks'),
              value: excerptindicator,
              onChange: excerptindicator => setAttributes({
                excerptindicator
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta', 'zoloblocks')
          }), showMeta && showReadingTime && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator', 'zoloblocks'),
            value: metaSeparator,
            onChange: value => setAttributes({
              metaSeparator: value
            })
          }), showAuthor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Author Prefix', 'zoloblocks'),
            value: authorPrefix,
            onChange: authorPrefix => setAttributes({
              authorPrefix
            })
          })]
        }), showReadMore && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Read More Button', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
            checked: showReadmoreText,
            onChange: showReadmoreText => setAttributes({
              showReadmoreText
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks'),
            checked: showReadmoreIcon,
            onChange: showReadmoreIcon => setAttributes({
              showReadmoreIcon
            })
          }), showReadmoreText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
            value: readMoreBtnText,
            onChange: readMoreBtnText => setAttributes({
              readMoreBtnText
            })
          }), showReadmoreIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloIconPicker, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks'),
            value: readMoreIcon,
            onChange: readMoreIcon => setAttributes({
              readMoreIcon
            })
          })]
        }), postQuery?.showPagination && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pagination', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type', 'zoloblocks'),
            value: paginationType,
            options: _src_global_constants__WEBPACK_IMPORTED_MODULE_6__.PAGINARION_TYPE,
            onChange: paginationType => setAttributes({
              paginationType
            })
          }), (paginationType === 'number' || paginationType === 'normal') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Previous Text', 'zoloblocks'),
              value: previousText,
              onChange: previousText => setAttributes({
                previousText
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Next Text', 'zoloblocks'),
              value: nextText,
              onChange: nextText => setAttributes({
                nextText
              })
            })]
          }), paginationType === 'button' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Load More', 'zoloblocks'),
            value: loadMoreText,
            onChange: loadMoreText => setAttributes({
              loadMoreText
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grid', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResCounterControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.GRID_COLUMNS,
            requiredProps: requiredProps,
            min: 1,
            max: 6,
            defaults: {
              deskRange: 3,
              tabRange: 2,
              mobRange: 1
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResGapControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gap', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.COLUMNS_GAP,
            requiredProps: requiredProps,
            max: 200
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Query', 'zoloblocks'),
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(QueryControl, {
            attributes: attributes,
            setAttributes: setAttributes
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filter By Taxonomy', 'zoloblocks'),
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filter', 'zoloblocks'),
            checked: showFilterTaxonomy,
            onChange: showFilterTaxonomy => setAttributes({
              showFilterTaxonomy
            })
          }), showFilterTaxonomy && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select', 'zoloblocks-pro'),
              value: postTaxonomy,
              onChange: value => {
                const tName = zoloTaxonomiesFilter.find(option => option.value === value);
                setAttributes({
                  postTaxonomy: value
                });
                setAttributes({
                  taxonomyName: tName.label
                });
                if (postTaxonomy !== value) {
                  setAttributes({
                    postTerms: []
                  });
                }
              },
              options: zoloTaxonomiesFilter
            }), postTaxonomy && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "zolo-flex-col-control",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Select2AjaxControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(`Select ${taxonomyName}`, 'zoloblocks-pro'),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Search...', 'zoloblocks-pro'),
                sourceName: "taxonomy",
                sourceType: postTaxonomy,
                isMulti: true,
                value: postTerms || [],
                onChange: postTerms => setAttributes({
                  postTerms
                })
              })
            })]
          })]
        })]
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Item Container', 'zoloblocks'),
          firstOpen: true,
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.COLUMN_BG,
            noMainBGImg: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.COLUMN_PADDING,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.COLUMN_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BoxShadowControl, {
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.COLUMN_SHADOW,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.COLUMN_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CONTENT_PADDING,
            requiredProps: requiredProps
          })
        }), showThumbnail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thumbnail', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Height', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.THUMBNAIL_HEIGHT,
            requiredProps: requiredProps,
            min: 0,
            max: 600,
            step: 1
          }), showThumbnail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Resolution', 'zoloblocks'),
            value: postQuery?.postThumbnail,
            options: _src_global_constants__WEBPACK_IMPORTED_MODULE_6__.THUMBNAIL_SIZE,
            onChange: postThumbnail => setAttributes({
              postQuery: {
                ...postQuery,
                postThumbnail
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.THUMBNAIL_BG,
            noMainBGImg: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CONTENT_PADDING,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.THUMBNAIL_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.THUMBNAIL_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BoxShadowControl, {
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.THUMBNAIL_BOX_SHADOW,
            requiredProps: requiredProps,
            enableTransition: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.THUMBNAIL_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          }), cssFilters && cssFilters.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TabPanelControl, {
              options: [{
                value: 'normal',
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'zoloblocks')
              }, {
                value: 'hover',
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'zoloblocks')
              }],
              normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                children: cssFilters
              }),
              hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                children: cssFiltersHover
              })
            })
          })]
        }), showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: titleColor,
                onChange: color => setAttributes({
                  titleColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.TITLE_TYPOGRAPHY,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.TITLE_MARGIN,
                requiredProps: requiredProps
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animations', 'zoloblocks'),
                value: postTitleAnimation,
                options: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__.applyFilters)('zolo.postGrid.titleAnimation', _constants__WEBPACK_IMPORTED_MODULE_4__.POST_TITLE_ANIMATION),
                onChange: postTitleAnimation => setAttributes({
                  postTitleAnimation
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: titleHoverColor,
                onChange: color => setAttributes({
                  titleHoverColor: color
                })
              }), postTitleAnimation === 'zolo-post-title-type-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "zolo-custom-heading",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animation Type', 'zoloblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                  color: titleAnimationTypeBgColor,
                  onChange: color => setAttributes({
                    titleAnimationTypeBgColor: color
                  })
                })]
              })]
            })
          })
        }), showExcerpt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Excerpt', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: excerptColor,
            onChange: color => setAttributes({
              excerptColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.EXCERPT_TYPOGRAPHY,
            requiredProps: requiredProps,
            max: 36
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.EXCERPT_MARGIN,
            requiredProps: requiredProps
          })]
        }), showMeta && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: metaColor,
            onChange: metaColor => setAttributes({
              metaColor
            })
          }), preset === 'style-3' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover Color', 'zoloblocks'),
            color: metaHColor,
            onChange: metaHColor => setAttributes({
              metaHColor
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.META_TYPOGRAPHY,
            requiredProps: requiredProps,
            max: 36
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.META_MARGIN,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.META_SPACE,
            requiredProps: requiredProps,
            min: 0,
            max: 100,
            step: 1
          }), preset === 'style-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "zolo-custom-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta Wrap', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.META_BOX_WRAP_PADDING,
              requiredProps: requiredProps
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "zolo-custom-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
              color: metaArrowColor,
              onChange: metaArrowColor => setAttributes({
                metaArrowColor
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResRangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spacing', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.META_ARROW_SPACE,
              requiredProps: requiredProps,
              min: 0,
              max: 100,
              step: 1
            })]
          })]
        }), showCategory && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Category', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: catColor,
                onChange: value => setAttributes({
                  catColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.CAT_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 36
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: catBgColor,
                onChange: value => setAttributes({
                  catBgColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CAT_PADDING,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CAT_MARGIN,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CAT_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CAT_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gap', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.CAT_GAP,
                requiredProps: requiredProps,
                min: 0,
                max: 100,
                step: 1
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: catHoverColor,
                onChange: value => setAttributes({
                  catHoverColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: catBgHoverColor,
                onChange: value => setAttributes({
                  catBgHoverColor: value
                })
              })]
            })
          })
        }), showReadMore && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Read More Button', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'zoloblocks'),
                color: readMoreColor,
                onChange: value => setAttributes({
                  readMoreColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'zoloblocks'),
                color: readMoreIconColor,
                onChange: value => setAttributes({
                  readMoreIconColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.READMORE_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 36
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: readMoreBgColor,
                onChange: value => setAttributes({
                  readMoreBgColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.READMORE_PADDING,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.READMORE_MARGIN,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.READMORE_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.READMORE_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gap', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.READMORE_GAP,
                requiredProps: requiredProps,
                min: 0,
                max: 100,
                step: 1
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: readMoreHoverColor,
                onChange: value => setAttributes({
                  readMoreHoverColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'zoloblocks'),
                color: readMoreIconHoverColor,
                onChange: value => setAttributes({
                  readMoreIconHoverColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: readMoreBgHoverColor,
                onChange: value => setAttributes({
                  readMoreBgHoverColor: value
                })
              })]
            })
          })
        }), showAuthor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Author', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gap', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AVATAR_GAP,
            requiredProps: requiredProps,
            min: 0,
            max: 100,
            step: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Avatar', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AVATAR_SIZE,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AVATAR_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.AVATAR_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.NAME_TYPOGRAPHY,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Prefix Color', 'zoloblocks'),
                color: namePrefixColor,
                onChange: color => setAttributes({
                  namePrefixColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name Color', 'zoloblocks'),
                color: nameColor,
                onChange: color => setAttributes({
                  nameColor: color
                })
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name Hover Color', 'zoloblocks'),
                color: nameHoverColor,
                onChange: color => setAttributes({
                  nameHoverColor: color
                })
              }), preset === 'style-3' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Prefix Hover Color', 'zoloblocks'),
                color: namePrefixHoverColor,
                onChange: color => setAttributes({
                  namePrefixHoverColor: color
                })
              })]
            })
          })]
        }), postQuery?.showPagination && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pagination', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResAlignmentControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alignment', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.PAG_ALIGN,
            requiredProps: requiredProps,
            alignOptions: _src_global_constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_ALIGNS
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TabPanelControl, {
            options: [{
              value: 'normal',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'zoloblocks')
            }, {
              value: 'hover',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Active', 'zoloblocks')
            }],
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: pagColor,
                onChange: color => setAttributes({
                  pagColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.PAG_TYPOGRAPHY,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: pagBgColor,
                onChange: color => setAttributes({
                  pagBgColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.PAG_PADDING,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.PAG_MARGIN,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator', 'zoloblocks'),
                color: pagSeparatorColor,
                onChange: color => setAttributes({
                  pagSeparatorColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.PAG_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.PAG_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: apagColor,
                onChange: color => setAttributes({
                  apagColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: apagBgColor,
                onChange: color => setAttributes({
                  apagBgColor: color
                })
              })]
            })
          })]
        }), showFilterTaxonomy && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filter Taxonomy', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResAlignmentControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alignment', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.FILTER_ALIGN,
            requiredProps: requiredProps,
            alignOptions: _src_global_constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_ALIGNS
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TabPanelControl, {
            options: [{
              value: 'normal',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'zoloblocks')
            }, {
              value: 'active',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Active', 'zoloblocks')
            }],
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: filterColor,
                onChange: color => setAttributes({
                  filterColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_5__.FILTER_TYPOGRAPHY,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: filterBgColor,
                onChange: color => setAttributes({
                  filterBgColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.FILTER_PADDING,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.FILTER_MARGIN,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.FILTER_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.FILTER_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResGapControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gap', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_4__.FILTER_GAP,
                requiredProps: requiredProps,
                max: 100
              })]
            }),
            activeComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: filterAColor,
                onChange: color => setAttributes({
                  filterAColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: filterABgColor,
                onChange: color => setAttributes({
                  filterABgColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'zoloblocks'),
                color: filterABorderColor,
                onChange: color => setAttributes({
                  filterABorderColor: color
                })
              })]
            })
          })]
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps,
          block: "zolo/post-grid"
        })
      })
    })
  }, "controls");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/post-grid/render-view.js":
/*!*********************************************!*\
  !*** ./src/blocks/post-grid/render-view.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const {
  DynamicTag,
  DisplayZoloIcon
} = window.zoloModule;
let postContentCache = new Map();
function RenderView({
  attributes,
  setAttributes
}) {
  const {
    postQuery,
    preset,
    postTitleAnimation,
    showThumbnail,
    showTitle,
    titleWords,
    titleTag,
    showExcerpt,
    excerptWords,
    excerptindicator,
    showReadMore,
    showReadmoreText,
    showReadmoreIcon,
    readMoreBtnText,
    readMoreIcon,
    showCategory,
    showAuthor,
    showMeta,
    showReadingTime,
    metaSeparator,
    authorPrefix,
    postTerms,
    showFilterTaxonomy,
    postTaxonomy
  } = attributes;
  const defaultAuthorPrefix = preset === 'style-5' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('By', 'zoloblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Posted By', 'zoloblocks');

  //for filter taxonomy.
  const filterAll = [{
    value: 'all',
    label: 'All'
  }];
  const [filterArray, setFilterArray] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const fetchFilterData = async () => {
    const formData = new FormData();
    formData.append('action', 'zolo_get_filter_terms');
    formData.append('zolo_nonce', zoloParams.zolo_nonce);
    formData.append('postTaxonomy', postTaxonomy);
    formData.append('filterTerms', JSON.stringify(postTerms));
    try {
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
        url: zoloParams?.ajaxurl,
        method: 'POST',
        body: formData
      });
      const results = response?.data || [];
      return results.map(item => ({
        value: item.term_id,
        label: item.name
      }));
    } catch (error) {
      console.error('fetch data error', error);
      return [];
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchFilterData().then(filterLists => {
      setFilterArray([...filterAll, ...filterLists]);
    });
  }, [postTerms]);

  //for post results.
  const [currentTab, setCurrentTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [postResults, setPostResults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [dataSuccess, setDataSuccess] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const dataFetch = async (termId = '') => {
    setIsLoading(true);
    const apiData = {
      zolo_nonce: zoloParams.zolo_nonce,
      attributes: attributes,
      postQuery: postQuery,
      postTermId: termId,
      postTaxonomy: postTaxonomy
    };
    try {
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
        path: '/zolo/v1/posts',
        method: 'POST',
        data: apiData
      });
      if (response.success) {
        setPostResults([...response.data.posts]);
        setDataSuccess(response.success);
        postContentCache.set(termId, [...response.data.posts]);
        setAttributes({
          pageTotal: response.data.total_page
        });
      } else {
        setPostResults([]);
        setDataSuccess(response.success);
      }
    } catch (error) {
      console.error('Error:', error);
      setPostResults([]);
    } finally {
      setIsLoading(false);
    }
  };
  const handleFilterClick = async filterTermId => {
    setCurrentTab(filterTermId);
    if (postContentCache.has(filterTermId)) {
      setPostResults([...postContentCache.get(filterTermId)]);
      setIsLoading(false);
    } else {
      dataFetch(filterTermId);
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dataFetch();
  }, [JSON.stringify({
    ...postQuery,
    showPagination: undefined
  })]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [filterArray.length > 0 && showFilterTaxonomy && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "zolo-post-filter-taxonomy",
      children: filterArray.map(term => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
        href: "#",
        onClick: e => {
          e.preventDefault();
          handleFilterClick(term.value);
        },
        className: currentTab === term.value ? 'current' : '',
        "data-id": term.value,
        children: term.label
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "zolo-post-content-wrap",
      children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "preloader",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {})
      }), postResults.length > 0 && postResults.map(post => {
        const titleLimitWords = titleWords > 0 ? post.title.trim().split(' ', titleWords).join(' ') : post.title;
        const excerptLimitWords = excerptWords > 0 ? post.excerpt.trim().split(' ', excerptWords).join(' ') : post.excerpt;
        const categoriesHtml = post.categories.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
          className: "zolo-post-category",
          children: post.categories.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: item
            }
          }))
        }) : '';
        const avatar = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
          dangerouslySetInnerHTML: {
            __html: post.avatar
          }
        });
        const author = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "zolo-post-author-name",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: authorPrefix || defaultAuthorPrefix
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
            href: "#",
            className: "zolo-post-author-link",
            dangerouslySetInnerHTML: {
              __html: post.author
            }
          })]
        });
        const date = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "zolo-post-date",
          children: post.date
        });
        const readingTime = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "zolo-post-estimate",
          children: [post.reading_time, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Min Read', 'zoloblocks')]
        });
        const authorInfoHtml = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "zolo-post-meta-box",
          children: [avatar, author]
        });
        const dateRTimeHtml = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "zolo-post-dateTime",
          children: [date, showReadingTime && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "meta-separator",
              children: metaSeparator
            }), readingTime]
          })]
        });
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "zolo-post-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "zolo-post-image",
            children: [showThumbnail && preset !== 'style-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
              children: [post.thumbnail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                href: post.permalink,
                dangerouslySetInnerHTML: {
                  __html: post.thumbnail
                }
              }), !post.thumbnail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                href: post.permalink,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  src: zoloPlaceholders.placeholder,
                  alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Thumbnail Placeholder', 'zoloblocks')
                })
              })]
            }), preset === 'style-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "zolo-post-img-category",
              children: [showThumbnail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: [post.thumbnail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  href: post.permalink,
                  dangerouslySetInnerHTML: {
                    __html: post.thumbnail
                  }
                }), !post.thumbnail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  href: post.permalink,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    src: zoloPlaceholders.placeholder,
                    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Thumbnail Placeholder', 'zoloblocks')
                  })
                })]
              }), showCategory && categoriesHtml]
            }), showMeta && preset !== 'style-5' && dateRTimeHtml, showAuthor && preset !== 'style-5' && authorInfoHtml, preset === 'style-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "zolo-post-meta-wrap",
              children: [showMeta && preset == 'style-5' && dateRTimeHtml, showAuthor && authorInfoHtml]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "zolo-post-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "zolo-post-inner-content",
              children: [showCategory && preset !== 'style-5' && categoriesHtml, showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DynamicTag, {
                tagName: titleTag,
                className: "zolo-post-title",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  href: post.permalink,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, {
                    children: titleLimitWords
                  })
                })
              }), showExcerpt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "zolo-post-desc",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, {
                    children: excerptLimitWords
                  }), excerptindicator]
                })
              }), showMeta && preset != 'style-5' && dateRTimeHtml]
            }), showReadMore && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "zolo-post-link-btn",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                href: post.permalink,
                children: [showReadmoreText && readMoreBtnText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(readMoreBtnText, 'zoloblocks')
                }), showReadmoreIcon && readMoreIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DisplayZoloIcon, {
                  icon: readMoreIcon
                })]
              })
            })]
          })]
        });
      }), !dataSuccess && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No posts found.', 'zoloblocks')
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderView);

/***/ }),

/***/ "./src/blocks/post-grid/styles.js":
/*!****************************************!*\
  !*** ./src/blocks/post-grid/styles.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/blocks/post-grid/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/post-grid/constants/typoPrefixConstant.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  generateDimensionStyle,
  generateResRangeStyle,
  generateNormalBGControlStyles,
  generateBorderStyle,
  generateBoxShadowStyles,
  generateTypographyStyles,
  generateResCounterStyle,
  GlobalStyleHanlder,
  generateResAlignmentStyle,
  generateGapStyle
} = window.zoloModule;
function Style({
  props
}) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    preset,
    uniqueId,
    titleColor,
    titleHoverColor,
    excerptColor,
    metaColor,
    metaHColor,
    metaArrowColor,
    catBgColor,
    catColor,
    catBgHoverColor,
    catHoverColor,
    readMoreBgColor,
    readMoreColor,
    readMoreIconColor,
    readMoreBgHoverColor,
    readMoreHoverColor,
    readMoreIconHoverColor,
    namePrefixColor,
    nameColor,
    nameHoverColor,
    namePrefixHoverColor,
    pagColor,
    pagBgColor,
    apagColor,
    apagBgColor,
    pagSeparatorColor,
    filterColor,
    filterBgColor,
    filterBorderColor,
    filterAColor,
    filterABgColor,
    filterABorderColor,
    titleAnimationTypeBgColor
  } = attributes;
  const {
    active = false,
    blur = 0,
    brightness = 100,
    contrast = 100,
    saturate = 100,
    hueRotate = 0
  } = attributes?.cssFilters || {};
  const {
    active: activeHover = false,
    blur: blurHover = 0,
    brightness: brightnessHover = 100,
    contrast: contrastHover = 100,
    saturate: saturateHover = 100,
    hueRotate: hueRotateHover = 0
  } = attributes?.cssFiltersHover || {};
  const {
    desktopRangeStyle: columnCountDesk,
    tabRangeStyle: columnCountTab,
    mobRangeStyle: columnCountMob
  } = generateResCounterStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.GRID_COLUMNS,
    attributes,
    noProperty: true,
    defaults: {
      deskRange: 3,
      tabRange: 2,
      mobRange: 1
    }
  });
  const {
    gapStylesDesktop: colGapDesk,
    gapStylesTab: colGapTab,
    gapStylesMobile: colGapMob
  } = generateGapStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.COLUMNS_GAP,
    attributes
  });
  const {
    desktopRangeStyle: thumbnailHeightDesk,
    tabRangeStyle: thumbnailHeightTab,
    mobRangeStyle: thumbnailHeightMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.THUMBNAIL_HEIGHT,
    property: 'height',
    attributes
  });

  //column
  const {
    dimensionStylesDesktop: columnDeskPadding,
    dimensionStylesTab: columnTabPadding,
    dimensionStylesMobile: columnMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    backgroundStylesDesktop: columnDeskBGStyle,
    backgroundStylesTab: columnTabBGStyle,
    backgroundStylesMobile: columnMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN_BG,
    attributes,
    noMainBGImg: true
  });
  const {
    desktopBorderStyle: columnDeskBorderStyle,
    tabBorderStyle: columnTabBorderStyle,
    mobBorderStyle: columnMobBorderStyle
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: columnDeskBorderRadius,
    dimensionStylesTab: columnTabBorderRadius,
    dimensionStylesMobile: columnMobBorderRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: columnBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN_SHADOW
  });
  const {
    dimensionStylesDesktop: thumbMarginDesk,
    dimensionStylesTab: thumbMarginTab,
    dimensionStylesMobile: thumbMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.THUMBNAIL_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    backgroundStylesDesktop: thumbBgDesk,
    backgroundStylesTab: thumbBgTab,
    backgroundStylesMobile: thumbBgMob
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.THUMBNAIL_BG,
    attributes,
    noMainBGImg: true
  });
  const {
    desktopBorderStyle: thumbBorderDesk,
    tabBorderStyle: thumbBorderTab,
    mobBorderStyle: thumbBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.THUMBNAIL_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: thumbBorderRadiusDesk,
    dimensionStylesTab: thumbBorderRadiusTab,
    dimensionStylesMobile: thumbBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.THUMBNAIL_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: thumbBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.THUMBNAIL_BOX_SHADOW
  });
  const {
    typoStylesDesktop: titleTypoDesk,
    typoStylesTab: titleTypoTab,
    typoStylesMobile: titleTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.TITLE_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: titleMarginDesk,
    dimensionStylesTab: titleMarginTab,
    dimensionStylesMobile: titleMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.TITLE_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    typoStylesDesktop: excerptTypoDesk,
    typoStylesTab: excerptTypoTab,
    typoStylesMobile: excerptTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.EXCERPT_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: excerptMarginDesk,
    dimensionStylesTab: excerptMarginTab,
    dimensionStylesMobile: excerptMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.EXCERPT_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    typoStylesDesktop: metaTypoDesk,
    typoStylesTab: metaTypoTab,
    typoStylesMobile: metaTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.META_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: metaMarginDesk,
    dimensionStylesTab: metaMarginTab,
    dimensionStylesMobile: metaMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.META_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    typoStylesDesktop: catTypoDesk,
    typoStylesTab: catTypoTab,
    typoStylesMobile: catTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.CAT_TYPOGRAPHY,
    attributes
  });
  const {
    desktopRangeStyle: catGapDesk,
    tabRangeStyle: catGapTab,
    mobRangeStyle: catGapMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CAT_GAP,
    property: 'gap',
    attributes
  });
  const {
    desktopBorderStyle: catBorderDesk,
    tabBorderStyle: catBorderTab,
    mobBorderStyle: catBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CAT_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: catBorderRadiusDesk,
    dimensionStylesTab: catBorderRadiusTab,
    dimensionStylesMobile: catBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CAT_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: catMarginDesk,
    dimensionStylesTab: catMarginTab,
    dimensionStylesMobile: catMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CAT_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: catPaddingDesk,
    dimensionStylesTab: catPaddingTab,
    dimensionStylesMobile: catPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CAT_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    typoStylesDesktop: readMoreTypoDesk,
    typoStylesTab: readMoreTypoTab,
    typoStylesMobile: readMoreTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.READMORE_TYPOGRAPHY,
    attributes
  });
  const {
    desktopRangeStyle: readMoreGapDesk,
    tabRangeStyle: readMoreGapTab,
    mobRangeStyle: readMoreGapMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.READMORE_GAP,
    property: 'gap',
    attributes
  });
  const {
    desktopBorderStyle: readMoreBorderDesk,
    tabBorderStyle: readMoreBorderTab,
    mobBorderStyle: readMoreBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.READMORE_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: readMoreBorderRadiusDesk,
    dimensionStylesTab: readMoreBorderRadiusTab,
    dimensionStylesMobile: readMoreBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.READMORE_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: readMoreMarginDesk,
    dimensionStylesTab: readMoreMarginTab,
    dimensionStylesMobile: readMoreMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.READMORE_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: readMorePaddingDesk,
    dimensionStylesTab: readMorePaddingTab,
    dimensionStylesMobile: readMorePaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.READMORE_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    desktopRangeStyle: avatarWidthDesk,
    tabRangeStyle: avatarWidthTab,
    mobRangeStyle: avatarWidthMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.AVATAR_SIZE,
    property: 'width',
    attributes
  });
  const {
    desktopRangeStyle: avatarHeightDesk,
    tabRangeStyle: avatarHeightTab,
    mobRangeStyle: avatarHeightMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.AVATAR_SIZE,
    property: 'height',
    attributes
  });
  const {
    desktopBorderStyle: avatarBorderDesk,
    tabBorderStyle: avatarBorderTab,
    mobBorderStyle: avatarBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.AVATAR_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: avatarBorderRadiusDesk,
    dimensionStylesTab: avatarBorderRadiusTab,
    dimensionStylesMobile: avatarBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.AVATAR_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    desktopRangeStyle: authorGapDesk,
    tabRangeStyle: authorGapTab,
    mobRangeStyle: authorGapMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.AVATAR_GAP,
    property: 'gap',
    attributes
  });
  const {
    typoStylesDesktop: nameTypoDesk,
    typoStylesTab: nameTypoTab,
    typoStylesMobile: nameTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.NAME_TYPOGRAPHY,
    attributes
  });

  // Pagination
  const {
    desktopBorderStyle: pagBorderDesk,
    tabBorderStyle: pagBorderTab,
    mobBorderStyle: pagBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.PAG_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: pagBorderRadiusDesk,
    dimensionStylesTab: pagBorderRadiusTab,
    dimensionStylesMobile: pagBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.PAG_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    typoStylesDesktop: pagTypoDesk,
    typoStylesTab: pagTypoTab,
    typoStylesMobile: pagTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.PAG_TYPOGRAPHY,
    attributes
  });
  const {
    desktopAlignStyle: pagAlignDesk,
    tabAlignStyle: pagAlignTab,
    mobAlignStyle: pagAlignMob
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.PAG_ALIGN,
    property: 'text-align',
    attributes
  });
  const {
    dimensionStylesDesktop: pagPaddingDesk,
    dimensionStylesTab: pagPaddingTab,
    dimensionStylesMobile: pagPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.PAG_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: pagMarginDesk,
    dimensionStylesTab: pagMarginTab,
    dimensionStylesMobile: pagMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.PAG_MARGIN,
    styleFor: 'padding',
    attributes
  });

  // post meta space
  const {
    desktopRangeStyle: metaSpaceDesk,
    tabRangeStyle: metaSpaceTab,
    mobRangeStyle: metaSpaceMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.META_SPACE,
    property: 'gap',
    attributes
  });

  // post meta arrow space
  const {
    desktopRangeStyle: metaArrowSpaceDesk,
    tabRangeStyle: metaArrowSpaceTab,
    mobRangeStyle: metaArrowSpaceMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.META_ARROW_SPACE,
    property: 'left',
    attributes
  });

  // post content wrapper

  const {
    dimensionStylesDesktop: contentPaddingDesk,
    dimensionStylesTab: contentPaddingTab,
    dimensionStylesMobile: contentPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_PADDING,
    styleFor: 'padding',
    attributes
  });

  // post meta content wrapper

  const {
    dimensionStylesDesktop: metaBoxWrapPaddingDesk,
    dimensionStylesTab: metaBoxWrapPaddingTab,
    dimensionStylesMobile: metaBoxWrapPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.META_BOX_WRAP_PADDING,
    styleFor: 'padding',
    attributes
  });

  //filter taxonomy
  const {
    gapStylesDesktop: filterGapDesk,
    gapStylesTab: filterGapTab,
    gapStylesMobile: filterGapMob
  } = generateGapStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.FILTER_GAP,
    attributes
  });
  const {
    desktopBorderStyle: filterBorderDesk,
    tabBorderStyle: filterBorderTab,
    mobBorderStyle: filterBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.FILTER_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: filterBorderRadiusDesk,
    dimensionStylesTab: filterBorderRadiusTab,
    dimensionStylesMobile: filterBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.FILTER_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    typoStylesDesktop: filterTypoDesk,
    typoStylesTab: filterTypoTab,
    typoStylesMobile: filterTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_2__.FILTER_TYPOGRAPHY,
    attributes
  });
  const {
    desktopAlignStyle: filterAlignDesk,
    tabAlignStyle: filterAlignTab,
    mobAlignStyle: filterAlignMob
  } = generateResAlignmentStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.FILTER_ALIGN,
    property: 'justify-content',
    attributes
  });
  const {
    dimensionStylesDesktop: filterPaddingDesk,
    dimensionStylesTab: filterPaddingTab,
    dimensionStylesMobile: filterPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.FILTER_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: filterMarginDesk,
    dimensionStylesTab: filterMarginTab,
    dimensionStylesMobile: filterMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.FILTER_MARGIN,
    styleFor: 'margin',
    attributes
  });
  /**
   * All Style Combination
   */
  const desktopAllStyle = `
      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-content-wrap{
        grid-template-columns:repeat(${columnCountDesk}, 1fr);
        ${colGapDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-item{
        ${columnDeskPadding}
        ${columnDeskBGStyle}
        ${columnDeskBorderStyle}
        ${columnDeskBorderRadius}
        ${columnBoxShadow}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-item .zolo-post-content{
        ${contentPaddingDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-dateTime, .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-secount-dateTime {
        ${metaSpaceDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item{
        background: none !important;
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item .zolo-post-image::after{
        ${columnDeskBGStyle}
      }

      ${preset === 'style-5' ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image .wp-post-image{
            ${thumbnailHeightDesk}
            ${thumbBorderRadiusDesk}
          }

        ` : ''}

      ${preset !== 'style-5' ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image {
            ${thumbnailHeightDesk}
            ${thumbBorderRadiusDesk}
          }

        ` : ''}

      ${preset === 'style-5' ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-wrap::before{
            ${metaArrowColor ? `border-top-color:${metaArrowColor};` : ''}
            ${metaArrowSpaceDesk}
          }
        ` : ''}

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-title{
        ${titleMarginDesk}
        ${titleTypoDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-title a{
        ${titleColor ? `color:${titleColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-title a:hover,
      .${uniqueId}.zolo-block.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item:hover .zolo-post-title a
      {
        ${titleHoverColor ? `color:${titleHoverColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-desc p{
        ${excerptMarginDesk}
        ${excerptTypoDesk}
        ${excerptColor ? `color:${excerptColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image{
        ${thumbMarginDesk}
        ${thumbBgDesk}
        ${thumbBorderDesk}
        ${thumbBoxShadow}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-dateTime{
        ${metaTypoDesk}
        ${metaMarginDesk}
        ${metaColor ? `color:${metaColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item:hover .zolo-post-dateTime{
        ${metaHColor ? `color:${metaHColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-category{
        ${catGapDesk}
        ${catMarginDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-category a{
        ${catTypoDesk}
        ${catPaddingDesk}
        ${catBorderDesk}
        ${catBorderRadiusDesk}
        ${catColor ? `color:${catColor};` : ''}
        ${catBgColor ? `background-color:${catBgColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-category a:hover,
      .${uniqueId}.zolo-block.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item:hover .zolo-post-category a
      {
        ${catHoverColor ? `color:${catHoverColor};` : ''}
        ${catBgHoverColor ? `background-color:${catBgHoverColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap  .zolo-post-link-btn{
        ${readMoreMarginDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-link-btn a{
        ${readMoreGapDesk}
        ${readMoreTypoDesk}
        ${readMorePaddingDesk}
        ${readMoreBorderDesk}
        ${readMoreBorderRadiusDesk}
        ${readMoreColor ? `color:${readMoreColor};` : ''}
        ${readMoreBgColor ? `background-color:${readMoreBgColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-link-btn a svg{
        ${readMoreIconColor ? `fill:${readMoreIconColor};` : ''}
        ${readMoreIconColor ? `color:${readMoreIconColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-link-btn a:hover svg{
        ${readMoreIconHoverColor ? `fill:${readMoreIconHoverColor};` : ''}
        ${readMoreIconHoverColor ? `color:${readMoreIconHoverColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-link-btn a:hover{
        ${readMoreHoverColor ? `color:${readMoreHoverColor};` : ''}
        ${readMoreBgHoverColor ? `background-color:${readMoreBgHoverColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-box{
        ${authorGapDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-box img{
        ${avatarWidthDesk}
        ${avatarHeightDesk}
        ${avatarBorderDesk}
        ${avatarBorderRadiusDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-author-name{
        ${nameTypoDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-author-name span{
        ${namePrefixColor ? `color:${namePrefixColor} !important;` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-author-name a{
        ${nameColor ? `color:${nameColor} !important;` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-author-name a:hover,
      .${uniqueId}.zolo-block.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item:hover .zolo-post-author-name a{
        ${nameHoverColor ? `color:${nameHoverColor} !important;` : ''}
      }

      ${preset === 'style-3' ? `
           .${uniqueId}.zolo-block.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item:hover .zolo-post-author-name span{
              ${namePrefixHoverColor ? `color:${namePrefixHoverColor} !important;` : ''}
            }

        ` : ''}



      ${preset === 'style-5' ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-wrap {
            ${metaBoxWrapPaddingDesk}
          }

        ` : ''}

      .${uniqueId}.zolo-pagination-wrap {
        ${pagAlignDesk}
        ${pagMarginDesk}
      }

      .${uniqueId}.zolo-pagination-wrap .zolo-pagination-nav{
        ${pagBorderDesk}
        ${pagBorderRadiusDesk}
      }

      .${uniqueId}.zolo-pagination-wrap .page-numbers {
        ${pagTypoDesk}
        ${pagPaddingDesk}
        ${pagColor ? `color:${pagColor};` : ''}
        ${pagBgColor ? `background-color:${pagBgColor};` : ''}
      }

      .${uniqueId}.zolo-pagination-wrap .page-numbers + .page-numbers {
        border-left: 1px solid ${pagSeparatorColor ? pagSeparatorColor : '#d9d9d9'};
      }

      .${uniqueId}.zolo-pagination-wrap .page-numbers.current {
        ${apagColor ? `color:${apagColor};` : ''}
        ${apagBgColor ? `background-color:${apagBgColor};` : ''}
      }

      .${uniqueId}.zolo-pagination-wrap .page-numbers:hover {
        ${apagColor ? `color:${apagColor};` : ''}
        ${apagBgColor ? `background-color:${apagBgColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-filter-taxonomy{
        ${filterAlignDesk}
        ${filterMarginDesk}
        ${filterGapDesk}
      }
      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-filter-taxonomy a{
        ${filterBorderDesk}
        ${filterBorderRadiusDesk}
        ${filterTypoDesk}
        ${filterPaddingDesk}
        ${filterColor ? `color:${filterColor};` : ''}
        ${filterBgColor ? `background-color:${filterBgColor};` : ''}
        ${filterBorderColor ? `border-color:${filterBorderColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-filter-taxonomy a.current,
      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-filter-taxonomy a:hover{
        ${filterAColor ? `color:${filterAColor};` : ''}
        ${filterABgColor ? `background-color:${filterABgColor};` : ''}
        ${filterABorderColor ? `border-color:${filterABorderColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-title-type-1{
        ${titleAnimationTypeBgColor ? `--zolo-post-title-type-primary-color:${titleAnimationTypeBgColor};` : ''}
      }

      ${active ? `
                    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image .wp-post-image {
                        filter:
                            blur(${blur}px)
                            brightness(${brightness}%)
                            contrast(${contrast}%)
                            saturate(${saturate}%)
                            hue-rotate(${hueRotate}deg)
                    }
             ` : ''}

      ${activeHover ? `
                    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image .wp-post-image:hover {
                        filter:
                            blur(${blurHover}px)
                            brightness(${brightnessHover}%)
                            contrast(${contrastHover}%)
                            saturate(${saturateHover}%)
                            hue-rotate(${hueRotateHover}deg)
                    }
               ` : ''}
    `;
  const tabletAllStyle = `
    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-content-wrap{
      grid-template-columns:repeat(${columnCountTab}, 1fr);
      ${colGapTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-item{
      ${columnTabPadding}
      ${columnTabBGStyle}
      ${columnTabBorderStyle}
      ${columnTabBorderRadius}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-item .zolo-post-content{
      ${contentPaddingTab}
    }

    ${preset === 'style-5' ? `
        .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image .wp-post-image{
          ${thumbnailHeightTab}
          ${thumbBorderRadiusTab}
        }

      ` : ''}

    ${preset !== 'style-5' ? `
        .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image {
          ${thumbnailHeightTab}
          ${thumbBorderRadiusTab}
        }

      ` : ''}

    ${preset === 'style-5' ? `
        .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-wrap::before{
          ${metaArrowSpaceTab}
        }
      ` : ''}

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-title{
      ${titleMarginTab}
      ${titleTypoTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-desc p{
      ${excerptMarginTab}
      ${excerptTypoTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image{
      ${thumbMarginTab}
      ${thumbBgTab}
      ${thumbBorderTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-dateTime{
      ${metaTypoTab}
      ${metaMarginTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-category{
      ${catGapTab}
      ${catMarginTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-category a{
      ${catTypoTab}
      ${catPaddingTab}
      ${catBorderTab}
      ${catBorderRadiusTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap  .zolo-post-link-btn{
      ${readMoreMarginTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-link-btn a{
      ${readMoreGapTab}
      ${readMoreTypoTab}
      ${readMorePaddingTab}
      ${readMoreBorderTab}
      ${readMoreBorderRadiusTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-box{
      ${authorGapTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-box img{
      ${avatarWidthTab}
      ${avatarHeightTab}
      ${avatarBorderTab}
      ${avatarBorderRadiusTab}

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-author-name{
      ${nameTypoTab}
    }

    ${preset === 'style-5' ? `
        .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-wrap {
          ${metaBoxWrapPaddingTab}
        }

      ` : ''}

    .${uniqueId}.zolo-pagination-wrap {
      ${pagAlignTab}
      ${pagMarginTab}
    }

    .${uniqueId}.zolo-pagination-wrap .zolo-pagination-nav{
      ${pagBorderTab}
      ${pagBorderRadiusTab}
    }

    .${uniqueId}.zolo-pagination-wrap .page-numbers {
      ${pagTypoTab}
      ${pagPaddingTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-dateTime, .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-secount-dateTime {
      ${metaSpaceTab}
    }
  `;
  const mobileAllStyle = `
      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-content-wrap{
        grid-template-columns:repeat(${columnCountMob}, 1fr);
        ${colGapMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-item{
        ${columnMobPadding}
        ${columnMobBGStyle}
        ${columnMobBorderStyle}
        ${columnMobBorderRadius}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-item .zolo-post-content{
        ${contentPaddingMob}
      }

      ${preset === 'style-5' ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image .wp-post-image{
            ${thumbnailHeightMob}
            ${thumbBorderRadiusMob}
          }

        ` : ''}

      ${preset !== 'style-5' ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image {
            ${thumbnailHeightMob}
            ${thumbBorderRadiusMob}
          }

        ` : ''}

      ${preset === 'style-5' ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-wrap::before{
            ${metaArrowSpaceMob}
          }
        ` : ''}

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-title{
        ${titleMarginMob}
        ${titleTypoMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-desc p{
        ${excerptMarginMob}
        ${excerptTypoMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image{
        ${thumbMarginMob}
        ${thumbBgMob}
        ${thumbBorderMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-dateTime{
        ${metaTypoMob}
        ${metaMarginMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-category{
        ${catGapMob}
        ${catMarginMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-category a{
        ${catTypoMob}
        ${catPaddingMob}
        ${catBorderMob}
        ${catBorderRadiusMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap  .zolo-post-link-btn{
        ${readMoreMarginMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-link-btn a{
        ${readMoreGapMob}
        ${readMoreTypoMob}
        ${readMorePaddingMob}
        ${readMoreBorderMob}
        ${readMoreBorderRadiusMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-box{
        ${authorGapMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-box img{
        ${avatarWidthMob}
        ${avatarHeightMob}
        ${avatarBorderMob}
        ${avatarBorderRadiusMob}

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-author-name{
        ${nameTypoMob}
      }

      ${preset === 'style-5' ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-wrap {
            ${metaBoxWrapPaddingMob}
          }

        ` : ''}

      .${uniqueId}.zolo-pagination-wrap {
        ${pagAlignMob}
        ${pagMarginMob}
      }

      .${uniqueId}.zolo-pagination-wrap .zolo-pagination-nav{
        ${pagBorderMob}
        ${pagBorderRadiusMob}
      }

      .${uniqueId}.zolo-pagination-wrap .page-numbers {
        ${pagTypoMob}
        ${pagPaddingMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-dateTime, .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-secount-dateTime {
        ${metaSpaceMob}
      }
    `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('zolo.postGrid.desktopAllStyle', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('zolo.postGrid.tabletAllStyle', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('zolo.postGrid.mobileAllStyle', mobileAllStyle, props)
    })
  });
}
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

/***/ "./src/blocks/post-grid/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/post-grid/style.scss ***!
  \*****************************************/
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

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

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

/***/ "./src/blocks/post-grid/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/post-grid/block.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Post Grid","name":"zolo/post-grid","category":"zoloblocks","keywords":["post","grid","layout","content","organize","display","blog","magazine"],"description":"Arrange posts in dynamic grids for organized content display.","apiVersion":3,"textdomain":"zoloblocks","example":{"attributes":{"preview":true},"viewportWidth":410},"supports":{"anchor":false,"customClassName":false,"align":["wide","full"]},"editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./frontend.js"}');

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
/******/ 			"blocks/post-grid/index": 0,
/******/ 			"blocks/post-grid/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/post-grid/style-index"], () => (__webpack_require__("./src/blocks/post-grid/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map