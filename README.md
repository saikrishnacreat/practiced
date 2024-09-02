Middlewares , Globalcatches, zod and authentication.

# Middlewares are used to check whether the user is valid or not and also used to check authentication of user.

With out middlewares we have to repeat the DRY so we its better to use middlewares

we can use middlewares in routes ex: app.get("/",usermiddleware,(req,res)=>{
  //Do some logic if user is real
})

if we have multiple routes and have to use middleware in every route then above the first route use "app.use(usermiddleware)" it will be applied for every route.

# Global Catches will take care of the errors which will helps to not stop the program suddenly. 
Global catches are defined at the end of the code the syntax looks like

app.use(function(err,req,res,next){
  res.send(400).json({
    "msg" : "Sorry something is wrong"  
  })
})
- Global catches are also called as error-handling middlewares.
# Zod is an input validation library for node.js and express it is used to validate the inputs given by user.
