<template>
  <div style="width:600px;">
    <el-container>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>添加新商品</span>
        </div>
        <div>
          <form
            action="http://127.0.0.1:8083/PC/StorageProduct/addProduct"
            method="post"
            enctype="multipart/form-data"
          >
          <p class="input-item">
            <span>上传图片</span>
            <input type="file" name="image" size="50">
            <br>
          </p>
          <p class="input-item">
            <span>商品名称</span>
            <input type="text" name="title" placeholder="请输入商品名">
            <br>
          </p>
          <p class="input-item">
            <span>仓库地址</span>
            <input type="text" name="location" placeholder="请输入仓库地址">
            <br>
          </p>
          <p class="input-item">
            <span>数量</span>
            <input type="text" name="count" placeholder="请输入商品数量">
            <br>
          </p>
            <input type="submit" value="确认添加商品">
          </form>
        </div>
      </el-card>
    </el-container>
  </div>
</template>
<script>
import Ajax from "../store/ajax";
import apiUrl from "../store/apiUrl";
export default {
  data() {
    return {
      fileList: [],
      form: {
        name: "",
        buyPrice: "",
        sellPrice: "",
        address: "",
        isBaoyou: "",
        intro: "",
        pic:
          "http://img.alicdn.com/bao/uploaded/i1/2155671288/TB2nN6wn9MmBKNjSZTEXXasKpXa_!!2155671288-0-item_pic.jpg"
      },
      file: "",
      fileName: ""
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    addProduct() {
      Ajax.post(
        apiUrl.addProduct,
        {
          token: this.$store.getters.token,
          data: this.form
        },
        data => {
          if (data.success) {
            alert("成功往商品列表中添加一件商品");
          } else {
            alert(data.message);
          }
        }
      );
    },
    cancel() {},
    changeImg($event) {
      this.file = $event.target.files.item(0);
      // 如果不选择图片
      if (this.file === null) {
        return;
      }
      this.fileName = this.file.name;
    }
  }
};
</script>
<style>
.input-item{
  margin: 10px 0;
  padding: 5px;
  border-bottom: 1px solid #999;
}
</style>
