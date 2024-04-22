/*!
* Start Bootstrap - Heroic Features v5.0.6 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Script para el botón de scroll
window.addEventListener('scroll', function () {
  var scrollToTopBtn = document.querySelector("#scrollToTopBtn");
  if (window.pageYOffset > 100) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

// Script para el mensaje al hacer clic en "Call to action"
document.querySelector(".btn-primary").addEventListener("click", function () {
  alert("¡Prepárate para jugar!");
});


// Script para desplazar suavemente hacia arriba al hacer clic en la flecha
document.getElementById('scrollToTopBtn').addEventListener('click', function () {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});


// musica

const audio = document.getElementById('audio');
const btnReproducir = document.getElementById('btnReproducir');

btnReproducir.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    btnReproducir.querySelector('#iconoReproducir').classList.remove('bi-play-fill');
    btnReproducir.querySelector('#iconoReproducir').classList.add('bi-pause-fill');
  } else {
    audio.pause();
    btnReproducir.querySelector('#iconoReproducir').classList.remove('bi-pause-fill');
    btnReproducir.querySelector('#iconoReproducir').classList.add('bi-play-fill');
  }
});


function toggleInstructions() {
  var instructionsContainer = document.getElementById("instrucciones-container");
  if (instructionsContainer.style.display === "none") {
      instructionsContainer.style.display = "block";
  } else {
      instructionsContainer.style.display = "none";
  }
}
