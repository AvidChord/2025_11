var posts=["2024/09/01/hello-world/","2024/09/01/信息公开/技术手册/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };