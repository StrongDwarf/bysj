import Vue from 'vue';
import router from './router/index';
import store from './store/index';
import App from './app.vue';
import ElementUI from 'element-ui';
import './style.css';

Vue.use(ElementUI)

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => {
        return h(App)
    }
});