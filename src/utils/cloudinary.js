import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if ( !localFilePath) return null;
        //upload the file on cloudinary
        cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        //file has been uploaded successfully
        console.log("file is uploaded successfully", response.url)
        return response;
    }
    catch (err){
        fs.unlinkSync(localFilePath)   // removed the locally saved temporary files as the upload got failed
        return null;
    }
}

export {uploadOnCloudinary}