import Player from './Player.js';
import Ship from './Ship.js';
import Gameboard from './Gameboard.js';
import DOMHandler from './DOMHandler.js';

const mainGameLoop = (() => {
    const switchTurns = () => {
        if (p1.isMyTurn) {
            p1.endTurn();
            p2.startTurn();
        } else {
            p1.startTurn();
            p2.endTurn();
        }
    }
    let gameEnd = false;
    const p1Gameboard = Gameboard();
    const p1 = Player(prompt('Enter your name.'), p1Gameboard);
    p1Gameboard.placeShip(Ship(1, 1, 5, 'v'));
    p1Gameboard.placeShip(Ship(4, 1, 4, 'h'));
    p1Gameboard.placeShip(Ship(4, 4, 2, 'h'));
    p1Gameboard.placeShip(Ship(8, 6, 3, 'v'));
    p1Gameboard.placeShip(Ship(1, 7, 3, 'h'));
    DOMHandler.renderPlayerData(p1, 'div.p1-container');
    const p2Gameboard = Gameboard();
    const p2 = Player('CPU', p2Gameboard, true);
    p2Gameboard.placeShip(Ship(1, 1, 5, 'v'));
    p2Gameboard.placeShip(Ship(4, 1, 4, 'h'));
    p2Gameboard.placeShip(Ship(4, 4, 2, 'h'));
    p2Gameboard.placeShip(Ship(8, 6, 3, 'v'));2
    p2Gameboard.placeShip(Ship(1, 7, 3, 'h'));
    DOMHandler.renderPlayerData(p2, 'div.p2-container', true);
    const p1GameboardElement = document.querySelector('div.p1-container div.gameboard');
    const p2GameboardElement = document.querySelector('div.p2-container div.gameboard');
    p1.startTurn();
    DOMHandler.displayAnnouncement(`${p1.name} goes first! Pick a coordinate on ${p2.name}'s board to attack!`);
    
    p2GameboardElement.addEventListener('click', (e) => {
        if (!p1.isMyTurn || gameEnd) return;
        p2Gameboard.receiveAttack(Number(e.target.dataset.x), Number(e.target.dataset.y));
        DOMHandler.renderGameboard(p2GameboardElement, p2Gameboard, true);
        if (p2Gameboard.allShipsSunk()) {
            gameEnd = true;
            DOMHandler.displayAnnouncement(`${p1.name} wins!`);
            return;
        }
        switchTurns();
        const p2Decision = p2.calculateDecision();
        p1Gameboard.receiveAttack(p2Decision[0], p2Decision[1]);
        DOMHandler.renderGameboard(p1GameboardElement, p1Gameboard, false);
        if (p1Gameboard.allShipsSunk()) {
            gameEnd = true;
            DOMHandler.displayAnnouncement(`${p2.name} wins!`);
            return;
        }
        switchTurns();
    });
})();