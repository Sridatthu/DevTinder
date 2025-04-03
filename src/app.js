const express=require("express")

const app=express();

app.use("/test",[(req,res,next)=>{
    console.log("route 1");
    

    next();
},(req,res,next)=>{
    console.log("route 2")
next()
}],(req,res)=>{
    res.send("test 3")
});


app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
});
