const fs = require('fs');
let code = fs.readFileSync('src/data/bases.ts', 'utf8');

const targetStart = '<div class="my-8 flex justify-center not-prose">';
const targetEnd = '</div>\n\n> 🚨 **VITAL';

const startIdx = code.indexOf(targetStart);
if (startIdx !== -1) {
    const endIdx = code.indexOf(targetEnd);
    if (endIdx !== -1) {
        let replacement = '{{AIGUILLE_ILLUSTRATION}}';
        code = code.substring(0, startIdx) + replacement + '\n\n> 🚨 **VITAL' + code.substring(endIdx + targetEnd.length);
        fs.writeFileSync('src/data/bases.ts', code);
        console.log("Replaced with tag!");
    } else {
        console.log("End not found");
    }
} else {
    console.log("Start not found");
}
