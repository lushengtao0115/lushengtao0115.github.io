module.exports = {
  "title": "lushengtao",
  "description": "陆的个人空间",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {

    // 导航栏
    "nav":require("./nav.js"),

    // 侧边栏
    "sidebar": require("./sidebar.js"),

    // 配置类型为博客
    "type": "blog",
    // 博客配置
    "blogConfig": {
      // 分类
      "category": {
        "location": 2,
        "text": "分类"
      },
      // 标签
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },

    // 友链
    "friendLink": [
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],

    // 左上角logo
    "logo": "/logo.png",

    // 搜索相关配置
    "search": true,
    "searchMaxSuggestions": 10,

    "lastUpdated": "Last Updated",

    // 作者相关配置
    "author": "陆盛涛",
    "authorAvatar": "/avatar.png",
    
    // "record": "xxxx",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}