/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Caveat/Caveat-VariableFont_wght.ttf */ "./src/fonts/Caveat/Caveat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Cormorant_Garamond/CormorantGaramond-Light.ttf */ "./src/fonts/Cormorant_Garamond/CormorantGaramond-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./background.png */ "./src/background.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./ilfornaiologo.jpg */ "./src/ilfornaiologo.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'TitleFont';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'TextFont';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n:root {\n  --title-font: 'TitleFont', system-ui, -apple-system;\n  --primary-font: 'TextFont', system-ui, -apple-system;\n  --text-color: #554949;\n  --background-color: #e7ba7f;\n  --primary-color: #85350a;\n  --secondary-color: #3d573e;\n  --accent-color: #c60606;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  overflow-x: hidden;\n}\n.headerdiv {\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n}\n.back {\n  z-index: 0;\n  background-color: var(--background-color);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nheader {\n  z-index: 2;\n  overflow: hidden;\n  letter-spacing: 7px;\n  text-transform: lowercase;\n  width: 100%;\n  text-align: center;\n  font-size: clamp(5vw, 110px, 50vw);\n  white-space: nowrap;\n  background-color: var(--background-color);\n  color: var(--background-color);\n  font-family: var(--title-font);\n  text-shadow: 6px 6px 0px var(--primary-color),\n                -6px -6px 0px var(--secondary-color);\n  animation: headershadow 4s infinite ease-in-out alternate;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 0px 15px var(--text-color);\n}\n@keyframes headershadow {\n  0% {\n    text-shadow: 6px 6px 0px var(--primary-color),\n                -6px -6px 0px var(--secondary-color);\n  }\n  50% {\n    text-shadow: 4px 4px 0px var(--primary-color),\n                -7px -6px 0px var(--secondary-color);\n  }\n  100% {\n    text-shadow: 5px 7px 0px var(--primary-color),\n                -5px -6px 0px var(--secondary-color);\n  }\n}\n\n.maindiv {\n  width: 100%;\n  height: 100vh;\n  background-color: var(--background-color);\n}\n\n.navbar {\n  background-color: var(--secondary-color);\n  width: 100%;\n  height: 10vh;\n  position: sticky;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.navbutton {\n  width: 110px;\n  height: 100%;\n  text-align: center;\n  padding: 3px 5px;\n  font-family: var(--primary-font);\n  font-weight: 600;\n  letter-spacing: 1px;\n  background-color: var(--secondary-color);\n  color: var(--background-color);\n  border: none;\n}\n\n.navbutton:hover {\n  background-color: var(--accent-color);\n  box-shadow: 0 5px 0 var(--accent-color);\n  transition: 0.1s ease-in-out;\n  cursor: pointer;\n}\n.navbutton:active {\n  transform: scale(.98);\n  transition: 0.1s ease-in-out;\n}\n\n.bselected {\n  background-color: var(--background-color);\n  color: var(--secondary-color);\n  pointer-events: none;\n  transition: 0.2s ease-in-out;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--primary-color);\n  font-family: var(--title-font);\n  color: var(--background-color);\n  text-align: center;\n  height: 7vh;\n}\n\n@media (max-width:480px) {\n  header {\n    font-size: clamp(15%, 90px, 25vw);\n  }\n  .navbutton {\n    font-size: clamp(10%, 20px, 15vw);\n  }\n  footer {\n    display: none;\n  }\n}\n\n\n.homegrid {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n  justify-content: center;\n  text-align: justify;\n  text-align-last: center;\n  gap: 10px;\n  font-family: var(--primary-font);\n  padding-left: 7vw;\n}\n\n.logoimg {\n  align-self: center;\n  justify-self: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 75%;\n  width: 62%;\n  grid-column-start: 2;\n  grid-row-start: span 2;\n  box-shadow: 5px 5px 0px var(--primary-color),\n  -5px -5px 0px var(--secondary-color);\n  margin-bottom: 3vh;\n}\n\n.h2home {\n  text-transform: uppercase;\n  align-self: flex-end;\n  justify-self: end;\n  grid-row-start: 1;\n  color: var(--text-color);\n  font-size: clamp(15%, 20px, 5vw);\n}\n\n.h3home {\n  align-self: flex-start;\n  justify-self: end;\n  grid-row-start: 2;\n  color: var(--text-color);\n  font-size: clamp(15%, 16px, 5vw);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAAuD;EACvD,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,uBAAuB;EACvB,4CAAkE;AACpE;;AAEA;EACE,mDAAmD;EACnD,oDAAoD;EACpD,qBAAqB;EACrB,2BAA2B;EAC3B,wBAAwB;EACxB,0BAA0B;EAC1B,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;AACA;EACE,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,yCAAyC;EACzC,yDAAuC;EACvC,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;EAC3B,aAAa;EACb,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;EACzB,WAAW;EACX,kBAAkB;EAClB,kCAAkC;EAClC,mBAAmB;EACnB,yCAAyC;EACzC,8BAA8B;EAC9B,8BAA8B;EAC9B;oDACkD;EAClD,yDAAyD;EACzD,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,0CAA0C;AAC5C;AACA;EACE;IACE;oDACgD;EAClD;EACA;IACE;oDACgD;EAClD;EACA;IACE;oDACgD;EAClD;AACF;;AAEA;EACE,WAAW;EACX,aAAa;EACb,yCAAyC;AAC3C;;AAEA;EACE,wCAAwC;EACxC,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,MAAM;EACN,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,gCAAgC;EAChC,gBAAgB;EAChB,mBAAmB;EACnB,wCAAwC;EACxC,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,qCAAqC;EACrC,uCAAuC;EACvC,4BAA4B;EAC5B,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,yCAAyC;EACzC,6BAA6B;EAC7B,oBAAoB;EACpB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sCAAsC;EACtC,8BAA8B;EAC9B,8BAA8B;EAC9B,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;IACE,iCAAiC;EACnC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,aAAa;EACf;AACF;;;AAGA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,yDAA0C;EAC1C,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;EAC3B,WAAW;EACX,UAAU;EACV,oBAAoB;EACpB,sBAAsB;EACtB;sCACoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,oBAAoB;EACpB,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB;EACxB,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB;EACxB,gCAAgC;AAClC","sourcesContent":["@font-face {\n  font-family: 'TitleFont';\n  src: url('./fonts/Caveat/Caveat-VariableFont_wght.ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'TextFont';\n  src: url('./fonts/Cormorant_Garamond/CormorantGaramond-Light.ttf');\n}\n\n:root {\n  --title-font: 'TitleFont', system-ui, -apple-system;\n  --primary-font: 'TextFont', system-ui, -apple-system;\n  --text-color: #554949;\n  --background-color: #e7ba7f;\n  --primary-color: #85350a;\n  --secondary-color: #3d573e;\n  --accent-color: #c60606;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  overflow-x: hidden;\n}\n.headerdiv {\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n}\n.back {\n  z-index: 0;\n  background-color: var(--background-color);\n  background-image: url(./background.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nheader {\n  z-index: 2;\n  overflow: hidden;\n  letter-spacing: 7px;\n  text-transform: lowercase;\n  width: 100%;\n  text-align: center;\n  font-size: clamp(5vw, 110px, 50vw);\n  white-space: nowrap;\n  background-color: var(--background-color);\n  color: var(--background-color);\n  font-family: var(--title-font);\n  text-shadow: 6px 6px 0px var(--primary-color),\n                -6px -6px 0px var(--secondary-color);\n  animation: headershadow 4s infinite ease-in-out alternate;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 0px 15px var(--text-color);\n}\n@keyframes headershadow {\n  0% {\n    text-shadow: 6px 6px 0px var(--primary-color),\n                -6px -6px 0px var(--secondary-color);\n  }\n  50% {\n    text-shadow: 4px 4px 0px var(--primary-color),\n                -7px -6px 0px var(--secondary-color);\n  }\n  100% {\n    text-shadow: 5px 7px 0px var(--primary-color),\n                -5px -6px 0px var(--secondary-color);\n  }\n}\n\n.maindiv {\n  width: 100%;\n  height: 100vh;\n  background-color: var(--background-color);\n}\n\n.navbar {\n  background-color: var(--secondary-color);\n  width: 100%;\n  height: 10vh;\n  position: sticky;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.navbutton {\n  width: 110px;\n  height: 100%;\n  text-align: center;\n  padding: 3px 5px;\n  font-family: var(--primary-font);\n  font-weight: 600;\n  letter-spacing: 1px;\n  background-color: var(--secondary-color);\n  color: var(--background-color);\n  border: none;\n}\n\n.navbutton:hover {\n  background-color: var(--accent-color);\n  box-shadow: 0 5px 0 var(--accent-color);\n  transition: 0.1s ease-in-out;\n  cursor: pointer;\n}\n.navbutton:active {\n  transform: scale(.98);\n  transition: 0.1s ease-in-out;\n}\n\n.bselected {\n  background-color: var(--background-color);\n  color: var(--secondary-color);\n  pointer-events: none;\n  transition: 0.2s ease-in-out;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--primary-color);\n  font-family: var(--title-font);\n  color: var(--background-color);\n  text-align: center;\n  height: 7vh;\n}\n\n@media (max-width:480px) {\n  header {\n    font-size: clamp(15%, 90px, 25vw);\n  }\n  .navbutton {\n    font-size: clamp(10%, 20px, 15vw);\n  }\n  footer {\n    display: none;\n  }\n}\n\n\n.homegrid {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n  justify-content: center;\n  text-align: justify;\n  text-align-last: center;\n  gap: 10px;\n  font-family: var(--primary-font);\n  padding-left: 7vw;\n}\n\n.logoimg {\n  align-self: center;\n  justify-self: center;\n  background-image: url(./ilfornaiologo.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 75%;\n  width: 62%;\n  grid-column-start: 2;\n  grid-row-start: span 2;\n  box-shadow: 5px 5px 0px var(--primary-color),\n  -5px -5px 0px var(--secondary-color);\n  margin-bottom: 3vh;\n}\n\n.h2home {\n  text-transform: uppercase;\n  align-self: flex-end;\n  justify-self: end;\n  grid-row-start: 1;\n  color: var(--text-color);\n  font-size: clamp(15%, 20px, 5vw);\n}\n\n.h3home {\n  align-self: flex-start;\n  justify-self: end;\n  grid-row-start: 2;\n  color: var(--text-color);\n  font-size: clamp(15%, 16px, 5vw);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/aboutLoad.js":
/*!**************************!*\
  !*** ./src/aboutLoad.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutPageLoad)
/* harmony export */ });
function aboutPageLoad() {
  document.getElementById('homegrid').remove();

  //CREATING ELEMENTS

  //ADDING CLASSES

  //ADDING TEXT

  //APPENDING

  //FINAL APPEND

  return 'Loading page...';
}


