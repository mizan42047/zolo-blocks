/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/post-comments-form/attributes.js":
/*!*****************************************************!*\
  !*** ./src/blocks/post-comments-form/attributes.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/post-comments-form/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/post-comments-form/constants/typoPrefixConstant.js");


/**
 * Internal dependencies
 */
const {
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateTypographyAttributes,
  generateResRangeAttributies
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
  showCommentTitle: {
    type: 'boolean',
    default: true
  },
  showCommentCount: {
    type: 'boolean',
    default: true
  },
  showForm: {
    type: 'boolean',
    default: true
  },
  commentTitle: {
    type: 'string',
    default: 'Comments'
  },
  commentFormTitle: {
    type: 'string',
    default: 'Leave a Reply'
  },
  cancelReply: {
    type: 'string',
    default: 'Cancel reply'
  },
  loginAsText: {
    type: 'string',
    default: 'Logged in as'
  },
  logoutText: {
    type: 'string',
    default: 'Log Out?'
  },
  submitBtnText: {
    type: 'string',
    default: 'Post Comment'
  },
  avatarSize: {
    type: 'string',
    default: '80'
  },
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__)),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.HEADINGB_SPACE),
  //comment list
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.COMMENT_PADDING, {
    isLinked: false
  }),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.COMMENT_SPACE),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.AVATAR_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AVATAR_BORDER_RADIUS),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.AVATAR_PADDING),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.AVATAR_SHADOW),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.AVATAR_IMG_SIZE),
  //reply btn
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.REPLY_PADDING),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.REPLY_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.REPLY_BORDER_RADIUS),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.REPLY_SHADOW),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.REPLY_HOVER_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.REPLY_HOVER_BRADIUS),
  ...generateBoxShadowAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.REPLY_HOVER_SHADOW),
  //form field
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FORM_HB_SPACE),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.INPUT_SPACE),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.INPUT_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.INPUT_MARGIN),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.INPUT_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.INPUT_BORDER_RADIUS),
  //submit btn
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUBMITBTN_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUBMITBTN_MARGIN),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.SUBMITBTN_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.SUBMITBTN_BORDER_RADIUS),
  headingColor: {
    type: 'string'
  },
  //comment list
  authorColor: {
    type: 'string'
  },
  authorHoverColor: {
    type: 'string'
  },
  metaColor: {
    type: 'string'
  },
  metaHoverColor: {
    type: 'string'
  },
  messageColor: {
    type: 'string'
  },
  messageHoverColor: {
    type: 'string'
  },
  //reply btn
  replyColor: {
    type: 'string'
  },
  replyBackground: {
    type: 'string'
  },
  replyHoverColor: {
    type: 'string'
  },
  replyHoverBackground: {
    type: 'string'
  },
  replyHoverBorder: {
    type: 'string'
  },
  formHeadingColor: {
    type: 'string'
  },
  //cancel
  cancelColor: {
    type: 'string'
  },
  cancelHoverColor: {
    type: 'string'
  },
  //form field
  formInfoColor: {
    type: 'string'
  },
  formInfoHoverColor: {
    type: 'string'
  },
  inputColor: {
    type: 'string'
  },
  inputBgColor: {
    type: 'string'
  },
  inputHoverColor: {
    type: 'string'
  },
  inputHoverBgColor: {
    type: 'string'
  },
  inputFocusColor: {
    type: 'string'
  },
  inputFocusBgColor: {
    type: 'string'
  },
  //submit btn
  submitBtnColor: {
    type: 'string'
  },
  submitBtnBgColor: {
    type: 'string'
  },
  submitBtnHoverColor: {
    type: 'string'
  },
  submitBtnBgHoverColor: {
    type: 'string'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/post-comments-form/constants/index.js":
/*!**********************************************************!*\
  !*** ./src/blocks/post-comments-form/constants/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AVATAR_BORDER: () => (/* binding */ AVATAR_BORDER),
