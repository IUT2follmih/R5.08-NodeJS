#!/usr/bin/env node

import {createCanvas, loadImage} from 'canvas';
import {fileURLToPath} from 'url';
import filters from '../index.js';
import path from 'path';
import fs from 'fs';

const sourcePath = process.argv[2];
const targetPath = process.argv[3];

const filtrer = async (imagePath, filterName) => {
    try {
        const image = await loadImage(imagePath);
        const canvas = createCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');

        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const filteredImageData = filters[filterName](imageData);

        ctx.putImageData(filteredImageData, 0, 0);

        const outputPath = path.join(targetPath, `${filterName}_filtered_image.jpg`);
        canvas.createJPEGStream().pipe(fs.createWriteStream(targetPath));
        console.log(`Image with ${filterName} filter saved as ${targetPath}`);
    } catch (error) {
        console.error(`Erreur d'application du filtre : ${filterName} :`, error);
    }
};

// Usage
filtrer(sourcePath, 'grayscale');