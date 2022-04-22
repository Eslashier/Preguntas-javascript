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

var dificultad = -1;
var random;

function numeroAleatorio(){
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

async function startGame() {
  startButton.classList.add("hide");
  scoreButton.classList.add("hide");
  restartButton.classList.add("hide");
  exitButton.classList.remove("hide");
  questionContainerElement.classList.remove("hide");
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
  } else {
    questionContainerElement.classList.add("hide");
    scoreButton.classList.add("hide");
    restartButton.classList.remove("hide");
    saveButton.classList.remove("hide");
    exitButton.classList.add("hide");
  }
}
