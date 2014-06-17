'use strict';

angular.module('twitterMapApp')
	.controller('HomeCtrl', function ($scope) {
//
		$scope.tweets = [];

		var circles = [

		];


		var mapOptions = {
			center: new google.maps.LatLng(-34.397, 150.644),
			zoom: 2,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById('map'),
			mapOptions);


		var socket = io.connect();
		socket.on('tweet', function (data) {
			var myLatlng = new google.maps.LatLng(data.coordinates[1], data.coordinates[0]);
			for(var i = 0; i < circles.length; i++) {
				if(circles[i] && condition(circles[i], myLatlng)) {

					var marker = new google.maps.Marker({
						position: myLatlng,
						animation: google.maps.Animation.DROP,
						map: map
					});


					var infowindow = new google.maps.InfoWindow({
						content: "<img src='" + data.pic + "' style='float:left; padding: 5px;' /><strong>" + data.screen_name + "</strong>: " + data.text
					});

					google.maps.event.addListener(marker, 'click', function () {
						infowindow.open(map, marker);
					});
				}
			}
		});


		initDrawing();

		function condition(circle, point) {
			return circle.getRadius() >= google.maps.geometry.spherical.computeDistanceBetween(circle.getCenter(), point);
		}

		function initDrawing() {


			var drawingManager = new google.maps.drawing.DrawingManager({
				drawingMode: google.maps.drawing.OverlayType.MARKER,
				drawingControl: true,
				drawingControlOptions: {
					position: google.maps.ControlPosition.TOP_CENTER,
					drawingModes: [
						google.maps.drawing.OverlayType.MARKER,
						google.maps.drawing.OverlayType.CIRCLE,
						google.maps.drawing.OverlayType.POLYGON,
						google.maps.drawing.OverlayType.POLYLINE,
						google.maps.drawing.OverlayType.RECTANGLE
					]
				},
				markerOptions: {
					icon: 'images/beachflag.png'
				},
				circleOptions: {
					fillColor: '#ffff00',
					fillOpacity: 0.2,
					strokeWeight: 1,
					clickable: true,
					editable: true,
					zIndex: 1
				}
			});
			drawingManager.setMap(map);

			google.maps.event.addListener(drawingManager, 'circlecomplete', function (circle) {
				circles.push(circle);

				google.maps.event.addListener(circle, 'click', function (event) {
					circle.setMap(null);

					circles = _.without(circles, _.findWhere(circles, circle));
				});
			});
		}


	});
