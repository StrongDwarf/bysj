import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Routers = [
    {
        path:'/index',
        meta:{
            title:'freeSell'
        },
        component:(resolve) => require(['../views/main.vue'],resolve)
    },{
        path:'/main',
        meta:{
            title:'freeSell'
        },
        component:(resolve) => require(['../views/main.vue'],resolve)
    },
    {
        path:'/find',
        meta:{
            title:'freeSell'
        },
        component:(resolve) => require(['../views/find.vue'],resolve)
    },{
        path:'/news',
        meta:{
            title:'freeSell'
        },
        component:(resolve) => require(['../views/news.vue'],resolve)
    },
    {
        path:'/order',
        meta:{
            title:'freeSell'
        },
        component:(resolve) => require(['../views/order.vue'],resolve)
    },
    {
        path:'/personal',
        meta:{
            title:'freeSell'
        },
        component:(resolve) => require(['../views/personal.vue'],resolve)
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