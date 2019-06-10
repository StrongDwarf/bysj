<template>
  <div>
    <el-table :data="products" style="width: 100%">
      <el-table-column label="商品图片" width="180">
        <template slot-scope="scope">
          <img v-bind:src="scope.row.pic" alt style="width:100%;height:100%;">
        </template>
      </el-table-column>
      <el-table-column label="商品名" width="180">
        <template slot-scope="scope">
          <p>{{scope.row.name}}</p>
        </template>
      </el-table-column>
      <el-table-column label="批发价格" width="180">
        <template slot-scope="scope">
          <p>{{scope.row.buyPrice}}</p>
        </template>
      </el-table-column>
      <el-table-column label="零售价格" width="180">
        <template slot-scope="scope">
          <p>{{scope.row.sellPrice}}</p>
        </template>
      </el-table-column>
      <el-table-column label="发货地址" width="180">
        <template slot-scope="scope">
          <p>{{scope.row.address}}</p>
        </template>
      </el-table-column>
      <el-table-column label="是否包邮" width="180">
        <template slot-scope="scope">
          <p>包邮</p>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="商品图片">
          <el-input v-model="form.pic" placeholder="商品图片无法更改" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品进价">
          <el-input v-model="form.buyPrice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品售价">
          <el-input v-model="form.sellPrice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品发货地址">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否包邮">
          <el-select v-model="form.isBaoyou" placeholder="请选择是否包邮">
            <el-option label="包邮" value="true"></el-option>
            <el-option label="不包邮" value="false"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateProduct">确 定</el-button>
      </div>
    </el-dialog>

    <!--
    <div>
        <p style="display:block;border:1px solid red;borer-radius:20px;background-color:blue;padding:20px 0; text-align:center;font-size:20px;" 
            v-on:click="addProduct">添加新商品</p>
        <div class="product-container">
            <div v-for="item in products" class="product-item">
                <div class="product-img" >
                    <img v-bind:src="item.pic" alt="" style="width:100%;height:100%;" />
                </div>
                <div class="product-middle">
                    <p class="product-name">{{item.name}}</p>
                    <p class="product-buyprice">批发价格 <span style="color:red">{{item.buyPrice}}</span></p>
                    <p class="product-sellprice">建议售价 <span style="color:red">{{item.sellPrice}}</span></p>
                    <p class="product-address">发货地 <span style="color:blue">{{item.address}}</span></p>
                </div>
                <div class="product-right">
                    <p class="product-right-update">修改</p>
                    <p class="product-right-delete">删除</p>
                </div>
            </div>
        </div>
    </div>
    -->
  </div>
</template>
<script>
import Ajax from "../store/ajax";
import apiUrl from "../store/apiUrl";
export default {
  data() {
    return {
      products: [
        {
          name: "11",
          buyPrice: "22",
          intro: "55",
          isBaoyou: "包邮",
          name: "11",
          pic:
            "http://img.alicdn.com/bao/uploaded/i1/2155671288/TB2nN6wn9MmBKNjSZTEXXasKpXa_!!2155671288-0-item_pic.jpg",
          sellPrice: "33",
          address: "44"
        },
        {
          name: "11",
          address: "44",
          buyPrice: "22",
          intro: "55",
          isBaoyou: "包邮",
          name: "11",
          pic:
            "http://img.alicdn.com/bao/uploaded/i1/2155671288/TB2nN6wn9MmBKNjSZTEXXasKpXa_!!2155671288-0-item_pic.jpg",
          sellPrice: "33"
        }
      ],
      dialogFormVisible: false,
      form: {
        id: "",
        pic: "",
        name: "",
        buyPrice: "",
        sellPrice: "",
        isBaoyou: "",
        address: ""
      }
    };
  },
  methods: {
    getProducts() {
      let that = this;
      Ajax.post(
        apiUrl.getProducts,
        { token: this.$store.getters.token },
        data => {
          if (data.success) {
            that.products = data.data.products;
          } else {
            alert(data.message);
          }
        }
      );
    },
    /**获取假数据 */
    getProductsA() {
      var that = this;
      Ajax.post(apiUrl.getOrders, {}, function(data) {
        if (data.success) {
          var orders = data.data.orders;
          console.log(orders);
          var arr = [];
          var productIds = {};
          for (let i = 0, len = orders.length; i < len; i++) {
            if (!productIds[orders[i].productId]) {
              arr.push(orders[i]);
              productIds[orders[i].productId] = true;
            }
          }
          console.log(arr);
          that.products = arr;
        } else {
          alert("网络错误");
        }
      });
    },
    /** 获取真数据 */
    getProductsB() {
      var that = this;
      Ajax.post(apiUrl.getSellProducts, {}, function(data) {
        if (data.success) {
          var orders = data.data.sellProducts.reverse();
          console.log(orders);
          var arr = [];
          for (let i = 0, len = orders.length; i < len; i++) {
            arr.push(orders[i]);
          }
          that.products = arr;
        } else {
          alert("网络错误");
        }
      });
    },
    updateProduct() {
      var that = this;
      var sendObj = {};
      for (var name in that.form) {
        sendObj[name] = that.form[name];
      }
      Ajax.post(apiUrl.updateSellProduct, sendObj, function(data) {
        if (data.success) {
          alert("修改成功");
          that.dialogFormVisible = false;
          that.getProductsB();
        } else {
          alert("网络错误");
        }
      });
    },
    addProduct() {
      console.log("点击了添加新商品");
      this.$router.push("addProduct");
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.form.id = row._id;
      this.form.pic = row.pic;
      this.form.address = row.address;
      this.form.buyPrice = row.buyPrice;
      this.form.sellPrice = row.sellPrice;
      this.form.isBaoyou = row.isBaoyou;
      this.form.name = row.name;
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      var that = this;
      console.log(index, row);
      Ajax.post(apiUrl.removeSellProduct, { id: row._id }, function(data) {
        if (data.success) {
          alert("删除商品成功");
          that.getProductsB();
        } else {
          alert("网络错误");
        }
      });
    }
  },
  mounted() {
    this.getProductsB();
  }
};
</script>
<style>
.product-container {
}
.product-item {
  border: 1px solid red;
  float: left;
}
.product-img {
  float: left;
  display: inline-block;
  width: 200px;
  height: 200px;
}
.product-middle {
  float: left;
  top: 0px;
  display: inline-block;
  width: 200px;
  height: 160px;
  margin: 20px 0;
  border: 1px solid red;
}
.product-name {
  display: block;
  height: 80px;
  border: 1px solid red;
}
.product-buyprice {
  display: block;
  border: 1px solid red;
}
.product-sellprice {
  display: block;
  border: 1px solid red;
}
.product-right {
  float: left;
  display: inline-block;
  width: 140px;
  height: 160px;
  margin: 20px 0;
  border: 1px solid red;
}
.product-right-update {
  display: block;
  border: 1px solid red;
  padding: 20px 0;
  margin: 10px 0;
  text-align: center;
  border-radius: 20px;
}
.product-right-delete {
  display: block;
  border: 1px solid red;
  padding: 20px 0;
  margin: 10px 0;
  text-align: center;
  border-radius: 20px;
}
</style>


