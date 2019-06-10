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
       token:'',
       products:[],
       product:{},
       seller:{},
    },
    getters: {
        /**
         * 调用getters中的方法,this.$store.getters.brands;
         */
        
        token:state=>{
            const token = state.token
            return token
        },
        products:state => {
            const products = state.products
            return products
        },
        product:state => {
            const product = state.product
            return product
        },
        seller:state => {
            const seller = state.seller
            return seller
        }
    },
    mutations: {
        /**
         * 调用mutations中的方法,this.$store.commit('setTags',data);
         */
        setToken(state,token){
            state.token = token
        },
        setProducts(state,products){
            state.products = products
        },
        setProduct(state,product){
            state.product = product
        },
        setSeller(state,seller){
            state.seller = seller
        },
    },
    actions: {
        /**
         * 调用action中的方法, this.$store.dispatch('increment',data);
         */
        getToken(context,user,pass){
            Ajax.post(apiUrl.login,{user,pass},(res) => {
                context.commit('setToken',res.token);
            })
        },
        getProducts(context,token){
            Ajax.post(apiUrl.getProducts,{token},(res) => {
                context.commit('setProducts',res.products)
            })
        },
        getProduct(context,id){
            Ajax.post(apiUrl.getProduct,{id},(res) => {
                context.commit('setProduct',res.product)
            })
        },
        getSeller(context,token){
            Ajax.post(apiUrl.getSeller,{token},(res) => {
                context.commit('setSeller',res.seller)
            })
        }
    }
});

export default store
