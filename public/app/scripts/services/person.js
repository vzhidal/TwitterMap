'use strict';

angular.module('twitterMapApp')
	.constant('person', {
		hero: {
			tags: [
				{text: 'kill', name: 'kill'},
				{text: 'fire', name: 'fire'},
				{text: 'crime', name: 'crime'},
				{text: 'help', name: 'help'},
				{text: 'murder', name: 'murder'},
				{text: 'danger', name: 'danger'},
				{text: 'urgent', name: 'urgent'},
				{text: 'action', name: 'action'},
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
