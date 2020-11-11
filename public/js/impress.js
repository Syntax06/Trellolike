/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/impress.js":
/*!*********************************!*\
  !*** ./resources/js/impress.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (document, window) {
  "use strict";

  var lib;

  var pfx = function () {
    var style = document.createElement("dummy").style,
        prefixes = "Webkit Moz O ms Khtml".split(" "),
        memory = {};
    return function (prop) {
      if (typeof memory[prop] === "undefined") {
        var ucProp = prop.charAt(0).toUpperCase() + prop.substr(1),
            props = (prop + " " + prefixes.join(ucProp + " ") + ucProp).split(" ");
        memory[prop] = null;

        for (var i in props) {
          if (style[props[i]] !== undefined) {
            memory[prop] = props[i];
            break;
          }
        }
      }

      return memory[prop];
    };
  }();

  var validateOrder = function validateOrder(order, fallback) {
    var validChars = "xyz";
    var returnStr = "";

    if (typeof order === "string") {
      for (var i in order.split("")) {
        if (validChars.indexOf(order[i]) >= 0) {
          returnStr += order[i]; // Each of x,y,z can be used only once.

          validChars = validChars.split(order[i]).join("");
        }
      }
    }

    if (returnStr) {
      return returnStr;
    } else if (fallback !== undefined) {
      return fallback;
    } else {
      return "xyz";
    }
  };

  var css = function css(el, props) {
    var key, pkey;

    for (key in props) {
      if (props.hasOwnProperty(key)) {
        pkey = pfx(key);

        if (pkey !== null) {
          el.style[pkey] = props[key];
        }
      }
    }

    return el;
  }; // `translate` builds a translate transform string for given data.


  var translate = function translate(t) {
    return " translate3d(" + t.x + "px," + t.y + "px," + t.z + "px) ";
  }; // `rotate` builds a rotate transform string for given data.
  // By default the rotations are in X Y Z order that can be reverted by passing `true`
  // as second parameter.


  var rotate = function rotate(r, revert) {
    var order = r.order ? r.order : "xyz";
    var css = "";
    var axes = order.split("");

    if (revert) {
      axes = axes.reverse();
    }

    for (var i = 0; i < axes.length; i++) {
      css += " rotate" + axes[i].toUpperCase() + "(" + r[axes[i]] + "deg)";
    }

    return css;
  }; // `scale` builds a scale transform string for given data.


  var scale = function scale(s) {
    return " scale(" + s + ") ";
  }; // `computeWindowScale` counts the scale factor between window size and size
  // defined for the presentation in the config.


  var computeWindowScale = function computeWindowScale(config) {
    var hScale = window.innerHeight / config.height,
        wScale = window.innerWidth / config.width,
        scale = hScale > wScale ? wScale : hScale;

    if (config.maxScale && scale > config.maxScale) {
      scale = config.maxScale;
    }

    if (config.minScale && scale < config.minScale) {
      scale = config.minScale;
    }

    return scale;
  };

  var body = document.body;
  var impressSupported = // Browser should support CSS 3D transtorms
  pfx("perspective") !== null && // And `classList` and `dataset` APIs
  body.classList && body.dataset;

  if (!impressSupported) {
    // We can't be sure that `classList` is supported
    body.className += " impress-not-supported ";
  } // GLOBALS AND DEFAULTS
  // This is where the root elements of all impress.js instances will be kept.
  // Yes, this means you can have more than one instance on a page, but I'm not
  // sure if it makes any sense in practice ;)


  var roots = {};
  var preInitPlugins = [];
  var preStepLeavePlugins = []; // Some default config values.

  var defaults = {
    width: 1024,
    height: 768,
    maxScale: 1,
    minScale: 0,
    perspective: 1000,
    transitionDuration: 1000
  }; // It's just an empty function ... and a useless comment.

  var empty = function empty() {
    return false;
  }; // IMPRESS.JS API
  // And that's where interesting things will start to happen.
  // It's the core `impress` function that returns the impress.js API
  // for a presentation based on the element with given id ("impress"
  // by default).


  var impress = window.impress = function (rootId) {
    // If impress.js is not supported by the browser return a dummy API
    // it may not be a perfect solution but we return early and avoid
    // running code that may use features not implemented in the browser.
    if (!impressSupported) {
      return {
        init: empty,
        "goto": empty,
        prev: empty,
        next: empty,
        swipe: empty,
        tear: empty,
        lib: {}
      };
    }

    rootId = rootId || "impress"; // If given root is already initialized just return the API

    if (roots["impress-root-" + rootId]) {
      return roots["impress-root-" + rootId];
    } // The gc library depends on being initialized before we do any changes to DOM.


    lib = initLibraries(rootId);
    body.classList.remove("impress-not-supported");
    body.classList.add("impress-supported"); // Data of all presentation steps

    var stepsData = {}; // Element of currently active step

    var activeStep = null; // Current state (position, rotation and scale) of the presentation

    var currentState = null; // Array of step elements

    var steps = null; // Configuration options

    var config = null; // Scale factor of the browser window

    var windowScale = null; // Root presentation elements

    var root = lib.util.byId(rootId);
    var canvas = document.createElement("div");
    var initialized = false;
    var lastEntered = null;

    var onStepEnter = function onStepEnter(step) {
      if (lastEntered !== step) {
        lib.util.triggerEvent(step, "impress:stepenter");
        lastEntered = step;
      }

      lib.util.triggerEvent(step, "impress:steprefresh");
    };

    var onStepLeave = function onStepLeave(currentStep, nextStep) {
      if (lastEntered === currentStep) {
        lib.util.triggerEvent(currentStep, "impress:stepleave", {
          next: nextStep
        });
        lastEntered = null;
      }
    }; // `initStep` initializes given step element by reading data from its
    // data attributes and setting correct styles.


    var initStep = function initStep(el, idx) {
      var data = el.dataset,
          step = {
        translate: {
          x: lib.util.toNumber(data.x),
          y: lib.util.toNumber(data.y),
          z: lib.util.toNumber(data.z)
        },
        rotate: {
          x: lib.util.toNumber(data.rotateX),
          y: lib.util.toNumber(data.rotateY),
          z: lib.util.toNumber(data.rotateZ || data.rotate),
          order: validateOrder(data.rotateOrder)
        },
        scale: lib.util.toNumber(data.scale, 1),
        transitionDuration: lib.util.toNumber(data.transitionDuration, config.transitionDuration),
        el: el
      };

      if (!el.id) {
        el.id = "step-" + (idx + 1);
      }

      stepsData["impress-" + el.id] = step;
      css(el, {
        position: "absolute",
        transform: "translate(-50%,-50%)" + translate(step.translate) + rotate(step.rotate) + scale(step.scale),
        transformStyle: "preserve-3d"
      });
    }; // Initialize all steps.
    // Read the data-* attributes, store in internal stepsData, and render with CSS.


    var initAllSteps = function initAllSteps() {
      steps = lib.util.$$(".step", root);
      steps.forEach(initStep);
    }; // `init` API function that initializes (and runs) the presentation.


    var init = function init() {
      if (initialized) {
        return;
      }

      execPreInitPlugins(root); // First we set up the viewport for mobile devices.
      // For some reason iPad goes nuts when it is not done properly.

      var meta = lib.util.$("meta[name='viewport']") || document.createElement("meta");
      meta.content = "width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no";

      if (meta.parentNode !== document.head) {
        meta.name = "viewport";
        document.head.appendChild(meta);
      } // Initialize configuration object


      var rootData = root.dataset;
      config = {
        width: lib.util.toNumber(rootData.width, defaults.width),
        height: lib.util.toNumber(rootData.height, defaults.height),
        maxScale: lib.util.toNumber(rootData.maxScale, defaults.maxScale),
        minScale: lib.util.toNumber(rootData.minScale, defaults.minScale),
        perspective: lib.util.toNumber(rootData.perspective, defaults.perspective),
        transitionDuration: lib.util.toNumber(rootData.transitionDuration, defaults.transitionDuration)
      };
      windowScale = computeWindowScale(config); // Wrap steps with "canvas" element

      lib.util.arrayify(root.childNodes).forEach(function (el) {
        canvas.appendChild(el);
      });
      root.appendChild(canvas); // Set initial styles

      document.documentElement.style.height = "100%";
      css(body, {
        height: "100%",
        overflow: "hidden"
      });
      var rootStyles = {
        position: "absolute",
        transformOrigin: "top left",
        transition: "all 0s ease-in-out",
        transformStyle: "preserve-3d"
      };
      css(root, rootStyles);
      css(root, {
        top: "50%",
        left: "50%",
        perspective: config.perspective / windowScale + "px",
        transform: scale(windowScale)
      });
      css(canvas, rootStyles);
      body.classList.remove("impress-disabled");
      body.classList.add("impress-enabled"); // Get and init steps

      initAllSteps(); // Set a default initial state of the canvas

      currentState = {
        translate: {
          x: 0,
          y: 0,
          z: 0
        },
        rotate: {
          x: 0,
          y: 0,
          z: 0,
          order: "xyz"
        },
        scale: 1
      };
      initialized = true;
      lib.util.triggerEvent(root, "impress:init", {
        api: roots["impress-root-" + rootId]
      });
    };

    var getStep = function getStep(step) {
      if (typeof step === "number") {
        step = step < 0 ? steps[steps.length + step] : steps[step];
      } else if (typeof step === "string") {
        step = lib.util.byId(step);
      }

      return step && step.id && stepsData["impress-" + step.id] ? step : null;
    }; // Used to reset timeout for `impress:stepenter` event


    var stepEnterTimeout = null;

    var _goto = function _goto(el, duration, reason, origEvent) {
      reason = reason || "goto";
      origEvent = origEvent || null;

      if (!initialized) {
        return false;
      }

      initAllSteps();

      if (!(el = getStep(el))) {
        return false;
      }

      window.scrollTo(0, 0);
      var step = stepsData["impress-" + el.id];
      duration = duration !== undefined ? duration : step.transitionDuration; // If we are in fact moving to another step, start with executing the registered
      // preStepLeave plugins.

      if (activeStep && activeStep !== el) {
        var event = {
          target: activeStep,
          detail: {}
        };
        event.detail.next = el;
        event.detail.transitionDuration = duration;
        event.detail.reason = reason;

        if (origEvent) {
          event.origEvent = origEvent;
        }

        if (execPreStepLeavePlugins(event) === false) {
          return false;
        } // Plugins are allowed to change the detail values


        el = event.detail.next;
        step = stepsData["impress-" + el.id];
        duration = event.detail.transitionDuration;
      }

      if (activeStep) {
        activeStep.classList.remove("active");
        body.classList.remove("impress-on-" + activeStep.id);
      }

      el.classList.add("active");
      body.classList.add("impress-on-" + el.id); // Compute target state of the canvas based on given step

      var target = {
        rotate: {
          x: -step.rotate.x,
          y: -step.rotate.y,
          z: -step.rotate.z,
          order: step.rotate.order
        },
        translate: {
          x: -step.translate.x,
          y: -step.translate.y,
          z: -step.translate.z
        },
        scale: 1 / step.scale
      };
      var zoomin = target.scale >= currentState.scale;
      duration = lib.util.toNumber(duration, config.transitionDuration);
      var delay = duration / 2;

      if (el === activeStep) {
        windowScale = computeWindowScale(config);
      }

      var targetScale = target.scale * windowScale; // Trigger leave of currently active element (if it's not the same step again)

      if (activeStep && activeStep !== el) {
        onStepLeave(activeStep, el);
      }

      css(root, {
        perspective: config.perspective / targetScale + "px",
        transform: scale(targetScale),
        transitionDuration: duration + "ms",
        transitionDelay: (zoomin ? delay : 0) + "ms"
      });
      css(canvas, {
        transform: rotate(target.rotate, true) + translate(target.translate),
        transitionDuration: duration + "ms",
        transitionDelay: (zoomin ? 0 : delay) + "ms"
      });

      if (currentState.scale === target.scale || currentState.rotate.x === target.rotate.x && currentState.rotate.y === target.rotate.y && currentState.rotate.z === target.rotate.z && currentState.translate.x === target.translate.x && currentState.translate.y === target.translate.y && currentState.translate.z === target.translate.z) {
        delay = 0;
      }

      currentState = target;
      activeStep = el;
      window.clearTimeout(stepEnterTimeout);
      stepEnterTimeout = window.setTimeout(function () {
        onStepEnter(activeStep);
      }, duration + delay);
      return el;
    };

    var prev = function prev(origEvent) {
      var prev = steps.indexOf(activeStep) - 1;
      prev = prev >= 0 ? steps[prev] : steps[steps.length - 1];
      return _goto(prev, undefined, "prev", origEvent);
    };

    var next = function next(origEvent) {
      var next = steps.indexOf(activeStep) + 1;
      next = next < steps.length ? steps[next] : steps[0];
      return _goto(next, undefined, "next", origEvent);
    };

    var interpolate = function interpolate(a, b, k) {
      return a + (b - a) * k;
    };

    var swipe = function swipe(pct) {
      if (Math.abs(pct) > 1) {
        return;
      }

      var event = {
        target: activeStep,
        detail: {}
      };
      event.detail.swipe = pct;
      event.detail.transitionDuration = config.transitionDuration;
      var idx; // Needed by jshint

      if (pct < 0) {
        idx = steps.indexOf(activeStep) + 1;
        event.detail.next = idx < steps.length ? steps[idx] : steps[0];
        event.detail.reason = "next";
      } else if (pct > 0) {
        idx = steps.indexOf(activeStep) - 1;
        event.detail.next = idx >= 0 ? steps[idx] : steps[steps.length - 1];
        event.detail.reason = "prev";
      } else {
        // No move
        return;
      }

      if (execPreStepLeavePlugins(event) === false) {
        return false;
      }

      var nextElement = event.detail.next;
      var nextStep = stepsData["impress-" + nextElement.id]; // If the same step is re-selected, force computing window scaling,

      var nextScale = nextStep.scale * windowScale;
      var k = Math.abs(pct);
      var interpolatedStep = {
        translate: {
          x: interpolate(currentState.translate.x, -nextStep.translate.x, k),
          y: interpolate(currentState.translate.y, -nextStep.translate.y, k),
          z: interpolate(currentState.translate.z, -nextStep.translate.z, k)
        },
        rotate: {
          x: interpolate(currentState.rotate.x, -nextStep.rotate.x, k),
          y: interpolate(currentState.rotate.y, -nextStep.rotate.y, k),
          z: interpolate(currentState.rotate.z, -nextStep.rotate.z, k),
          order: k < 0.7 ? currentState.rotate.order : nextStep.rotate.order
        },
        scale: interpolate(currentState.scale * windowScale, nextScale, k)
      };
      css(root, {
        perspective: config.perspective / interpolatedStep.scale + "px",
        transform: scale(interpolatedStep.scale),
        transitionDuration: "0ms",
        transitionDelay: "0ms"
      });
      css(canvas, {
        transform: rotate(interpolatedStep.rotate, true) + translate(interpolatedStep.translate),
        transitionDuration: "0ms",
        transitionDelay: "0ms"
      });
    };

    var tear = function tear() {
      lib.gc.teardown();
      delete roots["impress-root-" + rootId];
    };

    lib.gc.addEventListener(root, "impress:init", function () {
      // STEP CLASSES
      steps.forEach(function (step) {
        step.classList.add("future");
      });
      lib.gc.addEventListener(root, "impress:stepenter", function (event) {
        event.target.classList.remove("past");
        event.target.classList.remove("future");
        event.target.classList.add("present");
      }, false);
      lib.gc.addEventListener(root, "impress:stepleave", function (event) {
        event.target.classList.remove("present");
        event.target.classList.add("past");
      }, false);
    }, false); // Adding hash change support.

    lib.gc.addEventListener(root, "impress:init", function () {
      // Last hash detected
      var lastHash = "";
      lib.gc.addEventListener(root, "impress:stepenter", function (event) {
        window.location.hash = lastHash = "#/" + event.target.id;
      }, false);
      lib.gc.addEventListener(window, "hashchange", function () {
        if (window.location.hash !== lastHash) {
          _goto(lib.util.getElementFromHash());
        }
      }, false);

      _goto(lib.util.getElementFromHash() || steps[0], 0);
    }, false);
    body.classList.add("impress-disabled"); // Store and return API for given impress.js root element

    return roots["impress-root-" + rootId] = {
      init: init,
      "goto": _goto,
      next: next,
      prev: prev,
      swipe: swipe,
      tear: tear,
      lib: lib
    };
  };

  impress.supported = impressSupported;
  var libraryFactories = {};

  impress.addLibraryFactory = function (obj) {
    for (var libname in obj) {
      if (obj.hasOwnProperty(libname)) {
        libraryFactories[libname] = obj[libname];
      }
    }
  }; // Call each library factory, and return the lib object that is added to the api.


  var initLibraries = function initLibraries(rootId) {
    //jshint ignore:line
    var lib = {};

    for (var libname in libraryFactories) {
      if (libraryFactories.hasOwnProperty(libname)) {
        if (lib[libname] !== undefined) {
          throw "impress.js ERROR: Two libraries both tried to use libname: " + libname;
        }

        lib[libname] = libraryFactories[libname](rootId);
      }
    }

    return lib;
  };

  impress.addPreInitPlugin = function (plugin, weight) {
    weight = parseInt(weight) || 10;

    if (weight <= 0) {
      throw "addPreInitPlugin: weight must be a positive integer";
    }

    if (preInitPlugins[weight] === undefined) {
      preInitPlugins[weight] = [];
    }

    preInitPlugins[weight].push(plugin);
  }; // Called at beginning of init, to execute all pre-init plugins.


  var execPreInitPlugins = function execPreInitPlugins(root) {
    //jshint ignore:line
    for (var i = 0; i < preInitPlugins.length; i++) {
      var thisLevel = preInitPlugins[i];

      if (thisLevel !== undefined) {
        for (var j = 0; j < thisLevel.length; j++) {
          thisLevel[j](root);
        }
      }
    }
  };

  impress.addPreStepLeavePlugin = function (plugin, weight) {
    //jshint ignore:line
    weight = parseInt(weight) || 10;

    if (weight <= 0) {
      throw "addPreStepLeavePlugin: weight must be a positive integer";
    }

    if (preStepLeavePlugins[weight] === undefined) {
      preStepLeavePlugins[weight] = [];
    }

    preStepLeavePlugins[weight].push(plugin);
  }; // Called at beginning of goto(), to execute all preStepLeave plugins.


  var execPreStepLeavePlugins = function execPreStepLeavePlugins(event) {
    //jshint ignore:line
    for (var i = 0; i < preStepLeavePlugins.length; i++) {
      var thisLevel = preStepLeavePlugins[i];

      if (thisLevel !== undefined) {
        for (var j = 0; j < thisLevel.length; j++) {
          if (thisLevel[j](event) === false) {
            return false;
          }
        }
      }
    }
  };
})(document, window);

(function (document, window) {
  "use strict";

  var roots = [];
  var rootsCount = 0;
  var startingState = {
    roots: []
  };

  var libraryFactory = function libraryFactory(rootId) {
    if (roots[rootId]) {
      return roots[rootId];
    } // Per root global variables (instance variables?)


    var elementList = [];
    var eventListenerList = [];
    var callbackList = [];
    recordStartingState(rootId); // LIBRARY FUNCTIONS
    // Definitions of the library functions we return as an object at the end
    // `pushElement` adds a DOM element to the gc stack

    var pushElement = function pushElement(element) {
      elementList.push(element);
    }; // `appendChild` is a convenience wrapper that combines DOM appendChild with gc.pushElement


    var appendChild = function appendChild(parent, element) {
      parent.appendChild(element);
      pushElement(element);
    }; // `pushEventListener` adds an event listener to the gc stack


    var pushEventListener = function pushEventListener(target, type, listenerFunction) {
      eventListenerList.push({
        target: target,
        type: type,
        listener: listenerFunction
      });
    }; // `addEventListener` combines DOM addEventListener with gc.pushEventListener


    var addEventListener = function addEventListener(target, type, listenerFunction) {
      target.addEventListener(type, listenerFunction);
      pushEventListener(target, type, listenerFunction);
    }; // `pushCallback` If the above utilities are not enough, plugins can add their own callback
    // function to do arbitrary things.


    var pushCallback = function pushCallback(callback) {
      callbackList.push(callback);
    };

    pushCallback(function (rootId) {
      resetStartingState(rootId);
    });

    var teardown = function teardown() {
      // Execute the callbacks in LIFO order
      var i; // Needed by jshint

      for (i = callbackList.length - 1; i >= 0; i--) {
        callbackList[i](rootId);
      }

      callbackList = [];

      for (i = 0; i < elementList.length; i++) {
        elementList[i].parentElement.removeChild(elementList[i]);
      }

      elementList = [];

      for (i = 0; i < eventListenerList.length; i++) {
        var target = eventListenerList[i].target;
        var type = eventListenerList[i].type;
        var listener = eventListenerList[i].listener;
        target.removeEventListener(type, listener);
      }
    };

    var lib = {
      pushElement: pushElement,
      appendChild: appendChild,
      pushEventListener: pushEventListener,
      addEventListener: addEventListener,
      pushCallback: pushCallback,
      teardown: teardown
    };
    roots[rootId] = lib;
    rootsCount++;
    return lib;
  }; // Let impress core know about the existence of this library


  window.impress.addLibraryFactory({
    gc: libraryFactory
  });

  var recordStartingState = function recordStartingState(rootId) {
    startingState.roots[rootId] = {};
    startingState.roots[rootId].steps = []; // Record whether the steps have an id or not

    var steps = document.getElementById(rootId).querySelectorAll(".step");

    for (var i = 0; i < steps.length; i++) {
      var el = steps[i];
      startingState.roots[rootId].steps.push({
        el: el,
        id: el.getAttribute("id")
      });
    } // In the rare case of multiple roots, the following is changed on first init() and
    // reset at last tear().


    if (rootsCount === 0) {
      startingState.body = {};

      if (document.body.classList.contains("impress-not-supported")) {
        startingState.body.impressNotSupported = true;
      } else {
        startingState.body.impressNotSupported = false;
      } // If there's a <meta name="viewport"> element, its contents will be overwritten by init


      var metas = document.head.querySelectorAll("meta");

      for (i = 0; i < metas.length; i++) {
        var m = metas[i];

        if (m.name === "viewport") {
          startingState.meta = m.content;
        }
      }
    }
  }; // CORE TEARDOWN


  var resetStartingState = function resetStartingState(rootId) {
    // Reset body element
    document.body.classList.remove("impress-enabled");
    document.body.classList.remove("impress-disabled");
    var root = document.getElementById(rootId);
    var activeId = root.querySelector(".active").id;
    document.body.classList.remove("impress-on-" + activeId);
    document.documentElement.style.height = "";
    document.body.style.height = "";
    document.body.style.overflow = "";
    var steps = root.querySelectorAll(".step");

    for (var i = 0; i < steps.length; i++) {
      steps[i].classList.remove("future");
      steps[i].classList.remove("past");
      steps[i].classList.remove("present");
      steps[i].classList.remove("active");
      steps[i].style.position = "";
      steps[i].style.transform = "";
      steps[i].style["transform-style"] = "";
    }

    root.style.position = "";
    root.style["transform-origin"] = "";
    root.style.transition = "";
    root.style["transform-style"] = "";
    root.style.top = "";
    root.style.left = "";
    root.style.transform = ""; // Reset id of steps ("step-1" id's are auto generated)

    steps = startingState.roots[rootId].steps;
    var step;

    while (step = steps.pop()) {
      if (step.id === null) {
        step.el.removeAttribute("id");
      } else {
        step.el.setAttribute("id", step.id);
      }
    }

    delete startingState.roots[rootId];
    var canvas = root.firstChild;
    var canvasHTML = canvas.innerHTML;
    root.innerHTML = canvasHTML;

    if (roots[rootId] !== undefined) {
      delete roots[rootId];
      rootsCount--;
    }

    if (rootsCount === 0) {
      // In the rare case that more than one impress root elements were initialized, these
      // are only reset when all are uninitialized.
      document.body.classList.remove("impress-supported");

      if (startingState.body.impressNotSupported) {
        document.body.classList.add("impress-not-supported");
      } // We need to remove or reset the meta element inserted by impress.js


      var metas = document.head.querySelectorAll("meta");

      for (i = 0; i < metas.length; i++) {
        var m = metas[i];

        if (m.name === "viewport") {
          if (startingState.meta !== undefined) {
            m.content = startingState.meta;
          } else {
            m.parentElement.removeChild(m);
          }
        }
      }
    }
  };
})(document, window);

(function (document, window) {
  "use strict";

  var roots = [];

  var libraryFactory = function libraryFactory(rootId) {
    if (roots[rootId]) {
      return roots[rootId];
    } // `$` returns first element for given CSS `selector` in the `context` of
    // the given element or whole document.


    var $ = function $(selector, context) {
      context = context || document;
      return context.querySelector(selector);
    }; // `$$` return an array of elements for given CSS `selector` in the `context` of
    // the given element or whole document.


    var $$ = function $$(selector, context) {
      context = context || document;
      return arrayify(context.querySelectorAll(selector));
    }; // `arrayify` takes an array-like object and turns it into real Array
    // to make all the Array.prototype goodness available.


    var arrayify = function arrayify(a) {
      return [].slice.call(a);
    }; // `byId` returns element with given `id` - you probably have guessed that ;)


    var byId = function byId(id) {
      return document.getElementById(id);
    }; // `getElementFromHash` returns an element located by id from hash part of
    // window location.


    var getElementFromHash = function getElementFromHash() {
      // Get id from url # by removing `#` or `#/` from the beginning,
      // so both "fallback" `#slide-id` and "enhanced" `#/slide-id` will work
      return byId(window.location.hash.replace(/^#\/?/, ""));
    }; // `getUrlParamValue` return a given URL parameter value if it exists
    // `undefined` if it doesn't exist


    var getUrlParamValue = function getUrlParamValue(parameter) {
      var chunk = window.location.search.split(parameter + "=")[1];
      var value = chunk && chunk.split("&")[0];

      if (value !== "") {
        return value;
      }
    };

    var throttle = function throttle(fn, delay) {
      var timer = null;
      return function () {
        var context = this,
            args = arguments;
        window.clearTimeout(timer);
        timer = window.setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    };

    var toNumber = function toNumber(numeric, fallback) {
      return isNaN(numeric) ? fallback || 0 : Number(numeric);
    };

    var triggerEvent = function triggerEvent(el, eventName, detail) {
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent(eventName, true, true, detail);
      el.dispatchEvent(event);
    };

    var lib = {
      $: $,
      $$: $$,
      arrayify: arrayify,
      byId: byId,
      getElementFromHash: getElementFromHash,
      throttle: throttle,
      toNumber: toNumber,
      triggerEvent: triggerEvent,
      getUrlParamValue: getUrlParamValue
    };
    roots[rootId] = lib;
    return lib;
  }; // Let impress core know about the existence of this library


  window.impress.addLibraryFactory({
    util: libraryFactory
  });
})(document, window);

(function (document) {
  "use strict";

  var autoplayDefault = 0;
  var currentStepTimeout = 0;
  var api = null;
  var timeoutHandle = null;
  var root = null;
  var util; // On impress:init, check whether there is a default setting, as well as
  // handle step-1.

  document.addEventListener("impress:init", function (event) {
    util = event.detail.api.lib.util;
    api = event.detail.api;
    root = event.target;
    var data = root.dataset;
    var autoplay = util.getUrlParamValue("impress-autoplay") || data.autoplay;

    if (autoplay) {
      autoplayDefault = util.toNumber(autoplay, 0);
    }

    var toolbar = document.querySelector("#impress-toolbar");

    if (toolbar) {
      addToolbarButton(toolbar);
    }

    api.lib.gc.pushCallback(function () {
      clearTimeout(timeoutHandle);
    });
  }, false);
  document.addEventListener("impress:autoplay:pause", function (event) {
    status = "paused";
    reloadTimeout(event);
  }, false);
  document.addEventListener("impress:autoplay:play", function (event) {
    status = "playing";
    reloadTimeout(event);
  }, false);

  var reloadTimeout = function reloadTimeout(event) {
    var step = event.target;
    currentStepTimeout = util.toNumber(step.dataset.autoplay, autoplayDefault);

    if (status === "paused") {
      setAutoplayTimeout(0);
    } else {
      setAutoplayTimeout(currentStepTimeout);
    }
  };

  document.addEventListener("impress:stepenter", function (event) {
    reloadTimeout(event);
  }, false);
  document.addEventListener("impress:substep:enter", function (event) {
    reloadTimeout(event);
  }, false);

  var setAutoplayTimeout = function setAutoplayTimeout(timeout) {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }

    if (timeout > 0) {
      timeoutHandle = setTimeout(function () {
        api.next();
      }, timeout * 1000);
    }

    setButtonText();
  };
  /*** Toolbar plugin integration */


  var status = "not clicked";
  var toolbarButton = null;

  var makeDomElement = function makeDomElement(html) {
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.firstChild;
  };

  var toggleStatus = function toggleStatus() {
    if (currentStepTimeout > 0 && status !== "paused") {
      status = "paused";
    } else {
      status = "playing";
    }
  };

  var getButtonText = function getButtonText() {
    if (currentStepTimeout > 0 && status !== "paused") {
      return "||"; // Pause
    } else {
      return "&#9654;"; // Play
    }
  };

  var setButtonText = function setButtonText() {
    if (toolbarButton) {
      // Keep button size the same even if label content is changing
      var buttonWidth = toolbarButton.offsetWidth;
      var buttonHeight = toolbarButton.offsetHeight;
      toolbarButton.innerHTML = getButtonText();

      if (!toolbarButton.style.width) {
        toolbarButton.style.width = buttonWidth + "px";
      }

      if (!toolbarButton.style.height) {
        toolbarButton.style.height = buttonHeight + "px";
      }
    }
  };

  var addToolbarButton = function addToolbarButton(toolbar) {
    var html = '<button id="impress-autoplay-playpause" ' + // jshint ignore:line
    'title="Autoplay" class="impress-autoplay">' + // jshint ignore:line
    getButtonText() + "</button>"; // jshint ignore:line

    toolbarButton = makeDomElement(html);
    toolbarButton.addEventListener("click", function () {
      toggleStatus();

      if (status === "playing") {
        if (autoplayDefault === 0) {
          autoplayDefault = 7;
        }

        if (currentStepTimeout === 0) {
          currentStepTimeout = autoplayDefault;
        }

        setAutoplayTimeout(currentStepTimeout);
      } else if (status === "paused") {
        setAutoplayTimeout(0);
      }
    });
    util.triggerEvent(toolbar, "impress:toolbar:appendChild", {
      group: 10,
      element: toolbarButton
    });
  };
})(document);

