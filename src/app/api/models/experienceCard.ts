import mongoose from "mongoose";

const experienceCardSchema=new mongoose.Schema({
    icon:{
    type:String,
   
},
projectName:{
    type:String,
    require:true
},
company:{
    type:String,
    require:true
},
    date:{
        type:String,
    }
,

points:[String]


})

export  const ExperienceCard=mongoose.models.experienceCard||mongoose.model("experienceCard",experienceCardSchema);