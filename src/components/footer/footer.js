import * as React from 'react';
import { Box, Stack, Text, Flex } from '@chakra-ui/react';
import SocialMediaLinks from './social-media-links';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => (
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Flex alignItems="center">
          <StaticImage
            alt="Logo"
            src={'../../images/profile-picture.png'}
            style={{
              maxHeight: '50px',
              maxWidth: '50px'
            }}
            imgStyle={{ borderRadius: '50%' }}
          />
          <Text ml="10px">Sam Pastoriza</Text>
        </Flex>
        <SocialMediaLinks />
      </Stack>
      <Text fontSize="sm">&copy; {new Date().getFullYear()} Sam Pastoriza. All rights reserved.</Text>
    </Stack>
  </Box>
);

export default Footer;
