import React, { useState } from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Image, 
  VStack, 
  IconButton
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import SubpageHeader from '../../components/SubpageHeader';
import { DotPattern } from '../Home';

export const WhoWeAre: React.FC = () => {
  // Executive Board & Management Team details
  const teamMembers = [
    {
      name: "Eng. Benson Mwangi",
      role: "Managing Director & CEO",
      image: "/assets/images/team/member-1.jpg" // Male CEO
    },
    {
      name: "Eng. Joseph Omondi",
      role: "Projects Director",
      image: "/assets/images/team/member-2.jpg" // Male Engineer planning
    },
    {
      name: "Eng. David Kilonzo",
      role: "Chief Electrical Engineer",
      image: "/assets/images/team/member-3.jpg" // Male Electrical Engineer
    },
    {
      name: "Patrick Mutua",
      role: "Machinery Operations Lead",
      image: "/assets/images/team/member-4.jpg" // Male operator with earmuffs
    },
    {
      name: "Moses Kiprop",
      role: "Site Construction Foreman",
      image: "/assets/images/team/member-5.jpg" // Male engineer with helmet
    },
    {
      name: "Eng. Kennedy Waweru",
      role: "Chief Structural Engineer",
      image: "/assets/images/team/member-6.jpg" // Male wearing safety helmet
    },
    {
      name: "Vincent Otieno",
      role: "Operations Manager",
      image: "/assets/images/team/member-7.jpg" // Male writing on paper
    },
    {
      name: "Grace Nekesa",
      role: "Finance Director",
      image: "/assets/images/team/member-8.jpg" // Female corporate finance
    },
    {
      name: "Job Barasa",
      role: "Fleet & Logistics Manager",
      image: "/assets/images/team/member-9.jpg" // Male architect at desk
    }
  ];

  // Carousel offset controls (sliding smoothly 1 card at a time on desktop)
  const [slideIndex, setSlideIndex] = useState(0);
  const maxSlides = teamMembers.length - 3; // Locks exactly at index 6 (Vincent, Grace, Job in view)

  const slideLeft = () => {
    setSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  const slideRight = () => {
    setSlideIndex((prev) => Math.min(prev + 1, maxSlides));
  };

  return (
    <Box w="100%">
      {/* Visual Header */}
      <SubpageHeader 
        title="About Mega Construction" 
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: 'Who We Are' }]} 
      />

      {/* Main Corporate Overview Panel */}
      <Box py={{ base: 14, lg: 20 }} px={{ base: 6, lg: 12 }} bg="white">
        <Flex 
          direction={{ base: 'column', lg: 'row' }} 
          maxW="1200px" 
          mx="auto" 
          align="center" 
          gap={16}
        >
          {/* Left Column Content */}
          <VStack align="flex-start" spacing={6} flex="1" textAlign="left">
            <Heading 
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} 
              fontWeight="400" 
              color="slate.800" 
              lineHeight="1.25"
            >
              We bring a blend of <Text as="span" fontWeight="800">expertise, creativity, and attention to detail that sets us apart.</Text>
            </Heading>
            
            <Text fontSize="sm" color="slate.600" lineHeight="1.7">
              Mega Enterprises Limited is a dynamic and reputable company comprising a team of building and civil engineering experts. With our wealth of knowledge and experience in the industry, we have become a trusted name for delivering exceptional construction projects.
            </Text>
            
            <Text fontSize="sm" color="slate.600" lineHeight="1.7">
              Our team consists of highly skilled professionals who are passionate about their work. From architects and engineers to project managers and skilled craftsmen, our diverse talents come together seamlessly to ensure the successful execution of every project. We stay updated with the latest industry trends and technological advancements, enabling us to incorporate cutting-edge solutions into our work.
            </Text>

            <Text fontSize="sm" color="slate.600" lineHeight="1.7">
              Client satisfaction is at the heart of our business philosophy. We believe in establishing strong partnerships with our clients, understanding their unique requirements, and delivering results that exceed expectations. Through open communication and collaboration, we work closely with our clients to create customized solutions that meet their specific needs, budget, and timeline.
            </Text>

            <Link to="/portfolio">
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
                mt={2}
              >
                View Projects
              </Button>
            </Link>
          </VStack>

          {/* Right Column Excavator visual */}
          <Box flex="1" position="relative" w="100%" maxW="500px" h="400px">
            <DotPattern bottom="-20px" right="-30px" />
            
            {/* Orange visual offset container */}
            <Box 
              position="absolute"
              inset="15px -15px -15px 15px"
              bg="brand.500"
              zIndex="1"
            />
            
            {/* Large On-Site Construction Image */}
            <Image 
              src="/assets/images/banners/about-hero.jpg"
              alt="Who We Are - Engineering Site"
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

      {/* MEET THE TEAM SECTION */}
      <Box py={{ base: 14, lg: 20 }} px={{ base: 6, lg: 12 }} bg="slate.50" position="relative" overflow="hidden">
        <VStack maxW="1200px" mx="auto" spacing={12} position="relative" zIndex="2">
          {/* Header */}
          <VStack spacing={3} textAlign="center" maxW="800px">
            <Text fontSize="xs" fontWeight="700" letterSpacing="2px" color="brand.500" textTransform="uppercase">
              MEET THE TEAM
            </Text>
            <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} fontWeight="800" color="slate.800">
              The team behind Mega's Success
            </Heading>
            <Text fontSize="sm" color="slate.500" maxW="600px">
              Discover the brilliant team of building and civil engineering experts, dedicated professionals who make our success story possible.
            </Text>
          </VStack>

          {/* Slider Layout Component */}
          <Box position="relative" w="100%" px={{ base: 0, md: 10 }}>
            
            {/* Nav Arrows */}
            <IconButton
              icon={<ChevronLeftIcon fontSize="24px" />}
              aria-label="Slide Left"
              position="absolute"
              left="-10px"
              top="50%"
              transform="translateY(-50%)"
              zIndex="10"
              onClick={slideLeft}
              isDisabled={slideIndex === 0}
              colorScheme="slate"
              variant="outline"
              bg="white"
              borderRadius="full"
              shadow="md"
              display={{ base: 'none', md: 'flex' }}
            />
            <IconButton
              icon={<ChevronRightIcon fontSize="24px" />}
              aria-label="Slide Right"
              position="absolute"
              right="-10px"
              top="50%"
              transform="translateY(-50%)"
              zIndex="10"
              onClick={slideRight}
              isDisabled={slideIndex === maxSlides}
              colorScheme="slate"
              variant="outline"
              bg="white"
              borderRadius="full"
              shadow="md"
              display={{ base: 'none', md: 'flex' }}
            />

            {/* Slider cards list */}
            <Box overflow="hidden" w="100%">
              <Flex 
                transform={{ 
                  base: `translateX(0)`, // Mobile wraps in responsive rows
                  md: `translateX(-${slideIndex * (100 / teamMembers.length)}%)` // Desktop slides smoothly by exactly 1 card column (1/9th of the container width) at a time
                }} 
                transition="transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
                w={{ base: "100%", md: `${(teamMembers.length / 3) * 100}%` }}
                direction={{ base: 'column', md: 'row' }}
                gap={0}
              >
                {teamMembers.map((member, idx) => (
                  <Box 
                    key={idx} 
                    w={{ base: "100%", md: `${100 / teamMembers.length}%` }} 
                    px={3}
                  >
                    <Box 
                      bg="white" 
                      border="1px solid" 
                      borderColor="slate.100" 
                      p={5} 
                      borderRadius="sm" 
                      shadow="sm"
                      textAlign="center"
                      h="100%"
                    >
                      <Box 
                        w="100%" 
                        h="240px" 
                        overflow="hidden" 
                        borderRadius="sm" 
                        mb={4}
                      >
                        <Image 
                          src={member.image} 
                          alt={member.name}
                          h="100%"
                          w="100%"
                          objectFit="cover"
                          objectPosition="center"
                          transition="all 0.3s"
                          _hover={{ transform: 'scale(1.05)' }}
                        />
                      </Box>
                      <Heading size="xs" fontWeight="800" color="slate.800" mb={1}>
                        {member.name}
                      </Heading>
                      <Text fontSize="xs" color="slate.500" fontWeight="600">
                        {member.role}
                      </Text>
                    </Box>
                  </Box>
                ))}
              </Flex>
            </Box>

            {/* Dots removed to rely entirely on arrow sliders with locked boundaries */}
          </Box>
        </VStack>
        <DotPattern bottom="20px" right="20px" />
      </Box>
    </Box>
  );
};
export default WhoWeAre;
