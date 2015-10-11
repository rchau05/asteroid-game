;(function (root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});

	var canvas = document.getElementById('play-box');
	var context = canvas.getContext('2d');

	var game = new Asteroids.Game({ context: context })
	Asteroids.game = game;

	game.play();

})(window);
