const api_url = "https://api.jsonbin.io/b/6261f493c5284e3115511492/1";
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const exitButton = document.getElementById('exit-btn')
const answeraButton = document.getElementById('answera')
const answerbButton = document.getElementById('answerb')
const answercButton = document.getElementById('answerc')
const answerdButton = document.getElementById('answerd')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var dificultad = -1;  

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

  let random = Math.floor(Math.random() * (5 - 0) + 0);
  return preguntasPorDificultad[random];
}

async function cargarPregunta() {
  const pregunta = await misPreguntasPorNivel();
  console.log(pregunta);
    questionElement.innerText = pregunta.question;
    answeraButton.innerText = pregunta.asnwera;
    answerbButton.innerText = pregunta.asnwerb;
    answercButton.innerText = pregunta.asnwerc;
    answerdButton.innerText = pregunta.asnwerd;

}

function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    aumentarDificultad()
    cargarPregunta()
  }

async function ejecutar(){
    aumentarDificultad()
    cargarPregunta()
}
