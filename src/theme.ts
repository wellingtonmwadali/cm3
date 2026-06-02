import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
    body: `'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
  },
  colors: {
    brand: {
      50: '#FFF5F2',
      100: '#FFE6DF',
      200: '#FFC4B3',
      300: '#FFA187',
      400: '#FF7E5B',
      500: '#F15A24', // Rebranded vibrant construction orange-red
      600: '#D7420F',
      700: '#AD3008',
      800: '#842004',
      900: '#5C1200',
    },
    slate: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C', // Deep background slate
      900: '#0F1219',
    }
  },
  styles: {
    global: {
      'html, body': {
        background: 'white',
        color: 'slate.700',
        scrollBehavior: 'smooth',
        fontFamily: 'Outfit, sans-serif',
      },
      a: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
