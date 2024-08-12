window.onload = function() {
  // listas de escusas
  let who = [
    "Un extraterrestre",
    "Mi periquito",
    "Un amigo invisible",
    "La conga",
    "Mi gato chismoso",
    "Superman",
    "Un grupo de piratas",
    "Un travieso duendecillo"
  ];
  let what = [
    "se llevó mi tarea",
    "hizo un hechizo sobre mi trabajo",
    "arruinó mi computadora",
    "secuestró mi libro",
    "interrumpió mi conexión a Internet",
    "hizo una fiesta en mi escritorio",
    "se escondió en mi oficina",
    "hizo mi código espaguetti"
  ];
  let when = [
    "justo antes de la entrega",
    "durante la última tormenta",
    "mientras estaba en una reunión importante",
    "cuando estaba durmiendo",
    "en medio de un incendio forestal",
    "justo después de terminarlo",
    "en el momento en que hice un descanso",
    "mientras celebraba un cumpleaños"
  ];

  //generar una excusa
  function generateExcuse() {
    let whoRandom = who[Math.floor(Math.random() * who.length)];
    let whatRandom = what[Math.floor(Math.random() * what.length)];
    let whenRandom = when[Math.floor(Math.random() * when.length)];
    return `${whoRandom} ${whatRandom} ${whenRandom}.`;
  }

  //actualizar el texto de la excusa
  function updateExcuse() {
    let excuseElement = document.getElementById("excuse");
    excuseElement.textContent = generateExcuse();
  }

  document
    .getElementById("generateBtn")
    .addEventListener("click", updateExcuse);
};
