(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Projects/filter.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/Projects/filter.scss ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Projects/project.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/Projects/project.scss ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".projects {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content: center;\n          justify-content: center; }\n\nh1 {\n  width: 100%; }\n\n.filters {\n  width: 80vw;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content: space-around;\n          justify-content: space-around; }\n  .filters * {\n    margin: .5vw; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Projects/projectTemplate.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/Projects/projectTemplate.scss ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n.blog-card {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  margin: 1rem auto;\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n  margin-bottom: 1.6%;\n  background: #fff;\n  line-height: 1.4;\n  font-family: sans-serif;\n  border-radius: 5px;\n  overflow: hidden;\n  z-index: 0; }\n  .blog-card a {\n    color: inherit; }\n    .blog-card a:hover {\n      color: #5ad67d; }\n  .blog-card:hover .photo {\n    -webkit-transform: scale(1.3) rotate(3deg);\n            transform: scale(1.3) rotate(3deg); }\n  .blog-card .meta {\n    position: relative;\n    z-index: 0;\n    height: 200px; }\n  .blog-card .photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s; }\n  .blog-card .details,\n  .blog-card .details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none; }\n  .blog-card .details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -100%;\n    margin: auto;\n    transition: left .2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: .9rem; }\n    .blog-card .details a {\n      -webkit-text-decoration: dotted underline;\n              text-decoration: dotted underline; }\n    .blog-card .details ul li {\n      display: inline-block; }\n    .blog-card .details .author:before {\n      font-family: FontAwesome;\n      margin-right: 10px;\n      content: \"\\F007\"; }\n    .blog-card .details .date:before {\n      font-family: FontAwesome;\n      margin-right: 10px;\n      content: \"\\F133\"; }\n    .blog-card .details .tags ul:before {\n      font-family: FontAwesome;\n      content: \"\\F02B\";\n      margin-right: 10px; }\n    .blog-card .details .tags li {\n      margin-right: 2px; }\n      .blog-card .details .tags li:first-child {\n        margin-left: -4px; }\n  .blog-card .description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 0; }\n    .blog-card .description h1,\n    .blog-card .description h2 {\n      font-family: Poppins, sans-serif; }\n    .blog-card .description h1 {\n      line-height: 1;\n      margin: 0;\n      font-size: 1.7rem; }\n    .blog-card .description h2 {\n      font-size: 1rem;\n      font-weight: 300;\n      text-transform: uppercase;\n      color: #a2a2a2;\n      margin-top: 5px; }\n  .blog-card p {\n    position: relative;\n    margin: 1rem 0 0; }\n    .blog-card p:first-of-type {\n      margin-top: 1.25rem; }\n      .blog-card p:first-of-type:before {\n        content: \"\";\n        position: absolute;\n        height: 5px;\n        background: #5ad67d;\n        width: 35px;\n        top: -0.75rem;\n        border-radius: 3px; }\n  .blog-card:hover .details {\n    left: 0%; }\n  @media (min-width: 640px) {\n    .blog-card {\n      -webkit-flex-direction: row;\n              flex-direction: row;\n      max-width: 700px; }\n      .blog-card .meta {\n        -webkit-flex-basis: 40%;\n                flex-basis: 40%;\n        height: auto; }\n      .blog-card .description {\n        -webkit-flex-basis: 60%;\n                flex-basis: 60%; }\n        .blog-card .description:before {\n          -webkit-transform: skewX(-3deg);\n                  transform: skewX(-3deg);\n          content: \"\";\n          background: #fff;\n          width: 30px;\n          position: absolute;\n          left: -10px;\n          top: 0;\n          bottom: 0;\n          z-index: -1; }\n      .blog-card.alt {\n        -webkit-flex-direction: row-reverse;\n                flex-direction: row-reverse; }\n        .blog-card.alt .description:before {\n          left: inherit;\n          right: -10px;\n          -webkit-transform: skew(3deg);\n                  transform: skew(3deg); }\n        .blog-card.alt .details {\n          padding-left: 25px; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/common/button.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/common/button.scss ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Righteous);", ""]);

