/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/extensions/particles/options.js":
/*!*********************************************!*\
  !*** ./src/extensions/particles/options.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   optionFive: () => (/* binding */ optionFive),
/* harmony export */   optionFour: () => (/* binding */ optionFour),
/* harmony export */   optionOne: () => (/* binding */ optionOne),
/* harmony export */   optionSix: () => (/* binding */ optionSix),
/* harmony export */   optionThree: () => (/* binding */ optionThree),
/* harmony export */   optionTwo: () => (/* binding */ optionTwo)
/* harmony export */ });
const optionOne = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 1650
      }
    },
    color: {
      value: '#ff0000'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0,
      random: false,
      anim: {
        enable: false,
        speed: 0.8932849335314796,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 4.008530152163807,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 2000,
      color: '#ffffff',
      opacity: 0.9620472365193137,
      width: 4.489553770423464
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
const optionTwo = {
  particles: {
    number: {
      value: 14,
      density: 1
    },
    color: {
      value: ['#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#6c757d', '#495057', '#343a40']
    },
    shape: {
      type: ['circle']
    },
    opacity: {
      value: 1
    },
    line_linked: {
      enable: false
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: true,
        size_min: 1,
        speed: 1
      }
    },
    move: {
      enable: true,
      direction: 'right',
      out_mode: 'out'
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0
        }
      }
    }
  },
  retina_detect: true
};
const optionThree = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 631.3280775270874
      }
    },
    color: {
      value: ['#77db97', '#833692', '#e4ed2e']
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000'
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 0,
        opacity_min: 0.5,
        sync: true
      }
    },
    line_linked: {
      enable: false
    },
    size: {
      value: 40,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 20,
        sync: true
      }
    },
    move: {
      enable: true,
      speed: 4,
      direction: 'top-right',
      random: true,
      straight: true,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 400,
        size: 5,
        duration: 0.3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: false
};
const optionFour = {
  particles: {
    number: {
      value: 66,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#d5d5d5'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#ffffff'
      },
      polygon: {
        nb_sides: 0
      }
    },
    opacity: {
      value: 0.8522794529628545,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: '#ffffff',
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'bottom',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
const optionFive = {
  particles: {
    line_linked: {
      enable: false
    },
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: ['#ff7fbf', '#ff7fff', '#bf7fff', '#ff7f7f', '#7f7fff', '#7fbfff', '#7fffff', '#7fffbf', '#7fff7f', '#bfff7f', '#ffff7f', '#ffbf7f']
    },
    shape: {
      type: 'edge'
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 50,
      random: true
    },
    move: {
      enable: true,
      line_linked: {
        enable: false
      },
      speed: 4,
      direction: 'top',
      random: false,
      straight: false,
      out_mode: 'out'
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0
        }
      }
    }
  }
};
const optionSix = {
  particles: {
    number: {
      value: 5,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: ['#ff7fbf', '#ff7fff', '#bf7fff', '#ff7f7f', '#7f7fff', '#7fbfff', '#7fffff', '#7fffbf', '#7fff7f', '#bfff7f', '#ffff7f', '#ffbf7f']
    },
    shape: {
      type: 'polygon'
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.2,
        sync: false
      }
    },
    size: {
      value: 150,
      random: true
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'top-left',
      random: false,
      straight: false,
      out_mode: 'out'
    }
  }
};

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
  !*** ./src/extensions/particles/frontend.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./src/extensions/particles/options.js");

