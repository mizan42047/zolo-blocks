/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/post-grid/constants/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/post-grid/constants/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!******************************************!*\
  !*** ./src/blocks/post-grid/frontend.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/index */ "./src/blocks/post-grid/constants/index.js");

document.addEventListener('DOMContentLoaded', () => {
  const postFilterContentCache = new Map();
  const pageContentCache = new Map();

  // Post Filter
  function initPostFilterTab() {
    let paginationType = null;
    const handleFilterClick = async event => {
      event.preventDefault();
      const anchor = event.currentTarget;
      const termId = anchor.dataset.id;
      const blockWrapper = anchor.closest('.wp-block-zolo-post-grid');
      const settings = blockWrapper ? blockWrapper.dataset.attributes : null;
      const paginationWrap = blockWrapper.querySelector('.zolo-pagination-wrap');
      paginationType = paginationWrap ? paginationWrap.dataset.paginationtype : '';
      updateActiveTab(anchor);
      await fetchTabContent(blockWrapper, termId, settings);
    };
    const updateActiveTab = anchor => {
      document.querySelectorAll('.wp-block-zolo-post-grid .zolo-post-filter-taxonomy a').forEach(a => a.classList.remove('current'));
      anchor.classList.add('current');
    };
    const fetchTabContent = async (blockWrapper, termId, settings) => {
      const preloader = (0,_constants_index__WEBPACK_IMPORTED_MODULE_0__.createPreloader)();
      const postContentWrap = blockWrapper.querySelector('.zolo-post-content-wrap');
      const postGridWrap = blockWrapper.querySelector('.zolo-post-grid-wrap');

      //caching
      if (postFilterContentCache.has(termId)) {
        if (paginationType === 'normal') {
          if (postGridWrap) {
            postGridWrap.innerHTML = '';
            postGridWrap.insertAdjacentHTML('beforeend', postFilterContentCache.get(termId));
          }
        } else {
          blockWrapper.innerHTML = '';
          blockWrapper.insertAdjacentHTML('beforeend', postFilterContentCache.get(termId));
        }
        initPostFilterTab();
        initPagination();
        return;
      }

      //preloader
      if (postContentWrap) {
        postContentWrap.appendChild(preloader);
      }
      try {
        const formData = new FormData();
        formData.append('action', 'zolo_ajax_post_pagination');
        formData.append('postTermId', termId);
        formData.append('settings', settings);
        formData.append('zolo_nonce', zoloSettings.zolo_nonce);
        const response = await fetch(zoloSettings.ajaxurl, {
          method: 'POST',
          body: formData
        });
        const result = await response.json();
        if (result.success) {
          if (paginationType && 'normal' === paginationType) {
            postGridWrap.innerHTML = '';
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = result.data;
            const postContent = tempDiv.querySelector('.zolo-post-grid-wrap');
            if (postContent) {
              postGridWrap.insertAdjacentHTML('beforeend', postContent.innerHTML);
              postFilterContentCache.set(termId, postContent.innerHTML);
            }
          } else {
            blockWrapper.innerHTML = '';
            blockWrapper.insertAdjacentHTML('beforeend', result.data);
            postFilterContentCache.set(termId, result.data);
          }
          initPostFilterTab();
          initPagination();
        } else {
          console.error('Failed to fetch content:', result);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        if (postContentWrap) {
          postContentWrap.removeChild(preloader);
        }
      }
    };
    document.querySelectorAll('.wp-block-zolo-post-grid .zolo-post-filter-taxonomy a').forEach(anchor => {
      anchor.addEventListener('click', handleFilterClick);
    });
  }

  // Pagination
  function initPagination() {
    // Declare globally
    const PAGINATION_WRAP_CLASS = 'zolo-pagination-wrap';
    let paginationType = null;
    let blockName = null;
    let isLoading = false;
    const fetchContent = async (wrapper, pageNumber, settings, useCache = false) => {
      //caching
      if (useCache && pageContentCache.has(pageNumber)) {
        const cachedContent = pageContentCache.get(pageNumber);
        wrapper.innerHTML = '';
        wrapper.insertAdjacentHTML('beforeend', cachedContent);
        initPostFilterTab();
        reinitPaginationListeners();
        return;
      }
      const preloader = (0,_constants_index__WEBPACK_IMPORTED_MODULE_0__.createPreloader)();
      const itemWrapper = wrapper.querySelector('.zolo-post-content-wrap');
      const paginationWrap = wrapper.querySelector(`.${PAGINATION_WRAP_CLASS}`);
      const termIdSelector = wrapper.querySelector('.zolo-post-filter-taxonomy .current');
      const termId = termIdSelector ? termIdSelector.dataset.id : '';
      if (itemWrapper) {
        itemWrapper.appendChild(preloader);
      }
      try {
        const formData = new FormData();
        formData.append('action', 'zolo_ajax_post_pagination');
        formData.append('pageNumber', pageNumber);
        formData.append('settings', settings);
        formData.append('zolo_nonce', zoloSettings.zolo_nonce);
        formData.append('postTermId', termId);
        const response = await fetch(zoloSettings.ajaxurl, {
          method: 'POST',
          body: formData
        });
        const result = await response.json();
        if (result.success) {
          if (useCache) {
            pageContentCache.set(pageNumber, result.data); // Cache the content
          }
          if (paginationType === 'number') {
            wrapper.innerHTML = '';
            wrapper.insertAdjacentHTML('beforeend', result.data);
            initPostFilterTab();
            reinitPaginationListeners();
          }
          if (paginationType === 'button' || paginationType === 'scroll') {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = result.data;
            const postItems = tempDiv.querySelectorAll('.zolo-post-item');
            if (postItems.length > 0) {
              postItems.forEach(postItem => {
                itemWrapper.appendChild(postItem);
              });
            } else {
              paginationWrap.innerHTML = "";
            }
          }
        } else {
          console.error('Failed to fetch content:', result);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        if (itemWrapper) {
          itemWrapper.removeChild(preloader); // Remove the preloader
        }
        isLoading = false;
      }
    };
    const getPageLink = href => href.includes('admin-ajax.php') ? href.match(/admin-ajax.*/)?.[0] || '' : href.match(/\/page\/\d+\//)?.[0] || '';
    const getPageNumber = link => {
      const match = link.match(/\d+/);
      return match ? parseInt(match[0], 10) : 1;
    };
    const reinitPaginationListeners = () => {
      const updatedPaginationElements = document.querySelectorAll(`.${PAGINATION_WRAP_CLASS}`);
      updatedPaginationElements.forEach(initPaginationListeners);
    };

    //only form ajax number pagination
    const handlePaginationClick = async event => {
      event.preventDefault();

      // Prevent multiple requests when already loading
      if (isLoading) return;
      isLoading = true;
      const href = event.target.getAttribute('href');
      if (!href) return;
      const pageLink = getPageLink(href);
      const pageNumber = getPageNumber(pageLink);
      blockName = event.target.closest(`.${PAGINATION_WRAP_CLASS}`).dataset.blockname;
      paginationType = event.target.closest(`.${PAGINATION_WRAP_CLASS}`).dataset.paginationtype;
      const blockWrapper = event.target.closest(`.wp-block-zolo-${blockName}`);
      if (blockWrapper) {
        const blockSettings = blockWrapper.dataset.attributes;
        await fetchContent(blockWrapper, pageNumber, blockSettings, true);
        isLoading = false;
      }
    };
    const addClickListeners = (elements, handler) => {
      elements.forEach(element => element.addEventListener('click', handler));
    };

    //only for ajax load more on click pagination
    const handleButtonPagination = paginationElement => {
      const button = paginationElement.querySelector('.zolo-pagination-button');
      if (button) {
        let pageNumber = parseInt(button.dataset.pagenumber, 10) || 1;
        button.addEventListener('click', async event => {
          event.preventDefault();

          // Prevent multiple requests when already loading
          if (isLoading) return;

          // Set loading state
          isLoading = true;
          button.classList.add('loading');
          pageNumber += 1;
          paginationType = paginationElement.dataset.paginationtype;
          blockName = paginationElement.dataset.blockname;
          const blockWrapper = event.target.closest(`.wp-block-zolo-${blockName}`);
          if (blockWrapper) {
            const blockSettings = blockWrapper.dataset.attributes;
            await fetchContent(blockWrapper, pageNumber, blockSettings);
            // Remove loading state after fetching content
            isLoading = false;
            button.classList.remove('loading');
          }
        });
      }
    };
    //only for ajax scroll pagination
    const handleScrollPagination = paginationElement => {
      let pageNumber = parseInt(paginationElement.dataset.pagenumber, 10) || 1;
      paginationType = paginationElement.dataset.paginationtype;
      blockName = paginationElement.dataset.blockname;
      const totalPage = paginationElement.dataset.totalpage;
      window.addEventListener('scroll', () => {
        // Prevent multiple requests when already loading
        if (isLoading) return;
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.offsetHeight;
        if (scrollPosition >= documentHeight - 200) {
          const blockWrapper = paginationElement.closest(`.wp-block-zolo-${blockName}`);
          if (blockWrapper) {
            const blockSettings = blockWrapper.dataset.attributes;
            pageNumber += 1;
            isLoading = true;
            if (totalPage >= pageNumber) {
              fetchContent(blockWrapper, pageNumber, blockSettings);
            }
          }
        }
      });
    };
    function initPaginationListeners(paginationElement) {
      paginationType = paginationElement.dataset.paginationtype;
      blockName = paginationElement.dataset.blockname;
      switch (paginationType) {
        case 'normal':
          break;
        case 'number':
          addClickListeners(paginationElement.querySelectorAll('a'), handlePaginationClick);
          break;
        case 'button':
          handleButtonPagination(paginationElement);
          break;
        case 'scroll':
          handleScrollPagination(paginationElement);
          break;
      }
    }
    const paginationElements = document.querySelectorAll(`.${PAGINATION_WRAP_CLASS}`);
    paginationElements.forEach(initPaginationListeners);
  }

  // Initialize both post filter tab and pagination
  initPostFilterTab();
  initPagination();
});
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map