// module
exports.push([module.i, "button {\n  padding: 5px;\n  border: 0;\n  width: 20vh;\n  font-size: inherit;\n  border-radius: 0.35em;\n  background-color: transparent;\n  background-image: linear-gradient(-90deg, #ff0000, #c8305f);\n  cursor: pointer;\n  transition: all 200ms cubic-bezier(0.57, 0.21, 0.69, 3.25);\n  will-change: transform;\n  color: #fff; }\n  button:focus {\n    outline: none; }\n  button span {\n    display: block;\n    padding: 1em 2em;\n    width: 100%;\n    font-size: 1rem;\n    font-weight: 600;\n    border-radius: 0.15em;\n    background-color: white;\n    color: #ff0000; }\n  button:hover {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n    button:hover span {\n      background-color: transparent;\n      color: white; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/common/gap.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/common/gap.scss ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gap {\n  height: 15vh;\n  width: 100vw; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/contactme/contactme.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/contactme/contactme.scss ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:300);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lusitana:400,700);", ""]);

// module
exports.push([module.i, ".align-center {\n  text-align: center; }\n\n.row {\n  margin: -20px 0; }\n  .row:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .row .col {\n    padding: 0 20px;\n    float: left;\n    box-sizing: border-box; }\n    .row .col.x-50 {\n      width: 50%; }\n    .row .col.x-100 {\n      width: 100%; }\n\n.content-wrapper {\n  min-height: 100%; }\n\n.get-in-touch {\n  max-width: 650px;\n  margin: 0 auto; }\n  .get-in-touch .title {\n    text-align: center;\n    font-family: Raleway, sans-serif;\n    text-transform: uppercase;\n    letter-spacing: 3px;\n    font-size: 36px;\n    line-height: 48px;\n    padding-bottom: 48px; }\n\n.contact-form .form-field {\n  margin: 32px 0; }\n\n.contact-form .input-text {\n  display: block;\n  width: 100%;\n  height: 36px;\n  border-width: 0 0 2px 0;\n  border-color: #000;\n  font-family: Lusitana, serif;\n  font-size: 18px;\n  line-height: 26px;\n  font-weight: 400;\n  text-align: center; }\n  .contact-form .input-text:focus {\n    outline: none; }\n  .contact-form .input-text:focus + .label, .contact-form .input-text.not-empty + .label {\n    -webkit-transform: translateY(-24px);\n            transform: translateY(-24px); }\n\n.contact-form .submit-btn {\n  display: inline-block;\n  background-color: #000;\n  color: #fff;\n  font-family: Raleway, sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 16px;\n  line-height: 24px;\n  padding: 8px 16px;\n  border: none;\n  cursor: pointer; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/home/home.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/home/home.scss ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 692px) {\n  .home {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    -webkit-align-content: center;\n            align-content: center;\n    line-height: 1vh;\n    position: relative;\n    background-color: #fff; }\n  .shadow1 {\n    position: relative;\n    width: 87%;\n    height: auto;\n    margin-left: 6%;\n    padding: 2vw;\n    border: 2px solid #fff;\n    border-radius: 5px; }\n  .shadow1:before, .shadow1:after {\n    position: absolute;\n    content: \"\";\n    bottom: 20px;\n    left: 2vw;\n    top: 80vw;\n    width: 40vw;\n    background: white;\n    z-index: -1;\n    box-shadow: 0 30px 15px gray;\n    -webkit-transform: rotate(-3deg);\n    transform: rotate(-3deg); }\n  .shadow1:after {\n    -webkit-transform: rotate(3deg);\n    transform: rotate(3deg);\n    right: 8px;\n    left: auto; }\n  .home .intoduction {\n    width: 100%;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-align-content: center;\n            align-content: center;\n    -webkit-justify-content: space-around;\n            justify-content: space-around; }\n  .home .intoduction span {\n    width: 100%; }\n  .home .intoduction .socialmedia {\n    width: 10vw;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-justify-content: space-around;\n            justify-content: space-around; }\n  .home .intoduction .hireme {\n    margin-top: 2vh;\n    width: 100%; }\n  .home .img {\n    width: 100%;\n    height: 50vh; }\n  img {\n    max-width: 100%;\n    max-height: 100%; } }\n\n@media only screen and (min-width: 693px) {\n  .home {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    -webkit-align-content: center;\n            align-content: center;\n    line-height: 1vh;\n    position: relative;\n    background-color: #fff; }\n  .shadow1 {\n    position: relative;\n    width: 87%;\n    margin-left: 6%;\n    border: 2px solid #fff;\n    border-radius: 5px;\n    height: auto;\n    padding: 10vh 4vw; }\n  .shadow1:before, .shadow1:after {\n    position: absolute;\n    content: \"\";\n    bottom: 4vh;\n    left: 2vw;\n    top: 20vw;\n    width: 40vw;\n    background: white;\n    z-index: -1;\n    box-shadow: 0 30px 15px gray;\n    -webkit-transform: rotate(-3deg);\n    transform: rotate(-5deg); }\n  .shadow1:after {\n    -webkit-transform: rotate(6deg);\n    transform: rotate(6deg);\n    right: 15px;\n    left: auto; }\n  .home .intoduction {\n    -webkit-flex: 1 1;\n            flex: 1 1;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-align-content: center;\n            align-content: center;\n    -webkit-justify-content: space-around;\n            justify-content: space-around; }\n  .home .intoduction span {\n    width: 100%; }\n  .home .intoduction .socialmedia {\n    width: 10vw;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-justify-content: space-around;\n            justify-content: space-around; }\n  .home .intoduction .hireme {\n    margin-top: 2vh;\n    width: 100%; }\n  .home .img {\n    -webkit-flex: 1 1;\n            flex: 1 1;\n    height: 50vh; }\n  img {\n    max-width: 100%;\n    max-height: 100%; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/navigation/navigation.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/navigation/navigation.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navigation {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n  background-color: #fff;\n  align-items: center;\n  border-bottom: 1px solid gray;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  width: 100vw; }\n  .navigation .logo {\n    -webkit-flex: 1 1;\n            flex: 1 1; }\n    .navigation .logo a {\n      font-size: 7vh;\n      text-decoration: none; }\n  .navigation .burgermenu {\n    -webkit-flex: 1 1;\n            flex: 1 1;\n    /*   input[type=\"checkbox\"]{\n      display: none;\n    } */ }\n    .navigation .burgermenu * {\n      width: 30%; }\n  .navigation .burgermenu {\n    -webkit-flex: 1 1;\n            flex: 1 1; }\n  .navigation .menu-content {\n    display: none; }\n\n.burgermenu-content {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content: center;\n          justify-content: center;\n  border-bottom: gray solid 1px;\n  background-color: #fff;\n  /*    ::before{\n        content: \"\";\n        background-color: blue;\n        height: 100%;\n        width:100%;\n        position: absolute;\n        top:1vh;\n        left:0;\n        opacity: .5;\n        z-index: 0;\n        \n      } */ }\n  .burgermenu-content .menu {\n    width: 100%;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    position: absolute;\n    top: 13vh;\n    z-index: 10;\n    background-color: #ffffff88; }\n    .burgermenu-content .menu a {\n      width: 100%;\n      line-height: 1em;\n      text-align: center;\n      color: #333;\n      text-transform: uppercase;\n      font-family: Helvetica, Arial, sans-serif;\n      padding: 1vh;\n      text-decoration: none;\n      font-weight: 700;\n      font-size: 1.5rem;\n      background-size: 200% auto;\n      -webkit-background-size: 200% auto;\n      -moz-background-size: 200% auto;\n      background-position: -0% 0;\n      background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 50%, #f94 50%);\n      transition: background-position 0.5s ease-out;\n      -webkit-transition: background-position 0.5s ease-out;\n      cursor: default; }\n    .burgermenu-content .menu a:hover {\n      background-position: -100% 0;\n      font-size: 1.5rem; }\n\n@media only screen and (min-width: 601px) and (max-width: 1600px) {\n  .navigation {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-justify-content: center;\n            justify-content: center;\n    background-color: #fff;\n    -webkit-align-items: center;\n            align-items: center;\n    border-bottom: 1px solid gray;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    width: 100vw; }\n    .navigation a {\n      font-size: 7vh;\n      text-decoration: none; }\n    .navigation .logo {\n      -webkit-flex: 1 1;\n              flex: 1 1; }\n    .navigation .burgermenu {\n      -webkit-flex: 1 1;\n              flex: 1 1;\n      display: none; }\n    .navigation .menu-content {\n      -webkit-flex: 1 1;\n              flex: 1 1;\n      display: block; }\n      .navigation .menu-content .menu {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-justify-content: space-around;\n                justify-content: space-around; }\n        .navigation .menu-content .menu a {\n          line-height: 1em;\n          text-align: center;\n          color: #333;\n          text-transform: uppercase;\n          font-family: Helvetica, Arial, sans-serif;\n          font-weight: 700;\n          font-size: 1rem;\n          background-size: 200% auto;\n          -webkit-background-size: 200% auto;\n          -moz-background-size: 200% auto;\n          background-position: -0% 0;\n          background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 50%, #f94 50%);\n          transition: background-position 0.5s ease-out;\n          -webkit-transition: background-position 0.5s ease-out;\n          cursor: default; }\n        .navigation .menu-content .menu a:hover {\n          background-position: -100% 0;\n          font-size: 1rem; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n  \n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/aboutme/aboutme.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/aboutme/aboutme.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .aboutme{\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-content: center;\n}\n.box1{\n  background-color:white;\n  \n}\n.shadow1{\n  position:relative;\n  width:87%;\n  height:85vh;\n  margin-left:6%;\n  border:2px solid #fff;\n  border-radius:5px;\n}\n.shadow1:before, .shadow1:after{\n  position:absolute;\n  content:\"\";\n  bottom:25px;\n  left:1vw;\n  top:20vw;\n  width:40vw;\n  background:white;\n  z-index:-1;\n  -webkit-box-shadow: 0 0 0px #fff;\n  -moz-box-shadow: 0 0 0 #fff;\n  box-shadow: 0 30px 15px gray;\n  -webkit-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg);\n  transform: rotate(-6deg);\n}\n.shadow1:after{\n  -webkit-transform: rotate(6deg);\n  -moz-transform: rotate(6deg);\n  transform: rotate(6deg);\n  right: 15px;left: auto;\n}\n.aboutme .content{\n  width:90%;\n}\n.aboutme p{\n  font-size: 5vh;\n  text-align: justify;\n  \n} */", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/footer/footer.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/footer/footer.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main{\n  background-color: gray\n}\n.footer{\n  background-color: gray;\n  width:80vw;\n  margin: auto;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content:space-around;\n          justify-content:space-around;\n  -webkit-align-items: center;\n          align-items: center;\n  \n}\n.footer.copyright{\n  -webkit-flex:1 1;\n          flex:1 1;\n}\n.footer .socialmedia{\n  width:10vw;\n  margin-left:10vw;\n  display:-webkit-flex;\n  display:flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n\n}\n.footer .menu{\n  -webkit-flex:1 1;\n          flex:1 1;\n}\n.footer .menu ul li{\ntext-decoration: none;\ndisplay: inline;\nmargin-left:1vw;\ntext-align: center;\n-webkit-justify-content: center;\n        justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navigation/Navigation */ "./src/components/navigation/Navigation.js");
/* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/Home */ "./src/components/home/Home.js");
/* harmony import */ var _components_aboutme_Aboutme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/aboutme/Aboutme */ "./src/components/aboutme/Aboutme.js");
/* harmony import */ var _components_contactme_Contactme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contactme/Contactme */ "./src/components/contactme/Contactme.js");
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/src/App.js";









