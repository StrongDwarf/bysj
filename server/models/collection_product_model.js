var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// 收藏商品
var CollectionProductSchema = new Schema({
    shopName:{
        type:String
    },
    shopIcon:{
        type:String
    },
    shopId:{
        type:String
    },
    productId:{
        type:String
    },
    productImg:{
        type:String
    },
    title:{
        type:String
    },
    location:{
        type:String
    },
    price:{
        type:String
    },
    count:{
        type:Number
    },
});
mongoose.model('CollectionProduct',CollectionProductSchema)