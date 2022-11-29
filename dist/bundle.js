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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --cell-border-width: 2px;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0px 25px 25px 25px;\n}\n\n.text-announcer {\n    margin: 0;\n    padding: 0;\n}\n\ndiv.game-container {\n    width: 100%;\n    height: 80%;\n    display: flex;\n    justify-content: center;\n    gap: 25px;\n}\n\ndiv.game-container div.p1-container,\ndiv.game-container div.p2-container {\n    display: flex;\n    width: 50%;\n}\n\ndiv.game-container div.p1-container {\n    justify-content: flex-end;\n}\n\ndiv.game-container div.p2-container {\n    justify-content: flex-start;\n}\n\ndiv.game-container div.player-container-cols {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 70%;\n}\n\ndiv.game-container div.player-container-cols h2 {\n    position: relative;\n}\n\ndiv.game-container div.player-container-cols h2 button.change-orientation {\n    position: absolute;\n    right: -141px;\n    top: 3px;\n}\n\n.gameboard {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    height: 100%;\n    /* aspect-ratio: 1 / 1; */\n    border: 1px solid rgb(205, 205, 205);\n}\n\n.gameboard .board-cell {\n    width: 10%;\n    height: 10%;\n    border: 1px solid rgb(205, 205, 205);\n    /* aspect-ratio: 1 / 1; */\n}\n\n.gameboard .empty-cell {\n    background-color: rgb(78, 178, 255);\n}\n\n.gameboard .ship-cell {\n    background-color: hsla(206, 0%, 50%, 1);\n}\n\n.gameboard .hover-ship-cell {\n    background-color: hsla(206, 28%, 65%, 1);\n}\n\n.gameboard .missed-cell {\n    background-color:hsl(0, 0%, 79%);\n}\n\n.gameboard .hit-cell {\n    background-color:hsl(0, 100%, 66%);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,SAAS;IACT,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,WAAW;IACX,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,oCAAoC;AACxC;;AAEA;IACI,UAAU;IACV,WAAW;IACX,oCAAoC;IACpC,yBAAyB;AAC7B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,kCAAkC;AACtC","sourcesContent":[":root {\n    --cell-border-width: 2px;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0px 25px 25px 25px;\n}\n\n.text-announcer {\n    margin: 0;\n    padding: 0;\n}\n\ndiv.game-container {\n    width: 100%;\n    height: 80%;\n    display: flex;\n    justify-content: center;\n    gap: 25px;\n}\n\ndiv.game-container div.p1-container,\ndiv.game-container div.p2-container {\n    display: flex;\n    width: 50%;\n}\n\ndiv.game-container div.p1-container {\n    justify-content: flex-end;\n}\n\ndiv.game-container div.p2-container {\n    justify-content: flex-start;\n}\n\ndiv.game-container div.player-container-cols {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 70%;\n}\n\ndiv.game-container div.player-container-cols h2 {\n    position: relative;\n}\n\ndiv.game-container div.player-container-cols h2 button.change-orientation {\n    position: absolute;\n    right: -141px;\n    top: 3px;\n}\n\n.gameboard {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    height: 100%;\n    /* aspect-ratio: 1 / 1; */\n    border: 1px solid rgb(205, 205, 205);\n}\n\n.gameboard .board-cell {\n    width: 10%;\n    height: 10%;\n    border: 1px solid rgb(205, 205, 205);\n    /* aspect-ratio: 1 / 1; */\n}\n\n.gameboard .empty-cell {\n    background-color: rgb(78, 178, 255);\n}\n\n.gameboard .ship-cell {\n    background-color: hsla(206, 0%, 50%, 1);\n}\n\n.gameboard .hover-ship-cell {\n    background-color: hsla(206, 28%, 65%, 1);\n}\n\n.gameboard .missed-cell {\n    background-color:hsl(0, 0%, 79%);\n}\n\n.gameboard .hit-cell {\n    background-color:hsl(0, 100%, 66%);\n}"],"sourceRoot":""}]);
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
    }
	const calculateDecision = () => {
        if (!opponent) throw new Error('Set opponent first!');
		const decision = [];
		while (true) {
			const x = Math.floor(Math.random() * 10)
			const y = Math.floor(Math.random() * 10)
			if (
				opponent.board.valueAt(x, y) === 'hit' ||
				opponent.board.valueAt(x, y) === 'missed'
			)
				continue;
            else {
                decision.push(x);
                decision.push(y);
                return decision;
            }
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

	let gameEnd = false;
	const p1Gameboard = (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
	const p1 = (0,_Player_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prompt('Enter your name.'), p1Gameboard);
	_DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderShipPlacer(p1);
	const p2Gameboard = (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
	const p2 = (0,_Player_js__WEBPACK_IMPORTED_MODULE_0__["default"])('CPU', p2Gameboard);
	const shipArr = [];
	shipArr.push(['Carrier', 5]);
	shipArr.push(['BattleShip', 4]);
	shipArr.push(['Destroyer', 3]);
	shipArr.push(['Submarine', 3]);
	shipArr.push(['Patrol Boat', 2]);
	p2Gameboard.placeShipsRandomly(shipArr);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBFQUE4QjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsc0VBQTBCO0FBQzdCO0FBQ0E7QUFDQSxJQUFJLDBFQUE4QixJQUFJLFNBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRUFBOEI7QUFDbEMsUUFBUSxTQUFTLGFBQWEsUUFBUSxzQkFBc0IsUUFBUTtBQUNwRTtBQUNBO0FBQ0EsSUFBSSwwRUFBOEI7QUFDbEMsUUFBUSxTQUFTLG9CQUFvQixRQUFRO0FBQzdDO0FBQ0EsR0FBRyxzRUFBMEI7QUFDN0I7QUFDQTtBQUNBLElBQUksMEVBQThCLElBQUksU0FBUztBQUMvQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7VUMvRjVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWNlbGwtYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweCAyNXB4IDI1cHggMjVweDtcXG59XFxuXFxuLnRleHQtYW5ub3VuY2VyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucDEtY29udGFpbmVyLFxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucDItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wMS1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnAyLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wbGF5ZXItY29udGFpbmVyLWNvbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnBsYXllci1jb250YWluZXItY29scyBoMiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wbGF5ZXItY29udGFpbmVyLWNvbHMgaDIgYnV0dG9uLmNoYW5nZS1vcmllbnRhdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC0xNDFweDtcXG4gICAgdG9wOiAzcHg7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGFzcGVjdC1yYXRpbzogMSAvIDE7ICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDUsIDIwNSwgMjA1KTtcXG59XFxuXFxuLmdhbWVib2FyZCAuYm9hcmQtY2VsbCB7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA1LCAyMDUsIDIwNSk7XFxuICAgIC8qIGFzcGVjdC1yYXRpbzogMSAvIDE7ICovXFxufVxcblxcbi5nYW1lYm9hcmQgLmVtcHR5LWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDE3OCwgMjU1KTtcXG59XFxuXFxuLmdhbWVib2FyZCAuc2hpcC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDYsIDAlLCA1MCUsIDEpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5ob3Zlci1zaGlwLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwNiwgMjglLCA2NSUsIDEpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5taXNzZWQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDAsIDAlLCA3OSUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5oaXQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDAsIDEwMCUsIDY2JSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLG9DQUFvQztJQUNwQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWNlbGwtYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweCAyNXB4IDI1cHggMjVweDtcXG59XFxuXFxuLnRleHQtYW5ub3VuY2VyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucDEtY29udGFpbmVyLFxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucDItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wMS1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnAyLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wbGF5ZXItY29udGFpbmVyLWNvbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnBsYXllci1jb250YWluZXItY29scyBoMiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wbGF5ZXItY29udGFpbmVyLWNvbHMgaDIgYnV0dG9uLmNoYW5nZS1vcmllbnRhdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC0xNDFweDtcXG4gICAgdG9wOiAzcHg7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGFzcGVjdC1yYXRpbzogMSAvIDE7ICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDUsIDIwNSwgMjA1KTtcXG59XFxuXFxuLmdhbWVib2FyZCAuYm9hcmQtY2VsbCB7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA1LCAyMDUsIDIwNSk7XFxuICAgIC8qIGFzcGVjdC1yYXRpbzogMSAvIDE7ICovXFxufVxcblxcbi5nYW1lYm9hcmQgLmVtcHR5LWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDE3OCwgMjU1KTtcXG59XFxuXFxuLmdhbWVib2FyZCAuc2hpcC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDYsIDAlLCA1MCUsIDEpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5ob3Zlci1zaGlwLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwNiwgMjglLCA2NSUsIDEpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5taXNzZWQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDAsIDAlLCA3OSUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5oaXQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDAsIDEwMCUsIDY2JSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwLmpzJztcbmltcG9ydCBtYWluR2FtZUxvb3AgZnJvbSAnLi9pbmRleC5qcyc7XG5cbmNvbnN0IERPTUhhbmRsZXIgPSAoKCkgPT4ge1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gJ0JhdHRsZXNoaXAhJztcblx0Y29uc3QgdGV4dEFubm91bmNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdHRleHRBbm5vdW5jZXIuY2xhc3NMaXN0LmFkZCgndGV4dC1hbm5vdW5jZXInKTtcblx0Y29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRnYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dhbWUtY29udGFpbmVyJyk7XG5cdC8vIGNvbnN0IHAxQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdC8vIHAxQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3AxLWNvbnRhaW5lcicpO1xuXHQvLyBnYW1lQ29udGFpbmVyLmFwcGVuZChwMUNvbnRhaW5lcik7XG5cdC8vIGNvbnN0IHAyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdC8vIHAyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3AyLWNvbnRhaW5lcicpO1xuXHQvLyBnYW1lQ29udGFpbmVyLmFwcGVuZChwMUNvbnRhaW5lciwgcDJDb250YWluZXIpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZCh0aXRsZSwgdGV4dEFubm91bmNlciwgZ2FtZUNvbnRhaW5lcik7XG5cblx0Y29uc3QgcmVuZGVyR2FtZWJvYXJkID0gKGdhbWVib2FyZEVsZW1lbnQsIGdhbWVib2FyZCwgaGlkZGVuID0gZmFsc2UpID0+IHtcblx0XHRnYW1lYm9hcmRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXHRcdGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuXHRcdFx0Zm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG5cdFx0XHRcdGxldCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY2VsbCcpO1xuXHRcdFx0XHRpZiAoZ2FtZWJvYXJkLmlzU2hpcCh4LCB5KSkgaGlkZGVuID8gdGlsZS5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJykgOiB0aWxlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY2VsbCcpO1xuXHRcdFx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KGdhbWVib2FyZC52YWx1ZUF0KHgsIHkpKSlcblx0XHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LWNlbGwnKTtcblx0XHRcdFx0ZWxzZSBpZiAoZ2FtZWJvYXJkLnZhbHVlQXQoeCwgeSkgPT09ICdtaXNzZWQnKVxuXHRcdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLWNlbGwnKTtcblx0XHRcdFx0ZWxzZSBpZiAoZ2FtZWJvYXJkLnZhbHVlQXQoeCwgeSkgPT09ICdoaXQnKVxuXHRcdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZCgnaGl0LWNlbGwnKTtcblx0XHRcdFx0dGlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNlbGwke3h9LSR7eX1gKTtcblx0XHRcdFx0dGlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIGAke3h9YCk7XG5cdFx0XHRcdHRpbGUuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBgJHt5fWApO1xuXHRcdFx0XHRnYW1lYm9hcmRFbGVtZW50LmFwcGVuZENoaWxkKHRpbGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBjcmVhdGVHYW1lYm9hcmRFbGVtZW50ID0gKGdhbWVib2FyZCwgaGlkZGVuID0gZmFsc2UpID0+IHtcblx0XHRjb25zdCBnYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0Z2FtZWJvYXJkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcblx0XHRyZW5kZXJHYW1lYm9hcmQoZ2FtZWJvYXJkRWxlbWVudCwgZ2FtZWJvYXJkLCBoaWRkZW4pO1xuXHRcdHJldHVybiBnYW1lYm9hcmRFbGVtZW50O1xuXHR9O1xuXG5cdGNvbnN0IHJlbmRlclBsYXllckRhdGEgPSAocGxheWVyLCBxdWVyeVN0cmluZywgaGlkZGVuID0gZmFsc2UpID0+IHtcblx0XHRjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5U3RyaW5nKTtcblx0XHRwbGF5ZXJDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cdFx0Y29uc3QgcGxheWVyQ29udGFpbmVyQ29sdW1ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHBsYXllckNvbnRhaW5lckNvbHVtbnMuY2xhc3NMaXN0LmFkZCgncGxheWVyLWNvbnRhaW5lci1jb2xzJyk7XG5cdFx0Y29uc3QgcGxheWVyQm9hcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHRcdHBsYXllckJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gYCR7cGxheWVyLm5hbWV9J3MgQm9hcmRgO1xuXHRcdGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZEVsZW1lbnQocGxheWVyLmJvYXJkLCBoaWRkZW4pO1xuXHRcdHBsYXllckNvbnRhaW5lckNvbHVtbnMuYXBwZW5kKHBsYXllckJvYXJkSGVhZGVyLCBwbGF5ZXJHYW1lYm9hcmQpO1xuXHRcdHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJDb250YWluZXJDb2x1bW5zKTtcblx0fTtcblxuXHRjb25zdCBkaXNwbGF5QW5ub3VuY2VtZW50ID0gKHN0cmluZykgPT4ge1xuXHRcdHRleHRBbm5vdW5jZXIudGV4dENvbnRlbnQgPSBzdHJpbmc7XG5cdH07XG5cblx0bGV0IHNoaXBPcmllbnRhdGlvblZlcnRpY2FsID0gdHJ1ZTtcblxuXHRjb25zdCBjb2xvckhvdmVyZWRDZWxsID0gKGUsIHNoaXBMZW5ndGgpID0+IHtcblx0XHRjb25zdCBob3ZlckNlbGxYID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCk7XG5cdFx0Y29uc3QgaG92ZXJDZWxsWSA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnkpO1xuXHRcdGlmIChzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NlbGwke2hvdmVyQ2VsbFh9LSR7aG92ZXJDZWxsWSArIGl9YCkuY2xhc3NMaXN0LmFkZCgnaG92ZXItc2hpcC1jZWxsJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NlbGwke2hvdmVyQ2VsbFggKyBpfS0ke2hvdmVyQ2VsbFl9YCkuY2xhc3NMaXN0LmFkZCgnaG92ZXItc2hpcC1jZWxsJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGRlY29sb3JIb3ZlcmVkQ2VsbCA9IChlLCBzaGlwTGVuZ3RoKSA9PiB7XG5cdFx0Y29uc3QgaG92ZXJDZWxsWCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LngpO1xuXHRcdGNvbnN0IGhvdmVyQ2VsbFkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcblx0XHRpZiAoc2hpcE9yaWVudGF0aW9uVmVydGljYWwpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjZWxsJHtob3ZlckNlbGxYfS0ke2hvdmVyQ2VsbFkgKyBpfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXNoaXAtY2VsbCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjZWxsJHtob3ZlckNlbGxYICsgaX0tJHtob3ZlckNlbGxZfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXNoaXAtY2VsbCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCByZW5kZXJQYXRyb2xCb2F0UGxhY2VyID0gKHBsYXllcikgPT4ge1xuXHRcdGRpc3BsYXlBbm5vdW5jZW1lbnQoJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIFBhdHJvbCBCb2F0LicpO1xuXHRcdGNvbnN0IHBsYXllckdhbWVib2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuZ2FtZS1jb250YWluZXIgZGl2LmdhbWVib2FyZCcpO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcblx0XHRcdGNvbG9ySG92ZXJlZENlbGwoZSwgMik7XG5cdFx0fSk7XG5cdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG5cdFx0XHRkZWNvbG9ySG92ZXJlZENlbGwoZSwgMik7XG5cdFx0fSk7XG5cdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRjb25zdCBjbGlja2VkQ2VsbFggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KTtcblx0XHRcdGNvbnN0IGNsaWNrZWRDZWxsWSA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnkpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cGxheWVyLmJvYXJkLnBsYWNlU2hpcChTaGlwKCdQYXRyb2wgQm9hdCcsIGNsaWNrZWRDZWxsWCwgY2xpY2tlZENlbGxZLCAyLCBzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCA/ICd2JyA6ICdoJykpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRkaXNwbGF5QW5ub3VuY2VtZW50KCdUaGUgUGF0cm9sIEJvYXQgY2Fubm90IGJlIHBsYWNlZCB0aGVyZSEgQ2hvb3NlIGEgZGlmZmVyZW50IGNlbGwhJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlbmRlckdhbWVib2FyZChwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LCBwbGF5ZXIuYm9hcmQpO1xuXHRcdFx0Ly8gUmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMgYnkgY2xvbmluZyB0aGUgZWxlbWVudCBhbmQgcmVwbGFjaW5nIHRoZSBvcmlnaW5hbCB3aXRoIHRoZSBjbG9uZVxuXHRcdFx0Y29uc3QgY2xvbmUgPSBwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQucmVwbGFjZVdpdGgoY2xvbmUpO1xuXHRcdFx0Y29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5nYW1lLWNvbnRhaW5lcicpO1xuXHRcdFx0Z2FtZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblx0XHRcdGNvbnN0IHAxQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRwMUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwMS1jb250YWluZXInKTtcblx0XHRcdGdhbWVDb250YWluZXIuYXBwZW5kKHAxQ29udGFpbmVyKTtcblx0XHRcdGNvbnN0IHAyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRwMkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwMi1jb250YWluZXInKTtcblx0XHRcdGdhbWVDb250YWluZXIuYXBwZW5kKHAxQ29udGFpbmVyLCBwMkNvbnRhaW5lcik7XG5cdFx0XHRzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCA9IHRydWU7XG5cdFx0XHRtYWluR2FtZUxvb3AuYmVnaW5HYW1lKCk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyU3VibWFyaW5lUGxhY2VyID0gKHBsYXllcikgPT4ge1xuXHRcdGRpc3BsYXlBbm5vdW5jZW1lbnQoJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIFN1Ym1hcmluZS4nKTtcblx0XHRjb25zdCBwbGF5ZXJHYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmdhbWUtY29udGFpbmVyIGRpdi5nYW1lYm9hcmQnKTtcblx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG5cdFx0XHRjb2xvckhvdmVyZWRDZWxsKGUsIDMpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuXHRcdFx0ZGVjb2xvckhvdmVyZWRDZWxsKGUsIDMpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgY2xpY2tlZENlbGxYID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCk7XG5cdFx0XHRjb25zdCBjbGlja2VkQ2VsbFkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHBsYXllci5ib2FyZC5wbGFjZVNoaXAoU2hpcCgnU3VibWFyaW5lJywgY2xpY2tlZENlbGxYLCBjbGlja2VkQ2VsbFksIDMsIHNoaXBPcmllbnRhdGlvblZlcnRpY2FsID8gJ3YnIDogJ2gnKSk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGRpc3BsYXlBbm5vdW5jZW1lbnQoJ1RoZSBTdWJtYXJpbmUgY2Fubm90IGJlIHBsYWNlZCB0aGVyZSEgQ2hvb3NlIGEgZGlmZmVyZW50IGNlbGwhJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlbmRlckdhbWVib2FyZChwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LCBwbGF5ZXIuYm9hcmQpO1xuXHRcdFx0Ly8gUmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMgYnkgY2xvbmluZyB0aGUgZWxlbWVudCBhbmQgcmVwbGFjaW5nIHRoZSB0aGUgb3JpZ2luYWwgd2l0aCB0aGUgY2xvbmVcblx0XHRcdGNvbnN0IGNsb25lID0gcGxheWVyR2FtZWJvYXJkRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LnJlcGxhY2VXaXRoKGNsb25lKTtcblx0XHRcdHJlbmRlclBhdHJvbEJvYXRQbGFjZXIocGxheWVyKTtcblx0XHRcdHNoaXBPcmllbnRhdGlvblZlcnRpY2FsID0gdHJ1ZTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCByZW5kZXJEZXN0cm95ZXJQbGFjZXIgPSAocGxheWVyKSA9PiB7XG5cdFx0ZGlzcGxheUFubm91bmNlbWVudCgnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgRGVzdHJveWVyLicpO1xuXHRcdGNvbnN0IHBsYXllckdhbWVib2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuZ2FtZS1jb250YWluZXIgZGl2LmdhbWVib2FyZCcpO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcblx0XHRcdGNvbG9ySG92ZXJlZENlbGwoZSwgMyk7XG5cdFx0fSk7XG5cdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG5cdFx0XHRkZWNvbG9ySG92ZXJlZENlbGwoZSwgMyk7XG5cdFx0fSk7XG5cdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRjb25zdCBjbGlja2VkQ2VsbFggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KTtcblx0XHRcdGNvbnN0IGNsaWNrZWRDZWxsWSA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnkpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cGxheWVyLmJvYXJkLnBsYWNlU2hpcChTaGlwKCdEZXN0cm95ZXInLCBjbGlja2VkQ2VsbFgsIGNsaWNrZWRDZWxsWSwgMywgc2hpcE9yaWVudGF0aW9uVmVydGljYWwgPyAndicgOiAnaCcpKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0ZGlzcGxheUFubm91bmNlbWVudCgnVGhlIERlc3Ryb3llciBjYW5ub3QgYmUgcGxhY2VkIHRoZXJlISBDaG9vc2UgYSBkaWZmZXJlbnQgY2VsbCEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmVuZGVyR2FtZWJvYXJkKHBsYXllckdhbWVib2FyZEVsZW1lbnQsIHBsYXllci5ib2FyZCk7XG5cdFx0XHQvLyBSZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycyBieSBjbG9uaW5nIHRoZSBlbGVtZW50IGFuZCByZXBsYWNpbmcgdGhlIHRoZSBvcmlnaW5hbCB3aXRoIHRoZSBjbG9uZVxuXHRcdFx0Y29uc3QgY2xvbmUgPSBwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQucmVwbGFjZVdpdGgoY2xvbmUpO1xuXHRcdFx0cmVuZGVyU3VibWFyaW5lUGxhY2VyKHBsYXllcik7XG5cdFx0XHRzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCA9IHRydWU7XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHJlbmRlckJhdHRsZXNoaXBQbGFjZXIgPSAocGxheWVyKSA9PiB7XG5cdFx0ZGlzcGxheUFubm91bmNlbWVudCgnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgQmF0dGxlc2hpcC4nKTtcblx0XHRjb25zdCBwbGF5ZXJHYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmdhbWUtY29udGFpbmVyIGRpdi5nYW1lYm9hcmQnKTtcblx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG5cdFx0XHRjb2xvckhvdmVyZWRDZWxsKGUsIDQpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuXHRcdFx0ZGVjb2xvckhvdmVyZWRDZWxsKGUsIDQpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgY2xpY2tlZENlbGxYID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCk7XG5cdFx0XHRjb25zdCBjbGlja2VkQ2VsbFkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHBsYXllci5ib2FyZC5wbGFjZVNoaXAoU2hpcCgnQmF0dGxlc2hpcCcsIGNsaWNrZWRDZWxsWCwgY2xpY2tlZENlbGxZLCA0LCBzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCA/ICd2JyA6ICdoJykpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRkaXNwbGF5QW5ub3VuY2VtZW50KCdUaGUgQmF0dGxlc2hpcCBjYW5ub3QgYmUgcGxhY2VkIHRoZXJlISBDaG9vc2UgYSBkaWZmZXJlbnQgY2VsbCEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmVuZGVyR2FtZWJvYXJkKHBsYXllckdhbWVib2FyZEVsZW1lbnQsIHBsYXllci5ib2FyZCk7XG5cdFx0XHQvLyBSZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycyBieSBjbG9uaW5nIHRoZSBlbGVtZW50IGFuZCByZXBsYWNpbmcgdGhlIHRoZSBvcmlnaW5hbCB3aXRoIHRoZSBjbG9uZVxuXHRcdFx0Y29uc3QgY2xvbmUgPSBwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQucmVwbGFjZVdpdGgoY2xvbmUpO1xuXHRcdFx0cmVuZGVyRGVzdHJveWVyUGxhY2VyKHBsYXllcik7XG5cdFx0XHRzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCA9IHRydWU7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyQ2FycmllclBsYWNlciA9IChwbGF5ZXIpID0+IHtcblx0XHRkaXNwbGF5QW5ub3VuY2VtZW50KCdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBDYXJyaWVyLicpO1xuXHRcdGNvbnN0IHBsYXllckdhbWVib2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuZ2FtZS1jb250YWluZXIgZGl2LmdhbWVib2FyZCcpO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcblx0XHRcdGNvbG9ySG92ZXJlZENlbGwoZSwgNSk7XG5cdFx0fSk7XG5cdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG5cdFx0XHRkZWNvbG9ySG92ZXJlZENlbGwoZSwgNSk7XG5cdFx0fSk7XG5cdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRjb25zdCBjbGlja2VkQ2VsbFggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KTtcblx0XHRcdGNvbnN0IGNsaWNrZWRDZWxsWSA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnkpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cGxheWVyLmJvYXJkLnBsYWNlU2hpcChTaGlwKCdDYXJyaWVyJywgY2xpY2tlZENlbGxYLCBjbGlja2VkQ2VsbFksIDUsIHNoaXBPcmllbnRhdGlvblZlcnRpY2FsID8gJ3YnIDogJ2gnKSk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGRpc3BsYXlBbm5vdW5jZW1lbnQoJ1RoZSBDYXJyaWVyIGNhbm5vdCBiZSBwbGFjZWQgdGhlcmUhIENob29zZSBhIGRpZmZlcmVudCBjZWxsIScpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRyZW5kZXJHYW1lYm9hcmQocGxheWVyR2FtZWJvYXJkRWxlbWVudCwgcGxheWVyLmJvYXJkKTtcblx0XHRcdC8vIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzIGJ5IGNsb25pbmcgdGhlIGVsZW1lbnQgYW5kIHJlcGxhY2luZyB0aGUgdGhlIG9yaWdpbmFsIHdpdGggdGhlIGNsb25lXG5cdFx0XHRjb25zdCBjbG9uZSA9IHBsYXllckdhbWVib2FyZEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZSk7XG5cdFx0XHRyZW5kZXJCYXR0bGVzaGlwUGxhY2VyKHBsYXllcik7XG5cdFx0XHRzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCA9IHRydWU7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyU2hpcFBsYWNlciA9IChwbGF5ZXIpID0+IHtcblx0XHRyZW5kZXJQbGF5ZXJEYXRhKHBsYXllciwgJ2Rpdi5nYW1lLWNvbnRhaW5lcicpO1xuXHRcdGNvbnN0IHBsYXllckJvYXJkSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wbGF5ZXItY29udGFpbmVyLWNvbHMgaDInKTtcblx0XHRjb25zdCBjaGFuZ2VPcmllbnRhdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGNoYW5nZU9yaWVudGF0aW9uQnRuLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1vcmllbnRhdGlvbicpO1xuXHRcdGNoYW5nZU9yaWVudGF0aW9uQnRuLnRleHRDb250ZW50ID0gJ0NoYW5nZSBPcmllbnRhdGlvbic7XG5cdFx0Y2hhbmdlT3JpZW50YXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0c2hpcE9yaWVudGF0aW9uVmVydGljYWwgPSAhc2hpcE9yaWVudGF0aW9uVmVydGljYWw7XG5cdFx0fSk7XG5cdFx0cGxheWVyQm9hcmRIZWFkZXIuYXBwZW5kQ2hpbGQoY2hhbmdlT3JpZW50YXRpb25CdG4pO1xuXHRcdHJlbmRlckNhcnJpZXJQbGFjZXIocGxheWVyKTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlbmRlckdhbWVib2FyZCxcblx0XHRyZW5kZXJQbGF5ZXJEYXRhLFxuXHRcdGRpc3BsYXlBbm5vdW5jZW1lbnQsXG5cdFx0cmVuZGVyU2hpcFBsYWNlcixcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTUhhbmRsZXI7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAuanMnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG5cdGNvbnN0IGJvYXJkQXJyID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKGUsIGlkeFkpID0+XG5cdFx0QXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKGUsIGlkeFgpID0+IFtpZHhYLCBpZHhZXSlcblx0KTtcblx0Y29uc3Qgc2hpcExpc3QgPSBbXTtcblx0Y29uc3QgY2hlY2tDb29yZGluYXRlcyA9ICh4LCB5LCBlcnJNc2cpID0+IHtcblx0XHRpZiAoIWJvYXJkQXJyW3ldKSB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnKTtcblx0XHRpZiAoIWJvYXJkQXJyW3ldW3hdKSB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnKTtcblx0fTtcblx0Y29uc3QgaXNTaGlwID0gKHgsIHkpID0+IHtcblx0XHRpZiAoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoYXQgaW5kZXggaXMgb3V0IG9mIGJvdW5kcyEnKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dHlwZW9mIGJvYXJkQXJyW3ldW3hdID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShib2FyZEFyclt5XVt4XSlcblx0XHQpO1xuXHR9O1xuXHRjb25zdCB2YWx1ZUF0ID0gKHgsIHkpID0+IHtcblx0XHRyZXR1cm4gYm9hcmRBcnJbeV1beF07XG5cdH07XG5cdGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwKSA9PiB7XG5cdFx0Y29uc3Qgc2hpcENvb3JkaW5hdGVzID0gc2hpcC5nZXRDb29yZGluYXRlcygpO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgYWxsIG9mIHRoZSBjb29yZGluYXRlcyB0aGUgc2hpcCB3aWxsIHRha2UgdXAgYXJlIGFsbCBub3QgdW5kZWZpbmVkXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNoZWNrQ29vcmRpbmF0ZXMoXG5cdFx0XHRcdHNoaXBDb29yZGluYXRlc1tpXVswXSxcblx0XHRcdFx0c2hpcENvb3JkaW5hdGVzW2ldWzFdLFxuXHRcdFx0XHQnVGhhdCBzaGlwIGNhbm5vdCBiZSBwbGFjZWQgYXQgdGhvc2UgY29vcmRpbmF0ZXMhJ1xuXHRcdFx0KTtcblx0XHRcdGlmIChpc1NoaXAoc2hpcENvb3JkaW5hdGVzW2ldWzBdLCBzaGlwQ29vcmRpbmF0ZXNbaV1bMV0pKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0J1RoYXQgc2hpcCBjYW5ub3QgYmUgcGxhY2VkIGF0IHRob3NlIGNvb3JkaW5hdGVzISdcblx0XHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBPbmNlIHRoZSBpbml0aWFsIGxvb3AgcGFzc2VzIHdpdGhvdXQgdGhyb3dpbmcgYW4gZXJyb3IsIHB1c2ggdGhlIHNoaXAgaW50byB0aGUgc2hpcExpc3Rcblx0XHQvLyBhbmQgcGxhY2UgYSByZWZlcmVuY2UgdG8gdGhlIHNoaXAgYXQgYWxsIG9mIHRoZSBjb29yZGluYXRlc1xuXHRcdHNoaXBMaXN0LnB1c2goc2hpcCk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGJvYXJkQXJyW3NoaXBDb29yZGluYXRlc1tpXVsxXV1bc2hpcENvb3JkaW5hdGVzW2ldWzBdXSA9IHNoaXA7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHBsYWNlU2hpcHNSYW5kb21seSA9IChzaGlwcykgPT4ge1xuXHRcdGxldCByYW5kb21YO1xuXHRcdGxldCByYW5kb21ZO1xuXHRcdGxldCByYW5kb21PcmllbnRhdGlvbjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRyYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdFx0XHRyYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdFx0XHRyYW5kb21PcmllbnRhdGlvbiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cGxhY2VTaGlwKFNoaXAoc2hpcHNbaV1bMF0sIHJhbmRvbVgsIHJhbmRvbVksIHNoaXBzW2ldWzFdLCByYW5kb21PcmllbnRhdGlvbiA/ICd2JyA6ICdoJykpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG5cdFx0Y2hlY2tDb29yZGluYXRlcyh4LCB5LCAnQ29vcmRpbmF0ZSBpcyBvdXQgb2YgYm91bmRzIScpO1xuXHRcdGlmIChib2FyZEFyclt5XVt4XSA9PT0gJ21pc3NlZCcgfHwgYm9hcmRBcnJbeV1beF0gPT09ICdoaXQnKSByZXR1cm47XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYm9hcmRBcnJbeV1beF0pKSBib2FyZEFyclt5XVt4XSA9ICdtaXNzZWQnO1xuXHRcdGVsc2UgaWYgKGlzU2hpcCh4LCB5KSkge1xuXHRcdFx0Ym9hcmRBcnJbeV1beF0uaGl0KCk7XG5cdFx0XHRib2FyZEFyclt5XVt4XSA9ICdoaXQnO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuXHRcdGlmIChzaGlwTGlzdC5sZW5ndGggPCAxKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaGVyZSBhcmUgbm8gc2hpcHMgb24gdGhpcyBnYW1lYm9hcmQhJyk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKCFzaGlwTGlzdFtpXS5pc1N1bmsoKSkgcmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0cmV0dXJuIHtcblx0XHR2YWx1ZUF0LFxuXHRcdHBsYWNlU2hpcCxcblx0XHRwbGFjZVNoaXBzUmFuZG9tbHksXG5cdFx0cmVjZWl2ZUF0dGFjayxcblx0XHRhbGxTaGlwc1N1bmssXG5cdFx0aXNTaGlwLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZC5qcyc7XG5cbmNvbnN0IFBsYXllciA9IChuYW1lLCBnYW1lYm9hcmQsIGNwdSA9IGZhbHNlKSA9PiB7XG5cdGNvbnN0IHBsYXllck5hbWUgPSBuYW1lO1xuXHRjb25zdCBib2FyZCA9IGdhbWVib2FyZDtcbiAgICBsZXQgb3Bwb25lbnQ7XG5cdGNvbnN0IGlzQ1BVID0gY3B1O1xuXHRsZXQgaXNNeVR1cm4gPSBmYWxzZTtcblx0Y29uc3Qgc3RhcnRUdXJuID0gKCkgPT4ge1xuXHRcdGlzTXlUdXJuID0gdHJ1ZTtcblx0fTtcblx0Y29uc3QgZW5kVHVybiA9ICgpID0+IHtcblx0XHRpc015VHVybiA9IGZhbHNlO1xuXHR9O1xuICAgIGNvbnN0IHNldE9wcG9uZW50ID0gKHBsYXllcikgPT4ge1xuICAgICAgICBvcHBvbmVudCA9IHBsYXllcjtcbiAgICB9XG5cdGNvbnN0IGNhbGN1bGF0ZURlY2lzaW9uID0gKCkgPT4ge1xuICAgICAgICBpZiAoIW9wcG9uZW50KSB0aHJvdyBuZXcgRXJyb3IoJ1NldCBvcHBvbmVudCBmaXJzdCEnKTtcblx0XHRjb25zdCBkZWNpc2lvbiA9IFtdO1xuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG5cdFx0XHRjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG5cdFx0XHRpZiAoXG5cdFx0XHRcdG9wcG9uZW50LmJvYXJkLnZhbHVlQXQoeCwgeSkgPT09ICdoaXQnIHx8XG5cdFx0XHRcdG9wcG9uZW50LmJvYXJkLnZhbHVlQXQoeCwgeSkgPT09ICdtaXNzZWQnXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVjaXNpb24ucHVzaCh4KTtcbiAgICAgICAgICAgICAgICBkZWNpc2lvbi5wdXNoKHkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNpc2lvbjtcbiAgICAgICAgICAgIH1cblx0XHR9XG5cdH07XG5cdHJldHVybiB7XG5cdFx0Z2V0IG5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gcGxheWVyTmFtZTtcblx0XHR9LFxuXHRcdGdldCBib2FyZCgpIHtcblx0XHRcdHJldHVybiBib2FyZDtcblx0XHR9LFxuICAgICAgICBnZXQgb3Bwb25lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gb3Bwb25lbnQ7XG4gICAgICAgIH0sXG5cdFx0Z2V0IGlzQ1BVKCkge1xuXHRcdFx0cmV0dXJuIGlzQ1BVO1xuXHRcdH0sXG5cdFx0Z2V0IGlzTXlUdXJuKCkge1xuXHRcdFx0cmV0dXJuIGlzTXlUdXJuO1xuXHRcdH0sXG5cdFx0c3RhcnRUdXJuLFxuXHRcdGVuZFR1cm4sXG4gICAgICAgIHNldE9wcG9uZW50LFxuXHRcdGNhbGN1bGF0ZURlY2lzaW9uLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgU2hpcCA9IChuYW1lLCB4LCB5LCBsZW4sIG9yaWVudGF0aW9uID0gJ3YnKSA9PiB7XG5cdGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBFcnJvcignU2hpcCBuYW1lIG11c3QgYmUgYSBzdHJpbmchJyk7XG5cdGlmICh4IDwgMClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHQnQSBwb3NpdGl2ZSBpbnRlZ2VyIG11c3QgYmUgcGFzc2VkIGludG8gdGhlIHggYXJndW1lbnQhJ1xuXHRcdCk7XG5cdGlmICh5IDwgMClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHQnQSBwb3NpdGl2ZSBpbnRlZ2VyIG11c3QgYmUgcGFzc2VkIGludG8gdGhlIHkgYXJndW1lbnQhJ1xuXHRcdCk7XG5cdGlmIChsZW4gPD0gMClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHQnQW4gaW50ZWdlciBncmVhdGVyIHRoYW4gMCBtdXN0IGJlIHBhc3NlZCBpbnRvIHRoZSBsZW4gYXJndW1lbnQhJ1xuXHRcdCk7XG5cdGlmIChvcmllbnRhdGlvbiAhPT0gJ3YnICYmIG9yaWVudGF0aW9uICE9PSAnaCcpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XCInaCcgb3IgJ3YnIG11c3QgYmUgcGFzc2VkIGludG8gdGhlIG9yaWVudGF0aW9uIGFyZ3VtZW50ISBMZWF2aW5nIGl0IGVtcHR5IHdpbGwgc2V0IGl0IHRvICd2JyBieSBkZWZhdWx0LlwiXG5cdFx0KTtcblx0Y29uc3Qgc2hpcE5hbWUgPSBuYW1lO1xuXHRjb25zdCBzaGlwTGVuZ3RoID0gbGVuO1xuXHRjb25zdCBjb29yZEFyciA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRpZiAob3JpZW50YXRpb24gPT09ICd2JykgY29vcmRBcnIucHVzaChbeCwgeSArIGldKTtcblx0XHRpZiAob3JpZW50YXRpb24gPT09ICdoJykgY29vcmRBcnIucHVzaChbeCArIGksIHldKTtcblx0fVxuXG5cdGxldCBoaXRzID0gMDtcblx0Y29uc3QgaGl0ID0gKCkgPT4ge1xuXHRcdGhpdHMrKztcblx0fTtcblx0Y29uc3QgaXNTdW5rID0gKCkgPT4ge1xuXHRcdHJldHVybiBoaXRzID09PSBzaGlwTGVuZ3RoO1xuXHR9O1xuXHRjb25zdCBnZXRDb29yZGluYXRlcyA9ICgpID0+IHtcblx0XHRyZXR1cm4gY29vcmRBcnI7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRnZXQgbmFtZSgpIHtcblx0XHRcdHJldHVybiBzaGlwTmFtZTtcblx0XHR9LFxuXHRcdGdldCBoaXRzKCkge1xuXHRcdFx0cmV0dXJuIGhpdHM7XG5cdFx0fSxcblx0XHRoaXQsXG5cdFx0aXNTdW5rLFxuXHRcdGdldENvb3JkaW5hdGVzLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwLmpzJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQuanMnO1xuaW1wb3J0IERPTUhhbmRsZXIgZnJvbSAnLi9ET01IYW5kbGVyLmpzJztcblxuY29uc3QgbWFpbkdhbWVMb29wID0gKCgpID0+IHtcblx0Y29uc3Qgc3dpdGNoVHVybnMgPSAoKSA9PiB7XG5cdFx0aWYgKHAxLmlzTXlUdXJuKSB7XG5cdFx0XHRwMS5lbmRUdXJuKCk7XG5cdFx0XHRwMi5zdGFydFR1cm4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cDEuc3RhcnRUdXJuKCk7XG5cdFx0XHRwMi5lbmRUdXJuKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGxldCBnYW1lRW5kID0gZmFsc2U7XG5cdGNvbnN0IHAxR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cdGNvbnN0IHAxID0gUGxheWVyKHByb21wdCgnRW50ZXIgeW91ciBuYW1lLicpLCBwMUdhbWVib2FyZCk7XG5cdERPTUhhbmRsZXIucmVuZGVyU2hpcFBsYWNlcihwMSk7XG5cdGNvbnN0IHAyR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cdGNvbnN0IHAyID0gUGxheWVyKCdDUFUnLCBwMkdhbWVib2FyZCk7XG5cdGNvbnN0IHNoaXBBcnIgPSBbXTtcblx0c2hpcEFyci5wdXNoKFsnQ2FycmllcicsIDVdKTtcblx0c2hpcEFyci5wdXNoKFsnQmF0dGxlU2hpcCcsIDRdKTtcblx0c2hpcEFyci5wdXNoKFsnRGVzdHJveWVyJywgM10pO1xuXHRzaGlwQXJyLnB1c2goWydTdWJtYXJpbmUnLCAzXSk7XG5cdHNoaXBBcnIucHVzaChbJ1BhdHJvbCBCb2F0JywgMl0pO1xuXHRwMkdhbWVib2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoc2hpcEFycik7XG5cdGNvbnN0IGJlZ2luR2FtZSA9ICgpID0+IHtcblx0XHRET01IYW5kbGVyLnJlbmRlclBsYXllckRhdGEocDEsICdkaXYucDEtY29udGFpbmVyJyk7XG5cdFx0RE9NSGFuZGxlci5yZW5kZXJQbGF5ZXJEYXRhKHAyLCAnZGl2LnAyLWNvbnRhaW5lcicsIHRydWUpO1xuXHRcdHAxLnNldE9wcG9uZW50KHAyKTtcblx0XHRwMi5zZXRPcHBvbmVudChwMSk7XG5cdFx0Y29uc3QgcDFHYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdCdkaXYucDEtY29udGFpbmVyIGRpdi5nYW1lYm9hcmQnXG5cdFx0KTtcblx0XHRjb25zdCBwMkdhbWVib2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0J2Rpdi5wMi1jb250YWluZXIgZGl2LmdhbWVib2FyZCdcblx0XHQpO1xuXHRcdHAxLnN0YXJ0VHVybigpO1xuXHRcdERPTUhhbmRsZXIuZGlzcGxheUFubm91bmNlbWVudChcblx0XHRcdGAke3AxLm5hbWV9IGdvZXMgZmlyc3QhIFBpY2sgYSBjb29yZGluYXRlIG9uICR7cDIubmFtZX0ncyBib2FyZCB0byBhdHRhY2shYFxuXHRcdCk7XG5cblx0XHRwMkdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0aWYgKCFwMS5pc015VHVybiB8fCBnYW1lRW5kKSByZXR1cm47XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHAyR2FtZWJvYXJkLnZhbHVlQXQoZS50YXJnZXQuZGF0YXNldC54LCBlLnRhcmdldC5kYXRhc2V0LnkpID09PVxuXHRcdFx0XHRcdCdtaXNzZWQnIHx8XG5cdFx0XHRcdHAyR2FtZWJvYXJkLnZhbHVlQXQoZS50YXJnZXQuZGF0YXNldC54LCBlLnRhcmdldC5kYXRhc2V0LnkpID09PVxuXHRcdFx0XHRcdCdoaXQnXG5cdFx0XHQpIHtcblx0XHRcdFx0RE9NSGFuZGxlci5kaXNwbGF5QW5ub3VuY2VtZW50KFxuXHRcdFx0XHRcdCdUaGF0IGNlbGwgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZC4gQ2hvb3NlIGFub3RoZXIgY2VsbC4nXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0cDJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhcblx0XHRcdFx0TnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCksXG5cdFx0XHRcdE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnkpXG5cdFx0XHQpO1xuXHRcdFx0RE9NSGFuZGxlci5yZW5kZXJHYW1lYm9hcmQocDJHYW1lYm9hcmRFbGVtZW50LCBwMkdhbWVib2FyZCwgdHJ1ZSk7XG5cdFx0XHRpZiAocDJHYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcblx0XHRcdFx0Z2FtZUVuZCA9IHRydWU7XG5cdFx0XHRcdERPTUhhbmRsZXIuZGlzcGxheUFubm91bmNlbWVudChgJHtwMS5uYW1lfSB3aW5zIWApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2hUdXJucygpO1xuXHRcdFx0Y29uc3QgcDJEZWNpc2lvbiA9IHAyLmNhbGN1bGF0ZURlY2lzaW9uKCk7XG5cdFx0XHRwMUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHAyRGVjaXNpb25bMF0sIHAyRGVjaXNpb25bMV0pO1xuXHRcdFx0aWYgKHAxR2FtZWJvYXJkLnZhbHVlQXQocDJEZWNpc2lvblswXSwgcDJEZWNpc2lvblsxXSkgPT09ICdoaXQnKVxuXHRcdFx0XHRET01IYW5kbGVyLmRpc3BsYXlBbm5vdW5jZW1lbnQoXG5cdFx0XHRcdFx0YCR7cDIubmFtZX0gaGl0IG9uZSBvZiAke3AxLm5hbWV9J3Mgc2hpcHMhIFlvdXIgdHVybiAke3AxLm5hbWV9IWBcblx0XHRcdFx0KTtcblx0XHRcdGlmIChwMUdhbWVib2FyZC52YWx1ZUF0KHAyRGVjaXNpb25bMF0sIHAyRGVjaXNpb25bMV0pID09PSAnbWlzc2VkJylcblx0XHRcdFx0RE9NSGFuZGxlci5kaXNwbGF5QW5ub3VuY2VtZW50KFxuXHRcdFx0XHRcdGAke3AyLm5hbWV9IG1pc3NlZCEgWW91ciB0dXJuICR7cDEubmFtZX0hYFxuXHRcdFx0XHQpO1xuXHRcdFx0RE9NSGFuZGxlci5yZW5kZXJHYW1lYm9hcmQocDFHYW1lYm9hcmRFbGVtZW50LCBwMUdhbWVib2FyZCwgZmFsc2UpO1xuXHRcdFx0aWYgKHAxR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG5cdFx0XHRcdGdhbWVFbmQgPSB0cnVlO1xuXHRcdFx0XHRET01IYW5kbGVyLmRpc3BsYXlBbm5vdW5jZW1lbnQoYCR7cDIubmFtZX0gd2lucyFgKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoVHVybnMoKTtcblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGJlZ2luR2FtZSxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5HYW1lTG9vcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9