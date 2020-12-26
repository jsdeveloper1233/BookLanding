module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		17: 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rRZ5");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4htw":
/***/ (function(module, exports) {

module.exports = require("wowjs");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7cdu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Services extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "services-area ptb-100 bg-gray"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Our Services"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-services"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-pay"
    })), __jsx("h3", null, "Search Strategy"), __jsx("p", null, "Well at public scho cheeky bugger grub burke."))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-services"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-music-note"
    })), __jsx("h3", null, "Onsite SEO"), __jsx("p", null, "Well at public scho cheeky bugger grub burke."))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-services"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-optic"
    })), __jsx("h3", null, "Keyword Targeting"), __jsx("p", null, "Well at public scho cheeky bugger grub burke."))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-services"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-pie-chart"
    })), __jsx("h3", null, "Link Building"), __jsx("p", null, "Well at public scho cheeky bugger grub burke."))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-services"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-deviantart"
    })), __jsx("h3", null, "CPA Marketing"), __jsx("p", null, "Well at public scho cheeky bugger grub burke."))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-services"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-chart-pie-alt"
    })), __jsx("h3", null, "Report Analysis"), __jsx("p", null, "Well at public scho cheeky bugger grub burke."))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Services);

/***/ }),

/***/ "BfQ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class CtaCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "cta-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-7 col-md-7"
    }, __jsx("p", null, "Pi\u0119kny Call to Action")), __jsx("div", {
      className: "col-lg-5 col-md-5 text-right"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Zam\xF3w ksi\u0105\u017Ck\u0119 teraz!"))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (CtaCard);

/***/ }),

/***/ "L6HC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class BlogOne extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "blog-area blog-section ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("a", {
      href: "#",
      className: "post-image"
    }, __jsx("img", {
      src: "/images/blog-img1.jpg",
      alt: "blog-image"
    })), __jsx("div", {
      className: "blog-post-content"
    }, __jsx("ul", null, __jsx("li", null, __jsx("i", {
      className: "icofont-user-male"
    }), " ", __jsx("a", {
      href: "#"
    }, "Admin")), __jsx("li", null, __jsx("i", {
      className: "icofont-wall-clock"
    }), " January 23, 2019")), __jsx("h3", null, __jsx("a", {
      href: "#"
    }, "The Most Popular New Business Apps")), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), __jsx("a", {
      href: "#",
      className: "read-more-btn"
    }, "Read More ", __jsx("i", {
      className: "icofont-rounded-double-right"
    }))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("a", {
      href: "#",
      className: "post-image"
    }, __jsx("img", {
      src: "/images/blog-img2.jpg",
      alt: "blog-image"
    })), __jsx("div", {
      className: "blog-post-content"
    }, __jsx("ul", null, __jsx("li", null, __jsx("i", {
      className: "icofont-user-male"
    }), " ", __jsx("a", {
      href: "#"
    }, "Admin")), __jsx("li", null, __jsx("i", {
      className: "icofont-wall-clock"
    }), " January 16, 2019")), __jsx("h3", null, __jsx("a", {
      href: "#"
    }, "The Best Marketing Management Tools")), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), __jsx("a", {
      href: "#",
      className: "read-more-btn"
    }, "Read More ", __jsx("i", {
      className: "icofont-rounded-double-right"
    }))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("a", {
      href: "#",
      className: "post-image"
    }, __jsx("img", {
      src: "/images/blog-img3.jpg",
      alt: "blog-image"
    })), __jsx("div", {
      className: "blog-post-content"
    }, __jsx("ul", null, __jsx("li", null, __jsx("i", {
      className: "icofont-user-male"
    }), " ", __jsx("a", {
      href: "#"
    }, "Admin")), __jsx("li", null, __jsx("i", {
      className: "icofont-wall-clock"
    }), " January 14, 2019")), __jsx("h3", null, __jsx("a", {
      href: "#"
    }, "3 WooCommerce Plugins to Boost Sales")), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), __jsx("a", {
      href: "#",
      className: "read-more-btn"
    }, "Read More ", __jsx("i", {
      className: "icofont-rounded-double-right"
    }))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("a", {
      href: "#",
      className: "post-image"
    }, __jsx("img", {
      src: "/images/blog-img4.jpg",
      alt: "blog-image"
    })), __jsx("div", {
      className: "blog-post-content"
    }, __jsx("ul", null, __jsx("li", null, __jsx("i", {
      className: "icofont-user-male"
    }), " ", __jsx("a", {
      href: "#"
    }, "Admin")), __jsx("li", null, __jsx("i", {
      className: "icofont-wall-clock"
    }), " January 06, 2019")), __jsx("h3", null, __jsx("a", {
      href: "#"
    }, "CakeMail Review \u2013 Design Custom Emails")), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), __jsx("a", {
      href: "#",
      className: "read-more-btn"
    }, "Read More ", __jsx("i", {
      className: "icofont-rounded-double-right"
    }))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("a", {
      href: "#",
      className: "post-image"
    }, __jsx("img", {
      src: "/images/blog-img5.jpg",
      alt: "blog-image"
    })), __jsx("div", {
      className: "blog-post-content"
    }, __jsx("ul", null, __jsx("li", null, __jsx("i", {
      className: "icofont-user-male"
    }), " ", __jsx("a", {
      href: "#"
    }, "Admin")), __jsx("li", null, __jsx("i", {
      className: "icofont-wall-clock"
    }), " January 04, 2019")), __jsx("h3", null, __jsx("a", {
      href: "#"
    }, "The Most Popular New Apps in 2019")), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), __jsx("a", {
      href: "#",
      className: "read-more-btn"
    }, "Read More ", __jsx("i", {
      className: "icofont-rounded-double-right"
    }))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("a", {
      href: "#",
      className: "post-image"
    }, __jsx("img", {
      src: "/images/blog-img3.jpg",
      alt: "blog-image"
    })), __jsx("div", {
      className: "blog-post-content"
    }, __jsx("ul", null, __jsx("li", null, __jsx("i", {
      className: "icofont-user-male"
    }), " ", __jsx("a", {
      href: "#"
    }, "Admin")), __jsx("li", null, __jsx("i", {
      className: "icofont-wall-clock"
    }), " January 26, 2019")), __jsx("h3", null, __jsx("a", {
      href: "#"
    }, "The Fastest Growing Apps in 2019")), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), __jsx("a", {
      href: "#",
      className: "read-more-btn"
    }, "Read More ", __jsx("i", {
      className: "icofont-rounded-double-right"
    }))))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "pagination-area"
    }, __jsx("nav", {
      "aria-label": "Page navigation example"
    }, __jsx("ul", {
      className: "pagination justify-content-center"
    }, __jsx("li", {
      className: "page-item"
    }, __jsx("a", {
      className: "page-link",
      href: "#"
    }, __jsx("i", {
      className: "icofont-double-left"
    }))), __jsx("li", {
      className: "page-item active"
    }, __jsx("a", {
      className: "page-link",
      href: "#"
    }, "1")), __jsx("li", {
      className: "page-item"
    }, __jsx("a", {
      className: "page-link",
      href: "#"
    }, "2")), __jsx("li", {
      className: "page-item"
    }, __jsx("a", {
      className: "page-link",
      href: "#"
    }, "3")), __jsx("li", {
      className: "page-item"
    }, __jsx("a", {
      className: "page-link",
      href: "#"
    }, __jsx("i", {
      className: "icofont-double-right"
    }))))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (BlogOne);

/***/ }),

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "NwV9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Pricing2 extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "pricing-area ptb-100",
      id: "kupteraz"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Tylko w pakiecie", __jsx("br", null), " \"Radykalna Prawda w Zwi\u0105zku\""), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Zam\xF3w ksi\u0105\u017Ck\u0119 w pakiecie i oszcz\u0119dzaj")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "pricing-table-box"
    }, __jsx("div", {
      className: "pricingTable-header"
    }, __jsx("h3", {
      className: "title"
    }, "Tylko eBook"), __jsx("div", {
      className: "price-value"
    }, "\xA0\xA038,90 ", __jsx("sup", null, "z\u0142"))), __jsx("ul", {
      className: "pricing-content"
    }, __jsx("li", null, __jsx("i", {
      className: "icofont-tick-mark"
    }), "Ksi\u0105\u017Cka \"Sekrety rozwoju osobistego\" w formacie MOBI"), __jsx("li", null, __jsx("i", {
      className: "icofont-tick-mark"
    }), "Ksi\u0105\u017Cka \"Sekrety rozwoju osobistego\" w formacie EPUB"), __jsx("li", null, __jsx("i", {
      className: "icofont-tick-mark"
    }), "Ksi\u0105\u017Cka \"Sekrety rozwoju osobistego\" w formacie PDF")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "KUP KSI\u0104\u017BKE")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "pricing-table-box"
    }, __jsx("div", {
      className: "pricingTable-header"
    }, __jsx("h3", {
      className: "title"
    }, "Tylko ksi\u0105\u017Cka"), __jsx("div", {
      className: "price-value"
    }, "\xA0\xA039,90 ", __jsx("sup", null, "z\u0142"), __jsx("p", null, "+ 15 - 17 z\u0142 wysy\u0142ka kurierem"))), __jsx("ul", {
      className: "pricing-content"
    }, __jsx("li", null, __jsx("i", {
      className: "icofont-tick-mark"
    }), "Ksi\u0105\u017Cka \"Sekrety rozwoju osobistego\" w formacie papierowym")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "KUP EBOOK")))), __jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
    }, __jsx("div", {
      className: "pricing-table-box"
    }, __jsx("div", {
      className: "pricingTable-header"
    }, __jsx("h3", {
      className: "title"
    }, "Pakiet"), __jsx("div", {
      className: "price-value"
    }, "\xA0\xA0 69,90 ", __jsx("sup", null, "z\u0142"), __jsx("p", null, "+ 0 z\u0142 wysy\u0142ka kurierem !!"))), __jsx("ul", {
      className: "pricing-content"
    }, __jsx("li", null, __jsx("i", {
      className: "icofont-tick-mark"
    }), "Ksi\u0105\u017Cka \"Sekrety rozwoju osobistego\" w formacie papierowym"), __jsx("li", null, __jsx("i", {
      className: "icofont-tick-mark"
    }), "Ksi\u0105\u017Cka \"Sekrety rozwoju osobistego\" w formacie MOBI"), __jsx("li", null, __jsx("i", {
      className: "icofont-tick-mark"
    }), "Ksi\u0105\u017Cka \"Sekrety rozwoju osobistego\" w formacie EPUB"), __jsx("li", null, __jsx("i", {
      className: "icofont-tick-mark"
    }), "Ksi\u0105\u017Cka \"Sekrety rozwoju osobistego\" w formacie PDF"), __jsx("li", null, __jsx("i", {
      className: "icofont-tick-mark"
    }), "2x egzemplarze (dla par) ksi\u0105\u017Ceczki drukowanej \"Radykalna Prawda w Zwi\u0105zku\"")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "KUP PAKIET")), __jsx("p", {
      className: "you-save"
    }, "Oszcz\u0119dzasz 56 z\u0142"))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Pricing2);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "finalPath", function() { return /* binding */ finalPath; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layouts/Navbar.js + 3 modules
var Navbar = __webpack_require__("pFRj");

// EXTERNAL MODULE: ./components/Layouts/Footer.js
var Footer = __webpack_require__("g7ta");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__("tpJJ");
var external_react_modal_video_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_video_);

// CONCATENATED MODULE: ./components/BookLanding/Banner.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Banner_Banner extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isOpen: false
    });

    _defineProperty(this, "openModal", () => {
      this.setState({
        isOpen: true
      });
    });
  }

  render() {
    return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
      className: "main-banner book-home",
      style: {
        backgroundImage: `url(${finalPath} + /images/book-banner.jpg)`
      }
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "hero-content"
    }, __jsx("span", null, "Autor: Sergio S Dorje"), __jsx("h1", null, "Sekrety Rozwoju Osobistego"), __jsx("p", null, "Medytacja, joga, energia, seks, tantra. Odkryj prawdy, o kt\xF3rych nikt nie m\xF3wi."), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "ZAM\xD3W TERAZ")), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.openModal();
      },
      className: "video-btn popup-youtube"
    }, "Obejrzyj zwiastun", __jsx("i", {
      className: "icofont-play-alt-3"
    }))), __jsx("em", {
      className: "inlucdebooks"
    }, "* eBook zawiera wersje MOBI, EPUB i PDF"))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "book-image"
    }, __jsx("img", {
      src: finalPath + "/images/book-img.png",
      alt: "image"
    }))))))), __jsx("div", {
      className: "creative-shape"
    }, __jsx("img", {
      src: finalPath + "/images/bg3.png",
      alt: "bg"
    })), __jsx("div", {
      className: "bg-gray shape-1"
    }), __jsx("div", {
      className: "shape1"
    }, __jsx("img", {
      src: finalPath + "/images/shape1.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape2"
    }, __jsx("img", {
      src: finalPath + "/images/shape2.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape3"
    }, __jsx("img", {
      src: finalPath + "/images/shape3.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape6"
    }, __jsx("img", {
      src: finalPath + "/images/shape6.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape8 rotateme"
    }, __jsx("img", {
      src: finalPath + "/images/shape8.svg",
      alt: "shape"
    })), __jsx("div", {
      className: "shape9"
    }, __jsx("img", {
      src: finalPath + "/images/shape9.svg",
      alt: "shape"
    }))), __jsx(external_react_modal_video_default.a, {
      channel: "youtube",
      isOpen: this.state.isOpen,
      videoId: "szuchBiLrEM",
      onClose: () => this.setState({
        isOpen: false
      })
    }));
  }

}

/* harmony default export */ var BookLanding_Banner = (Banner_Banner);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./components/BookLanding/Partner.js
var Partner_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Partner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});

const options = {
  autoplay: true,
  nav: false,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: false,
  loop: true,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    1024: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
};

class Partner_Partner extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Partner_defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return Partner_jsx("div", {
      className: "partner-area app-partner"
    }, Partner_jsx("div", {
      className: "container"
    }, Partner_jsx("div", {
      className: "row"
    }, this.state.display ? Partner_jsx(OwlCarousel, _extends({
      className: "partner-slides owl-carousel owl-theme"
    }, options), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: finalPath + '/images/partner-1.png',
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: finalPath + '/images/partner-2.png',
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: finalPath + '/images/partner-3.png',
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: finalPath + '/images/partner-4.png',
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: finalPath + '/images/partner-5.png',
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: finalPath + '/images/partner-6.png',
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: finalPath + '/images/partner-7.png',
      alt: "partner"
    })))))) : '')));
  }

}

/* harmony default export */ var BookLanding_Partner = (Partner_Partner);
// CONCATENATED MODULE: ./components/BookLanding/OAutorze.js
var OAutorze_jsx = external_react_default.a.createElement;