(function (document) {
  "use strict";

  var canvas = null;
  var blackedOut = false;
  var util = null;
  var root = null;
  var api = null; // While waiting for a shared library of utilities, copying these 2 from main impress.js

  var css = function css(el, props) {
    var key, pkey;

    for (key in props) {
      if (props.hasOwnProperty(key)) {
        pkey = pfx(key);

        if (pkey !== null) {
          el.style[pkey] = props[key];
        }
      }
    }

    return el;
  };

  var pfx = function () {
    var style = document.createElement("dummy").style,
        prefixes = "Webkit Moz O ms Khtml".split(" "),
        memory = {};
    return function (prop) {
      if (typeof memory[prop] === "undefined") {
        var ucProp = prop.charAt(0).toUpperCase() + prop.substr(1),
            props = (prop + " " + prefixes.join(ucProp + " ") + ucProp).split(" ");
        memory[prop] = null;

        for (var i in props) {
          if (style[props[i]] !== undefined) {
            memory[prop] = props[i];
            break;
          }
        }
      }

      return memory[prop];
    };
  }();

  var removeBlackout = function removeBlackout() {
    if (blackedOut) {
      css(canvas, {
        display: "block"
      });
      blackedOut = false;
      util.triggerEvent(root, "impress:autoplay:play", {});
    }
  };

  var blackout = function blackout() {
    if (blackedOut) {
      removeBlackout();
    } else {
      css(canvas, {
        display: (blackedOut = !blackedOut) ? "none" : "block"
      });
      blackedOut = true;
      util.triggerEvent(root, "impress:autoplay:pause", {});
    }
  }; // Wait for impress.js to be initialized


  document.addEventListener("impress:init", function (event) {
    api = event.detail.api;
    util = api.lib.util;
    root = event.target;
    canvas = root.firstElementChild;
    var gc = api.lib.gc;
    var util = api.lib.util;
    gc.addEventListener(document, "keydown", function (event) {
      // Accept b or . -> . is sent by presentation remote controllers
      if (event.keyCode === 66 || event.keyCode === 190) {
        event.preventDefault();

        if (!blackedOut) {
          blackout();
        } else {
          removeBlackout();
        }
      }
    }, false);
    gc.addEventListener(document, "keyup", function (event) {
      // Accept b or . -> . is sent by presentation remote controllers
      if (event.keyCode === 66 || event.keyCode === 190) {
        event.preventDefault();
      }
    }, false);
  }, false);
  document.addEventListener("impress:stepleave", function () {
    removeBlackout();
  }, false);
})(document);

