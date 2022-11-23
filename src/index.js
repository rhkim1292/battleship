import Player from './Player.js';
import Gameboard from './Gameboard.js';
import DOMHandler from './DOMHandler.js';

const mainGameLoop = (() => {
    const p1Gameboard = Gameboard();
    const p1 = Player(prompt('Enter your name.'), p1Gameboard);
    DOMHandler.renderPlayerData(p1, 'div.p1-container');
    const p2Gameboard = Gameboard();
    const p2 = Player('CPU', p2Gameboard, true);
    DOMHandler.renderPlayerData(p2, 'div.p2-container');
})();