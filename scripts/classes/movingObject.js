;(function (root) {
  // set up you're namespace like this in every file
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function (options) {
  	this.position = options.position;
  	this.velocity = options.velocity;
  	this.radius = options.radius;
  	this.color = options.color;
  };

  MovingObject.prototype.draw = function (context) {
  	context.strokeStyle = this.color;
  	context.lineWidth = 2;
  	context.beginPath();

  	context.arc(
      this.position['x'], // the x position
      this.position['y'], // the y position
      this.radius,        // circle radius
      0,                  // start angle
      2 * Math.PI,        // end angle
      false               // counter-clockwise
  	);

  	context.stroke();
	};

	MovingObject.prototype.move = function () {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}

	MovingObject.prototype.outOfBounds = function(dimensions) {
		return (
			this.position.x < 0 - this.radius ||
			this.position.y < 0 - this.radius ||
			this.position.y > dimensions.height + this.radius ||
			this.position.x > dimensions.width + this.radius
		)
	}

})(window);

// Write a 'MovingObject#outOfBounds(bounds)' method. This method should return true if no part of the object is on screen.