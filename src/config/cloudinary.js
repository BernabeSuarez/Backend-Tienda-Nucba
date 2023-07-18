import cloudinary from 'cloudinary'
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

export async function uploadImage(filePath) {

    return await cloudinary.uploader.upload(filePath)

}
