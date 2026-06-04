const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Target Pexels images requested by the user for the fleet section
const FLEET_HD_PHOTOS = {
  'fleet/concrete-mixer.jpg': 'https://images.pexels.com/photos/12032991/pexels-photo-12032991.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'fleet/grader.jpg': 'https://images.pexels.com/photos/10643009/pexels-photo-10643009.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'fleet/crawler-excavator.jpg': 'https://images.pexels.com/photos/11825548/pexels-photo-11825548.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'fleet/storage-yard.jpg': 'https://images.pexels.com/photos/24244234/pexels-photo-24244234.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'fleet/dumper.jpg': 'https://images.pexels.com/photos/1145465/pexels-photo-1145465.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'fleet/backhoe.jpg': 'https://images.pexels.com/photos/32917662/pexels-photo-32917662.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'fleet/tipper-truck.jpg': 'https://images.pexels.com/photos/36656998/pexels-photo-36656998.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'fleet/haulage-fleet.jpg': 'https://images.pexels.com/photos/30344500/pexels-photo-30344500.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'fleet/auxiliary-mixer.jpg': 'https://images.pexels.com/photos/9485313/pexels-photo-9485313.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'fleet/roller.jpg': 'https://images.pexels.com/photos/37125642/pexels-photo-37125642.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'fleet/gravel-fleet.jpg': 'https://images.pexels.com/photos/27627498/pexels-photo-27627498.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'fleet/block-maker.jpg': 'https://images.pexels.com/photos/36657004/pexels-photo-36657004.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

const BASE_DIR = path.join(__dirname, 'public', 'assets', 'images');

async function downloadImage(url, filename) {
  const destPath = path.join(BASE_DIR, filename);
  console.log(`Downloading High-Definition Asset: ${url} -> ${destPath}`);
  
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
  console.log('Downloading targeted HD fleet assets...');
  for (const [filename, url] of Object.entries(FLEET_HD_PHOTOS)) {
    await downloadImage(url, filename);
  }
  console.log('🎉 Target HD fleet assets saved successfully!');
}

run();
