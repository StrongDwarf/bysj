<template>
  <div>
    <el-table :data="orders" style="width: 100%">
      <el-table-column label="购买时间" width="120">
        <template slot-scope="scope">
          <p>{{scope.row.buyTime}}</p>
        </template>
      </el-table-column>
      <el-table-column label="订单编号" width="80">
        <template slot-scope="scope">
          <p>{{scope.row._id}}</p>
        </template>
      </el-table-column>
      <el-table-column label="商品图片" width="180">
        <template slot-scope="scope">
          <img v-bind:src="scope.row.productImg" alt style="width:100%;height:100%;">
        </template>
      </el-table-column>
      <el-table-column label="商品名" width="180">
        <template slot-scope="scope">
          <p>{{scope.row.title}}</p>
        </template>
      </el-table-column>
      <el-table-column label="价格" width="60">
        <template slot-scope="scope">
          <p>{{scope.row.price}}</p>
        </template>
      </el-table-column>
      <el-table-column label="数量" width="60">
        <template slot-scope="scope">
          <p>{{scope.row.buyCount}}</p>
        </template>
      </el-table-column>
      <el-table-column label="发货地址" width="80">
        <template slot-scope="scope">
          <p>{{scope.row.location}}</p>
        </template>
      </el-table-column>
      <el-table-column label="买家姓名" width="80">
        <template slot-scope="scope">
          <p>{{scope.row.buyer}}</p>
        </template>
      </el-table-column>
      <el-table-column label="买家手机号" width="100">
        <template slot-scope="scope">
          <p>{{scope.row.phone}}</p>
        </template>
      </el-table-column>
      <el-table-column label="收货地址" width="120">
        <template slot-scope="scope">
          <p>{{scope.row.address}}</p>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button v-if="!scope.row.isfahuo" size="mini" type="danger" @click="fahuo(scope.$index, scope.row)">确认发货</el-button>
          <el-button size="mini" @click="editOrder(scope.$index, scope.row)">修改订单</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="购买时间">
          <el-input v-model="form.buyTime" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="订单编号">
          <el-input v-model="form._id" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品图片">
          <el-input v-model="form.productImg" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品名">
          <el-input v-model="form.title" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="form.price" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品数量">
          <el-input v-model="form.buyCount" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="发货地址">
          <el-input v-model="form.location" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="买家姓名">
          <el-input v-model="form.buyer" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="买家手机号">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="收货地址">
          <el-input v-model="form.address" autocomplete="off"></el-input>
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
      orders: [
        {
          _id: "123434",
          shopName: "小米旗舰店",
          shopIcon: "",
          shopId: "12345678",
          productId: "1234567",
          productImg:
            "http://img.alicdn.com/bao/uploaded/i1/2155671288/TB2nN6wn9MmBKNjSZTEXXasKpXa_!!2155671288-0-item_pic.jpg",
          title: "鞋子",
          location: "广东广州",
          price: "123",
          count: "2",
          buyer: "朱泽聪",
          phone: "18861855098",
          address: "江苏省无锡市滨湖区江南大学北区",
          buyCount: "2",
          buyTime: "20190507 19:04:03",
          isfahuo: false
        },
        {
          _id: "123434",
          shopName: "小米旗舰店",
          shopIcon: "",
          shopId: "12345678",
          productId: "1234567",
          productImg:
            "http://img.alicdn.com/bao/uploaded/i1/2155671288/TB2nN6wn9MmBKNjSZTEXXasKpXa_!!2155671288-0-item_pic.jpg",
          title: "鞋子",
          location: "广东广州",
          price: "123",
          count: "2",
          buyer: "朱泽聪",
          phone: "18861855098",
          address: "江苏省无锡市滨湖区江南大学北区",
          buyCount: "2",
          buyTime: "20190507 19:04:03",
          isfahuo: false
        },
        {
          _id: "123434",
          shopName: "小米旗舰店",
          shopIcon: "",
          shopId: "12345678",
          productId: "1234567",
          productImg:
            "http://img.alicdn.com/bao/uploaded/i1/2155671288/TB2nN6wn9MmBKNjSZTEXXasKpXa_!!2155671288-0-item_pic.jpg",
          title: "鞋子",
          location: "广东广州",
          price: "123",
          count: "2",
          buyer: "朱泽聪",
          phone: "18861855098",
          address: "江苏省无锡市滨湖区江南大学北区",
          buyCount: "2",
          buyTime: "20190507 19:04:03",
          isfahuo: true
        }
      ],
      dialogFormVisible: false,
      form: {
        _id: "",
        address: "",
        buyCount: "",
        buyTime: "",
        buyer: "",
        count: "",
        isfahuo: false,
        location: "",
        phone: "",
        price: "",
        productId: "",
        productImg: "",
        shopIcon: "",
        shopId: "",
        shopName: "",
        title: ""
      }
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
    getOrders() {
      var that = this;
      Ajax.post(apiUrl.getOrders, {}, function(data) {
        if (data.success) {
          that.orders = data.data.orders.reverse();
        } else {
          alert("网络错误");
        }
      });
    },
    updateOrder() {
      var that = this;
      var sendObj = that.form;
      Ajax.post(apiUrl.updateOrder, sendObj, function(data) {
        if (data.success) {
          alert('订单修改成功')
          that.dialogFormVisible = false
          that.getOrders()
        } else {
          alert("网络错误");
        }
      });
    },
    fahuo(index,item){
      console.log('点击了发货')
      let that = this
      Ajax.post(apiUrl.fahuoOrder,{id:item._id},function(data){
        if(data.success){
          alert('商品已经成功发货')
          that.getOrders();
        }else{
          alert('发货失败')
        }
      })
    }
  },
  computed: {},
  mounted() {
    this.getOrders();
  }
};
</script>
<style>
</style>

