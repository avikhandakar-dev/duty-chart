// Service Worker - Empty placeholder to prevent 404 errors
// This file exists to satisfy browser/extension requests for a service worker
// Add actual service worker functionality here if needed in the future

self.addEventListener("install", () => {
  // Skip waiting to activate immediately
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  // Claim clients immediately
  self.clients.claim();
});
