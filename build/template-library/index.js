/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template-library/inner-template.js":
/*!************************************************!*\
  !*** ./src/template-library/inner-template.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pro_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pro-popup */ "./src/template-library/pro-popup.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const InnerTemplate = ({
  templates,
  handleImportTemplate,
  favIds,
  handleFavTemplate
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "zolo-demos-wrapper",
    children: templates && templates?.length > 0 && templates.map((template, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "single-demo",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "demo-preview",
          children: [template?.demo_preview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            src: template.demo_preview,
            alt: template?.title,
            loading: "lazy",
            decoding: "async"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: template?.status === 'pro' && zoloParams?.zolo_pro_status === 'inactive' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "demo-actions-btn-wrap",
              children: [template?.demo_link && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
                text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('View Demo', 'zoloblocks'),
                placement: "top",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                  className: "demo-btn view-btn",
                  href: template?.demo_link,
                  target: "_blank",
                  children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Demo', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                      stroke: "currentColor",
                      strokeWidth: 2,
                      d: "M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                      stroke: "currentColor",
                      strokeWidth: 2,
                      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_pro_popup__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "demo-actions-btn-wrap",
            children: template?.status === 'pro' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
              children:
              // check if the user has ZoloBlocks Pro
              zoloParams?.zolo_pro_status === 'active' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: [template?.demo_link && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
                  text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('View Demo', 'zoloblocks'),
                  placement: "top",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                    className: "demo-btn view-btn",
                    href: template?.demo_link,
                    target: "_blank",
                    children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Demo', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: 24,
                      height: 24,
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                        stroke: "currentColor",
                        strokeWidth: 2,
                        d: "M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                        stroke: "currentColor",
                        strokeWidth: 2,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      })]
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
                  text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Import Demo', 'zoloblocks'),
                  placement: "top",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                    className: "demo-btn import-btn",
                    onClick: () => handleImportTemplate(template?.json_file),
                    children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Import', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: 24,
                      height: 24,
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                      })
                    })]
                  })
                })]
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
              children: [template?.demo_link && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
                text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('View Demo', 'zoloblocks'),
                placement: "top",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                  className: "demo-btn view-btn",
                  href: template?.demo_link,
                  target: "_blank",
                  children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Demo', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                      stroke: "currentColor",
                      strokeWidth: 2,
                      d: "M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                      stroke: "currentColor",
                      strokeWidth: 2,
                      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
                text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Import Demo', 'zoloblocks'),
                placement: "top",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                  className: "demo-btn import-btn",
                  onClick: () => handleImportTemplate(template?.json_file),
                  children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Import', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                    })
                  })]
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
            text: Array.isArray(favIds) && favIds.includes(template.id) ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove from Favorite', 'zoloblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add to Favorite', 'zoloblocks'),
            placement: "top"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "demo-footer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "footer-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
              className: "demo-title",
              children: template.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
              onClick: () => handleFavTemplate(template.id),
              className: Array.isArray(favIds) && favIds.includes(template.id) ? 'fav-btn active' : 'fav-btn',
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                className: "fav",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  d: "M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                className: "not-fav",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  d: "M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('demo-badge', `${template?.status === 'pro' ? 'pro' : 'free'}-badge`),
          children: template?.status === 'pro' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pro', 'zoloblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Free', 'zoloblocks')
        })]
      }, index);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InnerTemplate);

/***/ }),

/***/ "./src/template-library/page-templates/index.js":
/*!******************************************************!*\
  !*** ./src/template-library/page-templates/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inner_page_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inner-page-template */ "./src/template-library/page-templates/inner-page-template.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const PageTemplateLoader = ({
  TABS,
  activeTab,
  setActiveTab,
  searchText,
  setSearchText,
  pullDemos,
  setPullDemos,
  pullNewDemos,
  setIsOpen,
  number,
  setNumber,
  loading,
  handleImportTemplate,
  // specific to items
  type,
  setType,
  categories,
  activeCat,
  setActiveCat,
  allItems,
  items,
  setItems,
  // favorites
  favIds,
  handleFavTemplate
}) => {
  let itemText = '';
  switch (activeTab) {
    case 'pages':
      itemText = 'Pages';
      break;
    case 'demos':
      itemText = 'Demos';
      break;
    case 'templates':
      itemText = 'Templates';
      break;
    case 'favorites':
      itemText = 'Favorites Items';
      break;
    default:
      itemText = 'Patterns';
      break;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "categories",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "demo-made-button",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "demo-made-btn made-zoloblocks-btn",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('hand craft', 'zoloblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          className: "demo-made-btn made-ai-btn",
          title: "upcoming",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              d: "M14.0712 9.69993L14.9982 7.55057C15.152 7.19386 15.6539 7.19843 15.8014 7.55789L16.6354 9.59063C17.172 10.8987 18.2031 11.9386 19.5112 12.4441C20.2436 12.7271 20.9451 12.9933 21.726 13.3027C22.097 13.4496 22.0896 13.979 21.716 14.1188L19.6811 14.8802C18.2774 15.4055 17.1629 16.513 16.619 17.9233L15.8161 20.0053C15.6715 20.3804 15.1465 20.3798 15.0025 20.0045L14.2087 17.9342C13.6895 16.58 12.6432 15.5009 11.3145 14.9493L9.33125 14.1259C8.97253 13.977 8.96964 13.4642 9.32666 13.3112L11.3146 12.4589C12.5487 11.9299 13.5353 10.9424 14.0712 9.69993Z",
              fill: "black"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              d: "M6.01488 3.07497L6.36536 2.26453C6.51939 1.90834 7.02058 1.91291 7.16823 2.27186L7.45362 2.96564C7.9915 4.2732 9.02484 5.3084 10.3342 5.81066C10.5983 5.91198 10.8636 6.01393 11.14 6.12187C11.512 6.26717 11.505 6.79641 11.1309 6.93603L10.5019 7.17075C9.09773 7.69476 7.98233 8.80125 7.43724 10.2109L7.18294 10.8686C7.0381 11.2431 6.51378 11.2426 6.36966 10.8678L6.11046 10.1936C5.59 8.83976 4.54261 7.76153 3.21341 7.21116L2.56601 6.9431C2.20678 6.79436 2.20389 6.28094 2.56142 6.12807L3.25573 5.83122C4.49031 5.30336 5.47779 4.31692 6.01488 3.07497Z",
              fill: "black"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              d: "M4.71182 15.9861L4.7511 15.8956C4.88762 15.5812 5.33013 15.5852 5.461 15.9021C5.93846 17.0583 6.85588 17.9676 8.01378 18.4132L8.10773 18.4495C8.42754 18.573 8.4217 19.0269 8.10037 19.1463C6.89622 19.5939 5.93558 20.5497 5.46676 21.7574C5.34152 22.08 4.88724 22.0809 4.76262 21.7581C4.30772 20.5795 3.39184 19.6358 2.2334 19.158C1.91983 19.0287 1.92376 18.5778 2.23586 18.4449C3.33693 17.976 4.23152 17.0924 4.71182 15.9861Z",
              fill: "black"
            })]
          }), "ai", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('upcoming', 'zoloblocks')
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "demo-title-proFree-wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "category-title",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Categories', 'zoloblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "demo-proFree-btn",
          children: [type !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              className: "demo-pro-free-reset",
              onClick: () => {
                setType('');
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                className: "w-6 h-6 text-gray-800 dark:text-white",
                "aria-hidden": "true",
                width: 24,
                height: 24,
                fill: "none",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "demo-free-btn",
            onClick: () => {
              setType('free');
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('free', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "demo-pro-btn",
            onClick: () => {
              setType('pro');
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('pro', 'zoloblocks')
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "category-list",
        children: categories && categories?.length > 0 && categories?.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('single-category', {
            active: activeCat === category?.value
          }),
          onClick: () => setActiveCat(category?.value),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "single-category-text",
            children: category?.label
          }), category?.value === 'all' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "single-category-count",
            children: allItems && allItems?.length
          })]
        }, category?.value))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "demos-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "zolo-dm-head",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "logo-area",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.6827 10.8669L18.9688 7.58074L18.9405 7.55241C20.7819 8.94051 22 11.0085 22 13.4448C22 15.7677 21.1785 18.204 19.5637 19.6771C17.9207 21.1785 15.9093 21.915 13.5014 21.915L6.64589 21.9433H2V14.1246L14.1813 2H20.9235L6.36261 16.3343H13.5297C14.4079 16.3343 15.1728 16.0227 15.7677 15.4278C16.3909 14.8045 16.7592 14.0113 16.7592 13.0765C16.7592 12.2833 16.1643 11.4051 15.6827 10.8669ZM2.02869 10.3003V2H10.3573L2.02869 10.3003Z",
              fill: "#2667FF"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "logo-text",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Template Library', 'zoloblocks')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "tabs-area",
          children: TABS && TABS.map(tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('single-tab', {
              active: activeTab === tab.value
            }),
            onClick: () => setActiveTab(tab.value),
            children: tab.label
          }, tab.value))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "search-close-area",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "search",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              type: "search",
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search', 'zoloblocks'),
              value: searchText,
              onChange: e => setSearchText(e.target.value)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "sync-btn",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
              text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sync Demos', 'zoloblocks'),
              placement: "top",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                className: "sync-button",
                onClick: () => {
                  setPullDemos(!pullDemos);
                  pullNewDemos();
                  setSearchText('');
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                  className: "w-6 h-6 text-gray-800 dark:text-white",
                  "aria-hidden": "true",
                  width: "24",
                  height: "24",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                  })
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "close-btn",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onClick: () => setIsOpen(false),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                viewBox: "0 0 24 24",
                width: 24,
                height: 24,
                color: '#000000',
                fill: 'none',
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  d: "M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              })
            })
          })]
        })]
      }), items && items.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inner_page_template__WEBPACK_IMPORTED_MODULE_3__["default"], {
        templates: items,
        handleImportTemplate: handleImportTemplate,
        favIds: favIds,
        handleFavTemplate: handleFavTemplate
      }), items && items?.length > number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "load-more-btn-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "load-more-btn",
          onClick: () => {
            setNumber(number + 20);
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Load More', 'zoloblocks')
        })
      }), items?.length === 0 && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "no-found-item",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`No ${itemText} found`, 'zoloblocks')
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageTemplateLoader);

