/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/team-child/attributes.js":
/*!*********************************************!*\
  !*** ./src/blocks/team-child/attributes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/team-child/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstants */ "./src/blocks/team-child/constants/typoPrefixConstants.js");
/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateTypographyAttributes,
  generateNormalBGAttributes,
  generateGapAttributes
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
  // block attributes
  preset: {
    type: 'string',
    default: 'default'
  },
  // Generators
  // item
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_MARGIN),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_BOX_SHADOW),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TEAM_MEMBER_CONTAINER_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TEAM_MEMBER_CONTAINER_MARGIN),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_MARGIN),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_BOX_SHADOW),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.PHOTO_BG),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.PHOTO_SIZE),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.TEAM_PHOTO_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TEAM_PHOTO_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TEAM_PHOTO_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TEAM_PHOTO_PADDING),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.TEAM_PHOTO_BOX_SHADOW),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_OVERLAY),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TEAM_DESIGNATION_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TEAM_NAME_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_CONTAINER_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_CONTAINER_MARGIN),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_HOVER_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_MARGIN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TEAM_SHORT_BIO_MARGIN),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_SIZE, {}),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_SPACING, {}),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_BOX_SHADOW),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICONS_HOVER_BOX_SHADOW),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.DETAIL_PAGE_LINK_BG),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.DETAIL_PAGE_LINK_HOVER_BG),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.DPL_ICON_SIZE, {}),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.DPL_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.DPL_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.DPL_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.DPL_MARGIN),
  // typography
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_1__)),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.SEPARATOR_TEAM_SIZE, {}),
  ...generateGapAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SEPARATOR_SPACING_TEAM, {
    // defaultRange: 30,
    defaultUnit: 'px'
  }),
  //Block Specific Attributes
  memberPhoto: {
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
  memberName: {
    type: 'string',
    default: 'John Doe'
  },
  addDetailPageLink: {
    type: 'boolean',
    default: true
  },
  memberDetailPageLink: {
    type: 'object',
    default: {
      url: '#',
      openInNewTab: false
    }
  },
  showDesignation: {
    type: 'boolean',
    default: true
  },
  memberDesignation: {
    type: 'string',
    default: 'CEO at ZoloBlocks'
  },
  showShortBio: {
    type: 'boolean',
    default: true
  },
  memberShortBio: {
    type: 'string',
    default: 'CEO at ZoloBlocks, leading innovative tech solutions for a better world.'
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
  detailIcon: {
    type: 'string',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>'
  },
  // block styles
  nameColor: {
    type: 'string'
  },
  nameHoverColor: {
    type: 'string'
  },
  designationColor: {
    type: 'string'
  },
  shortBioColor: {
    type: 'string'
  },
  // social icons
  separatorColor: {
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
  detailPageIconColor: {
    type: 'string'
  },
  detailPageIconHoverColor: {
    type: 'string'
  },
  separatorTeamColor: {
    type: 'string'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/team-child/constants/index.js":
/*!**************************************************!*\
  !*** ./src/blocks/team-child/constants/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   CONTENT_BG: () => (/* binding */ CONTENT_BG),
/* harmony export */   CONTENT_BORDER: () => (/* binding */ CONTENT_BORDER),
/* harmony export */   CONTENT_BORDER_RADIUS: () => (/* binding */ CONTENT_BORDER_RADIUS),
/* harmony export */   CONTENT_BOX_SHADOW: () => (/* binding */ CONTENT_BOX_SHADOW),
/* harmony export */   CONTENT_MARGIN: () => (/* binding */ CONTENT_MARGIN),
/* harmony export */   CONTENT_PADDING: () => (/* binding */ CONTENT_PADDING),
/* harmony export */   DETAIL_PAGE_LINK_BG: () => (/* binding */ DETAIL_PAGE_LINK_BG),
/* harmony export */   DETAIL_PAGE_LINK_HOVER_BG: () => (/* binding */ DETAIL_PAGE_LINK_HOVER_BG),
/* harmony export */   DPL_BORDER: () => (/* binding */ DPL_BORDER),
/* harmony export */   DPL_BORDER_RADIUS: () => (/* binding */ DPL_BORDER_RADIUS),
/* harmony export */   DPL_ICON_SIZE: () => (/* binding */ DPL_ICON_SIZE),
/* harmony export */   DPL_MARGIN: () => (/* binding */ DPL_MARGIN),
/* harmony export */   DPL_PADDING: () => (/* binding */ DPL_PADDING),
/* harmony export */   ICONS_BG: () => (/* binding */ ICONS_BG),
/* harmony export */   ICONS_BORDER: () => (/* binding */ ICONS_BORDER),
/* harmony export */   ICONS_BORDER_RADIUS: () => (/* binding */ ICONS_BORDER_RADIUS),
/* harmony export */   ICONS_BOX_SHADOW: () => (/* binding */ ICONS_BOX_SHADOW),
/* harmony export */   ICONS_CONTAINER_MARGIN: () => (/* binding */ ICONS_CONTAINER_MARGIN),
/* harmony export */   ICONS_CONTAINER_PADDING: () => (/* binding */ ICONS_CONTAINER_PADDING),
/* harmony export */   ICONS_HOVER_BG: () => (/* binding */ ICONS_HOVER_BG),
/* harmony export */   ICONS_HOVER_BOX_SHADOW: () => (/* binding */ ICONS_HOVER_BOX_SHADOW),
/* harmony export */   ICONS_MARGIN: () => (/* binding */ ICONS_MARGIN),
/* harmony export */   ICONS_PADDING: () => (/* binding */ ICONS_PADDING),
/* harmony export */   ICONS_SIZE: () => (/* binding */ ICONS_SIZE),
/* harmony export */   ICONS_SPACING: () => (/* binding */ ICONS_SPACING),
/* harmony export */   IMAGE_OVERLAY: () => (/* binding */ IMAGE_OVERLAY),
/* harmony export */   ITEM_BG: () => (/* binding */ ITEM_BG),
/* harmony export */   ITEM_BORDER: () => (/* binding */ ITEM_BORDER),
/* harmony export */   ITEM_BORDER_RADIUS: () => (/* binding */ ITEM_BORDER_RADIUS),
/* harmony export */   ITEM_BOX_SHADOW: () => (/* binding */ ITEM_BOX_SHADOW),
/* harmony export */   ITEM_MARGIN: () => (/* binding */ ITEM_MARGIN),
/* harmony export */   ITEM_PADDING: () => (/* binding */ ITEM_PADDING),
/* harmony export */   PHOTO_BG: () => (/* binding */ PHOTO_BG),
/* harmony export */   PHOTO_SIZE: () => (/* binding */ PHOTO_SIZE),
/* harmony export */   PRESETS: () => (/* binding */ PRESETS),
/* harmony export */   SEPARATOR_SPACING_TEAM: () => (/* binding */ SEPARATOR_SPACING_TEAM),
/* harmony export */   SEPARATOR_TEAM_SIZE: () => (/* binding */ SEPARATOR_TEAM_SIZE),
/* harmony export */   TEAM_DESIGNATION_MARGIN: () => (/* binding */ TEAM_DESIGNATION_MARGIN),
/* harmony export */   TEAM_MEMBER_CONTAINER_MARGIN: () => (/* binding */ TEAM_MEMBER_CONTAINER_MARGIN),
/* harmony export */   TEAM_MEMBER_CONTAINER_PADDING: () => (/* binding */ TEAM_MEMBER_CONTAINER_PADDING),
/* harmony export */   TEAM_NAME_MARGIN: () => (/* binding */ TEAM_NAME_MARGIN),
/* harmony export */   TEAM_PHOTO_BORDER: () => (/* binding */ TEAM_PHOTO_BORDER),
/* harmony export */   TEAM_PHOTO_BORDER_RADIUS: () => (/* binding */ TEAM_PHOTO_BORDER_RADIUS),
/* harmony export */   TEAM_PHOTO_BOX_SHADOW: () => (/* binding */ TEAM_PHOTO_BOX_SHADOW),
/* harmony export */   TEAM_PHOTO_MARGIN: () => (/* binding */ TEAM_PHOTO_MARGIN),
/* harmony export */   TEAM_PHOTO_PADDING: () => (/* binding */ TEAM_PHOTO_PADDING),
/* harmony export */   TEAM_SHORT_BIO_MARGIN: () => (/* binding */ TEAM_SHORT_BIO_MARGIN)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Block Prefix
const BLOCK_PREFIX = 'team-member';

// Presets
const PRESETS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'zoloblocks'),
  value: 'default'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preset 1', 'zoloblocks'),
  value: 'style-1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preset 2', 'zoloblocks'),
  value: 'style-2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preset 3', 'zoloblocks'),
  value: 'style-3'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preset 4', 'zoloblocks'),
  value: 'style-4'
}];

