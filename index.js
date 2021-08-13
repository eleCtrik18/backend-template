const express = require('express')
const app = express();
const mongoose  = require('mongoose');


//Import Middlewares
const tradeRoutes = require("./routes/trade")
const tradeDetailRoutes = require("./routes/tradeDetails");



mongoose.connect('mongodb://localhost:27017/tradeTest',{useNewUrlParser: true, useUnifiedTopology: true},()=>{console.log("Connected to Data Base")} );


app.use('/api/trade',tradeRoutes)
app.use("/api/tradeDetails",tradeDetailRoutes)

app.patch("/accept/",(req,res)=>{
    
    console.log(req.params)
    var id = req.body.id;
    var hexCode = req.body.hexCode;
    console.log(id,hexCode);
   

})


app.listen(3000,()=>{
    console.log("Server Up and Running")
})