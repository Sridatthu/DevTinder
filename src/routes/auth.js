const express=require("express")
const authRouter=express.Router();
const User = require("../models/user");
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken");
const {validatSignUpData, validateSignUpData}=require("../utils/validation")


authRouter.post("/login",async (req,res)=>{
    try{
const {emailId,password}=req.body;
const user= await User.findOne({emailId:emailId});
if(!user){
    throw new Error("!Invalid Credentilas");

}
const isPasswordValid=await user.validatePassword(password)
if (isPasswordValid) {
    const token=await user.getJWT();
    res.cookie("token",token,{
        expires:new Date(Date.now() + 8*3600000)
    })
    res.send("Login Successful!!!");
  } else {
    throw new Error("Invalid credentials");
  }
    }catch (err) {
        res.status(400).send("ERROR : " + err.message);
      }
})
authRouter.post("/signup", async (req, res) => {
  try {
validateSignUpData(req);
const {firstName,lastName,emailId,password}=req.body;
const passwordHash=await bcrypt.hash(password,10);
const user=new User({
    firstName,
    lastName,
    emailId,
    password:passwordHash
})

    await user.save();
    res.send("User Added successfully!");
  } catch (err) {
    res.status(400).send("Error :" + err.message);
  }
});

module.exports=authRouter;
