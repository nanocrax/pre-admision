var socket = io.connect('http://localhost:8080', { 'forceNew': true });

//Pintamos los puestos y sus numeros
socket.on('messages1', function(data1) {
  let nro1=data1[data1.length-1].numero;
  let texto1=data1[data1.length-1].texto;
  let card_puesto1 = `
  <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6">
            <h3 class="text-center">
              Puesto 1
            </h3>
          </div>
        <div class="col-md-6">
          <h3 class="text-center">${nro1}</h3>
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
            <h3 class="text-center">
              Puesto 2
            </h3>
          </div>
        <div class="col-md-6">
          <h3 class="text-center">${nro2}</h3>
        </div>
      </div>
      <h3  class="text-center">${texto2}</h3>
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
            <h3 class="text-center">
              Puesto 3
            </h3>
          </div>
        <div class="col-md-6">
          <h3 class="text-center">${nro3}</h3>
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
            <h3 class="text-center">
              Puesto 4
            </h3>
          </div>
        <div class="col-md-6">
          <h3 class="text-center">${nro4}</h3>
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
            <h3 class="text-center">
              Puesto 5
            </h3>
          </div>
        <div class="col-md-6">
          <h3 class="text-center">${nro5}</h3>
        </div>
      </div>
      <h3  class="text-center">${texto5}</h3>
    </div>
  </div>`
  document.getElementById('puesto5').innerHTML = card_puesto5;
})