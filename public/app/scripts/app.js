'use strict';

angular.module('twitterMapApp', ['ui.router', 'ngTagsInput', 'ui.bootstrap', 'ngResource', 'angular-loading-bar']);


angular.module('twitterMapApp').config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/regular");

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl as homeCtrl'
		})
		.state('home.hero', {
			url: 'hero',
			templateUrl: 'views/hero.html',
			controller: 'PersonCtrl as personCtrl'
		})
		.state('home.regular', {
			url: 'regular',
			templateUrl: 'views/regular.html',
			controller: 'PersonCtrl as personCtrl'
		})
});
