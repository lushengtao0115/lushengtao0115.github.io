module.exports=[
    {
      "text": "主页",
      "link": "/",
      "icon": "reco-home"
    },
    {
      "text": "时间轴",
      "link": "/timeline/",
      "icon": "reco-date"
    },
    {
      "text": "笔记",
      "icon": "reco-message",
      "items": [
        {
          "text": "前端",
          "icon": "reco-message",
          items:[
            {
              "text":"css",
              "link":"/blogs/frontend/css/"
            },
            {
              "text":"js",
              "link":"/blogs/frontend/js/" 
            }
          ]
          // "link": "/blogs/frontend/"
        },
        // {
        //   "text": "后端",
        //   items:[
        //     {
        //       "text":"java",
        //       "link":"/blogs/category2/2016/"
        //     },
        //     {
        //       "text":"spring",
        //       "link":"/blogs/category2/2017/"
        //     }
        //   ]
        //   // "link": "/blogs/category2/" 
        // }
      ]
    },
    {
        "text": "关于我",
        "icon": "reco-blog",
        "items": [
          // 个人简介
          {
            "text": "个人简介",
            "icon": "reco-message",
            "link": "/mylife/"
            // "link": "/blogs/frontend/"
          },
          // 随笔
          {
            "text": "随笔",
            "icon": "reco-message",
            "link": "/mylife/essay/"
            // "link": "/blogs/frontend/"
          },
          // 影评
          {
            "text": "影评",
            "icon": "reco-message",
            "link": "/mylife/moviereview/"
            // "link": "/blogs/frontend/"
          },
          // 书评
          {
            "text": "书评",
            "icon": "reco-message",
            "link": "/mylife/bookreview/"
            // "link": "/blogs/frontend/"
          },
        ]
    },
    {
      "text": "链接",
      "icon": "reco-message",
      "items": [
        // github
        {
          "text": "GitHub",
          "link": "https://github.com/lushengtao0115",
          "icon": "reco-github"
        },
        // b站
        {
            "text": "bilibili",
            "link": "https://space.bilibili.com/76512169",
            "icon": "reco-bilibili"
          } 
      ]
    },
  ]