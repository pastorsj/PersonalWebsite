import * as React from 'react';
import { Flex, Heading, Button, Group, Grid, Box, Text, GridItem, VStack } from '@chakra-ui/react';
import Footer from './footer/footer';
import { StaticImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';
import SEO from './seo';

const Layout = ({ children }) => {
  return (
    <div>
      <SEO></SEO>
      <header style={{ display: 'grid', maxHeight: '100vh' }}>
        <StaticImage
          style={{
            gridArea: '1/1'
          }}
          layout="fullWidth"
          alt=""
          src={'../images/background.png'}
          formats={['auto', 'webp', 'avif']}
        />
        <div
          style={{
            gridArea: '1/1',
            position: 'relative',
            placeItems: 'center',
            color: 'white',
            display: 'grid',
            fontFamily: 'dosis'
          }}
        >
          <VStack
            spacing={4}
            align="center"
            maxW="50%"
            mx="auto"
            mb={['2rem', '4rem', '6rem', '10rem']}
            mt={['4rem', '3rem', '0rem']}
          >
            <Grid templateColumns={['1fr', '2fr 2fr']} gap={6} alignItems="center" justifyContent="center">
              <GridItem colSpan={[1, 1]} textAlign={['center', 'right']}>
                <Heading
                  marginTop={['1rem']}
                  marginBottom={['1rem', '2rem', '4rem']}
                  fontSize={['1.5rem', '2rem', '2.5rem', '3rem']}
                  fontFamily="serif"
                >
                  Sam Pastoriza
                </Heading>
                <Text fontSize={['sm', 'md', 'lg']} color="white.900">
                  Avid data scientist, researcher, software developer, golfer, cook, and classical music enthusiast.
                </Text>
              </GridItem>
              <GridItem colSpan={[1, 1]} textAlign="center">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Box
                    width={['100px', '150px', '200px', '250px']}
                    height={['100px', '150px', '200px', '250px']}
                    boxShadow="lg"
                    borderRadius="full"
                    overflow="hidden"
                  >
                    <StaticImage
                      src={'../images/profile-picture.png'}
                      alt="Sam Pastoriza"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                      }}
                    />
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </VStack>
        </div>
        <nav
          style={{
            gridArea: '1/1',
            position: 'relative',
            placeItems: 'flex-start flex-end',
            display: 'grid',
            fontFamily: 'dosis'
          }}
        >
          <Group marginTop="2rem" marginRight="2rem">
            <Button
              onClick={() => navigate('http://sampastoriza.com')}
              colorScheme="whiteAlpha"
              color="rgba(255,255,255,0.9)"
              background="none"
              _hover={{ bg: 'rgba(255, 255, 255, 0.04)' }}
              fontSize="16px"
            >
              Home
            </Button>
            <Button
              onClick={() => navigate('http://portfolio.sampastoriza.com')}
              colorScheme="whiteAlpha"
              color="rgba(255,255,255,0.9)"
              background="none"
              _hover={{ bg: 'rgba(255, 255, 255, 0.04)' }}
              fontSize="16px"
            >
              Portfolio
            </Button>
          </Group>
        </nav>
      </header>
      <Flex>{children}</Flex>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
