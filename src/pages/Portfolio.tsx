import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Box, 
  SimpleGrid, 
  Heading, 
  Text, 
  Button, 
  Image, 
  Flex, 
  VStack, 
  IconButton
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import SubpageHeader from '../components/SubpageHeader';
import { DotPattern } from './Home';

// Master data mapping for our 8 dynamic projects (renamed and enriched for premium uniqueness)
const projectsData: Record<string, {
  title: string;
  client: string;
  category: string;
  date: string;
  architect?: string;
  surveyors?: string;
  civilEngineers?: string;
  mepEngineers?: string;
  overview: string;
  details?: string;
  architectureDetails?: string;
  images: string[];
}> = {
  "jkuat-science-tower": {
    title: "JKUAT Science & Technology Tower",
    client: "Jomo Kenyatta University of Agriculture and Technology",
    category: "Construction",
    date: "November, 2020",
    architect: "Advent Architects Kenya",
    surveyors: "Vanguard Surveyors Ltd",
    civilEngineers: "Mangata Consultants",
    mepEngineers: "West Consult Engineering",
    overview: "The JKUAT Science & Technology Tower represents a landmark educational infrastructure built to accommodate the rapidly expanding departments of engineering, computing, and biotechnology. Designed as a high-density vertical campus, this multi-floor educational hub provides cutting-edge research facilities, expansive lecture halls, and state-of-the-art innovation labs. Built in response to the massive growth in STEM enrollment, the building integrates energy-efficient solutions and disabled-friendly navigation models across all floors.",
    details: "The project was executed using advanced cast-in-place concrete columns, post-tensioned floor slabs, and high-strength reinforced concrete foundations to withstand high wind load pressures. Our field teams worked in high-speed shifts to complete the structures under strict university calendars. Over 40 lecture halls, 15 specialized computer labs, and a state-of-the-art biochemistry unit have been delivered. Additionally, the tower integrates specialized emergency exits and safety systems meeting international construction standards.",
    architectureDetails: "Architecturally, the tower features a striking modern facade composed of natural granite stonework and low-emissivity glass curtain walls that reduce solar heat gain by 40%. It complies fully with universal design accessibility regulations, incorporating broad ramp systems, tactile floors for visually impaired occupants, and specialized elevator cabins. The building includes rainwater harvesting networks that feed a 200,000-liter subterranean storage tank for irrigation and sanitary supply, making it a pioneer in sustainable campus design.",
    images: [
      "/assets/images/portfolio/tuk-1.jpg",
      "/assets/images/portfolio/tuk-2.jpg",
      "/assets/images/portfolio/tuk-3.jpg",
      "/assets/images/portfolio/tuk-4.jpg"
    ]
  },
  "kenha-highway-project": {
    title: "KeNHA Northern Corridor Bypass Interchange",
    client: "Kenya National Highways Authority (KeNHA)",
    category: "Civil Works",
    date: "August, 2022",
    architect: "Nippon Koei Infrastructure Engineers",
    surveyors: "Apex Quantity Surveyors",
    civilEngineers: "Mega Infrastructure Engineers",
    mepEngineers: "Hydro-Power Electricals",
    overview: "Mega Enterprises was contracted by the Kenya National Highways Authority to construct the multi-tier Northern Corridor Bypass Interchange. This massive civil engineering endeavor was aimed at decongesting freight traffic along the main logistics corridor connecting the port of Mombasa to East African hinterlands. The project encompassed elevated flyovers, high-durability precast concrete viaduct spans, extensive stormwater drainage structures, and comprehensive highway lighting systems.",
    details: "Our technical execution involved fabricating and placing heavy-duty dual-carriageway decks utilizing precast pre-stressed concrete box girders. Our field engineers managed complex geological challenges, utilizing deep pile foundation columns down to 25 meters to reach stable rock strata beneath alluvial soil beds. High-grade polymer-modified bitumen was laid down to withstand heavy axle loading from high-volume transport trucks, and advanced sub-base stabilization was conducted using cement-improved gravel layers.",
    architectureDetails: "The bypass interchange incorporates state-of-the-art structural safety designs, featuring concrete crash barriers (New Jersey type), low-angle approach curves, and high-visibility LED overhead gantry signs. The landscaping plan utilizes local vetiver grass planting to stabilize embankments and prevent soil erosion. Integrated run-off treatment bays filter heavy metals and silt from storm drainage before water enters local ecosystems, showing how heavy civil works can coexist with ecological preservation.",
    images: [
      "/assets/images/portfolio/mpw-1.jpg",
      "/assets/images/portfolio/mpw-2.jpg",
      "/assets/images/portfolio/mpw-3.jpg",
      "/assets/images/portfolio/mpw-4.jpg"
    ]
  },
  "egerton-agriculture-hub": {
    title: "Egerton University Agricultural Research Complex",
    client: "Egerton University",
    category: "Construction",
    date: "March, 2021",
    architect: "Studio Matrix Architects",
    surveyors: "Vanguard Surveyors Ltd",
    civilEngineers: "Mangata Consultants",
    mepEngineers: "West Consult Engineering",
    overview: "The Egerton University Agricultural Research Complex is a specialized tertiary education hub constructed to pioneer drylands farming research and livestock breeding engineering. This multi-wing facility consists of dryland research laboratories, high-capacity temperature-controlled greenhouse structures, seminar theaters, and administrative spaces, supporting advanced agronomy programs.",
    details: "Constructed on expansive clay soils, our structural foundation relied on a heavy-duty raft concrete foundation system to mitigate seasonal soil expansion and contraction. The main structures were finished with robust reinforced concrete frames, filled with high-strength quarry-dressed volcanic ash blocks to reflect heat and keep interior spaces cool without artificial cooling systems.",
    architectureDetails: "The complex boasts a premium central courtyard that facilitates natural stack-effect ventilation. Glass pavilions house hydroponic farming setups, while lecture complexes incorporate acoustic wall paneling, automated dimming systems, and tiered auditorium seating structures. Modern chemical-resistant polymer flooring was installed in all research rooms to guarantee extreme longevity and hygiene.",
    images: [
      "/assets/images/portfolio/mmu-1.jpg",
      "/assets/images/portfolio/mmu-2.jpg",
      "/assets/images/portfolio/mmu-3.jpg",
      "/assets/images/portfolio/mmu-4.jpg"
    ]
  },
  "knh-staff-apartments": {
    title: "Kenyatta National Hospital Staff Housing Complex",
    client: "Kenyatta National Hospital (KNH)",
    category: "Construction",
    date: "September, 2021",
    architect: "Nairobi Urban Planners",
    surveyors: "Ecospace Consultants",
    civilEngineers: "Mega Structural Engineers",
    overview: "This residential development involved constructing a multi-block, high-density housing complex for healthcare professionals at Kenyatta National Hospital. Comprising over 120 modern apartments, the estate provides direct, secure, and comfortable proximity for emergency medical personnel within Nairobi's medical district.",
    details: "To accelerate the construction schedules without compromising structural density, the housing blocks utilized precast concrete load-bearing wall panels and pre-stressed hollow-core floor slabs. The entire development integrates premium perimeter walling, local utility transformer connections, high-performance fire fighting pipe networks, and extensive paved transit roads.",
    architectureDetails: "Each residential tower features high-capacity solar water heating panels, rooftop access decks, and high-efficiency water recycling systems that filter wastewater for landscaping irrigation. Low-VOC internal paints and acoustic underlays under floor tiles ensure comfortable, quiet, and healthy living environments for KNH staff after high-stress medical shifts.",
    images: [
      "/assets/images/portfolio/kr-1.jpg",
      "/assets/images/portfolio/kr-2.jpg"
    ]
  },
  "kalro-ruiru-labs": {
    title: "KALRO Coffee Research and Breeding Laboratories, Ruiru",
    client: "Kenya Agricultural and Livestock Research Organization (KALRO)",
    category: "Construction",
    date: "January, 2021",
    architect: "Advent Architects Kenya",
    surveyors: "Vanguard Surveyors Ltd",
    civilEngineers: "Mangata Consultants",
    overview: "The KALRO Coffee Research and Breeding Laboratories in Ruiru is a specialized research hub commissioned to develop climate-resilient coffee cultivars. The facility houses molecular biology labs, tissue culture facilities, and soil chemistry labs.",
    details: "To support sensitive laboratory equipment, we implemented a highly sophisticated isolated concrete foundation block structure to prevent microscopic building vibrations. High-frequency electrical filtration networks and specialized copper ground grids were integrated throughout the facility.",
    architectureDetails: "Internally, the labs are outfitted with high-capacity HVAC ducting systems offering Class 10,000 cleanroom environments. Automated temperature and relative humidity monitors keep sample storage environments strictly consistent, while specialized backup diesel generator matrices guarantee uninterrupted research operations.",
    images: [
      "/assets/images/portfolio/cri-1.jpg",
      "/assets/images/portfolio/cri-2.jpg",
      "/assets/images/portfolio/cri-3.jpg"
    ]
  },
  "nps-staff-college": {
    title: "National Police Service Senior Staff College, Loresho",
    client: "National Police Service",
    category: "Construction",
    date: "October, 2022",
    architect: "Advent Architects Kenya",
    surveyors: "Apex Quantity Surveyors",
    civilEngineers: "Mega Structural Engineers",
    overview: "This project delivered a secure training academy and executive boarding block for senior leadership in the police service at Loresho, Nairobi. The facility includes modern audit complexes, tactical lecture rooms, physical training halls, and a high-security defense wall.",
    details: "Built using high-density reinforced brick masonry, the structure integrates heavy impact-resistant doors, emergency escape corridors, and fully blast-proof windows in strategic locations. Specialized utility lines ensure the compound operates completely independently in emergency scenarios.",
    architectureDetails: "The compound integrates centralized monitoring bunkers, high-lumen peripheral floodlight structures, automated barrier gates, and biometric checkpoints. Broad parade grounds and exercise grids were paved with high-durability interlocking concrete blocks designed to support transit transport vehicles.",
    images: [
      "/assets/images/portfolio/cid-1.jpg",
      "/assets/images/portfolio/cid-2.jpg",
      "/assets/images/portfolio/cid-3.jpg"
    ]
  },
  "kcaa-staff-quarters": {
    title: "KCAA Aviation Staff Housing, Embakasi",
    client: "Kenya Civil Aviation Authority (KCAA)",
    category: "Civil Works",
    date: "November, 2021",
    architect: "Ministry of Public Works",
    surveyors: "Ecospace Consultants",
    civilEngineers: "Mangata Consultants",
    overview: "Designed and built specifically for air traffic controllers and logistics officers of the Kenya Civil Aviation Authority, this estate features premium residential units built near the international airport at Embakasi.",
    details: "A key structural focus was sound dampening. Double-glazed architectural windows and multi-layered drywall barriers were installed to reduce airport noise to comfortable residential decibel levels. High-capacity security perimeter systems protect the critical aviation personnel compound.",
    architectureDetails: "The estate features modern cobblestone pedestrian pathways, recreational parks, dedicated water borehole supplies, and solar-powered street lighting networks. Reinforced concrete retaining walls protect lower-lying buildings from stormwater runoff originating from neighboring asphalt runway basins.",
    images: [
      "/assets/images/portfolio/emb-1.jpg",
      "/assets/images/portfolio/emb-2.jpg"
    ]
  },
  "kasarani-sports-academy": {
    title: "Kasarani Sports Academy Multi-Purpose Stadium",
    client: "Kasarani Sports Academy / Sports Kenya",
    category: "Civil Works",
    date: "March, 2023",
    architect: "Advent Architects Kenya",
    surveyors: "Vanguard Surveyors Ltd",
    civilEngineers: "Mangata Consultants",
    overview: "The Kasarani Sports Academy Multi-Purpose Stadium is an international-standard facility designed to groom athletic talent and host local soccer league tournaments. Featuring a 15,000-seat grandstand, the complex integrates athletic running tracks, professional drainage systems, structural canopy roofs, and media broadcasting hubs.",
    details: "We fabricated and erected massive cantilevered structural steel trusses to support the grandstand's canopy roof without intermediate pillars, guaranteeing unobstructed views for spectators. High-grade precast concrete stepped tiers formed the stadium terraces, ensuring maximum structural load capacity during sold-out sporting events.",
    architectureDetails: "Beneath the main stand, our team constructed executive locker rooms, modern doping control centers, media editing suites, and dedicated medical treatment clinics. The playing field features a professional sub-surface drainage layout composed of graded gravel filtration layers and high-volume perforated drainage lines to prevent waterlogging during rainy seasons.",
    images: [
      "/assets/images/portfolio/stadium-1.jpg",
      "/assets/images/portfolio/stadium-2.jpg",
      "/assets/images/portfolio/stadium-3.jpg"
    ]
  }
};

