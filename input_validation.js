const express = require("express")

const app = express()

app.use(express.json())

app.post("/health-checkup",function(req,res){
    const kidneys = req.body.kidneys
    // if(!kidneys){
    //     res.status(400).json({
    //         msg : "Please Check the inputs"
    //     })
    // }
    const kidneyLength  = kidneys.length;
    res.send("You have "+ kidneyLength+"kidneys")
})

app.use(function(err,req,res,next){
    res.json({
        msg : "Sorry something is up with our server"
    })
})

app.listen(3000)