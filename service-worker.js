if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const f=e=>s(e,r),b={module:{uri:r},exports:c,require:f};i[r]=Promise.all(a.map((e=>b[e]||f(e)))).then((e=>(d(...e),c)))}}define(["./workbox-0f20801a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/05/18/hello-world/index.html",revision:"3d34c24cf852abe9005a7bd58a7b3adf"},{url:"2022/06/18/CTFShow/CTFshow_PHP特性/index.html",revision:"8bc62c3f3357a1e3c1635d1ce96f74f6"},{url:"2022/09/16/CTFShow/CTFShow_命令执行/index.html",revision:"2f6987ac8a932f523f7a56c7fa7cfc03"},{url:"2022/09/17/Hexo部署出现错误 Error Spawn failed 解决方式/index.html",revision:"3fe9b02fea6dce1a6d6bc242a7755670"},{url:"2022/09/26/CNVD证书/index.html",revision:"5799d14de060fcab08a136e6eb831bb6"},{url:"2022/10/05/时光代理人/index.html",revision:"c8fcbc619898a4ff42aaabbe854989b8"},{url:"2022/12/30/CNVD事件到补天通杀赏金漏洞挖掘/index.html",revision:"5dc4fda5a649dca81a159ae762b19af3"},{url:"2023/05/29/EDUSRC证书/index.html",revision:"4ba2b5d6997b2a84604cdf66bb60378e"},{url:"2024/05/31/攻防演练/index.html",revision:"13d69c94e4d3a04d2b010dd7e818dabe"},{url:"404.html",revision:"5012b38f4b341e58db9388de271e9968"},{url:"anzhiyu/random.js",revision:"563d963fa6056d769993952a2f525a5f"},{url:"archives/2022/05/index.html",revision:"1b796aff3abb96d5d433f696186b51c9"},{url:"archives/2022/06/index.html",revision:"9eb6b105b332f0af70ee1cc88434b1da"},{url:"archives/2022/09/index.html",revision:"80dac8ceb57477425ea67b7b00fea9da"},{url:"archives/2022/10/index.html",revision:"4e342529dba2043db14aa8f1ffe6bdd0"},{url:"archives/2022/12/index.html",revision:"09d85ecff08bd6d7852f4dbd9ed63ebb"},{url:"archives/2022/index.html",revision:"df6d6c4841059bf5339dac4c80639cee"},{url:"archives/2023/05/index.html",revision:"5cdd25439f2e9e1db9481e61dfa7c69b"},{url:"archives/2023/index.html",revision:"4b65bc636e28e05abad73d8a54481f4c"},{url:"archives/2024/05/index.html",revision:"684ff0f665eaeaf1047738bde24205e3"},{url:"archives/2024/index.html",revision:"e76b8a56cffd5cb493c19813b811fe94"},{url:"archives/index.html",revision:"db85d56b732d8d20cd52416953e8a12b"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"bangumis/index.html",revision:"0ece2c2f1603f874e605b8353d561cad"},{url:"categories/CNVD/index.html",revision:"261961f380c5650eb050ad6eabffc441"},{url:"categories/CTF/index.html",revision:"f07552ae14525e64d9b6ab42785e99d7"},{url:"categories/EDUSRC/index.html",revision:"65b6ed3a630e4f60e97f8d9aef1806f8"},{url:"categories/Error-Spawn-failed/index.html",revision:"59c3c0da2729e7452a454518ee95e3ea"},{url:"categories/index.html",revision:"e5ced5a6bb92cb15c516bf5405ea8dbd"},{url:"categories/RCE/index.html",revision:"17ea610b40ed41ac60320bf5b7ba17ba"},{url:"categories/时光代理人/index.html",revision:"7fbb87e1d6f8bdfa12ccf9ec5669c3f8"},{url:"categories/补天/index.html",revision:"b80a864351f8109caed485d9cb0261c5"},{url:"categories/记录一下/index.html",revision:"a7d18655ddd1fab728ff46a0cb141562"},{url:"cinemas/index.html",revision:"b2919bc5b934acd45c6a7a479d440815"},{url:"comments/index.html",revision:"1df45d0b840755de1e19d35cb2ad0eca"},{url:"css/chocolate.css",revision:"09329341ac84356645cae97e3cf9c209"},{url:"css/custom.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/gray.css",revision:"22073e703b88f6db0ae84dfed1b1015d"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"8b3facadde0312d19a87b80eab64e938"},{url:"css/universe.css",revision:"5092b5f88b68c180fce400fe00a88475"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/Wave_effect.css",revision:"e0175eefae6bf0b00996abda29c156e6"},{url:"css/xinniandaojishi.css",revision:"88bdebe1b7172bab011916f8e803625d"},{url:"history/index.html",revision:"50532e0367399684e501ce38f8e17375"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"df8f61ed018583cdadfb8da9f0a731d3"},{url:"js/grayscale.js",revision:"c4b17493d112655d0c0b70b26ec5f0ff"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/newYear.js",revision:"beff617383aca7640d26a4ae7670ed91"},{url:"js/sakura.js",revision:"d847f268c480b5e878485fb8b1efe285"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/footer.js",revision:"5bfb3929f3f3a69fd745f9e2a4dcf3b6"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/search/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/title.js",revision:"578715738fc9495e61fe67467bf5324e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"353377fdaba2375cbb5e93ff97c583a1"},{url:"live2dw/assets/moc/tororo.2048/texture_00.png",revision:"9bd791736cfc91b62670dee5f7fbd45c"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"tags/CNVD/index.html",revision:"5786dfb9d0d63b7aa6639f5ff9bcd88f"},{url:"tags/CTFShow/index.html",revision:"79891c8e61c9211a766f5e3bec5d9fd4"},{url:"tags/EDUSRC/index.html",revision:"59ffedeee76b10a444406d08c81e3244"},{url:"tags/Hexo-Error-Spawn-failed/index.html",revision:"4986bb458401de9dcd874322f24ab13e"},{url:"tags/index.html",revision:"902742a6363c2df808420b18f0c1d6f3"},{url:"tags/RCE/index.html",revision:"ada2177a2e3913c477fcc486f0863825"},{url:"tags/时光代理人/index.html",revision:"d11cfc0a25a4509ce9d751bc64b8de0e"},{url:"tags/补天/index.html",revision:"f167fef9acc346cdc857b7ae802dc4af"},{url:"tags/记录一下/index.html",revision:"bf2993d2e345dd4990a4c40dc0e63de2"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
