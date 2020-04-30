module.exports = {
    base: '/github-ui/',
    title: 'Github-UI',
    description: '一款简单丰富易用的vue前端组件',
    markdown: {
        lineNumbers: false,
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: '#',
        },
        extendMarkdown: (md) => {
            md.set({ breaks: true })
            md.use(require('markdown-it-container'), 'demo', {
                validate: function (params) {
                    return params.trim().match(/^demo\s*(.*)$/)
                },
                render: function (tokens, idx) {
                    try {
                        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
                        if (tokens[idx].nesting === 1) {
                            var description = m && m.length > 1 ? m[1] : ''
                            var content = tokens[idx + 1].content

                            return `<demo class="demo-box">
                                      <div class="source" slot="source">${content}</div>
                                      <div class="description">${description}</div>
                                      <div class="highlight" slot="highlight">\n`
                        }
                        return '</div></demo>\n'
                    } catch (err) {
                        console.log(err)
                    }
                },
            })
        },
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/zxpsuper/vui-vue' },
        ],
        sidebar: [
            {
                title: '文档',
                collapsable: false,
                children: ['/docs/install'],
            },
            {
                title: '组件',
                collapsable: false,
                children: ['/components/button', '/components/page'],
            },
        ],
    },
    less: {
        javascriptEnabled: true,
    },
}
