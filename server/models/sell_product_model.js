var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// 卖家商品管理中出现的商品
var SellProductSchema = new Schema({
    name:{
        type:String
    },
    buyPrice:{
        type:String
    },
    sellPrice:{
        type:String
    },
    pic:{
        type:String
    },
    isBaoyou:{
        type:String
    },
    address:{
        type:String
    },
});
mongoose.model('SellProduct',SellProductSchema)