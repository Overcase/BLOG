module.exports = {
  title: 'Linhf',
  description: '永远不要忘记你的欲望和恐惧 ',
  theme: 'yubisaki',
  port: 8080,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  // 开启serverWorker
  serviceWorker: true,
  serviceWorker: {
     updatePopup: { 
        message: "有新的内容.", 
        buttonText: "刷新" 
     }
  },
  // 不支持ie  只支持主流浏览器
  evergreen: true,
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('markdown-it-task-lists')) // 一个 checkbox 的 TODO List 插件
        .use(require('markdown-it-imsize'), { autofill: true }) // 支持自定义 md 图片大小 ![](http://test.png =200x200)
    }
  },
  themeConfig: {
    tags: true,
    // 博客背景图片
    // background: `/bg.jpeg`,
    // github card
    github: 'Overcase',
    // 博客的 logo
    logo: '/logo.png',
    // 定制文章标题颜色
    accentColor: '#ac3e40',
    // 每页显示的文章数量
    per_page: 5,
    // 创建文章的时间格式, 不设则不显示 可选 [yyyy-MM-dd HH:mm:ss]
    date_format: 'yyyy-MM-dd',
    nav: [
      { text: 'Home', link: '/live/', root: true },
      { text: 'TAGS', link: '/tags/'},
      { text: 'GitHub', link: 'https://github.com/Overcase' },
      { text: '关于我', link: '/about/' },
    ]
  }
}