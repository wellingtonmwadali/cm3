import React from 'react';
import { 
  Box, 
  SimpleGrid, 
  VStack, 
  Heading, 
  Text, 
  HStack, 
  Link as ChakraLink, 
  Icon, 
  Flex,
  Divider
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { 
  FaTwitter, 
  FaFacebookF, 
  FaYoutube, 
  FaVimeoV, 
  FaClock, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope 
} from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <Box bg="slate.800" color="white" pt={16} pb={8} px={{ base: 6, lg: 12 }}>
      <Flex direction="column" maxW="1400px" mx="auto">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mb={16}>
          {/* Column 1: About Us */}
          <VStack align="flex-start" spacing={6}>
            <Heading size="md" fontWeight="700" color="white" position="relative" pb={2}>
              About Us
              <Box position="absolute" bottom="0" left="0" w="40px" h="2px" bg="brand.500" />
            </Heading>
            <Text fontSize="sm" color="slate.300" lineHeight="1.6" pr={{ lg: 4 }}>
              Mega Enterprises Limited is a dynamic and reputable company comprising a team of building and civil engineering experts in Kenya. With a wealth of knowledge and experience in the industry, Mega Enterprises has become a trusted name for delivering exceptional construction projects.
            </Text>
            {/* Social Icons matching design */}
            <HStack spacing={4}>
              {[
                { icon: FaTwitter, href: 'https://twitter.com' },
                { icon: FaFacebookF, href: 'https://facebook.com' },
                { icon: FaYoutube, href: 'https://youtube.com' },
                { icon: FaVimeoV, href: 'https://vimeo.com' }
              ].map((soc, idx) => (
                <ChakraLink 
                  key={idx} 
                  href={soc.href} 
                  isExternal 
                  w="36px" 
                  h="36px" 
                  borderRadius="full" 
                  bg="slate.700" 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                  _hover={{ bg: 'brand.500', color: 'white', transform: 'translateY(-2px)' }}
                  transition="all 0.2s"
                >
                  <Icon as={soc.icon} size="14px" />
                </ChakraLink>
              ))}
            </HStack>
          </VStack>

          {/* Column 2: Our Services */}
          <VStack align="flex-start" spacing={6}>
            <Heading size="md" fontWeight="700" color="white" position="relative" pb={2}>
              Our Services
              <Box position="absolute" bottom="0" left="0" w="40px" h="2px" bg="brand.500" />
            </Heading>
            <SimpleGrid columns={2} spacing={4} w="100%" fontSize="sm">
              <VStack align="flex-start" spacing={3}>
                <ChakraLink as={Link} to="/services/construction-management" color="slate.300" _hover={{ color: 'brand.400' }}>
                  Construction Management
                </ChakraLink>
                <ChakraLink as={Link} to="/services/project-engineering" color="slate.300" _hover={{ color: 'brand.400' }}>
                  Project Engineering
                </ChakraLink>
                <ChakraLink as={Link} to="/services/architectural-engineering" color="slate.300" _hover={{ color: 'brand.400' }}>
                  Architectural Engineering
                </ChakraLink>
              </VStack>
              <VStack align="flex-start" spacing={3}>
                <ChakraLink as={Link} to="/services/civil-engineering" color="slate.300" _hover={{ color: 'brand.400' }}>
                  Civil Engineering
                </ChakraLink>
                <ChakraLink as={Link} to="/services/design-build" color="slate.300" _hover={{ color: 'brand.400' }}>
                  Design and Build
                </ChakraLink>
                <ChakraLink as={Link} to="/services/mechanical-engineering" color="slate.300" _hover={{ color: 'brand.400' }}>
                  Mechanical Engineering
                </ChakraLink>
              </VStack>
            </SimpleGrid>
          </VStack>

          {/* Column 3: Useful Links */}
          <VStack align="flex-start" spacing={6}>
            <Heading size="md" fontWeight="700" color="white" position="relative" pb={2}>
              Useful Links
              <Box position="absolute" bottom="0" left="0" w="40px" h="2px" bg="brand.500" />
            </Heading>
            <VStack align="flex-start" spacing={3} fontSize="sm">
              <ChakraLink as={Link} to="/about/who-we-are" color="slate.300" _hover={{ color: 'brand.400' }}>
                About Us
              </ChakraLink>
              <ChakraLink as={Link} to="/portfolio" color="slate.300" _hover={{ color: 'brand.400' }}>
                Portfolio
              </ChakraLink>
              <ChakraLink as={Link} to="/about/company-profile" color="slate.300" _hover={{ color: 'brand.400' }}>
                Company Profile
              </ChakraLink>
              <ChakraLink as={Link} to="/about/awards-certificates" color="slate.300" _hover={{ color: 'brand.400' }}>
                Awards & Certificates
              </ChakraLink>
              <ChakraLink as={Link} to="/contact" color="slate.300" _hover={{ color: 'brand.400' }}>
                Contact Us
              </ChakraLink>
            </VStack>
          </VStack>

          {/* Column 4: Contact */}
          <VStack align="flex-start" spacing={6}>
            <Heading size="md" fontWeight="700" color="white" position="relative" pb={2}>
              Contact
              <Box position="absolute" bottom="0" left="0" w="40px" h="2px" bg="brand.500" />
            </Heading>
            <VStack align="flex-start" spacing={4} fontSize="sm" w="100%">
              {/* Clock Info */}
              <HStack align="flex-start" spacing={3}>
                <Flex w="24px" h="24px" align="center" justify="center" borderRadius="full" bg="brand.500" shrink={0}>
                  <Icon as={FaClock} size="12px" color="white" />
                </Flex>
                <Text color="slate.300">Mon - Fri: 8.00am to 6.00pm</Text>
              </HStack>

              {/* Pin Info */}
              <HStack align="flex-start" spacing={3}>
                <Flex w="24px" h="24px" align="center" justify="center" borderRadius="full" bg="brand.500" shrink={0}>
                  <Icon as={FaMapMarkerAlt} size="12px" color="white" />
                </Flex>
                <Text color="slate.300">Alisa Plaza, Thika Town, Kenya</Text>
              </HStack>

              {/* Phone Info */}
              <HStack align="flex-start" spacing={3}>
                <Flex w="24px" h="24px" align="center" justify="center" borderRadius="full" bg="brand.500" shrink={0}>
                  <Icon as={FaPhoneAlt} size="12px" color="white" />
                </Flex>
                <ChakraLink href="tel:0711222345" color="slate.300" _hover={{ color: 'brand.400' }}>
                  0711 222 345
                </ChakraLink>
              </HStack>

              {/* Email Info */}
              <HStack align="flex-start" spacing={3}>
                <Flex w="24px" h="24px" align="center" justify="center" borderRadius="full" bg="brand.500" shrink={0}>
                  <Icon as={FaEnvelope} size="12px" color="white" />
                </Flex>
                <ChakraLink href="mailto:info@megaenterprises.co.ke" color="slate.300" textDecoration="underline" _hover={{ color: 'brand.400' }}>
                  info@megaenterprises.co.ke
                </ChakraLink>
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>

        <Divider borderColor="slate.700" mb={8} />

        {/* Copyright Bar */}
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          justify="space-between" 
          align="center"
          fontSize="xs"
          color="slate.400"
          gap={{ base: 4, md: 0 }}
        >
          <Text>© {new Date().getFullYear()} Mega Enterprises Limited, All rights reserved.</Text>
          <HStack spacing={4}>
            <ChakraLink as={Link} to="/terms" _hover={{ color: 'white' }}>Terms of Use</ChakraLink>
            <Text>|</Text>
            <ChakraLink as={Link} to="/privacy" _hover={{ color: 'white' }}>Privacy Policy</ChakraLink>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Footer;
