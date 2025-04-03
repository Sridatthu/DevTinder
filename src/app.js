const express=require("express")
const  connectDB=require("./config/database")
const app=express();
const User=require("./models/user")

app.post("/signup",async (req,res)=>{
    const user=new User({
        firstName:"virat",
        lastName:"kohli",
        emailId:"virat@gmail.com",
        password:"virat@123",
    });
    try{
        await user.save();
        res.send("user saved successfully");
    }catch(err){
res.status(400).send("errror saving")
    }
});
connectDB().
    then(()=>{
        console.log("database connected");
        app.listen(7777,()=>{    console.log("server is running on port 7777");
    
        });
        
    }).catch((err)=>{
        console.error("db not connected")
    })

