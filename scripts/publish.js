/**
 *  @desc 静态资源push到gh-pages分支
 */
var ghpages = require('gh-pages')
ghpages.publish(
    './docs/.vuepress/dist/',
    {
        branch: 'gh-pages',
    },
    function (err) {
        console.log(err)
        console.log('docs同步完成!')
    }
)
