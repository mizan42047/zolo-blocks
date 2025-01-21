/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "./node_modules/react-compare-slider/dist/index.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/react-compare-slider/dist/index.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactCompareSlider: () => (/* binding */ se),
/* harmony export */   ReactCompareSliderHandle: () => (/* binding */ F),
/* harmony export */   ReactCompareSliderImage: () => (/* binding */ ae),
/* harmony export */   styleFitContainer: () => (/* binding */ G),
/* harmony export */   useReactCompareSliderRef: () => (/* binding */ _e)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client"
;var B=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({transition:e,...t},r)=>{let o={position:"absolute",top:0,left:0,width:"100%",height:"100%",transition:e?`clip-path ${e}`:void 0,userSelect:"none",willChange:"clip-path, transition",KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"};return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...t,style:o,"data-rcs":"clip-item",ref:r})});B.displayName="ContainerClip";var W=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({children:e,disabled:t,portrait:r,position:o,transition:i},m)=>{let u={position:"absolute",top:0,width:r?"100%":void 0,height:r?void 0:"100%",background:"none",border:0,padding:0,pointerEvents:"all",appearance:"none",WebkitAppearance:"none",MozAppearance:"none",outline:0,transform:r?"translate3d(0, -50% ,0)":"translate3d(-50%, 0, 0)",transition:i?`${r?"top":"left"} ${i}`:void 0};return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{ref:m,"aria-label":"Drag to move or focus and use arrow keys","aria-orientation":r?"vertical":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":o,"data-rcs":"handle-container",disabled:t,role:"slider",style:u,children:e})});W.displayName="ThisHandleContainer";var re=({flip:e})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"__rcs-handle-arrow",style:{width:0,height:0,borderTop:"8px solid transparent",borderRight:"10px solid",borderBottom:"8px solid transparent",transform:e?"rotate(180deg)":void 0}}),F=({className:e="__rcs-handle-root",disabled:t,buttonStyle:r,linesStyle:o,portrait:i,style:m,...C})=>{let u={display:"flex",flexDirection:i?"row":"column",placeItems:"center",height:"100%",cursor:t?"not-allowed":i?"ns-resize":"ew-resize",pointerEvents:"none",color:"#fff",...m},E={flexGrow:1,height:i?2:"100%",width:i?"100%":2,backgroundColor:"currentColor",pointerEvents:"auto",boxShadow:"0 0 4px rgba(0,0,0,.5)",...o},y={display:"grid",gridAutoFlow:"column",gap:8,placeContent:"center",flexShrink:0,width:56,height:56,borderRadius:"50%",borderStyle:"solid",borderWidth:2,pointerEvents:"auto",backdropFilter:"blur(7px)",WebkitBackdropFilter:"blur(7px)",backgroundColor:"rgba(0, 0, 0, 0.125)",boxShadow:"0 0 4px rgba(0,0,0,.35)",transform:i?"rotate(90deg)":void 0,...r};return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{...C,className:e,style:u,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"__rcs-handle-line",style:E}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"__rcs-handle-button",style:y,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(re,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(re,{flip:!0})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"__rcs-handle-line",style:E})]})};var $=(i=>(i.ARROW_LEFT="ArrowLeft",i.ARROW_RIGHT="ArrowRight",i.ARROW_UP="ArrowUp",i.ARROW_DOWN="ArrowDown",i))($||{}),G=({boxSizing:e="border-box",objectFit:t="cover",objectPosition:r="center center",...o}={})=>({display:"block",width:"100%",height:"100%",maxWidth:"100%",boxSizing:e,objectFit:t,objectPosition:r,...o}),oe=e=>{let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{t.current=e}),t.current},U=(e,t,r,o)=>{let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{i.current=t},[t]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!(r&&r.addEventListener))return;let m=C=>i.current&&i.current(C);return r.addEventListener(e,m,o),()=>{r.removeEventListener(e,m,o)}},[e,r,o])},Te=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect,ie=(e,t)=>{let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{e.current&&r.current&&r.current.observe(e.current)},[e]);Te(()=>(r.current=new ResizeObserver(([i])=>t(i.contentRect)),o(),()=>{r.current&&r.current.disconnect()}),[t,o])};var I={capture:!1,passive:!0},X={capture:!0,passive:!1},Me=e=>{e.preventDefault(),e.currentTarget.focus()},se=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({boundsPadding:e=0,browsingContext:t=globalThis,changePositionOnHover:r=!1,disabled:o=!1,handle:i,itemOne:m,itemTwo:C,keyboardIncrement:u="5%",onlyHandleDraggable:E=!1,onPositionChange:y,portrait:a=!1,position:g=50,style:le,transition:ce,...pe},de)=>{let p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),j=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(g),[L,q]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[me,x]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),w=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),[ue,fe]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),J=oe(g),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function({x:s,y:c,isOffset:R}){let b=p.current,A=f.current,D=j.current,{width:h,height:S,left:Pe,top:Ee}=b.getBoundingClientRect();if(h===0||S===0)return;let ye=a?R?c-Ee-t.scrollY:c:R?s-Pe-t.scrollX:s,Q=Math.min(Math.max(ye/(a?S:h)*100,0),100),z=a?S/(b.offsetHeight||1):h/(b.offsetWidth||1),Z=e*z/(a?S:h)*100,_=Math.min(Math.max(Q,Z*z),100-Z*z);d.current=Q,A.setAttribute("aria-valuenow",`${Math.round(d.current)}`),A.style.top=a?`${_}%`:"0",A.style.left=a?"0":`${_}%`,D.style.clipPath=a?`inset(${_}% 0 0 0)`:`inset(0 0 0 ${_}%)`,y&&y(d.current)},[e,y,a,t]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let{width:n,height:s}=p.current.getBoundingClientRect(),c=g===J?d.current:g;l({x:n/100*c,y:s/100*c})},[e,g,a,J,l]);let Re=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(n=>{n.preventDefault(),!(o||n.button!==0)&&(l({isOffset:!0,x:n.pageX,y:n.pageY}),q(!0),x(!0))},[o,l]),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(s){l({isOffset:!0,x:s.pageX,y:s.pageY}),x(!1)},[l]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{q(!1),x(!0)},[]),Se=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({width:n,height:s})=>{let{width:c,height:R}=p.current.getBoundingClientRect();l({x:n/100*d.current*c/n,y:s/100*d.current*R/s})},[l]),Ce=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(n=>{if(!Object.values($).includes(n.key))return;n.preventDefault(),x(!0);let{top:s,left:c}=f.current.getBoundingClientRect(),{width:R,height:b}=p.current.getBoundingClientRect(),D=typeof u=="string"?parseFloat(u):u/R*100,h=a?n.key==="ArrowLeft"||n.key==="ArrowDown":n.key==="ArrowRight"||n.key==="ArrowUp",S=Math.min(Math.max(h?d.current+D:d.current-D,0),100);l({x:a?c:R*S/100,y:a?b*S/100:s})},[u,a,l]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{fe(E?f.current:p.current)},[E]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let n=p.current,s=()=>{L||T()};return r&&(n.addEventListener("pointermove",v,I),n.addEventListener("pointerleave",s,I)),()=>{n.removeEventListener("pointermove",v),n.removeEventListener("pointerleave",s)}},[r,v,T,L]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(L&&!w.current&&(t.addEventListener("pointermove",v,I),t.addEventListener("pointerup",T,I),w.current=!0),()=>{w.current&&(t.removeEventListener("pointermove",v),t.removeEventListener("pointerup",T),w.current=!1)}),[v,T,L,t]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(de,()=>({rootContainer:p.current,handleContainer:f.current,setPosition(n){let{width:s,height:c}=p.current.getBoundingClientRect();l({x:s/100*n,y:c/100*n})}}),[l]),ie(p,Se),U("keydown",Ce,f.current,X),U("click",Me,f.current,X),U("pointerdown",Re,ue,X);let ve=i||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(F,{disabled:o,portrait:a}),K=me?ce:void 0,he={position:"relative",display:"flex",overflow:"hidden",cursor:L?a?"ns-resize":"ew-resize":void 0,touchAction:"none",userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",...le};return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{...pe,ref:p,style:he,"data-rcs":"root",children:[m,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(B,{ref:j,transition:K,children:C}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(W,{disabled:o,portrait:a,position:Math.round(d.current),ref:f,transition:K,children:ve})]})});se.displayName="ReactCompareSlider";var ae=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({style:e,...t},r)=>{let o=G(e);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{ref:r,...t,style:o,"data-rcs":"image"})});ae.displayName="ReactCompareSliderImage";var _e=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({rootContainer:null,handleContainer:null,setPosition:()=>console.warn("[react-compare-slider] `setPosition` cannot be used until the component has mounted.")});
//# sourceMappingURL=index.mjs.map

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
/*!**********************************************!*\
  !*** ./src/blocks/image-compare/frontend.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_compare_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-compare-slider */ "./node_modules/react-compare-slider/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



// render on page load

document.addEventListener('DOMContentLoaded', () => {
  const beafsliderItems = document.querySelectorAll('.wp-block-zolo-image-compare');
  function stringToBool(s) {
    return /^(true|1|yes)$/i.test(s);
  }
  if (beafsliderItems.length) {
    beafsliderItems.forEach(item => {
      const beafslider = item.querySelector('.beaf-slider');
      const comparisonOptions = JSON.parse(beafslider.dataset.comparisonoptions);
      const beforeImage = JSON.parse(beafslider.dataset.beforeimage);
      const afterImage = JSON.parse(beafslider.dataset.afterimage);
      const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(item);
      root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_compare_slider__WEBPACK_IMPORTED_MODULE_2__.ReactCompareSlider, {
        changePositionOnHover: comparisonOptions?.slideOnHover,
        portrait: comparisonOptions?.slidePositon === 'vertical_direction' ? true : false,
        disabled: comparisonOptions?.disableslide,
        position: comparisonOptions?.initialPosition,
        onlyHandleDraggable: comparisonOptions?.handleDraggable,
        itemOne: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "image-item-One",
          children: [comparisonOptions?.showLabels && comparisonOptions?.beforeLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: `compare-slider-label compare-slider-label-left ${comparisonOptions?.slidePositon === 'horizontal_direction' ? comparisonOptions?.HorizontalPosition : comparisonOptions?.labelPositons}`,
            children: comparisonOptions?.beforeLabel
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_compare_slider__WEBPACK_IMPORTED_MODULE_2__.ReactCompareSliderImage, {
            src: beforeImage && beforeImage?.url,
            alt: beforeImage?.alt
          })]
        }),
        itemTwo: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "image-item-two",
          children: [comparisonOptions?.showLabels && comparisonOptions?.afterLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: `compare-slider-label compare-slider-label-right ${comparisonOptions?.slidePositon === 'horizontal_direction' ? comparisonOptions?.HorizontalPosition : comparisonOptions?.labelPositons}`,
            children: comparisonOptions?.afterLabel
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_compare_slider__WEBPACK_IMPORTED_MODULE_2__.ReactCompareSliderImage, {
            src: afterImage && afterImage?.url,
            alt: afterImage?.alt
          })]
        })
      }));
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map