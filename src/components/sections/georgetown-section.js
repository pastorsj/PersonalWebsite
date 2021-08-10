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
      <Flex maxWidth="100vw" flexDirection="column" marginTop="2rem" marginBottom="2rem">
        <Flex flexDirection="column" marginBottom="2rem">
          <Heading>Georgetown University</Heading>
          <Text>August 2021 - est December 2022</Text>
        </Flex>
        <Flex>
          <Flex flexDirection="column" maxWidth="60vw" marginRight="2rem">
            <Text>
              I am attending Georgetown University's Masters Program in Data Science after 4 years at DMI. Data Science
              is used everywhere, from Health Care and Sports to Fraud Prevention and Transportation. The possibilities
              are endless and I feel like the next best step in my career is a Masters degree in Data Science.
            </Text>
            <br />
            <Text>
              I will be looking towards an internship in Data Science starting in the Summer of 2022 and a full time job
              starting at the beginning of 2023. My Linked-In and Resume are below.
            </Text>
          </Flex>
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
        </Flex>
      </Flex>
    </div>
  );
};

export default GeorgetownSection;