(function (document, window) {
  "use strict";

  var preInit = function preInit() {
    if (window.markdown) {
      var markdownDivs = document.querySelectorAll(".markdown");

      for (var idx = 0; idx < markdownDivs.length; idx++) {
        var element = markdownDivs[idx];
        var dialect = element.dataset.markdownDialect;
        var slides = element.textContent.split(/^-----$/m);
        var i = slides.length - 1;
        element.innerHTML = markdown.toHTML(slides[i], dialect);
        var id = null;

        if (element.id) {
          id = element.id;
          element.id = "";
        }

        i--;

        while (i >= 0) {
          var newElement = element.cloneNode(false);
          newElement.innerHTML = markdown.toHTML(slides[i]);
          element.parentNode.insertBefore(newElement, element);
          element = newElement;
          i--;
        }

        if (id !== null) {
          element.id = id;
        }
      }
    }

    if (window.hljs) {
      hljs.initHighlightingOnLoad();
    }

    if (window.mermaid) {
      mermaid.initialize({
        startOnLoad: true
      });
    }
  };

  impress.addPreInitPlugin(preInit, 1);
})(document, window);

(function (document) {
  "use strict";

  var root;
  var api;
  document.addEventListener("impress:init", function (event) {
    root = event.target;
    api = event.detail.api;
    var gc = api.lib.gc;
    var selectors = ["input", "textarea", "select", "[contenteditable=true]"];

    for (var _i = 0, _selectors = selectors; _i < _selectors.length; _i++) {
      var selector = _selectors[_i];
      var elements = document.querySelectorAll(selector);

      if (!elements) {
        continue;
      }

      for (var i = 0; i < elements.length; i++) {
        var e = elements[i];
        gc.addEventListener(e, "keydown", function (event) {
          event.stopPropagation();
        });
        gc.addEventListener(e, "keyup", function (event) {
          event.stopPropagation();
        });
      }
    }
  }, false);
  document.addEventListener("impress:stepleave", function () {
    document.activeElement.blur();
  }, false);
})(document);

