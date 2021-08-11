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
          <Text fontStyle="italic">August 2021 - Present</Text>
        </Flex>
        <Flex flexDirection="row" flexWrap="wrap">
          <Flex flexDirection="column" maxWidth="60vw" marginRight="2rem" marginBottom="1rem">
            <Text>
              Starting in Fall 2021, I will be attending Georgetown University for an 18-month Masters of Science in
              Data Science & Analytics. After four hands-on years at DMI, I am excited to formally expand my knowledge
              and to add to new skills to my repertoire.
            </Text>
            <br />
            <Text>
              Data Science is used everywhere, from Health Care and Sports to Fraud Prevention to Transportation. The
              possibilities for applications of Data Science are endless and I am certain that this degree is a
              fantastic next step to solidifying my abilities in this field.
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
