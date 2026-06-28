const fs = require('fs');
let code = fs.readFileSync('src/data/bases.ts', 'utf8');

const regex = /<\/div>`text\nPeau \n ↓\nSous-cutané \n ↓\nLigament sur-épineux \n ↓\nLigament inter-épineux \n ↓\nLIGAMENT JAUNE \(Lieu de la "perte de résistance"\) \n ↓\nEspace Épidural \n ↓\nDure-Mère \(POP!\) \n ↓\nEspace Sous-Arachnoïdien \(Le LCS coule goutte à goutte\)\n\\`\\`\\`/g;

code = code.replace(regex, '</div>');

fs.writeFileSync('src/data/bases.ts', code);
