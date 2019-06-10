var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// 收藏店铺
var CollectionShopSchema = new Schema({
    shopName:{
        type:String
    },
    shopUrl:{
        type:String
    },

});
mongoose.model('CollectionShop',CollectionShopSchema)