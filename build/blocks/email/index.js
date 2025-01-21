/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/email/attributes.js":
/*!****************************************!*\
  !*** ./src/blocks/email/attributes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/email/constants/index.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/email/constants/typoPrefixConstant.js");
/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateTypographyAttributes,
  generateDimensionAttributes,
  generateNormalBGAttributes,
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
  preset: {
    type: 'string',
    default: 'style-1'
  },
  // Generators
  // ...generateResAlignmentAttributies(ITEMS_ALIGN),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.LABEL_MARGIN),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.LABEL_BG),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.LABEL_PADDING),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.LABEL_BRADIUS),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.LABEL_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FIELD_PADDING),
  ...generateNormalBGAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FIELD_BG),
  ...generateBorderAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.FIELD_BORDER),
  ...generateDimensionAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.FIELD_BRADIUS),
  ...generateResRangeAttributies(_constants__WEBPACK_IMPORTED_MODULE_0__.ICON_SIZE),
  ...generateTypographyAttributes(Object.values(_constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__)),
  showLabel: {
    type: 'boolean',
    default: true
  },
  label: {
    type: 'string',
    default: 'Email'
  },
  labelColor: {
    type: 'string'
  },
  placeholder: {
    type: 'string',
    default: 'Enter your email'
  },
  placeholderColor: {
    type: 'string'
  },
  textColor: {
    type: 'string'
  },
  showIcon: {
    type: 'boolean',
    default: false
  },
  icon: {
    type: 'string',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"></path></svg>'
  },
  iconColor: {
    type: 'string'
  },
  isRequired: {
    type: 'boolean',
    default: true
  },
  requiredMsg: {
    type: 'string',
    default: 'This field is required'
  },
  emailValidationMsg: {
    type: 'string',
    default: 'Please enter a valid email address'
  },
  showRequiredSymbol: {
    type: 'boolean',
    default: true
  },
  requiredColor: {
    type: 'string'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/email/constants/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/email/constants/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOCK_PREFIX: () => (/* binding */ BLOCK_PREFIX),
/* harmony export */   FIELD_BG: () => (/* binding */ FIELD_BG),
/* harmony export */   FIELD_BORDER: () => (/* binding */ FIELD_BORDER),
/* harmony export */   FIELD_BRADIUS: () => (/* binding */ FIELD_BRADIUS),
/* harmony export */   FIELD_PADDING: () => (/* binding */ FIELD_PADDING),
/* harmony export */   ICON_SIZE: () => (/* binding */ ICON_SIZE),
/* harmony export */   LABEL_BG: () => (/* binding */ LABEL_BG),
/* harmony export */   LABEL_BORDER: () => (/* binding */ LABEL_BORDER),
/* harmony export */   LABEL_BRADIUS: () => (/* binding */ LABEL_BRADIUS),
/* harmony export */   LABEL_MARGIN: () => (/* binding */ LABEL_MARGIN),
/* harmony export */   LABEL_PADDING: () => (/* binding */ LABEL_PADDING)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Block Prefix
const BLOCK_PREFIX = 'slide';

// Label
const LABEL_MARGIN = 'labelMargin';
const LABEL_BG = 'labelBg';
const LABEL_PADDING = 'labelPadding';
const LABEL_BORDER = 'labelBorder';
const LABEL_BRADIUS = 'labelBorderRadius';

// Field
const FIELD_PADDING = 'fieldPadding';
const FIELD_BG = 'fieldBg';
const FIELD_BORDER = 'fieldBorder';
const FIELD_BRADIUS = 'fieldBorderRadius';

// Icon
const ICON_SIZE = 'iconSize';

/***/ }),

/***/ "./src/blocks/email/constants/typoPrefixConstant.js":
/*!**********************************************************!*\
  !*** ./src/blocks/email/constants/typoPrefixConstant.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIELD_TYPO: () => (/* binding */ FIELD_TYPO),
/* harmony export */   LABEL_TYPO: () => (/* binding */ LABEL_TYPO)
/* harmony export */ });
// Label Typography
const LABEL_TYPO = 'labelTypo';

// Field Typography
const FIELD_TYPO = 'fieldTypo';

/***/ }),

