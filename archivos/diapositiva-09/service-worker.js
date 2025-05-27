self.addEventListener('install', () => {
  console.log('Instalando el service worker...');
});

self.addEventListener('activate', () => {
  console.log('Activando el service worker...');
});
