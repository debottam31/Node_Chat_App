const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');

var app = express();

//static file paths
var publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

//setting port variable
const port = process.env.PORT || 8080;

var server = http.createServer(app);

//Starting with IO
var io = socketIo(server);
io.on('connection', (socket) => {

    console.log('Connection Made with Client from Server');
    socket.on('disconnect', () => {
        console.log('Client disconnected just now');
    })

});








server.listen(port, () => {
    console.log(`server has started on ${port}`);
});