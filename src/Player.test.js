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

describe('isCPU getter functionality', () => {
    it('the getter for isCPU returns false when the Player factory is called without the cpu parameter', () => {
        const board = Gameboard();
        const player = Player('Randy', board);
        expect(player.isCPU).toBe(false);
    });
    it('the getter for isCPU returns true when the Player factory is called with true passed into the cpu parameter', () => {
        const board = Gameboard();
        const player = Player('CPU', board, true);
        expect(player.isCPU).toBe(true);
    });
});

describe('startTurn() and endTurn() functionality', () => {
    it('startTurn() should set a Player\'s isMyTurn property to true', () => {
        const board = Gameboard();
        const player = Player('Randy', board);
        expect(player.isMyTurn).toBe(false);
        player.startTurn();
        expect(player.isMyTurn).toBe(true);
    });
    it('endTurn() should set a Player\'s isMyTurn property to false', () => {
        const board = Gameboard();
        const player = Player('Randy', board);
        player.startTurn();
        expect(player.isMyTurn).toBe(true);
        player.endTurn();
        expect(player.isMyTurn).toBe(false);
    });
});

describe('setOpponent() functionality', () => {
    it('calling player1\'s setOpponent method with player2 passed in should make player1\'s opponent property have the same name as player2', () => {
        const board1 = Gameboard();
        const player1 = Player('Randy', board1);
        const board2 = Gameboard();
        const player2 = Player('CPU', board2, true);

        player1.setOpponent(player2);
        expect(player1.opponent.name).toBe('CPU');
    });
    it('calling player1\'s setOpponent method with player2 passed in should make player1\'s opponent property have the same board as player2', () => {
        const board1 = Gameboard();
        const player1 = Player('Randy', board1);
        const board2 = Gameboard();
        const player2 = Player('CPU', board2, true);

        player1.setOpponent(player2);
        expect(player1.opponent.board).toStrictEqual(board2);
    });
});

describe('calculateDecision() functionality', () => {
    it('calculateDecision() should throw an error if called before setting an opponent for the player', () => {
        const board = Gameboard();
        const player = Player('Randy', board);
        expect(() => player.calculateDecision()).toThrow('Set opponent first!');
    });
    it('calculateDecision() should return an array with two elements in it', () => {
        const board1 = Gameboard();
        const player1 = Player('Randy', board1);
        const board2 = Gameboard();
        const player2 = Player('CPU', board2, true);
        player2.setOpponent(player1);
        const decision = player2.calculateDecision();
        expect(decision.length).toBe(2);
    });
    it('The first and second elements of the array returned by calculateDecision() should be a random number between 0 and 9', () => {
        const board1 = Gameboard();
        const player1 = Player('Randy', board1);
        const board2 = Gameboard();
        const player2 = Player('CPU', board2, true);
        player2.setOpponent(player1);
        const decision = player2.calculateDecision();
        expect(decision[0]).toBeGreaterThanOrEqual(0);
        expect(decision[0]).toBeLessThan(10);
        expect(decision[1]).toBeGreaterThanOrEqual(0);
        expect(decision[1]).toBeLessThan(10);
    });
});