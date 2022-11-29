import './style.css';
import Ship from './Ship.js';
import mainGameLoop from './index.js';

const DOMHandler = (() => {
	const title = document.createElement('h1');
	title.textContent = 'Battleship!';
	const textAnnouncer = document.createElement('h2');
	textAnnouncer.classList.add('text-announcer');
	const gameContainer = document.createElement('div');
	gameContainer.classList.add('game-container');
	// const p1Container = document.createElement('div');
	// p1Container.classList.add('p1-container');
	// gameContainer.append(p1Container);
	// const p2Container = document.createElement('div');
	// p2Container.classList.add('p2-container');
	// gameContainer.append(p1Container, p2Container);
	document.body.append(title, textAnnouncer, gameContainer);

	const renderGameboard = (gameboardElement, gameboard, hidden = false) => {
		gameboardElement.innerHTML = '';
		for (let y = 0; y < 10; y++) {
			for (let x = 0; x < 10; x++) {
				let tile = document.createElement('div');
				tile.classList.add('board-cell');
				if (gameboard.isShip(x, y)) hidden ? tile.classList.add('empty-cell') : tile.classList.add('ship-cell');
				else if (Array.isArray(gameboard.valueAt(x, y)))
					tile.classList.add('empty-cell');
				else if (gameboard.valueAt(x, y) === 'missed')
					tile.classList.add('missed-cell');
				else if (gameboard.valueAt(x, y) === 'hit')
					tile.classList.add('hit-cell');
				tile.setAttribute('id', `cell${x}-${y}`);
				tile.setAttribute('data-x', `${x}`);
				tile.setAttribute('data-y', `${y}`);
				gameboardElement.appendChild(tile);
			}
		}
	};

	const createGameboardElement = (gameboard, hidden = false) => {
		const gameboardElement = document.createElement('div');
		gameboardElement.classList.add('gameboard');
		renderGameboard(gameboardElement, gameboard, hidden);
		return gameboardElement;
	};

	const renderPlayerData = (player, queryString, hidden = false) => {
		const playerContainer = document.querySelector(queryString);
		playerContainer.innerHTML = '';
		const playerContainerColumns = document.createElement('div');
		playerContainerColumns.classList.add('player-container-cols');
		const playerBoardHeader = document.createElement('h2');
		playerBoardHeader.textContent = `${player.name}'s Board`;
		const playerGameboard = createGameboardElement(player.board, hidden);
		playerContainerColumns.append(playerBoardHeader, playerGameboard);
		playerContainer.appendChild(playerContainerColumns);
	};

	const displayAnnouncement = (string) => {
		textAnnouncer.textContent = string;
	};

	let shipOrientationVertical = true;

	const colorHoveredCell = (e, shipLength) => {
		const hoverCellX = Number(e.target.dataset.x);
		const hoverCellY = Number(e.target.dataset.y);
		if (shipOrientationVertical) {
			for (let i = 0; i < shipLength; i++) {
				document.querySelector(`#cell${hoverCellX}-${hoverCellY + i}`).classList.add('hover-ship-cell');
			}
		}
		else {
			for (let i = 0; i < shipLength; i++) {
				document.querySelector(`#cell${hoverCellX + i}-${hoverCellY}`).classList.add('hover-ship-cell');
			}
		}
	};

	const decolorHoveredCell = (e, shipLength) => {
		const hoverCellX = Number(e.target.dataset.x);
		const hoverCellY = Number(e.target.dataset.y);
		if (shipOrientationVertical) {
			for (let i = 0; i < shipLength; i++) {
				document.querySelector(`#cell${hoverCellX}-${hoverCellY + i}`).classList.remove('hover-ship-cell');
			}
		}
		else {
			for (let i = 0; i < shipLength; i++) {
				document.querySelector(`#cell${hoverCellX + i}-${hoverCellY}`).classList.remove('hover-ship-cell');
			}
		}
	};

	const renderPatrolBoatPlacer = (player) => {
		displayAnnouncement('Choose where to place your Patrol Boat.');
		const playerGameboardElement = document.querySelector('div.game-container div.gameboard');
		playerGameboardElement.addEventListener('mouseover', (e) => {
			colorHoveredCell(e, 2);
		});
		playerGameboardElement.addEventListener('mouseout', (e) => {
			decolorHoveredCell(e, 2);
		});
		playerGameboardElement.addEventListener('click', (e) => {
			const clickedCellX = Number(e.target.dataset.x);
			const clickedCellY = Number(e.target.dataset.y);
			try {
				player.board.placeShip(Ship('Patrol Boat', clickedCellX, clickedCellY, 2, shipOrientationVertical ? 'v' : 'h'));
			} catch (e) {
				displayAnnouncement('The Patrol Boat cannot be placed there! Choose a different cell!');
				return;
			}
			renderGameboard(playerGameboardElement, player.board);
			// Remove all event listeners by cloning the element and replacing the original with the clone
			const clone = playerGameboardElement.cloneNode(true);
			playerGameboardElement.replaceWith(clone);
			const gameContainer = document.querySelector('div.game-container');
			gameContainer.innerHTML = '';
			const p1Container = document.createElement('div');
			p1Container.classList.add('p1-container');
			gameContainer.append(p1Container);
			const p2Container = document.createElement('div');
			p2Container.classList.add('p2-container');
			gameContainer.append(p1Container, p2Container);
			shipOrientationVertical = true;
			mainGameLoop.beginGame();
		});
	};

	const renderSubmarinePlacer = (player) => {
		displayAnnouncement('Choose where to place your Submarine.');
		const playerGameboardElement = document.querySelector('div.game-container div.gameboard');
		playerGameboardElement.addEventListener('mouseover', (e) => {
			colorHoveredCell(e, 3);
		});
		playerGameboardElement.addEventListener('mouseout', (e) => {
			decolorHoveredCell(e, 3);
		});
		playerGameboardElement.addEventListener('click', (e) => {
			const clickedCellX = Number(e.target.dataset.x);
			const clickedCellY = Number(e.target.dataset.y);
			try {
				player.board.placeShip(Ship('Submarine', clickedCellX, clickedCellY, 3, shipOrientationVertical ? 'v' : 'h'));
			} catch (e) {
				displayAnnouncement('The Submarine cannot be placed there! Choose a different cell!');
				return;
			}
			renderGameboard(playerGameboardElement, player.board);
			// Remove all event listeners by cloning the element and replacing the the original with the clone
			const clone = playerGameboardElement.cloneNode(true);
			playerGameboardElement.replaceWith(clone);
			renderPatrolBoatPlacer(player);
			shipOrientationVertical = true;
		});
	};

	const renderDestroyerPlacer = (player) => {
		displayAnnouncement('Choose where to place your Destroyer.');
		const playerGameboardElement = document.querySelector('div.game-container div.gameboard');
		playerGameboardElement.addEventListener('mouseover', (e) => {
			colorHoveredCell(e, 3);
		});
		playerGameboardElement.addEventListener('mouseout', (e) => {
			decolorHoveredCell(e, 3);
		});
		playerGameboardElement.addEventListener('click', (e) => {
			const clickedCellX = Number(e.target.dataset.x);
			const clickedCellY = Number(e.target.dataset.y);
			try {
				player.board.placeShip(Ship('Destroyer', clickedCellX, clickedCellY, 3, shipOrientationVertical ? 'v' : 'h'));
			} catch (e) {
				displayAnnouncement('The Destroyer cannot be placed there! Choose a different cell!');
				return;
			}
			renderGameboard(playerGameboardElement, player.board);
			// Remove all event listeners by cloning the element and replacing the the original with the clone
			const clone = playerGameboardElement.cloneNode(true);
			playerGameboardElement.replaceWith(clone);
			renderSubmarinePlacer(player);
			shipOrientationVertical = true;
		});
	};
	const renderBattleshipPlacer = (player) => {
		displayAnnouncement('Choose where to place your Battleship.');
		const playerGameboardElement = document.querySelector('div.game-container div.gameboard');
		playerGameboardElement.addEventListener('mouseover', (e) => {
			colorHoveredCell(e, 4);
		});
		playerGameboardElement.addEventListener('mouseout', (e) => {
			decolorHoveredCell(e, 4);
		});
		playerGameboardElement.addEventListener('click', (e) => {
			const clickedCellX = Number(e.target.dataset.x);
			const clickedCellY = Number(e.target.dataset.y);
			try {
				player.board.placeShip(Ship('Battleship', clickedCellX, clickedCellY, 4, shipOrientationVertical ? 'v' : 'h'));
			} catch (e) {
				displayAnnouncement('The Battleship cannot be placed there! Choose a different cell!');
				return;
			}
			renderGameboard(playerGameboardElement, player.board);
			// Remove all event listeners by cloning the element and replacing the the original with the clone
			const clone = playerGameboardElement.cloneNode(true);
			playerGameboardElement.replaceWith(clone);
			renderDestroyerPlacer(player);
			shipOrientationVertical = true;
		});
	};

	const renderCarrierPlacer = (player) => {
		displayAnnouncement('Choose where to place your Carrier.');
		const playerGameboardElement = document.querySelector('div.game-container div.gameboard');
		playerGameboardElement.addEventListener('mouseover', (e) => {
			colorHoveredCell(e, 5);
		});
		playerGameboardElement.addEventListener('mouseout', (e) => {
			decolorHoveredCell(e, 5);
		});
		playerGameboardElement.addEventListener('click', (e) => {
			const clickedCellX = Number(e.target.dataset.x);
			const clickedCellY = Number(e.target.dataset.y);
			try {
				player.board.placeShip(Ship('Carrier', clickedCellX, clickedCellY, 5, shipOrientationVertical ? 'v' : 'h'));
			} catch (e) {
				displayAnnouncement('The Carrier cannot be placed there! Choose a different cell!');
				return;
			}
			renderGameboard(playerGameboardElement, player.board);
			// Remove all event listeners by cloning the element and replacing the the original with the clone
			const clone = playerGameboardElement.cloneNode(true);
			playerGameboardElement.replaceWith(clone);
			renderBattleshipPlacer(player);
			shipOrientationVertical = true;
		});
	};

	const renderShipPlacer = (player) => {
		renderPlayerData(player, 'div.game-container');
		const playerBoardHeader = document.querySelector('div.game-container div.player-container-cols h2');
		const changeOrientationBtn = document.createElement('button');
		changeOrientationBtn.classList.add('change-orientation');
		changeOrientationBtn.textContent = 'Change Orientation';
		changeOrientationBtn.addEventListener('click', (e) => {
			shipOrientationVertical = !shipOrientationVertical;
		});
		playerBoardHeader.appendChild(changeOrientationBtn);
		renderCarrierPlacer(player);
	};

	return {
		renderGameboard,
		renderPlayerData,
		displayAnnouncement,
		renderShipPlacer,
	};
})();

export default DOMHandler;
