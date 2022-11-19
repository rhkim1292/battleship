import Ship from './Ship.js';

const Gameboard = () => {
    const boardArr = Array.from({ length: 10 }, (e, idxY) => Array.from({ length: 10}, (e, idxX) => [idxX, idxY]));
    const valueAt = (x, y) => {
        return boardArr[y][x];
    }
    const placeShip = (ship) => {
        const shipCoordinates = ship.getCoordinates();
        for (let i = 0; i < shipCoordinates.length; i++) {
            boardArr[shipCoordinates[i][1]][shipCoordinates[i][0]] = ship;
        }
    };
    return {
        valueAt,
        placeShip,
    }
}

export default Gameboard;