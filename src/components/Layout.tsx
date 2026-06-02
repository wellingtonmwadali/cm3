import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SchemaMarkup from './SchemaMarkup';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top automatically on every pathname change (route navigation)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Box 
      minH="100vh" 
      display="flex" 
      flexDirection="column" 
      width="100%" 
      overflowX="hidden"
      bg="white"
    >
      <SchemaMarkup />
      <TopBar />
      <Navbar />
      <Box as="main" flex="1" width="100%">
        {children}
      </Box>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};
export default Layout;
