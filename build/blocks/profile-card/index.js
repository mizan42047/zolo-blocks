/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/profile-card/attributes.js":
/*!***********************************************!*\
  !*** ./src/blocks/profile-card/attributes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/profile-card/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstants */ "./src/blocks/profile-card/constants/typoPrefixConstants.js");
/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateTypographyAttributes,
  generateNormalBGAttributes
} = window.zoloModule;


const attributes = {
  // Global Attributes
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
    default: 'default'
  },
  //Block Specific Attributes
  showBadge: {
    type: 'boolean',
    default: true
  },
  badgeText: {
    type: 'string',
    default: 'Pro'
  },
  showPhoto: {
    type: 'boolean',
    default: true
  },
  photo: {
    type: 'object',
    default: {
      id: '',
      url: zoloPlaceholders.avatarSquare,
      alt: ''
    }
  },
  imageRes: {
    type: 'string',
    default: 'full'
  },
  showName: {
    type: 'boolean',
    default: true
  },
  name: {
    type: 'string',
    default: 'John Doe'
  },
  showUsername: {
    type: 'boolean',
    default: true
  },
  username: {
    type: 'string',
    default: '@john_doe'
  },
  showEmail: {
    type: 'boolean',
    default: true
  },
  email: {
    type: 'string',
    default: 'itsjohn_doe@email.com'
  },
  showBio: {
    type: 'boolean',
    default: true
  },
  bio: {
    type: 'string',
    default: 'Proficient WordPress developer specializing in plugin customization, integration, and delivering responsive, feature-rich websites.'
  },
  showStatus: {
    type: 'boolean',
    default: true
  },
  statusItems: {
    type: 'array',
    default: [{
      id: 1,
      number: '210',
      label: 'Posts'
    }, {
      id: 2,
      number: '430',
      label: 'Followers'
    }, {
      id: 3,
      number: '210',
      label: 'Following'
    }]
  },
  showFollowButton: {
    type: 'boolean',
    default: true
  },
  followButtonText: {
    type: 'string',
    default: 'Follow'
  },
  followButtonLink: {
    type: 'object',
    default: {
      url: '#',
      openInNewTab: false
    }
  },
  showSocialProfiles: {
    type: 'boolean',
    default: true
  },
  socialProfiles: {
    type: 'array',
    default: [{
      id: 1,
      title: 'Facebook',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>',
      link: {
        url: '#',
        openInNewTab: false
      }
    }, {
      id: 2,
      title: 'Twitter',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>',
      link: {
        url: '#',
        openInNewTab: false
      }
    }, {
      id: 3,
      title: 'Instagram',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>',
      link: {
        url: '#',
        openInNewTab: false
      }
    }]
  },
  // block styles
  badgeColor: {
    type: 'string'
  },
  nameColor: {
    type: 'string'
  },
  usernameColor: {
    type: 'string'
  },
  emailColor: {
    type: 'string'
  },
  bioColor: {
    type: 'string'
  },
  numberColor: {
    type: 'string'
  },
  labelColor: {
    type: 'string'
  },
  btnColor: {
    type: 'string'
  },
  btnHoverColor: {
    type: 'string'
  },
  btnHoverBorderColor: {
    type: 'string'
  },
  // social icons
  iconColor: {
    type: 'string'
  },
  iconHoverColor: {
    type: 'string'
  },
  iconHoverBorderColor: {
    type: 'string'
  },
  // Generators
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.HEADER_AREA_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.HEADER_AREA_PADDING, {}),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.HEADER_AREA_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.HEADER_BADGE_BORDER),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BADGE_BG),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BADGE_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BADGE_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BADGE_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_BORDER_RADIUS),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.INNER_CONTENT_PADDING),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.PHOTO_SIZE, {}),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.PHOTO_VOFFSET, {}),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.PHOTO_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PHOTO_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.META_WRAP_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.NAME_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.USERNAME_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.EMAIL_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.BIO_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.STATUS_MARGIN),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.STATUS_GAP),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FBTN_BG),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FBTN_BOX_SHADOW),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FBTN_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FBTN_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FBTN_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FBTN_MARGIN),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FBTN_HOVER_BG),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FBTN_HOVER_BOX_SHADOW),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_HOVER_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_MARGIN),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_SIZE, {}),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_SPACING, {}),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PHOTO_IMG_OVERLAY),
  // typography
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_1__))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/profile-card/constants/index.js":
/*!****************************************************!*\
  !*** ./src/blocks/profile-card/constants/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BADGE_BG: () => (/* binding */ BADGE_BG),
/* harmony export */   BADGE_BORDER_RADIUS: () => (/* binding */ BADGE_BORDER_RADIUS),
/* harmony export */   BADGE_MARGIN: () => (/* binding */ BADGE_MARGIN),
/* harmony export */   BADGE_PADDING: () => (/* binding */ BADGE_PADDING),
/* harmony export */   BIO_MARGIN: () => (/* binding */ BIO_MARGIN),
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   CONTENT_BG: () => (/* binding */ CONTENT_BG),
/* harmony export */   CONTENT_BORDER: () => (/* binding */ CONTENT_BORDER),
/* harmony export */   CONTENT_BORDER_RADIUS: () => (/* binding */ CONTENT_BORDER_RADIUS),
/* harmony export */   CONTENT_MARGIN: () => (/* binding */ CONTENT_MARGIN),
/* harmony export */   CONTENT_PADDING: () => (/* binding */ CONTENT_PADDING),
/* harmony export */   EMAIL_MARGIN: () => (/* binding */ EMAIL_MARGIN),
/* harmony export */   FBTN_BG: () => (/* binding */ FBTN_BG),
/* harmony export */   FBTN_BORDER: () => (/* binding */ FBTN_BORDER),
/* harmony export */   FBTN_BORDER_RADIUS: () => (/* binding */ FBTN_BORDER_RADIUS),
/* harmony export */   FBTN_BOX_SHADOW: () => (/* binding */ FBTN_BOX_SHADOW),
/* harmony export */   FBTN_HOVER_BG: () => (/* binding */ FBTN_HOVER_BG),
/* harmony export */   FBTN_HOVER_BOX_SHADOW: () => (/* binding */ FBTN_HOVER_BOX_SHADOW),
/* harmony export */   FBTN_MARGIN: () => (/* binding */ FBTN_MARGIN),
/* harmony export */   FBTN_PADDING: () => (/* binding */ FBTN_PADDING),
/* harmony export */   HEADER_AREA_BG: () => (/* binding */ HEADER_AREA_BG),
/* harmony export */   HEADER_AREA_BORDER_RADIUS: () => (/* binding */ HEADER_AREA_BORDER_RADIUS),
/* harmony export */   HEADER_AREA_PADDING: () => (/* binding */ HEADER_AREA_PADDING),
/* harmony export */   HEADER_BADGE_BORDER: () => (/* binding */ HEADER_BADGE_BORDER),
/* harmony export */   ICONS_BG: () => (/* binding */ ICONS_BG),
/* harmony export */   ICONS_BORDER: () => (/* binding */ ICONS_BORDER),
/* harmony export */   ICONS_BORDER_RADIUS: () => (/* binding */ ICONS_BORDER_RADIUS),
/* harmony export */   ICONS_HOVER_BG: () => (/* binding */ ICONS_HOVER_BG),
/* harmony export */   ICONS_MARGIN: () => (/* binding */ ICONS_MARGIN),
/* harmony export */   ICONS_PADDING: () => (/* binding */ ICONS_PADDING),
/* harmony export */   ICONS_SIZE: () => (/* binding */ ICONS_SIZE),
/* harmony export */   ICONS_SPACING: () => (/* binding */ ICONS_SPACING),
/* harmony export */   INNER_CONTENT_PADDING: () => (/* binding */ INNER_CONTENT_PADDING),
/* harmony export */   META_WRAP_MARGIN: () => (/* binding */ META_WRAP_MARGIN),
/* harmony export */   NAME_MARGIN: () => (/* binding */ NAME_MARGIN),
/* harmony export */   PHOTO_BORDER: () => (/* binding */ PHOTO_BORDER),
/* harmony export */   PHOTO_BORDER_RADIUS: () => (/* binding */ PHOTO_BORDER_RADIUS),
/* harmony export */   PHOTO_IMG_OVERLAY: () => (/* binding */ PHOTO_IMG_OVERLAY),
/* harmony export */   PHOTO_SIZE: () => (/* binding */ PHOTO_SIZE),
/* harmony export */   PHOTO_VOFFSET: () => (/* binding */ PHOTO_VOFFSET),
/* harmony export */   PRESETS: () => (/* binding */ PRESETS),
/* harmony export */   STATUS_GAP: () => (/* binding */ STATUS_GAP),
/* harmony export */   STATUS_MARGIN: () => (/* binding */ STATUS_MARGIN),
/* harmony export */   USERNAME_MARGIN: () => (/* binding */ USERNAME_MARGIN)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Block Prefix
const BLOCK_PREFIX = 'profile-card';

