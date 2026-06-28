import https from 'https';
import fs from 'fs';
import path from 'path';

const url = 'https://upload.wikimedia.org/wikipedia/commons/1/18/Blausen_0834_SpinalTap.png';
const publicDir = path.join(process.cwd(), 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const destPath = path.join(publicDir, 'ponction-lombaire.png');

console.log(`Downloading ${url}...`);

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  if (res.statusCode === 200) {
    const file = fs.createWriteStream(destPath);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Success! Saved to ' + destPath);
    });
  } else if (res.statusCode === 301 || res.statusCode === 302) {
      console.log('Redirected to: ' + res.headers.location);
       https.get(res.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res2) => {
           if(res2.statusCode === 200) {
              const file = fs.createWriteStream(destPath);
              res2.pipe(file);
              file.on('finish', () => {
                file.close();
                console.log('Success redirect! Saved to ' + destPath);
              });
           } else {
              console.log('Redirect failed with status: ' + res2.statusCode);
           }
       });
  } else {
    console.error('Failed with status: ' + res.statusCode);
  }
}).on('error', (err) => {
  console.error('Error: ' + err.message);
});
