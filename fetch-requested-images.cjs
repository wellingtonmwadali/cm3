const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Curated target images mapped to their direct HD source URLs
const NEW_HOMEPAGE_IMAGES = {
  // Hero Carousel Slides
  'banners/slide-golden-gate.jpg': 'https://images.pexels.com/photos/26346362/pexels-photo-26346362.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'banners/slide-manhattan-bridge.jpg': 'https://images.pexels.com/photos/30007687/pexels-photo-30007687.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'banners/slide-bandra-worli.jpg': 'https://images.pexels.com/photos/37334796/pexels-photo-37334796.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'banners/slide-tower-bridge.jpg': 'https://images.pexels.com/photos/35284540/pexels-photo-35284540.jpeg?auto=compress&cs=tinysrgb&w=1600',

  // Welcome / Intro section right card graphic
  'banners/welcome-card.jpg': 'https://images.pexels.com/photos/30668362/pexels-photo-30668362.jpeg?auto=compress&cs=tinysrgb&w=800'
};

const BASE_DIR = path.join(__dirname, 'public', 'assets', 'images');

async function downloadImage(url, filename) {
  const destPath = path.join(BASE_DIR, filename);
  console.log(`Downloading: ${url} -> ${destPath}`);
  
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
    console.error(`Failed to download ${filename}:`, error.message);
  }
}

async function run() {
  console.log('Downloading targeted HD homepage assets...');
  for (const [filename, url] of Object.entries(NEW_HOMEPAGE_IMAGES)) {
    await downloadImage(url, filename);
  }
  console.log('🎉 Target assets saved successfully!');
}

run();
