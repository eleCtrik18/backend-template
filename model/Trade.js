const mongoose= require("mongoose");


const tradeSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true

    },
    hexCode : {
        type : String,
        required : true
    }
})


module.exports = mongoose.model('Trade',tradeSchema);



