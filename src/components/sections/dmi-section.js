import * as React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const DmiSection = () => {
  return (
    <div
      style={{
        gridArea: '2/1',
        position: 'relative',
        placeItems: 'center',
        background: 'linear-gradient(to right, #C52326, #401A47)',
        display: 'grid',
        color: 'white',
        fontFamily: 'dosis'
      }}
    >
      <Flex maxWidth="100vw" flexDirection="column" marginTop="2rem" marginBottom="2rem">
        <Flex flexDirection="column" marginBottom="2rem">
          <Heading>Digital Management LLC</Heading>
          <Text>August 2017 - August 2021</Text>
        </Flex>
        <Flex>
          <Flex flexDirection="column" maxWidth="60vw" marginRight="2rem">
            <Text>
              I was a software consultant for 4 years with DMI specializing in commerical web application development.
            </Text>
            <br />
            <Flex>
              <Text>Experience</Text>
              <Text>Projects</Text>
              <Flex flex>
                <StaticImage
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxHeight: '100px',
                    maxWidth: '130px'
                  }}
                  alt="Allison Transmission Logo"
                  src={'../../images/allison-transmission-logo.png'}
                />
                <StaticImage
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100px',
                    maxHeight: '100px'
                  }}
                  alt="Liberty Mutual Logo"
                  src={'../../images/liberty-mutual-logo.png'}
                />
                <StaticImage
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100px',
                    maxHeight: '100px'
                  }}
                  alt="KAR Global Logo"
                  src={'../../images/kar-global-logo.png'}
                />
              </Flex>
              <Text>Technologies</Text>
              <StaticImage
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100px',
                  maxHeight: '100px'
                }}
                alt="Amazon Web Services Logo"
                src={'../../images/aws-logo.png'}
              />
              <StaticImage
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100px',
                  maxHeight: '100px'
                }}
                alt="Angular Logo"
                src={'../../images/angular-logo.png'}
              />
              <StaticImage
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100px',
                  maxHeight: '100px'
                }}
                alt="Node Logo"
                src={'../../images/node-logo.svg'}
              />
              <StaticImage
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100px',
                  maxHeight: '100px'
                }}
                alt="VueJS Logo"
                src={'../../images/vue-logo.png'}
              />
              <StaticImage
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100px',
                  maxHeight: '100px'
                }}
                alt="C# Logo"
                src={'../../images/c-sharp-logo.png'}
              />
            </Flex>
          </Flex>
          <StaticImage
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '150px',
              maxHeight: '150px'
            }}
            alt="Digital Management LLC Logo"
            src={'../../images/dmi-logo.png'}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default DmiSection;
