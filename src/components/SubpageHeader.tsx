import React from 'react';
import { Box, Heading, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface SubpageHeaderProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

export const SubpageHeader: React.FC<SubpageHeaderProps> = ({ title, breadcrumbs }) => {
  return (
    <Box 
      position="relative" 
      py={14} 
      px={{ base: 6, lg: 12 }} 
      backgroundImage="linear-gradient(rgba(15, 18, 25, 0.72), rgba(15, 18, 25, 0.72)), url('/assets/images/banners/portfolio-hero.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      color="white"
      mb={1}
    >
      <Flex 
        maxW="1200px" 
        mx="auto" 
        direction={{ base: 'column', md: 'row' }} 
        justify="space-between" 
        align={{ base: 'flex-start', md: 'center' }}
        gap={4}
      >
        <Heading 
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} 
          fontWeight="700" 
          letterSpacing="-0.5px"
        >
          {title}
        </Heading>
        
        <Breadcrumb fontSize="xs" fontWeight="600" separator="»" color="slate.300">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/" _hover={{ color: 'brand.500' }}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbs.map((bc, idx) => (
            <BreadcrumbItem key={idx} isCurrentPage={idx === breadcrumbs.length - 1}>
              {bc.href && idx < breadcrumbs.length - 1 ? (
                <BreadcrumbLink as={Link} to={bc.href} _hover={{ color: 'brand.500' }}>{bc.label}</BreadcrumbLink>
              ) : (
                <Text color="brand.500" display="inline" fontWeight="700">{bc.label}</Text>
              )}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Flex>
    </Box>
  );
};
export default SubpageHeader;