class OAutorze_OAutorze extends external_react_["Component"] {
  render() {
    return OAutorze_jsx("section", {
      className: "book-discover ptb-100"
    }, OAutorze_jsx("div", {
      className: "container"
    }, OAutorze_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, OAutorze_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, OAutorze_jsx("div", {
      className: "discover-content"
    }, OAutorze_jsx("h3", null, "O AUTORZE"), OAutorze_jsx("p", null, "Pochodzi z ma\u0142ego miasteczka na Sardynii. Zajmuje si\u0119 wspieraniem ludzi na drodze do \u015Bwiadomego \u017Cycia i pomaga im zajrze\u0107 w g\u0142\u0105b siebie - jest to mo\u017Cliwe dzi\u0119ki jego wiedzy na temat szeroko poj\u0119tej duchowo\u015Bci i wieloletnich do\u015Bwiadcze\u0144. Sam przeby\u0142 swoj\u0105 podr\xF3\u017C do \u015Bwiadomego przebudzenia - teraz wybiera si\u0119 w ni\u0105 razem ze swoimi czytelnikami. Ksi\u0105\u017Cka SEKRETY ROZWOJU OSOBISTEGO jest owocem kilkunastoletniego intensywnego do\u015Bwiadczenia, podbudowanego wiedz\u0105 medyczn\u0105 i wieloletni\u0105 praktyk\u0105. Sergio S Dorje szkoli\u0142 si\u0119 w wielu krajach, uczestnicz\u0105c w kilkudziesi\u0119ciu r\xF3\u017Cnych \u2013 kr\xF3tszych i d\u0142u\u017Cszych warsztatach oraz seminariach \u2013 zar\xF3wno z mnichami z Tybetu i Nepalu, mistrzami Jogi znanymi na ca\u0142ym \u015Bwiecie, jak i ze \u015Bwieckimi prowadz\u0105cymi."), OAutorze_jsx("p", null, "Nie napisa\u0142em tej ksi\u0105\u017Cki po to, by m\xF3wi\u0107 ludziom to, co chc\u0105 us\u0142ysze\u0107. Napisa\u0142em j\u0105, by Ci, kt\xF3rzy s\u0105 otwarci na duchowy samorozw\xF3j, poznali pot\u0119\u017Cne narz\u0119dzia, dzi\u0119ki kt\xF3rym rzeczywisto\u015B\u0107 zacznie by\u0107 ich najwi\u0119kszym dzie\u0142em."), OAutorze_jsx("p", null, "SEKRETY ROZWOJU OSOBISTEGO to ksi\u0105\u017Cka tylko dla os\xF3b, kt\xF3re chc\u0105 dokonywa\u0107 w sobie prawdziwych zmian i chc\u0105 odkry\u0107 prawdy, o kt\xF3rych ma\u0142o kto m\xF3wi.", " "))), OAutorze_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, OAutorze_jsx("div", {
      className: "discover-img"
    }, OAutorze_jsx("img", {
      src: finalPath + "/images/book-img2.png",
      alt: "image"
    }))))));
  }

}

/* harmony default export */ var BookLanding_OAutorze = (OAutorze_OAutorze);
// CONCATENATED MODULE: ./components/BookLanding/Discover2.js
var Discover2_jsx = external_react_default.a.createElement;


class Discover2_Discover2 extends external_react_["Component"] {
  render() {
    return Discover2_jsx("section", {
      className: "book-discover ptb-100"
    }, Discover2_jsx("div", {
      className: "container"
    }, Discover2_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Discover2_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, Discover2_jsx("div", {
      className: "discover-content"
    }, Discover2_jsx("h3", null, "NAJWI\u0118KSZE WARTO\u015ACI Z KSI\u0104\u017BKI"), Discover2_jsx("span", null, "Ksi\u0105\u017Cka, kt\xF3r\u0105 w\u0142a\u015Bnie poznajesz, to pot\u0119\u017Cne narz\u0119dzie samorozwoju, dzi\u0119ki kt\xF3remu dowiesz si\u0119, jak sterowa\u0107 swoim \u017Cyciem i radzi\u0107 sobie ze wszystkimi przeszkodami. "), Discover2_jsx("p", null, "Dzi\u0119ki SEKRETOM ROZWOJU OSOBISTEGO\u2026 "), Discover2_jsx("ul", null, Discover2_jsx("li", null, Discover2_jsx("i", {
      className: "icofont-check"
    }), " Rozci\u0105gniesz swoj\u0105 \u015Bwiadomo\u015B\u0107."), Discover2_jsx("li", null, Discover2_jsx("i", {
      className: "icofont-check"
    }), " Nauczysz si\u0119 odbiera\u0107 \u015Bwiat w spos\xF3b duchowy"), Discover2_jsx("li", null, Discover2_jsx("i", {
      className: "icofont-check"
    }), " Dowiesz si\u0119 jak minimalizowa\u0107 b\u0142\u0119dy, zwi\u0119ksza\u0107 skuteczno\u015B\u0107 swoich dzia\u0142a\u0144 i unika\u0107 traum. "), Discover2_jsx("li", null, Discover2_jsx("i", {
      className: "icofont-check"
    }), " Poznasz typy energii i nauczysz si\u0119 by\u0107 w r\xF3wnowadze energetycznej."), Discover2_jsx("li", null, Discover2_jsx("i", {
      className: "icofont-check"
    }), " Nauczysz si\u0119 pracy z intencj\u0105"), Discover2_jsx("li", null, Discover2_jsx("i", {
      className: "icofont-check"
    }), " Zdob\u0119dziesz si\u0142\u0119, by uwolni\u0107 si\u0119 od negatywnych os\xF3b"), Discover2_jsx("li", null, Discover2_jsx("i", {
      className: "icofont-check"
    }), " Poznasz sekret udanej komunikacji w zwi\u0105zki"), Discover2_jsx("li", null, Discover2_jsx("i", {
      className: "icofont-check"
    }), " Dowiesz si\u0119 jak wyznacza\u0107 cele, by spe\u0142nia\u0107 swoje najg\u0142\u0119bsze pragnienia"), Discover2_jsx("li", null, Discover2_jsx("i", {
      className: "icofont-check"
    }), " U\u015Bwiadomisz sobie moc samodyscypliny"), Discover2_jsx("li", null, Discover2_jsx("i", {
      className: "icofont-check"
    }), " Dowiesz si\u0119 jak oczyszcza\u0107 umys\u0142 z negatywnych wp\u0142yw\xF3w"), Discover2_jsx("li", null, Discover2_jsx("i", {
      className: "icofont-check"
    }), " Zrozumiesz swoje wewn\u0119trzne dziecko"), Discover2_jsx("li", null, Discover2_jsx("i", {
      className: "icofont-check"
    }), " Dowiesz si\u0119 czym jest PRAWDZIWA tantra"), Discover2_jsx("li", null, Discover2_jsx("i", {
      className: "icofont-check"
    }), " Zobaczy jak nie pa\u015B\u0107 ofiar\u0105 manipulacji z\u0142ego lidera\u2026"), Discover2_jsx("li", null, Discover2_jsx("i", {
      className: "icofont-check"
    }), " Zrozumiesz swoje wewn\u0119trzne dziecko")))), Discover2_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, Discover2_jsx("div", {
      className: "discover-img"
    }, Discover2_jsx("img", {
      src: "/images/book-img2.png",
      alt: "image"
    }))))));
  }

}

/* harmony default export */ var BookLanding_Discover2 = (Discover2_Discover2);
// CONCATENATED MODULE: ./components/BookLanding/Features.js
var Features_jsx = external_react_default.a.createElement;



class Features_Features extends external_react_["Component"] {
  render() {
    return Features_jsx("section", {
      className: "features-area book-features ptb-100"
    }, Features_jsx("div", {
      className: "container"
    }, Features_jsx("div", {
      className: "row"
    }, Features_jsx("div", {
      className: "col-lg-4 col-md-6"
    }, Features_jsx("div", {
      className: "single-features-box"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "icofont-print"
    })), Features_jsx("h3", null, "POT\u0118\u017BNE NARZ\u0118DZIA "), Features_jsx("p", null, "Je\u015Bli szukasz \u0142atwych rozwi\u0105za\u0144, tu ich nie znajdziesz.  Je\u015Bli szukasz mi\u0142ych i \u2018\u2019obiecuj\u0105cych z\u0142ote g\xF3ry\u2019\u2019 porad, jak sta\u0107 si\u0119 szcz\u0119\u015Bliwym w zaledwie 5 minut\u2026 Nie kupuj tej ksi\u0105\u017Cki. To narz\u0119dzie pomo\u017Ce Ci wykreowa\u0107 \u017Cycie, o jakim marzysz, ale wymaga r\xF3wnie\u017C Twojej pracy."))), Features_jsx("div", {
      className: "col-lg-4 col-md-6"
    }, Features_jsx("div", {
      className: "single-features-box"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "icofont-ui-edit"
    })), Features_jsx("h3", null, "PRAWDA"), Features_jsx("p", null, "Nie napisa\u0142em tej ksi\u0105\u017Cki po to, by m\xF3wi\u0107 ludziom to, co chc\u0105 us\u0142ysze\u0107. Napisa\u0142em j\u0105, by Ci, kt\xF3rzy s\u0105 otwarci na duchowy samorozw\xF3j, poznali pot\u0119\u017Cne narz\u0119dzia, dzi\u0119ki kt\xF3rym rzeczywisto\u015B\u0107 zacznie by\u0107 ich najwi\u0119kszym dzie\u0142em."))), Features_jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
    }, Features_jsx("div", {
      className: "single-features-box"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "icofont-vehicle-delivery-van"
    })), Features_jsx("h3", null, "TAJNA WIEDZA "), Features_jsx("p", null, "SEKRETY ROZWOJU OSOBISTEGO to ksi\u0105\u017Cka tylko dla os\xF3b, kt\xF3re chc\u0105 dokonywa\u0107 w sobie prawdziwych zmian i chc\u0105 odkry\u0107 prawdy, o kt\xF3rych ma\u0142o kto m\xF3wi. Tajna wiedza, kt\xF3r\u0105 powinien pozna\u0107 ka\u017Cdy cz\u0142owiek na drodze do samo\u015Bwiadomo\u015Bci."))))), Features_jsx("div", {
      className: "features-inner-area"
    }, Features_jsx("div", {
      className: "container"
    }, Features_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Features_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, Features_jsx("div", {
      className: "features-inner-content"
    }, Features_jsx("div", {
      className: "features-item"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "icofont-win-trophy"
    })), Features_jsx("h3", null, "More than 5+ award achived"), Features_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.")), Features_jsx("div", {
      className: "features-item"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "icofont-responsive"
    })), Features_jsx("h3", null, "Read On Any Device"), Features_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.")), Features_jsx("div", {
      className: "features-item"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "icofont-verification-check"
    })), Features_jsx("h3", null, "Very high resolution (4K)"), Features_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.")))), Features_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, Features_jsx("div", {
      className: "features-image"
    }, Features_jsx("img", {
      src: finalPath + '/images/features-img1.png',
      alt: "image"
    })))))), Features_jsx("div", {
      className: "shape7"
    }, Features_jsx("img", {
      src: finalPath + '/images/shape7.png',
      alt: "shape"
    })), Features_jsx("div", {
      className: "shape3"
    }, Features_jsx("img", {
      src: finalPath + '/images/shape3.png',
      alt: "img"
    })), Features_jsx("div", {
      className: "bg-gray shape-1"
    }), Features_jsx("div", {
      className: "shape6"
    }, Features_jsx("img", {
      src: finalPath + '/images/shape6.png',
      alt: "img"
    })), Features_jsx("div", {
      className: "shape8 rotateme"
    }, Features_jsx("img", {
      src: finalPath + '/images/shape8.svg',
      alt: "shape"
    })), Features_jsx("div", {
      className: "shape9"
    }, Features_jsx("img", {
      src: finalPath + '/images/shape9.svg',
      alt: "shape"
    })), Features_jsx("div", {
      className: "shape10"
    }, Features_jsx("img", {
      src: finalPath + '/images/shape10.svg',
      alt: "shape"
    })), Features_jsx("div", {
      className: "shape11 rotateme"
    }, Features_jsx("img", {
      src: finalPath + '/images/shape11.svg',
      alt: "shape"
    })));
  }

}

/* harmony default export */ var BookLanding_Features = (Features_Features);
// EXTERNAL MODULE: external "react-image-lightbox"
var external_react_image_lightbox_ = __webpack_require__("cHt3");
var external_react_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_react_image_lightbox_);

// CONCATENATED MODULE: ./components/BookLanding/Screenshot.js
var Screenshot_jsx = external_react_default.a.createElement;

function Screenshot_extends() { Screenshot_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Screenshot_extends.apply(this, arguments); }

function Screenshot_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Screenshot_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});

const Screenshot_options = {
  loop: true,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  center: true,
  dots: false,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1024: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
};
const Screenshot_images = ['/images/page1.jpg', '/images/page1.jpg', '/images/page1.jpg', '/images/page1.jpg', '/images/page1.jpg', '/images/page1.jpg', '/images/page1.jpg'];

