const $videos = document.querySelectorAll('.navegacion a')[0];

if (!navigator.onLine) {
  cambiarEnlaceEstado($videos, false);
}

window.addEventListener('online', () => {
  cambiarEnlaceEstado($videos, true);
});
window.addEventListener('offline', () => {
  cambiarEnlaceEstado($videos, false);
});

function cambiarEnlaceEstado(enlace, activo = false) {
  if (activo) {
    enlace.classList.remove('desactivado');
    enlace.setAttribute('href', '#');
  } else {
    enlace.classList.add('desactivado');
    enlace.removeAttribute('href');
  }
}
