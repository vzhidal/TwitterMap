'use strict';

angular.module('twitterMapApp')
	.directive('customPaging', function() {
		return {
			restrict: 'A',
			templateUrl: 'templates/custom-paging.html',
			replace: true,
			scope: {
				paging: '=customPaging',
				totalItems: '=totalItems'
			}
		};
	});
