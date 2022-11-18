import Ship from './Ship.js';

const Gameboard = () => {
    const boardArr = Array.from({ length: 10 }, (e, idxY) => Array.from({ length: 10}, (e, idxX) => [idxX, idxY]));
    const placeShip = (x, y) => {
        
    };
    return {
        placeShip,
    }
}

export default Gameboard;