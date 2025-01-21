/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/extensions/AI/popup/components/content/index.js":
/*!*************************************************************!*\
  !*** ./src/extensions/AI/popup/components/content/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const Content = () => {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  const {
    reset,
    setPrompt,
    setContext,
    setScreen,
    requestAI
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)('zoloai/popup');
  const {
    loading,
    response,
    content,
    screen,
    prompt
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      isOpen: checkIsOpen,
      isLoading,
      getPrompt,
      getResponse,
      getContent,
      getContext,
      getScreen
    } = select('zoloai/popup');
    return {
      isOpen: checkIsOpen(),
      prompt: getPrompt(),
      response: getResponse(),
      loading: isLoading(),
      content: getContent() ? getContent() : '',
      context: getContext(),
      screen: getScreen()
    };
  });
  function openModal(prompt) {
    setPrompt(prompt);
    setContext('selected-blocks');
    requestAI();
  }
  function onKeyDown(e) {
    if (e.key === 'Enter') {
      requestAI();
    }
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (response?.content) {
      setPrompt(response.content);
    }
    if (screen === 'request') {
      setPrompt(content);
    }
  }, [response, content, screen, prompt]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "zolo-popup-content",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "zolo-popup-response",
      children: screen === 'request' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "zolo-popup-response-button",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            variant: "primary",
            onClick: () => {
              openModal((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Simplify the language`, 'zoloblocks'));
            },
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Simplify Language', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.88463 2.40485C3.07376 2.40485 2.40485 3.07376 2.40485 3.88463V21.5109C2.40485 21.5437 2.41319 21.5579 2.4182 21.5651C2.42542 21.5754 2.43869 21.5874 2.45862 21.5956C2.47863 21.6039 2.49701 21.6048 2.50988 21.6026C2.51904 21.601 2.53371 21.5968 2.5544 21.5761L6.2913 17.8392C6.81489 17.3156 7.52679 17.0153 8.27714 17.0153H20.0966C20.9169 17.0153 21.5951 16.337 21.5951 15.5168V3.88463C21.5951 3.0718 20.9336 2.40485 20.1154 2.40485H3.88463ZM1 3.88463C1 2.29788 2.29788 1 3.88463 1H20.1154C21.7134 1 23 2.29985 23 3.88463V15.5168C23 17.1129 21.6927 18.4202 20.0966 18.4202H8.27714C7.90361 18.4202 7.54782 18.5694 7.28469 18.8326L3.54778 22.5695C2.61103 23.5062 1 22.8515 1 21.5109V3.88463Z",
                fill: "#4D4D4D"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            className: "longer",
            variant: "primary",
            onClick: () => {
              openModal((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Make it longer`, 'zoloblocks'));
            },
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Make it longer', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.26925 8.20565C5.54344 8.47985 5.54344 8.92441 5.26925 9.19861L3.39719 11.0707H10.0621C10.4498 11.0707 10.7642 11.385 10.7642 11.7728C10.7642 12.1606 10.4498 12.4749 10.0621 12.4749H3.40091L5.26849 14.3368C5.5431 14.6106 5.54378 15.0551 5.27 15.3298C4.99622 15.6044 4.55166 15.6051 4.27705 15.3313L1.20641 12.27C1.0744 12.1384 1.00014 11.9597 1 11.7733C0.999859 11.5869 1.07384 11.4081 1.20565 11.2763L4.27629 8.20565C4.55049 7.93145 4.99505 7.93145 5.26925 8.20565ZM19.7237 8.20565C19.4495 7.93145 19.0049 7.93145 18.7307 8.20565C18.4565 8.47985 18.4565 8.92441 18.7307 9.19861L20.6028 11.0707H13.9379C13.5502 11.0707 13.2358 11.385 13.2358 11.7728C13.2358 12.1606 13.5502 12.4749 13.9379 12.4749H20.5991L18.7315 14.3368C18.4569 14.6106 18.4562 15.0551 18.73 15.3298C19.0037 15.6044 19.4483 15.6051 19.7229 15.3313L22.7936 12.27C22.9256 12.1384 22.9998 11.9597 23 11.7733C23.0001 11.5869 22.9261 11.4081 22.7943 11.2763L19.7237 8.20565Z",
                fill: "#4D4D4D"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            className: "shorter",
            variant: "primary",
            onClick: () => {
              openModal((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Make it shorter`, 'zoloblocks'));
            },
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Make it shorter', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.50505 8.20489C6.77966 7.93111 7.22423 7.93179 7.49801 8.20641L10.5593 11.277C10.8328 11.5514 10.8324 11.9953 10.5585 12.2692L7.49725 15.3305C7.22305 15.6047 6.77849 15.6047 6.50429 15.3305C6.23009 15.0563 6.23009 14.6118 6.50429 14.3376L8.36693 12.4749H1.70213C1.31435 12.4749 1 12.1606 1 11.7728C1 11.385 1.31435 11.0707 1.70213 11.0707H8.37064L6.50353 9.19785C6.22975 8.92323 6.23043 8.47867 6.50505 8.20489ZM17.4965 9.19785C17.7702 8.92323 17.7696 8.47867 17.4949 8.20489C17.2203 7.93111 16.7758 7.93179 16.502 8.20641L13.4407 11.277C13.1672 11.5514 13.1676 11.9953 13.4415 12.2692L16.5027 15.3305C16.7769 15.6047 17.2215 15.6047 17.4957 15.3305C17.7699 15.0563 17.7699 14.6118 17.4957 14.3376L15.633 12.4749H22.2979C22.6856 12.4749 23 12.1606 23 11.7728C23 11.385 22.6856 11.0707 22.2979 11.0707H15.6293L17.4965 9.19785Z"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            variant: "primary",
            onClick: () => {
              openModal((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Fix spelling and grammar`, 'zoloblocks'));
            },
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fix spelling & grammar', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.1148 1C19.5026 1 19.817 1.31435 19.817 1.70213C19.817 3.07435 20.9256 4.18298 22.2978 4.18298C22.6856 4.18298 23 4.49733 23 4.88511V4.90383C23 5.2916 22.6856 5.60596 22.2978 5.60596C20.9256 5.60596 19.817 6.71458 19.817 8.08681C19.817 8.47458 19.5026 8.78894 19.1148 8.78894C18.7271 8.78894 18.4127 8.47458 18.4127 8.08681C18.4127 6.71458 17.3041 5.60596 15.9319 5.60596C15.5441 5.60596 15.2297 5.2916 15.2297 4.90383V4.88511C15.2297 4.49733 15.5441 4.18298 15.9319 4.18298C17.3041 4.18298 18.4127 3.07435 18.4127 1.70213C18.4127 1.31435 18.7271 1 19.1148 1ZM19.1148 3.93215C18.8519 4.30697 18.5245 4.6331 18.1485 4.89447C18.5245 5.15584 18.8519 5.48197 19.1148 5.85679C19.3778 5.48197 19.7052 5.15584 20.0812 4.89447C19.7052 4.6331 19.3778 4.30697 19.1148 3.93215ZM8.62043 4.18289C9.0082 4.18289 9.32255 4.49724 9.32255 4.88502C9.32255 8.31682 12.1069 11.1012 15.5387 11.1012C15.9265 11.1012 16.2408 11.4155 16.2408 11.8033V11.8501C16.2408 12.2379 15.9265 12.5522 15.5387 12.5522C12.1069 12.5522 9.32255 15.3366 9.32255 18.7684C9.32255 19.1562 9.0082 19.4705 8.62043 19.4705C8.23265 19.4705 7.9183 19.1562 7.9183 18.7684C7.9183 15.3366 5.13393 12.5522 1.70213 12.5522C1.31435 12.5522 1 12.2379 1 11.8501V11.8033C1 11.4155 1.31435 11.1012 1.70213 11.1012C5.13393 11.1012 7.9183 8.31681 7.9183 4.88502C7.9183 4.49724 8.23265 4.18289 8.62043 4.18289ZM8.62043 8.08337C7.85379 9.73816 6.51082 11.0719 4.84947 11.8267C6.51082 12.5815 7.85379 13.9153 8.62043 15.5701C9.38706 13.9153 10.73 12.5815 12.3914 11.8267C10.73 11.0719 9.38706 9.73816 8.62043 8.08337ZM19.817 16.2502C19.817 15.8625 19.5026 15.5481 19.1148 15.5481C18.7271 15.5481 18.4127 15.8625 18.4127 16.2502C18.4127 17.6225 17.3041 18.7311 15.9319 18.7311C15.5441 18.7311 15.2297 19.0455 15.2297 19.4332V19.452C15.2297 19.8397 15.5441 20.1541 15.9319 20.1541C17.3041 20.1541 18.4127 21.2627 18.4127 22.6349C18.4127 23.0227 18.7271 23.3371 19.1148 23.3371C19.5026 23.3371 19.817 23.0227 19.817 22.6349C19.817 21.2627 20.9256 20.1541 22.2978 20.1541C22.6856 20.1541 23 19.8397 23 19.452V19.4332C23 19.0455 22.6856 18.7311 22.2978 18.7311C20.9256 18.7311 19.817 17.6225 19.817 16.2502ZM18.1485 19.4426C18.5245 19.1812 18.8519 18.8551 19.1148 18.4803C19.3778 18.8551 19.7052 19.1812 20.0812 19.4426C19.7052 19.704 19.3778 20.0301 19.1148 20.4049C18.8519 20.0301 18.5245 19.704 18.1485 19.4426Z",
                fill: "#4D4D4D"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "zolo-popup-response-lang",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Change Language', 'zoloblocks'),
            value: '',
            options: [{
              label: 'Translate to',
              value: ''
            }, {
              label: 'Arabic',
              value: 'arabic'
            }, {
              label: 'Bengali',
              value: 'bengali'
            }, {
              label: 'Bulgarian',
              value: 'bulgarian'
            }, {
              label: 'Chinese',
              value: 'chinese'
            }, {
              label: 'Croatian',
              value: 'croatian'
            }, {
              label: 'Czech',
              value: 'czech'
            }, {
              label: 'Danish',
              value: 'danish'
            }, {
              label: 'Dutch',
              value: 'dutch'
            }, {
              label: 'English',
              value: 'english'
            }, {
              label: 'Estonian',
              value: 'estonian'
            }, {
              label: 'Finnish',
              value: 'finnish'
            }, {
              label: 'French',
              value: 'french'
            }, {
              label: 'German',
              value: 'german'
            }, {
              label: 'Greek',
              value: 'greek'
            }, {
              label: 'Gujarati',
              value: 'gujarati'
            }, {
              label: 'Hebrew',
              value: 'hebrew'
            }, {
              label: 'Hindi',
              value: 'hindi'
            }, {
              label: 'Hungarian',
              value: 'hungarian'
            }, {
              label: 'Indonesian',
              value: 'indonesian'
            }, {
              label: 'Italian',
              value: 'italian'
            }, {
              label: 'Japanese',
              value: 'japanese'
            }, {
              label: 'Korean',
              value: 'korean'
            }, {
              label: 'Latvian',
              value: 'latvian'
            }, {
              label: 'Lithuanian',
              value: 'lithuanian'
            }, {
              label: 'Maltese',
              value: 'maltese'
            }, {
              label: 'Norwegian',
              value: 'norwegian'
            }, {
              label: 'Persian',
              value: 'persian'
            }, {
              label: 'Polish',
              value: 'polish'
            }, {
              label: 'Portuguese',
              value: 'portuguese'
            }, {
              label: 'Romanian',
              value: 'romanian'
            }, {
              label: 'Russian',
              value: 'russian'
            }, {
              label: 'Slovak',
              value: 'slovak'
            }, {
              label: 'Slovenian',
              value: 'slovenian'
            }, {
              label: 'Spanish',
              value: 'spanish'
            }, {
              label: 'Swedish',
              value: 'swedish'
            }, {
              label: 'Tamil',
              value: 'tamil'
            }, {
              label: 'Telugu',
              value: 'telugu'
            }, {
              label: 'Thai',
              value: 'thai'
            }, {
              label: 'Turkish',
              value: 'turkish'
            }, {
              label: 'Urdu',
              value: 'urdu'
            }, {
              label: 'Vietnamese',
              value: 'vietnamese'
            }],
            onChange: value => {
              if (value !== '') {
                openModal((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(`Translate to %s`, value), 'zoloblocks'));
              }
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Change tone', 'zoloblocks'),
            value: '',
            options: [{
              label: 'Casual',
              value: 'casual'
            }, {
              label: 'Confidence',
              value: 'confidence'
            }, {
              label: 'Formal',
              value: 'formal'
            }, {
              label: 'Friendly',
              value: 'friendly'
            }, {
              label: 'Inspirational',
              value: 'inspirational'
            }, {
              label: 'Motivational',
              value: 'motivational'
            }, {
              label: 'Nostalgic',
              value: 'nostalgic'
            }, {
              label: 'Playful',
              value: 'playful'
            }, {
              label: 'Professional',
              value: 'professional'
            }, {
              label: 'Scientific',
              value: 'scientific'
            }, {
              label: 'Straightforward',
              value: 'straightforward'
            }, {
              label: 'Witty',
              value: 'witty'
            }],
            onChange: value => {
              openModal((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(`Change tone to %s`, value), 'zoloblocks'));
            }
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/extensions/AI/popup/components/footer/index.js":
/*!************************************************************!*\
  !*** ./src/extensions/AI/popup/components/footer/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




const Footer = props => {
  const {
    onInsert
  } = props;
  const {
    open,
    close,
    reset,
    setPrompt,
    requestAI,
    setScreen,
    setBlockContent
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('zoloai/popup');
  const {
    prompt,
    loading,
    response,
    screen
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getPrompt,
      getContext,
      isLoading,
      getResponse,
      getScreen
    } = select('zoloai/popup');
    return {
      prompt: getPrompt(),
      context: getContext(),
      screen: getScreen(),
      loading: isLoading(),
      response: getResponse()
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "zolo-popup-footer",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "zolo-popup-footer-actions",
      children: [screen !== 'prompt' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        className: "insert-btn",
        onClick: () => {
          setScreen('prompt');
          setPrompt('');
          setBlockContent('');
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('New Prompt', 'zoloblocks')
      }), response && screen !== 'prompt' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "zolo-ai-footer-btn",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: () => {
              const textToCopy = response?.content;
              if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                  console.log('Text copied to clipboard successfully!');
                }).catch(err => {
                  console.error('Failed to copy text: ', err);
                });
              } else {
                // Fallback for older browsers or if clipboard API is restricted
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                textArea.style.position = 'fixed'; // Avoid scrolling to the bottom
                textArea.style.top = '0';
                textArea.style.left = '0';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                  const successful = document.execCommand('copy');
                  if (successful) {
                    console.log('Fallback: Text copied to clipboard!');
                  } else {
                    console.error('Fallback: Unable to copy text.');
                  }
                } catch (err) {
                  console.error('Fallback: Error copying text: ', err);
                }
                document.body.removeChild(textArea);
              }
              reset();
              close();
            },
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Copy', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.46667 3.76319C3.46667 3.09073 4.06406 2.46667 4.88934 2.46667H14.6427C15.468 2.46667 16.0654 3.09074 16.0654 3.76319V4.89404H8.9667C7.41324 4.89404 6.07736 6.09014 6.07736 7.65723V17.6393H4.88934C4.06406 17.6393 3.46667 17.0152 3.46667 16.3428V3.76319ZM6.07736 19.1059H4.88934C3.33861 19.1059 2 17.9073 2 16.3428V3.76319C2 2.19866 3.33861 1 4.88934 1H14.6427C16.1934 1 17.532 2.19866 17.532 3.76319V4.89404H18.7054C20.2588 4.89404 21.5947 6.09014 21.5947 7.65723V20.2368C21.5947 21.8039 20.2588 23 18.7054 23H8.9667C7.41324 23 6.07736 21.8039 6.07736 20.2368V19.1059ZM7.54403 7.65723C7.54403 6.98221 8.1387 6.36071 8.9667 6.36071H18.7054C19.5334 6.36071 20.1281 6.98221 20.1281 7.65723V20.2368C20.1281 20.9118 19.5334 21.5333 18.7054 21.5333H8.9667C8.1387 21.5333 7.54403 20.9118 7.54403 20.2368V7.65723Z"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            className: "insert-btn",
            onClick: onInsert,
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Insert', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23 7.59066C23 7.20289 22.6856 6.88854 22.2979 6.88854L17.3923 6.88854C17.0046 6.88854 16.6902 7.20289 16.6902 7.59066C16.6902 7.97844 17.0046 8.29279 17.3923 8.29279L21.5957 8.29279L21.5957 21.5957L2.40429 21.5957L2.40429 8.29279L6.38301 8.29279C6.77078 8.29279 7.08513 7.97844 7.08513 7.59066C7.08513 7.20289 6.77078 6.88854 6.38301 6.88854L1.70216 6.88854C1.31439 6.88854 1.00004 7.20289 1.00004 7.59066L1.00004 22.2979C1.00004 22.6856 1.31439 23 1.70216 23L22.2979 23C22.6856 23 23 22.6856 23 22.2979L23 7.59066ZM15.614 12.6737C15.8882 12.9479 15.8882 13.3925 15.614 13.6667L12.3749 16.9058C12.1007 17.18 11.6561 17.18 11.3819 16.9058L8.14277 13.6667C7.86857 13.3925 7.86857 12.9479 8.14277 12.6737C8.41696 12.3995 8.86153 12.3995 9.13572 12.6737L11.1763 14.7143L11.1763 1.70213C11.1763 1.31435 11.4907 0.999999 11.8784 1C12.2662 1 12.5806 1.31435 12.5806 1.70213L12.5806 14.7142L14.6211 12.6737C14.8953 12.3995 15.3398 12.3995 15.614 12.6737Z"
              })
            })]
          })]
        })
      }), prompt && !loading && !response && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          className: "insert-btn generate-btn",
          onClick: () => {
            requestAI();
          },
          children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Generate', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("g", {
              clipPath: "url(#clip0_1313_270)",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.4493 2.04772C12.2553 2.04772 11.394 3.02283 11.394 4.09545C11.394 3.01308 10.4153 2.04772 9.33866 2.04772C10.5327 2.04772 11.394 1.07262 11.394 0C11.394 1.08237 12.3727 2.04772 13.4493 2.04772ZM5.2475 10.2095C5.2475 8.07399 6.96027 6.36756 9.10367 6.36756C6.96027 6.36756 5.2475 4.66112 5.2475 2.52563C5.2475 4.66112 3.53474 6.36756 1.39134 6.36756C3.53474 6.36756 5.2475 8.07399 5.2475 10.2095ZM24.0001 11.1358C19.4294 11.1358 15.818 14.7339 15.818 19.2877C15.818 14.8509 12.2065 11.1358 7.63584 11.1358C12.2065 11.1358 15.818 7.53764 15.818 2.98389C15.818 7.42062 19.4294 11.1358 24.0001 11.1358ZM4.34723 13.3296H1V16.6645L4.34723 13.3296ZM10.0042 16.5085L8.65361 17.8541H8.7319C8.97659 18.1662 9.21148 18.488 9.21148 19.0438C9.21148 19.5996 8.97659 20.0774 8.57531 20.5552C8.17403 20.955 7.69446 21.189 7.05829 21.189H2.51702L10.4838 13.3296H7.53786L1.0783 19.7653V23.5H6.9702C8.25233 23.5 9.20169 23.1782 10.0825 22.3884C10.797 21.6668 11.2766 20.2431 11.2766 19.2095C11.2766 18.1759 10.797 17.2203 10.0042 16.5085Z"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("defs", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("clipPath", {
                id: "clip0_1313_270",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
                  width: 24,
                  height: 24,
                  fill: "white"
                })
              })
            })]
          })]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/extensions/AI/popup/components/header/index.js":
/*!************************************************************!*\
  !*** ./src/extensions/AI/popup/components/header/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const Header = () => {
  const {
    close
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('zoloai/popup');
  const {
    loading,
    prompt,
    language,
    response,
    content,
    context
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      isOpen: checkIsOpen,
      isLoading,
      getPrompt,
      getResponse,
      getContent,
      getContext
    } = select('zoloai/popup');
    return {
      isOpen: checkIsOpen(),
      prompt: getPrompt(),
      response: getResponse(),
      loading: isLoading(),
      content: getContent() ? getContent() : '',
      context: getContext()
    };
  });
  const handleClose = () => {
    close();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "zolo-popup-header",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "zolo-popup-header__logo",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g", {
          clipPath: "url(#clip0_1295_277)",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
            fill: "black"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            d: "M6.42959 11.1024L11.3674 6.1123H6.40559L6.42959 11.1024Z",
            fill: "white"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            d: "M16.4683 9.41953L14.5162 11.3712C14.8046 11.6942 15.1469 12.2126 15.1469 12.6763C15.1469 13.2336 14.9242 13.6973 14.5666 14.0678C14.22 14.4269 13.7678 14.6021 13.2336 14.6021H8.99328L17.6256 6.11377H13.6392L6.42624 13.2926V17.928L9.17712 17.9078H13.2298C14.6563 17.9078 15.8414 17.4672 16.8269 16.5869C17.7893 15.7066 18.2765 14.269 18.2765 12.9019C18.2765 11.4571 17.5478 10.2413 16.4678 9.41953H16.4688H16.4683Z",
            fill: "white"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("defs", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("clipPath", {
            id: "clip0_1295_277",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
              width: 24,
              height: 24,
              fill: "white"
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        className: "zolo-ai-logo-text",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zolo AI', 'zoloblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "zolo-ai-badge",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Beta', 'zoloblocks')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "zolo-popup-header_right",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
        href: "#",
        className: "zolo-head-upgrade-btn",
        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upgrade', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("g", {
            clipPath: "url(#clip0_1313_270)",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M13.4493 2.04772C12.2553 2.04772 11.394 3.02283 11.394 4.09545C11.394 3.01308 10.4153 2.04772 9.33866 2.04772C10.5327 2.04772 11.394 1.07262 11.394 0C11.394 1.08237 12.3727 2.04772 13.4493 2.04772ZM5.2475 10.2095C5.2475 8.07399 6.96027 6.36756 9.10367 6.36756C6.96027 6.36756 5.2475 4.66112 5.2475 2.52563C5.2475 4.66112 3.53474 6.36756 1.39134 6.36756C3.53474 6.36756 5.2475 8.07399 5.2475 10.2095ZM24.0001 11.1358C19.4294 11.1358 15.818 14.7339 15.818 19.2877C15.818 14.8509 12.2065 11.1358 7.63584 11.1358C12.2065 11.1358 15.818 7.53764 15.818 2.98389C15.818 7.42062 19.4294 11.1358 24.0001 11.1358ZM4.34723 13.3296H1V16.6645L4.34723 13.3296ZM10.0042 16.5085L8.65361 17.8541H8.7319C8.97659 18.1662 9.21148 18.488 9.21148 19.0438C9.21148 19.5996 8.97659 20.0774 8.57531 20.5552C8.17403 20.955 7.69446 21.189 7.05829 21.189H2.51702L10.4838 13.3296H7.53786L1.0783 19.7653V23.5H6.9702C8.25233 23.5 9.20169 23.1782 10.0825 22.3884C10.797 21.6668 11.2766 20.2431 11.2766 19.2095C11.2766 18.1759 10.797 17.2203 10.0042 16.5085Z"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("defs", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("clipPath", {
              id: "clip0_1313_270",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
                width: 24,
                height: 24,
                fill: "white"
              })
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: "zolo-head-close-button",
        onClick: handleClose,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "icon icon-tabler icons-tabler-outline icon-tabler-x",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            stroke: "none",
            d: "M0 0h24v24H0z",
            fill: "none"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            d: "M18 6l-12 12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            d: "M6 6l12 12"
          })]
        })
      })]
    }), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "zolo-ai-loader"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/extensions/AI/popup/components/prompt/index.js":
/*!************************************************************!*\
  !*** ./src/extensions/AI/popup/components/prompt/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const Prompt = props => {
  const {
    reset,
    setBlockContent,
    setPrompt,
    setScreen
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)('zoloai/popup');
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const {
    prompt,
    response,
    isOpen,
    loading,
    screen,
    blockContent
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getResponse,
      isOpen: checkIsOpen,
      getPrompt,
      isLoading,
      getScreen,
      getBlockContent
    } = select('zoloai/popup');
    return {
      response: getResponse() || {},
      // Default to an empty object if null
      isOpen: checkIsOpen(),
      prompt: getPrompt(),
      loading: isLoading(),
      screen: getScreen(),
      blockContent: getBlockContent()
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (response?.content) {
      setBlockContent(response.content);
    }
  }, [response, setBlockContent]);

  // Automatic height.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (ref?.current) {
      ref.current.style.height = '0px';
      const scrollHeight = ref.current.scrollHeight;
      ref.current.style.height = scrollHeight + 'px';
    }
  }, [ref, prompt, response, blockContent]);

  // Set focus on Input.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isOpen && !loading && ref?.current) {
      ref.current.focus();
    }
  }, [isOpen, loading, ref]);
  const handleContentChange = e => {
    const newContent = e?.target?.value;
    setBlockContent(newContent);
    setPrompt(newContent);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
      className: "zolo-ai-prompt",
      ref: ref,
      value: blockContent || '',
      onChange: handleContentChange,
      placeholder: "Type your content here...",
      rows: 1,
      style: {
        width: '100%'
      }
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prompt);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/*!*****************************************************!*\
  !*** ./src/extensions/AI/popup/components/index.js ***!
  \*****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* reexport safe */ _components_content__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Footer: () => (/* reexport safe */ _components_footer__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Header: () => (/* reexport safe */ _components_header__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Prompt: () => (/* reexport safe */ _components_prompt__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./src/extensions/AI/popup/components/header/index.js");
/* harmony import */ var _components_prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/prompt */ "./src/extensions/AI/popup/components/prompt/index.js");
/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/content */ "./src/extensions/AI/popup/components/content/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./src/extensions/AI/popup/components/footer/index.js");





})();

/******/ })()
;
//# sourceMappingURL=index.js.map