/***/ }),

/***/ "./src/template-library/page-templates/inner-page-template.js":
/*!********************************************************************!*\
  !*** ./src/template-library/page-templates/inner-page-template.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _single_page_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-page-template */ "./src/template-library/page-templates/single-page-template.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const InnerPageTemplate = ({
  templates,
  handleImportTemplate,
  favIds,
  handleFavTemplate
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "zolo-demos-wrapper zolo-pages-templates",
    children: templates && templates?.length > 0 && templates.map((template, index) => {
      const pages = template?.pages;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_single_page_template__WEBPACK_IMPORTED_MODULE_0__["default"], {
        template: template,
        handleImportTemplate: handleImportTemplate,
        favIds: favIds,
        handleFavTemplate: handleFavTemplate,
        isPro: pages && pages.length > 0 && pages.some(page => page?.status === 'pro')
      }, index);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InnerPageTemplate);

/***/ }),

/***/ "./src/template-library/page-templates/pages-preview.js":
/*!**************************************************************!*\
  !*** ./src/template-library/page-templates/pages-preview.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pro_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pro-popup */ "./src/template-library/pro-popup.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const PagesPreview = ({
  templates,
  pagesPanel,
  setPagesPanel,
  handleImportTemplate,
  favIds,
  handleFavTemplate,
  templateName
}) => {
  const [activePage, setActivePage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: pagesPanel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "zolo-pages-preview-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          className: "close-btn",
          onClick: () => setPagesPanel(false),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              stroke: "none",
              d: "M0 0h24v24H0z",
              fill: "none"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              d: "M5 12l14 0"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              d: "M5 12l4 4"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              d: "M5 12l4 -4"
            })]
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'zoloblocks')]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          children: templateName ? templateName : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pages Preview', 'zoloblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "zolo-demos-wrapper",
        children: templates && templates?.length > 0 && templates.map((template, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "single-demo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "demo-preview",
              children: [template?.demo_preview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                src: template.demo_preview,
                alt: template?.title,
                loading: "lazy",
                decoding: "async"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "demo-actions-btn-wrap",
                children: template?.status === 'pro' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                  children:
                  // check if the user has ZoloBlocks Pro
                  zoloParams?.zolo_pro_status === 'active' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                    children: [template?.demo_link && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
                      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('View Demo', 'zoloblocks'),
                      placement: "top",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                        className: "demo-btn view-btn",
                        href: template?.demo_link,
                        target: "_blank",
                        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Demo', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: 24,
                          height: 24,
                          fill: "none",
                          viewBox: "0 0 24 24",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                            stroke: "currentColor",
                            strokeWidth: 2,
                            d: "M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                            stroke: "currentColor",
                            strokeWidth: 2,
                            d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          })]
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
                      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Import Demo', 'zoloblocks'),
                      placement: "top",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                        className: "demo-btn import-btn",
                        onClick: () => handleImportTemplate(template?.json_file),
                        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Import', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: 24,
                          height: 24,
                          fill: "none",
                          viewBox: "0 0 24 24",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                          })
                        })]
                      })
                    })]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                    children: [template?.demo_link && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
                      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('View Demo', 'zoloblocks'),
                      placement: "top",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                        className: "demo-btn view-btn",
                        href: template?.demo_link,
                        target: "_blank",
                        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Demo', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: 24,
                          height: 24,
                          fill: "none",
                          viewBox: "0 0 24 24",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                            stroke: "currentColor",
                            strokeWidth: 2,
                            d: "M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                            stroke: "currentColor",
                            strokeWidth: 2,
                            d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          })]
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_pro_popup__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
                  })
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                  children: [template?.demo_link && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
                    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('View Demo', 'zoloblocks'),
                    placement: "top",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                      className: "demo-btn view-btn",
                      href: template?.demo_link,
                      target: "_blank",
                      children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Demo', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                          stroke: "currentColor",
                          strokeWidth: 2,
                          d: "M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                          stroke: "currentColor",
                          strokeWidth: 2,
                          d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        })]
                      })]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
                    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Import Demo', 'zoloblocks'),
                    placement: "top",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                      className: "demo-btn import-btn",
                      onClick: () => handleImportTemplate(template?.json_file),
                      children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Import', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
                text: Array.isArray(favIds) && favIds.includes(template.id) ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove from Favorite', 'zoloblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add to Favorite', 'zoloblocks'),
                placement: "top"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "demo-footer",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "footer-left",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                  className: "demo-title",
                  children: template.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                  onClick: () => handleFavTemplate(template.id),
                  className: Array.isArray(favIds) && favIds.includes(template.id) ? 'fav-btn active' : 'fav-btn',
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    className: "fav",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                      d: "M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    className: "not-fav",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                      d: "M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"
                    })
                  })]
                })]
              })
            })]
          }, index);
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PagesPreview);

/***/ }),

