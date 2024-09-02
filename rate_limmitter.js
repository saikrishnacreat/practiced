const express = require("express");
const app = express()
let numberOfrequests = 0;
function caluculateRequests(req,res,next){
    numberOfrequests++;
    console.log(numberOfrequests);
    next()
}
app.get("/health",caluculateRequests,(req,res)=>{
    res.status(200).json({msg:"Hiii there"})

})

app.get("/health2",caluculateRequests,(req,res)=>{
    res.status(200).json({msg : "Hiii there"})

})

app.listen(3000);