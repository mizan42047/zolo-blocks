/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/extensions/background-video/attributes.js":
/*!*******************************************************!*\
  !*** ./src/extensions/background-video/attributes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);

const attributes = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'zolo/extension/backgroundVideo', settings => {
  if (settings.category && settings.category == 'zoloblocks' && (settings.name === 'zolo/container' || settings.name === 'zolo/slide')) {
    // Add new attribute
    settings.attributes = {
      ...settings.attributes,
      backgroundVideo: {
        type: 'object'
        // default: {
        //     url: '',
        //     loop: true,
        //     muted: true,
        //     playsInline: true,
        //     preload: 'auto',
        //     autoPlay: true,
        //     position: 'absolute',
        //     top: '50%',
        //     left: '50%',
        //     transform: 'translate(-50%, -50%)',
        //     width: '100%',
        //     height: '100%',
        //     overflow: 'hidden',
        // }
      }
    };
  }
  return settings;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/extensions/background-video/inspector.js":
/*!******************************************************!*\
  !*** ./src/extensions/background-video/inspector.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  ImageAvatar
} = window.zoloModule;
const Inspector = ({
  panelProps
}) => {
  const {
    attributes,
    setAttributes
  } = panelProps;
  const {
    backgroundVideo = {}
  } = attributes;
  const {
    id = '',
    url = '',
    falbackImageID = '',
    falbackImageURL = ''
  } = backgroundVideo;

  // Handle video selection
  const handleVideoSelect = media => {
    if (media && media.url && media.id) {
      setAttributes({
        backgroundVideo: {
          ...backgroundVideo,
          id: media.id,
          url: media.url
        }
      });
    }
  };

  // Handle video URL change
  const handleImageSelect = media => {
    if (media && media.url && media.id) {
      setAttributes({
        backgroundVideo: {
          ...backgroundVideo,
          falbackImageURL: media.url,
          falbackImageID: media.id
        }
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Video', 'zoloblocks'),
      className: "zolo-flex-col-control",
      children: id ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ImageAvatar, {
        imageUrl: backgroundVideo && backgroundVideo.url,
        onDeleteImage: () => setAttributes({
          backgroundVideo: {
            ...backgroundVideo,
            id: '',
            url: ''
          }
        }),
        allowedTypes: ['video'],
        imageId: backgroundVideo && backgroundVideo.id,
        onEditImage: media => {
          setAttributes({
            backgroundVideo: {
              ...backgroundVideo,
              id: media.id,
              url: media.url
            }
          });
        }
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
        onSelect: handleVideoSelect,
        allowedTypes: ['video'],
        value: id,
        render: ({
          open
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "zolo-image-upload-btn",
          onClick: open,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
            width: "24",
            height: "24",
            xmlns: "http://www.w3.org/2000/svg",
            fillRule: "evenodd",
            clipRule: "evenodd",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
              d: "M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"
            })
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' Upload Video', 'zoloblocks')]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Poster (optional)', 'zoloblocks'),
      className: "zolo-flex-col-control",
      children: falbackImageURL ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ImageAvatar, {
        imageUrl: falbackImageURL,
        imageId: falbackImageID,
        onDeleteImage: () => setAttributes({
          backgroundVideo: {
            ...backgroundVideo,
            falbackImageURL: '',
            falbackImageID: ''
          }
        }),
        onEditImage: ({
          id,
          url
        }) => {
          setAttributes({
            backgroundVideo: {
              ...backgroundVideo,
              falbackImageURL: url,
              falbackImageID: id
            }
          });
        }
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
        onSelect: handleImageSelect,
        allowedTypes: ['image'],
        value: falbackImageID,
        render: ({
          open
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "zolo-image-upload-btn",
          onClick: open,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
            width: "24",
            height: "24",
            xmlns: "http://www.w3.org/2000/svg",
            fillRule: "evenodd",
            clipRule: "evenodd",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
              d: "M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"
            })
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' Upload Image', 'zoloblocks')]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/extensions/background-video/render.js":
/*!***************************************************!*\
  !*** ./src/extensions/background-video/render.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Render)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress dependencies
 */

function Render({
  panelProps
}) {
  const {
    attributes
  } = panelProps;
  const {
    backgroundVideo,
    uniqueId
  } = attributes;
  // Only display if background type is video

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: `zolo-bgv-container zolo-bgv-${uniqueId}`,
      style: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("video", {
        className: "zolo-bgv-hosted zolo-html5-video",
        loop: true,
        muted: true,
        playsInline: true,
        preload: "none",
        autoPlay: true // This is the only attribute that is not in the attributes object
        ,
        poster: backgroundVideo?.falbackImageURL || '',
        src: backgroundVideo?.url || ''
      })
    })
  });
}

/***/ }),

/***/ "./src/extensions/background-video/style.js":
/*!**************************************************!*\
  !*** ./src/extensions/background-video/style.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/**
 * Internal depencencies
 */
const {
  generateResRangeStyle,
  generateBackgroundControlStyles
} = window.zoloModule;
const Style = props => {
  const {
    attributes
  } = props;
  const {
    backgroundVideo,
    uniqueId
  } = attributes;

  // settings

  // const {
  //     // main background
  //     backgroundStylesDesktop: bgDeskStyle,
  // } = generateBackgroundControlStyles({
  //     attributes,
  //     controlName: globalConfig?.background?.prefix || 'mainBg',
  // });
  const StyleBackgroundVideo = `
  .parent-${uniqueId}.zolo-block {
    ${backgroundVideo?.falbackImageURL ? `background-image: url(${backgroundVideo.falbackImageURL});` : ''};
    background-size: cover;
  }
`;
  const shapeDividerTablet = `

    `;
  const shapeDividerMobile = `

    `;
  return {
    StyleBackgroundVideo,
    shapeDividerTablet,
    shapeDividerMobile
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************************************!*\
  !*** ./src/extensions/background-video/index.js ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/extensions/background-video/attributes.js");
/* harmony import */ var _inspector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector.js */ "./src/extensions/background-video/inspector.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/extensions/background-video/render.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.js */ "./src/extensions/background-video/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


// alert('background-video');




(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('zolo.extensions.controls.backgroundVideo', 'zolo/background-video', (panels, panelProps) => {
  if (panelProps.attributes && (panelProps.attributes?.advBtnBgbackgroundType === 'video' || panelProps.attributes?.mainBgbackgroundType === 'video')) {
    panels.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inspector_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      panelProps: panelProps
    }, `controls-background-video-${panelProps.attributes.uniqueId}`));
  }
  return panels;
});
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('zolo.blocks.render.hook.before', 'zolo/background-video', (panels, panelProps) => {
  if (panelProps.attributes.backgroundVideo && (panelProps.attributes?.advBtnBgbackgroundType === 'video' || panelProps.attributes?.mainBgbackgroundType === 'video')) {
    panels.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_render__WEBPACK_IMPORTED_MODULE_3__["default"], {
      panelProps: panelProps
    }, `render-background-video-${panelProps.attributes.uniqueId}`));
  }
  return panels;
});

// addFilter('zolo.slide.desktopAllStyle', 'zolo/background-video', (desktopAllStyle, props) => {
//     if (props.attributes.backgroundVideo) {
//         const { StyleBackgroundVideo } = Style(props);
//         return desktopAllStyle + StyleBackgroundVideo;
//     }
//     return desktopAllStyle;
// });
})();

/******/ })()
;
//# sourceMappingURL=index.js.map