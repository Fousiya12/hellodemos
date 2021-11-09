var express=require('express');
var app=express();
app.get('/about',function(req,res,next){
    console.log('the response will be sent by the next function')
    next()
},function(req,res,next){
   res.send("Express Hands on app")
   next()
},(req,res)=>{
    console.log("this is hands on app ")
})
app.listen(8000);