// 主题配置
export const themeConfig = {
  // 站点信息
  siteMeta: {
    // 站点标题
    title: "RuoRuo",
    // 站点描述
    description: "若若的个人博客",
    // 站点logo
    logo: "https://blog.rz15.cn/wp-content/uploads/2024/12/cropped-cropped-srchttp___c-ssl.duitang.com_uploads_item_202005_03_20200503193405_QavAd.thumb_.1000_0.jpegreferhttp___c-ssl.duitang-1.webp",
    // 站点地址
    site: "https://ruo.ge",
    // 语言
    lang: "zh-CN",
    // 作者
    author: {
      name: "RuoRuo",
      cover: "https://blog.rz15.cn/wp-content/uploads/2024/12/cropped-cropped-srchttp___c-ssl.duitang.com_uploads_item_202005_03_20200503193405_QavAd.thumb_.1000_0.jpegreferhttp___c-ssl.duitang-1.webp",
      email: "haoruo.chen@qq.com",
      link: "https://ruo.ge",
    },
  },
  // 备案信息
  icp: "沪ICP备2024092430号-1",
  // 建站日期
  since: "2025-02-16",
  // 每页文章数据
  postSize: 8,
  // inject
  inject: {
    // 头部
    // https://vitepress.dev/zh/reference/site-config#head
    header: [
      // favicon
      ["link", { rel: "icon", href: "/favicon.ico" }],
      // RSS
      [
        "link",
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "RSS",
          href: "https://ruo.ge/rss.xml",
        },
      ],
      // 预载 CDN
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://s1.hdslb.com",
        },
      ],
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://mirrors.sustech.edu.cn",
        },
      ],
      // HarmonyOS font
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css",
        },
      ],
      // iconfont
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://www.rz15.cn/file/iconfont.css",
          // href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css",
        },
      ],
      // Embed code
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          crossorigin: "anonymous",
          href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
          rel: "stylesheet",
        },
      ],
      // 预载 DocSearch
      [
        "link",
        {
          href: "https://X5EBEZB53I-dsn.algolia.net",
          rel: "preconnect",
          crossorigin: "",
        },
      ],
    ],
  },
  // 导航栏菜单
  nav: [
    {
      text: "文库",
      items: [
        { text: "文章列表", link: "/pages/archives", icon: "article" },
        { text: "全部分类", link: "/pages/categories", icon: "folder" },
        { text: "全部标签", link: "/pages/tags", icon: "hashtag" },
      ],
    },
    {
      text: "专栏",
      items: [
        { text: "技术分享", link: "/pages/categories/技术分享", icon: "technical" },
        { text: "我的项目", link: "/pages/project", icon: "code" },
        { text: "效率工具", link: "/pages/tools", icon: "tools" },
      ],
    },
    {
      text: "友链",
      items: [
        { text: "友链鱼塘", link: "/pages/friends", icon: "fish" },
        { text: "友情链接", link: "/pages/link", icon: "people" },
      ],
    },
    {
      text: "我的",
      items: [
        { text: "畅所欲言", link: "/pages/message", icon: "chat" },
        { text: "致谢名单", link: "/pages/thanks", icon: "reward" },
        { text: "关于本站", link: "/pages/about", icon: "contacts" },
      ],
    },
  ],
  // 导航栏菜单 - 左侧
  navMore: [
    {
      name: "博客",
      list: [
        {
          icon: "https://blog.rz15.cn/wp-content/uploads/2024/12/cropped-cropped-srchttp___c-ssl.duitang.com_uploads_item_202005_03_20200503193405_QavAd.thumb_.1000_0.jpegreferhttp___c-ssl.duitang-1.webp",
          name: "主站",
          url: "/",
        },
        {
          icon: "https://blog.rz15.cn/wp-content/uploads/2024/12/cropped-cropped-srchttp___c-ssl.duitang.com_uploads_item_202005_03_20200503193405_QavAd.thumb_.1000_0.jpegreferhttp___c-ssl.duitang-1.webp",
          name: "WordPress站",
          url: "https://blog.rz15.cn/",
        },
      ],
    },
    {
      name: "服务",
      list: [
        {
          icon: "https://nav.imsyy.top/favicon.ico",
          name: "起始页",
          url: "https://nav.imsyy.top/",
        },
        {
          icon: "https://hot.imsyy.top/ico/favicon.ico",
          name: "今日热榜",
          url: "https://hot.imsyy.top/",
        },
      ],
    },
    {
      name: "项目",
      list: [
        {
          icon: "https://blog.rz15.cn/wp-content/uploads/2024/12/cropped-cropped-srchttp___c-ssl.duitang.com_uploads_item_202005_03_20200503193405_QavAd.thumb_.1000_0.jpegreferhttp___c-ssl.duitang-1.webp",
          name: "Curve",
          url: "https://github.com/790395245/790395245.github.io",
        },
      ],
    },
  ],
  // 封面配置
  cover: {
    // 是否开启双栏布局
    twoColumns: false,
    // 是否开启封面显示
    showCover: {
      // 是否开启封面显示 文章不设置cover封面会显示异常，可以设置下方默认封面
      enable: true,
      // 封面布局方式: left | right | both
      coverLayout: 'both',
      // 默认封面(随机展示)
      defaultCover: [
        'https://blog.rz15.cn/wp-content/uploads/2025/02/cropped-企业微信截图_17392409111989.png',
        'https://blog.rz15.cn/wp-content/uploads/2025/02/a9c73a4cfc3ed6f8365aad8bf3fc954-scaled.jpg',
        'https://blog.rz15.cn/wp-content/uploads/2025/02/5aac3f86fdfd5aa30189c1912ae9b89e.jpg'
      ]
    }
  },
  // 页脚信息
  footer: {
    // 社交链接（请确保为偶数个）
    social: [
      {
        icon: "email",
        link: "haoruo.chen@qq.com",
      },
      {
        icon: "github",
        link: "https://www.github.com/790395245/",
      },
      {
        icon: "icon_TikTok",
        link: "https://v.douyin.com/iPXNvQRn",
      },
      {
        icon: "qq",
        link: "https://res.abeim.cn/api/qq/?qq=790395245",
      },
    ],
    // sitemap
    sitemap: [
      {
        text: "博客",
        items: [
          { text: "近期文章", link: "/" },
          { text: "全部分类", link: "/pages/categories" },
          { text: "全部标签", link: "/pages/tags" },
          { text: "文章归档", link: "/pages/archives", newTab: true },
        ],
      },
      {
        text: "项目",
        items: [
          { text: "Blog", link: "https://github.com/790395245/790395245.github.io", newTab: true },
        ],
      },
      {
        text: "专栏",
        items: [
          { text: "技术分享", link: "/pages/categories/技术分享" },
          { text: "我的项目", link: "/pages/project" },
          { text: "效率工具", link: "/pages/tools" },
        ],
      },
      {
        text: "页面",
        items: [
          { text: "畅所欲言", link: "/pages/message" },
          { text: "关于本站", link: "/pages/about" },
          { text: "隐私政策", link: "/pages/privacy" },
          { text: "版权协议", link: "/pages/cc" },
        ],
      },
      {
        text: "服务",
        items: [
          { text: "一个导航", link: "https://www.rz15.cn/", newTab: true },
          { text: "站点订阅", link: "https://ruo.ge/rss.xml", newTab: true },
        ],
      },
    ],
  },
  // 评论
  comment: {
    enable: true,
    // 评论系统选择
    // artalk / twikoo
    type: "artalk",
    // artalk
    // https://artalk.js.org/
    artalk: {
      site: "ruo.ge",
      server: "https://minio-api.rz15.cn/",
    },
    // twikoo
    // https://twikoo.js.org/
    twikoo: {
      // 必填，若不想使用 CDN，可以使用 pnpm add twikoo 安装并引入
      js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/twikoo/1.6.39/twikoo.all.min.js",
      envId: "",
      // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
      region: "ap-shanghai",
      lang: "zh-CN",
    },
  },
  // 侧边栏
  aside: {
    // 站点简介
    hello: {
      enable: true,
      text: "上班摸鱼的时候，会来写一些东西，分享自己的生活和爱好。主要围绕<strong>IT技术</strong>、<strong>汽车</strong>、<strong>3D打印</strong>，以及一些有趣的事。",
    },
    // 目录
    toc: {
      enable: true,
    },
    // 标签
    tags: {
      enable: true,
    },
    // 倒计时
    countDown: {
      enable: true,
      // 倒计时日期
      data: {
        name: "生日",
        date: "2025-04-15",
      },
    },
    // 站点数据
    siteData: {
      enable: true,
    },
  },
  // 友链
  friends: {
    // 友链朋友圈
    circleOfFriends: "",
    // 动态友链
    dynamicLink: {
      server: "",
      app_token: "",
      table_id: "",
    },
  },
  // 音乐播放器
  // https://github.com/imsyy/Meting-API
  music: {
    enable: false,
    // url
    url: "https://api-meting.example.com",
    // id
    id: 9379831714,
    // netease / tencent / kugou
    server: "netease",
    // playlist / album / song
    type: "playlist",
  },
  // 搜索
  // https://www.algolia.com/
  search: {
    enable: true,
    appId: "TJ466X087L",
    apiKey: "ddb36c03f008bedad841a3572cfff0c9",
  },
  // 打赏
  rewardData: {
    enable: true,
    // 微信二维码
    wechat: "https://blog.rz15.cn/wp-content/uploads/2025/02/mm_facetoface_collect_qrcode_1739720350104.jpg",
    // 支付宝二维码
    alipay: "https://blog.rz15.cn/wp-content/uploads/2025/02/1739720378997.jpg",
  },
  // 图片灯箱
  fancybox: {
    enable: true,
    js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.umd.min.js",
    css: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.min.css",
  },
  // 外链中转
  jumpRedirect: {
    enable: true,
    // 排除类名
    exclude: [
      "cf-friends-link",
      "upyun",
      "icp",
      "author",
      "rss",
      "cc",
      "power",
      "social-link",
      "link-text",
      "travellings",
      "post-link",
      "report",
      "more-link",
      "skills-item",
      "right-menu-link",
      "link-card",
    ],
  },
  // 站点统计
  tongji: {
    "51la": "3LHtpG10Ld2VdocU",
  },
};
