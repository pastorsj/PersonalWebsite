// src/components/footer/footer.js
import * as React from 'react';
import { Box, Stack, Text, Flex } from '@chakra-ui/react';
import SocialMediaLinks from './social-media-links';
import { StaticImage } from 'gatsby-plugin-image';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="16"
      px={{ base: '6', md: '8' }}
      ref={ref}
      className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      <Box
        borderTop="1px solid"
        borderColor="gray.200"
        pt="8"
      >
        <Stack spacing="6">
          <Flex
            direction={['column', 'row']}
            spacing="4"
            align="center"
            justify="space-between"
            gap="4"
          >
            <Flex alignItems="center" gap="3">
              <Box
                borderRadius="full"
                overflow="hidden"
                boxShadow="0 2px 8px rgba(0,0,0,0.1)"
              >
                <StaticImage
                  alt="Sam Pastoriza"
                  src={'../../images/profile-picture.png'}
                  style={{
                    width: '50px',
                    height: '50px'
                  }}
                  imgStyle={{ borderRadius: '50%' }}
                />
              </Box>
              <Text fontWeight="medium" fontFamily="dosis" fontSize="lg">
                Sam Pastoriza
              </Text>
            </Flex>
            <SocialMediaLinks />
          </Flex>
          <Text
            fontSize="sm"
            color="gray.500"
            textAlign={['center', 'left']}
          >
            &copy; {new Date().getFullYear()} Sam Pastoriza. All rights reserved.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