(function (document) {
  "use strict";

  function enterFullscreen() {
    var elem = document.documentElement;

    if (!document.fullscreenElement) {
      elem.requestFullscreen();
    }
  }

  function exitFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  } // Wait for impress.js to be initialized


  document.addEventListener("impress:init", function (event) {
    var api = event.detail.api;
    var root = event.target;
    var gc = api.lib.gc;
    var util = api.lib.util;
    gc.addEventListener(document, "keydown", function (event) {
      // 116 (F5) is sent by presentation remote controllers
      if (event.code === "F5") {
        event.preventDefault();
        enterFullscreen();
        util.triggerEvent(root.querySelector(".active"), "impress:steprefresh");
      } // 27 (Escape) is sent by presentation remote controllers


      if (event.key === "Escape" || event.key === "F5") {
        event.preventDefault();
        exitFullscreen();
        util.triggerEvent(root.querySelector(".active"), "impress:steprefresh");
      }
    }, false);
    util.triggerEvent(document, "impress:help:add", {
      command: "F5 / ESC",
      text: "Fullscreen: Enter / Exit",
      row: 200
    });
  }, false);
})(document);

(function (document, window) {
  "use strict";

  var lib;
  document.addEventListener("impress:init", function (event) {
    lib = event.detail.api.lib;
  }, false);

  var isNumber = function isNumber(numeric) {
    return !isNaN(numeric);
  };

  var _goto2 = function _goto2(event) {
    if (!event || !event.target) {
      return;
    }

    var data = event.target.dataset;
    var steps = document.querySelectorAll(".step"); // Data-goto-key-list="" & data-goto-next-list="" //////////////////////////////////////////

    if (data.gotoKeyList !== undefined && data.gotoNextList !== undefined && event.origEvent !== undefined && event.origEvent.key !== undefined) {
      var keylist = data.gotoKeyList.split(" ");
      var nextlist = data.gotoNextList.split(" ");

      if (keylist.length !== nextlist.length) {
        window.console.log("impress goto plugin: data-goto-key-list and data-goto-next-list don't match:");
        window.console.log(keylist);
        window.console.log(nextlist); // Don't return, allow the other categories to work despite this error
      } else {
        var index = keylist.indexOf(event.origEvent.key);

        if (index >= 0) {
          var next = nextlist[index];

          if (isNumber(next)) {
            event.detail.next = steps[next]; // If the new next element has its own transitionDuration, we're responsible
            // for setting that on the event as well

            event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
            return;
          } else {
            var newTarget = document.getElementById(next);

            if (newTarget && newTarget.classList.contains("step")) {
              event.detail.next = newTarget;
              event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
              return;
            } else {
              window.console.log("impress goto plugin: " + next + " is not a step in this impress presentation.");
            }
          }
        }
      }
    }

    if (isNumber(data.gotoNext) && event.detail.reason === "next") {
      event.detail.next = steps[data.gotoNext];
      event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
      return;
    }

    if (data.gotoNext && event.detail.reason === "next") {
      var newTarget = document.getElementById(data.gotoNext); // jshint ignore:line

      if (newTarget && newTarget.classList.contains("step")) {
        event.detail.next = newTarget;
        event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
        return;
      } else {
        window.console.log("impress goto plugin: " + data.gotoNext + " is not a step in this impress presentation.");
      }
    } // Handle event.target data-goto-prev attribute


    if (isNumber(data.gotoPrev) && event.detail.reason === "prev") {
      event.detail.next = steps[data.gotoPrev];
      event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
      return;
    }

    if (data.gotoPrev && event.detail.reason === "prev") {
      var newTarget = document.getElementById(data.gotoPrev); // jshint ignore:line

      if (newTarget && newTarget.classList.contains("step")) {
        event.detail.next = newTarget;
        event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
        return;
      } else {
        window.console.log("impress goto plugin: " + data.gotoPrev + " is not a step in this impress presentation.");
      }
    } // Handle event.target data-goto attribute


    if (isNumber(data["goto"])) {
      event.detail.next = steps[data["goto"]];
      event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
      return;
    }

    if (data["goto"]) {
      var newTarget = document.getElementById(data["goto"]); // jshint ignore:line

      if (newTarget && newTarget.classList.contains("step")) {
        event.detail.next = newTarget;
        event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
        return;
      } else {
        window.console.log("impress goto plugin: " + data["goto"] + " is not a step in this impress presentation.");
      }
    }
  }; // Register the plugin to be called in pre-stepleave phase


  impress.addPreStepLeavePlugin(_goto2);
})(document, window);

(function (document, window) {
  "use strict";

  var rows = [];
  var timeoutHandle;

  var triggerEvent = function triggerEvent(el, eventName, detail) {
    var event = document.createEvent("CustomEvent");
    event.initCustomEvent(eventName, true, true, detail);
    el.dispatchEvent(event);
  };

  var renderHelpDiv = function renderHelpDiv() {
    var helpDiv = document.getElementById("impress-help");

    if (helpDiv) {
      var html = [];

      for (var row in rows) {
        for (var arrayItem in row) {
          html.push(rows[row][arrayItem]);
        }
      }

      if (html) {
        helpDiv.innerHTML = "<table>\n" + html.join("\n") + "</table>\n";
      }
    }
  };

  var toggleHelp = function toggleHelp() {
    var helpDiv = document.getElementById("impress-help");

    if (!helpDiv) {
      return;
    }

    if (helpDiv.style.display === "block") {
      helpDiv.style.display = "none";
    } else {
      helpDiv.style.display = "block";
      window.clearTimeout(timeoutHandle);
    }
  };

  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 72 || event.keyCode === 191) {
      // "h" || "?"
      event.preventDefault();
      toggleHelp();
    }
  }, false);
  document.addEventListener("impress:help:add", function (e) {
    var rowIndex = e.detail.row;

    if (_typeof(rows[rowIndex]) !== "object" || !rows[rowIndex].isArray) {
      rows[rowIndex] = [];
    }

    rows[e.detail.row].push("<tr><td><strong>" + e.detail.command + "</strong></td><td>" + e.detail.text + "</td></tr>");
    renderHelpDiv();
  });
  document.addEventListener("impress:init", function (e) {
    renderHelpDiv(); // At start, show the help for 7 seconds.

    var helpDiv = document.getElementById("impress-help");

    if (helpDiv) {
      helpDiv.style.display = "block";
      timeoutHandle = window.setTimeout(function () {
        var helpDiv = document.getElementById("impress-help");
        helpDiv.style.display = "none";
      }, 7000); // Regster callback to empty the help div on teardown

      var api = e.detail.api;
      api.lib.gc.pushCallback(function () {
        window.clearTimeout(timeoutHandle);
        helpDiv.style.display = "";
        helpDiv.innerHTML = "";
        rows = [];
      });
    } // Use our own API to register the help text for "h"


    triggerEvent(document, "impress:help:add", {
      command: "H",
      text: "Show this help",
      row: 0
    });
  });
})(document, window);

