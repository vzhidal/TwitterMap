var http = require('http');
var path = require('path'),
	fs = require('fs'),
	express = require('express'),
	bodyParser = require('body-parser');


var Twit = require('twit');
var config = require('./oauth.js');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));




var server = http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

//Twitter
var T = new Twit({
	consumer_key: config.twitter.consumerKey,
	consumer_secret: config.twitter.consumerSecret,
	access_token: config.twitter.accessToken,
	access_token_secret: config.twitter.accessTokenSecret
});

//Socket.io
var io = require('socket.io').listen(server);
var stream = T.stream('statuses/sample');

io.sockets.on('connection', function (socket) {
	stream.on('tweet', function (tweet) {
		socket.emit('tweet', { tweet: tweet});
	});
});
