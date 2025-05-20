'use strict';

// Buscamos la variable de estado y actualizamos su contenido
const $estadoUI = document.querySelector('#estado-ui');
actualizarEstadoUI();
window.addEventListener('online', actualizarEstadoUI);
window.addEventListener('offline', actualizarEstadoUI);

// Variables de la base de datos
let db; // Variable para la base de datos IndexedDB
const BD_NOMBRE = 'LibreriaDB';
const BD_VERSION = 1;
const ALMACEN_LIBROS = 'libros';
const INDICE_ESTADO_SINCRO = 'estadoSincroIndex';

// Abrimos la base de datos y mostramos los libros en la biblioteca y enviamos los libros pendientes al servidor
abrirBaseDeDatos().then(() => {
  console.log('Base de datos abierta y lista para usar.');

  // Obtenemos los libros de la base de datos y los mostramos en la biblioteca
  obtenerLibros().then(mostrarLibros).catch(console.error);

  // Si está online inicialmente, intenta enviar pendientes.
  if (navigator.onLine) {
    // Pequeño retraso para asegurar que el navegador realmente tenga red estable
    setTimeout(enviarLibrosPendientes, 1000);
  }
});

window.addEventListener('online', () => {
  // Pequeño retraso para asegurar que el navegador realmente tenga red estable antes de sincronizar
  setTimeout(enviarLibrosPendientes, 1000);
});

// Agregamos un evento para detectar cuando el usuario agrega un libro al formulario
const $formulario = document.querySelector('#formulario-libro');
$formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const $titulo = document.querySelector('#titulo');
  const $precio = document.querySelector('#precio');

  const titulo = $titulo.value;
  const precio = +$precio.value;

  // Validamos...

  if (db) {
    // Esperamos a que el libro se guarde en la base de datos y lo mostramos en la biblioteca
    guardarLibro(titulo, precio)
      .then((libro) => {
        const $biblioteca = document.querySelector('#biblioteca');
        $biblioteca.append(crearLibroItem(libro));

        $titulo.value = '';
        $precio.value = '';

        $titulo.focus();
      })
      .catch(console.error);
  } else {
    console.error('No se puede guardar el libro porque no se ha abierto la base de datos.');
  }
});

// ----- IndexedDB ------

// Guarda el libro en la base de datos y devuelve una promesa que se resuelve cuando se guarda el libro.
function guardarLibro(titulo, precio) {
  return new Promise((resolve, reject) => {
    const libro = {
      titulo,
      precio,
      estadoSincro: navigator.onLine ? 'sincronizado' : 'pendiente',
    };

    // Guardamos el libro en la base de datos
    const transaccion = db.transaction([ALMACEN_LIBROS], 'readwrite');
    const almacen = transaccion.objectStore(ALMACEN_LIBROS);
    const solicitud = almacen.add(libro);

    solicitud.addEventListener('success', function (evento) {
      // El ID generado por autoIncrement está en event.target.result
      console.log('Libro guardado localmente. ID:', evento.target.result);
      // Actualizar el objeto libro con el ID generado antes de cargar la UI
      libro.id = evento.target.result;
      // Resolvemos la promesa con el libro generada
      resolve(libro);
    });

    solicitud.addEventListener('error', function (evento) {
      console.error('Error al guardar libro localmente:', evento.target.error);
      reject(evento.target.error);
    });
  });
}

// Obtiene los libros de la base de datos y devuelve una promesa que se resuelve cuando se obtengan los libros.
function obtenerLibros() {
  return new Promise((resolve, reject) => {
    // Obtenemos los libros de la base de datos
    const transaccion = db.transaction([ALMACEN_LIBROS], 'readonly');
    const almacen = transaccion.objectStore(ALMACEN_LIBROS);
    const solicitud = almacen.getAll(); // Obtener todas las libros

    solicitud.onsuccess = function (evento) {
      resolve(evento.target.result);
    };
    solicitud.onerror = function (evento) {
      reject(evento.target.error);
    };
  });
}

