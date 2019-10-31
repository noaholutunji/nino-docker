webpackHotUpdate("static/development/pages/products.js",{

/***/ "./src/components/Products/Products.tsx":
/*!**********************************************!*\
  !*** ./src/components/Products/Products.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Body_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Body/Body */ "./src/components/Products/Body/Body.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Products = function Products(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      product = _useState[0],
      setProduct = _useState[1];

  var user = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('jwtToken');

  var userLinks = __jsx("p", {
    className: "lead"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/new"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBBtn"], {
    color: "primary"
  }, "Add Product")));

  var guestLinks = __jsx("div", null);

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/products');

              case 3:
                response = _context.sent;
                setProduct(response.data);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, [props]);

  var tabRow = function tabRow() {
    return product && product.map(function (object, i) {
      return __jsx(_Body_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
        obj: object,
        key: i
      });
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBContainer"], {
    className: "mt-3 text-center"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBRow"], null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCol"], null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBJumbotron"], null, __jsx("h2", {
    className: "h1 display-4"
  }, "Welcome to NinoStyle"), __jsx("p", {
    className: "lead"
  }, "Shop with 100% confidence"), __jsx("hr", null), __jsx("p", {
    className: ""
  }, "Get any kind of fashion wears you want at affordable prices"), user ? userLinks : guestLinks))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBRow"], null, tabRow())));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ })

})
//# sourceMappingURL=products.js.726464769c2054a99b9a.hot-update.js.map