/**
 * home.js
 * 
 * 首页中相关组件的代码
 */

Vue.component('home-search', {
	template:`
		<div>
			<div class="home-search">
				<span class="home-icon home-icon-photo" v-on:click="openProductSearch"></span>
				<input class="home-search-input" type="text" v-model="searchStr" placeholder="搜索" v-on:click="openProductSearch"></input>
				<span class="home-icon home-icon-say" v-on:click="openProductSearch"></span>
			</div>
		</div>`,
	data() {
		return {
			searchStr: '',
		}
	},
	methods:{
		openProductSearch(){
			var searchView = mui.openWindow({
				url: "productSearch.html",
				id: "productSearch.html",
			});
			mui.fire(searchView, "updateSearchstr", {
				'searchStr': '运动鞋'
			})
		},
		photoHandler(){
		},
		sayHandler(){
			
			
			/**
			 * 获得单词,输入语音识别获得的文字,输出文字中提取出来的要搜索的商品
			 */
			function getword(str){
				/*
				let words = ['鞋','衣','男','女','儿童','老人','夏','冬','秋','春','拖','玩具','项链','扣','乌龟','鸟','花','草','辣条']
				let res = ''
				for(let i =0,len=words.length;i<len;i++){
					if(str.indexOf(words[i]) !== -1){
						res = res+words[i]
					}
				}*/
				let res = ''
				let words = '我要买一想的天穿戴用生搜索捆得给来'
				str = Array.from(str)
				for(let i =0,len=str.length;i<len;i++){
						if(words.indexOf(str[i]) == -1){
							res = res+str[i]
						}else{
							if(str[i] == '一'){
								i++
							}
						}
					
				}
				return res;
			}
			
			/**
			 * 输入要搜索的单词,并且将其作为参数传递给商品搜索页面
			 */
			function openProductSearch(word){
				alert('要搜索的单词是'+word)
				plus.storage.setItem('searchword',word);
				mui.openWindow({
					url:"productSearch.html",
					id:"productSarch.html",
					}); 
			}
			
			/**
			 * 开启语音识别
			 */
			function startReco(){
				var options = {};
				options.engine = 'iFly';
				text = "";
				alert("开始语音识别：");
				plus.speech.startRecognize(options, function(s) {
					text += s;
					alert(''+text);
					let word = getword(text);
					
					if(!word){
						alert("语音识别错误,请重新进行语音识别")
						startReco();
					}else{
						
						openProductSearch(word)
					}
				}, function(e) {
					alert("语音识别失败：" + e.message);
				});
			}
			
			startReco();
			
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
			  <el-col :span="6"><div class="grid-content" v-on:click="openProductSearch('男装')">
				<span class="home-icon-classify home-icon-classify-nanzhuang"></span>
				<span class="home-class-text">男装</span>
			</div>
			</el-col>
			  <el-col :span="6"><div class="grid-content" v-on:click="openProductSearch('女装')">
				<span class="home-icon-classify home-icon-classify-nvzhuang"></span>
				<span class="home-class-text">女装</span>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content" v-on:click="openProductSearch('户外')">
				<span class="home-icon-classify home-icon-classify-yundonghuwai"></span>
				<span class="home-class-text">户外</span>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content"  v-on:click="openProductSearch('百货')">
			    <span class="home-icon-classify home-icon-classify-riyongbaihuo"></span>
			    <span class="home-class-text">百货</span>
			  </div></el-col>
			</el-row>
			<el-row :gutter="20">
			  <el-col :span="6"><div class="grid-content" v-on:click="openProductSearch('数码')">
				<span class="home-icon-classify home-icon-classify-shoujishuma"></span>
				<span class="home-class-text">数码</span>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content" v-on:click="openProductSearch('图书')"> 
				<span class="home-icon-classify home-icon-classify-tushuleqi"></span>
				<span class="home-class-text">图书</span>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content" v-on:click="openProductSearch('宠物')">
				  <span class="home-icon-classify home-icon-classify-chongwu"></span>
				  <span class="home-class-text">宠物</span>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content" v-on:click="openProductSearch('随机')">
				<span class="home-icon-classify home-icon-classify-more"></span>
				<span class="home-class-text">更多</span>
			  </div></el-col>
			</el-row>
		</div>`,
		methods:{
			openProductSearch(searchStr){
				var searchView = mui.openWindow({
					url: "productSearch.html",
					id: "productSearch.html",
				});
				mui.fire(searchView, "updateSearchstr", {
					'searchStr': searchStr
				})
			}
		}
	
})

Vue.component('home-products',{
	template:`
		<div class="home-products-container-father">
			<div class="home-products-container" style="margin-left:1vw;margin-right:-1vw">
				<div class="home-products-item" v-for="item in dataLists1" v-on:click="openProductDetail(item.id)">
					<div class="home-products-img" >
						<img v-bind:src="item.imageUrls[0]" alt="" style="width:100%;height:100%;"/>
					</div>
					<p class="home-products-intro" v-html="item.title">{{item.title}}</p>
					<p class="home-products-price">
						<span class="home-products-price-buy">¥{{item.price - item.price * 0.20}}</span> -> 
						<span class="home-products-price-sell">¥{{item.price }}</span>
					</p>
				</div>
			</div>
			<div class="home-products-container" style="margin-left:-1vw">
				<div class="home-products-item" v-for="item in dataLists2"  v-on:click="openProductDetail(item.id)">
					<div class="home-products-img" >
						<img v-bind:src="item.imageUrls[0]" alt="" style="width:100%;height:100%;">
					</div>
					<p class="home-products-intro" v-html="item.title">{{item.title}}</p> 
					<p class="home-products-price">
						<span class="home-products-price-buy">¥{{item.price - item.price * 0.20}}</span> ->
						<span class="home-products-price-sell">¥{{item.price}}</span>
					</p>
				</div>
			</div>
		</div>`,
	data:function(){
		return{
			dataLists1:[],
			dataLists2:[]
		}
	},
	methods:{
		openProductDetail(id) {
			console.log(id);
			var detailView = mui.openWindow({
				url: "productDetail.html",
				id: "productDetail.html",
			});
			mui.fire(detailView, "updateItemId", {
				'id': id
			})
		},
	},
	mounted() {
		let that = this;
		mui.get('http://api01.6bqb.com/taobao/search?apikey=2A560EC2150F9A78A3CA210374CF7253&keyword=衣服&order=default',function(data){
			data = data.data;
			for(let i =0,len=data.length;i<len;i++){
				data[i].imageUrls[0] = 'http:'+ data[i].imageUrls[0]
			}
			//that.dataLists1 = data;
			for(let i =0,len = data.length,middle = (data.length)/2;i<len;i++){
				if(i<middle){
					that.dataLists1.push(data[i])
				}else{
					that.dataLists2.push(data[i])
				}
			}
		},'json')
		/*
		mui.get('http://api01.6bqb.com/taobao/search?apikey=2A560EC2150F9A78A3CA210374CF7253&keyword=鞋子&order=default',function(data){
			data = data.data;
			for(let i =0,len=data.length;i<len;i++){
				data[i].imageUrls[0] = 'http:'+ data[i].imageUrls[0]
			}
			that.dataLists2 = data;
		},'json')*/
		/*mui.get('192.168.43.14:8083/searchUrl',{
			url:'https://pub.alimama.com/items/search.json?q=鞋子'
		},function(data){
			data = data.data;
			that.searchData = data;
			for(let i =0,len=data.pageList.length;i<len;i++){
				data.pageList[i].pictUrl = 'http:'+ data.pageList[i].pictUrl
			}
			that.dataLists2 = data.pageList;
		},'json')*/
	}
})

