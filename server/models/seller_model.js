var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var SellerSchema = new Schema({
	number:{
		type:String,
		unique:true,
		index:1
    },
    name:{
        type:String
    },
    pic:{
        type:String
    },
    pass:{
        type:String
    }

});
mongoose.model('Seller',SellerSchema)