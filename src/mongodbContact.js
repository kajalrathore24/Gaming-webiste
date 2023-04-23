const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/LoginSignup")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const ContactUsSchema=new mongoose.Schema({
    cname:{
        type:String,
    },
    cemail:{
        type:String,
    },
    subject:{
        type:String,
    }
})

const collection2=new mongoose.model("ContactUs",ContactUsSchema)

module.exports=collection2