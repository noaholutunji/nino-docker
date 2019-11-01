webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/Navbar/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.tsx ***!
  \******************************************/
/*! exports provided: Navbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "./node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdbreact/dist/css/mdb.css */ "./node_modules/mdbreact/dist/css/mdb.css");
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var NavLink = function NavLink(_ref) {
  var children = _ref.children,
      href = _ref.href;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavItem"], {
    active: router.pathname === href
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href
  }, __jsx("a", {
    className: "nav-link"
  }, children)));
};

var Navbar = function Navbar(props) {
  var logout = function logout() {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('jwtToken');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('user');
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/products');
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggleCollapse = function toggleCollapse() {
    setIsOpen(!isOpen);
  };

  var user = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('jwtToken');

  var userLinks = __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavbarNav"], {
    right: true
  }, __jsx(NavLink, {
    href: "/"
  }, "Home"), __jsx(NavLink, {
    href: "/products"
  }, "Products"), __jsx(NavLink, {
    href: "/cart"
  }, "Cart"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavItem"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    onClick: logout,
    className: "nav-link"
  }, "Logout"))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavItem"], null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBDropdown"], null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBDropdownToggle"], {
    nav: true,
    caret: true
  }, __jsx("span", {
    className: "mr-2"
  }, "Profile")), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBDropdownMenu"], null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBDropdownItem"], {
    href: "#!"
  }, "Orders"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBDropdownItem"], {
    href: "#!"
  }, "Account")))));

  var guestLinks = __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavbarNav"], {
    right: true
  }, __jsx(NavLink, {
    href: "/"
  }, "Home"), __jsx(NavLink, {
    href: "/products"
  }, "Products"), __jsx(NavLink, {
    href: "/login"
  }, "Login"), __jsx(NavLink, {
    href: "/register"
  }, "Sign Up"), __jsx(NavLink, {
    href: "/cart"
  }, "Cart"));

  return __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavbar"], {
    color: "indigo",
    dark: true,
    expand: "md"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavbarBrand"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("strong", {
    className: "white-text"
  }, "NinoStyle")))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavbarToggler"], {
    onClick: toggleCollapse
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCollapse"], {
    id: "navbarCollapse3",
    isOpen: isOpen,
    navbar: true
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavbarNav"], {
    right: true
  }, user ? userLinks : guestLinks)));
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=_app.js.b1db6a67f0eeb831458f.hot-update.js.map