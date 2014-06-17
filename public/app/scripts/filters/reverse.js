'use strict';

/**
 * @ngdoc filter
 * @name twitterMapApp.filter:reverse
 * @function
 * @description
 * # reverse
 * Filter in the twitterMapApp.
 */
angular.module('twitterMapApp')
	.filter('reverse', function() {
		return function(items) {
			return items.slice().reverse();
		};
	});
