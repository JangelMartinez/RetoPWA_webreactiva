const musicDev = "musicDEV-site-v1"
const assets = [
  "./",
  "./PWA_musicDEV/index.html",
  "./PWA_musicDEV/style.css",
  "./PWA_musicDEV/js/app.js",
  "./PWA_musicDEV/audios/web_reactiva_223.mp3",
  "./PWA_musicDEV/images/icons/favicon.ico",
  "./PWA_musicDEV/images/icons/musica_16.png",
  "./PWA_musicDEV/images/icons/musica_64.png",
  "./PWA_musicDEV/images/icons/musica_128.png",
  "./PWA_musicDEV/images/icons/musica_256.png"  
]

const assetsDev = [
  "./",
  "./index.html",
  "./style.css",
  "./js/app.js",
  "./audios/web_reactiva_223.mp3",
  "./images/icons/favicon.ico",
  "./images/icons/musica_64.png",
  "./images/icons/musica_16.png",
  "./images/icons/musica_128.png",
  "./images/icons/musica_256.png"  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(musicDev).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
        const networkFetch = fetch(event.request).then(response => {
          // update the cache with a clone of the network response
          const responseClone = response.clone()
          caches.open(musicDev).then(cache => {
            cache.put(event.request, responseClone)
          })
          return response
        }).catch(function (reason) {
          console.error('ServiceWorker fetch failed: ', reason)
        })
        // prioritize cached response over network
        return cachedResponse || networkFetch
      }
    )
  )
})