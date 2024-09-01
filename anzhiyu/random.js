var posts=["2024/09/01/hello-world/","2024/09/01/信息公开/技术手册/","2024/09/01/信息公开/文档规范/","2024/09/01/信息公开/班级电子课表部署通知/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };