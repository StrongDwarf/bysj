<template>
  <div class="mine-body">
    <p><span class="mine-label">头像: </span><input type="file" placeholder="选择文件"/></p>
    <p><span class="mine-label">名称: </span><input type="text" placeholder="请输入新名称"/></p>
    <p><span class="mine-label">账号: </span><span class="mine-text">{{number}}(账号无法修改)</span></p>
    <p><span class="mine-label">密码: </span><input type="text" placeholder="请输入新密码"/></p>
    <el-button size="mini" type="danger" >确定</el-button>
    <el-button size="mini" >取消</el-button>
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