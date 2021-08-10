import * as React from 'react';
import { Flex, Spacer, Heading, Center, Link } from '@chakra-ui/react';
import Footer from './footer';

const Layout = ({ pageTitle, children }) => {
  return (
    <div style={{ height: '100vh' }}>
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
          <Link mr="4" href="http://sampastoriza.com" target="_blank">
            Home
          </Link>
          <Link mr="4" href="http://portfolio.sampastoriza.com" target="_blank">
            Portfolio
          </Link>
          <Link mr="4" href="http://blog.sampastoriza.com" target="_blank">
            Blog
          </Link>
        </Center>
      </Flex>
      <Flex>{children}</Flex>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
