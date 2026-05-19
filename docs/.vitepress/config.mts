import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "ourmc 服务器",
  description: "一个认真维护，原版就能玩的Minecraft服务器",

  sitemap: {
    hostname: 'https://our-mc.cn'
  },

  head: [
    [
      'script',
      {
        async: '',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5811273402921349',
        crossorigin: 'anonymous'
      }
    ]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/what' },
      { text: 'EULA', link: '/EULA' },
      { text: 'ourmc皮肤站', link: 'https://skin.our-mc.cn' }
    ],

    sidebar: {
      '/guide/': [
      {
        text: '简介',
        items: [
          { text: '什么是ourmc', link: '/guide/what' },
          { text: '快速加入', link: '/guide/join' },
        ]
      },
      {
        text: '了解更多',
        items: [
          { text: '运营团队', link: '/guide/players' },
          { text: '新手指南', link: '/guide/newbie' },
          { text: '封禁相关', link: '/guide/ban' }
        ]
      }
    ]
  },

  footer: {
      message: '本站文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0 (署名-非商业性使用-相同方式共享)</a> 许可协议。<br>
Powered by <a href="https://vitepress.dev/" target="_blank">VitePress</a> & Hosted on <a href="https://pages.github.com/" target="_blank">GitHub Pages</a><br>本站仓库地址：<a href="https://github.com/ourmc-Team/ourmc-docs" target="_blank">ourmc-Team/ourmc-docs</a>',
      copyright: 'Copyright © 2026 ourmc Team. All Rights Reserved.'
    },

    outline: {
      label: '在此页面上'
    },
    docFooter: {
      prev: false,
      next: false
    },
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    socialLinks: [
      { icon: 'qq', link: 'https://qm.qq.com/q/1aQna5t2CA' }
    ],

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '未找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    }
  }
})