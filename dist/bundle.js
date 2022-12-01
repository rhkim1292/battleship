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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --cell-border-width: 2px;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0px 25px 25px 25px;\n}\n\nh1 {\n    position: relative;\n}\n\nh1 button#resetGameBtn {\n    position: absolute;\n    left: 13em;\n}\n\n.text-announcer {\n    margin: 0;\n    padding: 0;\n}\n\ndiv.game-container {\n    width: 100%;\n    height: 80%;\n    display: flex;\n    justify-content: center;\n    gap: 25px;\n}\n\ndiv.game-container div.p1-container,\ndiv.game-container div.p2-container {\n    display: flex;\n    width: 50%;\n}\n\ndiv.game-container div.p1-container {\n    justify-content: flex-end;\n}\n\ndiv.game-container div.p2-container {\n    justify-content: flex-start;\n}\n\ndiv.game-container div.player-container-cols {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 70%;\n}\n\ndiv.game-container div.player-container-cols h2 {\n    position: relative;\n}\n\ndiv.game-container div.player-container-cols h2 button.change-orientation {\n    position: absolute;\n    left: 11em;\n    top: -.25em;\n}\n\n.gameboard {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    height: 100%;\n    /* aspect-ratio: 1 / 1; */\n    border: 1px solid rgb(205, 205, 205);\n}\n\n.gameboard .board-cell {\n    width: 10%;\n    height: 10%;\n    border: 1px solid rgb(205, 205, 205);\n    /* aspect-ratio: 1 / 1; */\n}\n\n.gameboard .empty-cell {\n    background-color: rgb(78, 178, 255);\n}\n\n.gameboard .ship-cell {\n    background-color: hsla(206, 0%, 50%, 1);\n}\n\n.gameboard .hover-ship-cell {\n    background-color: hsla(206, 28%, 65%, 1);\n}\n\n.gameboard .missed-cell {\n    background-color:hsl(0, 0%, 79%);\n}\n\n.gameboard .hit-cell {\n    background-color:hsl(0, 100%, 66%);\n}\n\n.gameboard .sunk-cell {\n    background-color:hsl(0, 100%, 20%);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,SAAS;IACT,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,WAAW;IACX,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,oCAAoC;AACxC;;AAEA;IACI,UAAU;IACV,WAAW;IACX,oCAAoC;IACpC,yBAAyB;AAC7B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kCAAkC;AACtC","sourcesContent":[":root {\n    --cell-border-width: 2px;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0px 25px 25px 25px;\n}\n\nh1 {\n    position: relative;\n}\n\nh1 button#resetGameBtn {\n    position: absolute;\n    left: 13em;\n}\n\n.text-announcer {\n    margin: 0;\n    padding: 0;\n}\n\ndiv.game-container {\n    width: 100%;\n    height: 80%;\n    display: flex;\n    justify-content: center;\n    gap: 25px;\n}\n\ndiv.game-container div.p1-container,\ndiv.game-container div.p2-container {\n    display: flex;\n    width: 50%;\n}\n\ndiv.game-container div.p1-container {\n    justify-content: flex-end;\n}\n\ndiv.game-container div.p2-container {\n    justify-content: flex-start;\n}\n\ndiv.game-container div.player-container-cols {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 70%;\n}\n\ndiv.game-container div.player-container-cols h2 {\n    position: relative;\n}\n\ndiv.game-container div.player-container-cols h2 button.change-orientation {\n    position: absolute;\n    left: 11em;\n    top: -.25em;\n}\n\n.gameboard {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    height: 100%;\n    /* aspect-ratio: 1 / 1; */\n    border: 1px solid rgb(205, 205, 205);\n}\n\n.gameboard .board-cell {\n    width: 10%;\n    height: 10%;\n    border: 1px solid rgb(205, 205, 205);\n    /* aspect-ratio: 1 / 1; */\n}\n\n.gameboard .empty-cell {\n    background-color: rgb(78, 178, 255);\n}\n\n.gameboard .ship-cell {\n    background-color: hsla(206, 0%, 50%, 1);\n}\n\n.gameboard .hover-ship-cell {\n    background-color: hsla(206, 28%, 65%, 1);\n}\n\n.gameboard .missed-cell {\n    background-color:hsl(0, 0%, 79%);\n}\n\n.gameboard .hit-cell {\n    background-color:hsl(0, 100%, 66%);\n}\n\n.gameboard .sunk-cell {\n    background-color:hsl(0, 100%, 20%);\n}"],"sourceRoot":""}]);
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/DOMHandler.js":
/*!***************************!*\
  !*** ./src/DOMHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship.js */ "./src/Ship.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




const DOMHandler = (() => {
	const title = document.createElement('h1');
	title.textContent = 'Battleship!';
	const resetGameBtn = document.createElement('button');
	resetGameBtn.textContent ='Reset Game';
	resetGameBtn.setAttribute('id', 'resetGameBtn');
	title.appendChild(resetGameBtn);
	const textAnnouncer = document.createElement('h2');
	textAnnouncer.classList.add('text-announcer');
	const gameContainer = document.createElement('div');
	gameContainer.classList.add('game-container');
	// const p1Container = document.createElement('div');
	// p1Container.classList.add('p1-container');
	// gameContainer.append(p1Container);
	// const p2Container = document.createElement('div');
	// p2Container.classList.add('p2-container');
	// gameContainer.append(p1Container, p2Container);
	document.body.append(title, textAnnouncer, gameContainer);

	const renderGameboard = (gameboardElement, gameboard, hidden = false) => {
		gameboardElement.innerHTML = '';
		for (let y = 0; y < 10; y++) {
			for (let x = 0; x < 10; x++) {
				let tile = document.createElement('div');
				tile.classList.add('board-cell');
				if (gameboard.isShip(x, y)) hidden ? tile.classList.add('empty-cell') : tile.classList.add('ship-cell');
				else if (Array.isArray(gameboard.valueAt(x, y)))
					tile.classList.add('empty-cell');
				else if (gameboard.valueAt(x, y) === 'missed')
					tile.classList.add('missed-cell');
				else if (gameboard.valueAt(x, y) === 'hit')
					tile.classList.add('hit-cell');
				tile.setAttribute('id', `cell${x}-${y}`);
				tile.setAttribute('data-x', `${x}`);
				tile.setAttribute('data-y', `${y}`);
				gameboardElement.appendChild(tile);
			}
		}
	};

	const createGameboardElement = (gameboard, hidden = false) => {
		const gameboardElement = document.createElement('div');
		gameboardElement.classList.add('gameboard');
		renderGameboard(gameboardElement, gameboard, hidden);
		return gameboardElement;
	};

	const renderPlayerData = (player, queryString, hidden = false) => {
		const playerContainer = document.querySelector(queryString);
		playerContainer.innerHTML = '';
		const playerContainerColumns = document.createElement('div');
		playerContainerColumns.classList.add('player-container-cols');
		const playerBoardHeader = document.createElement('h2');
		playerBoardHeader.textContent = `${player.name}'s Board`;
		const playerGameboard = createGameboardElement(player.board, hidden);
		playerContainerColumns.append(playerBoardHeader, playerGameboard);
		playerContainer.appendChild(playerContainerColumns);
	};

	const displayAnnouncement = (string) => {
		textAnnouncer.textContent = string;
	};

	let shipOrientationVertical = true;

	const colorHoveredCell = (e, shipLength) => {
		const hoverCellX = Number(e.target.dataset.x);
		const hoverCellY = Number(e.target.dataset.y);
		if (shipOrientationVertical) {
			for (let i = 0; i < shipLength; i++) {
				document.querySelector(`#cell${hoverCellX}-${hoverCellY + i}`).classList.add('hover-ship-cell');
			}
		}
		else {
			for (let i = 0; i < shipLength; i++) {
				document.querySelector(`#cell${hoverCellX + i}-${hoverCellY}`).classList.add('hover-ship-cell');
			}
		}
	};

	const decolorHoveredCell = (e, shipLength) => {
		const hoverCellX = Number(e.target.dataset.x);
		const hoverCellY = Number(e.target.dataset.y);
		if (shipOrientationVertical) {
			for (let i = 0; i < shipLength; i++) {
				document.querySelector(`#cell${hoverCellX}-${hoverCellY + i}`).classList.remove('hover-ship-cell');
			}
		}
		else {
			for (let i = 0; i < shipLength; i++) {
				document.querySelector(`#cell${hoverCellX + i}-${hoverCellY}`).classList.remove('hover-ship-cell');
			}
		}
	};

	const renderPatrolBoatPlacer = (player) => {
		displayAnnouncement('Choose where to place your Patrol Boat.');
		const playerGameboardElement = document.querySelector('div.game-container div.gameboard');
		playerGameboardElement.addEventListener('mouseover', (e) => {
			colorHoveredCell(e, 2);
		});
		playerGameboardElement.addEventListener('mouseout', (e) => {
			decolorHoveredCell(e, 2);
		});
		playerGameboardElement.addEventListener('click', (e) => {
			const clickedCellX = Number(e.target.dataset.x);
			const clickedCellY = Number(e.target.dataset.y);
			try {
				player.board.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Patrol Boat', clickedCellX, clickedCellY, 2, shipOrientationVertical ? 'v' : 'h'));
			} catch (e) {
				displayAnnouncement('The Patrol Boat cannot be placed there! Choose a different cell!');
				return;
			}
			renderGameboard(playerGameboardElement, player.board);
			// Remove all event listeners by cloning the element and replacing the original with the clone
			const clone = playerGameboardElement.cloneNode(true);
			playerGameboardElement.replaceWith(clone);
			const gameContainer = document.querySelector('div.game-container');
			gameContainer.innerHTML = '';
			const p1Container = document.createElement('div');
			p1Container.classList.add('p1-container');
			gameContainer.append(p1Container);
			const p2Container = document.createElement('div');
			p2Container.classList.add('p2-container');
			gameContainer.append(p1Container, p2Container);
			shipOrientationVertical = true;
			_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].beginGame();
		});
	};

	const renderSubmarinePlacer = (player) => {
		displayAnnouncement('Choose where to place your Submarine.');
		const playerGameboardElement = document.querySelector('div.game-container div.gameboard');
		playerGameboardElement.addEventListener('mouseover', (e) => {
			colorHoveredCell(e, 3);
		});
		playerGameboardElement.addEventListener('mouseout', (e) => {
			decolorHoveredCell(e, 3);
		});
		playerGameboardElement.addEventListener('click', (e) => {
			const clickedCellX = Number(e.target.dataset.x);
			const clickedCellY = Number(e.target.dataset.y);
			try {
				player.board.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Submarine', clickedCellX, clickedCellY, 3, shipOrientationVertical ? 'v' : 'h'));
			} catch (e) {
				displayAnnouncement('The Submarine cannot be placed there! Choose a different cell!');
				return;
			}
			renderGameboard(playerGameboardElement, player.board);
			// Remove all event listeners by cloning the element and replacing the the original with the clone
			const clone = playerGameboardElement.cloneNode(true);
			playerGameboardElement.replaceWith(clone);
			renderPatrolBoatPlacer(player);
			shipOrientationVertical = true;
		});
	};

	const renderDestroyerPlacer = (player) => {
		displayAnnouncement('Choose where to place your Destroyer.');
		const playerGameboardElement = document.querySelector('div.game-container div.gameboard');
		playerGameboardElement.addEventListener('mouseover', (e) => {
			colorHoveredCell(e, 3);
		});
		playerGameboardElement.addEventListener('mouseout', (e) => {
			decolorHoveredCell(e, 3);
		});
		playerGameboardElement.addEventListener('click', (e) => {
			const clickedCellX = Number(e.target.dataset.x);
			const clickedCellY = Number(e.target.dataset.y);
			try {
				player.board.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Destroyer', clickedCellX, clickedCellY, 3, shipOrientationVertical ? 'v' : 'h'));
			} catch (e) {
				displayAnnouncement('The Destroyer cannot be placed there! Choose a different cell!');
				return;
			}
			renderGameboard(playerGameboardElement, player.board);
			// Remove all event listeners by cloning the element and replacing the the original with the clone
			const clone = playerGameboardElement.cloneNode(true);
			playerGameboardElement.replaceWith(clone);
			renderSubmarinePlacer(player);
			shipOrientationVertical = true;
		});
	};
	const renderBattleshipPlacer = (player) => {
		displayAnnouncement('Choose where to place your Battleship.');
		const playerGameboardElement = document.querySelector('div.game-container div.gameboard');
		playerGameboardElement.addEventListener('mouseover', (e) => {
			colorHoveredCell(e, 4);
		});
		playerGameboardElement.addEventListener('mouseout', (e) => {
			decolorHoveredCell(e, 4);
		});
		playerGameboardElement.addEventListener('click', (e) => {
			const clickedCellX = Number(e.target.dataset.x);
			const clickedCellY = Number(e.target.dataset.y);
			try {
				player.board.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Battleship', clickedCellX, clickedCellY, 4, shipOrientationVertical ? 'v' : 'h'));
			} catch (e) {
				displayAnnouncement('The Battleship cannot be placed there! Choose a different cell!');
				return;
			}
			renderGameboard(playerGameboardElement, player.board);
			// Remove all event listeners by cloning the element and replacing the the original with the clone
			const clone = playerGameboardElement.cloneNode(true);
			playerGameboardElement.replaceWith(clone);
			renderDestroyerPlacer(player);
			shipOrientationVertical = true;
		});
	};

	const renderCarrierPlacer = (player) => {
		displayAnnouncement('Choose where to place your Carrier.');
		const playerGameboardElement = document.querySelector('div.game-container div.gameboard');
		playerGameboardElement.addEventListener('mouseover', (e) => {
			colorHoveredCell(e, 5);
		});
		playerGameboardElement.addEventListener('mouseout', (e) => {
			decolorHoveredCell(e, 5);
		});
		playerGameboardElement.addEventListener('click', (e) => {
			const clickedCellX = Number(e.target.dataset.x);
			const clickedCellY = Number(e.target.dataset.y);
			try {
				player.board.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Carrier', clickedCellX, clickedCellY, 5, shipOrientationVertical ? 'v' : 'h'));
			} catch (e) {
				displayAnnouncement('The Carrier cannot be placed there! Choose a different cell!');
				return;
			}
			renderGameboard(playerGameboardElement, player.board);
			// Remove all event listeners by cloning the element and replacing the the original with the clone
			const clone = playerGameboardElement.cloneNode(true);
			playerGameboardElement.replaceWith(clone);
			renderBattleshipPlacer(player);
			shipOrientationVertical = true;
		});
	};

	const renderShipPlacer = (player) => {
		renderPlayerData(player, 'div.game-container');
		const playerBoardHeader = document.querySelector('div.game-container div.player-container-cols h2');
		const changeOrientationBtn = document.createElement('button');
		changeOrientationBtn.classList.add('change-orientation');
		changeOrientationBtn.textContent = 'Change Orientation';
		changeOrientationBtn.addEventListener('click', (e) => {
			shipOrientationVertical = !shipOrientationVertical;
		});
		playerBoardHeader.appendChild(changeOrientationBtn);
		renderCarrierPlacer(player);
	};

	return {
		renderGameboard,
		renderPlayerData,
		displayAnnouncement,
		renderShipPlacer,
	};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMHandler);


