import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: `'Roboto Slab', sans-serif` }
      }
    },
    globalCss: {
      body: {
        bg: '#f5f5f5',
        fontFamily: 'Roboto Slab'
      }
    }
  }
});

export const system = createSystem(defaultConfig, customConfig);
