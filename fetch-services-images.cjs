const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Curated high-definition Pexels targets with w=1200 for clean high-DPI rendering
const SERVICES_HD_PHOTOS = {
  // Our Project Engineering Services (Modern architectural shadows in Kuching - 36847592)
  'services/road-construction.jpg': 'https://images.pexels.com/photos/36847592/pexels-photo-36847592.jpeg?auto=compress&cs=tinysrgb&w=1200', 
  
  // Our Mechanical Engineering Services (Greyscale photography of car engine - 190574)
  'services/plant-hire.jpg': 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1200', 
  
  // Architectural Engineering Services (Low angle photo of staircase - 3425882)
  'banners/about-hero.jpg': 'https://images.pexels.com/photos/3425882/pexels-photo-3425882.jpeg?auto=compress&cs=tinysrgb&w=1200', 

  // Civil Engineering Services (Two people walking on a construction site - 8961261)
  'services/civil-engineering.jpg': 'https://images.pexels.com/photos/8961261/pexels-photo-8961261.jpeg?auto=compress&cs=tinysrgb&w=1200',

  // Ensure remaining services (Construction Management & Design-Build) are also HD-upgraded (w=1200)
  'services/project-management.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200', // PM active
  'banners/portfolio-hero.jpg': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200' // DB active
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
  console.log('Downloading targeted HD services assets...');
  for (const [filename, url] of Object.entries(SERVICES_HD_PHOTOS)) {
    await downloadImage(url, filename);
  }
  console.log('🎉 Target HD services assets saved successfully!');
}

run();
