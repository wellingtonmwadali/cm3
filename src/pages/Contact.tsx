import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Box, 
  SimpleGrid, 
  Heading, 
  Text, 
  Input, 
  Textarea, 
  Button, 
  VStack, 
  Icon, 
  Link as ChakraLink,
  useToast,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope
} from 'react-icons/fa';
import SubpageHeader from '../components/SubpageHeader';

export const Contact: React.FC = () => {
  const toast = useToast();
  const location = useLocation();

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Pre-fill message based on inquiry query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const inquiry = params.get('inquiry');
    if (inquiry) {
      let prefixMsg = `Hello Mega Enterprises,\n\nI would like to inquire about the details and availability of `;
      if (inquiry.toLowerCase().includes("service") || inquiry.toLowerCase().includes("engineering") || inquiry.toLowerCase().includes("design")) {
        prefixMsg = `Hello Mega Enterprises,\n\nI would like to inquire about your professional `;
      } else if (
        inquiry.toLowerCase().includes("stadium") || 
        inquiry.toLowerCase().includes("tower") || 
        inquiry.toLowerCase().includes("apartments") || 
        inquiry.toLowerCase().includes("complex") || 
        inquiry.toLowerCase().includes("interchange") || 
        inquiry.toLowerCase().includes("laboratories")
      ) {
        prefixMsg = `Hello Mega Enterprises,\n\nI am highly interested in the structural engineering and civil works completed for the `;
      }
      
      setFormData((prev) => ({
        ...prev,
        message: `${prefixMsg}${inquiry}. Please contact me back with more information and capabilities.`
      }));
    }
  }, [location]);
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    const newErrors = {
      name: formData.name.trim() === '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim() === ''
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      toast({
        title: "Validation Error",
        description: "Please fill out all fields with valid information.",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top"
      });
      return;
    }

    setLoading(true);

    // Mock API Submission delay
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent Successfully!",
        description: `Thank you ${formData.name}. We will get back to you shortly.`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <Box w="100%">
      {/* Visual Header */}
      <SubpageHeader 
        title="Contact Us" 
        breadcrumbs={[{ label: 'Contact Us' }]} 
      />

      {/* Main split-screen panel with heavy machinery background */}
      <Box 
        position="relative" 
        py={{ base: 14, lg: 20 }} 
        px={{ base: 4, lg: 12 }}
        backgroundImage="linear-gradient(rgba(15, 18, 25, 0.78), rgba(15, 18, 25, 0.78)), url('/assets/images/banners/contact-hero.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <SimpleGrid 
          columns={{ base: 1, lg: 2 }} 
          spacing={12} 
          maxW="1100px" 
          mx="auto"
          alignItems="center"
          position="relative"
          zIndex="2"
        >
          {/* Left Column: Get in Touch Info Box */}
          <VStack align="flex-start" spacing={6} color="white" textAlign="left" pr={{ lg: 8 }}>
            <Heading 
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} 
              fontWeight="400" 
              lineHeight="1.2"
            >
              Get in <Text as="span" fontWeight="800">Touch</Text>
            </Heading>
            <Text fontSize="xs" color="slate.300" lineHeight="1.7">
              Thank you for visiting our website and for taking your time to explore our website content. We hope that your experience with us was informative and enjoyable, and we remain committed to providing valuable resources and a user-friendly experience. Please reach out to us using the contacts below. You can also reach us via the form. We will be happy to talk to you.
            </Text>

            {/* Contacts Grid matching layout */}
            <SimpleGrid columns={2} spacing={6} w="100%" pt={4}>
              {/* Row 1, Col 1: Address */}
              <Box>
                <Heading size="xs" fontWeight="800" color="white" mb={2}>
                  Alisa Plaza,
                </Heading>
                <Text fontSize="2xs" color="slate.300" lineHeight="1.4">
                  Thika Town, Kenya
                </Text>
                {/* Pin Icon Anchor */}
                <ChakraLink 
                  href="#map-section" 
                  fontSize="2xs" 
                  fontWeight="700" 
                  color="brand.400" 
                  display="flex" 
                  alignItems="center" 
                  mt={2}
                  _hover={{ color: 'brand.300' }}
                >
                  <Icon as={FaMapMarkerAlt} mr={1} />
                  Find Us on Map
                </ChakraLink>
              </Box>

              {/* Row 1, Col 2: Mobile */}
              <Box>
                <Heading size="xs" fontWeight="800" color="white" mb={2}>
                  Mobile:
                </Heading>
                <ChakraLink 
                  href="tel:0711222345" 
                  fontSize="2xs" 
                  fontWeight="600" 
                  color="white" 
                  display="flex" 
                  alignItems="center"
                  _hover={{ color: 'brand.400' }}
                >
                  <Icon as={FaPhoneAlt} mr={1.5} color="brand.500" />
                  0711 222 345
                </ChakraLink>
              </Box>

              {/* Row 2, Col 1: Tel */}
              <Box>
                <Heading size="xs" fontWeight="800" color="white" mb={2}>
                  Tel:
                </Heading>
                <ChakraLink 
                  href="tel:0711222345" 
                  fontSize="2xs" 
                  fontWeight="600" 
                  color="white" 
                  display="flex" 
                  alignItems="center"
                  _hover={{ color: 'brand.400' }}
                >
                  <Icon as={FaPhoneAlt} mr={1.5} color="brand.500" />
                  0711 222 345
                </ChakraLink>
              </Box>

              {/* Row 2, Col 2: Email */}
              <Box>
                <Heading size="xs" fontWeight="800" color="white" mb={2}>
                  Our Email:
                </Heading>
                <ChakraLink 
                  href="mailto:info@megaenterprises.co.ke" 
                  fontSize="2xs" 
                  fontWeight="700" 
                  color="brand.400" 
                  display="flex" 
                  alignItems="center"
                  _hover={{ color: 'brand.300' }}
                >
                  <Icon as={FaEnvelope} mr={1.5} />
                  info@megaenterprises.co.ke
                </ChakraLink>
              </Box>
            </SimpleGrid>
          </VStack>

          {/* Right Column: Send us an Email Form Card */}
          <Box 
            bg="white" 
            p={8} 
            borderRadius="sm" 
            shadow="2xl" 
            w="100%" 
            maxW="480px" 
            mx="auto"
          >
            <Heading size="sm" color="slate.800" fontWeight="800" textAlign="center" mb={6}>
              Send us an email
            </Heading>

            <form onSubmit={handleFormSubmit}>
              <VStack spacing={4}>
                {/* Name */}
                <FormControl isInvalid={errors.name}>
                  <Input 
                    name="name"
                    placeholder="Name" 
                    bg="slate.50" 
                    borderColor="slate.100" 
                    color="slate.800"
                    _placeholder={{ color: 'slate.400' }}
                    fontSize="sm"
                    py={6}
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <FormErrorMessage fontSize="2xs">Name is required.</FormErrorMessage>}
                </FormControl>

                {/* Email */}
                <FormControl isInvalid={errors.email}>
                  <Input 
                    name="email"
                    type="email"
                    placeholder="Email" 
                    bg="slate.50" 
                    borderColor="slate.100" 
                    color="slate.800"
                    _placeholder={{ color: 'slate.400' }}
                    fontSize="sm"
                    py={6}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <FormErrorMessage fontSize="2xs">Valid email is required.</FormErrorMessage>}
                </FormControl>

                {/* Message */}
                <FormControl isInvalid={errors.message}>
                  <Textarea 
                    name="message"
                    placeholder="Message" 
                    bg="slate.50" 
                    borderColor="slate.100" 
                    color="slate.800"
                    _placeholder={{ color: 'slate.400' }}
                    fontSize="sm"
                    h="140px"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {errors.message && <FormErrorMessage fontSize="2xs">Message is required.</FormErrorMessage>}
                </FormControl>

                {/* Submit button centered */}
                <Button 
                  type="submit"
                  colorScheme="brand"
                  bg="brand.500"
                  color="white"
                  w="160px"
                  py={6}
                  borderRadius="full"
                  isLoading={loading}
                  _hover={{ bg: 'brand.600' }}
                  fontSize="sm"
                  fontWeight="700"
                  mt={2}
                >
                  SUBMIT
                </Button>
              </VStack>
            </form>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Google Map Section */}
      <Box id="map-section" w="100%" h="350px" borderBottom="1px solid" borderColor="slate.200" overflow="hidden">
        <iframe 
          title="Mega Enterprises Thika Location Map"
          src="https://maps.google.com/maps?q=Alisa%20Plaza,%20Thika,%20Kenya&t=&z=14&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy"
        />
      </Box>
    </Box>
  );
};
export default Contact;
