/**
 * 售物仓页面 组件
 */

Vue.component('order-header',{
	template:`
		<div class="order-header">
			<div class="order-bar">
				<span class="order-bar-name">售物仓</span>
				<input class="order-search-input" type="text" v-model="searchStr" placeholder="搜索"></input>
				<span class="order-bar-text">管理</span>
			</div>
		</div>`,
	data(){
		return {
			searchStr:''
		}
	}
})

Vue.component('order-body',{
	template:`
		<div class="order-body">
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
					
})