/***/ "./src/template-library/page-templates/single-page-template.js":
/*!*********************************************************************!*\
  !*** ./src/template-library/page-templates/single-page-template.js ***!
  \*********************************************************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-preview */ "./src/template-library/page-templates/pages-preview.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const SinglePageTemplate = ({
  template,
  handleImportTemplate,
  favIds,
  handleFavTemplate,
  isPro
}) => {
  const pages = template?.pages;
  const [pagesPanel, setPagesPanel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "single-demo",
      onClick: () => setPagesPanel(!pagesPanel),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "demo-preview photos-group",
        children: pages && pages.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: pages && pages.map((page, index) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "single-page-photo",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                src: page?.demo_preview,
                alt: page?.title,
                loading: "lazy",
                decoding: "async"
              })
            }, index);
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "demo-footer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "footer-left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "demo-title",
            children: template.title
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "footer-right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "total-pages",
            children: pages && pages.length > 0 ? `${pages.length} ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pages', 'zoloblocks')}` : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1 Page', 'zoloblocks')
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('demo-badge', `${isPro ? 'pro' : 'free'}-badge`),
        children: isPro ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pro', 'zoloblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Free', 'zoloblocks')
      })]
    }), pagesPanel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_pages_preview__WEBPACK_IMPORTED_MODULE_3__["default"], {
      templates: pages,
      pagesPanel: pagesPanel,
      setPagesPanel: setPagesPanel,
      handleImportTemplate: handleImportTemplate,
      favIds: favIds,
      handleFavTemplate: handleFavTemplate,
      templateName: template?.title
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SinglePageTemplate);

/***/ }),

