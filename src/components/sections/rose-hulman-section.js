import * as React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const RoseHulmanSection = () => {
  return (
    <div
      style={{
        gridArea: '6/1',
        position: 'relative',
        placeItems: 'center',
        backgroundColor: 'white',
        display: 'grid',
        fontFamily: 'dosis'
      }}
    >
      <Flex maxWidth="100vw" flexDirection="column" margin="2rem 1rem">
        <Flex flexDirection="column" marginBottom="2rem">
          <Heading size="3xl">Rose-Hulman Institute of Technology</Heading>
          <Text fontSize="md" fontWeight="bold">
            Bachelors of Science in Software Engineering and Computer Science
          </Text>
          <Text fontStyle="italic">August 2013 - May 2017</Text>
        </Flex>
        <Flex flexDirection="row" flexWrap="wrap">
          <Flex
            flexDirection="column"
            maxWidth="60vw"
            marginRight="2rem"
            marginBottom="1rem"
            minWidth={['100%', '100%', 'initial']}
          >
            <Text>
              While attending the Rose-Hulman Institute of Technology, I developed a keen interest in software and
              digital solutions. I double-majored in Software Engineering and Computer Science and had two minors in
              Economics and Mathematics and graduated Magna Cum Laude. I also worked part-time in the Rose-Hulman’s
              software department and focused primarily on web application development.
            </Text>
            <br />
            <Text>
              While at Rose-Hulman, I was also student-athlete on the Varsity Golf team. I proudly competed for my
              university for 4 years. I represented Rose-Hulman at the conference championships 3 times, played 65
              competitive rounds, and finished with an average of 79.4. I was recognized by the Golf Coaches Association
              of America as an All America Scholar in 2016. Golf was and continues to be a great passion in my life.
            </Text>
          </Flex>
          <Flex margin="auto">
            <a href="https://www.rose-hulman.edu/">
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
            </a>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default RoseHulmanSection;
