if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const f=e=>s(e,c),n={module:{uri:c},exports:d,require:f};i[c]=Promise.all(a.map((e=>n[e]||f(e)))).then((e=>(r(...e),d)))}}define(["./workbox-0f20801a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/05/18/hello-world/index.html",revision:"f3b500575d7b4a9ed96daeca0bafea42"},{url:"2022/06/18/CTFShow/CTFshow_PHP特性/index.html",revision:"4af1c5546e812894b031565b8c6d9cde"},{url:"2022/09/16/CTFShow/CTFShow_命令执行/index.html",revision:"4dea30f025c3461a1f241b0827461273"},{url:"2022/09/17/Hexo部署出现错误 Error Spawn failed 解决方式/index.html",revision:"67a7465d3f91cb8e6f91908cef7911bc"},{url:"2022/09/26/CNVD证书/index.html",revision:"868c7d92aa26b5360d0644ee9ee81b59"},{url:"2022/10/05/时光代理人/index.html",revision:"d041b7505e08391b18cbef43b8bd57e9"},{url:"2022/12/30/CNVD事件到补天通杀赏金漏洞挖掘/index.html",revision:"326b1918c214a60e94a6619711bc6c9b"},{url:"2023/05/29/EDUSRC证书/index.html",revision:"47f85e4b38e315e6009c60bdea69eebd"},{url:"2024/05/31/攻防演练&SRC&众测&渗透测试/index.html",revision:"c41cdcd97b538cce4db4d0541e5efc92"},{url:"404.html",revision:"a0e117681391847473b902c4f94526e5"},{url:"anzhiyu/random.js",revision:"c5843a43a49f5d14a9cc0b0dffa8ad62"},{url:"archives/2022/05/index.html",revision:"394589c9336b9552e9c63f4c6d6d19f5"},{url:"archives/2022/06/index.html",revision:"55f2031d73bbb7669e268c6dfd5c12c3"},{url:"archives/2022/09/index.html",revision:"33250c9d13f66154a974631c35fa5e8d"},{url:"archives/2022/10/index.html",revision:"a4a7ddd1a95c642c2780dc407a3d7eb8"},{url:"archives/2022/12/index.html",revision:"1a126ebec124d3b3f096f0ba898ccad1"},{url:"archives/2022/index.html",revision:"f0a360bb2c42cd17318e7322c44f2372"},{url:"archives/2023/05/index.html",revision:"b9d4ecbd5e8ba83f39b7420944892620"},{url:"archives/2023/index.html",revision:"e21d0fe0348fd0a5da48ee7420b24ac6"},{url:"archives/2024/05/index.html",revision:"c5085ff848938367061a21bd7a63ddd2"},{url:"archives/2024/index.html",revision:"157d80d5e3bc91395bac573c2bceb99e"},{url:"archives/index.html",revision:"16c02fe7394086bccd2d54127334aeb9"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"bangumis/index.html",revision:"686d609a4b0c1a4dd1690c01d0bdbca1"},{url:"categories/CNVD/index.html",revision:"5b944073ab00ad821025f654da3b758b"},{url:"categories/CTF/index.html",revision:"18ed8f627504c35e6ab9f905afbbda74"},{url:"categories/EDUSRC/index.html",revision:"d77549647fe0b021055c78977476e34f"},{url:"categories/Error-Spawn-failed/index.html",revision:"f9b58fe99512765257667494b77fa6c0"},{url:"categories/index.html",revision:"59e3b3f135429444ee113f609494bb71"},{url:"categories/RCE/index.html",revision:"dd2c4ca57386b2241af2c73b18a829a4"},{url:"categories/时光代理人/index.html",revision:"6df1b66825d93852a8db87bddf0596fa"},{url:"categories/补天/index.html",revision:"cba554b1ad95dd4dea472f4704144537"},{url:"categories/记录一下/index.html",revision:"62bafe82b071dc5585a0d0dfa8bdc36c"},{url:"cinemas/index.html",revision:"e24d7b0b18355a4506d5fc924809a719"},{url:"comments/index.html",revision:"5dd9477f1ddfa74ced9c87fa709264c7"},{url:"css/chocolate.css",revision:"09329341ac84356645cae97e3cf9c209"},{url:"css/custom.css",revision:"72fd39234527f7ecda34a4871abdb918"},{url:"css/gray.css",revision:"22073e703b88f6db0ae84dfed1b1015d"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"ff9839fbbd58a42771c82f0af9136602"},{url:"css/lantern.css",revision:"90ab77f8bf916ccfb7196d6a42dd4474"},{url:"css/universe.css",revision:"5092b5f88b68c180fce400fe00a88475"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/Wave_effect.css",revision:"e0175eefae6bf0b00996abda29c156e6"},{url:"css/xinniandaojishi.css",revision:"88bdebe1b7172bab011916f8e803625d"},{url:"css/year.css",revision:"90a69929dcbada3053cbafa296549533"},{url:"fonts/demo_index.html",revision:"abf3fcd7e96b18198ad07e7bb29abc11"},{url:"fonts/demo.css",revision:"31103ad158e19b978f7e730ff5ac959b"},{url:"fonts/iconfont.css",revision:"de347c01e0b7a12ebd827f8bef32a426"},{url:"fonts/iconfont.js",revision:"2db7e703db2fa0f5ff70119cf3f15299"},{url:"fonts/iconfont.ttf",revision:"3bb2524f9a3b4b31bbbd88324041f7d6"},{url:"fonts/iconfont.woff",revision:"13675da3ffef0bc1e0149ea53cca8263"},{url:"fonts/iconfont.woff2",revision:"7d1f0e0ac499496b510ecffdfc3aa068"},{url:"history/index.html",revision:"4cf7d510d158cc1a360e11593ea62d7c"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"53faf19a4fd5cef4e3ea3f120c8021aa"},{url:"js/console.js",revision:"70558d58b191461a5fcd6903fac31145"},{url:"js/custom/fixed_card_widget.js",revision:"981efa8285101e453907de34ea442d41"},{url:"js/day.js",revision:"626fd918946456d7a1a78e92056eb9c2"},{url:"js/f12.js",revision:"b52c5afd4bbf6ec41a825e1166d6c677"},{url:"js/fps.js",revision:"ecff4173e7c691bcb146df75a20cd053"},{url:"js/grayscale.js",revision:"08c650aa0c14b4e98ae1afb92ec35bfd"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/newYear.js",revision:"beff617383aca7640d26a4ae7670ed91"},{url:"js/runtime.js",revision:"2473deee472fe82c2a98f1d20c9a565f"},{url:"js/sakura.js",revision:"26fd4b387214140529426ae427041f1f"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/footer.js",revision:"5bfb3929f3f3a69fd745f9e2a4dcf3b6"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/search/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/snow.js",revision:"1feb0ede15cf985304998339b97b8aeb"},{url:"js/sun_moon.js",revision:"0ae43533c5d331ded9db8bbc18e0b2bb"},{url:"js/title.js",revision:"578715738fc9495e61fe67467bf5324e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"a20394305434481b8168d09ba17e0322"},{url:"live2dw/assets/moc/tororo.2048/texture_00.png",revision:"9bd791736cfc91b62670dee5f7fbd45c"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"movies/index.html",revision:"af11a1518cabc44e01555691d8dc934e"},{url:"tags/CNVD/index.html",revision:"10e1d613fe4689aeccc7d697c4f76069"},{url:"tags/CTFShow/index.html",revision:"86b5c2135e4bfbe194e977c3d9e52554"},{url:"tags/EDUSRC/index.html",revision:"db31eb60b12d1581d9329b40aecd1bde"},{url:"tags/Hexo-Error-Spawn-failed/index.html",revision:"fb6d5d357a917d39e9f995d99cc15171"},{url:"tags/index.html",revision:"65c3e834aa45de67041a7e3a2163242f"},{url:"tags/RCE/index.html",revision:"5b3aa53ad75d87d9a62b4e3545cfd905"},{url:"tags/时光代理人/index.html",revision:"6731d6276f0fbefc5f35a17884241e7a"},{url:"tags/补天/index.html",revision:"c2d824c73d1861be6cd882323249b986"},{url:"tags/记录一下/index.html",revision:"2f9803b5b8cf8c37c849991af328f0ea"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
