import React, { useState } from 'react';
import { 
  Box, 
  Flex, 
  HStack, 
  IconButton, 
  useDisclosure, 
  Collapse,
  VStack,
  Text,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  Button
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';

// Custom SVG Logo for Mega Enterprises Limited
export const Logo: React.FC = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Flex align="center">
        {/* Customized Geometric engineering triangle logo */}
        <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Triangle Structure */}
          <path d="M24 2L46 38H2L24 2Z" fill="#1A202C" stroke="#F15A24" strokeWidth="2.5" strokeLinejoin="round" />
          {/* Engineering M lines inside */}
          <path d="M12 34V18L24 28L36 18V34" stroke="#F15A24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 28V38" stroke="#F15A24" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <Box ml={3} textAlign="left">
          <Text fontSize="md" fontWeight="800" letterSpacing="0.5px" color="slate.800" lineHeight="1.1">
            MEGA ENTERPRISES LTD
          </Text>
          <Text fontSize="xx-small" fontWeight="700" letterSpacing="1.2px" color="brand.500" mt={0.5}>
            BUILDING & CIVIL ENGINEERS
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  const currentPath = location.pathname;

  // Active status checks
  const isActive = (path: string) => currentPath === path;
  const isAboutActive = () => currentPath.startsWith('/about');
  const isServicesActive = () => currentPath.startsWith('/services');

  // Hover states for dropdown menus to behave elegantly on desktop
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <Box bg="white" boxShadow="sm" position="sticky" top="0" zIndex="1000" py={3} px={{ base: 4, lg: 12 }}>
      <Flex align="center" justify="space-between" maxW="1400px" mx="auto">
        <Logo />

        {/* Desktop Navigation Links */}
        <HStack spacing={8} display={{ base: 'none', lg: 'flex' }} fontWeight="600" fontSize="sm">
          {/* Home Link */}
          <Box position="relative" py={2}>
            <ChakraLink
              as={Link}
              to="/"
              color={isActive('/') ? 'brand.500' : 'slate.800'}
              _hover={{ color: 'brand.500' }}
            >
              Home
            </ChakraLink>
            {isActive('/') && (
              <Box position="absolute" bottom="-2px" left="0" w="100%" h="3px" bg="brand.500" />
            )}
          </Box>

          {/* About Us Dropdown */}
          <Box 
            position="relative" 
            py={2}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <Menu isOpen={aboutOpen}>
              <MenuButton 
                as={Button} 
                variant="link" 
                fontWeight="600"
                fontSize="sm"
                color={isAboutActive() ? 'brand.500' : 'slate.800'}
                rightIcon={<ChevronDownIcon />}
                _hover={{ color: 'brand.500', textDecoration: 'none' }}
                _active={{ bg: 'none' }}
              >
                About Us
              </MenuButton>
              <Portal>
                <MenuList 
                  bg="white" 
                  borderColor="slate.100" 
                  shadow="lg" 
                  borderRadius="sm"
                  py={2}
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <MenuItem as={Link} to="/about/who-we-are" _hover={{ bg: 'brand.50', color: 'brand.600' }} fontWeight="500">Who We Are</MenuItem>
                  <MenuItem as={Link} to="/about/company-profile" _hover={{ bg: 'brand.50', color: 'brand.600' }} fontWeight="500">Company Profile</MenuItem>
                  <MenuItem as={Link} to="/about/awards-certificates" _hover={{ bg: 'brand.50', color: 'brand.600' }} fontWeight="500">Awards and Certificates</MenuItem>
                </MenuList>
              </Portal>
            </Menu>
            {isAboutActive() && (
              <Box position="absolute" bottom="-2px" left="0" w="100%" h="3px" bg="brand.500" />
            )}
          </Box>

          {/* Services Dropdown */}
          <Box 
            position="relative" 
            py={2}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Menu isOpen={servicesOpen}>
              <MenuButton 
                as={Button} 
                variant="link" 
                fontWeight="600"
                fontSize="sm"
                color={isServicesActive() ? 'brand.500' : 'slate.800'}
                rightIcon={<ChevronDownIcon />}
                _hover={{ color: 'brand.500', textDecoration: 'none' }}
                _active={{ bg: 'none' }}
              >
                Services
              </MenuButton>
              <Portal>
                <MenuList 
                  bg="white" 
                  borderColor="slate.100" 
                  shadow="lg" 
                  borderRadius="sm"
                  py={2}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <MenuItem as={Link} to="/services/construction-management" _hover={{ bg: 'brand.50', color: 'brand.600' }} fontWeight="500">Construction Management</MenuItem>
                  <MenuItem as={Link} to="/services/civil-engineering" _hover={{ bg: 'brand.50', color: 'brand.600' }} fontWeight="500">Civil Engineering Services</MenuItem>
                  <MenuItem as={Link} to="/services/design-build" _hover={{ bg: 'brand.50', color: 'brand.600' }} fontWeight="500">Design and Build Services</MenuItem>
                  <MenuItem as={Link} to="/services/project-engineering" _hover={{ bg: 'brand.50', color: 'brand.600' }} fontWeight="500">Project Engineering</MenuItem>
                  <MenuItem as={Link} to="/services/mechanical-engineering" _hover={{ bg: 'brand.50', color: 'brand.600' }} fontWeight="500">Mechanical Engineering</MenuItem>
                  <MenuItem as={Link} to="/services/architectural-engineering" _hover={{ bg: 'brand.50', color: 'brand.600' }} fontWeight="500">Architectural Engineering</MenuItem>
                </MenuList>
              </Portal>
            </Menu>
            {isServicesActive() && (
              <Box position="absolute" bottom="-2px" left="0" w="100%" h="3px" bg="brand.500" />
            )}
          </Box>

          {/* Portfolio Link */}
          <Box position="relative" py={2}>
            <ChakraLink
              as={Link}
              to="/portfolio"
              color={isActive('/portfolio') ? 'brand.500' : 'slate.800'}
              _hover={{ color: 'brand.500' }}
            >
              Portfolio
            </ChakraLink>
            {isActive('/portfolio') && (
              <Box position="absolute" bottom="-2px" left="0" w="100%" h="3px" bg="brand.500" />
            )}
          </Box>

          {/* Plant & Machinery Link */}
          <Box position="relative" py={2}>
            <ChakraLink
              as={Link}
              to="/plant-machinery"
              color={isActive('/plant-machinery') ? 'brand.500' : 'slate.800'}
              _hover={{ color: 'brand.500' }}
            >
              Plant & Machinery
            </ChakraLink>
            {isActive('/plant-machinery') && (
              <Box position="absolute" bottom="-2px" left="0" w="100%" h="3px" bg="brand.500" />
            )}
          </Box>

          {/* Contact Us Link */}
          <Box position="relative" py={2}>
            <ChakraLink
              as={Link}
              to="/contact"
              color={isActive('/contact') ? 'brand.500' : 'slate.800'}
              _hover={{ color: 'brand.500' }}
            >
              Contact Us
            </ChakraLink>
            {isActive('/contact') && (
              <Box position="absolute" bottom="-2px" left="0" w="100%" h="3px" bg="brand.500" />
            )}
          </Box>
        </HStack>

        {/* Mobile Toggle Button */}
        <IconButton
          display={{ base: 'flex', lg: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          color="slate.800"
          aria-label="Toggle Navigation"
        />
      </Flex>

      {/* Mobile Menu Panel */}
      <Collapse in={isOpen} animateOpacity>
        <Box display={{ lg: 'none' }} mt={4} borderTop="1px solid" borderColor="slate.100" pt={2}>
          <VStack spacing={4} align="stretch" fontWeight="600" fontSize="sm">
            <ChakraLink as={Link} to="/" onClick={onToggle} color={isActive('/') ? 'brand.500' : 'slate.800'} py={1}>
              Home
            </ChakraLink>

            <Box borderBottom="1px solid" borderColor="slate.50" pb={2}>
              <Text color="slate.500" fontSize="xs" fontWeight="700" letterSpacing="1px" mb={2}>
                ABOUT US
              </Text>
              <VStack align="stretch" pl={3} spacing={2}>
                <ChakraLink as={Link} to="/about/who-we-are" onClick={onToggle} color={currentPath === '/about/who-we-are' ? 'brand.500' : 'slate.700'}>
                  Who We Are
                </ChakraLink>
                <ChakraLink as={Link} to="/about/company-profile" onClick={onToggle} color={currentPath === '/about/company-profile' ? 'brand.500' : 'slate.700'}>
                  Company Profile
                </ChakraLink>
                <ChakraLink as={Link} to="/about/awards-certificates" onClick={onToggle} color={currentPath === '/about/awards-certificates' ? 'brand.500' : 'slate.700'}>
                  Awards & Certificates
                </ChakraLink>
              </VStack>
            </Box>

            <Box borderBottom="1px solid" borderColor="slate.50" pb={2}>
              <Text color="slate.500" fontSize="xs" fontWeight="700" letterSpacing="1px" mb={2}>
                SERVICES
              </Text>
              <VStack align="stretch" pl={3} spacing={2}>
                <ChakraLink as={Link} to="/services/construction-management" onClick={onToggle} color={currentPath === '/services/construction-management' ? 'brand.500' : 'slate.700'}>
                  Construction Management
                </ChakraLink>
                <ChakraLink as={Link} to="/services/civil-engineering" onClick={onToggle} color={currentPath === '/services/civil-engineering' ? 'brand.500' : 'slate.700'}>
                  Civil Engineering Services
                </ChakraLink>
                <ChakraLink as={Link} to="/services/design-build" onClick={onToggle} color={currentPath === '/services/design-build' ? 'brand.500' : 'slate.700'}>
                  Design & Build Services
                </ChakraLink>
                <ChakraLink as={Link} to="/services/project-engineering" onClick={onToggle} color={currentPath === '/services/project-engineering' ? 'brand.500' : 'slate.700'}>
                  Project Engineering
                </ChakraLink>
                <ChakraLink as={Link} to="/services/mechanical-engineering" onClick={onToggle} color={currentPath === '/services/mechanical-engineering' ? 'brand.500' : 'slate.700'}>
                  Mechanical Engineering
                </ChakraLink>
                <ChakraLink as={Link} to="/services/architectural-engineering" onClick={onToggle} color={currentPath === '/services/architectural-engineering' ? 'brand.500' : 'slate.700'}>
                  Architectural Engineering
                </ChakraLink>
              </VStack>
            </Box>

            <ChakraLink as={Link} to="/portfolio" onClick={onToggle} color={isActive('/portfolio') ? 'brand.500' : 'slate.800'} py={1}>
              Portfolio
            </ChakraLink>

            <ChakraLink as={Link} to="/plant-machinery" onClick={onToggle} color={isActive('/plant-machinery') ? 'brand.500' : 'slate.800'} py={1}>
              Plant & Machinery
            </ChakraLink>

            <ChakraLink as={Link} to="/contact" onClick={onToggle} color={isActive('/contact') ? 'brand.500' : 'slate.800'} py={1}>
              Contact Us
            </ChakraLink>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};
export default Navbar;
