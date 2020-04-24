/* eslint-disable */
import VueRouter from 'vue-router'
// import HelloWorld from "@/components/HelloWorld.vue";
// import Me from "@/components/Me.vue";
// 路由懒加载, 得结合 babel-plugin-syntax-dynamic-import 插件使用
const Index = () => import('@/views/index.vue')
const router = new VueRouter({
    mode: 'hash',
    routes: [
        { path: '/', redirect: { name: 'index' } },
        {
            path: '/index',
            name: 'index',
            component: Index,
        },
    ],
})

export default router