/***/ "./src/template-library/preloader.js":
/*!*******************************************!*\
  !*** ./src/template-library/preloader.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _preloader_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preloader.scss */ "./src/template-library/preloader.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const PreLoader = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "zolo-preloader-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "zolo-preloader",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "dot"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "dot"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "dot"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "dot"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "dot"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      width: 0,
      height: 0,
      className: "svg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("defs", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("filter", {
          id: "uib-jelly-ooze",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("feGaussianBlur", {
            in: "SourceGraphic",
            stdDeviation: 3,
            result: "blur"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("feColorMatrix", {
            in: "blur",
            mode: "matrix",
            values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",
            result: "ooze"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("feBlend", {
            in: "SourceGraphic",
            in2: "ooze"
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreLoader);

/***/ }),

/***/ "./src/template-library/pro-popup.js":
/*!*******************************************!*\
  !*** ./src/template-library/pro-popup.js ***!
  \*******************************************/
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ProPopup = () => {
  const [proModal, setProModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Import Demo', 'zoloblocks'),
      placement: "top",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
        className: "zolo-pro-modal-btn demo-btn import-btn",
        onClick: () => setProModal(true),
        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Import', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
          })
        })]
      })
    }),
    // Pro Modal
    proModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      className: "zolo-pro-modal",
      onRequestClose: () => setProModal(false),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
        className: "zolo-pro-modal-icon",
        xmlns: "http://www.w3.org/2000/svg",
        width: 100,
        height: 100,
        viewBox: "0 0 100 100",
        fill: "none",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M53.63 19.21C53.63 21.0947 52.3999 22.6849 50.6914 23.2239L59.77 55.87L70.8204 36.0263C70.1551 35.6019 69.71 34.8575 69.71 34.0101C69.71 32.6901 70.78 31.6201 72.1 31.6201C73.42 31.6201 74.49 32.6901 74.49 34.0101C74.49 35.3301 73.41 36.4001 72.1 36.4001C72.0147 36.4001 71.9304 36.3956 71.8474 36.3867L70.47 57.53L85.6585 45.5442C85.3762 45.1518 85.21 44.6703 85.21 44.15C85.21 42.83 86.29 41.76 87.6 41.76C88.91 41.76 89.99 42.83 89.99 44.15C89.99 45.47 88.92 46.54 87.6 46.54C87.2548 46.54 86.9267 46.4668 86.6303 46.3352L81.99 57.53L80.57 61.13L77.74 69.59L76.32 73.19L75.32 75.73L75.31 75.74C58.63 73.36 41.63 73.59 25.05 76.74L23.65 73.2L22.24 69.6L19.39 61.14L17.97 57.54L13.3307 46.3478C13.042 46.4715 12.724 46.54 12.39 46.54C11.07 46.54 10 45.47 10 44.15C10 42.83 11.07 41.76 12.39 41.76C13.71 41.76 14.78 42.83 14.78 44.15C14.78 44.6798 14.6076 45.1694 14.3159 45.5656L29.49 57.54L28.1307 36.3994L28.1123 36.3997L28.0905 36.4L28.0699 36.4001C26.7499 36.4001 25.6799 35.3301 25.6799 34.0101C25.6799 32.6901 26.7499 31.6201 28.0699 31.6201C29.3899 31.6201 30.4599 32.6901 30.4599 34.0101C30.4599 34.9203 29.9512 35.7117 29.2025 36.1153L39.52 54.66L48.2086 23.2479C46.4643 22.7333 45.21 21.1234 45.21 19.21C45.21 16.88 47.09 15 49.41 15C51.73 15 53.63 16.88 53.63 19.21ZM75.32 78.5799L76.07 76.6699H76.09H77.84L77.75 76.8799L76.33 80.4799L75.33 83.0199C58.65 80.6399 41.65 80.8699 25.07 84.0199L23.67 80.4799L22.26 76.8799L22.17 76.6699H23.92L25.06 79.5799C41.64 76.4199 58.64 76.1899 75.32 78.5799ZM23.37 41.1001V41.1601C22.62 43.1801 22.66 46.1201 25.93 49.9801C25.93 49.9801 23.47 46.4901 23.7 42.6501C23.85 42.9801 24.02 43.2701 24.23 43.4701C28.86 48.0901 27.71 54.2801 27.71 54.2801C17.1 49.9901 23.37 41.0901 23.37 41.0901V41.1001ZM76.1369 41.4599C76.1382 41.4488 76.14 41.4399 76.14 41.4399L76.13 41.4499L76.1369 41.4599ZM76.1369 41.4599C76.1351 41.475 76.1342 41.4942 76.14 41.4999C76.88 43.5199 76.85 46.4599 73.58 50.3199C73.58 50.3199 76.03 46.8299 75.8 42.9999C75.66 43.3299 75.49 43.6199 75.27 43.8199C70.64 48.4399 71.79 54.6399 71.79 54.6399C82.194 50.4234 76.3671 41.7934 76.1369 41.4599ZM38.825 36.2463C38.8225 36.26 38.82 36.275 38.82 36.28C37.51 38 36.7 40.82 38.71 45.46C38.71 45.46 37.36 41.41 38.71 37.8C38.75 38.16 38.82 38.49 38.98 38.73C42.07 44.49 39.18 50.09 39.18 50.09C30.26 42.91 38.84 36.21 38.84 36.21L38.83 36.22C38.83 36.22 38.8275 36.2325 38.825 36.2463ZM60.4099 36.28C60.3999 36.27 60.3999 36.22 60.3999 36.22L60.3899 36.21C60.3899 36.21 68.9499 42.91 60.0499 50.09C60.0499 50.09 57.1499 44.49 60.2399 38.73C60.3899 38.49 60.4599 38.16 60.5199 37.8C61.8499 41.41 60.5099 45.46 60.5099 45.46C62.5299 40.82 61.7099 38 60.4099 36.28Z",
          fill: "url(#paint0_linear_1914_4408)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("defs", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("linearGradient", {
            id: "paint0_linear_1914_4408",
            x1: 15,
            y1: "45.5",
            x2: "87.5",
            y2: 46,
            gradientUnits: "userSpaceOnUse",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("stop", {
              stopColor: "#B47A1A"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("stop", {
              offset: "0.465234",
              stopColor: "#FADD55"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("stop", {
              offset: 1,
              stopColor: "#B47A1A"
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: "zolo-pro-modal-desc",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Get premium resources at ZoloBlocks and save more time with stunning patterns and templates', 'zoloblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
        className: "zolo-pro-modal-btn",
        href: "https://zoloblocks.com/pricing/",
        target: "_blank",
        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upgrade Now', 'zoloblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          fill: "none",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
          })
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProPopup);

/***/ }),

/***/ "./src/template-library/template-loader.js":
/*!*************************************************!*\
  !*** ./src/template-library/template-loader.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inner_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inner-template */ "./src/template-library/inner-template.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const TemplatesLoader = ({
  TABS,
  activeTab,
  setActiveTab,
  searchText,
  setSearchText,
  pullDemos,
  setPullDemos,
  pullNewDemos,
  setIsOpen,
  number,
  setNumber,
  loading,
  handleImportTemplate,
  // specific to items
  type,
  setType,
  categories,
  activeCat,
  setActiveCat,
  allItems,
  items,
  setItems,
  tags,
  activeTag,
  setActiveTag,
  sortItemsByTag,
  handleItemSortBy,
  itemSortBy,
  // favorites
  favIds,
  handleFavTemplate
}) => {
  let itemText = '';
  switch (activeTab) {
    case 'pages':
      itemText = 'Pages';
      break;
    case 'demos':
      itemText = 'Demos';
      break;
    case 'templates':
      itemText = 'Templates';
      break;
    case 'favorites':
      itemText = 'Favorites Items';
      break;
    default:
      itemText = 'Patterns';
      break;
  }
  const categoryTypes = ['demos_category', 'templates_category', 'pages_category', 'patterns_category'];
  // const al
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "categories",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "demo-made-button",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "demo-made-btn made-zoloblocks-btn",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('hand craft', 'zoloblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          className: "demo-made-btn made-ai-btn",
          title: "upcoming",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              d: "M14.0712 9.69993L14.9982 7.55057C15.152 7.19386 15.6539 7.19843 15.8014 7.55789L16.6354 9.59063C17.172 10.8987 18.2031 11.9386 19.5112 12.4441C20.2436 12.7271 20.9451 12.9933 21.726 13.3027C22.097 13.4496 22.0896 13.979 21.716 14.1188L19.6811 14.8802C18.2774 15.4055 17.1629 16.513 16.619 17.9233L15.8161 20.0053C15.6715 20.3804 15.1465 20.3798 15.0025 20.0045L14.2087 17.9342C13.6895 16.58 12.6432 15.5009 11.3145 14.9493L9.33125 14.1259C8.97253 13.977 8.96964 13.4642 9.32666 13.3112L11.3146 12.4589C12.5487 11.9299 13.5353 10.9424 14.0712 9.69993Z",
              fill: "black"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              d: "M6.01488 3.07497L6.36536 2.26453C6.51939 1.90834 7.02058 1.91291 7.16823 2.27186L7.45362 2.96564C7.9915 4.2732 9.02484 5.3084 10.3342 5.81066C10.5983 5.91198 10.8636 6.01393 11.14 6.12187C11.512 6.26717 11.505 6.79641 11.1309 6.93603L10.5019 7.17075C9.09773 7.69476 7.98233 8.80125 7.43724 10.2109L7.18294 10.8686C7.0381 11.2431 6.51378 11.2426 6.36966 10.8678L6.11046 10.1936C5.59 8.83976 4.54261 7.76153 3.21341 7.21116L2.56601 6.9431C2.20678 6.79436 2.20389 6.28094 2.56142 6.12807L3.25573 5.83122C4.49031 5.30336 5.47779 4.31692 6.01488 3.07497Z",
              fill: "black"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              d: "M4.71182 15.9861L4.7511 15.8956C4.88762 15.5812 5.33013 15.5852 5.461 15.9021C5.93846 17.0583 6.85588 17.9676 8.01378 18.4132L8.10773 18.4495C8.42754 18.573 8.4217 19.0269 8.10037 19.1463C6.89622 19.5939 5.93558 20.5497 5.46676 21.7574C5.34152 22.08 4.88724 22.0809 4.76262 21.7581C4.30772 20.5795 3.39184 19.6358 2.2334 19.158C1.91983 19.0287 1.92376 18.5778 2.23586 18.4449C3.33693 17.976 4.23152 17.0924 4.71182 15.9861Z",
              fill: "black"
            })]
          }), "ai", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('upcoming', 'zoloblocks')
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "demo-title-proFree-wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "category-title",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Categories', 'zoloblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "demo-proFree-btn",
          children: [type !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              className: "demo-pro-free-reset",
              onClick: () => {
                setType('');
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                className: "w-6 h-6 text-gray-800 dark:text-white",
                "aria-hidden": "true",
                width: 24,
                height: 24,
                fill: "none",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "demo-free-btn",
            onClick: () => {
              setType('free');
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('free', 'zoloblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "demo-pro-btn",
            onClick: () => {
              setType('pro');
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('pro', 'zoloblocks')
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "category-list",
        children: categories && categories?.length > 0 && activeTab !== 'favorites' && categories?.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('single-category', {
            active: activeCat === category?.value
          }),
          onClick: () => setActiveCat(category?.value),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "single-category-text",
            children: category?.label
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "single-category-count",
            children: allItems && (category?.value === 'all' ? allItems?.length : allItems?.filter(template => categoryTypes.some(type => template[type]?.includes(category.label)))?.length)
          })]
        }, category?.value))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "demos-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "zolo-dm-head",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "logo-area",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.6827 10.8669L18.9688 7.58074L18.9405 7.55241C20.7819 8.94051 22 11.0085 22 13.4448C22 15.7677 21.1785 18.204 19.5637 19.6771C17.9207 21.1785 15.9093 21.915 13.5014 21.915L6.64589 21.9433H2V14.1246L14.1813 2H20.9235L6.36261 16.3343H13.5297C14.4079 16.3343 15.1728 16.0227 15.7677 15.4278C16.3909 14.8045 16.7592 14.0113 16.7592 13.0765C16.7592 12.2833 16.1643 11.4051 15.6827 10.8669ZM2.02869 10.3003V2H10.3573L2.02869 10.3003Z",
              fill: "#2667FF"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "logo-text",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Template Library', 'zoloblocks')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "tabs-area",
          children: TABS && TABS.map(tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('single-tab', {
              active: activeTab === tab.value
            }, {
              fav: tab.value === 'favorites'
            }),
            onClick: () => setActiveTab(tab.value),
            children: tab.label
          }, tab.value))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "search-close-area",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "search",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              type: "search",
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search', 'zoloblocks'),
              value: searchText,
              onChange: e => setSearchText(e.target.value)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "sync-btn",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
              text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sync Demos', 'zoloblocks'),
              placement: "top",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                className: "sync-button",
                onClick: () => {
                  setPullDemos(!pullDemos);
                  pullNewDemos();
                  setSearchText('');
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                  className: "w-6 h-6 text-gray-800 dark:text-white",
                  "aria-hidden": "true",
                  width: "24",
                  height: "24",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                  })
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "close-btn",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onClick: () => setIsOpen(false),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                viewBox: "0 0 24 24",
                width: 24,
                height: 24,
                color: '#000000',
                fill: 'none',
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  d: "M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              })
            })
          })]
        })]
      }), items && items.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "zolo-secondary-head",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "secondary-header-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "secondary-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sort By :', 'zoloblocks'),
              options: [{
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Newest', 'zoloblocks'),
                value: 'newest'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Oldest', 'zoloblocks'),
                value: 'oldest'
              }],
              onChange: v => {
                handleItemSortBy(v);
              },
              value: itemSortBy
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "secondary-item zolo-tp-tags-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Popular Tags :', 'zoloblocks'),
              className: "zolo-tags",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "tags-wrap",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "tags-btn-wrap",
                  children: tags && tags.length > 0 && tags.map(tag => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('single-tag', `${activeTag === tag ? 'active' : ''}`),
                    onClick: () => sortItemsByTag(tag),
                    children:
                    //make the first letter uppercase of each word in the tag
                    tag.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                  }, tag))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('clear-tag', `${activeTag !== '' ? 'active' : ''}`),
                  onClick: () => {
                    setActiveTag('');
                    setItems(allItems);
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                    width: "64px",
                    height: "64px",
                    viewBox: "0 0 21 21",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "#2483ff",
                    stroke: "#2483ff",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("g", {
                      id: "SVGRepo_bgCarrier",
                      strokeWidth: 0
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("g", {
                      id: "SVGRepo_tracerCarrier",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("g", {
                      id: "SVGRepo_iconCarrier",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        stroke: "#000000",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        transform: "matrix(0 1 1 0 2.5 2.5)",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                          d: "m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                          d: "m4 1v4h-4",
                          transform: "matrix(1 0 0 -1 0 6)"
                        })]
                      })
                    })]
                  })
                })]
              })
            })
          })]
        })
      }), items && items.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inner_template__WEBPACK_IMPORTED_MODULE_3__["default"], {
        templates: items.length > number ? items.slice(0, number) : items,
        handleImportTemplate: handleImportTemplate,
        favIds: favIds,
        handleFavTemplate: handleFavTemplate
      }), items && items?.length > number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "load-more-btn-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "load-more-btn",
          onClick: () => {
            setNumber(number + 20);
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Load More', 'zoloblocks')
        })
      }), items?.length === 0 && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "no-found-item",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`No ${itemText} found`, 'zoloblocks')
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplatesLoader);

