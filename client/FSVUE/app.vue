<template>
    <div>
        <router-view></router-view>
        <div class="foot-bar">
            <el-row>
                <el-col class="footer-bar-item" :span="5"><router-link to="/main">首页</router-link></el-col>
                <el-col class="footer-bar-item" :span="5"><router-link to="/find">发现</router-link></el-col>
                <el-col class="footer-bar-item" :span="4"><router-link to="/news">消息</router-link></el-col>
                <el-col class="footer-bar-item" :span="5"><router-link to="/order">订单</router-link></el-col>
                <el-col class="footer-bar-item" :span="5"><router-link to="/personal">个人中心</router-link></el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            cartList () {
            }
        }
    }
</script>
<style>
.foot-bar{
    position:absolute;
    bottom:0px;
    width:100%;
    border-top:1px solid rgba(0,0,0,0.1);
}
.footer-bar-item{
    display:inline-block;
    text-align:center;
}
</style>