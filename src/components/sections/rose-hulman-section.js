import * as React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const RoseHulmanSection = () => {
  return (
    <div
      style={{
        gridArea: '3/1',
        position: 'relative',
        placeItems: 'center',
        backgroundColor: 'white',
        display: 'grid',
        fontFamily: 'dosis'
      }}
    >
      <Flex maxWidth="100vw" flexDirection="column" marginTop="2rem" marginBottom="2rem">
        <Flex flexDirection="column" marginBottom="2rem">
          <Heading>Rose-Hulman Institute of Technology</Heading>
          <Text>August 2013 - May 2017</Text>
        </Flex>
        <Flex>
          <Flex flexDirection="column" maxWidth="60vw">
            <Text>
              I attended Rose-Hulman Institute of Technology with a keen interest in software. I double majored in
              Software Engineering and Computer Science and double minored in Economics and Mathematics. While working
              in software department, I primarily focused on web application development, which led to my first job in
              software consultanting at DMI developing commerical web applications.
            </Text>
            <br />
            <Text>
              While at Rose-Hulman, I was a 4 year varsity athlete playing golf. I was recognized by the Golf Coaches
              Associated of America as an All America Scholar in 2016. Golf has always been and continues to be a
              passion that I share with as many people as possible.
            </Text>
          </Flex>
          <StaticImage
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '150px',
              maxHeight: '150px'
            }}
            alt="Rose-Hulman Logo"
            src={'../../images/rose-hulman-logo.png'}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default RoseHulmanSection;