/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/Ship.js");


const Gameboard = () => {
	const boardArr = Array.from({ length: 10 }, (e, idxY) =>
		Array.from({ length: 10 }, (e, idxX) => [idxX, idxY])
	);

	const shipList = [];
	const checkCoordinates = (x, y, errMsg) => {
		if (!boardArr[y]) throw new Error(errMsg);
		if (!boardArr[y][x]) throw new Error(errMsg);
	};

	const isShip = (x, y) => {
		if (x < 0 || x > 9 || y < 0 || y > 9)
			throw new Error('That index is out of bounds!');
		return (
			typeof boardArr[y][x] === 'object' && !Array.isArray(boardArr[y][x])
		);
	};

	const valueAt = (x, y) => {
		return boardArr[y][x];
	};

	const placeShip = (ship) => {
		const shipCoordinates = ship.getCoordinates();

		// Check if all of the coordinates the ship will take up are all not undefined
		for (let i = 0; i < shipCoordinates.length; i++) {
			checkCoordinates(
				shipCoordinates[i][0],
				shipCoordinates[i][1],
				'That ship cannot be placed at those coordinates!'
			);
			if (isShip(shipCoordinates[i][0], shipCoordinates[i][1]))
				throw new Error(
					'That ship cannot be placed at those coordinates!'
				);
		}

		// Once the initial loop passes without throwing an error, push the ship into the shipList
		// and place a reference to the ship at all of the coordinates
		shipList.push(ship);
		for (let i = 0; i < shipCoordinates.length; i++) {
			boardArr[shipCoordinates[i][1]][shipCoordinates[i][0]] = ship;
		}
	};

	const placeShipsRandomly = (ships) => {
		let randomX;
		let randomY;
		let randomOrientation;
		for (let i = 0; i < ships.length; i++) {
			while (true) {
				randomX = Math.floor(Math.random() * 10);
				randomY = Math.floor(Math.random() * 10);
				randomOrientation = Math.round(Math.random());
				try {
					placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ships[i][0], randomX, randomY, ships[i][1], randomOrientation ? 'v' : 'h'));
					break;
				} catch (e) {
					continue;
				}
			}
		}
	};

	const receiveAttack = (x, y) => {
		checkCoordinates(x, y, 'Coordinate is out of bounds!');
		if (boardArr[y][x] === 'missed' || boardArr[y][x] === 'hit') return;
		if (Array.isArray(boardArr[y][x])) boardArr[y][x] = 'missed';
		else if (isShip(x, y)) {
			boardArr[y][x].hit();
			boardArr[y][x] = 'hit';
		}
	};

	const allShipsSunk = () => {
		if (shipList.length < 1)
			throw new Error('There are no ships on this gameboard!');
		for (let i = 0; i < shipList.length; i++) {
			if (!shipList[i].isSunk()) return false;
		}
		return true;
	};
	
	return {
		valueAt,
		placeShip,
		placeShipsRandomly,
		receiveAttack,
		allShipsSunk,
		isShip,
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ "./src/Gameboard.js");


