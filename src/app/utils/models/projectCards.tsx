import mongoose from "mongoose";

const projectCardSchema=new mongoose.Schema({
image:{
    type:String,
   
},
title:{
    type:String,
    require:[true,"please provide title"]
},
desc:{
    type:String,
    require:[true,"please provide description"]
}

})

export  const ProjectModel=mongoose.models.projectCard||mongoose.model("projectCard",projectCardSchema);