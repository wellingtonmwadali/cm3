import React from 'react';
import { Box, Flex, HStack, Text, Link, Icon } from '@chakra-ui/react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const TopBar: React.FC = () => {
  return (
    <Box 
      bg="slate.900" 
      color="white" 
      py={2} 
      px={{ base: 4, lg: 12 }} 
      fontSize="xs" 
      borderBottom="1px solid"
      borderColor="slate.800"
    >
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        justify="space-between" 
        align="center"
        maxW="1400px"
        mx="auto"
        gap={{ base: 2, md: 0 }}
      >
        <HStack spacing={6} direction={{ base: 'column', md: 'row' }} align="center">
          <Link href="tel:0711222345" _hover={{ color: 'brand.400' }} display="flex" alignItems="center">
            <Icon as={FaPhoneAlt} mr={2} color="brand.500" />
            <Text fontWeight="500">0711 222 345</Text>
          </Link>
          <Link href="mailto:info@megaenterprises.co.ke" _hover={{ color: 'brand.400' }} display="flex" alignItems="center">
            <Icon as={FaEnvelope} mr={2} color="brand.500" />
            <Text fontWeight="500">info@megaenterprises.co.ke</Text>
          </Link>
        </HStack>
        
        <HStack spacing={2} align="center">
          <Icon as={FaMapMarkerAlt} color="brand.500" />
          <Text fontWeight="500">Alisa Plaza, Thika Town, Kenya</Text>
        </HStack>
      </Flex>
    </Box>
  );
};
export default TopBar;
