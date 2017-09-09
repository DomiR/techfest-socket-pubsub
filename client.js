var io = require('socket.io-client');

// use env port
const PORT = (process.env.PORT || 5000);
const URL = 'http://localhost:' + PORT;


var socket = io(URL);
socket.on('message', function (data) {
	console.log(data);
});

console.log('Client listening to: ' + URL);