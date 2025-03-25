'use strict';

function obtenerUsuario(nombre) {
  return fetch(`https://api.github.com/users/${nombre}`)
    .then((response) => {
      if (response.status !== 200) {
        return null;
      } else {
        return response.json();
      }
    })
    .then((usuario) => {
      if (usuario) {
        console.log('Usuario encontrado:', usuario);
        document.querySelector('#avatar').innerHTML = `<img alt="${usuario.login}" src="${usuario.avatar_url}">`;
      } else {
        console.log('No se pudo encontrar el usuario');
      }
    })
    .catch((error) => console.log(error));
}

const $boton = document.querySelector('#obtener');
$boton.addEventListener('click', function () {
  const usuario = prompt('Ingrese el nombre de usuario de GitHub:', 'cristian-corbalan-dv');

  obtenerUsuario(usuario);
});
