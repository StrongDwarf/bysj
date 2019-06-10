var crypto = require('crypto');
var express = require('express');
var fs = require('fs');
var formidable = require('formidable')
//var tokens = new Map();


module.exports = function (app) {
    var apiTransfer = require('./apiTransfer/index.js');
    var loginState = require('./controllers/login_state_controller');

    app.get('/hello', function (req, res) {
        res.send('xiaobaicai').end();
    })
    app.get('/', apiTransfer.get)
    app.get('/searchUrl', apiTransfer.get);
    app.get('/recoImg', function (req, res) {
        res.send('不能Get').end()
    })
    app.post('/recoImg', apiTransfer.recoImg);

    app.post('/file_upload', function (req, res) {
        var des_file = __dirname + "/myImage/" + req.files[0].originalname;
        fs.readFile(req.files[0].path, function (err, data) {
            fs.writeFile(des_file, data, function (err) {
                if (err) {
                    console.log(err);
                }
                res.json({
                    success:true,
                    data:{}
                })
            });
        });
    })

    /**网页端使用的API */
    app.post('/PC/login', loginState.login)
    app.post('/PC/revg', loginState.verg)
    app.post('/PC/addProduct', loginState.addProduct)
    app.post('/PC/removeProduct', loginState.removeProduct)
    app.post('/PC/updateProduct', loginState.updateProduct)
    app.post('/PC/getProducts', loginState.getProducts)

    /** APP端使用的API */
    app.post('/APP/addBuyProduct', loginState.addBuyProduct)
    app.post('/APP/removeBuyProduct', loginState.removeBuyProduct)
    app.post('/APP/getBuyProducts', loginState.getBuyProducts)

    /** 订单API */
    app.post('/Order/addOrder', loginState.addOrder)
    app.post('/Order/removeOrder', loginState.removeOrder)
    app.post('/Order/fahuoOrder', loginState.fahuoOrder)
    app.post('/Order/getOrders', loginState.getOrders)
    app.post('/Order/updateOrder', loginState.updateOrder)

    /** 收藏商品API */
    app.post('/APP/CollectionProduct/addProduct', loginState.addCollectionProduct)
    app.post('/APP/CollectionProduct/removeProduct', loginState.removeCollectionProduct)
    app.post('/APP/CollectionProduct/getProducts', loginState.getCollectionProducts)

    /** 收藏店铺API */
    app.post('/APP/CollectionShop/addShop', loginState.addCollectionShop)
    app.post('/APP/CollectionShop/removeShop', loginState.removeCollectionShop)
    app.post('/APP/CollectionShop/getShops', loginState.getCollectionShops)

    /** 库存管理API */
    app.post('/PC/StorageProduct/addProduct', loginState.addStorageProduct)
    app.post('/PC/StorageProduct/updateProduct', loginState.updateStorageProduct)
    app.post('/PC/StorageProduct/removeProduct', loginState.removeStorageProduct)
    app.post('/PC/StorageProduct/getProducts', loginState.getStorageProducts)

    /** 商品管理接口 */
    app.post('/PC/SellProduct/addProduct',loginState.addSellProduct)
    app.post('/PC/SellProduct/removeProduct',loginState.removeSellProduct)
    app.post('/PC/SellProduct/getProducts',loginState.getSellProducts)
    app.post('/PC/SellProduct/updateProduct',loginState.updateSellProduct)

}
