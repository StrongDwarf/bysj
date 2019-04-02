<template>
    <div>
        <div v-for="product in products">
            商品名字:{{product.name}}
            商品价格:{{product.price}}
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
            }
        },
        components:{

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