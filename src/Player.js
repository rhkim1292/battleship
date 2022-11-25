import Gameboard from './Gameboard.js';

const Player = (name, gameboard, cpu= false) => {
    const playerName = name;
    const board = gameboard;
    const isCPU = cpu;
    let isMyTurn = false;
    const startTurn = () => {
        isMyTurn = true;
    };
    const endTurn = () => {
        isMyTurn = false;
    };
    const calculateDecision = () => {
        const decision = [];
        decision.push(Math.floor(Math.random() * 10));
        decision.push(Math.floor(Math.random() * 10));
        return decision;
    };
    return {
        get name() {
            return playerName;
        },
        get board() {
            return board;
        },
        get isCPU() {
            return isCPU;
        },
        get isMyTurn() {
            return isMyTurn;
        },
        startTurn,
        endTurn,
        calculateDecision,
    }
};

export default Player;