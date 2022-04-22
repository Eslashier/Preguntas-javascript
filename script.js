const api_url = "https://api.jsonbin.io/b/6261f493c5284e3115511492/1";

var dificultad = -1;  

async function getapi(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.pregunta;
}


function calcularDificultad() {
  dificultad++;
  return dificultad
}

async function misPreguntasPorNivel() {
  const preguntas = await getapi(api_url);
  let preguntasPorDificultad = [];
  var dif = calcularDificultad();

  for (i = 0; i < preguntas.length; i++) {
    let dificultadarreglo = parseInt(preguntas[i].difficulty);

    if (dificultadarreglo == dif) {
      preguntasPorDificultad.push(preguntas[i]);
    }
  }

  let random = Math.floor(Math.random() * (5 - 0) + 0);
  return preguntasPorDificultad[random];
}

async function cargarPregunta() {
  const pregunta = await misPreguntasPorNivel();
  console.log(pregunta);

    let table = `<tr><th>Pregunta</thd></tr>`
    table += `<tr><td>${pregunta.question}</td></tr>`

    document.getElementById("employees").innerHTML = table

}

cargarPregunta()