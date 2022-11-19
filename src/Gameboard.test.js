import Ship from './Ship.js';
import Gameboard from './Gameboard.js';

describe('valueAt() functionality', () => {
    it('valueAt(-1, 0) should be undefined', () => {
        const gameboard = Gameboard();
        expect(gameboard.valueAt(-1, 0)).toBeUndefined();
    });
    it('valueAt(0, 0) should return [0, 0] in a newly initialized Gameboard', () => {
        const gameboard = Gameboard();
        expect(gameboard.valueAt(0, 0)).toStrictEqual([0, 0]);
    });
});
describe('placeShip() functionality', () => {
	it('throws an error when trying to place a ship out of bounds', () => {
		const gameboard = Gameboard();
		expect(() => {
            const ship = Ship(-1, 0, 1);
            gameboard.placeShip(ship)
        }).toThrow();
	});
	it('placing a ship at (0, 0) with a length of 1 should make the gameboard return a reference to the ship only at (0, 0)', () => {
        const gameboard = Gameboard();
        const ship = Ship(0, 0, 1);
        gameboard.placeShip(ship);
        expect(gameboard.valueAt(0, 0)).toStrictEqual(ship);
        expect(gameboard.valueAt(0, 1)).not.toStrictEqual(ship);
        expect(gameboard.valueAt(1, 0)).not.toStrictEqual(ship);
    });
    it('placing a ship at (0, 0) with a length of 2 and an orientation of \'v\' should make the gameboard return a reference to the ship at both (0, 0) and (0, 1)', () => {
        const gameboard = Gameboard();
        const ship = Ship(0, 0, 2);
        gameboard.placeShip(ship);
        expect(gameboard.valueAt(0, 0)).toStrictEqual(ship);
        expect(gameboard.valueAt(0, 1)).toStrictEqual(ship);
        expect(gameboard.valueAt(1, 0)).not.toStrictEqual(ship);
    });
    it('placing a ship at (0, 0) with a length of 2 and an orientation of \'h\' should make the gameboard return a reference to the ship at both (0, 0) and (1, 0)', () => {
        const gameboard = Gameboard();
        const ship = Ship(0, 0, 2, 'h');
        gameboard.placeShip(ship);
        expect(gameboard.valueAt(0, 0)).toStrictEqual(ship);
        expect(gameboard.valueAt(0, 1)).not.toStrictEqual(ship);
        expect(gameboard.valueAt(1, 0)).toStrictEqual(ship);
    });
});
