import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#f5f5f5',
        fontFamily: 'Roboto Slab'
      }
    }
  }
});

export default Theme;
