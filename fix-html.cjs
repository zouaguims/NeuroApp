const fs = require('fs');
let code = fs.readFileSync('src/data/bases.ts', 'utf8');

code = code.replace(/className=/g, 'class=');
code = code.replace(/style=\{\{ writingMode: 'vertical-rl' \}\}/g, 'style="writing-mode: vertical-rl;"');

fs.writeFileSync('src/data/bases.ts', code);
