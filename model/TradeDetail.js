const mongoose= require("mongoose");

const tradedetailsSchema = new mongoose.Schema({
    id1 : {
        type : String,
        required : true
    },
    id2 : {
        type : String,
        required : true
    },
    confirm : {
        type : Boolean,
        default : false
    },
    verified : {
        type  : Boolean,
        default : false
    },
    date : {
         type : Date,
         default : Date.now()   
    }
})


module.exports = mongoose.model('TradeDetail',tradedetailsSchema);