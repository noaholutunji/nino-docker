module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Home_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Home/Home */ "./src/components/Home/Home.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = () => {
  return __jsx(_src_components_Home_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/components/Home/Home.tsx":
/*!**************************************!*\
  !*** ./src/components/Home/Home.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table */ "./src/components/Home/Table.tsx");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';





const Home = props => {
  const {
    0: product,
    1: setProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/products').then(response => {
      console.log(response.data);
      setProduct(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  }, [props]);

  const tabRow = () => {
    return product && product.slice(-4).map(function (object, i) {
      return __jsx(_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
        obj: object,
        key: i
      });
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBContainer"], {
    className: "d-flex justify-content-center mb-3"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCarousel"], {
    activeItem: 1,
    length: 4,
    showControls: true,
    showIndicators: true,
    className: "z-depth-1 w-75 mt-3"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCarouselInner"], null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCarouselItem"], {
    itemId: "1"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBView"], null, __jsx("img", {
    className: "d-block w-100",
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg",
    alt: "First slide"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBMask"], {
    overlay: "black-light"
  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCarouselCaption"], null, __jsx("h3", {
    className: "h3-responsive"
  }, "NinoStyle"), __jsx("p", null, "Enjoy shopping with us"))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCarouselItem"], {
    itemId: "2"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBView"], null, __jsx("img", {
    className: "d-block w-100",
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg",
    alt: "Second slide"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBMask"], {
    overlay: "black-strong"
  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCarouselCaption"], null, __jsx("h3", {
    className: "h3-responsive"
  }, "NinoStyle"), __jsx("p", null, "Top notch Experience"))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCarouselItem"], {
    itemId: "3"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBView"], null, __jsx("img", {
    className: "d-block w-100",
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg",
    alt: "Third slide"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBMask"], {
    overlay: "black-slight"
  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCarouselCaption"], null, __jsx("h3", {
    className: "h3-responsive"
  }, "Ninostyle"), __jsx("p", null, "Prompt Delivery"))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCarouselItem"], {
    itemId: "4"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBView"], null, __jsx("img", {
    className: "d-block w-100",
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    alt: "Third slide"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBMask"], {
    overlay: "black-slight"
  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCarouselCaption"], null, __jsx("h3", {
    className: "h3-responsive"
  }, "NinoStyle"), __jsx("p", null, "Excellence Customer Service")))))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBContainer"], {
    className: "mt-3 px-1 text-center"
  }, __jsx("h3", null, "Latest Products"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBRow"], {
    className: "mt-3"
  }, tabRow())));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Home/Table.tsx":
/*!***************************************!*\
  !*** ./src/components/Home/Table.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img`
  max-height: 220px;
  max-width: 220px;
`;

const TableImg = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBCol"], {
    className: "mt-3"
  }, __jsx(Img, {
    className: "img-fluid",
    alt: "",
    cascade: true,
    top: true,
    src: props.obj.image,
    waves: true
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TableImg);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/noah/Desktop/ninostyle-docker-GKE/client/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "mdbreact":
/*!***************************!*\
  !*** external "mdbreact" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mdbreact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map