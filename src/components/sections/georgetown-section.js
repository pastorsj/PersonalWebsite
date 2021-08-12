import * as React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const GeorgetownSection = () => {
  return (
    <div
      style={{
        gridArea: '1/1',
        position: 'relative',
        placeItems: 'center',
        backgroundColor: '#DDDDDF',
        display: 'grid',
        color: '#041E42',
        fontFamily: 'dosis'
      }}
    >
      <Flex maxWidth="100vw" flexDirection="column" margin="4rem 1rem">
        <Flex flexDirection="column" marginBottom="2rem">
          <Heading>Georgetown University</Heading>
          <Text fontSize="md" fontWeight="bold">
            Candidate for MS in Data Science and Analytics
          </Text>
          <Text fontStyle="italic">Expected Graduation December, 2022</Text>
        </Flex>
        <Flex flexDirection="row" flexWrap="wrap">
          <Flex flexDirection="column" maxWidth="60vw" marginRight="2rem" marginBottom="1rem">
            <Text>
              Starting in Fall 2021, I will be attending Georgetown University for an 18-month Masters of Science in
              Data Science & Analytics. After four years as a software engineering consulant at Digital Management LLC
              (DMI), I am convinced that a masters in data science will significantly increase my technical and
              managerial skills.
            </Text>
            <br />
            <Text>
              I will be seeking an internship in Data Science for Summer of 2022 and a full-time position to commence in
              early 2023. My LinkedIn and resume are linked in the footer.
            </Text>
          </Flex>
          <Flex margin="auto">
            <a href="https://analytics.georgetown.edu/">
              <StaticImage
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '150px',
                  maxHeight: '150px'
                }}
                alt="Georgetown University Logo"
                src={'../../images/georgetown-logo.png'}
              />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default GeorgetownSection;
