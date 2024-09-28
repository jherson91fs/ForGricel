
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsData = [
  { text: "Yo daría lo mejor de mi vida", time: 14 }, // Coloca aquí el tiempo exacto
  { text: "Por estar con vos", time: 20 }, // Coloca aquí el tiempo exacto
  { text: "Y podría reparar mi alma herida", time: 22 }, // Coloca aquí el tiempo exacto
  { text: "A la luz del sol", time: 27 }, // Coloca aquí el tiempo exacto
  { text: "No es tan cierto", time: 29 }, // Coloca aquí el tiempo exacto
  { text: "Que yo vivo como quiero", time: 31 }, // Coloca aquí el tiempo exacto
  { text: "Más bien hago lo que puedo", time: 34 }, // Coloca aquí el tiempo exacto
  { text: "Viviendo a la sombra de tu amor", time: 38 }, // Coloca aquí el tiempo exacto
  { text: "Las miradas que cruzamos son palabras", time: 44 }, // Coloca aquí el tiempo exacto
  { text: "Con el corazón", time: 50 }, // Coloca aquí el tiempo exacto
  { text: "No hay secretos", time: 52 }, // Coloca aquí el tiempo exacto
  { text: "Tengo el cielo por mirarte", time: 54 }, // Coloca aquí el tiempo exacto
  { text: "Y ningún dolor", time: 57 }, // Coloca aquí el tiempo exacto
  { text: "Sin embargo", time: 59 }, // Coloca aquí el tiempo exacto
  { text: "Sigo siendo un distraído", time: 60 }, // Coloca aquí el tiempo exacto
  { text: "Como cuando era un niño", time: 64 }, // Coloca aquí el tiempo exacto
  { text: "Dejando mariposas escapar", time: 68 }, // Coloca aquí el tiempo exacto
  { text: "Si te vas no tengo nada", time: 74 }, // Coloca aquí el tiempo exacto
  { text: "Si te quedas puedo hasta el mundo cambiar", time: 81 }, // Coloca aquí el tiempo exacto
  { text: "O quizás no habré crecido", time: 88 }, // Coloca aquí el tiempo exacto
  { text: "Dejando mariposas escapar", time: 96 }, // Coloca aquí el tiempo exacto
  { text: "Yo daría lo mejor de mi vida", time: 116 }, // Coloca aquí el tiempo exacto
  { text: "Por estar con vos", time: 122 }, // Coloca aquí el tiempo exacto
  { text: "Y podría reparar tu alma herida", time: 124 }, // Coloca aquí el tiempo exacto
  { text: "A la luz del sol", time: 128 }, // Coloca aquí el tiempo exacto
  { text: "Sin embargo", time: 130 }, // Coloca aquí el tiempo exacto
  { text: "Sigo siendo un distraído", time: 132 }, // Coloca aquí el tiempo exacto
  { text: "Como cuando era un niño", time: 136 }, // Coloca aquí el tiempo exacto
  { text: "Dejando mariposas escapar", time: 139 }, // Coloca aquí el tiempo exacto
  { text: "Si te vas no tengo nada", time: 146 }, // Coloca aquí el tiempo exacto
  { text: "Si te quedas puedo hasta el mundo cambiar", time: 153 }, // Coloca aquí el tiempo exacto
  { text: "O quizás no habré crecido", time: 160 }, // Coloca aquí el tiempo exacto
  { text: "Dejando mariposas escapar", time: 168 }, // Coloca aquí el tiempo exacto
  { text: "Si te vas no tengo nada", time: 174 }, // Coloca aquí el tiempo exacto
  { text: "Si te quedas puedo hasta el mundo cambiar", time: 181 }, // Coloca aquí el tiempo exacto
  { text: "O quizás no habré crecido", time: 188 }, // Coloca aquí el tiempo exacto
  { text: "Dejando mariposas escapar", time: 196 }, // Coloca aquí el tiempo exacto
  { text: "Dejando mariposas escapar", time: 203 }, // Coloca aquí el tiempo exacto
  { text: "Dejando mariposas escapar", time: 210  } // Coloca aquí el tiempo exacto
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