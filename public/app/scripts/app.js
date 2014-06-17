'use strict';

angular.module('twitterMapApp', ['ui.router', 'ngTagsInput', 'ui.bootstrap', 'ngResource', 'angular-loading-bar']);


angular.module('twitterMapApp').config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl as homeCtrl',
			resolve: {}
		})
});