/***/ }),

/***/ "./src/homeLoad.js":
/*!*************************!*\
  !*** ./src/homeLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePageLoad)
/* harmony export */ });
function homePageLoad() {
  //CREATING ELEMENTS
  let homegrid = document.createElement('div');
  let h2 = document.createElement('h2');
  let h3 = document.createElement('h3');
  let logoimg = document.createElement('div');

  //ADDING CLASSES
  homegrid.classList.add('homegrid');
  homegrid.setAttribute('id','homegrid');
  logoimg.classList.add('logoimg');
  h2.classList.add('h2home')
  h3.classList.add('h3home')
  //ADDING TEXT
  h2.innerHTML = "¡Comida, vino y compañía en tu Rincón de Italia en la ciudad de Chihuahua!";
  h3.innerHTML = "Restaurante Italiano con ambiente familiar y platillos exquisitos que se ha ido plasmando en Chihuahua como un lugar de comida casera y con gran sabor."
  //APPENDING
  homegrid.append(h2,h3,logoimg)
  //FINAL APPEND
  document.getElementById('maindiv').appendChild(homegrid);
  return 'Loading page...';
}


/***/ }),

/***/ "./src/initial-page-load.js":
/*!**********************************!*\
  !*** ./src/initial-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initPageLoad)
/* harmony export */ });

