import GameState from 'states/GameState';
import PlayState from 'states/PlayState';

class Game extends Phaser.Game {

	constructor() {
		super(500, 500, Phaser.AUTO, 'content', null);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}

	// constructor() {
	// 	super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'content', null);
	// 	this.state.add('PlayState', PlayState, false);
	// 	this.state.start('PlayState');
	// }

}

new Game();
