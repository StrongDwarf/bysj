var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var BuyProductSchema = new Schema({
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
    }
});
mongoose.model('BuyProduct',BuyProductSchema)