import './style.css';

const DOMHandler = (() => {
	const title = document.createElement('h1');
	title.textContent = 'Battleship!';
	const textAnnouncer = document.createElement('h2');
	textAnnouncer.classList.add('text-announcer');
	const gameContainer = document.createElement('div');
	gameContainer.classList.add('game-container');
	const p1Container = document.createElement('div');
	p1Container.classList.add('p1-container');
	const p2Container = document.createElement('div');
	p2Container.classList.add('p2-container');
	gameContainer.append(p1Container, p2Container);
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
				tile.setAttribute('data-x', `${x}`);
				tile.setAttribute('data-y', `${y}`);
				gameboardElement.appendChild(tile);
			}
		}
	};

	const createGameboardElement = (gameboard, hidden) => {
		// const placeholder = document.createElement('p');
		// placeholder.textContent = 'Gameboard grid goes here!';
		// return placeholder;
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

	return {
		renderGameboard,
		renderPlayerData,
		displayAnnouncement,
	};
})();

export default DOMHandler;
