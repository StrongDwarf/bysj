var crypto = require('crypto');
var fs = require('fs')
require('../models/seller_model');
require('../models/product_model')
require('../models/buy_product_model')
require('../models/order_model')
require('../models/storage_product_model')
require('../models/collection_shop_model')
require('../models/collection_product_model')
require('../models/sell_product_model')
var mongoose = require('mongoose');
var Seller = mongoose.model('Seller');
var Product = mongoose.model('Product')
var BuyProduct = mongoose.model('BuyProduct')
var Order = mongoose.model('Order')
var CollectionShop = mongoose.model('CollectionShop')
var CollectionProduct = mongoose.model('CollectionProduct')
var StorageProduct = mongoose.model('StorageProduct')
var SellProduct = mongoose.model('SellProduct')

var tokens = new Map();

function hashPW(pwd) {
    return crypto.createHash('sha256').update(pwd).
        digest('base64').toString();
}

function createCode() {
    var a = Math.floor(Math.random() * 1000000)
    return a > 100000 ? a : createCode();
}

function getToken(number, pass) {
    var token = hashPW(number) + '.' + hashPW(pass);
    tokens.set(token, number)
    console.log(tokens);
    return token;
};

function getNumber(token) {
    return tokens.get(token)
}

/**
 * 收藏店铺控制器
 */
var CollectionShopController = {
    addShop(req, res) {
        var obj = req.body;
        if (!obj.shopName || !obj.shopUrl) {
            res.json({ 'error': true, message: '收藏失败:无效输入' })
            return
        }
        var collectionShop = new CollectionShop(obj)
        collectionShop.save(function (err, doc) {
            if (!err) {
                console.log('向收藏店铺列表中添加一条新店铺', doc)
                res.json({ 'success': true, message: "收藏成功" })
                return
            } else {
                console.log(err)
                res.json({ 'error': true, message: '收藏失敗' })
                return
            }
        })
    },
    removeShop(req, res) {
        if (req.body.id) {
            CollectionShop.findOne({ '_id': req.body.id })
                .exec(function (err, collectionShop) {
                    if (err) { console.log(err); res.json({ error: true, message: '删除失败:数据库查询错误' }); return }
                    if (!pro) { res.json({ error: true, message: '删除失败:没有查询到该商店' }); return }
                    collectionShop.remove(function (err) {
                        if (err) { res.json({ error: true, message: '删除失败:数据库删除数据出错' }); return }
                        res.json({ success: true, data: {} })
                        return
                    })
                })
        } else {
            res.json({ 'error': true, message: '没有商品id' })
        }
    },
    getShops(req, res) {
        CollectionShop.find({}).limit(10)
            .exec(function (err, pros) {
                if (err) { res.json({ error: true, message: '查询失败:数据库查询错误' }); return }
                res.json({
                    success: true, data: {
                        orders: pros
                    }
                })
            })
    },
}

/**
 * 收藏商品控制器
 */
var CollectionProductController = {
    addProduct(req, res) {
        var obj = req.body;
        var collectionProduct = new CollectionProduct(obj)
        collectionProduct.save(function (err, doc) {
            if (!err) {
                console.log('向收藏商品列表中添加一条新商品', doc)
                res.json({ 'success': true, message: "收藏成功" })
                return
            } else {
                console.log(err)
                res.json({ 'error': true, message: '收藏失敗' })
                return
            }
        })
    },
    removeProduct(req, res) {
        if (req.body.id) {
            CollectionProduct.findOne({ '_id': req.body.id })
                .exec(function (err, collectionProduct) {
                    if (err) { console.log(err); res.json({ error: true, message: '删除失败:数据库查询错误' }); return }
                    if (!pro) { res.json({ error: true, message: '删除失败:没有查询到该商品' }); return }
                    collectionProduct.remove(function (err) {
                        if (err) { res.json({ error: true, message: '删除失败:数据库删除数据出错' }); return }
                        res.json({ success: true, data: {} })
                        return
                    })
                })
        } else {
            res.json({ 'error': true, message: '没有商品id' })
        }
    },
    getProducts(req, res) {
        CollectionProduct.find({}).limit(10)
            .exec(function (err, pros) {
                if (err) { res.json({ error: true, message: '查询失败:数据库查询错误' }); return }
                console.log('请求数据')
                console.log(pros)
                res.json({
                    success: true, data: {
                        collectionProducts: pros
                    }
                })
            })
    },
}

/**
 * 库存相关控制器
 */
