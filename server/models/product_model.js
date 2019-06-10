var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var ProductSchema = new Schema({
    sellerNumber:{
        type:String,
    },
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
    intro:{
        type:String
    },

});
mongoose.model('Product',ProductSchema)