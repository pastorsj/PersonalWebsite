import * as React from 'react';
import { Flex, Heading, Button, Group, Grid, Box, Text, GridItem, VStack } from '@chakra-ui/react';
import Footer from './footer/footer';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from './seo';

const Layout = ({ children }) => {
  return (
    <div>
      <SEO></SEO>
      <header style={{ display: 'grid', maxHeight: '100vh', minHeight: '100vh' }}>
        <StaticImage
          style={{
            gridArea: '1/1'
          }}
          layout="fullWidth"
          alt=""
          src={'../images/background.png'}
          formats={['auto', 'webp', 'avif']}
        />
        {/* Dark gradient overlay for better text contrast on B&W photo */}
        <div
          style={{
            gridArea: '1/1',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)',
            position: 'relative'
          }}
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
            spacing={6}
            align="center"
            maxW={['90%', '80%', '70%', '50%']}
            mx="auto"
            mb={['2rem', '4rem', '6rem', '10rem']}
            mt={['4rem', '3rem', '0rem']}
          >
            <Grid templateColumns={['1fr', '1fr', '2fr 2fr']} gap={8} alignItems="center" justifyContent="center">
              <GridItem colSpan={1} textAlign={['center', 'center', 'right']} order={[2, 2, 1]}>
                <Heading
                  marginTop={['1rem']}
                  marginBottom={['1rem', '1.5rem', '2rem']}
                  fontSize={['2rem', '2.5rem', '3rem', '3.5rem']}
                  fontFamily="serif"
                  fontWeight="bold"
                  textShadow="0 2px 4px rgba(0,0,0,0.3)"
                  className="animate-fade-in-up delay-200"
                >
                  Sam Pastoriza
                </Heading>
                <Text
                  fontSize={['md', 'lg', 'xl']}
                  color="white"
                  lineHeight="1.6"
                  textShadow="0 1px 2px rgba(0,0,0,0.3)"
                  className="animate-fade-in-up delay-300"
                >
                  Avid data scientist, researcher, software developer, golfer, cook, and classical music enthusiast.
                </Text>
              </GridItem>
              <GridItem colSpan={1} textAlign="center" order={[1, 1, 2]}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  className="animate-scale-in delay-100"
                >
                  <Box
                    width={['120px', '160px', '200px', '250px']}
                    height={['120px', '160px', '200px', '250px']}
                    boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
                    borderRadius="full"
                    overflow="hidden"
                    border="4px solid rgba(255,255,255,0.2)"
                    transition="transform 0.3s ease, box-shadow 0.3s ease"
                    _hover={{
                      transform: 'scale(1.02)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
                    }}
                  >
                    <StaticImage
                      src={'../images/profile-picture.png'}
                      alt="Sam Pastoriza"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
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
            fontFamily: 'dosis',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        >
          <Group marginTop="2rem" marginRight="2rem" className="animate-fade-in delay-400" style={{ pointerEvents: 'auto' }}>
            <Button
              as="a"
              href="http://sampastoriza.com"
              colorScheme="whiteAlpha"
              color="rgba(255,255,255,0.95)"
              background="rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(4px)"
              borderRadius="md"
              px="6"
              _hover={{
                bg: 'rgba(255, 255, 255, 0.2)',
                transform: 'translateY(-1px)',
                textDecoration: 'none'
              }}
              transition="all 0.2s ease"
              fontSize="16px"
            >
              Home
            </Button>
            <Button
              as="a"
              href="http://portfolio.sampastoriza.com"
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="whiteAlpha"
              color="rgba(255,255,255,0.95)"
              background="rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(4px)"
              borderRadius="md"
              px="6"
              _hover={{
                bg: 'rgba(255, 255, 255, 0.2)',
                transform: 'translateY(-1px)',
                textDecoration: 'none'
              }}
              transition="all 0.2s ease"
              fontSize="16px"
            >
              Portfolio
            </Button>
          </Group>
        </nav>
        {/* Scroll indicator */}
        <div
          style={{
            gridArea: '1/1',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingBottom: '2rem'
          }}
          className="animate-fade-in delay-400"
        >
          <div
            style={{
              width: '30px',
              height: '50px',
              border: '2px solid rgba(255,255,255,0.5)',
              borderRadius: '15px',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '8px'
            }}
          >
            <div
              className="scroll-indicator-dot"
              style={{
                width: '4px',
                height: '8px',
                backgroundColor: 'rgba(255,255,255,0.7)',
                borderRadius: '2px',
                animation: 'scrollIndicator 1.5s ease-in-out infinite'
              }}
            />
          </div>
          <style>{`
            @keyframes scrollIndicator {
              0%, 100% { transform: translateY(0); opacity: 1; }
              50% { transform: translateY(12px); opacity: 0.3; }
            }
            @media (prefers-reduced-motion: reduce) {
              .scroll-indicator-dot {
                animation: none !important;
              }
            }
          `}</style>
        </div>
      </header>
      <Flex direction="column">{children}</Flex>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