/* harmony export */   AVATAR_BORDER_RADIUS: () => (/* binding */ AVATAR_BORDER_RADIUS),
/* harmony export */   AVATAR_IMG_SIZE: () => (/* binding */ AVATAR_IMG_SIZE),
/* harmony export */   AVATAR_PADDING: () => (/* binding */ AVATAR_PADDING),
/* harmony export */   AVATAR_SHADOW: () => (/* binding */ AVATAR_SHADOW),
/* harmony export */   AVATAR_SIZE: () => (/* binding */ AVATAR_SIZE),
/* harmony export */   COMMENT_PADDING: () => (/* binding */ COMMENT_PADDING),
/* harmony export */   COMMENT_SPACE: () => (/* binding */ COMMENT_SPACE),
/* harmony export */   FORM_HB_SPACE: () => (/* binding */ FORM_HB_SPACE),
/* harmony export */   HEADINGB_SPACE: () => (/* binding */ HEADINGB_SPACE),
/* harmony export */   INPUT_BORDER: () => (/* binding */ INPUT_BORDER),
/* harmony export */   INPUT_BORDER_RADIUS: () => (/* binding */ INPUT_BORDER_RADIUS),
/* harmony export */   INPUT_MARGIN: () => (/* binding */ INPUT_MARGIN),
/* harmony export */   INPUT_PADDING: () => (/* binding */ INPUT_PADDING),
/* harmony export */   INPUT_SPACE: () => (/* binding */ INPUT_SPACE),
/* harmony export */   REPLY_BORDER: () => (/* binding */ REPLY_BORDER),
/* harmony export */   REPLY_BORDER_RADIUS: () => (/* binding */ REPLY_BORDER_RADIUS),
/* harmony export */   REPLY_HOVER_BORDER: () => (/* binding */ REPLY_HOVER_BORDER),
/* harmony export */   REPLY_HOVER_BRADIUS: () => (/* binding */ REPLY_HOVER_BRADIUS),
/* harmony export */   REPLY_HOVER_SHADOW: () => (/* binding */ REPLY_HOVER_SHADOW),
/* harmony export */   REPLY_PADDING: () => (/* binding */ REPLY_PADDING),
/* harmony export */   REPLY_SHADOW: () => (/* binding */ REPLY_SHADOW),
/* harmony export */   SUBMITBTN_BORDER: () => (/* binding */ SUBMITBTN_BORDER),
/* harmony export */   SUBMITBTN_BORDER_RADIUS: () => (/* binding */ SUBMITBTN_BORDER_RADIUS),
/* harmony export */   SUBMITBTN_MARGIN: () => (/* binding */ SUBMITBTN_MARGIN),
/* harmony export */   SUBMITBTN_PADDING: () => (/* binding */ SUBMITBTN_PADDING)
/* harmony export */ });
const AVATAR_SIZE = [{
  value: '16',
  label: '16 X 16'
}, {
  value: '24',
  label: '24 X 24'
}, {
  value: '48',
  label: '48 X 48'
}, {
  value: '64',
  label: '64 X 64'
}, {
  value: '80',
  label: '80 X 80'
}, {
  value: '90',
  label: '90 X 90'
}, {
  value: '100',
  label: '100 X 100'
}, {
  value: '120',
  label: '120 X 120'
}];
const HEADINGB_SPACE = 'headingBSpace';
//comment list
const COMMENT_SPACE = 'commentBSpace';
const COMMENT_PADDING = 'commentPadding';
const AVATAR_BORDER = 'avatarBorder';
const AVATAR_BORDER_RADIUS = 'avatarBRadius';
const AVATAR_PADDING = 'avatarPadding';
const AVATAR_IMG_SIZE = 'avatarSize';
const AVATAR_SHADOW = 'avatarShadow';

//reply btn
const REPLY_PADDING = 'replyPadding';
const REPLY_BORDER = 'reply';
const REPLY_BORDER_RADIUS = 'reply';
const REPLY_SHADOW = 'reply';
const REPLY_HOVER_BORDER = 'reply';
const REPLY_HOVER_BRADIUS = 'reply';
const REPLY_HOVER_SHADOW = 'reply';

//form field
const FORM_HB_SPACE = 'formHBSpace';
const INPUT_SPACE = 'inputSpace';
const INPUT_PADDING = 'inputPadding';
const INPUT_MARGIN = 'inputMargin';
const INPUT_BORDER = 'inputBorder';
const INPUT_BORDER_RADIUS = 'inputBRadius';

//submit btn
const SUBMITBTN_PADDING = 'sbtnPadding';
const SUBMITBTN_MARGIN = 'sbtnMargin';
const SUBMITBTN_BORDER = 'sbtnBorder';
const SUBMITBTN_BORDER_RADIUS = 'sbtnBRadius';

/***/ }),

