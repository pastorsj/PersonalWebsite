// src/components/timeline/timeline-node.js
import * as React from 'react';
import { Box } from '@chakra-ui/react';

const TimelineNode = ({ color, isVisible }) => {
  return (
    <Box
      position="absolute"
      left="1.5px"
      transform="translateX(-50%)"
      top="2rem"
      width="18px"
      height="18px"
      borderRadius="full"
      backgroundColor={isVisible ? color || '#666' : '#ccc'}
      border="3px solid #e0e0e0"
      boxShadow={isVisible
        ? `0 0 0 6px ${color}50, 0 0 20px ${color}60`
        : 'none'
      }
      transition="all 0.5s ease"
      zIndex="10"
      display={['none', 'none', 'block']}
    />
  );
};

export default TimelineNode;
