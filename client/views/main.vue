<template>
    <div>
        <search></search>
        <banner></banner>
        <productList></productList>
    </div>
</template>
<script>
    import search from '../components/main/search.vue'
    import banner from '../components/main/banner.vue'
    import productList from '../components/main/productList.vue'
    export default{
        data(){
            return{
                
            }
        },
        components:{
            search,
            banner,
            productList
        },
        computed:{
            products(){
                return this.$store.getters.products
            }
        },
        methods:{
            
        },
        mounted(){
        }
    }
</script>
<style>

</style>