// photo bg
const PHOTO_BG = 'PhotoBg';
const PHOTO_SIZE = 'PhotoSize';

// item
const ITEM_BG = 'ItemBg';
const ITEM_PADDING = 'ItemPadding';
const ITEM_MARGIN = 'ItemMargin';
const ITEM_BORDER = 'ItemBorder';
const ITEM_BORDER_RADIUS = 'ItemBorderRadius';
const ITEM_BOX_SHADOW = 'ItemBoxShadow';

// content
const CONTENT_BG = 'ContentBg';
const CONTENT_PADDING = 'ContentPadding';
const CONTENT_MARGIN = 'ContentMargin';
const CONTENT_BORDER = 'ContentBorder';
const CONTENT_BORDER_RADIUS = 'ContentBorderRadius';
const CONTENT_BOX_SHADOW = 'ContentBoxShadow';

//  border
const TEAM_PHOTO_BORDER = 'PhotoBorder';
const TEAM_PHOTO_BORDER_RADIUS = 'PhotoBorderRadius';
const TEAM_PHOTO_BOX_SHADOW = 'PhotoBoxShadow';
const TEAM_PHOTO_MARGIN = 'PhotoMargin';
const TEAM_PHOTO_PADDING = 'PhotoPadding';
const IMAGE_OVERLAY = 'imageOverlay';
const TEAM_NAME_MARGIN = 'NameMargin';
const TEAM_DESIGNATION_MARGIN = 'DesignationMargin';
const TEAM_SHORT_BIO_MARGIN = 'ShortBioMargin';

// social icons
const ICONS_BG = 'IconsBg';
const ICONS_HOVER_BG = 'IconsHoverBg';
const ICONS_SIZE = 'IconsSize';
const ICONS_SPACING = 'IconsSpacing';
const ICONS_BORDER = 'IconsBorder';
const ICONS_BORDER_RADIUS = 'IconsBorderRadius';
const ICONS_PADDING = 'IconsPadding';
const ICONS_MARGIN = 'IconsMargin';
const ICONS_BOX_SHADOW = 'IconsBoxShadow';
const ICONS_HOVER_BOX_SHADOW = 'IconsHoverBoxShadow';

// social icon container
const ICONS_CONTAINER_PADDING = 'IconsContainerPadding';
const ICONS_CONTAINER_MARGIN = 'IconsContainerMargin';

// detailPageLink
const DETAIL_PAGE_LINK_BG = 'DetailPageLinkBg';
const DETAIL_PAGE_LINK_HOVER_BG = 'DetailPageLinkHoverBg';
const DPL_BORDER = 'DPLBorder';
const DPL_BORDER_RADIUS = 'DPLBorderRadius';
const DPL_PADDING = 'DPLPadding';
const DPL_MARGIN = 'DPLMargin';
const DPL_ICON_SIZE = 'DPLIconSize';
const SEPARATOR_TEAM_SIZE = 'SeparatorTeamSizew';
const SEPARATOR_SPACING_TEAM = 'SeparatorSpacingTeam';

// container
const TEAM_MEMBER_CONTAINER_PADDING = 'MemberContainerPadding';
const TEAM_MEMBER_CONTAINER_MARGIN = 'MemberContainerMargin';

/***/ }),

/***/ "./src/blocks/team-child/constants/typoPrefixConstants.js":
/*!****************************************************************!*\
  !*** ./src/blocks/team-child/constants/typoPrefixConstants.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TEAM_MEMBER_DESIGNATION_TYPOGRAPHY: () => (/* binding */ TEAM_MEMBER_DESIGNATION_TYPOGRAPHY),
/* harmony export */   TEAM_MEMBER_NAME_TYPOGRAPHY: () => (/* binding */ TEAM_MEMBER_NAME_TYPOGRAPHY),
/* harmony export */   TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY: () => (/* binding */ TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY)
/* harmony export */ });
// Team Typography
const TEAM_MEMBER_NAME_TYPOGRAPHY = 'teamMemberNameTypography';
const TEAM_MEMBER_DESIGNATION_TYPOGRAPHY = 'teamMemberDesignationTypography';
const TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY = 'teamMemberShortBioTypography';

/***/ }),

/***/ "./src/blocks/team-child/context.js":
/*!******************************************!*\
  !*** ./src/blocks/team-child/context.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Context for the block.
 */
const Context = ['zolo/preset', 'zolo/addDetailPageLink', 'zolo/showDesignation', 'zolo/showShortBio', 'zolo/showSocialProfiles'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);

/***/ }),

/***/ "./src/blocks/team-child/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/team-child/edit.js ***!
  \***************************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/blocks/team-child/inspector.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.js */ "./src/blocks/team-child/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/**
 * WordPress dependencies
 */






/**
 * Internal depencencies
 */
const {
  DisplayZoloIcon,
  classArrayToStr
} = window.zoloModule;


// import style


