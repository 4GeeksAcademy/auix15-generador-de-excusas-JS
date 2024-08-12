/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const excuses = [
    "Mi perro se llevó mi coche.",
    "Un extraterrestre me pidió direcciones y me distraje.",
    "Me perdí en un laberinto de espejos.",
    "Mi nevera se comió mis llaves.",
    "Estaba atrapado en un bucle temporal.",
    "Una ardilla ninja secuestró mi mochila.",
    "Un dragón me retó a una carrera y no pude negarme.",
    "Mi casa se convirtió en un castillo inflable y no podía salir.",
    "Una nube bajó y me llevó volando por la ciudad.",
    "Estaba negociando con un fantasma por mi sombra."
  ];

  document.getElementById("generateBtn").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    document.getElementById("excuse").textContent = excuses[randomIndex];
  });

  console.log("Hello Rigo from the console!");
};