class Screenshot_Screenshot extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Screenshot_defineProperty(this, "state", {
      photoIndex: 0,
      isOpenImage: false,
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    const {
      photoIndex,
      isOpenImage
    } = this.state;
    return Screenshot_jsx("section", {
      className: "screenshot-area page-from-book ptb-100"
    }, Screenshot_jsx("div", {
      className: "container"
    }, Screenshot_jsx("div", {
      className: "section-title"
    }, Screenshot_jsx("h2", null, "Pages From Book"), Screenshot_jsx("div", {
      className: "bar"
    }), Screenshot_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), Screenshot_jsx("div", {
      className: "row"
    }, this.state.display ? Screenshot_jsx(Screenshot_OwlCarousel, Screenshot_extends({
      className: "screenshot-slides owl-carousel owl-theme"
    }, Screenshot_options), Screenshot_jsx("div", {
      className: "col-lg-12"
    }, Screenshot_jsx("div", {
      className: "screenshot-item"
    }, Screenshot_jsx(link_default.a, {
      href: "#"
    }, Screenshot_jsx("a", null, Screenshot_jsx("img", {
      src: finalPath + "/images/page1.jpg",
      alt: "screenshot"
    }))), Screenshot_jsx(link_default.a, {
      href: "#"
    }, Screenshot_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Screenshot_jsx("i", {
      className: "icofont-plus"
    }))))), Screenshot_jsx("div", {
      className: "col-lg-12"
    }, Screenshot_jsx("div", {
      className: "screenshot-item"
    }, Screenshot_jsx(link_default.a, {
      href: "#"
    }, Screenshot_jsx("a", null, Screenshot_jsx("img", {
      src: finalPath + '/images/page1.jpg',
      alt: "screenshot"
    }))), Screenshot_jsx(link_default.a, {
      href: "#"
    }, Screenshot_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Screenshot_jsx("i", {
      className: "icofont-plus"
    }))))), isOpenImage && Screenshot_jsx(external_react_image_lightbox_default.a, {
      mainSrc: Screenshot_images[photoIndex],
      nextSrc: Screenshot_images[(photoIndex + 1) % Screenshot_images.length],
      prevSrc: Screenshot_images[(photoIndex + Screenshot_images.length - 1) % Screenshot_images.length],
      onCloseRequest: () => this.setState({
        isOpenImage: false
      }),
      onMovePrevRequest: () => this.setState({
        photoIndex: (photoIndex + Screenshot_images.length - 1) % Screenshot_images.length
      }),
      onMoveNextRequest: () => this.setState({
        photoIndex: (photoIndex + 1) % Screenshot_images.length
      })
    }), Screenshot_jsx("div", {
      className: "col-lg-12"
    }, Screenshot_jsx("div", {
      className: "screenshot-item"
    }, Screenshot_jsx(link_default.a, {
      href: "#"
    }, Screenshot_jsx("a", null, Screenshot_jsx("img", {
      src: finalPath + '/images/page1.jpg',
      alt: "screenshot"
    }))), Screenshot_jsx(link_default.a, {
      href: "#"
    }, Screenshot_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Screenshot_jsx("i", {
      className: "icofont-plus"
    }))))), Screenshot_jsx("div", {
      className: "col-lg-12"
    }, Screenshot_jsx("div", {
      className: "screenshot-item"
    }, Screenshot_jsx(link_default.a, {
      href: "#"
    }, Screenshot_jsx("a", null, Screenshot_jsx("img", {
      src: finalPath + '/images/page1.jpg',
      alt: "screenshot"
    }))), Screenshot_jsx(link_default.a, {
      href: "#"
    }, Screenshot_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Screenshot_jsx("i", {
      className: "icofont-plus"
    }))))), Screenshot_jsx("div", {
      className: "col-lg-12"
    }, Screenshot_jsx("div", {
      className: "screenshot-item"
    }, Screenshot_jsx(link_default.a, {
      href: "#"
    }, Screenshot_jsx("a", null, Screenshot_jsx("img", {
      src: finalPath + '/images/page1.jpg',
      alt: "screenshot"
    }))), Screenshot_jsx(link_default.a, {
      href: "#"
    }, Screenshot_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Screenshot_jsx("i", {
      className: "icofont-plus"
    }))))), Screenshot_jsx("div", {
      className: "col-lg-12"
    }, Screenshot_jsx("div", {
      className: "screenshot-item"
    }, Screenshot_jsx(link_default.a, {
      href: "#"
    }, Screenshot_jsx("a", null, Screenshot_jsx("img", {
      src: finalPath + '/images/page1.jpg',
      alt: "screenshot"
    }))), Screenshot_jsx(link_default.a, {
      href: "#"
    }, Screenshot_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Screenshot_jsx("i", {
      className: "icofont-plus"
    }))))), Screenshot_jsx("div", {
      className: "col-lg-12"
    }, Screenshot_jsx("div", {
      className: "screenshot-item"
    }, Screenshot_jsx(link_default.a, {
      href: "#"
    }, Screenshot_jsx("a", null, Screenshot_jsx("img", {
      src: finalPath + '/images/page1.jpg',
      alt: "screenshot"
    }))), Screenshot_jsx(link_default.a, {
      href: "#"
    }, Screenshot_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Screenshot_jsx("i", {
      className: "icofont-plus"
    })))))) : '')));
  }

}

/* harmony default export */ var BookLanding_Screenshot = (Screenshot_Screenshot);
// CONCATENATED MODULE: ./components/BookLanding/Team.js
var Team_jsx = external_react_default.a.createElement;

function Team_extends() { Team_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Team_extends.apply(this, arguments); }

function Team_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Team_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ["react-owl-carousel3"]
  }
});

const Team_options = {
  loop: false,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  dots: true,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1024: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};

class Team_Team extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Team_defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return Team_jsx("section", {
      className: "team-area ptb-100 bg-gray"
    }, Team_jsx("div", {
      className: "container"
    }, Team_jsx("div", {
      className: "section-title"
    }, Team_jsx("h2", null, "Our Smart Team"), Team_jsx("div", {
      className: "bar"
    }), Team_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), Team_jsx("div", {
      className: "row"
    }, this.state.display ? Team_jsx(Team_OwlCarousel, Team_extends({
      className: "team-slides owl-carousel owl-theme"
    }, Team_options), Team_jsx("div", {
      className: "col-lg-12"
    }, Team_jsx("div", {
      className: "single-team-member-box"
    }, Team_jsx("img", {
      src: finalPath + "/images/team-sergio.jpg",
      alt: "team"
    }), Team_jsx("div", {
      className: "team-content"
    }, Team_jsx("h3", null, "Sergio S Dorje"), Team_jsx("span", null, "Autor"), Team_jsx("ul", null, Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "https://www.facebook.com/sergiosdorje/",
      target: "_blank",
      rel: "noopener"
    }, Team_jsx("a", {
      className: "facebook"
    }, Team_jsx("i", {
      className: "icofont-facebook"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "https://www.instagram.com/sergiosdorje/",
      target: "_blank",
      rel: "noopener"
    }, Team_jsx("a", {
      className: "instagram"
    }, Team_jsx("i", {
      className: "icofont-instagram"
    })))))))), Team_jsx("div", {
      className: "col-lg-12"
    }, Team_jsx("div", {
      className: "single-team-member-box"
    }, Team_jsx("img", {
      src: finalPath + "",
      alt: "team"
    }), Team_jsx("div", {
      className: "team-content"
    }, Team_jsx("h3", null, "Wojtek Pitala"), Team_jsx("span", null, "Wsp\xF3\u0142praca literacka")))), Team_jsx("div", {
      className: "col-lg-12"
    }, Team_jsx("div", {
      className: "single-team-member-box"
    }, Team_jsx("img", {
      src: finalPath + "",
      alt: "team"
    }), Team_jsx("div", {
      className: "team-content"
    }, Team_jsx("h3", null, "Nikola Hahn"), Team_jsx("span", null, "Ilustracja / Projekt ok\u0142adki"), Team_jsx("ul", null, Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "https://www.instagram.com/nikolahahn/"
    }, Team_jsx("a", {
      className: "instagram"
    }, Team_jsx("i", {
      className: "icofont-instagram"
    })))))))), Team_jsx("div", {
      className: "col-lg-12"
    }, Team_jsx("div", {
      className: "single-team-member-box"
    }, Team_jsx("img", {
      src: finalPath + "",
      alt: "team"
    }), Team_jsx("div", {
      className: "team-content"
    }, Team_jsx("h3", null, "Maja Strzelecka"), Team_jsx("span", null, "Copywriting LP"), Team_jsx("ul", null, Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "https://www.instagram.com/content_lady/"
    }, Team_jsx("a", {
      className: "instagram"
    }, Team_jsx("i", {
      className: "icofont-instagram"
    }))))))))) : "")));
  }

}

/* harmony default export */ var BookLanding_Team = (Team_Team);
// CONCATENATED MODULE: ./components/BookLanding/Pricing.js
var Pricing_jsx = external_react_default.a.createElement;


class Pricing_Pricing extends external_react_["Component"] {
  render() {
    return Pricing_jsx("section", {
      className: "pricing-area book-pricing ptb-100"
    }, Pricing_jsx("div", {
      className: "container"
    }, Pricing_jsx("div", {
      className: "section-title"
    }, Pricing_jsx("h2", null, "Easy Pricing Plans"), Pricing_jsx("div", {
      className: "bar"
    }), Pricing_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), Pricing_jsx("div", {
      className: "row"
    }, Pricing_jsx("div", {
      className: "col-lg-4 col-md-6"
    }, Pricing_jsx("div", {
      className: "pricing-table"
    }, Pricing_jsx("div", {
      className: "price-header"
    }, Pricing_jsx("h3", {
      className: "title"
    }, "e-Book"), Pricing_jsx("div", {
      className: "price"
    }, Pricing_jsx("span", {
      className: "dollar"
    }, "$"), "6.00", Pricing_jsx("span", {
      className: "month"
    }, "/Mo"))), Pricing_jsx("div", {
      className: "price-footer"
    }, Pricing_jsx("a", {
      className: "btn btn-primary",
      href: "#"
    }, "Get Started")))), Pricing_jsx("div", {
      className: "col-lg-4 col-md-6"
    }, Pricing_jsx("div", {
      className: "pricing-table"
    }, Pricing_jsx("div", {
      className: "price-header"
    }, Pricing_jsx("h3", {
      className: "title"
    }, "PDF"), Pricing_jsx("div", {
      className: "price"
    }, Pricing_jsx("span", {
      className: "dollar"
    }, "$"), "12.99", Pricing_jsx("span", {
      className: "month"
    }, "/Mo"))), Pricing_jsx("div", {
      className: "price-footer"
    }, Pricing_jsx("a", {
      className: "btn btn-primary",
      href: "#"
    }, "Get Started")))), Pricing_jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
    }, Pricing_jsx("div", {
      className: "pricing-table"
    }, Pricing_jsx("div", {
      className: "price-header"
    }, Pricing_jsx("h3", {
      className: "title"
    }, "Printed"), Pricing_jsx("div", {
      className: "price"
    }, Pricing_jsx("span", {
      className: "dollar"
    }, "$"), "19.00", Pricing_jsx("span", {
      className: "month"
    }, "/Mo"))), Pricing_jsx("div", {
      className: "price-footer"
    }, Pricing_jsx("a", {
      className: "btn btn-primary",
      href: "#"
    }, "Get Started")))))), Pricing_jsx("canvas", {
      id: "canvas"
    }));
  }

}

/* harmony default export */ var BookLanding_Pricing = (Pricing_Pricing);
// CONCATENATED MODULE: ./components/BookLanding/Feedback.js
var Feedback_jsx = external_react_default.a.createElement;

function Feedback_extends() { Feedback_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Feedback_extends.apply(this, arguments); }

function Feedback_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Feedback_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});

const Feedback_options = {
  loop: true,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  center: true,
  dots: false,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
};

class Feedback_Feedback extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Feedback_defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return Feedback_jsx("section", {
      className: "feedback-area ptb-100 bg-gray",
      id: "references"
    }, Feedback_jsx("div", {
      className: "container"
    }, Feedback_jsx("div", {
      className: "section-title"
    }, Feedback_jsx("h2", null, "Recenzje i referencje"), Feedback_jsx("div", {
      className: "bar"
    }), Feedback_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), Feedback_jsx("div", {
      className: "row"
    }, this.state.display ? Feedback_jsx(Feedback_OwlCarousel, Feedback_extends({
      className: "feedback-slides owl-carousel owl-theme"
    }, Feedback_options), Feedback_jsx("div", {
      className: "col-lg-12"
    }, Feedback_jsx("div", {
      className: "single-feedback-box"
    }, Feedback_jsx("div", {
      className: "client-info"
    }, Feedback_jsx("img", {
      src: finalPath + '/images/client1.jpg',
      alt: "client"
    }), Feedback_jsx("h3", null, "Alit John"), Feedback_jsx("span", null, "Web Developer")), Feedback_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance."))), Feedback_jsx("div", {
      className: "col-lg-12"
    }, Feedback_jsx("div", {
      className: "single-feedback-box"
    }, Feedback_jsx("div", {
      className: "client-info"
    }, Feedback_jsx("img", {
      src: finalPath + '/images/client2.jpg',
      alt: "client"
    }), Feedback_jsx("h3", null, "Alit John"), Feedback_jsx("span", null, "SEO Expert")), Feedback_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance."))), Feedback_jsx("div", {
      className: "col-lg-12"
    }, Feedback_jsx("div", {
      className: "single-feedback-box"
    }, Feedback_jsx("div", {
      className: "client-info"
    }, Feedback_jsx("img", {
      src: finalPath + '/images/client3.jpg',
      alt: "client"
    }), Feedback_jsx("h3", null, "Steven John"), Feedback_jsx("span", null, "Web Developer")), Feedback_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance."))), Feedback_jsx("div", {
      className: "col-lg-12"
    }, Feedback_jsx("div", {
      className: "single-feedback-box"
    }, Feedback_jsx("div", {
      className: "client-info"
    }, Feedback_jsx("img", {
      src: finalPath + '/images/client4.jpg',
      alt: "client"
    }), Feedback_jsx("h3", null, "David Warner"), Feedback_jsx("span", null, "Web Developer")), Feedback_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance.")))) : '')), Feedback_jsx("svg", {
      className: "svg-feedback-bottom",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none"
    }, Feedback_jsx("path", {
      d: "M0,70 C30,130 70,50 100,70 L100,100 0,100 Z",
      fill: "#ffffff"
    })));
  }

}

/* harmony default export */ var BookLanding_Feedback = (Feedback_Feedback);
// CONCATENATED MODULE: ./components/BookLanding/Blog.js
var Blog_jsx = external_react_default.a.createElement;

function Blog_extends() { Blog_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Blog_extends.apply(this, arguments); }

function Blog_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Blog_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});

const Blog_options = {
  autoplay: true,
  nav: true,
  loop: true,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: false,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
};

class Blog_Blog extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Blog_defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return Blog_jsx("section", {
      className: "blog-area ptb-100"
    }, Blog_jsx("div", {
      className: "container"
    }, Blog_jsx("div", {
      className: "section-title"
    }, Blog_jsx("h2", null, "Our Latest News"), Blog_jsx("div", {
      className: "bar"
    }), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), Blog_jsx("div", {
      className: "row"
    }, this.state.display ? Blog_jsx(Blog_OwlCarousel, Blog_extends({
      className: "blog-slides owl-carousel owl-theme"
    }, Blog_options), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: finalPath + '/images/blog-img1.jpg',
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 23, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Most Popular New Business Apps"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: finalPath + '/images/blog-img2.jpg',
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 16, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: finalPath + '/images/blog-img3.jpg',
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 14, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: finalPath + '/images/blog-img4.jpg',
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 06, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: finalPath + '/images/blog-img5.jpg',
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 04, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: finalPath + '/images/blog-img3.jpg',
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 26, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    }))))))) : '')));
  }

}

/* harmony default export */ var BookLanding_Blog = (Blog_Blog);
// CONCATENATED MODULE: ./components/BookLanding/Platform.js
var Platform_jsx = external_react_default.a.createElement;




class Platform_Platform extends external_react_["Component"] {
  render() {
    return Platform_jsx("section", {
      className: "platform-connect ptb-100"
    }, Platform_jsx("div", {
      className: "container"
    }, Platform_jsx("div", {
      className: "row"
    }, Platform_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Platform_jsx("h2", null, "Obserwuj Autora w social")), Platform_jsx("div", {
      className: "col-lg-4 col-md-6 socialbox"
    }, Platform_jsx(link_default.a, {
      href: "https://www.instagram.com/sergiosdorje/",
      target: "_blank",
      rel: "noopener"
    }, Platform_jsx("a", {
      className: "box"
    }, Platform_jsx("img", {
      src: finalPath + "/images/instagram.png",
      alt: "instagram"
    }), Platform_jsx("h3", null, "Instagram"), Platform_jsx("span", null, "Sergio S Dorje"), Platform_jsx("i", {
      className: "icofont-bubble-right"
    })))), Platform_jsx("div", {
      className: "col-lg-4 col-md-6 socialbox"
    }, Platform_jsx(link_default.a, {
      href: "#"
    }, Platform_jsx("a", {
      className: "box"
    }, Platform_jsx("img", {
      src: finalPath + "/images/instagram.png",
      alt: "instagram"
    }), Platform_jsx("h3", null, "Instagram"), Platform_jsx("span", null, "Sekrety Rozwoju Osobistego"), Platform_jsx("i", {
      className: "icofont-bubble-right"
    })))))));
  }

}