function Edit(props) {
  const {
    attributes,
    setAttributes,
    className,
    isSelected,
    context
  } = props;
  const {
    uniqueId,
    preset,
    parentClasses,
    memberPhoto,
    memberName,
    addDetailPageLink,
    memberDetailPageLink,
    showDesignation,
    memberDesignation,
    showShortBio,
    memberShortBio,
    showSocialProfiles,
    socialProfiles,
    detailIcon,
    imageRes
  } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, `${uniqueId} ${preset ? preset : ''}`, classArrayToStr(parentClasses))
  });

  /**
   * context
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      preset: context['zolo/preset'],
      addDetailPageLink: context['zolo/addDetailPageLink'],
      showDesignation: context['zolo/showDesignation'],
      showShortBio: context['zolo/showShortBio'],
      showSocialProfiles: context['zolo/showSocialProfiles']
    });
  }, [context]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
      children: memberPhoto && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
            onSelect: media => {
              setAttributes({
                memberPhoto: {
                  id: media.id,
                  url: media.url,
                  alt: media.alt,
                  sizes: media.sizes,
                  caption: media.caption
                }
              });
            },
            allowedTypes: ['image'],
            value: memberPhoto && memberPhoto.id,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
              className: "components-toolbar__control",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace Photo', 'zoloblocks'),
              icon: "edit",
              onClick: open
            })
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "zolo-item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "zolo-image-wrap",
          children: [memberPhoto ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
            src: memberPhoto.sizes && memberPhoto.sizes[imageRes] ? memberPhoto.sizes[imageRes].url : memberPhoto.url,
            alt: memberPhoto.alt || memberName
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaPlaceholder, {
            icon: "format-image",
            labels: {
              title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Photo', 'zoloblocks'),
              instructions: ''
            },
            onSelect: media => {
              setAttributes({
                memberPhoto: {
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
          }), addDetailPageLink && preset === 'default' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "zolo-link-btn",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
              className: "zolo-external-link",
              href: memberDetailPageLink && memberDetailPageLink.url,
              rel: memberDetailPageLink && memberDetailPageLink.openInNewTab && 'noreferer',
              target: memberDetailPageLink && memberDetailPageLink.openInNewTab && '_blank',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DisplayZoloIcon, {
                icon: detailIcon
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "zolo-info-wrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "zolo-content",
            children: [preset !== 'style-4' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
              className: `zolo-name`,
              value: memberName,
              onChange: name => setAttributes({
                memberName: name
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Name...', 'zoloblocks'),
              allowedFormats: ['core/bold', 'core/italic']
            }), showDesignation && preset !== 'style-4' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
              className: "zolo-designation",
              value: memberDesignation,
              onChange: designation => setAttributes({
                memberDesignation: designation
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Designation...', 'zoloblocks'),
              allowedFormats: ['core/bold', 'core/italic']
            }), preset === 'style-4' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "zolo-name-desi-wrap",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                className: `zolo-name`,
                value: memberName,
                onChange: name => setAttributes({
                  memberName: name
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Name...', 'zoloblocks'),
                allowedFormats: ['core/bold', 'core/italic']
              }), showDesignation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "zolo-nameDg-separator"
              }), showDesignation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                className: "zolo-designation",
                value: memberDesignation,
                onChange: designation => setAttributes({
                  memberDesignation: designation
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Designation...', 'zoloblocks'),
                allowedFormats: ['core/bold', 'core/italic']
              })]
            }), showShortBio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
              className: "zolo-desc",
              value: memberShortBio,
              onChange: bio => setAttributes({
                memberShortBio: bio
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('short bio...', 'zoloblocks'),
              allowedFormats: ['core/bold', 'core/italic']
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "zolo-social-and-link-wrap",
            children: [showSocialProfiles && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "zolo-social-share",
              children: socialProfiles && socialProfiles.map((profile, index) => {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                  className: "zolo-social-link",
                  href: profile.link && profile.link.url,
                  rel: profile.link && profile.link.openInNewTab && 'noreferer noopener',
                  target: profile.link && profile.link.openInNewTab && '_blank',
                  title: profile.title,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DisplayZoloIcon, {
                    icon: profile.icon
                  })
                }, index);
              })
            }), addDetailPageLink && preset !== 'style-4' && preset !== 'style-5' && preset !== 'default' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "zolo-link-btn",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                className: "zolo-external-link",
                href: memberDetailPageLink && memberDetailPageLink.url,
                rel: memberDetailPageLink && memberDetailPageLink.openInNewTab && 'noreferer',
                target: memberDetailPageLink && memberDetailPageLink.openInNewTab && '_blank',
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DisplayZoloIcon, {
                  icon: detailIcon
                })
              })
            })]
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/team-child/index.js":
/*!****************************************!*\
  !*** ./src/blocks/team-child/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/team-child/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/team-child/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/team-child/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/team-child/save.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./src/blocks/team-child/context.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/team-child/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
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
        d: "M5.72998 8.15C5.72998 7.23873 6.46871 6.5 7.37998 6.5C7.79741 6.5 8.17863 6.65501 8.46923 6.9106C8.79334 6.52372 9.18149 6.1923 9.61738 5.93267C9.04657 5.35673 8.25493 5 7.37998 5C5.64028 5 4.22998 6.4103 4.22998 8.15C4.22998 9.04611 4.60416 9.85482 5.20481 10.4284C5.03873 10.4731 4.87511 10.5277 4.71487 10.5922C4.18254 10.8062 3.69803 11.1239 3.28952 11.5267C2.88101 11.9296 2.55667 12.4097 2.3353 12.939C2.11394 13.4683 1.99995 14.0364 2 14.6101V17.14C2 17.4771 2.22494 17.7728 2.54984 17.8628L4.49985 18.4028L4.50218 18.4034C4.73119 18.4661 4.96173 18.5211 5.19343 18.5685V17.0323C5.09497 17.0088 4.9968 16.9836 4.89895 16.9569L4.89785 16.9566L3.5 16.5695V14.6099C3.49996 14.235 3.57446 13.8637 3.71915 13.5177C3.86384 13.1718 4.07582 12.858 4.3428 12.5947C4.60979 12.3314 4.92645 12.1238 5.27438 11.9839C5.62231 11.844 5.99457 11.7747 6.36953 11.7799L7.37729 11.78L7.38094 11.7771C7.25522 11.0818 7.22929 10.3241 7.25877 9.79562C6.4041 9.73356 5.72998 9.0205 5.72998 8.15ZM17.8875 8.15C17.8875 7.23873 17.1487 6.5 16.2375 6.5C15.82 6.5 15.4388 6.65501 15.1482 6.9106C14.8241 6.52372 14.4359 6.1923 14.0001 5.93267C14.5709 5.35673 15.3625 5 16.2375 5C17.9771 5 19.3875 6.4103 19.3875 8.15C19.3875 9.04611 19.0133 9.85482 18.4126 10.4284C18.5787 10.4731 18.7423 10.5277 18.9026 10.5922C19.4349 10.8062 19.9194 11.1239 20.3279 11.5267C20.7364 11.9296 21.0608 12.4097 21.2821 12.939C21.5035 13.4683 21.6175 14.0364 21.6174 14.6101V17.14C21.6174 17.4771 21.3925 17.7728 21.0676 17.8628L19.1176 18.4028L19.1153 18.4034C18.8862 18.4661 18.6557 18.5211 18.424 18.5685V17.0323C18.5225 17.0088 18.6206 16.9836 18.7185 16.9569L18.7196 16.9566L20.1174 16.5695V14.6099C20.1175 14.235 20.043 13.8637 19.8983 13.5177C19.7536 13.1718 19.5416 12.858 19.2746 12.5947C19.0076 12.3314 18.691 12.1238 18.343 11.9839C17.9951 11.844 17.6229 11.7747 17.2479 11.7799L16.2401 11.78L16.2365 11.7771C16.3622 11.0818 16.3881 10.3241 16.3587 9.79562C17.2133 9.73356 17.8875 9.0205 17.8875 8.15ZM14.6791 11.1797C14.5189 11.5503 14.2852 11.8835 13.9926 12.1584C14.8454 12.3856 15.6013 12.8902 16.1445 13.595C16.6877 14.2997 16.9882 15.1657 17.0001 16.0603V18.4884C16.9974 18.6437 16.9451 18.794 16.8511 18.9167C16.757 19.0393 16.6264 19.1277 16.4786 19.1686L14.6723 19.6693C13.8019 19.9134 12.903 20.0374 12 20.0378C11.0939 20.0374 10.192 19.9135 9.31849 19.6693L7.51216 19.1686C7.36538 19.1274 7.23585 19.0386 7.14339 18.9158C7.05094 18.793 7.00059 18.6429 7.00001 18.4884V16.0981C7.00369 15.197 7.30051 14.3224 7.84433 13.61C8.38815 12.8976 9.14857 12.3873 10.0075 12.1584C9.71489 11.8835 9.48118 11.5503 9.321 11.1797C9.16081 10.8091 9.07757 10.409 9.0764 10.0044C9.07886 9.21834 9.38768 8.46523 9.93544 7.90943C10.4832 7.35363 11.2254 7.04028 12 7.03779C12.7747 7.04028 13.5169 7.35363 14.0646 7.90943C14.6124 8.46523 14.9212 9.21834 14.9237 10.0044C14.9225 10.409 14.8393 10.8091 14.6791 11.1797ZM13.0798 8.83317C12.7934 8.5426 12.405 8.37936 12 8.37936C11.7987 8.37811 11.5992 8.41727 11.4128 8.49458C11.2265 8.57188 11.0571 8.68581 10.9143 8.82982C10.7715 8.97382 10.6582 9.14504 10.5809 9.33365C10.5035 9.52225 10.4637 9.7245 10.4637 9.92877C10.4637 10.133 10.5035 10.3353 10.5809 10.5239C10.6582 10.7125 10.7715 10.8837 10.9143 11.0277C11.0571 11.1717 11.2265 11.2857 11.4128 11.363C11.5992 11.4403 11.7987 11.4794 12 11.4782C12.405 11.4782 12.7934 11.315 13.0798 11.0244C13.3661 10.7338 13.527 10.3397 13.527 9.92877C13.527 9.51784 13.3661 9.12374 13.0798 8.83317ZM14.2999 18.2333L15.6034 17.8743L15.5568 15.9847C15.5568 15.6336 15.4887 15.2859 15.3563 14.9616C15.2238 14.6372 15.0297 14.3424 14.7851 14.0941C14.5404 13.8459 14.2499 13.6489 13.9302 13.5146C13.6105 13.3802 13.2679 13.311 12.9218 13.311H10.9758C10.2786 13.3135 9.61077 13.5963 9.11862 14.0975C8.62648 14.5986 8.35011 15.2773 8.35012 15.9847V17.8743L9.64436 18.2333C11.1667 18.6674 12.7775 18.6674 14.2999 18.2333Z",
        fill: "#2667FF"
      })
    })
  },
  usesContext: _context__WEBPACK_IMPORTED_MODULE_5__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/team-child/inspector.js":
/*!********************************************!*\
  !*** ./src/blocks/team-child/inspector.js ***!
  \********************************************/
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
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortable */ "./src/blocks/team-child/sortable.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/blocks/team-child/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/blocks/team-child/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/typoPrefixConstants */ "./src/blocks/team-child/constants/typoPrefixConstants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
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
  AdvancedOptions,
  ZoloIconPicker,
  ZoloPanelBody,
  ImageSizes,
  ResGapControl
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
    memberPhoto,
    memberName,
    showDesignation,
    memberDesignation,
    addDetailPageLink,
    memberDetailPageLink,
    showSocialProfiles,
    socialProfiles,
    showShortBio,
    memberShortBio,
    nameColor,
    designationColor,
    separatorTeamColor,
    shortBioColor,
    separatorColor,
    iconColor,
    iconHoverColor,
    iconHoverBorderColor,
    detailPageIconColor,
    detailPageIconHoverColor,
    detailIcon,
    imageRes
  } = attributes;
  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"]
  };

  // css filter
  const cssFilters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.extensions.controls.cssFilters', [], block, props);
  const cssFiltersHover = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.extensions.controls.cssFiltersHover', [], block, props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(HeaderTabs, {
      block: "zolo/team-child",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'zoloblocks'),
          firstOpen: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Photo', 'zoloblocks'),
            className: "zolo-flex-col-control",
            children: memberPhoto ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ImageAvatar, {
              imageUrl: memberPhoto && memberPhoto.url,
              onDeleteImage: () => setAttributes({
                memberPhoto: null
              }),
              imageId: memberPhoto && memberPhoto.id,
              onEditImage: media => {
                setAttributes({
                  memberPhoto: {
                    id: media.id,
                    url: media.url,
                    alt: media.alt,
                    sizes: media.sizes,
                    caption: media.caption
                  }
                });
              }
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
              onSelect: media => {
                setAttributes({
                  memberPhoto: {
                    id: media.id,
                    url: media.url,
                    alt: media.alt,
                    sizes: media.sizes,
                    caption: media.caption
                  }
                });
              },
              allowedTypes: ['image'],
              value: memberPhoto && memberPhoto.id,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                className: "zolo-image-upload-btn",
                onClick: open,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("svg", {
                  width: "24",
                  height: "24",
                  xmlns: "http://www.w3.org/2000/svg",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("path", {
                    d: "M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"
                  })
                }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(' Upload Photo', 'zoloblocks')]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ImageSizes, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Resolution', 'zoloblocks'),
            value: imageRes,
            onChange: res => setAttributes({
              imageRes: res
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'zoloblocks'),
            onChange: name => setAttributes({
              memberName: name
            }),
            value: memberName,
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name..', 'zoloblocks')
          }), showDesignation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Designation', 'zoloblocks'),
            onChange: d => setAttributes({
              memberDesignation: d
            }),
            value: memberDesignation,
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Designation..', 'zoloblocks')
          }), showShortBio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
            className: "zolo-flex-col-control",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Short Bio', 'zoloblocks'),
            value: memberShortBio,
            onChange: bio => setAttributes({
              memberShortBio: bio
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Short Bio..', 'zoloblocks')
          }), addDetailPageLink && preset !== 'style-4' && preset !== 'style-45' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(LinkControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link', 'zoloblocks'),
            value: memberDetailPageLink,
            onChange: link => setAttributes({
              memberDetailPageLink: link
            })
          })]
        }), showSocialProfiles && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Social Profiles', 'zoloblocks'),
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sortable__WEBPACK_IMPORTED_MODULE_4__["default"], {
            socialProfiles: socialProfiles,
            setAttributes: setAttributes
          })
        }), addDetailPageLink && preset !== 'style-4' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Details Page Icon', 'zoloblocks'),
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloIconPicker, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Icon', 'zoloblocks'),
            onChange: icon => setAttributes({
              detailIcon: icon
            }),
            value: detailIcon
          })
        })]
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Item', 'zoloblocks'),
          firstOpen: true,
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ITEM_BG,
            noMainBGImg: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ITEM_PADDING,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ITEM_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ITEM_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BoxShadowControl, {
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ITEM_BOX_SHADOW,
            requiredProps: requiredProps,
            enableTransition: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ITEM_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_BG,
            noMainBGImg: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_PADDING,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BoxShadowControl, {
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_BOX_SHADOW,
            requiredProps: requiredProps,
            enableTransition: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Photo', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PHOTO_SIZE,
            requiredProps: requiredProps,
            min: 10,
            max: 1000
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PHOTO_BG,
            noMainBGImg: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TEAM_PHOTO_PADDING,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TEAM_PHOTO_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TEAM_PHOTO_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BoxShadowControl, {
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TEAM_PHOTO_BOX_SHADOW,
            requiredProps: requiredProps,
            enableTransition: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TEAM_PHOTO_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          }), preset === 'style-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay', 'zoloblocks'),
              requiredProps: requiredProps,
              controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.IMAGE_OVERLAY,
              noMainBGImg: true
            })]
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: nameColor,
            onChange: color => setAttributes({
              nameColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.TEAM_MEMBER_NAME_TYPOGRAPHY,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TEAM_NAME_MARGIN,
            requiredProps: requiredProps
          })]
        }), showDesignation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Designation', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: designationColor,
            onChange: color => setAttributes({
              designationColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.TEAM_MEMBER_DESIGNATION_TYPOGRAPHY,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TEAM_DESIGNATION_MARGIN,
            requiredProps: requiredProps
          }), preset === 'style-4' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "zolo-custom-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator', 'zoloblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
              color: separatorTeamColor,
              onChange: color => setAttributes({
                separatorTeamColor: color
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResRangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.SEPARATOR_TEAM_SIZE,
              requiredProps: requiredProps
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResGapControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gap', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.SEPARATOR_SPACING_TEAM,
              requiredProps: requiredProps,
              max: 200
            })]
          })]
        }), showShortBio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Short Bio', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: shortBioColor,
            onChange: color => setAttributes({
              shortBioColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TEAM_SHORT_BIO_MARGIN,
            requiredProps: requiredProps
          })]
        }), showSocialProfiles && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [preset === 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ZoloPanelBody, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Social Profiles Container', 'zoloblocks'),
            stylePanel: true,
            panelProps: props,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_CONTAINER_MARGIN,
              requiredProps: requiredProps
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_CONTAINER_PADDING,
              requiredProps: requiredProps
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloPanelBody, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Social Profiles', 'zoloblocks'),
            stylePanel: true,
            panelProps: props,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TabPanelControl, {
              normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: iconColor,
                  onChange: color => setAttributes({
                    iconColor: color
                  })
                }), preset === 'default' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator Color', 'zoloblocks'),
                  color: separatorColor,
                  onChange: color => setAttributes({
                    separatorColor: color
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResRangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_SIZE,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
                  requiredProps: requiredProps,
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_BG,
                  noMainBGImg: true
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_PADDING,
                  requiredProps: requiredProps
                }), preset !== 'style-1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_MARGIN,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_BORDER,
                  requiredProps: requiredProps,
                  hoverControl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'zoloblocks'),
                    color: iconHoverBorderColor,
                    onChange: color => setAttributes({
                      iconHoverBorderColor: color
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BoxShadowControl, {
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_BOX_SHADOW,
                  requiredProps: requiredProps,
                  enableTransition: false
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_BORDER_RADIUS,
                  requiredProps: requiredProps
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResRangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spacing', 'zoloblocks'),
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_SPACING,
                  requiredProps: requiredProps
                })]
              }),
              hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                  color: iconHoverColor,
                  onChange: color => setAttributes({
                    iconHoverColor: color
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
                  requiredProps: requiredProps,
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_HOVER_BG,
                  noMainBGImg: true
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BoxShadowControl, {
                  controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.ICONS_HOVER_BOX_SHADOW,
                  requiredProps: requiredProps,
                  enableTransition: false
                })]
              })
            })
          })]
        }), addDetailPageLink && preset !== 'style-4' && preset !== 'style-5' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Details Page Link', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: detailPageIconColor,
                onChange: color => setAttributes({
                  detailPageIconColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.DPL_ICON_SIZE,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.DETAIL_PAGE_LINK_BG,
                noMainBGImg: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.DPL_PADDING,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.DPL_MARGIN,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.DPL_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.DPL_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: detailPageIconHoverColor,
                onChange: color => setAttributes({
                  detailPageIconHoverColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NormalBGControl, {
                requiredProps: requiredProps,
                controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.DETAIL_PAGE_LINK_HOVER_BG,
                noMainBGImg: true
              })]
            })
          })
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps,
          block: "zolo/team-child"
        })
      })
    })
  }, "controls");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/team-child/save.js":
