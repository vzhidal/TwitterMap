'use strict';

/**
 * @ngdoc directive
 * @name twitterMapApp.directive:tagsFilter
 * @description
 * # tagsFilter
 */
angular.module('twitterMapApp')
	.directive('tagsFilter', function() {
		return {
			restrict: 'A',
			templateUrl: 'templates/tags-filter.html',
			replace: true,
			scope: {
				tagsQuery: '=',
				tags: '='
			},
			controller: function($scope, $q) {


				$scope.loadTags = function(query) {
					var deferred = $q.defer();

					var autocompleteTags = [];

					angular.forEach($scope.tags, function(item) {
						if(item.name.indexOf(query) !== -1) {
							autocompleteTags.push({text: item.name});
						}
					});

					deferred.resolve(autocompleteTags);

					return deferred.promise;
				};

				$scope.tagAdded = function(tag) {
				};

				$scope.tagRemoved = function(tag) {
				};
			}
		};
	});
