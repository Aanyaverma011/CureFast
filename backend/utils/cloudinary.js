import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

console.log("CLOUDINARY ENV:", {
  cloud: process.env.CLOUDINARY_CLOUD_NAME,
  key: process.env.CLOUDINARY_API_KEY,
});

cloudinary.config({
cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(filePath, folder = "Doctor") {
    try{
const result = await cloudinary.uploader.upload(filePath, {
folder,
resource_type: "image"
});

fs.unlinkSync(filePath);
return result;
    }
    catch(err){
console.log("cloudinary upload error:", err);
        throw err;
    }
}

export async function deleteFromCloudinary(publicId) {
    try{
if(!publicId) return;
await cloudinary.uploader.destroy(publicId);
    }
    catch(err){
      console.log("cloudinary delete error:", err);
        throw err;  
    }
}

export default cloudinary;