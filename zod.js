const express = require("express")
const zod = require("zod")
const app = express()

app.use(express.json()) //Express needs express.json() middleware to parse the incoming JSON request bodies.

function validate(obj){
    const schema = zod.object({
        "email" : zod.string().email(),
        "password": zod.string().min(8)
    })
    const response = schema.safeParse(obj)
    return response
}

app.post("/user",function(req,res){
    const user_obj = req.body;
    console.log(user_obj);
    const isvalid = validate(user_obj);
    console.log(isvalid);
    if(isvalid.success){
        res.status(200).json({
            "msg" : "WonderFull Day a head"
        })
    }
    else{
        res.status(404).json({
            "msg" : "Error in user credentials"
        })
    }
})

app.listen(3000)