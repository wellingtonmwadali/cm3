import React, { useState, useEffect } from 'react';
import { 
  Box, 
  SimpleGrid, 
  Heading, 
  Text, 
  Image, 
  VStack,
  Flex,
  Button,
  Table,
  Tbody,
  Tr,
  Td,
  Icon,
  HStack,
  Divider
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaWrench, FaCogs, FaArrowLeft, FaPhoneAlt } from 'react-icons/fa';
import SubpageHeader from '../components/SubpageHeader';
import { DotPattern } from './Home';

interface Machine {
  title: string;
  desc: string;
  image: string;
  specs: Record<string, string>;
  features: string[];
  detailedInfo: string;
}

export const PlantMachinery: React.FC = () => {
  // Heavy machinery fleet assets list (12 items) with updated HD paths and highly populated technical specs
  const machines: Machine[] = [
    {
      title: "Heavy-Duty Concrete Mixers",
      desc: "High-capacity diesel cement mixers for site batch operations.",
      image: "/assets/images/fleet/concrete-mixer.jpg",
      specs: {
        "Model": "MegaMix 5000 Batcher",
        "Drum Capacity": "5.0 m³ per batch",
        "Engine Power": "Deutz 4-Cylinder Turbo Diesel (120 HP)",
        "Operating Weight": "4,200 kg",
        "Water Tank Capacity": "400 Liters",
        "Discharge Height": "1.8 meters",
        "Mixing Cycle Time": "2.5 minutes"
      },
      features: [
        "Hydraulic drum tilting with infinite-position hydraulic locks",
        "Dual-axis aggregate feed blades for quick, highly uniform mixing",
        "Centralized high-pressure washdown water nozzle for rapid cleaning",
        "High-durability anti-abrasion manganese steel alloy drum lining"
      ],
      detailedInfo: "The MegaMix 5000 is our primary workhorse batching concrete mixer, built specifically to provide high-homogeneity concrete mixes on high-speed civil projects. Outfitted with high-durability manganese steel drum linings and powered by a reliable Deutz turbo diesel engine, this machine delivers consistent mixing speeds regardless of aggregate density or aggregate size, ensuring optimal concrete quality for structural pours."
    },
    {
      title: "Motor Graders (Road Grading)",
      desc: "Precision graders for flattening, leveling, and site preparing roads.",
      image: "/assets/images/fleet/grader.jpg",
      specs: {
        "Model": "Gradex Precision-14",
        "Moldboard Blade Width": "4.2 meters",
        "Engine": "CAT C7.1 ACERT Clean-Emission (210 HP)",
        "Operating Weight": "16,800 kg",
        "Transmission Type": "Direct Drive Powershift (8F/6R)",
        "Turning Radius": "7.4 meters",
        "Max Blade Pull": "11,500 kg"
      },
      features: [
        "Integrated GPS-guided automatic moldboard elevation control",
        "Hydraulic side-shift and circle rotation up to a full 90 degrees",
        "Advanced structural drawbar-circle-moldboard frame alignment stability",
        "Pressurized, soundproofed HVAC operator cabin with ergonomic pilot controls"
      ],
      detailedInfo: "The Gradex Precision-14 represents the pinnacle of high-accuracy highway grading and land leveling. Outfitted with a 4.2-meter steel moldboard alongside cutting-edge automatic laser leveling telemetry, this motor grader enables field operators to establish precise subgrade grading profiles down to 3 millimeters, drastically accelerating excavation and sub-base compaction cycles."
    },
    {
      title: "Crawler Excavators",
      desc: "Heavy crawler-track excavators with large dig buckets.",
      image: "/assets/images/fleet/crawler-excavator.jpg",
      specs: {
        "Model": "Crawler Digger 330D",
        "Standard Bucket Capacity": "1.8 m³ heavy rock bucket",
        "Max Digging Depth": "7.3 meters",
        "Engine": "Cummins QSB6.7 Turbocharged (275 HP)",
        "Operating Weight": "32,500 kg",
        "Max Reach at Ground Level": "10.6 meters",
        "Bucket Breakout Force": "222 kN"
      },
      features: [
        "High-pressure closed-center load-sensing hydraulic control loops",
        "Reinforced track undercarriage with full-length double track-guards",
        "Eco-mode engine throttle fuel mapping for up to 20% carbon reduction",
        "Quick-coupler attachment system for rapid hydraulic breaker swap"
      ],
      detailedInfo: "Designed to operate in extreme quarry settings, rocky cuts, and deep foundation pits, the 330D Crawler Excavator delivers immense breakout digging force and rapid cycle speeds. Its robust steel crawler undercarriage provides perfect operational stability on loose or mud-laden soils, while an intelligent load-sensing hydraulic loop directs power exactly where it is required."
    },
    {
      title: "Logistics & Storage Yards",
      desc: "Fully equipped yard hubs hosting containers and spare fleets.",
      image: "/assets/images/fleet/storage-yard.jpg",
      specs: {
        "Total Yard Space": "5.5 Acres reinforced asphalt hardstanding",
        "Security Infrastructure": "24/7 CCTV, Biometric Access & Armed Guard Patrols",
        "Vehicle Bays": "200 marked heavy vehicle and trailer bays",
        "Location": "Mombasa Road Industrial Corridor, Nairobi",
        "Maintenance Stations": "4 fully equipped heavy machinery service bays",
        "Fuel Storage Capacity": "50,000 Liters high-speed diesel dispensing station"
      },
      features: [
        "Heavy maintenance engineering hangars with overhead gantry cranes",
        "Centralized real-time satellite fleet tracking and active dispatch center",
        "Clean, organized storage for precast concrete structures and bulk spares",
        "Integrated eco-friendly washdown and oil-separator wastewater treatment systems"
      ],
      detailedInfo: "Our Mombasa Road Logistics Hub spans 5.5 acres of highly secure, high-density reinforced concrete and asphalt yarding. This terminal serves as our primary dispatch center, hosting our spare machinery parts inventory, heavy maintenance hangars, and providing quick transport access to major regional development corridors."
    },
    {
      title: "Compact Site Dumpers",
      desc: "Mini diesel dump trucks for moving loose earth in narrow layouts.",
      image: "/assets/images/fleet/dumper.jpg",
      specs: {
        "Model": "MicroDumper-3000 Swivel",
        "Max Payload Capacity": "3,000 kg",
        "Engine Type": "Kubota 3-Cylinder Silent Diesel (32 HP)",
        "Unladen Weight": "2,150 kg",
        "Drive System": "Full-Time 4WD Hydrostatic transmission",
        "Tipping Mechanism": "180-Degree power swivel tipping skip",
        "Travel Speed": "22 km/h"
      },
      features: [
        "180-degree hydraulic swivel tipping bucket for easy side dumping",
        "Low ground-pressure flotation tires to protect delicate subgrade soils",
        "FOPS structural safety canopy with folding rollover protection bars",
        "Intuitive single-joystick hydrostatic drive and bucket lift controls"
      ],
      detailedInfo: "The MicroDumper-3000 is our compact earthmover engineered to excel in space-constrained sites, urban developments, and narrow trench lines. With a hydrostatic four-wheel-drive system and a 180-degree swivel bucket, it enables effortless soil dumping at exact angles without pivoting the vehicle's chassis, preventing site disruptions."
    },
    {
      title: "Front Loader Backhoes",
      desc: "Flexible JCB backhoes equipped for trench digging and loading.",
      image: "/assets/images/fleet/backhoe.jpg",
      specs: {
        "Model": "Flexi Loader 4CX Super",
        "Front Shovel Capacity": "1.2 m³ multi-purpose",
        "Rear Backhoe Bucket": "0.3 m³ trenching",
        "Engine Power": "Perkins 4.4L Turbocharged (109 HP)",
        "Operating Weight": "8,600 kg",
        "Max Dig Depth (Extended)": "5.8 meters",
        "Steering System": "4-Wheel Crab and Coordinated Steering"
      },
      features: [
        "4-in-1 multi-purpose front loader bucket with integrated hydraulic grabs",
        "Extendable rear dipper arm for enhanced reach and trench digging depth",
        "Smooth Ride System (SRS) for hydraulic damping during high-speed road travel",
        "Ergonomic pilot control joysticks with dual-direction seat swivels"
      ],
      detailedInfo: "The Flexi Loader 4CX is the ultimate utility vehicle for high-velocity municipal works and civil sites. Combining a high-capacity front loader shovel with a powerful extendable rear backhoe arm, this versatile machine handles everything from backfilling trenches to lifting concrete pipes, representing the ultimate multi-tasker."
    },
    {
      title: "Heavy Hauling Dump Trucks",
      desc: "Standard dump trucks for shifting gravel and high-density material.",
      image: "/assets/images/fleet/tipper-truck.jpg",
      specs: {
        "Model": "Titan Tipper Scania 8x4",
        "Max Payload Capacity": "25,000 kg",
        "Chassis Structure": "Double-frame high-tensile structural steel",
        "Engine V8": "Scania Euro-5 Eco Diesel (480 HP)",
        "Box Volume Capacity": "18.0 m³ rock body",
        "Axle Configuration": "8x4 with double planetary hub reduction axles",
        "Tipping Angle": "52 Degrees"
      },
      features: [
        "Hardox-450 premium steel tipper body for severe aggregate impact wear",
        "Multi-stage telescopic front-end hydraulic tipping cylinders",
        "Dual rear axle differential lockouts for absolute off-road muddy traction",
        "Pneumatic automated roll-over load safety tarp covers for transit"
      ],
      detailedInfo: "Our Titan Tipper 25T dump trucks form the backbone of our bulk material logistics. Built on heavy-duty Scania 8x4 steel frames and powered by high-torque V8 engines, these haulers efficiently transfer gravel, excavated soil, and demolition debris across challenging regional road networks."
    },
    {
      title: "Haulage Truck Fleets",
      desc: "Our active logistics transport lines waiting for site haulage tasks.",
      image: "/assets/images/fleet/haulage-fleet.jpg",
      specs: {
        "Fleet Capacity": "45 Volvo Prime Movers",
        "Engine Power": "Volvo D16 Heavy Diesel (540 HP)",
        "Max Towing Capacity": "80 Metric Tons",
        "Trailer Attachments": "Multi-axle low-beds, extendable flatbeds, skeletal",
        "Cabin Type": "Globetrotter sleeper cabs for long-distance transit",
        "Transmission": "I-Shift Automated Manual with crawler gears"
      },
      features: [
        "Heavy-duty modular multi-axle low-loader trailers for machinery hauling",
        "Fully equipped, certified escort vehicle operations for oversize loads",
        "Real-time satellite fleet tracking and logistics geofencing arrays",
        "Electronic air-ride trailer suspensions to protect structural cargo"
      ],
      detailedInfo: "Our prime mover fleet is specialized in heavy-haulage and abnormal load logistics. Outfitted with high-capacity low-bed trailers, flatbeds, and skeletal trailer rigs, we are fully equipped to transport heavy civil excavators, massive steel columns, and batching plants directly to any remote site in Kenya."
    },
    {
      title: "Auxiliary Concrete Mixers",
      desc: "Mobile concrete pump machine optimized for high-volume transport.",
      image: "/assets/images/fleet/auxiliary-mixer.jpg",
      specs: {
        "Model": "FlowPump 120 MAN",
        "Pumping Output Capacity": "120 m³ per hour",
        "Vertical Placing Reach": "38 meters",
        "Horizontal Placing Reach": "34 meters",
        "Boom Sections": "4-Section Z-Fold structural steel placing boom",
        "Truck Chassis": "MAN TGS 8x4 heavy chassis (360 HP)",
        "Concrete Piping Diameter": "125 mm heavy-duty steel pipe"
      },
      features: [
        "Highly versatile 4-section Z-fold placing boom for tight internal spaces",
        "High-pressure dual-piston concrete pumps with smooth s-valve switches",
        "Dual radio-frequency wireless remote controls for structural precision",
        "Four heavy hydraulic outriggers with wide load-distribution plates"
      ],
      detailedInfo: "The FlowPump 120 mobile concrete placing boom is essential for vertical construction, bridge decks, and high-volume foundation pours. With a 38-meter vertical reach and remote-controlled placing boom, it delivers concrete precisely where traditional mixers cannot reach, ensuring uninterrupted pouring."
    },
    {
      title: "Vibratory Road Rollers",
      desc: "Heavy soil and asphalt rollers (LiuGong class) for road compaction.",
      image: "/assets/images/fleet/roller.jpg",
      specs: {
        "Model": "Compactor Max-12 Roller",
        "Drum Width": "2.1 meters",
        "Vibration Frequency Range": "30 / 35 Hz",
        "Engine Model": "Perkins 1104D Turbo (130 HP)",
        "Operating Weight": "12,200 kg",
        "Centrifugal Force (High/Low)": "270 / 170 kN",
        "Nominal Amplitude": "1.8 / 0.9 mm"
      },
      features: [
        "Dual-amplitude and dual-frequency hydrostatic vibratory systems",
        "Pressurized ROPS operator cabin with 360-degree clear visibility curves",
        "Heavy articulating central steering joints for precise tracking",
        "Integrated infrared soil compaction density and moisture tracking monitors"
      ],
      detailedInfo: "The Compactor Max-12 vibratory roller is designed for high-density compaction of sub-base soils, crushed gravels, and thick asphalt layers. Featuring dual vibration frequencies and a heavy steel drum, it achieves target density metrics in fewer passes, speeding up paving schedules."
    },
    {
      title: "Gravel Dumper Fleets",
      desc: "Active site loaders parked and loaded on quarry grounds.",
      image: "/assets/images/fleet/gravel-fleet.jpg",
      specs: {
        "Model": "Quarry Loader CAT 966L",
        "Standard Bucket Size": "4.5 m³ high-durability rock bucket",
        "Rated Payload Weight": "8,200 kg",
        "Engine": "CAT C9.3 ACERT Engine (315 HP)",
        "Operating Weight": "23,200 kg",
        "Max Breakout Force": "196 kN",
        "Hydraulic Cycle Time": "5.9 seconds"
      },
      features: [
        "Lock-up clutch torque converter transmission for fuel and speed efficiency",
        "Z-bar high- breakout force loader linkage with excellent dump visibility",
        "Integrated payload scales with wireless telemetry reporting tools",
        "L5-class armored radial tires to withstand sharp quarry gravel cuts"
      ],
      detailedInfo: "Our high-breakout Quarry Loader 966L is specialized in high-volume aggregate transferring and gravel transport loading. Outfitted with heavy rock buckets and active onboard weighing systems, it ensures rapid cycle times in aggregate production sites and high-volume stockpiles."
    },
    {
      title: "Hydraulic Concrete Block Makers",
      desc: "On-site industrial concrete brick and blocks vibration pressing plants.",
      image: "/assets/images/fleet/block-maker.jpg",
      specs: {
        "Model": "VibroPress-800 Mobile Plant",
        "Production Capacity": "800 structural blocks per hour",
        "Pressing Hydraulic Pressure": "16 MPa",
        "Molding Cycle Speed": "25 seconds per frame",
        "Main Vibration Motors": "45 kW high-frequency electric grid system",
        "Pallet Size Dimensions": "1150 x 580 mm",
        "Automation Control": "Siemens PLC touchscreen diagnostics"
      },
      features: [
        "Heavy-duty hydraulic molding rams offering immense structural compactions",
        "Interchangeable multi-cavity block molds for custom brick production",
        "Advanced Siemens PLC computerized interface with automated diagnostic logs",
        "Automatic aggregate feed hopper and finished block product stacker"
      ],
      detailedInfo: "The VibroPress-800 is our heavy industrial concrete block production plant. Outfitted with high-frequency vibrators and massive hydraulic presses, it forms uniform, high-density structural concrete blocks, paving blocks, and hollow blocks directly on-site to reduce logistics costs."
    }
  ];

  // Active selected machine state (null represents the grid view)
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);

  // Scroll to top of detail page when a machine is selected
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedMachine]);

  // Handle inquiry redirect link parameters helper
  const getInquiryLink = (machineTitle: string) => {
    return `/contact?inquiry=${encodeURIComponent(machineTitle)}`;
  };

  return (
    <Box w="100%">
      {/* Dynamic Header Titles */}
      <SubpageHeader 
        title={selectedMachine ? selectedMachine.title : "Plant and Machinery"} 
        breadcrumbs={
          selectedMachine 
            ? [
                { label: 'Plant & Machinery', href: '/plant-machinery' },
                { label: selectedMachine.title }
              ]
            : [{ label: 'Plant & Machinery' }]
        } 
      />

      {/* Main Body container */}
      <Box py={{ base: 14, lg: 20 }} px={{ base: 6, lg: 12 }} bg="white" position="relative">
        <DotPattern top="20px" left="20px" />
        <DotPattern bottom="20px" right="20px" />

        {selectedMachine ? (
          /* ========================================================================= */
          /* IMMERSIVE DETAILED MACHINE VIEW                                           */
          /* ========================================================================= */
          <VStack maxW="1200px" mx="auto" spacing={12} align="stretch" position="relative" zIndex="2">
            
            {/* Back to Gallery Button & Breadcrumb */}
            <Flex justify="space-between" align="center" direction={{ base: 'column', sm: 'row' }} gap={4}>
              <Button
                leftIcon={<FaArrowLeft />}
                variant="outline"
                colorScheme="brand"
                borderColor="slate.200"
                color="slate.600"
                onClick={() => setSelectedMachine(null)}
                _hover={{ bg: 'slate.50', borderColor: 'brand.500', color: 'brand.500' }}
                borderRadius="full"
                fontWeight="700"
                fontSize="sm"
              >
                Back to Fleet Gallery
              </Button>
              <Text fontSize="xs" fontWeight="700" color="brand.500" textTransform="uppercase" letterSpacing="1px">
                Category: Heavy Civil Construction Fleet
              </Text>
            </Flex>

            <Divider borderColor="slate.100" />

            {/* Content Columns Split */}
            <SimpleGrid columns={{ base: 1, lg: 12 }} spacing={12}>
              
              {/* Left Column: Premium HD Image Card with Orange Offset Plate */}
              <Box gridColumn={{ lg: "span 6" }} position="relative" h={{ base: "300px", md: "450px" }} w="100%">
                {/* Orange offset plate */}
                <Box 
                  position="absolute"
                  inset="15px -15px -15px 15px"
                  bg="brand.500"
                  zIndex="1"
                />
                {/* HD Drum/Loader image */}
                <Image 
                  src={selectedMachine.image}
                  alt={selectedMachine.title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  position="relative"
                  zIndex="2"
                  boxShadow="lg"
                  borderRadius="sm"
                />
              </Box>

              {/* Right Column: Fleet Specs & Inquiry Actions */}
              <VStack gridColumn={{ lg: "span 6" }} align="flex-start" spacing={6} textAlign="left">
                <Box>
                  <HStack spacing={2} mb={2}>
                    <Icon as={FaWrench} color="brand.500" />
                    <Text fontSize="xs" fontWeight="800" color="brand.500" textTransform="uppercase" letterSpacing="1.5px">
                      FLEET MACHINERY PROFILE
                    </Text>
                  </HStack>
                  <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" color="slate.800" mb={4}>
                    {selectedMachine.title}
                  </Heading>
                  <Text fontSize="sm" color="slate.600" lineHeight="1.8">
                    {selectedMachine.detailedInfo}
                  </Text>
                </Box>

                {/* Specs Table */}
                <Box w="100%" bg="slate.50" p={6} borderRadius="sm" border="1px solid" borderColor="slate.100" shadow="sm">
                  <HStack spacing={2} mb={4}>
                    <Icon as={FaCogs} color="slate.700" />
                    <Text fontWeight="800" fontSize="xs" color="slate.700" textTransform="uppercase" letterSpacing="0.5px">
                      Technical Specifications
                    </Text>
                  </HStack>
                  <Table variant="simple" size="sm" fontSize="xs">
                    <Tbody>
                      {Object.entries(selectedMachine.specs).map(([key, val]) => (
                        <Tr key={key}>
                          <Td py={2} pl={0} fontWeight="700" color="slate.500" borderBottomColor="slate.100">{key}</Td>
                          <Td py={2} pr={0} fontWeight="800" color="slate.800" textAlign="right" borderBottomColor="slate.100">{val}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </Box>
              </VStack>
            </SimpleGrid>

            {/* Lower row: Key engineering features list & Direct CTA inquiry card */}
            <SimpleGrid columns={{ base: 1, md: 12 }} spacing={8} pt={4}>
              {/* Features List */}
              <VStack align="flex-start" spacing={4} gridColumn={{ md: "span 7" }} textAlign="left">
                <Heading size="xs" fontWeight="800" color="slate.800" textTransform="uppercase" letterSpacing="0.5px">
                  Key Design & Operational Features
                </Heading>
                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="100%">
                  {selectedMachine.features.map((feat, idx) => (
                    <HStack key={idx} align="flex-start" spacing={3}>
                      <Box w="8px" h="8px" bg="brand.500" mt={1.5} flexShrink={0} />
                      <Text fontSize="xs" color="slate.600" lineHeight="1.5">
                        {feat}
                      </Text>
                    </HStack>
                  ))}
                </SimpleGrid>
              </VStack>

              {/* Inquiry Action Card */}
              <Box 
                gridColumn={{ md: "span 5" }} 
                p={8} 
                bg="linear-gradient(rgba(15, 18, 25, 0.95), rgba(15, 18, 25, 0.95)), url('/assets/images/banners/about-hero.jpg')"
                backgroundSize="cover"
                borderRadius="sm" 
                color="white"
                textAlign="center"
                boxShadow="md"
              >
                <Heading size="xs" fontWeight="800" mb={2} letterSpacing="0.5px">
                  Need this on your site?
                </Heading>
                <Text fontSize="2xs" color="slate.300" mb={6}>
                  Contact our logistics dispatch desk to schedule this equipment for plant hire or contract mobilization.
                </Text>
                <Link to={getInquiryLink(selectedMachine.title)}>
                  <Button
                    leftIcon={<FaPhoneAlt />}
                    colorScheme="brand"
                    bg="brand.500"
                    color="white"
                    px={8}
                    py={6}
                    borderRadius="full"
                    _hover={{ bg: 'brand.600', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                    fontWeight="700"
                    fontSize="sm"
                    w="100%"
                  >
                    Send Hire Inquiry
                  </Button>
                </Link>
              </Box>
            </SimpleGrid>

          </VStack>
        ) : (
          /* ========================================================================= */
          /* MAIN FLEET INTERACTIVE GALLERY GRID VIEW                                  */
          /* ========================================================================= */
          <VStack maxW="1200px" mx="auto" spacing={12} align="stretch" position="relative" zIndex="2">
            
            {/* Introductory Text */}
            <VStack maxW="900px" mx="auto" spacing={4} textAlign="center">
              <Text fontSize="xs" fontWeight="700" letterSpacing="1px" color="brand.500" textTransform="uppercase">
                HEAVY EQUIPMENT FLEET
              </Text>
              <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} fontWeight="800" color="slate.800">
                Explore our modern machinery inventory
              </Heading>
              <Text fontSize="sm" color="slate.600" lineHeight="1.8" mt={2}>
                At Mega Enterprises, we believe that high-performance equipment is the foundation of structural success. We own and maintain a premium inventory of heavy-duty civil mixers, excavators, high-accuracy graders, and loaders fully prepared for rapid site mobilization. Click any equipment card to review detailed structural specs, operational features, and dispatch details.
              </Text>
            </VStack>

            {/* 4x3 Interactive Gallery Grid */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
              {machines.map((mac, idx) => (
                <Box
                  key={idx}
                  position="relative"
                  borderRadius="sm"
                  overflow="hidden"
                  boxShadow="sm"
                  cursor="pointer"
                  onClick={() => setSelectedMachine(mac)}
                  role="group"
                  h="260px"
                  border="1px solid"
                  borderColor="slate.100"
                  _hover={{
                    boxShadow: "md",
                    transform: "translateY(-4px)",
                    borderColor: "brand.300",
                  }}
                  transition="all 0.3s"
                >
                  {/* Image with zoom scale */}
                  <Image 
                    src={mac.image} 
                    alt={mac.title}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    _groupHover={{ transform: "scale(1.08)" }}
                    transition="transform 0.4s"
                  />
                  
                  {/* Muted Black Overlay appearing on hover */}
                  <Flex
                    position="absolute"
                    inset="0"
                    bg="linear-gradient(transparent, rgba(15, 18, 25, 0.9))"
                    direction="column"
                    justify="flex-end"
                    p={5}
                    textAlign="left"
                  >
                    <Heading size="2xs" color="white" fontWeight="800" mb={1} letterSpacing="0.2px">
                      {mac.title}
                    </Heading>
                    <Text fontSize="3xs" color="slate.300" noOfLines={1} mb={2}>
                      {mac.desc}
                    </Text>
                    <Text 
                      fontSize="xx-small" 
                      fontWeight="800" 
                      color="brand.400" 
                      letterSpacing="0.5px"
                      opacity="0"
                      _groupHover={{ opacity: "1", transform: "translateY(0)" }}
                      transform="translateY(5px)"
                      transition="all 0.25s"
                      textTransform="uppercase"
                    >
                      View Specs & Detailed Info →
                    </Text>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default PlantMachinery;
