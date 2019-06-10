<template>
  <div>
    <el-table :data="products" style="width: 100%">
      <el-table-column label="商品ID" width="120">
        <template slot-scope="scope">
          <p>{{scope.row._id}}</p>
        </template>
      </el-table-column>
      <el-table-column label="商品图片" width="120">
        <template slot-scope="scope">
          <img v-bind:src="scope.row.productImg" alt style="width:100%;height:100%;">
        </template>
      </el-table-column>
      <el-table-column label="商品名" width="120">
        <template slot-scope="scope">
          <p>{{scope.row.title}}</p>
        </template>
      </el-table-column>
      <el-table-column label="仓库地址" width="120">
        <template slot-scope="scope">
          <p>{{scope.row.location}}</p>
        </template>
      </el-table-column>
      <el-table-column label="数量" width="120">
        <template slot-scope="scope">
          <p>{{scope.row.count}}</p>
        </template>
      </el-table-column>
      <el-table-column label="入库时间" width="120">
        <template slot-scope="scope">
          <p>{{scope.row.startTime}}</p>
        </template>
      </el-table-column>
      <el-table-column label="更新时间" width="120">
        <template slot-scope="scope">
          <p>{{scope.row.updateTime}}</p>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            v-if="!scope.row.isfahuo"
            size="mini"
            type="danger"
            @click="remove(scope.$index, scope.row)"
          >删除商品</el-button>
          <el-button size="mini" @click="editOrder(scope.$index, scope.row)">修改库存</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="商品id">
          <el-input v-model="form._id" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品图片">
          <el-input v-model="form.productImg" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品名">
          <el-input v-model="form.title"  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="仓库地址">
          <el-input v-model="form.location"  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="form.count" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="入库时间" >
          <el-input v-model="form.startTime" disabled autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateOrder">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Ajax from "../store/ajax";
import apiUrl from "../store/apiUrl";
export default {
  data() {
    return {
      products: [],
      dialogFormVisible: false,
      form: {}
    };
  },
  methods: {
    editOrder(index, row) {
      this.form = row;
      this.dialogFormVisible = true;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    remove(index,row) {
      var that = this;
      Ajax.post(apiUrl.removeStorgaeProduct, {"_id":row._id}, function(data) {
        if (data.success) {
            alert('成功删除库存中的商品')
            that.getProducts();
        } else {
          alert("网络错误");
        }
      });
    },
    getProducts() {
      var that = this;
      Ajax.post(apiUrl.getStorgaeProducts, {}, function(data) {
        if (data.success) {
          that.products = data.data.products.reverse();
        } else {
          alert("网络错误");
        }
      });
    },
    updateOrder() {
      var that = this;
      var sendObj = that.form;
      Ajax.post(apiUrl.updateStorgaeProduct, sendObj, function(data) {
        if (data.success) {
          alert("订单修改成功");
          that.dialogFormVisible = false;
          that.getOrders();
        } else {
          alert("网络错误");
        }
      });
    }
  },
  computed: {},
  mounted() {
    this.getProducts();
  }
};
</script>
<style>
</style>