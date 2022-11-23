import './style.css';

const DOMHandler = (() => {
	const GAME_CONTAINER_WIDTH = 800;

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
		const placeholder = document.createElement('p');
		placeholder.textContent = 'Gameboard grid goes here!';
		return placeholder;
	};
	const renderPlayerData = (player, queryString) => {
		const p1Container = document.querySelector(queryString);
		const playerBoardHeader = document.createElement('h2');
		playerBoardHeader.textContent = `${player.name}'s Board`;
		const playerGameboard = createGameboardElement(player.board);
		p1Container.append(playerBoardHeader, playerGameboard);
	};
	return {
		renderPlayerData,
	};
})();

export default DOMHandler;
