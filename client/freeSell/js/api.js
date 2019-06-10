
/*
 * @name:apiUrl
 * @explain:保存api url
 */
var apiUrl = function(){
	var host = 'http://192.168.43.14:8083'
	
	var CollectionProduct = {
		addProduct: 'http://192.168.43.14:8083/APP/CollectionProduct/addProduct',
		removeProduct: 'http://192.168.43.14:8083/APP/CollectionProduct/removeProduct',
		getProducts: 'http://192.168.43.14:8083/APP/CollectionProduct/getProducts'
	}
	
	var CollectionShop = {
		addShop: 'http://192.168.43.14:8083/APP/CollectionShop/addShop',
		removeShop: 'http://192.168.43.14:8083/APP/CollectionShop/removeShop',
		getShops: 'http://192.168.43.14:8083/APP/CollectionShop/getShops'
	}
	
	var obj = {
		searchProduct : 'https://pub.alimama.com/items/search.json?q=',
		recoImg:'http://192.168.43.14:8083/recoImg',
		addBuyProduct:'http://192.168.43.14:8083/APP/addBuyProduct',
		removeBuyProduct:'http://192.168.43.14:8083/APP/removeBuyProduct',
		getBuyProducts:'http://192.168.43.14:8083/APP/getBuyProducts',
		addOrder:'http://192.168.43.14:8083/Order/addOrder',
		removeOrder:'http://192.168.43.14:8083/Order/removeOrder',
		fahuoOrder:'http://192.168.43.14:8083/Order/fahuoOrder',
		getOrders:'http://192.168.43.14:8083/Order/getOrders',
		CollectionProduct:CollectionProduct,
		CollectionShop:CollectionShop
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