// Presets
const PRESETS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preset 1', 'zoloblocks'),
  value: 'default'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preset 2 (Pro)', 'zoloblocks'),
  value: 'style-1',
  disabled: true
}];

// Container
// export const CONTAINER_BG = 'ContainerBg';

// Header Area
const HEADER_AREA_BORDER_RADIUS = 'HeaderAreaBorderRadius';
const HEADER_AREA_PADDING = 'HeaderAreaPadding';
const HEADER_BADGE_BORDER = 'HeaderBadgeBorder';
const HEADER_AREA_BG = 'HeaderAreaBg';

// Badge
const BADGE_BG = 'BadgeBg';
const BADGE_BORDER_RADIUS = 'BadgeBorderRadius';
const BADGE_PADDING = 'BadgePadding';
const BADGE_MARGIN = 'BadgeMargin';

// content
const CONTENT_BORDER_RADIUS = 'ContentBorderRadius';
const CONTENT_BG = 'ContentBg';
const CONTENT_BORDER = 'ContentBorder';
const CONTENT_PADDING = 'ContentPadding';
const CONTENT_MARGIN = 'ContentMargin';
const INNER_CONTENT_PADDING = 'InnerContentPadding';

// photo
const PHOTO_SIZE = 'PhotoSize';
const PHOTO_BORDER = 'PhotoBorder';
const PHOTO_BORDER_RADIUS = 'PhotoBorderRadius';
const PHOTO_VOFFSET = 'PhotoVOffset';
const META_WRAP_MARGIN = 'MetaWrapMargin';

// name
const NAME_MARGIN = 'NameMargin';

// username
const USERNAME_MARGIN = 'UsernameMargin';

// email
const EMAIL_MARGIN = 'EmailMargin';

// bio
const BIO_MARGIN = 'BioMargin';

// status
const STATUS_MARGIN = 'StatusMargin';
const STATUS_GAP = 'StatusGap';

// follow button
const FBTN_BG = 'fbtnBg';
const FBTN_BOX_SHADOW = 'fbtnBoxShadow';
const FBTN_BORDER = 'fbtnBorder';
const FBTN_BORDER_RADIUS = 'fbtnBorderRadius';
const FBTN_PADDING = 'fbtnPadding';
const FBTN_MARGIN = 'fbtnMargin';

// hover style
const FBTN_HOVER_BG = 'fbtnHoverBg';
const FBTN_HOVER_BOX_SHADOW = 'fbtnHoverBoxShadow';

// social icons
const ICONS_BG = 'IconsBg';
const ICONS_HOVER_BG = 'IconsHoverBg';
const ICONS_SIZE = 'IconsSize';
const ICONS_SPACING = 'IconsSpacing';
const ICONS_BORDER = 'IconsBorder';
const ICONS_BORDER_RADIUS = 'IconsBorderRadius';
const ICONS_PADDING = 'IconsPadding';
const ICONS_MARGIN = 'IconsMargin';
const PHOTO_IMG_OVERLAY = 'PhotoImgOverlay';

/***/ }),

/***/ "./src/blocks/profile-card/constants/typoPrefixConstants.js":
/*!******************************************************************!*\
  !*** ./src/blocks/profile-card/constants/typoPrefixConstants.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BADGE_TYPO: () => (/* binding */ BADGE_TYPO),
/* harmony export */   BIO_TYPO: () => (/* binding */ BIO_TYPO),
/* harmony export */   BTN_TYPO: () => (/* binding */ BTN_TYPO),
/* harmony export */   EMAIL_TYPO: () => (/* binding */ EMAIL_TYPO),
/* harmony export */   LABEL_TYPO: () => (/* binding */ LABEL_TYPO),
/* harmony export */   NUMBER_TYPO: () => (/* binding */ NUMBER_TYPO),
/* harmony export */   PROFILE_NAME: () => (/* binding */ PROFILE_NAME),
/* harmony export */   PROFILE_USERNAME: () => (/* binding */ PROFILE_USERNAME)
/* harmony export */ });
// Profile Card
const PROFILE_NAME = 'NameTypo';
const PROFILE_USERNAME = 'UsernameTypo';
const BADGE_TYPO = 'BadgeTypo';
const EMAIL_TYPO = 'EmailTypo';
const BIO_TYPO = 'BioTypo';
const NUMBER_TYPO = 'NumberTypo';
const LABEL_TYPO = 'LabelTypo';
const BTN_TYPO = 'BtnTypo';

/***/ }),

