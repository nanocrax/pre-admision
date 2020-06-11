var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


//Arrays iniciales de puestos
var messages1 = [{
  id: 1,
  numero: "0",
  texto:""
}];

var messages2 = [{
  id: 1,
  numero: "0",
  texto:""
}];

var messages3 = [{
  id: 1,
  numero: "0",
  texto:""
}];

var messages4 = [{
  id: 1,
  numero: "0",
  texto:""
}];

var messages5 = [{
  id: 1,
  numero: "0",
  texto:""
}];

//Arrays iniciales de cantidades por medico
var cantSiufiE = [{
  id: 1,
  cant: 0,
}];
var  cantJureA = [{
  id: 1,
  cant: 0,
}];
var cantAse = [{
  id: 1,
  cant: 0,
}];
var cantVidal = [{
  id: 1,
  cant: 0,
}];
var cantSiufiL = [{
  id: 1,
  cant: 0,
}];
var cantJureF = [{
  id: 1,
  cant: 0,
}];
var cantBerrafato = [{
  id: 1,
  cant: 0,
}];
var cantZarifA = [{
  id: 1,
  cant: 0,
}];
var cantTonelli = [{
  id: 1,
  cant: 0,
}];


app.use(express.static('public'));

app.get('/televisor', function(req, res) {
  //res.send("OK");
  res.sendFile(__dirname+'/public/televisor.html');
});

io.on('connection', function(socket) {
  console.log('Alguien se ha conectado con Sockets');
  
  //Escuchamos los mensajes por cada puesto
  socket.on('new-message1', function(data) {
    messages1.push(data);
    io.sockets.emit('messages1', messages1);
  });

  socket.on('new-message2', function(data) {
    messages2.push(data);
    io.sockets.emit('messages2', messages2);
  });

  socket.on('new-message3', function(data) {
    messages3.push(data);
    io.sockets.emit('messages3', messages3);
  });

  socket.on('new-message4', function(data) {
    messages4.push(data);
    io.sockets.emit('messages4', messages4);
  });

  socket.on('new-message5', function(data) {
    messages5.push(data);
    io.sockets.emit('messages5', messages5);
  });



  //Emitimos los numeros para cada doctor que estan guardados en los arrays
  socket.emit('cantSiufiE', cantSiufiE);
  socket.emit('cantJureA', cantJureA);
  socket.emit('cantAse', cantAse);
  socket.emit('cantVidal', cantVidal);
  socket.emit('cantSiufiL', cantSiufiL);
  socket.emit('cantJureF', cantJureF);
  socket.emit('cantBerrafato', cantBerrafato);
  socket.emit('cantZarifA', cantZarifA);
  socket.emit('cantTonelli', cantTonelli);

  //Escuchamos para guardar el nuevo numero
  socket.on('nmSiufiE', function(data) {
    cantSiufiE.push(data);
    io.sockets.emit('cantSiufiE', cantSiufiE);
  });
  socket.on('nmJureA', function(data) {
    cantJureA.push(data);
    io.sockets.emit('cantJureA', cantJureA);
  });
  socket.on('nmAse', function(data) {
    cantAse.push(data);
    io.sockets.emit('cantAse', cantAse);
  });
  socket.on('nmVidal', function(data) {
    cantVidal.push(data);
    io.sockets.emit('cantVidal', cantVidal);
  });
  socket.on('nmSiufiL', function(data) {
    cantSiufiL.push(data);
    io.sockets.emit('cantSiufiL', cantSiufiL);
  });
  socket.on('nmJureF', function(data) {
    cantJureF.push(data);
    io.sockets.emit('cantJureF', cantJureF);
  });
  socket.on('nmBerrafato', function(data) {
    cantBerrafato.push(data);
    io.sockets.emit('cantBerrafato', cantBerrafato);
  });
  socket.on('nmZarifA', function(data) {
    cantZarifA.push(data);
    io.sockets.emit('cantZarifA', cantZarifA);
  });
  socket.on('nmTonelli', function(data) {
    cantTonelli.push(data);
    io.sockets.emit('cantTonelli', cantTonelli);
  });

});

server.listen(3000, function() {
  console.log("Servidor corriendo en http://localhost:3000");
});
