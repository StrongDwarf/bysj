<template>
<el-container style="width:100%;height:100%;">
    <!--
    <el-header>
        <p style="width:100%;padding:20px 0;font-size:20px;text-align:center;">freeSell商家管理平台</p>
    </el-header>

    <el-main>
        <div v-show="showView==1">
            <product></product>
        </div>
        <div v-show="showView==2">
            <order></order>
        </div>
        <div v-show="showView==3">
            <news></news>
        </div>
        <div v-show="showView==4">
            <mine></mine>
        </div>
    </el-main>
    <el-footer>
        <div class="menu-container">
            <div class="menu-item" v-on:click="showView=1">
                <p>商品</p>
            </div>
            <div class="menu-item" v-on:click="showView=2">
                <p>订单</p>
            </div>
            <div class="menu-item" v-on:click="showView=3">
                <p>会话
                </p>
            </div>
            <div class="menu-item" v-on:click="showView=4">
                <p>我的</p>
            </div>
        </div>
    </el-footer>
    -->
    <el-header>
    <el-menu
    style="width:100vw;padding-left:100px;margin:0 auto;"
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-submenu index="1">
    <template slot="title">商品管理</template>
    <el-menu-item index="1-1">商品列表</el-menu-item>
    <el-menu-item index="1-2">上架新商品</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">订单管理</template>
    <el-menu-item index="2-1">订单列表</el-menu-item>
    <el-menu-item index="2-2">待发货订单</el-menu-item>
    <el-menu-item index="2-3">已发货订单</el-menu-item>
  </el-submenu>
  <el-submenu index="3">
    <template slot="title">库存管理</template>
    <el-menu-item index="3-1">新增库存商品</el-menu-item>
    <el-menu-item index="3-2">查看库存列表</el-menu-item>
  </el-submenu>
 <el-submenu index="4">
    <template slot="title">个人信息</template>
    <el-menu-item index="4-1">查看我的信息</el-menu-item>
    <el-menu-item index="4-2">修改个人信息</el-menu-item>
  </el-submenu>
  <span style="float:right;color:#fff;line-height:60px;padding-right:160px;">freeSell商家管理平台</span>
</el-menu>
</el-header>
<el-main>
 <div v-if="newIndex=='1-1'">
            <product></product>
        </div>
    <div v-if="newIndex=='1-2'" >
        <addProduct></addProduct>
    </div>
        <div v-if="newIndex=='2-1'">
            <order></order>
        </div>
        <div v-if="newIndex=='2-2'">
            <fahuoOrder></fahuoOrder>
        </div>
        <div v-if="newIndex=='2-3'">
            <fahuoedOrder></fahuoedOrder>
        </div>
        <div v-if="newIndex=='3'">
            <news></news>
        </div>
        <div v-if="newIndex=='3-1'">
            <addStorageProduct></addStorageProduct>
        </div>
        <div v-if="newIndex=='3-2'">
            <storageProductList></storageProductList>
        </div>
        <div v-if="newIndex=='4-1'">
            <mine></mine>
        </div>
        <div v-if="newIndex=='4-2'">
            <updateMine></updateMine>
        </div>
</el-main>
</el-container>
</template>
<script>
import Ajax from '../store/ajax'
import apiUrl from '../store/apiUrl'
import product from '../components/product.vue'
import order from '../components/order.vue'
import news from '../components/news.vue'
import mine from '../components/mine.vue'
import updateMine from '../components/updateMine.vue'
import addProduct from '../views/addProduct.vue'
import fahuoedOrder from '../components/fahuoedOrder.vue'
import fahuoOrder from '../components/fahuoOrder.vue'
import addStorageProduct from '../components/addStorageProduct.vue'
import storageProductList from '../components/storageProductList.vue'
  export default {
      components:{
        product,
        order,
        news,
        mine,
        addProduct,
        fahuoedOrder,
        fahuoOrder,
        updateMine,
        addStorageProduct,
        storageProductList
    },
    data() {
      return {
        activeIndex: '1',
        newIndex:'1-1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
          this.newIndex = key;
          console.log(this.activeIndex);
        console.log(key, keyPath);
      }
    }
  }
</script>

<!--
<script>
import Ajax from '../store/ajax'
import apiUrl from '../store/apiUrl'
import product from '../components/product.vue'
import order from '../components/order.vue'
import news from '../components/news.vue'
import mine from '../components/mine.vue'
export default{
    components:{
        product,
        order,
        news,
        mine
    },
    data(){
        return{
            showView:1,
        }
    },
    methods: {
        
    },
}
</script>
-->
<style>
.menu-container{
    display: flex;

}
.menu-item{
    flex-grow: 1;
    border:1px solid red;
    height:100px;
    font-size:40px;
    text-align: center;
}
</style>