export const Portfolio: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // Gallery slider state for dynamic project details page
  const [activeImg, setActiveImg] = useState(0);

  // If no projectId or invalid ID, render the main 8-project grid view
  if (!projectId || !projectsData[projectId]) {
    return (
      <Box w="100%">
        {/* Visual Header */}
        <SubpageHeader 
          title="Portfolio" 
          breadcrumbs={[{ label: 'Portfolio' }]} 
        />

        <Box py={20} px={{ base: 6, lg: 12 }} bg="white" position="relative" overflow="hidden">
          <DotPattern top="20px" left="20px" />
          <DotPattern bottom="20px" right="20px" />

          <VStack maxW="1200px" mx="auto" spacing={12} position="relative" zIndex="2">
            {/* Introductory Text */}
            <VStack spacing={3} textAlign="center" maxW="800px">
              <Text fontSize="xs" fontWeight="700" letterSpacing="1px" color="brand.500" textTransform="uppercase">
                OUR PROJECT PORTFOLIO
              </Text>
              <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} fontWeight="800" color="slate.800">
                Explore our project portfolio
              </Heading>
              <Text fontSize="sm" color="slate.500" maxW="600px" mt={2}>
                Explore our project portfolio and envision the possibilities for your own venture. Get in touch with us today, and let our dedicated team bring your construction dreams to life.
              </Text>
            </VStack>

            {/* 8 Projects Grid */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
              {Object.entries(projectsData).map(([id, proj]) => (
                <Box
                  key={id}
                  as={Link}
                  to={`/portfolio/${id}`}
                  bg="white"
                  border="1px solid"
                  borderColor="slate.100"
                  borderRadius="sm"
                  overflow="hidden"
                  boxShadow="sm"
                  _hover={{
                    boxShadow: "md",
                    transform: "translateY(-4px)",
                    borderColor: "brand.300",
                  }}
                  transition="all 0.3s"
                  display="flex"
                  flexDirection="column"
                >
                  <Image 
                    src={proj.images[0]} 
                    alt={proj.title}
                    h="220px"
                    w="100%"
                    objectFit="cover"
                  />
                  <Flex p={6} direction="column" flex="1" justify="space-between" align="center" textAlign="center">
                    <Heading size="xs" fontWeight="800" color="slate.800" mb={4} minH="40px">
                      {proj.title}
                    </Heading>
                    <Text fontSize="xs" fontWeight="700" color="brand.500">
                      Read Project Details →
                    </Text>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>
    );
  }

  // Load project detail page
  const project = projectsData[projectId];

  const handlePrevImg = () => {
    setActiveImg((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleNextImg = () => {
    setActiveImg((prev) => (prev + 1) % project.images.length);
  };

  return (
    <Box w="100%">
      {/* Subpage Header Banner */}
      <SubpageHeader 
        title={project.title} 
        breadcrumbs={[
          { label: 'Portfolio', href: '/portfolio' }, 
          { label: project.title }
        ]} 
      />

      {/* Project details area */}
      <Box py={{ base: 14, lg: 20 }} px={{ base: 6, lg: 12 }} bg="white">
        <VStack maxW="1200px" mx="auto" spacing={12} align="stretch">
          
          {/* Gallery Image Slider */}
          <SimpleGrid columns={{ base: 1, lg: 12 }} spacing={8} alignItems="center">
            
            {/* Gallery Left (Actual Image Slider Card) */}
            <Box position="relative" gridColumn={{ lg: "span 7" }} h={{ base: "300px", md: "400px" }} w="100%">
              {/* Orange offset plate */}
              <Box 
                position="absolute"
                inset="15px -15px -15px 15px"
                bg="brand.500"
                zIndex="1"
              />
              
              {/* Image Frame */}
              <Image 
                src={project.images[activeImg]}
                alt={project.title}
                objectFit="cover"
                w="100%"
                h="100%"
                position="relative"
                zIndex="2"
                boxShadow="lg"
                borderRadius="sm"
              />

              {/* Slider Arrows */}
              {project.images.length > 1 && (
                <>
                  <IconButton
                    icon={<ChevronLeftIcon fontSize="24px" />}
                    aria-label="Prev Image"
                    position="absolute"
                    left="20px"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex="10"
                    onClick={handlePrevImg}
                    colorScheme="blackAlpha"
                    borderRadius="full"
                  />
                  <IconButton
                    icon={<ChevronRightIcon fontSize="24px" />}
                    aria-label="Next Image"
                    position="absolute"
                    right="20px"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex="10"
                    onClick={handleNextImg}
                    colorScheme="blackAlpha"
                    borderRadius="full"
                  />
                </>
              )}
            </Box>

            {/* Gallery Right (Horizontal Thumbnail strips or info preview) */}
            <Flex 
              gridColumn={{ lg: "span 5" }} 
              direction={{ base: 'row', lg: 'column' }} 
              gap={4} 
              justify="center"
              align="center"
              overflowX="auto"
              w="100%"
            >
              {project.images.map((img, index) => (
                <Box
                  key={index}
                  cursor="pointer"
                  border="2px solid"
                  borderColor={index === activeImg ? 'brand.500' : 'slate.100'}
                  borderRadius="sm"
                  overflow="hidden"
                  h={{ base: "80px", lg: "115px" }}
                  w={{ base: "110px", lg: "100%" }}
                  flexShrink={0}
                  onClick={() => setActiveImg(index)}
                  transition="all 0.2s"
                >
                  <Image src={img} alt="Thumbnail" objectFit="cover" w="100%" h="100%" />
                </Box>
              ))}
            </Flex>
          </SimpleGrid>

          {/* Detailed Content Split Screen */}
          <SimpleGrid columns={{ base: 1, lg: 12 }} spacing={12} pt={8} textAlign="left">
            {/* Left Content column: Text descriptions */}
            <VStack align="flex-start" spacing={8} gridColumn={{ lg: "span 8" }}>
              <Box>
                <Heading size="md" fontWeight="800" color="slate.800" mb={4}>
                  Project Overview:
                </Heading>
                <Text fontSize="sm" color="slate.600" lineHeight="1.8" mb={4}>
                  {project.overview}
                </Text>
                {project.details && (
                  <Text fontSize="sm" color="slate.600" lineHeight="1.8">
                    {project.details}
                  </Text>
                )}
              </Box>

              {project.architectureDetails && (
                <Box>
                  <Heading size="md" fontWeight="800" color="slate.800" mb={4}>
                    Architectural Design:
                  </Heading>
                  <Text fontSize="sm" color="slate.600" lineHeight="1.8">
                    {project.architectureDetails}
                  </Text>
                </Box>
              )}
            </VStack>

            {/* Right Metadata Box Column */}
            <Box gridColumn={{ lg: "span 4" }}>
              <VStack 
                align="stretch" 
                p={8} 
                bg="slate.50" 
                borderRadius="sm" 
                border="1px solid"
                borderColor="slate.100"
                shadow="sm"
                spacing={6}
              >
                <SimpleGrid columns={2} spacing={4} fontSize="xs">
                  {/* Client */}
                  <Box>
                    <Text fontWeight="700" color="slate.500">Client</Text>
                    <Text fontWeight="800" color="slate.800" mt={0.5}>{project.client}</Text>
                  </Box>

                  {/* Category */}
                  <Box>
                    <Text fontWeight="700" color="slate.500">Category</Text>
                    <Text fontWeight="800" color="brand.500" mt={0.5}>{project.category}</Text>
                  </Box>

                  {/* Date */}
                  <Box>
                    <Text fontWeight="700" color="slate.500">Date</Text>
                    <Text fontWeight="800" color="slate.800" mt={0.5}>{project.date}</Text>
                  </Box>

                  {/* Architect */}
                  {project.architect && (
                    <Box>
                      <Text fontWeight="700" color="slate.500">Architect</Text>
                      <Text fontWeight="800" color="slate.800" mt={0.5}>{project.architect}</Text>
                    </Box>
                  )}

                  {/* Quantity Surveyors */}
                  {project.surveyors && (
                    <Box>
                      <Text fontWeight="700" color="slate.500">Quantity Surveyors</Text>
                      <Text fontWeight="800" color="slate.800" mt={0.5}>{project.surveyors}</Text>
                    </Box>
                  )}

                  {/* Structural Engineers */}
                  {project.civilEngineers && (
                    <Box gridColumn="span 2">
                      <Text fontWeight="700" color="slate.500">Structural and Civil Engineers</Text>
                      <Text fontWeight="800" color="slate.800" mt={0.5}>{project.civilEngineers}</Text>
                    </Box>
                  )}

                  {/* MEP Engineers */}
                  {project.mepEngineers && (
                    <Box gridColumn="span 2">
                      <Text fontWeight="700" color="slate.500">Mechanical/Electrical Engineers</Text>
                      <Text fontWeight="800" color="slate.800" mt={0.5}>{project.mepEngineers}</Text>
                    </Box>
                  )}
                </SimpleGrid>

                <Link to={`/contact?inquiry=${encodeURIComponent(project.title)}`} style={{ textDecoration: 'none' }}>
                  <Button 
                    variant="outline"
                    colorScheme="brand"
                    borderColor="brand.500"
                    color="brand.500"
                    px={8}
                    py={6}
                    borderRadius="full"
                    _hover={{ bg: 'brand.500', color: 'white', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                    fontWeight="700"
                    fontSize="sm"
                    w="100%"
                  >
                    Contact Us
                  </Button>
                </Link>
              </VStack>
            </Box>
          </SimpleGrid>

        </VStack>
      </Box>
    </Box>
  );
};
export default Portfolio;
