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

})(window);