/***/ "./src/blocks/post-comments-form/constants/typoPrefixConstant.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/post-comments-form/constants/typoPrefixConstant.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTHOR_TYPOGRAPHY: () => (/* binding */ AUTHOR_TYPOGRAPHY),
/* harmony export */   CANCEL_TYPOGRAPHY: () => (/* binding */ CANCEL_TYPOGRAPHY),
/* harmony export */   FORMH_TYPOGRAPHY: () => (/* binding */ FORMH_TYPOGRAPHY),
/* harmony export */   FORMINFO_TYPOGRAPHY: () => (/* binding */ FORMINFO_TYPOGRAPHY),
/* harmony export */   HEADING_TYPOGRAPHY: () => (/* binding */ HEADING_TYPOGRAPHY),
/* harmony export */   INPUT_TYPOGRAPHY: () => (/* binding */ INPUT_TYPOGRAPHY),
/* harmony export */   MESSAGE_TYPOGRAPHY: () => (/* binding */ MESSAGE_TYPOGRAPHY),
/* harmony export */   META_TYPOGRAPHY: () => (/* binding */ META_TYPOGRAPHY),
/* harmony export */   REPLY_TYPOGRAPHY: () => (/* binding */ REPLY_TYPOGRAPHY),
/* harmony export */   SUBMITBTN_TYPOGRAPHY: () => (/* binding */ SUBMITBTN_TYPOGRAPHY)
/* harmony export */ });
const HEADING_TYPOGRAPHY = 'headingTypo';
const AUTHOR_TYPOGRAPHY = 'authorTypo';
const META_TYPOGRAPHY = 'metaTypo';
const MESSAGE_TYPOGRAPHY = 'messageTypo';
const REPLY_TYPOGRAPHY = 'replyTypo';
const FORMH_TYPOGRAPHY = 'formHTypo';
const CANCEL_TYPOGRAPHY = 'cancelTypo';
const FORMINFO_TYPOGRAPHY = 'formInfoTypo';
const INPUT_TYPOGRAPHY = 'inputTypo';
const SUBMITBTN_TYPOGRAPHY = 'submitTypo';

/***/ }),

/***/ "./src/blocks/post-comments-form/edit.js":
/*!***********************************************!*\
  !*** ./src/blocks/post-comments-form/edit.js ***!
  \***********************************************/
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
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/post-comments-form/inspector.js");
/* harmony import */ var _render_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render-view */ "./src/blocks/post-comments-form/render-view.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/post-comments-form/style.scss");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./src/blocks/post-comments-form/styles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);







const {
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
    commentQuery,
    preset
  } = attributes;
  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, `${uniqueId}`, classArrayToStr(parentClasses))
  });

  // preview image
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: zoloParams?.blocksPreview?.postCommentsForm,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Comments Form Preview', 'zoloblocks')
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
    })]
  });
}

/***/ }),

/***/ "./src/blocks/post-comments-form/index.js":
/*!************************************************!*\
  !*** ./src/blocks/post-comments-form/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/post-comments-form/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/post-comments-form/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/post-comments-form/edit.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/post-comments-form/style.scss");




const {
  BlockIcons
} = window.zoloIcons;
const {
  manageSingleBlock
} = window.zoloModule;
const blockConfig = {
  metadata: _block_json__WEBPACK_IMPORTED_MODULE_0__,
  icon: BlockIcons['post-comments-form'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
};

// Register/unregister the block based on the URL
manageSingleBlock(blockConfig);

// Optional: Add listeners for dynamic URL updates
window.addEventListener('popstate', () => manageSingleBlock(blockConfig));

// Override history.pushState to detect programmatic URL changes
const originalPushState = history.pushState;
history.pushState = function (...args) {
  originalPushState.apply(history, args);
  manageSingleBlock(blockConfig); // Re-check when URL is updated programmatically
};

// Override history.replaceState to detect programmatic URL changes
const originalReplaceState = history.replaceState;
history.replaceState = function (...args) {
  originalReplaceState.apply(history, args);
  manageSingleBlock(blockConfig); // Re-check when URL is updated programmatically
};

/***/ }),

