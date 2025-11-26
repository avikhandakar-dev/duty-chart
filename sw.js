self.addEventListener("install", function () {
  self.skipWaiting();
});
self.addEventListener("activate", function () {
  self.clients.claim();
});
self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req, { cache: "reload" }).catch(function () {
        return caches.match("/index.html");
      }),
    );
    return;
  }
  event.respondWith(fetch(req));
});
