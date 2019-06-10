var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// 仓库中的产品model
var StorageProductSchema = new Schema({
    // 商品id
    productId:{
        type:String
    },
    // 商品图片
    productImg:{
        type:String
    },
    // 商品名
    title:{
        type:String
    },
    // 仓库地址
    location:{
        type:String
    },
    // 数量
    count:{
        type:Number
    },
    // 入库时间
    startTime:{
        type:String
    },
    //更新时间
    updateTime:{
        type:String
    }
});
mongoose.model('StorageProduct',StorageProductSchema)