/***/ "./src/blocks/profile-card/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/profile-card/edit.js ***!
  \*****************************************/
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inspector */ "./src/blocks/profile-card/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ "./src/blocks/profile-card/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
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
    parentClasses,
    preset,
    showBadge,
    badgeText,
    showPhoto,
    photo,
    showName,
    name,
    showUsername,
    username,
    showEmail,
    email,
    showBio,
    bio,
    showStatus,
    statusItems,
    showFollowButton,
    followButtonText,
    showSocialProfiles,
    socialProfiles,
    imageRes
  } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, `${uniqueId} ${preset ? preset : ''}`, classArrayToStr(parentClasses))
  });
  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.applyFilters)('zolo.blocks.render.hook.after', [], props);
  // preview image
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
      src: zoloParams.blocksPreview.profileCard,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Profile Card Preview', 'zoloblocks')
    });
  }
  const deepCloneStatusItems = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(statusItems);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_7__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_style__WEBPACK_IMPORTED_MODULE_8__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
      children: photo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
            onSelect: media => {
              setAttributes({
                photo: {
                  id: media.id,
                  url: media.url,
                  alt: media.alt,
                  sizes: media.sizes,
                  caption: media.caption
                }
              });
            },
            allowedTypes: ['image'],
            value: photo && photo.id,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
              className: "components-toolbar__control",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace Photo', 'zoloblocks'),
              icon: "edit",
              onClick: open
            })
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      ...blockProps,
      children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(SidebarOpener, {
        clientId: clientId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "zb-profile-item",
        children: [preset !== 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "zb-profile-header-content",
          children: showBadge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "zb-profile-badge",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              children: badgeText
            })
          })
        }), showBadge && preset === 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "zb-profile-badge",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            children: badgeText
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "zb-profile-bottom-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "zb-profile-meta-wrap",
            children: [showPhoto && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "zb-profile-image",
              children: photo ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
                src: photo.sizes && photo.sizes[imageRes] ? photo.sizes[imageRes].url : photo.url,
                alt: photo.alt || 'profile card'
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
                onSelect: media => {
                  setAttributes({
                    photo: {
                      id: media.id,
                      url: media.url,
                      alt: media.alt,
                      sizes: media.sizes,
                      caption: media.caption
                    }
                  });
                },
                allowedTypes: ['image'],
                value: photo && photo.id,
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  className: "components-button button button-large",
                  onClick: open,
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload Photo', 'zoloblocks')
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "zb-profile-info",
              children: [showName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "zb-profile-name",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                  tagName: "span",
                  value: name,
                  onChange: content => setAttributes({
                    name: content
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Name', 'zoloblocks')
                })
              }), showUsername && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "zb-profile-username",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                  tagName: "span",
                  value: username,
                  onChange: content => setAttributes({
                    username: content
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Username', 'zoloblocks')
                })
              }), showEmail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "zb-profile-email",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                  tagName: "span",
                  value: email,
                  onChange: content => setAttributes({
                    email: content
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email', 'zoloblocks')
                })
              })]
            })]
          }), preset !== 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [showBio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "zb-profile-card-bio",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                value: bio,
                onChange: content => setAttributes({
                  bio: content
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bio', 'zoloblocks')
              })
            }), deepCloneStatusItems && showStatus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "zb-profile-status",
              children: deepCloneStatusItems && deepCloneStatusItems.length > 0 && deepCloneStatusItems.map((item, index) => {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  className: "zb-profile-status-item",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                    tagName: "span",
                    className: "zb-profile-status-count",
                    value: item && item.number,
                    onChange: content => {
                      let newStatusItems = [...deepCloneStatusItems];
                      newStatusItems[index].number = content;
                      setAttributes({
                        statusItems: newStatusItems
                      });
                    },
                    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number', 'zoloblocks'),
                    allowedFormats: ['core/bold', 'core/italic']
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                    tagName: "span",
                    className: "zb-profile-status-text",
                    value: item && item.label,
                    onChange: content => {
                      let newStatusItems = [...deepCloneStatusItems];
                      newStatusItems[index].label = content;
                      setAttributes({
                        statusItems: newStatusItems
                      });
                    },
                    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Label', 'zoloblocks'),
                    allowedFormats: ['core/bold', 'core/italic']
                  })]
                }, index);
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "zb-profile-socail-and-fllow",
              children: [showFollowButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                tagName: "span",
                className: "zb-profile-fllow-btn",
                value: followButtonText,
                onChange: content => setAttributes({
                  followButtonText: content
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Follow', 'zoloblocks')
              }), showSocialProfiles && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "zb-profile-socail-share",
                children: socialProfiles && socialProfiles.map((profile, index) => {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
                    href: profile.link && profile.link.url,
                    rel: profile.link.openInNewTab && 'noopener noreferer',
                    target: profile.link.openInNewTab && '_blank',
                    title: profile.title,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(DisplayZoloIcon, {
                      icon: profile.icon
                    })
                  }, index);
                })
              })]
            })]
          }), preset === 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "zb-profile-inner-content",
              children: [deepCloneStatusItems && showStatus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "zb-profile-status",
                children: deepCloneStatusItems && deepCloneStatusItems.length > 0 && deepCloneStatusItems.map((item, index) => {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                    className: "zb-profile-status-item",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                      tagName: "span",
                      className: "zb-profile-status-count",
                      value: item && item.number,
                      onChange: content => {
                        let newStatusItems = [...deepCloneStatusItems];
                        newStatusItems[index].number = content;
                        setAttributes({
                          statusItems: newStatusItems
                        });
                      },
                      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number', 'zoloblocks'),
                      allowedFormats: ['core/bold', 'core/italic']
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                      tagName: "span",
                      className: "zb-profile-status-text",
                      value: item && item.label,
                      onChange: content => {
                        let newStatusItems = [...deepCloneStatusItems];
                        newStatusItems[index].label = content;
                        setAttributes({
                          statusItems: newStatusItems
                        });
                      },
                      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Label', 'zoloblocks'),
                      allowedFormats: ['core/bold', 'core/italic']
                    })]
                  }, index);
                })
              }), showBio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "zb-profile-card-bio",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                  value: bio,
                  onChange: content => setAttributes({
                    bio: content
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bio', 'zoloblocks')
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "zb-profile-socail-and-fllow",
                children: [showFollowButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                  tagName: "span",
                  className: "zb-profile-fllow-btn",
                  value: followButtonText,
                  onChange: content => setAttributes({
                    followButtonText: content
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Follow', 'zoloblocks')
                }), showSocialProfiles && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "zb-profile-socail-share",
                  children: socialProfiles && socialProfiles.map((profile, index) => {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
                      href: profile.link && profile.link.url,
                      rel: profile.link.openInNewTab && 'noopener noreferer',
                      target: profile.link.openInNewTab && '_blank',
                      title: profile.title,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(DisplayZoloIcon, {
                        icon: profile.icon
                      })
                    }, index);
                  })
                })]
              })]
            })
          })]
        })]
      }), renderHookAfter && renderHookAfter]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/profile-card/index.js":
/*!******************************************!*\
  !*** ./src/blocks/profile-card/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/profile-card/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/profile-card/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/profile-card/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/profile-card/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/profile-card/style.scss");






const {
  BlockIcons
} = window.zoloIcons;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: BlockIcons['profile-card']
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/profile-card/inspector.js":
/*!**********************************************!*\
  !*** ./src/blocks/profile-card/inspector.js ***!
  \**********************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/blocks/profile-card/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/blocks/profile-card/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/typoPrefixConstants */ "./src/blocks/profile-card/constants/typoPrefixConstants.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sortable */ "./src/blocks/profile-card/sortable.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
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
  NormalBGControl,
  BoxShadowControl,
  ImageAvatar,
  TabPanelControl,
  HeaderTabs,
  LinkControl,
  SortableItem,
  SortableControl,
  AdvancedOptions,
  ZoloPanelBody,
  ImageSizes
} = window.zoloModule;






