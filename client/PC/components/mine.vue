<template>
  <div class="mine-body">
    <p><span class="mine-label">头像: </span><span class="mine-text">{{headPic}}</span></p>
    <p><span class="mine-label">名称: </span><span class="mine-text">{{name}}</span></p>
    <p><span class="mine-label">账号: </span><span class="mine-text">{{number}}</span></p>
    <p><span class="mine-label">密码: </span><span class="mine-text">{{pass}}</span></p>
  </div>
</template>
<script>
import Ajax from "../store/ajax";
import apiUrl from "../store/apiUrl";
export default {
  data() {
    return {
      headPic:'暂无',
      name:'小白菜旗舰店',
      number:'18861855098',
      pass:'xiaobaicai'
    };
  },
  methods: {
   
  },
  computed: {
    
  },
  mounted() {
  }
};
</script>
<style>
.mine-body{
    margin:20px 20px;
}
.mine-body p{
    border:1px solid #999;
}
.mine-label{
    font-size:24px;
    color:black;
}
</style>