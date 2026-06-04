import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  SimpleGrid, 
  Image, 
  Icon, 
  HStack, 
  VStack,
  IconButton,
  Stack,
  StackDivider
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { 
  FaBuilding, 
  FaCog, 
  FaHardHat, 
  FaDraftingCompass, 
  FaWrench, 
  FaTruck
} from 'react-icons/fa';

// Background dots pattern helper
export const DotPattern: React.FC<{ top?: string; bottom?: string; left?: string; right?: string }> = ({ 
  top, bottom, left, right 
}) => {
  return (
    <Box 
      position="absolute"
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      w="120px"
      h="120px"
      zIndex="1"
      pointerEvents="none"
      opacity="0.15"
      backgroundImage="radial-gradient(slate.800 1.5px, transparent 1.5px)"
      backgroundSize="10px 10px"
    />
  );
};

export const Home: React.FC = () => {
  // Hero Carousel Slider configuration
  const slides = [
    {
      title: "WELCOME TO MEGA ENTERPRISES",
      heading: "Where engineering meets construction",
      image: "/assets/images/banners/slide-golden-gate.jpg"
    },
    {
      title: "STRUCTURAL INTEGRITY",
      heading: "Building iconic civil infrastructure",
      image: "/assets/images/banners/slide-manhattan-bridge.jpg"
    },
    {
      title: "MODERN LANDMARKS",
      heading: "Engineering high-capacity transit links",
      image: "/assets/images/banners/slide-bandra-worli.jpg"
    },
    {
      title: "DESIGN, BUILD, INSPIRE",
      heading: "Engineering solutions for a changing world",
      image: "/assets/images/banners/slide-tower-bridge.jpg"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  // Home page components list
  return (
    <Box position="relative" w="100%">
      {/* 1. HERO CAROUSEL */}
      <Box position="relative" h={{ base: "450px", lg: "650px" }} w="100%" overflow="hidden" bg="slate.900">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundImage: `linear-gradient(rgba(15, 18, 25, 0.65), rgba(15, 18, 25, 0.65)), url(${slides[activeSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>

        {/* Slide Content Box */}
        <Flex 
          position="absolute" 
          inset="0" 
          align="center" 
          justify="center" 
          px={6}
          textAlign="center"
        >
          <Box maxW="1000px" color="white" zIndex="2">
            {/* Corner Bracket Overlay Text styled exactly like the screenshots */}
            <Box 
              borderLeft="4px solid white" 
              borderTop="4px solid white"
              borderRight="0px"
              borderBottom="0px"
              pt={6} 
              pl={6}
              pb={4}
              display="inline-block"
              textAlign="left"
              mb={8}
            >
              <Text 
                fontSize={{ base: "xs", md: "sm" }} 
                fontWeight="700" 
                letterSpacing="3px" 
                color="brand.400" 
                mb={2}
                textTransform="uppercase"
              >
                {slides[activeSlide].title}
              </Text>
              <Heading 
                fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }} 
                fontWeight="800" 
                lineHeight="1.15" 
                letterSpacing="-0.5px"
                maxW="800px"
              >
                {slides[activeSlide].heading}
              </Heading>
            </Box>

            {/* Corner Bottom Accent - Mimics screenshot border design */}
            <Box display="flex" justifyContent="flex-start" mt={-8} mb={10}>
              <Box w="80px" h="4px" bg="white" />
            </Box>
          </Box>
        </Flex>

        {/* Carousel Chevron Arrows */}
        <IconButton
          icon={<ChevronLeftIcon fontSize="30px" />}
          aria-label="Previous Slide"
          position="absolute"
          left="20px"
          top="50%"
          transform="translateY(-50%)"
          colorScheme="whiteAlpha"
          color="white"
          borderRadius="full"
          onClick={handlePrev}
          zIndex="10"
          display={{ base: 'none', md: 'flex' }}
        />
        <IconButton
          icon={<ChevronRightIcon fontSize="30px" />}
          aria-label="Next Slide"
          position="absolute"
          right="20px"
          top="50%"
          transform="translateY(-50%)"
          colorScheme="whiteAlpha"
          color="white"
          borderRadius="full"
          onClick={handleNext}
          zIndex="10"
          display={{ base: 'none', md: 'flex' }}
        />

        {/* Navigation Dot Indicators */}
        <HStack position="absolute" bottom="30px" left="50%" transform="translateX(-50%)" spacing={3} zIndex="10">
          {slides.map((_, index) => (
            <Box
              key={index}
              w="10px"
              h="10px"
              borderRadius="full"
              bg={index === activeSlide ? 'brand.500' : 'whiteAlpha.600'}
              cursor="pointer"
              onClick={() => setActiveSlide(index)}
              transition="all 0.3s"
            />
          ))}
        </HStack>
      </Box>

      {/* 2. WELCOME / ABOUT INTRO SECTION */}
      <Box py={{ base: 16, lg: 24 }} px={{ base: 6, lg: 12 }} bg="white" position="relative" overflow="hidden">
        <Flex 
          direction={{ base: 'column', lg: 'row' }} 
          maxW="1200px" 
          mx="auto" 
          align="center" 
          gap={16}
          position="relative"
          zIndex="2"
        >
          {/* Left Column Content */}
          <VStack align="flex-start" spacing={6} flex="1" textAlign="left">
            <Text 
              fontSize="xs" 
              fontWeight="700" 
              letterSpacing="1.5px" 
              color="slate.400"
              textTransform="uppercase"
            >
              QUALITY BUILDING AND CONSTRUCTION SOLUTIONS
            </Text>
            
            <Heading 
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} 
              fontWeight="400" 
              color="slate.800" 
              lineHeight="1.2"
            >
              Creating customized building and construction solutions <Text as="span" fontWeight="800">from start to finish.</Text>
            </Heading>
            
            {/* Indicator Square bullet */}
            <HStack align="center" spacing={3} py={1}>
              <Box w="12px" h="12px" bg="brand.500" />
              <Text fontWeight="700" fontSize="sm" color="slate.800" letterSpacing="0.5px">
                End-to-End Engineering Solutions
              </Text>
            </HStack>
            
            <Text fontSize="sm" color="slate.600" lineHeight="1.7">
              Welcome to <Text as="span" fontWeight="600">Mega Enterprises Limited</Text>, your premier partner in building and construction engineering. <Text as="span" color="brand.500" fontWeight="600">With a solid reputation for excellence</Text> and a passion for delivering exceptional results, we are here to bring your construction projects to life with precision and innovation.
            </Text>
            
            <Text fontSize="sm" color="slate.600" lineHeight="1.7">
              At Mega Enterprises, we understand that each project is unique, with its own set of challenges and requirements. With our extensive experience and expertise in the industry, we are equipped to handle a wide range of construction projects, from residential and commercial buildings to large-scale industrial complexes.
            </Text>

            <Link to="/about/who-we-are" style={{ textDecoration: 'none' }}>
              <Button 
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
              >
                Learn More
              </Button>
            </Link>
          </VStack>

          {/* Right Column Visual Image (Excavator with offsets and dot grids) */}
          <Box flex="1" position="relative" w="100%" maxW="500px" h="450px" mt={{ base: 8, lg: 0 }}>
            {/* Dot Grids on corners */}
            <DotPattern top="-20px" left="-30px" />
            <DotPattern bottom="-20px" right="-30px" />
            
            {/* Orange Offset Border */}
            <Box 
              position="absolute"
              inset="15px -15px -15px 15px"
              bg="brand.500"
              zIndex="1"
            />
            
            {/* Intro Section Right Image: Active excavator on Kenyan-style construction site */}
            <Image 
              src="/assets/images/banners/welcome-card.jpg"
              alt="Heavy Machinery Operations"
              objectFit="cover"
              w="100%"
              h="100%"
              position="relative"
              zIndex="2"
              boxShadow="lg"
            />
          </Box>
        </Flex>
      </Box>

      {/* 3. OUR SERVICES SECTION */}
      <Box py={{ base: 16, lg: 24 }} px={{ base: 6, lg: 12 }} bg="slate.50" position="relative" overflow="hidden">
        <VStack maxW="1200px" mx="auto" spacing={12} position="relative" zIndex="2">
          {/* Header Texts */}
          <VStack spacing={3} textAlign="center" maxW="800px">
            <Text fontSize="xs" fontWeight="700" letterSpacing="2px" color="brand.500" textTransform="uppercase">
              OUR SERVICES
            </Text>
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="400" color="slate.800">
              Your Construction Partner <Text as="span" fontWeight="800">for Engineering</Text> Excellence
            </Heading>
            <Text fontSize="sm" color="slate.500" lineHeight="1.6" mt={2}>
              Mega Enterprises seamlessly merges <Text as="span" color="brand.500" fontWeight="600">cutting-edge building and construction solutions</Text> with enabling technologies, empowering projects of all scales.
            </Text>
          </VStack>

          {/* 3x2 Grid of service cards */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
            {[
              {
                icon: FaBuilding,
                title: "Design and Build",
                desc: "Simplify your construction journey with our integrated Design and Build solutions",
                link: "/services/design-build"
              },
              {
                icon: FaCog,
                title: "Mechanical Engineering",
                desc: "Harness the power of mechanical engineering to drive innovation and efficiency in your projects",
                link: "/services/mechanical-engineering"
              },
              {
                icon: FaHardHat,
                title: "Construction Management",
                desc: "Navigate your construction project with our streamlined coordination, and efficient project execution.",
                link: "/services/construction-management"
              },
              {
                icon: FaDraftingCompass,
                title: "Architectural Engineering",
                desc: "Our skilled engineers blend artistic vision with technical precision for extraordinary results.",
                link: "/services/architectural-engineering"
              },
              {
                icon: FaWrench,
                title: "Civil Engineering",
                desc: "Combining technical mastery to deliver robust solutions that stand the test of time.",
                link: "/services/civil-engineering"
              },
              {
                icon: FaTruck,
                title: "Project Engineering",
                desc: "Trust in our project engineering prowess to overcome challenges, mitigate risks, and drive efficiency.",
                link: "/services/project-engineering"
              }
            ].map((srv, idx) => (
              <Box
                key={idx}
                as={Link}
                to={srv.link}
                bg="white"
                p={8}
                borderRadius="sm"
                border="1px solid"
                borderColor="slate.100"
                textAlign="center"
                boxShadow="sm"
                _hover={{
                  boxShadow: "md",
                  transform: "translateY(-4px)",
                  borderColor: "brand.300",
                }}
                transition="all 0.3s"
                display="flex"
                flexDirection="column"
                alignItems="center"
                zIndex="2"
              >
                <Flex 
                  w="56px" 
                  h="56px" 
                  align="center" 
                  justify="center" 
                  borderRadius="sm" 
                  border="1.5px solid"
                  borderColor="brand.500"
                  color="brand.500"
                  mb={6}
                >
                  <Icon as={srv.icon} fontSize="24px" />
                </Flex>
                <Heading size="sm" fontWeight="700" color="slate.800" mb={3}>
                  {srv.title}
                </Heading>
                <Text fontSize="xs" color="slate.500" lineHeight="1.6">
                  {srv.desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
        <DotPattern bottom="20px" left="20px" />
      </Box>

      {/* 4. STATS BANNER */}
      <Box 
        position="relative" 
        py={16} 
        px={6}
        backgroundImage="linear-gradient(rgba(15, 18, 25, 0.88), rgba(15, 18, 25, 0.88)), url('/assets/images/banners/about-hero.jpg')"
        backgroundSize="cover"
        backgroundAttachment={{ base: 'scroll', lg: 'fixed' }}
        backgroundPosition="center"
        color="white"
      >
        <Stack 
          direction={{ base: 'column', md: 'row' }} 
          maxW="1200px" 
          mx="auto" 
          justify="space-between" 
          align="center"
          spacing={{ base: 10, md: 4 }}
          divider={<StackDivider borderColor="whiteAlpha.300" display={{ base: 'none', md: 'block' }} />}
          w="100%"
        >
          {[
            { icon: FaDraftingCompass, value: "1000+", label: "Completed Projects" },
            { icon: FaHardHat, value: "1000+", label: "Satisfied Clients" },
            { icon: FaTruck, value: "500+", label: "Client Referrals" },
            { icon: FaBuilding, value: "20+", label: "Years of Experience" }
          ].map((stat, idx) => (
            <Flex key={idx} align="center" justify="center" flex="1" w="100%" gap={4}>
              <Icon as={stat.icon} fontSize="40px" color="brand.500" flexShrink={0} />
              <Box textAlign="left">
                <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800" lineHeight="1" mb={1} color="white">
                  {stat.value}
                </Text>
                <Text fontSize="xs" fontWeight="700" color="slate.300" textTransform="uppercase" letterSpacing="0.5px">
                  {stat.label}
                </Text>
              </Box>
            </Flex>
          ))}
        </Stack>
      </Box>

      {/* 5. PORTFOLIO PREVIEW */}
      <Box py={{ base: 16, lg: 24 }} px={{ base: 6, lg: 12 }} bg="white" position="relative" overflow="hidden">
        <DotPattern top="20px" left="20px" />
        <DotPattern bottom="20px" right="20px" />
        
        <VStack maxW="1200px" mx="auto" spacing={12} position="relative" zIndex="2">
          {/* Header */}
          <VStack spacing={3} textAlign="center" maxW="800px">
            <Text fontSize="xs" fontWeight="700" letterSpacing="2px" color="brand.500" textTransform="uppercase">
              OUR WORK
            </Text>
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="400" color="slate.800">
              We cover a broad spectrum of <Text as="span" fontWeight="800">building & civil engineering</Text> projects
            </Heading>
          </VStack>

          {/* 4 Cards Row */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="100%">
            {[
              {
                title: "Kasarani Sports Academy Multi-Purpose Stadium",
                image: "/assets/images/portfolio/stadium-2.jpg",
                link: "/portfolio/kasarani-sports-academy"
              },
              {
                title: "KeNHA Northern Corridor Bypass Interchange",
                image: "/assets/images/portfolio/mpw-1.jpg",
                link: "/portfolio/kenha-highway-project"
              },
              {
                title: "KALRO Coffee Research and Breeding Laboratories, Ruiru",
                image: "/assets/images/portfolio/cri-2.jpg",
                link: "/portfolio/kalro-ruiru-labs"
              },
              {
                title: "National Police Service Senior Staff College, Loresho",
                image: "/assets/images/portfolio/cid-1.jpg",
                link: "/portfolio/nps-staff-college"
              }
            ].map((proj, idx) => (
              <Box
                key={idx}
                as={Link}
                to={proj.link}
                position="relative"
                h="350px"
                borderRadius="sm"
                overflow="hidden"
                boxShadow="sm"
                role="group"
              >
                {/* Background Image with hover zoom */}
                <Box
                  w="100%"
                  h="100%"
                  backgroundImage={`linear-gradient(rgba(15, 18, 25, 0.25), rgba(15, 18, 25, 0.78)), url(${proj.image})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  _groupHover={{ transform: "scale(1.06)" }}
                  transition="transform 0.4s"
                />
                
                {/* Text overlays matching design */}
                <Flex
                  position="absolute"
                  inset="0"
                  direction="column"
                  justify="flex-end"
                  p={6}
                  textAlign="left"
                >
                  <Heading size="xs" color="white" fontWeight="700" lineHeight="1.4" mb={2}>
                    {proj.title}
                  </Heading>
                  <Text 
                    fontSize="xx-small" 
                    fontWeight="700" 
                    color="white" 
                    letterSpacing="1px"
                    textTransform="uppercase"
                    _groupHover={{ color: 'brand.400' }}
                    transition="color 0.2s"
                  >
                    View Project →
                  </Text>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>

          {/* Action button */}
          <Link to="/portfolio" style={{ textDecoration: 'none' }}>
            <Button
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
              mt={4}
            >
              See More Projects
            </Button>
          </Link>
        </VStack>
      </Box>
    </Box>
  );
};
export default Home;
