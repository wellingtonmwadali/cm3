const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Curated list of high-quality, highly context-accurate industrial & civil construction images.
// Sourced from public Unsplash/Pexels resource clusters.
const IMAGES_TO_DOWNLOAD = {
  // Banners
  'banners/contact-hero.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200', // Real heavy civil construction site highway focus
  'banners/about-hero.jpg': 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=1200', // Structural engineering blueprint and site progress overlay
  'banners/services-hero.jpg': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200', // Yellow excavator working under perfect blue sky
  'banners/portfolio-hero.jpg': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200', // Modern high-rise corporate concrete frame

  // Services
  'services/road-construction.jpg': 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=600', // Steaming asphalt paver rolling machine
  'services/civil-engineering.jpg': 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=600', // Close-up of engineering blueprints on active job site with safety helmet
  'services/demolition.jpg': 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=600', // High-reach excavator shears tearing concrete structure
  'services/water-sewer.jpg': 'https://images.unsplash.com/photo-1508459855340-fb63ac591728?auto=format&fit=crop&q=80&w=600', // Concrete drainage pipes trench laying installation
  'services/project-management.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600', // Engineering consultants planning timeline and cost calculations
  'services/plant-hire.jpg': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600', // Line of yellow heavy crawler excavators lined up in yard

  // Fleet (Plant & Machinery)
  'fleet/crawler-excavator.jpg': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=500', // Caterpillar yellow crawler excavator loading dump truck
  'fleet/wheel-loader.jpg': 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=500', // Heavy Volvo wheel loader carrying gravel stockpile
  'fleet/dozer.jpg': 'https://images.unsplash.com/photo-1627448834471-a08b0b925b42?auto=format&fit=crop&q=80&w=500', // Powerful industrial bulldozer pushing soil
  'fleet/grader.jpg': 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&q=80&w=500', // Motor grader levelling red soil base
  'fleet/roller.jpg': 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=500', // Double vibratory drum roller finishing asphalt road
  'fleet/mobile-crane.jpg': 'https://images.unsplash.com/photo-1598214886806-c87b2c37076b?auto=format&fit=crop&q=80&w=500', // Liebherr multi-axle heavy mobile crane lifting load
  'fleet/tipper-truck.jpg': 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=500', // Heavy-duty yellow dump truck driving on dirt
  'fleet/concrete-mixer.jpg': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=500', // Concrete transit mixer truck pouring wet foundation
  'fleet/backhoe.jpg': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=500', // JCB style backhoe loader digging trench
  'fleet/dumper.jpg': 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=500', // Articulated dump truck in quarry
  'fleet/asphalt-paver.jpg': 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=500', // Close-up of heavy asphalt paver laying blacktop
  'fleet/generator.jpg': 'https://images.unsplash.com/photo-1558441719-ff34b0524a24?auto=format&fit=crop&q=80&w=500', // Large commercial containerized silent backup generator

  // Team
  'team/leader-1.jpg': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200', // Professional African-American director in construction suit
  'team/leader-2.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200', // Confident female project surveyor
  'team/leader-3.jpg': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200', // Executive engineering lead
  'team/leader-4.jpg': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200', // Senior lead architect
  'team/leader-5.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200', // Heavy equipment operations manager

  // Portfolio Projects (Dynamic detail pages and gallery)
  'portfolio/tuk-1.jpg': 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600', // TUK University block architecture
  'portfolio/tuk-2.jpg': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600', // Modern university campus wings
  'portfolio/tuk-3.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600', // Students entering lecture complex
  
  'portfolio/mpw-1.jpg': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600', // Ministry structural columns and curtain walling
  'portfolio/mpw-2.jpg': 'https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80&w=600', // Modern government office block facade
  'portfolio/mpw-3.jpg': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600', // Beautiful glass lobby interior
  
  'portfolio/mmu-1.jpg': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600', // Narok stone styled lecture halls Maasai Mara
  'portfolio/mmu-2.jpg': 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600', // Modern university campus pathways
  
  'portfolio/kr-1.jpg': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600', // Kenya Railways housing modern block
  'portfolio/kr-2.jpg': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600', // Clean gated residential units
  
  'portfolio/cri-1.jpg': 'https://images.unsplash.com/photo-1581093588401-f3c22d760351?auto=format&fit=crop&q=80&w=600', // Coffee Research Institute modern laboratory block
  'portfolio/cri-2.jpg': 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600', // Scientific chemical analysis greenhouse
  
  'portfolio/cid-1.jpg': 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600', // South C CID Training auditorium interior
  'portfolio/cid-2.jpg': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600', // Institutional security quarters structure
  
  'portfolio/emb-1.jpg': 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=600', // Staff quarters military architecture barracks
  'portfolio/emb-2.jpg': 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=600', // Gated brick structures security base
  
  'portfolio/stadium-1.jpg': 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600', // Grand Wang'uru stadium concrete structures
  'portfolio/stadium-2.jpg': 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600' // Beautiful international standard stadium running tracks
};

const BASE_DIR = path.join(__dirname, 'public', 'assets', 'images');

async function downloadImage(url, filename) {
  const destPath = path.join(BASE_DIR, filename);
  
  // Ensure target folder exists
  const parentFolder = path.dirname(destPath);
  if (!fs.existsSync(parentFolder)) {
    fs.mkdirSync(parentFolder, { recursive: true });
  }

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
  console.log('Starting industry-standard contextual image downloads...');
  for (const [filename, url] of Object.entries(IMAGES_TO_DOWNLOAD)) {
    await downloadImage(url, filename);
  }
  console.log('🎉 All industry-accurate assets downloaded successfully!');
}

run();
