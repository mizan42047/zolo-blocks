/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/table-of-content/helper.js":
/*!***********************************************!*\
  !*** ./src/blocks/table-of-content/helper.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHierarchy: () => (/* binding */ createHierarchy),
/* harmony export */   formatHeaders: () => (/* binding */ formatHeaders),
/* harmony export */   isCoreHeading: () => (/* binding */ isCoreHeading),
/* harmony export */   isEbHeading: () => (/* binding */ isEbHeading),
/* harmony export */   isGutenKitHeading: () => (/* binding */ isGutenKitHeading),
/* harmony export */   isGutenverseHeading: () => (/* binding */ isGutenverseHeading),
/* harmony export */   isKadenceHeading: () => (/* binding */ isKadenceHeading),
/* harmony export */   isOtterHeading: () => (/* binding */ isOtterHeading),
/* harmony export */   isQubelyHeading: () => (/* binding */ isQubelyHeading),
/* harmony export */   isStackableHeader: () => (/* binding */ isStackableHeader),
/* harmony export */   isStackableHeading: () => (/* binding */ isStackableHeading),
/* harmony export */   isZoloBlocksAHeading: () => (/* binding */ isZoloBlocksAHeading),
/* harmony export */   parseList: () => (/* binding */ parseList),
/* harmony export */   parseTocSlug: () => (/* binding */ parseTocSlug),
/* harmony export */   supportedHeaders: () => (/* binding */ supportedHeaders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const supportedHeaders = ["core/heading", "zolo/advanced-heading", "essential-blocks/heading", "gutenverse/advanced-heading", "gutenkit/heading", "kadence/advancedheading", "qubely/heading", "ugb/header", "ugb/heading", "themeisle-blocks/advanced-heading"];
function isZoloBlocksAHeading(block) {
  return block.name === "zolo/advanced-heading";
}
function isCoreHeading(block) {
  return block.name === "core/heading";
}
function isEbHeading(block) {
  return block.name === "essential-blocks/heading";
}
function isGutenverseHeading(block) {
  return block.name === "gutenverse/advanced-heading";
}
function isGutenKitHeading(block) {
  return block.name === "gutenkit/heading";
}
function isKadenceHeading(block) {
  return block.name === "kadence/advancedheading";
}
function isQubelyHeading(block) {
  return block.name === "qubely/heading";
}
function isStackableHeader(block) {
  return block.name === "ugb/header";
}
function isStackableHeading(block) {
  return block.name === "ugb/heading";
}
function isOtterHeading(block) {
  return block.name === "themeisle-blocks/advanced-heading";
}
const createHierarchy = (formattedHeaders, currentHeader) => {
  const lastIndex = formattedHeaders.length - 1;
  if (formattedHeaders.length === 0 || formattedHeaders[0].level === currentHeader.level) {
    formattedHeaders.push({
      ...currentHeader
    });
  } else if (formattedHeaders[lastIndex].level < currentHeader.level) {
    if (!formattedHeaders[lastIndex].children) {
      formattedHeaders[lastIndex].children = [{
        ...currentHeader
      }];
    } else {
      createHierarchy(formattedHeaders[lastIndex].children, currentHeader);
    }
  }
};
const formatHeaders = (allHeaders, allowedHeading) => {
  const formattedHeaders = [];
  allHeaders.filter(header => allowedHeading[`h${header.level}`]).forEach(header => createHierarchy(formattedHeaders, header));
  return formattedHeaders;
};
const parseList = (list, ListTag = 'ul') => list.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
    href: `#${item.anchor}`,
    children: item.content.replace(/(<.+?>)/g, '')
  }), item.children && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListTag, {
    className: "child-list",
    children: parseList(item.children, ListTag)
  })]
}, item.anchor));
function parseTocSlug(slug) {
  if (!slug) return slug;
  return slug.toString().toLowerCase().replace(/(<.+?>)/g, '').replace(/&(amp;|mdash;)/g, "").replace(/[\u2013\u2014]/g, "").replace(/&nbsp;/gi, "-").replace(/\s+/g, "-").replace(/[&\/\\#,^!+()$~%.'":*?<>{}@‘’”“]/g, "").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "");
}

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/*!*************************************************!*\
  !*** ./src/blocks/table-of-content/frontend.js ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_table_of_content_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/blocks/table-of-content/helper */ "./src/blocks/table-of-content/helper.js");

window.addEventListener("DOMContentLoaded", function () {
  const tableOfContent = {
    init() {
      this.addLinkInContent();
      this.toggleCollapse();
      this.scrollToTargetElement();
      this.stickyContentShow();
      this.stickyContentHide();
    },
    addLinkInContent() {
      const tocWrapper = document.querySelector(".wp-block-zolo-table-of-content");
      if (!tocWrapper) return null;
      const headers = JSON.parse(tocWrapper.getAttribute("data-headers") || "[]");
      const visibleHeaders = JSON.parse(tocWrapper.getAttribute("data-tags") || "{}");
      const allowedHTags = Object.entries(visibleHeaders).filter(([, isVisible]) => isVisible).map(([tag]) => tag).join(",") || "h1, h2, h3, h4, h5, h6";
      const allHeaders = document.querySelectorAll(allowedHTags);
      if (headers.length === 0 || allHeaders.length === 0) return;
      headers.forEach(({
        content: elementText
      }) => {
        const elementSlug = (0,_blocks_table_of_content_helper__WEBPACK_IMPORTED_MODULE_0__.parseTocSlug)(elementText);
        allHeaders.forEach(header => {
          const headerSlug = (0,_blocks_table_of_content_helper__WEBPACK_IMPORTED_MODULE_0__.parseTocSlug)(header.textContent);
          if (elementSlug === headerSlug) {
            header.innerHTML = `<span id="${headerSlug}" class="zolo-toc-anchor"></span>${header.innerHTML}`;
          }
        });
      });
    },
    toggleCollapse() {
      const tocWrapper = document.querySelector(".wp-block-zolo-table-of-content");
      if (!tocWrapper) return;
      const tocToggleBtn = tocWrapper.querySelector(".zolo-toc-toggle-btn");
      if (!tocToggleBtn) return;
      const isInitiallyCollapsed = tocWrapper.getAttribute("data-collapsed") === "false";
      tocWrapper.classList.toggle("collapsed", isInitiallyCollapsed);
      tocToggleBtn.addEventListener("click", () => {
        const isCollapsed = tocWrapper.classList.contains("collapsed");
        tocWrapper.classList.toggle("collapsed", !isCollapsed);
        tocWrapper.setAttribute("data-collapsed", !isCollapsed);
      });
    },
    scrollToTargetElement() {
      const tocLinks = document.querySelectorAll(".wp-block-zolo-table-of-content a");
      tocLinks.forEach(link => {
        link.addEventListener('click', function (event) {
          const hash = this.hash;
          if (hash !== "") {
            event.preventDefault();

            // Remove active class from all links
            tocLinks.forEach(link => link.closest('li').classList.remove('active'));

            // Add active class to the clicked link's parent <li>
            this.closest('li').classList.add('active');
            const targetElement = document.querySelector(hash);
            if (targetElement) {
              const offset = 150; // Adjust for fixed header or spacing
              const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
              const offsetPosition = elementPosition - offset;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });

              // Add and remove the 'active' class for the target element
              targetElement.classList.add('active');
              setTimeout(() => {
                targetElement.classList.remove('active');
              }, 800);
            }
          }
        });
      });
    },
    stickyContentHide() {
      document.querySelectorAll(".zolo-toc-close").forEach(crossButton => {
        crossButton.addEventListener("click", () => {
          const container = crossButton.closest(".wp-block-zolo-table-of-content");
          if (container) {
            container.classList.add("content-hidden");
            container.classList.remove("content-visible");
          }
        });
      });
    },
    stickyContentShow() {
      document.querySelectorAll(".zolo-toc-open").forEach(headerButton => {
        headerButton.addEventListener("click", () => {
          const container = headerButton.closest(".wp-block-zolo-table-of-content");
          if (container) {
            container.classList.remove("content-hidden");
            container.classList.add("content-visible");
          }
        });
      });
    }
  };
  tableOfContent.init();
});
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map