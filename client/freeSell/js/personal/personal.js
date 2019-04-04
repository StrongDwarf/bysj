/**
 * 个人中心页面
 */

Vue.component('personal-header',{
	template:`
		<div class="personal-header">
			<div class="personal-bar">
				<div class="personal-bar-left">
					<div class="personal-head-pic">
					</div>
					<span class="personal-head-name">白菜4220</span>
				</div>
				<div class="personal-bar-right">
					<p><span class="personal-bar-icon personal-icon-setup"></span></p>
				</div>
			</div>
		</div>`,
	data(){
		return {
			
		}
	}
})

Vue.component('personal-body',{
	template:`
		<div class="personal-body">
			<div class="personal-body-son-one">
			</div>
			<div class="personal-container">
				<div class="personal-item">
					<div class="personal-item-item">
						<span class="personal-icon personal-icon-collection"></span>
						<span class="personal-item-item-text">收藏夹</span>
					</div>
					<div class="personal-item-item">
						<span class="personal-icon personal-icon-like"></span>
						<span class="personal-item-item-text">关注店铺</span>
					</div>
					<div class="personal-item-item">
						<span class="personal-icon personal-icon-daifadan"></span>
						<span class="personal-item-item-text">待发单</span>
					</div>
					<div class="personal-item-item">
						<span class="personal-icon personal-icon-daifahuo"></span>
						<span class="personal-item-item-text">待发货</span>
					</div>
					<div class="personal-item-item">
						<span class="personal-icon personal-icon-daishouhuo"></span>
						<span class="personal-item-item-text">待收货</span>
					</div>
				</div>
				<div class="personal-item">
					<div class="personal-item-item">
						<span class="personal-icon personal-icon-kefu"></span>
						<span class="personal-item-item-text">在线客服</span>
					</div>
					<div class="personal-item-item">
						<span class="personal-icon personal-icon-yijian"></span>
						<span class="personal-item-item-text">意见反馈</span>
					</div>
					<div class="personal-item-item">
						<span class="personal-icon personal-icon-fous"></span>
						<span class="personal-item-item-text">关于我们</span>
					</div>
					<div class="personal-item-item">
						<span class="personal-icon personal-icon-signout"></span>
						<span class="personal-item-item-text">退出登录</span>
					</div>
				</div>
			</div>
		</div>`,
})