function initPageLoad() {
  
  //CREATING ELEMENTS
  let headerdiv = document.createElement('div');
  let header = document.createElement('header');
  let backheader = document.createElement('div');

  let navbar = document.createElement('nav');
  let homeButton = document.createElement('button');
  let menuButton = document.createElement('button');
  let contactButton = document.createElement('button');

  let maindiv = document.createElement('div');
  let footer = document.createElement('footer');

  //ADDING CLASSES
  backheader.classList.add('back');
  headerdiv.classList.add('headerdiv');

  navbar.classList.add('navbar');

  homeButton.classList.add('navbutton');
  menuButton.classList.add('navbutton');
  contactButton.classList.add('navbutton');

  homeButton.setAttribute('id','homeButton');
  menuButton.setAttribute('id','menuButton');
  contactButton.setAttribute('id','contactButton');

  homeButton.classList.add('bselected');

  maindiv.classList.add('maindiv');
  maindiv.setAttribute('id','maindiv');


  //ADDING TEXT
  header.innerHTML = 'Il Fornaio'
  homeButton.innerHTML = 'Sobre nosotros';
  menuButton.innerHTML = 'Menú';
  contactButton.innerHTML = 'Contacto';
  footer.innerHTML = 'Made by @fanofrisoni'

  //APPENDING
  headerdiv.appendChild(backheader);
  backheader.appendChild(header);
  navbar.append(homeButton,menuButton,contactButton);
  
  //FINAL APPEND
  document.getElementById('content').append(headerdiv,navbar,maindiv,footer);

  return 'Loading page...';
};

