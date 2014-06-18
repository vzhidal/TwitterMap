'use strict';

angular.module('twitterMapApp')
	.controller('PersonCtrl', function ($scope, personSide) {
		$scope.tags = personSide.tags;

		$scope.filteredTweets = [];

		$scope.tagsQuery = [];

		$scope.addTagg = function(tagg) {
			if(!_.where($scope.tagsQuery, {text: tagg}).length) {
				$scope.tagsQuery.push({text: tagg});
			}
		};

		$scope.paging = {
			currentPage: 1,
			numPerPage: 3,
			maxSize: 5,
			itemsPerPage: [5, 10, 15, 20]
		};
	});
