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
	};

	let randomDecisionOrigin = [];
	let lastDecisionLoc = [];
	let currentTargetShip;
	let checkDirection = 'up';
	const calculateDecision = () => {
		if (!opponent) throw new Error('Set opponent first!');

		const decision = [];
		
		if (currentTargetShip && currentTargetShip.isSunk()) {
			currentTargetShip = null;
			checkDirection = 'up';
		}

		while (!currentTargetShip) {
			const x = Math.floor(Math.random() * 10);
			const y = Math.floor(Math.random() * 10);
			randomDecisionOrigin.pop();
			randomDecisionOrigin.pop();
			lastDecisionLoc.pop();
			lastDecisionLoc.pop();
			if (
				opponent.board.valueAt(x, y) === 'hit' ||
				opponent.board.valueAt(x, y) === 'missed'
			)
				continue;

			if (opponent.board.isShip(x, y))
				currentTargetShip = opponent.board.valueAt(x, y);
			decision.push(x);
			decision.push(y);
			randomDecisionOrigin.push(x);
			randomDecisionOrigin.push(y);
			lastDecisionLoc.push(x);
			lastDecisionLoc.push(y);
			return decision;
		}

		if (
			opponent.board.valueAt(lastDecisionLoc[0], lastDecisionLoc[1]) ===
				'missed' &&
			checkDirection === 'up'
		) {
			checkDirection = 'right';
			lastDecisionLoc[0] = randomDecisionOrigin[0];
			lastDecisionLoc[1] = randomDecisionOrigin[1];
		}

		if (
			opponent.board.valueAt(lastDecisionLoc[0], lastDecisionLoc[1]) ===
				'missed' &&
			checkDirection === 'right'
		) {
			checkDirection = 'down';
			lastDecisionLoc[0] = randomDecisionOrigin[0];
			lastDecisionLoc[1] = randomDecisionOrigin[1];
		}

		if (
			opponent.board.valueAt(lastDecisionLoc[0], lastDecisionLoc[1]) ===
				'missed' &&
			checkDirection === 'down'
		) {
			checkDirection = 'left';
			lastDecisionLoc[0] = randomDecisionOrigin[0];
			lastDecisionLoc[1] = randomDecisionOrigin[1];
		}

		if (lastDecisionLoc[1] - 1 < 0 && checkDirection === 'up') {
			checkDirection = 'right';
			lastDecisionLoc[0] = randomDecisionOrigin[0];
			lastDecisionLoc[1] = randomDecisionOrigin[1];
		}
		if (lastDecisionLoc[0] + 1 > 9 && checkDirection === 'right') {
			checkDirection = 'down';
			lastDecisionLoc[0] = randomDecisionOrigin[0];
			lastDecisionLoc[1] = randomDecisionOrigin[1];
		}
		if (lastDecisionLoc[1] + 1 > 9 && checkDirection === 'down') {
			checkDirection = 'left';
			lastDecisionLoc[0] = randomDecisionOrigin[0];
			lastDecisionLoc[1] = randomDecisionOrigin[1];
		}
		
		if (checkDirection === 'up') {
			decision.push(lastDecisionLoc[0]);
			decision.push(lastDecisionLoc[1] - 1);
			lastDecisionLoc.pop();
			lastDecisionLoc.pop();
			lastDecisionLoc.push(decision[0]);
			lastDecisionLoc.push(decision[1]);
			return decision;
		} else if (checkDirection === 'right') {
			decision.push(lastDecisionLoc[0] + 1);
			decision.push(lastDecisionLoc[1]);
			lastDecisionLoc.pop();
			lastDecisionLoc.pop();
			lastDecisionLoc.push(decision[0]);
			lastDecisionLoc.push(decision[1]);
			return decision;
		} else if (checkDirection === 'down') {
			decision.push(lastDecisionLoc[0]);
			decision.push(lastDecisionLoc[1] + 1);
			lastDecisionLoc.pop();
			lastDecisionLoc.pop();
			lastDecisionLoc.push(decision[0]);
			lastDecisionLoc.push(decision[1]);
			return decision;
		} else if (checkDirection === 'left') {
			decision.push(lastDecisionLoc[0] - 1);
			decision.push(lastDecisionLoc[1]);
			lastDecisionLoc.pop();
			lastDecisionLoc.pop();
			lastDecisionLoc.push(decision[0]);
			lastDecisionLoc.push(decision[1]);
			return decision;
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
