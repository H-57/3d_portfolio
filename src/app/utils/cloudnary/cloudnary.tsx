
import { writeFile,unlink } from 'fs/promises';
import {v2 as cloudinary} from 'cloudinary';


          
cloudinary.config({ 
  cloud_name: process.env.cloud_name, 
  api_key:process.env.api_key, 
  api_secret:process.env.api_secret
});

const fileUpload=async(file:File)=>{
const byteData=await file.arrayBuffer();
const buffer=await Buffer.from(byteData);
let path=`./public/${file.name}`;
console.log(path)
await writeFile(path,buffer);

const url= (await cloudinary.uploader.upload(path)).secure_url
unlink(path);
return url;
}



export   {fileUpload}