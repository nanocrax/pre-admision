//Probar con un solo array o con varios sockets

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);



var messages1 = [{
  id: 1,
  numero: "0",
  texto:"-"
}];

var messages2 = [{
  id: 1,
  numero: "081",
  texto:"-"
}];

var messages3 = [{
  id: 1,
  numero: "22",
  texto:"-"
}];

var messages4 = [{
  id: 1,
  numero: "077",
  texto:"-"
}];

var messages5 = [{
  id: 1,
  numero: "088",
  texto:"-"
}];

app.use(express.static('public'));

app.get('/televisor', function(req, res) {
  //res.send("OK");
  res.sendFile(__dirname+'/public/televisor.html');
});

io.on('connection', function(socket) {
  console.log('Alguien se ha conectado con Sockets');
  //Emitimos los mensajes para todos los puestos
  socket.emit('messages1', messages1);
  socket.emit('messages2', messages2);
  socket.emit('messages3', messages3);
  socket.emit('messages4', messages4);
  socket.emit('messages5', messages5);

  //Escuchamos los mensajes por cada puesto
  socket.on('new-message1', function(data1) {
    messages1.push(data1);
    io.sockets.emit('messages1', messages1);
  });

  socket.on('new-message2', function(data2) {
    messages2.push(data2);
    io.sockets.emit('messages2', messages2);
  });

  socket.on('new-message3', function(data3) {
    messages3.push(data3);
    io.sockets.emit('messages3', messages3);
  });

  socket.on('new-message4', function(data4) {
    messages4.push(data4);
    io.sockets.emit('messages4', messages4);
  });

  socket.on('new-message5', function(data5) {
    messages5.push(data5);
    io.sockets.emit('messages5', messages5);
  });


});

server.listen(8080, function() {
  console.log("Servidor corriendo en http://localhost:8080");
});


