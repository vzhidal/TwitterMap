'use strict';

describe('Filter: tagsFilter', function () {

  // load the filter's module
  beforeEach(module('twitterMapApp'));

  // initialize a new instance of the filter before each test
  var tagsFilter;
  beforeEach(inject(function ($filter) {
    tagsFilter = $filter('tagsFilter');
  }));

  it('should return the input prefixed with "tagsFilter filter:"', function () {
    var text = 'angularjs';
    expect(tagsFilter(text)).toBe('tagsFilter filter: ' + text);
  });

});