(function (document, window) {
  'use strict'; // TODO: Move this to src/lib/util.js

  var triggerEvent = function triggerEvent(el, eventName, detail) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, detail);
    el.dispatchEvent(event);
  }; // Create Language object depending on browsers language setting


  var lang;

  switch (navigator.language) {
    case 'de':
      lang = {
        'noNotes': '<div class="noNotes">Keine Notizen hierzu</div>',
        'restart': 'Neustart',
        'clickToOpen': 'Klicken um Sprecherkonsole zu öffnen',
        'prev': 'zurück',
        'next': 'weiter',
        'loading': 'initalisiere',
        'ready': 'Bereit',
        'moving': 'in Bewegung',
        'useAMPM': false
      };
      break;

    case 'en': // jshint ignore:line

    default:
      // jshint ignore:line
      lang = {
        'noNotes': '<div class="noNotes">No notes for this step</div>',
        'restart': 'Restart',
        'clickToOpen': 'Click to open speaker console',
        'prev': 'Prev',
        'next': 'Next',
        'loading': 'Loading',
        'ready': 'Ready',
        'moving': 'Moving',
        'useAMPM': false
      };
      break;
  } // Settings to set iframe in speaker console


  var preViewDefaultFactor = 0.7;
  var preViewMinimumFactor = 0.5;
  var preViewGap = 4; // This is the default template for the speaker console window

  var consoleTemplate = '<!DOCTYPE html>' + '<html id="impressconsole"><head>' + // Order is important: If user provides a cssFile, those will win, because they're later
  '{{cssStyle}}' + '{{cssLink}}' + '</head><body>' + '<div id="console">' + '<div id="views">' + '<iframe id="slideView" scrolling="no"></iframe>' + '<iframe id="preView" scrolling="no"></iframe>' + '<div id="blocker"></div>' + '</div>' + '<div id="notes"></div>' + '</div>' + '<div id="controls"> ' + '<div id="prev"><a  href="#" onclick="impress().prev(); return false;" />' + '{{prev}}</a></div>' + '<div id="next"><a  href="#" onclick="impress().next(); return false;" />' + '{{next}}</a></div>' + '<div id="clock">--:--</div>' + '<div id="timer" onclick="timerReset()">00m 00s</div>' + '<div id="status">{{loading}}</div>' + '</div>' + '</body></html>'; // Default css location

  var cssFileOldDefault = 'css/impressConsole.css';
  var cssFile = undefined; // jshint ignore:line
  // Css for styling iframs on the console

  var cssFileIframeOldDefault = 'css/iframe.css';
  var cssFileIframe = undefined; // jshint ignore:line
  // All console windows, so that you can call impressConsole() repeatedly.

  var allConsoles = {}; // Zero padding helper function:

  var zeroPad = function zeroPad(i) {
    return (i < 10 ? '0' : '') + i;
  }; // The console object


  var impressConsole = window.impressConsole = function (rootId) {
    rootId = rootId || 'impress';

    if (allConsoles[rootId]) {
      return allConsoles[rootId];
    } // Root presentation elements


    var root = document.getElementById(rootId);
    var consoleWindow = null;

    var nextStep = function nextStep() {
      var classes = '';
      var nextElement = document.querySelector('.active'); // Return to parents as long as there is no next sibling

      while (!nextElement.nextElementSibling && nextElement.parentNode) {
        nextElement = nextElement.parentNode;
      }

      nextElement = nextElement.nextElementSibling;

      while (nextElement) {
        classes = nextElement.attributes['class'];

        if (classes && classes.value.indexOf('step') !== -1) {
          consoleWindow.document.getElementById('blocker').innerHTML = lang.next;
          return nextElement;
        }

        if (nextElement.firstElementChild) {
          // First go into deep
          nextElement = nextElement.firstElementChild;
        } else {
          // Go to next sibling or through parents until there is a next sibling
          while (!nextElement.nextElementSibling && nextElement.parentNode) {
            nextElement = nextElement.parentNode;
          }

          nextElement = nextElement.nextElementSibling;
        }
      } // No next element. Pick the first


      consoleWindow.document.getElementById('blocker').innerHTML = lang.restart;
      return document.querySelector('.step');
    }; // Sync the notes to the step


    var onStepLeave = function onStepLeave() {
      if (consoleWindow) {
        // Set notes to next steps notes.
        var newNotes = document.querySelector('.active').querySelector('.notes');

        if (newNotes) {
          newNotes = newNotes.innerHTML;
        } else {
          newNotes = lang.noNotes;
        }

        consoleWindow.document.getElementById('notes').innerHTML = newNotes; // Set the views

        var baseURL = document.URL.substring(0, document.URL.search('#/'));
        var slideSrc = baseURL + '#' + document.querySelector('.active').id;
        var preSrc = baseURL + '#' + nextStep().id;
        var slideView = consoleWindow.document.getElementById('slideView'); // Setting when already set causes glitches in Firefox, so check first:

        if (slideView.src !== slideSrc) {
          slideView.src = slideSrc;
        }

        var preView = consoleWindow.document.getElementById('preView');

        if (preView.src !== preSrc) {
          preView.src = preSrc;
        }

        consoleWindow.document.getElementById('status').innerHTML = '<span class="moving">' + lang.moving + '</span>';
      }
    }; // Sync the previews to the step


    var onStepEnter = function onStepEnter() {
      if (consoleWindow) {
        // We do everything here again, because if you stopped the previos step to
        // early, the onstepleave trigger is not called for that step, so
        // we need this to sync things.
        var newNotes = document.querySelector('.active').querySelector('.notes');

        if (newNotes) {
          newNotes = newNotes.innerHTML;
        } else {
          newNotes = lang.noNotes;
        }

        var notes = consoleWindow.document.getElementById('notes');
        notes.innerHTML = newNotes;
        notes.scrollTop = 0; // Set the views

        var baseURL = document.URL.substring(0, document.URL.search('#/'));
        var slideSrc = baseURL + '#' + document.querySelector('.active').id;
        var preSrc = baseURL + '#' + nextStep().id;
        var slideView = consoleWindow.document.getElementById('slideView'); // Setting when already set causes glitches in Firefox, so check first:

        if (slideView.src !== slideSrc) {
          slideView.src = slideSrc;
        }

        var preView = consoleWindow.document.getElementById('preView');

        if (preView.src !== preSrc) {
          preView.src = preSrc;
        }

        consoleWindow.document.getElementById('status').innerHTML = '<span  class="ready">' + lang.ready + '</span>';
      }
    }; // Sync substeps


    var onSubstep = function onSubstep(event) {
      if (consoleWindow) {
        if (event.detail.reason === 'next') {
          onSubstepShow();
        }

        if (event.detail.reason === 'prev') {
          onSubstepHide();
        }
      }
    };

    var onSubstepShow = function onSubstepShow() {
      var slideView = consoleWindow.document.getElementById('slideView');
      triggerEventInView(slideView, 'impress:substep:show');
    };

    var onSubstepHide = function onSubstepHide() {
      var slideView = consoleWindow.document.getElementById('slideView');
      triggerEventInView(slideView, 'impress:substep:hide');
    };

    var triggerEventInView = function triggerEventInView(frame, eventName, detail) {
      // Note: Unfortunately Chrome does not allow createEvent on file:// URLs, so this won't
      // work. This does work on Firefox, and should work if viewing the presentation on a
      // http:// URL on Chrome.
      var event = frame.contentDocument.createEvent('CustomEvent');
      event.initCustomEvent(eventName, true, true, detail);
      frame.contentDocument.dispatchEvent(event);
    };

    var spaceHandler = function spaceHandler() {
      var notes = consoleWindow.document.getElementById('notes');

      if (notes.scrollTopMax - notes.scrollTop > 20) {
        notes.scrollTop = notes.scrollTop + notes.clientHeight * 0.8;
      } else {
        window.impress().next();
      }
    };

    var timerReset = function timerReset() {
      consoleWindow.timerStart = new Date();
    }; // Show a clock


    var clockTick = function clockTick() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
      var ampm = '';

      if (lang.useAMPM) {
        ampm = hours < 12 ? 'AM' : 'PM';
        hours = hours > 12 ? hours - 12 : hours;
        hours = hours === 0 ? 12 : hours;
      } // Clock


      var clockStr = zeroPad(hours) + ':' + zeroPad(minutes) + ':' + zeroPad(seconds) + ' ' + ampm;
      consoleWindow.document.getElementById('clock').firstChild.nodeValue = clockStr; // Timer

      seconds = Math.floor((now - consoleWindow.timerStart) / 1000);
      minutes = Math.floor(seconds / 60);
      seconds = Math.floor(seconds % 60);
      consoleWindow.document.getElementById('timer').firstChild.nodeValue = zeroPad(minutes) + 'm ' + zeroPad(seconds) + 's';

      if (!consoleWindow.initialized) {
        // Nudge the slide windows after load, or they will scrolled wrong on Firefox.
        consoleWindow.document.getElementById('slideView').contentWindow.scrollTo(0, 0);
        consoleWindow.document.getElementById('preView').contentWindow.scrollTo(0, 0);
        consoleWindow.initialized = true;
      }
    };

    var registerKeyEvent = function registerKeyEvent(keyCodes, handler, window) {
      if (window === undefined) {
        window = consoleWindow;
      } // Prevent default keydown action when one of supported key is pressed


      window.document.addEventListener('keydown', function (event) {
        if (!event.ctrlKey && !event.altKey && !event.shiftKey && !event.metaKey && keyCodes.indexOf(event.keyCode) !== -1) {
          event.preventDefault();
        }
      }, false); // Trigger impress action on keyup

      window.document.addEventListener('keyup', function (event) {
        if (!event.ctrlKey && !event.altKey && !event.shiftKey && !event.metaKey && keyCodes.indexOf(event.keyCode) !== -1) {
          handler();
          event.preventDefault();
        }
      }, false);
    };

    var consoleOnLoad = function consoleOnLoad() {
      var slideView = consoleWindow.document.getElementById('slideView');
      var preView = consoleWindow.document.getElementById('preView'); // Firefox:

      slideView.contentDocument.body.classList.add('impress-console');
      preView.contentDocument.body.classList.add('impress-console');

      if (cssFileIframe !== undefined) {
        slideView.contentDocument.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="' + cssFileIframe + '">');
        preView.contentDocument.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="' + cssFileIframe + '">');
      } // Chrome:


      slideView.addEventListener('load', function () {
        slideView.contentDocument.body.classList.add('impress-console');

        if (cssFileIframe !== undefined) {
          slideView.contentDocument.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="' + cssFileIframe + '">');
        }
      });
      preView.addEventListener('load', function () {
        preView.contentDocument.body.classList.add('impress-console');

        if (cssFileIframe !== undefined) {
          preView.contentDocument.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="' + cssFileIframe + '">');
        }
      });
    };

    var open = function open() {
      if (top.isconsoleWindow) {
        return;
      }

      if (consoleWindow && !consoleWindow.closed) {
        consoleWindow.focus();
      } else {
        consoleWindow = window.open('', 'impressConsole'); // If opening failes this may be because the browser prevents this from
        // not (or less) interactive JavaScript...

        if (consoleWindow == null) {
          // ... so I add a button to klick.
          // workaround on firefox
          var message = document.createElement('div');
          message.id = 'impress-console-button';
          message.style.position = 'fixed';
          message.style.left = 0;
          message.style.top = 0;
          message.style.right = 0;
          message.style.bottom = 0;
          message.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
          var clickStr = 'var x = document.getElementById(\'impress-console-button\');' + 'x.parentNode.removeChild(x);' + 'var r = document.getElementById(\'' + rootId + '\');' + 'impress(\'' + rootId + '\').lib.util.triggerEvent(r, \'impress:console:open\', {})';
          var styleStr = 'margin: 25vh 25vw;width:50vw;height:50vh;';
          message.innerHTML = '<button style="' + styleStr + '" ' + 'onclick="' + clickStr + '">' + lang.clickToOpen + '</button>';
          document.body.appendChild(message);
          return;
        }

        var cssLink = '';

        if (cssFile !== undefined) {
          cssLink = '<link rel="stylesheet" type="text/css" media="screen" href="' + cssFile + '">';
        } // This sets the window location to the main window location, so css can be loaded:


        consoleWindow.document.open(); // Write the template:

        consoleWindow.document.write( // CssStyleStr is lots of inline <style></style> defined at the end of this file
        consoleTemplate.replace('{{cssStyle}}', cssStyleStr()).replace('{{cssLink}}', cssLink).replace(/{{.*?}}/gi, function (x) {
          return lang[x.substring(2, x.length - 2)];
        }));
        consoleWindow.document.title = 'Speaker Console (' + document.title + ')';
        consoleWindow.impress = window.impress; // We set this flag so we can detect it later, to prevent infinite popups.

        consoleWindow.isconsoleWindow = true; // Set the onload function:

        consoleWindow.onload = consoleOnLoad; // Add clock tick

        consoleWindow.timerStart = new Date();
        consoleWindow.timerReset = timerReset;
        consoleWindow.clockInterval = setInterval(allConsoles[rootId].clockTick, 1000); // Keyboard navigation handlers
        // 33: pg up, 37: left, 38: up

        registerKeyEvent([33, 37, 38], window.impress().prev); // 34: pg down, 39: right, 40: down

        registerKeyEvent([34, 39, 40], window.impress().next); // 32: space

        registerKeyEvent([32], spaceHandler); // 82: R

        registerKeyEvent([82], timerReset); // Cleanup

        consoleWindow.onbeforeunload = function () {
          // I don't know why onunload doesn't work here.
          clearInterval(consoleWindow.clockInterval);
        }; // It will need a little nudge on Firefox, but only after loading:


        onStepEnter();
        consoleWindow.initialized = false;
        consoleWindow.document.close(); //Catch any window resize to pass size on

        window.onresize = resize;
        consoleWindow.onresize = resize;
        return consoleWindow;
      }
    };

    var resize = function resize() {
      var slideView = consoleWindow.document.getElementById('slideView');
      var preView = consoleWindow.document.getElementById('preView'); // Get ratio of presentation

      var ratio = window.innerHeight / window.innerWidth; // Get size available for views

      var views = consoleWindow.document.getElementById('views'); // SlideView may have a border or some padding:
      // asuming same border width on both direktions

      var delta = slideView.offsetWidth - slideView.clientWidth; // Set views

      var slideViewWidth = views.clientWidth - delta;
      var slideViewHeight = Math.floor(slideViewWidth * ratio);
      var preViewTop = slideViewHeight + preViewGap;
      var preViewWidth = Math.floor(slideViewWidth * preViewDefaultFactor);
      var preViewHeight = Math.floor(slideViewHeight * preViewDefaultFactor); // Shrink preview to fit into space available

      if (views.clientHeight - delta < preViewTop + preViewHeight) {
        preViewHeight = views.clientHeight - delta - preViewTop;
        preViewWidth = Math.floor(preViewHeight / ratio);
      } // If preview is not high enough forget ratios!


      if (preViewWidth <= Math.floor(slideViewWidth * preViewMinimumFactor)) {
        slideViewWidth = views.clientWidth - delta;
        slideViewHeight = Math.floor((views.clientHeight - delta - preViewGap) / (1 + preViewMinimumFactor));
        preViewTop = slideViewHeight + preViewGap;
        preViewWidth = Math.floor(slideViewWidth * preViewMinimumFactor);
        preViewHeight = views.clientHeight - delta - preViewTop;
      } // Set the calculated into styles


      slideView.style.width = slideViewWidth + 'px';
      slideView.style.height = slideViewHeight + 'px';
      preView.style.top = preViewTop + 'px';
      preView.style.width = preViewWidth + 'px';
      preView.style.height = preViewHeight + 'px';
    };

    var _init = function _init(cssConsole, cssIframe) {
      if (cssConsole !== undefined) {
        cssFile = cssConsole;
      } // You can also specify the css in the presentation root div:
      // <div id="impress" data-console-css=..." data-console-css-iframe="...">
      else if (root.dataset.consoleCss !== undefined) {
          cssFile = root.dataset.consoleCss;
        }

      if (cssIframe !== undefined) {
        cssFileIframe = cssIframe;
      } else if (root.dataset.consoleCssIframe !== undefined) {
        cssFileIframe = root.dataset.consoleCssIframe;
      } // Register the event


      root.addEventListener('impress:stepleave', onStepLeave);
      root.addEventListener('impress:stepenter', onStepEnter);
      root.addEventListener('impress:substep:stepleaveaborted', onSubstep);
      root.addEventListener('impress:substep:show', onSubstepShow);
      root.addEventListener('impress:substep:hide', onSubstepHide); //When the window closes, clean up after ourselves.

      window.onunload = function () {
        if (consoleWindow && !consoleWindow.closed) {
          consoleWindow.close();
        }
      }; //Open speaker console when they press 'p'


      registerKeyEvent([80], open, window); //Btw, you can also launch console automatically:
      //<div id="impress" data-console-autolaunch="true">

      if (root.dataset.consoleAutolaunch === 'true') {
        open();
      }
    };

    var init = function init(cssConsole, cssIframe) {
      if ((cssConsole === undefined || cssConsole === cssFileOldDefault) && (cssIframe === undefined || cssIframe === cssFileIframeOldDefault)) {
        window.console.log('impressConsole().init() is deprecated. ' + 'impressConsole is now initialized automatically when you ' + 'call impress().init().');
      }

      _init(cssConsole, cssIframe);
    }; // New API for impress.js plugins is based on using events


    root.addEventListener('impress:console:open', function () {
      open();
    });
    root.addEventListener('impress:console:registerKeyEvent', function (event) {
      registerKeyEvent(event.detail.keyCodes, event.detail.handler, event.detail.window);
    }); // Return the object

    allConsoles[rootId] = {
      init: init,
      open: open,
      clockTick: clockTick,
      registerKeyEvent: registerKeyEvent,
      _init: _init
    };
    return allConsoles[rootId];
  }; // This initializes impressConsole automatically when initializing impress itself


  document.addEventListener('impress:init', function (event) {
    // Note: impressConsole wants the id string, not the DOM element directly
    impressConsole(event.target.id)._init(); // Add 'P' to the help popup


    triggerEvent(document, 'impress:help:add', {
      command: 'P',
      text: 'Presenter console',
      row: 10
    });
  }); // Returns a string to be used inline as a css <style> element in the console window.
  // Apologies for length, but hiding it here at the end to keep it away from rest of the code.

  var cssStyleStr = function cssStyleStr() {
    return "<style>\n            #impressconsole body {\n                background-color: rgb(255, 255, 255);\n                padding: 0;\n                margin: 0;\n                font-family: verdana, arial, sans-serif;\n                font-size: 2vw;\n            }\n\n            #impressconsole div#console {\n                position: absolute;\n                top: 0.5vw;\n                left: 0.5vw;\n                right: 0.5vw;\n                bottom: 3vw;\n                margin: 0;\n            }\n\n            #impressconsole div#views, #impressconsole div#notes {\n                position: absolute;\n                top: 0;\n                bottom: 0;\n            }\n\n            #impressconsole div#views {\n                left: 0;\n                right: 50vw;\n                overflow: hidden;\n            }\n\n            #impressconsole div#blocker {\n                position: absolute;\n                right: 0;\n                bottom: 0;\n            }\n\n            #impressconsole div#notes {\n                left: 50vw;\n                right: 0;\n                overflow-x: hidden;\n                overflow-y: auto;\n                padding: 0.3ex;\n                background-color: rgb(255, 255, 255);\n                border: solid 1px rgb(120, 120, 120);\n            }\n\n            #impressconsole div#notes .noNotes {\n                color: rgb(200, 200, 200);\n            }\n\n            #impressconsole div#notes p {\n                margin-top: 0;\n            }\n\n            #impressconsole iframe {\n                position: absolute;\n                margin: 0;\n                padding: 0;\n                left: 0;\n                border: solid 1px rgb(120, 120, 120);\n            }\n\n            #impressconsole iframe#slideView {\n                top: 0;\n                width: 49vw;\n                height: 49vh;\n            }\n\n            #impressconsole iframe#preView {\n                opacity: 0.7;\n                top: 50vh;\n                width: 30vw;\n                height: 30vh;\n            }\n\n            #impressconsole div#controls {\n                margin: 0;\n                position: absolute;\n                bottom: 0.25vw;\n                left: 0.5vw;\n                right: 0.5vw;\n                height: 2.5vw;\n                background-color: rgb(255, 255, 255);\n                background-color: rgba(255, 255, 255, 0.6);\n            }\n\n            #impressconsole div#prev, div#next {\n            }\n\n            #impressconsole div#prev a, #impressconsole div#next a {\n                display: block;\n                border: solid 1px rgb(70, 70, 70);\n                border-radius: 0.5vw;\n                font-size: 1.5vw;\n                padding: 0.25vw;\n                text-decoration: none;\n                background-color: rgb(220, 220, 220);\n                color: rgb(0, 0, 0);\n            }\n\n            #impressconsole div#prev a:hover, #impressconsole div#next a:hover {\n                background-color: rgb(245, 245, 245);\n            }\n\n            #impressconsole div#prev {\n                float: left;\n            }\n\n            #impressconsole div#next {\n                float: right;\n            }\n\n            #impressconsole div#status {\n                margin-left: 2em;\n                margin-right: 2em;\n                text-align: center;\n                float: right;\n            }\n\n            #impressconsole div#clock {\n                margin-left: 2em;\n                margin-right: 2em;\n                text-align: center;\n                float: left;\n            }\n\n            #impressconsole div#timer {\n                margin-left: 2em;\n                margin-right: 2em;\n                text-align: center;\n                float: left;\n            }\n\n            #impressconsole span.moving {\n                color: rgb(255, 0, 0);\n            }\n\n            #impressconsole span.ready {\n                color: rgb(0, 128, 0);\n            }\n        </style>";
  };
})(document, window);

