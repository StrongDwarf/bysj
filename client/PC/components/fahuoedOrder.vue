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
  </el-table>
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
          _id:'123434',
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
        },
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    getOrders(){
      var that = this
      Ajax.post(apiUrl.getOrders,{},function(data){
        if(data.success){
          var orders = data.data.orders;
          console.log(orders);
          var arr = []
          for(let i =0,len=orders.length;i<len;i++){
            if(orders[i].isfahuo){
              arr.push(orders[i])
            }
          }
          console.log(arr)
          that.orders = arr;
        }else{
          alert('网络错误')
        }
      })
    },
  },
  computed: {
    
  },
  mounted() {
    this.getOrders()
  }
};

</script>
<style>
</style>

