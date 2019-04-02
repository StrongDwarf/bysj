/**
 * 消息页面 组件
 */

Vue.component('news-header',{
	template:`
		<div class="news-header">
			<div class="news-bar">
				<el-badge  class="item">消息</el-badge>
				<div class="news-icon-container">
					<span class="news-icon news-icon-add"></span>
					<span class="news-icon news-icon-friendlist"></span>
				</div>
			</div>
		</div>`,
})

Vue.component('news-body',{
	template:`
		<div class="news-body">
			<div class="news-body-header">
				<span class="news-body-header-text">
					您有43条未读消息
				</span>
				<span class="news-icon-clear">
					
				</span>
			</div>
			<div class="news-body-container">
				<div class="news-container" v-for="item in 15">
					<div class="news-image">
					</div>
					<div class="news-container-son">
						<p><span class="user-name">用户名字</span><span class="time">星期五</span></p>
						<p>你好,如果你想取得我们公司的产品销售权,需要每月至少销售100万哦</p>
					</div>
				</div>
			</div>
		</div>
			`,
			
})