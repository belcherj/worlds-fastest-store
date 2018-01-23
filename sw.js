importScripts('https://unpkg.com/workbox-sw@2.1.0/build/importScripts/workbox-sw.prod.v2.1.0.js');
const workboxSW = new self.WorkboxSW();
workboxSW.precache([]);

workboxSW.router.registerRoute(
  'https://jonathan-belcher.com/(.*)',
  workboxSW.strategies.cacheFirst({
    cacheName: 'api',
    cacheExpiration: {
      maxEntries: 50
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);

workboxSW.router.registerRoute(
  'https://us-central1-worlds-fastest-store-server.cloudfunctions.net/(.*)',
  workboxSW.strategies.cacheFirst({
    cacheName: 'api',
    cacheExpiration: {
      maxEntries: 50
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);
