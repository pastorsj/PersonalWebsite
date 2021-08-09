import * as React from 'react';
import { Flex, Box, Spacer, Heading, Center, Link } from '@chakra-ui/react';
import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Flex h="8vh">
        <Center w="100%">
          <Heading textAlign="center" fontSize="2.5rem" fontFamily="WindSong">
            Sam Pastoriza
          </Heading>
        </Center>
      </Flex>
      <Flex h="7vh">
        <Spacer />
        <Center>
          <Link mr="4">Home</Link>
          <Link mr="4">About</Link>
        </Center>
      </Flex>
      <Flex>{children}</Flex>
    </div>
  );
};

export default Layout;