function Inspector(props) {
  const {
    attributes,
    setAttributes,
    block
  } = props;
  const {
    preset,
    resMode,
    showBadge,
    badgeText,
    showPhoto,
    photo,
    showName,
    name,
    showUsername,
    username,
    showEmail,
    email,
    showBio,
    bio,
    showStatus,
    statusItems,
    showFollowButton,
    followButtonText,
    followButtonLink,
    showSocialProfiles,
    socialProfiles,
    badgeColor,
    nameColor,
    usernameColor,
    emailColor,
    bioColor,
    labelColor,
    numberColor,
    btnColor,
    btnHoverColor,
    btnHoverBorderColor,
    iconColor,
    iconHoverColor,
    iconHoverBorderColor,
    imageRes
  } = attributes;
  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"]
  };
  const deepCloneStatusItems = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(statusItems);

  // css filter
  const cssFilters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.applyFilters)('zolo.extensions.controls.cssFilters', [], block, props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(HeaderTabs, {
      block: "zolo/profile-card",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'zoloblocks'),
          firstOpen: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Preset', 'zoloblocks'),
            value: preset,
            options: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.applyFilters)('zolo.profileCard.presets', _constants__WEBPACK_IMPORTED_MODULE_6__.PRESETS),
            onChange: v => {
              setAttributes({
                preset: v
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "zolo-custom-heading",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show/Hide elements', 'zoloblocks')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Badge', 'zoloblocks'),
            checked: showBadge,
            onChange: () => setAttributes({
              showBadge: !showBadge
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Photo', 'zoloblocks'),
            checked: showPhoto,
            onChange: () => setAttributes({
              showPhoto: !showPhoto
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'zoloblocks'),
            checked: showName,
            onChange: () => setAttributes({
              showName: !showName
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Username', 'zoloblocks'),
            checked: showUsername,
            onChange: () => setAttributes({
              showUsername: !showUsername
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email', 'zoloblocks'),
            checked: showEmail,
            onChange: () => setAttributes({
              showEmail: !showEmail
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bio', 'zoloblocks'),
            checked: showBio,
            onChange: () => setAttributes({
              showBio: !showBio
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Status', 'zoloblocks'),
            checked: showStatus,
            onChange: () => setAttributes({
              showStatus: !showStatus
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Follow Button', 'zoloblocks'),
            checked: showFollowButton,
            onChange: () => setAttributes({
              showFollowButton: !showFollowButton
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Social Profiles', 'zoloblocks'),
            checked: showSocialProfiles,
            onChange: () => setAttributes({
              showSocialProfiles: !showSocialProfiles
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'zoloblocks'),
          panelProps: props,
          children: [showBadge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "zolo-custom-heading",
              style: {
                border: 0,
                paddingTop: 0
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Badge', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
              value: badgeText,
              onChange: text => setAttributes({
                badgeText: text
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter Badge Text', 'zoloblocks')
            })]
          }), showPhoto && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "zolo-custom-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Photo', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select', 'zoloblocks'),
              className: "zolo-flex-col-control",
              children: photo ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ImageAvatar, {
                imageUrl: photo && photo.url,
                imageId: photo && photo.id,
                onDeleteImage: () => setAttributes({
                  photo: null
                }),
                onEditImage: media => setAttributes({
                  photo: {
                    id: media.id,
                    url: media.url,
                    alt: media.alt,
                    sizes: media.sizes,
                    caption: media.caption
                  }
                })
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
                onSelect: media => {
                  setAttributes({
                    photo: {
                      id: media.id,
                      url: media.url,
                      alt: media.alt,
                      sizes: media.sizes,
                      caption: media.caption
                    }
                  });
                },
                allowedTypes: ['image'],
                value: photo && photo.id,
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                  className: "zolo-image-upload-btn",
                  onClick: open,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("svg", {
                    width: "24",
                    height: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("path", {
                      d: "M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"
                    })
                  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(' Upload Photo', 'zoloblocks')]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ImageSizes, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Resolution', 'zoloblocks'),
              value: imageRes,
              onChange: value => setAttributes({
                imageRes: value
              })
            })]
          }), showName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "zolo-custom-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
              onChange: value => setAttributes({
                name: value
              }),
              value: name,
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name..', 'zoloblocks')
            })]
          }), showUsername && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "zolo-custom-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Username', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
              onChange: value => setAttributes({
                username: value
              }),
              value: username,
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Username..', 'zoloblocks')
            })]
          }), showEmail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "zolo-custom-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
              onChange: value => setAttributes({
                email: value
              }),
              value: email,
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email..', 'zoloblocks')
            })]
          }), showBio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "zolo-custom-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bio', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
              className: "zolo-flex-col-control",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
              value: bio,
              onChange: value => setAttributes({
                bio: value
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bio..', 'zoloblocks')
            })]
          })]
        }), showStatus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Status', 'zoloblocks'),
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(SortableControl, {
            defaultItems: statusItems,
            attributeName: "statusItems",
            setAttributes: setAttributes,
            children: deepCloneStatusItems && deepCloneStatusItems.map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                className: "dnd-container no-trash",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(SortableItem, {
                  id: item.id,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
                    title: item.label,
                    initialOpen: false,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number', 'zoloblocks'),
                      value: item && item.number,
                      onChange: value => {
                        let newStatusItems = [...deepCloneStatusItems];
                        newStatusItems[index].number = value;
                        setAttributes({
                          statusItems: newStatusItems
                        });
                      },
                      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Counter Number..', 'zoloblocks')
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'zoloblocks'),
                      value: item && item.label,
                      onChange: value => {
                        let newStatusItems = [...deepCloneStatusItems];
                        newStatusItems[index].label = value;
                        setAttributes({
                          statusItems: newStatusItems
                        });
                      },
                      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Counter Label..', 'zoloblocks')
                    })]
                  })
                }, item.id)
              }, index);
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Follow Button', 'zoloblocks'),
          panelProps: props,
          children: showFollowButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'zoloblocks'),
              onChange: v => setAttributes({
                followButtonText: v
              }),
              value: followButtonText,
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('text..', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(LinkControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('URL', 'zoloblocks'),
              value: followButtonLink,
              onChange: value => setAttributes({
                followButtonLink: value
              })
            })]
          })
        }), showSocialProfiles && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Social Profiles', 'zoloblocks'),
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sortable__WEBPACK_IMPORTED_MODULE_9__["default"], {
            socialProfiles: socialProfiles,
            setAttributes: setAttributes
          })
        })]
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: [preset !== 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Header Area', 'zoloblocks'),
          firstOpen: true,
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.HEADER_AREA_BG,
            noMainBGImg: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.HEADER_AREA_PADDING,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.HEADER_AREA_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          })]
        }), showBadge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Header Badge', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: badgeColor,
            onChange: color => setAttributes({
              badgeColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.BADGE_TYPO,
            requiredProps: requiredProps,
            max: 36
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.BADGE_BG,
            noMainBGImg: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.BADGE_PADDING,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), preset === 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.BADGE_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.HEADER_BADGE_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.BADGE_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ZoloPanelBody
        // title={__('Content Area', 'zoloblocks')}
        , {
          title: preset === 'style-1' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Item Wrapper', 'zoloblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Area', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_BG,
            noMainBGImg: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_PADDING,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          }), preset === 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "zolo-custom-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.INNER_CONTENT_PADDING,
              requiredProps: requiredProps,
              forBorderRadius: false
            })]
          })]
        }), showPhoto && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Photo', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PHOTO_SIZE,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PHOTO_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PHOTO_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          }), preset !== 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResRangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical Offset', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PHOTO_VOFFSET,
              requiredProps: requiredProps,
              min: -250,
              max: 250
            })]
          }), preset === 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "zolo-custom-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(NormalBGControl, {
              requiredProps: requiredProps,
              controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PHOTO_IMG_OVERLAY,
              noMainBGImg: true
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "zolo-custom-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta Wrapper')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(' Margin', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.META_WRAP_MARGIN,
              requiredProps: requiredProps,
              forBorderRadius: false
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), cssFilters && cssFilters.length > 0 && cssFilters]
        }), showName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: nameColor,
            onChange: color => setAttributes({
              nameColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.PROFILE_NAME,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.NAME_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          })]
        }), showUsername && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Username', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: usernameColor,
            onChange: color => setAttributes({
              usernameColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.PROFILE_USERNAME,
            requiredProps: requiredProps,
            max: 64
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.USERNAME_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          })]
        }), showEmail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: emailColor,
            onChange: color => setAttributes({
              emailColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.EMAIL_TYPO,
            requiredProps: requiredProps,
            max: 36
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.EMAIL_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          })]
        }), showBio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bio', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: bioColor,
            onChange: color => setAttributes({
              bioColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.BIO_TYPO,
            requiredProps: requiredProps,
            max: 36
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.BIO_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          })]
        }), showStatus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Status', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "zolo-custom-heading",
            style: {
              border: 0,
              paddingTop: 0
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: numberColor,
            onChange: color => setAttributes({
              numberColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.NUMBER_TYPO,
            requiredProps: requiredProps,
            max: 36
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: labelColor,
            onChange: color => setAttributes({
              labelColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.LABEL_TYPO,
            requiredProps: requiredProps,
            max: 36
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.STATUS_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gap', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.STATUS_GAP,
            requiredProps: requiredProps
          })]
        }), showFollowButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Follow Button', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: btnColor,
                onChange: color => setAttributes({
                  btnColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.BTN_TYPO,
                requiredProps: requiredProps,
                max: 36
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.FBTN_BG,
                noMainBGImg: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.FBTN_PADDING,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.FBTN_MARGIN,
                requiredProps: requiredProps,
                forBorderRadius: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.FBTN_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.FBTN_BOX_SHADOW,
                requiredProps: requiredProps,
                enableTransition: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.FBTN_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: btnHoverColor,
                onChange: color => setAttributes({
                  btnHoverColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.FBTN_HOVER_BG,
                noMainBGImg: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.FBTN_HOVER_BOX_SHADOW,
                requiredProps: requiredProps,
                enableTransition: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'zoloblocks'),
                color: btnHoverBorderColor,
                onChange: color => setAttributes({
                  btnHoverBorderColor: color
                })
              })]
            })
          })
        }), showSocialProfiles && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Social Profiles', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: iconColor,
                onChange: color => setAttributes({
                  iconColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_SIZE,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_BG,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_PADDING,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_MARGIN,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_BORDER_RADIUS,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spacing', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_SPACING,
                requiredProps: requiredProps
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: iconHoverColor,
                onChange: color => setAttributes({
                  iconHoverColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_HOVER_BG,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'zoloblocks'),
                color: iconHoverBorderColor,
                onChange: color => setAttributes({
                  iconHoverBorderColor: color
                })
              })]
            })
          })
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps,
          block: "zolo/profile-card"
        })
      })
    })
  }, "controls");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/profile-card/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/profile-card/save.js ***!
  \*****************************************/
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
    parentClasses,
    preset,
    showBadge,
    badgeText,
    showPhoto,
    photo,
    showName,
    name,
    showUsername,
    username,
    showEmail,
    email,
    showBio,
    bio,
    showStatus,
    statusItems,
    showFollowButton,
    followButtonText,
    followButtonLink,
    showSocialProfiles,
    socialProfiles,
    zoloId,
    imageRes
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(uniqueId, `${preset ? preset : ''}`, classArrayToStr(parentClasses))
  });
  // filter hooks for render
  const renderHookBefore = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('zolo.blocks.render.hook.before', [], props);
  const renderHookAfter = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('zolo.blocks.render.hook.after', [], props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    ...blockProps,
    ...(zoloId && {
      id: zoloId
    }),
    children: [renderHookBefore && renderHookBefore, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "zb-profile-item",
      children: [preset !== 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "zb-profile-header-content",
        children: showBadge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "zb-profile-badge",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            children: badgeText
          })
        })
      }), showBadge && preset === 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "zb-profile-badge",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: badgeText
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "zb-profile-bottom-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "zb-profile-meta-wrap",
          children: [showPhoto && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "zb-profile-image",
            children: photo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              src: photo.sizes && photo.sizes[imageRes] ? photo.sizes[imageRes].url : photo.url,
              alt: photo.alt || 'profile card',
              className: `wp-image-${photo.id}`,
              loading: "lazy"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "zb-profile-info",
            children: [showName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "zb-profile-name",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                value: name
              })
            }), showUsername && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "zb-profile-username",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                value: username
              })
            }), showEmail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "zb-profile-email",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                value: email
              })
            })]
          })]
        }), preset !== 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [showBio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "zb-profile-card-bio",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              value: bio
            })
          }), showStatus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "zb-profile-status",
            children: statusItems && statusItems.length > 0 && statusItems.map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "zb-profile-status-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                  tagName: "span",
                  className: "zb-profile-status-count",
                  value: item && item.number
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                  tagName: "span",
                  className: "zb-profile-status-text",
                  value: item && item.label
                })]
              }, index);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "zb-profile-socail-and-fllow",
            children: [showFollowButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "zb-profile-fllow-btn",
              href: followButtonLink && followButtonLink.url && followButtonLink.url,
              target: followButtonLink && followButtonLink.openInNewTab && '_blank',
              rel: followButtonLink && followButtonLink.openInNewTab && 'noopener noreferrer',
              title: followButtonText,
              children: followButtonText
            }), showSocialProfiles && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "zb-profile-socail-share",
              children: socialProfiles && socialProfiles.map((profile, index) => {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                  href: profile.link && profile.link.url,
                  rel: profile.link.openInNewTab && 'noopener noreferer',
                  target: profile.link.openInNewTab && '_blank',
                  title: profile.title,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DisplayZoloIcon, {
                    icon: profile.icon
                  })
                }, index);
              })
            })]
          })]
        }), preset === 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "zb-profile-inner-content",
            children: [showStatus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "zb-profile-status",
              children: statusItems && statusItems.length > 0 && statusItems.map((item, index) => {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "zb-profile-status-item",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                    tagName: "span",
                    className: "zb-profile-status-count",
                    value: item && item.number
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                    tagName: "span",
                    className: "zb-profile-status-text",
                    value: item && item.label
                  })]
                }, index);
              })
            }), showBio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "zb-profile-card-bio",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                value: bio
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "zb-profile-socail-and-fllow",
              children: [showFollowButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "zb-profile-fllow-btn",
                href: followButtonLink && followButtonLink.url && followButtonLink.url,
                target: followButtonLink && followButtonLink.openInNewTab && '_blank',
                rel: followButtonLink && followButtonLink.openInNewTab && 'noopener noreferrer',
                title: followButtonText,
                children: followButtonText
              }), showSocialProfiles && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "zb-profile-socail-share",
                children: socialProfiles && socialProfiles.map((profile, index) => {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                    href: profile.link && profile.link.url,
                    rel: profile.link.openInNewTab && 'noopener noreferer',
                    target: profile.link.openInNewTab && '_blank',
                    title: profile.title,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DisplayZoloIcon, {
                      icon: profile.icon
                    })
                  }, index);
                })
              })]
            })]
          })
        })]
      })]
    }), renderHookAfter && renderHookAfter]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/profile-card/sortable.js":
