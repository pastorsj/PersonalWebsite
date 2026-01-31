// src/components/timeline/timeline.js
import * as React from 'react';
import { Box } from '@chakra-ui/react';

const Timeline = ({ children }) => {
  return (
    <Box position="relative" width="100%" maxW="1600px" mx="auto" px={['1rem', '1.5rem', '2rem']}>
      {/* Vertical timeline line - on left side, hidden on mobile */}
      <Box
        display={['none', 'none', 'block']}
        position="absolute"
        left={['1rem', '1.5rem', '2rem']}
        top="0"
        bottom="0"
        width="3px"
        backgroundColor="#e0e0e0"
        zIndex="0"
      />
      {children}
    </Box>
  );
};

export default Timeline;
