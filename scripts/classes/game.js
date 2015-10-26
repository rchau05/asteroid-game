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
    this.detectCollisions();
    this.removeDestroyedAsteroids();
    this.wrapObjects();
  };

  Game.prototype.play = function() {
    var self = this;

    self.interval = setInterval(function() {
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

  Game.prototype.pause = function () {
    clearInterval(this.interval);
  }

  Game.prototype.detectCollisions = function() {
    var self = this;

    // GAME OVER CONDITION
    _.each(self.asteroids, function(asteroid) {
      if (asteroid.isCollidedWith(self.ship)) {
        self.pause();
      }
    })

    // ASTEROID / BULLET COLLITION TEST
    _.each(self.asteroids, function(asteroid) {
      _.each(self.bullets, function(bullet) {
        if (asteroid.isCollidedWith(bullet)) {
          asteroid.destroyed = true;
          bullet.destroyed = true;
        }
      })
    })
  }

  Game.prototype.removeDestroyedAsteroids = function() {
    this.asteroids = _.reject(this.asteroids, function(asteroid) {
      return asteroid.destroyed;
    });
    this.bullets = _.reject(this.bullets, function(bullet) {
      return bullet.destroyed;
    });
  }

  Game.prototype.wrapObjects = function() {
    if(this.ship.outOfBounds({width: 500, height: 500})) {
      if(this.ship.position.x < 0) {
        this.ship.position.x = this.ship.position.x + (500 + 2*this.ship.radius)
      }
      else if(this.ship.position.x > 500) {
        this.ship.position.x = this.ship.position.x - (500 + 2*this.ship.radius)
      }
      else if(this.ship.position.y < 0) {
        this.ship.position.y = this.ship.position.y+ (500 + 2*this.ship.radius)
      }
      else if(this.ship.position.y > 500) {
        this.ship.position.y = this.ship.position.y- (500 + 2*this.ship.radius)
      }
    }
  }

})(window);