import Player from './Player.js';
import Gameboard from './Gameboard.js';

describe('name getter functionality', () => {
	it('the getter name property of a player object should properly return the player name', () => {
        const board = Gameboard();
		const player = Player('Randy', board);
		expect(player.name).toBe('Randy');
	});

	it('the getter for the player name should not allow for assigning new values', () => {
        const board = Gameboard();
		const player = Player('Randy', board);
		expect(() => (player.name = 'New Name')).toThrow();
	});
});

describe('board getter functionality', () => {
    it('the getter method for the player board should return the proper Gameboard object', () => {
        const board = Gameboard();
        const player = Player('Randy', board);
        expect(player.board).toStrictEqual(board);
    });
    it('trying to set the player board with the getter should throw an error', () => {
        const board = Gameboard();
        const board2 = Gameboard();
        const player = Player('Randy', board);
        expect(() => player.board = board2).toThrow();
    })
});