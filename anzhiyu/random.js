var posts=["2022/12/30/CNVD事件到补天通杀赏金漏洞挖掘/","2022/09/26/CNVD证书/","2023/05/29/EDUSRC证书/","2022/09/17/Hexo部署出现错误 Error Spawn failed 解决方式/","2022/05/18/hello-world/","2022/10/05/时光代理人/","2022/09/16/CTFShow/CTFShow_命令执行/","2022/06/18/CTFShow/CTFshow_PHP特性/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};