/***/ }),

/***/ "./src/menuLoad.js":
/*!*************************!*\
  !*** ./src/menuLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPageLoad)
/* harmony export */ });
function menuPageLoad() {
  document.getElementById('homegrid').remove();

  //CREATING ELEMENTS

  //ADDING CLASSES

  //ADDING TEXT

  //APPENDING

  //FINAL APPEND

  return 'Loading page...';
}


/***/ }),

/***/ "./src/background.png":
/*!****************************!*\
  !*** ./src/background.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53f356fd99c4a82e2bd6.png";

/***/ }),

/***/ "./src/fonts/Caveat/Caveat-VariableFont_wght.ttf":
/*!*******************************************************!*\
  !*** ./src/fonts/Caveat/Caveat-VariableFont_wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a58d6a2a86fd431d5635.ttf";

/***/ }),

/***/ "./src/fonts/Cormorant_Garamond/CormorantGaramond-Light.ttf":
/*!******************************************************************!*\
  !*** ./src/fonts/Cormorant_Garamond/CormorantGaramond-Light.ttf ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33371775a23b33fcf948.ttf";

/***/ }),

/***/ "./src/ilfornaiologo.jpg":
/*!*******************************!*\
  !*** ./src/ilfornaiologo.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3e15f36da3c6514aeea.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page-load */ "./src/initial-page-load.js");
/* harmony import */ var _homeLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeLoad */ "./src/homeLoad.js");
/* harmony import */ var _menuLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuLoad */ "./src/menuLoad.js");
/* harmony import */ var _aboutLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutLoad */ "./src/aboutLoad.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_homeLoad__WEBPACK_IMPORTED_MODULE_1__["default"])();

