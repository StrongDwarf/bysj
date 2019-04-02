<template>
    <div>
        <search></search>
        <banner></banner>
        <productList></productList>
    <div>
        <button onclick="startRecognize()">开始识别</button><br />
        <button onclick="showTetx()">识别内容</button>
    </div>
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
            window.text = '1111'
		
            window.startRecognize = function() {
                alert('1')
                var options = {};
                options.engine = 'iFly';
                text = "";
                alert("开始语音识别：");
                plus.speech.startRecognize(options, function(s) {
                    text += s;
                    
                }, function(e) {
                    alert("语音识别失败：" + e.message);
                });
            }
            window.showTetx = function(){
                alert(text)
            }
        }
    }
</script>
<style>

</style>