/***/ "./src/blocks/email/context.js":
/*!*************************************!*\
  !*** ./src/blocks/email/context.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Context = ['zolo/showFieldIcon', 'zolo/preset'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);

/***/ }),

/***/ "./src/blocks/email/edit.js":
/*!**********************************!*\
  !*** ./src/blocks/email/edit.js ***!
  \**********************************/
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/blocks/email/constants/index.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/blocks/email/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/blocks/email/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
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
  DisplayZoloIcon,
  classArrayToStr
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
    isSelected,
    context
  } = props;
  const {
    preview,
    preset,
    uniqueId,
    parentClasses,
    showLabel,
    label,
    placeholder,
    showIcon,
    icon,
    isRequired,
    showRequiredSymbol
  } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    handleUniqueId({
      BLOCK_PREFIX: _constants__WEBPACK_IMPORTED_MODULE_4__.BLOCK_PREFIX,
      uniqueId,
      setAttributes,
      clientId
    });
  }, []);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, `${uniqueId}`, classArrayToStr(parentClasses), `${showIcon ? 'zolo-field-icon' : ''}`, 'form-group-editor')
  });

  // preview image
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
      src: zoloParams.blocksPreview.mail,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email Preview', 'zoloblocks')
    });
  }

  /**
   * context
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      showIcon: context['zolo/showFieldIcon'],
      preset: context['zolo/preset']
    });
  }, [context]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
      props: props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "zolo-field-item",
        children: [showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "zolo-label-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
            tagName: "label",
            className: "zolo-label",
            value: label,
            onChange: v => setAttributes({
              label: v
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'zoloblocks')
          }), isRequired && showRequiredSymbol && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "zolo-required",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('*', 'zoloblocks')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "zolo-field-input-item",
          children: [showIcon && preset !== 'style-3' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "zolo-input-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DisplayZoloIcon, {
              icon: icon
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
            type: "email",
            name: "email",
            required: isRequired,
            placeholder: placeholder
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/email/inspector.js":
/*!***************************************!*\
  !*** ./src/blocks/email/inspector.js ***!
  \***************************************/
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
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/blocks/email/attributes.js");
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/email/constants/typoPrefixConstant.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/blocks/email/constants/index.js");
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
  TypographyDropdown,
  HeaderTabs,
  BorderControl,
  AdvancedOptions,
  ZoloIconPicker,
  ResDimensionsControl,
  NormalBGControl,
  ZoloPanelBody
} = window.zoloModule;




