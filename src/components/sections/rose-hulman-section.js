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
              While attending the Rose-Hulman Institute of Technology, I developed a keen interest in software and
              digital solutions. I double-majored in Software Engineering and Computer Science and had two minors in
              Economics and Mathematics. I also worked part-time in the Rose-Hulman’s software department and focused
              primarily on web application development. This led to my first position post-graduation in Software
              Consulting for DMI, developing commercial web applications.
            </Text>
            <br />
            <Text>
              While at Rose-Hulman, I was also student-athlete on the Varsity Golf team. I proudly competed for my
              university for 4 years. I was recognized by the Golf Coaches Association of America as an All America
              Scholar in 2016. Golf was and continues to be a great passion in my life.
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
