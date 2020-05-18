var socket = io.connect('http://localhost:8080', { 'forceNew': true });
socket.on('messages', function(data) {
  console.log(data);
  render(data);
})
function render (data) {
  var html = data.map(function(elem, index) {
    return(`<div class="card container">
              <strong>Puesto:${elem.puesto}</strong>-
              <em>Numero: ${elem.numero}</em>
            </div>`);
  }).join(" ");
  document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
  var message = {
    puesto: document.getElementById('inputPuesto').value,
    numero: document.getElementById('inputNumero').value
  };
  socket.emit('new-message', message);
  return false;
}