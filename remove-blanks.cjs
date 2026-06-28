const fs = require('fs');
let code = fs.readFileSync('src/data/bases.ts', 'utf8');

const targetStart = '<div class="my-8 flex justify-center not-prose">';
const targetEnd = '</div>\n\n> 🚨 **VITAL';

const startIdx = code.indexOf(targetStart);
if (startIdx !== -1) {
    let endIdx = code.indexOf(targetEnd);
    if (endIdx !== -1) {
        let htmlBlock = code.substring(startIdx, endIdx);
        // Remove blank lines
        htmlBlock = htmlBlock.replace(/^\s*[\r\n]/gm, '');
        code = code.substring(0, startIdx) + htmlBlock + code.substring(endIdx);
        fs.writeFileSync('src/data/bases.ts', code);
        console.log("Blank lines removed!");
    }
}