/*!*********************************************!*\
  !*** ./src/blocks/profile-card/sortable.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




/**
 * Internal depencencies
 */

const {
  ZoloIconPicker,
  LinkControl,
  SortableItem,
  SortableControl
} = window.zoloModule;
const Sortable = ({
  socialProfiles,
  setAttributes
}) => {
  const deepCloneSocialProfiles = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(socialProfiles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "sortable",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "zb-repeater-flex",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "repeater-label",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a Profile', 'zoloblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: () => setAttributes({
          socialProfiles: [...socialProfiles, {
            id: socialProfiles.length + 1,
            title: 'Facebook',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>',
            link: {
              url: '#',
              openInNewTab: false
            }
          }]
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            d: "M12 8V16",
            stroke: "#4D4D4D",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            d: "M16 12H8",
            stroke: "#4D4D4D",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SortableControl, {
      defaultItems: socialProfiles,
      attributeName: "socialProfiles",
      setAttributes: setAttributes,
      children: deepCloneSocialProfiles && deepCloneSocialProfiles.map((profile, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "dnd-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            className: "dnd-trash",
            icon: "trash",
            onClick: () => {
              const newItems = [...deepCloneSocialProfiles];
              newItems.splice(index, 1);
              setAttributes({
                socialProfiles: newItems
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SortableItem, {
            id: profile.id,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
              title: profile.title || 'Title',
              initialOpen: false,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'zoloblocks'),
                value: profile.title,
                onChange: value => {
                  const newItems = [...deepCloneSocialProfiles];
                  newItems[index].title = value;
                  setAttributes({
                    socialProfiles: newItems
                  });
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ZoloIconPicker, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Icon', 'zoloblocks'),
                value: profile.icon,
                onChange: value => {
                  const newItems = [...deepCloneSocialProfiles];
                  newItems[index].icon = value;
                  setAttributes({
                    socialProfiles: newItems
                  });
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LinkControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link', 'zoloblocks'),
                value: profile.link,
                onChange: value => {
                  const newItems = [...deepCloneSocialProfiles];
                  newItems[index].link = value;
                  setAttributes({
                    socialProfiles: newItems
                  });
                }
              })]
            })
          }, profile.id)]
        }, index);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);

/***/ }),