var StorageProductController = {
    addProduct(req, res) {
        var des_file = "C:/Users/machenike/Documents/GitHub/bysj/server/public/myImage/" + req.files[0].originalname;
        fs.readFile(req.files[0].path, function (err, data) {
            fs.writeFile(des_file, data, function (err) {
                if (err) {
                    console.log(err);
                    return;
                }
                var obj = req.body;
                var time = new Date()
                obj.productImg = 'http://127.0.0.1:8083/myImage/' + req.files[0].originalname
                obj.startTime = time.getFullYear() + '' + ((time.getMonth() + 1) < 10 ? (0 + '' + (time.getMonth() + 1)) : (time.getMonth() + 1))
                + time.toString().split(' ')[2] + ' ' + time.toString().split(' ')[4]
                obj.updateTime = obj.startTime
                var storageProduct = new StorageProduct(obj)
                storageProduct.save(function (err, doc) {
                    if (!err) {
                        console.log('向收藏商品列表中添加一条新商品', doc)
                        res.json({ 'success': true, message: "收藏成功" })
                        return
                    } else {
                        console.log(err)
                        res.json({ 'error': true, message: '收藏失敗' })
                        return
                    }
                })
            });
        });
    },
    updateProduct(req, res) {
        if (req.body._id) {
            StorageProduct.findOne({ '_id': req.body._id })
                .exec(function (err, sellProduct) {
                    if (err) { console.log(err); res.json({ error: true, message: '删除失败:数据库查询错误' }); return }
                    if (!sellProduct) { res.json({ error: true, message: '删除失败:没有该商品' }); return }
                    var valueList = ["title","count","location"]
                    var time = new Date()
                    valueList.forEach((value,index) => {
                        if(req.body[value]){
                            sellProduct[value] = req.body[value]
                        }
                    })
                    sellProduct.updateTime = time.getFullYear() + '' + ((time.getMonth() + 1) < 10 ? (0 + '' + (time.getMonth() + 1)) : (time.getMonth() + 1))
                    + time.toString().split(' ')[2] + ' ' + time.toString().split(' ')[4]
                    sellProduct.save(function (err, doc) {
                        if (err) { res.json({ error: true, message: '删除失败:数据库删除数据出错' }); return }
                        res.json({ success: true, data: {} })
                        return
                    })
                })
        } else {
            res.json({ 'error': true, message: '添加订单失敗' })
        }
    },
    removeProduct(req, res) {
        if (req.body._id) {
            StorageProduct.findOne({ '_id': req.body._id })
                .exec(function (err, collectionProduct) {
                    if (err) { console.log(err); res.json({ error: true, message: '删除失败:数据库查询错误' }); return }
                    if (!collectionProduct) { res.json({ error: true, message: '删除失败:没有查询到该商品' }); return }
                    collectionProduct.remove(function (err) {
                        if (err) { res.json({ error: true, message: '删除失败:数据库删除数据出错' }); return }
                        res.json({ success: true, data: {} })
                        return
                    })
                })
        } else {
            res.json({ 'error': true, message: '没有商品id' })
        }
    },
    getProducts(req, res) {
        StorageProduct.find({}).limit(10)
            .exec(function (err, pros) {
                if (err) { res.json({ error: true, message: '查询失败:数据库查询错误' }); return }
                console.log('请求数据')
                console.log(pros)
                res.json({
                    success: true, data: {
                        products: pros
                    }
                })
            })
    },
}

/**
 * 订单相关控制器
 */
