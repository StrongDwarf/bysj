
/*
 * @name:apiUrl
 * @explain:保存api url
 */
var apiUrl = function(){
	var host = 'xiaobaicai.com'
	
	var obj = {
		searchProduct : 'https://pub.alimama.com/items/search.json?q=',
	}
	
	return obj
}()

/*
 * @name:api
 * @explain:基于apiurl封装的便捷方法
 */
var api = function(apiUrl){
	var host = 'xiaobaicai.com'
	
	var apiObject = {
		searchProduct(productStr,callback){
			mui.get(apiUrl.searchProduct + productStr,{},callback)
		}
	}
	
	return apiObject
}(apiUrl)