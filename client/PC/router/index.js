import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Routers = [
    {
        path:'/index',
        meta:{
            title:'freeSell管理平台'
        },
        component:(resolve) => require(['../views/index.vue'],resolve)
    },
    {
        path:'/main',
        meta:{
            title:'freeSell管理平台'
        },
        component:(resolve) => require(['../views/main.vue'],resolve)
    },
    {
        path:'/login',
        meta:{
            title:'freeSell登陆'
        },
        component:(resolve) => require(['../views/login.vue'],resolve)
    },
    {
        path:'/revg',
        meta:{
            title:'freeSell注册'
        },
        component:(resolve) => require(['../views/revg.vue'],resolve)
    },
    {
        path:'/addProduct',
        meta:{
            title:'添加商品'
        },
        component:(resolve) => require(['../views/addProduct.vue'],resolve)
    },
    {
        path:'/showProducts',
        meta:{
            title:'查看商品列表'
        },
        component:(resolve) => require(['../views/showProducts.vue'],resolve)
    },
    {
        path: '*',
        redirect: '/index'
    }
];

// 路由配置
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

export default router;