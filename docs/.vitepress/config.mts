import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/myBlog/',
  title: "前端技术",
  description: "一个有趣、多元、详细的前端博客",
  lastUpdated: false,
  themeConfig: {
    aside: true,
    docFooter: { prev: '上一页', next: '下一页' },
    outline: {
      label: "目录",
    },
    lastUpdated:{
      text: "最近更新时间",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-html5' }
    ],

    sidebar: [
      {
        text: '前端进阶',
        items: [
          { text: 'Html5', link: '/markdown-html5' },
          { text: 'Css3', link: '/markdown-Css3' },
          { text: 'Javascript', link: '/markdown-Javascript' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ECO-M/myBlog/tree/master' }
    ]
  }
})
