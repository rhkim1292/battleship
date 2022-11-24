import './style.css';

const DOMHandler = (() => {
	const title = document.createElement('h1');
	title.textContent = 'Battleship!';
	const gameContainer = document.createElement('div');
	gameContainer.classList.add('game-container');
	const p1Container = document.createElement('div');
	p1Container.classList.add('p1-container');
	const p2Container = document.createElement('div');
	p2Container.classList.add('p2-container');
	gameContainer.append(p1Container, p2Container);
	document.body.append(title, gameContainer);

	const createGameboardElement = (gameboard) => {
		// const placeholder = document.createElement('p');
		// placeholder.textContent = 'Gameboard grid goes here!';
		// return placeholder;
		const gameboardElement = document.createElement('div');
		gameboardElement.classList.add('gameboard');

		for (let y = 0; y < 10; y++) {
			for (let x = 0; x < 10; x++) {
				let tile = document.createElement('div');
				tile.classList.add('board-cell');
				tile.setAttribute('data-x', `${x}`);
				tile.setAttribute('data-y', `${y}`);
				gameboardElement.appendChild(tile);
			}
		}

		return gameboardElement;
	};

	const renderPlayerData = (player, queryString) => {
		const playerContainer = document.querySelector(queryString);
		const playerContainerColumns = document.createElement('div');
		playerContainerColumns.classList.add('player-container-cols');
		const playerBoardHeader = document.createElement('h2');
		playerBoardHeader.textContent = `${player.name}'s Board`;
		const playerGameboard = createGameboardElement(player.board);
		playerContainerColumns.append(playerBoardHeader, playerGameboard);
		playerContainer.appendChild(playerContainerColumns);
	};
	
	return {
		renderPlayerData,
	};
})();

export default DOMHandler;
