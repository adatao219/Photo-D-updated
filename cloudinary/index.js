const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name,
    api_key,
    api_secret
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'photo:D',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

module.exports = {
    cloudinary,
    storage
}