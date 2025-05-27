'use strict';

const $boton = document.querySelector('#habilitar-notificaciones');
$boton.addEventListener('click', solicitarPermisoNotificaciones);

function solicitarPermisoNotificaciones() {
  // TODO Comprobamos si las notificaciones son soportadas por el navegador
  // TODO Comprobamos el estado actual del permiso (Concedido o denegado):
  // TODO Si el estado es 'default', solicitamos el permiso:
  // IMPORTANTE: Esta llamada debe ser en respuesta a una interacción del usuario (clic en un botón, etc.)
  // Si la llamas al cargar la página, la mayoría de los navegadores la bloquearán
}
