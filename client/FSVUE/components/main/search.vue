<template>
    <div>
        <el-row>
            <el-col :span="4">扫一扫</el-col>
            <el-col :span="16">搜索框</el-col>
            <el-col :span="4">说一说</el-col>
        </el-row>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                searchStr:""
            }
        },
        components:{

        },
        watch:{
            searchStr(newVal,oldVal){
                if(newVal !== oldVal){
                    this.$store.dispatch('searchProduct',newVal)
                }
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