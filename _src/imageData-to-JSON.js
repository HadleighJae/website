const fs = require('fs');
const path = require('path');
const imagesFolder = './img';

function imageToJson(imagesFolder) {
    const imageFiles = fs.readdirSync(imagesFolder);

    const imageData = imageFiles.map(file => {
        const filePath = path.join(imagesFolder, file).replace(/\\/g, '/');
        const extname = path.extname(filePath);

        if (extname === '.jpg' || extname === '.jpeg' || extname === '.png') {
            const imageObject = {
                filename: file,
                filepath: filePath
            };

            // Check if the filename contains "terrocotta"
            if (file.toLowerCase().includes('terrocotta')) {
                imageObject.desc = 'terrocotta';
            }

            // Check if the filename contains "corpus"
            if (file.toLowerCase().includes('corpus')) {
                imageObject.desc = 'corpus';
            }

            // Check if the filename contains "space"
            if (file.toLowerCase().includes('space')) {
                imageObject.desc = 'space';
            }

            return imageObject;
        }
    }).filter(Boolean); // Remove nullish values

    const jsonData = JSON.stringify(imageData, null, 2);
    console.log(jsonData);

    // To write to a file:
    fs.writeFileSync('_data/image_metadata.json', jsonData);
}

imageToJson(imagesFolder);