function Inspector(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    resMode,
    showLabel,
    label,
    labelColor,
    textColor,
    placeholder,
    placeholderColor,
    preset,
    showIcon,
    icon,
    iconColor,
    isRequired,
    requiredMsg,
    emailValidationMsg,
    showRequiredSymbol,
    requiredColor
  } = attributes;
  const requiredProps = {
    attributes,
    setAttributes,
    resMode,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(HeaderTabs, {
      block: "zolo/email",
      attributes: attributes,
      setAttributes: setAttributes,
      generalTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'zoloblocks'),
          firstOpen: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Label', 'zoloblocks'),
            checked: showLabel,
            onChange: () => setAttributes({
              showLabel: !showLabel
            })
          }), preset !== 'style-3' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Field Icon', 'zoloblocks'),
            checked: showIcon,
            onChange: () => setAttributes({
              showIcon: !showIcon
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Is It Required Field?', 'zoloblocks'),
            checked: isRequired,
            onChange: () => setAttributes({
              isRequired: !isRequired
            })
          }), isRequired && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Required Symbol', 'zoloblocks'),
            checked: showRequiredSymbol,
            onChange: () => setAttributes({
              showRequiredSymbol: !showRequiredSymbol
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'zoloblocks'),
          panelProps: props,
          children: [showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Field Label', 'zoloblocks'),
            value: label,
            onChange: v => setAttributes({
              label: v
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter label..', 'zoloblocks'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This will be used as the label for the field', 'zoloblocks')
          }), preset !== 'style-3' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Placeholder', 'zoloblocks'),
            value: placeholder,
            onChange: v => setAttributes({
              placeholder: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-flex-col-control",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email Validation Message', 'zoloblocks'),
              value: emailValidationMsg,
              onChange: v => setAttributes({
                emailValidationMsg: v
              }),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This message will be shown when the email is invalid', 'zoloblocks'),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter validation message..', 'zoloblocks')
            })
          }), isRequired && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "zolo-flex-col-control",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Required Message', 'zoloblocks'),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This message will be shown when the field is required', 'zoloblocks'),
              value: requiredMsg,
              onChange: v => setState({
                requiredMsg: v
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter required message..', 'zoloblocks')
            })
          }), showIcon && preset !== 'style-3' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ZoloIconPicker, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Icon', 'zoloblocks'),
            value: icon,
            onChange: value => {
              setAttributes({
                icon: value
              });
            }
          })]
        })]
      }),
      styleTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'zoloblocks'),
          firstOpen: true,
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label Color', 'zoloblocks'),
            color: labelColor,
            onChange: color => setAttributes({
              labelColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Required Color', 'zoloblocks'),
            color: requiredColor,
            onChange: color => setAttributes({
              requiredColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.LABEL_TYPO,
            requiredProps: requiredProps
          }), preset === 'style-3' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.LABEL_BORDER,
              requiredProps: requiredProps
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.LABEL_BRADIUS,
              requiredProps: requiredProps,
              forBorderRadius: true
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
              controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.LABEL_PADDING,
              requiredProps: requiredProps,
              forBorderRadius: false
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.LABEL_MARGIN,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), preset === 'style-3' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.LABEL_BG,
            noMainBGImg: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Field', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          firstOpen: showLabel ? false : true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'zoloblocks'),
            color: textColor,
            onChange: color => setAttributes({
              textColor: color
            })
          }), preset !== 'style-3' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Placeholder Color', 'zoloblocks'),
            color: placeholderColor,
            onChange: color => setAttributes({
              placeholderColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TypographyDropdown, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'zoloblocks'),
            typoPrefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_4__.FIELD_TYPO,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BorderControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FIELD_BORDER,
            requiredProps: requiredProps
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FIELD_BRADIUS,
            requiredProps: requiredProps,
            forBorderRadius: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResDimensionsControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FIELD_PADDING,
            requiredProps: requiredProps,
            forBorderRadius: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NormalBGControl, {
            requiredProps: requiredProps,
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.FIELD_BG,
            noMainBGImg: false
          })]
        }), showIcon && preset !== 'style-3' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ZoloPanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks'),
          stylePanel: true,
          panelProps: props,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zoloblocks'),
            color: iconColor,
            onChange: color => setAttributes({
              iconColor: color
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResRangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zoloblocks'),
            controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ICON_SIZE,
            requiredProps: requiredProps,
            min: 1,
            max: 100,
            step: 1
          })]
        })]
      }),
      advancedTab: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(AdvancedOptions, {
          attributes: attributes,
          setAttributes: setAttributes,
          requiredProps: requiredProps,
          block: "zolo/email"
        })
      })
    })
  }, "controls");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/email/save.js":