/* harmony default export */ var BookLanding_Platform = (Platform_Platform);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/BookLanding/Subscribe.js
var Subscribe_jsx = external_react_default.a.createElement;



const MailerLite = __webpack_require__("V1uU").default;

const mailerLite = MailerLite("xxx");

const Subscribe = () => {
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])("");
  const {
    0: userID,
    1: setUserID
  } = Object(external_react_["useState"])("");
  const {
    0: userType,
    1: setUserType
  } = Object(external_react_["useState"])(""); // GET THE SUBSCRIBER ID

  const getTheSubscriberId = async newSubEmail => {
    var req = await external_axios_default.a.post("/api/newSubscriber", {
      "newEmail": newSubEmail
    });
    setUserType(req.data.type);
    setUserID(req.data.id); // mailerLite
    //   .getSubscribers()
    //   .then((subList) => {
    //     subList.filter((singleSub) => {
    //       if (singleSub.email === newSubEmail) {
    //         setUserType(singleSub.type);
    //         setUserID(singleSub.id);
    //       }
    //     });
    //   })
    //   .catch((error) => {
    //     useEffect(() => {
    //       console.log(userID);
    //     }, [userID]);
    //     console.log(error);
    //   });
  };

  const _handleSubmit = e => {
    e.preventDefault();
    getTheSubscriberId(email);
  };

  Object(external_react_["useEffect"])(() => {
    console.log(userID, userType); // getUserType(userID);
  }, [userID, userType]);
  return Subscribe_jsx("section", {
    className: "subscribe-area ptb-100"
  }, Subscribe_jsx("div", {
    className: "container"
  }, Subscribe_jsx("div", {
    className: "section-title"
  }, Subscribe_jsx("h2", null, "Do\u0142\u0105cz spo\u0142eczno\u015Bci Sergio S Dorje"), Subscribe_jsx("div", {
    className: "bar"
  }), Subscribe_jsx("p", null, "Zapisz si\u0119 do newslettera. Otrzymasz warto\u015Bciowe informajce bezpo\u015Brednio od Autora")), Subscribe_jsx("form", {
    className: "newsletter-form",
    onSubmit: _handleSubmit
  }, Subscribe_jsx("input", {
    type: "email",
    className: "form-control",
    placeholder: "Tw\xF3j adre email",
    name: "EMAIL",
    required: true,
    value: email,
    onChange: e => setEmail(e.target.value)
  }), Subscribe_jsx("button", {
    className: "btn btn-primary",
    type: "submit"
  }, "Subscribe"))));
};

/* harmony default export */ var BookLanding_Subscribe = (Subscribe);
// EXTERNAL MODULE: ./components/Faq/FaqContent.js
var FaqContent = __webpack_require__("ikS/");

// EXTERNAL MODULE: ./components/Blog/BlogOne.js
var BlogOne = __webpack_require__("L6HC");

// CONCATENATED MODULE: ./components/BookLanding/AboutContent.js
var AboutContent_jsx = external_react_default.a.createElement;


class AboutContent_AboutContent extends external_react_["Component"] {
  render() {
    return AboutContent_jsx("section", {
      className: "about-area ptb-100"
    }, AboutContent_jsx("div", {
      className: "container"
    }, AboutContent_jsx("div", {
      className: "row h-100 justify-content-center align-items-center row-reverse"
    }, AboutContent_jsx("div", {
      className: "section-title all-width"
    }, AboutContent_jsx("h2", null, "Poznaj sekretne metody i tajn\u0105 wiedz\u0119, kt\xF3ra pozwoli Ci wej\u015B\u0107 na drog\u0119 kieruj\u0105ca do wewn\u0119trznej mocy i m\u0105dro\u015Bci.", AboutContent_jsx("br", null)), AboutContent_jsx("div", {
      className: "bar"
    })), AboutContent_jsx("div", {
      className: "col-lg-8 col-md-12"
    }, AboutContent_jsx("div", {
      className: "about-content"
    }, AboutContent_jsx("p", null, "SKRETY ROZWOJU OSOBISTEGO to pot\u0119\u017Cne narz\u0119dzie, dzi\u0119ki kt\xF3remu zaczniesz \u017Cy\u0107 \u015Bwiadomie i nauczysz si\u0119 sterowa\u0107 swoj\u0105 rzeczywisto\u015Bci\u0105. Czas na podr\xF3\u017C w kierunku rzeczywisto\u015Bci, o jakim marzysz. Tylko Ty masz w sobie moc dokonywania zmian i sterowania swoim \u017Cyciem."), AboutContent_jsx("p", null, "Wiesz w teorii, \u017Ce \u2018\u2019mo\u017Cesz wszystko\u2019\u2019, ale wci\u0105\u017C zastanawiasz si\u0119: Jak wykorzystywa\u0107 SI\u0141\u0118 SWOJEGO UMYS\u0141U, by przeskakiwa\u0107 te mury? Zapami\u0119taj: Tylko Ty masz w sobie moc dokonywania zmian i sterowania swoim \u017Cyciem."), AboutContent_jsx("p", null, "Poznaj sekretne metody i tajn\u0105 wiedz\u0119, kt\xF3ra pozwoli Ci wej\u015B\u0107 na drog\u0119 kieruj\u0105ca do wewn\u0119trznej mocy i m\u0105dro\u015Bci. SEKRETY ROZWOJU OSOBISTEGO to pot\u0119\u017Cne narz\u0119dzie, dzi\u0119ki kt\xF3remu zaczniesz \u017Cy\u0107 \u015Bwiadomie i nauczysz si\u0119 sterowa\u0107 swoj\u0105 rzeczywisto\u015Bci\u0105. Czas na podr\xF3\u017C w kierunku \u017Cycia, o jakim marzysz."))), AboutContent_jsx("div", {
      className: "col-lg-4 col-md-12"
    }, AboutContent_jsx("img", {
      src: "/images/marketing.png",
      alt: "image"
    })))));
  }

}

/* harmony default export */ var BookLanding_AboutContent = (AboutContent_AboutContent);
// CONCATENATED MODULE: ./components/BookLanding/Wartosci.js
var Wartosci_jsx = external_react_default.a.createElement;


class Wartosci_Wartosci extends external_react_["Component"] {
  render() {
    return Wartosci_jsx("section", {
      className: "about-area ptb-100"
    }, Wartosci_jsx("div", {
      className: "container"
    }, Wartosci_jsx("div", {
      className: "row h-100 justify-content-center align-items-center row-reverse"
    }, Wartosci_jsx("div", {
      className: "section-title all-width"
    }, Wartosci_jsx("h2", null, "NAJWI\u0118KSZE WARTO\u015ACI Z KSI\u0104\u017BKI"), Wartosci_jsx("div", {
      className: "bar"
    })), Wartosci_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Wartosci_jsx("div", {
      className: "about-content"
    }, Wartosci_jsx("p", null, "Czy zastanawiasz si\u0119 czasem jak to jest, \u017Ce niekt\xF3rzy osi\u0105gaj\u0105 wszystko, co najlepsze, a inni s\u0105 wiecznie niezadowoleni i nic im nie wychodzi? Dlaczego niekt\xF3rzy \u017Cyj\u0105 w szcz\u0119\u015Bliwych zwi\u0105zkach, a inni za ka\u017Cdym razem trafiaj\u0105 \u017Ale? Jakim cudem jedni zawsze maj\u0105 pieni\u0105dze i zdrowie, a drudzy \u017Cyj\u0105 w wielkim braku? Gdzie kryje si\u0119 sekret szcz\u0119\u015Bcia i pow\xF3d nieszcz\u0119\u015B\u0107 tak wielu ludzi na ca\u0142ym \u015Bwiecie? Czy przysz\u0142o Ci kiedy\u015B do g\u0142owy, \u017Ce to wszystko zale\u017Cy tylko od Ciebie?"), Wartosci_jsx("p", null, "Obiecuj\u0119 Ci\u2026 Mo\u017Cesz by\u0107 szcz\u0119\u015Bliwy, bogaty, spe\u0142nia\u0107 si\u0119 zawodowo i w mi\u0142o\u015Bci. Mo\u017Cesz osi\u0105gn\u0105\u0107 ka\u017Cdy sw\xF3j cel. Zrozumiem, je\u015Bli jeszcze w to nie wierzysz i czujesz si\u0119 nieswojo.  Ale wci\u0105\u017C to czytasz\u2026 Dlatego wiem, \u017Ce jeste\u015B prawdziwym Wojownikiem, kt\xF3ry szuka w\u0142a\u015Bciwej drogi dla siebie. I wiesz co? Jeste\u015B w dobrym miejscu."), Wartosci_jsx("p", null, "Ksi\u0105\u017Cka, kt\xF3r\u0105 w\u0142a\u015Bnie poznajesz, to pot\u0119\u017Cne narz\u0119dzie samorozwoju, dzi\u0119ki kt\xF3remu dowiesz si\u0119, jak sterowa\u0107 swoim \u017Cyciem i radzi\u0107 sobie ze wszystkimi przeszkodami."))))));
  }

}

/* harmony default export */ var BookLanding_Wartosci = (Wartosci_Wartosci);
// CONCATENATED MODULE: ./components/BookLanding/Overview.js
var Overview_jsx = external_react_default.a.createElement;



class Overview_Overview extends external_react_default.a.Component {
  render() {
    return Overview_jsx("section", {
      className: "overview-section ptb-100"
    }, Overview_jsx("div", {
      className: "container"
    }, Overview_jsx("div", {
      className: "section-title"
    }, Overview_jsx("h2", null, "More to Discover"), Overview_jsx("div", {
      className: "bar"
    }), Overview_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), Overview_jsx("div", {
      className: "overview-box"
    }, Overview_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-img"
    }, Overview_jsx("img", {
      src: "/images/overview-app1.png",
      alt: "image"
    })), Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-power"
    })), Overview_jsx("h3", null, "Fast and Smooth"), Overview_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), Overview_jsx("ul", null, Overview_jsx("li", null, "Unimited Video Call"), Overview_jsx("li", null, "Add Favourite contact"), Overview_jsx("li", null, "Camera Filter")), Overview_jsx(link_default.a, {
      href: "#"
    }, Overview_jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))))), Overview_jsx("div", {
      className: "overview-box"
    }, Overview_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-share-alt"
    })), Overview_jsx("h3", null, "Share your passion to the world"), Overview_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), Overview_jsx("ul", null, Overview_jsx("li", null, "Unimited Video Call"), Overview_jsx("li", null, "Add Favourite contact"), Overview_jsx("li", null, "Camera Filter")), Overview_jsx(link_default.a, {
      href: "#"
    }, Overview_jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))), Overview_jsx("div", {
      className: "col-lg-6 col-md-6 app-fetured-item"
    }, Overview_jsx("div", {
      className: "app-item item-one"
    }, Overview_jsx("i", {
      className: "icofont-wink-smile"
    }), Overview_jsx("h6", null, "Community")), Overview_jsx("div", {
      className: "app-item item-two"
    }, Overview_jsx("i", {
      className: "icofont-ebook"
    }), Overview_jsx("h6", null, "Honest pricing")), Overview_jsx("div", {
      className: "app-item item-three"
    }, Overview_jsx("i", {
      className: "icofont-wink-smile"
    }), Overview_jsx("h6", null, "Management")), Overview_jsx("div", {
      className: "app-item item-four"
    }, Overview_jsx("i", {
      className: "icofont-stock-mobile"
    }), Overview_jsx("h6", null, "Mobile Design"))))), Overview_jsx("div", {
      className: "overview-box"
    }, Overview_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-img"
    }, Overview_jsx("img", {
      src: "/images/overview-app3.png",
      alt: "image"
    })), Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-ui-messaging"
    })), Overview_jsx("h3", null, "Constant Updates"), Overview_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), Overview_jsx("ul", null, Overview_jsx("li", null, "Unimited Video Call"), Overview_jsx("li", null, "Add Favourite contact"), Overview_jsx("li", null, "Camera Filter")), Overview_jsx(link_default.a, {
      href: "#"
    }, Overview_jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))))), Overview_jsx("div", {
      className: "overview-box"
    }, Overview_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-users-social"
    })), Overview_jsx("h3", null, "We provide proffesional staff"), Overview_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), Overview_jsx("ul", null, Overview_jsx("li", null, "Unimited Video Call"), Overview_jsx("li", null, "Add Favourite contact"), Overview_jsx("li", null, "Camera Filter")), Overview_jsx("a", {
      href: "#",
      className: "btn btn-primary"
    }, "Read More")), Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-img"
    }, Overview_jsx("img", {
      src: "/images/overview-app2.png",
      alt: "image"
    })))), Overview_jsx("div", {
      className: "overview-box modern-flexible"
    }, Overview_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Overview_jsx("div", {
      className: "col-lg-4 col-md-6"
    }, Overview_jsx("div", {
      className: "single-item right-icon"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-lamp-light"
    })), Overview_jsx("h3", null, "Stunning Showcases"), Overview_jsx("p", null, "Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.")), Overview_jsx("div", {
      className: "single-item right-icon"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-responsive"
    })), Overview_jsx("h3", null, "Fully Customizable"), Overview_jsx("p", null, "Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.")), Overview_jsx("div", {
      className: "single-item right-icon"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-ui-timer"
    })), Overview_jsx("h3", null, "Engaging Tours"), Overview_jsx("p", null, "Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis."))), Overview_jsx("div", {
      className: "col-lg-4 col-md-12 overview-img"
    }, Overview_jsx("img", {
      src: "/images/feature-img-with-app.png",
      alt: "image"
    })), Overview_jsx("div", {
      className: "col-lg-4 col-md-6"
    }, Overview_jsx("div", {
      className: "single-item"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-ui-timer"
    })), Overview_jsx("h3", null, "Engaging Tours"), Overview_jsx("p", null, "Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.")), Overview_jsx("div", {
      className: "single-item"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-star-alt-2"
    })), Overview_jsx("h3", null, "Exquisite Design"), Overview_jsx("p", null, "Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.")), Overview_jsx("div", {
      className: "single-item"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-ui-timer"
    })), Overview_jsx("h3", null, "Engaging Tours"), Overview_jsx("p", null, "Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.")))))), Overview_jsx("div", {
      className: "shape7"
    }, Overview_jsx("img", {
      src: "/images/shape7.png",
      alt: "shape"
    })), Overview_jsx("div", {
      className: "shape3"
    }, Overview_jsx("img", {
      src: "/images/shape3.png",
      alt: "img"
    })), Overview_jsx("div", {
      className: "bg-gray shape-1"
    }), Overview_jsx("div", {
      className: "shape6"
    }, Overview_jsx("img", {
      src: "/images/shape6.png",
      alt: "img"
    })), Overview_jsx("div", {
      className: "shape8 rotateme"
    }, Overview_jsx("img", {
      src: "/images/shape8.svg",
      alt: "shape"
    })), Overview_jsx("div", {
      className: "shape9"
    }, Overview_jsx("img", {
      src: "/images/shape9.svg",
      alt: "shape"
    })), Overview_jsx("div", {
      className: "shape10"
    }, Overview_jsx("img", {
      src: "/images/shape10.svg",
      alt: "shape"
    })), Overview_jsx("div", {
      className: "shape11 rotateme"
    }, Overview_jsx("img", {
      src: "/images/shape11.svg",
      alt: "shape"
    })));
  }

}

