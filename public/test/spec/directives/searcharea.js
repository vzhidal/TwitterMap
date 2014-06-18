'use strict';

describe('Directive: searchArea', function () {

  // load the directive's module
  beforeEach(module('twitterMapApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-area></search-area>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the searchArea directive');
  }));
});
