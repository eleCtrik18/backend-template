const router = require('express').Router()
const TradeDetail = require("../model/TradeDetail");
const Trade = require('../model/Trade');

var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }))

router.get('/',(req,res)=>{
    TradeDetail.find({},(err,data)=>{
        if(err)
        console.log(err);
        else
        res.json(data)
    })
    
})

router.get("/confirm",(req,res)=>{
     var id1 = req.body.id1;
     var id2 = req.body.id2;
     Trade.findOne({_id : id1},(err,data1)=>{
         if(err)
         console.log(err)
         else
         {
             Trade.findOne({_id :id2},(err,data2)=>{
                 if(err)
                 console.log(err)
                 else
                 {
                     if(data1.hexCode === data2.hexCode)
                     {
                        const newTrade = new TradeDetail({
                            id1 : id1 ,
                            id2 : id2 ,
                            confirm : true ,
                            verify : false 
                        }) 
                        newTrade.save(err=>{
                            if(err)
                            console.log(err);
                        })
                        res.send("Trade Succesful and Confirmed .Proceed to Verify")

                     }
                     else{
                         res.send("Trade Unsuccesfull. Either of the two Parties didnt agree.").status(404);
                     }
                     
                 }
             })
         }
     })
})


router.get("/verify",(req,res)=>{
    var id = req.body.id;
    TradeDetail.findOne({_id:id},(err,data)=>{
        if(err)
        console.log(err)
        else
        {
            
            if(data.confirm)
            {
                console.log(data.confirm)
              data.verified = true;
            data.save(err=>{
                if(err)
                console.log(err);
             })
             res.send("Trade Confirmed and Verified")
            }
            else{
                res.send("Trade not confirm . Please confirm the Trade ")
            }
        }
    })
})









module.exports = router
