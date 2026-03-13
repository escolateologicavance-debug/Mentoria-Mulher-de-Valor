const CACHE_NAME = 'mulher-valor-v1';
const assets = [
  'index.html',     // Tela de Entrada
  '1.html',         // O Catálogo (Menu Principal)
  '2.html',         // Tema 1
  '3.html',         // Tema 2
  '4.html',         // Tema 3
  '5.html',         // Tema 4
  '6.html',         // Tema 5
  '7.html',         // Tema 6
  '8.html',         // Tema 7
  '9.html',         // Tema 8
  '10.html',        // Tema 9
  '11.html',        // Tema 10
  '12.html',        // Tema 11
  '13.html',      
   '14.html',      
  'certificado.html', // Geração do PDF
  'logo-192.png',
  'logo-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
