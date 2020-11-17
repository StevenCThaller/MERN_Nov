const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const server = app.listen(8000, () => console.log("Now listening on port 8000"));

const io = require('socket.io')(server);

io.on('connection', socket => {
    // What should the server do when a client connects to the socket
    socket.emit('connected');
    
    
    // this is where we will put all of our listeners/emitters

    // What should the server do when a user joins a chatroom
    socket.on('joinroom', roomName => {
        socket.join(roomName);
    });

    // What should the server do when someone starts typing
    socket.on('typing', data => {
        
        socket.to(data.room).emit('typing', data.message);
    });

    // What should the server do when a client sends a message
    socket.on('message', data => {
        socket.to(data.room).emit('message', data.message);
    });



    // What should the server do when a client disconnects from the socket
    socket.on('disconnect', () => {
        console.log(`User ${socket.id} has disconnected`);
    });
});