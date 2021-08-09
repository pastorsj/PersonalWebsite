import * as React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const Home = ({ pageTitle, children }) => {
  return (
    <div style={{ display: 'grid', width: '100vw', gridTemplateRows: 'repeat(3, 1fr)' }}>
      <StaticImage
        style={{
          gridArea: '1/1',
          maxHeight: 600
        }}
        layout="fullWidth"
        alt=""
        src={'../images/getty-background.png'}
        formats={['auto', 'webp', 'avif']}
      />
      <div
        style={{
          gridArea: '1/1',
          position: 'relative',
          placeItems: 'center',
          display: 'grid'
        }}
      >
        <Flex
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '1rem',
            borderRadius: '5px'
          }}
        >
          <StaticImage
            alt="Profile picure"
            src={'../images/profile-picture.png'}
            style={{
              gridArea: '1/1',
              maxHeight: '150px',
              maxWidth: '150px',
              borderRadius: '50%'
            }}
          />
          <Text textAlign="right" fontSize="2xl">
            Motivated Software Developer
            <br />
            Inspired Data Scientist
            <br />
            Rose-Hulman Graduate
            <br />
            Georgetown Master's of <br />
            Data Science Class of 2022.
          </Text>
        </Flex>
      </div>
      <StaticImage
        style={{
          gridArea: '2/1',
          maxHeight: 600
        }}
        layout="fullWidth"
        alt=""
        src={'../images/golf.png'}
        formats={['auto', 'webp', 'avif']}
      />
      <div
        style={{
          gridArea: '2/1',
          position: 'relative',
          placeItems: 'center',
          display: 'grid'
        }}
      >
        <Flex
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '1rem',
            borderRadius: '5px'
          }}
        >
          <StaticImage
            alt="Profile picure"
            src={'../images/profile-picture.png'}
            style={{
              gridArea: '1/1',
              maxHeight: '150px',
              maxWidth: '150px',
              borderRadius: '50%'
            }}
          />
          <Text textAlign="right" fontSize="2xl">
            Fan of golf
          </Text>
        </Flex>
      </div>
    </div>
  );
};

export default Home;
