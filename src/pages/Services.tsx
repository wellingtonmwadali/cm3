import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Image, 
  VStack,
  SimpleGrid,
  Icon
} from '@chakra-ui/react';
import { FaBuilding, FaCog, FaHardHat, FaDraftingCompass, FaWrench, FaTruck } from 'react-icons/fa';
import SubpageHeader from '../components/SubpageHeader';
import { DotPattern } from './Home';

// Master data mapping for our 6 dynamic services
const servicesData: Record<string, {
  title: string;
  subTitle: string;
  paragraphs: string[];
  image: string;
  icon: any;
}> = {
  "construction-management": {
    title: "Construction Management",
    subTitle: "Our Construction Management Services",
    paragraphs: [
      "Streamline your construction process with our professional construction management services, providing expert oversight, efficient coordination, and timely project completion.",
      "Our experienced construction management team ensures effective communication, resource optimization, and adherence to budgets, delivering successful projects with exceptional quality.",
      "Trust in our comprehensive construction management expertise to navigate the complexities of your project, ensuring seamless operations, superior craftsmanship, and client satisfaction."
    ],
    image: "/assets/images/services/project-management.jpg",
    icon: FaHardHat
  },
  "civil-engineering": {
    title: "Civil Engineering Services",
    subTitle: "Our Civil Engineering Services",
    paragraphs: [
      "Mega Enterprises Limited is at the forefront of delivering exceptional Civil Engineering services that shape the physical infrastructure of tomorrow. Our team of skilled civil engineers brings together technical mastery, innovative solutions, and a deep understanding of environmental and societal impact.",
      "From designing resilient structures to developing efficient transportation systems, we are committed to delivering projects that enhance the lives of communities.",
      "With a focus on quality craftsmanship, cost-effectiveness, and sustainability, our civil engineering services cover a wide range of disciplines, including site development, utility design, and infrastructure planning."
    ],
    image: "/assets/images/services/civil-engineering.jpg",
    icon: FaWrench
  },
  "design-build": {
    title: "Design and Build Services",
    subTitle: "Our Design & Build Services",
    paragraphs: [
      "Mega Enterprises Limited is your trusted partner for comprehensive Design and Build services. Our integrated approach combines visionary design solutions with expert construction execution, ensuring a seamless and efficient construction process from concept to completion.",
      "With our team of skilled architects, engineers, and construction professionals, we translate your vision into reality, delivering exceptional results that surpass expectations. From residential to commercial projects, our Design and Build services offer a holistic solution that optimizes functionality, aesthetics, and cost-effectiveness.",
      "Contact us today to discuss your project and experience the power of our Design and Build services."
    ],
    image: "/assets/images/banners/portfolio-hero.jpg",
    icon: FaBuilding
  },
  "project-engineering": {
    title: "Project Engineering",
    subTitle: "Our Project Engineering Services",
    paragraphs: [
      "At Mega Enterprises Limited, our Project Engineering services provide the foundation for successful project execution. With a strategic and detail-oriented approach, our experienced team of project engineers ensures that every aspect of your project is meticulously planned, managed, and executed.",
      "From initial concept to final delivery, we leverage our expertise to navigate complexities, mitigate risks, and drive efficiency. With a focus on effective resource allocation, streamlined coordination, and timely decision-making, we strive to exceed your expectations and deliver projects that meet the highest standards of quality. Trust our Project Engineering services to bring your vision to life with precision and excellence."
    ],
    image: "/assets/images/services/road-construction.jpg",
    icon: FaTruck
  },
  "mechanical-engineering": {
    title: "Mechanical Engineering",
    subTitle: "Our Mechanical Engineering Services",
    paragraphs: [
      "At Mega Enterprises Limited, we offer a comprehensive range of engineering services that are tailored to meet the unique needs of each project. With our team of skilled engineers and technical experts, we provide innovative and practical solutions that drive excellence in construction.",
      "From structural engineering to mechanical, electrical, and plumbing (MEP) systems design, our expertise covers a wide spectrum of engineering disciplines. We combine cutting-edge technologies, meticulous analysis, and a deep understanding of industry standards to deliver projects that are not only structurally sound but also efficient, sustainable, and cost-effective."
    ],
    image: "/assets/images/services/plant-hire.jpg",
    icon: FaCog
  },
  "architectural-engineering": {
    title: "Architectural Engineering",
    subTitle: "Our Architectural Engineering Services",
    paragraphs: [
      "Our dedicated team of architectural engineers combines their expertise in both architecture and engineering to create designs that seamlessly blend aesthetics, functionality, and structural integrity.",
      "With a keen eye for detail and a passion for innovation, we ensure that every architectural project we undertake reflects our clients' vision while adhering to practical considerations.",
      "From concept development to construction documentation, our architectural engineering services encompass comprehensive design solutions that prioritize sustainability, efficiency, and user experience."
    ],
    image: "/assets/images/banners/about-hero.jpg",
    icon: FaDraftingCompass
  }
};

