import React, { useState, useEffect } from 'react';
import { IconButton, Fade } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Fade in={visible}>
      <IconButton
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex="999"
        onClick={scrollToTop}
        icon={<ChevronUpIcon fontSize="24px" />}
        aria-label="Scroll to Top"
        colorScheme="brand"
        borderRadius="full"
        boxShadow="lg"
        bg="white"
        color="brand.500"
        border="2px solid"
        borderColor="brand.500"
        _hover={{
          bg: 'brand.500',
          color: 'white',
          transform: 'translateY(-3px)'
        }}
        transition="all 0.2s"
      />
    </Fade>
  );
};
export default ScrollToTop;