var OrderController = {
    addOrder(req, res) {
        console.log('调用了添加订单接口')
        console.log('req.body', req.body)
        if (req.body.productId) {
            var obj = req.body;
            let time = new Date()
            obj.buyTime = time.getFullYear() + '' + ((time.getMonth() + 1) < 10 ? (0 + '' + (time.getMonth() + 1)) : (time.getMonth() + 1))
                + time.toString().split(' ')[2] + ' ' + time.toString().split(' ')[4]
            obj.isfahuo = false
            obj.count = 0
            console.log(obj);
            var order = new Order(obj)
            order.save(function (err, doc) {
                if (!err) {
                    console.log('向订单列表中添加一条订单', doc)
                    res.json({ 'success': true, message: "添加订单成功" })
                    return
                } else {
                    console.log(err)
                    res.json({ 'error': true, message: '添加订单失敗' })
                    return
                }
            })
        } else {
            res.json({ 'error': true, message: '添加订单失敗' })
        }
    },
    updateOrder(req, res) {

        if (req.body._id) {
            Order.findOne({ '_id': req.body._id })
                .exec(function (err, sellProduct) {
                    if (err) { console.log(err); res.json({ error: true, message: '删除失败:数据库查询错误' }); return }
                    if (!sellProduct) { res.json({ error: true, message: '删除失败:没有该商品' }); return }
                    var valueList = ["buyCount","address","buyer","phone","address"]
                    valueList.forEach((value,index) => {
                        if(req.body[value]){
                            sellProduct[value] = req.body[value]
                        }
                    })
                    sellProduct.save(function (err, doc) {
                        if (err) { res.json({ error: true, message: '删除失败:数据库删除数据出错' }); return }
                        res.json({ success: true, data: {} })
                        return
                    })
                })
        } else {
            res.json({ 'error': true, message: '添加订单失敗' })
        }
    },
    fahuoOrder(req, res) {
        console.log('调用了发货接口');
        if (req.body.id) {
            Order.findOne({ '_id': req.body.id })
                .exec(function (err, pro) {
                    if (err) { console.log(err); res.json({ error: true, message: '删除失败:数据库查询错误' }); return }
                    if (!pro) { res.json({ error: true, message: '删除失败:没有该商品' }); return }
                    pro.isfahuo = true;
                    pro.save(function (err, doc) {
                        if (err) { res.json({ error: true, message: '删除失败:数据库删除数据出错' }); return }
                        console.log('订单发货')
                        console.log(doc)
                        res.json({ success: true, data: {} })
                        return
                    })
                })
        } else {
            res.json({ 'error': true, message: '添加订单失敗' })
        }
    },
    removeOrder(req, res) {
        console.log('调用了删除订单接口')
        if (req.body.id) {
            Order.findOne({ '_id': req.body.id })
                .exec(function (err, pro) {
                    if (err) { console.log(err); res.json({ error: true, message: '删除失败:数据库查询错误' }); return }
                    if (!pro) { res.json({ error: true, message: '删除失败:没有该商品' }); return }
                    pro.remove(function (err) {
                        if (err) { res.json({ error: true, message: '删除失败:数据库删除数据出错' }); return }
                        res.json({ success: true, data: {} })
                        return
                    })
                })
        } else {
            res.json({ 'error': true, message: '没有订单id' })
        }
    },
    getOrders(req, res) {
        console.log('调用了接收全部订单接口')
        Order.find({}).limit(10)
            .exec(function (err, pros) {
                if (err) { res.json({ error: true, message: '查询失败:数据库查询错误' }); return }
                res.json({
                    success: true, data: {
                        orders: pros
                    }
                })
            })
    },

}

/**
 * 购物车相关控制器
 */
var BuyProductController = {
    /** 将商品添加到购物车 */
    addBuyProduct(req, res) {
        console.log('调用了将商品添加到购物车接口')
        console.log(req.body)
        req.body.count = 0
        var buyProduct = new BuyProduct(req.body)
        buyProduct.save(function (err, doc) {
            if (!err) {
                console.log('向购物车添加一条商品', doc)
                res.json({ 'success': true, message: "添加商品成功" })
                return
            } else {
                console.log(err)
                res.json({ 'error': true, message: '添加商品失敗' })
                return
            }
        })
    },
    removeBuyProduct(req, res) {
        console.log('调用了移除购物车中的商品接口')
        if (req.body.id) {
            console.log("_id", req.body.id);
            BuyProduct.findOne({ '_id': req.body.id })
                .exec(function (err, pro) {
                    if (err) { res.json({ error: true, message: '删除失败:数据库查询错误' }); return }
                    if (!pro) { res.json({ error: true, message: '删除失败:没有该商品' }); return }
                    pro.remove(function (err) {
                        if (err) { res.json({ error: true, message: '删除失败:数据库删除数据出错' }); return }
                        res.json({ success: true, data: {} })
                        return
                    })
                })
        } else {
            res.json({ 'error': true, message: '没有商品id' })
        }
    },
    getBuyProducts(req, res) {
        console.log('调用了获取购物车商品接口')
        BuyProduct.find({}).limit(10)
            .exec(function (err, pros) {
                if (err) {
                    console.log(err);
                    res.json({ error: true, message: '查询失败:数据库查询错误' }); return
                }
                res.json({
                    success: true, data: {
                        buyProducts: pros
                    }
                })
                return;
            })
    }
}

/**
 * 商品管理控制器
 */
