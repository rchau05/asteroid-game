;(function (root) {
  // set up you're namespace like this in every file
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MAX_SPEED = 2;

  var Asteroid = Asteroids.Asteroid = function (options) {
    this.position = options.position;
    this.velocity = options.velocity;
    this.radius = 10;
    this.color = 'green';
  };

  Asteroid.prototype = new Asteroids.MovingObject({});

  Asteroid.createRandom = function () {
    return new Asteroid({
      position: {x: MAX_SPEED * Math.random(), y: MAX_SPEED * Math.random()},
      velocity: {x: MAX_SPEED * Math.random(), y: MAX_SPEED * Math.random()}
    })
  };

})(window);