/***/ }),

/***/ "./src/template-library/library.scss":
/*!*******************************************!*\
  !*** ./src/template-library/library.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/template-library/page-templates.scss":
/*!**************************************************!*\
  !*** ./src/template-library/page-templates.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/template-library/preloader.scss":
/*!*********************************************!*\
  !*** ./src/template-library/preloader.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

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

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["richText"];

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
/*!***************************************!*\
  !*** ./src/template-library/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _library_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./library.scss */ "./src/template-library/library.scss");
/* harmony import */ var _page_templates_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-templates.scss */ "./src/template-library/page-templates.scss");
/* harmony import */ var _page_templates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-templates */ "./src/template-library/page-templates/index.js");
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./preloader */ "./src/template-library/preloader.js");
/* harmony import */ var _template_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./template-loader */ "./src/template-library/template-loader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);







 // ?? todo: remove if @wordpress/element is updated

/**
 * Template Library Style
 */



/**
 * Internal dependencies
 */




/**
 * Constants
 */

const TABS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Patterns', 'zoloblocks'),
  value: 'patterns'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Templates', 'zoloblocks'),
  value: 'templates'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Pages', 'zoloblocks'),
  value: 'pages'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Demos', 'zoloblocks'),
  value: 'demos'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Favorites', 'zoloblocks'),
  value: 'favorites'
}];

/**
 * ZoloBlocks Template Library Button
 */
