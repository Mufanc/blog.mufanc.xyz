if(!self.define){let e,t={};const s=(s,n)=>(s=new URL(s+".js",n).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let r={};const d=e=>s(e,o),f={module:{uri:o},exports:r,require:d};t[o]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(i(...e),r)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/fonts/by-winnie-stars.ttf",revision:"866069368d43014053f54cd5505e443d"},{url:"assets/fonts/genshin.ttf",revision:"dacbbba0558b1520963f9ab97ed95aae"},{url:"assets/fonts/setofont.ttf",revision:"a08e3d144401f419026521e8ebd1fcdb"},{url:"assets/fonts/zhushi.ttf",revision:"2a6d9e64ced37fe50c730bfc5d23ceeb"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map