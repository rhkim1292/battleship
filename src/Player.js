import Gameboard from './Gameboard.js';

const Player = (name, gameboard, cpu = false) => {
	const playerName = name;
	const board = gameboard;
    let opponent;
	const isCPU = cpu;
	let isMyTurn = false;
	const startTurn = () => {
		isMyTurn = true;
	};
	const endTurn = () => {
		isMyTurn = false;
	};
    const setOpponent = (player) => {
        opponent = player;
    }
	const calculateDecision = () => {
        if (!opponent) throw new Error('Set opponent first!');
		const decision = [];
		while (true) {
			const x = Math.floor(Math.random() * 10)
			const y = Math.floor(Math.random() * 10)
			if (
				opponent.board.valueAt(x, y) === 'hit' ||
				opponent.board.valueAt(x, y) === 'missed'
			)
				continue;
            else {
                decision.push(x);
                decision.push(y);
                return decision;
            }
		}
	};
	return {
		get name() {
			return playerName;
		},
		get board() {
			return board;
		},
        get opponent() {
            return opponent;
        },
		get isCPU() {
			return isCPU;
		},
		get isMyTurn() {
			return isMyTurn;
		},
		startTurn,
		endTurn,
        setOpponent,
		calculateDecision,
	};
};

export default Player;