/*!**********************************!*\
  !*** ./src/blocks/email/save.js ***!
  \**********************************/
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  classArrayToStr,
  DisplayZoloIcon
} = window.zoloModule;
const Save = ({
  attributes
}) => {
  const {
    uniqueId,
    parentClasses,
    preset,
    zoloId,
    showLabel,
    label,
    placeholder,
    showIcon,
    icon,
    isRequired,
    requiredMsg,
    emailValidationMsg,
    showRequiredSymbol
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(uniqueId, classArrayToStr(parentClasses), `${showIcon ? 'zolo-field-icon' : ''}`, 'form-group')
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    ...blockProps,
    ...(zoloId && {
      id: zoloId
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "zolo-field-item",
      children: [showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "zolo-label-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          tagName: "label",
          className: "zolo-label",
          value: label
        }), isRequired && showRequiredSymbol && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "zolo-required",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('*', 'zoloblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "zolo-field-input-item",
        children: [showIcon && preset !== 'style-3' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "zolo-input-icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DisplayZoloIcon, {
            icon: icon
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          type: "email",
          name: "email",
          required: isRequired,
          placeholder: placeholder,
          ...(isRequired && {
            'data-pristine-required-message': requiredMsg
          }),
          "data-pristine-email-message": emailValidationMsg
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/email/style.js":
/*!***********************************!*\
  !*** ./src/blocks/email/style.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typoPrefixConstant */ "./src/blocks/email/constants/typoPrefixConstant.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/blocks/email/constants/index.js");
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
  generateDimensionStyle,
  generateBorderStyle,
  generateResAlignmentStyle,
  generateTypographyStyles,
  generateResRangeStyle,
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
    uniqueId,
    showLabel,
    labelColor,
    textColor,
    placeholderColor,
    iconColor,
    showRequiredSymbol,
    requiredColor
  } = attributes;

  // label
  const {
    desktopBorderStyle: labelBorderStyles,
    tabBorderStyle: labelBorderStylesTab,
    mobBorderStyle: labelBorderStylesMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.LABEL_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: labelBRDesktop,
    dimensionStylesTab: labelBRTab,
    dimensionStylesMobile: labelBRMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.LABEL_BRADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: labelPaddingDesk,
    dimensionStylesTab: labelPaddingTab,
    dimensionStylesMobile: labelPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.LABEL_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    backgroundStylesDesktop: labelBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.LABEL_BG,
    attributes,
    noMainBGImg: true
  });
  const {
    dimensionStylesDesktop: labelMarginDesk,
    dimensionStylesTab: labelMarginTab,
    dimensionStylesMobile: labelMarginMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.LABEL_MARGIN,
    styleFor: 'margin',
    attributes
  });
  const {
    typoStylesDesktop: labelTypoDesk,
    typoStylesTab: labelTypoTab,
    typoStylesMobile: labelTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__.LABEL_TYPO,
    defaultFontSize: '',
    attributes
  });

  // Field
  const {
    typoStylesDesktop: fieldTypoDesk,
    typoStylesTab: fieldTypoTab,
    typoStylesMobile: fieldTypoMob
  } = generateTypographyStyles({
    prefixConstant: _constants_typoPrefixConstant__WEBPACK_IMPORTED_MODULE_1__.FIELD_TYPO,
    defaultFontSize: '',
    attributes
  });
  const {
    desktopBorderStyle: fieldBorderStyles,
    tabBorderStyle: fieldBorderStylesTab,
    mobBorderStyle: fieldBorderStylesMob
  } = generateBorderStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FIELD_BORDER,
    attributes
  });
  const {
    dimensionStylesDesktop: fieldBRDesktop,
    dimensionStylesTab: fieldBRTab,
    dimensionStylesMobile: fieldBRMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FIELD_BRADIUS,
    styleFor: 'border-radius',
    attributes
  });
  const {
    dimensionStylesDesktop: fieldPaddingDesktop,
    dimensionStylesTab: fieldPaddingTab,
    dimensionStylesMobile: fieldPaddingMob
  } = generateDimensionStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FIELD_PADDING,
    styleFor: 'padding',
    attributes
  });
  const {
    backgroundStylesDesktop: fieldBGStyle,
    backgroundStylesTab: fieldTabBGStyle,
    backgroundStylesMobile: fieldMobBGStyle
  } = generateNormalBGControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.FIELD_BG,
    attributes,
    noMainBGImg: false
  });

  // Icon
  const {
    desktopRangeStyle: iconSize,
    tabRangeStyle: iconTabSize,
    mobRangeStyle: iconMobSize
  } = generateResRangeStyle({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__.ICON_SIZE,
    property: 'font-size',
    attributes
  });

  /**
   * All Style Combination
   */
  const desktopAllStyle = `
        ${showLabel ? `
            .${uniqueId}.wp-block-zolo-email .zolo-label-wrapper {
                ${labelMarginDesk}
            }
            .${uniqueId}.wp-block-zolo-email .zolo-label {
                ${labelTypoDesk}
                color: ${labelColor};
            }
            .wp-block-zolo-form.style-3 .${uniqueId}.wp-block-zolo-email .zolo-label{
                ${labelPaddingDesk}
                ${labelBGStyle}
                ${labelBorderStyles}
                ${labelBRDesktop}
            }
            ${showRequiredSymbol ? `
                .${uniqueId}.wp-block-zolo-email .zolo-required {
                    color: ${requiredColor};
                }
            ` : ''}
        ` : ''}
        .${uniqueId}.wp-block-zolo-email .zolo-field-input-item input {
            ${textColor ? `color: ${textColor};` : ''}
            ${fieldTypoDesk}
            ${fieldBorderStyles}
            ${fieldBRDesktop}
            ${fieldPaddingDesktop}
            ${fieldBGStyle}
        }
        .${uniqueId}.wp-block-zolo-email .zolo-field-input-item input::placeholder {
            ${placeholderColor ? `color: ${placeholderColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-email .zolo-field-input-item .zolo-input-icon svg {
            ${iconSize}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }
    `;
  const tabletAllStyle = `
        ${showLabel ? `
            .${uniqueId}.wp-block-zolo-email .zolo-label-wrapper {
                ${labelMarginTab}
            }
            .${uniqueId}.wp-block-zolo-email .zolo-label {
                ${labelTypoTab}
            }
            .wp-block-zolo-form.style-3 .${uniqueId}.wp-block-zolo-email .zolo-label {
                ${labelPaddingTab}
                ${labelBorderStylesTab}
                ${labelBRTab}
            }
        ` : ''}

        .${uniqueId}.wp-block-zolo-email .zolo-field-input-item input {
            ${fieldTypoTab}
            ${fieldBorderStylesTab}
            ${fieldBRTab}
            ${fieldPaddingTab}
            ${fieldTabBGStyle}
        }

        .${uniqueId}.wp-block-zolo-email .zolo-field-input-item .zolo-input-icon svg {
            ${iconTabSize}
        }
    `;
  const mobileAllStyle = `
        ${showLabel ? `
            .${uniqueId}.wp-block-zolo-email .zolo-label-wrapper {
                ${labelMarginMob}
            }
            .${uniqueId}.wp-block-zolo-email .zolo-label {
                ${labelTypoMob}
            }
            .wp-block-zolo-form.style-3 .${uniqueId}.wp-block-zolo-email .zolo-label {
                ${labelPaddingMob}
                ${labelBorderStylesMob}
                ${labelBRMob}
            }
        ` : ''}
        
        .${uniqueId}.wp-block-zolo-email .zolo-field-input-item input {
            ${fieldTypoMob}
            ${fieldBorderStylesMob}
            ${fieldBRMob}
            ${fieldPaddingMob}
            ${fieldMobBGStyle}
        }

        .${uniqueId}.wp-block-zolo-email .zolo-field-input-item .zolo-input-icon svg {
            ${iconMobSize}
        }
    `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GlobalStyleHanlder, {
      attributes: attributes,
      setAttributes: setAttributes,
      desktopAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.email.desktopAllStyle', desktopAllStyle, props),
      tabAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.email.tabletAllStyle', tabletAllStyle, props),
      mobileAllStyle: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('zolo.email.mobileAllStyle', mobileAllStyle, props)
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

/***/ "./src/blocks/email/block.json":
/*!*************************************!*\
  !*** ./src/blocks/email/block.json ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Email","name":"zolo/email","category":"zoloblocks","keywords":["zolo","email","mail","contact","newsletter"],"description":"Email input field for newsletter sign-ups or contacts.","apiVersion":3,"textdomain":"zoloblocks","parent":["zolo/form"],"example":{"attributes":{"preview":true},"viewportWidth":410},"usesContext":["zolo/showFieldIcon"],"supports":{"anchor":false,"customClassName":false,"align":["wide","full"]},"editorScript":"file:./index.js"}');

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
/*!***********************************!*\
  !*** ./src/blocks/email/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/email/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/email/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/email/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/email/save.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./src/blocks/email/context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  icon: {
    src: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
      width: 24,
      height: 24,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.038 6.025a.957.957 0 0 1 .672-.275h14.58c.311 0 .588.148.763.378l-6.68 5.681a2.104 2.104 0 0 1-2.75-.024l-.001-.001-6.584-5.76zM3.75 7.766v9.124c0 .53.43.96.96.96h14.58c.53 0 .96-.43.96-.96V7.93l-5.904 5.02a3.604 3.604 0 0 1-4.708-.034l-.002-.002L3.75 7.767zm.96-3.516a2.46 2.46 0 0 0-2.46 2.46v10.18a2.46 2.46 0 0 0 2.46 2.46h14.58a2.46 2.46 0 0 0 2.46-2.46V6.71a2.46 2.46 0 0 0-2.46-2.46H4.71z",
        fill: "#2667FF"
      })
    })
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
  usesContext: _context__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map