var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.StillOnProgress = function () {
      alert("This page is underconstruction");
    };

    return _this;
  }

  Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_home_Home__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_aboutme_Aboutme__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_contactme_Contactme__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Projects/Filter.js":
/*!*******************************************!*\
  !*** ./src/components/Projects/Filter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filter_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.scss */ "./src/components/Projects/filter.scss");
/* harmony import */ var _filter_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_filter_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/src/components/Projects/Filter.js";



var Filter = function Filter(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, text));
};

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./src/components/Projects/ProjectTemplate.js":
/*!****************************************************!*\
  !*** ./src/components/Projects/ProjectTemplate.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _projectTemplate_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectTemplate.scss */ "./src/components/Projects/projectTemplate.scss");
/* harmony import */ var _projectTemplate_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_projectTemplate_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/src/components/Projects/ProjectTemplate.js";



var ProjectTemplate = function ProjectTemplate(_ref) {
  var projectname = _ref.projectname,
      date = _ref.date,
      tag = _ref.tag,
      subheading = _ref.subheading,
      img = _ref.img,
      description = _ref.description;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "photo",
    style: {
      backgroundImage: "url(".concat(img, "+)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, projectname)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, tag.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, item));
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, projectname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, subheading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, description)));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectTemplate);

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ProjectTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectTemplate */ "./src/components/Projects/ProjectTemplate.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Filter */ "./src/components/Projects/Filter.js");
/* harmony import */ var _utls_data_projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utls/data/projects */ "./src/utls/data/projects.js");
/* harmony import */ var _common_Gap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/Gap */ "./src/components/common/Gap.js");
/* harmony import */ var _project_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project.scss */ "./src/components/Projects/project.scss");
/* harmony import */ var _project_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_project_scss__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/src/components/Projects/Projects.js";







