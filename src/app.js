const express=require("express")

const app=express();

app.use("/test",(req,res)=>{
    res.send("test routing");
});

app.get("/user",(req,res)=>{
    res.send({firstname:"sri",lastname:"datthu"})
})
app.post("/user",(req,res)=>{
    res.send("posted sucessfully")
})

app.patch("/user",(req,res)=>{
    res.send("patch sucesss")
})
app.delete("/user",(req,res)=>{
    res.send("delete sucesss")
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
});
