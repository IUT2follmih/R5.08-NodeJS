import { LoremIpsum } from 'lorem-ipsum';
import fs from 'node:fs';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

fs.writeFile('monFichier.txt', lorem.generateParagraphs(3), (err) => {
    if (err) throw err;
    console.log("Fichier sauvegardé");
});
