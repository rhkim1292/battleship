import Ship from './Ship.js';

describe('Ship object functionality', () => {
	it("hit() increases the number of 'hits' on a Ship", () => {
        const ship = Ship();
        ship.hit();
		expect(ship.hits).toBe(1);
	});
    it("isSunk() returns true when a Ship's hits is equal to its length", () => {
        const shipLength = 3;
        const ship = Ship(shipLength);
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
    it("isSunk() returns false when a Ship's hits is not equal to its length", () => {
        const shipLength = 1;
        const ship = Ship(shipLength);
        expect(ship.isSunk()).toBe(false);
    });
});
