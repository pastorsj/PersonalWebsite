import * as React from 'react';
import { Flex, Heading, Box, IconButton } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { FaCamera, FaGolfBall } from 'react-icons/fa';

const InterestsSection = () => {
  return (
    <div
      style={{
        gridArea: '4/1',
        position: 'relative',
        placeItems: 'center',
        backgroundColor: 'white',
        display: 'grid',
        fontFamily: 'dosis'
      }}
    >
      <div style={{ display: 'grid', width: '100vw' }}>
        <StaticImage
          style={{
            gridArea: '1/1'
          }}
          layout="fullWidth"
          alt=""
          src={'../../images/golf.png'}
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
          <Flex maxWidth="100vw" flexDirection="column" marginTop="2rem" marginBottom="2rem">
            <Flex flexDirection="column" marginBottom="2rem">
              <Heading>Activities and Interests</Heading>
            </Flex>
            <Flex>
              <Flex flexDirection="row" maxWidth="75vw" flexWrap="wrap">
                <Box maxW="sm" borderRadius="lg" overflow="hidden" background="rgba(0,0,0,0.65)" m="2">
                  <a href="https://www.flickr.com/people/sampastorizaphotos/">
                    <StaticImage alt="Cross Country" src={'../../images/cross-country.png'} />
                  </a>
                  <Box p="6">
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                      Photography
                    </Box>
                    <Box mt="1" lineHeight="tight">
                      This is one of my favorite past times. The majority of my photos are posted on Flickr. Check them
                      out by clicking on the image above!
                    </Box>
                  </Box>
                </Box>
                <Box maxW="sm" borderRadius="lg" overflow="hidden" background="rgba(0,0,0,0.65)" m="2">
                  <a href="https://firsttee.org/">
                    <StaticImage alt="Streamsong Golf Resort" src={'../../images/golf-course.png'} />
                  </a>
                  <Box p="6">
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                      Golf
                    </Box>
                    <Box mt="1" lineHeight="tight">
                      I played golf starting at a young age and the love of the game has never left. The First Tee is a
                      wonderful association that teaches young people the game of golf and life skills at the same time.
                      For anyone interested in supporting their organization like I have, click on the image above!
                    </Box>
                  </Box>
                </Box>
                <Box maxW="sm" borderRadius="lg" overflow="hidden" background="rgba(0,0,0,0.65)" m="2">
                  <a href="http://lucianocucinaitaliana.com/en/luciano-monosilio-eng/">
                    <StaticImage alt="Pasta Carbonara by Luciano Monosilio" src={'../../images/carbonara.jpeg'} />
                  </a>
                  <Box p="6">
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                      Cooking
                    </Box>
                    <Box mt="1" lineHeight="tight">
                      I started to really enjoy cooking when living in Indianapolis and had my first apartment. I
                      particularly enjoy French and Italian cuisine. Currently I follow a number of chefs around the
                      world, including Luciano Monosilio (photo credit), Pierre Hermès, Christoph Adam and Ina Garten
                      (bless her cookbooks!)
                    </Box>
                  </Box>
                </Box>
                <Box maxW="sm" borderRadius="lg" overflow="hidden" background="rgba(0,0,0,0.65)" m="2">
                  <a href="https://www.teatroallascala.org/en/index.html">
                    <StaticImage alt="Teatro alla Scala" src={'../../images/teatro-alla-scala.jpeg'} />
                  </a>
                  <Box p="6">
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                      Music
                    </Box>
                    <Box mt="1" lineHeight="tight">
                      Music has always been a part of life, ranging from rock and the Rolling Stones to Giuseppe Verdi's
                      opera masterworks. This year, I have dedicated myself to listening all of Bach's Cantatas
                      masterfully recorded by John Eliot Gardener with the English Baroque Soloists and Monteverdi
                      Choir.
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default InterestsSection;