var SellProductController = {
    addProduct(req, res) {
        var des_file = "C:/Users/machenike/Documents/GitHub/bysj/server/public/myImage/" + req.files[0].originalname;
        fs.readFile(req.files[0].path, function (err, data) {
            fs.writeFile(des_file, data, function (err) {
                if (err) {
                    console.log(err);
                    return;
                }
                var obj = req.body;
                console.log('obj')
                console.log(obj)
                obj.pic = 'http://127.0.0.1:8083/myImage/' + req.files[0].originalname
                var sellProduct = new SellProduct(obj)
                sellProduct.save(function (err, doc) {
                    if (!err) {
                        console.log('向收藏商品列表中添加一条新商品', doc)
                        res.json({ 'success': true, message: "收藏成功" })
                        return
                    } else {
                        console.log(err)
                        res.json({ 'error': true, message: '收藏失敗' })
                        return
                    }
                })
            });
        });
        
    },
    updateProduct(req, res) {
        if (req.body.id) {
            SellProduct.findOne({ '_id': req.body.id })
                .exec(function (err, sellProduct) {
                    if (err) { console.log(err); res.json({ error: true, message: '删除失败:数据库查询错误' }); return }
                    if (!sellProduct) { res.json({ error: true, message: '删除失败:没有该商品' }); return }
                    var valueList = ["name","buyPrice","sellPrice","address"]
                    valueList.forEach((value,index) => {
                        if(req.body[value]){
                            sellProduct[value] = req.body[value]
                        }
                    })
                    sellProduct.save(function (err, doc) {
                        if (err) { res.json({ error: true, message: '删除失败:数据库删除数据出错' }); return }
                        res.json({ success: true, data: {} })
                        return
                    })
                })
        } else {
            res.json({ 'error': true, message: '添加订单失敗' })
        }
    },
    removeProduct(req, res) {

        if (req.body.id) {
            SellProduct.findOne({ '_id': req.body.id })
                .exec(function (err, collectionProduct) {
                    if (err) { console.log(err); res.json({ error: true, message: '删除失败:数据库查询错误' }); return }
                    if (!collectionProduct) { res.json({ error: true, message: '删除失败:没有查询到该商品' }); return }
                    collectionProduct.remove(function (err) {
                        if (err) { res.json({ error: true, message: '删除失败:数据库删除数据出错' }); return }
                        res.json({ success: true, data: {} })
                        return
                    })
                })
        } else {
            res.json({ 'error': true, message: '没有商品id' })
        }
    },
    getProducts(req, res) {
        SellProduct.find({}).limit(10)
            .exec(function (err, pros) {
                if (err) { res.json({ error: true, message: '查询失败:数据库查询错误' }); return }
                console.log('请求数据')
                console.log(pros)
                res.json({
                    success: true, data: {
                        sellProducts: pros
                    }
                })
            })
    },
}


