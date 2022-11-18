import Ship from './Ship.js';
import Gameboard from './Gameboard.js';

describe('placeShip() functionality', () => {
    it('throws an error when trying to place a ship out of bounds', () => {
        const gameboard = new Gameboard();
        expect(gameboard.placeShip(-1, 0)).toThrow();
    });
});