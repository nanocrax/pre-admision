var socket = io.connect('http://localhost:3000', { 'forceNew': true });

socket.on('messages1', function(data1) {
  let nro1=data1[data1.length-1].numero;
  let texto1=data1[data1.length-1].texto;
  let card_puesto1 = `
  <audio autoplay src="../audios/aviso1.ogg"></audio>
  <audio autoplay src="../audios/puesto1.ogg"></audio>
  <audio src="../audios/numero${nro1}.ogg" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 1000)"></audio>
  <div class="row mydiv1">
    <div class="col-md-12">
      <div class="row">
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 5vw">
              Puesto 1
            </h1>
          </div>
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 5vw">${nro1}</h1>
          </div>
      </div>
      <h3  class="text-center" style="color:rgb(91, 43, 144);font-size: 4vw">${texto1}</h3>
    </div>
  </div>`
  document.getElementById('puesto1').innerHTML = card_puesto1;
})

socket.on('messages2', function(data2) {
  let nro2=data2[data2.length-1].numero;
  let texto2=data2[data2.length-1].texto;
  let card_puesto2 = `
  <audio autoplay src="../audios/aviso1.ogg"></audio>
  <audio autoplay src="../audios/puesto2.ogg"></audio>
  <audio src="../audios/numero${nro2}.ogg" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 1000)"></audio>
  <div class="row mydiv1">
    <div class="col-md-12">
      <div class="row">
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 5vw">
              Puesto 2
            </h1>
          </div>
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 5vw">${nro2}</h1>
          </div>
      </div>
      <h3  class="text-center" style="color:rgb(91, 43, 144);font-size: 4vw">${texto2}</h3>
    </div>
  </div>`
  document.getElementById('puesto2').innerHTML = card_puesto2;
})

socket.on('messages3', function(data3) {
  let nro3=data3[data3.length-1].numero;
  let texto3=data3[data3.length-1].texto;
  let card_puesto3 = `
  <audio autoplay src="../audios/aviso1.ogg"></audio>
  <audio autoplay src="../audios/puesto3.ogg"></audio>
  <audio src="../audios/numero${nro3}.ogg" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 1000)"></audio>
  <div class="row mydiv1">
    <div class="col-md-12">
      <div class="row">
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 5vw">
              Puesto 3
            </h1>
          </div>
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 5vw">${nro3}</h1>
          </div>
      </div>
      <h3  class="text-center" style="color:rgb(91, 43, 144);font-size: 4vw">${texto3}</h3>
    </div>
  </div>`
  document.getElementById('puesto3').innerHTML = card_puesto3;
})

socket.on('messages4', function(data4) {
  let nro4=data4[data4.length-1].numero;
  let texto4=data4[data4.length-1].texto;
  let card_puesto4 = `
  <audio autoplay src="../audios/aviso1.ogg"></audio>
  <audio autoplay src="../audios/puesto4.ogg"></audio>
  <audio src="../audios/numero${nro4}.ogg" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 1000)"></audio>
  <div class="row mydiv1">
    <div class="col-md-12">
      <div class="row">
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 5vw">
              Puesto 4
            </h1>
          </div>
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 5vw">${nro4}</h1>
          </div>
      </div>
      <h3  class="text-center" style="color:rgb(91, 43, 144);font-size: 4vw">${texto4}</h3>
    </div>
</div>`
  document.getElementById('puesto4').innerHTML = card_puesto4;
})

socket.on('messages5', function(data5) {
  let nro5=data5[data5.length-1].numero;
  let texto5=data5[data5.length-1].texto;
  let card_puesto5 = `
  <audio autoplay src="../audios/aviso1.ogg"></audio>
  <audio autoplay src="../audios/puesto5.ogg"></audio>
  <audio src="../audios/numero${nro5}.ogg" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 1000)"></audio>
  <div class="row mydiv1">
    <div class="col-md-12">
      <div class="row">
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 5vw">
              Puesto 5
            </h1>
          </div>
          <div class="col-md-6">
            <h1 class="text-center" style="color:rgb(10, 7, 53);font-size: 5vw">${nro5}</h1>
          </div>
      </div>
      <h3  class="text-center" style="color:rgb(91, 43, 144);font-size: 4vw">${texto5}</h3>
    </div>
</div>`
  document.getElementById('puesto5').innerHTML = card_puesto5;
})