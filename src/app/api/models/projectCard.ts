import mongoose from "mongoose";

const projectCardSchema=new mongoose.Schema({
image:{
    type:String,
   
},
title:{
    type:String,
    require:true
},
desc:{
    type:String,
    require:true
}

})

export  const ProjectModel=mongoose.models.projectCard||mongoose.model("projectCard",projectCardSchema);