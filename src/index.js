import Player from './Player.js';
import Ship from './Ship.js';
import Gameboard from './Gameboard.js';
import DOMHandler from './DOMHandler.js';

const mainGameLoop = (() => {
    const p1Gameboard = Gameboard();
    const p1 = Player(prompt('Enter your name.'), p1Gameboard);
    p1Gameboard.placeShip(Ship(1, 1, 5, 'v'));
    p1Gameboard.placeShip(Ship(4, 1, 4, 'h'));
    p1Gameboard.placeShip(Ship(4, 4, 2, 'h'));
    p1Gameboard.placeShip(Ship(8, 6, 3, 'v'));
    DOMHandler.renderPlayerData(p1, 'div.p1-container');
    const p2Gameboard = Gameboard();
    const p2 = Player('CPU', p2Gameboard, true);
    DOMHandler.renderPlayerData(p2, 'div.p2-container');
})();