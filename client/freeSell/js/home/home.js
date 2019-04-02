/**
 * home.js
 * 
 * 首页中相关组件的代码
 */

Vue.component('home-search', {
	template:`
		<div>
			<div class="home-search">
				<span class="home-icon home-icon-photo"> </span>
				<input class="home-search-input" type="text" v-model="searchStr" placeholder="搜索"></input>
				<span class="home-icon home-icon-say"> </span>
			</div>
		</div>`,
	data() {
		return {
			searchStr: '',
		}
	},
})

Vue.component('home-banner', {
	template: `
	<div style="width:100vw;overflow:hidden;">
	<div style="width:120vw;margin-left:-10vw">
			<el-carousel :interval="2000" type="card" height="40vw">
				<el-carousel-item v-for="item in 6" :key="item">
				  <h3>{{ item }}</h3>
				</el-carousel-item>
			 </el-carousel>
  </div>
  </div>
	`,
	data() {
		return {

		}
	}
})

Vue.component('home-classify',{
	template:`
		<div class="home-classify-container">
			<el-row :gutter="20">
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<el-row :gutter="20">
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
		</div>`,
	
})

Vue.component('home-products',{
	template:`
		<div>
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

