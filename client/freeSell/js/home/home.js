/**
 * home.js
 * 
 * 首页中相关组件的代码
 */

Vue.component('home-search', {
	template:`
		<div>
			<div class="home-search">
				<span class="home-icon home-icon-photo" v-on:click="photoHandler"></span>
				<input class="home-search-input" type="text" v-model="searchStr" placeholder="搜索"></input>
				<span class="home-icon home-icon-say" v-on:click="sayHandler"></span>
			</div>
		</div>`,
	data() {
		return {
			searchStr: '',
		}
	},
	methods:{
		photoHandler(){
			plus.nativeUI.toast("点击了图片")
		},
		sayHandler(){
			plus.nativeUI.toast("点击了话筒")
		}
	},
	watch:{
		searchStr(newVal,oldVal){
			if(newVal!=oldVal){
				plus.nativeUI.toast("搜索数据改变了");
				mui.get(apiUrl.searchProduct + "鞋",{
						
					},function(data){
						//获取数据,打开新页面,并将数据传给新页面
						
					},'json'
				);
			}
		}
	}
})

Vue.component('home-banner', {
	template: `
	<div style="width:100vw;overflow:hidden;">
	<div style="width:120vw;margin-left:-10vw">
			<el-carousel :interval="2000" type="card" height="40vw">
				<el-carousel-item>
				  <span class="home-banner-img home-banner-img1"></span>
				</el-carousel-item>
				<el-carousel-item>
				  <span class="home-banner-img home-banner-img2"></span>
				</el-carousel-item>
				<el-carousel-item>
				  <span class="home-banner-img home-banner-img3"></span>
				</el-carousel-item>
			 </el-carousel>
  </div>
  </div>
	`,
	data() {
		return {
			imgStyleLists:[{
				id:'1',
				style:'background-image = url(../image/img/home/timg.jpg);'
			},{
				id:'2',
				style:'background-image = url(../image/img/home/timg3.jpg);'
			},{
				id:'3',
				style:'background-image = url(../image/img/home/timg4.jpg);'
			},
			]
		}
	}
})

Vue.component('home-classify',{
	template:`
		<div class="home-classify-container">
			<el-row :gutter="20">
			  <el-col :span="6"><div class="grid-content">
				<span class="home-icon-classify home-icon-classify-nanzhuang"></span>
				<span class="home-class-text">男装</span>
			</div></el-col>
			  <el-col :span="6"><div class="grid-content">
				<span class="home-icon-classify home-icon-classify-nvzhuang"></span>
				<span class="home-class-text">女装</span>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content">
				<span class="home-icon-classify home-icon-classify-yundonghuwai"></span>
				<span class="home-class-text">户外</span>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content">
			    <span class="home-icon-classify home-icon-classify-riyongbaihuo"></span>
			    <span class="home-class-text">百货</span>
			  </div></el-col>
			</el-row>
			<el-row :gutter="20">
			  <el-col :span="6"><div class="grid-content">
				<span class="home-icon-classify home-icon-classify-shoujishuma"></span>
				<span class="home-class-text">数码</span>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content"> 
				<span class="home-icon-classify home-icon-classify-tushuleqi"></span>
				<span class="home-class-text">图书</span>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content">
				  <span class="home-icon-classify home-icon-classify-chongwu"></span>
				  <span class="home-class-text">宠物</span>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content">
				<span class="home-icon-classify home-icon-classify-more"></span>
				<span class="home-class-text">更多</span>
			  </div></el-col>
			</el-row>
		</div>`,
	
})

Vue.component('home-products',{
	template:`
		<div class="home-products-container-father">
			<div class="home-products-container" style="margin-left:1vw;margin-right:-1vw">
				<div class="home-products-item" v-for="item in 10" :key="item">
					<div class="home-products-img" ></div>
					<p class="home-products-intro">日本进口短针五针松 瑞光五针松大阪松盆景一拍</p>
					<p class="home-products-price">
						<span class="home-products-price-buy">¥880</span>
						<span class="home-products-price-sell">¥1450</span>
					</p>
				</div>
			</div>
			<div class="home-products-container" style="margin-left:-1vw">
				<div class="home-products-item" v-for="item in 10" :key="item">
					<div class="home-products-img" ></div>
					<p class="home-products-intro">日本进口短针五针松 瑞光五针松大阪松盆景一拍</p>
					<p class="home-products-price">
						<span class="home-products-price-buy">¥880</span>
						<span class="home-products-price-sell">¥1450</span>
					</p>
				</div>
			</div>
		</div>`,
})

