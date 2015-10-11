;(function (root) {
    var _ = root._ = (root._ || {});

    // start writing your code here
    _.each = function (array, callback) {
    	for(var i = 0; array.length > i; i++) {
    		var element = array[i];

    		callback(element);
    	}
    };

    _.any = function (array, callback) {
    	var atLeastOneTruthy = false;

    	for(var i = 0; i < array.length; i++) {
    		var element = array[i];

    		if (atLeastOneTruthy) {
    			atLeastOneTruthy = true;
    		} else {
    			atLeastOneTruthy = !!callback(element);
    		}
    	}

    	return !!atLeastOneTruthy;
    };

    _.map = function (array, callback) {
    	var newArray = [];

    	for (var i = 0; array.length > i; i++) {
    		var element = array[i];

    		newArray.push(callback(element));    		
    	}

    	return newArray;
    };

    _.select = function(array, callback) {

    	var newArray = [];

    	for (var i = 0; i < array.length; i++) {
    		var element = array[i];

    		if (callback(element)) {
    			newArray.push(element)
    		}
    	}

    	return newArray;
    };

    _.reject = function(array, testFunction) {

    	newArray = [];

    	for (var i = 0; i < array.length; i++) {
    		var element = array[i];

    		if (!testFunction(element)) {
    			newArray.push(element)
    		}
    	}

    	return newArray;
    }

    _.reduce = function (array, callback, valueSoFar) {

    	for (var i = 0; i < array.length; i++) {
    		var element = array[i];
    		// run callback and return with valueSoFar
    		valueSoFar = callback(valueSoFar, element);
    	}
    	return valueSoFar;
    }

    _.sample = function (array) {
        var index =  Math.floor(Math.random() * array.length);
        return array[index];
    }

})(window);