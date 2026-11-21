// 入口アプリの部品。インストールできる形にするためだけのもの（控えは持たない）
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
