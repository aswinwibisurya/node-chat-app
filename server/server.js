const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
// var server = http.createServer((req, res) => {

// });
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
	console.log('New user connected');
	
	socket.emit('newMessage', {
		from: 'aswinwibisurya@gmail.com',
		text: 'A new message',
		createdAt: 123
	});

	socket.on('disconnect', () => {
		console.log('User disconnected');
	});

	socket.on('createMessage', (message) => {
		console.log('createMessage', message);
	});
});

app.use(express.static(publicPath));

server.listen(port, () => {
	console.log(`Server is up on on port ${port}`);	
});