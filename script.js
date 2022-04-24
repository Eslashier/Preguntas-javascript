const api_url = "https://api.jsonbin.io/b/6261f493c5284e3115511492/1";
const startButton = document.getElementById("start-btn");
const scoreButton = document.getElementById("score-btn");
const restartButton = document.getElementById("restart-btn");
const saveButton = document.getElementById("save-btn");
const exitButton = document.getElementById("exit-btn");
const answeraButton = document.getElementById("a");
const answerbButton = document.getElementById("b");
const answercButton = document.getElementById("c");
const answerdButton = document.getElementById("d");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const containerPuntaje = document.getElementById("container-puntaje");
const menuinicial = document.getElementById("menuinicial")
const menupostjuego = document.getElementById("menupostjuego")
const salir = document.getElementById("salir")
const levelonscreen = document.getElementById("levelonscreen")
const scoreonscreen = document.getElementById("scoreonscreen")
document.onkeydown = fkey;

var dificultad = -1;
var random;
var idJugador = 0;

var wasPressed = false;

function fkey(e) {
  e = e || window.event;
  if (wasPressed) return;

  if (e.keyCode == 116) {
    //alert("f5 pressed");
    wasPressed = true;
    localStorage.clear();
  } else {
    //alert("Window closed");
  }
}

function numeroAleatorio() {
  random = Math.floor(Math.random() * (5 - 0) + 0)
  console.log(random)
  return random
}

async function getapi(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.pregunta;
}

function aumentarDificultad() {
  dificultad++;
  return dificultad;
}

async function misPreguntasPorNivel() {
  const preguntas = await getapi(api_url);
  let preguntasPorDificultad = [];

  for (i = 0; i < preguntas.length; i++) {
    let dificultadarreglo = parseInt(preguntas[i].difficulty);
    if (dificultadarreglo == dificultad) {
      preguntasPorDificultad.push(preguntas[i]);
    }
  }
  return preguntasPorDificultad[this.random];
}

async function cargarPregunta() {
  const pregunta = await misPreguntasPorNivel(this.random);
  questionElement.innerText = pregunta.question;
  answeraButton.innerText = pregunta.asnwera;
  answerbButton.innerText = pregunta.asnwerb;
  answercButton.innerText = pregunta.asnwerc;
  answerdButton.innerText = pregunta.asnwerd;
  return pregunta;
}

function salirJuego() {
  dificultad = -1;
  menuinicial.classList.remove("hide");
  questionContainerElement.classList.add("hide");
  exitButton.classList.add("hide");
  saveButton.classList.add("hide");
  menupostjuego.classList.add("hide");
  salir.classList.add("hide");
  containerPuntaje.classList.add("hide");
}

async function startGame() {
  dificultad = -1;
  menuinicial.classList.add("hide");
  exitButton.classList.remove("hide");
  questionContainerElement.classList.remove("hide");
  containerPuntaje.classList.add("hide");
  menupostjuego.classList.add("hide");
  restartButton.classList.add("hide")
  salir.classList.remove("hide")
  saveButton.classList.add("hide");
  levelonscreen.innerHTML = "Nivel: 1";
  scoreonscreen.innerHTML = "Puntuacion: 0";
  aumentarDificultad();
  numeroAleatorio();
  cargarPregunta(random);
}

async function respuesta(clickID) {
  const pregunta = await cargarPregunta(this.random);
  const idboton = document.getElementById(clickID).id;

  if (idboton == pregunta.correctanswer) {
    aumentarDificultad();
    numeroAleatorio();
    cargarPregunta();
    levelonscreen.innerHTML = "Nivel: " +(parseInt(this.dificultad)+1);
    scoreonscreen.innerHTML = "Puntuacion: "+(parseInt(this.dificultad)*1000);
    if (dificultad == 4) {
      saveButton.classList.remove("hide");
    }
  } else {
    questionContainerElement.classList.add("hide");
    scoreButton.classList.remove("hide");
    restartButton.classList.remove("hide");
    saveButton.classList.remove("hide");
    exitButton.classList.remove("hide");
    menupostjuego.classList.remove("hide")

  }
}

function saveScore() {

  idJugador += 1;
  const puntaje = (dificultad) * 1000
  console.log(puntaje)
  //const texto_puntaje = document.querySelector("#saveScore")
  let nombre = prompt("Cual es tu nombre: ", "")
  let jsonJugador = {
    "nombre": nombre,
    "puntaje": puntaje
  }
  localStorage.setItem(idJugador, JSON.stringify(jsonJugador));
  //texto_puntaje.innerHTML = `${nombre} Tu puntaje fue: ${puntaje}`

  return puntaje
}

function score() {
  console.log("ingresoP");
  let table = '<tr><th>Id Jugador</th><th>Nombre Jugador</th><th>Puntaje Jugador</th></tr>'
  for (i = 1; i < 10000; i++) {
    let jsonJugador = JSON.parse(localStorage.getItem(i));
    console.log(jsonJugador);
    if (jsonJugador == undefined) {
      break;
    }
    table += `<tr>
                        <td>${i}</td>
                        <td>${jsonJugador.nombre}</td>
                        <td>${jsonJugador.puntaje}</td>
                        </tr>`
  }
  menuinicial.classList.add("hide");
  menupostjuego.classList.add("hide");
  salir.classList.remove("hide");
  questionContainerElement.classList.add("hide");
  document.getElementById("puntaje").innerHTML = table
  containerPuntaje.classList.remove("hide");
}

restartButton.addEventListener("click", startGame)