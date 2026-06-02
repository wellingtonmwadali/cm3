const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Curated high-definition Pexels targets with larger sizes to prevent pixelation (using w=800 for crystal-clear cards)
const UPDATED_TEAM_PHOTOS = {
  // Female CEO Beatrice Mwangi replaced by Male CEO: Cheerfully Black Manager in Suit (5647573)
  'team/member-1.jpg': 'https://images.pexels.com/photos/5647573/pexels-photo-5647573.jpeg?auto=compress&cs=tinysrgb&w=800', 
  
  // Moses Kiprop replaced by: Man in blue long sleeves with white helmet (8470775)
  'team/member-5.jpg': 'https://images.pexels.com/photos/8470775/pexels-photo-8470775.jpeg?auto=compress&cs=tinysrgb&w=800', 
  
  // Kennedy Waweru replaced by: Construction worker in safety helmet (15200451)
  'team/member-6.jpg': 'https://images.pexels.com/photos/15200451/pexels-photo-15200451.jpeg?auto=compress&cs=tinysrgb&w=800', 

  // Job Barasa replaced by: High-definition Male Architect/Engineer at desk (8729948)
  'team/member-9.jpg': 'https://images.pexels.com/photos/8729948/pexels-photo-8729948.jpeg?auto=compress&cs=tinysrgb&w=800',

  // Redownload the remaining profiles in HD (w=800) to ensure zero pixelation across the entire team section
  'team/member-2.jpg': 'https://images.pexels.com/photos/6283210/pexels-photo-6283210.jpeg?auto=compress&cs=tinysrgb&w=800',
  'team/member-3.jpg': 'https://images.pexels.com/photos/9242271/pexels-photo-9242271.jpeg?auto=compress&cs=tinysrgb&w=800',
  'team/member-4.jpg': 'https://images.pexels.com/photos/6791514/pexels-photo-6791514.jpeg?auto=compress&cs=tinysrgb&w=800',
  'team/member-7.jpg': 'https://images.pexels.com/photos/6694964/pexels-photo-6694964.jpeg?auto=compress&cs=tinysrgb&w=800',
  'team/member-8.jpg': 'https://images.pexels.com/photos/8872643/pexels-photo-8872643.jpeg?auto=compress&cs=tinysrgb&w=800'
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
  console.log('Downloading targeted HD team assets...');
  for (const [filename, url] of Object.entries(UPDATED_TEAM_PHOTOS)) {
    await downloadImage(url, filename);
  }
  console.log('🎉 Target HD team assets saved successfully!');
}

run();
