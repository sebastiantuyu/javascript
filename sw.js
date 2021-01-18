const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fectch', event => {
    const request = event.request
    if (request.method !== 'GET'){
        return
    }

    // BUSCAR EN LA MEMORIA CACHE
    event.respondWith(cachedResponse(request))

    // ACTUALIZAR MEMORIA CACHE
    event.waitUntil(updateCache(request))
})

async function precache(){
    const cache = await caches.open(VERSION)
    return cache.addAll([
        './index.html',
        './assets/index.js',
        './assets/MediaPlayer.js',
        './assets/plugins/AutoPause.js',
        './assets/plugins/Autoplay.js',
        './assets/assets.css',
    ])

}
async function updateCache(request){
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request, response)
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response ||fetch(request)
}