import mongoose from "mongoose";

const projectCardSchema=new mongoose.Schema({
image:{
    type:String,
   
},
live:String,
github:String,
title:{
    type:String,
    require:[true,"please provide title"]
},
points:[String],
category:String,
tech:[String],
desc:{
    type:String,
    require:[true,"please provide description"]
}

})

export  const ProjectModel=mongoose.models.projectCard||mongoose.model("projectCard",projectCardSchema);