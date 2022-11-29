import Player from './Player.js';
import Ship from './Ship.js';
import Gameboard from './Gameboard.js';
import DOMHandler from './DOMHandler.js';

const mainGameLoop = (() => {
	const switchTurns = () => {
		if (p1.isMyTurn) {
			p1.endTurn();
			p2.startTurn();
		} else {
			p1.startTurn();
			p2.endTurn();
		}
	};

	let gameEnd = false;
	const p1Gameboard = Gameboard();
	const p1 = Player(prompt('Enter your name.'), p1Gameboard);
	DOMHandler.renderShipPlacer(p1);
	const p2Gameboard = Gameboard();
	const p2 = Player('CPU', p2Gameboard);
	const shipArr = [];
	shipArr.push(['Carrier', 5]);
	shipArr.push(['BattleShip', 4]);
	shipArr.push(['Destroyer', 3]);
	shipArr.push(['Submarine', 3]);
	shipArr.push(['Patrol Boat', 2]);
	p2Gameboard.placeShipsRandomly(shipArr);
	const beginGame = () => {
		DOMHandler.renderPlayerData(p1, 'div.p1-container');
		DOMHandler.renderPlayerData(p2, 'div.p2-container', true);
		p1.setOpponent(p2);
		p2.setOpponent(p1);
		const p1GameboardElement = document.querySelector(
			'div.p1-container div.gameboard'
		);
		const p2GameboardElement = document.querySelector(
			'div.p2-container div.gameboard'
		);
		p1.startTurn();
		DOMHandler.displayAnnouncement(
			`${p1.name} goes first! Pick a coordinate on ${p2.name}'s board to attack!`
		);

		p2GameboardElement.addEventListener('click', (e) => {
			if (!p1.isMyTurn || gameEnd) return;
			if (
				p2Gameboard.valueAt(e.target.dataset.x, e.target.dataset.y) ===
					'missed' ||
				p2Gameboard.valueAt(e.target.dataset.x, e.target.dataset.y) ===
					'hit'
			) {
				DOMHandler.displayAnnouncement(
					'That cell has already been attacked. Choose another cell.'
				);
				return;
			}

			p2Gameboard.receiveAttack(
				Number(e.target.dataset.x),
				Number(e.target.dataset.y)
			);
			DOMHandler.renderGameboard(p2GameboardElement, p2Gameboard, true);
			if (p2Gameboard.allShipsSunk()) {
				gameEnd = true;
				DOMHandler.displayAnnouncement(`${p1.name} wins!`);
				return;
			}
			switchTurns();
			const p2Decision = p2.calculateDecision();
			p1Gameboard.receiveAttack(p2Decision[0], p2Decision[1]);
			if (p1Gameboard.valueAt(p2Decision[0], p2Decision[1]) === 'hit')
				DOMHandler.displayAnnouncement(
					`${p2.name} hit one of ${p1.name}'s ships! Your turn ${p1.name}!`
				);
			if (p1Gameboard.valueAt(p2Decision[0], p2Decision[1]) === 'missed')
				DOMHandler.displayAnnouncement(
					`${p2.name} missed! Your turn ${p1.name}!`
				);
			DOMHandler.renderGameboard(p1GameboardElement, p1Gameboard, false);
			if (p1Gameboard.allShipsSunk()) {
				gameEnd = true;
				DOMHandler.displayAnnouncement(`${p2.name} wins!`);
				return;
			}
			switchTurns();
		});
	};

	return {
		beginGame,
	};
})();

export default mainGameLoop;