export const Services: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  // If no serviceId is found or is invalid, render a clean overview of all 6 services
  if (!serviceId || !servicesData[serviceId]) {
    return (
      <Box w="100%">
        <SubpageHeader 
          title="Our Services" 
          breadcrumbs={[{ label: 'Services' }]} 
        />
        <Box py={20} px={6} bg="white">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="1200px" mx="auto">
            {Object.entries(servicesData).map(([id, srv]) => (
              <Box
                key={id}
                as={Link}
                to={`/services/${id}`}
                bg="slate.50"
                p={8}
                borderRadius="sm"
                border="1px solid"
                borderColor="slate.100"
                shadow="sm"
                _hover={{
                  boxShadow: "md",
                  transform: "translateY(-4px)",
                  borderColor: "brand.300",
                }}
                transition="all 0.3s"
                textAlign="center"
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
                  mx="auto"
                >
                  <Icon as={srv.icon} fontSize="24px" />
                </Flex>
                <Heading size="sm" fontWeight="700" color="slate.800" mb={3}>
                  {srv.title}
                </Heading>
                <Text fontSize="xs" color="slate.500" lineHeight="1.6" mb={4}>
                  {srv.paragraphs[0].slice(0, 100)}...
                </Text>
                <Text fontSize="xs" fontWeight="700" color="brand.500">
                  Read More →
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    );
  }

  // Load target service content
  const service = servicesData[serviceId];

  return (
    <Box w="100%">
      {/* Dynamic Header Banners */}
      <SubpageHeader 
        title={service.title} 
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: service.title }]} 
      />

      {/* Structured Split Detail Block */}
      <Box py={{ base: 14, lg: 20 }} px={{ base: 6, lg: 12 }} bg="white">
        <Flex 
          direction={{ base: 'column-reverse', lg: 'row' }} 
          maxW="1200px" 
          mx="auto" 
          align="center" 
          gap={16}
        >
          {/* Left Column Visual Card */}
          <Box flex="1" position="relative" w="100%" maxW="500px" h="400px">
            <DotPattern bottom="-20px" left="-30px" />
            
            {/* Orange background border offset */}
            <Box 
              position="absolute"
              inset="15px -15px -15px 15px"
              bg="brand.500"
              zIndex="1"
            />
            
            {/* Service Illustration */}
            <Image 
              src={service.image}
              alt={service.title}
              objectFit="cover"
              w="100%"
              h="100%"
              position="relative"
              zIndex="2"
              boxShadow="lg"
            />
          </Box>

          {/* Right Column Text Descriptions */}
          <VStack align="flex-start" spacing={6} flex="1" textAlign="left">
            <Heading 
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} 
              fontWeight="800" 
              color="slate.800" 
              lineHeight="1.2"
            >
              {service.subTitle}
            </Heading>
            
            {service.paragraphs.map((para, idx) => (
              <Text key={idx} fontSize="sm" color="slate.600" lineHeight="1.7">
                {para}
              </Text>
            ))}

            <Link to={`/contact?inquiry=${encodeURIComponent(service.title)}`} style={{ textDecoration: 'none' }}>
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
                Contact Us
              </Button>
            </Link>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};
export default Services;
