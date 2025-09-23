const  ImageKit = require("imagekit");

const  imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file, fileName){ //file is multer buffer.        
    const result = await imagekit.upload({
        file: file,  
        fileName: fileName
    })

    return result; //return url
}

module.exports = {
    uploadFile
}