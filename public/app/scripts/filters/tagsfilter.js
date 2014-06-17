'use strict';

/**
 * @ngdoc filter
 * @name twitterMapApp.filter:tagsFilter
 * @function
 * @description
 * # tagsFilter
 * Filter in the twitterMapApp.
 */
angular.module('twitterMapApp')
	.filter('tagsFilter', function() {
		return function(tweets, tagsQuery) {
			return _.filter(tweets, function(tweet) {
				var message = tweet.text.split(' ');
				for(var i = 0; i < message.length; i++) {
					if(_.where(tagsQuery, {text: message[i]}).length) {
						return true;
					}
				}

				return false;

			});
		};
	});