(function (document, window) {
  "use strict";

  var root, api, gc, attributeTracker;
  attributeTracker = []; // Function names

  var enhanceMediaNodes, enhanceMedia, removeMediaClasses, onStepenterDetectImpressConsole, onStepenter, onStepleave, onPlay, onPause, onEnded, getMediaAttribute, teardown;
  document.addEventListener("impress:init", function (event) {
    root = event.target;
    api = event.detail.api;
    gc = api.lib.gc;
    enhanceMedia();
    gc.pushCallback(teardown);
  }, false);

  teardown = function teardown() {
    var el, i;
    removeMediaClasses();

    for (i = 0; i < attributeTracker.length; i += 1) {
      el = attributeTracker[i];
      el.node.removeAttribute(el.attr);
    }

    attributeTracker = [];
  };

  getMediaAttribute = function getMediaAttribute(attributeName, nodes) {
    var attrName, attrValue, i, node;
    attrName = "data-media-" + attributeName; // Look for attributes in all nodes

    for (i = 0; i < nodes.length; i += 1) {
      node = nodes[i]; // First test, if the attribute exists, because some browsers may return
      // an empty string for non-existing attributes - specs are not clear at that point

      if (node.hasAttribute(attrName)) {
        attrValue = node.getAttribute(attrName);

        if (attrValue === "" || attrValue === "true") {
          return true;
        } else {
          return false;
        }
      } // No attribute found at current node, proceed with next round

    } // Last resort: no attribute found - return undefined to distiguish from false


    return undefined;
  };

  onPlay = function onPlay(event) {
    var type = event.target.nodeName.toLowerCase();
    document.body.classList.add("impress-media-" + type + "-playing");
    document.body.classList.remove("impress-media-" + type + "-paused");
  };

  onPause = function onPause(event) {
    var type = event.target.nodeName.toLowerCase();
    document.body.classList.add("impress-media-" + type + "-paused");
    document.body.classList.remove("impress-media-" + type + "-playing");
  };

  onEnded = function onEnded(event) {
    var type = event.target.nodeName.toLowerCase();
    document.body.classList.remove("impress-media-" + type + "-playing");
    document.body.classList.remove("impress-media-" + type + "-paused");
  };

  removeMediaClasses = function removeMediaClasses() {
    var type, types;
    types = ["video", "audio"];

    for (type in types) {
      document.body.classList.remove("impress-media-" + types[type] + "-playing");
      document.body.classList.remove("impress-media-" + types[type] + "-paused");
    }
  };

  enhanceMediaNodes = function enhanceMediaNodes() {
    var i, id, media, mediaElement, type;
    media = root.querySelectorAll("audio, video");

    for (i = 0; i < media.length; i += 1) {
      type = media[i].nodeName.toLowerCase(); // Set an id to identify each media node - used e.g. for cross references by
      // the consoleMedia plugin

      mediaElement = media[i];
      id = mediaElement.getAttribute("id");

      if (id === undefined || id === null) {
        mediaElement.setAttribute("id", "media-" + type + "-" + i);
        attributeTracker.push({
          "node": mediaElement,
          "attr": "id"
        });
      }

      gc.addEventListener(mediaElement, "play", onPlay);
      gc.addEventListener(mediaElement, "playing", onPlay);
      gc.addEventListener(mediaElement, "pause", onPause);
      gc.addEventListener(mediaElement, "ended", onEnded);
    }
  };

  enhanceMedia = function enhanceMedia() {
    var steps, stepElement, i;
    enhanceMediaNodes();
    steps = document.getElementsByClassName("step");

    for (i = 0; i < steps.length; i += 1) {
      stepElement = steps[i];
      gc.addEventListener(stepElement, "impress:stepenter", onStepenter);
      gc.addEventListener(stepElement, "impress:stepleave", onStepleave);
    }
  };

  onStepenterDetectImpressConsole = function onStepenterDetectImpressConsole() {
    return {
      "preview": window.frameElement !== null && window.frameElement.id === "preView",
      "slideView": window.frameElement !== null && window.frameElement.id === "slideView"
    };
  };

  onStepenter = function onStepenter(event) {
    var stepElement, media, mediaElement, i, onConsole, autoplay;

    if (!event || !event.target) {
      return;
    }

    stepElement = event.target;
    removeMediaClasses();
    media = stepElement.querySelectorAll("audio, video");

    for (i = 0; i < media.length; i += 1) {
      mediaElement = media[i]; // Autoplay when (maybe inherited) autoplay setting is true,
      // but only if not on preview of the next step in impressConsole

      onConsole = onStepenterDetectImpressConsole();
      autoplay = getMediaAttribute("autoplay", [mediaElement, stepElement, root]);

      if (autoplay && !onConsole.preview) {
        if (onConsole.slideView) {
          mediaElement.muted = true;
        }

        mediaElement.play();
      }
    }
  };

  onStepleave = function onStepleave(event) {
    var stepElement, media, i, mediaElement, autoplay, autopause, autostop;

    if (!event || !event.target) {
      return;
    }

    stepElement = event.target;
    media = event.target.querySelectorAll("audio, video");

    for (i = 0; i < media.length; i += 1) {
      mediaElement = media[i];
      autoplay = getMediaAttribute("autoplay", [mediaElement, stepElement, root]);
      autopause = getMediaAttribute("autopause", [mediaElement, stepElement, root]);
      autostop = getMediaAttribute("autostop", [mediaElement, stepElement, root]); // If both autostop and autopause are undefined, set it to the value of autoplay

      if (autostop === undefined && autopause === undefined) {
        autostop = autoplay;
      }

      if (autopause || autostop) {
        mediaElement.pause();

        if (autostop) {
          mediaElement.currentTime = 0;
        }
      }
    }

    removeMediaClasses();
  };
})(document, window);

(function (document) {
  "use strict";

  var getNextStep = function getNextStep(el) {
    var steps = document.querySelectorAll(".step");

    for (var i = 0; i < steps.length; i++) {
      if (steps[i] === el) {
        if (i + 1 < steps.length) {
          return steps[i + 1];
        } else {
          return steps[0];
        }
      }
    }
  };

  var getPrevStep = function getPrevStep(el) {
    var steps = document.querySelectorAll(".step");

    for (var i = steps.length - 1; i >= 0; i--) {
      if (steps[i] === el) {
        if (i - 1 >= 0) {
          return steps[i - 1];
        } else {
          return steps[steps.length - 1];
        }
      }
    }
  }; // Detect mobile browsers & add CSS class as appropriate.


  document.addEventListener("impress:init", function (event) {
    var body = document.body;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      body.classList.add("impress-mobile");
    } // Unset all this on teardown


    var api = event.detail.api;
    api.lib.gc.pushCallback(function () {
      document.body.classList.remove("impress-mobile");
      var prev = document.getElementsByClassName("prev")[0];
      var next = document.getElementsByClassName("next")[0];

      if (typeof prev !== "undefined") {
        prev.classList.remove("prev");
      }

      if (typeof next !== "undefined") {
        next.classList.remove("next");
      }
    });
  });
  document.addEventListener("impress:stepenter", function (event) {
    var oldprev = document.getElementsByClassName("prev")[0];
    var oldnext = document.getElementsByClassName("next")[0];
    var prev = getPrevStep(event.target);
    prev.classList.add("prev");
    var next = getNextStep(event.target);
    next.classList.add("next");

    if (typeof oldprev !== "undefined") {
      oldprev.classList.remove("prev");
    }

    if (typeof oldnext !== "undefined") {
      oldnext.classList.remove("next");
    }
  });
})(document);