var Projects =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Projects, _React$Component);

  function Projects() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Projects);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Projects)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      projects: []
    };

    _this.onAllHandaler = function () {
      _this.setState({
        projects: _utls_data_projects__WEBPACK_IMPORTED_MODULE_8__["projects"]
      });
    };

    _this.onReactHandaler = function () {
      _this.setState({
        projects: _utls_data_projects__WEBPACK_IMPORTED_MODULE_8__["projects"]
      });

      var reactProjects = _utls_data_projects__WEBPACK_IMPORTED_MODULE_8__["projects"].filter(function (item) {
        return item.techUsed === "REACT";
      });

      _this.setState({
        projects: reactProjects
      });
    };

    _this.onCsharpHandaler = function () {
      _this.setState({
        projects: _utls_data_projects__WEBPACK_IMPORTED_MODULE_8__["projects"]
      });

      var reactProjects = _utls_data_projects__WEBPACK_IMPORTED_MODULE_8__["projects"].filter(function (item) {
        return item.techUsed === "C#";
      });

      _this.setState({
        projects: reactProjects
      });
    };

    _this.onJSHandaler = function () {
      _this.setState({
        projects: _utls_data_projects__WEBPACK_IMPORTED_MODULE_8__["projects"]
      });

      var reactProjects = _utls_data_projects__WEBPACK_IMPORTED_MODULE_8__["projects"].filter(function (item) {
        return item.techUsed === "JAVASCRIPT";
      });

      _this.setState({
        projects: reactProjects
      });
    };

    _this.onPHPHandaler = function () {
      _this.setState({
        projects: _utls_data_projects__WEBPACK_IMPORTED_MODULE_8__["projects"]
      });

      var reactProjects = _utls_data_projects__WEBPACK_IMPORTED_MODULE_8__["projects"].filter(function (item) {
        return item.techUsed === "PHP";
      });
      console.log(reactProjects);

      _this.setState({
        projects: reactProjects
      });
    };

    return _this;
  }

  Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Projects, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        projects: _utls_data_projects__WEBPACK_IMPORTED_MODULE_8__["projects"]
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "projects ",
        id: "work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_Gap__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "MY WORKS"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "filters",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Filter__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "All",
        onClick: this.onAllHandaler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Filter__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "JAVA SCRIPT",
        onClick: this.onJSHandaler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Filter__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "REACT",
        onClick: this.onReactHandaler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Filter__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "C#",
        onClick: this.onCsharpHandaler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Filter__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "PHP",
        onClick: this.onPHPHandaler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })), this.state.projects.length >= 0 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, this.state.projects.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ProjectTemplate__WEBPACK_IMPORTED_MODULE_6__["default"], {
          projectname: item.projectname,
          date: item.date,
          tag: item.tag,
          img: item.img,
          subheading: item.subeading,
          description: item.description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        });
      })) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Loading...")));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/components/Projects/filter.scss":