module.exports = {
    verg(req, res) {
        console.log('调用了注册接口')
        if (req.body.number && req.body.pass) {
            Seller.findOne({ 'number': req.body.number })
                .exec(function (err, seller) {
                    if (err) { console.log(err); res.json({ 'error': true, message: '注册失败:数据库错误' }); return }
                    if (seller) {
                        res.json({ 'error': true, message: "账号已存在" })
                        return
                    }
                    var seller = new Seller({ 'number': req.body.number });
                    seller.set('pass', hashPW(req.body.pass));
                    seller.save(function (err) {
                        if (!err) {
                            res.json({ 'success': true, message: "注册成功" })
                            return
                        } else {
                            res.json({ type: 1 })
                            console.log(err);
                        }
                    })
                })
        } else {
            res.json({ 'error': true, message: "注册失败" })
            return
        }

    },
    login(req, res) {
        console.log('调用了登陆接口')
        console.log(req.body)
        if (req.body.number && req.body.pass) {
            Seller.findOne({ 'number': req.body.number })
                .exec(function (err, seller) {
                    if (err) { console.log(err); res.json({ 'error': true, message: '注册失败:数据库错误' }).end(); return }
                    if (!seller) {
                        res.json({
                            'error': true,
                            message: '登陆失败:用户不存在'
                        })
                        return;
                    }
                    console.log('发送token')
                    res.json({
                        'success': true, data: {
                            token: getToken(req.body.number, req.body.pass),
                        }
                    })
                    return

                })
        } else {
            res.json({
                error: true,
                message: '用户名和密码不能为空'
            })
            return
        }

    },
    addProduct(req, res) {
        console.log('调用了添加商品接口')
        if (!req.body.token) {
            res.json({ error: true, message: '无效用户token' })
            return
        } else {
            console.log(req.body.data);
            /*
            var product = new Product({ 'sellerNumber': getNumber(req.body.token) });
            product.set('name', req.body.data.name)
            product.set('pic', req.body.data.pic)
            product.set('buyPrice', req.body.data.buyPrice)
            product.set('sell', req.body.data.sellPrice)
            product.set('address',req.body.data.address)
            product.set('isBaoyou',req.body.data.isBaoyou)
            product.set('intro',req.body.data.intro) */
            let obj = {}
            let data = JSON.parse(req.body.data)
            for (let name in data) {
                obj[name] = data[name]
            }
            console.log(obj)
            var product = new Product(obj)
            product.save(function (err, doc) {
                if (!err) {
                    console.log('添加一条商品', doc)
                    res.json({ 'success': true, message: "添加商品成功" })
                    return
                } else {
                    console.log(err)
                    res.json({ 'error': true, message: '添加商品失敗' })
                    return
                }
            })
        }

    },
    removeProduct(req, res) {
        console.log('调用了删除商品接口')
        if (!req.body.token) {
            res.json({ error: true, message: '无效用户token' });
            return
        } else {
            Product.find({ 'sellerNumber': getNumber(req.body.token), '_id': req.body.id })
                .exec(function (err, pro) {
                    if (err) { res.json({ error: true, message: '删除失败:数据库查询错误' }); return }
                    if (!pro) { res.json({ error: true, message: '删除失败:没有该商品' }); return }
                    pro.remove(function (err) {
                        if (err) { res.json({ error: true, message: '删除失败:数据库删除数据出错' }); return }
                        res.json({ success: true, data: {} })
                        return
                    })
                })
        }

    },
    updateProduct(req, res) {
        console.log('调用了更新商品接口')
        if (!req.body.token) {
            res.json({ error: true, message: '无效用户token' }).end();
            return
        } else {
            Product.findOne({ 'sellerNumber': getNumber(req.body.token), '_id': req.body.id })
                .exec(function (err, pro) {
                    if (err) { res.json({ error: true, message: '删除失败:数据库查询错误' }); return }
                    if (!pro) { res.json({ error: true, message: '删除失败:没有该商品' }); return }
                    for (let name in req.body.data) {
                        pro.set(name, req.body.data[name])
                    }
                    pro.save(function (err) {
                        if (err) { res.json({ error: true, message: '修改失败:数据库保存错误' }); return }
                        res.json({ success: true, data: {} })
                        return;
                    })
                })
        }

    },
    getProducts(req, res) {
        console.log('请求接口getProducts')
        if (!req.body.token) {
            res.json({ error: true, message: '无效用户token' });
            return
        } else {
            Product.find({ 'sellerNumber': getNumber(req.body.token) }).limit(10)
                .exec(function (err, pros) {
                    if (err) { res.json({ error: true, message: '删除失败:数据库查询错误' }); return }
                    res.json({
                        success: true, data: {
                            products: pros
                        }
                    })
                })
        }

    },
    addBuyProduct: BuyProductController.addBuyProduct,
    removeBuyProduct: BuyProductController.removeBuyProduct,
    getBuyProducts: BuyProductController.getBuyProducts,

    /**订单接口 */
    addOrder: OrderController.addOrder,
    fahuoOrder: OrderController.fahuoOrder,
    removeOrder: OrderController.removeOrder,
    getOrders: OrderController.getOrders,
    updateOrder: OrderController.updateOrder,

    /** 收藏商品接口 */
    addCollectionProduct: CollectionProductController.addProduct,
    removeCollectionProduct: CollectionProductController.removeProduct,
    getCollectionProducts: CollectionProductController.getProducts,

    /** 收藏店铺接口 */
    addCollectionShop: CollectionShopController.addShop,
    removeCollectionShop: CollectionShopController.removeShop,
    getCollectionShops: CollectionShopController.getShops,

    /** 库存管理接口 */
    addStorageProduct: StorageProductController.addProduct,
    removeStorageProduct: StorageProductController.removeProduct,
    updateStorageProduct: StorageProductController.updateProduct,
    getStorageProducts: StorageProductController.getProducts,

    /** 商品管理接口 */
    addSellProduct: SellProductController.addProduct,
    removeSellProduct: SellProductController.removeProduct,
    getSellProducts: SellProductController.getProducts,
    updateSellProduct: SellProductController.updateProduct
}


