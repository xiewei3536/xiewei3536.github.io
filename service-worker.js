if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return a;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/10/07/測試文/index.html",revision:"fbbbe0f6f957f4f4cffbf18ffe4cb380"},{url:"about/index.html",revision:"675ebbca3047302c8320a322babb70e8"},{url:"archives/2021/10/index.html",revision:"53780897919be5f20d34823c82f5e7ca"},{url:"archives/2021/index.html",revision:"05e09c686c424c40e5284a67314c3a2b"},{url:"archives/index.html",revision:"9d38f5c7ca96f05f9f8d7570d1b319e0"},{url:"categories/index.html",revision:"ad46a1c59b287cc2340607062a1e0d67"},{url:"css/custom.css",revision:"482ef1e6977469eb6ed277524f6e26fb"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"61e79ba03478929f1ef063d08ef823b7"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7ada73a87ffccd4acb74489f667afd7e"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"3b910e800cfbf8d4f756060baaa3df4e"},{url:"js/main.js",revision:"c5d97c2242857d2fb015473da7f5a7d7"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"5d19582eb431f0999df03a17df763428"},{url:"random/index.html",revision:"78676ff13c09ada88a47066a6885ade8"},{url:"隨便看看/index.html",revision:"0f995b5bb049efa67dab6fbde3bca820"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
