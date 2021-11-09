var express=require('express');
var app=express();
var f1=(req,res,next)=>{
    console.log('this is 1st express.js');
    next()
}
var f2=(req,res,next)=>{
    console.log('this is 2nd express.js');
    next()
}
var f3=(req,res,next)=>{
    res.send('this is 3rd epress.js')
    next()
}
app.get('/',[f1,f2,f3])
app.listen(4500);