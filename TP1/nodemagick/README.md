# Node Magick

Node Magick est un utilitaire permettant d'ajouter des filtres sur des images.
Les filtres disponibles sont les suivants :

- Grayscale (ça transforme l'image en noir et blanc)
- Invert (ça inverse les couleurs de l'image)

## Installation

Pour installer Node Magick, il suffit de cloner le dépôt git et d'installer les dépendances :

```bash
npm install @iut2-info-stud/hugo-follmi-nodemagick
```

## Lancer nodemagick

```bash
npm run start
```

## Utilisation

### Appel de la methode :

Code :

    ```javascript

ou

```javascript
    import {createCanvas, loadImage} from 'canvas';
import filters from '../index.js';
import path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const applyFilter = async (imagePath, filterName) => {
    try {
        const image = await loadImage(imagePath);
        const canvas = createCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');

        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const filteredImageData = filters[filterName](imageData);

        ctx.putImageData(filteredImageData, 0, 0);

        const outputPath = path.join(__dirname, `${filterName}_output.jpg`);
        canvas.createJPEGStream().pipe(fs.createWriteStream(outputPath));
        console.log(`Image avec le filtre ${filterName} sauveguardÃ©e sous le nom : ${outputPath}`);
    } catch (error) {
        console.error(`Erreur en appliquant le filtre ${filterName} :`, error);
    }
};

// Usage
const imagePath = path.join(__dirname, '../pic_trulli.jpg');
applyFilter(imagePath, 'grayscale');
applyFilter(imagePath, 'invert');
```

Importer la methode `filter` du fichier `example.js` :

- imagePath : chemin de l'image à filtrer
- filterName : nom du filtre à appliquer

```javascript
const {filter} = require('@iut2-info-stud/hugo-follmi-nodemagick');

filtrer(imagePath, 'filterName');
```

ou

```bash
npm run exemple
```

### En passant par bin :

`FilterFilePath imagePath imageOutputPath`

Paramètres :

- FilterFilePath = chemin du fichier JS qui applique le filtre
- imagePath = chemin de l'image à filtrer
- imageOutputPath = chemin de l'image filtrée

```bash
./bin/grayscale.js ./pic_trulli.jpg ./pic_trulli_edited.jpg
```

## Build pour le web

```bash
npm run build
```