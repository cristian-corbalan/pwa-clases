'use strict';

console.log('navigator:', navigator);

const $alerta = document.querySelector('#alerta');

if (!navigator.onLine) {
  mostrarAlertaOffline();
}

window.addEventListener('online', mostrarAlertaOnline);
window.addEventListener('offline', mostrarAlertaOffline);

function mostrarAlerta(contenido) {
  $alerta.classList.add('activa');
  $alerta.textContent = contenido;
  $alerta.show();
}

function mostrarAlertaOffline() {
  mostrarAlerta('Estás sin conexión');
  setTimeout(() => $alerta.classList.remove('activa'), 3000);
}

function mostrarAlertaOnline() {
  mostrarAlerta('Recuperaste la conexión nuevamente');
  setTimeout(() => $alerta.close(), 3000);
}
