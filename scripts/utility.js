;(function (root) {
  // set up you're namespace like this in every file
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var utility = Asteroids.utility = {
    randomVector: function(maxSpeed) {
      var speed = maxSpeed * Math.random();
      var direction = 2 * Math.PI * Math.random();
      return {
        x: speed * Math.cos(direction),
        y: speed * Math.sin(direction)
      }
    },

    distance: function (position1, position2) {
      var dx = position2.x - position1.x;
      var dy = position2.y - position1.y;
      return Math.sqrt(dx*dx + dy*dy);
    }
  };

})(window);