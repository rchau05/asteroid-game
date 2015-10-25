;(function (root) {

	// set up you're namespace like this in every file
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  //include external files
	var MovingObject = Asteroids.MovingObject;

  var SPEED = 4;
  var RADIUS = 2;

  var Bullet = Asteroids.Bullet = function (options) {
    this.position  = options.position;
    this.direction = options.direction; //radians
    this.velocity  = {
    	x: SPEED * Math.cos(this.direction), 
    	y: SPEED * Math.sin(this.direction)
    };
    this.radius    = RADIUS;
    this.color     = 'green';
  };

  // This is an example of 'inheritance'
  Bullet.prototype = new Asteroids.MovingObject({});
})(window);