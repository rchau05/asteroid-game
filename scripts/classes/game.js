;(function (root) {
  // set up you're namespace like this in every file
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship;

  var MIN_ASTEROIDS = 20;

  var Game = Asteroids.Game = function (options) {
    this.context = options.context;
    this.asteroids = [];
    this.bullets = [];
    this.ship = new Ship();
    this.subscribeEvents();
  };

  Game.prototype.subscribeEvents = function () {
    var self = this;

    key('space', function () {
      var bullet = self.ship.shoot();

      self.bullets.push(bullet);
    })
  };

  Game.prototype.move = function() {
    _.each(this.asteroids, function(asteroid) {
      asteroid.move();
    });

    _.each(this.bullets, function(bullet) {
      bullet.move();
    });

    this.ship.move()
  };

  Game.prototype.addAsteroids = function() {
    while (this.asteroids.length < MIN_ASTEROIDS) {
      this.asteroids.push(Asteroids.Asteroid.createRandom());
    }
  };

  Game.prototype.draw = function() {
    var self = this;

    self.context.clearRect(0, 0, 500, 500);
    _.each(this.asteroids, function(asteroid) {
      asteroid.draw(self.context);
    });

    _.each(this.bullets, function(bullet) {
      bullet.draw(self.context);
    });

    this.ship.draw(self.context);
  };

  Game.prototype.step = function() {
    this.addAsteroids();
    this.move();
    this.draw();
    this.removeOutOfBounds();
  };

  Game.prototype.play = function() {
    var self = this;

    setInterval(function() {
      self.step();
    }, 1000/60)
  };

  Game.prototype.removeOutOfBounds = function() {
    this.asteroids = _.reject(this.asteroids, function(asteroid) {
      return asteroid.outOfBounds({width: 500, height: 500})
    });

    this.bullets = _.reject(this.bullets, function(bullet) {
      return bullet.outOfBounds({width: 500, height: 500})
    });
  }


})(window);