/* harmony default export */ var BookLanding_Overview = (Overview_Overview);
// EXTERNAL MODULE: ./components/DigitalMarketing/Services.js
var Services = __webpack_require__("7cdu");

// EXTERNAL MODULE: ./components/ProductLanding/VirtualReality.js
var VirtualReality = __webpack_require__("r6bG");

// EXTERNAL MODULE: ./components/About/CtaCard.js
var CtaCard = __webpack_require__("BfQ3");

// EXTERNAL MODULE: ./components/BookLanding/Pricing2.js
var Pricing2 = __webpack_require__("NwV9");

// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;







 // import Funfact from '../components/BookLanding/Funfact';

















const finalPath = "";

class pages_BookLanding extends external_react_default.a.Component {
  render() {
    return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(Navbar["a" /* default */], null), pages_jsx(BookLanding_Banner, null), pages_jsx(BookLanding_AboutContent, null), pages_jsx(BookLanding_Discover2, null), pages_jsx(CtaCard["a" /* default */], null), pages_jsx(BookLanding_Features, null), pages_jsx(BookLanding_Screenshot, null), pages_jsx(VirtualReality["a" /* default */], null), pages_jsx(BookLanding_Team, null), pages_jsx(Pricing2["a" /* default */], null), pages_jsx(BookLanding_Feedback, null), pages_jsx(BookLanding_OAutorze, null), pages_jsx(BookLanding_Subscribe, null), pages_jsx(FaqContent["a" /* default */], null), pages_jsx(BookLanding_Platform, null), pages_jsx(Footer["a" /* default */], null));
  }

}

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_BookLanding);

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "V1uU":
/***/ (function(module, exports) {

module.exports = require("mailerlite-api-v2-node");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cHt3":
/***/ (function(module, exports) {

module.exports = require("react-image-lightbox");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "g7ta":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RNiq");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("footer", {
      className: "footer-area ptb-100 pb-0 bg-image"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "regulamin-box"
    }, __jsx("p", null, "Regulamin"), __jsx("p", null, "Polityka prywatno\u015Bci"))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "ikS/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("uQVn");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class FaqContent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "faq-accordion",
      id: "faq"
    }, __jsx("h2", null, "FAQ"), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "Czy mo\u017Cna zam\xF3wi\u0107 ksi\u0105\u017Ck\u0119 za granic\u0119?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", {
      className: "accordion-content"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "Czy mo\u017Cna otrzyma\u0107 faktur\u0119?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", {
      className: "accordion-content"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "Jak d\u0142ugo musz\u0119 czeka\u0107 na zam\xF3wienie?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", {
      className: "accordion-content"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "Czy mog\u0119 kupi\u0107 ksi\u0105\u017Ck\u0119 stacjonarnie?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", {
      className: "accordion-content"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "Co w przypadku, je\u015Bli kurier mnie nie zastanie?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", {
      className: "accordion-content"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "Jak mog\u0119 zada\u0107 inne pytania?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", {
      className: "accordion-content"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.")))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (FaqContent);

/***/ }),

/***/ "iwtP":
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pFRj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./utils/ActiveLink.js
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = external_react_["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(link_default.a, props, /*#__PURE__*/external_react_default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ var utils_ActiveLink = (Object(router_["withRouter"])(ActiveLink));
// CONCATENATED MODULE: ./components/Layouts/SideDrawer.js

var SideDrawer_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SideDrawer_SideDrawer extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      drawer: false
    });

    _defineProperty(this, "closeDrawer", () => {
      this.props.onClick(this.state.drawer);
    });
  }

  render() {
    return SideDrawer_jsx("div", {
      className: "sidebar-modal"
    }, SideDrawer_jsx("div", {
      className: "modal right fade show",
      style: {
        display: "block",
        paddingRight: "16px"
      }
    }, SideDrawer_jsx("div", {
      className: "modal-dialog",
      role: "document"
    }, SideDrawer_jsx("div", {
      className: "modal-content"
    }, SideDrawer_jsx("div", {
      className: "modal-header"
    }, SideDrawer_jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.closeDrawer
    }, SideDrawer_jsx("span", {
      "aria-hidden": "true"
    }, SideDrawer_jsx("i", {
      className: "icofont-close"
    }))), SideDrawer_jsx("h2", {
      className: "modal-title",
      id: "myModalLabel2"
    }, SideDrawer_jsx(link_default.a, {
      href: "/"
    }, SideDrawer_jsx("a", null, SideDrawer_jsx("img", {
      src: "/images/logo.png",
      alt: "logo"
    }))))), SideDrawer_jsx("div", {
      className: "modal-body"
    }, SideDrawer_jsx("div", {
      className: "sidebar-modal-widget"
    }, SideDrawer_jsx("h3", {
      className: "title"
    }, "Additional Links"), SideDrawer_jsx("ul", null, SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "/login"
    }, SideDrawer_jsx("a", null, "Login"))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "/signup"
    }, SideDrawer_jsx("a", null, "Register"))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "/faq"
    }, SideDrawer_jsx("a", null, "FAQ"))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "#"
    }, SideDrawer_jsx("a", null, "Logout"))))), SideDrawer_jsx("div", {
      className: "sidebar-modal-widget"
    }, SideDrawer_jsx("h3", {
      className: "title"
    }, "Contact Info"), SideDrawer_jsx("ul", {
      className: "contact-info"
    }, SideDrawer_jsx("li", null, SideDrawer_jsx("i", {
      className: "icofont-google-map"
    }), "Address", SideDrawer_jsx("span", null, "1660 Travis Street Miramar, FL 33025, California")), SideDrawer_jsx("li", null, SideDrawer_jsx("i", {
      className: "icofont-email"
    }), "Email", SideDrawer_jsx("span", null, "admin@mojosa.com")), SideDrawer_jsx("li", null, SideDrawer_jsx("i", {
      className: "icofont-phone"
    }), "Phone", SideDrawer_jsx("span", null, "+123 456 7890")))), SideDrawer_jsx("div", {
      className: "sidebar-modal-widget"
    }, SideDrawer_jsx("h3", {
      className: "title"
    }, "Connect With Us"), SideDrawer_jsx("ul", {
      className: "social-list"
    }, SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "#"
    }, SideDrawer_jsx("a", null, SideDrawer_jsx("i", {
      className: "icofont-facebook"
    })))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "#"
    }, SideDrawer_jsx("a", null, SideDrawer_jsx("i", {
      className: "icofont-twitter"
    })))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "#"
    }, SideDrawer_jsx("a", null, SideDrawer_jsx("i", {
      className: "icofont-instagram"
    })))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "#"
    }, SideDrawer_jsx("a", null, SideDrawer_jsx("i", {
      className: "icofont-linkedin"
    })))))))))));
  }

}

/* harmony default export */ var Layouts_SideDrawer = (SideDrawer_SideDrawer);
// CONCATENATED MODULE: ./components/Layouts/SearchForm.js
var SearchForm_jsx = external_react_default.a.createElement;

function SearchForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SearchForm_SearchForm extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    SearchForm_defineProperty(this, "state", {
      searchForm: false,
      term: ''
    });

    SearchForm_defineProperty(this, "closeSearchForm", () => {
      this.props.onClick(this.state.searchForm);
    });

    SearchForm_defineProperty(this, "handleSearch", e => {
      e.preventDefault();
    });
  }

  render() {
    return SearchForm_jsx("div", {
      id: "header-search",
      className: "header-search open"
    }, SearchForm_jsx("button", {
      type: "button",
      onClick: this.closeSearchForm,
      className: "close"
    }, "\xD7"), SearchForm_jsx("form", {
      onSubmit: this.handleSearch,
      className: "header-search-form"
    }, SearchForm_jsx("input", {
      type: "search",
      placeholder: "Type here........",
      value: this.state.term,
      onChange: e => this.setState({
        term: e.target.value
      })
    }), SearchForm_jsx("button", {
      type: "submit",
      className: "btn btn-primary"
    }, "Search")));
  }

}

/* harmony default export */ var Layouts_SearchForm = (SearchForm_SearchForm);
// EXTERNAL MODULE: ./pages/index.js + 15 modules
var pages = __webpack_require__("RNiq");

// CONCATENATED MODULE: ./components/Layouts/Navbar.js
var Navbar_jsx = external_react_default.a.createElement;

function Navbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Navbar_Navbar extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Navbar_defineProperty(this, "_isMounted", false);

    Navbar_defineProperty(this, "state", {
      drawer: false,
      searchForm: false,
      collapsed: true
    });

    Navbar_defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });

    Navbar_defineProperty(this, "handleDrawer", () => {
      this.setState(prevState => {
        return {
          drawer: !prevState.drawer
        };
      });
    });

    Navbar_defineProperty(this, "handleSearchForm", () => {
      this.setState(prevState => {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });
  }

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let {
      pathname
    } = this.props.router;
    let {
      products
    } = this.props;
    let layOutCls = "";
    let logo = pages["finalPath"] + "/images/logo.png";

    if (pathname == "/digital-marketing") {
      layOutCls = "marketing-navbar";
      logo = "/images/logo2.png";
    }

    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
    const classTwo = collapsed ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
    return Navbar_jsx(external_react_default.a.Fragment, null, Navbar_jsx("header", {
      id: "header"
    }, Navbar_jsx("div", {
      id: "navbar",
      className: `crake-nav ${layOutCls}`
    }, Navbar_jsx("div", {
      className: "container"
    }, Navbar_jsx("nav", {
      className: "navbar navbar-expand-md navbar-light"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "#"
    }, Navbar_jsx("a", {
      className: "navbar-brand"
    }, "Sekrety Rozwoju", Navbar_jsx("br", null), " Osobistego")), Navbar_jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, Navbar_jsx("span", {
      className: "navbar-toggler-icon"
    })), Navbar_jsx("div", {
      className: classOne,
      id: "navbarSupportedContent"
    }, Navbar_jsx("ul", {
      className: "navbar-nav nav ml-auto"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "#"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Home"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "#index"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Spis tre\u015Bci"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "#references"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Referencje"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "#faq"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "FAQ"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "#kupteraz"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Kup teraz"))))))))), this.state.drawer ? Navbar_jsx(Layouts_SideDrawer, {
      onClick: this.handleDrawer
    }) : "", this.state.searchForm ? Navbar_jsx(Layouts_SearchForm, {
      onClick: this.handleSearchForm
    }) : "");
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ var Layouts_Navbar = __webpack_exports__["a"] = (Object(router_["withRouter"])(Object(external_react_redux_["connect"])(mapStateToProps)(Navbar_Navbar)));

/***/ }),

/***/ "q4RA":
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "r6bG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BookLanding_Pricing2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("NwV9");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class VirtualReality extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "next-generation-virtual-reality ptb-100",
      id: "index"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Spis tre\u015Bci"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "single-item"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("div", {
      className: "chapter-number"
    }, __jsx("i", {
      className: "icofont-square"
    }), __jsx("span", {
      className: "chapter-number"
    }, "1"))), __jsx("h3", null, "Energia"), __jsx("p", null, "Dowiesz si\u0119 jakimi zasobami energetycznymi dysponujesz i jakie powinienes\u0301 rozwijac\u0301, abys\u0301 przemieszcza\u0142 sie\u0328 w wybranym przez siebie kierunku."))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "single-item"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-square"
    }), __jsx("span", {
      className: "chapter-number"
    }, "2")), __jsx("h3", null, "Pierwsze kroki do celu"), __jsx("p", null, "To wa\u017Cna wiedza na temat wszystkich narze\u0328dzi, kto\u0301re musisz pozna\u0107, aby rzeczywis\u0301cie realizowa\u0107 swoje najwi\u0119ksze cele."))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "single-item"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-square"
    }), __jsx("span", {
      className: "chapter-number"
    }, "3")), __jsx("h3", null, "Tantra"), __jsx("p", null, "Nauka o tym, czym jest prawdziwa tantra i jak korzysta\u0107 z jej cudownych w\u0142a\u015Bciwo\u015Bci, by przynosi\u0142a nam wymarzone efekty."))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "single-item"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-square"
    }), __jsx("span", {
      className: "chapter-number"
    }, "4")), __jsx("h3", null, "Medytacja"), __jsx("p", null, "Skarbnica wiedzy o tym, jak dzia\u0142a medytacja, w jaki spos\xF3b pozwala si\u0119 rozwija\u0107 i wreszcie - kt\xF3ra medytacja jest odpowiednia dla Ciebie."))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "single-item"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-square"
    }), __jsx("span", {
      className: "chapter-number"
    }, "5")), __jsx("h3", null, "Czakry"), __jsx("p", null, "Ten rozdzia\u0142 mo\u0301wi o waz\u0307nych centrach energetycznych Twojego organizmu i metodach ich stymulacji, tak by dzia\u0142a\u0142y bez zak\u0142o\u0301cen\u0301, przynosza\u0328c Ci korzys\u0301ci."))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "single-item"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-square"
    }), __jsx("span", {
      className: "chapter-number"
    }, "6")), __jsx("h3", null, "Seks i relacje uczuciowe"), __jsx("p", null, "Przydatne informacje i porady jak by\u0107 z drugim cz\u0142owiekiem i jak unika\u0107 konflikt\xF3w, by zwi\u0105zek m\xF3g\u0142 si\u0119 rozwija\u0107 i nam s\u0142u\u017Cy\u0107."))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "single-item"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-square"
    }), __jsx("span", {
      className: "chapter-number"
    }, "7")), __jsx("h3", null, "Unikaj przeszk\xF3d i problem\xF3w"), __jsx("p", null, "Rozw\xF3j duchowy ma r\xF3wnie\u017C swoj\u0105 ciemn\u0105 stron\u0119. Wiedza o tym, jak nie wpa\u015B\u0107 w pu\u0142apk\u0119 uchroni Ci\u0119 przed zostaniem ofiar\u0105 manipulacji."))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "single-item"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-square"
    }), __jsx("span", {
      className: "chapter-number"
    }, "8")), __jsx("h3", null, "Dalsze esploracje - o szkodliwo\u015Bci niekt\xF3rych praktyk"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida leo porttitor pretium ullamcorper. Fusce consectetur turpis nec dolor laoreet ultrices. In a venenatis leo."))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (VirtualReality);

/***/ }),

/***/ "rRZ5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layouts/Navbar.js + 3 modules
var Navbar = __webpack_require__("pFRj");

