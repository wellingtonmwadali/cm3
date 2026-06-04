import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  SimpleGrid, 
  Button, 
  Icon, 
  List, 
  ListItem, 
  ListIcon 
} from '@chakra-ui/react';
import { FaCheckCircle, FaFileSignature, FaShieldAlt } from 'react-icons/fa';
import SubpageHeader from '../components/SubpageHeader';
import { DotPattern } from './Home';

export const Legal: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  // Toggle active tab based on route pathname or hash if navigated directly
  useEffect(() => {
    if (location.pathname.includes('privacy')) {
      setActiveTab('privacy');
    } else {
      setActiveTab('terms');
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box w="100%">
      {/* Visual Header */}
      <SubpageHeader 
        title={activeTab === 'terms' ? "Terms of Use" : "Privacy Policy"} 
        breadcrumbs={[
          { label: 'Legal Disclosures' },
          { label: activeTab === 'terms' ? 'Terms of Use' : 'Privacy Policy' }
        ]} 
      />

      <Box py={{ base: 14, lg: 20 }} px={{ base: 6, lg: 12 }} bg="white" position="relative" overflow="hidden">
        <DotPattern top="20px" left="20px" />
        <DotPattern bottom="20px" right="20px" />

        <SimpleGrid columns={{ base: 1, lg: 12 }} spacing={12} maxW="1200px" mx="auto" position="relative" zIndex="2">
          
          {/* Left Column: Tab Selectors */}
          <VStack 
            gridColumn={{ lg: "span 3" }} 
            align="stretch" 
            spacing={4} 
            position={{ lg: "sticky" }} 
            top="100px" 
            h="fit-content"
          >
            <Button
              leftIcon={<Icon as={FaFileSignature} />}
              onClick={() => setActiveTab('terms')}
              colorScheme="brand"
              variant={activeTab === 'terms' ? 'solid' : 'outline'}
              bg={activeTab === 'terms' ? 'brand.500' : 'transparent'}
              color={activeTab === 'terms' ? 'white' : 'slate.600'}
              borderColor={activeTab === 'terms' ? 'brand.500' : 'slate.200'}
              _hover={{ bg: activeTab === 'terms' ? 'brand.600' : 'slate.50' }}
              py={6}
              borderRadius="sm"
              fontWeight="700"
              fontSize="sm"
              w="100%"
            >
              Terms of Use
            </Button>
            <Button
              leftIcon={<Icon as={FaShieldAlt} />}
              onClick={() => setActiveTab('privacy')}
              colorScheme="brand"
              variant={activeTab === 'privacy' ? 'solid' : 'outline'}
              bg={activeTab === 'privacy' ? 'brand.500' : 'transparent'}
              color={activeTab === 'privacy' ? 'white' : 'slate.600'}
              borderColor={activeTab === 'privacy' ? 'brand.500' : 'slate.200'}
              _hover={{ bg: activeTab === 'privacy' ? 'brand.600' : 'slate.50' }}
              py={6}
              borderRadius="sm"
              fontWeight="700"
              fontSize="sm"
              w="100%"
            >
              Privacy Policy
            </Button>

            <Box p={6} bg="slate.50" borderRadius="sm" border="1px solid" borderColor="slate.100" mt={4} textAlign="left">
              <Heading size="2xs" color="slate.800" mb={2} fontWeight="800">
                Regulatory Compliance
              </Heading>
              <Text fontSize="2xs" color="slate.500" lineHeight="1.6">
                Mega Enterprises Limited operates under strict compliance with the physical planning regulations, building codes, and Data Protection Act of the Republic of Kenya.
              </Text>
            </Box>
          </VStack>

          {/* Right Column: Detailed Disclosures Content */}
          <VStack gridColumn={{ lg: "span 9" }} align="flex-start" spacing={8} textAlign="left">
            {activeTab === 'terms' ? (
              /* ========================================================================= */
              /* TERMS OF USE CONTENT                                                      */
              /* ========================================================================= */
              <VStack align="flex-start" spacing={6}>
                <Heading size="md" fontWeight="800" color="slate.800">
                  Terms and Conditions of Use
                </Heading>
                <Text fontSize="xs" color="slate.400">
                  Last Updated: May 31, 2026
                </Text>
                
                <Text fontSize="sm" color="slate.600" lineHeight="1.8">
                  Welcome to the official web portal of Mega Enterprises Limited. By accessing or navigating this site, you acknowledge that you have read, understood, and agree to compile with the following legally binding Terms of Use.
                </Text>

                <Heading size="xs" fontWeight="800" color="slate.800" pt={2}>
                  1. Corporate Representation & Estimations
                </Heading>
                <Text fontSize="sm" color="slate.600" lineHeight="1.8">
                  All material, graphics, and descriptions of projects (including JKUAT Science Tower, KeNHA interchange, and other civil structures) are presented exclusively for information, architectural demonstration, and engineering capabilities showcase. While we strive to maintain complete data consistency, any formal project bidding, estimates, or contracts require separate written and signed documents directly from our executive offices.
                </Text>

                <Heading size="xs" fontWeight="800" color="slate.800" pt={2}>
                  2. Equipment Plant Hire Terms
                </Heading>
                <Text fontSize="sm" color="slate.600" lineHeight="1.8">
                  Mega Enterprises provides mobile concrete pumps, crawler excavators, haulage trucks, and auxiliary equipment for plant hire. All machinery hire operations are subject to standard lease terms, including mobilization fees, operator shift metrics, fuel logistics, and on-site insurance coverages. Initial dispatch inquiries placed via the web form do not represent guaranteed bookings until formal down-payments are cleared.
                </Text>

                <Heading size="xs" fontWeight="800" color="slate.800" pt={2}>
                  3. Intellectual Property Rights
                </Heading>
                <Text fontSize="sm" color="slate.600" lineHeight="1.8">
                  All structural blueprints, photographs, company logos, SVG brand vectors, high-definition stock images, and website code blocks rendered under this domain are the protected intellectual property of Mega Enterprises Limited or under active licensed agreements. Unauthorized cropping, framing, downloading, or commercial redistribution of these assets is strictly prohibited.
                </Text>

                <Heading size="xs" fontWeight="800" color="slate.800" pt={2}>
                  4. Limitation of Liability
                </Heading>
                <Text fontSize="sm" color="slate.600" lineHeight="1.8">
                  Mega Enterprises Limited shall not be held liable for any damages resulting from temporary site offline states, unverified third-party link redirections, or errors in aggregate supply estimates placed via mock calculator tools. Site operations are governed under the laws of the Republic of Kenya.
                </Text>
              </VStack>
            ) : (
              /* ========================================================================= */
              /* PRIVACY POLICY CONTENT                                                    */
              /* ========================================================================= */
              <VStack align="flex-start" spacing={6}>
                <Heading size="md" fontWeight="800" color="slate.800">
                  Data Protection & Privacy Policy
                </Heading>
                <Text fontSize="xs" color="slate.400">
                  Last Updated: May 31, 2026
                </Text>

                <Text fontSize="sm" color="slate.600" lineHeight="1.8">
                  At Mega Enterprises Limited, we value the trust you place in us. This Privacy Policy details how we handle, collect, secure, and process personal identification data submitted by clients via our digital dispatch channels, form queries, and career application portals.
                </Text>

                <Heading size="xs" fontWeight="800" color="slate.800" pt={2}>
                  1. Information We Collect
                </Heading>
                <Text fontSize="sm" color="slate.600" lineHeight="1.8">
                  We collect personal details that you explicitly provide when submitting inquiries, including:
                </Text>
                <List spacing={2} fontSize="sm" color="slate.600">
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="brand.500" />
                    <strong>Identity Data</strong>: Full name, organization title, and corporate position.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="brand.500" />
                    <strong>Contact Data</strong>: Corporate email address, mobile number, and site location.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="brand.500" />
                    <strong>Inquiry Data</strong>: Custom messages regarding structural requirements or machinery dispatch requests.
                  </ListItem>
                </List>

                <Heading size="xs" fontWeight="800" color="slate.800" pt={2}>
                  2. Purpose of Processing
                </Heading>
                <Text fontSize="sm" color="slate.600" lineHeight="1.8">
                  All submitted data is processed strictly to coordinate equipment hires, draft construction bids, schedule logistics, and respond to engineering inquiries. We do not sell, rent, or distribute your data to any third-party marketing firms.
                </Text>

                <Heading size="xs" fontWeight="800" color="slate.800" pt={2}>
                  3. Data Security & Storage
                </Heading>
                <Text fontSize="sm" color="slate.600" lineHeight="1.8">
                  We implement robust technical security protocols to protect your personal details from unauthorized access, accidental alteration, or disclosure. All form submissions are protected via industry-standard SSL encryption layers, and stored on secure servers located in corporate hosting complexes.
                </Text>

                <Heading size="xs" fontWeight="800" color="slate.800" pt={2}>
                  4. Your Legal Rights
                </Heading>
                <Text fontSize="sm" color="slate.600" lineHeight="1.8">
                  Pursuant to the Data Protection Act of Kenya (2019), you retain full rights to request access to your stored personal information, demand corrections of incomplete data, or demand complete deletion of your files from our contact databases at any time.
                </Text>
              </VStack>
            )}
          </VStack>

        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Legal;