/***/ "./src/blocks/post-comments-form/inspector.js":
/*!****************************************************!*\
  !*** ./src/blocks/post-comments-form/inspector.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inspector)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/blocks/post-comments-form/attributes.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/post-comments-form/constants/typoPrefixConstant.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/blocks/post-comments-form/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const {
  ResDimensionsControl,
  BorderControl,
  BoxShadowControl,
  HeaderTabs,
  ColorControl,
  TypographyDropdown,
  AdvancedOptions,
  ZoloPanelBody,
  TabPanelControl,
  ResRangeControl
} = window.zoloModule;
function Inspector(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    resMode,
    showCommentTitle,
    showCommentCount,
    showForm,
    commentFormTitle,
    cancelReply,
    submitBtnText,
    loginAsText,
    logoutText,
    headingColor,
    //comment list
    authorColor,
    authorHoverColor,
    metaColor,
    metaHoverColor,
    messageColor,
    messageHoverColor,
    //reply btn
    replyColor,
    replyBackground,
    replyHoverColor,
    replyHoverBackground,
    replyHoverBorder,
    formHeadingColor,
    //cancel
    cancelColor,
    cancelHoverColor,
    //form field
    formInfoColor,
    formInfoHoverColor,
    inputColor,
    inputBgColor,
    inputFocusColor,
    inputFocusBgColor,
    //submit btn
    submitBtnColor,
    submitBtnBgColor,
    submitBtnHoverColor,
    submitBtnBgHoverColor
  } = attributes;
  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(HeaderTabs, {
      block: "zolo/post-comments-form",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'zoloblocks'),
          panelProps: props,
          firstOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-custom-heading",
            style: {
              border: 0,
              paddingTop: 0
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show/hide elements', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Comment Title', 'zoloblocks'),
            checked: showCommentTitle,
            onChange: showCommentTitle => setAttributes({
              showCommentTitle
            })
          }), showCommentTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Comment Count', 'zoloblocks'),
            checked: showCommentCount,
            onChange: showCommentCount => setAttributes({
              showCommentCount
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Comment Form', 'zoloblocks'),
            checked: showForm,
            onChange: showForm => setAttributes({
              showForm
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Form Title', 'zoloblocks'),
            value: commentFormTitle,
            onChange: commentFormTitle => setAttributes({
              commentFormTitle
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cancel Reply', 'zoloblocks'),
            value: cancelReply,
            onChange: cancelReply => setAttributes({
              cancelReply
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Login Text', 'zoloblocks'),
            value: loginAsText,
            onChange: loginAsText => setAttributes({
              loginAsText
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logout Text', 'zoloblocks'),
            value: logoutText,
            onChange: logoutText => setAttributes({
              logoutText
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Text', 'zoloblocks'),
            value: submitBtnText,
            onChange: submitBtnText => setAttributes({
              submitBtnText
            })
          })]
        })
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Comment Heading', 'zoloblocks'),
          firstOpen: true,
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: headingColor,
            onChange: color => setAttributes({
              headingColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.HEADING_TYPOGRAPHY,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Space', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.HEADINGB_SPACE,
            requiredProps: requiredProps,
            min: 0,
            max: 100,
            step: 1
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Comment List', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.COMMENT_PADDING,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Space', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.COMMENT_SPACE,
            requiredProps: requiredProps,
            min: 0,
            max: 100,
            step: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Avatar', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.AVATAR_IMG_SIZE,
            requiredProps: requiredProps,
            min: 0,
            max: 200,
            step: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.AVATAR_PADDING,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.AVATAR_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.AVATAR_BORDER_RADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BoxShadowControl, {
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.AVATAR_SHADOW,
            requiredProps: requiredProps,
            enableTransition: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Author Name', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: authorColor,
                onChange: color => setAttributes({
                  authorColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.AUTHOR_TYPOGRAPHY,
                requiredProps: requiredProps
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: authorHoverColor,
                onChange: color => setAttributes({
                  authorHoverColor: color
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: metaColor,
                onChange: color => setAttributes({
                  metaColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.META_TYPOGRAPHY,
                requiredProps: requiredProps
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: metaHoverColor,
                onChange: color => setAttributes({
                  metaHoverColor: color
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Message', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: messageColor,
            onChange: color => setAttributes({
              messageColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.MESSAGE_TYPOGRAPHY,
            requiredProps: requiredProps
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reply Button', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: replyColor,
                onChange: color => setAttributes({
                  replyColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.REPLY_TYPOGRAPHY,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: replyBackground,
                onChange: color => setAttributes({
                  replyBackground: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.REPLY_PADDING,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.REPLY_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.REPLY_SHADOW,
                requiredProps: requiredProps,
                enableTransition: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.REPLY_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: replyHoverColor,
                onChange: color => setAttributes({
                  replyHoverColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: replyHoverBackground,
                onChange: color => setAttributes({
                  replyHoverBackground: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                color: replyHoverBorder,
                onChange: color => setAttributes({
                  replyHoverBorder: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BoxShadowControl, {
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.REPLY_HOVER_SHADOW,
                requiredProps: requiredProps,
                enableTransition: false
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Form Heading', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: formHeadingColor,
            onChange: color => setAttributes({
              formHeadingColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.FORMH_TYPOGRAPHY,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Space', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FORM_HB_SPACE,
            requiredProps: requiredProps,
            min: 0,
            max: 100,
            step: 1
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cancel Reply', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: cancelColor,
                onChange: color => setAttributes({
                  cancelColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.CANCEL_TYPOGRAPHY,
                requiredProps: requiredProps
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: cancelHoverColor,
                onChange: color => setAttributes({
                  cancelHoverColor: color
                })
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Comment Form', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-custom-heading",
            style: {
              border: 0,
              paddingTop: 0
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Form Info', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: formInfoColor,
                onChange: color => setAttributes({
                  formInfoColor: color
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.FORMINFO_TYPOGRAPHY,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space Between', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.INPUT_SPACE,
                requiredProps: requiredProps,
                min: 0,
                max: 100,
                step: 1
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: formInfoHoverColor,
                onChange: color => setAttributes({
                  formInfoHoverColor: color
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-custom-heading",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Form Fields', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanelControl, {
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'zoloblocks'),
              value: 'normal'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Focus', 'zoloblocks'),
              value: 'hover'
            }],
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: inputColor,
                onChange: value => setAttributes({
                  inputColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.INPUT_TYPOGRAPHY,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: inputBgColor,
                onChange: value => setAttributes({
                  inputBgColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.INPUT_PADDING,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.INPUT_MARGIN,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.INPUT_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.INPUT_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: inputFocusColor,
                onChange: value => setAttributes({
                  inputFocusColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: inputFocusBgColor,
                onChange: value => setAttributes({
                  inputFocusBgColor: value
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Submit Button', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanelControl, {
            normalComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: submitBtnColor,
                onChange: value => setAttributes({
                  submitBtnColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
                typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.SUBMITBTN_TYPOGRAPHY,
                requiredProps: requiredProps,
                max: 36
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: submitBtnBgColor,
                onChange: value => setAttributes({
                  submitBtnBgColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.SUBMITBTN_PADDING,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.SUBMITBTN_MARGIN,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.SUBMITBTN_BORDER,
                requiredProps: requiredProps
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
                controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.SUBMITBTN_BORDER_RADIUS,
                requiredProps: requiredProps,
                forBorderRadius: true
              })]
            }),
            hoverComponents: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
                color: submitBtnHoverColor,
                onChange: value => setAttributes({
                  submitBtnHoverColor: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'zoloblocks'),
                color: submitBtnBgHoverColor,
                onChange: value => setAttributes({
                  submitBtnBgHoverColor: value
                })
              })]
            })
          })
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps,
          block: "zolo/post-comments-form"
        })
      })
    })
  }, "controls");
}

/***/ }),

