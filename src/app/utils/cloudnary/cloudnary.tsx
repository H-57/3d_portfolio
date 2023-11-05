
import { writeFile } from 'fs/promises'
import {v2 as cloudinary} from 'cloudinary';


          
cloudinary.config({ 
  cloud_name: process.env.cloud_name, 
  api_key:process.env.api_key, 
  api_secret:process.env.api_secret
});

const fileUpload=async(file:any)=>{
  
    const byteData=await file.arrayBuffer();
const buffer=await Buffer.from(byteData);

let path=`/tmp/${file.name}`
await writeFile(path, buffer)
let imageUrl;
//  cloudinary.uploader.upload_stream(
//   { resource_type: 'auto' },
//   async(error, result) => {
//     if (error) {
//       console.error('Error uploading to Cloudinary:', error);
     
//     } else {
//      imageUrl=await result?.secure_url
//      console.log(imageUrl,"in");
//     }
//   }
// ).end(buffer);

console.log(path)


}



export   {fileUpload}