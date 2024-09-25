import {createCanvas, loadImage} from 'canvas';
import {fileURLToPath} from 'url';
import filters from './index.js';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filtrer = async (imagePath, filterName) => {
    try {
        const image = await loadImage(imagePath);
        const canvas = createCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');

        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const filteredImageData = filters[filterName](imageData);

        ctx.putImageData(filteredImageData, 0, 0);

        const outputPath = path.join(__dirname, `${filterName}_filtered_image.jpg`);
        canvas.createJPEGStream().pipe(fs.createWriteStream(outputPath));
    } catch (error) {
        console.error(`Erreur d'application du filtre : ${filterName} :`, error);
    }
};

// Usage
const imagePath = path.join(__dirname, '/pic_trulli.jpg');
filtrer(imagePath, 'grayscale');
filtrer(imagePath, 'invert');