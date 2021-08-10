import * as React from 'react';
import { Flex, Heading, Button, ButtonGroup } from '@chakra-ui/react';
import Footer from './footer/footer';
import { StaticImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';

const Layout = ({ children }) => {
  return (
    <div>
      <div style={{ display: 'grid', maxHeight: '100vh' }}>
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
          <Heading
            textAlign="center"
            marginBottom={['2rem', '4rem', '6rem', '8rem']}
            fontSize={['1.5rem', '2rem', '3rem', '5rem']}
            fontFamily="WindSong"
          >
            Sam Pastoriza
          </Heading>
        </div>
        <div
          style={{
            gridArea: '1/1',
            position: 'relative',
            placeItems: 'flex-start flex-end',
            display: 'grid',
            fontFamily: 'dosis'
          }}
        >
          <ButtonGroup marginTop="2rem" marginRight="2rem">
            <Button
              onClick={() => navigate('http://sampastoriza.com')}
              colorScheme="whiteAlpha"
              color="rgba(255,255,255,0.9)"
              variant="ghost"
            >
              Home
            </Button>
            <Button
              onClick={() => navigate('http://portfolio.sampastoriza.com')}
              colorScheme="whiteAlpha"
              color="rgba(255,255,255,0.9)"
              variant="ghost"
            >
              Portfolio
            </Button>
            <Button
              onClick={() => navigate('http://blog.sampastoriza.com')}
              colorScheme="whiteAlpha"
              color="rgba(255,255,255,0.9)"
              variant="ghost"
            >
              Blog
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <Flex>{children}</Flex>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
