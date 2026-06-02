const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Target Pexels images requested by the user
const PORTFOLIO_HD_PHOTOS = {
  // Technical University of Kenya
  'portfolio/tuk-1.jpg': 'https://images.pexels.com/photos/33639865/pexels-photo-33639865.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/tuk-2.jpg': 'https://images.pexels.com/photos/13440917/pexels-photo-13440917.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/tuk-3.jpg': 'https://images.pexels.com/photos/34494500/pexels-photo-34494500.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/tuk-4.jpg': 'https://images.pexels.com/photos/16173473/pexels-photo-16173473.jpeg?auto=compress&cs=tinysrgb&w=1200',

  // Ministry of Public Works
  'portfolio/mpw-1.jpg': 'https://images.pexels.com/photos/938582/pexels-photo-938582.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/mpw-2.jpg': 'https://images.pexels.com/photos/17863526/pexels-photo-17863526.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/mpw-3.jpg': 'https://images.pexels.com/photos/27916971/pexels-photo-27916971.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/mpw-4.jpg': 'https://images.pexels.com/photos/26985331/pexels-photo-26985331.jpeg?auto=compress&cs=tinysrgb&w=1200',

  // Maasai Mara University
  'portfolio/mmu-1.jpg': 'https://images.pexels.com/photos/12610212/pexels-photo-12610212.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/mmu-2.jpg': 'https://images.pexels.com/photos/27276249/pexels-photo-27276249.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/mmu-3.jpg': 'https://images.pexels.com/photos/20139116/pexels-photo-20139116.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/mmu-4.jpg': 'https://images.pexels.com/photos/4212740/pexels-photo-4212740.jpeg?auto=compress&cs=tinysrgb&w=1200',

  // Coffee Research Institute, Ruiru
  'portfolio/cri-1.jpg': 'https://images.pexels.com/photos/36938791/pexels-photo-36938791.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/cri-2.jpg': 'https://images.pexels.com/photos/28575483/pexels-photo-28575483.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/cri-3.jpg': 'https://images.pexels.com/photos/8442105/pexels-photo-8442105.jpeg?auto=compress&cs=tinysrgb&w=1200',

  // CID Training, South C
  'portfolio/cid-1.jpg': 'https://images.pexels.com/photos/11968733/pexels-photo-11968733.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/cid-2.jpg': 'https://images.pexels.com/photos/35007534/pexels-photo-35007534.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/cid-3.jpg': 'https://images.pexels.com/photos/12196660/pexels-photo-12196660.jpeg?auto=compress&cs=tinysrgb&w=1200',

  // Wang'uru International Stadium, Kirinyaga
  'portfolio/stadium-1.jpg': 'https://images.pexels.com/photos/6295431/pexels-photo-6295431.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/stadium-2.jpg': 'https://images.pexels.com/photos/33654888/pexels-photo-33654888.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'portfolio/stadium-3.jpg': 'https://images.pexels.com/photos/16902034/pexels-photo-16902034.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
  console.log('Downloading targeted HD portfolio assets...');
  for (const [filename, url] of Object.entries(PORTFOLIO_HD_PHOTOS)) {
    await downloadImage(url, filename);
  }
  console.log('🎉 Target HD portfolio assets saved successfully!');
}

run();