(function (document, window) {
  "use strict";

  var timeout = 3;
  var timeoutHandle;

  var hide = function hide() {
    // Mouse is now inactive
    document.body.classList.add("impress-mouse-timeout");
  };

  var show = function show() {
    if (timeoutHandle) {
      window.clearTimeout(timeoutHandle);
    } // Mouse is now active


    document.body.classList.remove("impress-mouse-timeout"); // Then set new timeout after which it is considered inactive again

    timeoutHandle = window.setTimeout(hide, timeout * 1000);
  };

  document.addEventListener("impress:init", function (event) {
    var api = event.detail.api;
    var gc = api.lib.gc;
    gc.addEventListener(document, "mousemove", show);
    gc.addEventListener(document, "click", show);
    gc.addEventListener(document, "touch", show); // Set first timeout

    show(); // Unset all this on teardown

    gc.pushCallback(function () {
      window.clearTimeout(timeoutHandle);
      document.body.classList.remove("impress-mouse-timeout");
    });
  }, false);
})(document, window);

(function (document) {
  "use strict"; // Wait for impress.js to be initialized

  document.addEventListener("impress:init", function (event) {
    // Getting API from event data.
    // So you don't event need to know what is the id of the root element
    // or anything. `impress:init` event data gives you everything you
    // need to control the presentation that was just initialized.
    var api = event.detail.api;
    var gc = api.lib.gc;
    var util = api.lib.util;

    var isNavigationEvent = function isNavigationEvent(event) {
      // Don't trigger navigation for example when user returns to browser window with ALT+TAB
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return false;
      } // In the case of TAB, we force step navigation always, overriding the browser
      // navigation between input elements, buttons and links.


      if (event.keyCode === 9) {
        return true;
      } // With the sole exception of TAB, we also ignore keys pressed if shift is down.


      if (event.shiftKey) {
        return false;
      }

      if (event.keyCode >= 32 && event.keyCode <= 34 || event.keyCode >= 37 && event.keyCode <= 40) {
        return true;
      }
    }; // KEYBOARD NAVIGATION HANDLERS
    // Prevent default keydown action when one of supported key is pressed.


    gc.addEventListener(document, "keydown", function (event) {
      if (isNavigationEvent(event)) {
        event.preventDefault();
      }
    }, false); // Trigger impress action (next or prev) on keyup.

    gc.addEventListener(document, "keyup", function (event) {
      if (isNavigationEvent(event)) {
        if (event.shiftKey) {
          switch (event.keyCode) {
            case 9:
              // Shift+tab
              api.prev();
              break;
          }
        } else {
          switch (event.keyCode) {
            case 33: // Pg up

            case 37: // Left

            case 38:
              // Up
              api.prev(event);
              break;

            case 9: // Tab

            case 32: // Space

            case 34: // Pg down

            case 39: // Right

            case 40:
              // Down
              api.next(event);
              break;
          }
        }

        event.preventDefault();
      }
    }, false); // Delegated handler for clicking on the links to presentation steps

    gc.addEventListener(document, "click", function (event) {
      // Event delegation with "bubbling"
      // check if event target (or any of its parents is a link)
      var target = event.target;

      try {
        while (target.tagName !== "A" && target !== document.documentElement) {
          target = target.parentNode;
        }

        if (target.tagName === "A") {
          var href = target.getAttribute("href"); // If it's a link to presentation step, target this step

          if (href && href[0] === "#") {
            target = document.getElementById(href.slice(1));
          }
        }

        if (api["goto"](target)) {
          event.stopImmediatePropagation();
          event.preventDefault();
        }
      } catch (err) {
        // For example, when clicking on the button to launch speaker console, the button
        // is immediately deleted from the DOM. In this case target is a DOM element when
        // we get it, but turns out to be null if you try to actually do anything with it.
        if (err instanceof TypeError && err.message === "target is null") {
          return;
        }

        throw err;
      }
    }, false); // Delegated handler for clicking on step elements

    gc.addEventListener(document, "click", function (event) {
      var target = event.target;

      try {
        // Find closest step element that is not active
        while (!(target.classList.contains("step") && !target.classList.contains("active")) && target !== document.documentElement) {
          target = target.parentNode;
        }

        if (api["goto"](target)) {
          event.preventDefault();
        }
      } catch (err) {
        // For example, when clicking on the button to launch speaker console, the button
        // is immediately deleted from the DOM. In this case target is a DOM element when
        // we get it, but turns out to be null if you try to actually do anything with it.
        if (err instanceof TypeError && err.message === "target is null") {
          return;
        }

        throw err;
      }
    }, false); // Add a line to the help popup

    util.triggerEvent(document, "impress:help:add", {
      command: "Left &amp; Right",
      text: "Previous &amp; Next step",
      row: 1
    });
  }, false);
})(document);

(function (document) {
  'use strict';

  var toolbar;
  var api;
  var root;
  var steps;
  var hideSteps = [];
  var prev;
  var select;
  var next;

  var triggerEvent = function triggerEvent(el, eventName, detail) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, detail);
    el.dispatchEvent(event);
  };

  var makeDomElement = function makeDomElement(html) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.firstChild;
  };

  var selectOptionsHtml = function selectOptionsHtml() {
    var options = '';

    for (var i = 0; i < steps.length; i++) {
      // Omit steps that are listed as hidden from select widget
      if (hideSteps.indexOf(steps[i]) < 0) {
        options = options + '<option value="' + steps[i].id + '">' + // jshint ignore:line
        steps[i].id + '</option>' + '\n'; // jshint ignore:line
      }
    }

    return options;
  };

  var addNavigationControls = function addNavigationControls(event) {
    api = event.detail.api;
    var gc = api.lib.gc;
    root = event.target;
    steps = root.querySelectorAll('.step');
    var prevHtml = '<button id="impress-navigation-ui-prev" title="Previous" ' + 'class="impress-navigation-ui">&lt;</button>';
    var selectHtml = '<select id="impress-navigation-ui-select" title="Go to" ' + 'class="impress-navigation-ui">' + '\n' + selectOptionsHtml() + '</select>';
    var nextHtml = '<button id="impress-navigation-ui-next" title="Next" ' + 'class="impress-navigation-ui">&gt;</button>';
    prev = makeDomElement(prevHtml);
    prev.addEventListener('click', function () {
      api.prev();
    });
    select = makeDomElement(selectHtml);
    select.addEventListener('change', function (event) {
      api["goto"](event.target.value);
    });
    gc.addEventListener(root, 'impress:steprefresh', function (event) {
      // As impress.js core now allows to dynamically edit the steps, including adding,
      // removing, and reordering steps, we need to requery and redraw the select list on
      // every stepenter event.
      steps = root.querySelectorAll('.step');
      select.innerHTML = '\n' + selectOptionsHtml(); // Make sure the list always shows the step we're actually on, even if it wasn't
      // selected from the list

      select.value = event.target.id;
    });
    next = makeDomElement(nextHtml);
    next.addEventListener('click', function () {
      api.next();
    });
    triggerEvent(toolbar, 'impress:toolbar:appendChild', {
      group: 0,
      element: prev
    });
    triggerEvent(toolbar, 'impress:toolbar:appendChild', {
      group: 0,
      element: select
    });
    triggerEvent(toolbar, 'impress:toolbar:appendChild', {
      group: 0,
      element: next
    });
  }; // API for not listing given step in the select widget.
  // For example, if you set class="skip" on some element, you may not want it to show up in the
  // list either. Otoh we cannot assume that, or anything else, so steps that user wants omitted
  // must be specifically added with this API call.


  document.addEventListener('impress:navigation-ui:hideStep', function (event) {
    hideSteps.push(event.target);

    if (select) {
      select.innerHTML = selectOptionsHtml();
    }
  }, false); // Wait for impress.js to be initialized

  document.addEventListener('impress:init', function (event) {
    toolbar = document.querySelector('#impress-toolbar');

    if (toolbar) {
      addNavigationControls(event);
    }
  }, false);
})(document);
/* global document */


(function (document) {
  "use strict";

  var root;
  var stepids = []; // Get stepids from the steps under impress root

  var getSteps = function getSteps() {
    stepids = [];
    var steps = root.querySelectorAll(".step");

    for (var i = 0; i < steps.length; i++) {
      stepids[i + 1] = steps[i].id;
    }
  }; // Wait for impress.js to be initialized


  document.addEventListener("impress:init", function (event) {
    root = event.target;
    getSteps();
    var gc = event.detail.api.lib.gc;
    gc.pushCallback(function () {
      stepids = [];

      if (progressbar) {
        progressbar.style.width = "";
      }

      if (progress) {
        progress.innerHTML = "";
      }
    });
  });
  var progressbar = document.querySelector("div.impress-progressbar div");
  var progress = document.querySelector("div.impress-progress");

  if (null !== progressbar || null !== progress) {
    document.addEventListener("impress:stepleave", function (event) {
      updateProgressbar(event.detail.next.id);
    });
    document.addEventListener("impress:steprefresh", function (event) {
      getSteps();
      updateProgressbar(event.target.id);
    });
  }

  function updateProgressbar(slideId) {
    var slideNumber = stepids.indexOf(slideId);

    if (null !== progressbar) {
      var width = 100 / (stepids.length - 1) * slideNumber;
      progressbar.style.width = width.toFixed(2) + "%";
    }

    if (null !== progress) {
      progress.innerHTML = slideNumber + "/" + (stepids.length - 1);
    }
  }
})(document);

