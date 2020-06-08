var socket = io.connect('http://localhost:3000', { 'forceNew': true });

//Pintamos los puestos y sus numeros
socket.on('messages1', function(data1) {
  let nro1=data1[data1.length-1].numero;
  let texto1=data1[data1.length-1].texto;
  let card_puesto1 = `
  <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53); font-size: 2vw">
              Puesto 1
            </h1>
          </div>
        <div class="col-md-6">
          <h1 class="text-center" style="color:rgb(10, 7, 53); font-size: 2vw">${nro1}</h1>
        </div>
      </div>
      <h3  class="text-center">${texto1}</h3>
    </div>
  </div>`
  document.getElementById('puesto1').innerHTML = card_puesto1;
})

socket.on('messages2', function(data2) {
  let nro2=data2[data2.length-1].numero;
  let texto2=data2[data2.length-1].texto;
  let card_puesto2 = `
  <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 2vw">
              Puesto 2
            </h1>
          </div>
        <div class="col-md-6">
          <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 2vw">${nro2}</h1>
        </div>
      </div>
      <h3  class="text-center" >${texto2}</h3>
    </div>
  </div>`
  document.getElementById('puesto2').innerHTML = card_puesto2;
})

socket.on('messages3', function(data3) {
  let nro3=data3[data3.length-1].numero;
  let texto3=data3[data3.length-1].texto;
  let card_puesto3 = `
  <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 2vw">
              Puesto 3
            </h1>
          </div>
        <div class="col-md-6">
          <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 2vw">${nro3}</h1>
        </div>
      </div>
      <h3  class="text-center">${texto3}</h3>
    </div>
  </div>`
  document.getElementById('puesto3').innerHTML = card_puesto3;
})

socket.on('messages4', function(data4) {
  let nro4=data4[data4.length-1].numero;
  let texto4=data4[data4.length-1].texto;
  let card_puesto4 = `
  <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 2vw">
              Puesto 4
            </h1>
          </div>
        <div class="col-md-6">
          <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 2vw">${nro4}</h1>
        </div>
      </div>
      <h3  class="text-center">${texto4}</h3>
    </div>
  </div>`
  document.getElementById('puesto4').innerHTML = card_puesto4;
})

socket.on('messages5', function(data5) {
  let nro5=data5[data5.length-1].numero;
  let texto5=data5[data5.length-1].texto;
  let card_puesto5 = `
  <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 2vw">
              Puesto 5
            </h1>
          </div>
        <div class="col-md-6">
          <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 2vw">${nro5}</h1>
        </div>
      </div>
      <h3  class="text-center">${texto5}</h3>
    </div>
  </div>`
  document.getElementById('puesto5').innerHTML = card_puesto5;
})



function addMessage() {
  var message = {
    numero: document.getElementById('inputNumero').value,
    texto: document.getElementById('texto').value
  };

  if (document.getElementById('inputPuesto').value == 1) {
    socket.emit('new-message1', message);
    document.getElementById('texto').value="";
  }
   
  if (document.getElementById('inputPuesto').value == 2) {
    socket.emit('new-message2', message);
    document.getElementById('texto').value="";
  }

  if (document.getElementById('inputPuesto').value == 3) {
    socket.emit('new-message3', message);
    document.getElementById('texto').value="";
  }

  if (document.getElementById('inputPuesto').value == 4) {
    socket.emit('new-message4', message);
    document.getElementById('texto').value="";
  }

  if (document.getElementById('inputPuesto').value == 5) {
    socket.emit('new-message5', message);
    document.getElementById('texto').value="";
  }

}

/*
function addNros() {
  var message = {
    numero: document.getElementById('inputNumero').value,
    texto: document.getElementById('texto').value
  };

  if (document.getElementById('inputPuesto').value == 1) {
    socket.emit('new-message1', message);
    document.getElementById('texto').value="";
  }
   
  if (document.getElementById('inputPuesto').value == 2) {
    socket.emit('new-message2', message);
    document.getElementById('texto').value="";
  }

  if (document.getElementById('inputPuesto').value == 3) {
    socket.emit('new-message3', message);
    document.getElementById('texto').value="";
  }

  if (document.getElementById('inputPuesto').value == 4) {
    socket.emit('new-message4', message);
    document.getElementById('texto').value="";
  }

  if (document.getElementById('inputPuesto').value == 5) {
    socket.emit('new-message5', message);
    document.getElementById('texto').value="";
  }

}*/




function imprSelec(puesto, numero, medico) {
  let today = new Date();
  let m = today.getMonth() + 1;
  let fecha = today.getDate()+'/'+m+'/'+today.getFullYear()
  let hora = today.getHours()+':'+today.getMinutes()

  var ficha = `
  <body>
    <div style="width: 255px; text-align: center; border: #000 1px solid;">
      <div style="color:#000; border-bottom: #000 1px solid;">
        Clinica de Ojos SRL
      </div>
      <div style="color:#000; width: 255px; text-align: center; font-size: 175%; margin-top:2px">
        <strong>${medico}</strong>
      </div>
        <table align="center" style="width: 250px; border-top: #000 1px solid; border-bottom: #000 1px solid; text-align: center; padding: 5px 5px 5px 5px"> 
            <tr>
              <td style="width: 125px; border-right: #000 2px solid;">
                <b style="color: #000;">PUESTO</b>
                <b style="font-size: 100px;">${puesto}</b>
              </td>

              <td style="width: 125px; border-left: #000 2px solid;">
                <b>NÚMERO</b>
                <b style="font-size: 100px;">${numero}</b>
              </td>
            </tr>
        </table>
        <div style="padding: 5px 5px 5px 5px">
          <b>Espere a ser atendido</b>
          <br>
          <b>${fecha} | ${hora}</b>
        </div>
      
    </div>
  </body>
  `
  var ventimp = window.open('','Imprimir pre-admision','width=800,height=500,top=120,left=100,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes');
  ventimp.document.write(ficha);
  ventimp.document.close();
  ventimp.print( );
  ventimp.close();
}