import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

// const uploadOnCloudinary = async (localFilePath) => {
//     try{
//         if ( !localFilePath) return null;
//         //upload the file on cloudinary
//         cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto"
//         })

//         //file has been uploaded successfully
//         console.log("file is uploaded successfully", response.url)
//         return response;
//     }
//     catch (err){
//         fs.unlinkSync(localFilePath)   // removed the locally saved temporary files as the upload got failed
//         return null;
//     }
// }

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        
        // Upload the file on Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // File has been uploaded successfully
        // console.log("File is uploaded successfully", response.url);
        fs.unlinkSync(localFilePath);
        return response;
    } catch (err) {
        fs.unlinkSync(localFilePath); // Remove the locally saved temporary files as the upload failed
        console.error("Failed to upload file to Cloudinary:", err);
        return null;
    }
};


export {uploadOnCloudinary}