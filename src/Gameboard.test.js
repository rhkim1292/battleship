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
    it('placing a ship at (9, 0) with a length of 2 and an orientation of \'h\' should make the gameboard prevent the user from placing the ship', () => {
        const gameboard = Gameboard();
        const ship = Ship(9, 0, 2, 'h');
        expect(() => gameboard.placeShip(ship)).toThrow('That ship cannot be placed at those coordinates!');
        expect(gameboard.valueAt(9, 0)).not.toStrictEqual(ship);
    });
    it('placing a ship at (0, 9) with a length of 2 and an orientation of \'v\' should make the gameboard prevent the user from placing the ship', () => {
        const gameboard = Gameboard();
        const ship = Ship(0, 9, 2);
        expect(() => gameboard.placeShip(ship)).toThrow('That ship cannot be placed at those coordinates!');
        expect(gameboard.valueAt(0, 9)).not.toStrictEqual(ship);
    });
    it('placing a ship at coordinates where another ship is occupying should throw an error', () => {
        const gameboard = Gameboard();
        const ship1 = Ship(0, 1, 2, 'h');
        const ship2 = Ship(1, 0, 2);
        gameboard.placeShip(ship1);
        expect(() => gameboard.placeShip(ship2)).toThrow();
    });
});

describe('receiveAttack() functionality', () => {
    it('calling receiveAttack() on an out-of-bounds coordinate throws an error', () => {
        const gameboard = Gameboard();
        expect(() => gameboard.receiveAttack(-1, 0)).toThrow();
    });
    it('calling receiveAttack() on a coordinate with no ship sets the gameboard at those coordinates to \'missed\'', () => {
        const gameboard = Gameboard();
        gameboard.receiveAttack(0, 0);
        expect(gameboard.valueAt(0, 0)).toBe('missed');
    });
    it('calling receiveAttack() on a coordinate with a ship calls the hit method for the ship and sets the index to \'hit\'', () => {
        const gameboard = Gameboard();
        const ship = Ship(0, 0, 1);
        gameboard.placeShip(ship);
        expect(gameboard.valueAt(0, 0).hits).toBe(0);
        gameboard.receiveAttack(0, 0);
        expect(ship.hits).toBe(1);
        expect(gameboard.valueAt(0, 0)).toBe('hit');
    });
});

describe('allShipsSunk() functionality', () => {
    it('calling allShipsSunk() when there are no ships on the gameboard should throw an error', () => {
        const gameboard = Gameboard();
        expect(() => gameboard.allShipsSunk()).toThrow();
    });
    it('calling allShipsSunk() when there is at least one ship on the board that is not sunk should return false', () => {
        const gameboard = Gameboard();
        gameboard.placeShip(Ship(0, 0, 1));
        expect(gameboard.allShipsSunk()).toBe(false);
    });
    it('calling allShipsSunk() when one ship is sunk and one ship isn\'t should return false', () => {
        const gameboard = Gameboard();
        gameboard.placeShip(Ship(0, 0, 1));
        gameboard.placeShip(Ship(0, 1, 1));
        gameboard.receiveAttack(0, 0);
        expect(gameboard.allShipsSunk()).toBe(false);
    });
    it('calling allShipsSunk() when all ships are sunk should return true', () => {
        const gameboard = Gameboard();
        gameboard.placeShip(Ship(0, 0, 1));
        gameboard.placeShip(Ship(0, 1, 1));
        gameboard.receiveAttack(0, 0);
        gameboard.receiveAttack(0, 1);
        expect(gameboard.allShipsSunk()).toBe(true);
    });
});