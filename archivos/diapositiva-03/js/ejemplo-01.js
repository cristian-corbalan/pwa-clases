'use strict';

/* SPOILER
function procesarDatos(datos, callbackExito, callbackError) {
  setTimeout(() => {
    const exito = Math.random() < 0.9;
    if (exito) {
      const datosProcesados = { ...datos, procesado: true };
      callbackExito(datosProcesados);
    } else {
      callbackError('Error al procesar datos');
    }
  }, 500);
}

function guardarDatos(datos, callbackExito, callbackError) {
  setTimeout(() => {
    const exito = Math.random() < 0.95;
    if (exito) {
      callbackExito('Datos guardados');
    } else {
      callbackError('Error al guardar datos');
    }
  }, 800);
}
*/