import mongoose from "mongoose"
const uri=process.env.MONGODB_URI!

export const dbConnection=()=>{
    try {if(!uri){
        console.log("env of db not found");
    }else{
    
        mongoose.connect(uri).then(()=>console.log("connected to db success")).catch((e)=>console.log("not connected",e))
    }
    } catch (error) {
        console.log(error);
    }
}

