import Vue from 'vue'
import Vuex from 'vuex'
import Ajax from './ajax.js'
import apiUrl from './apiUrl.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 调用state中的数据:this.$store.state.article
         */
        products:[],        //商品列表
    },
    getters: {
        /**
         * 调用getters中的方法,this.$store.getters.brands;
         */
        products:state => {
            const products = state.products;
            return products;
        }
    },
    mutations: {
        /**
         * 调用mutations中的方法,this.$store.commit('setTags',data);
         */
        setProducts(state,data){
            state.products = data
        },
    },
    actions: {
        /**
         * 调用action中的方法, this.$store.dispatch('increment',data);
         */
        searchProduct(context,searchStr){
            Ajax.post(apiUrl.searchProduct,{searchStr},(res) => {
                context.commit('setProducts',res.products)
            })
        }
    }
});

export default store
