/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const excuses = [
    "Mi perro se comió la tarea.",
    "Me quedé dormido.",
    "Hubo un corte de luz en mi casa.",
    "Perdí el bus y tuve que caminar.",
    "Me sentía mal y tuve que ir al médico.",
    "Estaba ayudando a mi abuela.",
    "Mi computadora se dañó.",
    "Tenía una emergencia familiar.",
    "Olvidé la fecha límite.",
    "El tráfico estaba terrible."
  ];

  document.getElementById("generateBtn").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    document.getElementById("excuse").textContent = excuses[randomIndex];
  });

  console.log("Hello Rigo from the console!");
};
