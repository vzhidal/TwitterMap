'use strict';

angular.module('twitterMapApp')
	.directive('customPaging', function() {
		return {
			restrict: 'A',
			templateUrl: 'template/custom-paging.html',
			replace: true,
			scope: {
				paging: '=customPaging',
				totalItems: '=totalItems'
			}
		};
	});
