import index from '../../src/components/index'
// import directive from '../../src/directive/index';
import Demo from './demo.vue'
import DemoBlock from './demo-block.vue'
import '../../src/styles/index.scss'
import './index.css'
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData, // 站点元数据
}) => {
    Vue.component('demo', Demo)
    Vue.component('demo-block', DemoBlock)
    // ...做一些其他的应用级别的优化
    Vue.use(index)
    // Vue.use(directive);
}
