/**
 * 产品搜索组件
 * 输入产品名,获得数据,并根据数据内容进行渲染
 */

Vue.component('product-search',{
	template:`
		<div>
			<div class="product-search-header">
				<span class="product-icon product-icon-return"></span>
				<input class="product-search-input" type="text" v-model="searchStr" placeholder="搜索"></input>
				<span class="product-icon product-icon-say"></span>
			</div>
			<div class="product-search-body">
				<div class="product-menu-container">
					<div class="product-menu">
						<div class="product-menu-item">
							<span class="product-menu-item">
								综合
							</span>
							<span class="product-menu-icon">
							</span>
						</div>
						<div class="product-menu-item">
							<span class="product-menu-item">
								销量
							</span>
							<span class="product-menu-icon">
							</span>
						</div>
						<div class="product-menu-item">
							<span class="product-menu-item">
								价格
							</span>
							<span class="product-menu-icon">
							</span>
						</div>
						<div class="product-menu-item">
							<span class="product-menu-item">
								信用
							</span>
							<span class="product-menu-icon">
							</span>
						</div>
					</div>
					<div class="product-menu-fliter">
						<span class="product-menu-item">
							筛选
						</span>
						<span class="product-menu-icon">
						</span>
					</div>
				</div>
				<div class="product-search-container">
					<div class="product-search-product-container">
						
					</div>
				</div>
			</div>
		</div>
		`,
})