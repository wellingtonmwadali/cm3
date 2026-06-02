import React from 'react';
import { 
  Box, 
  SimpleGrid, 
  Heading, 
  Text, 
  VStack, 
  Icon, 
  Flex 
} from '@chakra-ui/react';
import { FaEye, FaBullseye, FaShieldAlt, FaHandshake, FaAward, FaSearchPlus } from 'react-icons/fa';
import SubpageHeader from '../../components/SubpageHeader';
import { DotPattern } from '../Home';

export const CompanyProfile: React.FC = () => {
  return (
    <Box w="100%">
      {/* Header Banner */}
      <SubpageHeader 
        title="Company Profile" 
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: 'Company Profile' }]} 
      />

      {/* Corporate Mission & Vision Panel */}
      <Box py={{ base: 14, lg: 20 }} px={{ base: 6, lg: 12 }} bg="white" position="relative">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} maxW="1200px" mx="auto" position="relative" zIndex="2">
          {/* Mission */}
          <VStack 
            align="flex-start" 
            spacing={5} 
            p={8} 
            bg="slate.50" 
            borderRadius="sm" 
            borderLeft="4px solid" 
            borderColor="brand.500"
            shadow="sm"
          >
            <Flex w="50px" h="50px" align="center" justify="center" bg="brand.500" color="white" borderRadius="sm">
              <Icon as={FaBullseye} fontSize="20px" />
            </Flex>
            <Heading size="md" fontWeight="800" color="slate.800">Our Mission</Heading>
            <Text fontSize="sm" color="slate.600" lineHeight="1.7" textAlign="left">
              To deliver superior building and civil engineering solutions that exceed client expectations, while promoting safety, environmental responsibility, and cost-effectiveness in every project we execute. We aim to contribute to infrastructure developments that empower communities and support sustainable economic growth.
            </Text>
          </VStack>

          {/* Vision */}
          <VStack 
            align="flex-start" 
            spacing={5} 
            p={8} 
            bg="slate.50" 
            borderRadius="sm" 
            borderLeft="4px solid" 
            borderColor="brand.500"
            shadow="sm"
          >
            <Flex w="50px" h="50px" align="center" justify="center" bg="brand.500" color="white" borderRadius="sm">
              <Icon as={FaEye} fontSize="20px" />
            </Flex>
            <Heading size="md" fontWeight="800" color="slate.800">Our Vision</Heading>
            <Text fontSize="sm" color="slate.600" lineHeight="1.7" textAlign="left">
              To be the leading and most trusted civil engineering and construction partner in East Africa, recognized for our commitment to quality craftsmanship, technical mastery, innovative solutions, and the professional growth of our highly skilled workforce.
            </Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* CORE VALUES PANEL */}
      <Box py={{ base: 14, lg: 20 }} px={{ base: 6, lg: 12 }} bg="slate.50" position="relative" overflow="hidden">
        <DotPattern top="20px" left="20px" />
        
        <VStack maxW="1200px" mx="auto" spacing={12} position="relative" zIndex="2">
          {/* Section title */}
          <VStack spacing={3} textAlign="center">
            <Text fontSize="xs" fontWeight="700" letterSpacing="2px" color="brand.500" textTransform="uppercase">
              OUR VALUES
            </Text>
            <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} fontWeight="800" color="slate.800">
              The Principles That Drive Our Success
            </Heading>
          </VStack>

          {/* 4 Values Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="100%">
            {[
              {
                icon: FaShieldAlt,
                title: "Safety First",
                desc: "We prioritize safety across all site tasks, keeping safety risks at zero for our workers and stakeholders."
              },
              {
                icon: FaHandshake,
                title: "Integrity",
                desc: "We execute our work under the highest standards of transparency, corporate ethics, and compliance."
              },
              {
                icon: FaAward,
                title: "Excellence",
                desc: "We commit ourselves to delivering quality structures that stand the test of time and weather."
              },
              {
                icon: FaSearchPlus,
                title: "Attention to Detail",
                desc: "We meticulous align materials and specs, executing with precision from blueprints to completion."
              }
            ].map((val, idx) => (
              <VStack
                key={idx}
                align="flex-start"
                bg="white"
                p={6}
                borderRadius="sm"
                border="1px solid"
                borderColor="slate.100"
                shadow="sm"
                spacing={4}
                textAlign="left"
              >
                <Icon as={val.icon} fontSize="28px" color="brand.500" />
                <Heading size="xs" fontWeight="800" color="slate.800">
                  {val.title}
                </Heading>
                <Text fontSize="xs" color="slate.500" lineHeight="1.6">
                  {val.desc}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </Box>
  );
};
export default CompanyProfile;