/***/ "./src/blocks/profile-card/style.js":
/*!******************************************!*\
  !*** ./src/blocks/profile-card/style.js ***!
  \******************************************/
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/blocks/profile-card/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/typoPrefixConstants */ "./src/blocks/profile-card/constants/typoPrefixConstants.js");
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
  generateBoxShadowStyles,
  generateNormalBGControlStyles,
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
    preset,
    uniqueId,
    badgeColor,
    nameColor,
    usernameColor,
    emailColor,
    bioColor,
    numberColor,
    labelColor,
    btnColor,
    btnHoverColor,
    btnHoverBorderColor,
    iconColor,
    iconHoverColor,
    iconHoverBorderColor
  } = attributes;
  const {
    active = false,
    blur = 0,
    brightness = 100,
    contrast = 100,
    saturate = 100,
    hueRotate = 0
  } = attributes?.cssFilters || {};

  // header area part
  const {
    dimensionStylesDesktop: headerAreaDeskBorderRadius,
    dimensionStylesTab: headerAreaTabBorderRadius,
    dimensionStylesMobile: headerAreaMobBorderRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.HEADER_AREA_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: headerAreaDeskPadding,
    dimensionStylesTab: headerAreaTabPadding,
    dimensionStylesMobile: headerAreaMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.HEADER_AREA_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    backgroundStylesDesktop: headerAreaBgDeskStyle,
    backgroundStylesTab: headerAreaBgTabStyle,
    backgroundStylesMobile: headerAreaBgMobStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.HEADER_AREA_BG,
    attributes,
    noMainBGImg: true
  });

  // header badge
  const {
    dimensionStylesDesktop: badgeDeskPadding,
    dimensionStylesTab: badgeTabPadding,
    dimensionStylesMobile: badgeMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BADGE_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: badgeDeskMargin,
    dimensionStylesTab: badgeTabMargin,
    dimensionStylesMobile: badgeMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BADGE_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    desktopBorderStyle: headerBadgeDeskBorderStyle,
    tabBorderStyle: headerBadgeTabBorderStyle,
    mobBorderStyle: headerBadgeMobBorderStyle
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.HEADER_BADGE_BORDER,
    attributes
  });
  const {
    backgroundStylesDesktop: headerBadgeBgDeskStyle,
    backgroundStylesTab: headerBadgeBgTabStyle,
    backgroundStylesMobile: headerBadgeBgMobStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BADGE_BG,
    attributes,
    noMainBGImg: true
  });
  const {
    dimensionStylesDesktop: headerBadgeDeskBorderRadius,
    dimensionStylesTab: headerBadgeTabBorderRadius,
    dimensionStylesMobile: headerBadgeMobBorderRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BADGE_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    typoStylesDesktop: badgeTypoDesk,
    typoStylesTab: badgeTypoTab,
    typoStylesMobile: badgeTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.BADGE_TYPO,
    attributes
  });

  // Content area
  const {
    backgroundStylesDesktop: contentDeskBGStyle,
    backgroundStylesTab: contentTabBGStyle,
    backgroundStylesMobile: contentMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    desktopBorderStyle: contentBorderStyleDesk,
    tabBorderStyle: contentBorderStyleTab,
    mobBorderStyle: contentBorderStyleMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: contentBorderRadiusDesk,
    dimensionStylesTab: contentBorderRadiusTab,
    dimensionStylesMobile: contentBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: contentPaddingDesk,
    dimensionStylesTab: contentPaddingTab,
    dimensionStylesMobile: contentPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: contentMarginDesk,
    dimensionStylesTab: contentMarginTab,
    dimensionStylesMobile: contentMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: innerContentPaddingDesk,
    dimensionStylesTab: innerContentPaddingTab,
    dimensionStylesMobile: innerContentPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.INNER_CONTENT_PADDING,
    styleFor: 'padding',
    attributes
  });

  // Photo
  const {
    desktopRangeStyle: photoDeskWidth,
    tabRangeStyle: photoTabWidth,
    mobRangeStyle: photoMobWidth
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PHOTO_SIZE,
    property: 'width',
    attributes
  });
  const {
    desktopRangeStyle: photoDeskHeight,
    tabRangeStyle: photoTabHeight,
    mobRangeStyle: photoMobHeight
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PHOTO_SIZE,
    property: 'height',
    attributes
  });
  const {
    desktopRangeStyle: photoDeskOffset,
    tabRangeStyle: photoTabOffset,
    mobRangeStyle: photoMobOffset
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PHOTO_VOFFSET,
    property: 'margin-top',
    attributes
  });
  const {
    desktopBorderStyle: photoDeskBorderStyle,
    tabBorderStyle: photoTabBorderStyle,
    mobBorderStyle: photoMobBorderStyle
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PHOTO_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: photoDeskBorderRadius,
    dimensionStylesTab: photoTabBorderRadius,
    dimensionStylesMobile: photoMobBorderRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PHOTO_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: metaWrapMarginDesk,
    dimensionStylesTab: metaWrapMarginTab,
    dimensionStylesMobile: metaWrapMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.META_WRAP_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // name
  const {
    typoStylesDesktop: nameTypoDesk,
    typoStylesTab: nameTypoTab,
    typoStylesMobile: nameTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.PROFILE_NAME,
    attributes
  });
  const {
    dimensionStylesDesktop: nameDeskMargin,
    dimensionStylesTab: nameTabMargin,
    dimensionStylesMobile: nameMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.NAME_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // username
  const {
    typoStylesDesktop: userNameTypoDesk,
    typoStylesTab: userNameTypoTab,
    typoStylesMobile: userNameTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.PROFILE_USERNAME,
    attributes
  });
  const {
    dimensionStylesDesktop: userNameDeskMargin,
    dimensionStylesTab: userNameTabMargin,
    dimensionStylesMobile: userNameMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.USERNAME_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // email
  const {
    typoStylesDesktop: emailTypoDesk,
    typoStylesTab: emailTypoTab,
    typoStylesMobile: emailTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.EMAIL_TYPO,
    attributes
  });
  const {
    dimensionStylesDesktop: emailDeskMargin,
    dimensionStylesTab: emailTabMargin,
    dimensionStylesMobile: emailMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.EMAIL_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // bio
  const {
    typoStylesDesktop: bioTypoDesk,
    typoStylesTab: bioTypoTab,
    typoStylesMobile: bioTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.BIO_TYPO,
    attributes
  });
  const {
    dimensionStylesDesktop: bioDeskMargin,
    dimensionStylesTab: bioTabMargin,
    dimensionStylesMobile: bioMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.BIO_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // status gap
  const {
    desktopRangeStyle: statusDeskGap,
    tabRangeStyle: statusTabGap,
    mobRangeStyle: statusMobGap
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.STATUS_GAP,
    property: 'gap',
    attributes
  });

  // status: Number
  const {
    typoStylesDesktop: counterTypoDesk,
    typoStylesTab: counterTypoTab,
    typoStylesMobile: counterTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.NUMBER_TYPO,
    attributes
  });

  // status: Label
  const {
    typoStylesDesktop: labelTypoDesk,
    typoStylesTab: labelTypoTab,
    typoStylesMobile: labelTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.LABEL_TYPO,
    attributes
  });

  // status container
  const {
    dimensionStylesDesktop: statusDeskMargin,
    dimensionStylesTab: statusTabMargin,
    dimensionStylesMobile: statusMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.STATUS_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // Follow Button
  const {
    typoStylesDesktop: btnTypoDesk,
    typoStylesTab: btnTypoTab,
    typoStylesMobile: btnTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.BTN_TYPO,
    attributes
  });
  const {
    backgroundStylesDesktop: btnDeskBGStyle,
    backgroundStylesTab: btnTabBGStyle,
    backgroundStylesMobile: btnMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FBTN_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    backgroundStylesDesktop: btnHoverDeskBGStyle,
    backgroundStylesTab: btnHoverTabBGStyle,
    backgroundStylesMobile: btnHoverMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FBTN_HOVER_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    boxShadowStyle: btnBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FBTN_BOX_SHADOW
  });
  const {
    boxShadowStyle: btnHoverBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FBTN_HOVER_BOX_SHADOW
  });
  const {
    desktopBorderStyle: btnDeskBorderStyle,
    tabBorderStyle: btnTabBorderStyle,
    mobBorderStyle: btnMobBorderStyle
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FBTN_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: btnDeskBorderRadius,
    dimensionStylesTab: btnTabBorderRadius,
    dimensionStylesMobile: btnMobBorderRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FBTN_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: btnDeskPadding,
    dimensionStylesTab: btnTabPadding,
    dimensionStylesMobile: btnMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FBTN_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: btnDeskMargin,
    dimensionStylesTab: btnTabMargin,
    dimensionStylesMobile: btnMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FBTN_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // Social Icons
  const {
    backgroundStylesDesktop: iconsNormalDeskBG,
    backgroundStylesTab: iconsNormalTabBG,
    backgroundStylesMobile: iconsNormalMobBG
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICONS_BG,
    attributes,
    noMainBGImg: true
  });
  const {
    backgroundStylesDesktop: iconsHoverDeskBG,
    backgroundStylesTab: iconsHoverTabBG,
    backgroundStylesMobile: iconsHoverMobBG
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICONS_HOVER_BG,
    attributes,
    noMainBGImg: true
  });
  const {
    desktopRangeStyle: socialIconDesk,
    tabRangeStyle: socialIconTab,
    mobRangeStyle: socialIconMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICONS_SIZE,
    property: 'font-size',
    attributes
  });
  const {
    desktopRangeStyle: socialIconContainerHeightDesk,
    tabRangeStyle: socialIconContainerHeightTab,
    mobRangeStyle: socialIconContainerHeightMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICONS_SIZE,
    property: 'height',
    attributes
  });
  const {
    desktopRangeStyle: socialIconContainerWidthDesk,
    tabRangeStyle: socialIconContainerWidthTab,
    mobRangeStyle: socialIconContainerWidthMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICONS_SIZE,
    property: 'width',
    attributes
  });
  const {
    desktopRangeStyle: socialIconsGapDesk,
    tabRangeStyle: socialIconsGapTab,
    mobRangeStyle: socialIconsGapMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICONS_SPACING,
    property: 'gap',
    attributes
  });
  const {
    desktopBorderStyle: socialIconDeskBorderStyle,
    tabBorderStyle: socialIconTabBorderStyle,
    mobBorderStyle: socialIconMobBorderStyle
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICONS_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: socialIconsBorderRadiusDesk,
    dimensionStylesTab: socialIconsBorderRadiusTab,
    dimensionStylesMobile: socialIconsBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICONS_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: socialIconsPaddingDesk,
    dimensionStylesTab: socialIconsPaddingTab,
    dimensionStylesMobile: socialIconsPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICONS_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: socialIconsMarginDesk,
    dimensionStylesTab: socialIconsMarginTab,
    dimensionStylesMobile: socialIconsMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICONS_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // NORMAL BACKGROUND
  const {
    backgroundStylesDesktop: photoOverlyDeskBG,
    backgroundStylesTab: photoOverlyTabBG,
    backgroundStylesMobile: photoOverlyMobBG
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PHOTO_IMG_OVERLAY,
    attributes,
    noMainBGImg: true
  });

  /**
   * All Style Combination
   */
  const desktopAllStyle = `
        ${preset !== 'style-1' ? `
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
                    ${photoDeskWidth}
                    ${photoDeskHeight}
                    ${photoDeskBorderRadius}
                    ${photoDeskBorderStyle}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image {
                    ${photoDeskOffset}
                }
        
            ` : ''}

        ${preset === 'style-1' ? `
                   .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-image {
                       ${photoDeskWidth}
                       ${photoDeskHeight}
                       ${photoDeskBorderRadius}
                       ${photoDeskBorderStyle}
                   }

                  .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-image::before {
                      ${photoOverlyDeskBG}
                   }
               ` : ''}


		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image {
			${photoDeskOffset}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
			${photoDeskWidth}
			${photoDeskHeight}
			${photoDeskBorderRadius}
			${photoDeskBorderStyle}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-header-content {
			${headerAreaBgDeskStyle}
			${headerAreaDeskPadding}
			${headerAreaDeskBorderRadius}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-badge {
			color: ${badgeColor ? badgeColor : ''};
			${headerBadgeDeskBorderStyle}
			${headerBadgeBgDeskStyle}
			${headerBadgeDeskBorderRadius}
			${badgeTypoDesk}
			${badgeDeskPadding}
		}

        ${preset === 'style-1' ? `
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-badge {
                    ${badgeDeskMargin}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-info {
                   ${metaWrapMarginDesk}
                }

                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-inner-content {
                    ${innerContentPaddingDesk}
                }
            ` : ''}

		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-name {
			color: ${nameColor ? nameColor : ''};
			${nameTypoDesk}
			${nameDeskMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-username{
			color: ${usernameColor ? usernameColor : ''};
			${userNameTypoDesk}
			${userNameDeskMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-email {
			color: ${emailColor ? emailColor : ''};
			${emailTypoDesk}
			${emailDeskMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-card-bio {
			color: ${bioColor ? bioColor : ''};
			${bioTypoDesk}
			${bioDeskMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status {
			${statusDeskGap}
			${statusDeskMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status-count {
			color: ${numberColor ? numberColor : ''};
			${counterTypoDesk}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status-text {
			color: ${labelColor ? labelColor : ''};
			${labelTypoDesk}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-fllow-btn {
			color: ${btnColor ? btnColor : ''};
			${btnTypoDesk}
			${btnDeskBGStyle}
			${btnDeskBorderRadius}
			${btnDeskBorderStyle}
			${btnDeskPadding}
			${btnDeskMargin}
			${btnBoxShadow}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-fllow-btn:hover {
			color: ${btnHoverColor ? btnHoverColor : ''};
			border-color: ${btnHoverBorderColor ? btnHoverBorderColor : ''};
			${btnHoverDeskBGStyle}
			${btnHoverBoxShadow}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share a {
			${socialIconDeskBorderStyle}
			${socialIconsBorderRadiusDesk}
			${socialIconsPaddingDesk}
			${iconsNormalDeskBG}
		}

		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share a:hover {
			${iconHoverBorderColor ? `border-color: ${iconHoverBorderColor};` : ''}
			${iconsHoverDeskBG}
		}

        .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share a:hover svg{
            ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
        }

        .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share svg {
			${socialIconContainerHeightDesk}
			${socialIconContainerWidthDesk}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }

		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share {
			${socialIconsGapDesk}
			${socialIconsMarginDesk}
		}

		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
			${photoDeskWidth}
			${photoDeskHeight}
			${photoDeskBorderRadius}
			${photoDeskBorderStyle}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-bottom-content {
			${contentDeskBGStyle}
			${contentBorderRadiusDesk}
			${contentBorderStyleDesk}
			${contentPaddingDesk}
			${contentMarginDesk}
		}

        ${active ? `
                    .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
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
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-header-content {
			${headerAreaBgTabStyle}
			${headerAreaTabPadding}
			${headerAreaTabBorderRadius}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-badge {
			${headerBadgeTabBorderStyle}
			${headerBadgeBgTabStyle}
			${headerBadgeTabBorderRadius}
			${badgeTypoTab}
			${badgeTabPadding}
		}

         ${preset === 'style-1' ? `
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-badge {
                    ${badgeTabMargin}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-info {
                   ${metaWrapMarginTab}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-inner-content {
                    ${innerContentPaddingTab}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-image::before {
                    ${photoOverlyTabBG}
                }
            ` : ''}

		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-bottom-content {

			${contentTabBGStyle}
			${contentBorderRadiusTab}
			${contentBorderStyleTab}
			${contentPaddingTab}
			${contentMarginTab}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-name {
			${nameTypoTab}
			${nameTabMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-username{
			${userNameTypoTab}
			${userNameTabMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-email {
			${emailTypoTab}
			${emailTabMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-card-bio {
			${bioTypoTab}
			${bioTabMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-fllow-btn {
			${btnTypoTab}
			${btnTabBGStyle}
			${btnTabBorderRadius}
			${btnTabBorderStyle}
			${btnTabPadding}
			${btnTabMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-fllow-btn:hover {
			${btnHoverTabBGStyle}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status {
			${statusTabMargin}
			${statusTabGap}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status-count {
			${counterTypoTab}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status-text {
			${labelTypoTab}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share a {
			${socialIconTabBorderStyle}
			${socialIconsBorderRadiusTab}
			${socialIconsPaddingTab}
			${iconsNormalTabBG}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share a:hover {
			${iconsHoverTabBG}
		}
        .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share svg {
			${socialIconContainerHeightTab}
			${socialIconContainerWidthTab}
        }
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share {
			${socialIconsGapTab}
			${socialIconsMarginTab}
		}

        ${preset !== 'style-1' ? `
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
                   ${photoTabWidth}
                    ${photoTabHeight}
                    ${photoTabBorderRadius}
                    ${photoTabBorderStyle}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image {
                    ${photoTabOffset}
                }
            ` : ''}

        ${preset === 'style-1' ? `
                   .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-image {
                      ${photoTabWidth}
                      ${photoTabHeight}
                      ${photoTabBorderRadius}
                      ${photoTabBorderStyle}
                   }
                 .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-info {
                   ${metaWrapMarginTab}
                 }
               ` : ''}



		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-bottom-content {

			${contentTabBGStyle}
			${contentBorderRadiusTab}
			${contentBorderStyleTab}
			${contentPaddingTab}
			${contentMarginTab}
		}
	`;
  const mobileAllStyle = `
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-header-content {
			${headerAreaBgMobStyle}
			${headerAreaMobPadding}
			${headerAreaMobBorderRadius}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-badge {
			${headerBadgeMobBorderStyle}
			${headerBadgeBgMobStyle}
			${headerBadgeMobBorderRadius}
			${badgeTypoMob}
			${badgeMobPadding}
		}

         ${preset === 'style-1' ? `
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-badge {
                    ${badgeMobMargin}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-info {
                   ${metaWrapMarginMob}
                }
               .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-inner-content {
                    ${innerContentPaddingMob}
                }

             .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-image::before {
                    ${photoOverlyMobBG}
                }
            ` : ''}

		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-bottom-content {

			${contentMobBGStyle}
			${contentBorderRadiusMob}
			${contentBorderStyleMob}
			${contentPaddingMob}
			${contentMarginMob}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-name {
			${nameTypoMob}
			${nameMobMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-username{
			${userNameTypoMob}
			${userNameMobMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-email {
			${emailTypoMob}
			${emailMobMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-card-bio {
			${bioTypoMob}
			${bioMobMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-fllow-btn {
			${btnTypoMob}
			${btnMobBGStyle}
			${btnMobBorderRadius}
			${btnMobBorderStyle}
			${btnMobPadding}
			${btnMobMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-fllow-btn:hover {
			${btnHoverTabBGStyle}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status {
			${statusMobMargin}
			${statusMobGap}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status-count {
			${counterTypoMob}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status-text {
			${labelTypoMob}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share a {
			${socialIconMobBorderStyle}
			${socialIconsBorderRadiusMob}
			${socialIconsPaddingMob}
			${iconsNormalMobBG}
		}
        .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share svg {
			${socialIconContainerHeightMob}
			${socialIconContainerWidthMob}
        }
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share a:hover {
			${iconsHoverMobBG}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share {
			${socialIconsGapMob}
			${socialIconsMarginMob}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
			${photoMobOffset}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
			${photoMobWidth}
			${photoMobHeight}
			${photoMobBorderRadius}
			${photoMobBorderStyle}
		}

        ${preset !== 'style-1' ? `
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
                    ${photoMobWidth}
                    ${photoMobHeight}
                    ${photoMobBorderRadius}
                    ${photoMobBorderStyle}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image {
                    ${photoMobOffset}
                }
            ` : ''}

        ${preset === 'style-1' ? `
                   .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-image {
                        ${photoMobWidth}
                        ${photoMobHeight}
                        ${photoMobBorderRadius}
                        ${photoMobBorderStyle}
                   }
               ` : ''}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-bottom-content {
			${contentMobBGStyle}
			${contentBorderRadiusMob}
			${contentBorderStyleMob}
			${contentPaddingMob}
			${contentMarginMob}
		}
	`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.profileCard.desktopAllStyle', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.profileCard.tabletAllStyle', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.profileCard.mobileAllStyle', mobileAllStyle, props)
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/profile-card/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/profile-card/style.scss ***!
  \********************************************/
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

/***/ "./src/blocks/profile-card/block.json":
/*!********************************************!*\
  !*** ./src/blocks/profile-card/block.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Profile Card","name":"zolo/profile-card","category":"zoloblocks","keywords":["Profile","Card","Team","Member","Avatar"],"description":"Display team profiles with an interactive, engaging layout.","apiVersion":3,"textdomain":"zoloblocks","example":{"attributes":{"preview":true},"viewportWidth":410},"supports":{"anchor":false,"customClassName":false,"align":["wide","full"]},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 			"blocks/profile-card/index": 0,
/******/ 			"blocks/profile-card/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/profile-card/style-index"], () => (__webpack_require__("./src/blocks/profile-card/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map