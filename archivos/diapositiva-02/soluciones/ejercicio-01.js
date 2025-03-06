'use strict';

// Creamos un objeto XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configuramos la petición GET al archivo JSON
xhr.open('GET', 'util/datos.json');

// Configuramos la función que se ejecutará cuando la petición sea exitosa
xhr.onload = function () {
  if (xhr.status === 200) {
    // La petición fue exitosa
    const personas = JSON.parse(xhr.response); // Parseamos la respuesta JSON

    const $lista = document.querySelector('#respuesta'); // Obtener el ul#respuesta

    // Iteramos sobre los datos y generar la estructura HTML
    personas.forEach(function (persona) {
      const $item = document.createElement('li');
      $item.setAttribute('data-id', persona.id);
      $lista.append($item);

      const $nombre = document.createElement('h2');
      $nombre.textContent = persona.nombre;

      const $edad = document.createElement('p');
      $edad.classList.add('edad');
      $edad.textContent = persona.edad + ' años';

      const $email = document.createElement('p');
      $email.classList.add('email');
      $email.textContent = persona.email;

      $item.append($nombre, $edad, $email);
    });
  } else {
    // La petición falló
    console.error('Error al cargar los datos. Código de estado:', xhr.status);
  }
};

// Enviamos la petición
xhr.send();
