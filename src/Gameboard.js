import Ship from './Ship.js';

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

export default Gameboard;