// EXTERNAL MODULE: ./components/Layouts/Footer.js
var Footer = __webpack_require__("g7ta");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__("tpJJ");
var external_react_modal_video_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_video_);

// CONCATENATED MODULE: ./components/DigitalMarketing/Banner.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const isServer = true;
const WOW = !isServer ? __webpack_require__("4htw") : null;

class Banner_Banner extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isOpen: false
    });

    _defineProperty(this, "openModal", () => {
      this.setState({
        isOpen: true
      });
    });
  }

  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 20,
      mobile: true,
      live: true
    }).init();
  }

  render() {
    return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
      className: "main-banner marketing-home"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "hero-content"
    }, __jsx("h1", null, "Grow you business startup system better"), __jsx("p", null, "Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation."), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Get Started")), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.openModal();
      },
      className: "video-btn popup-youtube"
    }, "Watch Video", __jsx("i", {
      className: "icofont-play-alt-3"
    }))))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "marketing-image"
    }, __jsx("img", {
      src: "/images/marketing-shape/marketing-img1.png",
      className: "wow fadeInDown",
      "data-wow-delay": "0.4s",
      alt: "img"
    }), __jsx("img", {
      src: "/images/marketing-shape/marketing-img2.png",
      className: "wow fadeInLeft",
      "data-wow-delay": "0.4s",
      alt: "img"
    }), __jsx("img", {
      src: "/images/marketing-shape/marketing-img3.png",
      className: "wow lightSpeedIn",
      "data-wow-delay": "0.4s",
      alt: "img"
    }), __jsx("img", {
      src: "/images/marketing-shape/marketing-img4.png",
      className: "wow rollIn",
      "data-wow-delay": "0.4s",
      alt: "img"
    }), __jsx("img", {
      src: "/images/marketing-shape/marketing-img5.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.4s",
      alt: "img"
    }), __jsx("img", {
      src: "/images/marketing-shape/marketing-img6.png",
      className: "wow fadeInDown",
      "data-wow-delay": "0.4s",
      alt: "img"
    }), __jsx("img", {
      src: "/images/marketing-shape/marketing-img7.png",
      className: "wow flip",
      "data-wow-delay": "0.4s",
      alt: "img"
    }), __jsx("img", {
      src: "/images/marketing-shape/marketing-img8.png",
      className: "wow zoomIn",
      "data-wow-delay": "0.4s",
      alt: "img"
    }), __jsx("img", {
      src: "/images/shape6.png",
      alt: "img"
    }), __jsx("img", {
      src: "/images/marketing-shape/marketing-img9.png",
      className: "wow fadeInDown",
      "data-wow-delay": "0.4s",
      alt: "img"
    }), __jsx("img", {
      src: "/images/marketing-shape/marketing-img10.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.4s",
      alt: "img"
    }), __jsx("img", {
      src: "/images/marketing-shape/marketing-img11.png",
      className: "wow flip",
      "data-wow-delay": "0.4s",
      alt: "img"
    }), __jsx("img", {
      src: "/images/marketing-shape/marketing-img12.png",
      className: "wow lightSpeedIn",
      "data-wow-delay": "0.4s",
      alt: "img"
    }), __jsx("img", {
      src: "/images/marketing-shape/main-image.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.4s",
      alt: "img"
    }))))))), __jsx("div", {
      className: "bg-gray shape-1"
    }), __jsx("div", {
      className: "shape1"
    }, __jsx("img", {
      src: "/images/shape1.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape2"
    }, __jsx("img", {
      src: "/images/shape2.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape3"
    }, __jsx("img", {
      src: "/images/shape3.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape6"
    }, __jsx("img", {
      src: "/images/shape6.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape8 rotateme"
    }, __jsx("img", {
      src: "/images/shape8.svg",
      alt: "shape"
    })), __jsx("div", {
      className: "shape9"
    }, __jsx("img", {
      src: "/images/shape9.svg",
      alt: "shape"
    })), __jsx("div", {
      className: "bubble-animate"
    }, __jsx("div", {
      className: "circle small square1"
    }), __jsx("div", {
      className: "circle small square2"
    }), __jsx("div", {
      className: "circle small square3"
    }), __jsx("div", {
      className: "circle small square4"
    }), __jsx("div", {
      className: "circle small square5"
    }), __jsx("div", {
      className: "circle medium square1"
    }), __jsx("div", {
      className: "circle medium square2"
    }), __jsx("div", {
      className: "circle medium square3"
    }), __jsx("div", {
      className: "circle medium square4"
    }), __jsx("div", {
      className: "circle medium square5"
    }), __jsx("div", {
      className: "circle large square1"
    }), __jsx("div", {
      className: "circle large square2"
    }), __jsx("div", {
      className: "circle large square3"
    }), __jsx("div", {
      className: "circle large square4"
    }))), __jsx(external_react_modal_video_default.a, {
      channel: "youtube",
      isOpen: this.state.isOpen,
      videoId: "szuchBiLrEM",
      onClose: () => this.setState({
        isOpen: false
      })
    }));
  }

}

/* harmony default export */ var DigitalMarketing_Banner = (Banner_Banner);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./components/DigitalMarketing/Partner.js
var Partner_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Partner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  autoplay: true,
  nav: false,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: false,
  loop: true,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    1024: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
};

class Partner_Partner extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Partner_defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return Partner_jsx("div", {
      className: "partner-area marketing-partner"
    }, Partner_jsx("div", {
      className: "container"
    }, Partner_jsx("div", {
      className: "row"
    }, this.state.display ? Partner_jsx(OwlCarousel, _extends({
      className: "partner-slides owl-carousel owl-theme"
    }, options), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: "/images/partner-1.png",
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: "/images/partner-2.png",
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: "/images/partner-3.png",
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: "/images/partner-4.png",
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: "/images/partner-5.png",
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: "/images/partner-6.png",
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: "/images/partner-7.png",
      alt: "partner"
    })))))) : '')));
  }

}

/* harmony default export */ var DigitalMarketing_Partner = (Partner_Partner);
// CONCATENATED MODULE: ./components/DigitalMarketing/Features.js
var Features_jsx = external_react_default.a.createElement;



class Features_Features extends external_react_["Component"] {
  render() {
    return Features_jsx("section", {
      className: "features-area marketing-features ptb-100"
    }, Features_jsx("div", {
      className: "container"
    }, Features_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Features_jsx("div", {
      className: "col-lg-7 col-md-12"
    }, Features_jsx("div", {
      className: "row"
    }, Features_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, Features_jsx("div", {
      className: "single-holder-box"
    }, Features_jsx("img", {
      src: "/images/payment-img1.png",
      alt: "image"
    }), Features_jsx("h3", null, "Keyword Analysis"), Features_jsx("p", null, "Duis hendrerit eget dolor non lora pulvinar. In conse.")), Features_jsx("div", {
      className: "single-holder-box mt-30"
    }, Features_jsx("img", {
      src: "/images/payment-img2.png",
      alt: "image"
    }), Features_jsx("h3", null, "Competitor Analysis"), Features_jsx("p", null, "Duis hendrerit eget dolor non lora pulvinar. In conse."))), Features_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, Features_jsx("div", {
      className: "single-holder-box mt-50"
    }, Features_jsx("img", {
      src: "/images/payment-img3.png",
      alt: "image"
    }), Features_jsx("h3", null, "PPC Marketing"), Features_jsx("p", null, "Duis hendrerit eget dolor non lora pulvinar. In conse.")), Features_jsx("div", {
      className: "single-holder-box mt-30"
    }, Features_jsx("img", {
      src: "/images/payment-img4.png",
      alt: "image"
    }), Features_jsx("h3", null, "Web Research"), Features_jsx("p", null, "Duis hendrerit eget dolor non lora pulvinar. In conse."))))), Features_jsx("div", {
      className: "col-lg-5 col-md-12"
    }, Features_jsx("div", {
      className: "features-holder-content"
    }, Features_jsx("div", {
      className: "section-title"
    }, Features_jsx("h2", null, "We are here for Make Best Product"), Features_jsx("div", {
      className: "bar"
    }), Features_jsx("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.")), Features_jsx("p", null, "We\u2019re also experts at finding the sweet spot between Google\u2019s guidelines and what is commercially right for you. We have progressive theories on search as a tool for retention of customers, not just for acquisition. we always measure, always analyze and always innovate."), Features_jsx(link_default.a, {
      href: "#"
    }, Features_jsx("a", {
      className: "btn btn-primary"
    }, "Our Services")))))), Features_jsx("div", {
      className: "features-inner-area"
    }, Features_jsx("div", {
      className: "container"
    }, Features_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Features_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, Features_jsx("div", {
      className: "features-inner-content"
    }, Features_jsx("div", {
      className: "features-item"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "icofont-ui-call"
    })), Features_jsx("h3", null, "Free Caliing Service"), Features_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.")), Features_jsx("div", {
      className: "features-item"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "icofont-gift"
    })), Features_jsx("h3", null, "Daily Free Gift"), Features_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.")), Features_jsx("div", {
      className: "features-item"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "icofont-qr-code"
    })), Features_jsx("h3", null, "QR Code Scaner"), Features_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.")))), Features_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, Features_jsx("div", {
      className: "features-image"
    }, Features_jsx("img", {
      src: "/images/features-img1.png",
      alt: "image"
    })))))), Features_jsx("div", {
      className: "shape7"
    }, Features_jsx("img", {
      src: "/images/shape7.png",
      alt: "shape"
    })), Features_jsx("div", {
      className: "shape3"
    }, Features_jsx("img", {
      src: "/images/shape3.png",
      alt: "img"
    })), Features_jsx("div", {
      className: "bg-gray shape-1"
    }), Features_jsx("div", {
      className: "shape6"
    }, Features_jsx("img", {
      src: "/images/shape6.png",
      alt: "img"
    })), Features_jsx("div", {
      className: "shape8 rotateme"
    }, Features_jsx("img", {
      src: "/images/shape8.svg",
      alt: "shape"
    })), Features_jsx("div", {
      className: "shape9"
    }, Features_jsx("img", {
      src: "/images/shape9.svg",
      alt: "shape"
    })), Features_jsx("div", {
      className: "shape10"
    }, Features_jsx("img", {
      src: "/images/shape10.svg",
      alt: "shape"
    })), Features_jsx("div", {
      className: "shape11 rotateme"
    }, Features_jsx("img", {
      src: "/images/shape11.svg",
      alt: "shape"
    })));
  }

}

/* harmony default export */ var DigitalMarketing_Features = (Features_Features);
// EXTERNAL MODULE: ./components/DigitalMarketing/Services.js
var Services = __webpack_require__("7cdu");

// CONCATENATED MODULE: ./components/DigitalMarketing/Overview.js
var Overview_jsx = external_react_default.a.createElement;



class Overview_Overview extends external_react_["Component"] {
  render() {
    return Overview_jsx("section", {
      className: "overview-section ptb-100"
    }, Overview_jsx("div", {
      className: "container"
    }, Overview_jsx("div", {
      className: "overview-box"
    }, Overview_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-img"
    }, Overview_jsx("img", {
      src: "/images/marketing-1.png",
      alt: "image"
    })), Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-power"
    })), Overview_jsx("h3", null, "Social Media Marketing"), Overview_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), Overview_jsx("ul", null, Overview_jsx("li", null, "Unimited Video Call"), Overview_jsx("li", null, "Add Favourite contact"), Overview_jsx("li", null, "Camera Filter")), Overview_jsx(link_default.a, {
      href: "#"
    }, Overview_jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))))), Overview_jsx("div", {
      className: "overview-box"
    }, Overview_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-share-alt"
    })), Overview_jsx("h3", null, "Email Marketing"), Overview_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), Overview_jsx("ul", null, Overview_jsx("li", null, "Unimited Video Call"), Overview_jsx("li", null, "Add Favourite contact"), Overview_jsx("li", null, "Camera Filter")), Overview_jsx(link_default.a, {
      href: "#"
    }, Overview_jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))), Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-img"
    }, Overview_jsx("img", {
      src: "/images/marketing-2.png",
      alt: "image"
    })))), Overview_jsx("div", {
      className: "overview-box"
    }, Overview_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-img"
    }, Overview_jsx("img", {
      src: "/images/marketing.png",
      alt: "image"
    })), Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-ui-messaging"
    })), Overview_jsx("h3", null, "Paid Advertising"), Overview_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), Overview_jsx("ul", null, Overview_jsx("li", null, "Unimited Video Call"), Overview_jsx("li", null, "Add Favourite contact"), Overview_jsx("li", null, "Camera Filter")), Overview_jsx(link_default.a, {
      href: "#"
    }, Overview_jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))))), Overview_jsx("div", {
      className: "overview-box"
    }, Overview_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-users-social"
    })), Overview_jsx("h3", null, "We provide proffesional staff"), Overview_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), Overview_jsx("ul", null, Overview_jsx("li", null, "Unimited Video Call"), Overview_jsx("li", null, "Add Favourite contact"), Overview_jsx("li", null, "Camera Filter")), Overview_jsx(link_default.a, {
      href: "#"
    }, Overview_jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))), Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-img"
    }, Overview_jsx("img", {
      src: "/images/marketing-3.png",
      alt: "image"
    }))))), Overview_jsx("div", {
      className: "shape7"
    }, Overview_jsx("img", {
      src: "/images/shape7.png",
      alt: "shape"
    })), Overview_jsx("div", {
      className: "shape3"
    }, Overview_jsx("img", {
      src: "/images/shape3.png",
      alt: "img"
    })), Overview_jsx("div", {
      className: "bg-gray shape-1"
    }), Overview_jsx("div", {
      className: "shape6"
    }, Overview_jsx("img", {
      src: "/images/shape6.png",
      alt: "img"
    })), Overview_jsx("div", {
      className: "shape8 rotateme"
    }, Overview_jsx("img", {
      src: "/images/shape8.svg",
      alt: "shape"
    })), Overview_jsx("div", {
      className: "shape9"
    }, Overview_jsx("img", {
      src: "/images/shape9.svg",
      alt: "shape"
    })), Overview_jsx("div", {
      className: "shape10"
    }, Overview_jsx("img", {
      src: "/images/shape10.svg",
      alt: "shape"
    })), Overview_jsx("div", {
      className: "shape11 rotateme"
    }, Overview_jsx("img", {
      src: "/images/shape11.svg",
      alt: "shape"
    })));
  }

}

/* harmony default export */ var DigitalMarketing_Overview = (Overview_Overview);
// CONCATENATED MODULE: ./components/DigitalMarketing/Join.js
var Join_jsx = external_react_default.a.createElement;



class Join_Join extends external_react_["Component"] {
  render() {
    return Join_jsx("section", {
      className: "join-area ptb-100"
    }, Join_jsx("div", {
      className: "container"
    }, Join_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Join_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, Join_jsx("div", {
      className: "join-img"
    }, Join_jsx("img", {
      src: "/images/3.png",
      alt: "img"
    }))), Join_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, Join_jsx("div", {
      className: "join-content"
    }, Join_jsx("span", null, "Start 30 Days Free Trial"), Join_jsx("h3", null, "Overall 400k+ Our Clients! Please Get Start Now"), Join_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), Join_jsx(link_default.a, {
      href: "#"
    }, Join_jsx("a", {
      className: "btn btn-primary"
    }, "Join Now")))))));
  }

}

