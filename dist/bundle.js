/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMHandler.js":
/*!***************************!*\
  !*** ./src/DOMHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOMHandler = (() => {
	const testFn = () => {
		const h1 = document.createElement('h1');
		h1.textContent = 'testing!';
		document.body.appendChild(h1);
	};
	return {
        testFn,
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
		if (Array.isArray(boardArr[y][x])) boardArr[y][x] = 'missed';
		else if (
			typeof boardArr[y][x] === 'object' &&
			!Array.isArray(boardArr[y][x])
		) {
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


const Player = (name, gameboard, cpu= false) => {
    const playerName = name;
    const board = gameboard;
    const isCPU = cpu;
    let isMyTurn = false;
    const startTurn = () => {
        isMyTurn = true;
    };
    const endTurn = () => {
        isMyTurn = false;
    };
    return {
        get name() {
            return playerName;
        },
        get board() {
            return board;
        },
        get isCPU() {
            return isCPU;
        },
        get isMyTurn() {
            return isMyTurn;
        },
        startTurn,
        endTurn,
    }
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard.js */ "./src/Gameboard.js");
/* harmony import */ var _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMHandler.js */ "./src/DOMHandler.js");




const mainGameLoop = (() => {
    _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].testFn();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRzs7QUFFN0I7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQyxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFYzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7OztBQy9CckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQzlDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ007QUFDRTs7QUFFekM7QUFDQSxJQUFJLDZEQUFpQjtBQUNyQixDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERPTUhhbmRsZXIgPSAoKCkgPT4ge1xuXHRjb25zdCB0ZXN0Rm4gPSAoKSA9PiB7XG5cdFx0Y29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHRcdGgxLnRleHRDb250ZW50ID0gJ3Rlc3RpbmchJztcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGgxKTtcblx0fTtcblx0cmV0dXJuIHtcbiAgICAgICAgdGVzdEZuLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01IYW5kbGVyO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuXHRjb25zdCBib2FyZEFyciA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sIChlLCBpZHhZKSA9PlxuXHRcdEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sIChlLCBpZHhYKSA9PiBbaWR4WCwgaWR4WV0pXG5cdCk7XG4gICAgY29uc3Qgc2hpcExpc3QgPSBbXTtcblx0Y29uc3QgY2hlY2tDb29yZGluYXRlcyA9ICh4LCB5LCBlcnJNc2cpID0+IHtcblx0XHRpZiAoIWJvYXJkQXJyW3ldKSB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnKTtcblx0XHRpZiAoIWJvYXJkQXJyW3ldW3hdKSB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnKTtcblx0fTtcblx0Y29uc3QgaXNTaGlwID0gKHgsIHkpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dHlwZW9mIGJvYXJkQXJyW3ldW3hdID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShib2FyZEFyclt5XVt4XSlcblx0XHQpO1xuXHR9O1xuXHRjb25zdCB2YWx1ZUF0ID0gKHgsIHkpID0+IHtcblx0XHRyZXR1cm4gYm9hcmRBcnJbeV1beF07XG5cdH07XG5cdGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwKSA9PiB7XG5cdFx0Y29uc3Qgc2hpcENvb3JkaW5hdGVzID0gc2hpcC5nZXRDb29yZGluYXRlcygpO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgYWxsIG9mIHRoZSBjb29yZGluYXRlcyB0aGUgc2hpcCB3aWxsIHRha2UgdXAgYXJlIGFsbCBub3QgdW5kZWZpbmVkXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNoZWNrQ29vcmRpbmF0ZXMoXG5cdFx0XHRcdHNoaXBDb29yZGluYXRlc1tpXVswXSxcblx0XHRcdFx0c2hpcENvb3JkaW5hdGVzW2ldWzFdLFxuXHRcdFx0XHQnVGhhdCBzaGlwIGNhbm5vdCBiZSBwbGFjZWQgYXQgdGhvc2UgY29vcmRpbmF0ZXMhJ1xuXHRcdFx0KTtcblx0XHRcdGlmIChpc1NoaXAoc2hpcENvb3JkaW5hdGVzW2ldWzBdLCBzaGlwQ29vcmRpbmF0ZXNbaV1bMV0pKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0J1RoYXQgc2hpcCBjYW5ub3QgYmUgcGxhY2VkIGF0IHRob3NlIGNvb3JkaW5hdGVzISdcblx0XHRcdFx0KTtcblx0XHR9XG4gICAgICAgIFxuXHRcdC8vIE9uY2UgdGhlIGluaXRpYWwgbG9vcCBwYXNzZXMgd2l0aG91dCB0aHJvd2luZyBhbiBlcnJvciwgcHVzaCB0aGUgc2hpcCBpbnRvIHRoZSBzaGlwTGlzdFxuICAgICAgICAvLyBhbmQgcGxhY2UgYSByZWZlcmVuY2UgdG8gdGhlIHNoaXAgYXQgYWxsIG9mIHRoZSBjb29yZGluYXRlc1xuICAgICAgICBzaGlwTGlzdC5wdXNoKHNoaXApO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRib2FyZEFycltzaGlwQ29vcmRpbmF0ZXNbaV1bMV1dW3NoaXBDb29yZGluYXRlc1tpXVswXV0gPSBzaGlwO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG5cdFx0Y2hlY2tDb29yZGluYXRlcyh4LCB5LCAnQ29vcmRpbmF0ZSBpcyBvdXQgb2YgYm91bmRzIScpO1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGJvYXJkQXJyW3ldW3hdKSkgYm9hcmRBcnJbeV1beF0gPSAnbWlzc2VkJztcblx0XHRlbHNlIGlmIChcblx0XHRcdHR5cGVvZiBib2FyZEFyclt5XVt4XSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdCFBcnJheS5pc0FycmF5KGJvYXJkQXJyW3ldW3hdKVxuXHRcdCkge1xuXHRcdFx0Ym9hcmRBcnJbeV1beF0uaGl0KCk7XG5cdFx0XHRib2FyZEFyclt5XVt4XSA9ICdoaXQnO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuXHRcdGlmIChzaGlwTGlzdC5sZW5ndGggPCAxKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGFyZSBubyBzaGlwcyBvbiB0aGlzIGdhbWVib2FyZCEnKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoIXNoaXBMaXN0W2ldLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0dmFsdWVBdCxcblx0XHRwbGFjZVNoaXAsXG5cdFx0cmVjZWl2ZUF0dGFjayxcblx0XHRhbGxTaGlwc1N1bmssXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkLmpzJztcblxuY29uc3QgUGxheWVyID0gKG5hbWUsIGdhbWVib2FyZCwgY3B1PSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBuYW1lO1xuICAgIGNvbnN0IGJvYXJkID0gZ2FtZWJvYXJkO1xuICAgIGNvbnN0IGlzQ1BVID0gY3B1O1xuICAgIGxldCBpc015VHVybiA9IGZhbHNlO1xuICAgIGNvbnN0IHN0YXJ0VHVybiA9ICgpID0+IHtcbiAgICAgICAgaXNNeVR1cm4gPSB0cnVlO1xuICAgIH07XG4gICAgY29uc3QgZW5kVHVybiA9ICgpID0+IHtcbiAgICAgICAgaXNNeVR1cm4gPSBmYWxzZTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllck5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBib2FyZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBib2FyZDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGlzQ1BVKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzQ1BVO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgaXNNeVR1cm4oKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNNeVR1cm47XG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0VHVybixcbiAgICAgICAgZW5kVHVybixcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY29uc3QgU2hpcCA9ICh4LCB5LCBsZW4sIG9yaWVudGF0aW9uID0gJ3YnKSA9PiB7XG5cdGlmICh4IDwgMClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHQnQSBwb3NpdGl2ZSBpbnRlZ2VyIG11c3QgYmUgcGFzc2VkIGludG8gdGhlIHggYXJndW1lbnQhJ1xuXHRcdCk7XG5cdGlmICh5IDwgMClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHQnQSBwb3NpdGl2ZSBpbnRlZ2VyIG11c3QgYmUgcGFzc2VkIGludG8gdGhlIHkgYXJndW1lbnQhJ1xuXHRcdCk7XG5cdGlmIChsZW4gPD0gMClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHQnQW4gaW50ZWdlciBncmVhdGVyIHRoYW4gMCBtdXN0IGJlIHBhc3NlZCBpbnRvIHRoZSBsZW4gYXJndW1lbnQhJ1xuXHRcdCk7XG5cdGlmIChvcmllbnRhdGlvbiAhPT0gJ3YnICYmIG9yaWVudGF0aW9uICE9PSAnaCcpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XCInaCcgb3IgJ3YnIG11c3QgYmUgcGFzc2VkIGludG8gdGhlIG9yaWVudGF0aW9uIGFyZ3VtZW50ISBMZWF2aW5nIGl0IGVtcHR5IHdpbGwgc2V0IGl0IHRvICd2JyBieSBkZWZhdWx0LlwiXG5cdFx0KTtcblx0Y29uc3Qgc2hpcExlbmd0aCA9IGxlbjtcblx0Y29uc3QgY29vcmRBcnIgPSBbXTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0aWYgKG9yaWVudGF0aW9uID09PSAndicpIGNvb3JkQXJyLnB1c2goW3gsIHkgKyBpXSk7XG5cdFx0aWYgKG9yaWVudGF0aW9uID09PSAnaCcpIGNvb3JkQXJyLnB1c2goW3ggKyBpLCB5XSk7XG5cdH1cblxuXHRsZXQgaGl0cyA9IDA7XG5cdGNvbnN0IGhpdCA9ICgpID0+IHtcblx0XHRoaXRzKys7XG5cdH07XG5cdGNvbnN0IGlzU3VuayA9ICgpID0+IHtcblx0XHRyZXR1cm4gaGl0cyA9PT0gc2hpcExlbmd0aDtcblx0fTtcblx0Y29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGNvb3JkQXJyO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Z2V0IGhpdHMoKSB7XG5cdFx0XHRyZXR1cm4gaGl0cztcblx0XHR9LFxuXHRcdGhpdCxcblx0XHRpc1N1bmssXG5cdFx0Z2V0Q29vcmRpbmF0ZXMsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQuanMnO1xuaW1wb3J0IERPTUhhbmRsZXIgZnJvbSAnLi9ET01IYW5kbGVyLmpzJztcblxuY29uc3QgbWFpbkdhbWVMb29wID0gKCgpID0+IHtcbiAgICBET01IYW5kbGVyLnRlc3RGbigpO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=