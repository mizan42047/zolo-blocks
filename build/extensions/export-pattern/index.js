/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/extensions/page-export/index.js":
/*!*********************************************!*\
  !*** ./src/extensions/page-export/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerPlugin
} = wp.plugins;
const {
  PluginSidebarMoreMenuItem
} = wp.editPost;
const {
  withSelect,
  select
} = wp.data;
const {
  Button
} = wp.components;
const {
  Fragment
} = wp.element;
const {
  __
} = wp.i18n;
const handleCurrentPostExport = () => {
  // current block content code view
  const blockContent = select('core/editor').getEditedPostContent();
  const patternName = select('core/editor').getEditedPostAttribute('title');
  const blob = new Blob([JSON.stringify({
    __file: 'wp_block',
    content: blockContent,
    zoloVersion: zoloParams?.zolo_version || '1.0.0',
    title: patternName,
    syncStatus: 'unsynced'
  }, null, 2)], {
    type: 'application/json'
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${patternName === '' ? 'block' : patternName.replace(/\s/g, '-').toLowerCase()}.json`;
  a.click();
  URL.revokeObjectURL(url);

  // show notice
  const {
    createSuccessNotice
  } = wp.data.dispatch('core/notices');
  createSuccessNotice(__('Great! The pattern is exported successfully.', 'zoloblocks'), {
    type: 'default'
  });
};
registerPlugin('custom-export-button', {
  render: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginSidebarMoreMenuItem, {
      target: "custom-export-button",
      icon: "admin-post",
      onClick: () => {
        handleCurrentPostExport();
      },
      children: __('Export as Pattern', 'zoloblocks')
    })
  })
});

/***/ }),

/***/ "./src/extensions/export-pattern/export.scss":
/*!***************************************************!*\
  !*** ./src/extensions/export-pattern/export.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["plugins"];

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
/*!************************************************!*\
  !*** ./src/extensions/export-pattern/index.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _page_export__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../page-export */ "./src/extensions/page-export/index.js");
/* harmony import */ var _export_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./export.scss */ "./src/extensions/export-pattern/export.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);







// page export


// import style


const ZoloExportBlock = ({
  clientId
}) => {
  const [exportPanel, setExportPanel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const [patternName, setPatternName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const [syncPattern, setSyncPattern] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__.PluginBlockSettingsMenuItem, {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M20.76 4.97L19.6 6.13C19.77 6.32 19.98 6.63 19.98 6.91C19.98 7.24 19.85 7.52 19.63 7.74C19.42 7.95 19.15 8.06 18.84 8.06H16.31L21.45 3H19.07L14.77 7.28V10.04H16.41L18.83 10.03C19.68 10.03 20.39 9.77 20.97 9.24C21.54 8.72 21.83 7.86 21.83 7.04C21.83 6.18 21.4 5.45 20.75 4.96L20.76 4.97ZM7.31995 7.75011C7.17994 7.87011 6.99994 7.93011 6.82994 7.93011C6.61994 7.93011 6.40995 7.84011 6.25994 7.67011C5.97995 7.36011 6.01994 6.88011 6.32994 6.61011L9.84995 3.55011C9.86494 3.54011 9.87995 3.53261 9.89495 3.52511C9.90995 3.51761 9.92495 3.51011 9.93995 3.50011C9.95065 3.49208 9.95993 3.48476 9.96854 3.47797L9.96854 3.47797L9.96856 3.47795C9.9921 3.45939 10.0107 3.44475 10.0399 3.43011C10.0453 3.42743 10.0499 3.42475 10.0543 3.42226C10.066 3.41547 10.0753 3.41011 10.0899 3.41011C10.1299 3.39011 10.1699 3.38011 10.2099 3.38011C10.2499 3.37011 10.2899 3.36011 10.3299 3.36011H10.3499H10.3699C10.3899 3.36011 10.4099 3.36511 10.4299 3.37011C10.4499 3.37511 10.4699 3.38011 10.4899 3.38011C10.5033 3.38344 10.5166 3.38566 10.5299 3.38789C10.5566 3.39233 10.5833 3.39677 10.6099 3.41011C10.6153 3.41279 10.6199 3.41547 10.6243 3.41795C10.636 3.42475 10.6453 3.43011 10.6599 3.43011C10.6856 3.44293 10.7071 3.45986 10.7272 3.47563C10.7384 3.48446 10.7492 3.49293 10.7599 3.50011C10.7899 3.52011 10.8499 3.55011 10.8499 3.55011L12.8099 5.26011V7.25011L11.0999 5.76011V13.9801C11.0999 14.3901 10.7599 14.7301 10.3499 14.7301C9.93995 14.7301 9.59995 14.3901 9.59995 13.9801V5.77011L7.31995 7.75011ZM16.8 20.0999C17.03 20.0999 17.21 19.9099 17.21 19.6899V12.0099H18.71V19.6899C18.71 20.7399 17.85 21.5999 16.8 21.5999H3.91C2.86 21.5999 2 20.7399 2 19.6899V11.5499C2 10.4999 2.86 9.63989 3.91 9.63989H6.84C7.25 9.63989 7.59 9.97989 7.59 10.3899C7.59 10.7999 7.25 11.1399 6.84 11.1399H3.91C3.68 11.1399 3.5 11.3299 3.5 11.5499V19.6899C3.5 19.9199 3.69 20.0999 3.91 20.0999H16.8ZM14.78 5.93V3H17.72L14.78 5.93Z",
          fill: "#2667FF"
        })
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Export Pattern', 'zoloblocks'),
      onClick: () => setExportPanel(true)
    }), exportPanel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
      className: "zolo-export-block-modal",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Export Pattern', 'zoloblocks'),
      onRequestClose: () => setExportPanel(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "zolo-export-block-modal__content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Pattern Name', 'zoloblocks'),
          onChange: v => setPatternName(v),
          value: patternName,
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('My Pattern', 'zoloblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Sync this pattern across multiple locations.', 'zoloblocks'),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Sync Pattern', 'zoloblocks'),
          checked: syncPattern,
          onChange: () => setSyncPattern(!syncPattern)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
          className: "zolo-export-pattern-btn",
          onClick: () => {
            // check if clientId is not undefined
            if (!clientId || clientId === undefined || clientId === null || clientId === '') {
              alert('Please save and refresh the page before exporting the block.');
              return;
            } else {
              const block = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)('core/block-editor').getBlock(clientId);
              const blockContent = wp.blocks.serialize([block]);

              // export block content as json file
              const blob = new Blob([JSON.stringify({
                __file: 'wp_block',
                content: blockContent,
                zoloVersion: zoloParams?.zolo_version || '1.0.0',
                title: patternName,
                syncStatus: syncPattern ? '' : 'unsynced'
              }, null, 2)], {
                type: 'application/json'
              });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${patternName === '' ? block.name : patternName.replace(/\s/g, '-').toLowerCase()}.json`;
              a.click();
              URL.revokeObjectURL(url);

              // show notice
              const {
                createSuccessNotice
              } = wp.data.dispatch('core/notices');
              createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Great! The pattern is exported successfully.', 'zoloblocks'), {
                type: 'default'
              });
            }

            // close the modal
            setExportPanel(false);
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Export Pattern', 'zoloblocks')
        })]
      })
    })]
  });
};
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('zolo-export-block', {
  render: () => {
    const selectedBlockClientId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)('core/block-editor').getSelectedBlockClientId();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ZoloExportBlock, {
      clientId: selectedBlockClientId
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map