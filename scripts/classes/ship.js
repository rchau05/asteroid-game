;(function (root) {
  // set up you're namespace like this in every file
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  //include external files
  var MovingObject = Asteroids.MovingObject;

  var MAX_SPEED = 4;
  var RADIUS = 10;

  var Ship = Asteroids.Ship = function (options) {
    this.position = {x: 255, y: 255};
    this.velocity = {x: 0, y: 0};;
    this.direction = 0; //radians
    this.radius = RADIUS;
    this.color = 'gray';
  };
  // This is an example of 'inheritance'
  Ship.prototype = new Asteroids.MovingObject({});

  Ship.prototype.draw = function (context) {
    MovingObject.prototype.draw.call(this, context)

    context.strokeStyle = this.color;
    context.lineWidth = 2;
    context.beginPath();

    var circleX = this.position.x + this.radius * Math.cos(this.direction);
    var circleY = this.position.y + this.radius * Math.sin(this.direction);

    context.arc(
      circleX, // the x position
      circleY, // the y position
      2,                  // circle radius
      0,                  // start angle
      2 * Math.PI,        // end angle
      false               // counter-clockwise
    );

    context.stroke();
  }

  Ship.prototype.move = function () {
    this.turn();

    var accelerating = key.isPressed('up')

    if (accelerating) {
      this.velocity.x += Math.cos(this.direction) / 10;
      this.velocity.y += Math.sin(this.direction) / 10;
    }

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

  }

  Ship.prototype.turn = function () {
    var turningLeft = key.isPressed('left')    
    var turningRight = key.isPressed('right')

    if (turningLeft) {
      this.direction = this.direction - (2 * Math.PI) / 100;
    } 

    if (turningRight) {
      this.direction = this.direction + (2 * Math.PI) / 100;
    }
  }

})(window);