// src/components/common/technology-icon.js
import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const TechnologyIcon = ({ technology }) => {
  const { url, image, alt, name } = technology;
  const [showTooltip, setShowTooltip] = React.useState(false);

  const baseStyle = {
    width: 'auto',
    height: 'auto',
    maxWidth: '50px',
    maxHeight: '50px'
  };

  const renderImage = () => {
    switch (image) {
      case 'python-logo.png':
        return <StaticImage style={baseStyle} alt={alt} src="../../images/python-logo.png" />;
      case 'pytorch-logo.png':
        return (
          <StaticImage style={{ ...baseStyle, maxHeight: '60px' }} alt={alt} src="../../images/pytorch-logo.png" />
        );
      case 'nvidia-logo.png':
        return (
          <StaticImage
            style={{ ...baseStyle, maxWidth: '60px' }}
            alt={alt}
            src="../../images/nvidia-logo.png"
          />
        );
      case 'rapids-logo.png':
        return (
          <StaticImage
            style={{ ...baseStyle, maxWidth: '70px' }}
            alt={alt}
            src="../../images/rapids-logo.png"
          />
        );
      case 'langchain-logo.png':
        return (
          <StaticImage
            style={baseStyle}
            alt={alt}
            src="../../images/langchain-logo.png"
          />
        );
      case 'sklearn-logo.png':
        return (
          <StaticImage
            style={{ ...baseStyle, maxWidth: '60px' }}
            alt={alt}
            src="../../images/sklearn-logo.png"
          />
        );
      case 'anthropic-logo.png':
        return <StaticImage style={baseStyle} alt={alt} src="../../images/anthropic-logo.png" />;
      case 'bedrock-logo.png':
        return <StaticImage style={baseStyle} alt={alt} src="../../images/bedrock-logo.png" />;
      case 'r-logo.png':
        return (
          <StaticImage
            style={{ ...baseStyle, maxWidth: '60px', maxHeight: '50px' }}
            alt={alt}
            src="../../images/r-logo.png"
          />
        );
      case 'tensorflow-logo.png':
        return (
          <StaticImage style={{ ...baseStyle, maxHeight: '60px' }} alt={alt} src="../../images/tensorflow-logo.png" />
        );
      case 'aws-logo.png':
        return <StaticImage style={baseStyle} alt={alt} src="../../images/aws-logo.png" />;
      case 'angular-logo.png':
        return <StaticImage style={baseStyle} alt={alt} src="../../images/angular-logo.png" />;
      case 'node-logo.svg':
        return <StaticImage style={{ ...baseStyle, maxWidth: '80px' }} alt={alt} src="../../images/node-logo.svg" />;
      case 'vue-logo.png':
        return <StaticImage style={{ ...baseStyle, maxWidth: '60px' }} alt={alt} src="../../images/vue-logo.png" />;
      case 'c-sharp-logo.png':
        return (
          <StaticImage
            style={{ ...baseStyle, maxWidth: '60px', maxHeight: '60px' }}
            alt={alt}
            src="../../images/c-sharp-logo.png"
          />
        );
      default:
        console.warn(`No image found for: ${image}`);
        return null;
    }
  };

  return (
    <Box
      position="relative"
      display="inline-block"
      m="0.75rem"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      <a
        href={url}
        aria-label={name || alt}
        style={{ display: 'block' }}
      >
        <Box
          filter="grayscale(20%)"
          opacity="0.85"
          transition="filter 0.2s ease, opacity 0.2s ease, transform 0.2s ease"
          _hover={{
            filter: 'grayscale(0%)',
            opacity: '1',
            transform: 'scale(1.1)'
          }}
        >
          {renderImage()}
        </Box>
      </a>

      {/* Tooltip */}
      {name && (
        <Box
          position="absolute"
          bottom="100%"
          left="50%"
          transform="translateX(-50%)"
          mb="0.5rem"
          px="0.75rem"
          py="0.35rem"
          bg="gray.800"
          color="white"
          fontSize="sm"
          borderRadius="md"
          whiteSpace="nowrap"
          opacity={showTooltip ? 1 : 0}
          visibility={showTooltip ? 'visible' : 'hidden'}
          transition="opacity 0.2s ease, visibility 0.2s ease"
          pointerEvents="none"
          zIndex="10"
          boxShadow="0 2px 8px rgba(0,0,0,0.2)"
        >
          <Text>{name}</Text>
          {/* Tooltip arrow */}
          <Box
            position="absolute"
            top="100%"
            left="50%"
            transform="translateX(-50%)"
            borderLeft="6px solid transparent"
            borderRight="6px solid transparent"
            borderTop="6px solid"
            borderTopColor="gray.800"
          />
        </Box>
      )}
    </Box>
  );
};

export default TechnologyIcon;