// Abre la base de datos y devuelve una promesa que se resuelve cuando la base de datos se abre correctamente.
function abrirBaseDeDatos() {
  return new Promise((resolve, reject) => {
    // Abrimos la base de datos
    const solicitud = indexedDB.open(BD_NOMBRE, BD_VERSION);

    // Creamos la estructura de la base de datos
    solicitud.addEventListener('upgradeneeded', function (evento) {
      console.log('onupgradeneeded: Configurando DB...');
      const db = evento.target.result;

      // Creamos el almacén 'libros' con keyPath 'id' y autoIncrement true.
      const almacen = db.createObjectStore(ALMACEN_LIBROS, { keyPath: 'id', autoIncrement: true });
      console.log(`Almacén "${ALMACEN_LIBROS}" creado.`);

      // IMPORTANTE: Creamos un Índice para la propiedad 'estadoSincro'.
      // Se encarga de indicar cuáles libros están sincronizadas con el servidor.
      almacen.createIndex(INDICE_ESTADO_SINCRO, 'estadoSincro', { unique: false });
      console.log(`Índice "${INDICE_ESTADO_SINCRO}" creado.`);
    });

    // Abre la base de datos y guardamos la referencia en la variable global db
    solicitud.addEventListener('success', function (evento) {
      console.log('Base de datos abierta con éxito.');
      db = evento.target.result; // Guardamos la referencia global
      resolve(db); // Resolvemos la promesa con la instancia de la DB
    });

    // Si hay un error al abrir la base de datos, lo mostramos en la consola
    solicitud.addEventListener('error', function (evento) {
      console.error('Error al abrir la base de datos:', evento.target.error);
      reject(evento.target.error);
    });
  });
}

// ----- DOM -----

// Envia los libros pendientes al servidor.
function enviarLibrosPendientes() {
  console.log('Intentando enviar los libros pendientes al servidor');

  // Creamos la transacción y obtenemos el índice de estado
  const transaccion = db.transaction([ALMACEN_LIBROS], 'readwrite');
  const almacen = transaccion.objectStore(ALMACEN_LIBROS);
  const indiceEstado = almacen.index(INDICE_ESTADO_SINCRO);

  // Preparamos un cursor para buscar los libros pendientes
  const solicitudCursor = indiceEstado.openCursor('pendiente');

  solicitudCursor.onsuccess = function (evento) {
    const cursor = evento.target.result; // El cursor o null

    // Verificamos si hay un item en la posición actual del cursor
    if (cursor) {
      const libro = cursor.value;
      console.log('Libro pendiente:', libro);

      // Aquí es donde podríamos utilizar un fetch para enviar los datos al servidor...
      // En nuestro caso, vamos a simular que los datos se enviaron correctamente
      libro.estadoSincro = 'sincronizado';

      // Usamos el método cursor.update() para actualizar el libro en la base de datos
      const solicitudActualizar = cursor.update(libro);

      solicitudActualizar.addEventListener('success', function () {
        console.log('Libro actualizado en la base de datos:', libro);
        obtenerLibros().then(mostrarLibros).catch(console.error); // Refrescamos la UI del ítem
      });

      // ¡IMPORTANTE! Avanza el cursor a la siguiente tarea PENDIENTE.
      cursor.continue();
    } else {
      console.log('Todos los libros sincronizados');
    }
  };
}

// Muestra los libros en la biblioteca
function mostrarLibros(libros) {
  const $biblioteca = document.querySelector('#biblioteca');
  $biblioteca.innerHTML = '';

  for (const libro of libros) {
    const $li = crearLibroItem(libro);
    $biblioteca.append($li);
  }
}

// Crea un elemento <li> para un libro
function crearLibroItem(libro) {
  const $li = document.createElement('li');
  $li.textContent = `${libro.titulo} - $${libro.precio} (ID: ${libro.id}, Estado: ${libro.estadoSincro})`;
  return $li;
}

// Detecta el estado de conexión del usuario y lo actualiza en el documentoHTML
function actualizarEstadoUI() {
  if (navigator.onLine) {
    $estadoUI.className = 'online';
    $estadoUI.lastElementChild.textContent = 'Online';
  } else {
    $estadoUI.className = 'offline';
    $estadoUI.lastElementChild.textContent = 'Offline';
  }
}