/*!***************************************!*\
  !*** ./src/blocks/team-child/save.js ***!
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

const {
  DisplayZoloIcon,
  classArrayToStr
} = window.zoloModule;


const Save = ({
  attributes
}) => {
  const {
    uniqueId,
    preset,
    parentClasses,
    memberPhoto,
    memberName,
    addDetailPageLink,
    memberDetailPageLink,
    showDesignation,
    memberDesignation,
    showShortBio,
    memberShortBio,
    showSocialProfiles,
    socialProfiles,
    detailIcon,
    zoloId,
    imageRes
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(uniqueId + ` ${preset ? preset : ''}`, classArrayToStr(parentClasses))
    }),
    ...(zoloId && {
      id: zoloId
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "zolo-item",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "zolo-image-wrap",
        children: [memberPhoto && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src: memberPhoto.sizes && memberPhoto.sizes[imageRes] ? memberPhoto.sizes[imageRes].url : memberPhoto.url,
          alt: memberPhoto.alt || memberName,
          className: `wp-image-${memberPhoto.id}`
        }), addDetailPageLink && preset === 'default' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "zolo-link-btn",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "zolo-external-link",
            href: memberDetailPageLink && memberDetailPageLink.url,
            rel: memberDetailPageLink && memberDetailPageLink.openInNewTab && 'noreferer noopener',
            target: memberDetailPageLink && memberDetailPageLink.openInNewTab && '_blank',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DisplayZoloIcon, {
              icon: detailIcon
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "zolo-info-wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "zolo-content",
          children: [preset !== 'style-4' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "zolo-name",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              value: memberName
            })
          }), showDesignation && preset !== 'style-4' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "zolo-designation",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              value: memberDesignation
            })
          }), preset === 'style-4' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "zolo-name-desi-wrap",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "zolo-name",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                value: memberName
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "zolo-nameDg-separator"
            }), showDesignation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "zolo-designation",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                value: memberDesignation
              })
            })]
          }), showShortBio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "zolo-desc",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              value: memberShortBio
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "zolo-social-and-link-wrap",
          children: [showSocialProfiles && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "zolo-social-share",
            children: socialProfiles && socialProfiles.map((profile, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                className: "zolo-social-link",
                href: profile.link && profile.link.url,
                rel: profile.link && profile.link.openInNewTab && 'noreferer noopener',
                target: profile.link && profile.link.openInNewTab && '_blank',
                title: profile.title,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DisplayZoloIcon, {
                  icon: profile.icon
                })
              }, index);
            })
          }), addDetailPageLink && preset !== 'style-4' && preset !== 'style-5' && preset !== 'default' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "zolo-link-btn",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "zolo-external-link",
              href: memberDetailPageLink && memberDetailPageLink.url,
              rel: memberDetailPageLink && memberDetailPageLink.openInNewTab && 'noreferer noopener',
              target: memberDetailPageLink && memberDetailPageLink.openInNewTab && '_blank',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DisplayZoloIcon, {
                icon: detailIcon
              })
            })
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/team-child/sortable.js":
/*!*******************************************!*\
  !*** ./src/blocks/team-child/sortable.js ***!
  \*******************************************/
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
                value: profile.icon,
                onChange: value => {
                  const newItems = [...deepCloneSocialProfiles];
                  newItems[index].icon = value;
                  setAttributes({
                    socialProfiles: newItems
                  });
                },
                disableDashicon: true,
                showHeading: false
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

