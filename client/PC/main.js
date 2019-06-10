import Vue from 'vue';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index';
import store from './store/index';
import App from './app.vue';
import './style.css';

Vue.use(Element, { size: 'small' })

var app = new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => {
        return h(App)
    }
});