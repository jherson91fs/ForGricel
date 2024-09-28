
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsData = [
  { text: "Yo daría lo mejor de mi vida", time: 13 }, // Coloca aquí el tiempo exacto
  { text: "Por estar con vos", time: 19 }, // Coloca aquí el tiempo exacto
  { text: "Y podría reparar mi alma herida", time: 21 }, // Coloca aquí el tiempo exacto
  { text: "A la luz del sol", time: 26 }, // Coloca aquí el tiempo exacto
  { text: "No es tan cierto", time: 28 }, // Coloca aquí el tiempo exacto
  { text: "Que yo vivo como quiero", time: 30 }, // Coloca aquí el tiempo exacto
  { text: "Más bien hago lo que puedo", time: 33 }, // Coloca aquí el tiempo exacto
  { text: "Viviendo a la sombra de tu amor", time: 37 }, // Coloca aquí el tiempo exacto
  { text: "Las miradas que cruzamos son palabras", time: 43 }, // Coloca aquí el tiempo exacto
  { text: "Con el corazón", time: 49 }, // Coloca aquí el tiempo exacto
  { text: "No hay secretos", time: 51 }, // Coloca aquí el tiempo exacto
  { text: "Tengo el cielo por mirarte", time: 53 }, // Coloca aquí el tiempo exacto
  { text: "Y ningún dolor", time: 56 }, // Coloca aquí el tiempo exacto
  { text: "Sin embargo", time: 58 }, // Coloca aquí el tiempo exacto
  { text: "Sigo siendo un distraído", time: 59 }, // Coloca aquí el tiempo exacto
  { text: "Como cuando era un niño", time: 63 }, // Coloca aquí el tiempo exacto
  { text: "Dejando mariposas escapar", time: 67 }, // Coloca aquí el tiempo exacto
  { text: "Si te vas no tengo nada", time: 73 }, // Coloca aquí el tiempo exacto
  { text: "Si te quedas puedo hasta el mundo cambiar", time: 80 }, // Coloca aquí el tiempo exacto
  { text: "O quizás no habré crecido", time: 87 }, // Coloca aquí el tiempo exacto
  { text: "Dejando mariposas escapar", time: 97 }, // Coloca aquí el tiempo exacto
  { text: "Yo daría lo mejor de mi vida", time: 115 }, // Coloca aquí el tiempo exacto
  { text: "Por estar con vos", time: 121 }, // Coloca aquí el tiempo exacto
  { text: "Y podría reparar tu alma herida", time: 123 }, // Coloca aquí el tiempo exacto
  { text: "A la luz del sol", time: 127 }, // Coloca aquí el tiempo exacto
  { text: "Sin embargo", time: 129 }, // Coloca aquí el tiempo exacto
  { text: "Sigo siendo un distraído", time: 131 }, // Coloca aquí el tiempo exacto
  { text: "Como cuando era un niño", time: 135 }, // Coloca aquí el tiempo exacto
  { text: "Dejando mariposas escapar", time: 138 }, // Coloca aquí el tiempo exacto
  { text: "Si te vas no tengo nada", time: 145 }, // Coloca aquí el tiempo exacto
  { text: "Si te quedas puedo hasta el mundo cambiar", time: 152 }, // Coloca aquí el tiempo exacto
  { text: "O quizás no habré crecido", time: 159 }, // Coloca aquí el tiempo exacto
  { text: "Dejando mariposas escapar", time: 167 }, // Coloca aquí el tiempo exacto
  { text: "Si te vas no tengo nada", time: 173 }, // Coloca aquí el tiempo exacto
  { text: "Si te quedas puedo hasta el mundo cambiar", time: 180 }, // Coloca aquí el tiempo exacto
  { text: "O quizás no habré crecido", time: 187 }, // Coloca aquí el tiempo exacto
  { text: "Dejando mariposas escapar", time: 195 }, // Coloca aquí el tiempo exacto
  { text: "Dejando mariposas escapar", time: 202 }, // Coloca aquí el tiempo exacto
  { text: "Dejando mariposas escapar", time: 209  } // Coloca aquí el tiempo exacto
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);