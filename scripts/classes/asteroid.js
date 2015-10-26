;(function (root) {
  // set up you're namespace like this in every file
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MAX_SPEED = 2;
  var RADIUS = 10;

  var Asteroid = Asteroids.Asteroid = function (options) {
    this.position = options.position;
    this.velocity = options.velocity;
    this.radius = RADIUS;
    this.color = 'gray';
  };

  Asteroid.prototype = new Asteroids.MovingObject({});

  Asteroid.createRandom = function () {
    return new Asteroid({
      position: Asteroid.randomPosition(),
      velocity: Asteroids.utility.randomVector(MAX_SPEED)
    })
  };

  Asteroid.randomPosition = function () {
    var position = {
      x: 500 * Math.random(),
      y: 500 * Math.random()
    };

    var edgeAxis = _.sample(['x', 'y']);
    var edgePosition = _.sample([0, 500]);

    if (edgeAxis === 'x') {
      if (edgePosition === 0) {
        position.x = edgePosition + 1 - RADIUS;
      } else {
        position.x = edgePosition - 1 + RADIUS;
      }
    } else if (edgeAxis === 'y') {
      if (edgePosition === 0) {
        position.y = edgePosition + 1 - RADIUS;
      } else {
        position.y = edgePosition - 1 + RADIUS;
      }
    }

    return position;
  };

})(window);