const View = require('./ttt-view');// require appropriate file
const Game = require('../solution/game.js');// require appropriate file

$( () => {
  const game = new Game();
  const $container = $('figure');
  const view = new View(game, $container);
  
});
