var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    res.send("Welcome to Express Hands on app")
})
var server=app.listen(3000,() =>{
var host=server.address().host
var port=server.address().port
console.log("example app listening at http://%s:%s",host,port)
})