/*!*********************************************!*\
  !*** ./src/components/Projects/filter.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./filter.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Projects/filter.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./filter.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Projects/filter.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./filter.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Projects/filter.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Projects/project.scss":
/*!**********************************************!*\
  !*** ./src/components/Projects/project.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./project.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Projects/project.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./project.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Projects/project.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./project.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Projects/project.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Projects/projectTemplate.scss":
/*!******************************************************!*\
  !*** ./src/components/Projects/projectTemplate.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./projectTemplate.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Projects/projectTemplate.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./projectTemplate.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Projects/projectTemplate.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./projectTemplate.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Projects/projectTemplate.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/aboutme/Aboutme.js":
/*!*******************************************!*\
  !*** ./src/components/aboutme/Aboutme.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aboutme_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutme.css */ "./src/components/aboutme/aboutme.css");
/* harmony import */ var _aboutme_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aboutme_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utls_data_aboutme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utls/data/aboutme */ "./src/utls/data/aboutme.js");
var _jsxFileName = "/Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/src/components/aboutme/Aboutme.js";




var Aboutme = function Aboutme() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aboutme box1 shadow1",
    id: "aboutme",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content animated zoomIn ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "About Me"), "\xA7", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, _utls_data_aboutme__WEBPACK_IMPORTED_MODULE_2__["aboutme"].map(function (item) {
    return item;
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Aboutme);

/***/ }),

