import Ship from './Ship.js';

describe('Ship factory functionality', () => {
    it("Calling the Ship factory with a negative x parameter will throw an error", () => {
        expect(() => Ship(-1, 0, 1)).toThrow();
    });
    it("Calling the Ship factory with a negative y parameter will throw an error", () => {
        expect(() => Ship(0, -1, 1)).toThrow();
    });
    it("Calling the Ship factory with a len value less than 1 will throw an error", () => {
        expect(() => Ship(0, 0, 0)).toThrow();
    });
    it("Calling the Ship factory with an orientation value that is not 'h' or 'v' will throw an error", () => {
        expect(() => Ship(0, 0, 0, 'this will not work')).toThrow();
    });
	it("hit() increases the number of 'hits' on a Ship", () => {
		const ship = Ship();
		ship.hit();
		expect(ship.hits).toBe(1);
	});
	it("isSunk() returns true when a Ship's hits is equal to its length", () => {
		const shipLength = 3;
		const ship = Ship(0, 0, shipLength);
		ship.hit();
		ship.hit();
		ship.hit();
		expect(ship.isSunk()).toBe(true);
	});
	it("isSunk() returns false when a Ship's hits is not equal to its length", () => {
		const shipLength = 1;
		const ship = Ship(0, 0, shipLength);
		expect(ship.isSunk()).toBe(false);
	});
	it('getCoordinates() returns [[0, 0]] when a Ship is constructed with its coordinates set to (0, 0) and its length 1', () => {
		const shipLength = 1;
		const ship = Ship(0, 0, shipLength);
		expect(ship.getCoordinates()).toStrictEqual([[0, 0]]);
	});
	it('getCoordinates() returns [[0, 0], [0, 1]] when a Ship is constructed with its coordinates set to (0, 0) and its length 2', () => {
		const shipLength = 2;
		const ship = Ship(0, 0, shipLength);
		expect(ship.getCoordinates()).toStrictEqual([
			[0, 0],
			[0, 1],
		]);
	});
	it("getCoordinates() returns [[0, 0], [1, 0]] when a Ship is constructed with its coordinates set to (0, 0), its length 2, and its orientation 'h'", () => {
		const shipLength = 2;
		const ship = Ship(0, 0, shipLength, 'h');
		expect(ship.getCoordinates()).toStrictEqual([
			[0, 0],
			[1, 0],
		]);
	});
    it("getCoordinates() returns [[0, 0], [1, 0], [2, 0]] when a Ship is constructed with its coordinates set to (0, 0), its length 3, and its orientation 'h'", () => {
		const shipLength = 3;
		const ship = Ship(0, 0, shipLength, 'h');
		expect(ship.getCoordinates()).toStrictEqual([
			[0, 0],
			[1, 0],
            [2, 0],
		]);
	});
});
