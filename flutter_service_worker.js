'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9c33b31a6297a2b69cecda93e7ac9bf4",
"index.html": "b307bff2f37cc8519541ec001b302be1",
"/": "b307bff2f37cc8519541ec001b302be1",
"main.dart.js": "0b7863c53556d20d484531f98e970533",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "426a20680b2627b78c448f1e402f3339",
"icons/Icon-192.png": "426a20680b2627b78c448f1e402f3339",
"icons/Icon-maskable-192.png": "426a20680b2627b78c448f1e402f3339",
"icons/Icon-maskable-512.png": "426a20680b2627b78c448f1e402f3339",
"icons/Icon-512.png": "426a20680b2627b78c448f1e402f3339",
"manifest.json": "e8b3f4c2bbd5ac7b748dba0d488aa210",
".git/config": "e4d1992703d3d29c646407ea05e4822e",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0c/4c960b34105a94700108db817dc9b6e2740301": "db6001afeae44f6f3979d0a4846b2267",
".git/objects/0c/e2cf2221013ffc2afd39b2d682fffd7575bd86": "730a1582e8df0484da04dd3056b2fd64",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/32/a0a6cd5c2a36defc2f2d6b6ea281d96b5df2a0": "1102dbb0cf608ba228be109abab22efe",
".git/objects/32/35ec9f04115cae1033ef808a690489bc5a0f0d": "234453f181e07075d19af22ea5602508",
".git/objects/94/13df4006467358e52a686868ce3bcc1ca4c704": "cef90fd2bb56cd90de781dd7db872b51",
".git/objects/0e/4def2fda7704201e4d4a63f73988e5227df4d6": "dae681782f48e39412d2d72d1c93a8e4",
".git/objects/33/7ff113180890328fb327228956029f2345490e": "d6e4232ee407d4265a0992a5ba35aa52",
".git/objects/9d/c11fa68d86bd3c74db3df16449869aa3cf1153": "665ab058086ed298778f58f25ba5a765",
".git/objects/a4/d892d480a8ebdfda446d0e0cd8c8bb3bc7830c": "055fc1eefd7b24df97a8aae1260ba68e",
".git/objects/ac/0b404c18b3c08c15135434dbfae47a5e7468c2": "85246bdc8c58a65fbaa6bd360f60fd84",
".git/objects/d7/daf562288d39536a657d5df9fa42b931f0d2ed": "9afb47f141c62cd36cc73ebd0256207b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c1bda89dd1f5e08e2ff2e9382448c94e7b675e": "3ecff0e3e766361bc5192dae207033ca",
".git/objects/d8/38d3737fc2106c94879a39729d1a56d76fccdd": "d7781fad7f8486d3ac46768f57bd7a35",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/6c7e066543914b4008fb548ab407561aa66165": "b84051eee4fcb65af22c37d788938b10",
".git/objects/f4/5633eca9e951f7c6b060f08a5307e69c8dea6d": "a8d28e68ba873e3cf7c03547351a075c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/985bdac7acd89833804a10ac6d0c50ef3b8c8b": "1eea2439ee066f5f734e00ab7c3bf9a1",
".git/objects/fd/ac1b63a13ec107ab41a75e17c693e6bb493285": "24bd9680c93a7e3e574a980c9a8e67e4",
".git/objects/e3/54393b657984b2ea396a44d1ce321542904013": "8d21fb0605ef4fca0523df2a2e459964",
".git/objects/c6/3975c6522dcafdf10893dcb5307b0030f63487": "0fab5a7dbc75caa4ad9138a4d671472b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/5cc3e13ea8761432f1b3c4dc7d8a9d114e3abf": "117a364d55f4e9ade130a7b3bf9ccbf3",
".git/objects/27/20228b69793180dbd5c412f03fa5949aadfb15": "3bc813482c58a49ef1840708539812b1",
".git/objects/27/b63c87e5bc2297987b27e9f04dec7c322216f3": "c9cb92966272a4f0a6fea5e35fa18923",
".git/objects/4b/a0ef399477e10e493d06571b0bb9f0e6d1a523": "3a53769e1b58e8cb8ab91a0cb674b393",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/61169793e68ccd7c5272caab44fc252b226802": "92cbec1ad6227ed9c2a05c1e320b031d",
".git/objects/1a/961f632f2abc1736b260651473308822780d51": "81f631f18ea9bbc8d2f8389703f4f20f",
".git/objects/28/18185d980ee66f3b1b0da05a7c497903bdc34a": "00aa8544253b50686e0c1d90a6ec6e2b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/86ff44ba7d25a9dcc3e1120590bae1cbe52fb1": "21093d8f34e8a1c728d97461e1d9c7d1",
".git/objects/4c/fe81910f702f5eca74b2ac30582356e45a3304": "f6992224cfaefd1de22f0fb6387ae79e",
".git/objects/21/b8578a08fb08b986be6a70898e95c71d7a1dd8": "1a27230301b55751b8756009c99962c3",
".git/objects/2a/b1321e674ce47b14b834b3c792ba2580636384": "50c8f5a44d6eadd3dec25fce19b710e8",
".git/objects/88/023ab672525415dc40c9450042600ae6cca740": "1d2e99ccd2848064051a4085cbfdd63f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/01e625ddc4364fa2715c1dae90f0f7edc9a145": "4e1f3f3d3d54c314185bb8c8c40cdb88",
".git/objects/6b/eed1b5375a80361f1a707b4416b3f24557206a": "de6b9814f0b7d8156ff2dfbfe7efe256",
".git/objects/6e/7d82197a30429267ddb8cd5bd16fc492fe4c7e": "a279f5fe6eb0bcc177635492f35b2b07",
".git/objects/54/e6c571194441b1626aed24f83a29293b4105fd": "1f0c12c9905219172ad386131ecc465f",
".git/objects/3f/422c8b3b07a1edd5435b23602cf10e67bc58a8": "7bec524420ccfb079406cb30df3d4e76",
".git/objects/5e/1848ffd2192e1145f694fac00a2995ebfc2b34": "da2b52cd7de08c6d9c9536864ac79133",
".git/objects/5b/aa90d5420ce3f12128797657bc5015f5442f5a": "8a71b6a850ba06a23a355f6c5832bdcb",
".git/objects/64/0ac9eb8045f26f5a1c1c6ac2e2c1a7238cd389": "51a5f5452135ec093feaecf8271837e7",
".git/objects/90/8b0b6dbf4dddcbc6ede8036732baacdd776ead": "ece15f12e632fb811b22e76ac40accd0",
".git/objects/dc/35542d283c94c32207654b71dab316c39cfc4b": "3bae6337c2a390a48408131ac48bed85",
".git/objects/d5/d74b6e32da60fc65ee6819649b892d1972b1a4": "a5265ceabebedcff7119d6d4683ef28c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/81e0d250170f4887c837fae018c83e18d1ea81": "4b49b417e2c25488485109b6261a66ef",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/704d26f53e99b1af0189e47d47ebfd7646f711": "d528ab4ebd81aadae7a37097d02b3066",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/1c9197239681be77bacc7748f0d785bf7229f9": "50939eb88b587502de049a1fed2f1892",
".git/objects/ef/e2da465b577f9cfc2ac1dfa1ccc5268aba6ad7": "ff5ca8221d880737801445612f02ac2c",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e6/1728a579d82b20ccc56aba19a98b2f5421dfc6": "f23626decd3f7f5b7448ef37e9572884",
".git/objects/f0/f6e808ebb310a2b09fd74d44f163b0c9708de0": "85d42b1814a512a61b69c3d1cf1afc6b",
".git/objects/f6/aee998dc143fe8593560934cfa04e781bb61c9": "9ce557f0b60ce5d21925764e3a9ead92",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/00394611a6449089b8c351ad8909390712c4d4": "744aa697a52e278816c889efc46ec375",
".git/objects/e7/a9a00d2bca65077420aa6637319463eab0822a": "e8e1dff84feee5c21437d0e51866c463",
".git/objects/cb/525055a40f1426f2d886d405306c0896b22db2": "e64c726885e680645b90b8c90d536f7a",
".git/objects/f8/cbc7c4fbd1971f2c92c404ae824af389cf41b6": "82588a99609c2a4ea1e5a8d8f403a2ac",
".git/objects/ce/9bfd14b7137be39a0d41e21e718fe20ae161d9": "9ca3d0c99e0c4e06fc09d64e9ed8dfd5",
".git/objects/ce/636843cb2853aa20686f8584ecf9a7b8d73049": "925c96ebbca5c026b274da817a3bc40d",
".git/objects/2c/6140ba17c1aa33335701d0aa77bef9a77ae9ee": "3c72ee68db5f224e64d15da57d37bd83",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/48/9f1a0bc41f87b655aa1c4d7aad94e8d8ca1100": "9ea4f08f9265e5a5b96e4b69b5bc25e1",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/40/c71858f831c5e0109cfca1a4928fbec254e1ee": "b623c5b620869f741e7cbd7f85aaf12f",
".git/objects/8b/b8a19b3e9db13c18e94ece3e7916b3ffbef122": "d3bbb33a91f317b8acef0e3b1a8fc9ef",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0133b6b0c7ac03d69943263268180b9c",
".git/logs/refs/heads/master": "0133b6b0c7ac03d69943263268180b9c",
".git/logs/refs/remotes/remote_one/master": "d30ba7b8a548bc0e5360ce8f544040fe",
".git/logs/refs/remotes/remote_one/main": "08bd61ebb154bae7409af165a9170130",
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
".git/refs/heads/master": "b0cf8ba4612fb5ac7834af43b0a4a7e3",
".git/refs/remotes/remote_one/master": "b0cf8ba4612fb5ac7834af43b0a4a7e3",
".git/refs/remotes/remote_one/main": "3502742a537a906b55c1e67e4b44fd47",
".git/index": "e79f39ecc6457683d173ffb32525d788",
".git/COMMIT_EDITMSG": "d915a5656a795ae748352bfb24589888",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "a7482be398242fdd8a03bb571e4d4ac7",
"assets/NOTICES": "4d5668a97a65c6b1cc8b18ace32694c3",
"assets/FontManifest.json": "1c177f69de6256135941857b3cebf901",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_iconly/fonts/IconlyLight.ttf": "25d014c0a013024ffb898071af3bff6c",
"assets/packages/flutter_iconly/fonts/IconlyBroken.ttf": "541df649654f074a25833daa64e246f3",
"assets/packages/flutter_iconly/fonts/iconly_bold.ttf": "20ae062785ef7ebe5d2eaaf4ddbb8e3a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/IMG.png": "e580fb50be00c1c59d7a23b61f10bbc4",
"assets/assets/images/png-clipart-google-app-logo-google-logo-g-suite-google-text-logo.png": "585e3dbb3ad128de915f1e25d3f3b11b",
"assets/assets/images/Line%25203.png": "c43d31a33914c621580d9d923a7a11f1",
"assets/assets/images/image%25202.png": "426a20680b2627b78c448f1e402f3339",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
