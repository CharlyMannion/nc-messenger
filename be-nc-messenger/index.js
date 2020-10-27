const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http)
const username = prompt('Please enter a username', '')

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});



//userarray = []

io.on('connection', (socket) => {
	/*userarray.push(username)
	function(repopulates user div){
		userdiv = getElementbyId('userdiv')
		userdiv.textcontent = userarray
		main.appendChild(userdiv)
	}*/
	io.emit('chat message', `${username} has joined`)
	socket.on('chat message', (msg) => {
		io.emit('chat message', `${username} says ${msg}`);
	socket.on('disconnect', () => {
		io.emit('chat message', `${username} has left`)
		/*userarray.filter(personwhohasleft)*/
	})
	});
});

http.listen(3000, () => {
	console.log('listening on 3000')
});