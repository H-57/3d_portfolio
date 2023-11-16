import mongoose from "mongoose";

const emailSchema=new mongoose.Schema({

   

name:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true
},
    message:{
        type:String,
    }



},{timestamps:true})

export  const email=mongoose.models.email||mongoose.model("email",emailSchema);