/* harmony default export */ var DigitalMarketing_Join = (Join_Join);
// CONCATENATED MODULE: ./components/DigitalMarketing/AnalysisForm.js
var AnalysisForm_jsx = external_react_default.a.createElement;


class AnalysisForm_AnalysisForm extends external_react_["Component"] {
  render() {
    return AnalysisForm_jsx("section", {
      className: "analysis-area ptb-100 bg-gray"
    }, AnalysisForm_jsx("div", {
      className: "container"
    }, AnalysisForm_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, AnalysisForm_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, AnalysisForm_jsx("div", {
      className: "analysis-form"
    }, AnalysisForm_jsx("h3", null, "Free SEO Analysis"), AnalysisForm_jsx("form", null, AnalysisForm_jsx("div", {
      className: "form-group"
    }, AnalysisForm_jsx("input", {
      type: "text",
      placeholder: "Name*",
      className: "form-control"
    })), AnalysisForm_jsx("div", {
      className: "form-group"
    }, AnalysisForm_jsx("input", {
      type: "email",
      placeholder: "Email*",
      className: "form-control"
    })), AnalysisForm_jsx("div", {
      className: "form-group"
    }, AnalysisForm_jsx("input", {
      type: "text",
      placeholder: "Phone*",
      className: "form-control"
    })), AnalysisForm_jsx("div", {
      className: "form-group"
    }, AnalysisForm_jsx("input", {
      type: "text",
      placeholder: "Website*",
      className: "form-control"
    })), AnalysisForm_jsx("div", {
      className: "form-group"
    }, AnalysisForm_jsx("input", {
      type: "text",
      placeholder: "Company Name*",
      className: "form-control"
    })), AnalysisForm_jsx("button", {
      type: "submit",
      className: "btn btn-primary"
    }, "Get Free Report")))), AnalysisForm_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, AnalysisForm_jsx("div", {
      className: "analysis-text"
    }, AnalysisForm_jsx("span", null, "Free SEO Analysis"), AnalysisForm_jsx("h3", null, "Be on the Top & Get More Traffic to Your Website"), AnalysisForm_jsx("p", null, "The following services explain how we approach SEO for a range of common purposes:"), AnalysisForm_jsx("ul", null, AnalysisForm_jsx("li", null, "If Google can\u2019t crawl your site, it\u2019s not going to rank \u2013 but that doesn\u2019t mean avoiding Javascript."), AnalysisForm_jsx("li", null, "For businesses which sell products online and and improve their product listings in the search results."), AnalysisForm_jsx("li", null, "If you\u2019re investing in a new website it\u2019s important to ensure it\u2019s built to succeed in the search results too."), AnalysisForm_jsx("li", null, "If Google can\u2019t crawl your site, it\u2019s not going to rank \u2013 but that doesn\u2019t mean avoiding Javascript.")))))));
  }

}

/* harmony default export */ var DigitalMarketing_AnalysisForm = (AnalysisForm_AnalysisForm);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__("NHP8");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);

// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__("iwtP");
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);

// CONCATENATED MODULE: ./components/DigitalMarketing/Funfact.js
var Funfact_jsx = external_react_default.a.createElement;

function Funfact_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Funfact_Funfact extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Funfact_defineProperty(this, "state", {
      didViewCountUp: false
    });

    Funfact_defineProperty(this, "onVisibilityChange", isVisible => {
      if (isVisible) {
        this.setState({
          didViewCountUp: true
        });
      }
    });
  }

  render() {
    return Funfact_jsx("section", {
      className: "app-funfacts-area ptb-100"
    }, Funfact_jsx("div", {
      className: "container"
    }, Funfact_jsx("div", {
      className: "row"
    }, Funfact_jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, Funfact_jsx("div", {
      className: "single-funfact"
    }, Funfact_jsx("div", {
      className: "icon"
    }, Funfact_jsx("i", {
      className: "icofont-users-alt-5"
    })), Funfact_jsx("h3", null, Funfact_jsx("span", {
      className: "count"
    }, Funfact_jsx(external_react_visibility_sensor_default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true
    }, Funfact_jsx(external_react_countup_default.a, {
      start: 0,
      end: this.state.didViewCountUp ? 2150 : 0,
      duration: 3
    })))), Funfact_jsx("p", null, "Active Clients"))), Funfact_jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, Funfact_jsx("div", {
      className: "single-funfact"
    }, Funfact_jsx("div", {
      className: "icon"
    }, Funfact_jsx("i", {
      className: "icofont-rocket-alt-1"
    })), Funfact_jsx("h3", null, Funfact_jsx("span", {
      className: "count"
    }, Funfact_jsx(external_react_visibility_sensor_default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true
    }, Funfact_jsx(external_react_countup_default.a, {
      start: 0,
      end: this.state.didViewCountUp ? 86 : 0,
      duration: 3
    })))), Funfact_jsx("p", null, "Success Rate"))), Funfact_jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, Funfact_jsx("div", {
      className: "single-funfact"
    }, Funfact_jsx("div", {
      className: "icon"
    }, Funfact_jsx("i", {
      className: "icofont-laptop-alt"
    })), Funfact_jsx("h3", null, Funfact_jsx("span", {
      className: "count"
    }, Funfact_jsx(external_react_visibility_sensor_default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true
    }, Funfact_jsx(external_react_countup_default.a, {
      start: 0,
      end: this.state.didViewCountUp ? 550 : 0,
      duration: 3
    })))), Funfact_jsx("p", null, "Projects Done"))), Funfact_jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, Funfact_jsx("div", {
      className: "single-funfact"
    }, Funfact_jsx("div", {
      className: "icon"
    }, Funfact_jsx("i", {
      className: "icofont-win-trophy"
    })), Funfact_jsx("h3", null, Funfact_jsx("span", {
      className: "count"
    }, Funfact_jsx(external_react_visibility_sensor_default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true
    }, Funfact_jsx(external_react_countup_default.a, {
      start: 0,
      end: this.state.didViewCountUp ? 35 : 0,
      duration: 3
    }))), "+"), Funfact_jsx("p", null, "Awards"))))));
  }

}

/* harmony default export */ var DigitalMarketing_Funfact = (Funfact_Funfact);
// EXTERNAL MODULE: external "react-image-lightbox"
var external_react_image_lightbox_ = __webpack_require__("cHt3");
var external_react_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_react_image_lightbox_);

// CONCATENATED MODULE: ./components/DigitalMarketing/Works.js
var Works_jsx = external_react_default.a.createElement;

function Works_extends() { Works_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Works_extends.apply(this, arguments); }

function Works_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Works_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const Works_options = {
  autoplay: true,
  nav: true,
  loop: true,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: false,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 4
    }
  }
};
const Works_images = ['/images/work-img1.jpg', '/images/work-img2.jpg', '/images/work-img3.jpg', '/images/work-img4.jpg', '/images/work-img5.jpg', '/images/work-img6.jpg'];

class Works_Works extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Works_defineProperty(this, "state", {
      display: false,
      photoIndex: 0,
      isOpenImage: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    const {
      photoIndex,
      isOpenImage
    } = this.state;
    return Works_jsx(external_react_default.a.Fragment, null, Works_jsx("section", {
      className: "project-area ptb-100"
    }, Works_jsx("div", {
      className: "container"
    }, Works_jsx("div", {
      className: "section-title"
    }, Works_jsx("h2", null, "Recent Work"), Works_jsx("div", {
      className: "bar"
    }), Works_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), Works_jsx("div", {
      className: "row m-0"
    }, this.state.display ? Works_jsx(Works_OwlCarousel, Works_extends({
      className: "project-slides owl-carousel owl-theme"
    }, Works_options), Works_jsx("div", {
      className: "col-lg-12"
    }, Works_jsx("div", {
      className: "single-project"
    }, Works_jsx("div", {
      className: "project-image"
    }, Works_jsx("img", {
      src: "/images/work-img1.jpg",
      alt: "work"
    }), Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Works_jsx("i", {
      className: "icofont-plus"
    })))), Works_jsx("div", {
      className: "project-content"
    }, Works_jsx("span", null, "Digital"), Works_jsx("h3", null, Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", null, "Network Marketing")))))), Works_jsx("div", {
      className: "col-lg-12"
    }, Works_jsx("div", {
      className: "single-project"
    }, Works_jsx("div", {
      className: "project-image"
    }, Works_jsx("img", {
      src: "/images/work-img2.jpg",
      alt: "work"
    }), Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Works_jsx("i", {
      className: "icofont-plus"
    })))), Works_jsx("div", {
      className: "project-content"
    }, Works_jsx("span", null, "Digital"), Works_jsx("h3", null, Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", null, "Network Marketing")))))), Works_jsx("div", {
      className: "col-lg-12"
    }, Works_jsx("div", {
      className: "single-project"
    }, Works_jsx("div", {
      className: "project-image"
    }, Works_jsx("img", {
      src: "/images/work-img3.jpg",
      alt: "work"
    }), Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Works_jsx("i", {
      className: "icofont-plus"
    })))), Works_jsx("div", {
      className: "project-content"
    }, Works_jsx("span", null, "Digital"), Works_jsx("h3", null, Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", null, "Network Marketing")))))), isOpenImage && Works_jsx(external_react_image_lightbox_default.a, {
      mainSrc: Works_images[photoIndex],
      nextSrc: Works_images[(photoIndex + 1) % Works_images.length],
      prevSrc: Works_images[(photoIndex + Works_images.length - 1) % Works_images.length],
      onCloseRequest: () => this.setState({
        isOpenImage: false
      }),
      onMovePrevRequest: () => this.setState({
        photoIndex: (photoIndex + Works_images.length - 1) % Works_images.length
      }),
      onMoveNextRequest: () => this.setState({
        photoIndex: (photoIndex + 1) % Works_images.length
      })
    }), Works_jsx("div", {
      className: "col-lg-12"
    }, Works_jsx("div", {
      className: "single-project"
    }, Works_jsx("div", {
      className: "project-image"
    }, Works_jsx("img", {
      src: "/images/work-img4.jpg",
      alt: "work"
    }), Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Works_jsx("i", {
      className: "icofont-plus"
    })))), Works_jsx("div", {
      className: "project-content"
    }, Works_jsx("span", null, "Digital"), Works_jsx("h3", null, Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", null, "Network Marketing")))))), Works_jsx("div", {
      className: "col-lg-12"
    }, Works_jsx("div", {
      className: "single-project"
    }, Works_jsx("div", {
      className: "project-image"
    }, Works_jsx("img", {
      src: "/images/work-img5.jpg",
      alt: "work"
    }), Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Works_jsx("i", {
      className: "icofont-plus"
    })))), Works_jsx("div", {
      className: "project-content"
    }, Works_jsx("span", null, "Digital"), Works_jsx("h3", null, Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", null, "Network Marketing")))))), Works_jsx("div", {
      className: "col-lg-12"
    }, Works_jsx("div", {
      className: "single-project"
    }, Works_jsx("div", {
      className: "project-image"
    }, Works_jsx("img", {
      src: "/images/work-img6.jpg",
      alt: "work"
    }), Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Works_jsx("i", {
      className: "icofont-plus"
    })))), Works_jsx("div", {
      className: "project-content"
    }, Works_jsx("span", null, "Digital"), Works_jsx("h3", null, Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", null, "Network Marketing"))))))) : ''), Works_jsx("canvas", {
      id: "canvas"
    })));
  }

}

/* harmony default export */ var DigitalMarketing_Works = (Works_Works);
// CONCATENATED MODULE: ./components/DigitalMarketing/Team.js
var Team_jsx = external_react_default.a.createElement;

function Team_extends() { Team_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Team_extends.apply(this, arguments); }

function Team_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Team_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const Team_options = {
  loop: true,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  dots: false,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1024: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};

class Team_Team extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Team_defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return Team_jsx("section", {
      className: "team-area ptb-100 bg-gray"
    }, Team_jsx("div", {
      className: "container"
    }, Team_jsx("div", {
      className: "section-title"
    }, Team_jsx("h2", null, "Our Smart Team"), Team_jsx("div", {
      className: "bar"
    }), Team_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), Team_jsx("div", {
      className: "row"
    }, this.state.display ? Team_jsx(Team_OwlCarousel, Team_extends({
      className: "team-slides owl-carousel owl-theme"
    }, Team_options), Team_jsx("div", {
      className: "col-lg-12"
    }, Team_jsx("div", {
      className: "single-team-member-box"
    }, Team_jsx("img", {
      src: "/images/team-img1.jpg",
      alt: "team"
    }), Team_jsx("div", {
      className: "team-content"
    }, Team_jsx("h3", null, "John Doe"), Team_jsx("span", null, "CEO"), Team_jsx("ul", null, Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "facebook"
    }, Team_jsx("i", {
      className: "icofont-facebook"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "instagram"
    }, Team_jsx("i", {
      className: "icofont-instagram"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "twitter"
    }, Team_jsx("i", {
      className: "icofont-twitter"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "linkedin"
    }, Team_jsx("i", {
      className: "icofont-linkedin"
    })))))))), Team_jsx("div", {
      className: "col-lg-12"
    }, Team_jsx("div", {
      className: "single-team-member-box"
    }, Team_jsx("img", {
      src: "/images/team-img2.jpg",
      alt: "team"
    }), Team_jsx("div", {
      className: "team-content"
    }, Team_jsx("h3", null, "Steven Smith"), Team_jsx("span", null, "Developer"), Team_jsx("ul", null, Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "facebook"
    }, Team_jsx("i", {
      className: "icofont-facebook"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "instagram"
    }, Team_jsx("i", {
      className: "icofont-instagram"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "twitter"
    }, Team_jsx("i", {
      className: "icofont-twitter"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "linkedin"
    }, Team_jsx("i", {
      className: "icofont-linkedin"
    })))))))), Team_jsx("div", {
      className: "col-lg-12"
    }, Team_jsx("div", {
      className: "single-team-member-box"
    }, Team_jsx("img", {
      src: "/images/team-img3.jpg",
      alt: "team"
    }), Team_jsx("div", {
      className: "team-content"
    }, Team_jsx("h3", null, "David Luiz"), Team_jsx("span", null, "Designer"), Team_jsx("ul", null, Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "facebook"
    }, Team_jsx("i", {
      className: "icofont-facebook"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "instagram"
    }, Team_jsx("i", {
      className: "icofont-instagram"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "twitter"
    }, Team_jsx("i", {
      className: "icofont-twitter"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "linkedin"
    }, Team_jsx("i", {
      className: "icofont-linkedin"
    })))))))), Team_jsx("div", {
      className: "col-lg-12"
    }, Team_jsx("div", {
      className: "single-team-member-box"
    }, Team_jsx("img", {
      src: "/images/team-img4.jpg",
      alt: "team"
    }), Team_jsx("div", {
      className: "team-content"
    }, Team_jsx("h3", null, "Park Tim"), Team_jsx("span", null, "SEO Expert"), Team_jsx("ul", null, Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "facebook"
    }, Team_jsx("i", {
      className: "icofont-facebook"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "instagram"
    }, Team_jsx("i", {
      className: "icofont-instagram"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "twitter"
    }, Team_jsx("i", {
      className: "icofont-twitter"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "linkedin"
    }, Team_jsx("i", {
      className: "icofont-linkedin"
    })))))))), Team_jsx("div", {
      className: "col-lg-12"
    }, Team_jsx("div", {
      className: "single-team-member-box"
    }, Team_jsx("img", {
      src: "/images/team-img5.jpg",
      alt: "team"
    }), Team_jsx("div", {
      className: "team-content"
    }, Team_jsx("h3", null, "Doglas Costa"), Team_jsx("span", null, "Manager"), Team_jsx("ul", null, Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "facebook"
    }, Team_jsx("i", {
      className: "icofont-facebook"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "instagram"
    }, Team_jsx("i", {
      className: "icofont-instagram"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "twitter"
    }, Team_jsx("i", {
      className: "icofont-twitter"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "linkedin"
    }, Team_jsx("i", {
      className: "icofont-linkedin"
    }))))))))) : '')));
  }

}

