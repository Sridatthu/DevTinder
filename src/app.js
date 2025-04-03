const express=require("express")

const app=express();

app.use("/admin",(req,res,next)=>{
    const token="xyz";
    if(token==="xyz"){
        console.log("verified")
        next()
    }
    else{
        res.send("Unauthorized")
    }
})
app.get("/admin/getUser",(req,res)=>{
    res.send("getUser")
})
app.get("/admin/deleteUser",(req,res)=>{
    res.send("deleteUser")
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
});
