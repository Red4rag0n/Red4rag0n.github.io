if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const f=e=>s(e,a),n={module:{uri:a},exports:c,require:f};i[a]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-0f20801a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/05/18/hello-world/index.html",revision:"ccc010890523c7e291a3b7799a1cb75e"},{url:"2022/06/18/CTFShow/CTFshow_PHP特性/index.html",revision:"7b9a5683dafc570d9273d8e138467ee3"},{url:"2022/09/16/CTFShow/CTFShow_命令执行/index.html",revision:"d24a6fd2d8b2caeaa37bc5472efd9768"},{url:"2022/09/17/Hexo部署出现错误 Error Spawn failed 解决方式/index.html",revision:"76b71d11788fd26e6d4e5b9ef7dcea70"},{url:"2022/09/26/CNVD证书/index.html",revision:"43b151a12f783854cf8bf4f5384adf46"},{url:"2022/10/05/时光代理人/index.html",revision:"6aeff16357bdb3dbd1e0fcf582c21848"},{url:"2023/05/29/EDUSRC证书/index.html",revision:"df9e96ec5a78d87628477140863bed88"},{url:"404.html",revision:"09ee624799ef84582fb6a36658dcb0fb"},{url:"anzhiyu/random.js",revision:"e427a0e63db9fc258324d4391ca96efa"},{url:"archives/2022/05/index.html",revision:"e775cb6b514dbe340222fa895e37dcb7"},{url:"archives/2022/06/index.html",revision:"a294564ff57bf186e629e8457f71b3c1"},{url:"archives/2022/09/index.html",revision:"6a4bcd581cfa43daf1fe0b118ded7933"},{url:"archives/2022/10/index.html",revision:"411faa20caa797e3cb1e75d43737bf20"},{url:"archives/2022/index.html",revision:"0e297b0b003d466338e7831ce61b65b5"},{url:"archives/2023/05/index.html",revision:"423ea96a52759df33fba051b0e075110"},{url:"archives/2023/index.html",revision:"77adc2d47d2153d674f5392883d910c2"},{url:"archives/index.html",revision:"d6d88d5ebf937dab9f3189264c5ab5c1"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"bangumis/index.html",revision:"66785506396d6b5f1bd3593e4fd039ed"},{url:"categories/CNVD/index.html",revision:"0bafdf57bedac839548995036e275e37"},{url:"categories/CTF/index.html",revision:"d84f2906ac81e056e0811429fd3dffd3"},{url:"categories/EDUSRC/index.html",revision:"0a1265313c85f11d2daaeda0bf56e633"},{url:"categories/Error-Spawn-failed/index.html",revision:"81be58f4ee6d61cb3b64435e0ded2d46"},{url:"categories/index.html",revision:"9df87b12201a867308ab648fe6fa5d80"},{url:"categories/RCE/index.html",revision:"d436bd3828d8abd12d13e25124a67e81"},{url:"categories/时光代理人/index.html",revision:"ff9d9eeadb7263fbe56ccc146e1eb5fa"},{url:"cinemas/index.html",revision:"e62aa73e506fe6680d3df382489fe18c"},{url:"comments/index.html",revision:"84eb44cbf22c45bb65e8d4ddfab0d58c"},{url:"css/chocolate.css",revision:"09329341ac84356645cae97e3cf9c209"},{url:"css/custom.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/gray.css",revision:"22073e703b88f6db0ae84dfed1b1015d"},{url:"css/index.css",revision:"8b3facadde0312d19a87b80eab64e938"},{url:"css/universe.css",revision:"5092b5f88b68c180fce400fe00a88475"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/Wave_effect.css",revision:"e0175eefae6bf0b00996abda29c156e6"},{url:"css/xinniandaojishi.css",revision:"88bdebe1b7172bab011916f8e803625d"},{url:"history/index.html",revision:"f5931c9eab313abbd46353b0c819714d"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"cff410b411441489e8504161ecaa3d90"},{url:"js/grayscale.js",revision:"c4b17493d112655d0c0b70b26ec5f0ff"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/newYear.js",revision:"beff617383aca7640d26a4ae7670ed91"},{url:"js/sakura.js",revision:"d847f268c480b5e878485fb8b1efe285"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/footer.js",revision:"5bfb3929f3f3a69fd745f9e2a4dcf3b6"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/search/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/title.js",revision:"578715738fc9495e61fe67467bf5324e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"e1005933b74c84041ff6db47c239a663"},{url:"live2dw/assets/moc/tororo.2048/texture_00.png",revision:"9bd791736cfc91b62670dee5f7fbd45c"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"tags/CNVD/index.html",revision:"5b30defdfa288747a4bf8e1e4ad02081"},{url:"tags/CTFShow/index.html",revision:"9a895a59bbda4d2f988d318d95919d59"},{url:"tags/EDUSRC/index.html",revision:"b56cc2b207e3e95f4cff7d45eda02259"},{url:"tags/Hexo-Error-Spawn-failed/index.html",revision:"0ba8bc0e82ecbfd6c0f157c23445accd"},{url:"tags/index.html",revision:"fec10b2f261c1f173d13ddd6eb7c31c9"},{url:"tags/RCE/index.html",revision:"300bfed2fcff7ce73bc7d572166eadd5"},{url:"tags/时光代理人/index.html",revision:"3352b31cc654415cc028ab458db8aab0"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