document.addEventListener('DOMContentLoaded', function () {
  const zoloParticles = document.querySelectorAll('.zolo-block');
  if (zoloParticles && zoloParticles.length > 0) {
    zoloParticles.forEach(particles => {
      const particlesOptions = particles.dataset.particles;
      if (!particlesOptions) return;
      const particlesData = JSON.parse(particlesOptions);
      // active check for particles
      if (!particlesData.active) {
        return;
      }
      const {
        particlesId,
        preset,
        colors,
        particleOptions
      } = particlesData;
      const {
        shapes,
        direction,
        shapeSize,
        customOptions
      } = particleOptions;
      const color = colors && colors.map(color => color.color);
      function createObject(customOptions) {
        if (!customOptions) {
          return false;
        }
        try {
          let obj = JSON.parse(customOptions);
          return obj;
        } catch (error) {
          return false;
        }
      }
      const mainOptions = {
        ...(preset === 'hover_bubble' && {
          particles: {
            ..._options__WEBPACK_IMPORTED_MODULE_0__.optionOne?.particles,
            color: {
              value: color && color.length > 0 && color[0] !== '' ? color : _options__WEBPACK_IMPORTED_MODULE_0__.optionOne?.particles.color?.value
            },
            size: {
              ..._options__WEBPACK_IMPORTED_MODULE_0__.optionSix?.size,
              value: shapeSize ? shapeSize : _options__WEBPACK_IMPORTED_MODULE_0__.optionOne?.particles.size?.value
            },
            shape: {
              type: shapes != undefined && shapes.length > 0 && shapes[0] !== '' ? shapes : ['circle']
            },
            ...(preset === 'hover_bubble' && {
              move: {
                ..._options__WEBPACK_IMPORTED_MODULE_0__.optionOne?.move,
                direction: direction || 'none'
              }
            })
          }
        }),
        ...(preset === 'hover_bubble' && {
          interactivity: _options__WEBPACK_IMPORTED_MODULE_0__.optionOne?.interactivity
        }),
        // dust_wind
        ...(preset === 'dust_wind' && {
          particles: {
            ..._options__WEBPACK_IMPORTED_MODULE_0__.optionTwo?.particles,
            color: {
              value: color && color.length > 0 && color[0] !== '' ? color : _options__WEBPACK_IMPORTED_MODULE_0__.optionTwo?.particles.color?.value || '#000000'
            },
            size: {
              ..._options__WEBPACK_IMPORTED_MODULE_0__.optionSix?.size,
              value: shapeSize ? shapeSize : _options__WEBPACK_IMPORTED_MODULE_0__.optionTwo?.particles.size?.value
            },
            shape: {
              type: shapes != undefined && shapes.length > 0 && shapes[0] !== '' ? shapes : ['circle']
            },
            move: {
              ..._options__WEBPACK_IMPORTED_MODULE_0__.optionTwo?.move,
              direction: direction || 'none'
            }
          },
          //interactivity
          ...(preset === 'dust_wind' && {
            interactivity: _options__WEBPACK_IMPORTED_MODULE_0__.optionTwo?.interactivity
          })
        }),
        //Flying Bubble
        ...(preset === 'flying_bubble' && {
          particles: {
            ..._options__WEBPACK_IMPORTED_MODULE_0__.optionThree?.particles,
            color: {
              value: color && color.length > 0 && color[0] !== '' ? color : _options__WEBPACK_IMPORTED_MODULE_0__.optionThree?.particles.color?.value || '#000000'
            },
            size: {
              ..._options__WEBPACK_IMPORTED_MODULE_0__.optionSix?.size,
              value: shapeSize ? shapeSize : _options__WEBPACK_IMPORTED_MODULE_0__.optionThree?.particles.size?.value
            },
            shape: {
              type: shapes != undefined && shapes.length > 0 && shapes[0] !== '' ? shapes : ['circle']
            },
            move: {
              ..._options__WEBPACK_IMPORTED_MODULE_0__.optionThree?.move,
              direction: direction || 'none'
            }
          },
          //interactivity
          ...(preset === 'flying_bubble' && {
            interactivity: _options__WEBPACK_IMPORTED_MODULE_0__.optionThree?.interactivity
          })
        }),
        //snow fall
        ...(preset === 'snow_fall' && {
          particles: {
            ..._options__WEBPACK_IMPORTED_MODULE_0__.optionFour?.particles,
            color: {
              value: color && color.length > 0 && color[0] !== '' ? color : _options__WEBPACK_IMPORTED_MODULE_0__.optionFour?.particles.color?.value || '#000000'
            },
            size: {
              ..._options__WEBPACK_IMPORTED_MODULE_0__.optionSix?.size,
              value: shapeSize ? shapeSize : _options__WEBPACK_IMPORTED_MODULE_0__.optionFour?.particles.size?.value
            },
            shape: {
              type: shapes != undefined && shapes.length > 0 && shapes[0] !== '' ? shapes : ['circle']
            },
            move: {
              ..._options__WEBPACK_IMPORTED_MODULE_0__.optionFour?.move,
              direction: direction || 'none'
            }
          },
          //interactivity
          ...(preset === 'snow_fall' && {
            interactivity: _options__WEBPACK_IMPORTED_MODULE_0__.optionFour?.interactivity
          })
        }),
        // flying shape
        ...(preset === 'flying_shape' && {
          particles: {
            ..._options__WEBPACK_IMPORTED_MODULE_0__.optionFive?.particles,
            color: {
              value: color && color.length > 0 && color[0] !== '' ? color : _options__WEBPACK_IMPORTED_MODULE_0__.optionFive?.particles.color?.value || '#000000'
            },
            size: {
              ..._options__WEBPACK_IMPORTED_MODULE_0__.optionSix?.shapeSize,
              value: shapeSize ? shapeSize : _options__WEBPACK_IMPORTED_MODULE_0__.optionFive?.particles.size?.value
            },
            shape: {
              type: shapes != undefined && shapes.length > 0 && shapes[0] !== '' ? shapes : _options__WEBPACK_IMPORTED_MODULE_0__.optionFive?.particles.shape?.type
            },
            move: {
              ..._options__WEBPACK_IMPORTED_MODULE_0__.optionFive?.move,
              direction: direction || 'none'
            },
            line_linked: {
              enable: false
            }
          },
          //interactivity
          ...(preset === 'flying_shape' && {
            interactivity: _options__WEBPACK_IMPORTED_MODULE_0__.optionFive?.interactivity
          })
        }),
        // polygon Move
        ...(preset === 'polygonal_move' && {
          particles: {
            ..._options__WEBPACK_IMPORTED_MODULE_0__.optionSix?.particles,
            color: {
              value: color && color.length > 0 && color[0] !== '' ? color : _options__WEBPACK_IMPORTED_MODULE_0__.optionSix?.particles.color?.value || '#000000'
            },
            size: {
              ..._options__WEBPACK_IMPORTED_MODULE_0__.optionSix?.size,
              value: shapeSize ? shapeSize : _options__WEBPACK_IMPORTED_MODULE_0__.optionSix?.particles.size?.value
            },
            shape: {
              type: shapes != undefined && shapes.length > 0 && shapes[0] !== '' ? shapes : _options__WEBPACK_IMPORTED_MODULE_0__.optionSix?.particles.shape?.type
            },
            ..._options__WEBPACK_IMPORTED_MODULE_0__.optionSix?.opacity,
            move: {
              ..._options__WEBPACK_IMPORTED_MODULE_0__.optionSix?.move,
              direction: direction || 'none'
            }
          }
        }),
        retina_detect: true
      };
      const optionData = preset === 'custom_options' && customOptions ? createObject(customOptions) : preset !== 'custom_options' && mainOptions;
      try {
        particlesJS(`zolo-particles-${particlesId}`, optionData);
      } catch (error) {
        console.log(error);
      }
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map