'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7651799046f0530d50c182e9758b8bab",
".git/config": "206f19561ba1045e8911e56d24e71b63",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "ca2deb2979cb7a6eb0218d53aa7dd6e5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2bd865c321cefa84578bb31a40fdaef7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8b751e09d8368e2588836eb8268bb8e5",
".git/logs/refs/heads/gh_pages": "32a18a2828645d0ddc8a98ef9a22b5e0",
".git/logs/refs/heads/master": "ddb9339acfdc1f1c295f282303ff214f",
".git/logs/refs/remotes/origin/gh_pages": "3a9a06e21895169a23b8ebfdcf2c2e6a",
".git/logs/refs/remotes/origin/master": "cae706d4bf8c4a305f85342b67261899",
".git/objects/03/0ae12e2fec5e3eac6a459fae5715a1511f26e1": "a00c0c420e8a6d58888e0223d22ca7fc",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0a/83b1e89fcec0e0fe3555a68a89389bcb0299d7": "2977bdf0b9209c552b2644f9d6a19024",
".git/objects/0f/46c6b3ed07908cbdd66e2c52808c1e71ab8552": "1d06ac0e164985fb9c4b67eaebf30965",
".git/objects/1e/a877e796823efc9ecb6f5ed033b9db2286a854": "343a32ead407c6379f1ff0728915580b",
".git/objects/23/63da95161d1e3ac3fce7848cd73e8be9fc3a8e": "a06211653f56f9f18575f85514210b39",
".git/objects/25/e7b507d4d11fff4ea62bd96de64d71df367a7c": "c22bcff5992a3e2f4c9f539f3335374b",
".git/objects/2c/969fa17083682f768df4de5d5349c42685636a": "f5483f188ec0a3c00fd161e388fe481a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/fcafad7f75f4e5b9455c66278d09f3cdf9fc5f": "4c497772292a00d84f75dbbab4d0a71d",
".git/objects/33/011e868d4af9457372d70a50ddc8f4c8019f14": "37eebbf7fe4798a7909a811d1697ff3b",
".git/objects/39/3a241a36000e1294a075042b9204c2719e0f01": "74eeb719e4cbb777138d949d614f9ccc",
".git/objects/3c/f38b769357abbe8d7f04aa10237adb21640c58": "8034d5844251193fd8205d503697acc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/53/1cf35d1fb19fe61cb25fa2396adc3d41ec88bc": "a8e87da43882f5cb2585739bb55e8cc0",
".git/objects/5c/acb661a7d9b80b1fd9267952cc94fbe744641b": "69f9eeae672deedcc7ed9a0a1c888133",
".git/objects/62/80ee93b713338b658c8a951f174b547fea57c8": "84be364c18d4b46d2859b2327cf474d6",
".git/objects/6c/178f0aed3b3eaac4f129f21347c8454d3915e7": "8d71795918c4df2771ba9f70e99343ab",
".git/objects/75/baea1c4701bb0e823abfddea5a5cc3f3823a4c": "e85c2703eeb62cbddebe164232cc8e1a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/06316e0ba534d730a48a3e66ea60582a0b1879": "62841a262d5bab18484390a6cdb1b75a",
".git/objects/87/8e3fbdce21ba91ab824cc51861ff0e24729431": "7e8ca33f3a8256c9a4ab029863d7f233",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/0946562e5f7e6ce6cdba28a0b69ea9d1d9687d": "08dd557cb9fe08f2e434335f3245a60f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/377e4a1e8c9b95309c8e5634c8a342dfe5ba00": "daa16f48c4b4329e8ee0cabd304d3e1c",
".git/objects/ae/63ff0405caea968d1cdc4a0eca141ab4b0837b": "eb2a9137ada4ff6abe955deb6b354cc9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/e6fa896ca03398f77c054fd4c7fedda8fea376": "8475a02d88b292a46f8b28c4c284ce7a",
".git/objects/bf/7dc1fc5388bbd89c535cf99f0bfaf0bd21a20f": "cabbb2bf669d2694422b3ab890f49c1b",
".git/objects/bf/a16e5ed3ad3c650446617a3c80a6ca2f9f45e2": "fe99c4cb38366a7fbca138e183091706",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/c8/03155a8e0b62895db0d718060ac781262c0e28": "e366d00179362c5ee38d91f105eb16a5",
".git/objects/c8/6aeb828bbf85a9d0102cd22eec2cae29401642": "4efd5768c0e909b35ca31db5d7670c3d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/4ce68c2bfb7fa399ddcfa52f849f33f13633a1": "c29beb211735b1334380fe31128412d9",
".git/objects/db/81840f11aa081c9186918a84334367944fe36d": "85fdab841998bf93baea1cf6f78f6148",
".git/objects/db/f39bcfa3aef695fb35b6edb136ee6a178360d2": "51ebdf1bdaa2eedf384d46f2139ac05f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/cb8c0c7772fdfdf19027aa7d25f9e5397de4ef": "f5ed1aa0b5ecdd39cd4f6bbd7f5eda5c",
".git/objects/f2/c70761cd866fc3b24c39ea5a90c0cb6fe51228": "4c8864c731cf1e73d37cdf759546fbfa",
".git/objects/f4/649fbe2c9fba26b244b1592e618fae3ec50401": "3588b5a9381ec4a3926b9e4384947c31",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/objects/fa/0c08143c9422edb7e8d988527354810f21e8a2": "cabfb0d6c6fc0acba240a50285a76a8f",
".git/refs/heads/gh_pages": "b8d4b91306ba339dc5210efc6e434918",
".git/refs/heads/master": "02e09ca983be7d96314e039fae8ce712",
".git/refs/remotes/origin/gh_pages": "b8d4b91306ba339dc5210efc6e434918",
".git/refs/remotes/origin/master": "02e09ca983be7d96314e039fae8ce712",
"assets/AssetManifest.json": "29b28726ea410985ba5d42d509c95a54",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/files/profilePic.jpg": "d2e75df34f26dc1da4594007a3a44291",
"assets/NOTICES": "8b5f0b8e497484f7604f333baa4fbc5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0cd9f31f282e542286cd58e2ef442b69",
"/": "0cd9f31f282e542286cd58e2ef442b69",
"main.dart.js": "1dfed494dff93d3eeab953cd1c293e87",
"manifest.json": "855a0400809c4705d228b48a7e192b10",
"version.json": "2f4ca8117b9daeb713d89c9637cac2fd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