/***/ "./src/components/aboutme/aboutme.css":
/*!********************************************!*\
  !*** ./src/components/aboutme/aboutme.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./aboutme.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/aboutme/aboutme.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./aboutme.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/aboutme/aboutme.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./aboutme.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/aboutme/aboutme.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/common/Button.js":
/*!*****************************************!*\
  !*** ./src/components/common/Button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.scss */ "./src/components/common/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/src/components/common/Button.js";



var Button = function Button(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      onSubmit = _ref.onSubmit,
      onHover = _ref.onHover,
      name = _ref.name,
      type = _ref.type,
      text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: className,
    onClick: onclick,
    onHover: onHover,
    onSubmit: onSubmit,
    name: name,
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, text));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/common/Gap.js":
/*!**************************************!*\
  !*** ./src/components/common/Gap.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gap_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gap.scss */ "./src/components/common/gap.scss");
/* harmony import */ var _gap_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gap_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/src/components/common/Gap.js";



var Gap = function Gap() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Gap);

/***/ }),

/***/ "./src/components/common/button.scss":
/*!*******************************************!*\
  !*** ./src/components/common/button.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./button.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/common/button.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./button.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/common/button.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./button.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/common/button.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/common/gap.scss":
/*!****************************************!*\
  !*** ./src/components/common/gap.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./gap.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/common/gap.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./gap.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/common/gap.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./gap.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/common/gap.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/contactme/Contactme.js":
/*!***********************************************!*\
  !*** ./src/components/contactme/Contactme.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contactme_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactme.scss */ "./src/components/contactme/contactme.scss");
/* harmony import */ var _contactme_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_contactme_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_Gap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Gap */ "./src/components/common/Gap.js");





var _jsxFileName = "/Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/src/components/contactme/Contactme.js";




var Contactme =
/*#__PURE__*/
function (_Component) {
  Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Contactme, _Component);

  function Contactme() {
    Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contactme);

    return Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Contactme).apply(this, arguments));
  }

  Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contactme, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_Gap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "get-in-touch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Contact Me"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        className: "contact-form row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-field col x-50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        id: "name",
        className: "input-text js-input",
        type: "text",
        placeholder: "Name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-field col x-50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        id: "email",
        className: "input-text js-input",
        type: "email",
        placeholder: "Email",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-field col x-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        id: "message",
        className: "input-text js-input",
        type: "text",
        placeholder: "Message",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-field col x-100 align-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "submit-btn",
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_Gap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }));
    }
  }]);

  return Contactme;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contactme);

/***/ }),

/***/ "./src/components/contactme/contactme.scss":
/*!*************************************************!*\
  !*** ./src/components/contactme/contactme.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./contactme.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/contactme/contactme.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./contactme.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/contactme/contactme.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./contactme.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/contactme/contactme.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.css */ "./src/components/footer/footer.css");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/src/components/footer/Footer.js";



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "\xA9 Anuj thapa ", new Date().getFullYear()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "socialmedia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "www.facebook.com/anuj.thapa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fab fa-facebook-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fab fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fab fa-codepen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/footer/footer.css":
/*!******************************************!*\
  !*** ./src/components/footer/footer.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./footer.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/footer/footer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./footer.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/footer/footer.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./footer.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/footer/footer.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/home/Home.js":
/*!*************************************!*\
  !*** ./src/components/home/Home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utls_img_Anuj_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utls/img/Anuj.jpg */ "./src/utls/img/Anuj.jpg");
/* harmony import */ var _utls_img_Anuj_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utls_img_Anuj_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Button */ "./src/components/common/Button.js");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.scss */ "./src/components/home/home.scss");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/src/components/home/Home.js";





