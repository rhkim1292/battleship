import Gameboard from './Gameboard.js';

const Player = (name, gameboard, cpu= false) => {
    const playerName = name;
    const board = gameboard;
    const isCPU = cpu;
    return {
        get name() {
            return playerName;
        },
        get board() {
            return board;
        }
    }
};

export default Player;