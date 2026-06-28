const https = require('https');
const fs = require('fs');

const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Blausen_0834_SpinalTap.png/800px-Blausen_0834_SpinalTap.png';
const dest = 'public/ponction-lombaire.png';

if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AIStudio/1.0' } }, (res) => {
  console.log('Status Code:', res.statusCode);
  if (res.statusCode === 200) {
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Image successfully downloaded to public/ponction-lombaire.png');
    });
  } else {
    console.error('Failed to download image:', res.statusCode);
  }
}).on('error', (err) => {
  console.error('Error:', err.message);
});
