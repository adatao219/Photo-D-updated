const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: 'dh05rqagx',
    api_key: '539587519536111',
    api_secret: '97caENEIR7dWz0TtQk8R7He0PoQ'
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