import React from 'react';
import { 
  Box, 
  SimpleGrid, 
  Heading, 
  Text, 
  VStack, 
  Icon, 
  Flex,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { FaCheckCircle, FaAward, FaBuilding, FaRoad, FaWater, FaCertificate } from 'react-icons/fa';
import SubpageHeader from '../../components/SubpageHeader';
import { DotPattern } from '../Home';

export const AwardsCertificates: React.FC = () => {
  return (
    <Box w="100%">
      {/* Visual Header */}
      <SubpageHeader 
        title="Awards and Certificates" 
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: 'Awards and Certificates' }]} 
      />

      {/* NCA Registration Details */}
      <Box py={{ base: 14, lg: 20 }} px={{ base: 6, lg: 12 }} bg="white">
        <VStack maxW="1000px" mx="auto" spacing={12} align="flex-start" textAlign="left">
          <VStack spacing={3} align="flex-start">
            <Text fontSize="xs" fontWeight="700" letterSpacing="1px" color="brand.500" textTransform="uppercase">
              NATIONAL REGISTRATION
            </Text>
            <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} fontWeight="800" color="slate.800">
              National Construction Authority (NCA) Credentials
            </Heading>
            <Text fontSize="sm" color="slate.600" lineHeight="1.7">
              Mega Enterprises Limited is registered with the National Construction Authority (NCA) of Kenya under the highest contractor registration tiers, enabling us to handle unlimited contract value civil works, infrastructure developments, and buildings.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="100%">
            {[
              {
                icon: FaBuilding,
                title: "NCA 1 - Building Works",
                value: "Unlimited Contract Value",
                desc: "Registered to construct heavy-rise administrative buildings, commercial blocks, residential apartments, and high-rise structures."
              },
              {
                icon: FaRoad,
                title: "NCA 1 - Road & Civil Works",
                value: "Unlimited Contract Value",
                desc: "Certified to perform earthworks, construct highways, bridges, standard civil road designs, and heavy concrete overpasses."
              },
              {
                icon: FaWater,
                title: "NCA 2 - Water Works",
                value: "Heavy Infrastructure Value",
                desc: "Registered to carry out utility installations, pipelines, wastewater systems, concrete reservoirs, and water treatment plants."
              }
            ].map((nca, idx) => (
              <VStack
                key={idx}
                align="flex-start"
                p={6}
                bg="slate.50"
                borderRadius="sm"
                borderTop="3px solid"
                borderColor="brand.500"
                shadow="sm"
                spacing={4}
              >
                <Icon as={nca.icon} fontSize="28px" color="slate.800" />
                <Box>
                  <Heading size="xs" fontWeight="800" color="slate.800" mb={1}>
                    {nca.title}
                  </Heading>
                  <Text fontSize="2xs" fontWeight="700" color="brand.500" textTransform="uppercase" letterSpacing="0.5px" mb={2}>
                    {nca.value}
                  </Text>
                  <Text fontSize="xs" color="slate.600" lineHeight="1.6">
                    {nca.desc}
                  </Text>
                </Box>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>

      {/* ISO CERTIFICATIONS & SAFETY STANDARDS */}
      <Box py={{ base: 14, lg: 20 }} px={{ base: 6, lg: 12 }} bg="slate.50" position="relative" overflow="hidden">
        <DotPattern bottom="20px" left="20px" />
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} maxW="1000px" mx="auto" position="relative" zIndex="2">
          {/* ISO */}
          <VStack align="flex-start" spacing={6} textAlign="left">
            <Flex w="48px" h="48px" bg="slate.800" color="white" align="center" justify="center" borderRadius="sm">
              <Icon as={FaCertificate} fontSize="20px" />
            </Flex>
            <Heading size="md" fontWeight="800" color="slate.800">ISO Certifications</Heading>
            <Text fontSize="xs" color="slate.600" lineHeight="1.6">
              Our engineering processes are audited regularly to satisfy standard global benchmarks. We operate under:
            </Text>
            <List spacing={3} fontSize="xs" color="slate.600" fontWeight="500">
              <ListItem>
                <ListIcon as={FaCheckCircle} color="brand.500" />
                ISO 9001:2015 – Quality Management Systems
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="brand.500" />
                ISO 14001:2015 – Environmental Management Systems
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="brand.500" />
                ISO 45001:2018 – Occupational Health and Safety Systems
              </ListItem>
            </List>
          </VStack>

          {/* Safety & Compliance */}
          <VStack align="flex-start" spacing={6} textAlign="left">
            <Flex w="48px" h="48px" bg="slate.800" color="white" align="center" justify="center" borderRadius="sm">
              <Icon as={FaAward} fontSize="20px" />
            </Flex>
            <Heading size="md" fontWeight="800" color="slate.800">Safety & Environmental Awards</Heading>
            <Text fontSize="xs" color="slate.600" lineHeight="1.6">
              We hold safety at the center of our corporate performance. Mega Enterprises is proud of our industry recognitions:
            </Text>
            <List spacing={3} fontSize="xs" color="slate.600" fontWeight="500">
              <ListItem>
                <ListIcon as={FaCheckCircle} color="brand.500" />
                NEMA (National Environment Management Authority) Clearances
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="brand.500" />
                DOSHS (Directorate of Occupational Safety and Health Services) Compliance
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="brand.500" />
                Yearly National Contractor Safety Recognition Trophies
              </ListItem>
            </List>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
export default AwardsCertificates;