/***/ "./src/blocks/team-child/style.js":
/*!****************************************!*\
  !*** ./src/blocks/team-child/style.js ***!
  \****************************************/
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/blocks/team-child/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/typoPrefixConstants */ "./src/blocks/team-child/constants/typoPrefixConstants.js");
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
  GlobalStyleHanlder,
  generateGapStyle
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
    nameColor,
    designationColor,
    separatorTeamColor,
    shortBioColor,
    separatorColor,
    iconColor,
    iconHoverColor,
    iconHoverBorderColor,
    detailPageIconColor,
    detailPageIconHoverColor
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

  // Container padding + margin
  const {
    dimensionStylesDesktop: teamMemberContainerDeskPadding,
    dimensionStylesTab: teamMemberContainerTabPadding,
    dimensionStylesMobile: teamMemberContainerMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_MEMBER_CONTAINER_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: teamMemberContainerDeskMargin,
    dimensionStylesTab: teamMemberContainerTabMargin,
    dimensionStylesMobile: teamMemberContainerMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_MEMBER_CONTAINER_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // item
  const {
    backgroundStylesDesktop: itemDeskBg,
    backgroundStylesTab: itemTabBg,
    backgroundStylesMobile: itemMobBg
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ITEM_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    desktopBorderStyle: itemBorderDeskStyle,
    tabBorderStyle: itemBorderTabStyle,
    mobBorderStyle: itemBorderMobStyle
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ITEM_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: itemDeskBorderRadius,
    dimensionStylesTab: itemTabBorderRadius,
    dimensionStylesMobile: itemMobBorderRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ITEM_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: itemBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ITEM_BOX_SHADOW
  });
  const {
    dimensionStylesDesktop: itemDeskPadding,
    dimensionStylesTab: itemTabPadding,
    dimensionStylesMobile: itemMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ITEM_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: itemDeskMargin,
    dimensionStylesTab: itemTabMargin,
    dimensionStylesMobile: itemMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ITEM_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // content
  const {
    backgroundStylesDesktop: contentDeskBg,
    backgroundStylesTab: contentTabBg,
    backgroundStylesMobile: contentMobBg
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_BG,
    attributes,
    noMainBGImg: false
  });
  const {
    desktopBorderStyle: contentBorderDeskStyle,
    tabBorderStyle: contentBorderTabStyle,
    mobBorderStyle: contentBorderMobStyle
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: contentDeskBorderRadius,
    dimensionStylesTab: contentTabBorderRadius,
    dimensionStylesMobile: contentMobBorderRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: contentBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_BOX_SHADOW
  });
  const {
    dimensionStylesDesktop: contentDeskPadding,
    dimensionStylesTab: contentTabPadding,
    dimensionStylesMobile: contentMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: contentDeskMargin,
    dimensionStylesTab: contentTabMargin,
    dimensionStylesMobile: contentMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // Photo
  const {
    backgroundStylesDesktop: photoDeskBGStyle,
    backgroundStylesTab: photoTabBGStyle,
    backgroundStylesMobile: photoMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PHOTO_BG,
    attributes,
    noMainBGImg: true
  });
  const {
    backgroundStylesDesktop: imageDeskOverlayStyle,
    backgroundStylesTab: imageTabOverlayStyle,
    backgroundStylesMobile: imageMobOverlayStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_OVERLAY,
    attributes,
    noMainBGImg: true
  });
  const {
    desktopRangeStyle: photoDeskSize,
    tabRangeStyle: photoTabSize,
    mobRangeStyle: photoMobSize
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.PHOTO_SIZE,
    property: 'width',
    attributes
  });
  const {
    desktopBorderStyle: photoDeskBorderStyle,
    tabBorderStyle: photoTabBorderStyle,
    mobBorderStyle: photoMobBorderStyle
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_PHOTO_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: photoDeskBorderRadius,
    dimensionStylesTab: photoTabBorderRadius,
    dimensionStylesMobile: photoMobBorderRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_PHOTO_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: teamPhotoBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_PHOTO_BOX_SHADOW
  });
  const {
    dimensionStylesDesktop: photoDeskPadding,
    dimensionStylesTab: photoTabPadding,
    dimensionStylesMobile: photoMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_PHOTO_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: photoDeskMargin,
    dimensionStylesTab: photoTabMargin,
    dimensionStylesMobile: photoMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_PHOTO_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // Name
  const {
    typoStylesDesktop: nameTypoDesk,
    typoStylesTab: nameTypoTab,
    typoStylesMobile: nameTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.TEAM_MEMBER_NAME_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: nameDeskMargin,
    dimensionStylesTab: nameTabMargin,
    dimensionStylesMobile: nameMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_NAME_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // Designation
  const {
    typoStylesDesktop: designationTypoDesk,
    typoStylesTab: designationTypoTab,
    typoStylesMobile: designationTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.TEAM_MEMBER_DESIGNATION_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: designationDeskMargin,
    dimensionStylesTab: designationTabMargin,
    dimensionStylesMobile: designationMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_DESIGNATION_MARGIN,
    styleFor: 'margin',
    attributes
  });

  // Short bio
  const {
    typoStylesDesktop: shortBioTypoDesk,
    typoStylesTab: shortBioTypoTab,
    typoStylesMobile: shortBioTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstants__WEBPACK_IMPORTED_MODULE_3__.TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: shortBioDeskMargin,
    dimensionStylesTab: shortBioTabMargin,
    dimensionStylesMobile: shortBioMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.TEAM_SHORT_BIO_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    dimensionStylesDesktop: socialContainerDeskPadding,
    dimensionStylesTab: socialContainerTabPadding,
    dimensionStylesMobile: socialContainerMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICONS_CONTAINER_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: socialContainerDeskMargin,
    dimensionStylesTab: socialContainerTabMargin,
    dimensionStylesMobile: socialContainerMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICONS_CONTAINER_MARGIN,
    styleFor: 'margin',
    attributes
  });
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
  const {
    boxShadowStyle: socialIconNormalBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICONS_BOX_SHADOW
  });
  const {
    boxShadowStyle: socialIconHoverBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICONS_HOVER_BOX_SHADOW
  });

  // detail page
  const {
    backgroundStylesDesktop: detailPageNormalDeskBG,
    backgroundStylesTab: detailPageNormalTabBG,
    backgroundStylesMobile: detailPageNormalMobBG
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.DETAIL_PAGE_LINK_BG,
    attributes,
    noMainBGImg: true
  });
  const {
    backgroundStylesDesktop: detailPageHoverDeskBG,
    backgroundStylesTab: detailPageHoverTabBG,
    backgroundStylesMobile: detailPageHoverMobBG
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.DETAIL_PAGE_LINK_HOVER_BG,
    attributes,
    noMainBGImg: true
  });
  const {
    desktopRangeStyle: dplDeskSize,
    tabRangeStyle: dplTabSize,
    mobRangeStyle: dplMobSize
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.DPL_ICON_SIZE,
    property: 'width',
    attributes
  });
  const {
    desktopRangeStyle: dplDeskHSize,
    tabRangeStyle: dplTabHSize,
    mobRangeStyle: dplMobHSize
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.DPL_ICON_SIZE,
    property: 'height',
    attributes
  });
  const {
    desktopBorderStyle: dplDeskBorderStyle,
    tabBorderStyle: dplTabBorderStyle,
    mobBorderStyle: dplMobBorderStyle
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.DPL_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: dplDeskBorderRadius,
    dimensionStylesTab: dplTabBorderRadius,
    dimensionStylesMobile: dplMobBorderRadius
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.DPL_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: dplDeskPadding,
    dimensionStylesTab: dplTabPadding,
    dimensionStylesMobile: dplMobPadding
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.DPL_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: dplDeskMargin,
    dimensionStylesTab: dplTabMargin,
    dimensionStylesMobile: dplMobMargin
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.DPL_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    desktopRangeStyle: separatorWidthTeamDeskSize,
    tabRangeStyle: separatorWidthTeamTabSize,
    mobRangeStyle: separatorWidthTeamMobSize
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.SEPARATOR_TEAM_SIZE,
    property: ' width',
    attributes
  });
  const {
    desktopRangeStyle: separatorHeightTeamDeskSize,
    tabRangeStyle: separatorHeightTeamTabSize,
    mobRangeStyle: separatorHeightTeamMobSize
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.SEPARATOR_TEAM_SIZE,
    property: ' height',
    attributes
  });
  const {
    gapStylesDesktop: deskSeparatorSpacingTeam,
    gapStylesTab: tabSeparatorSpacingTeam,
    gapStylesMobile: mobSeparatorSpacingTeam
  } = generateGapStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.SEPARATOR_SPACING_TEAM,
    attributes
  });

  /**
   * All Style Combination
   */
  const desktopAllStyle = `
		.${uniqueId}.zolo-block.wp-block-zolo-team-child {
			${teamMemberContainerDeskPadding}
			${teamMemberContainerDeskMargin}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-item {
            ${itemDeskBg}
			${itemBorderDeskStyle}
			${itemDeskBorderRadius}
			${itemDeskPadding}
			${itemDeskMargin}
			${itemBoxShadow}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-item .zolo-info-wrap {
            ${contentDeskBg}
			${contentBorderDeskStyle}
			${contentDeskBorderRadius}
			${contentDeskPadding}
			${contentDeskMargin}
			${contentBoxShadow}
		}
       .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-item .zolo-social-and-link-wrap{
			${separatorColor ? `border-top-color: ${separatorColor};` : ''}
		}
		
        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap {
			${photoDeskMargin}
            
        }
		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img {
            ${photoDeskSize}
			${photoDeskBGStyle}
			${photoDeskBorderStyle}
			${photoDeskPadding}
			${teamPhotoBoxShadow}
		}

        ${preset === 'style-5' ? `
                       .${uniqueId}.zolo-block.wp-block-zolo-team-child.style-5 .zolo-image-wrap:before {
                            ${imageDeskOverlayStyle}
                        }
            ` : ''}


		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap,
		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img {
			${photoDeskBorderRadius}
		}
		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-name {
			${nameTypoDesk}
			${nameDeskMargin}
            ${nameColor ? `color: ${nameColor};` : ''}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-designation {
			${designationColor ? `color: ${designationColor};` : ''}
			${designationTypoDesk}
			${designationDeskMargin}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child.style-4 .zolo-nameDg-separator {
			${separatorTeamColor ? `background-color: ${separatorTeamColor};` : ''};
            ${separatorWidthTeamDeskSize}
            ${separatorHeightTeamDeskSize}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child.style-4 .zolo-name-desi-wrap {
            ${deskSeparatorSpacingTeam}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-desc {
			${shortBioColor && shortBioColor !== '' ? `color: ${shortBioColor};` : ''}
			${shortBioTypoDesk}
			${shortBioDeskMargin}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child.default .zolo-social-and-link-wrap {
            ${socialContainerDeskPadding}
            ${socialContainerDeskMargin}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share {
			${socialIconsGapDesk}
		}

        ${preset !== 'style-1' ? `
            .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share {
                ${socialIconsMarginDesk}
            }
            ` : ''}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share a {
			${socialIconDeskBorderStyle}
			${socialIconsBorderRadiusDesk}
			${socialIconsPaddingDesk}
			${socialIconNormalBoxShadow}
			${iconsNormalDeskBG}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share svg {
			${socialIconContainerHeightDesk}
			${socialIconContainerWidthDesk}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share a:hover {
			${socialIconHoverBoxShadow}
			${iconHoverBorderColor ? `border-color: ${iconHoverBorderColor};` : ''}
			${iconsHoverDeskBG}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share a:hover svg{
			${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn a {
			${detailPageNormalDeskBG}
			${dplDeskBorderStyle}
			${dplDeskBorderRadius}
			${dplDeskPadding}
			${dplDeskMargin}
		
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn svg {
			${detailPageIconColor ? `fill: ${detailPageIconColor};` : ''}
            ${dplDeskSize}
            ${dplDeskHSize}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn a:hover {
			${detailPageHoverDeskBG}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn a:hover svg{
			${detailPageIconHoverColor ? `fill: ${detailPageIconHoverColor};` : ''}
		}

        ${active ? `
                .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img {
                filter:
                    blur(${blur}px)
                    brightness(${brightness}%)
                    contrast(${contrast}%)
                    saturate(${saturate}%)
                    hue-rotate(${hueRotate}deg)
            }
        ` : ''}

        ${activeHover ? `
                            .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img:hover {
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
		.${uniqueId}.zolo-block.wp-block-zolo-team-child {
			${teamMemberContainerTabPadding}
			${teamMemberContainerTabMargin}
		}
        .zolo-block.wp-block-zolo-team-child.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-item {
            ${itemTabBg}
			${itemBorderTabStyle}
			${itemTabBorderRadius}
			${itemTabPadding}
			${itemTabMargin}
		}
		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-item .zolo-info-wrap {
            ${contentTabBg}
			${contentBorderTabStyle}
			${contentTabBorderRadius}
			${contentTabPadding}
			${contentTabMargin}
		}
        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap {
			${photoTabMargin}
           
        }
	   .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img {
            ${photoTabSize}
			${photoTabBGStyle}
			${photoTabBorderStyle}
			${photoTabPadding}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap,
		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img {
            ${photoTabBorderRadius}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-name {
			${nameTypoTab}
			${nameTabMargin}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-designation {
			${designationTypoTab}
			${designationTabMargin}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child.style-4 .zolo-nameDg-separator {
            ${separatorWidthTeamTabSize}
            ${separatorHeightTeamTabSize}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child.style-4 .zolo-name-desi-wrap {
            ${tabSeparatorSpacingTeam}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-desc {
			${shortBioTypoTab}
			${shortBioTabMargin}
		}
        .${uniqueId}.zolo-block.wp-block-zolo-team-child.default .zolo-social-and-link-wrap {
            ${socialContainerTabPadding}
            ${socialContainerTabMargin}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share {
			${socialIconsGapTab}
		}

        ${preset !== 'style-1' ? `
            .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share {
                ${socialIconsMarginTab}
            }
            ` : ''}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share a {
			${socialIconTabBorderStyle}
			${socialIconsBorderRadiusTab}
			${socialIconsPaddingTab}
			${iconsNormalTabBG}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share svg {
			${socialIconContainerHeightTab}
			${socialIconContainerWidthTab}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share a:hover {
			${iconsHoverTabBG}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn a {
			${detailPageNormalTabBG}
			${dplTabBorderStyle}
			${dplTabBorderRadius}
			${dplTabPadding}
			${dplTabMargin}
			
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn svg {
			${dplTabSize}
            ${dplTabHSize}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn a:hover {
			${detailPageHoverTabBG}
		}
	`;
  const mobileAllStyle = `
		.${uniqueId}.zolo-block.wp-block-zolo-team-child {
			${teamMemberContainerMobPadding}
			${teamMemberContainerMobMargin}
		}
        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-item {
            ${itemMobBg}
			${itemBorderMobStyle}
			${itemMobBorderRadius}
			${itemMobPadding}
			${itemMobMargin}
		}
		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-item .zolo-info-wrap {
            ${contentMobBg}
			${contentBorderMobStyle}
			${contentMobBorderRadius}
			${contentMobPadding}
			${contentMobMargin}

		}
        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap{
			${photoMobMargin}   
        }
		.zolo-block.wp-block-zolo-team-child.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img {
            ${photoMobSize}
			${photoMobBGStyle}
			${photoMobBorderStyle}
			${photoMobPadding}
		}
		.zolo-block.wp-block-zolo-team-child.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap,
		.zolo-block.wp-block-zolo-team-child.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img {
			${photoMobBorderRadius}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-name {
			${nameTypoMob}
			${nameMobMargin}
		}
		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-designation {
			${designationTypoMob}
			${designationMobMargin}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child.style-4 .zolo-nameDg-separator {
            ${separatorWidthTeamMobSize}
            ${separatorHeightTeamMobSize}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child.style-4 .zolo-name-desi-wrap {
            ${mobSeparatorSpacingTeam}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-desc {
			${shortBioTypoMob}
			${shortBioMobMargin}
		}
        .${uniqueId}.default .zolo-social-and-link-wrap {
            ${socialContainerMobPadding}
            ${socialContainerMobMargin}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share {
			${socialIconsGapMob}
		}

        ${preset !== 'style-1' ? `
            .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share {
                ${socialIconsMarginMob}
            }
            ` : ''}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share a {
			${socialIconMobBorderStyle}
			${socialIconsBorderRadiusMob}
			${socialIconsPaddingMob}
			${iconsNormalMobBG}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share svg {
			${socialIconContainerHeightMob}
			${socialIconContainerWidthMob}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share a:hover {
			${iconsHoverMobBG}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn a {
			${detailPageNormalMobBG}
			${dplMobBorderStyle}
			${dplMobBorderRadius}
			${dplMobPadding}
			${dplMobMargin}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn svg {
            ${dplMobSize}
            ${dplMobHSize}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn a:hover {
			${detailPageHoverMobBG}
		}
	`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.teamChild.desktopAllStyle', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.teamChild.tabletAllStyle', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('zolo.teamChild.mobileAllStyle', mobileAllStyle, props)
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/team-child/style.scss":
/*!******************************************!*\
  !*** ./src/blocks/team-child/style.scss ***!
  \******************************************/
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

/***/ "./src/blocks/team-child/block.json":
/*!******************************************!*\
  !*** ./src/blocks/team-child/block.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Team Child","name":"zolo/team-child","category":"zoloblocks","keywords":["team","member","avatar","profile","bio","position","social"],"description":"Add team members to the Team Grid layout.","parent":["zolo/team-grid"],"apiVersion":3,"textdomain":"zoloblocks","supports":{"anchor":false,"customClassName":false,"align":["wide","full"]},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 			"blocks/team-child/index": 0,
/******/ 			"blocks/team-child/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/team-child/style-index"], () => (__webpack_require__("./src/blocks/team-child/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map