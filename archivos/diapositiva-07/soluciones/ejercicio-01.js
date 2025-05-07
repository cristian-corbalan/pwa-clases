'use strict';

const CONFIGURACION_CLAVE = 'configuracion';

let configuracion = JSON.parse(localStorage.getItem(CONFIGURACION_CLAVE)) ?? { tema: 'claro' };

const $boton = document.querySelector('#cambiar');
const $parrafo = document.querySelector('#tema-actual');
mostrarTemaActual();

$boton.addEventListener('click', () => {
  configuracion.tema = configuracion.tema === 'claro' ? 'oscuro' : 'claro';

  mostrarTemaActual();

  localStorage.setItem(CONFIGURACION_CLAVE, JSON.stringify(configuracion));
});

window.addEventListener('storage', (evento) => {
  if (evento.key === CONFIGURACION_CLAVE && evento.newValue) {
    configuracion = JSON.parse(evento.newValue);
    mostrarTemaActual();
  }
});

function mostrarTemaActual() {
  $parrafo.textContent = `Tema actual: ${configuracion.tema}`;
}
