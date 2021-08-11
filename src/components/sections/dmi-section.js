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
      <Flex maxWidth="100vw" flexDirection="column" margin="2rem 1rem">
        <Flex flexDirection="column" marginBottom="2rem">
          <Heading>Digital Management LLC</Heading>
          <Text fontStyle="italic">August 2017 - August 2021</Text>
        </Flex>
        <Flex flexDirection="row" flexWrap="wrap">
          <Flex flexDirection="column" maxWidth="60vw" marginRight="2rem" marginBottom="1rem">
            <Text>
              I served as a Senior Software Consultant at DMI specializing in commercial web application development. I
              became an invaluable technical lead, designing and executing digital, high-performance solutions for
              various companies across the United States.
            </Text>
            <br />
            <Flex flexDirection="column">
              <Text fontSize="3xl">Experience</Text>
              <Flex flexDirection="row" flexWrap="wrap">
                <Flex flexDirection="column" justifyContent="center">
                  <Text fontSize="xl">Customer Engagements</Text>
                  <Flex flexDirection="row" flexWrap="wrap">
                    <a href="https://www.allisontransmission.com/">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxHeight: '100px',
                          maxWidth: '150px',
                          margin: '1rem'
                        }}
                        alt="Allison Transmission Logo"
                        src={'../../images/allison-transmission-logo.jpeg'}
                      />
                    </a>
                    <a href="https://www.libertymutual.com/">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '100px',
                          maxHeight: '100px',
                          margin: '1rem'
                        }}
                        alt="Liberty Mutual Logo"
                        src={'../../images/liberty-mutual-logo.png'}
                      />
                    </a>
                    <a href="https://www.karglobal.com/">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '100px',
                          maxHeight: '100px',
                          margin: '1rem'
                        }}
                        alt="KAR Global Logo"
                        src={'../../images/kar-global-logo.png'}
                      />
                    </a>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <Text fontSize="xl">Technologies</Text>
                  <Flex flexDirection="row" flexWrap="wrap">
                    <a href="https://aws.amazon.com/">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '100px',
                          maxHeight: '100px',
                          margin: '1rem'
                        }}
                        alt="Amazon Web Services Logo"
                        src={'../../images/aws-logo.png'}
                      />
                    </a>
                    <a href="https://angular.io/">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '100px',
                          maxHeight: '100px',
                          margin: '1rem'
                        }}
                        alt="Angular Logo"
                        src={'../../images/angular-logo.png'}
                      />
                    </a>
                    <a href="https://nodejs.org/en/">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '160px',
                          maxHeight: '100px',
                          margin: '1rem'
                        }}
                        alt="Node Logo"
                        src={'../../images/node-logo.svg'}
                      />
                    </a>
                    <a href="https://vuejs.org/">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '120px',
                          maxHeight: '100px',
                          margin: '1rem'
                        }}
                        alt="VueJS Logo"
                        src={'../../images/vue-logo.png'}
                      />
                    </a>
                    <a href="https://docs.microsoft.com/en-us/dotnet/csharp/">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '100px',
                          maxHeight: '100px',
                          margin: '1rem'
                        }}
                        alt="C# Logo"
                        src={'../../images/c-sharp-logo.png'}
                      />
                    </a>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex margin="auto">
            <a href="https://dminc.com/">
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
            </a>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default DmiSection;
