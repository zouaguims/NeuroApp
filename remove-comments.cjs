const fs = require('fs');
let code = fs.readFileSync('src/data/bases.ts', 'utf8');

code = code.replace(/\{\/\*.*?\*\/\}/g, '');
fs.writeFileSync('src/data/bases.ts', code);
