// const cloudinary = require('cloudinary').v2;


// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadImageToCloudinary = async (imageData) => {
//   try {
//     const result = await cloudinary.uploader.upload(imageData, {
//       folder: 'chat_images/', 
//     });
//     return result.secure_url; 
//   } catch (error) {
//     console.error('Error uploading image to Cloudinary:', error);
//     throw error; 
//   }
// };

// module.exports = uploadImageToCloudinary;