var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home  shadow1",
    id: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img animated slideInRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _utls_img_Anuj_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intoduction animated slideInLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "zoomIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Hello,I'm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Anuj Thapa"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, " Frontend developer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "socialmedia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fab fa-facebook-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fab fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fab fa-codepen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hireme",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Hire me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/home/home.scss":
/*!***************************************!*\
  !*** ./src/components/home/home.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./home.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/home/home.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./home.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/home/home.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./home.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/home/home.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/navigation/Menu.js":
/*!*******************************************!*\
  !*** ./src/components/navigation/Menu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/src/components/navigation/Menu.js";


function Menu() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "WORK"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#aboutme",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "ABOUT ME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "CONTACT"));
}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/components/navigation/Navigation.js":
/*!*************************************************!*\
  !*** ./src/components/navigation/Navigation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _navigation_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation.scss */ "./src/components/navigation/navigation.scss");
/* harmony import */ var _navigation_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_navigation_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Menu */ "./src/components/navigation/Menu.js");
/* harmony import */ var _common_Gap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Gap */ "./src/components/common/Gap.js");





var _jsxFileName = "/Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/src/components/navigation/Navigation.js";





var Navigation =
/*#__PURE__*/
function (_Component) {
  Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navigation, _Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isOpen: false
    };

    _this.handleOpen = function () {
      var isOpen = _this.state.isOpen;

      _this.setState({
        isOpen: !isOpen
      });
    };

    return _this;
  }

  Object(_Users_anujthapa_Documents_portfolio_Portfolio_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "render",
    value: function render() {
      var isOpen = this.state.isOpen;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "navigation ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "display ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "<A />"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "burgermenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "checkbox menu",
        onClick: this.handleOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        class: "fas fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "burgermenu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, isOpen && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./src/components/navigation/navigation.scss":
/*!***************************************************!*\
  !*** ./src/components/navigation/navigation.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./navigation.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/navigation/navigation.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./navigation.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/navigation/navigation.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./navigation.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/navigation/navigation.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/utls/data/aboutme.js":
/*!**********************************!*\
  !*** ./src/utls/data/aboutme.js ***!
  \**********************************/
/*! exports provided: aboutme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutme", function() { return aboutme; });
var aboutme = ["Hi, I am anuj thapa.My expertise is on webdevelopment using the most popular framework like REACT,REDUX,NODE and express."];

/***/ }),

/***/ "./src/utls/data/projects.js":
/*!***********************************!*\
  !*** ./src/utls/data/projects.js ***!
  \***********************************/
/*! exports provided: projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
var projects = [{
  projectname: "Shop Management system",
  date: "12 / 1 / 2013",
  techUsed: "C#",
  tag: ["C#", "Mysql"],
  subeading: "cash and invotery management system",
  img: "",
  description: "This application is a school project. Technologies like c#,mysql are used to develop this. Application have cash managemnt, invontory management and keep the data backup for everyday",
  github: "",
  live: ""
}, {
  projectname: "Movie tickiting system",
  date: "12 / 1 / 2011",
  techUsed: "PHP",
  tag: ["PHP", "Mysql", "HTML", "CSS", "JAVASCRIPT"],
  subeading: "Book a movie ticket from Home",
  img: "",
  description: "This application have features like view the list of movie. Book the movie ticket ,modify it and  cancel if necessary. This application have user authidication",
  github: "",
  live: ""
}, {
  projectname: "Rent a car",
  date: "8 / 1 / 2014",
  techUsed: "PHP",
  tag: ["PHP", "Mysql", "HTML", "CSS", "Bootstrap", "laravel"],
  subeading: "Earn money when you are partying",
  img: "",
  description: "User can give a car in rent when the user dont need it. Application is made using laravel framework.User can book a car modify the date and cancel it",
  github: "",
  live: ""
}, {
  projectname: "Country API",
  date: "30 / 09 / 2018",
  techUsed: "REACT",
  tag: ["HTML", "CSS", "JAVASCRIPT", "React"],
  subeading: "Search and fiter the country list",
  img: "",
  description: "User can search the country using diffrent fllter.user can sort the country list using the population ,area and many more",
  github: "",
  live: ""
}];

/***/ }),

/***/ "./src/utls/img/Anuj.jpg":
/*!*******************************!*\
  !*** ./src/utls/img/Anuj.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Anuj.cbf1dec7.jpg";

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/anujthapa/Documents/portfolio/Portfolio/Portfolio/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map