const express=require("express")
const  connectDB=require("./config/database")
const app=express();
const User=require("./models/user")
app.use(express.json())

app.post("/signup",async (req,res)=>{
    const user=new User(req.body);
    try{
        await user.save();
        res.send("user saved successfully");
    }catch(err){
res.status(400).send("errror saving")
    }
});
app.post("/user",async (req,res)=>{
    const mail=req.body.emailId;
    console.log(req.body)
    const users=await User.find({emailId:mail});
    res.send(users)
    // res.send("hello")
})
app.delete("/user",async (req,res)=>{
    const id=req.body.userId;
    const users=await User.findByIdAndDelete({_id:id});
    res.send("user deleted")
    // res.send("hello")
})
app.patch("/user",async (req,res)=>{
    const id=req.body.userId;
    const data=req.body;
    const users=await User.findByIdAndUpdate({_id:id},data);
    res.send("user updated")
    // res.send("hello")
})
app.get("/feed",async (req,res)=>{
    
    const users=await User.find({});
    res.send(users)
    // res.send("hello")
})
connectDB().
    then(()=>{
        console.log("database connected");
        app.listen(7777,()=>{    console.log("server is running on port 7777");
    
        });
        
    }).catch((err)=>{
        console.error("db not connected")
    })