function ZoloBlocksTemplateLibraryButton() {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [allTemplates, setAllTemplates] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [pullDemos, setPullDemos] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('patterns');
  const [searchText, setSearchText] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [number, setNumber] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(20);
  const [total, setTotal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const [currentPostType, setCurrentPostType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(wp.data.select('core/editor').getCurrentPostType());

  /**
   * =====
   * Page Templates: Templates (Pro, Free)
   * =====
   */
  const [allPageTemplates, setAllPageTemplates] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [pageTemplates, setPageTemplates] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [pageTemplatesType, setPageTemplatesType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [pageTemplateCategories, setPageTemplateCategories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [activePageTemplateCat, setActivePageTemplateCat] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('all');
  const {
    isPageEmpty
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getBlocks
    } = select('core/block-editor');
    const blocks = getBlocks();
    let isPageEmpty = false;
    if (blocks.length === 0) {
      isPageEmpty = true;
    }
    if (blocks.length == 1) {
      const firstBlock = blocks[0];
      if (firstBlock.name === 'core/paragraph' && (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3__.getTextContent)(firstBlock.attributes.content).length === 0) {
        isPageEmpty = true;
      }
    }
    return {
      isPageEmpty
    };
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: '/zolo/v1/page-templates',
      method: 'GET'
    }).then(response => {
      if (!response) {
        return;
      }
      const {
        data
      } = response;
      if (!data) {
        return;
      }

      // convert object to array
      const allAvailablePagesTemplates = Object.entries(data).map(([key, value]) => {
        return {
          title: key,
          pages: value
        };
      });
      setAllPageTemplates(allAvailablePagesTemplates);

      // set page template categories
      const pageTemplateCategories = allAvailablePagesTemplates.map(template => template.title);
      const sortedPageTemplateCategories = pageTemplateCategories.sort((a, b) => a.localeCompare(b));
      const pageTemplateCategoriesArray = sortedPageTemplateCategories.map(category => ({
        label: category,
        value: category
      }));
      pageTemplateCategoriesArray.unshift({
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('All', 'zoloblocks'),
        value: 'all'
      });
      setPageTemplateCategories(pageTemplateCategoriesArray);

      // set page templates
      setPageTemplates(allAvailablePagesTemplates);
    });
  }, []);

  // filter page templates based on category
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const filteredPageTemplates = allPageTemplates?.filter(template => {
      if (activePageTemplateCat === 'all') {
        return true;
      } else {
        return template.title === activePageTemplateCat;
      }
    });
    setPageTemplates(filteredPageTemplates);
  }, [activePageTemplateCat]); // eslint-disable

  // filter page templates based on page template type
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const filteredPageTemplates = allPageTemplates?.filter(template => {
      const pages = template?.pages;
      if (pageTemplatesType === 'free') {
        return pages && pages.length > 0 && pages.some(page => page?.status === 'free');
      } else if (pageTemplatesType === 'pro') {
        return pages && pages.length > 0 && pages.some(page => page?.status === 'pro');
      } else {
        return true;
      }
    });
    setPageTemplates(filteredPageTemplates);
  }, [pageTemplatesType]); // eslint-disable

  /**
   * =====
   * Patterns Type: Patterns (Pro, Free)
   *
   * 1. Fetch all patterns
   * 2. Filter by Patterns Type
   * 3. Filter by Category
   */
  const [allPatterns, setAllPatterns] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [patterns, setPatterns] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [patternsType, setPatternsType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [patternCategories, setPatternCategories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [activePatternCat, setActivePatternCat] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('all');
  const [patternTags, setPatternTags] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [activePatternTag, setActivePatternTag] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [patternSortBy, setPatternSortBy] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('newest');

  // Filter by Patterns Type
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const filteredPatterns = allPatterns?.filter(template => {
      if (patternsType === 'free') {
        return template?.status === 'free';
      } else if (patternsType === 'pro') {
        return template?.status === 'pro';
      } else {
        return true;
      }
    });
    setPatterns(filteredPatterns);
  }, [patternsType]); // eslint-disable-line

  // Filter by Pattern Category
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // filter patterns based on category
    const filteredPatterns = allPatterns?.filter(template => {
      if (activePatternCat === 'all') {
        return true;
      } else {
        return template.patterns_category.includes(activePatternCat);
      }
    });
    setPatterns(filteredPatterns);
  }, [activePatternCat]); // eslint-disable-line

  // Filter by Pattern Tags
  const sortPatternsByTag = tag => {
    setActivePatternTag(tag);
    const filteredPatterns = allPatterns?.filter(template => template.tags.includes(tag));
    setPatterns(filteredPatterns);
  };

  // Sorting Patterns
  const handlePatternSortBy = value => {
    setPatternSortBy(value);
    const sortedPatterns = allPatterns?.sort((a, b) => {
      if (value === 'newest') {
        return new Date(b.created) - new Date(a.created);
      } else if (value === 'oldest') {
        return new Date(a.created) - new Date(b.created);
      }
    });
    setPatterns([...sortedPatterns]); // update the state
  };

  /**
   * =====
   * Templates Type: Pages (Pro, Free)
   *
   * 1. Fetch all pages
   * 2. Filter by Pages Type
   * 3. Filter by Category
   * =====
   */
  const [allPages, setAllPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [pages, setPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [pagesType, setPagesType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [pageCategories, setPageCategories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [activePageCat, setActivePageCat] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('all');
  const [pageTags, setPageTags] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [activePageTag, setActivePageTag] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [pageSortBy, setPageSortBy] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('newest');

  // Filter by Pages Type
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const filteredPages = allPages?.filter(template => {
      if (pagesType === 'free') {
        return template?.status === 'free';
      } else if (pagesType === 'pro') {
        return template?.status === 'pro';
      } else {
        return true;
      }
    });
    setPages(filteredPages.slice(0, number));
    setTotal(filteredPages.length);
  }, [pagesType]); // eslint-disable-line

  // Filter by Category
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // filter patterns based on category
    const filteredPages = allPages?.filter(template => {
      if (activePageCat === 'all') {
        return true;
      } else {
        return template.pages_category.includes(activePageCat);
      }
    });
    setPages(filteredPages.slice(0, number));
    setTotal(filteredPages.length);
  }, [activePageCat]); // eslint-disable-line

  // Filter by Tags
  const sortPagesByTag = tag => {
    setActivePageTag(tag);
    const filteredPages = allPages?.filter(template => template.tags.includes(tag));
    setPages(filteredPages);
  };

  // Sorting Pages
  const handlePageSortBy = value => {
    setPageSortBy(value);
    const sortedPages = allPages?.sort((a, b) => {
      if (value === 'newest') {
        return new Date(b.created) - new Date(a.created);
      } else if (value === 'oldest') {
        return new Date(a.created) - new Date(b.created);
      }
    });
    setPages([...sortedPages]); // update the state
  };

  /**
   * =====
   * Templates Type: Demos (Pro, Free)
   *
   * 1. Fetch all demos
   * 2. Filter by Demos Type
   * 3. Filter by Category
   * =====
   */
  const [allDemos, setAllDemos] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [demos, setDemos] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [demosType, setDemosType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [demoCategories, setDemoCategories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [activeDemoCat, setActiveDemoCat] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('all');
  const [demoTags, setDemoTags] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [activeDemoTag, setActiveDemoTag] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [demoSortBy, setDemoSortBy] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('newest');

  // Filter by Demos Type
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const filteredDemos = allDemos?.filter(template => {
      if (demosType === 'free') {
        return template?.status === 'free';
      } else if (demosType === 'pro') {
        return template?.status === 'pro';
      } else {
        return true;
      }
    });
    setDemos(filteredDemos.slice(0, number));
    setTotal(filteredDemos.length);
  }, [demosType]); // eslint-disable-line

  // Filter by Category
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // filter patterns based on category
    const filteredDemos = allDemos?.filter(template => {
      if (activeDemoCat === 'all') {
        return true;
      } else {
        return template.demos_category.includes(activeDemoCat);
      }
    });
    setDemos(filteredDemos.slice(0, number));
    setTotal(filteredDemos.length);
  }, [activeDemoCat]); // eslint-disable-line

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const toolbar = document.querySelector('.editor-header__toolbar, .edit-post-header__toolbar');
    const libraryButton = document.querySelector('.zoloblocks-template-library-button');
    if (toolbar && !libraryButton && currentPostType !== 'zolo-popup') {
      renderButton(toolbar);
    }
    if (libraryButton) {
      setTimeout(() => {
        if (isPageEmpty) {
          libraryButton.classList.add('empty-page');
        } else {
          libraryButton.classList.remove('empty-page');
        }
      }, 1000);
    }
  }, [currentPostType, isPageEmpty]);

  // Filter by Tags
  const sortDemosByTag = tag => {
    setActiveDemoTag(tag);
    const filteredDemos = allDemos?.filter(template => template.tags.includes(tag));
    setDemos(filteredDemos);
  };

  // Sorting Demos
  const handleDemoSortBy = value => {
    setDemoSortBy(value);
    const sortedDemos = allDemos?.sort((a, b) => {
      if (value === 'newest') {
        return new Date(b.created) - new Date(a.created);
      } else if (value === 'oldest') {
        return new Date(a.created) - new Date(b.created);
      }
    });
    setDemos([...sortedDemos]); // update the state
  };

  // Favorite Templates
  const [favIds, setFavIds] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [allFavItems, setAllFavItems] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [favItems, setFavItems] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [favType, setFavType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [favCategories, setFavCategories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [activeFavCat, setActiveFavCat] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('all');
  const [favTags, setFavTags] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [activeFavTag, setActiveFavTag] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [favSortBy, setFavSortBy] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('newest');
  const [favStatus, setFavStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);

  // fetch settings
  const fetchSettings = async options => {
    try {
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(options);
      return response;
    } catch (error) {
      console.error('API Fetch Error:', error);
      throw error;
    }
  };

  // favorite templates
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: '/zolo/v1/favorites',
      method: 'GET'
    }).then(response => {
      if (!response) {
        return;
      }
      const favIds = Object.values(response); // get the values
      setFavIds(favIds);
    });
  }, []);

  // save favorite templates to database
  const handleFavTemplate = templateID => {
    // setLoading(true);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: '/zolo/v1/favorites',
      method: 'POST',
      data: {
        fav_id: templateID,
        zolo_nonce: zoloParams?.zolo_nonce
      }
    }).then(response => {
      if (!response) {
        return;
      }
      const favIds = Object.values(response); // get the values
      setFavIds(favIds);
      setFavStatus(!favStatus);
    });
  };

  // Filter by Demos Type
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const filteredFav = allFavItems?.filter(template => {
      if (favType === 'free') {
        return template?.status === 'free';
      } else if (favType === 'pro') {
        return template?.status === 'pro';
      } else {
        return true;
      }
    });
    setFavItems(filteredFav?.slice(0, number));
    setTotal(filteredFav?.length);
  }, [favType]); // eslint-disable-line

  // Filter by Category
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // filter patterns based on category
    const filteredFavs = allFavItems?.filter(template => {
      if (activeFavCat === 'all') {
        return true;
      } else {
        return template.categories.includes(activeFavCat);
      }
    });
    setFavItems(filteredFavs?.slice(0, number));
    setTotal(filteredFavs?.length);
  }, [activeFavCat]); // eslint-disable-line

  // Filter by Tags
  const sortFavByTag = tag => {
    setActiveFavTag(tag);
    const filteredFavs = allFavItems?.filter(template => template.tags.includes(tag));
    setFavItems(filteredFavs);
  };

  // Sorting Demos
  const handleFavSortBy = value => {
    setFavSortBy(value);
    const sortedFavs = allFavItems?.sort((a, b) => {
      if (value === 'newest') {
        return new Date(b.created) - new Date(a.created);
      } else if (value === 'oldest') {
        return new Date(a.created) - new Date(b.created);
      }
    });
    setFavItems([...sortedFavs]); // update the state
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (favIds?.length > 0) {
      const allFavItemsData = allTemplates?.filter(template => favIds?.includes(template.id));
      setAllFavItems(allFavItemsData);
      setFavItems(allFavItemsData);

      // set favorite categories
      const favCategories = allFavItemsData?.map(template => template.categories);
      const uniqueFavCategories = [...new Set(favCategories?.flat())];
      const sortedFavCategories = uniqueFavCategories.sort((a, b) => a.localeCompare(b));
      const favCategoriesArray = sortedFavCategories.map(category => ({
        label: category,
        value: category
      }));
      const index = favCategoriesArray.findIndex(category => category.value === 'Demos');
      if (index > -1) {
        favCategoriesArray.splice(index, 1);
      }
      favCategoriesArray.unshift({
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('All', 'zoloblocks'),
        value: 'all'
      });
      setFavCategories(favCategoriesArray);

      // favorite tags
      const allFavTags = allFavItemsData?.map(template => template.tags);
      // find top 5 tags based on frequency
      const favTags = allFavTags?.flat().reduce((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      }, {});
      const sortedFavTags = Object.keys(favTags).sort((a, b) => favTags[b] - favTags[a]).slice(0, 10);
      setFavTags(sortedFavTags);
    } else {
      setAllFavItems([]);
      setFavItems([]);
      setFavCategories([]);
      setFavTags([]);
    }
  }, [favIds, allTemplates, favStatus]);

  // fetch templates
  const fetchTemplates = async () => {
    setLoading(true);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: '/zolo/v1/templates',
      method: 'GET'
    }).then(response => {
      const {
        data
      } = response;
      console.log({
        response
      });
      if (!data) {
        console.log('No data found');
        setLoading(false);
        return;
      }
      setAllTemplates(data);

      // set all pages
      const pages = data?.filter(template => template.template_type === 'pages');
      setAllPages(pages);
      setPages(pages);

      // set page categories
      const pageCategories = pages?.filter(template => template.template_type === 'pages').map(template => template.pages_category);
      const uniquePageCategories = [...new Set(pageCategories?.flat())];
      const sortedPageCategories = uniquePageCategories.sort((a, b) => a.localeCompare(b));
      const pageCategoriesArray = sortedPageCategories.map(category => ({
        label: category,
        value: category
      }));
      pageCategoriesArray.unshift({
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('All', 'zoloblocks'),
        value: 'all'
      });
      setPageCategories(pageCategoriesArray);

      // page tags
      const allPageTags = pages?.map(template => template.tags);
      // find top 5 tags based on frequency
      const pageTags = allPageTags?.flat().reduce((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      }, {});
      const sortedPageTags = Object.keys(pageTags).sort((a, b) => pageTags[b] - pageTags[a]).slice(0, 10);
      setPageTags(sortedPageTags);

      // stop loading
      setLoading(false);
    });
  };

  // fetch demo templates
  const fetchDemoTemplates = async () => {
    setLoading(true);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: '/zolo/v1/demos',
      method: 'GET'
    }).then(response => {
      const {
        data
      } = response;
      if (!data) {
        console.log('No data found');
        setLoading(false);
        return;
      }

      // add demos to all templates
      setAllTemplates(prev => [...prev, ...data]);

      // set all patterns
      const patterns = data?.filter(template => template.template_type === 'patterns');
      setAllPatterns(patterns);
      setPatterns(patterns);

      // set pattern categories
      const patternCategories = patterns?.filter(template => template.template_type === 'patterns').map(template => template.patterns_category);
      const uniquePatternCategories = [...new Set(patternCategories?.flat())];
      const sortedPatternCategories = uniquePatternCategories.sort((a, b) => a.localeCompare(b));
      const patternCategoriesArray = sortedPatternCategories.map(category => ({
        label: category,
        value: category
      }));
      patternCategoriesArray.unshift({
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('All', 'zoloblocks'),
        value: 'all'
      });
      setPatternCategories(patternCategoriesArray);

      // patterns tags
      const allPatternTags = patterns?.map(template => template.tags);
      // find top 5 tags based on frequency
      const patternTags = allPatternTags?.flat().reduce((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      }, {});
      const sortedPatternTags = Object.keys(patternTags).sort((a, b) => patternTags[b] - patternTags[a]).slice(0, 10);
      setPatternTags(sortedPatternTags);

      // set all demos
      const demos = data?.filter(template => template.template_type === 'demos');
      setAllDemos(demos);
      setDemos(demos);

      // set demo categories
      const demoCategories = demos?.filter(template => template.template_type === 'demos').map(template => template.demos_category);
      const uniqueDemoCategories = [...new Set(demoCategories?.flat())];
      const sortedDemoCategories = uniqueDemoCategories.sort((a, b) => a.localeCompare(b));
      const demoCategoriesArray = sortedDemoCategories.map(category => ({
        label: category,
        value: category
      }));
      demoCategoriesArray.unshift({
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('All', 'zoloblocks'),
        value: 'all'
      });
      setDemoCategories(demoCategoriesArray);

      // demo tags
      const allDemoTags = demos?.map(template => template.tags);
      // find top 5 tags based on frequency
      const demoTags = allDemoTags?.flat().reduce((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      }, {});
      const sortedDemoTags = Object.keys(demoTags).sort((a, b) => demoTags[b] - demoTags[a]).slice(0, 10);
      setDemoTags(sortedDemoTags);
      // stop loading
      setLoading(false);
    });
  };

  // pull new demos
  const pullNewDemos = () => {
    setLoading(true);
    jQuery.ajax({
      url: zoloParams?.ajaxurl,
      type: 'POST',
      nonce: zoloParams?.nonce,
      data: {
        action: 'zolo_demo_pull'
      },
      success: function (response) {
        if (response.success) {
          fetchTemplates();
          setLoading(false);
        } else {
          console.log('Error:', response.data);
        }
      },
      error: function (error) {
        console.log('Error:', error);
      }
    });
    jQuery.ajax({
      url: zoloParams?.ajaxurl,
      type: 'POST',
      nonce: zoloParams?.nonce,
      data: {
        action: 'zolo_demo_template_pull'
      },
      success: function (response) {
        if (response.success) {
          fetchDemoTemplates();
          setLoading(false);
        } else {
          console.log('Error:', response.data);
        }
      },
      error: function (error) {
        console.log('Error:', error);
      }
    });
  };

  /**
   * Fetch Templates
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // fetch templates
    fetchTemplates();

    // fetch demo templates
    fetchDemoTemplates();
  }, [pullDemos]);

  // filter templates based on search text
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (searchText !== '' && activeTab === 'patterns') {
      const filteredPatterns = allPatterns?.filter(template => {
        return template.title.toLowerCase().includes(searchText.toLowerCase());
      });
      setPatterns(filteredPatterns);
    } else {
      setPatterns(allPatterns); // Reset to all patterns if no search text
    }
    if (searchText !== '' && activeTab === 'pages') {
      const filteredPages = allPages?.filter(template => {
        return template.title.toLowerCase().includes(searchText.toLowerCase());
      });
      setPages(filteredPages);
    } else {
      setPages(allPages); // Reset to all pages if no search text
    }
    if (searchText !== '' && activeTab === 'demos') {
      const filteredDemos = allDemos?.filter(template => {
        return template.title.toLowerCase().includes(searchText.toLowerCase());
      });
      setDemos(filteredDemos);
    } else {
      setDemos(allDemos); // Reset to all demos if no search text
    }
    if (searchText !== '' && activeTab === 'favorites') {
      const filteredFavs = allFavItems?.filter(template => {
        return template.title.toLowerCase().includes(searchText.toLowerCase());
      });
      setFavItems(filteredFavs);
    } else {
      setFavItems(allFavItems); // Reset to all favorites if no search text
    }
    if (searchText !== '' && activeTab === 'templates') {
      const filteredPageTemplates = allPageTemplates?.filter(template => {
        return template.title.toLowerCase().includes(searchText.toLowerCase());
      });
      setPageTemplates(filteredPageTemplates);
    } else {
      setPageTemplates(allPageTemplates); // Reset to all page templates if no search text
    }
  }, [searchText, activeTab, allPatterns, number, allDemos]); // eslint-disable-line

  /**
   * Handle Import Template
   * @param {string} jsonFile
   */
  const handleImportTemplate = jsonFile => {
    setLoading(true);
    jQuery.ajax({
      url: zoloParams?.ajaxurl,
      type: 'POST',
      nonce: zoloParams?.nonce,
      data: {
        action: 'zolo_demo_import',
        security: zoloParams?.zolo_nonce,
        json_file_url: jsonFile
      },
      success: function (response) {
        if (response.success) {
          const {
            data
          } = response;
          if (data) {
            const {
              content
            } = data;
            const blocks = wp.blocks.parse(content);
            const selectedBlock = wp.data.select('core/block-editor').getSelectedBlock();
            if (selectedBlock && selectedBlock.name === 'core/paragraph') {
              wp.data.dispatch('core/block-editor').replaceBlocks(selectedBlock.clientId, blocks);
            } else {
              wp.data.dispatch('core/block-editor').insertBlocks(blocks, 0);
            }
            setLoading(false);
            setIsOpen(false);
          }
        } else {
          console.log('Error:', response.data);
        }
      },
      error: function (error) {
        console.log('Error:', error);
      }
    });
  };
  const LibraryButton = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setIsOpen(true),
    className: "zolo-library-open-button",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4 4H9.22856L4.02857 9.27618L4 4ZM15.9048 11.1047L18 8.99999V9.00951C19.2953 10.1524 20 11.6476 20 13.2857C20 15.2476 19.2667 17.1333 18.0953 18.2095C16.7715 19.4 15.2 19.9809 13.2858 19.9809L4.02865 20V14.0857L14.1048 4H18.6953L6.22864 16.3333H13.2858C14.2191 16.3333 15.0286 16 15.6191 15.3809C16.2762 14.6952 16.6191 13.8666 16.6191 12.9619C16.6191 12.2476 16.2381 11.5619 15.9048 11.1047Z",
        fill: "white"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
      className: "zolo-template-label",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Template Library', 'zoloblocks')
    })]
  });
  const renderButton = selector => {
    const libraryButton = document.createElement('div');
    libraryButton.classList.add('zoloblocks-template-library-button');
    selector.append(libraryButton);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_7__.createRoot)(libraryButton).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(LibraryButton, {}));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
    className: "zolo-demos-modal-wrapper",
    children: isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      className: "zolo-demos-modal",
      onRequestClose: () => setIsOpen(false),
      shouldCloseOnClickOutside: true,
      shouldCloseOnEsc: true,
      isOpen: isOpen,
      isDismissible: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "zolo-dm-body",
        children: [
        // Patterns
        activeTab === 'patterns' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_template_loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
          TABS: TABS,
          activeTab: activeTab,
          setActiveTab: setActiveTab,
          searchText: searchText,
          setSearchText: setSearchText,
          pullDemos: pullDemos,
          setPullDemos: setPullDemos,
          pullNewDemos: pullNewDemos,
          setIsOpen: setIsOpen,
          number: number,
          setNumber: setNumber,
          loading: loading,
          handleImportTemplate: handleImportTemplate,
          type: patternsType,
          setType: setPatternsType,
          categories: patternCategories,
          activeCat: activePatternCat,
          setActiveCat: setActivePatternCat,
          allItems: allPatterns,
          items: patterns,
          setItems: setPatterns,
          tags: patternTags,
          activeTag: activePatternTag,
          setActiveTag: setActivePatternTag,
          sortItemsByTag: sortPatternsByTag,
          handleItemSortBy: handlePatternSortBy,
          itemSortBy: patternSortBy
          // fav templates
          ,
          favIds: favIds,
          handleFavTemplate: handleFavTemplate
        }),
        // Demos
        activeTab === 'demos' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_template_loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
          TABS: TABS,
          activeTab: activeTab,
          setActiveTab: setActiveTab,
          searchText: searchText,
          setSearchText: setSearchText,
          pullDemos: pullDemos,
          setPullDemos: setPullDemos,
          pullNewDemos: pullNewDemos,
          setIsOpen: setIsOpen,
          number: number,
          setNumber: setNumber,
          loading: loading,
          handleImportTemplate: handleImportTemplate,
          type: demosType,
          setType: setDemosType,
          categories: demoCategories,
          activeCat: activeDemoCat,
          setActiveCat: setActiveDemoCat,
          allItems: allDemos,
          items: demos,
          setItems: setDemos,
          tags: demoTags,
          activeTag: activeDemoTag,
          setActiveTag: setActiveDemoTag,
          sortItemsByTag: sortDemosByTag,
          handleItemSortBy: handleDemoSortBy,
          itemSortBy: demoSortBy
          // fav templates
          ,
          favIds: favIds,
          handleFavTemplate: handleFavTemplate
        }), activeTab === 'templates' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_page_templates__WEBPACK_IMPORTED_MODULE_10__["default"], {
          TABS: TABS,
          activeTab: activeTab,
          setActiveTab: setActiveTab,
          searchText: searchText,
          setSearchText: setSearchText,
          pullDemos: pullDemos,
          setPullDemos: setPullDemos,
          pullNewDemos: pullNewDemos,
          setIsOpen: setIsOpen,
          number: number,
          setNumber: setNumber,
          loading: loading,
          handleImportTemplate: handleImportTemplate,
          type: pageTemplatesType,
          setType: setPageTemplatesType,
          categories: pageTemplateCategories,
          activeCat: activePageTemplateCat,
          setActiveCat: setActivePageTemplateCat,
          allItems: allPageTemplates,
          items: pageTemplates,
          setItems: setPageTemplates
          // fav templates
          ,
          favIds: favIds,
          handleFavTemplate: handleFavTemplate
        }), activeTab === 'pages' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_template_loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
          TABS: TABS,
          activeTab: activeTab,
          setActiveTab: setActiveTab,
          searchText: searchText,
          setSearchText: setSearchText,
          pullDemos: pullDemos,
          setPullDemos: setPullDemos,
          pullNewDemos: pullNewDemos,
          setIsOpen: setIsOpen,
          number: number,
          setNumber: setNumber,
          loading: loading,
          handleImportTemplate: handleImportTemplate,
          type: pagesType,
          setType: setPagesType,
          categories: pageCategories,
          activeCat: activePageCat,
          setActiveCat: setActivePageCat,
          allItems: allPages,
          items: pages,
          setItems: setPages,
          tags: pageTags,
          activeTag: activePageTag,
          setActiveTag: setActivePageTag,
          sortItemsByTag: sortPagesByTag,
          handleItemSortBy: handlePageSortBy,
          itemSortBy: pageSortBy
          // fav templates
          ,
          favIds: favIds,
          handleFavTemplate: handleFavTemplate
        }),
        // favorites
        activeTab === 'favorites' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_template_loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
          TABS: TABS,
          activeTab: activeTab,
          setActiveTab: setActiveTab,
          searchText: searchText,
          setSearchText: setSearchText,
          pullDemos: pullDemos,
          setPullDemos: setPullDemos,
          pullNewDemos: pullNewDemos,
          setIsOpen: setIsOpen,
          number: number,
          setNumber: setNumber,
          loading: loading,
          handleImportTemplate: handleImportTemplate,
          type: favType,
          setType: setFavType,
          categories: favCategories,
          activeCat: activeFavCat,
          setActiveCat: setActiveFavCat,
          allItems: allFavItems,
          items: favItems,
          setItems: setFavItems,
          tags: favTags,
          activeTag: activeFavTag,
          setActiveTag: setActiveFavTag,
          sortItemsByTag: sortFavByTag,
          handleItemSortBy: handleFavSortBy,
          itemSortBy: favSortBy
          // fav templates
          ,
          favIds: favIds,
          handleFavTemplate: handleFavTemplate
        }), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_preloader__WEBPACK_IMPORTED_MODULE_11__["default"], {})]
      })
    })
  });
}
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__.registerPlugin)('zoloblocks-template-library-button', {
  render: ZoloBlocksTemplateLibraryButton
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map