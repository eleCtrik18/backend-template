const router = require('express').Router()
const Trade = require("../model/Trade");

var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }))


router.get('/',(req,res)=>{
    Trade.find({},function(err,data){
        if(err)
        console.log(err)
        else
        res.json(data);
    })
})


router.patch("/accept",(req,res)=>{
    console.log(req.params)
    var id = req.body.id;
    var hexCode = req.body.hexCode;
    console.log(id,hexCode);
    Trade.findOne({_id : id},(err,data)=>{
        if(err)
        {
        console.log(err);
        res.status(400);
        }
        else
        {
            data.hexCode = hexCode?hexCode:data.hexCode
            data.save((err)=>{
                if(err)
                console.log(err)
            })
            res.status(200).send("Patch Succesfull");
        }
        
       

    })

})




module.exports = router