/***/ "./src/blocks/post-comments-form/render-view.js":
/*!******************************************************!*\
  !*** ./src/blocks/post-comments-form/render-view.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RenderView)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function RenderView({
  attributes
}) {
  const {
    showCommentTitle,
    showCommentCount,
    showForm,
    commentFormTitle,
    cancelReply,
    loginAsText,
    logoutText,
    submitBtnText
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [showCommentTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "zolo-comment-count",
      children: [showCommentCount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        children: "1"
      }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Comment', 'zoloblocks')]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
      className: "zolo-comment-list",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        className: "comment byuser comment-author-admin bypostauthor even thread-even depth-1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "comment-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("footer", {
            className: "comment-meta",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "comment-author vcard",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                alt: "avatar",
                src: "https://2.gravatar.com/avatar/20ec7e03797c09e0f5b952b6d8823d81?s=250&d=mm&r=g",
                className: "avatar avatar-200 photo",
                height: "200",
                width: "200",
                decoding: "async"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
                className: "fn",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                  onClick: event => event.preventDefault(),
                  href: "http://null.test/author/admin/",
                  rel: "external nofollow ugc",
                  className: "url",
                  children: "admin"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "says",
                children: "says:"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "comment-metadata",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                onClick: event => event.preventDefault(),
                href: "#",
                children: "October 15, 2024 at 10:04 am"
              }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                onClick: event => event.preventDefault(),
                className: "comment-edit-link",
                href: "#",
                children: "Edit"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "comment-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "reply",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              onClick: event => event.preventDefault(),
              className: "comment-reply-link",
              href: "#",
              children: "Reply"
            })
          })]
        })
      })
    }), showForm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      id: "respond",
      className: "comment-respond",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h3", {
        id: "reply-title",
        className: "comment-reply-title",
        children: [commentFormTitle, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("small", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            onClick: event => event.preventDefault(),
            id: "cancel-comment-reply-link",
            href: "#",
            children: cancelReply
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
        action: "#",
        method: "post",
        id: "commentform",
        className: "zolo-comment-form",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "logged-in-as",
          children: [loginAsText, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            onClick: event => event.preventDefault(),
            href: "#",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(' admin.', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            onClick: event => event.preventDefault(),
            href: "#",
            children: logoutText
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "zolo-form-group",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
            id: "comment",
            name: "comment",
            cols: "45",
            rows: "6",
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Comment', 'zoloblocks')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "form-submit wp-block-button",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            name: "submit",
            type: "submit",
            id: "submit",
            className: "submit wp-element-button",
            value: submitBtnText
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/post-comments-form/styles.js":
/*!*************************************************!*\
  !*** ./src/blocks/post-comments-form/styles.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/post-comments-form/constants/typoPrefixConstant.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/blocks/post-comments-form/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  generateResRangeStyle,
  generateDimensionStyle,
  generateBorderStyle,
  generateBoxShadowStyles,
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
    headingColor,
    //comment list
    authorColor,
    authorHoverColor,
    metaColor,
    metaHoverColor,
    messageColor,
    messageHoverColor,
    //reply btn
    replyColor,
    replyBackground,
    replyHoverColor,
    replyHoverBackground,
    replyHoverBorder,
    formHeadingColor,
    //cancel
    cancelColor,
    cancelHoverColor,
    //input field
    formInfoColor,
    formInfoHoverColor,
    inputColor,
    inputBgColor,
    inputFocusColor,
    inputFocusBgColor,
    //submit btn
    submitBtnColor,
    submitBtnBgColor,
    submitBtnHoverColor,
    submitBtnBgHoverColor
  } = attributes;
  const {
    typoStylesDesktop: headingTypoDesk,
    typoStylesTab: headingTypoTab,
    typoStylesMobile: headingTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__.HEADING_TYPOGRAPHY,
    attributes
  });
  const {
    desktopRangeStyle: headingSpaceDesk,
    tabRangeStyle: headingSpaceTab,
    mobRangeStyle: headingSpaceMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.HEADINGB_SPACE,
    property: 'margin-bottom',
    attributes
  });
  //comment list
  const {
    dimensionStylesDesktop: commentPaddingDesk,
    dimensionStylesTab: commentPaddingTab,
    dimensionStylesMobile: commentPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.COMMENT_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    desktopRangeStyle: commentSpaceDesk,
    tabRangeStyle: commentSpaceTab,
    mobRangeStyle: commentSpaceMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.COMMENT_SPACE,
    property: 'margin-bottom',
    attributes
  });
  const {
    dimensionStylesDesktop: avatarPaddingDesk,
    dimensionStylesTab: avatarPaddingTab,
    dimensionStylesMobile: avatarPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.AVATAR_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    desktopBorderStyle: avatarBorderDesk,
    tabBorderStyle: avatarBorderTab,
    mobBorderStyle: avatarBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.AVATAR_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: avatarBorderRadiusDesk,
    dimensionStylesTab: avatarBorderRadiusTab,
    dimensionStylesMobile: avatarBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.AVATAR_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: avatarBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.AVATAR_SHADOW
  });
  const {
    desktopRangeStyle: avatarSizeDesk,
    tabRangeStyle: avatarSizeTab,
    mobRangeStyle: avatarSizeMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.AVATAR_IMG_SIZE,
    property: 'width',
    attributes
  });
  const {
    typoStylesDesktop: authorTypoDesk,
    typoStylesTab: authorTypoTab,
    typoStylesMobile: authorTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__.AUTHOR_TYPOGRAPHY,
    attributes
  });
  const {
    typoStylesDesktop: metaTypoDesk,
    typoStylesTab: metaTypoTab,
    typoStylesMobile: metaTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__.META_TYPOGRAPHY,
    attributes
  });
  const {
    typoStylesDesktop: messageTypoDesk,
    typoStylesTab: messageTypoTab,
    typoStylesMobile: messageTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_TYPOGRAPHY,
    attributes
  });

  //reply btn
  const {
    typoStylesDesktop: replyTypoDesk,
    typoStylesTab: replyTypoTab,
    typoStylesMobile: replyTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__.REPLY_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: replyPaddingDesk,
    dimensionStylesTab: replyPaddingTab,
    dimensionStylesMobile: replyPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.REPLY_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    desktopBorderStyle: replyBorderDesk,
    tabBorderStyle: replyBorderTab,
    mobBorderStyle: replyBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.REPLY_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: replyBorderRadiusDesk,
    dimensionStylesTab: replyBorderRadiusTab,
    dimensionStylesMobile: replyBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.REPLY_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: replyBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.REPLY_SHADOW
  });
  //reply hover
  const {
    desktopBorderStyle: replyHBorderDesk,
    tabBorderStyle: replyHBorderTab,
    mobBorderStyle: replyHBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.REPLY_HOVER_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: replyHBorderRadiusDesk,
    dimensionStylesTab: replyHBorderRadiusTab,
    dimensionStylesMobile: replyHBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.REPLY_HOVER_BRADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    boxShadowStyle: replyHBoxShadow
  } = generateBoxShadowStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.REPLY_HOVER_SHADOW
  });
  //cancel
  const {
    typoStylesDesktop: cancelTypoDesk,
    typoStylesTab: cancelTypoTab,
    typoStylesMobile: cancelTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__.CANCEL_TYPOGRAPHY,
    attributes
  });

  //from field
  const {
    typoStylesDesktop: formHeadingTypoDesk,
    typoStylesTab: formHeadingTypoTab,
    typoStylesMobile: formHeadingTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__.FORMH_TYPOGRAPHY,
    attributes
  });
  const {
    desktopRangeStyle: formHeadingBSpaceDesk,
    tabRangeStyle: formHeadingBSpaceTab,
    mobRangeStyle: formHeadingBSpaceMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FORM_HB_SPACE,
    property: 'margin-bottom',
    attributes
  });
  const {
    typoStylesDesktop: formInfoTypoDesk,
    typoStylesTab: formInfoTypoTab,
    typoStylesMobile: formInfoTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__.FORMINFO_TYPOGRAPHY,
    attributes
  });
  const {
    desktopRangeStyle: inputSpaceDesk,
    tabRangeStyle: inputSpaceTab,
    mobRangeStyle: inputSpaceMob
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.INPUT_SPACE,
    property: 'gap',
    attributes
  });
  const {
    typoStylesDesktop: inputTypoDesk,
    typoStylesTab: inputTypoTab,
    typoStylesMobile: inputTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__.INPUT_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: inputPaddingDesk,
    dimensionStylesTab: inputPaddingTab,
    dimensionStylesMobile: inputPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.INPUT_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: inputMarginDesk,
    dimensionStylesTab: inputMarginTab,
    dimensionStylesMobile: inputMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.INPUT_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    desktopBorderStyle: inputBorderDesk,
    tabBorderStyle: inputBorderTab,
    mobBorderStyle: inputBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.INPUT_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: inputBorderRadiusDesk,
    dimensionStylesTab: inputBorderRadiusTab,
    dimensionStylesMobile: inputBorderRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.INPUT_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });

  //submit btn
  const {
    typoStylesDesktop: submitBtnTypoDesk,
    typoStylesTab: submitBtnTypoTab,
    typoStylesMobile: submitBtnTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__.SUBMITBTN_TYPOGRAPHY,
    attributes
  });
  const {
    dimensionStylesDesktop: submitBtnPaddingDesk,
    dimensionStylesTab: submitBtnPaddingTab,
    dimensionStylesMobile: submitBtnPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.SUBMITBTN_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    dimensionStylesDesktop: submitBtnMarginDesk,
    dimensionStylesTab: submitBtnMarginTab,
    dimensionStylesMobile: submitBtnMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.SUBMITBTN_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    desktopBorderStyle: submitBtnBorderDesk,
    tabBorderStyle: submitBtnBorderTab,
    mobBorderStyle: submitBtnBorderMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.SUBMITBTN_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: submitBtnBRadiusDesk,
    dimensionStylesTab: submitBtnBRadiusTab,
    dimensionStylesMobile: submitBtnBRadiusMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.SUBMITBTN_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const desktopAllStyle = `
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-count{
     ${headingTypoDesk}
     ${headingSpaceDesk}
     ${headingColor ? `color:${headingColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list{
      ${commentSpaceDesk}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list .comment-body{
     ${commentPaddingDesk}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list img.avatar{
      ${avatarPaddingDesk}
      ${avatarBorderDesk}
      ${avatarBorderRadiusDesk}
      ${avatarBoxShadow}
      ${avatarSizeDesk}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-author a{
      ${authorTypoDesk}
      ${authorColor ? `color:${authorColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-author a:hover{
      ${authorHoverColor ? `color:${authorHoverColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-metadata a{
      ${metaTypoDesk}
      ${metaColor ? `color:${metaColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-metadata a:hover{
      ${metaHoverColor ? `color:${metaHoverColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-content p{
      ${messageTypoDesk}
      ${messageColor ? `color:${messageColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-content p:hover{
      ${messageHoverColor ? `color:${messageHoverColor};` : ''}
    }
   .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-link{
    ${replyTypoDesk}
    ${replyPaddingDesk}
    ${replyBorderDesk}
    ${replyBorderRadiusDesk}
    ${replyBoxShadow}
    ${replyColor ? `color:${replyColor};` : ''}
    ${replyBackground ? `background:${replyBackground};` : ''}
   }
   .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-link:hover{
    ${replyHBoxShadow}
    ${replyHoverColor ? `color:${replyHoverColor};` : ''}
    ${replyHoverBackground ? `background:${replyHoverBackground};` : ''}
    ${replyHoverBorder ? `border-color:${replyHoverBorder};` : ''}

   }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-title{
     ${formHeadingTypoDesk}
     ${formHeadingBSpaceDesk}
     ${formHeadingColor ? `color:${formHeadingColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-title small a{
     ${cancelTypoDesk}
     ${cancelColor ? `color:${cancelColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-title small a:hover{
     ${cancelHoverColor ? `color:${cancelHoverColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .logged-in-as,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .must-log-in,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .logged-in-as a{
     ${formInfoTypoDesk}
     ${formInfoColor ? `color:${formInfoColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .logged-in-as a:hover{
      ${formInfoHoverColor ? `color:${formInfoHoverColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form{
     ${inputSpaceDesk}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #author,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #email,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #url,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form textarea#comment{
      ${inputTypoDesk}
      ${inputPaddingDesk}
      ${inputMarginDesk}
      ${inputBorderDesk}
      ${inputBorderRadiusDesk}
      ${inputColor ? `color:${inputColor};` : ''}
      ${inputBgColor ? `background-color:${inputBgColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block input::placeholder,
     .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block textarea::placeholder{
      ${inputColor ? `color:${inputColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #author:focus,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #email:focus,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #url:focus,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form textarea#comment:focus{
      ${inputFocusColor ? `color:${inputFocusColor};` : ''}
      ${inputFocusBgColor ? `background-color:${inputFocusBgColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block input:focus::placeholder,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block textarea:focus::placeholder{
      ${inputFocusColor ? `color:${inputFocusColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #submit{
      ${submitBtnTypoDesk}
      ${submitBtnPaddingDesk}
      ${submitBtnMarginDesk}
      ${submitBtnBorderDesk}
      ${submitBtnBRadiusDesk}
      ${submitBtnColor ? `color:${submitBtnColor};` : ''}
      ${submitBtnBgColor ? `background-color:${submitBtnBgColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #submit:hover{
      ${submitBtnHoverColor ? `color:${submitBtnHoverColor};` : ''}
      ${submitBtnBgHoverColor ? `background-color:${submitBtnBgHoverColor};` : ''}
    }
  `;
  const tabletAllStyle = `
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-count{
     ${headingTypoTab}
     ${headingSpaceTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list{
      ${commentSpaceTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list .comment-body{
     ${commentPaddingTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list img.avatar{
      ${avatarPaddingTab}
      ${avatarBorderTab}
      ${avatarBorderRadiusTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-author a{
      ${authorTypoTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-metadata a{
      ${metaTypoTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-content p{
      ${messageTypoTab}
    }
   .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-link{
    ${replyTypoTab}
    ${replyPaddingTab}
    ${replyBorderTab}
    ${replyBorderRadiusTab}
   }
   .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-link:hover{
    ${replyHBorderTab}
    ${replyHBorderRadiusTab}
   }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-title{
     ${formHeadingTypoTab}
     ${formHeadingBSpaceTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-title small a{
     ${cancelTypoTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .logged-in-as,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .must-log-in,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .logged-in-as a{
     ${formInfoTypoTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form{
     ${inputSpaceTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #author,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #email,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #url,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form textarea#comment{
      ${inputTypoTab}
      ${inputPaddingTab}
      ${inputMarginTab}
      ${inputBorderTab}
      ${inputBorderRadiusTab}
    }

    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #submit{
      ${submitBtnTypoTab}
      ${submitBtnPaddingTab}
      ${submitBtnMarginTab}
      ${submitBtnBorderTab}
      ${submitBtnBRadiusTab}
    }

  `;
  const mobileAllStyle = `
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-count{
     ${headingTypoMob}
     ${headingSpaceMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list{
      ${commentSpaceMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list .comment-body{
     ${commentPaddingMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list img.avatar{
      ${avatarPaddingMob}
      ${avatarBorderMob}
      ${avatarBorderRadiusMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-author a{
      ${authorTypoMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-metadata a{
      ${metaTypoMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-content p{
      ${messageTypoMob}
    }
   .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-link{
    ${replyTypoMob}
    ${replyPaddingMob}
    ${replyBorderMob}
    ${replyBorderRadiusMob}
   }
   .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-link:hover{
    ${replyHBorderMob}
    ${replyHBorderRadiusMob}
   }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-title{
     ${formHeadingTypoMob}
     ${formHeadingBSpaceMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-title small a{
     ${cancelTypoMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .logged-in-as,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .must-log-in,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .logged-in-as a{
     ${formInfoTypoMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form{
     ${inputSpaceMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #author,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #email,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #url,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form textarea#comment{
      ${inputTypoMob}
      ${inputPaddingMob}
      ${inputMarginMob}
      ${inputBorderMob}
      ${inputBorderRadiusMob}
    }

    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #submit{
      ${submitBtnTypoMob}
      ${submitBtnPaddingMob}
      ${submitBtnMarginMob}
      ${submitBtnBorderMob}
      ${submitBtnBRadiusMob}
    }
  `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('zolo.postCommentsForm.desktopAllStyle', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('zolo.postCommentsForm.tabletAllStyle', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('zolo.postCommentsForm.mobileAllStyle', mobileAllStyle, props)
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/post-comments-form/style.scss":
/*!**************************************************!*\
  !*** ./src/blocks/post-comments-form/style.scss ***!
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

/***/ "./src/blocks/post-comments-form/block.json":
/*!**************************************************!*\
  !*** ./src/blocks/post-comments-form/block.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Post Comments Form","name":"zolo/post-comments-form","category":"zoloblocks-single","keywords":["post","comments","form","discussion","engagement","interaction"],"description":"Customizable dynamic post comment form for your website single post comments form","apiVersion":2,"textdomain":"zoloblocks","usesContext":["postId","postType"],"example":{"attributes":{"preview":true},"viewportWidth":410},"supports":{"anchor":false,"customClassName":false,"align":["wide","full"]},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 			"blocks/post-comments-form/index": 0,
/******/ 			"blocks/post-comments-form/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/post-comments-form/style-index"], () => (__webpack_require__("./src/blocks/post-comments-form/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map