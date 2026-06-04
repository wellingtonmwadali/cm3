const axios = require('axios');
const fs = require('fs');
const path = require('path');

const SECURE_PORTFOLIO_IMAGES = {
  // Wang'uru International Stadium (Pexels Stable URL)
  'portfolio/stadium-1.jpg': 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=600'
};

const BASE_DIR = path.join(__dirname, 'public', 'assets', 'images');

async function downloadImage(url, filename) {
  const destPath = path.join(BASE_DIR, filename);
  console.log(`Downloading Context-Safe Asset: ${url} -> ${destPath}`);
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(destPath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Failed to download fallback ${filename}:`, error.message);
  }
}

async function run() {
  console.log('Resolving context-safe portfolio assets...');
  for (const [filename, url] of Object.entries(SECURE_PORTFOLIO_IMAGES)) {
    await downloadImage(url, filename);
  }
  console.log('🎉 Portfolio asset correction completed successfully!');
}

run();
