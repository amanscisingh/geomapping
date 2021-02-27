self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./","./index.html", "./index.js" , "./index.css" ,"./images/192 by 192.png", "./images/512 by 512.png", "./images/1.jpg", "./images/2.jpg"])
        })
    )
})


self.addEventListener("fetch", e=> {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})