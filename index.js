var express = require('express');
var socket = require('socket.io');
const bodyparser = require('body-parser');

// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });
    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});
app.use((req, res, next) => {
  req.io = io
  next()
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

app.use(bodyparser.json());

const user = require('./server/routes/user');
app.use('/chat', user);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