document.getElementById('homeButton').addEventListener('click',() => {
  if(!document.getElementById('homeButton').hasAttribute('bselected')){
    document.getElementById('homeButton').classList.add('bselected');
    document.getElementById('menuButton').classList.remove('bselected');
    document.getElementById('contactButton').classList.remove('bselected');
    (0,_homeLoad__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
  window.scrollTo({ top: 330, behavior: 'smooth' });
})

document.getElementById('menuButton').addEventListener('click',() => {
  if(!document.getElementById('menuButton').hasAttribute('bselected')){
    document.getElementById('menuButton').classList.add('bselected');
    document.getElementById('homeButton').classList.remove('bselected');
    document.getElementById('contactButton').classList.remove('bselected');
    (0,_menuLoad__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }
  window.scrollTo({ top: 330, behavior: 'smooth' });
})

document.getElementById('contactButton').addEventListener('click',() => {
  if(!document.getElementById('contactButton').hasAttribute('bselected')){
    document.getElementById('contactButton').classList.add('bselected');
    document.getElementById('menuButton').classList.remove('bselected');
    document.getElementById('homeButton').classList.remove('bselected');
    (0,_aboutLoad__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
  window.scrollTo({ top: 330, behavior: 'smooth' });
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE4QjtBQUNsRCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFhO0FBQ2pCO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYWJvdXRMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbml0aWFsLXBhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnVMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9DYXZlYXQvQ2F2ZWF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ29ybW9yYW50X0dhcmFtb25kL0Nvcm1vcmFudEdhcmFtb25kLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2lsZm9ybmFpb2xvZ28uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1RpdGxlRm9udCc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVGV4dEZvbnQnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXRpdGxlLWZvbnQ6ICdUaXRsZUZvbnQnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW07XFxuICAtLXByaW1hcnktZm9udDogJ1RleHRGb250Jywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtO1xcbiAgLS10ZXh0LWNvbG9yOiAjNTU0OTQ5O1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZTdiYTdmO1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjODUzNTBhO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMzZDU3M2U7XFxuICAtLWFjY2VudC1jb2xvcjogI2M2MDYwNjtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5oZWFkZXJkaXYge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLmJhY2sge1xcbiAgei1pbmRleDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICB6LWluZGV4OiAyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGxldHRlci1zcGFjaW5nOiA3cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNsYW1wKDV2dywgMTEwcHgsIDUwdncpO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcbiAgdGV4dC1zaGFkb3c6IDZweCA2cHggMHB4IHZhcigtLXByaW1hcnktY29sb3IpLFxcbiAgICAgICAgICAgICAgICAtNnB4IC02cHggMHB4IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBhbmltYXRpb246IGhlYWRlcnNoYWRvdyA0cyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5Aa2V5ZnJhbWVzIGhlYWRlcnNoYWRvdyB7XFxuICAwJSB7XFxuICAgIHRleHQtc2hhZG93OiA2cHggNnB4IDBweCB2YXIoLS1wcmltYXJ5LWNvbG9yKSxcXG4gICAgICAgICAgICAgICAgLTZweCAtNnB4IDBweCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMHB4IHZhcigtLXByaW1hcnktY29sb3IpLFxcbiAgICAgICAgICAgICAgICAtN3B4IC02cHggMHB4IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdGV4dC1zaGFkb3c6IDVweCA3cHggMHB4IHZhcigtLXByaW1hcnktY29sb3IpLFxcbiAgICAgICAgICAgICAgICAtNXB4IC02cHggMHB4IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxufVxcblxcbi5tYWluZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmF2YnV0dG9uIHtcXG4gIHdpZHRoOiAxMTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm5hdmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdmJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSguOTgpO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJzZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA3dmg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjQ4MHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDE1JSwgOTBweCwgMjV2dyk7XFxuICB9XFxuICAubmF2YnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMCUsIDIwcHgsIDE1dncpO1xcbiAgfVxcbiAgZm9vdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuXFxuLmhvbWVncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xcbiAgcGFkZGluZy1sZWZ0OiA3dnc7XFxufVxcblxcbi5sb2dvaW1nIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA3NSU7XFxuICB3aWR0aDogNjIlO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1zdGFydDogc3BhbiAyO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwcHggdmFyKC0tcHJpbWFyeS1jb2xvciksXFxuICAtNXB4IC01cHggMHB4IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBtYXJnaW4tYm90dG9tOiAzdmg7XFxufVxcblxcbi5oMmhvbWUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMTUlLCAyMHB4LCA1dncpO1xcbn1cXG5cXG4uaDNob21lIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxNSUsIDE2cHgsIDV2dyk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQXVEO0VBQ3ZELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2Qiw0Q0FBa0U7QUFDcEU7O0FBRUE7RUFDRSxtREFBbUQ7RUFDbkQsb0RBQW9EO0VBQ3BELHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHlDQUF5QztFQUN6Qyx5REFBdUM7RUFDdkMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUI7b0RBQ2tEO0VBQ2xELHlEQUF5RDtFQUN6RCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFO0lBQ0U7b0RBQ2dEO0VBQ2xEO0VBQ0E7SUFDRTtvREFDZ0Q7RUFDbEQ7RUFDQTtJQUNFO29EQUNnRDtFQUNsRDtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyx1Q0FBdUM7RUFDdkMsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQ0FBc0M7RUFDdEMsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7OztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGdDQUFnQztFQUNoQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHlEQUEwQztFQUMxQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEI7c0NBQ29DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGdDQUFnQztBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVGl0bGVGb250JztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL0NhdmVhdC9DYXZlYXQtVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVGV4dEZvbnQnO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvQ29ybW9yYW50X0dhcmFtb25kL0Nvcm1vcmFudEdhcmFtb25kLUxpZ2h0LnR0ZicpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXRpdGxlLWZvbnQ6ICdUaXRsZUZvbnQnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW07XFxuICAtLXByaW1hcnktZm9udDogJ1RleHRGb250Jywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtO1xcbiAgLS10ZXh0LWNvbG9yOiAjNTU0OTQ5O1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZTdiYTdmO1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjODUzNTBhO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMzZDU3M2U7XFxuICAtLWFjY2VudC1jb2xvcjogI2M2MDYwNjtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5oZWFkZXJkaXYge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLmJhY2sge1xcbiAgei1pbmRleDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYmFja2dyb3VuZC5wbmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHotaW5kZXg6IDI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDdweDtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNXZ3LCAxMTBweCwgNTB2dyk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICB0ZXh0LXNoYWRvdzogNnB4IDZweCAwcHggdmFyKC0tcHJpbWFyeS1jb2xvciksXFxuICAgICAgICAgICAgICAgIC02cHggLTZweCAwcHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGFuaW1hdGlvbjogaGVhZGVyc2hhZG93IDRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGFsdGVybmF0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcbkBrZXlmcmFtZXMgaGVhZGVyc2hhZG93IHtcXG4gIDAlIHtcXG4gICAgdGV4dC1zaGFkb3c6IDZweCA2cHggMHB4IHZhcigtLXByaW1hcnktY29sb3IpLFxcbiAgICAgICAgICAgICAgICAtNnB4IC02cHggMHB4IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuICA1MCUge1xcbiAgICB0ZXh0LXNoYWRvdzogNHB4IDRweCAwcHggdmFyKC0tcHJpbWFyeS1jb2xvciksXFxuICAgICAgICAgICAgICAgIC03cHggLTZweCAwcHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDdweCAwcHggdmFyKC0tcHJpbWFyeS1jb2xvciksXFxuICAgICAgICAgICAgICAgIC01cHggLTZweCAwcHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG59XFxuXFxuLm1haW5kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5uYXZidXR0b24ge1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubmF2YnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwIDVweCAwIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2YnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKC45OCk7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDd2aDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6NDgwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTUlLCA5MHB4LCAyNXZ3KTtcXG4gIH1cXG4gIC5uYXZidXR0b24ge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEwJSwgMjBweCwgMTV2dyk7XFxuICB9XFxuICBmb290ZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5cXG4uaG9tZWdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxuICBwYWRkaW5nLWxlZnQ6IDd2dztcXG59XFxuXFxuLmxvZ29pbWcge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbGZvcm5haW9sb2dvLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGhlaWdodDogNzUlO1xcbiAgd2lkdGg6IDYyJTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IHNwYW4gMjtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMHB4IHZhcigtLXByaW1hcnktY29sb3IpLFxcbiAgLTVweCAtNXB4IDBweCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgbWFyZ2luLWJvdHRvbTogM3ZoO1xcbn1cXG5cXG4uaDJob21lIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBmb250LXNpemU6IGNsYW1wKDE1JSwgMjBweCwgNXZ3KTtcXG59XFxuXFxuLmgzaG9tZSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBncmlkLXJvdy1zdGFydDogMjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMTUlLCAxNnB4LCA1dncpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0UGFnZUxvYWQoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lZ3JpZCcpLnJlbW92ZSgpO1xuXG4gIC8vQ1JFQVRJTkcgRUxFTUVOVFNcblxuICAvL0FERElORyBDTEFTU0VTXG5cbiAgLy9BRERJTkcgVEVYVFxuXG4gIC8vQVBQRU5ESU5HXG5cbiAgLy9GSU5BTCBBUFBFTkRcblxuICByZXR1cm4gJ0xvYWRpbmcgcGFnZS4uLic7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZUxvYWQoKSB7XG4gIC8vQ1JFQVRJTkcgRUxFTUVOVFNcbiAgbGV0IGhvbWVncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGxldCBsb2dvaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgLy9BRERJTkcgQ0xBU1NFU1xuICBob21lZ3JpZC5jbGFzc0xpc3QuYWRkKCdob21lZ3JpZCcpO1xuICBob21lZ3JpZC5zZXRBdHRyaWJ1dGUoJ2lkJywnaG9tZWdyaWQnKTtcbiAgbG9nb2ltZy5jbGFzc0xpc3QuYWRkKCdsb2dvaW1nJyk7XG4gIGgyLmNsYXNzTGlzdC5hZGQoJ2gyaG9tZScpXG4gIGgzLmNsYXNzTGlzdC5hZGQoJ2gzaG9tZScpXG4gIC8vQURESU5HIFRFWFRcbiAgaDIuaW5uZXJIVE1MID0gXCLCoUNvbWlkYSwgdmlubyB5IGNvbXBhw7HDrWEgZW4gdHUgUmluY8OzbiBkZSBJdGFsaWEgZW4gbGEgY2l1ZGFkIGRlIENoaWh1YWh1YSFcIjtcbiAgaDMuaW5uZXJIVE1MID0gXCJSZXN0YXVyYW50ZSBJdGFsaWFubyBjb24gYW1iaWVudGUgZmFtaWxpYXIgeSBwbGF0aWxsb3MgZXhxdWlzaXRvcyBxdWUgc2UgaGEgaWRvIHBsYXNtYW5kbyBlbiBDaGlodWFodWEgY29tbyB1biBsdWdhciBkZSBjb21pZGEgY2FzZXJhIHkgY29uIGdyYW4gc2Fib3IuXCJcbiAgLy9BUFBFTkRJTkdcbiAgaG9tZWdyaWQuYXBwZW5kKGgyLGgzLGxvZ29pbWcpXG4gIC8vRklOQUwgQVBQRU5EXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluZGl2JykuYXBwZW5kQ2hpbGQoaG9tZWdyaWQpO1xuICByZXR1cm4gJ0xvYWRpbmcgcGFnZS4uLic7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRQYWdlTG9hZCgpIHtcbiAgXG4gIC8vQ1JFQVRJTkcgRUxFTUVOVFNcbiAgbGV0IGhlYWRlcmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGxldCBiYWNraGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsZXQgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGxldCBtYWluZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICAvL0FERElORyBDTEFTU0VTXG4gIGJhY2toZWFkZXIuY2xhc3NMaXN0LmFkZCgnYmFjaycpO1xuICBoZWFkZXJkaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyZGl2Jyk7XG5cbiAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuXG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2YnV0dG9uJyk7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2YnV0dG9uJyk7XG4gIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2YnV0dG9uJyk7XG5cbiAgaG9tZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnaG9tZUJ1dHRvbicpO1xuICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51QnV0dG9uJyk7XG4gIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhY3RCdXR0b24nKTtcblxuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JzZWxlY3RlZCcpO1xuXG4gIG1haW5kaXYuY2xhc3NMaXN0LmFkZCgnbWFpbmRpdicpO1xuICBtYWluZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdtYWluZGl2Jyk7XG5cblxuICAvL0FERElORyBURVhUXG4gIGhlYWRlci5pbm5lckhUTUwgPSAnSWwgRm9ybmFpbydcbiAgaG9tZUJ1dHRvbi5pbm5lckhUTUwgPSAnU29icmUgbm9zb3Ryb3MnO1xuICBtZW51QnV0dG9uLmlubmVySFRNTCA9ICdNZW7Duic7XG4gIGNvbnRhY3RCdXR0b24uaW5uZXJIVE1MID0gJ0NvbnRhY3RvJztcbiAgZm9vdGVyLmlubmVySFRNTCA9ICdNYWRlIGJ5IEBmYW5vZnJpc29uaSdcblxuICAvL0FQUEVORElOR1xuICBoZWFkZXJkaXYuYXBwZW5kQ2hpbGQoYmFja2hlYWRlcik7XG4gIGJhY2toZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgbmF2YmFyLmFwcGVuZChob21lQnV0dG9uLG1lbnVCdXR0b24sY29udGFjdEJ1dHRvbik7XG4gIFxuICAvL0ZJTkFMIEFQUEVORFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZChoZWFkZXJkaXYsbmF2YmFyLG1haW5kaXYsZm9vdGVyKTtcblxuICByZXR1cm4gJ0xvYWRpbmcgcGFnZS4uLic7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVQYWdlTG9hZCgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVncmlkJykucmVtb3ZlKCk7XG5cbiAgLy9DUkVBVElORyBFTEVNRU5UU1xuXG4gIC8vQURESU5HIENMQVNTRVNcblxuICAvL0FERElORyBURVhUXG5cbiAgLy9BUFBFTkRJTkdcblxuICAvL0ZJTkFMIEFQUEVORFxuXG4gIHJldHVybiAnTG9hZGluZyBwYWdlLi4uJztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBpbml0UGFnZUxvYWQgZnJvbSBcIi4vaW5pdGlhbC1wYWdlLWxvYWRcIjtcbmltcG9ydCBob21lUGFnZUxvYWQgZnJvbSBcIi4vaG9tZUxvYWRcIjtcbmltcG9ydCBtZW51UGFnZUxvYWQgZnJvbSBcIi4vbWVudUxvYWRcIjtcbmltcG9ydCBhYm91dFBhZ2VMb2FkIGZyb20gXCIuL2Fib3V0TG9hZFwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmluaXRQYWdlTG9hZCgpO1xuaG9tZVBhZ2VMb2FkKCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgaWYoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lQnV0dG9uJykuaGFzQXR0cmlidXRlKCdic2VsZWN0ZWQnKSl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdXR0b24nKS5jbGFzc0xpc3QuYWRkKCdic2VsZWN0ZWQnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudUJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2JzZWxlY3RlZCcpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0QnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYnNlbGVjdGVkJyk7XG4gICAgaG9tZVBhZ2VMb2FkKCk7XG4gIH1cbiAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAzMzAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbn0pXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgaWYoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51QnV0dG9uJykuaGFzQXR0cmlidXRlKCdic2VsZWN0ZWQnKSl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVCdXR0b24nKS5jbGFzc0xpc3QuYWRkKCdic2VsZWN0ZWQnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZUJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2JzZWxlY3RlZCcpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0QnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYnNlbGVjdGVkJyk7XG4gICAgbWVudVBhZ2VMb2FkKClcbiAgfVxuICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDMzMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xufSlcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICBpZighZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RCdXR0b24nKS5oYXNBdHRyaWJ1dGUoJ2JzZWxlY3RlZCcpKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2JzZWxlY3RlZCcpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51QnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYnNlbGVjdGVkJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdic2VsZWN0ZWQnKTtcbiAgICBhYm91dFBhZ2VMb2FkKCk7XG4gIH1cbiAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAzMzAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9