const Player = (name, gameboard, cpu = false) => {
	const playerName = name;
	const board = gameboard;
	let opponent;
	const isCPU = cpu;
	let isMyTurn = false;

	const startTurn = () => {
		isMyTurn = true;
	};

	const endTurn = () => {
		isMyTurn = false;
	};

	const setOpponent = (player) => {
		opponent = player;
	};

	let randomDecisionOrigin = [];
	let lastDecisionLoc = [];
	let currentTargetShip;
	let checkDirection = 'up';
	const calculateDecision = () => {
		if (!opponent) throw new Error('Set opponent first!');

		const decision = [];
		
		if (currentTargetShip && currentTargetShip.isSunk()) {
			currentTargetShip = null;
			checkDirection = 'up';
		}

		while (!currentTargetShip) {
			const x = Math.floor(Math.random() * 10);
			const y = Math.floor(Math.random() * 10);
			randomDecisionOrigin.pop();
			randomDecisionOrigin.pop();
			lastDecisionLoc.pop();
			lastDecisionLoc.pop();
			if (
				opponent.board.valueAt(x, y) === 'hit' ||
				opponent.board.valueAt(x, y) === 'missed'
			)
				continue;

			if (opponent.board.isShip(x, y))
				currentTargetShip = opponent.board.valueAt(x, y);
			decision.push(x);
			decision.push(y);
			randomDecisionOrigin.push(x);
			randomDecisionOrigin.push(y);
			lastDecisionLoc.push(x);
			lastDecisionLoc.push(y);
			return decision;
		}

		if (
			opponent.board.valueAt(lastDecisionLoc[0], lastDecisionLoc[1]) ===
				'missed' &&
			checkDirection === 'up'
		) {
			checkDirection = 'right';
			lastDecisionLoc[0] = randomDecisionOrigin[0];
			lastDecisionLoc[1] = randomDecisionOrigin[1];
		}

		if (
			opponent.board.valueAt(lastDecisionLoc[0], lastDecisionLoc[1]) ===
				'missed' &&
			checkDirection === 'right'
		) {
			checkDirection = 'down';
			lastDecisionLoc[0] = randomDecisionOrigin[0];
			lastDecisionLoc[1] = randomDecisionOrigin[1];
		}

		if (
			opponent.board.valueAt(lastDecisionLoc[0], lastDecisionLoc[1]) ===
				'missed' &&
			checkDirection === 'down'
		) {
			checkDirection = 'left';
			lastDecisionLoc[0] = randomDecisionOrigin[0];
			lastDecisionLoc[1] = randomDecisionOrigin[1];
		}

		if (lastDecisionLoc[1] - 1 < 0 && checkDirection === 'up') {
			checkDirection = 'right';
			lastDecisionLoc[0] = randomDecisionOrigin[0];
			lastDecisionLoc[1] = randomDecisionOrigin[1];
		}
		if (lastDecisionLoc[0] + 1 > 9 && checkDirection === 'right') {
			checkDirection = 'down';
			lastDecisionLoc[0] = randomDecisionOrigin[0];
			lastDecisionLoc[1] = randomDecisionOrigin[1];
		}
		if (lastDecisionLoc[1] + 1 > 9 && checkDirection === 'down') {
			checkDirection = 'left';
			lastDecisionLoc[0] = randomDecisionOrigin[0];
			lastDecisionLoc[1] = randomDecisionOrigin[1];
		}
		
		if (checkDirection === 'up') {
			decision.push(lastDecisionLoc[0]);
			decision.push(lastDecisionLoc[1] - 1);
			lastDecisionLoc.pop();
			lastDecisionLoc.pop();
			lastDecisionLoc.push(decision[0]);
			lastDecisionLoc.push(decision[1]);
			return decision;
		} else if (checkDirection === 'right') {
			decision.push(lastDecisionLoc[0] + 1);
			decision.push(lastDecisionLoc[1]);
			lastDecisionLoc.pop();
			lastDecisionLoc.pop();
			lastDecisionLoc.push(decision[0]);
			lastDecisionLoc.push(decision[1]);
			return decision;
		} else if (checkDirection === 'down') {
			decision.push(lastDecisionLoc[0]);
			decision.push(lastDecisionLoc[1] + 1);
			lastDecisionLoc.pop();
			lastDecisionLoc.pop();
			lastDecisionLoc.push(decision[0]);
			lastDecisionLoc.push(decision[1]);
			return decision;
		} else if (checkDirection === 'left') {
			decision.push(lastDecisionLoc[0] - 1);
			decision.push(lastDecisionLoc[1]);
			lastDecisionLoc.pop();
			lastDecisionLoc.pop();
			lastDecisionLoc.push(decision[0]);
			lastDecisionLoc.push(decision[1]);
			return decision;
		}
	};

	return {
		get name() {
			return playerName;
		},
		get board() {
			return board;
		},
		get opponent() {
			return opponent;
		},
		get isCPU() {
			return isCPU;
		},
		get isMyTurn() {
			return isMyTurn;
		},
		startTurn,
		endTurn,
		setOpponent,
		calculateDecision,
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (name, x, y, len, orientation = 'v') => {
	if (typeof name !== 'string') throw new Error('Ship name must be a string!');
	if (x < 0)
		throw new Error(
			'A positive integer must be passed into the x argument!'
		);
	if (y < 0)
		throw new Error(
			'A positive integer must be passed into the y argument!'
		);
	if (len <= 0)
		throw new Error(
			'An integer greater than 0 must be passed into the len argument!'
		);
	if (orientation !== 'v' && orientation !== 'h')
		throw new Error(
			"'h' or 'v' must be passed into the orientation argument! Leaving it empty will set it to 'v' by default."
		);
	const shipName = name;
	const shipLength = len;
	const coordArr = [];

	for (let i = 0; i < len; i++) {
		if (orientation === 'v') coordArr.push([x, y + i]);
		if (orientation === 'h') coordArr.push([x + i, y]);
	}

	let hits = 0;
	const hit = () => {
		hits++;
	};

	const isSunk = () => {
		return hits === shipLength;
	};
	
	const getCoordinates = () => {
		return coordArr;
	};

	return {
		get name() {
			return shipName;
		},
		get hits() {
			return hits;
		},
		hit,
		isSunk,
		getCoordinates,
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship.js */ "./src/Ship.js");
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gameboard.js */ "./src/Gameboard.js");
/* harmony import */ var _DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMHandler.js */ "./src/DOMHandler.js");





const mainGameLoop = (() => {
	const switchTurns = () => {
		if (p1.isMyTurn) {
			p1.endTurn();
			p2.startTurn();
		} else {
			p1.startTurn();
			p2.endTurn();
		}
	};
	const resetGameBtn = document.querySelector('button#resetGameBtn');
	resetGameBtn.addEventListener('click', (e) => {
		resetGame();
	});
	let gameEnd = false;
	let p1Gameboard = (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
	let p1 = (0,_Player_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prompt('Enter your name.'), p1Gameboard);
	_DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderShipPlacer(p1);
	let p2Gameboard = (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
	let p2 = (0,_Player_js__WEBPACK_IMPORTED_MODULE_0__["default"])('CPU', p2Gameboard);
	const shipArr = [];
	shipArr.push(['Carrier', 5]);
	shipArr.push(['BattleShip', 4]);
	shipArr.push(['Destroyer', 3]);
	shipArr.push(['Submarine', 3]);
	shipArr.push(['Patrol Boat', 2]);
	p2Gameboard.placeShipsRandomly(shipArr);
	const resetGame = () => {
		gameEnd = false;
		p1Gameboard = (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
		p1 = (0,_Player_js__WEBPACK_IMPORTED_MODULE_0__["default"])(p1.name, p1Gameboard);
		_DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderShipPlacer(p1);
		p2Gameboard = (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
		p2 = (0,_Player_js__WEBPACK_IMPORTED_MODULE_0__["default"])('CPU', p2Gameboard);
		p2Gameboard.placeShipsRandomly(shipArr);
	};
	const beginGame = () => {
		_DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderPlayerData(p1, 'div.p1-container');
		_DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderPlayerData(p2, 'div.p2-container', true);
		p1.setOpponent(p2);
		p2.setOpponent(p1);
		const p1GameboardElement = document.querySelector(
			'div.p1-container div.gameboard'
		);
		const p2GameboardElement = document.querySelector(
			'div.p2-container div.gameboard'
		);
		p1.startTurn();
		_DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayAnnouncement(
			`${p1.name} goes first! Pick a coordinate on ${p2.name}'s board to attack!`
		);

		p2GameboardElement.addEventListener('click', (e) => {
			if (!p1.isMyTurn || gameEnd) return;
			if (
				p2Gameboard.valueAt(e.target.dataset.x, e.target.dataset.y) ===
					'missed' ||
				p2Gameboard.valueAt(e.target.dataset.x, e.target.dataset.y) ===
					'hit'
			) {
				_DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayAnnouncement(
					'That cell has already been attacked. Choose another cell.'
				);
				return;
			}

			p2Gameboard.receiveAttack(
				Number(e.target.dataset.x),
				Number(e.target.dataset.y)
			);
			_DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderGameboard(p2GameboardElement, p2Gameboard, true);
			if (p2Gameboard.allShipsSunk()) {
				gameEnd = true;
				_DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayAnnouncement(`${p1.name} wins!`);
				return;
			}
			switchTurns();
			const p2Decision = p2.calculateDecision();
			p1Gameboard.receiveAttack(p2Decision[0], p2Decision[1]);
			if (p1Gameboard.valueAt(p2Decision[0], p2Decision[1]) === 'hit')
				_DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayAnnouncement(
					`${p2.name} hit one of ${p1.name}'s ships! Your turn ${p1.name}!`
				);
			if (p1Gameboard.valueAt(p2Decision[0], p2Decision[1]) === 'missed')
				_DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayAnnouncement(
					`${p2.name} missed! Your turn ${p1.name}!`
				);
			_DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderGameboard(p1GameboardElement, p1Gameboard, false);
			if (p1Gameboard.allShipsSunk()) {
				gameEnd = true;
				_DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayAnnouncement(`${p2.name} wins!`);
				return;
			}
			switchTurns();
		});
	};

	return {
		beginGame,
	};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainGameLoop);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsK0JBQStCLEdBQUcsT0FBTyw2QkFBNkIsR0FBRyxpQkFBaUIsZ0JBQWdCLG9CQUFvQixtQkFBbUIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGtDQUFrQyxHQUFHLFFBQVEseUJBQXlCLEdBQUcsNEJBQTRCLHlCQUF5QixpQkFBaUIsR0FBRyxxQkFBcUIsZ0JBQWdCLGlCQUFpQixHQUFHLHdCQUF3QixrQkFBa0Isa0JBQWtCLG9CQUFvQiw4QkFBOEIsZ0JBQWdCLEdBQUcsK0VBQStFLG9CQUFvQixpQkFBaUIsR0FBRyx5Q0FBeUMsZ0NBQWdDLEdBQUcseUNBQXlDLGtDQUFrQyxHQUFHLGtEQUFrRCxvQkFBb0IsNkJBQTZCLDBCQUEwQixpQkFBaUIsR0FBRyxxREFBcUQseUJBQXlCLEdBQUcsK0VBQStFLHlCQUF5QixpQkFBaUIsa0JBQWtCLEdBQUcsZ0JBQWdCLG9CQUFvQixzQkFBc0Isa0JBQWtCLG1CQUFtQiw4QkFBOEIsNkNBQTZDLEdBQUcsNEJBQTRCLGlCQUFpQixrQkFBa0IsMkNBQTJDLDhCQUE4QixLQUFLLDRCQUE0QiwwQ0FBMEMsR0FBRywyQkFBMkIsOENBQThDLEdBQUcsaUNBQWlDLCtDQUErQyxHQUFHLDZCQUE2Qix1Q0FBdUMsR0FBRywwQkFBMEIseUNBQXlDLEdBQUcsMkJBQTJCLHlDQUF5QyxHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxpQ0FBaUMsK0JBQStCLEdBQUcsT0FBTyw2QkFBNkIsR0FBRyxpQkFBaUIsZ0JBQWdCLG9CQUFvQixtQkFBbUIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGtDQUFrQyxHQUFHLFFBQVEseUJBQXlCLEdBQUcsNEJBQTRCLHlCQUF5QixpQkFBaUIsR0FBRyxxQkFBcUIsZ0JBQWdCLGlCQUFpQixHQUFHLHdCQUF3QixrQkFBa0Isa0JBQWtCLG9CQUFvQiw4QkFBOEIsZ0JBQWdCLEdBQUcsK0VBQStFLG9CQUFvQixpQkFBaUIsR0FBRyx5Q0FBeUMsZ0NBQWdDLEdBQUcseUNBQXlDLGtDQUFrQyxHQUFHLGtEQUFrRCxvQkFBb0IsNkJBQTZCLDBCQUEwQixpQkFBaUIsR0FBRyxxREFBcUQseUJBQXlCLEdBQUcsK0VBQStFLHlCQUF5QixpQkFBaUIsa0JBQWtCLEdBQUcsZ0JBQWdCLG9CQUFvQixzQkFBc0Isa0JBQWtCLG1CQUFtQiw4QkFBOEIsNkNBQTZDLEdBQUcsNEJBQTRCLGlCQUFpQixrQkFBa0IsMkNBQTJDLDhCQUE4QixLQUFLLDRCQUE0QiwwQ0FBMEMsR0FBRywyQkFBMkIsOENBQThDLEdBQUcsaUNBQWlDLCtDQUErQyxHQUFHLDZCQUE2Qix1Q0FBdUMsR0FBRywwQkFBMEIseUNBQXlDLEdBQUcsMkJBQTJCLHlDQUF5QyxHQUFHLG1CQUFtQjtBQUMzeEo7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNRO0FBQ1M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEVBQUUsR0FBRyxFQUFFO0FBQzFDLG1DQUFtQyxFQUFFO0FBQ3JDLG1DQUFtQyxFQUFFO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DLG1DQUFtQyxXQUFXLEdBQUcsZUFBZTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DLG1DQUFtQyxlQUFlLEdBQUcsV0FBVztBQUNoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DLG1DQUFtQyxXQUFXLEdBQUcsZUFBZTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DLG1DQUFtQyxlQUFlLEdBQUcsV0FBVztBQUNoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9EQUFJO0FBQy9CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsMkRBQXNCO0FBQ3pCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0RBQUk7QUFDL0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0RBQUk7QUFDL0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvREFBSTtBQUMvQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvREFBSTtBQUMvQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdFFHOztBQUU3QjtBQUNBLCtCQUErQixZQUFZO0FBQzNDLGVBQWUsWUFBWTtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0RBQUk7QUFDbkI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHYzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkt0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRhO0FBQ0o7QUFDVTtBQUNFOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsbUJBQW1CLHlEQUFTO0FBQzVCLFVBQVUsc0RBQU07QUFDaEIsQ0FBQyx1RUFBMkI7QUFDNUIsbUJBQW1CLHlEQUFTO0FBQzVCLFVBQVUsc0RBQU07QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlEQUFTO0FBQ3pCLE9BQU8sc0RBQU07QUFDYixFQUFFLHVFQUEyQjtBQUM3QixnQkFBZ0IseURBQVM7QUFDekIsT0FBTyxzREFBTTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUVBQTJCO0FBQzdCLEVBQUUsdUVBQTJCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEVBQThCO0FBQ2hDLE1BQU0sU0FBUyxtQ0FBbUMsUUFBUTtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRUFBOEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLHNFQUEwQjtBQUM3QjtBQUNBO0FBQ0EsSUFBSSwwRUFBOEIsSUFBSSxTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQThCO0FBQ2xDLFFBQVEsU0FBUyxhQUFhLFFBQVEsc0JBQXNCLFFBQVE7QUFDcEU7QUFDQTtBQUNBLElBQUksMEVBQThCO0FBQ2xDLFFBQVEsU0FBUyxvQkFBb0IsUUFBUTtBQUM3QztBQUNBLEdBQUcsc0VBQTBCO0FBQzdCO0FBQ0E7QUFDQSxJQUFJLDBFQUE4QixJQUFJLFNBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDM0c1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET01IYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1jZWxsLWJvcmRlci13aWR0aDogMnB4O1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwcHggMjVweCAyNXB4IDI1cHg7XFxufVxcblxcbmgxIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oMSBidXR0b24jcmVzZXRHYW1lQnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxM2VtO1xcbn1cXG5cXG4udGV4dC1hbm5vdW5jZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wMS1jb250YWluZXIsXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wMi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnAxLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucDItY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnBsYXllci1jb250YWluZXItY29scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucGxheWVyLWNvbnRhaW5lci1jb2xzIGgyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnBsYXllci1jb250YWluZXItY29scyBoMiBidXR0b24uY2hhbmdlLW9yaWVudGF0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxMWVtO1xcbiAgICB0b3A6IC0uMjVlbTtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNSwgMjA1LCAyMDUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5ib2FyZC1jZWxsIHtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDUsIDIwNSwgMjA1KTtcXG4gICAgLyogYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG59XFxuXFxuLmdhbWVib2FyZCAuZW1wdHktY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgMTc4LCAyNTUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5zaGlwLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwNiwgMCUsIDUwJSwgMSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmhvdmVyLXNoaXAtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjA2LCAyOCUsIDY1JSwgMSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLm1pc3NlZC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDc5JSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmhpdC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMTAwJSwgNjYlKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuc3Vuay1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMTAwJSwgMjAlKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLG9DQUFvQztJQUNwQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWNlbGwtYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweCAyNXB4IDI1cHggMjVweDtcXG59XFxuXFxuaDEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmgxIGJ1dHRvbiNyZXNldEdhbWVCdG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEzZW07XFxufVxcblxcbi50ZXh0LWFubm91bmNlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnAxLWNvbnRhaW5lcixcXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnAyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucDEtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wMi1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucGxheWVyLWNvbnRhaW5lci1jb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wbGF5ZXItY29udGFpbmVyLWNvbHMgaDIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucGxheWVyLWNvbnRhaW5lci1jb2xzIGgyIGJ1dHRvbi5jaGFuZ2Utb3JpZW50YXRpb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDExZW07XFxuICAgIHRvcDogLS4yNWVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBhc3BlY3QtcmF0aW86IDEgLyAxOyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA1LCAyMDUsIDIwNSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmJvYXJkLWNlbGwge1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNSwgMjA1LCAyMDUpO1xcbiAgICAvKiBhc3BlY3QtcmF0aW86IDEgLyAxOyAqL1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5lbXB0eS1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc4LCAxNzgsIDI1NSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLnNoaXAtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjA2LCAwJSwgNTAlLCAxKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuaG92ZXItc2hpcC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDYsIDI4JSwgNjUlLCAxKTtcXG59XFxuXFxuLmdhbWVib2FyZCAubWlzc2VkLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAwJSwgNzklKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuaGl0LWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAxMDAlLCA2NiUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5zdW5rLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAxMDAlLCAyMCUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vU2hpcC5qcyc7XG5pbXBvcnQgbWFpbkdhbWVMb29wIGZyb20gJy4vaW5kZXguanMnO1xuXG5jb25zdCBET01IYW5kbGVyID0gKCgpID0+IHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwISc7XG5cdGNvbnN0IHJlc2V0R2FtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRyZXNldEdhbWVCdG4udGV4dENvbnRlbnQgPSdSZXNldCBHYW1lJztcblx0cmVzZXRHYW1lQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzZXRHYW1lQnRuJyk7XG5cdHRpdGxlLmFwcGVuZENoaWxkKHJlc2V0R2FtZUJ0bik7XG5cdGNvbnN0IHRleHRBbm5vdW5jZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHR0ZXh0QW5ub3VuY2VyLmNsYXNzTGlzdC5hZGQoJ3RleHQtYW5ub3VuY2VyJyk7XG5cdGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Z2FtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lLWNvbnRhaW5lcicpO1xuXHQvLyBjb25zdCBwMUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHQvLyBwMUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwMS1jb250YWluZXInKTtcblx0Ly8gZ2FtZUNvbnRhaW5lci5hcHBlbmQocDFDb250YWluZXIpO1xuXHQvLyBjb25zdCBwMkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHQvLyBwMkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwMi1jb250YWluZXInKTtcblx0Ly8gZ2FtZUNvbnRhaW5lci5hcHBlbmQocDFDb250YWluZXIsIHAyQ29udGFpbmVyKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQodGl0bGUsIHRleHRBbm5vdW5jZXIsIGdhbWVDb250YWluZXIpO1xuXG5cdGNvbnN0IHJlbmRlckdhbWVib2FyZCA9IChnYW1lYm9hcmRFbGVtZW50LCBnYW1lYm9hcmQsIGhpZGRlbiA9IGZhbHNlKSA9PiB7XG5cdFx0Z2FtZWJvYXJkRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblx0XHRmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcblx0XHRcdGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuXHRcdFx0XHRsZXQgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNlbGwnKTtcblx0XHRcdFx0aWYgKGdhbWVib2FyZC5pc1NoaXAoeCwgeSkpIGhpZGRlbiA/IHRpbGUuY2xhc3NMaXN0LmFkZCgnZW1wdHktY2VsbCcpIDogdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwLWNlbGwnKTtcblx0XHRcdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShnYW1lYm9hcmQudmFsdWVBdCh4LCB5KSkpXG5cdFx0XHRcdFx0dGlsZS5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJyk7XG5cdFx0XHRcdGVsc2UgaWYgKGdhbWVib2FyZC52YWx1ZUF0KHgsIHkpID09PSAnbWlzc2VkJylcblx0XHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1jZWxsJyk7XG5cdFx0XHRcdGVsc2UgaWYgKGdhbWVib2FyZC52YWx1ZUF0KHgsIHkpID09PSAnaGl0Jylcblx0XHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoJ2hpdC1jZWxsJyk7XG5cdFx0XHRcdHRpbGUuc2V0QXR0cmlidXRlKCdpZCcsIGBjZWxsJHt4fS0ke3l9YCk7XG5cdFx0XHRcdHRpbGUuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBgJHt4fWApO1xuXHRcdFx0XHR0aWxlLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgYCR7eX1gKTtcblx0XHRcdFx0Z2FtZWJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZCh0aWxlKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgY3JlYXRlR2FtZWJvYXJkRWxlbWVudCA9IChnYW1lYm9hcmQsIGhpZGRlbiA9IGZhbHNlKSA9PiB7XG5cdFx0Y29uc3QgZ2FtZWJvYXJkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGdhbWVib2FyZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XG5cdFx0cmVuZGVyR2FtZWJvYXJkKGdhbWVib2FyZEVsZW1lbnQsIGdhbWVib2FyZCwgaGlkZGVuKTtcblx0XHRyZXR1cm4gZ2FtZWJvYXJkRWxlbWVudDtcblx0fTtcblxuXHRjb25zdCByZW5kZXJQbGF5ZXJEYXRhID0gKHBsYXllciwgcXVlcnlTdHJpbmcsIGhpZGRlbiA9IGZhbHNlKSA9PiB7XG5cdFx0Y29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeVN0cmluZyk7XG5cdFx0cGxheWVyQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXHRcdGNvbnN0IHBsYXllckNvbnRhaW5lckNvbHVtbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRwbGF5ZXJDb250YWluZXJDb2x1bW5zLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1jb250YWluZXItY29scycpO1xuXHRcdGNvbnN0IHBsYXllckJvYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0XHRwbGF5ZXJCb2FyZEhlYWRlci50ZXh0Q29udGVudCA9IGAke3BsYXllci5uYW1lfSdzIEJvYXJkYDtcblx0XHRjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmRFbGVtZW50KHBsYXllci5ib2FyZCwgaGlkZGVuKTtcblx0XHRwbGF5ZXJDb250YWluZXJDb2x1bW5zLmFwcGVuZChwbGF5ZXJCb2FyZEhlYWRlciwgcGxheWVyR2FtZWJvYXJkKTtcblx0XHRwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyQ29sdW1ucyk7XG5cdH07XG5cblx0Y29uc3QgZGlzcGxheUFubm91bmNlbWVudCA9IChzdHJpbmcpID0+IHtcblx0XHR0ZXh0QW5ub3VuY2VyLnRleHRDb250ZW50ID0gc3RyaW5nO1xuXHR9O1xuXG5cdGxldCBzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCA9IHRydWU7XG5cblx0Y29uc3QgY29sb3JIb3ZlcmVkQ2VsbCA9IChlLCBzaGlwTGVuZ3RoKSA9PiB7XG5cdFx0Y29uc3QgaG92ZXJDZWxsWCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LngpO1xuXHRcdGNvbnN0IGhvdmVyQ2VsbFkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcblx0XHRpZiAoc2hpcE9yaWVudGF0aW9uVmVydGljYWwpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjZWxsJHtob3ZlckNlbGxYfS0ke2hvdmVyQ2VsbFkgKyBpfWApLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXNoaXAtY2VsbCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjZWxsJHtob3ZlckNlbGxYICsgaX0tJHtob3ZlckNlbGxZfWApLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXNoaXAtY2VsbCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBkZWNvbG9ySG92ZXJlZENlbGwgPSAoZSwgc2hpcExlbmd0aCkgPT4ge1xuXHRcdGNvbnN0IGhvdmVyQ2VsbFggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KTtcblx0XHRjb25zdCBob3ZlckNlbGxZID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueSk7XG5cdFx0aWYgKHNoaXBPcmllbnRhdGlvblZlcnRpY2FsKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2VsbCR7aG92ZXJDZWxsWH0tJHtob3ZlckNlbGxZICsgaX1gKS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1zaGlwLWNlbGwnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2VsbCR7aG92ZXJDZWxsWCArIGl9LSR7aG92ZXJDZWxsWX1gKS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1zaGlwLWNlbGwnKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyUGF0cm9sQm9hdFBsYWNlciA9IChwbGF5ZXIpID0+IHtcblx0XHRkaXNwbGF5QW5ub3VuY2VtZW50KCdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBQYXRyb2wgQm9hdC4nKTtcblx0XHRjb25zdCBwbGF5ZXJHYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmdhbWUtY29udGFpbmVyIGRpdi5nYW1lYm9hcmQnKTtcblx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG5cdFx0XHRjb2xvckhvdmVyZWRDZWxsKGUsIDIpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuXHRcdFx0ZGVjb2xvckhvdmVyZWRDZWxsKGUsIDIpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgY2xpY2tlZENlbGxYID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCk7XG5cdFx0XHRjb25zdCBjbGlja2VkQ2VsbFkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHBsYXllci5ib2FyZC5wbGFjZVNoaXAoU2hpcCgnUGF0cm9sIEJvYXQnLCBjbGlja2VkQ2VsbFgsIGNsaWNrZWRDZWxsWSwgMiwgc2hpcE9yaWVudGF0aW9uVmVydGljYWwgPyAndicgOiAnaCcpKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0ZGlzcGxheUFubm91bmNlbWVudCgnVGhlIFBhdHJvbCBCb2F0IGNhbm5vdCBiZSBwbGFjZWQgdGhlcmUhIENob29zZSBhIGRpZmZlcmVudCBjZWxsIScpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRyZW5kZXJHYW1lYm9hcmQocGxheWVyR2FtZWJvYXJkRWxlbWVudCwgcGxheWVyLmJvYXJkKTtcblx0XHRcdC8vIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzIGJ5IGNsb25pbmcgdGhlIGVsZW1lbnQgYW5kIHJlcGxhY2luZyB0aGUgb3JpZ2luYWwgd2l0aCB0aGUgY2xvbmVcblx0XHRcdGNvbnN0IGNsb25lID0gcGxheWVyR2FtZWJvYXJkRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LnJlcGxhY2VXaXRoKGNsb25lKTtcblx0XHRcdGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuZ2FtZS1jb250YWluZXInKTtcblx0XHRcdGdhbWVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRjb25zdCBwMUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0cDFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncDEtY29udGFpbmVyJyk7XG5cdFx0XHRnYW1lQ29udGFpbmVyLmFwcGVuZChwMUNvbnRhaW5lcik7XG5cdFx0XHRjb25zdCBwMkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0cDJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncDItY29udGFpbmVyJyk7XG5cdFx0XHRnYW1lQ29udGFpbmVyLmFwcGVuZChwMUNvbnRhaW5lciwgcDJDb250YWluZXIpO1xuXHRcdFx0c2hpcE9yaWVudGF0aW9uVmVydGljYWwgPSB0cnVlO1xuXHRcdFx0bWFpbkdhbWVMb29wLmJlZ2luR2FtZSgpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbmRlclN1Ym1hcmluZVBsYWNlciA9IChwbGF5ZXIpID0+IHtcblx0XHRkaXNwbGF5QW5ub3VuY2VtZW50KCdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBTdWJtYXJpbmUuJyk7XG5cdFx0Y29uc3QgcGxheWVyR2FtZWJvYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5nYW1lLWNvbnRhaW5lciBkaXYuZ2FtZWJvYXJkJyk7XG5cdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuXHRcdFx0Y29sb3JIb3ZlcmVkQ2VsbChlLCAzKTtcblx0XHR9KTtcblx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcblx0XHRcdGRlY29sb3JIb3ZlcmVkQ2VsbChlLCAzKTtcblx0XHR9KTtcblx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdGNvbnN0IGNsaWNrZWRDZWxsWCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LngpO1xuXHRcdFx0Y29uc3QgY2xpY2tlZENlbGxZID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueSk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKFNoaXAoJ1N1Ym1hcmluZScsIGNsaWNrZWRDZWxsWCwgY2xpY2tlZENlbGxZLCAzLCBzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCA/ICd2JyA6ICdoJykpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRkaXNwbGF5QW5ub3VuY2VtZW50KCdUaGUgU3VibWFyaW5lIGNhbm5vdCBiZSBwbGFjZWQgdGhlcmUhIENob29zZSBhIGRpZmZlcmVudCBjZWxsIScpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRyZW5kZXJHYW1lYm9hcmQocGxheWVyR2FtZWJvYXJkRWxlbWVudCwgcGxheWVyLmJvYXJkKTtcblx0XHRcdC8vIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzIGJ5IGNsb25pbmcgdGhlIGVsZW1lbnQgYW5kIHJlcGxhY2luZyB0aGUgdGhlIG9yaWdpbmFsIHdpdGggdGhlIGNsb25lXG5cdFx0XHRjb25zdCBjbG9uZSA9IHBsYXllckdhbWVib2FyZEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZSk7XG5cdFx0XHRyZW5kZXJQYXRyb2xCb2F0UGxhY2VyKHBsYXllcik7XG5cdFx0XHRzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCA9IHRydWU7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyRGVzdHJveWVyUGxhY2VyID0gKHBsYXllcikgPT4ge1xuXHRcdGRpc3BsYXlBbm5vdW5jZW1lbnQoJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIERlc3Ryb3llci4nKTtcblx0XHRjb25zdCBwbGF5ZXJHYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmdhbWUtY29udGFpbmVyIGRpdi5nYW1lYm9hcmQnKTtcblx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG5cdFx0XHRjb2xvckhvdmVyZWRDZWxsKGUsIDMpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuXHRcdFx0ZGVjb2xvckhvdmVyZWRDZWxsKGUsIDMpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgY2xpY2tlZENlbGxYID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCk7XG5cdFx0XHRjb25zdCBjbGlja2VkQ2VsbFkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHBsYXllci5ib2FyZC5wbGFjZVNoaXAoU2hpcCgnRGVzdHJveWVyJywgY2xpY2tlZENlbGxYLCBjbGlja2VkQ2VsbFksIDMsIHNoaXBPcmllbnRhdGlvblZlcnRpY2FsID8gJ3YnIDogJ2gnKSk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGRpc3BsYXlBbm5vdW5jZW1lbnQoJ1RoZSBEZXN0cm95ZXIgY2Fubm90IGJlIHBsYWNlZCB0aGVyZSEgQ2hvb3NlIGEgZGlmZmVyZW50IGNlbGwhJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlbmRlckdhbWVib2FyZChwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LCBwbGF5ZXIuYm9hcmQpO1xuXHRcdFx0Ly8gUmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMgYnkgY2xvbmluZyB0aGUgZWxlbWVudCBhbmQgcmVwbGFjaW5nIHRoZSB0aGUgb3JpZ2luYWwgd2l0aCB0aGUgY2xvbmVcblx0XHRcdGNvbnN0IGNsb25lID0gcGxheWVyR2FtZWJvYXJkRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LnJlcGxhY2VXaXRoKGNsb25lKTtcblx0XHRcdHJlbmRlclN1Ym1hcmluZVBsYWNlcihwbGF5ZXIpO1xuXHRcdFx0c2hpcE9yaWVudGF0aW9uVmVydGljYWwgPSB0cnVlO1xuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCByZW5kZXJCYXR0bGVzaGlwUGxhY2VyID0gKHBsYXllcikgPT4ge1xuXHRcdGRpc3BsYXlBbm5vdW5jZW1lbnQoJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIEJhdHRsZXNoaXAuJyk7XG5cdFx0Y29uc3QgcGxheWVyR2FtZWJvYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5nYW1lLWNvbnRhaW5lciBkaXYuZ2FtZWJvYXJkJyk7XG5cdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuXHRcdFx0Y29sb3JIb3ZlcmVkQ2VsbChlLCA0KTtcblx0XHR9KTtcblx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcblx0XHRcdGRlY29sb3JIb3ZlcmVkQ2VsbChlLCA0KTtcblx0XHR9KTtcblx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdGNvbnN0IGNsaWNrZWRDZWxsWCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LngpO1xuXHRcdFx0Y29uc3QgY2xpY2tlZENlbGxZID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueSk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKFNoaXAoJ0JhdHRsZXNoaXAnLCBjbGlja2VkQ2VsbFgsIGNsaWNrZWRDZWxsWSwgNCwgc2hpcE9yaWVudGF0aW9uVmVydGljYWwgPyAndicgOiAnaCcpKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0ZGlzcGxheUFubm91bmNlbWVudCgnVGhlIEJhdHRsZXNoaXAgY2Fubm90IGJlIHBsYWNlZCB0aGVyZSEgQ2hvb3NlIGEgZGlmZmVyZW50IGNlbGwhJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlbmRlckdhbWVib2FyZChwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LCBwbGF5ZXIuYm9hcmQpO1xuXHRcdFx0Ly8gUmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMgYnkgY2xvbmluZyB0aGUgZWxlbWVudCBhbmQgcmVwbGFjaW5nIHRoZSB0aGUgb3JpZ2luYWwgd2l0aCB0aGUgY2xvbmVcblx0XHRcdGNvbnN0IGNsb25lID0gcGxheWVyR2FtZWJvYXJkRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LnJlcGxhY2VXaXRoKGNsb25lKTtcblx0XHRcdHJlbmRlckRlc3Ryb3llclBsYWNlcihwbGF5ZXIpO1xuXHRcdFx0c2hpcE9yaWVudGF0aW9uVmVydGljYWwgPSB0cnVlO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbmRlckNhcnJpZXJQbGFjZXIgPSAocGxheWVyKSA9PiB7XG5cdFx0ZGlzcGxheUFubm91bmNlbWVudCgnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgQ2Fycmllci4nKTtcblx0XHRjb25zdCBwbGF5ZXJHYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmdhbWUtY29udGFpbmVyIGRpdi5nYW1lYm9hcmQnKTtcblx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG5cdFx0XHRjb2xvckhvdmVyZWRDZWxsKGUsIDUpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuXHRcdFx0ZGVjb2xvckhvdmVyZWRDZWxsKGUsIDUpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgY2xpY2tlZENlbGxYID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCk7XG5cdFx0XHRjb25zdCBjbGlja2VkQ2VsbFkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHBsYXllci5ib2FyZC5wbGFjZVNoaXAoU2hpcCgnQ2FycmllcicsIGNsaWNrZWRDZWxsWCwgY2xpY2tlZENlbGxZLCA1LCBzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCA/ICd2JyA6ICdoJykpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRkaXNwbGF5QW5ub3VuY2VtZW50KCdUaGUgQ2FycmllciBjYW5ub3QgYmUgcGxhY2VkIHRoZXJlISBDaG9vc2UgYSBkaWZmZXJlbnQgY2VsbCEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmVuZGVyR2FtZWJvYXJkKHBsYXllckdhbWVib2FyZEVsZW1lbnQsIHBsYXllci5ib2FyZCk7XG5cdFx0XHQvLyBSZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycyBieSBjbG9uaW5nIHRoZSBlbGVtZW50IGFuZCByZXBsYWNpbmcgdGhlIHRoZSBvcmlnaW5hbCB3aXRoIHRoZSBjbG9uZVxuXHRcdFx0Y29uc3QgY2xvbmUgPSBwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQucmVwbGFjZVdpdGgoY2xvbmUpO1xuXHRcdFx0cmVuZGVyQmF0dGxlc2hpcFBsYWNlcihwbGF5ZXIpO1xuXHRcdFx0c2hpcE9yaWVudGF0aW9uVmVydGljYWwgPSB0cnVlO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbmRlclNoaXBQbGFjZXIgPSAocGxheWVyKSA9PiB7XG5cdFx0cmVuZGVyUGxheWVyRGF0YShwbGF5ZXIsICdkaXYuZ2FtZS1jb250YWluZXInKTtcblx0XHRjb25zdCBwbGF5ZXJCb2FyZEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5nYW1lLWNvbnRhaW5lciBkaXYucGxheWVyLWNvbnRhaW5lci1jb2xzIGgyJyk7XG5cdFx0Y29uc3QgY2hhbmdlT3JpZW50YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRjaGFuZ2VPcmllbnRhdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKCdjaGFuZ2Utb3JpZW50YXRpb24nKTtcblx0XHRjaGFuZ2VPcmllbnRhdGlvbkJ0bi50ZXh0Q29udGVudCA9ICdDaGFuZ2UgT3JpZW50YXRpb24nO1xuXHRcdGNoYW5nZU9yaWVudGF0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdHNoaXBPcmllbnRhdGlvblZlcnRpY2FsID0gIXNoaXBPcmllbnRhdGlvblZlcnRpY2FsO1xuXHRcdH0pO1xuXHRcdHBsYXllckJvYXJkSGVhZGVyLmFwcGVuZENoaWxkKGNoYW5nZU9yaWVudGF0aW9uQnRuKTtcblx0XHRyZW5kZXJDYXJyaWVyUGxhY2VyKHBsYXllcik7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRyZW5kZXJHYW1lYm9hcmQsXG5cdFx0cmVuZGVyUGxheWVyRGF0YSxcblx0XHRkaXNwbGF5QW5ub3VuY2VtZW50LFxuXHRcdHJlbmRlclNoaXBQbGFjZXIsXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01IYW5kbGVyO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuXHRjb25zdCBib2FyZEFyciA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sIChlLCBpZHhZKSA9PlxuXHRcdEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sIChlLCBpZHhYKSA9PiBbaWR4WCwgaWR4WV0pXG5cdCk7XG5cblx0Y29uc3Qgc2hpcExpc3QgPSBbXTtcblx0Y29uc3QgY2hlY2tDb29yZGluYXRlcyA9ICh4LCB5LCBlcnJNc2cpID0+IHtcblx0XHRpZiAoIWJvYXJkQXJyW3ldKSB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnKTtcblx0XHRpZiAoIWJvYXJkQXJyW3ldW3hdKSB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnKTtcblx0fTtcblxuXHRjb25zdCBpc1NoaXAgPSAoeCwgeSkgPT4ge1xuXHRcdGlmICh4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSlcblx0XHRcdHRocm93IG5ldyBFcnJvcignVGhhdCBpbmRleCBpcyBvdXQgb2YgYm91bmRzIScpO1xuXHRcdHJldHVybiAoXG5cdFx0XHR0eXBlb2YgYm9hcmRBcnJbeV1beF0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGJvYXJkQXJyW3ldW3hdKVxuXHRcdCk7XG5cdH07XG5cblx0Y29uc3QgdmFsdWVBdCA9ICh4LCB5KSA9PiB7XG5cdFx0cmV0dXJuIGJvYXJkQXJyW3ldW3hdO1xuXHR9O1xuXG5cdGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwKSA9PiB7XG5cdFx0Y29uc3Qgc2hpcENvb3JkaW5hdGVzID0gc2hpcC5nZXRDb29yZGluYXRlcygpO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgYWxsIG9mIHRoZSBjb29yZGluYXRlcyB0aGUgc2hpcCB3aWxsIHRha2UgdXAgYXJlIGFsbCBub3QgdW5kZWZpbmVkXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNoZWNrQ29vcmRpbmF0ZXMoXG5cdFx0XHRcdHNoaXBDb29yZGluYXRlc1tpXVswXSxcblx0XHRcdFx0c2hpcENvb3JkaW5hdGVzW2ldWzFdLFxuXHRcdFx0XHQnVGhhdCBzaGlwIGNhbm5vdCBiZSBwbGFjZWQgYXQgdGhvc2UgY29vcmRpbmF0ZXMhJ1xuXHRcdFx0KTtcblx0XHRcdGlmIChpc1NoaXAoc2hpcENvb3JkaW5hdGVzW2ldWzBdLCBzaGlwQ29vcmRpbmF0ZXNbaV1bMV0pKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0J1RoYXQgc2hpcCBjYW5ub3QgYmUgcGxhY2VkIGF0IHRob3NlIGNvb3JkaW5hdGVzISdcblx0XHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBPbmNlIHRoZSBpbml0aWFsIGxvb3AgcGFzc2VzIHdpdGhvdXQgdGhyb3dpbmcgYW4gZXJyb3IsIHB1c2ggdGhlIHNoaXAgaW50byB0aGUgc2hpcExpc3Rcblx0XHQvLyBhbmQgcGxhY2UgYSByZWZlcmVuY2UgdG8gdGhlIHNoaXAgYXQgYWxsIG9mIHRoZSBjb29yZGluYXRlc1xuXHRcdHNoaXBMaXN0LnB1c2goc2hpcCk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGJvYXJkQXJyW3NoaXBDb29yZGluYXRlc1tpXVsxXV1bc2hpcENvb3JkaW5hdGVzW2ldWzBdXSA9IHNoaXA7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHBsYWNlU2hpcHNSYW5kb21seSA9IChzaGlwcykgPT4ge1xuXHRcdGxldCByYW5kb21YO1xuXHRcdGxldCByYW5kb21ZO1xuXHRcdGxldCByYW5kb21PcmllbnRhdGlvbjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRyYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdFx0XHRyYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdFx0XHRyYW5kb21PcmllbnRhdGlvbiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cGxhY2VTaGlwKFNoaXAoc2hpcHNbaV1bMF0sIHJhbmRvbVgsIHJhbmRvbVksIHNoaXBzW2ldWzFdLCByYW5kb21PcmllbnRhdGlvbiA/ICd2JyA6ICdoJykpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG5cdFx0Y2hlY2tDb29yZGluYXRlcyh4LCB5LCAnQ29vcmRpbmF0ZSBpcyBvdXQgb2YgYm91bmRzIScpO1xuXHRcdGlmIChib2FyZEFyclt5XVt4XSA9PT0gJ21pc3NlZCcgfHwgYm9hcmRBcnJbeV1beF0gPT09ICdoaXQnKSByZXR1cm47XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYm9hcmRBcnJbeV1beF0pKSBib2FyZEFyclt5XVt4XSA9ICdtaXNzZWQnO1xuXHRcdGVsc2UgaWYgKGlzU2hpcCh4LCB5KSkge1xuXHRcdFx0Ym9hcmRBcnJbeV1beF0uaGl0KCk7XG5cdFx0XHRib2FyZEFyclt5XVt4XSA9ICdoaXQnO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG5cdFx0aWYgKHNoaXBMaXN0Lmxlbmd0aCA8IDEpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGFyZSBubyBzaGlwcyBvbiB0aGlzIGdhbWVib2FyZCEnKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoIXNoaXBMaXN0W2ldLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXHRcblx0cmV0dXJuIHtcblx0XHR2YWx1ZUF0LFxuXHRcdHBsYWNlU2hpcCxcblx0XHRwbGFjZVNoaXBzUmFuZG9tbHksXG5cdFx0cmVjZWl2ZUF0dGFjayxcblx0XHRhbGxTaGlwc1N1bmssXG5cdFx0aXNTaGlwLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZC5qcyc7XG5cbmNvbnN0IFBsYXllciA9IChuYW1lLCBnYW1lYm9hcmQsIGNwdSA9IGZhbHNlKSA9PiB7XG5cdGNvbnN0IHBsYXllck5hbWUgPSBuYW1lO1xuXHRjb25zdCBib2FyZCA9IGdhbWVib2FyZDtcblx0bGV0IG9wcG9uZW50O1xuXHRjb25zdCBpc0NQVSA9IGNwdTtcblx0bGV0IGlzTXlUdXJuID0gZmFsc2U7XG5cblx0Y29uc3Qgc3RhcnRUdXJuID0gKCkgPT4ge1xuXHRcdGlzTXlUdXJuID0gdHJ1ZTtcblx0fTtcblxuXHRjb25zdCBlbmRUdXJuID0gKCkgPT4ge1xuXHRcdGlzTXlUdXJuID0gZmFsc2U7XG5cdH07XG5cblx0Y29uc3Qgc2V0T3Bwb25lbnQgPSAocGxheWVyKSA9PiB7XG5cdFx0b3Bwb25lbnQgPSBwbGF5ZXI7XG5cdH07XG5cblx0bGV0IHJhbmRvbURlY2lzaW9uT3JpZ2luID0gW107XG5cdGxldCBsYXN0RGVjaXNpb25Mb2MgPSBbXTtcblx0bGV0IGN1cnJlbnRUYXJnZXRTaGlwO1xuXHRsZXQgY2hlY2tEaXJlY3Rpb24gPSAndXAnO1xuXHRjb25zdCBjYWxjdWxhdGVEZWNpc2lvbiA9ICgpID0+IHtcblx0XHRpZiAoIW9wcG9uZW50KSB0aHJvdyBuZXcgRXJyb3IoJ1NldCBvcHBvbmVudCBmaXJzdCEnKTtcblxuXHRcdGNvbnN0IGRlY2lzaW9uID0gW107XG5cdFx0XG5cdFx0aWYgKGN1cnJlbnRUYXJnZXRTaGlwICYmIGN1cnJlbnRUYXJnZXRTaGlwLmlzU3VuaygpKSB7XG5cdFx0XHRjdXJyZW50VGFyZ2V0U2hpcCA9IG51bGw7XG5cdFx0XHRjaGVja0RpcmVjdGlvbiA9ICd1cCc7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKCFjdXJyZW50VGFyZ2V0U2hpcCkge1xuXHRcdFx0Y29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblx0XHRcdGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cdFx0XHRyYW5kb21EZWNpc2lvbk9yaWdpbi5wb3AoKTtcblx0XHRcdHJhbmRvbURlY2lzaW9uT3JpZ2luLnBvcCgpO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jLnBvcCgpO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jLnBvcCgpO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRvcHBvbmVudC5ib2FyZC52YWx1ZUF0KHgsIHkpID09PSAnaGl0JyB8fFxuXHRcdFx0XHRvcHBvbmVudC5ib2FyZC52YWx1ZUF0KHgsIHkpID09PSAnbWlzc2VkJ1xuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblxuXHRcdFx0aWYgKG9wcG9uZW50LmJvYXJkLmlzU2hpcCh4LCB5KSlcblx0XHRcdFx0Y3VycmVudFRhcmdldFNoaXAgPSBvcHBvbmVudC5ib2FyZC52YWx1ZUF0KHgsIHkpO1xuXHRcdFx0ZGVjaXNpb24ucHVzaCh4KTtcblx0XHRcdGRlY2lzaW9uLnB1c2goeSk7XG5cdFx0XHRyYW5kb21EZWNpc2lvbk9yaWdpbi5wdXNoKHgpO1xuXHRcdFx0cmFuZG9tRGVjaXNpb25PcmlnaW4ucHVzaCh5KTtcblx0XHRcdGxhc3REZWNpc2lvbkxvYy5wdXNoKHgpO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jLnB1c2goeSk7XG5cdFx0XHRyZXR1cm4gZGVjaXNpb247XG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0b3Bwb25lbnQuYm9hcmQudmFsdWVBdChsYXN0RGVjaXNpb25Mb2NbMF0sIGxhc3REZWNpc2lvbkxvY1sxXSkgPT09XG5cdFx0XHRcdCdtaXNzZWQnICYmXG5cdFx0XHRjaGVja0RpcmVjdGlvbiA9PT0gJ3VwJ1xuXHRcdCkge1xuXHRcdFx0Y2hlY2tEaXJlY3Rpb24gPSAncmlnaHQnO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jWzBdID0gcmFuZG9tRGVjaXNpb25PcmlnaW5bMF07XG5cdFx0XHRsYXN0RGVjaXNpb25Mb2NbMV0gPSByYW5kb21EZWNpc2lvbk9yaWdpblsxXTtcblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHRvcHBvbmVudC5ib2FyZC52YWx1ZUF0KGxhc3REZWNpc2lvbkxvY1swXSwgbGFzdERlY2lzaW9uTG9jWzFdKSA9PT1cblx0XHRcdFx0J21pc3NlZCcgJiZcblx0XHRcdGNoZWNrRGlyZWN0aW9uID09PSAncmlnaHQnXG5cdFx0KSB7XG5cdFx0XHRjaGVja0RpcmVjdGlvbiA9ICdkb3duJztcblx0XHRcdGxhc3REZWNpc2lvbkxvY1swXSA9IHJhbmRvbURlY2lzaW9uT3JpZ2luWzBdO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jWzFdID0gcmFuZG9tRGVjaXNpb25PcmlnaW5bMV07XG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0b3Bwb25lbnQuYm9hcmQudmFsdWVBdChsYXN0RGVjaXNpb25Mb2NbMF0sIGxhc3REZWNpc2lvbkxvY1sxXSkgPT09XG5cdFx0XHRcdCdtaXNzZWQnICYmXG5cdFx0XHRjaGVja0RpcmVjdGlvbiA9PT0gJ2Rvd24nXG5cdFx0KSB7XG5cdFx0XHRjaGVja0RpcmVjdGlvbiA9ICdsZWZ0Jztcblx0XHRcdGxhc3REZWNpc2lvbkxvY1swXSA9IHJhbmRvbURlY2lzaW9uT3JpZ2luWzBdO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jWzFdID0gcmFuZG9tRGVjaXNpb25PcmlnaW5bMV07XG5cdFx0fVxuXG5cdFx0aWYgKGxhc3REZWNpc2lvbkxvY1sxXSAtIDEgPCAwICYmIGNoZWNrRGlyZWN0aW9uID09PSAndXAnKSB7XG5cdFx0XHRjaGVja0RpcmVjdGlvbiA9ICdyaWdodCc7XG5cdFx0XHRsYXN0RGVjaXNpb25Mb2NbMF0gPSByYW5kb21EZWNpc2lvbk9yaWdpblswXTtcblx0XHRcdGxhc3REZWNpc2lvbkxvY1sxXSA9IHJhbmRvbURlY2lzaW9uT3JpZ2luWzFdO1xuXHRcdH1cblx0XHRpZiAobGFzdERlY2lzaW9uTG9jWzBdICsgMSA+IDkgJiYgY2hlY2tEaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdGNoZWNrRGlyZWN0aW9uID0gJ2Rvd24nO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jWzBdID0gcmFuZG9tRGVjaXNpb25PcmlnaW5bMF07XG5cdFx0XHRsYXN0RGVjaXNpb25Mb2NbMV0gPSByYW5kb21EZWNpc2lvbk9yaWdpblsxXTtcblx0XHR9XG5cdFx0aWYgKGxhc3REZWNpc2lvbkxvY1sxXSArIDEgPiA5ICYmIGNoZWNrRGlyZWN0aW9uID09PSAnZG93bicpIHtcblx0XHRcdGNoZWNrRGlyZWN0aW9uID0gJ2xlZnQnO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jWzBdID0gcmFuZG9tRGVjaXNpb25PcmlnaW5bMF07XG5cdFx0XHRsYXN0RGVjaXNpb25Mb2NbMV0gPSByYW5kb21EZWNpc2lvbk9yaWdpblsxXTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKGNoZWNrRGlyZWN0aW9uID09PSAndXAnKSB7XG5cdFx0XHRkZWNpc2lvbi5wdXNoKGxhc3REZWNpc2lvbkxvY1swXSk7XG5cdFx0XHRkZWNpc2lvbi5wdXNoKGxhc3REZWNpc2lvbkxvY1sxXSAtIDEpO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jLnBvcCgpO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jLnBvcCgpO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jLnB1c2goZGVjaXNpb25bMF0pO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jLnB1c2goZGVjaXNpb25bMV0pO1xuXHRcdFx0cmV0dXJuIGRlY2lzaW9uO1xuXHRcdH0gZWxzZSBpZiAoY2hlY2tEaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdGRlY2lzaW9uLnB1c2gobGFzdERlY2lzaW9uTG9jWzBdICsgMSk7XG5cdFx0XHRkZWNpc2lvbi5wdXNoKGxhc3REZWNpc2lvbkxvY1sxXSk7XG5cdFx0XHRsYXN0RGVjaXNpb25Mb2MucG9wKCk7XG5cdFx0XHRsYXN0RGVjaXNpb25Mb2MucG9wKCk7XG5cdFx0XHRsYXN0RGVjaXNpb25Mb2MucHVzaChkZWNpc2lvblswXSk7XG5cdFx0XHRsYXN0RGVjaXNpb25Mb2MucHVzaChkZWNpc2lvblsxXSk7XG5cdFx0XHRyZXR1cm4gZGVjaXNpb247XG5cdFx0fSBlbHNlIGlmIChjaGVja0RpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG5cdFx0XHRkZWNpc2lvbi5wdXNoKGxhc3REZWNpc2lvbkxvY1swXSk7XG5cdFx0XHRkZWNpc2lvbi5wdXNoKGxhc3REZWNpc2lvbkxvY1sxXSArIDEpO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jLnBvcCgpO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jLnBvcCgpO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jLnB1c2goZGVjaXNpb25bMF0pO1xuXHRcdFx0bGFzdERlY2lzaW9uTG9jLnB1c2goZGVjaXNpb25bMV0pO1xuXHRcdFx0cmV0dXJuIGRlY2lzaW9uO1xuXHRcdH0gZWxzZSBpZiAoY2hlY2tEaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuXHRcdFx0ZGVjaXNpb24ucHVzaChsYXN0RGVjaXNpb25Mb2NbMF0gLSAxKTtcblx0XHRcdGRlY2lzaW9uLnB1c2gobGFzdERlY2lzaW9uTG9jWzFdKTtcblx0XHRcdGxhc3REZWNpc2lvbkxvYy5wb3AoKTtcblx0XHRcdGxhc3REZWNpc2lvbkxvYy5wb3AoKTtcblx0XHRcdGxhc3REZWNpc2lvbkxvYy5wdXNoKGRlY2lzaW9uWzBdKTtcblx0XHRcdGxhc3REZWNpc2lvbkxvYy5wdXNoKGRlY2lzaW9uWzFdKTtcblx0XHRcdHJldHVybiBkZWNpc2lvbjtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRnZXQgbmFtZSgpIHtcblx0XHRcdHJldHVybiBwbGF5ZXJOYW1lO1xuXHRcdH0sXG5cdFx0Z2V0IGJvYXJkKCkge1xuXHRcdFx0cmV0dXJuIGJvYXJkO1xuXHRcdH0sXG5cdFx0Z2V0IG9wcG9uZW50KCkge1xuXHRcdFx0cmV0dXJuIG9wcG9uZW50O1xuXHRcdH0sXG5cdFx0Z2V0IGlzQ1BVKCkge1xuXHRcdFx0cmV0dXJuIGlzQ1BVO1xuXHRcdH0sXG5cdFx0Z2V0IGlzTXlUdXJuKCkge1xuXHRcdFx0cmV0dXJuIGlzTXlUdXJuO1xuXHRcdH0sXG5cdFx0c3RhcnRUdXJuLFxuXHRcdGVuZFR1cm4sXG5cdFx0c2V0T3Bwb25lbnQsXG5cdFx0Y2FsY3VsYXRlRGVjaXNpb24sXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKG5hbWUsIHgsIHksIGxlbiwgb3JpZW50YXRpb24gPSAndicpID0+IHtcblx0aWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IEVycm9yKCdTaGlwIG5hbWUgbXVzdCBiZSBhIHN0cmluZyEnKTtcblx0aWYgKHggPCAwKVxuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdCdBIHBvc2l0aXZlIGludGVnZXIgbXVzdCBiZSBwYXNzZWQgaW50byB0aGUgeCBhcmd1bWVudCEnXG5cdFx0KTtcblx0aWYgKHkgPCAwKVxuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdCdBIHBvc2l0aXZlIGludGVnZXIgbXVzdCBiZSBwYXNzZWQgaW50byB0aGUgeSBhcmd1bWVudCEnXG5cdFx0KTtcblx0aWYgKGxlbiA8PSAwKVxuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdCdBbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiAwIG11c3QgYmUgcGFzc2VkIGludG8gdGhlIGxlbiBhcmd1bWVudCEnXG5cdFx0KTtcblx0aWYgKG9yaWVudGF0aW9uICE9PSAndicgJiYgb3JpZW50YXRpb24gIT09ICdoJylcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcIidoJyBvciAndicgbXVzdCBiZSBwYXNzZWQgaW50byB0aGUgb3JpZW50YXRpb24gYXJndW1lbnQhIExlYXZpbmcgaXQgZW1wdHkgd2lsbCBzZXQgaXQgdG8gJ3YnIGJ5IGRlZmF1bHQuXCJcblx0XHQpO1xuXHRjb25zdCBzaGlwTmFtZSA9IG5hbWU7XG5cdGNvbnN0IHNoaXBMZW5ndGggPSBsZW47XG5cdGNvbnN0IGNvb3JkQXJyID0gW107XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnKSBjb29yZEFyci5wdXNoKFt4LCB5ICsgaV0pO1xuXHRcdGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnKSBjb29yZEFyci5wdXNoKFt4ICsgaSwgeV0pO1xuXHR9XG5cblx0bGV0IGhpdHMgPSAwO1xuXHRjb25zdCBoaXQgPSAoKSA9PiB7XG5cdFx0aGl0cysrO1xuXHR9O1xuXG5cdGNvbnN0IGlzU3VuayA9ICgpID0+IHtcblx0XHRyZXR1cm4gaGl0cyA9PT0gc2hpcExlbmd0aDtcblx0fTtcblx0XG5cdGNvbnN0IGdldENvb3JkaW5hdGVzID0gKCkgPT4ge1xuXHRcdHJldHVybiBjb29yZEFycjtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGdldCBuYW1lKCkge1xuXHRcdFx0cmV0dXJuIHNoaXBOYW1lO1xuXHRcdH0sXG5cdFx0Z2V0IGhpdHMoKSB7XG5cdFx0XHRyZXR1cm4gaGl0cztcblx0XHR9LFxuXHRcdGhpdCxcblx0XHRpc1N1bmssXG5cdFx0Z2V0Q29vcmRpbmF0ZXMsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAuanMnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZC5qcyc7XG5pbXBvcnQgRE9NSGFuZGxlciBmcm9tICcuL0RPTUhhbmRsZXIuanMnO1xuXG5jb25zdCBtYWluR2FtZUxvb3AgPSAoKCkgPT4ge1xuXHRjb25zdCBzd2l0Y2hUdXJucyA9ICgpID0+IHtcblx0XHRpZiAocDEuaXNNeVR1cm4pIHtcblx0XHRcdHAxLmVuZFR1cm4oKTtcblx0XHRcdHAyLnN0YXJ0VHVybigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwMS5zdGFydFR1cm4oKTtcblx0XHRcdHAyLmVuZFR1cm4oKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlc2V0R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNyZXNldEdhbWVCdG4nKTtcblx0cmVzZXRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRyZXNldEdhbWUoKTtcblx0fSk7XG5cdGxldCBnYW1lRW5kID0gZmFsc2U7XG5cdGxldCBwMUdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXHRsZXQgcDEgPSBQbGF5ZXIocHJvbXB0KCdFbnRlciB5b3VyIG5hbWUuJyksIHAxR2FtZWJvYXJkKTtcblx0RE9NSGFuZGxlci5yZW5kZXJTaGlwUGxhY2VyKHAxKTtcblx0bGV0IHAyR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cdGxldCBwMiA9IFBsYXllcignQ1BVJywgcDJHYW1lYm9hcmQpO1xuXHRjb25zdCBzaGlwQXJyID0gW107XG5cdHNoaXBBcnIucHVzaChbJ0NhcnJpZXInLCA1XSk7XG5cdHNoaXBBcnIucHVzaChbJ0JhdHRsZVNoaXAnLCA0XSk7XG5cdHNoaXBBcnIucHVzaChbJ0Rlc3Ryb3llcicsIDNdKTtcblx0c2hpcEFyci5wdXNoKFsnU3VibWFyaW5lJywgM10pO1xuXHRzaGlwQXJyLnB1c2goWydQYXRyb2wgQm9hdCcsIDJdKTtcblx0cDJHYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KHNoaXBBcnIpO1xuXHRjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XG5cdFx0Z2FtZUVuZCA9IGZhbHNlO1xuXHRcdHAxR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cdFx0cDEgPSBQbGF5ZXIocDEubmFtZSwgcDFHYW1lYm9hcmQpO1xuXHRcdERPTUhhbmRsZXIucmVuZGVyU2hpcFBsYWNlcihwMSk7XG5cdFx0cDJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblx0XHRwMiA9IFBsYXllcignQ1BVJywgcDJHYW1lYm9hcmQpO1xuXHRcdHAyR2FtZWJvYXJkLnBsYWNlU2hpcHNSYW5kb21seShzaGlwQXJyKTtcblx0fTtcblx0Y29uc3QgYmVnaW5HYW1lID0gKCkgPT4ge1xuXHRcdERPTUhhbmRsZXIucmVuZGVyUGxheWVyRGF0YShwMSwgJ2Rpdi5wMS1jb250YWluZXInKTtcblx0XHRET01IYW5kbGVyLnJlbmRlclBsYXllckRhdGEocDIsICdkaXYucDItY29udGFpbmVyJywgdHJ1ZSk7XG5cdFx0cDEuc2V0T3Bwb25lbnQocDIpO1xuXHRcdHAyLnNldE9wcG9uZW50KHAxKTtcblx0XHRjb25zdCBwMUdhbWVib2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0J2Rpdi5wMS1jb250YWluZXIgZGl2LmdhbWVib2FyZCdcblx0XHQpO1xuXHRcdGNvbnN0IHAyR2FtZWJvYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnZGl2LnAyLWNvbnRhaW5lciBkaXYuZ2FtZWJvYXJkJ1xuXHRcdCk7XG5cdFx0cDEuc3RhcnRUdXJuKCk7XG5cdFx0RE9NSGFuZGxlci5kaXNwbGF5QW5ub3VuY2VtZW50KFxuXHRcdFx0YCR7cDEubmFtZX0gZ29lcyBmaXJzdCEgUGljayBhIGNvb3JkaW5hdGUgb24gJHtwMi5uYW1lfSdzIGJvYXJkIHRvIGF0dGFjayFgXG5cdFx0KTtcblxuXHRcdHAyR2FtZWJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRpZiAoIXAxLmlzTXlUdXJuIHx8IGdhbWVFbmQpIHJldHVybjtcblx0XHRcdGlmIChcblx0XHRcdFx0cDJHYW1lYm9hcmQudmFsdWVBdChlLnRhcmdldC5kYXRhc2V0LngsIGUudGFyZ2V0LmRhdGFzZXQueSkgPT09XG5cdFx0XHRcdFx0J21pc3NlZCcgfHxcblx0XHRcdFx0cDJHYW1lYm9hcmQudmFsdWVBdChlLnRhcmdldC5kYXRhc2V0LngsIGUudGFyZ2V0LmRhdGFzZXQueSkgPT09XG5cdFx0XHRcdFx0J2hpdCdcblx0XHRcdCkge1xuXHRcdFx0XHRET01IYW5kbGVyLmRpc3BsYXlBbm5vdW5jZW1lbnQoXG5cdFx0XHRcdFx0J1RoYXQgY2VsbCBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkLiBDaG9vc2UgYW5vdGhlciBjZWxsLidcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRwMkdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFxuXHRcdFx0XHROdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KSxcblx0XHRcdFx0TnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueSlcblx0XHRcdCk7XG5cdFx0XHRET01IYW5kbGVyLnJlbmRlckdhbWVib2FyZChwMkdhbWVib2FyZEVsZW1lbnQsIHAyR2FtZWJvYXJkLCB0cnVlKTtcblx0XHRcdGlmIChwMkdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuXHRcdFx0XHRnYW1lRW5kID0gdHJ1ZTtcblx0XHRcdFx0RE9NSGFuZGxlci5kaXNwbGF5QW5ub3VuY2VtZW50KGAke3AxLm5hbWV9IHdpbnMhYCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHN3aXRjaFR1cm5zKCk7XG5cdFx0XHRjb25zdCBwMkRlY2lzaW9uID0gcDIuY2FsY3VsYXRlRGVjaXNpb24oKTtcblx0XHRcdHAxR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socDJEZWNpc2lvblswXSwgcDJEZWNpc2lvblsxXSk7XG5cdFx0XHRpZiAocDFHYW1lYm9hcmQudmFsdWVBdChwMkRlY2lzaW9uWzBdLCBwMkRlY2lzaW9uWzFdKSA9PT0gJ2hpdCcpXG5cdFx0XHRcdERPTUhhbmRsZXIuZGlzcGxheUFubm91bmNlbWVudChcblx0XHRcdFx0XHRgJHtwMi5uYW1lfSBoaXQgb25lIG9mICR7cDEubmFtZX0ncyBzaGlwcyEgWW91ciB0dXJuICR7cDEubmFtZX0hYFxuXHRcdFx0XHQpO1xuXHRcdFx0aWYgKHAxR2FtZWJvYXJkLnZhbHVlQXQocDJEZWNpc2lvblswXSwgcDJEZWNpc2lvblsxXSkgPT09ICdtaXNzZWQnKVxuXHRcdFx0XHRET01IYW5kbGVyLmRpc3BsYXlBbm5vdW5jZW1lbnQoXG5cdFx0XHRcdFx0YCR7cDIubmFtZX0gbWlzc2VkISBZb3VyIHR1cm4gJHtwMS5uYW1lfSFgXG5cdFx0XHRcdCk7XG5cdFx0XHRET01IYW5kbGVyLnJlbmRlckdhbWVib2FyZChwMUdhbWVib2FyZEVsZW1lbnQsIHAxR2FtZWJvYXJkLCBmYWxzZSk7XG5cdFx0XHRpZiAocDFHYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcblx0XHRcdFx0Z2FtZUVuZCA9IHRydWU7XG5cdFx0XHRcdERPTUhhbmRsZXIuZGlzcGxheUFubm91bmNlbWVudChgJHtwMi5uYW1lfSB3aW5zIWApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2hUdXJucygpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0YmVnaW5HYW1lLFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpbkdhbWVMb29wO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=