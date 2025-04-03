const mongoose=require("mongoose")
const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://sridatthu18:SdsYpijjvjzmlSJy@sridatthu18.wxpmkkn.mongodb.net/devTinder")
}
module.exports=connectDB;
