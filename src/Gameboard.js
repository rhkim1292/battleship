import Ship from './Ship.js';

const Gameboard = () => {
	const boardArr = Array.from({ length: 10 }, (e, idxY) =>
		Array.from({ length: 10 }, (e, idxX) => [idxX, idxY])
	);
	const valueAt = (x, y) => {
		return boardArr[y][x];
	};
	const placeShip = (ship) => {
		const shipCoordinates = ship.getCoordinates();

		// Check if all of the coordinates the ship will take up are all not undefined
		for (let i = 0; i < shipCoordinates.length; i++) {
			if (!boardArr[shipCoordinates[i][1]])
				throw new Error(
					'That ship cannot be placed at those coordinates!'
				);
			if (!boardArr[shipCoordinates[i][1]][shipCoordinates[i][0]])
				throw new Error(
					'That ship cannot be placed at those coordinates!'
				);
		}

		// Once the initial loop passes without throwing an error, place a reference
		// to the ship at all of the coordinates
		for (let i = 0; i < shipCoordinates.length; i++) {
			boardArr[shipCoordinates[i][1]][shipCoordinates[i][0]] = ship;
		}
	};
	return {
		valueAt,
		placeShip,
	};
};

export default Gameboard;
