self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('rickshawala-v1').then((cache) => {
      return cache.addAll([
        'index.html',
        'dashboard.html',
        'profile.html',
        'wallet.html',
        'orders.html',
        'invoice.html',
        'reports.html',
        'https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
      ]);
    })
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});