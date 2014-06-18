'use strict';

angular.module('twitterMapApp')
	.constant('person', {
		hero: {
			tags: [
				{text: 'kill', name: 'kill'},
				{text: 'fire', name: 'fire'},
				{text: 'action', name: 'action'}
			]
		},
		regular: {
			tags: [
				{text: 'discount', name: 'discount'},
				{text: 'money', name: 'money'},
				{text: 'shop', name: 'shop'}
			]

		}
	});
