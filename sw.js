this.addEventListener('install', function(event){
  event.waitUntil(
     caches.open('static-assets').then(cache => {
       return cache.addAll([
          './',
    'css/style.css',
    './index.js',
    './cars.html',
    './drivers.html',
    './index.html',
    './login.html',
    './signup.html',
    './js/bootstrap.bundle.js',
    './js/bootstrap.bundle.js.map',
    './js/bootstrap.bundle.min.js',
    './js/bootstrap.bundle.min.js.map',
    './js/bootstrap.js',
    './js/bootstrap.js.map',
    './js/bootstrap.min.js',
    './js/bootstrap.min.js.map',
    './js/indexScripts.js',
    './js/jquery-3.2.1.js',
    './img/antp.jpg',
    './img/brazil.jpg',
    './img/brazil1.jpg',
    './img/brazil2.jpg',
    './img/carsback.jpg',
    './img/enzo.jpg',
    './img/f1.png',
    './img/favicon.ico',
    './img/favicon1.ico',
    './img/formback.jpg',
    './img/inst.png',
    './img/italia.jpg',
    './img/kimi.jpg',
    './img/logo.png',
    './img/maurizio.jpg',
    './img/mexico1.jpg',
    './img/mexico2.jpg',
    './img/mexico3.jpg',
    './img/seb.jpg',
    './img/sebp.jpg',
    './img/sf15t1.jpg',
    './img/sf15t2.jpg',
    './img/sf16h1.jpg',
    './img/sf16h2.jpg',
    './img/sf70h1.jpg',
    './img/sf70h2.jpg',
    './img/sf2007.jpg',
    './img/sfbanner.jpg',
    './img/sumi.jpg',
    './img/team.jpg',
    './img/tradition.png',
    './img/twit.png'
       ])
     })
   )
})

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      // if it's not in the cache, server the regular network request. And save it to the cache
      return resp || fetch(event.request).then(function(response) {
        return caches.open('static-assets').then(function(cache) {
          cache.put(event.request, response.clone())
          return response
        })
      }).catch(()=>{
        console.log('ERROR');
        
      })
    })
  )
})