/* harmony default export */ var DigitalMarketing_Team = (Team_Team);
// CONCATENATED MODULE: ./components/DigitalMarketing/Pricing.js
var Pricing_jsx = external_react_default.a.createElement;



class Pricing_Pricing extends external_react_["Component"] {
  render() {
    return Pricing_jsx("section", {
      className: "pricing-area ptb-100"
    }, Pricing_jsx("div", {
      className: "container"
    }, Pricing_jsx("div", {
      className: "section-title"
    }, Pricing_jsx("h2", null, "Easy Pricing Plans"), Pricing_jsx("div", {
      className: "bar"
    }), Pricing_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), Pricing_jsx("div", {
      className: "row"
    }, Pricing_jsx("div", {
      className: "col-lg-4 col-md-6"
    }, Pricing_jsx("div", {
      className: "pricing-table-box"
    }, Pricing_jsx("div", {
      className: "pricingTable-header"
    }, Pricing_jsx("h3", {
      className: "title"
    }, "Basic"), Pricing_jsx("div", {
      className: "price-value"
    }, Pricing_jsx("sup", null, "$"), "59.99 ", Pricing_jsx("span", null, "/per year"))), Pricing_jsx("ul", {
      className: "pricing-content"
    }, Pricing_jsx("li", null, "Managment & Marketing"), Pricing_jsx("li", null, "SEO Optimization"), Pricing_jsx("li", null, "25 Analytics Campaign"), Pricing_jsx("li", null, "1,300 Change Keywords"), Pricing_jsx("li", null, "25 Social Media Reviews"), Pricing_jsx("li", null, "1 Free Optimization"), Pricing_jsx("li", null, "24/7 Support")), Pricing_jsx(link_default.a, {
      href: "#"
    }, Pricing_jsx("a", {
      className: "btn btn-primary"
    }, "Buy Now")))), Pricing_jsx("div", {
      className: "col-lg-4 col-md-6"
    }, Pricing_jsx("div", {
      className: "pricing-table-box"
    }, Pricing_jsx("div", {
      className: "pricingTable-header"
    }, Pricing_jsx("h3", {
      className: "title"
    }, "Ultra"), Pricing_jsx("div", {
      className: "price-value"
    }, Pricing_jsx("sup", null, "$"), "79.99 ", Pricing_jsx("span", null, "/per year"))), Pricing_jsx("ul", {
      className: "pricing-content"
    }, Pricing_jsx("li", null, "Managment & Marketing"), Pricing_jsx("li", null, "SEO Optimization"), Pricing_jsx("li", null, "25 Analytics Campaign"), Pricing_jsx("li", null, "1,300 Change Keywords"), Pricing_jsx("li", null, "25 Social Media Reviews"), Pricing_jsx("li", null, "1 Free Optimization"), Pricing_jsx("li", null, "24/7 Support")), Pricing_jsx(link_default.a, {
      href: "#"
    }, Pricing_jsx("a", {
      className: "btn btn-primary"
    }, "Buy Now")))), Pricing_jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
    }, Pricing_jsx("div", {
      className: "pricing-table-box"
    }, Pricing_jsx("div", {
      className: "pricingTable-header"
    }, Pricing_jsx("h3", {
      className: "title"
    }, "Pro"), Pricing_jsx("div", {
      className: "price-value"
    }, Pricing_jsx("sup", null, "$"), "99.99 ", Pricing_jsx("span", null, "/per year"))), Pricing_jsx("ul", {
      className: "pricing-content"
    }, Pricing_jsx("li", null, "Managment & Marketing"), Pricing_jsx("li", null, "SEO Optimization"), Pricing_jsx("li", null, "25 Analytics Campaign"), Pricing_jsx("li", null, "1,300 Change Keywords"), Pricing_jsx("li", null, "25 Social Media Reviews"), Pricing_jsx("li", null, "1 Free Optimization"), Pricing_jsx("li", null, "24/7 Support")), Pricing_jsx(link_default.a, {
      href: "#"
    }, Pricing_jsx("a", {
      className: "btn btn-primary"
    }, "Buy Now")))))));
  }

}

/* harmony default export */ var DigitalMarketing_Pricing = (Pricing_Pricing);
// CONCATENATED MODULE: ./components/DigitalMarketing/Blog.js
var Blog_jsx = external_react_default.a.createElement;

function Blog_extends() { Blog_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Blog_extends.apply(this, arguments); }

function Blog_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Blog_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const Blog_options = {
  autoplay: true,
  nav: true,
  loop: true,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: false,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
};

class Blog_Blog extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Blog_defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return Blog_jsx("section", {
      className: "blog-area ptb-100"
    }, Blog_jsx("div", {
      className: "container"
    }, Blog_jsx("div", {
      className: "section-title"
    }, Blog_jsx("h2", null, "Our Latest News"), Blog_jsx("div", {
      className: "bar"
    }), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), Blog_jsx("div", {
      className: "row"
    }, this.state.display ? Blog_jsx(Blog_OwlCarousel, Blog_extends({
      className: "blog-slides owl-carousel owl-theme"
    }, Blog_options), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: "/images/blog-img1.jpg",
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 23, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Most Popular New Business Apps"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: "/images/blog-img2.jpg",
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 16, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: "/images/blog-img3.jpg",
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 14, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: "/images/blog-img4.jpg",
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 06, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: "/images/blog-img5.jpg",
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 04, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: "/images/blog-img3.jpg",
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 26, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    }))))))) : '')));
  }

}

/* harmony default export */ var DigitalMarketing_Blog = (Blog_Blog);
// CONCATENATED MODULE: ./components/DigitalMarketing/Feedback.js
var Feedback_jsx = external_react_default.a.createElement;

function Feedback_extends() { Feedback_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Feedback_extends.apply(this, arguments); }

function Feedback_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Feedback_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const Feedback_options = {
  loop: true,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  center: true,
  dots: false,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
};

class Feedback_Feedback extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Feedback_defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return Feedback_jsx("section", {
      className: "feedback-area ptb-100 bg-gray"
    }, Feedback_jsx("div", {
      className: "container"
    }, Feedback_jsx("div", {
      className: "section-title"
    }, Feedback_jsx("h2", null, "Testimonials"), Feedback_jsx("div", {
      className: "bar"
    }), Feedback_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), Feedback_jsx("div", {
      className: "row"
    }, this.state.display ? Feedback_jsx(Feedback_OwlCarousel, Feedback_extends({
      className: "feedback-slides owl-carousel owl-theme"
    }, Feedback_options), Feedback_jsx("div", {
      className: "col-lg-12"
    }, Feedback_jsx("div", {
      className: "single-feedback-box"
    }, Feedback_jsx("div", {
      className: "client-info"
    }, Feedback_jsx("img", {
      src: "/images/client1.jpg",
      alt: "client"
    }), Feedback_jsx("h3", null, "Alit John"), Feedback_jsx("span", null, "Web Developer")), Feedback_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance."))), Feedback_jsx("div", {
      className: "col-lg-12"
    }, Feedback_jsx("div", {
      className: "single-feedback-box"
    }, Feedback_jsx("div", {
      className: "client-info"
    }, Feedback_jsx("img", {
      src: "/images/client2.jpg",
      alt: "client"
    }), Feedback_jsx("h3", null, "Alit John"), Feedback_jsx("span", null, "SEO Expert")), Feedback_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance."))), Feedback_jsx("div", {
      className: "col-lg-12"
    }, Feedback_jsx("div", {
      className: "single-feedback-box"
    }, Feedback_jsx("div", {
      className: "client-info"
    }, Feedback_jsx("img", {
      src: "/images/client3.jpg",
      alt: "client"
    }), Feedback_jsx("h3", null, "Steven John"), Feedback_jsx("span", null, "Web Developer")), Feedback_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance."))), Feedback_jsx("div", {
      className: "col-lg-12"
    }, Feedback_jsx("div", {
      className: "single-feedback-box"
    }, Feedback_jsx("div", {
      className: "client-info"
    }, Feedback_jsx("img", {
      src: "/images/client4.jpg",
      alt: "client"
    }), Feedback_jsx("h3", null, "David Warner"), Feedback_jsx("span", null, "Web Developer")), Feedback_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance.")))) : '')), Feedback_jsx("svg", {
      className: "svg-feedback-bottom",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none"
    }, Feedback_jsx("path", {
      d: "M0,70 C30,130 70,50 100,70 L100,100 0,100 Z",
      fill: "#ffffff"
    })));
  }

}

/* harmony default export */ var DigitalMarketing_Feedback = (Feedback_Feedback);
// CONCATENATED MODULE: ./components/DigitalMarketing/GetStarted.js
var GetStarted_jsx = external_react_default.a.createElement;



class GetStarted_GetStarted extends external_react_default.a.Component {
  render() {
    return GetStarted_jsx("section", {
      className: "get-started ptb-100 bg-gray"
    }, GetStarted_jsx("div", {
      className: "container"
    }, GetStarted_jsx("div", {
      className: "section-title"
    }, GetStarted_jsx("h2", null, "Get Started Free"), GetStarted_jsx("div", {
      className: "bar"
    }), GetStarted_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), GetStarted_jsx("div", {
      className: "get-started-form"
    }, GetStarted_jsx("form", null, GetStarted_jsx("div", {
      className: "form-group"
    }, GetStarted_jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Name"
    })), GetStarted_jsx("div", {
      className: "form-group"
    }, GetStarted_jsx("input", {
      type: "email",
      className: "form-control",
      placeholder: "Email"
    })), GetStarted_jsx("div", {
      className: "form-group"
    }, GetStarted_jsx("input", {
      type: "password",
      className: "form-control",
      placeholder: "Password"
    })), GetStarted_jsx("button", {
      type: "submit",
      className: "btn btn-primary"
    }, "Sign Up"), GetStarted_jsx("p", null, "Or use your ", GetStarted_jsx(link_default.a, {
      href: "#"
    }, GetStarted_jsx("a", null, "Facebook Account")))))));
  }

}

/* harmony default export */ var DigitalMarketing_GetStarted = (GetStarted_GetStarted);
// CONCATENATED MODULE: ./components/DigitalMarketing/Platform.js
var Platform_jsx = external_react_default.a.createElement;



class Platform_Platform extends external_react_["Component"] {
  render() {
    return Platform_jsx("section", {
      className: "platform-connect ptb-100"
    }, Platform_jsx("div", {
      className: "container"
    }, Platform_jsx("div", {
      className: "row"
    }, Platform_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Platform_jsx("h2", null, "Interact With Your Users On Every Single Platform")), Platform_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, Platform_jsx(link_default.a, {
      href: "#"
    }, Platform_jsx("a", {
      className: "box"
    }, Platform_jsx("img", {
      src: "/images/mailchimp.png",
      alt: "mailchimp"
    }), Platform_jsx("h3", null, "Mail Chimp"), Platform_jsx("span", null, "Send Mail"), Platform_jsx("i", {
      className: "icofont-bubble-right"
    })))), Platform_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, Platform_jsx(link_default.a, {
      href: "#"
    }, Platform_jsx("a", {
      className: "box"
    }, Platform_jsx("img", {
      src: "/images/slack.png",
      alt: "mailchimp"
    }), Platform_jsx("h3", null, "Slack"), Platform_jsx("span", null, "Messaging"), Platform_jsx("i", {
      className: "icofont-bubble-right"
    })))), Platform_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, Platform_jsx(link_default.a, {
      href: "#"
    }, Platform_jsx("a", {
      className: "box"
    }, Platform_jsx("img", {
      src: "/images/twitter.png",
      alt: "mailchimp"
    }), Platform_jsx("h3", null, "Twitter"), Platform_jsx("span", null, "Twitter Feed"), Platform_jsx("i", {
      className: "icofont-bubble-right"
    })))), Platform_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, Platform_jsx(link_default.a, {
      href: "#"
    }, Platform_jsx("a", {
      className: "box"
    }, Platform_jsx("img", {
      src: "/images/instagram.png",
      alt: "mailchimp"
    }), Platform_jsx("h3", null, "Instagram"), Platform_jsx("span", null, "News Feed"), Platform_jsx("i", {
      className: "icofont-bubble-right"
    })))))));
  }

}

/* harmony default export */ var DigitalMarketing_Platform = (Platform_Platform);
// CONCATENATED MODULE: ./pages/digital-marketing.js
var digital_marketing_jsx = external_react_default.a.createElement;



















class digital_marketing_DigitalMarketing extends external_react_default.a.Component {
  render() {
    return digital_marketing_jsx(external_react_default.a.Fragment, null, digital_marketing_jsx(Navbar["a" /* default */], null), digital_marketing_jsx(DigitalMarketing_Banner, null), digital_marketing_jsx(DigitalMarketing_Partner, null), digital_marketing_jsx(DigitalMarketing_Features, null), digital_marketing_jsx(Services["a" /* default */], null), digital_marketing_jsx(DigitalMarketing_Overview, null), digital_marketing_jsx(DigitalMarketing_Join, null), digital_marketing_jsx(DigitalMarketing_AnalysisForm, null), digital_marketing_jsx(DigitalMarketing_Funfact, null), digital_marketing_jsx(DigitalMarketing_Works, null), digital_marketing_jsx(DigitalMarketing_Team, null), digital_marketing_jsx(DigitalMarketing_Pricing, null), digital_marketing_jsx(DigitalMarketing_Blog, null), digital_marketing_jsx(DigitalMarketing_Feedback, null), digital_marketing_jsx(DigitalMarketing_GetStarted, null), digital_marketing_jsx(DigitalMarketing_Platform, null), digital_marketing_jsx(Footer["a" /* default */], null));
  }

}

/* harmony default export */ var digital_marketing = __webpack_exports__["default"] = (digital_marketing_DigitalMarketing);

/***/ }),

/***/ "tpJJ":
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),

/***/ "uQVn":
/***/ (function(module, exports) {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });