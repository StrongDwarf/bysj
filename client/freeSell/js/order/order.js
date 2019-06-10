/**
 * 售物仓页面 组件
 */

Vue.component('order-header', {
	template: `
		<div class="order-header">
			<div class="order-bar">
				<span class="order-bar-name">售物仓</span>
				<input class="order-search-input" type="text" v-model="searchStr" placeholder="搜索"></input>
				<span class="order-bar-text">管理</span>
			</div>
		</div>`,
	data() {
		return {
			searchStr: ''
		}
	}
})

Vue.component('order-body', {
	template: `
		<div class="order-body" id="order">
			<div class="order-body-son-one">
				<p class="order-body-text">共1件宝贝</p>
			</div>
			<div class="order-container">
				<div class="order-item" v-for="item in 10">
					<div class="order-item-shop">
						<span class="order-icon order-icon-shop"></span>
						<span class="order-shop-name">小狸姑娘与你同行</span>
						<span class="order-icon order-icon-right"></span>
					</div>
					<div class="order-container-son">
						<div class="order-image"></div>
						<div class="order-text-container">
							<p class="order-intro">pp6ICU夏季短袖一爱好地位还很低阿尔会返回巴克覅ifhi饿啊你看擦卡夫卡</p>
							<p class="order-classify">白色:xl[179-185/160-190]<span class="order-icon-down"></span></p>
							<p class="order-price-times"><span class="order-price">¥78</span><span class="order-times">已发单435次</span><span class="order-button">发单</span></p>
						</div>
					</div>
				</div>
			</div>
		</div>`,
	data: function() {
		return {

		}
	},

})

Vue.component('orderA', {
	template: `
	<div>
		<div style="height:14vw;position:fixed;z-index:1000">
			<div class="order-header">
				<div class="order-bar">
					<span class="order-bar-name">售物仓</span>
					<input class="order-search-input" type="text" v-model="searchStr" placeholder="搜索"></input>
					<span v-on:click="showito=!showito"  class="order-bar-text">管理</span>
				</div>
			</div>
		</div>
		<div style="overflow-y:scroll;padding-top:14vw">
			<div class="order-body">
				<div class="order-body-son-one">
					<p class="order-body-text">共{{buyProducts.length}}件宝贝</p>
				</div>
				<div class="order-container">
					<div class="order-item" v-for="item in buyProducts">
					
						<div class="order-item-shop" style="width:100%;">
							<span class="order-icon order-icon-shop"></span>
							<span class="order-shop-name">{{item.shopName}}</span>
							<span class="order-icon order-icon-right"></span>
							<span v-show="showito" v-on:click="removeBuyProduct(item)" style="border:1px solid red;color:#ffffff;float:right;display:inline-block;background-color:red;border-radius:20px;width:20px;height:20px;text-align:center;">x</span>
						</div>
						<div class="order-container-son">
							<div class="order-image">
								<img v-bind:src="item.productImg" alt="" style="width:100%;height:100%;" />
							</div>
							<div class="order-text-container">
								<p class="order-intro">{{item.title}}</p>
								<p class="order-classify">白色:xl[179-185/160-190]<span class="order-icon-down"></span></p>
								<p class="order-price-times"><span class="order-price">¥{{item.price}}</span><span class="order-times">已发单{{item.count}}次</span>
								<span class="order-button" v-on:click="fadan(item)">发单</span></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div style="" class="fadan" v-show="showfadan">
			<p><span class="label">收货人</span><input type="text" v-model="buyer" placeholder="请输入收货人姓名"></p>
			<p><span class="label">收货人手机号</span><input type="text" v-model="phone" placeholder="请输入收货人手机号"></p>
			<p><span class="label">收货人地址</span><input type="text" v-model="address" placeholder="请输入收货人地址"></p>
			<p><span class="label">购买数量</span><input type="text" v-model="buyCount" placeholder="请输入购买数量"></p>
			<p class="botton">
				<span v-on:click="addOrder">确定</span><span v-on:click="showfadan=false">取消</span>
			</p>
		</div>
	</div>`,
	data: function() {
		return {
			searchStr:'',
			item:'',
			buyer:'',
			phone:'',
			address:'',
			buyCount:'',
			removetag:'x',
			showito:false,
			id:'',
			showfadan:false,
			buyProducts: [{
				_id: '5cd3e35898527e0e24689790',
				productId: '533000244820',
				shopName: '空城计旗舰店',
				shopIcon: 'http://img.alicdn.com/imgextra//cc/52/TB15JJrJpXXXXbBXpXXSutbFXXX.jpg',
				shopId: '111444500',
				productImg: 'http://img.alicdn.com/imgextra/i3/TB1Y7SNPpXXXXcJXVXXXXXXXXXX_!!0-item_pic.jpg',
				title: '春秋季韩版潮流男宽松立领长袖白衬衫短寸衣服学生七分袖帅气休闲',
				location: '浙江杭州',
				price: '88',
				count:0,
				__v: 0
			},{
				_id: '5cd3e35898527e0e24689790',
				productId: '533000244820',
				shopName: '空城计旗舰店',
				shopIcon: 'http://img.alicdn.com/imgextra//cc/52/TB15JJrJpXXXXbBXpXXSutbFXXX.jpg',
				shopId: '111444500',
				productImg: 'http://img.alicdn.com/imgextra/i3/TB1Y7SNPpXXXXcJXVXXXXXXXXXX_!!0-item_pic.jpg',
				title: '春秋季韩版潮流男宽松立领长袖白衬衫短寸衣服学生七分袖帅气休闲',
				location: '浙江杭州',
				price: '88',
				count:0,
				__v: 0
			}],
		}
	},
	methods:{
		getBuyProducts(){
			var that = this;
			console.log('获取购物车中的货物数据')
			mui.post(apiUrl.getBuyProducts,{},function(data){
				console.log('获取购物车中的货物数据')
				if(data.success){
					console.log('获取数据成功');
					that.buyProducts = data.data.buyProducts;
				}else{
					alert('获取购物车数据失败,请检查网络连接')
				}
			})
		},
		fadan(item){
			this.item = item;
			this.showfadan = true;
		},
		addOrder(){
			var that = this;
			/** 非空验证 */
			if(!that.buyer){
				alert('收货人不能为空');
				return
			}
			if(!that.phone){
				alert('收货人手机号不能为空')
				return
			}
			if(!that.address){
				alert('收货地址不能为空')
				return
			}
			if(that.buyCount <= 0){
				alert('发货数量不能小于0')
				return
			}
			
			var obj = {
				shopName:that.item.shopName,
				shopIcon:that.item.shopIcon,
				shopId:that.item.shopId,
				productId:that.item.productId,
				productImg:that.item.productImg,
				title:that.item.title,
				location:that.item.location,
				price:that.item.price,
				count:that.item.count,
				buyer:that.buyer,
				phone:that.phone,
				address:that.address,
				buyCount:that.buyCount,
			}
			console.log(JSON.stringify(obj));
			mui.post(apiUrl.addOrder,obj,function(data){
				if(data.success){
					alert('发单成功')
					that.showfadan = false;
				}else{
					alert('发单失败')
				}
			})
		},
		removeBuyProduct(item){
			let that = this;
			console.log('点击了删除')	
			mui.post(apiUrl.removeBuyProduct,{id:item._id},function(data){
				if(data.success){
					alert('成功删除商品')
				}else{
					alert('删除失败,')
				}
				let index;
				for(let i =0,len=that.buyProducts.length;i<len;i++){
					if(item._id == that.buyProducts[i]._id){
						index = i
					}
				}
				that.buyProducts.splice(i,1);
			})
		},
		putOrder(item){
			
		}
	},
	mounted() {
		/*添加双击刷新事件*/
		var that = this;
		var orderEl = document.getElementById('order')
		that.getBuyProducts()
		document.addEventListener('dblclick',function(){
			console.log('双击')
			that.getBuyProducts();
		})
	}
})