(function (document, window) {
  "use strict";

  var startingState = {};
  /**
   * Copied from core impress.js. We currently lack a library mechanism to
   * to share utility functions like this.
   */

  var toNumber = function toNumber(numeric, fallback) {
    return isNaN(numeric) ? fallback || 0 : Number(numeric);
  };
  /**
   * Extends toNumber() to correctly compute also relative-to-screen-size values 5w and 5h.
   *
   * Returns the computed value in pixels with w/h postfix removed.
   */


  var toNumberAdvanced = function toNumberAdvanced(numeric, fallback) {
    if (typeof numeric !== "string") {
      return toNumber(numeric, fallback);
    }

    var ratio = numeric.match(/^([+-]*[\d\.]+)([wh])$/);

    if (ratio == null) {
      return toNumber(numeric, fallback);
    } else {
      var value = parseFloat(ratio[1]);
      var multiplier = ratio[2] === "w" ? window.innerWidth : window.innerHeight;
      return value * multiplier;
    }
  };

  var computeRelativePositions = function computeRelativePositions(el, prev) {
    var data = el.dataset;

    if (!prev) {
      // For the first step, inherit these defaults
      prev = {
        x: 0,
        y: 0,
        z: 0,
        relative: {
          x: 0,
          y: 0,
          z: 0
        }
      };
    }

    if (data.relTo) {
      var ref = document.getElementById(data.relTo);

      if (ref) {
        // Test, if it is a previous step that already has some assigned position data
        if (el.compareDocumentPosition(ref) & Node.DOCUMENT_POSITION_PRECEDING) {
          prev.x = toNumber(ref.getAttribute("data-x"));
          prev.y = toNumber(ref.getAttribute("data-y"));
          prev.z = toNumber(ref.getAttribute("data-z"));
          prev.relative = {};
        } else {
          window.console.error("impress.js rel plugin: Step \"" + data.relTo + "\" is not defined " + "*before* the current step. Referencing is limited to previously defined " + "steps. Please check your markup. Ignoring data-rel-to attribute of " + "this step. Have a look at the documentation for how to create relative " + "positioning to later shown steps with the help of the goto plugin.");
        }
      } else {
        // Step not found
        window.console.warn("impress.js rel plugin: \"" + data.relTo + "\" is not a valid step in this " + "impress.js presentation. Please check your markup. Ignoring data-rel-to " + "attribute of this step.");
      }
    }

    var step = {
      x: toNumber(data.x, prev.x),
      y: toNumber(data.y, prev.y),
      z: toNumber(data.z, prev.z),
      relative: {
        x: toNumberAdvanced(data.relX, prev.relative.x),
        y: toNumberAdvanced(data.relY, prev.relative.y),
        z: toNumberAdvanced(data.relZ, prev.relative.z)
      }
    }; // Relative position is ignored/zero if absolute is given.
    // Note that this also has the effect of resetting any inherited relative values.

    if (data.x !== undefined) {
      step.relative.x = 0;
    }

    if (data.y !== undefined) {
      step.relative.y = 0;
    }

    if (data.z !== undefined) {
      step.relative.z = 0;
    } // Apply relative position to absolute position, if non-zero
    // Note that at this point, the relative values contain a number value of pixels.


    step.x = step.x + step.relative.x;
    step.y = step.y + step.relative.y;
    step.z = step.z + step.relative.z;
    return step;
  };

  var rel = function rel(root) {
    var steps = root.querySelectorAll(".step");
    var prev;
    startingState[root.id] = [];

    for (var i = 0; i < steps.length; i++) {
      var el = steps[i];
      startingState[root.id].push({
        el: el,
        x: el.getAttribute("data-x"),
        y: el.getAttribute("data-y"),
        z: el.getAttribute("data-z"),
        relX: el.getAttribute("data-rel-x"),
        relY: el.getAttribute("data-rel-y"),
        relZ: el.getAttribute("data-rel-z")
      });
      var step = computeRelativePositions(el, prev); // Apply relative position (if non-zero)

      el.setAttribute("data-x", step.x);
      el.setAttribute("data-y", step.y);
      el.setAttribute("data-z", step.z);
      prev = step;
    }
  }; // Register the plugin to be called in pre-init phase


  window.impress.addPreInitPlugin(rel); // Register teardown callback to reset the data.x, .y, .z values.

  document.addEventListener("impress:init", function (event) {
    var root = event.target;
    event.detail.api.lib.gc.pushCallback(function () {
      var steps = startingState[root.id];
      var step;

      while (step = steps.pop()) {
        // Reset x/y/z in cases where this plugin has changed it.
        if (step.relX !== null) {
          if (step.x === null) {
            step.el.removeAttribute("data-x");
          } else {
            step.el.setAttribute("data-x", step.x);
          }
        }

        if (step.relY !== null) {
          if (step.y === null) {
            step.el.removeAttribute("data-y");
          } else {
            step.el.setAttribute("data-y", step.y);
          }
        }

        if (step.relZ !== null) {
          if (step.z === null) {
            step.el.removeAttribute("data-z");
          } else {
            step.el.setAttribute("data-z", step.z);
          }
        }
      }

      delete startingState[root.id];
    });
  }, false);
})(document, window);

(function (document, window) {
  "use strict"; // Wait for impress.js to be initialized

  document.addEventListener("impress:init", function (event) {
    var api = event.detail.api; // Rescale presentation when window is resized

    api.lib.gc.addEventListener(window, "resize", api.lib.util.throttle(function () {
      // Force going to active step again, to trigger rescaling
      api["goto"](document.querySelector(".step.active"), 500);
    }, 250), false);
  }, false);
})(document, window);

(function (document, window) {
  "use strict";

  var util;
  document.addEventListener("impress:init", function (event) {
    util = event.detail.api.lib.util;
  }, false);

  var getNextStep = function getNextStep(el) {
    var steps = document.querySelectorAll(".step");

    for (var i = 0; i < steps.length; i++) {
      if (steps[i] === el) {
        if (i + 1 < steps.length) {
          return steps[i + 1];
        } else {
          return steps[0];
        }
      }
    }
  };

  var getPrevStep = function getPrevStep(el) {
    var steps = document.querySelectorAll(".step");

    for (var i = steps.length - 1; i >= 0; i--) {
      if (steps[i] === el) {
        if (i - 1 >= 0) {
          return steps[i - 1];
        } else {
          return steps[steps.length - 1];
        }
      }
    }
  };

  var skip = function skip(event) {
    if (!event || !event.target) {
      return;
    }

    if (event.detail.next.classList.contains("skip")) {
      if (event.detail.reason === "next") {
        // Go to the next next step instead
        event.detail.next = getNextStep(event.detail.next); // Recursively call this plugin again, until there's a step not to skip

        skip(event);
      } else if (event.detail.reason === "prev") {
        // Go to the previous previous step instead
        event.detail.next = getPrevStep(event.detail.next);
        skip(event);
      } // If the new next element has its own transitionDuration, we're responsible for setting
      // that on the event as well


      event.detail.transitionDuration = util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
    }
  };

  window.impress.addPreStepLeavePlugin(skip, 1);
})(document, window);

(function (document, window) {
  "use strict";

  var stop = function stop(event) {
    if (!event || !event.target) {
      return;
    }

    if (event.target.classList.contains("stop")) {
      if (event.detail.reason === "next") {
        return false;
      }
    }
  }; // Register the plugin to be called in pre-stepleave phase
  // The weight makes this plugin run fairly early.


  window.impress.addPreStepLeavePlugin(stop, 2);
})(document, window);

(function (document, window) {
  "use strict"; // Copied from core impress.js. Good candidate for moving to src/lib/util.js.

  var triggerEvent = function triggerEvent(el, eventName, detail) {
    var event = document.createEvent("CustomEvent");
    event.initCustomEvent(eventName, true, true, detail);
    el.dispatchEvent(event);
  };

  var activeStep = null;
  document.addEventListener("impress:stepenter", function (event) {
    activeStep = event.target;
  }, false);

  var substep = function substep(event) {
    if (!event || !event.target) {
      return;
    }

    var step = event.target;
    var el; // Needed by jshint

    if (event.detail.reason === "next") {
      el = showSubstepIfAny(step);

      if (el) {
        // Send a message to others, that we aborted a stepleave event.
        triggerEvent(step, "impress:substep:stepleaveaborted", {
          reason: "next",
          substep: el
        }); // Autoplay uses this for reloading itself

        triggerEvent(step, "impress:substep:enter", {
          reason: "next",
          substep: el
        }); // Returning false aborts the stepleave event

        return false;
      }
    }

    if (event.detail.reason === "prev") {
      el = hideSubstepIfAny(step);

      if (el) {
        triggerEvent(step, "impress:substep:stepleaveaborted", {
          reason: "prev",
          substep: el
        });
        triggerEvent(step, "impress:substep:leave", {
          reason: "prev",
          substep: el
        });
        return false;
      }
    }
  };

  var showSubstepIfAny = function showSubstepIfAny(step) {
    var substeps = step.querySelectorAll(".substep");
    var visible = step.querySelectorAll(".substep-visible");

    if (substeps.length > 0) {
      return showSubstep(substeps, visible);
    }
  };

  var showSubstep = function showSubstep(substeps, visible) {
    if (visible.length < substeps.length) {
      for (var i = 0; i < substeps.length; i++) {
        substeps[i].classList.remove("substep-active");
      }

      var el = substeps[visible.length];
      el.classList.add("substep-visible");
      el.classList.add("substep-active");
      return el;
    }
  };

  var hideSubstepIfAny = function hideSubstepIfAny(step) {
    var substeps = step.querySelectorAll(".substep");
    var visible = step.querySelectorAll(".substep-visible");

    if (substeps.length > 0) {
      return hideSubstep(visible);
    }
  };

  var hideSubstep = function hideSubstep(visible) {
    if (visible.length > 0) {
      var current = -1;

      for (var i = 0; i < visible.length; i++) {
        if (visible[i].classList.contains("substep-active")) {
          current = i;
        }

        visible[i].classList.remove("substep-active");
      }

      if (current > 0) {
        visible[current - 1].classList.add("substep-active");
      }

      var el = visible[visible.length - 1];
      el.classList.remove("substep-visible");
      return el;
    }
  }; // Register the plugin to be called in pre-stepleave phase.
  // The weight makes this plugin run before other preStepLeave plugins.


  window.impress.addPreStepLeavePlugin(substep, 1); // When entering a step, in particular when re-entering, make sure that all substeps are hidden
  // at first

  document.addEventListener("impress:stepenter", function (event) {
    var step = event.target;
    var visible = step.querySelectorAll(".substep-visible");

    for (var i = 0; i < visible.length; i++) {
      visible[i].classList.remove("substep-visible");
    }
  }, false); // API for others to reveal/hide next substep /

  document.addEventListener("impress:substep:show", function () {
    showSubstepIfAny(activeStep);
  }, false);
  document.addEventListener("impress:substep:hide", function () {
    hideSubstepIfAny(activeStep);
  }, false);
})(document, window);

(function (document, window) {
  "use strict"; // Touch handler to detect swiping left and right based on window size.
  // If the difference in X change is bigger than 1/20 of the screen width,
  // we simply call an appropriate API function to complete the transition.

  var startX = 0;
  var lastX = 0;
  var lastDX = 0;
  var threshold = window.innerWidth / 20;
  document.addEventListener("touchstart", function (event) {
    lastX = startX = event.touches[0].clientX;
  });
  document.addEventListener("touchmove", function (event) {
    var x = event.touches[0].clientX;
    var diff = x - startX; // To be used in touchend

    lastDX = lastX - x;
    lastX = x;
    window.impress().swipe(diff / window.innerWidth);
  });
  document.addEventListener("touchend", function () {
    var totalDiff = lastX - startX;

    if (Math.abs(totalDiff) > window.innerWidth / 5 && totalDiff * lastDX <= 0) {
      if (totalDiff > window.innerWidth / 5 && lastDX <= 0) {
        window.impress().prev();
      } else if (totalDiff < -window.innerWidth / 5 && lastDX >= 0) {
        window.impress().next();
      }
    } else if (Math.abs(lastDX) > threshold) {
      if (lastDX < -threshold) {
        window.impress().prev();
      } else if (lastDX > threshold) {
        window.impress().next();
      }
    } else {
      // No movement - move (back) to the current slide
      window.impress()["goto"](document.querySelector("#impress .step.active"));
    }
  });
  document.addEventListener("touchcancel", function () {
    // Move (back) to the current slide
    window.impress()["goto"](document.querySelector("#impress .step.active"));
  });
})(document, window);

(function (document) {
  "use strict";

  var toolbar = document.getElementById("impress-toolbar");
  var groups = [];

  var getGroupElement = function getGroupElement(index) {
    var id = "impress-toolbar-group-" + index;

    if (!groups[index]) {
      groups[index] = document.createElement("span");
      groups[index].id = id;
      var nextIndex = getNextGroupIndex(index);

      if (nextIndex === undefined) {
        toolbar.appendChild(groups[index]);
      } else {
        toolbar.insertBefore(groups[index], groups[nextIndex]);
      }
    }

    return groups[index];
  };

  var getNextGroupIndex = function getNextGroupIndex(index) {
    var i = index + 1;

    while (!groups[i] && i < groups.length) {
      i++;
    }

    if (i < groups.length) {
      return i;
    }
  }; // API
  // Other plugins can add and remove buttons by sending them as events.
  // In return, toolbar plugin will trigger events when button was added.


  if (toolbar) {
    toolbar.addEventListener("impress:toolbar:appendChild", function (e) {
      var group = getGroupElement(e.detail.group);
      group.appendChild(e.detail.element);
    });
    toolbar.addEventListener("impress:toolbar:insertBefore", function (e) {
      toolbar.insertBefore(e.detail.element, e.detail.before);
    });
    /**
     * Remove the widget in e.detail.remove.
     */

    toolbar.addEventListener("impress:toolbar:removeWidget", function (e) {
      toolbar.removeChild(e.detail.remove);
    });
    document.addEventListener("impress:init", function (event) {
      var api = event.detail.api;
      api.lib.gc.pushCallback(function () {
        toolbar.innerHTML = "";
        groups = [];
      });
    });
  } // If toolbar

})(document);

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi ./resources/js/impress.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\cours\resources\js\impress.js */"./resources/js/impress.js");


/***/ })

/******/ });