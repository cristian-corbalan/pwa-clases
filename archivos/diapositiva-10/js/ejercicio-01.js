'use strict';

const libros = [
  {
    titulo: 'Harry Potter y la piedra filosofal',
    autor: 'J.K. Rowling',
    enlace: 'https://www.amazon.com/-/es/Harry-Potter-y-piedra-filosofal/dp/8478884459',
  },
  {
    titulo: '1984: 75th Anniversary',
    autor: 'George Orwell',
    enlace:
      'https://www.amazon.com/-/es/1984-75th-Anniversary-George-Orwell/dp/0451524934/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&s=books&sr=1-1',
  },
  {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    enlace:
      'https://www.amazon.com/-/es/Gabriel-Garc%C3%ADa-M%C3%A1rquez-ebook/dp/B072MPBPP8/ref=sr_1_4?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&s=books&sr=1-4',
  },
];
console.log('libros:', libros);

// Accedemos al botón y le agregamos el evento
const $boton = document.querySelector('#compartir');
$boton.addEventListener('click', compartirFavoritos);

function compartirFavoritos() {
  // Lógica de la API share
}
