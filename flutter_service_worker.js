'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "986bb02106a14fa359155bc540b44ba2",
"/": "986bb02106a14fa359155bc540b44ba2",
"main.dart.js": "fbde50148a80e4b30b897386b8d7402c",
"favicon.png": "44b034dd99c82ac994018e8b64fd985f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
".git/ORIG_HEAD": "08cc329f95ad819bb1c01fb3875964e1",
".git/config": "4e14437e625ad6b06e66f76cd46f3abb",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/9c/8e6d38cf68edb7382e65e8916c760282dfbed3": "dc229cb7dfb5a95c7bd354c0dc756757",
".git/objects/d9/8d6ecd54943dd62c5c24fe1194a32659f61dc8": "ac141c307ad972964effcb9ed6a1822b",
".git/objects/ad/5c52bcfb5553eba7c98e2e65959727f6a12192": "0d84dd9a29e432a672129bf5ed90a359",
".git/objects/d7/977ae1758230d16c6866c13ac480dd29265ea6": "764533228ac983a1a9ad3aafd2c3b38d",
".git/objects/d0/912b9c84a0bcc402baacd2d7e8bf23f27c7694": "5afe8c46a1b89617d2c08f02c6703f91",
".git/objects/be/76f3ceeba0a3378753b1f131ede9d7283610ba": "1cb105d345cf0aa7953160edbd08206b",
".git/objects/a5/a406ca6ee7e7afa3ae8e688edc2648bfa5bb80": "687d95a32c581b3eef41a52fc590cb1c",
".git/objects/d1/489ed1ce9aabedc50d68cee68d92f4a8e37b74": "d5f04935d4bb4582b9b5fd63a16df802",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/2c98d8731fef96a222c2a81fc72b9e19da7933": "107778a37ed3a3b21b0889c6ddf49403",
".git/objects/eb/4232a0c2cd4970128e5271fec45b6868fa2eae": "82bdd55a92e7f57744f34ab6ab555ae9",
".git/objects/c0/e043e1853771606b146e500f98a5d48b30e895": "866284302909037c0a6a717ca627129f",
".git/objects/f2/20cda6cab3ee35656185644b99a26b863baa33": "b434d46404e37e6bb539cd0ed05fc45a",
".git/objects/c6/3900cd7f4c05b9b03b71c630fe4d56bc82f662": "cd9d908f87b90090534a057edc3b53e9",
".git/objects/c6/a60ae6089aff78cb76995f1c5b9a2b0589cb90": "f7239bf9a6776403e8920dd5cbbe8d9c",
".git/objects/20/62bd101ab3251613f7cfa089c6ceb7a031773c": "2628571271719010a86d2537f9dd2874",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/89/206f53db807c35519490256f3f235d772af66b": "7bc8c5cb2b5716382cfcd193883ac11d",
".git/objects/45/1db0f1f8f74f93a9bda7236169192fdd8fc824": "1d701c8bfde55326a18900da3274d235",
".git/objects/73/a545912efb314625a8889ee85e15504abb7faf": "89d556dcdf7bf60e7e78c1d1751779e8",
".git/objects/8f/812d6040e7f92bc97fcc5650e491539e72b344": "4799314f3a66b20f123b21426498e3d6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/ddc04f0b05b00e2ec74e34418eda09984e4e2c": "fc7a8ddece5c2eed3fb0b301fbc0eb41",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/1d8f02da14f2441505797231cb74fe4765d0d0": "ebff995650a32be38006ebed175b66d9",
".git/objects/31/b85d215f6c928762aee8e3575d96f0dbf6fd54": "6e14f4229455f7e7499aa677a1a56858",
".git/objects/37/326bfe92b756ebc74912a3fa0877c883e2667e": "c61eafaab8a9e2df39fc07aa2cb67caf",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/dd/e05d721b5300cbcfb0b81a405905dde9167e97": "78357b82446577951f2fbeb27d9672f1",
".git/objects/dc/f1c62f38c2a1ab6e018514b6aa5d6f524ae289": "f4cf5a48f4b81ee2220115b1555198df",
".git/objects/b6/b1a27ee37f07fb3b74112ea6cf9fb3ee141f62": "bfb4e1f7ded5bd52ed247bda15055c82",
".git/objects/aa/59e7ab3d49aac55bee8493c29b8178ac6ba803": "8ceaaf95f5337313b1e350393208b3da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/34388db038f407f3f06840d4911528c3c321c2": "6e019178b68db997d4168a9b42181a96",
".git/objects/f9/4631102465df8b416329503139081889847071": "c3d81a1f77ed0841057076e39e8d7b91",
".git/objects/f0/ba587030c29893bc55800256c7984999ad8d96": "4ef76ea36a593b3be537e549479f8be3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/564d514ca8238e2c136e64acc8fa03547b3942": "3fbb11b3af9c19aaca6227c41c43c1a2",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/24/e4a4af40b6b7a6698e85b7be761cab67ad6d12": "faf97444caa8a3d0345db83180517b6f",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f01f9045ad78f69e956d6fb9c1f7ea9c",
".git/logs/refs/heads/main": "7ccdd1aaf1062dcf4357fc38c9d49621",
".git/logs/refs/remotes/origin/main": "e7219b09c18e49dca403ffa958646c51",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4f103172bd61553d860d7551a82fc935",
".git/refs/remotes/origin/main": "4f103172bd61553d860d7551a82fc935",
".git/index": "7ce637120d1a2e33c5c26c385999f410",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/FETCH_HEAD": "c3aba9e0ea61015eef8c1b2f5cc44a64",
"assets/AssetManifest.json": "ada2bd70b2ba7edd360231505a0a3d1a",
"assets/NOTICES": "66e72196a0241cfda15bf240e0b6e009",
"assets/FontManifest.json": "81d0e6184b1d31e2c4d4444f3abd8a3a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/me.png": "cbcfee9f4d8f563d4c2a9bd143a21b84",
"assets/assets/images/github-icon.svg": "41da7a407ba35c29b24ea9bae50f39d4",
"assets/assets/images/email-icon.svg": "0081a5d673bc47376849db239bb5eb54",
"assets/assets/images/behance-icon.svg": "e781ee5e89f4e0887c5f371e3528d8e5",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b"
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
