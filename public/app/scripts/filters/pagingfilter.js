'use strict';

angular.module('twitterMapApp')
  .filter('pagingFilter', function () {
		return function(input, filtersOptions) {
			var numPerPage = parseInt(filtersOptions.numPerPage);
			var begin = ((filtersOptions.currentPage - 1) * numPerPage),
				end = begin + numPerPage;

			return input.slice(begin, end);
		};
  });
