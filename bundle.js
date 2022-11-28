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
			player.board.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Patrol Boat', clickedCellX, clickedCellY, 2, shipOrientationVertical ? 'v' : 'h'));
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
			player.board.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Submarine', clickedCellX, clickedCellY, 3, shipOrientationVertical ? 'v' : 'h'));
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
			player.board.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Destroyer', clickedCellX, clickedCellY, 3, shipOrientationVertical ? 'v' : 'h'));
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
			player.board.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Battleship', clickedCellX, clickedCellY, 4, shipOrientationVertical ? 'v' : 'h'));
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
			player.board.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Carrier', clickedCellX, clickedCellY, 5, shipOrientationVertical ? 'v' : 'h'));
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
		if (x < 0 || x > 9 || y < 0 || y > 9) throw new Error('That index is out of bounds!');
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
		if (shipList.length < 1) throw new Error('There are no ships on this gameboard!');
		for (let i = 0; i < shipList.length; i++) {
			if (!shipList[i].isSunk()) return false;
		}
		return true;
	}
	return {
		valueAt,
		placeShip,
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
	// p1Gameboard.placeShip(Ship('ship', 1, 1, 5, 'v'));
	// p1Gameboard.placeShip(Ship('ship', 4, 1, 4, 'h'));
	// p1Gameboard.placeShip(Ship('ship', 4, 4, 2, 'h'));
	// p1Gameboard.placeShip(Ship('ship', 8, 6, 3, 'v'));
	// p1Gameboard.placeShip(Ship('ship', 1, 7, 3, 'h'));
	// DOMHandler.renderPlayerData(p1, 'div.p1-container');
	// const p2Gameboard = Gameboard();
	// const p2 = Player('CPU', p2Gameboard, true);
	// p2Gameboard.placeShip(Ship('ship', 1, 1, 5, 'v'));
	// p2Gameboard.placeShip(Ship('ship', 4, 1, 4, 'h'));
	// p2Gameboard.placeShip(Ship('ship', 4, 4, 2, 'h'));
	// p2Gameboard.placeShip(Ship('ship', 8, 6, 3, 'v'));
	// p2Gameboard.placeShip(Ship('ship', 1, 7, 3, 'h'));
	// DOMHandler.renderPlayerData(p2, 'div.p2-container', true);
	// p1.setOpponent(p2);
	// p2.setOpponent(p1);
	// const p1GameboardElement = document.querySelector(
	// 	'div.p1-container div.gameboard'
	// );
	// const p2GameboardElement = document.querySelector(
	// 	'div.p2-container div.gameboard'
	// );
	// p1.startTurn();
	// DOMHandler.displayAnnouncement(
	// 	`${p1.name} goes first! Pick a coordinate on ${p2.name}'s board to attack!`
	// );

	// p2GameboardElement.addEventListener('click', (e) => {
	// 	if (!p1.isMyTurn || gameEnd) return;
	// 	if (
	// 		p2Gameboard.valueAt(e.target.dataset.x, e.target.dataset.y) ===
	// 			'missed' ||
	// 		p2Gameboard.valueAt(e.target.dataset.x, e.target.dataset.y) ===
	// 			'hit'
	// 	) {
	// 		DOMHandler.displayAnnouncement(
	// 			'That cell has already been attacked. Choose another cell.'
	// 		);
	// 		return;
	// 	}

	// 	p2Gameboard.receiveAttack(
	// 		Number(e.target.dataset.x),
	// 		Number(e.target.dataset.y)
	// 	);
	// 	DOMHandler.renderGameboard(p2GameboardElement, p2Gameboard, true);
	// 	if (p2Gameboard.allShipsSunk()) {
	// 		gameEnd = true;
	// 		DOMHandler.displayAnnouncement(`${p1.name} wins!`);
	// 		return;
	// 	}
	// 	switchTurns();
	// 	const p2Decision = p2.calculateDecision();
	// 	p1Gameboard.receiveAttack(p2Decision[0], p2Decision[1]);
	// 	if (p1Gameboard.valueAt(p2Decision[0], p2Decision[1]) === 'hit')
	// 		DOMHandler.displayAnnouncement(
	// 			`${p2.name} hit one of ${p1.name}'s ships! Your turn ${p1.name}!`
	// 		);
	// 	if (p1Gameboard.valueAt(p2Decision[0], p2Decision[1]) === 'missed')
	// 		DOMHandler.displayAnnouncement(
	// 			`${p2.name} missed! Your turn ${p1.name}!`
	// 		);
	// 	DOMHandler.renderGameboard(p1GameboardElement, p1Gameboard, false);
	// 	if (p1Gameboard.allShipsSunk()) {
	// 		gameEnd = true;
	// 		DOMHandler.displayAnnouncement(`${p2.name} wins!`);
	// 		return;
	// 	}
	// 	switchTurns();
	// });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainGameLoop);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsK0JBQStCLEdBQUcsT0FBTyw2QkFBNkIsR0FBRyxpQkFBaUIsZ0JBQWdCLG9CQUFvQixtQkFBbUIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGtDQUFrQyxHQUFHLHFCQUFxQixnQkFBZ0IsaUJBQWlCLEdBQUcsd0JBQXdCLGtCQUFrQixrQkFBa0Isb0JBQW9CLDhCQUE4QixnQkFBZ0IsR0FBRywrRUFBK0Usb0JBQW9CLGlCQUFpQixHQUFHLHlDQUF5QyxnQ0FBZ0MsR0FBRyx5Q0FBeUMsa0NBQWtDLEdBQUcsa0RBQWtELG9CQUFvQiw2QkFBNkIsMEJBQTBCLGlCQUFpQixHQUFHLHFEQUFxRCx5QkFBeUIsR0FBRywrRUFBK0UseUJBQXlCLG9CQUFvQixlQUFlLEdBQUcsZ0JBQWdCLG9CQUFvQixzQkFBc0Isa0JBQWtCLG1CQUFtQiw4QkFBOEIsNkNBQTZDLEdBQUcsNEJBQTRCLGlCQUFpQixrQkFBa0IsMkNBQTJDLDhCQUE4QixLQUFLLDRCQUE0QiwwQ0FBMEMsR0FBRywyQkFBMkIsOENBQThDLEdBQUcsaUNBQWlDLCtDQUErQyxHQUFHLDZCQUE2Qix1Q0FBdUMsR0FBRywwQkFBMEIseUNBQXlDLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxpQ0FBaUMsK0JBQStCLEdBQUcsT0FBTyw2QkFBNkIsR0FBRyxpQkFBaUIsZ0JBQWdCLG9CQUFvQixtQkFBbUIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGtDQUFrQyxHQUFHLHFCQUFxQixnQkFBZ0IsaUJBQWlCLEdBQUcsd0JBQXdCLGtCQUFrQixrQkFBa0Isb0JBQW9CLDhCQUE4QixnQkFBZ0IsR0FBRywrRUFBK0Usb0JBQW9CLGlCQUFpQixHQUFHLHlDQUF5QyxnQ0FBZ0MsR0FBRyx5Q0FBeUMsa0NBQWtDLEdBQUcsa0RBQWtELG9CQUFvQiw2QkFBNkIsMEJBQTBCLGlCQUFpQixHQUFHLHFEQUFxRCx5QkFBeUIsR0FBRywrRUFBK0UseUJBQXlCLG9CQUFvQixlQUFlLEdBQUcsZ0JBQWdCLG9CQUFvQixzQkFBc0Isa0JBQWtCLG1CQUFtQiw4QkFBOEIsNkNBQTZDLEdBQUcsNEJBQTRCLGlCQUFpQixrQkFBa0IsMkNBQTJDLDhCQUE4QixLQUFLLDRCQUE0QiwwQ0FBMEMsR0FBRywyQkFBMkIsOENBQThDLEdBQUcsaUNBQWlDLCtDQUErQyxHQUFHLDZCQUE2Qix1Q0FBdUMsR0FBRywwQkFBMEIseUNBQXlDLEdBQUcsbUJBQW1CO0FBQ2oySTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDUTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEVBQUUsR0FBRyxFQUFFO0FBQzFDLG1DQUFtQyxFQUFFO0FBQ3JDLG1DQUFtQyxFQUFFO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DLG1DQUFtQyxXQUFXLEdBQUcsZUFBZTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DLG1DQUFtQyxlQUFlLEdBQUcsV0FBVztBQUNoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DLG1DQUFtQyxXQUFXLEdBQUcsZUFBZTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DLG1DQUFtQyxlQUFlLEdBQUcsV0FBVztBQUNoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0RBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0RBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdk9HOztBQUU3QjtBQUNBLCtCQUErQixZQUFZO0FBQzNDLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEVjOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxRHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUNuRHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaUM7QUFDSjtBQUNVO0FBQ0U7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5REFBUzs7QUFFOUIsWUFBWSxzREFBTTtBQUNsQixDQUFDLHVFQUEyQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFNBQVMsbUNBQW1DLFFBQVE7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsU0FBUyxhQUFhLFFBQVEsc0JBQXNCLFFBQVE7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsVUFBVSxTQUFTLG9CQUFvQixRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQsaUVBQWUsWUFBWSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY2VsbC1ib3JkZXItd2lkdGg6IDJweDtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMHB4IDI1cHggMjVweCAyNXB4O1xcbn1cXG5cXG4udGV4dC1hbm5vdW5jZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wMS1jb250YWluZXIsXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wMi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnAxLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucDItY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnBsYXllci1jb250YWluZXItY29scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucGxheWVyLWNvbnRhaW5lci1jb2xzIGgyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnBsYXllci1jb250YWluZXItY29scyBoMiBidXR0b24uY2hhbmdlLW9yaWVudGF0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTE0MXB4O1xcbiAgICB0b3A6IDNweDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNSwgMjA1LCAyMDUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5ib2FyZC1jZWxsIHtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDUsIDIwNSwgMjA1KTtcXG4gICAgLyogYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG59XFxuXFxuLmdhbWVib2FyZCAuZW1wdHktY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgMTc4LCAyNTUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5zaGlwLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwNiwgMCUsIDUwJSwgMSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmhvdmVyLXNoaXAtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjA2LCAyOCUsIDY1JSwgMSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLm1pc3NlZC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDc5JSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmhpdC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMTAwJSwgNjYlKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tY2VsbC1ib3JkZXItd2lkdGg6IDJweDtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMHB4IDI1cHggMjVweCAyNXB4O1xcbn1cXG5cXG4udGV4dC1hbm5vdW5jZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wMS1jb250YWluZXIsXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wMi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnAxLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucDItY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnBsYXllci1jb250YWluZXItY29scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucGxheWVyLWNvbnRhaW5lci1jb2xzIGgyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnBsYXllci1jb250YWluZXItY29scyBoMiBidXR0b24uY2hhbmdlLW9yaWVudGF0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTE0MXB4O1xcbiAgICB0b3A6IDNweDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNSwgMjA1LCAyMDUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5ib2FyZC1jZWxsIHtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDUsIDIwNSwgMjA1KTtcXG4gICAgLyogYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG59XFxuXFxuLmdhbWVib2FyZCAuZW1wdHktY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgMTc4LCAyNTUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5zaGlwLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwNiwgMCUsIDUwJSwgMSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmhvdmVyLXNoaXAtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjA2LCAyOCUsIDY1JSwgMSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLm1pc3NlZC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDc5JSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmhpdC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMTAwJSwgNjYlKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAuanMnO1xuXG5jb25zdCBET01IYW5kbGVyID0gKCgpID0+IHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwISc7XG5cdGNvbnN0IHRleHRBbm5vdW5jZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHR0ZXh0QW5ub3VuY2VyLmNsYXNzTGlzdC5hZGQoJ3RleHQtYW5ub3VuY2VyJyk7XG5cdGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Z2FtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lLWNvbnRhaW5lcicpO1xuXHQvLyBjb25zdCBwMUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHQvLyBwMUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwMS1jb250YWluZXInKTtcblx0Ly8gZ2FtZUNvbnRhaW5lci5hcHBlbmQocDFDb250YWluZXIpO1xuXHQvLyBjb25zdCBwMkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHQvLyBwMkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwMi1jb250YWluZXInKTtcblx0Ly8gZ2FtZUNvbnRhaW5lci5hcHBlbmQocDFDb250YWluZXIsIHAyQ29udGFpbmVyKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQodGl0bGUsIHRleHRBbm5vdW5jZXIsIGdhbWVDb250YWluZXIpO1xuXG5cdGNvbnN0IHJlbmRlckdhbWVib2FyZCA9IChnYW1lYm9hcmRFbGVtZW50LCBnYW1lYm9hcmQsIGhpZGRlbiA9IGZhbHNlKSA9PiB7XG5cdFx0Z2FtZWJvYXJkRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblx0XHRmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcblx0XHRcdGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuXHRcdFx0XHRsZXQgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNlbGwnKTtcblx0XHRcdFx0aWYgKGdhbWVib2FyZC5pc1NoaXAoeCwgeSkpIGhpZGRlbiA/IHRpbGUuY2xhc3NMaXN0LmFkZCgnZW1wdHktY2VsbCcpIDogdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwLWNlbGwnKTtcblx0XHRcdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShnYW1lYm9hcmQudmFsdWVBdCh4LCB5KSkpXG5cdFx0XHRcdFx0dGlsZS5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJyk7XG5cdFx0XHRcdGVsc2UgaWYgKGdhbWVib2FyZC52YWx1ZUF0KHgsIHkpID09PSAnbWlzc2VkJylcblx0XHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1jZWxsJyk7XG5cdFx0XHRcdGVsc2UgaWYgKGdhbWVib2FyZC52YWx1ZUF0KHgsIHkpID09PSAnaGl0Jylcblx0XHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoJ2hpdC1jZWxsJyk7XG5cdFx0XHRcdHRpbGUuc2V0QXR0cmlidXRlKCdpZCcsIGBjZWxsJHt4fS0ke3l9YCk7XG5cdFx0XHRcdHRpbGUuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBgJHt4fWApO1xuXHRcdFx0XHR0aWxlLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgYCR7eX1gKTtcblx0XHRcdFx0Z2FtZWJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZCh0aWxlKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgY3JlYXRlR2FtZWJvYXJkRWxlbWVudCA9IChnYW1lYm9hcmQsIGhpZGRlbiA9IGZhbHNlKSA9PiB7XG5cdFx0Y29uc3QgZ2FtZWJvYXJkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGdhbWVib2FyZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XG5cdFx0cmVuZGVyR2FtZWJvYXJkKGdhbWVib2FyZEVsZW1lbnQsIGdhbWVib2FyZCwgaGlkZGVuKTtcblx0XHRyZXR1cm4gZ2FtZWJvYXJkRWxlbWVudDtcblx0fTtcblxuXHRjb25zdCByZW5kZXJQbGF5ZXJEYXRhID0gKHBsYXllciwgcXVlcnlTdHJpbmcsIGhpZGRlbiA9IGZhbHNlKSA9PiB7XG5cdFx0Y29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeVN0cmluZyk7XG5cdFx0cGxheWVyQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXHRcdGNvbnN0IHBsYXllckNvbnRhaW5lckNvbHVtbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRwbGF5ZXJDb250YWluZXJDb2x1bW5zLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1jb250YWluZXItY29scycpO1xuXHRcdGNvbnN0IHBsYXllckJvYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0XHRwbGF5ZXJCb2FyZEhlYWRlci50ZXh0Q29udGVudCA9IGAke3BsYXllci5uYW1lfSdzIEJvYXJkYDtcblx0XHRjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmRFbGVtZW50KHBsYXllci5ib2FyZCwgaGlkZGVuKTtcblx0XHRwbGF5ZXJDb250YWluZXJDb2x1bW5zLmFwcGVuZChwbGF5ZXJCb2FyZEhlYWRlciwgcGxheWVyR2FtZWJvYXJkKTtcblx0XHRwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyQ29sdW1ucyk7XG5cdH07XG5cblx0Y29uc3QgZGlzcGxheUFubm91bmNlbWVudCA9IChzdHJpbmcpID0+IHtcblx0XHR0ZXh0QW5ub3VuY2VyLnRleHRDb250ZW50ID0gc3RyaW5nO1xuXHR9O1xuXG5cdGxldCBzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCA9IHRydWU7XG5cblx0Y29uc3QgY29sb3JIb3ZlcmVkQ2VsbCA9IChlLCBzaGlwTGVuZ3RoKSA9PiB7XG5cdFx0Y29uc3QgaG92ZXJDZWxsWCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LngpO1xuXHRcdGNvbnN0IGhvdmVyQ2VsbFkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcblx0XHRpZiAoc2hpcE9yaWVudGF0aW9uVmVydGljYWwpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjZWxsJHtob3ZlckNlbGxYfS0ke2hvdmVyQ2VsbFkgKyBpfWApLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXNoaXAtY2VsbCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjZWxsJHtob3ZlckNlbGxYICsgaX0tJHtob3ZlckNlbGxZfWApLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXNoaXAtY2VsbCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBkZWNvbG9ySG92ZXJlZENlbGwgPSAoZSwgc2hpcExlbmd0aCkgPT4ge1xuXHRcdGNvbnN0IGhvdmVyQ2VsbFggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KTtcblx0XHRjb25zdCBob3ZlckNlbGxZID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueSk7XG5cdFx0aWYgKHNoaXBPcmllbnRhdGlvblZlcnRpY2FsKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2VsbCR7aG92ZXJDZWxsWH0tJHtob3ZlckNlbGxZICsgaX1gKS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1zaGlwLWNlbGwnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2VsbCR7aG92ZXJDZWxsWCArIGl9LSR7aG92ZXJDZWxsWX1gKS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1zaGlwLWNlbGwnKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyUGF0cm9sQm9hdFBsYWNlciA9IChwbGF5ZXIpID0+IHtcblx0XHRkaXNwbGF5QW5ub3VuY2VtZW50KCdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBQYXRyb2wgQm9hdC4nKTtcblx0XHRjb25zdCBwbGF5ZXJHYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmdhbWUtY29udGFpbmVyIGRpdi5nYW1lYm9hcmQnKTtcblx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG5cdFx0XHRjb2xvckhvdmVyZWRDZWxsKGUsIDIpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuXHRcdFx0ZGVjb2xvckhvdmVyZWRDZWxsKGUsIDIpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgY2xpY2tlZENlbGxYID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCk7XG5cdFx0XHRjb25zdCBjbGlja2VkQ2VsbFkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcblx0XHRcdHBsYXllci5ib2FyZC5wbGFjZVNoaXAoU2hpcCgnUGF0cm9sIEJvYXQnLCBjbGlja2VkQ2VsbFgsIGNsaWNrZWRDZWxsWSwgMiwgc2hpcE9yaWVudGF0aW9uVmVydGljYWwgPyAndicgOiAnaCcpKTtcblx0XHRcdHJlbmRlckdhbWVib2FyZChwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LCBwbGF5ZXIuYm9hcmQpO1xuXHRcdFx0Ly8gUmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMgYnkgY2xvbmluZyB0aGUgZWxlbWVudCBhbmQgcmVwbGFjaW5nIHRoZSBvcmlnaW5hbCB3aXRoIHRoZSBjbG9uZVxuXHRcdFx0Y29uc3QgY2xvbmUgPSBwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQucmVwbGFjZVdpdGgoY2xvbmUpO1xuXHRcdFx0Y29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5nYW1lLWNvbnRhaW5lcicpO1xuXHRcdFx0Z2FtZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblx0XHRcdGNvbnN0IHAxQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRwMUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwMS1jb250YWluZXInKTtcblx0XHRcdGdhbWVDb250YWluZXIuYXBwZW5kKHAxQ29udGFpbmVyKTtcblx0XHRcdGNvbnN0IHAyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRwMkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwMi1jb250YWluZXInKTtcblx0XHRcdGdhbWVDb250YWluZXIuYXBwZW5kKHAxQ29udGFpbmVyLCBwMkNvbnRhaW5lcik7XG5cdFx0XHRzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCA9IHRydWU7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyU3VibWFyaW5lUGxhY2VyID0gKHBsYXllcikgPT4ge1xuXHRcdGRpc3BsYXlBbm5vdW5jZW1lbnQoJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIFN1Ym1hcmluZS4nKTtcblx0XHRjb25zdCBwbGF5ZXJHYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmdhbWUtY29udGFpbmVyIGRpdi5nYW1lYm9hcmQnKTtcblx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG5cdFx0XHRjb2xvckhvdmVyZWRDZWxsKGUsIDMpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuXHRcdFx0ZGVjb2xvckhvdmVyZWRDZWxsKGUsIDMpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgY2xpY2tlZENlbGxYID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCk7XG5cdFx0XHRjb25zdCBjbGlja2VkQ2VsbFkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcblx0XHRcdHBsYXllci5ib2FyZC5wbGFjZVNoaXAoU2hpcCgnU3VibWFyaW5lJywgY2xpY2tlZENlbGxYLCBjbGlja2VkQ2VsbFksIDMsIHNoaXBPcmllbnRhdGlvblZlcnRpY2FsID8gJ3YnIDogJ2gnKSk7XG5cdFx0XHRyZW5kZXJHYW1lYm9hcmQocGxheWVyR2FtZWJvYXJkRWxlbWVudCwgcGxheWVyLmJvYXJkKTtcblx0XHRcdC8vIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzIGJ5IGNsb25pbmcgdGhlIGVsZW1lbnQgYW5kIHJlcGxhY2luZyB0aGUgdGhlIG9yaWdpbmFsIHdpdGggdGhlIGNsb25lXG5cdFx0XHRjb25zdCBjbG9uZSA9IHBsYXllckdhbWVib2FyZEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZSk7XG5cdFx0XHRyZW5kZXJQYXRyb2xCb2F0UGxhY2VyKHBsYXllcik7XG5cdFx0XHRzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCA9IHRydWU7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyRGVzdHJveWVyUGxhY2VyID0gKHBsYXllcikgPT4ge1xuXHRcdGRpc3BsYXlBbm5vdW5jZW1lbnQoJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIERlc3Ryb3llci4nKTtcblx0XHRjb25zdCBwbGF5ZXJHYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmdhbWUtY29udGFpbmVyIGRpdi5nYW1lYm9hcmQnKTtcblx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG5cdFx0XHRjb2xvckhvdmVyZWRDZWxsKGUsIDMpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuXHRcdFx0ZGVjb2xvckhvdmVyZWRDZWxsKGUsIDMpO1xuXHRcdH0pO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgY2xpY2tlZENlbGxYID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCk7XG5cdFx0XHRjb25zdCBjbGlja2VkQ2VsbFkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcblx0XHRcdHBsYXllci5ib2FyZC5wbGFjZVNoaXAoU2hpcCgnRGVzdHJveWVyJywgY2xpY2tlZENlbGxYLCBjbGlja2VkQ2VsbFksIDMsIHNoaXBPcmllbnRhdGlvblZlcnRpY2FsID8gJ3YnIDogJ2gnKSk7XG5cdFx0XHRyZW5kZXJHYW1lYm9hcmQocGxheWVyR2FtZWJvYXJkRWxlbWVudCwgcGxheWVyLmJvYXJkKTtcblx0XHRcdC8vIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzIGJ5IGNsb25pbmcgdGhlIGVsZW1lbnQgYW5kIHJlcGxhY2luZyB0aGUgdGhlIG9yaWdpbmFsIHdpdGggdGhlIGNsb25lXG5cdFx0XHRjb25zdCBjbG9uZSA9IHBsYXllckdhbWVib2FyZEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZSk7XG5cdFx0XHRyZW5kZXJTdWJtYXJpbmVQbGFjZXIocGxheWVyKTtcblx0XHRcdHNoaXBPcmllbnRhdGlvblZlcnRpY2FsID0gdHJ1ZTtcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgcmVuZGVyQmF0dGxlc2hpcFBsYWNlciA9IChwbGF5ZXIpID0+IHtcblx0XHRkaXNwbGF5QW5ub3VuY2VtZW50KCdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBCYXR0bGVzaGlwLicpO1xuXHRcdGNvbnN0IHBsYXllckdhbWVib2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuZ2FtZS1jb250YWluZXIgZGl2LmdhbWVib2FyZCcpO1xuXHRcdHBsYXllckdhbWVib2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcblx0XHRcdGNvbG9ySG92ZXJlZENlbGwoZSwgNCk7XG5cdFx0fSk7XG5cdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG5cdFx0XHRkZWNvbG9ySG92ZXJlZENlbGwoZSwgNCk7XG5cdFx0fSk7XG5cdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRjb25zdCBjbGlja2VkQ2VsbFggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KTtcblx0XHRcdGNvbnN0IGNsaWNrZWRDZWxsWSA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnkpO1xuXHRcdFx0cGxheWVyLmJvYXJkLnBsYWNlU2hpcChTaGlwKCdCYXR0bGVzaGlwJywgY2xpY2tlZENlbGxYLCBjbGlja2VkQ2VsbFksIDQsIHNoaXBPcmllbnRhdGlvblZlcnRpY2FsID8gJ3YnIDogJ2gnKSk7XG5cdFx0XHRyZW5kZXJHYW1lYm9hcmQocGxheWVyR2FtZWJvYXJkRWxlbWVudCwgcGxheWVyLmJvYXJkKTtcblx0XHRcdC8vIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzIGJ5IGNsb25pbmcgdGhlIGVsZW1lbnQgYW5kIHJlcGxhY2luZyB0aGUgdGhlIG9yaWdpbmFsIHdpdGggdGhlIGNsb25lXG5cdFx0XHRjb25zdCBjbG9uZSA9IHBsYXllckdhbWVib2FyZEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZSk7XG5cdFx0XHRyZW5kZXJEZXN0cm95ZXJQbGFjZXIocGxheWVyKTtcblx0XHRcdHNoaXBPcmllbnRhdGlvblZlcnRpY2FsID0gdHJ1ZTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCByZW5kZXJDYXJyaWVyUGxhY2VyID0gKHBsYXllcikgPT4ge1xuXHRcdGRpc3BsYXlBbm5vdW5jZW1lbnQoJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIENhcnJpZXIuJyk7XG5cdFx0Y29uc3QgcGxheWVyR2FtZWJvYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5nYW1lLWNvbnRhaW5lciBkaXYuZ2FtZWJvYXJkJyk7XG5cdFx0cGxheWVyR2FtZWJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuXHRcdFx0Y29sb3JIb3ZlcmVkQ2VsbChlLCA1KTtcblx0XHR9KTtcblx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcblx0XHRcdGRlY29sb3JIb3ZlcmVkQ2VsbChlLCA1KTtcblx0XHR9KTtcblx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdGNvbnN0IGNsaWNrZWRDZWxsWCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LngpO1xuXHRcdFx0Y29uc3QgY2xpY2tlZENlbGxZID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueSk7XG5cdFx0XHRwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKFNoaXAoJ0NhcnJpZXInLCBjbGlja2VkQ2VsbFgsIGNsaWNrZWRDZWxsWSwgNSwgc2hpcE9yaWVudGF0aW9uVmVydGljYWwgPyAndicgOiAnaCcpKTtcblx0XHRcdHJlbmRlckdhbWVib2FyZChwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LCBwbGF5ZXIuYm9hcmQpO1xuXHRcdFx0Ly8gUmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMgYnkgY2xvbmluZyB0aGUgZWxlbWVudCBhbmQgcmVwbGFjaW5nIHRoZSB0aGUgb3JpZ2luYWwgd2l0aCB0aGUgY2xvbmVcblx0XHRcdGNvbnN0IGNsb25lID0gcGxheWVyR2FtZWJvYXJkRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0XHRwbGF5ZXJHYW1lYm9hcmRFbGVtZW50LnJlcGxhY2VXaXRoKGNsb25lKTtcblx0XHRcdHJlbmRlckJhdHRsZXNoaXBQbGFjZXIocGxheWVyKTtcblx0XHRcdHNoaXBPcmllbnRhdGlvblZlcnRpY2FsID0gdHJ1ZTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCByZW5kZXJTaGlwUGxhY2VyID0gKHBsYXllcikgPT4ge1xuXHRcdHJlbmRlclBsYXllckRhdGEocGxheWVyLCAnZGl2LmdhbWUtY29udGFpbmVyJyk7XG5cdFx0Y29uc3QgcGxheWVyQm9hcmRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuZ2FtZS1jb250YWluZXIgZGl2LnBsYXllci1jb250YWluZXItY29scyBoMicpO1xuXHRcdGNvbnN0IGNoYW5nZU9yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0Y2hhbmdlT3JpZW50YXRpb25CdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlLW9yaWVudGF0aW9uJyk7XG5cdFx0Y2hhbmdlT3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQgPSAnQ2hhbmdlIE9yaWVudGF0aW9uJztcblx0XHRjaGFuZ2VPcmllbnRhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRzaGlwT3JpZW50YXRpb25WZXJ0aWNhbCA9ICFzaGlwT3JpZW50YXRpb25WZXJ0aWNhbDtcblx0XHR9KTtcblx0XHRwbGF5ZXJCb2FyZEhlYWRlci5hcHBlbmRDaGlsZChjaGFuZ2VPcmllbnRhdGlvbkJ0bik7XG5cdFx0cmVuZGVyQ2FycmllclBsYWNlcihwbGF5ZXIpO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0cmVuZGVyR2FtZWJvYXJkLFxuXHRcdHJlbmRlclBsYXllckRhdGEsXG5cdFx0ZGlzcGxheUFubm91bmNlbWVudCxcblx0XHRyZW5kZXJTaGlwUGxhY2VyLFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NSGFuZGxlcjtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcblx0Y29uc3QgYm9hcmRBcnIgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoZSwgaWR4WSkgPT5cblx0XHRBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoZSwgaWR4WCkgPT4gW2lkeFgsIGlkeFldKVxuXHQpO1xuICAgIGNvbnN0IHNoaXBMaXN0ID0gW107XG5cdGNvbnN0IGNoZWNrQ29vcmRpbmF0ZXMgPSAoeCwgeSwgZXJyTXNnKSA9PiB7XG5cdFx0aWYgKCFib2FyZEFyclt5XSkgdGhyb3cgbmV3IEVycm9yKGVyck1zZyk7XG5cdFx0aWYgKCFib2FyZEFyclt5XVt4XSkgdGhyb3cgbmV3IEVycm9yKGVyck1zZyk7XG5cdH07XG5cdGNvbnN0IGlzU2hpcCA9ICh4LCB5KSA9PiB7XG5cdFx0aWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSB0aHJvdyBuZXcgRXJyb3IoJ1RoYXQgaW5kZXggaXMgb3V0IG9mIGJvdW5kcyEnKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dHlwZW9mIGJvYXJkQXJyW3ldW3hdID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShib2FyZEFyclt5XVt4XSlcblx0XHQpO1xuXHR9O1xuXHRjb25zdCB2YWx1ZUF0ID0gKHgsIHkpID0+IHtcblx0XHRyZXR1cm4gYm9hcmRBcnJbeV1beF07XG5cdH07XG5cdGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwKSA9PiB7XG5cdFx0Y29uc3Qgc2hpcENvb3JkaW5hdGVzID0gc2hpcC5nZXRDb29yZGluYXRlcygpO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgYWxsIG9mIHRoZSBjb29yZGluYXRlcyB0aGUgc2hpcCB3aWxsIHRha2UgdXAgYXJlIGFsbCBub3QgdW5kZWZpbmVkXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNoZWNrQ29vcmRpbmF0ZXMoXG5cdFx0XHRcdHNoaXBDb29yZGluYXRlc1tpXVswXSxcblx0XHRcdFx0c2hpcENvb3JkaW5hdGVzW2ldWzFdLFxuXHRcdFx0XHQnVGhhdCBzaGlwIGNhbm5vdCBiZSBwbGFjZWQgYXQgdGhvc2UgY29vcmRpbmF0ZXMhJ1xuXHRcdFx0KTtcblx0XHRcdGlmIChpc1NoaXAoc2hpcENvb3JkaW5hdGVzW2ldWzBdLCBzaGlwQ29vcmRpbmF0ZXNbaV1bMV0pKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0J1RoYXQgc2hpcCBjYW5ub3QgYmUgcGxhY2VkIGF0IHRob3NlIGNvb3JkaW5hdGVzISdcblx0XHRcdFx0KTtcblx0XHR9XG4gICAgICAgIFxuXHRcdC8vIE9uY2UgdGhlIGluaXRpYWwgbG9vcCBwYXNzZXMgd2l0aG91dCB0aHJvd2luZyBhbiBlcnJvciwgcHVzaCB0aGUgc2hpcCBpbnRvIHRoZSBzaGlwTGlzdFxuICAgICAgICAvLyBhbmQgcGxhY2UgYSByZWZlcmVuY2UgdG8gdGhlIHNoaXAgYXQgYWxsIG9mIHRoZSBjb29yZGluYXRlc1xuICAgICAgICBzaGlwTGlzdC5wdXNoKHNoaXApO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRib2FyZEFycltzaGlwQ29vcmRpbmF0ZXNbaV1bMV1dW3NoaXBDb29yZGluYXRlc1tpXVswXV0gPSBzaGlwO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG5cdFx0Y2hlY2tDb29yZGluYXRlcyh4LCB5LCAnQ29vcmRpbmF0ZSBpcyBvdXQgb2YgYm91bmRzIScpO1xuXHRcdGlmIChib2FyZEFyclt5XVt4XSA9PT0gJ21pc3NlZCcgfHwgYm9hcmRBcnJbeV1beF0gPT09ICdoaXQnKSByZXR1cm47XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYm9hcmRBcnJbeV1beF0pKSBib2FyZEFyclt5XVt4XSA9ICdtaXNzZWQnO1xuXHRcdGVsc2UgaWYgKGlzU2hpcCh4LCB5KSkge1xuXHRcdFx0Ym9hcmRBcnJbeV1beF0uaGl0KCk7XG5cdFx0XHRib2FyZEFyclt5XVt4XSA9ICdoaXQnO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuXHRcdGlmIChzaGlwTGlzdC5sZW5ndGggPCAxKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGFyZSBubyBzaGlwcyBvbiB0aGlzIGdhbWVib2FyZCEnKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoIXNoaXBMaXN0W2ldLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0dmFsdWVBdCxcblx0XHRwbGFjZVNoaXAsXG5cdFx0cmVjZWl2ZUF0dGFjayxcblx0XHRhbGxTaGlwc1N1bmssXG5cdFx0aXNTaGlwLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZC5qcyc7XG5cbmNvbnN0IFBsYXllciA9IChuYW1lLCBnYW1lYm9hcmQsIGNwdSA9IGZhbHNlKSA9PiB7XG5cdGNvbnN0IHBsYXllck5hbWUgPSBuYW1lO1xuXHRjb25zdCBib2FyZCA9IGdhbWVib2FyZDtcbiAgICBsZXQgb3Bwb25lbnQ7XG5cdGNvbnN0IGlzQ1BVID0gY3B1O1xuXHRsZXQgaXNNeVR1cm4gPSBmYWxzZTtcblx0Y29uc3Qgc3RhcnRUdXJuID0gKCkgPT4ge1xuXHRcdGlzTXlUdXJuID0gdHJ1ZTtcblx0fTtcblx0Y29uc3QgZW5kVHVybiA9ICgpID0+IHtcblx0XHRpc015VHVybiA9IGZhbHNlO1xuXHR9O1xuICAgIGNvbnN0IHNldE9wcG9uZW50ID0gKHBsYXllcikgPT4ge1xuICAgICAgICBvcHBvbmVudCA9IHBsYXllcjtcbiAgICB9XG5cdGNvbnN0IGNhbGN1bGF0ZURlY2lzaW9uID0gKCkgPT4ge1xuICAgICAgICBpZiAoIW9wcG9uZW50KSB0aHJvdyBuZXcgRXJyb3IoJ1NldCBvcHBvbmVudCBmaXJzdCEnKTtcblx0XHRjb25zdCBkZWNpc2lvbiA9IFtdO1xuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG5cdFx0XHRjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG5cdFx0XHRpZiAoXG5cdFx0XHRcdG9wcG9uZW50LmJvYXJkLnZhbHVlQXQoeCwgeSkgPT09ICdoaXQnIHx8XG5cdFx0XHRcdG9wcG9uZW50LmJvYXJkLnZhbHVlQXQoeCwgeSkgPT09ICdtaXNzZWQnXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVjaXNpb24ucHVzaCh4KTtcbiAgICAgICAgICAgICAgICBkZWNpc2lvbi5wdXNoKHkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNpc2lvbjtcbiAgICAgICAgICAgIH1cblx0XHR9XG5cdH07XG5cdHJldHVybiB7XG5cdFx0Z2V0IG5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gcGxheWVyTmFtZTtcblx0XHR9LFxuXHRcdGdldCBib2FyZCgpIHtcblx0XHRcdHJldHVybiBib2FyZDtcblx0XHR9LFxuICAgICAgICBnZXQgb3Bwb25lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gb3Bwb25lbnQ7XG4gICAgICAgIH0sXG5cdFx0Z2V0IGlzQ1BVKCkge1xuXHRcdFx0cmV0dXJuIGlzQ1BVO1xuXHRcdH0sXG5cdFx0Z2V0IGlzTXlUdXJuKCkge1xuXHRcdFx0cmV0dXJuIGlzTXlUdXJuO1xuXHRcdH0sXG5cdFx0c3RhcnRUdXJuLFxuXHRcdGVuZFR1cm4sXG4gICAgICAgIHNldE9wcG9uZW50LFxuXHRcdGNhbGN1bGF0ZURlY2lzaW9uLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgU2hpcCA9IChuYW1lLCB4LCB5LCBsZW4sIG9yaWVudGF0aW9uID0gJ3YnKSA9PiB7XG5cdGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBFcnJvcignU2hpcCBuYW1lIG11c3QgYmUgYSBzdHJpbmchJyk7XG5cdGlmICh4IDwgMClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHQnQSBwb3NpdGl2ZSBpbnRlZ2VyIG11c3QgYmUgcGFzc2VkIGludG8gdGhlIHggYXJndW1lbnQhJ1xuXHRcdCk7XG5cdGlmICh5IDwgMClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHQnQSBwb3NpdGl2ZSBpbnRlZ2VyIG11c3QgYmUgcGFzc2VkIGludG8gdGhlIHkgYXJndW1lbnQhJ1xuXHRcdCk7XG5cdGlmIChsZW4gPD0gMClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHQnQW4gaW50ZWdlciBncmVhdGVyIHRoYW4gMCBtdXN0IGJlIHBhc3NlZCBpbnRvIHRoZSBsZW4gYXJndW1lbnQhJ1xuXHRcdCk7XG5cdGlmIChvcmllbnRhdGlvbiAhPT0gJ3YnICYmIG9yaWVudGF0aW9uICE9PSAnaCcpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XCInaCcgb3IgJ3YnIG11c3QgYmUgcGFzc2VkIGludG8gdGhlIG9yaWVudGF0aW9uIGFyZ3VtZW50ISBMZWF2aW5nIGl0IGVtcHR5IHdpbGwgc2V0IGl0IHRvICd2JyBieSBkZWZhdWx0LlwiXG5cdFx0KTtcblx0Y29uc3Qgc2hpcE5hbWUgPSBuYW1lO1xuXHRjb25zdCBzaGlwTGVuZ3RoID0gbGVuO1xuXHRjb25zdCBjb29yZEFyciA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRpZiAob3JpZW50YXRpb24gPT09ICd2JykgY29vcmRBcnIucHVzaChbeCwgeSArIGldKTtcblx0XHRpZiAob3JpZW50YXRpb24gPT09ICdoJykgY29vcmRBcnIucHVzaChbeCArIGksIHldKTtcblx0fVxuXG5cdGxldCBoaXRzID0gMDtcblx0Y29uc3QgaGl0ID0gKCkgPT4ge1xuXHRcdGhpdHMrKztcblx0fTtcblx0Y29uc3QgaXNTdW5rID0gKCkgPT4ge1xuXHRcdHJldHVybiBoaXRzID09PSBzaGlwTGVuZ3RoO1xuXHR9O1xuXHRjb25zdCBnZXRDb29yZGluYXRlcyA9ICgpID0+IHtcblx0XHRyZXR1cm4gY29vcmRBcnI7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRnZXQgbmFtZSgpIHtcblx0XHRcdHJldHVybiBzaGlwTmFtZTtcblx0XHR9LFxuXHRcdGdldCBoaXRzKCkge1xuXHRcdFx0cmV0dXJuIGhpdHM7XG5cdFx0fSxcblx0XHRoaXQsXG5cdFx0aXNTdW5rLFxuXHRcdGdldENvb3JkaW5hdGVzLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwLmpzJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQuanMnO1xuaW1wb3J0IERPTUhhbmRsZXIgZnJvbSAnLi9ET01IYW5kbGVyLmpzJztcblxuY29uc3QgbWFpbkdhbWVMb29wID0gKCgpID0+IHtcblx0Y29uc3Qgc3dpdGNoVHVybnMgPSAoKSA9PiB7XG5cdFx0aWYgKHAxLmlzTXlUdXJuKSB7XG5cdFx0XHRwMS5lbmRUdXJuKCk7XG5cdFx0XHRwMi5zdGFydFR1cm4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cDEuc3RhcnRUdXJuKCk7XG5cdFx0XHRwMi5lbmRUdXJuKCk7XG5cdFx0fVxuXHR9O1xuXHRsZXQgZ2FtZUVuZCA9IGZhbHNlO1xuXHRjb25zdCBwMUdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG5cdGNvbnN0IHAxID0gUGxheWVyKHByb21wdCgnRW50ZXIgeW91ciBuYW1lLicpLCBwMUdhbWVib2FyZCk7XG5cdERPTUhhbmRsZXIucmVuZGVyU2hpcFBsYWNlcihwMSk7XG5cdC8vIHAxR2FtZWJvYXJkLnBsYWNlU2hpcChTaGlwKCdzaGlwJywgMSwgMSwgNSwgJ3YnKSk7XG5cdC8vIHAxR2FtZWJvYXJkLnBsYWNlU2hpcChTaGlwKCdzaGlwJywgNCwgMSwgNCwgJ2gnKSk7XG5cdC8vIHAxR2FtZWJvYXJkLnBsYWNlU2hpcChTaGlwKCdzaGlwJywgNCwgNCwgMiwgJ2gnKSk7XG5cdC8vIHAxR2FtZWJvYXJkLnBsYWNlU2hpcChTaGlwKCdzaGlwJywgOCwgNiwgMywgJ3YnKSk7XG5cdC8vIHAxR2FtZWJvYXJkLnBsYWNlU2hpcChTaGlwKCdzaGlwJywgMSwgNywgMywgJ2gnKSk7XG5cdC8vIERPTUhhbmRsZXIucmVuZGVyUGxheWVyRGF0YShwMSwgJ2Rpdi5wMS1jb250YWluZXInKTtcblx0Ly8gY29uc3QgcDJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblx0Ly8gY29uc3QgcDIgPSBQbGF5ZXIoJ0NQVScsIHAyR2FtZWJvYXJkLCB0cnVlKTtcblx0Ly8gcDJHYW1lYm9hcmQucGxhY2VTaGlwKFNoaXAoJ3NoaXAnLCAxLCAxLCA1LCAndicpKTtcblx0Ly8gcDJHYW1lYm9hcmQucGxhY2VTaGlwKFNoaXAoJ3NoaXAnLCA0LCAxLCA0LCAnaCcpKTtcblx0Ly8gcDJHYW1lYm9hcmQucGxhY2VTaGlwKFNoaXAoJ3NoaXAnLCA0LCA0LCAyLCAnaCcpKTtcblx0Ly8gcDJHYW1lYm9hcmQucGxhY2VTaGlwKFNoaXAoJ3NoaXAnLCA4LCA2LCAzLCAndicpKTtcblx0Ly8gcDJHYW1lYm9hcmQucGxhY2VTaGlwKFNoaXAoJ3NoaXAnLCAxLCA3LCAzLCAnaCcpKTtcblx0Ly8gRE9NSGFuZGxlci5yZW5kZXJQbGF5ZXJEYXRhKHAyLCAnZGl2LnAyLWNvbnRhaW5lcicsIHRydWUpO1xuXHQvLyBwMS5zZXRPcHBvbmVudChwMik7XG5cdC8vIHAyLnNldE9wcG9uZW50KHAxKTtcblx0Ly8gY29uc3QgcDFHYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0Ly8gXHQnZGl2LnAxLWNvbnRhaW5lciBkaXYuZ2FtZWJvYXJkJ1xuXHQvLyApO1xuXHQvLyBjb25zdCBwMkdhbWVib2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHQvLyBcdCdkaXYucDItY29udGFpbmVyIGRpdi5nYW1lYm9hcmQnXG5cdC8vICk7XG5cdC8vIHAxLnN0YXJ0VHVybigpO1xuXHQvLyBET01IYW5kbGVyLmRpc3BsYXlBbm5vdW5jZW1lbnQoXG5cdC8vIFx0YCR7cDEubmFtZX0gZ29lcyBmaXJzdCEgUGljayBhIGNvb3JkaW5hdGUgb24gJHtwMi5uYW1lfSdzIGJvYXJkIHRvIGF0dGFjayFgXG5cdC8vICk7XG5cblx0Ly8gcDJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0Ly8gXHRpZiAoIXAxLmlzTXlUdXJuIHx8IGdhbWVFbmQpIHJldHVybjtcblx0Ly8gXHRpZiAoXG5cdC8vIFx0XHRwMkdhbWVib2FyZC52YWx1ZUF0KGUudGFyZ2V0LmRhdGFzZXQueCwgZS50YXJnZXQuZGF0YXNldC55KSA9PT1cblx0Ly8gXHRcdFx0J21pc3NlZCcgfHxcblx0Ly8gXHRcdHAyR2FtZWJvYXJkLnZhbHVlQXQoZS50YXJnZXQuZGF0YXNldC54LCBlLnRhcmdldC5kYXRhc2V0LnkpID09PVxuXHQvLyBcdFx0XHQnaGl0J1xuXHQvLyBcdCkge1xuXHQvLyBcdFx0RE9NSGFuZGxlci5kaXNwbGF5QW5ub3VuY2VtZW50KFxuXHQvLyBcdFx0XHQnVGhhdCBjZWxsIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWQuIENob29zZSBhbm90aGVyIGNlbGwuJ1xuXHQvLyBcdFx0KTtcblx0Ly8gXHRcdHJldHVybjtcblx0Ly8gXHR9XG5cblx0Ly8gXHRwMkdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFxuXHQvLyBcdFx0TnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCksXG5cdC8vIFx0XHROdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KVxuXHQvLyBcdCk7XG5cdC8vIFx0RE9NSGFuZGxlci5yZW5kZXJHYW1lYm9hcmQocDJHYW1lYm9hcmRFbGVtZW50LCBwMkdhbWVib2FyZCwgdHJ1ZSk7XG5cdC8vIFx0aWYgKHAyR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG5cdC8vIFx0XHRnYW1lRW5kID0gdHJ1ZTtcblx0Ly8gXHRcdERPTUhhbmRsZXIuZGlzcGxheUFubm91bmNlbWVudChgJHtwMS5uYW1lfSB3aW5zIWApO1xuXHQvLyBcdFx0cmV0dXJuO1xuXHQvLyBcdH1cblx0Ly8gXHRzd2l0Y2hUdXJucygpO1xuXHQvLyBcdGNvbnN0IHAyRGVjaXNpb24gPSBwMi5jYWxjdWxhdGVEZWNpc2lvbigpO1xuXHQvLyBcdHAxR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socDJEZWNpc2lvblswXSwgcDJEZWNpc2lvblsxXSk7XG5cdC8vIFx0aWYgKHAxR2FtZWJvYXJkLnZhbHVlQXQocDJEZWNpc2lvblswXSwgcDJEZWNpc2lvblsxXSkgPT09ICdoaXQnKVxuXHQvLyBcdFx0RE9NSGFuZGxlci5kaXNwbGF5QW5ub3VuY2VtZW50KFxuXHQvLyBcdFx0XHRgJHtwMi5uYW1lfSBoaXQgb25lIG9mICR7cDEubmFtZX0ncyBzaGlwcyEgWW91ciB0dXJuICR7cDEubmFtZX0hYFxuXHQvLyBcdFx0KTtcblx0Ly8gXHRpZiAocDFHYW1lYm9hcmQudmFsdWVBdChwMkRlY2lzaW9uWzBdLCBwMkRlY2lzaW9uWzFdKSA9PT0gJ21pc3NlZCcpXG5cdC8vIFx0XHRET01IYW5kbGVyLmRpc3BsYXlBbm5vdW5jZW1lbnQoXG5cdC8vIFx0XHRcdGAke3AyLm5hbWV9IG1pc3NlZCEgWW91ciB0dXJuICR7cDEubmFtZX0hYFxuXHQvLyBcdFx0KTtcblx0Ly8gXHRET01IYW5kbGVyLnJlbmRlckdhbWVib2FyZChwMUdhbWVib2FyZEVsZW1lbnQsIHAxR2FtZWJvYXJkLCBmYWxzZSk7XG5cdC8vIFx0aWYgKHAxR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG5cdC8vIFx0XHRnYW1lRW5kID0gdHJ1ZTtcblx0Ly8gXHRcdERPTUhhbmRsZXIuZGlzcGxheUFubm91bmNlbWVudChgJHtwMi5uYW1lfSB3aW5zIWApO1xuXHQvLyBcdFx0cmV0dXJuO1xuXHQvLyBcdH1cblx0Ly8gXHRzd2l0Y2hUdXJucygpO1xuXHQvLyB9KTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5HYW1lTG9vcDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=