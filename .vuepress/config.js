module.exports = {
  "title": "lushengtao",
  "description": "陆盛涛的个人空间",
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
    ],
    // 添加百度统计
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?ed408e57f8fef03022d7a497af6f4db3";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
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
    "logo": "/logo_.png",

    // 搜索相关配置
    "search": true,
    "searchMaxSuggestions": 10,

    "lastUpdated": "Last Updated",

    // 作者相关配置
    "author": "陆盛涛",
    "authorAvatar": "/avatar_.png",
    
    // "record": "xxxx",
    "startYear": "2021",

    // 配置评论 valine（这是内置的功能，需要配置）
    valineConfig: {
      appId: 'owKr5LXGbbcxFJt9k4yVtMw1-gzGzoHsz',// your appId
      appKey: 'U3VPqMwxqaCfEjULAWtOhcEf', // your appKey
      // 7sBXOHyj7kxMjOhLC6YKzXoM2gzaHWxnTQhjuvdkKHpi6yUM9B8D5khnXw2rDYpQ-cn-n1
    }
  },
  "markdown": {
    "lineNumbers": true
  },
  // 插件配置
  plugins:[
    // 看板娘插件
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        theme: [
          'miku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'
        ],
        clean: false,
        messages: { 
          welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。' 
        },
        messageStyle: { right: '68px', bottom: '290px' },
        width: 250,
        height: 320
      }
    ],
    // 音乐插件
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",{
        audios: [
          // 本地文件示例
          // {
          //   name: '장가갈 수 있을까',
          //   artist: '咖啡少年',
          //   url: '/bgm/1.mp3',
          //   cover: '/bgm/1.jpg'
          // },
          // 网络文件示例
          {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ]  
      }
    ]
  ]
}