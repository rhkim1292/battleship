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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --cell-border-width: 2px;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0px 25px 25px 25px;\n}\n\n.text-announcer {\n    margin: 0;\n    padding: 0;\n}\n\ndiv.game-container {\n    width: 100%;\n    height: 80%;\n    display: flex;\n    justify-content: center;\n    gap: 25px;\n}\n\ndiv.game-container div.p1-container,\ndiv.game-container div.p2-container {\n    display: flex;\n    width: 50%;\n}\n\ndiv.game-container div.p1-container {\n    justify-content: flex-end;\n}\n\ndiv.game-container div.p2-container {\n    justify-content: flex-start;\n}\n\ndiv.game-container div.player-container-cols {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 70%;\n}\n\n.gameboard {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    height: 100%;\n    /* aspect-ratio: 1 / 1; */\n    border: 1px solid rgb(205, 205, 205);\n}\n\n.gameboard .board-cell {\n    width: 10%;\n    height: 10%;\n    border: 1px solid rgb(205, 205, 205);\n    /* aspect-ratio: 1 / 1; */\n}\n\n.gameboard .empty-cell {\n    background-color: rgb(78, 178, 255);\n}\n\n.gameboard .ship-cell {\n    background-color: hsla(206, 0%, 50%, 1);\n}\n\n.gameboard .missed-cell {\n    background-color:hsl(0, 0%, 79%);\n}\n\n.gameboard .hit-cell {\n    background-color:hsl(0, 100%, 66%);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,SAAS;IACT,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,WAAW;IACX,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,oCAAoC;AACxC;;AAEA;IACI,UAAU;IACV,WAAW;IACX,oCAAoC;IACpC,yBAAyB;AAC7B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,kCAAkC;AACtC","sourcesContent":[":root {\n    --cell-border-width: 2px;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0px 25px 25px 25px;\n}\n\n.text-announcer {\n    margin: 0;\n    padding: 0;\n}\n\ndiv.game-container {\n    width: 100%;\n    height: 80%;\n    display: flex;\n    justify-content: center;\n    gap: 25px;\n}\n\ndiv.game-container div.p1-container,\ndiv.game-container div.p2-container {\n    display: flex;\n    width: 50%;\n}\n\ndiv.game-container div.p1-container {\n    justify-content: flex-end;\n}\n\ndiv.game-container div.p2-container {\n    justify-content: flex-start;\n}\n\ndiv.game-container div.player-container-cols {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 70%;\n}\n\n.gameboard {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    height: 100%;\n    /* aspect-ratio: 1 / 1; */\n    border: 1px solid rgb(205, 205, 205);\n}\n\n.gameboard .board-cell {\n    width: 10%;\n    height: 10%;\n    border: 1px solid rgb(205, 205, 205);\n    /* aspect-ratio: 1 / 1; */\n}\n\n.gameboard .empty-cell {\n    background-color: rgb(78, 178, 255);\n}\n\n.gameboard .ship-cell {\n    background-color: hsla(206, 0%, 50%, 1);\n}\n\n.gameboard .missed-cell {\n    background-color:hsl(0, 0%, 79%);\n}\n\n.gameboard .hit-cell {\n    background-color:hsl(0, 100%, 66%);\n}"],"sourceRoot":""}]);
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


const DOMHandler = (() => {
	const title = document.createElement('h1');
	title.textContent = 'Battleship!';
	const textAnnouncer = document.createElement('h2');
	textAnnouncer.classList.add('text-announcer');
	const gameContainer = document.createElement('div');
	gameContainer.classList.add('game-container');
	const p1Container = document.createElement('div');
	p1Container.classList.add('p1-container');
	const p2Container = document.createElement('div');
	p2Container.classList.add('p2-container');
	gameContainer.append(p1Container, p2Container);
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
				tile.setAttribute('data-x', `${x}`);
				tile.setAttribute('data-y', `${y}`);
				gameboardElement.appendChild(tile);
			}
		}
	};

	const createGameboardElement = (gameboard, hidden) => {
		// const placeholder = document.createElement('p');
		// placeholder.textContent = 'Gameboard grid goes here!';
		// return placeholder;
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

	return {
		renderGameboard,
		renderPlayerData,
		displayAnnouncement,
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
const Ship = (x, y, len, orientation = 'v') => {
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
	p1Gameboard.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, 1, 5, 'v'));
	p1Gameboard.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])(4, 1, 4, 'h'));
	p1Gameboard.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])(4, 4, 2, 'h'));
	p1Gameboard.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])(8, 6, 3, 'v'));
	p1Gameboard.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, 7, 3, 'h'));
	_DOMHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderPlayerData(p1, 'div.p1-container');
	const p2Gameboard = (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
	const p2 = (0,_Player_js__WEBPACK_IMPORTED_MODULE_0__["default"])('CPU', p2Gameboard, true);
	p2Gameboard.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, 1, 5, 'v'));
	p2Gameboard.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])(4, 1, 4, 'h'));
	p2Gameboard.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])(4, 4, 2, 'h'));
	p2Gameboard.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])(8, 6, 3, 'v'));
	p2Gameboard.placeShip((0,_Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, 7, 3, 'h'));
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
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRWM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFEdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQzlDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUNKO0FBQ1U7QUFDRTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlEQUFTO0FBQzlCLFlBQVksc0RBQU07QUFDbEIsdUJBQXVCLG9EQUFJO0FBQzNCLHVCQUF1QixvREFBSTtBQUMzQix1QkFBdUIsb0RBQUk7QUFDM0IsdUJBQXVCLG9EQUFJO0FBQzNCLHVCQUF1QixvREFBSTtBQUMzQixDQUFDLHVFQUEyQjtBQUM1QixxQkFBcUIseURBQVM7QUFDOUIsWUFBWSxzREFBTTtBQUNsQix1QkFBdUIsb0RBQUk7QUFDM0IsdUJBQXVCLG9EQUFJO0FBQzNCLHVCQUF1QixvREFBSTtBQUMzQix1QkFBdUIsb0RBQUk7QUFDM0IsdUJBQXVCLG9EQUFJO0FBQzNCLENBQUMsdUVBQTJCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMEVBQThCO0FBQy9CLEtBQUssU0FBUyxtQ0FBbUMsUUFBUTtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRywwRUFBOEI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNFQUEwQjtBQUM1QjtBQUNBO0FBQ0EsR0FBRywwRUFBOEIsSUFBSSxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsMEVBQThCO0FBQ2pDLE9BQU8sU0FBUyxhQUFhLFFBQVEsc0JBQXNCLFFBQVE7QUFDbkU7QUFDQTtBQUNBLEdBQUcsMEVBQThCO0FBQ2pDLE9BQU8sU0FBUyxvQkFBb0IsUUFBUTtBQUM1QztBQUNBLEVBQUUsc0VBQTBCO0FBQzVCO0FBQ0E7QUFDQSxHQUFHLDBFQUE4QixJQUFJLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1jZWxsLWJvcmRlci13aWR0aDogMnB4O1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwcHggMjVweCAyNXB4IDI1cHg7XFxufVxcblxcbi50ZXh0LWFubm91bmNlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnAxLWNvbnRhaW5lcixcXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnAyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucDEtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wMi1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucGxheWVyLWNvbnRhaW5lci1jb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNSwgMjA1LCAyMDUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5ib2FyZC1jZWxsIHtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDUsIDIwNSwgMjA1KTtcXG4gICAgLyogYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG59XFxuXFxuLmdhbWVib2FyZCAuZW1wdHktY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgMTc4LCAyNTUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5zaGlwLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwNiwgMCUsIDUwJSwgMSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLm1pc3NlZC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDc5JSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmhpdC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMTAwJSwgNjYlKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLG9DQUFvQztJQUNwQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWNlbGwtYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweCAyNXB4IDI1cHggMjVweDtcXG59XFxuXFxuLnRleHQtYW5ub3VuY2VyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucDEtY29udGFpbmVyLFxcbmRpdi5nYW1lLWNvbnRhaW5lciBkaXYucDItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wMS1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG5kaXYuZ2FtZS1jb250YWluZXIgZGl2LnAyLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuZGl2LmdhbWUtY29udGFpbmVyIGRpdi5wbGF5ZXItY29udGFpbmVyLWNvbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBhc3BlY3QtcmF0aW86IDEgLyAxOyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA1LCAyMDUsIDIwNSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmJvYXJkLWNlbGwge1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNSwgMjA1LCAyMDUpO1xcbiAgICAvKiBhc3BlY3QtcmF0aW86IDEgLyAxOyAqL1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5lbXB0eS1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc4LCAxNzgsIDI1NSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLnNoaXAtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjA2LCAwJSwgNTAlLCAxKTtcXG59XFxuXFxuLmdhbWVib2FyZCAubWlzc2VkLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAwJSwgNzklKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuaGl0LWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAxMDAlLCA2NiUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgRE9NSGFuZGxlciA9ICgoKSA9PiB7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0dGl0bGUudGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcCEnO1xuXHRjb25zdCB0ZXh0QW5ub3VuY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0dGV4dEFubm91bmNlci5jbGFzc0xpc3QuYWRkKCd0ZXh0LWFubm91bmNlcicpO1xuXHRjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGdhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZS1jb250YWluZXInKTtcblx0Y29uc3QgcDFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0cDFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncDEtY29udGFpbmVyJyk7XG5cdGNvbnN0IHAyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHAyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3AyLWNvbnRhaW5lcicpO1xuXHRnYW1lQ29udGFpbmVyLmFwcGVuZChwMUNvbnRhaW5lciwgcDJDb250YWluZXIpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZCh0aXRsZSwgdGV4dEFubm91bmNlciwgZ2FtZUNvbnRhaW5lcik7XG5cblx0Y29uc3QgcmVuZGVyR2FtZWJvYXJkID0gKGdhbWVib2FyZEVsZW1lbnQsIGdhbWVib2FyZCwgaGlkZGVuID0gZmFsc2UpID0+IHtcblx0XHRnYW1lYm9hcmRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXHRcdGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuXHRcdFx0Zm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG5cdFx0XHRcdGxldCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY2VsbCcpO1xuXHRcdFx0XHRpZiAoZ2FtZWJvYXJkLmlzU2hpcCh4LCB5KSkgaGlkZGVuID8gdGlsZS5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJykgOiB0aWxlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY2VsbCcpO1xuXHRcdFx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KGdhbWVib2FyZC52YWx1ZUF0KHgsIHkpKSlcblx0XHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LWNlbGwnKTtcblx0XHRcdFx0ZWxzZSBpZiAoZ2FtZWJvYXJkLnZhbHVlQXQoeCwgeSkgPT09ICdtaXNzZWQnKVxuXHRcdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLWNlbGwnKTtcblx0XHRcdFx0ZWxzZSBpZiAoZ2FtZWJvYXJkLnZhbHVlQXQoeCwgeSkgPT09ICdoaXQnKVxuXHRcdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZCgnaGl0LWNlbGwnKTtcblx0XHRcdFx0dGlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIGAke3h9YCk7XG5cdFx0XHRcdHRpbGUuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBgJHt5fWApO1xuXHRcdFx0XHRnYW1lYm9hcmRFbGVtZW50LmFwcGVuZENoaWxkKHRpbGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBjcmVhdGVHYW1lYm9hcmRFbGVtZW50ID0gKGdhbWVib2FyZCwgaGlkZGVuKSA9PiB7XG5cdFx0Ly8gY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0Ly8gcGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSAnR2FtZWJvYXJkIGdyaWQgZ29lcyBoZXJlISc7XG5cdFx0Ly8gcmV0dXJuIHBsYWNlaG9sZGVyO1xuXHRcdGNvbnN0IGdhbWVib2FyZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRnYW1lYm9hcmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZCcpO1xuXHRcdHJlbmRlckdhbWVib2FyZChnYW1lYm9hcmRFbGVtZW50LCBnYW1lYm9hcmQsIGhpZGRlbik7XG5cdFx0cmV0dXJuIGdhbWVib2FyZEVsZW1lbnQ7XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyUGxheWVyRGF0YSA9IChwbGF5ZXIsIHF1ZXJ5U3RyaW5nLCBoaWRkZW4gPSBmYWxzZSkgPT4ge1xuXHRcdGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnlTdHJpbmcpO1xuXHRcdHBsYXllckNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblx0XHRjb25zdCBwbGF5ZXJDb250YWluZXJDb2x1bW5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0cGxheWVyQ29udGFpbmVyQ29sdW1ucy5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItY29udGFpbmVyLWNvbHMnKTtcblx0XHRjb25zdCBwbGF5ZXJCb2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdFx0cGxheWVyQm9hcmRIZWFkZXIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIubmFtZX0ncyBCb2FyZGA7XG5cdFx0Y29uc3QgcGxheWVyR2FtZWJvYXJkID0gY3JlYXRlR2FtZWJvYXJkRWxlbWVudChwbGF5ZXIuYm9hcmQsIGhpZGRlbik7XG5cdFx0cGxheWVyQ29udGFpbmVyQ29sdW1ucy5hcHBlbmQocGxheWVyQm9hcmRIZWFkZXIsIHBsYXllckdhbWVib2FyZCk7XG5cdFx0cGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckNvbnRhaW5lckNvbHVtbnMpO1xuXHR9O1xuXG5cdGNvbnN0IGRpc3BsYXlBbm5vdW5jZW1lbnQgPSAoc3RyaW5nKSA9PiB7XG5cdFx0dGV4dEFubm91bmNlci50ZXh0Q29udGVudCA9IHN0cmluZztcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlbmRlckdhbWVib2FyZCxcblx0XHRyZW5kZXJQbGF5ZXJEYXRhLFxuXHRcdGRpc3BsYXlBbm5vdW5jZW1lbnQsXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01IYW5kbGVyO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuXHRjb25zdCBib2FyZEFyciA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sIChlLCBpZHhZKSA9PlxuXHRcdEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sIChlLCBpZHhYKSA9PiBbaWR4WCwgaWR4WV0pXG5cdCk7XG4gICAgY29uc3Qgc2hpcExpc3QgPSBbXTtcblx0Y29uc3QgY2hlY2tDb29yZGluYXRlcyA9ICh4LCB5LCBlcnJNc2cpID0+IHtcblx0XHRpZiAoIWJvYXJkQXJyW3ldKSB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnKTtcblx0XHRpZiAoIWJvYXJkQXJyW3ldW3hdKSB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnKTtcblx0fTtcblx0Y29uc3QgaXNTaGlwID0gKHgsIHkpID0+IHtcblx0XHRpZiAoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIHRocm93IG5ldyBFcnJvcignVGhhdCBpbmRleCBpcyBvdXQgb2YgYm91bmRzIScpO1xuXHRcdHJldHVybiAoXG5cdFx0XHR0eXBlb2YgYm9hcmRBcnJbeV1beF0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGJvYXJkQXJyW3ldW3hdKVxuXHRcdCk7XG5cdH07XG5cdGNvbnN0IHZhbHVlQXQgPSAoeCwgeSkgPT4ge1xuXHRcdHJldHVybiBib2FyZEFyclt5XVt4XTtcblx0fTtcblx0Y29uc3QgcGxhY2VTaGlwID0gKHNoaXApID0+IHtcblx0XHRjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBzaGlwLmdldENvb3JkaW5hdGVzKCk7XG5cblx0XHQvLyBDaGVjayBpZiBhbGwgb2YgdGhlIGNvb3JkaW5hdGVzIHRoZSBzaGlwIHdpbGwgdGFrZSB1cCBhcmUgYWxsIG5vdCB1bmRlZmluZWRcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y2hlY2tDb29yZGluYXRlcyhcblx0XHRcdFx0c2hpcENvb3JkaW5hdGVzW2ldWzBdLFxuXHRcdFx0XHRzaGlwQ29vcmRpbmF0ZXNbaV1bMV0sXG5cdFx0XHRcdCdUaGF0IHNoaXAgY2Fubm90IGJlIHBsYWNlZCBhdCB0aG9zZSBjb29yZGluYXRlcyEnXG5cdFx0XHQpO1xuXHRcdFx0aWYgKGlzU2hpcChzaGlwQ29vcmRpbmF0ZXNbaV1bMF0sIHNoaXBDb29yZGluYXRlc1tpXVsxXSkpXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XHQnVGhhdCBzaGlwIGNhbm5vdCBiZSBwbGFjZWQgYXQgdGhvc2UgY29vcmRpbmF0ZXMhJ1xuXHRcdFx0XHQpO1xuXHRcdH1cbiAgICAgICAgXG5cdFx0Ly8gT25jZSB0aGUgaW5pdGlhbCBsb29wIHBhc3NlcyB3aXRob3V0IHRocm93aW5nIGFuIGVycm9yLCBwdXNoIHRoZSBzaGlwIGludG8gdGhlIHNoaXBMaXN0XG4gICAgICAgIC8vIGFuZCBwbGFjZSBhIHJlZmVyZW5jZSB0byB0aGUgc2hpcCBhdCBhbGwgb2YgdGhlIGNvb3JkaW5hdGVzXG4gICAgICAgIHNoaXBMaXN0LnB1c2goc2hpcCk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGJvYXJkQXJyW3NoaXBDb29yZGluYXRlc1tpXVsxXV1bc2hpcENvb3JkaW5hdGVzW2ldWzBdXSA9IHNoaXA7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcblx0XHRjaGVja0Nvb3JkaW5hdGVzKHgsIHksICdDb29yZGluYXRlIGlzIG91dCBvZiBib3VuZHMhJyk7XG5cdFx0aWYgKGJvYXJkQXJyW3ldW3hdID09PSAnbWlzc2VkJyB8fCBib2FyZEFyclt5XVt4XSA9PT0gJ2hpdCcpIHJldHVybjtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShib2FyZEFyclt5XVt4XSkpIGJvYXJkQXJyW3ldW3hdID0gJ21pc3NlZCc7XG5cdFx0ZWxzZSBpZiAoaXNTaGlwKHgsIHkpKSB7XG5cdFx0XHRib2FyZEFyclt5XVt4XS5oaXQoKTtcblx0XHRcdGJvYXJkQXJyW3ldW3hdID0gJ2hpdCc7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG5cdFx0aWYgKHNoaXBMaXN0Lmxlbmd0aCA8IDEpIHRocm93IG5ldyBFcnJvcignVGhlcmUgYXJlIG5vIHNoaXBzIG9uIHRoaXMgZ2FtZWJvYXJkIScpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICghc2hpcExpc3RbaV0uaXNTdW5rKCkpIHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIHtcblx0XHR2YWx1ZUF0LFxuXHRcdHBsYWNlU2hpcCxcblx0XHRyZWNlaXZlQXR0YWNrLFxuXHRcdGFsbFNoaXBzU3Vuayxcblx0XHRpc1NoaXAsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkLmpzJztcblxuY29uc3QgUGxheWVyID0gKG5hbWUsIGdhbWVib2FyZCwgY3B1ID0gZmFsc2UpID0+IHtcblx0Y29uc3QgcGxheWVyTmFtZSA9IG5hbWU7XG5cdGNvbnN0IGJvYXJkID0gZ2FtZWJvYXJkO1xuICAgIGxldCBvcHBvbmVudDtcblx0Y29uc3QgaXNDUFUgPSBjcHU7XG5cdGxldCBpc015VHVybiA9IGZhbHNlO1xuXHRjb25zdCBzdGFydFR1cm4gPSAoKSA9PiB7XG5cdFx0aXNNeVR1cm4gPSB0cnVlO1xuXHR9O1xuXHRjb25zdCBlbmRUdXJuID0gKCkgPT4ge1xuXHRcdGlzTXlUdXJuID0gZmFsc2U7XG5cdH07XG4gICAgY29uc3Qgc2V0T3Bwb25lbnQgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIG9wcG9uZW50ID0gcGxheWVyO1xuICAgIH1cblx0Y29uc3QgY2FsY3VsYXRlRGVjaXNpb24gPSAoKSA9PiB7XG4gICAgICAgIGlmICghb3Bwb25lbnQpIHRocm93IG5ldyBFcnJvcignU2V0IG9wcG9uZW50IGZpcnN0IScpO1xuXHRcdGNvbnN0IGRlY2lzaW9uID0gW107XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcblx0XHRcdGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcblx0XHRcdGlmIChcblx0XHRcdFx0b3Bwb25lbnQuYm9hcmQudmFsdWVBdCh4LCB5KSA9PT0gJ2hpdCcgfHxcblx0XHRcdFx0b3Bwb25lbnQuYm9hcmQudmFsdWVBdCh4LCB5KSA9PT0gJ21pc3NlZCdcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWNpc2lvbi5wdXNoKHgpO1xuICAgICAgICAgICAgICAgIGRlY2lzaW9uLnB1c2goeSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY2lzaW9uO1xuICAgICAgICAgICAgfVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIHtcblx0XHRnZXQgbmFtZSgpIHtcblx0XHRcdHJldHVybiBwbGF5ZXJOYW1lO1xuXHRcdH0sXG5cdFx0Z2V0IGJvYXJkKCkge1xuXHRcdFx0cmV0dXJuIGJvYXJkO1xuXHRcdH0sXG4gICAgICAgIGdldCBvcHBvbmVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHBvbmVudDtcbiAgICAgICAgfSxcblx0XHRnZXQgaXNDUFUoKSB7XG5cdFx0XHRyZXR1cm4gaXNDUFU7XG5cdFx0fSxcblx0XHRnZXQgaXNNeVR1cm4oKSB7XG5cdFx0XHRyZXR1cm4gaXNNeVR1cm47XG5cdFx0fSxcblx0XHRzdGFydFR1cm4sXG5cdFx0ZW5kVHVybixcbiAgICAgICAgc2V0T3Bwb25lbnQsXG5cdFx0Y2FsY3VsYXRlRGVjaXNpb24sXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKHgsIHksIGxlbiwgb3JpZW50YXRpb24gPSAndicpID0+IHtcblx0aWYgKHggPCAwKVxuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdCdBIHBvc2l0aXZlIGludGVnZXIgbXVzdCBiZSBwYXNzZWQgaW50byB0aGUgeCBhcmd1bWVudCEnXG5cdFx0KTtcblx0aWYgKHkgPCAwKVxuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdCdBIHBvc2l0aXZlIGludGVnZXIgbXVzdCBiZSBwYXNzZWQgaW50byB0aGUgeSBhcmd1bWVudCEnXG5cdFx0KTtcblx0aWYgKGxlbiA8PSAwKVxuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdCdBbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiAwIG11c3QgYmUgcGFzc2VkIGludG8gdGhlIGxlbiBhcmd1bWVudCEnXG5cdFx0KTtcblx0aWYgKG9yaWVudGF0aW9uICE9PSAndicgJiYgb3JpZW50YXRpb24gIT09ICdoJylcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcIidoJyBvciAndicgbXVzdCBiZSBwYXNzZWQgaW50byB0aGUgb3JpZW50YXRpb24gYXJndW1lbnQhIExlYXZpbmcgaXQgZW1wdHkgd2lsbCBzZXQgaXQgdG8gJ3YnIGJ5IGRlZmF1bHQuXCJcblx0XHQpO1xuXHRjb25zdCBzaGlwTGVuZ3RoID0gbGVuO1xuXHRjb25zdCBjb29yZEFyciA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRpZiAob3JpZW50YXRpb24gPT09ICd2JykgY29vcmRBcnIucHVzaChbeCwgeSArIGldKTtcblx0XHRpZiAob3JpZW50YXRpb24gPT09ICdoJykgY29vcmRBcnIucHVzaChbeCArIGksIHldKTtcblx0fVxuXG5cdGxldCBoaXRzID0gMDtcblx0Y29uc3QgaGl0ID0gKCkgPT4ge1xuXHRcdGhpdHMrKztcblx0fTtcblx0Y29uc3QgaXNTdW5rID0gKCkgPT4ge1xuXHRcdHJldHVybiBoaXRzID09PSBzaGlwTGVuZ3RoO1xuXHR9O1xuXHRjb25zdCBnZXRDb29yZGluYXRlcyA9ICgpID0+IHtcblx0XHRyZXR1cm4gY29vcmRBcnI7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRnZXQgaGl0cygpIHtcblx0XHRcdHJldHVybiBoaXRzO1xuXHRcdH0sXG5cdFx0aGl0LFxuXHRcdGlzU3Vuayxcblx0XHRnZXRDb29yZGluYXRlcyxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vU2hpcC5qcyc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkLmpzJztcbmltcG9ydCBET01IYW5kbGVyIGZyb20gJy4vRE9NSGFuZGxlci5qcyc7XG5cbmNvbnN0IG1haW5HYW1lTG9vcCA9ICgoKSA9PiB7XG5cdGNvbnN0IHN3aXRjaFR1cm5zID0gKCkgPT4ge1xuXHRcdGlmIChwMS5pc015VHVybikge1xuXHRcdFx0cDEuZW5kVHVybigpO1xuXHRcdFx0cDIuc3RhcnRUdXJuKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHAxLnN0YXJ0VHVybigpO1xuXHRcdFx0cDIuZW5kVHVybigpO1xuXHRcdH1cblx0fTtcblx0bGV0IGdhbWVFbmQgPSBmYWxzZTtcblx0Y29uc3QgcDFHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblx0Y29uc3QgcDEgPSBQbGF5ZXIocHJvbXB0KCdFbnRlciB5b3VyIG5hbWUuJyksIHAxR2FtZWJvYXJkKTtcblx0cDFHYW1lYm9hcmQucGxhY2VTaGlwKFNoaXAoMSwgMSwgNSwgJ3YnKSk7XG5cdHAxR2FtZWJvYXJkLnBsYWNlU2hpcChTaGlwKDQsIDEsIDQsICdoJykpO1xuXHRwMUdhbWVib2FyZC5wbGFjZVNoaXAoU2hpcCg0LCA0LCAyLCAnaCcpKTtcblx0cDFHYW1lYm9hcmQucGxhY2VTaGlwKFNoaXAoOCwgNiwgMywgJ3YnKSk7XG5cdHAxR2FtZWJvYXJkLnBsYWNlU2hpcChTaGlwKDEsIDcsIDMsICdoJykpO1xuXHRET01IYW5kbGVyLnJlbmRlclBsYXllckRhdGEocDEsICdkaXYucDEtY29udGFpbmVyJyk7XG5cdGNvbnN0IHAyR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cdGNvbnN0IHAyID0gUGxheWVyKCdDUFUnLCBwMkdhbWVib2FyZCwgdHJ1ZSk7XG5cdHAyR2FtZWJvYXJkLnBsYWNlU2hpcChTaGlwKDEsIDEsIDUsICd2JykpO1xuXHRwMkdhbWVib2FyZC5wbGFjZVNoaXAoU2hpcCg0LCAxLCA0LCAnaCcpKTtcblx0cDJHYW1lYm9hcmQucGxhY2VTaGlwKFNoaXAoNCwgNCwgMiwgJ2gnKSk7XG5cdHAyR2FtZWJvYXJkLnBsYWNlU2hpcChTaGlwKDgsIDYsIDMsICd2JykpO1xuXHRwMkdhbWVib2FyZC5wbGFjZVNoaXAoU2hpcCgxLCA3LCAzLCAnaCcpKTtcblx0RE9NSGFuZGxlci5yZW5kZXJQbGF5ZXJEYXRhKHAyLCAnZGl2LnAyLWNvbnRhaW5lcicsIHRydWUpO1xuXHRwMS5zZXRPcHBvbmVudChwMik7XG5cdHAyLnNldE9wcG9uZW50KHAxKTtcblx0Y29uc3QgcDFHYW1lYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHQnZGl2LnAxLWNvbnRhaW5lciBkaXYuZ2FtZWJvYXJkJ1xuXHQpO1xuXHRjb25zdCBwMkdhbWVib2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdCdkaXYucDItY29udGFpbmVyIGRpdi5nYW1lYm9hcmQnXG5cdCk7XG5cdHAxLnN0YXJ0VHVybigpO1xuXHRET01IYW5kbGVyLmRpc3BsYXlBbm5vdW5jZW1lbnQoXG5cdFx0YCR7cDEubmFtZX0gZ29lcyBmaXJzdCEgUGljayBhIGNvb3JkaW5hdGUgb24gJHtwMi5uYW1lfSdzIGJvYXJkIHRvIGF0dGFjayFgXG5cdCk7XG5cblx0cDJHYW1lYm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRpZiAoIXAxLmlzTXlUdXJuIHx8IGdhbWVFbmQpIHJldHVybjtcblx0XHRpZiAoXG5cdFx0XHRwMkdhbWVib2FyZC52YWx1ZUF0KGUudGFyZ2V0LmRhdGFzZXQueCwgZS50YXJnZXQuZGF0YXNldC55KSA9PT1cblx0XHRcdFx0J21pc3NlZCcgfHxcblx0XHRcdHAyR2FtZWJvYXJkLnZhbHVlQXQoZS50YXJnZXQuZGF0YXNldC54LCBlLnRhcmdldC5kYXRhc2V0LnkpID09PVxuXHRcdFx0XHQnaGl0J1xuXHRcdCkge1xuXHRcdFx0RE9NSGFuZGxlci5kaXNwbGF5QW5ub3VuY2VtZW50KFxuXHRcdFx0XHQnVGhhdCBjZWxsIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWQuIENob29zZSBhbm90aGVyIGNlbGwuJ1xuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRwMkdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFxuXHRcdFx0TnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCksXG5cdFx0XHROdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KVxuXHRcdCk7XG5cdFx0RE9NSGFuZGxlci5yZW5kZXJHYW1lYm9hcmQocDJHYW1lYm9hcmRFbGVtZW50LCBwMkdhbWVib2FyZCwgdHJ1ZSk7XG5cdFx0aWYgKHAyR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG5cdFx0XHRnYW1lRW5kID0gdHJ1ZTtcblx0XHRcdERPTUhhbmRsZXIuZGlzcGxheUFubm91bmNlbWVudChgJHtwMS5uYW1lfSB3aW5zIWApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzd2l0Y2hUdXJucygpO1xuXHRcdGNvbnN0IHAyRGVjaXNpb24gPSBwMi5jYWxjdWxhdGVEZWNpc2lvbigpO1xuXHRcdHAxR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socDJEZWNpc2lvblswXSwgcDJEZWNpc2lvblsxXSk7XG5cdFx0aWYgKHAxR2FtZWJvYXJkLnZhbHVlQXQocDJEZWNpc2lvblswXSwgcDJEZWNpc2lvblsxXSkgPT09ICdoaXQnKVxuXHRcdFx0RE9NSGFuZGxlci5kaXNwbGF5QW5ub3VuY2VtZW50KFxuXHRcdFx0XHRgJHtwMi5uYW1lfSBoaXQgb25lIG9mICR7cDEubmFtZX0ncyBzaGlwcyEgWW91ciB0dXJuICR7cDEubmFtZX0hYFxuXHRcdFx0KTtcblx0XHRpZiAocDFHYW1lYm9hcmQudmFsdWVBdChwMkRlY2lzaW9uWzBdLCBwMkRlY2lzaW9uWzFdKSA9PT0gJ21pc3NlZCcpXG5cdFx0XHRET01IYW5kbGVyLmRpc3BsYXlBbm5vdW5jZW1lbnQoXG5cdFx0XHRcdGAke3AyLm5hbWV9IG1pc3NlZCEgWW91ciB0dXJuICR7cDEubmFtZX0hYFxuXHRcdFx0KTtcblx0XHRET01IYW5kbGVyLnJlbmRlckdhbWVib2FyZChwMUdhbWVib2FyZEVsZW1lbnQsIHAxR2FtZWJvYXJkLCBmYWxzZSk7XG5cdFx0aWYgKHAxR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG5cdFx0XHRnYW1lRW5kID0gdHJ1ZTtcblx0XHRcdERPTUhhbmRsZXIuZGlzcGxheUFubm91bmNlbWVudChgJHtwMi5uYW1lfSB3aW5zIWApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzd2l0Y2hUdXJucygpO1xuXHR9KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=